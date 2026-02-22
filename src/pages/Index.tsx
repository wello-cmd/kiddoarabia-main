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
import { useTranslation } from "@/contexts/TranslationContext";

const Index = () => {
  const { language } = useTranslation();

  return (
    <>
      <SEOHead
        title={language === 'ar'
          ? "كيدو أرابيا - تغذية متميزة للأطفال | صنعت بكل حب وعناية"
          : "Kiddo Arabia - Premium Kids' Nutrition | Made with Love & Care"}
        description={language === 'ar'
          ? "🌟 نغذي صغارك بأجود وأفضل المكونات الصحية. حبوب إفطار متميزة، برطمانات الشوفان والبسكويت المصنوعة بكل حب لنمو العقول والأجساد."
          : "🌟 Nourishing your little ones with the finest, healthiest ingredients. Premium cereals, oat jars & biscuits crafted with love for growing minds and bodies."}
        keywords={language === 'ar'
          ? "تغذية الأطفال, حبوب صحية, طعام أطفال, برطمانات شوفان متميزة, كيدو أرابيا, مكونات طبيعية"
          : "kids nutrition, healthy cereals, children food, premium oat jars, kiddo arabia, natural ingredients"}
        lang={language}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kiddo Arabia",
          "description": language === 'ar' ? "تغذية صحية متميزة للأطفال بمكونات طبيعية" : "Premium healthy nutrition for children with natural ingredients",
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

        {/* Development Tools */}
        <PerformanceMonitor />
        <AccessibilityChecker />
      </EnhancedLayout>
    </>
  );
};

export default Index;
