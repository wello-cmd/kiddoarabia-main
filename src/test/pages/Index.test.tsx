import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TranslationProvider } from '@/contexts/TranslationContext';
import { HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

describe('Index Page', () => {
  it('renders hero section', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders main sections', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    // Check for main content sections
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
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.length).toBeGreaterThan(0);
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