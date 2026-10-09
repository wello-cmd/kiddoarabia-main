import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './styles/kiddo-redesign.css';
import './styles/kiddo-brand.css';
import './styles/kiddo-heroes.css';

// Performance monitoring
if (import.meta.env.PROD) {
  import('./utils/performance').then(({ measureWebVitals }) => {
    measureWebVitals();
  });
}

// Accessibility monitoring in development
if (import.meta.env.DEV) {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
  });
}

const helmetContext = {};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
);
