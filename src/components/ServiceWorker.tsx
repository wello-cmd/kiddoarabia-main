import { useEffect } from 'react';

const ServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available; show update notification
                  if (confirm('New content is available. Refresh to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        } catch (error) {
          console.log('SW registration failed: ', error);
        }
      });
    }
  }, []);

  return null;
};

export default ServiceWorker;