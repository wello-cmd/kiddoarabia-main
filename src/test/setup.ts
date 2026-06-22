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

// Mock react-helmet-async
vi.mock('react-helmet-async', () => ({
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
  Helmet: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock SoundContext
vi.mock('@/contexts/SoundContext', () => ({
  useSound: () => ({
    playSound: vi.fn(),
    playHover: vi.fn(),
    playClick: vi.fn(),
    isMuted: false,
    toggleMute: vi.fn(),
  }),
  SoundProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock InteractionContext
vi.mock('@/contexts/InteractionContext', () => ({
  useInteraction: () => ({
    activeElement: null,
    setActiveElement: vi.fn(),
    lastInteractionTime: 0,
    interactionCount: 0,
    registerInteraction: vi.fn(),
  }),
  InteractionProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock scrollTo
window.scrollTo = vi.fn();