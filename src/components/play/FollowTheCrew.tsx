import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { crew, mascotImage, randomCrewIndex, sequenceAnswer } from './gameLogic';
import './more-games.css';
type Phase = 'ready' | 'show' | 'input' | 'success' | 'wrong' | 'done';
const makeSequence = () => Array.from({ length: 3 }, randomCrewIndex);
export default function FollowTheCrew({ ar, onComplete }: { ar: boolean; onComplete?:()=>void }) {
  const [sequence, setSequence] = useState(makeSequence);
  const [phase, setPhase] = useState<Phase>('ready');
  const [level, setLevel] = useState(1);
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const [replay, setReplay] = useState(0);
  const board = useRef<HTMLDivElement>(null);
  const action = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (phase !== 'show') return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    setActive(null); setShown(0);
    sequence.forEach((item, i) => {
      timers.push(setTimeout(() => { setActive(item); setShown(i + 1); }, 450 + i * 1100));
      timers.push(setTimeout(() => setActive(null), 1250 + i * 1100));
    });
    timers.push(setTimeout(() => { setPosition(0); setPhase('input'); }, 450 + sequence.length * 1100));
    return () => timers.forEach(clearTimeout);
  }, [phase, sequence, replay]);
  useEffect(() => {
    if (phase === 'input') board.current?.querySelector<HTMLButtonElement>('button')?.focus();
    if (phase === 'success' || phase === 'wrong' || phase === 'done') action.current?.focus();
  }, [phase]);
  function watch() { setPosition(0); setReplay(value => value + 1); setPhase('show'); }
  function reset() { setSequence(makeSequence()); setLevel(1); setPosition(0); setActive(null); setPhase('ready'); }
  function choose(index: number) {
    if (phase !== 'input') return;
    const result = sequenceAnswer(sequence, position, index);
    if (result === 'wrong') setPhase('wrong');
    else if (result === 'complete') setPhase(level === 5 ? 'done' : 'success');
    else setPosition(value => value + 1);
  }
  const message = phase === 'ready' ? (ar ? 'ابدأ وشاهد ترتيب الشخصيات، ثم كرره.' : 'Start, watch the crew, then repeat their order.')
    : phase === 'show' ? (ar ? `شاهد: ${shown} من ${sequence.length}${active !== null ? ` · ${crew[active]}` : ''}` : `Watch: ${shown} of ${sequence.length}${active !== null ? ` · ${crew[active]}` : ''}`)
    : phase === 'input' ? (ar ? `دورك! اختر الشخصية ${position + 1} من ${sequence.length}.` : `Your turn! Choose mascot ${position + 1} of ${sequence.length}.`)
    : phase === 'wrong' ? (ar ? 'ليس هذا الترتيب. شاهد مرة أخرى وحاول!' : 'A little mix-up. Watch again and have another go!')
    : phase === 'success' ? (ar ? 'أحسنت! هل أنت جاهز لترتيب أطول؟' : 'You remembered! Ready for a longer sequence?')
    : (ar ? 'رائع! أكملت المستويات الخمسة.' : 'Amazing memory! You finished all five levels.');
  useEffect(()=>{if(phase === 'done')onComplete?.();},[phase,onComplete]);
  return <div className="crew-mini-game"><div className="game-heading"><div><h2>{ar ? 'اتبع الفريق' : 'Follow the crew'}</h2><p>{ar ? 'شاهد الشخصيات المضيئة واضغط عليها بنفس الترتيب. خمسة مستويات بدون مؤقت.' : 'Watch the highlighted mascots. Tap them in the same order. Five levels, no time limit.'}</p></div><button className="game-reset" onClick={reset}><RotateCcw size={18}/>{ar ? 'من جديد' : 'Restart'}</button></div>
    <p className="game-status">{ar ? `المستوى ${level} من 5 · ${sequence.length} شخصيات` : `Level ${level} of 5 · ${sequence.length} mascots`}</p><p className="crew-game-message" role="status" aria-live="polite" aria-atomic="true">{message}</p>
    <div className="crew-sequence-board" ref={board}>{crew.map((name, index) => <button key={name} className={`crew-choice ${active === index ? 'crew-choice-active' : ''}`} disabled={phase !== 'input'} onClick={() => choose(index)} aria-label={name}><img src={mascotImage(name)} alt=""/><span>{name}</span>{active === index && <span className="crew-watch-marker">{ar ? 'شاهد' : 'Watch'}</span>}</button>)}</div>
    <div className="crew-game-actions">{(phase === 'ready' || phase === 'wrong' || phase === 'input') && <button ref={action} className="kiddo-action kiddo-action-red" onClick={watch}>{phase === 'ready' ? (ar ? 'ابدأ اللعبة' : 'Start playing') : (ar ? 'شاهد الترتيب مرة أخرى' : 'Replay sequence')}</button>}{phase === 'success' && <button ref={action} className="kiddo-action kiddo-action-red" onClick={() => { setSequence(items => [...items, randomCrewIndex()]); setLevel(value => value + 1); setPhase('show'); }}>{ar ? 'المستوى التالي' : 'Next level'}</button>}{phase === 'done' && <button ref={action} className="kiddo-action kiddo-action-red" onClick={reset}>{ar ? 'العب مرة أخرى' : 'Play again'}</button>}</div>
    <p className="game-help">{ar ? 'يمكنك مشاهدة الترتيب مرة أخرى في أي وقت. استخدم Tab وEnter على لوحة المفاتيح.' : 'Replay whenever you need a reminder. Keyboard: use Tab and Enter.'}</p></div>;
}
