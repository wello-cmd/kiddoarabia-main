import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@/components/Footer';
import { describe, it, expect, vi } from 'vitest';

// Mock SoundContext as Footer uses Button
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
  }),
}));

describe('Footer Component', () => {
  it('renders social links with accessible names', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // Verify Facebook button - should have accessible name "Facebook"
    // Using getByRole with name option checks aria-label, aria-labelledby, or visible text
    const facebookButton = screen.getByRole('button', { name: /facebook/i });
    expect(facebookButton).toBeInTheDocument();

    // Verify Instagram button
    const instagramButton = screen.getByRole('button', { name: /instagram/i });
    expect(instagramButton).toBeInTheDocument();

    // Verify TikTok button
    const tiktokButton = screen.getByRole('button', { name: /tiktok/i });
    expect(tiktokButton).toBeInTheDocument();

    // Verify YouTube button
    const youtubeButton = screen.getByRole('button', { name: /youtube/i });
    expect(youtubeButton).toBeInTheDocument();
  });
});
