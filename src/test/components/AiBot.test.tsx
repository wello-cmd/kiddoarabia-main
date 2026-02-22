import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AiBot from '@/components/AiBot';

// Mock dependencies
vi.mock('@/contexts/TranslationContext', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
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

describe('AiBot Component', () => {
  it('renders the floating chat button with accessible label', () => {
    render(<AiBot />);
    // This will initially fail as the aria-label is missing
    const button = screen.getByRole('button', { name: /open chat assistant/i });
    expect(button).toBeInTheDocument();
  });

  it('opens chat window and has accessible elements', () => {
    render(<AiBot />);
    // Open chat by finding the button (we might need to use a less specific query if the accessible one fails)
    // But since we want to enforce accessibility, we'll try to get it by role/name.
    // If the first test fails, this one won't even run properly if we rely on the same query.
    // For the purpose of "Red" state, let's assume we can click it via class or just try to get it by role.

    // To make sure we can trigger the open state even if accessibility is missing (so we can test inner elements),
    // let's use a query that doesn't rely on aria-label for the click interaction in this test,
    // BUT expect the aria-label to be there.

    // Actually, let's stick to the plan: The test SHOULD fail.
    // So I will write the test expecting the correct behavior.

    const openButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(openButton);

    // Check for close button
    const closeButton = screen.getByRole('button', { name: /close chat/i });
    expect(closeButton).toBeInTheDocument();

    // Check for input label
    const input = screen.getByRole('textbox', { name: /chat message/i });
    expect(input).toBeInTheDocument();

    // Check for send button
    const sendButton = screen.getByRole('button', { name: /send message/i });
    expect(sendButton).toBeInTheDocument();

    // Check for log role
    const log = screen.getByRole('log');
    expect(log).toBeInTheDocument();
    expect(log).toHaveAttribute('aria-label', 'Chat history');
  });
});
