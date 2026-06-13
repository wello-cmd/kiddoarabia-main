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

// Mock useSound and useInteraction hooks to avoid missing context errors in tests
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
    playHover: vi.fn(),
    playClick: vi.fn(),
  }),
  SoundProvider: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock('@/contexts/InteractionContext', () => ({
  useInteraction: () => ({
    registerInteraction: vi.fn(),
  }),
  InteractionProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock react-helmet-async to avoid undefined helmetInstances errors
vi.mock('react-helmet-async', () => {
  return {
    Helmet: ({ children }: { children: React.ReactNode }) => children,
    HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
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