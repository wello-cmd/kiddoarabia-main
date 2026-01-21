import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TranslationProvider } from '@/contexts/TranslationContext';
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
        <TranslationProvider>
          {children}
        </TranslationProvider>
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

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders main sections', () => {
    render(
      <TestWrapper>
        <Index />
      </TestWrapper>
    );

    // Check for main content sections
    expect(screen.getByText(/product/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/recipe/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
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