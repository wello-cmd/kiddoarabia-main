import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AiBot from '../../components/AiBot';
import { TranslationProvider } from '../../contexts/TranslationContext';

// Mock SoundContext to avoid audio issues and dependencies
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
  SoundProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock OpenAI to prevent network requests
vi.mock('openai', () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return {
        chat: {
          completions: {
            create: vi.fn().mockResolvedValue({
              choices: [{ message: { content: 'Mock response' } }]
            })
          }
        }
      };
    })
  };
});

describe('AiBot Component Accessibility', () => {
  const renderComponent = () => {
    return render(
      <TranslationProvider>
        <AiBot />
      </TranslationProvider>
    );
  };

  it('main toggle button has aria-label', () => {
    renderComponent();
    // The main button is the one with the message circle icon
    // Since we don't have the label yet, we might search by role button and check attributes,
    // or try to get by label text and expect it to fail (which is what we want for now).
    // But better to query by role 'button' and check if it has a label.

    // There might be multiple buttons if other things are rendered, but initially only the toggle button is visible?
    // Wait, the chat window is conditionally rendered with `isOpen`.
    // So initially only the toggle button is there.
    const buttons = screen.getAllByRole('button');
    // Assuming it's the only button or we can identify it.
    // Let's assume it's the floating button.
    const toggleButton = buttons[0];

    // We expect this to fail initially
    expect(toggleButton).toHaveAttribute('aria-label', 'Open chat assistant');
  });

  it('chat window elements have aria-labels', async () => {
    renderComponent();
    const toggleButton = screen.getAllByRole('button')[0];
    fireEvent.click(toggleButton);

    // Wait for chat window to open
    await waitFor(() => {
        expect(screen.getByText('Kiddo AI Assistant')).toBeInTheDocument();
    });

    // Close button
    // It's likely the one with X icon.
    // We expect to find it by label "Close chat"
    const closeButton = screen.getByLabelText('Close chat');
    expect(closeButton).toBeInTheDocument();

    // Input field
    const input = screen.getByLabelText('Chat message input');
    expect(input).toBeInTheDocument();

    // Send button
    const sendButton = screen.getByLabelText('Send message');
    expect(sendButton).toBeInTheDocument();
  });
});
