import {useRef,useState,type KeyboardEvent} from 'react';
import {RotateCcw,Eye} from 'lucide-react';
import {scramblePuzzle,slideTile,puzzleSolved} from './wheelPuzzleLogic';
import {mascotImage} from './gameLogic';
import './wheel-puzzle.css';
export default function MascotPuzzle({ar,onComplete}:{ar:boolean;onComplete?:()=>void}){
 const [board,setBoard]=useState(scramblePuzzle);const [moves,setMoves]=useState(0);const [preview,setPreview]=useState(false);const [moved,setMoved]=useState<number|null>(null);
 const boardRef=useRef<HTMLDivElement>(null);const done=puzzleSolved(board);const empty=board.indexOf(0);
 function slide(index:number){if(done)return;const next=slideTile(board,index);if(next===board)return;setBoard(next);setMoves(n=>n+1);setMoved(board[index]);if(puzzleSolved(next))onComplete?.();}
 function keyboard(event:KeyboardEvent<HTMLDivElement>){
  const offsets:Record<string,number>={ArrowLeft:1,ArrowRight:-1,ArrowUp:3,ArrowDown:-3};
  if(!(event.key in offsets))return;event.preventDefault();const target=empty+offsets[event.key];
  if((event.key==='ArrowLeft'||event.key==='ArrowRight')&&Math.floor(target/3)!==Math.floor(empty/3))return;slide(target);
 }
 function reset(){setBoard(scramblePuzzle());setMoves(0);setMoved(null);}
 const status=done?(ar?'اكتملت صورة بوبس! أحسنت، حصلت على شارة بطل الأحجية.':'Pops is back together! You earned the Puzzle hero badge.'):
 moved!==null?(ar?`تحرّكت القطعة ${moved}. الفراغ في الصف ${Math.floor(empty/3)+1}، العمود ${empty%3+1}.`:`Tile ${moved} moved. Empty space: row ${Math.floor(empty/3)+1}, column ${empty%3+1}.`):(ar?'اضغط قطعة بجوار الفراغ لتحريكها. رتّب الأرقام من 1 إلى 8.':'Tap a tile next to the empty space. Put numbers 1 to 8 in order.');
 return <div className="crew-mini-game mascot-puzzle-game"><div className="game-heading"><div><h2>{ar?'أحجية بوبس':'Piece Pops together'}</h2><p>{ar?'حرّك القطع لتعيد الصورة كاملة. اترك الفراغ في أسفل اليمين.':'Slide the pieces to rebuild the picture. Leave the empty space at the bottom right.'}</p></div><button type="button" className="game-reset" onClick={reset}><RotateCcw size={18}/>{ar?'اخلط مرة أخرى':'Shuffle again'}</button></div>
  <p className="game-status">{ar?`${moves} حركة`:`${moves} moves`}</p><p className="crew-game-message" role="status" aria-live="polite" aria-atomic="true">{status}</p>
  <div className="puzzle-play-layout"><div ref={boardRef} className={`mascot-puzzle-board ${done?'puzzle-complete':''}`} dir="ltr" role="group" tabIndex={0} aria-label={ar?'أحجية القطع المتحركة':'Sliding puzzle'} onKeyDown={keyboard}>{board.map((tile,index)=>{
   const canSlide=!done&&slideTile(board,index)!==board;const row=Math.floor(index/3)+1;const column=index%3+1;
   return tile===0?<div className="puzzle-empty" key="empty" aria-label={ar?`فراغ، الصف ${row}، العمود ${column}`:`Empty, row ${row}, column ${column}`}>{done&&<img src={mascotImage('Pops')} alt=""/>}</div>:<button key={tile} type="button" disabled={!canSlide} aria-label={ar?`${canSlide?'حرّك القطعة':'القطعة'} ${tile}، الصف ${row}، العمود ${column}`:`${canSlide?'Slide tile':'Tile'} ${tile}, row ${row}, column ${column}`} onClick={()=>slide(index)} className={`puzzle-tile ${canSlide?'puzzle-movable':''}`} style={{backgroundImage:`url(${mascotImage('Pops')})`,backgroundPosition:`${((tile-1)%3)*50}% ${Math.floor((tile-1)/3)*50}%`}}><span>{tile}</span></button>;
  })}</div><div className="puzzle-reference"><button type="button" className="game-reset" onClick={()=>setPreview(value=>!value)} aria-expanded={preview} aria-controls="pops-puzzle-reference"><Eye size={18}/>{preview?(ar?'إخفاء الصورة':'Hide full picture'):(ar?'عرض الصورة الكاملة':'Show full picture')}</button><div id="pops-puzzle-reference" hidden={!preview}><img src={mascotImage('Pops')} alt={ar?'صورة بوبس الكاملة':'Pops full picture'}/></div><p className="game-help">{ar?'تتحرك القطع ذات الإطار الأحمر فقط. استخدم Tab وEnter أو الأسهم لتحريك القطع نحو الفراغ.':'Only tiles with a red outline can move. Use Tab and Enter, or the arrow keys to slide tiles into the gap.'}</p></div></div></div>;
}
