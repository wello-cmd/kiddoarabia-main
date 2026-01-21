/**
 * PERFORMANCE MONITOR v2.0
 * Real-time Core Web Vitals tracking and optimization
 * Production-ready performance monitoring
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertCircle } from 'lucide-react';

interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  threshold: { good: number; poor: number };
}

interface PerformanceData {
  lcp: WebVital;
  fid: WebVital;
  cls: WebVital;
  fcp: WebVital;
  ttfb: WebVital;
}

const PerformanceMonitor: React.FC<{ showDetails?: boolean }> = ({ showDetails = false }) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Initialize Web Vitals tracking
    const initializeWebVitals = () => {
      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          
          setPerformanceData(prev => ({
            ...prev!,
            lcp: {
              name: 'LCP',
              value: lastEntry.startTime,
              rating: lastEntry.startTime <= 2500 ? 'good' : lastEntry.startTime <= 4000 ? 'needs-improvement' : 'poor',
              threshold: { good: 2500, poor: 4000 }
            }
          }));
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }

        // FID (First Input Delay) - using INP as modern alternative
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry: any) => {
            setPerformanceData(prev => ({
              ...prev!,
              fid: {
                name: 'FID',
                value: entry.processingStart - entry.startTime,
                rating: entry.processingStart - entry.startTime <= 100 ? 'good' : entry.processingStart - entry.startTime <= 300 ? 'needs-improvement' : 'poor',
                threshold: { good: 100, poor: 300 }
              }
            }));
          });
        });

        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          
          setPerformanceData(prev => ({
            ...prev!,
            cls: {
              name: 'CLS',
              value: clsValue,
              rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor',
              threshold: { good: 0.1, poor: 0.25 }
            }
          }));
        });

        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }

        // FCP (First Contentful Paint)
        const fcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcpEntry = entries[0];
          
          setPerformanceData(prev => ({
            ...prev!,
            fcp: {
              name: 'FCP',
              value: fcpEntry.startTime,
              rating: fcpEntry.startTime <= 1800 ? 'good' : fcpEntry.startTime <= 3000 ? 'needs-improvement' : 'poor',
              threshold: { good: 1800, poor: 3000 }
            }
          }));
        });

        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer not supported');
        }

        // TTFB (Time to First Byte)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          
          setPerformanceData(prev => ({
            ...prev!,
            ttfb: {
              name: 'TTFB',
              value: ttfb,
              rating: ttfb <= 800 ? 'good' : ttfb <= 1800 ? 'needs-improvement' : 'poor',
              threshold: { good: 800, poor: 1800 }
            }
          }));
        }
      }

      // Initialize with default values
      setPerformanceData({
        lcp: { name: 'LCP', value: 0, rating: 'good', threshold: { good: 2500, poor: 4000 } },
        fid: { name: 'FID', value: 0, rating: 'good', threshold: { good: 100, poor: 300 } },
        cls: { name: 'CLS', value: 0, rating: 'good', threshold: { good: 0.1, poor: 0.25 } },
        fcp: { name: 'FCP', value: 0, rating: 'good', threshold: { good: 1800, poor: 3000 } },
        ttfb: { name: 'TTFB', value: 0, rating: 'good', threshold: { good: 800, poor: 1800 } },
      });
    };

    initializeWebVitals();

    // Show monitor in development mode
    if (process.env.NODE_ENV === 'development') {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'good': return <TrendingUp className="h-3 w-3" />;
      case 'needs-improvement': return <Clock className="h-3 w-3" />;
      case 'poor': return <AlertCircle className="h-3 w-3" />;
      default: return <Activity className="h-3 w-3" />;
    }
  };

  if (!performanceData || (!showDetails && process.env.NODE_ENV !== 'development')) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg p-4 max-w-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm">Performance Monitor</span>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-auto text-gray-400 hover:text-gray-600 text-xs"
            >
              ×
            </button>
          </div>

          <div className="space-y-2">
            {Object.entries(performanceData).map(([key, vital]) => (
              <div key={key} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full flex items-center gap-1 ${getRatingColor(vital.rating)}`}>
                    {getRatingIcon(vital.rating)}
                    {vital.name}
                  </span>
                </div>
                <span className="font-mono text-gray-600">
                  {vital.name === 'CLS' 
                    ? vital.value.toFixed(3)
                    : `${Math.round(vital.value)}ms`
                  }
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              Core Web Vitals • Real-time
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;