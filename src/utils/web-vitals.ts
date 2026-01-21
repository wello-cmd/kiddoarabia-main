/**
 * Enhanced Web Vitals measurement and reporting
 */

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

interface PerformanceData {
  lcp?: number;
  fid?: number;
  inp?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const vitalsData: PerformanceData = {};

// Thresholds based on Google's Web Vitals
const THRESHOLDS = {
  LCP: { good: 1200, poor: 2500 },
  FID: { good: 10, poor: 100 },
  INP: { good: 10, poor: 200 },
  CLS: { good: 0.01, poor: 0.25 },
  FCP: { good: 800, poor: 1800 },
  TTFB: { good: 100, poor: 600 },
};

const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

const sendToAnalytics = (metric: WebVitalMetric) => {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      metric_rating: metric.rating,
      custom_parameter_name: 'web_vitals',
    });
  }

  // Send to custom analytics endpoint if needed
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    }).catch(() => {
      // Silently fail if analytics endpoint is not available
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${metric.name}`, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id
    });
  }
};

export const measureWebVitals = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      const value = Math.round(lastEntry.renderTime || lastEntry.loadTime);
      
      vitalsData.lcp = value;
      sendToAnalytics({
        name: 'LCP',
        value,
        rating: getRating('LCP', value),
        delta: value - (vitalsData.lcp || 0),
        id: lastEntry.id || 'lcp',
      });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const value = Math.round(entry.processingStart - entry.startTime);
        
        vitalsData.fid = value;
        sendToAnalytics({
          name: 'FID',
          value,
          rating: getRating('FID', value),
          delta: value - (vitalsData.fid || 0),
          id: entry.id || 'fid',
        });
      });
    }).observe({ entryTypes: ['first-input'] });

    // Interaction to Next Paint (INP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.interactionId) {
          const value = Math.round(entry.processingEnd - entry.startTime);
          
          vitalsData.inp = value;
          sendToAnalytics({
            name: 'INP',
            value,
            rating: getRating('INP', value),
            delta: value - (vitalsData.inp || 0),
            id: entry.id || 'inp',
          });
        }
      });
    }).observe({ entryTypes: ['event'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      vitalsData.cls = clsValue;
      sendToAnalytics({
        name: 'CLS',
        value: Math.round(clsValue * 1000) / 1000,
        rating: getRating('CLS', clsValue),
        delta: clsValue - (vitalsData.cls || 0),
        id: 'cls',
      });
    }).observe({ entryTypes: ['layout-shift'] });

    // First Contentful Paint (FCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const value = Math.round(entry.startTime);
        
        vitalsData.fcp = value;
        sendToAnalytics({
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          delta: value - (vitalsData.fcp || 0),
          id: entry.id || 'fcp',
        });
      });
    }).observe({ entryTypes: ['paint'] });

  } catch (error) {
    console.warn('Web Vitals measurement failed:', error);
  }

  // Measure TTFB on page load
  window.addEventListener('load', () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
    if (navigationEntry) {
      const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
      
      vitalsData.ttfb = ttfb;
      sendToAnalytics({
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        delta: ttfb - (vitalsData.ttfb || 0),
        id: 'ttfb',
      });
    }
  });
};

export const getWebVitalsData = (): PerformanceData => vitalsData;