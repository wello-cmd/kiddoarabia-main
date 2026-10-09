import {useMemo,useState} from 'react';
import {Link} from 'react-router-dom';
import {Download,ArrowUpRight} from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import {useTranslation} from '@/contexts/TranslationContext';
import FullStageHero from '@/components/FullStageHero';
import {Memory,Quiz,Catch} from '@/components/play/BasicGames';
import FollowTheCrew from '@/components/play/FollowTheCrew';
import MascotTicTacToe from '@/components/play/MascotTicTacToe';
import OddOneOut from '@/components/play/OddOneOut';
import ChallengeWheel from '@/components/play/ChallengeWheel';
import MascotPuzzle from '@/components/play/MascotPuzzle';
import GameArtwork from '@/components/play/GameArtwork';
import ColoringStudio from '@/components/play/ColoringStudio';
import GamePlayer from '@/components/play/GamePlayer';
import GameBadges from '@/components/play/GameBadges';
import {badgeCatalog,useGameBadges,type BadgeId} from '@/components/play/badges';
import '@/styles/kiddo-play.css';
import '@/styles/kiddo-play-update.css';
import '@/styles/kiddo-play-experience.css';
const games=[['memory','Match the mascots','طابق الشخصيات'],['quiz','Guess the character','خمن الشخصية'],['catch','Catch the crunch','التقط الحلقات'],['sequence','Follow the crew','اتبع الفريق'],['tic','Mascot tic-tac-toe','إكس أو مع الفريق'],['odd','Odd one out','من المختلف؟'],['wheel','Spin a little fun','عجلة المرح'],['puzzle','Piece Pops together','أحجية بوبس']] as const;
export default function Play(){
 const {language}=useTranslation();const ar=language==='ar';const [game,setGame]=useState<BadgeId|null>(null);
 const {earned,latest,saved,award}=useGameBadges();
 const callbacks=useMemo(()=>Object.fromEntries(badgeCatalog.map(b=>[b.id,()=>award(b.id)])) as Record<BadgeId,()=>void>,[award]);
 const badge=badgeCatalog.find(b=>b.id===latest&&b.id===game);const notice=badge?(ar?`حصلت على شارة: ${badge.ar}`:`Badge earned: ${badge.en}`):'';
 const selected=game==='memory'?<Memory ar={ar} onComplete={callbacks.memory}/>:game==='quiz'?<Quiz ar={ar} onComplete={callbacks.quiz}/>:game==='catch'?<Catch ar={ar} onComplete={callbacks.catch}/>:game==='sequence'?<FollowTheCrew ar={ar} onComplete={callbacks.sequence}/>:game==='tic'?<MascotTicTacToe ar={ar} onComplete={callbacks.tic}/>:game==='odd'?<OddOneOut ar={ar} onComplete={callbacks.odd}/>:game==='wheel'?<ChallengeWheel ar={ar} onComplete={callbacks.wheel}/>:game==='puzzle'?<MascotPuzzle ar={ar} onComplete={callbacks.puzzle}/>:null;
 return <EnhancedLayout>
  <FullStageHero image="/generated/games-stage-v6.webp" alt={ar?'بوبس وكينغ ولوبي وبايت يلعبون ألعاب الفيديو معًا':'Pops, King, Loopy and Byte playing video games together'} title={ar?'وقت المرح\nمع فريق كيدو.':'Let’s play.\nTogether.'} description={ar?'اختر لعبتك وابدأ فورًا، واجمع الشارات أو لوّن شخصيتك المفضلة.':'Pick a game and jump straight in. Collect badges, challenge a friend or color your favourite character.'} actions={<><a className="kiddo-action kiddo-action-red" href="#games">{ar?'اختر لعبة':'Choose a game'}<ArrowUpRight size={18}/></a><a className="kiddo-action kiddo-action-white" href="#coloring-studio">{ar?'ابدأ التلوين':'Start coloring'}</a></>}/>
  <section className="play-room kiddo-wrap" id="games"><div className="game-gallery-heading"><div><h2>{ar?'اختر مغامرتك.':'Pick your next challenge.'}</h2><p>{ar?'اضغط على صورة اللعبة لفتحها مباشرة.':'Click a game image to open it. Your next challenge starts right here.'}</p></div><a className="text-link" href="#badges">{ar?'شاراتك':'Your badges'}<ArrowUpRight size={18}/></a></div><div className="catalog-filters game-picker" aria-label={ar?'اختر لعبة':'Choose a game'}>{games.map(([id,en,a])=><button key={id} type="button" className="catalog-filter" onClick={()=>{setGame(id);}} aria-label={ar?`العب ${a}`:`Play ${en}`}>{id==='wheel'||id==='puzzle'?<GameArtwork kind={id}/>:<img src={`/generated/games/${id}-v1.webp`} alt="" width="1254" height="1254" loading="lazy"/>}<span>{ar?a:en}</span><span className="game-open-label">{ar?'العب الآن':'Play now'}<span aria-hidden="true"> →</span></span></button>)}</div><p className="play-note">{ar?'بدون حساب. العب مع صديق أو جرّب تحديًا بمفردك.':'No account needed. Play with a friend or take on a challenge of your own.'}</p></section>
  <GamePlayer open={game!==null} ar={ar} onClose={()=>setGame(null)} notice={notice}>{selected}</GamePlayer>
  <GameBadges ar={ar} earned={earned} saved={saved}/>
  <div className="kiddo-wrap" id="coloring-studio"><ColoringStudio ar={ar} onComplete={callbacks.coloring}/></div>
  <section className="coloring-section kiddo-wrap" id="coloring"><div className="game-heading"><div><h2>{ar?'خذ الألوان معك.':'Take the colors offline.'}</h2><p>{ar?'اطبع الصفحات واستخدم ألوانك المفضلة.':'Download the book, print a page and reach for your favourite crayons.'}</p></div><a className="kiddo-action kiddo-action-red" download href="/downloads/kiddo-coloring-book.pdf">{ar?'حمل الكتاب':'Download the book'}<Download size={18}/></a></div><div className="coloring-grid">{[['pops','Pops'],['loopy','Loopy'],['buzz','Buzz']].map(([id,n])=><article key={id}><img src={`/generated/coloring/${id}.webp`} alt={ar?`صفحة تلوين ${n}`:`${n} coloring page`} loading="lazy"/><h3>{n}</h3><a href={`/downloads/${id}-coloring.pdf`} download className="text-link">{ar?'حمل الصفحة':'Download page'}<Download size={16}/></a></article>)}</div><Link className="text-link" to="/characters">{ar?'تعرّف على الفريق':'Meet the whole crew'}<ArrowUpRight size={18}/></Link></section>
 </EnhancedLayout>;
}
