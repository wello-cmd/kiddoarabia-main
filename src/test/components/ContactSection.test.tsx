import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ContactSection from '@/components/ContactSection';
import { describe, it, expect, vi, afterEach } from 'vitest';
import * as sonner from 'sonner';

// Mock Translation Context
vi.mock('@/contexts/TranslationContext', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Success!',
        'contact.title': 'Contact Us',
        'contact.description': 'Description',
        'contact.form.title': 'Form Title',
        'contact.info.title': 'Info Title',
        'contact.info.address': 'Address',
        'contact.info.phone': 'Phone Info',
        'contact.info.email': 'Email Info',
        'contact.info.hours': 'Hours',
        'contact.help.title': 'Help Title',
        'contact.help.call': 'Call',
        'contact.help.email': 'Email Help',
      };
      return translations[key] || key;
    },
  }),
}));

// Mock Sound Context
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
}));

// Mock Sonner
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('ContactSection', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders form elements correctly with accessibility attributes', () => {
    render(<ContactSection />);

    // Check for labels associated with inputs
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    // Check required attributes
    expect(screen.getByLabelText(/Name/i)).toBeRequired();
    expect(screen.getByLabelText(/Email/i)).toBeRequired();
    expect(screen.getByLabelText(/Message/i)).toBeRequired();

    // Check button
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('handles form submission and shows loading state', async () => {
    render(<ContactSection />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    // Fill form using fireEvent
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello world' } });

    // Submit
    fireEvent.click(submitButton);

    // Check loading state (immediate)
    expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    // Wait for success toast call (real time, > 1500ms)
    await waitFor(() => {
        expect(screen.queryByText(/Sending.../i)).not.toBeInTheDocument();
    }, { timeout: 3000 });

    expect(screen.getByText(/Send Message/i)).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
  });
});
