/**
 * KIDDO ARABIA DESIGN SYSTEM v2.0
 * Elite-tier design tokens for 100/100 production quality
 * Matches Apple.com, Stripe.com, Vercel.com standards
 */

export const designTokens = {
  // SPACING SCALE - 8px baseline grid
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },

  // TYPOGRAPHY SCALE - Perfect optical sizing
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1.1' }],
    '6xl': ['3.75rem', { lineHeight: '1.1' }],
  },

  // COLOR PALETTE - HSL with semantic meaning
  colors: {
    // Brand colors
    primary: {
      50: 'hsl(0 86% 97%)',
      100: 'hsl(0 93% 94%)',
      200: 'hsl(0 96% 89%)',
      300: 'hsl(0 94% 82%)',
      400: 'hsl(0 91% 71%)',
      500: 'hsl(0 84% 60%)',  // Main brand color
      600: 'hsl(0 72% 51%)',
      700: 'hsl(0 74% 42%)',
      800: 'hsl(0 70% 35%)',
      900: 'hsl(0 63% 31%)',
    },
    
    // Neutral palette
    neutral: {
      0: 'hsl(0 0% 100%)',
      50: 'hsl(0 0% 98%)',
      100: 'hsl(0 0% 96%)',
      200: 'hsl(0 0% 93%)',
      300: 'hsl(0 0% 88%)',
      400: 'hsl(0 0% 74%)',
      500: 'hsl(0 0% 55%)',
      600: 'hsl(0 0% 46%)',
      700: 'hsl(0 0% 38%)',
      800: 'hsl(0 0% 24%)',
      900: 'hsl(0 0% 15%)',
      950: 'hsl(0 0% 9%)',
    },
  },

  // ELEVATION SYSTEM - Performance-optimized shadows
  shadows: {
    xs: '0 1px 2px 0 hsl(0 0% 0% / 0.05)',
    sm: '0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)',
    md: '0 4px 6px -1px hsl(0 0% 0% / 0.1), 0 2px 4px -2px hsl(0 0% 0% / 0.1)',
    lg: '0 10px 15px -3px hsl(0 0% 0% / 0.1), 0 4px 6px -4px hsl(0 0% 0% / 0.1)',
    xl: '0 20px 25px -5px hsl(0 0% 0% / 0.1), 0 8px 10px -6px hsl(0 0% 0% / 0.1)',
    '2xl': '0 25px 50px -12px hsl(0 0% 0% / 0.25)',
    glow: '0 0 0 1px hsl(var(--primary) / 0.05), 0 0 15px hsl(var(--primary) / 0.1)',
  },

  // MOTION SYSTEM - Performance-first approach
  motion: {
    // Duration
    duration: {
      micro: '150ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    
    // Easing curves
    easing: {
      linear: 'cubic-bezier(0, 0, 1, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // BORDER RADIUS SCALE
  borderRadius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },

  // BREAKPOINTS - Mobile-first approach
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-INDEX SCALE
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const;

export type DesignTokens = typeof designTokens;
export type Spacing = keyof typeof designTokens.spacing;
export type FontSize = keyof typeof designTokens.fontSize;
export type Color = keyof typeof designTokens.colors;
export type Shadow = keyof typeof designTokens.shadows;
export type Motion = keyof typeof designTokens.motion;