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
    default: vi.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: vi.fn().mockResolvedValue({
            choices: [{ message: { content: 'Mock response' } }]
          })
        }
      }
    }))
  };
});

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe('AiBot Component', () => {
  it('has accessible buttons', () => {
    render(
      <TranslationProvider>
        <AiBot />
      </TranslationProvider>
    );

    // Open chat
    // This should fail initially
    const openButton = screen.getByLabelText(/Open chat/i);
    expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);

    // Close chat
    const closeButton = screen.getByLabelText(/Close chat/i);
    expect(closeButton).toBeInTheDocument();

    // Input
    const input = screen.getByLabelText(/Type your message/i);
    expect(input).toBeInTheDocument();

    // Send button
    const sendButton = screen.getByLabelText(/Send message/i);
    expect(sendButton).toBeInTheDocument();
  });
});
