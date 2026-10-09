import {useEffect,useRef,useState} from 'react';
import {RotateCcw,Check} from 'lucide-react';
import {challenges,challengeIndex,wheelTarget} from './wheelPuzzleLogic';
import {mascotImage} from './gameLogic';
import './wheel-puzzle.css';
export default function ChallengeWheel({ar,onComplete}:{ar:boolean;onComplete?:()=>void}){
 const [phase,setPhase]=useState<'ready'|'spin'|'challenge'|'done'>('ready');
 const [selected,setSelected]=useState(0);const [rotation,setRotation]=useState(0);const [finished,setFinished]=useState(0);
 const action=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(phase!=='spin')return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timer=setTimeout(()=>setPhase('challenge'),reduced?0:1800);
  return()=>clearTimeout(timer);
 },[phase]);
 useEffect(()=>{if(phase==='challenge'||phase==='done')action.current?.focus();},[phase]);
 function spin(){if(phase!=='ready')return;const index=challengeIndex(Math.random());setSelected(index);setRotation(value=>wheelTarget(value,index));setPhase('spin');}
 function reset(){setFinished(0);setRotation(0);setPhase('ready');}
 function complete(){if(phase!=='challenge')return;const next=finished+1;setFinished(next);setPhase(next===3?'done':'ready');if(next===3)onComplete?.();}
 const challenge=challenges[selected];
 const message=phase==='done'?(ar?'ثلاثة تحديات وثلاث ابتسامات! حصلت على شارة نجم المرح.':'Three challenges, three big smiles! You earned the Fun star badge.'):
 phase==='challenge'?(ar?challenge.ar:challenge.en):phase==='spin'?(ar?'العجلة تختار تحديك…':'The wheel is choosing your challenge…'):(ar?'أدر العجلة. جرّب التحدي، ثم اضغط «أنهيت التحدي».':'Spin, give the challenge a go, then tap “Challenge done”.');
 return <div className="crew-mini-game challenge-wheel-game"><div className="game-heading"><div><h2>{ar?'عجلة المرح':'Spin a little fun'}</h2><p>{ar?'ثلاثة تحديات خفيفة مع الفريق. العب بمفردك أو مع العائلة، وعلى راحتك.':'Three playful crew challenges. Try them solo or with your family, at your own pace.'}</p></div><button type="button" className="game-reset" onClick={reset}><RotateCcw size={18}/>{ar?'من جديد':'Restart'}</button></div>
  <p className="game-status">{ar?`${finished} من 3 تحديات`:`${finished} of 3 challenges`}</p>
  <div className="wheel-play-layout"><div className="wheel-instrument" aria-hidden="true"><span className="wheel-pointer"/><div className="challenge-wheel" style={{transform:`rotate(${rotation}deg)`,transition:phase==='spin'?undefined:'none'}}>{challenges.map((c,i)=><span key={i} className="wheel-sector-label" style={{transform:`rotate(${i*60+30}deg)`}}><span>{ar?c.labelAr:c.label}</span></span>)}</div><div className="wheel-hub"><img src={mascotImage('Pops')} alt=""/></div></div>
  <div className="wheel-challenge"><img src={mascotImage(phase==='challenge'?challenge.mascot:'Loopy')} alt="" className="challenge-mascot"/><p role="status" aria-live="polite" aria-atomic="true">{message}</p>
   {phase==='ready'||phase==='spin'?<button ref={action} type="button" className="kiddo-action kiddo-action-red" onClick={spin} disabled={phase==='spin'}>{phase==='spin'?(ar?'تدور…':'Spinning…'):(ar?'أدر العجلة':'Spin the wheel')}</button>:phase==='challenge'?<button ref={action} type="button" className="kiddo-action kiddo-action-red" onClick={complete}><Check size={18}/>{ar?'أنهيت التحدي':'Challenge done'}</button>:<button ref={action} type="button" className="kiddo-action kiddo-action-red" onClick={reset}>{ar?'العب مرة أخرى':'Play again'}</button>}
  </div></div><p className="game-help">{ar?'يمكنك تنفيذ التحديات وأنت جالس. لا يوجد مؤقت؛ خذ وقتك واستمتع.':'Every challenge can be done sitting down. There’s no timer; take your time and enjoy.'}</p></div>;
}
