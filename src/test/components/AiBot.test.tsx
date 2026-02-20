import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AiBot from '@/components/AiBot';
import { TranslationProvider } from '@/contexts/TranslationContext';

// Mock SoundContext
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
}));

// Mock OpenAI
vi.mock('openai', () => {
  return {
    default: class OpenAI {
      chat = {
        completions: {
          create: vi.fn().mockResolvedValue({
            choices: [{ message: { content: 'Mocked response' } }]
          })
        }
      }
    }
  }
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <TranslationProvider>
      {ui}
    </TranslationProvider>
  );
};

describe('AiBot Component Accessibility', () => {
  it('renders the chat button with accessibility label', () => {
    renderWithProviders(<AiBot />);
    // This expects aria-label="Open chat assistant" (or similar)
    const button = screen.getByRole('button', { name: /open chat assistant/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the close button with accessibility label when open', () => {
    renderWithProviders(<AiBot />);

    const openButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(openButton);

    const closeButton = screen.getByRole('button', { name: /close chat/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('renders the input and send button with accessibility labels', () => {
    renderWithProviders(<AiBot />);
    const openButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(openButton);

    const input = screen.getByRole('textbox', { name: /chat input/i });
    expect(input).toBeInTheDocument();

    const sendButton = screen.getByRole('button', { name: /send message/i });
    expect(sendButton).toBeInTheDocument();
  });
});
