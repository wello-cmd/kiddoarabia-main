import { Helmet } from 'react-helmet-async';

/**
 * Critical CSS for above-the-fold content
 */
const CriticalCss: React.FC = () => {
  const criticalStyles = `
    /* Critical CSS for LCP optimization */
    .critical-hero {
      display: flex;
      min-height: 100vh;
      background: linear-gradient(135deg, hsl(30 100% 85%), hsl(44 100% 95%));
      align-items: center;
      justify-content: center;
    }
    
    .critical-text {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 3rem;
      font-weight: 700;
      color: hsl(15 25% 25%);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    
    .critical-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 2rem;
      background: linear-gradient(135deg, hsl(0 85% 55%), hsl(15 85% 60%));
      color: white;
      border-radius: 0.5rem;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .critical-button:hover {
      transform: scale(1.05);
    }
    
    /* Font preload fallback */
    @font-face {
      font-family: 'Inter-fallback';
      src: local('Arial'), local('Helvetica'), local('sans-serif');
      font-display: fallback;
    }
    
    /* Prevent layout shift */
    .hero-image-container {
      aspect-ratio: 16/9;
      max-width: 100%;
      height: auto;
    }
  `;

  return (
    <Helmet>
      <style type="text/css">{criticalStyles}</style>
    </Helmet>
  );
};

export default CriticalCss;