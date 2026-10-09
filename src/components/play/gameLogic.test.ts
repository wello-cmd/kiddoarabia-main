import { describe, expect, it } from 'vitest';
import { boardResult, createOddRound, sequenceAnswer } from './gameLogic';
describe('mascot board outcomes', () => {
  it('finds every winning row, column and diagonal', () => {
    for (const line of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]) {
      const board = Array(9).fill(null); line.forEach(cell => { board[cell] = 'Loopy'; });
      expect(boardResult(board)).toEqual({ winner: 'Loopy', cells: line, draw: false });
    }
  });
  it('distinguishes a draw from an unfinished game', () => {
    expect(boardResult(['Pops','Loopy','Pops','Pops','Loopy','Loopy','Loopy','Pops','Pops']).draw).toBe(true);
    expect(boardResult(Array(9).fill(null)).draw).toBe(false);
  });
});
describe('sequence memory', () => {
  it('requires the exact sequence, including repeated mascots', () => {
    expect(sequenceAnswer([1,1,2], 0, 1)).toBe('continue');
    expect(sequenceAnswer([1,1,2], 1, 2)).toBe('wrong');
    expect(sequenceAnswer([1,1,2], 2, 2)).toBe('complete');
  });
});
it('always creates a valid different visitor in one of nine spaces', () => {
  for (let i = 0; i < 100; i++) {
    const puzzle = createOddRound();
    expect(puzzle.different).not.toBe(puzzle.common);
    expect(puzzle.oddCell).toBeGreaterThanOrEqual(0);
    expect(puzzle.oddCell).toBeLessThan(9);
  }
});
