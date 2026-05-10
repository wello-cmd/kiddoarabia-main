import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';
import { describe, it, expect, vi } from 'vitest';
import { SoundProvider } from '@/contexts/SoundContext';
import { InteractionProvider } from '@/contexts/InteractionContext';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <InteractionProvider>
    <SoundProvider>
      {children}
    </SoundProvider>
  </InteractionProvider>
);

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(
      <TestWrapper>
        <Button>Click me</Button>
      </TestWrapper>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <Button onClick={handleClick}>Click me</Button>
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    render(
      <TestWrapper>
        <Button variant="kiddo">Kiddo Button</Button>
      </TestWrapper>
    );
    const button = screen.getByRole('button', { name: /kiddo button/i });
    expect(button).toHaveClass('bg-gradient-hero');
  });

  it('applies size classes correctly', () => {
    render(
      <TestWrapper>
        <Button size="lg">Large Button</Button>
      </TestWrapper>
    );
    const button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('h-11');
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <TestWrapper>
        <Button disabled>Disabled Button</Button>
      </TestWrapper>
    );
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <Button onClick={handleClick}>Keyboard Button</Button>
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: /keyboard button/i });
    await user.click(button);
    
    expect(document.activeElement).toBe(button);
  });

  it('has proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <Button aria-label="Custom accessibility label">
          Button with icon
        </Button>
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: /custom accessibility label/i });
    expect(button).toHaveAttribute('aria-label', 'Custom accessibility label');
  });
});