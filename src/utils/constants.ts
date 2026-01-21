/**
 * Application constants and configuration
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.kiddoarabia.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// Cache Keys
export const CACHE_KEYS = {
  PRODUCTS: 'products',
  RECIPES: 'recipes',
  BLOG_POSTS: 'blog-posts',
  USER_PREFERENCES: 'user-preferences',
} as const;

// Performance Thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint
  FID: 100,  // First Input Delay
  CLS: 0.1,  // Cumulative Layout Shift
} as const;

// Image Optimization
export const IMAGE_CONFIG = {
  QUALITY: {
    LOW: 60,
    MEDIUM: 80,
    HIGH: 95,
  },
  FORMATS: ['webp', 'jpg', 'png'] as const,
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  DEFAULT_TITLE: "Kiddo Arabia - Premium Kids' Nutrition | Made with Love & Care",
  DEFAULT_DESCRIPTION: "🌟 Nourishing your little ones with the finest, healthiest ingredients. Premium cereals, oat jars & biscuits crafted with love for growing minds and bodies.",
  DEFAULT_KEYWORDS: "kids nutrition, healthy cereals, children's food, family breakfast, organic snacks, vitamins for kids, Arabic brands, healthy eating, growing children",
  SITE_URL: 'https://kiddoarabia.com',
  SOCIAL_IMAGE: 'https://kiddoarabia.com/og-image.jpg',
} as const;

// Security Configuration
export const SECURITY_CONFIG = {
  ALLOWED_DOMAINS: [
    'kiddoarabia.com',
    'cdn.kiddoarabia.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
  ],
  CSP_POLICY: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", 'https://www.google-analytics.com'],
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'img-src': ["'self'", 'data:', 'https:'],
    'connect-src': ["'self'", 'https://www.google-analytics.com'],
  },
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },
  EASING: {
    EASE_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
    EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  LANGUAGE: 'kiddo_language',
  THEME: 'kiddo_theme',
  COOKIE_CONSENT: 'kiddo_cookie_consent',
  USER_PREFERENCES: 'kiddo_user_preferences',
} as const;