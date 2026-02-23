import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { TranslationProvider } from '@/contexts/TranslationContext';
import Index from '@/pages/Index';
import { describe, it, expect, vi } from 'vitest';

// Mock SoundContext
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
}));

// Mock InteractionContext
vi.mock('@/contexts/InteractionContext', () => ({
  useInteraction: () => ({
    cursorType: 'default',
    setCursorType: vi.fn(),
    isHovering: false,
    setIsHovering: vi.fn(),
  }),
  useCursor: () => ({
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
  }),
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

    // Check for main content sections
    expect(screen.getAllByText(/product/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/about/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/recipe/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/contact/i)[0]).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    // Check for proper semantic elements
    expect(screen.getByRole('main')).toBeInTheDocument();
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