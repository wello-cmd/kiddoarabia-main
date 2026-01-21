import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  import('./utils/performance').then(({ measureWebVitals }) => {
    measureWebVitals();
  });
}

// Accessibility monitoring in development
if (process.env.NODE_ENV === 'development') {
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