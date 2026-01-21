import React from 'react';
import ParticleSystem from '@/components/ParticleSystem';
import CursorTrail from '@/components/CursorTrail';
import ScrollProgress from '@/components/ScrollProgress';
import ProductionReadyHeader from '@/components/ProductionReadyHeader';
import Footer from '@/components/Footer';
import AiBot from '@/components/AiBot';
import CookieConsent from '@/components/CookieConsent';
import SkipToContent from '@/components/SkipToContent';
import { motion } from 'framer-motion';

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
  showScrollProgress = true
}) => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      {/* Performance-optimized effects - only in development */}
      {process.env.NODE_ENV === 'development' && showParticles && <ParticleSystem />}
      {process.env.NODE_ENV === 'development' && showCursorTrail && <CursorTrail />}
      {showScrollProgress && <ScrollProgress />}

      {/* Elite-tier navigation */}
      <ProductionReadyHeader />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 pt-16"
      >
        {children}
      </motion.main>

      <Footer />
      <AiBot />
      <CookieConsent />
    </div>
  );
};

export default EnhancedLayout;