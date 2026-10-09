import {describe,expect,it} from 'vitest';
import {challengeIndex, wheelTarget, solvedPuzzle, slideTile, scramblePuzzle, puzzleSolved} from './wheelPuzzleLogic';
describe('challenge wheel',()=>{
 it('selects every equal segment and clamps random edges',()=>{expect(challengeIndex(0)).toBe(0);expect(challengeIndex(.999)).toBe(5);expect(challengeIndex(1)).toBe(5);expect(challengeIndex(-1)).toBe(0);});
 it('lands the center of the chosen segment under the top pointer after complete turns',()=>{for(let i=0;i<6;i++){const rotation=wheelTarget(820,i);expect(rotation).toBeGreaterThan(820+1080);expect((rotation+i*60+30)%360).toBe(0);}});
});
describe('sliding mascot puzzle',()=>{
 it('allows only orthogonal tiles beside the empty space and preserves input',()=>{const board=[...solvedPuzzle];expect(slideTile(board,7)).toEqual([1,2,3,4,5,6,7,0,8]);expect(slideTile(board,5)).toEqual([1,2,3,4,5,0,7,8,6]);expect(slideTile(board,6)).toBe(board);expect(slideTile(board,0)).toBe(board);expect(board).toEqual(solvedPuzzle);});
 it('never wraps across rows or moves the empty tile',()=>{const board=[1,2,0,4,5,3,7,8,6];expect(slideTile(board,3)).toBe(board);expect(slideTile(board,2)).toBe(board);});
 it('creates a nontrivial legal solvable scramble even when randomness repeats',()=>{for(const random of [()=>0,()=>.5,()=>.999]){const board=scramblePuzzle(random);expect(puzzleSolved(board)).toBe(false);expect([...board].sort()).toEqual([...solvedPuzzle].sort());const tiles=board.filter(Boolean);const inversions=tiles.reduce((sum,t,i)=>sum+tiles.slice(i+1).filter(v=>v<t).length,0);expect(inversions%2).toBe(0);}});
 it('recognizes completion only for the exact full board',()=>{expect(puzzleSolved([...solvedPuzzle])).toBe(true);expect(puzzleSolved([1,2,3])).toBe(false);expect(puzzleSolved([1,2,3,4,5,6,7,0,8])).toBe(false);});
});
