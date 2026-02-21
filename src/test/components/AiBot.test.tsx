import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AiBot from '../../components/AiBot';

// Mock SoundContext because Button uses it
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
  SoundProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock TranslationContext
vi.mock('@/contexts/TranslationContext', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    language: 'en',
  }),
  TranslationProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock lucide-react icons to avoid rendering issues if any (though they are usually fine)
// Actually, they render as SVGs, which is fine.

describe('AiBot Component', () => {
  it('renders the floating action button with correct aria-label', () => {
    render(<AiBot />);
    const fab = screen.getByLabelText('Open chat');
    expect(fab).toBeInTheDocument();
  });

  it('opens the chat window when clicked', () => {
    render(<AiBot />);
    const fab = screen.getByLabelText('Open chat');
    fireEvent.click(fab);

    // Check if chat window elements are present
    expect(screen.getByText('Kiddo AI Assistant')).toBeInTheDocument();

    // Check close button aria-label
    expect(screen.getByLabelText('Close chat')).toBeInTheDocument();

    // Check input aria-label
    expect(screen.getByLabelText('Your message')).toBeInTheDocument();

    // Check send button aria-label
    expect(screen.getByLabelText('Send')).toBeInTheDocument();

    // Check API key input association
    // We look for the label text, and it should find the input because of htmlFor/id
    const apiKeyInput = screen.getByLabelText('Enter your OpenRouter API key:');
    expect(apiKeyInput).toBeInTheDocument();
    expect(apiKeyInput).toHaveAttribute('type', 'password');

    // Check message log role
    const log = screen.getByRole('log');
    expect(log).toBeInTheDocument();
    expect(log).toHaveAttribute('aria-live', 'polite');
  });
});
