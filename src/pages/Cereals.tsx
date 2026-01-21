import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
import { motion } from "framer-motion";
import bananaImage from "@/assets/banana-pillow-official.jpg";
import honeyImage from "@/assets/honey-rings-official.jpg";
import strawberryImage from "@/assets/strawberry-pillow-official.jpg";
import chocoImage from "@/assets/choco-creamo-official.jpg";
import chocoPopsImage from "@/assets/choco-pops-official.jpg";
import crunchyImage from "@/assets/crunchy-pillow-official.jpg";
import chocoRiceImage from "@/assets/choco-rice-official.jpg";
import cocoaScoopsImage from "@/assets/cocoa-scoops-official.jpg";
import fruitRingsImage from "@/assets/fruit-rings-official.jpg";
import cornFlakesImage from "@/assets/corn-flakes-official.jpg";
import chocoFlakesImage from "@/assets/choco-flakes-official.jpg";

const Cereals = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const cereals = [
    {
      id: 1,
      name: "Banana Pillow",
      description: "Tropical twist cereal with crispy shells filled with creamy banana-flavored center",
      image: bananaImage,
      category: "Pillow Series"
    },
    {
      id: 2,
      name: "Honey Rings",
      description: "Golden, crunchy rings infused with natural sweetness of honey",
      image: honeyImage,
      category: "Ring Series"
    },
    {
      id: 3,
      name: "Strawberry Pillow",
      description: "Playful cereal with crispy shells and luscious strawberry-flavored filling",
      image: strawberryImage,
      category: "Pillow Series"
    },
    {
      id: 4,
      name: "Choco Creamo",
      description: "Rich chocolatey cornflakes with sweet cream filling flavor",
      image: chocoImage,
      category: "Chocolate Series"
    },
    {
      id: 5,
      name: "Choco Pops",
      description: "Fun chocolate pops that roll around - perfect for milk or snacking",
      image: chocoPopsImage,
      category: "Chocolate Series"
    },
    {
      id: 6,
      name: "Crunchy Pillow",
      description: "Crunchy pillow-like cereal with creamy chocolate filling",
      image: crunchyImage,
      category: "Pillow Series"
    },
    {
      id: 7,
      name: "Kiddo Choco Rice",
      description: "Delicious chocolate-flavored rice cereal that's crispy and fun to eat",
      image: chocoRiceImage,
      category: "Rice Series"
    },
    {
      id: 8,
      name: "Kiddo Cocoa Scoops",
      description: "Cocoa-flavored cereal scoops with rich chocolate taste and fun shapes",
      image: cocoaScoopsImage,
      category: "Chocolate Series"
    },
    {
      id: 9,
      name: "Kiddo Fruit Rings",
      description: "An assortment of fruit flavored cereal rings that ensure every bite is filled with surprises",
      image: fruitRingsImage,
      category: "Ring Series"
    },
    {
      id: 10,
      name: "Kiddo Corn Flakes",
      description: "Simple, delicious crispy golden cereal flakes that can be enjoyed at any time of the day",
      image: cornFlakesImage,
      category: "Classic Series"
    },
    {
      id: 11,
      name: "Kiddo Choco Flakes",
      description: "Crispy corn flakes with an added ingredient we all love - chocolate! A classic snack with a twist",
      image: chocoFlakesImage,
      category: "Chocolate Series"
    }
  ];

  const categories = ["All", "Pillow Series", "Ring Series", "Chocolate Series", "Classic Series", "Rice Series"];

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
              onClick={() => navigate('/products')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('pages.cereals.backToProducts')}
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {t('pages.cereals.title')}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {t('pages.cereals.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Cereals Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cereals.map((cereal, index) => (
                <Card 
                  key={cereal.id} 
                  className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {cereal.category}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="h-48 rounded-xl mb-4 relative overflow-hidden bg-white flex items-center justify-center">
                      <img 
                        src={cereal.image} 
                        alt={cereal.name}
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {cereal.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cereal.description}
                      </p>

                      {/* View Button */}
                      <div className="pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="group">
                              <Eye className="mr-2 h-4 w-4" />
                              {t('pages.cereals.viewDetails')}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                                  <img 
                                    src={cereal.image} 
                                    alt={cereal.name}
                                    className="max-w-full max-h-64 object-contain rounded-xl"
                                  />
                                </div>
                              </div>
                              <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">{cereal.name}</h2>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                  {cereal.category}
                                </span>
                                <p className="text-muted-foreground">{cereal.description}</p>
                                <div className="bg-muted p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">{t('pages.cereals.productFeatures')}:</h3>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• {t('pages.cereals.feature1')}</li>
                                    <li>• {t('pages.cereals.feature2')}</li>
                                    <li>• {t('pages.cereals.feature3')}</li>
                                    <li>• {t('pages.cereals.feature4')}</li>
                                    <li>• {t('pages.cereals.feature5')}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Info Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-hero rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t('pages.cereals.infoTitle')}
                </h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  {t('pages.cereals.infoDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </EnhancedLayout>
  );
};

export default Cereals;