import {act,cleanup,fireEvent,render,screen} from '@testing-library/react';
import {afterEach,beforeEach,describe,expect,it,vi} from 'vitest';
import ChallengeWheel from './ChallengeWheel';
import MascotPuzzle from './MascotPuzzle';
vi.mock('./wheelPuzzleLogic',async importOriginal=>({...await importOriginal<typeof import('./wheelPuzzleLogic')>(),scramblePuzzle:()=>[1,2,3,4,5,6,7,0,8]}));
beforeEach(()=>{vi.spyOn(window,'matchMedia').mockImplementation(query=>({matches:false,media:query,onchange:null,addListener:vi.fn(),removeListener:vi.fn(),addEventListener:vi.fn(),removeEventListener:vi.fn(),dispatchEvent:vi.fn()}));});
afterEach(()=>{cleanup();vi.restoreAllMocks();vi.useRealTimers();});
describe('challenge wheel',()=>{
 it('locks spins, shows the selected prompt, and awards once after three challenges',()=>{
  vi.useFakeTimers();vi.spyOn(Math,'random').mockReturnValue(0);const completed=vi.fn();render(<ChallengeWheel ar={false} onComplete={completed}/>);
  for(let i=0;i<3;i++){
   fireEvent.click(screen.getByRole('button',{name:'Spin the wheel'}));expect(screen.getByRole('button',{name:'Spinning…'})).toBeDisabled();
   expect(completed).not.toHaveBeenCalled();act(()=>vi.advanceTimersByTime(2000));
   expect(screen.getByRole('status')).toHaveTextContent('Make your funniest face for Pops.');fireEvent.click(screen.getByRole('button',{name:'Challenge done'}));
  }
  expect(completed).toHaveBeenCalledTimes(1);expect(screen.getByRole('status')).toHaveTextContent('Three challenges');
  fireEvent.click(screen.getByRole('button',{name:'Play again'}));expect(screen.getByText('0 of 3 challenges')).toBeInTheDocument();
 });
 it('honors reduced motion and clears a spin on restart',()=>{
  vi.useFakeTimers();vi.mocked(window.matchMedia).mockReturnValue({...window.matchMedia(''),matches:true});
  render(<ChallengeWheel ar={false}/>);fireEvent.click(screen.getByRole('button',{name:'Spin the wheel'}));
  act(()=>vi.advanceTimersByTime(0));expect(screen.getByRole('button',{name:'Challenge done'})).toBeEnabled();
  fireEvent.click(screen.getByRole('button',{name:'Restart'}));const beforeSpin=vi.getTimerCount();fireEvent.click(screen.getByRole('button',{name:'Spin the wheel'}));
  expect(vi.getTimerCount()).toBe(beforeSpin+1);fireEvent.click(screen.getByRole('button',{name:'Restart'}));expect(vi.getTimerCount()).toBe(beforeSpin);
  expect(screen.getByRole('button',{name:'Spin the wheel'})).toBeEnabled();
 });
 it('cancels its pending spin when the player closes',()=>{vi.useFakeTimers();const {unmount}=render(<ChallengeWheel ar/>);fireEvent.click(screen.getByRole('button',{name:'أدر العجلة'}));unmount();expect(vi.getTimerCount()).toBe(0);});
});
describe('mascot puzzle',()=>{
 it('supports a legal keyboard move, completion badge, and a new puzzle',()=>{
  const completed=vi.fn();render(<MascotPuzzle ar={false} onComplete={completed}/>);
  expect(screen.getByRole('button',{name:'Tile 1, row 1, column 1'})).toBeDisabled();
  fireEvent.keyDown(screen.getByRole('group',{name:'Sliding puzzle'}),{key:'ArrowLeft'});
  expect(completed).toHaveBeenCalledTimes(1);expect(screen.getByRole('status')).toHaveTextContent('Pops is back together');
  fireEvent.click(screen.getByRole('button',{name:'Shuffle again'}));expect(screen.getByText('0 moves')).toBeInTheDocument();expect(screen.getByRole('button',{name:'Slide tile 8, row 3, column 3'})).toBeEnabled();
 });
 it('provides Arabic instructions, touch-sized buttons, and a picture reference',()=>{
  render(<MascotPuzzle ar/>);expect(screen.getByRole('button',{name:'عرض الصورة الكاملة'})).toHaveAttribute('aria-expanded','false');
  fireEvent.click(screen.getByRole('button',{name:'عرض الصورة الكاملة'}));expect(screen.getByAltText('صورة بوبس الكاملة')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button',{name:'حرّك القطعة 8، الصف 3، العمود 3'}));expect(screen.getByRole('status')).toHaveTextContent('اكتملت صورة بوبس');
 });
});
