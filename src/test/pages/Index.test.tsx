import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TranslationProvider } from '@/contexts/TranslationContext';
import { HelmetProvider } from 'react-helmet-async';
import { SoundProvider } from '@/contexts/SoundContext';
import { InteractionProvider } from '@/contexts/InteractionContext';
import Index from '@/pages/Index';
import { describe, it, expect } from 'vitest';

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
      <BrowserRouter>
        <HelmetProvider>
          <SoundProvider>
            <InteractionProvider>
              <TranslationProvider>
                {children}
              </TranslationProvider>
            </InteractionProvider>
          </SoundProvider>
        </HelmetProvider>
      </BrowserRouter>
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

    expect(screen.getAllByRole('heading', { level: 1 })[0]).toBeInTheDocument();
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
    expect(screen.getAllByRole('main')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })[0]).toBeInTheDocument();
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
