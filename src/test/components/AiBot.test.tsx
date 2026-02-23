import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AiBot from '@/components/AiBot';

// Mock dependencies
vi.mock('@/contexts/TranslationContext', () => ({
  useTranslation: () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            'aibot.open': 'Open chat assistant',
            'aibot.close': 'Close chat',
            'aibot.inputLabel': 'Chat message',
            'aibot.send': 'Send message',
            'aibot.history': 'Chat history',
            'aibot.apiKeyLabel': 'Enter API Key'
        };
        return translations[key] || key;
    },
    language: 'en',
  }),
}));

vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
}));

// Mock OpenAI
vi.mock('openai', () => ({
  default: vi.fn(),
}));

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe('AiBot Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the floating chat button with accessible label', () => {
    render(<AiBot />);
    const button = screen.getByRole('button', { name: 'Open chat assistant' });
    expect(button).toBeInTheDocument();
  });

  it('opens chat window and has accessible elements', () => {
    render(<AiBot />);

    // Open chat
    const openButton = screen.getByRole('button', { name: 'Open chat assistant' });
    fireEvent.click(openButton);

    // Check for close button
    const closeButton = screen.getByRole('button', { name: 'Close chat' });
    expect(closeButton).toBeInTheDocument();

    // Check for input label
    const input = screen.getByRole('textbox', { name: 'Chat message' });
    expect(input).toBeInTheDocument();

    // Check for send button
    const sendButton = screen.getByRole('button', { name: 'Send message' });
    expect(sendButton).toBeInTheDocument();

    // Check for log role
    const log = screen.getByRole('log');
    expect(log).toBeInTheDocument();
    expect(log).toHaveAttribute('aria-label', 'Chat history');
  });
});
