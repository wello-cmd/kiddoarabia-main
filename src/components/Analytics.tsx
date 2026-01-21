import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if user has consented to analytics cookies
    const consent = localStorage.getItem('cookie-consent');
    const hasAnalyticsConsent = consent ? JSON.parse(consent).analytics : false;

    if (!hasAnalyticsConsent) return;

    // Initialize Google Analytics if consent is given
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer!.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    const hasAnalyticsConsent = consent ? JSON.parse(consent).analytics : false;

    if (hasAnalyticsConsent && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;