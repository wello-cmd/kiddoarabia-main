import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import FollowTheCrew from './FollowTheCrew';
import MascotTicTacToe from './MascotTicTacToe';
import OddOneOut from './OddOneOut';
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.useRealTimers(); });
describe('new crew games', () => {
  it('finishes a local match, blocks moves, and restarts', () => {
    render(<MascotTicTacToe ar={false}/>);
    for (const cell of [1,4,2,5,3]) fireEvent.click(screen.getByRole('button', { name: new RegExp(`Row ${Math.ceil(cell / 3)}, column ${(cell - 1) % 3 + 1}: empty`) }));
    expect(screen.getByRole('status')).toHaveTextContent('Pops wins!');
    expect(screen.getByRole('button', { name: 'Row 3, column 3: empty' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Restart' }));
    expect(screen.getByRole('status')).toHaveTextContent('Pops’s turn');
    expect(screen.getByRole('button', { name: 'Row 3, column 3: empty' })).toBeEnabled();
  });
  it('plays all five odd rounds and calculates the final score', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    render(<OddOneOut ar={false}/>);
    for (let round = 1; round <= 5; round++) {
      fireEvent.click(screen.getByRole('button', { name: 'Space 1: Loopy' }));
      expect(screen.getByRole('status')).toHaveTextContent('You spotted the visitor!');
      fireEvent.click(screen.getByRole('button', { name: round === 5 ? 'See your score' : 'Next round' }));
    }
    expect(screen.getByRole('status')).toHaveTextContent('5 out of 5');
    fireEvent.click(screen.getByRole('button', { name: 'Play again' }));
    expect(screen.getByText('Round 1 of 5 · Score 0')).toBeInTheDocument();
  });
  it('shows a sequence, supports a retry, advances, and clears timers on unmount', () => {
    vi.useFakeTimers(); vi.spyOn(Math, 'random').mockReturnValue(0);
    const { unmount } = render(<FollowTheCrew ar={false}/>);
    fireEvent.click(screen.getByRole('button', { name: 'Start playing' }));
    expect(screen.getByRole('button', { name: 'Pops' })).toBeDisabled();
    act(() => { vi.advanceTimersByTime(4000); });
    fireEvent.click(screen.getByRole('button', { name: 'Loopy' }));
    expect(screen.getByRole('status')).toHaveTextContent('mix-up');
    fireEvent.click(screen.getByRole('button', { name: 'Replay sequence' }));
    act(() => { vi.advanceTimersByTime(4000); });
    for (let i = 0; i < 3; i++) fireEvent.click(screen.getByRole('button', { name: 'Pops' }));
    const existingTimers = vi.getTimerCount();
    fireEvent.click(screen.getByRole('button', { name: 'Next level' }));
    expect(screen.getByText('Level 2 of 5 · 4 mascots')).toBeInTheDocument();
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    unmount(); expect(vi.getTimerCount()).toBe(existingTimers);
  });
});
