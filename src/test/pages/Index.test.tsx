import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TranslationProvider } from '@/contexts/TranslationContext';
import { HelmetProvider } from 'react-helmet-async';
import Index from '@/pages/Index';
import { describe, it, expect, vi } from 'vitest';

// Mock useSound hook
vi.mock('@/contexts/SoundContext', () => ({
  useSound: vi.fn(() => ({
    playSound: vi.fn(),
    isSoundEnabled: true,
    toggleSound: vi.fn(),
  })),
}));

// Mock useInteraction hook
vi.mock('@/contexts/InteractionContext', () => ({
  useInteraction: vi.fn(() => ({
    cursorType: 'default',
    setCursorType: vi.fn(),
    isHovering: false,
    setIsHovering: vi.fn(),
  })),
  useCursor: vi.fn(() => ({
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
  })),
}));

// Mock useIntersectionObserver hook to avoid errors in test environment
vi.mock('@/hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: vi.fn(() => [
    vi.fn(), // setNode
    true,    // isIntersecting
    {},      // entry
    vi.fn()  // cleanup
  ]),
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

describe('Index Page', () => {
  it('renders hero section', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders main sections', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    // Check for main content sections - use getAllByText since multiple elements might match
    expect(screen.getAllByText(/product/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/recipe/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
  });

  it('has proper semantic structure', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    // Check for proper semantic elements
    const mains = screen.getAllByRole('main');
    expect(mains.length).toBeGreaterThan(0);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    const ctaButtons = screen.getAllByRole('button');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
