/**
 * Performance utilities for optimizing app performance
 */

/**
 * Debounce function to limit API calls and expensive operations
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit function execution frequency
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Lazy load images with intersection observer
 * @param img - Image element
 * @param src - Image source URL
 */
export const lazyLoadImage = (img: HTMLImageElement, src: string): void => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          target.src = src;
          target.onload = () => target.classList.add('loaded');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
};

/**
 * Preload critical resources
 * @param resources - Array of resource URLs to preload
 */
export const preloadResources = (resources: string[]): void => {
  if (typeof window === 'undefined') return;
  
  resources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    // Determine resource type based on file extension
    if (url.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
      link.as = 'image';
    } else if (url.match(/\.(woff|woff2|ttf|otf)$/i)) {
      link.as = 'font';
      link.crossOrigin = 'anonymous';
    } else if (url.match(/\.(css)$/i)) {
      link.as = 'style';
    } else if (url.match(/\.(js)$/i)) {
      link.as = 'script';
    }
    
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Measure and report Core Web Vitals
 */
export const measureWebVitals = (): void => {
  // Use the enhanced web-vitals implementation
  import('./web-vitals').then(({ measureWebVitals: enhancedMeasure }) => {
    enhancedMeasure();
  });
  
  // Legacy implementation for fallback
  if (typeof window === 'undefined') return;
  
  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        // Report to analytics
        if (lcp > 2500) {
          console.warn('LCP is slow:', lcp);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any; // Type assertion for FID entry
          const fid = fidEntry.processingStart - fidEntry.startTime;
          if (fid > 100) {
            console.warn('FID is slow:', fid);
          }
        }
      }).observe({ entryTypes: ['first-input'] });
      
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
};

/**
 * Optimize images by providing appropriate sizes and formats
 * @param src - Original image source
 * @param width - Target width
 * @param format - Target format (webp, jpg, png)
 * @returns Optimized image URL
 */
export const optimizeImageUrl = (
  src: string,
  width?: number,
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string => {
  // This would typically integrate with a CDN or image optimization service
  // For now, return the original URL
  return src;
};

/**
 * Create a resource hint for DNS prefetch, preconnect, etc.
 * @param url - URL to create hint for
 * @param rel - Relationship type (dns-prefetch, preconnect, etc.)
 */
export const createResourceHint = (url: string, rel: string): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = rel;
  link.href = url;
  
  if (rel === 'preconnect') {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};