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

// Mock react-helmet-async
vi.mock('react-helmet-async', () => ({
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
  Helmet: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock interaction context
vi.mock('@/contexts/InteractionContext', () => ({
  useInteraction: () => ({
    registerInteraction: vi.fn(),
    startFlow: vi.fn(),
    endFlow: vi.fn(),
    logInteraction: vi.fn(),
    interactionStats: {},
  }),
  InteractionProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock sound context
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
    playHover: vi.fn(),
    playClick: vi.fn(),
  }),
  SoundProvider: ({ children }: { children: React.ReactNode }) => children,
}));

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