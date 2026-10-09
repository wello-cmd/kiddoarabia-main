import PlayInvite from "@/components/PlayInvite";
import StoreStrip from "@/components/StoreStrip";
import HeroSection from "@/components/HeroSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import KiddoWorldSection from "@/components/KiddoWorldSection";
import AboutSection from "@/components/AboutSection";
import RecipesSection from "@/components/RecipesSection";
import ContactSection from "@/components/ContactSection";
import EnhancedLayout from "@/components/EnhancedLayout";

const Index = () => {
  return (
    <>
      <EnhancedLayout>
        <div>
          <HeroSection />
          <ProductCategoriesSection />
          <KiddoWorldSection />
          <PlayInvite />
          <AboutSection />
          <RecipesSection />
          <StoreStrip />
          <ContactSection />
        </div>

          </EnhancedLayout>
    </>
  );
};

export default Index;
