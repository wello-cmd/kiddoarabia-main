import { render, screen, fireEvent } from '@testing-library/react';
import AiBot from '../../components/AiBot';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Create a hoisted variable to control the language
const { languageState } = vi.hoisted(() => ({ languageState: { value: 'en' } }));

// Mock SoundContext
vi.mock('@/contexts/SoundContext', async () => {
  return {
    useSound: () => ({
      playSound: vi.fn(),
      isSoundEnabled: true,
      toggleSound: vi.fn(),
    }),
    SoundProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Mock TranslationContext
vi.mock('@/contexts/TranslationContext', async () => {
    return {
        useTranslation: () => ({
            t: (key: string) => key,
            language: languageState.value,
            setLanguage: vi.fn(),
        }),
        TranslationProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    };
});

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

describe('AiBot Component', () => {
  beforeEach(() => {
    languageState.value = 'en';
    // Clear mocks and reset modules to ensure clean state if needed,
    // though for React components usually re-rendering is enough if the hook reads the value.
    // However, since useTranslation is called on render, and the mock returns the current value, it should work.
    vi.clearAllMocks();
  });

  it('renders chat button with correct aria-label (English)', () => {
    render(<AiBot />);
    const button = screen.getByLabelText('Open chat');
    expect(button).toBeInTheDocument();
  });

  it('opens chat and shows correct labels (English)', () => {
    render(<AiBot />);
    const openButton = screen.getByLabelText('Open chat');
    fireEvent.click(openButton);

    const closeButton = screen.getByLabelText('Close chat');
    expect(closeButton).toBeInTheDocument();

    const input = screen.getByLabelText('Type your message');
    expect(input).toBeInTheDocument();

    const sendButton = screen.getByLabelText('Send message');
    expect(sendButton).toBeInTheDocument();
  });
});

describe('AiBot Component (Arabic)', () => {
  beforeEach(() => {
    languageState.value = 'ar';
    vi.clearAllMocks();
  });

  it('shows correct arabic labels', () => {
    render(<AiBot />);
    const openButton = screen.getByLabelText('فتح المحادثة');
    expect(openButton).toBeInTheDocument();

    fireEvent.click(openButton);

    const closeButton = screen.getByLabelText('إغلاق المحادثة');
    expect(closeButton).toBeInTheDocument();

    const input = screen.getByLabelText('اكتب رسالتك');
    expect(input).toBeInTheDocument();

    const sendButton = screen.getByLabelText('إرسال الرسالة');
    expect(sendButton).toBeInTheDocument();
  });
});
