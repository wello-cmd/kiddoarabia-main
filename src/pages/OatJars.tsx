import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";

const OatJars = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const oatJars = [
    {
      id: 1,
      name: "Kiddo Oat Jars Original",
      description: "Nutritious oat jars made with premium oats and natural sweeteners - perfect for on-the-go snacking",
      image: "/lovable-uploads/d9546a31-210b-4a34-97dd-4f137136de80.png",
      ingredients: ["Premium Oats", "Natural Honey", "Almonds", "Dried Fruits"],
      benefits: ["High in Fiber", "Natural Energy", "No Artificial Colors", "Kids Approved"]
    },
    {
      id: 2,
      name: "Kiddo Oat Jars Green Apple",
      description: "Green apple flavored oat jars with a natural twist - healthy snacking has never been this delicious",
      image: "/lovable-uploads/287f6698-45ee-4e20-b64c-620f3368b5ab.png",
      ingredients: ["Premium Oats", "Green Apple Extract", "Natural Sweeteners", "Vitamins"],
      benefits: ["Rich in Vitamins", "Fresh Apple Taste", "Wholesome Nutrition", "Perfect for Kids"]
    }
  ];

  return (
    <EnhancedLayout>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <div className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/products')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('pages.oatjars.backToProducts')}
            </Button>

            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {t('pages.oatjars.title')}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {t('pages.oatjars.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {oatJars.map((product, index) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border/50"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    {/* Product Image */}
                    <div className="h-64 rounded-xl mb-6 relative overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors mb-3">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Ingredients */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{t('pages.oatjars.keyIngredients')}:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.ingredients.map((ingredient, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{t('pages.oatjars.benefits')}:</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Info Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-hero rounded-3xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  {t('pages.oatjars.infoTitle')}
                </h3>
                <p className="text-lg opacity-90">
                  {t('pages.oatjars.infoDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedLayout>
  );
};

export default OatJars;