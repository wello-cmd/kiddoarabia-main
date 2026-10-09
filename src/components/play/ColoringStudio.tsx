import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import { Brush, Check, Download, Eraser, RotateCcw, Undo2 } from 'lucide-react';
import { canvasPoint, decodeDrawing, drawingKey, DRAWING_HEIGHT as H, DRAWING_WIDTH as W, lineAlpha, remember, saveDrawing } from './coloringHelpers';
import type { Point, Stroke } from './coloringHelpers';
import './coloring-studio.css';

const mascots = [{id:'pops',en:'Pops',ar:'بوبس'}, {id:'loopy',en:'Loopy',ar:'لوبي'}, {id:'buzz',en:'Buzz',ar:'باز'}];
const palette = [ ['#e51b24','Kiddo red','أحمر كيدو'], ['#ffffff','White','أبيض'], ['#9f6538','Brown','بني'], ['#ffca49','Yellow','أصفر'], ['#f283b4','Pink','وردي'], ['#6db54c','Green','أخضر'], ['#3484bd','Blue','أزرق'], ['#9563bd','Purple','بنفسجي'], ['#f1833b','Orange','برتقالي'], ['#20202c','Charcoal','فحمي'] ];
function drawStroke(ctx: CanvasRenderingContext2D, stroke: Stroke) {
  ctx.globalCompositeOperation = stroke.eraser ? 'destination-out' : 'source-over';
  ctx.strokeStyle = stroke.color; ctx.fillStyle = stroke.color; ctx.lineWidth = stroke.size; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const first = stroke.points[0];
  if (stroke.points.length === 1) { ctx.beginPath(); ctx.arc(first.x, first.y, stroke.size / 2, 0, Math.PI*2); ctx.fill(); }
  else { ctx.beginPath(); ctx.moveTo(first.x,first.y); stroke.points.slice(1).forEach(p=>ctx.lineTo(p.x,p.y)); ctx.stroke(); }
  ctx.globalCompositeOperation = 'source-over';
}

export default function ColoringStudio({ar, onComplete}: {ar:boolean; onComplete?:()=>void}) {
  const [mascot, setMascot] = useState('pops');
  const [color, setColor] = useState(palette[0][0]);
  const [size, setSize] = useState(24);
  const [eraser, setEraser] = useState(false);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [retry, setRetry] = useState(0);
  const [storageOkay, setStorageOkay] = useState(true);
  const [hasColor, setHasColor] = useState(false);
  const [undoCount, setUndoCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [notice, setNotice] = useState('');
  const [cursor, setCursor] = useState<Point>({x:W/2,y:H/2});
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const paint = useRef<HTMLCanvasElement|null>(null);
  const outline = useRef<HTMLCanvasElement|null>(null);
  const strokes = useRef<Stroke[]>([]);
  const history = useRef<Stroke[][]>([]);
  const active = useRef<{pointer:number; stroke:Stroke}|null>(null);
  const drawings = useRef<Record<string,Stroke[]>>({});
  const t = (en:string, a:string) => ar ? a : en;

  const renderDrawing = (draft?:Stroke) => {
    const ctx = paint.current?.getContext('2d'); const visible = canvas.current?.getContext('2d');
    if (!ctx || !visible || !outline.current || !paint.current) return;
    ctx.clearRect(0,0,W,H); strokes.current.forEach(s=>drawStroke(ctx,s)); if(draft) drawStroke(ctx,draft);
    visible.clearRect(0,0,W,H); visible.fillStyle='#fff'; visible.fillRect(0,0,W,H);
    visible.drawImage(paint.current,0,0); visible.drawImage(outline.current,0,0);
  };
  const persist = () => {
    drawings.current[mascot] = strokes.current;
    try { setStorageOkay(saveDrawing(window.localStorage,mascot,strokes.current)); } catch {setStorageOkay(false);}
  };
  const commit = (next:Stroke[]) => {
    history.current = remember(history.current,strokes.current); strokes.current = next;
    setUndoCount(history.current.length); setHasColor(next.some(s=>!s.eraser)); setFinished(false); setNotice(''); renderDrawing(); persist();
  };
  useEffect(() => {
    let cancelled = false; setReady(false); setLoadError(false); setFinished(false); setNotice(''); active.current=null;
    history.current=[]; setUndoCount(0);
    let saved = drawings.current[mascot];
    if (!saved) {try {saved=decodeDrawing(window.localStorage.getItem(drawingKey(mascot)));} catch {saved=[];setStorageOkay(false);} }
    strokes.current=saved; setHasColor(saved.some(s=>!s.eraser));
    const image = new Image();
    image.onload = () => {
      if(cancelled) return;
      try {
        const layer = document.createElement('canvas'); layer.width=W; layer.height=H;
        const ctx=layer.getContext('2d'); if(!ctx) throw new Error('Canvas unavailable');
        ctx.drawImage(image,0,0,W,H); const pixels=ctx.getImageData(0,0,W,H);
        for(let i=0;i<pixels.data.length;i+=4) {const alpha=lineAlpha(pixels.data[i],pixels.data[i+1],pixels.data[i+2]); pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=0;pixels.data[i+3]=alpha;}
        ctx.putImageData(pixels,0,0); outline.current=layer;
        const colors=document.createElement('canvas');colors.width=W;colors.height=H; paint.current=colors;
        renderDrawing();setReady(true);
      } catch {setLoadError(true);}
    };
    image.onerror=()=>{if(!cancelled)setLoadError(true);};
    image.src=`/generated/coloring/${mascot}.webp`;
    return()=>{cancelled=true;};
  // Image loading deliberately initializes the canvas only when the selected page changes.
  },[mascot,retry]);

  const point = (event:PointerEvent<HTMLCanvasElement>) => canvasPoint(event.clientX,event.clientY,event.currentTarget.getBoundingClientRect(),W,H);
  const endStroke = (event:PointerEvent<HTMLCanvasElement>) => {
    if(!active.current || active.current.pointer!==event.pointerId) return;
    const stroke=active.current.stroke; active.current=null; commit([...strokes.current,stroke]);
    if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const keyboard = (event:KeyboardEvent<HTMLCanvasElement>) => {
    if(!ready)return;
    const directions:Record<string,Point>={ArrowLeft:{x:-16,y:0},ArrowRight:{x:16,y:0},ArrowUp:{x:0,y:-16},ArrowDown:{x:0,y:16}};
    if(directions[event.key]) {event.preventDefault();const d=directions[event.key]; const next={x:Math.max(0,Math.min(W,cursor.x+d.x)),y:Math.max(0,Math.min(H,cursor.y+d.y))};setCursor(next);
      if(event.shiftKey && strokes.current.length<600)commit([...strokes.current,{color,size,eraser,points:[cursor,next]}]);
    } else if(event.key==='Enter'||event.key===' ') {event.preventDefault();if(strokes.current.length<600)commit([...strokes.current,{color,size,eraser,points:[cursor]}]);}
  };
  const undo = () => {const previous=history.current.pop();if(!previous)return;strokes.current=previous;setUndoCount(history.current.length);setHasColor(previous.some(s=>!s.eraser));setFinished(false);renderDrawing();persist();};
  const download = () => {
    try {canvas.current?.toBlob(blob=>{if(!blob){setNotice(t('Your picture could not be downloaded. Try again.','تعذر تحميل رسمتك. حاول مرة أخرى.'));return;}const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`kiddo-${mascot}-my-colors.png`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'image/png');}
    catch {setNotice(t('Your picture could not be downloaded. Try again.','تعذر تحميل رسمتك. حاول مرة أخرى.'));}
  };

  return <section className="coloring-studio" aria-labelledby="coloring-studio-title" dir={ar?'rtl':'ltr'}>
    <div className="coloring-studio-heading"><div><h2 id="coloring-studio-title">{t('Make a little masterpiece.','ارسم تحفتك الصغيرة.')}</h2><p>{t('Pick a friend, choose your colors and let your imagination lead.','اختر صديقك وألوانك، ودع خيالك يقودك.')}</p></div><span className="coloring-studio-note">{t('Your art, your colors','رسمتك، ألوانك')}</span></div>
    <div className="coloring-studio-mascots" role="group" aria-label={t('Choose a coloring page','اختر صفحة تلوين')}>{mascots.map(m=><button key={m.id} type="button" aria-pressed={mascot===m.id} onClick={()=>setMascot(m.id)}><img src={`/generated/coloring/${m.id}.webp`} alt=""/><span>{ar?m.ar:m.en}</span>{mascot===m.id&&<Check size={17} aria-hidden="true"/>}</button>)}</div>
    <div className="coloring-studio-workspace"><div className="coloring-studio-tools">
      <fieldset><legend>{t('Your colors','ألوانك')}</legend><div className="coloring-studio-palette">{palette.map(([hex,en,a])=><button type="button" key={hex} style={{backgroundColor:hex}} aria-label={ar?a:en} aria-pressed={color===hex&&!eraser} onClick={()=>{setColor(hex);setEraser(false);}}>{color===hex&&!eraser&&<Check size={20} color={hex==='#ffffff'||hex==='#ffca49'?'#20202c':'#fff'} aria-hidden="true"/>}</button>)}</div></fieldset>
      <div className="coloring-studio-modes" role="group" aria-label={t('Drawing tool','أداة الرسم')}><button type="button" aria-pressed={!eraser} onClick={()=>setEraser(false)}><Brush size={18}/>{t('Brush','فرشاة')}</button><button type="button" aria-pressed={eraser} onClick={()=>setEraser(true)}><Eraser size={18}/>{t('Eraser','ممحاة')}</button></div>
      <label className="coloring-studio-size">{t('Brush size','حجم الفرشاة')}<output>{size}</output><input type="range" min="4" max="64" step="4" value={size} onChange={e=>setSize(Number(e.target.value))}/></label>
      <div className="coloring-studio-edits"><button type="button" onClick={undo} disabled={!ready||!undoCount}><Undo2 size={18}/>{t('Undo','تراجع')}</button><button type="button" disabled={!ready||!strokes.current.length} onClick={()=>commit([])}><RotateCcw size={18}/>{t('Start fresh','ابدأ من جديد')}</button></div>
      <p id="coloring-studio-help" className="coloring-studio-help">{t('Draw with a finger or mouse. Keyboard: focus the picture, move with arrow keys, press Enter to paint a dot, or hold Shift + arrows to draw.','ارسم بإصبعك أو بالفأرة. بلوحة المفاتيح: انتقل إلى الرسم واستخدم الأسهم للتحرك وEnter لرسم نقطة، أو Shift مع الأسهم للرسم.')}</p>
    </div><div className="coloring-studio-paper"><canvas ref={canvas} width={W} height={H} tabIndex={ready?0:-1} aria-label={t(`${mascots.find(m=>m.id===mascot)?.en} coloring canvas`,'لوحة تلوين '+mascots.find(m=>m.id===mascot)?.ar)} aria-describedby="coloring-studio-help" onFocus={()=>setKeyboardFocus(true)} onBlur={()=>setKeyboardFocus(false)} onKeyDown={keyboard}
      onPointerDown={e=>{if(!ready||active.current||e.button!==0||strokes.current.length>=600)return;e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);active.current={pointer:e.pointerId,stroke:{color,size,eraser,points:[point(e)]}};renderDrawing(active.current.stroke);}}
      onPointerMove={e=>{if(!active.current||active.current.pointer!==e.pointerId)return;const pts=active.current.stroke.points;if(pts.length<4096)pts.push(point(e));renderDrawing(active.current.stroke);}}
      onPointerUp={endStroke} onPointerCancel={endStroke} onLostPointerCapture={endStroke}/>
      {keyboardFocus&&ready&&<span className="coloring-studio-cursor" style={{left:`${cursor.x/W*100}%`,top:`${cursor.y/H*100}%`}} aria-hidden="true"/>}
      {!ready&&<div className="coloring-studio-loading" role="status">{loadError?<><p>{t('The coloring page could not load.','تعذر تحميل صفحة التلوين.')}</p><button type="button" onClick={()=>setRetry(v=>v+1)}>{t('Try again','حاول مرة أخرى')}</button></>:t('Getting your page ready…','نجهز صفحتك…')}</div>}
    </div></div>
    <div className="coloring-studio-footer"><p role="status">{notice||(!storageOkay?t('Saving is unavailable on this device. Download your picture to keep it.','الحفظ غير متاح على هذا الجهاز. حمّل رسمتك للاحتفاظ بها.'):finished?t('Beautiful work! Your picture is ready to keep.','عمل جميل! رسمتك جاهزة للاحتفاظ بها.'):t('Your drawings stay on this device.','تبقى رسوماتك على هذا الجهاز.'))}{strokes.current.length>=600&&' '+t('Your page is full. Download it or undo a stroke to keep drawing.','الصفحة ممتلئة. حمّلها أو تراجع عن خطوة لمواصلة الرسم.')}</p><div><button type="button" disabled={!ready||!hasColor} className="coloring-studio-finish" onClick={()=>{setFinished(true);onComplete?.();}}><Check size={18}/>{t('My picture is finished','انتهيت من رسمتي')}</button><button type="button" disabled={!ready} onClick={download}><Download size={18}/>{t('Download PNG','حمّل PNG')}</button></div></div>
  </section>;
}
