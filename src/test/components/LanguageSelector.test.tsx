import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LanguageSelector from '@/components/LanguageSelector';
import { useTranslation } from '@/contexts/TranslationContext';

// Hoist the mock function so it's available inside vi.mock
const { mockSetLanguage } = vi.hoisted(() => {
  return { mockSetLanguage: vi.fn() };
});

// Mock the useTranslation hook
vi.mock('@/contexts/TranslationContext', () => ({
  useTranslation: vi.fn(() => ({
    language: 'en',
    setLanguage: mockSetLanguage,
  })),
}));

// Mock the useSound hook because Button component uses it
vi.mock('@/contexts/SoundContext', () => ({
  useSound: vi.fn(() => ({
    playSound: vi.fn(),
    isSoundEnabled: true,
    toggleSound: vi.fn(),
  })),
}));

describe('LanguageSelector Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with English language', () => {
    // Default mock implementation returns 'en'
    (useTranslation as any).mockReturnValue({
      language: 'en',
      setLanguage: mockSetLanguage,
    });

    render(<LanguageSelector />);

    // Should show 'العربية' when current language is 'en'
    expect(screen.getByText('العربية')).toBeInTheDocument();
  });

  it('renders correctly with Arabic language', () => {
    // Override mock for this test
    (useTranslation as any).mockReturnValue({
      language: 'ar',
      setLanguage: mockSetLanguage,
    });

    render(<LanguageSelector />);

    // Should show 'English' when current language is 'ar'
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('toggles language from English to Arabic', async () => {
    const user = userEvent.setup();
    (useTranslation as any).mockReturnValue({
      language: 'en',
      setLanguage: mockSetLanguage,
    });

    render(<LanguageSelector />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockSetLanguage).toHaveBeenCalledWith('ar');
  });

  it('toggles language from Arabic to English', async () => {
    const user = userEvent.setup();
    (useTranslation as any).mockReturnValue({
      language: 'ar',
      setLanguage: mockSetLanguage,
    });

    render(<LanguageSelector />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockSetLanguage).toHaveBeenCalledWith('en');
  });
});
