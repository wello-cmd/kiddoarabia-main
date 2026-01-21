import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
import ScrollReveal from "@/components/ScrollReveal";

const Biscuits = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const biscuits = [
    {
      id: 1,
      name: "Kiddo Oat Biscuits Chocolate",
      description: "Rich chocolate oat biscuits with cocoa flavor - perfect for chocolate lovers",
      image: "/images/Kiddo Oat Biscuits with Cocoa.jpeg",
      flavor: "Chocolate",
      ingredients: ["Oats", "Cocoa Powder", "Whole Wheat", "Natural Sweeteners"],
      benefits: ["High Fiber", "Calcium Rich", "No Trans Fat", "Kid-Friendly Size"]
    },
    {
      id: 2,
      name: "Kiddo Oat Biscuits Apple Cinnamon",
      description: "Apple cinnamon flavored oat biscuits with natural apple pieces and warm spices",
      image: "/images/Kiddo Oat Biscuits Apple Cinnamon.jpeg",
      flavor: "Apple Cinnamon",
      ingredients: ["Oats", "Real Apple Pieces", "Cinnamon", "Natural Flavors"],
      benefits: ["Natural Fruit", "Warm Spices", "Wholesome Goodness", "Perfect Snack Size"]
    },
    {
      id: 3,
      name: "Kiddo Oat Biscuits",
      description: "Oat biscuits made with a delightful taste",
      image: "/images/Kiddo Oat Biscuits.jpeg",
      flavor: "Plain",
      ingredients: ["Oats", "Whole Grains", "Essential Vitamins"],
      benefits: ["Natural Sweetness", "Energy Boost", "Vitamin Enriched", "Satisfying Crunch"]
    },
    {
      id: 4,
      name: "Kiddo Oat Biscuits Coconut",
      description: "Tropical coconut flavored oat biscuits with real coconut flakes for an exotic taste",
      image: "/images/Kiddo Oat Biscuits Coconut.jpeg",
      flavor: "Coconut",
      ingredients: ["Oats", "Coconut Flakes", "Natural Coconut Oil", "Tropical Flavors"],
      benefits: ["Tropical Taste", "Natural Oils", "Unique Flavor", "Crunchy Texture"]
    }
  ];

  return (
    <EnhancedLayout>
      <div className="bg-background">
        {/* Header */}
        <div className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/products')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('pages.biscuits.backToProducts')}
            </Button>

            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <ScrollReveal animation="fade" delay={0.1}>
                  {t('pages.biscuits.title')}
                </ScrollReveal>
              </h1>
              <div className="text-xl opacity-90 max-w-2xl mx-auto">
                <ScrollReveal animation="fade" delay={0.2}>
                  {t('pages.biscuits.subtitle')}
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {biscuits.map((product, index) => (
                <ScrollReveal key={product.id} animation="scale" delay={index * 0.1}>
                  <Card
                    className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border/50"
                  >
                    <CardContent className="p-6">
                      {/* Product Image */}
                      <div className="h-48 rounded-xl mb-4 relative overflow-hidden bg-white flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain rounded-xl"
                          style={{
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                            {product.flavor} {t('pages.biscuits.flavor')}
                          </span>
                        </div>

                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>

                        {/* Ingredients */}
                        <div className="bg-muted p-3 rounded-lg">
                          <h4 className="font-semibold mb-2 text-sm">{t('pages.biscuits.keyIngredients')}:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {product.ingredients.map((ingredient, idx) => (
                              <div key={idx} className="flex items-center gap-1 text-xs">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                {ingredient}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <h4 className="font-semibold mb-2 text-sm">{t('pages.biscuits.benefits')}:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {product.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-1 text-xs">
                                <span className="text-green-500 text-xs">✓</span>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Info Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-hero rounded-3xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  {t('pages.biscuits.infoTitle')}
                </h3>
                <p className="text-lg opacity-90">
                  {t('pages.biscuits.infoDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedLayout>
  );
};

export default Biscuits;