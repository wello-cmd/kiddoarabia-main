import HeroSection from "@/components/HeroSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import AboutSection from "@/components/AboutSection";
import RecipesSection from "@/components/RecipesSection";
import ContactSection from "@/components/ContactSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";
import SecurityHeaders from "@/components/SecurityHeaders";
import CriticalCss from "@/components/CriticalCss";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AccessibilityChecker from "@/components/AccessibilityChecker";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Kiddo Arabia - Premium Kids' Nutrition | Made with Love & Care"
        description="🌟 Nourishing your little ones with the finest, healthiest ingredients. Premium cereals, oat jars & biscuits crafted with love for growing minds and bodies."
        keywords="kids nutrition, healthy cereals, children food, premium oat jars, kiddo arabia, natural ingredients"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kiddo Arabia",
          "description": "Premium healthy nutrition for children with natural ingredients",
          "url": "https://kiddo-arabia.com",
          "logo": "https://kiddo-arabia.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-xxx-xxxx",
            "contactType": "customer service"
          }
        }}
      />
      <SecurityHeaders />
      <CriticalCss />
      <EnhancedLayout>
        <main id="main-content" role="main">
          <HeroSection />
          <ScrollReveal animation="slide" delay={0.2}>
            <TrustSignalsSection />
          </ScrollReveal>
          <ScrollReveal animation="fade" delay={0.1}>
            <ProductCategoriesSection />
          </ScrollReveal>
          <ScrollReveal animation="scale">
            <TestimonialsSection />
          </ScrollReveal>
          <ScrollReveal animation="fade">
            <AboutSection />
          </ScrollReveal>
          <ScrollReveal animation="slide" delay={0.2}>
            <RecipesSection />
          </ScrollReveal>
          <ScrollReveal animation="fade">
            <ContactSection />
          </ScrollReveal>
        </main>

        {/* Development Tools */}
        <PerformanceMonitor />
        <AccessibilityChecker />
      </EnhancedLayout>
    </>
  );
};

export default Index;
