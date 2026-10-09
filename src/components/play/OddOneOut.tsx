import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { createOddRound, crew, mascotImage } from './gameLogic';
import './more-games.css';
export default function OddOneOut({ ar, onComplete }: { ar: boolean; onComplete?:()=>void }) {
  const [round, setRound] = useState(1);
  const [puzzle, setPuzzle] = useState(createOddRound);
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const next = useRef<HTMLButtonElement>(null);
  const board = useRef<HTMLDivElement>(null);
  useEffect(() => { if (answer !== null || complete) next.current?.focus(); }, [answer, complete]);
  function reset() { setRound(1); setScore(0); setAnswer(null); setComplete(false); setPuzzle(createOddRound()); }
  const correct = answer === puzzle.oddCell;
  useEffect(()=>{if(complete && score >= 4)onComplete?.();},[complete,score,onComplete]);
  return <div className="crew-mini-game"><div className="game-heading"><div><h2>{ar ? 'ابحث عن المختلف' : 'Odd one out'}</h2><p>{ar ? 'ثماني شخصيات متشابهة وشخصية مختلفة. هل يمكنك العثور عليها؟' : 'Eight matching mascots. One sneaky visitor. Can you spot who’s different?'}</p></div><button className="game-reset" onClick={reset}><RotateCcw size={18}/>{ar ? 'من جديد' : 'Restart'}</button></div>
    <p className="game-status">{ar ? `الجولة ${round} من 5 · النقاط ${score}` : `Round ${round} of 5 · Score ${score}`}</p>
    <p className="crew-game-message" role="status" aria-live="polite">{complete ? (ar ? `أحسنت! نتيجتك ${score} من 5.` : `Nice spotting! You scored ${score} out of 5.`) : answer === null ? (ar ? 'اختر الشخصية المختلفة. خذ وقتك!' : 'Choose the different mascot. Take your time!') : correct ? (ar ? 'صحيح! وجدت الشخصية المختلفة.' : 'You spotted the visitor!') : (ar ? `الشخصية المختلفة هي ${crew[puzzle.different]}. ابحث عن الخانة المحددة.` : `The visitor is ${crew[puzzle.different]}. Look for the highlighted space.`)}</p>
    {!complete && <div className="crew-odd-board" ref={board}>{Array.from({ length: 9 }, (_, index) => { const name = crew[index === puzzle.oddCell ? puzzle.different : puzzle.common]; return <button className={`crew-odd-cell ${answer !== null && index === puzzle.oddCell ? 'crew-cell-win' : ''} ${answer === index && !correct ? 'crew-cell-miss' : ''}`} key={index} disabled={answer !== null} onClick={() => { setAnswer(index); if (index === puzzle.oddCell) setScore(value => value + 1); }} aria-label={ar ? `المكان ${index + 1}: ${name}` : `Space ${index + 1}: ${name}`}><img src={mascotImage(name)} alt=""/>{answer !== null && index === puzzle.oddCell && <span className="crew-found-label">{ar ? 'المختلف' : 'Found'}</span>}</button>; })}</div>}
    <div className="crew-game-actions">{answer !== null && !complete && <button ref={next} className="kiddo-action kiddo-action-red" onClick={() => { if (round === 5) setComplete(true); else { setRound(value => value + 1); setAnswer(null); setPuzzle(createOddRound()); requestAnimationFrame(() => board.current?.querySelector<HTMLButtonElement>('button')?.focus()); } }}>{round === 5 ? (ar ? 'عرض النتيجة' : 'See your score') : (ar ? 'الجولة التالية' : 'Next round')}</button>}{complete && <button ref={next} className="kiddo-action kiddo-action-red" onClick={reset}>{ar ? 'العب مرة أخرى' : 'Play again'}</button>}</div>
    <p className="game-help">{ar ? 'خمس جولات بدون مؤقت. استخدم Tab وEnter على لوحة المفاتيح.' : 'Five rounds, no time limit. Keyboard: use Tab and Enter.'}</p></div>;
}
