import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { boardResult, mascotImage, type Player } from './gameLogic';
import './more-games.css';
export default function MascotTicTacToe({ ar, onComplete }: { ar: boolean; onComplete?:()=>void }) {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>('Pops');
  const restart = useRef<HTMLButtonElement>(null);
  const result = boardResult(board);
  const finished = Boolean(result.winner || result.draw);
  function move(index: number) {
    if (board[index] || finished) return;
    const next = [...board]; next[index] = player; setBoard(next);
    const ending = boardResult(next);
    if (ending.winner || ending.draw) restart.current?.focus();
    else setPlayer(player === 'Pops' ? 'Loopy' : 'Pops');
  }
  useEffect(()=>{if(finished)onComplete?.();},[finished,onComplete]);
  return <div className="crew-mini-game"><div className="game-heading"><div><h2>{ar ? 'إكس أو مع الفريق' : 'Mascot tic-tac-toe'}</h2><p>{ar ? 'لاعبان: Pops ضد Loopy. تناوبا واجمعا ثلاث شخصيات في صف واحد.' : 'Two players: Pops versus Loopy. Take turns. Get three mascots in a row.'}</p></div><button ref={restart} className="game-reset" onClick={() => { setBoard(Array(9).fill(null)); setPlayer('Pops'); }}><RotateCcw size={18}/>{ar ? 'من جديد' : 'Restart'}</button></div>
    <p className="game-status" role="status" aria-live="polite">{result.winner ? (ar ? `${result.winner} فاز!` : `${result.winner} wins!`) : result.draw ? (ar ? 'تعادل! جولة أخرى؟' : 'A draw! Another round?') : (ar ? `دور ${player}` : `${player}’s turn`)}</p>
    <div className="crew-player-key"><img src={mascotImage('Pops')} alt=""/><span>Pops</span><span>{ar ? 'ضد' : 'vs'}</span><img src={mascotImage('Loopy')} alt=""/><span>Loopy</span></div>
    <div className="crew-tic-board" role="group" aria-label={ar ? 'لوحة إكس أو' : 'Tic-tac-toe board'} dir="ltr">{board.map((occupant, index) => <button key={index} disabled={Boolean(occupant) || finished} className={`crew-tic-cell ${result.cells.includes(index) ? 'crew-cell-win' : ''}`} onClick={() => move(index)} aria-label={ar ? `الصف ${Math.floor(index / 3) + 1}، العمود ${index % 3 + 1}: ${occupant || 'فارغ'}` : `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}: ${occupant || 'empty'}`}>{occupant ? <img src={mascotImage(occupant)} alt=""/> : <span aria-hidden="true">{index + 1}</span>}</button>)}</div>
    <p className="game-help">{ar ? 'العب مع صديق على نفس الجهاز. استخدم Tab وEnter لاختيار خانة.' : 'Play with a friend on the same device. Use Tab and Enter to choose a space.'}</p></div>;
}
