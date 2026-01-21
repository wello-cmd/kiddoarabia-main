import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Web Vitals tracking
    if ('PerformanceObserver' in window) {
      try {
        // Track Largest Contentful Paint
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('LCP:', (entry as any).renderTime || (entry as any).loadTime);
            
            // Send to analytics if needed
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'LCP', {
                event_category: 'Web Vitals',
                value: Math.round((entry as any).renderTime || (entry as any).loadTime),
                non_interaction: true,
              });
            }
          }
        }).observe({entryTypes: ['largest-contentful-paint']});
        
        // Track First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', (entry as any).processingStart - (entry as any).startTime);
          }
        }).observe({entryTypes: ['first-input']});
      } catch (e) {
        console.warn('Performance monitoring not supported');
      }
    }

    // Log page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
      }, 0);
    });

  }, []);
};