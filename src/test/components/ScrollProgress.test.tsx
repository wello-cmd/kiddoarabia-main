import { render, screen } from '@testing-library/react';
import ScrollProgress from '@/components/ScrollProgress';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    div: ({ children, className, style, ...props }: any) => (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    button: ({ children, className, onClick, ...props }: any) => (
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    ),
  },
}));

describe('ScrollProgress Component', () => {
  it('renders the scroll progress indicator', () => {
    render(<ScrollProgress />);
    // Verify the percentage text exists (initially 0%)
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('has an accessible scroll-to-top button', () => {
    render(<ScrollProgress />);
    // This expects the button to have an aria-label "Scroll to top"
    const button = screen.getByRole('button', { name: /scroll to top/i });
    expect(button).toBeInTheDocument();
  });
});
