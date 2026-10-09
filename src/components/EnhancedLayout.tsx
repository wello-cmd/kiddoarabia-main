import React from 'react';
import ParticleSystem from '@/components/ParticleSystem';
import CursorTrail from '@/components/CursorTrail';
import ScrollProgress from '@/components/ScrollProgress';
import ProductionReadyHeader from '@/components/ProductionReadyHeader';
import Footer from '@/components/Footer';

interface EnhancedLayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
  showCursorTrail?: boolean;
  showScrollProgress?: boolean;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({ 
  children, 
  showParticles = false, // Disabled for performance
  showCursorTrail = false, // Disabled for performance
  showScrollProgress = false
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Performance-optimized effects - only in development */}
      {import.meta.env.DEV && showParticles && <ParticleSystem />}
      {import.meta.env.DEV && showCursorTrail && <CursorTrail />}
      {showScrollProgress && <ScrollProgress />}
      
      {/* Elite-tier navigation */}
      <ProductionReadyHeader />
      
      <main id="main-content" tabIndex={-1} className="relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default EnhancedLayout;