import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param dirty - The potentially unsafe HTML string
 * @returns Sanitized HTML string safe for rendering
 */
export const sanitizeHtml = (dirty: string): string => {
  if (typeof window === 'undefined') {
    return dirty; // Server-side rendering fallback
  }
  
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'div', 'span'
    ],
    ALLOWED_ATTR: ['href', 'target', 'src', 'alt', 'title', 'class'],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
};

/**
 * Safely opens external links with security best practices
 * @param url - The URL to open
 * @param target - Target window (default: '_blank')
 */
export const safeExternalLink = (url: string, target: string = '_blank'): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('a');
  link.href = url;
  link.target = target;
  link.rel = 'noopener noreferrer';
  
  // Validate URL to prevent javascript: and data: protocols
  try {
    const parsedUrl = new URL(url);
    if (!['http:', 'https:', 'mailto:', 'tel:'].includes(parsedUrl.protocol)) {
      console.warn('Unsafe URL protocol detected:', parsedUrl.protocol);
      return;
    }
    link.click();
  } catch (error) {
    console.error('Invalid URL:', url);
  }
};

/**
 * Safe window object access with proper checks
 * @param callback - Function to execute with window object
 * @param fallback - Fallback value if window is not available
 */
export const safeWindowAccess = <T>(
  callback: (win: Window) => T,
  fallback?: T
): T | undefined => {
  if (typeof window !== 'undefined') {
    try {
      return callback(window);
    } catch (error) {
      console.error('Window access error:', error);
      return fallback;
    }
  }
  return fallback;
};

/**
 * Validates and sanitizes user input
 * @param input - User input to validate
 * @param maxLength - Maximum allowed length
 * @returns Sanitized input
 */
export const sanitizeInput = (input: string, maxLength: number = 1000): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove potentially dangerous characters and limit length
  return input
    .replace(/[<>'"]/g, '') // Remove basic HTML/script injection chars
    .trim()
    .substring(0, maxLength);
};