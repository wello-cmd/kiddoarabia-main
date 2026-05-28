import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { vi } from 'vitest';

// Configure Testing Library  
configure({ asyncUtilTimeout: 1000 } as any);

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds: ReadonlyArray<number> = [];
  
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock useSound globally to prevent "useSound must be used within a SoundProvider" errors in tests
vi.mock('@/contexts/SoundContext', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useSound: vi.fn().mockReturnValue({ playHover: vi.fn(), playClick: vi.fn(), playSound: vi.fn() }),
  };
});

// Mock useInteraction globally
vi.mock('@/contexts/InteractionContext', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useInteraction: vi.fn().mockReturnValue({ registerInteraction: vi.fn() }),
  };
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo
window.scrollTo = vi.fn();