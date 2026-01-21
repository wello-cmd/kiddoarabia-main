import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
import ProductsSection from "@/components/ProductsSection";
import { motion } from "framer-motion";

const Products = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <EnhancedLayout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-background"
      >
        {/* Header */}
        <div className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {t('products.title')}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {t('products.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <ProductsSection />
      </motion.div>
    </EnhancedLayout>
  );
};

export default Products;