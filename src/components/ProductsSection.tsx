
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from "@/contexts/TranslationContext";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import productsImage from "@/assets/kiddo-products.png";
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

const ProductsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "Banana Pillow",
      description: "Tropical twist cereal with crispy shells filled with creamy banana-flavored center",
      image: bananaImage,
      color: "text-yellow-800"
    },
    {
      id: 2,
      name: "Honey Rings",
      description: "Golden, crunchy rings infused with natural sweetness of honey",
      image: honeyImage,
      color: "text-orange-800"
    },
    {
      id: 3,
      name: "Strawberry Pillow",
      description: "Playful cereal with crispy shells and luscious strawberry-flavored filling",
      image: strawberryImage,
      color: "text-pink-800"
    },
    {
      id: 4,
      name: "Choco Creamo",
      description: "Rich chocolatey cornflakes with sweet cream filling flavor",
      image: chocoImage,
      color: "text-blue-800"
    },
    {
      id: 5,
      name: "Choco Pops",
      description: "Fun chocolate pops that roll around - perfect for milk or snacking",
      image: chocoPopsImage,
      color: "text-purple-800"
    },
    {
      id: 6,
      name: "Crunchy Pillow",
      description: "Crunchy pillow-like cereal with creamy chocolate filling",
      image: crunchyImage,
      color: "text-green-800"
    },
    {
      id: 7,
      name: "Kiddo Choco Rice",
      description: "Delicious chocolate-flavored rice cereal that's crispy and fun to eat",
      image: chocoRiceImage,
      color: "text-cyan-800"
    },
    {
      id: 8,
      name: "Kiddo Cocoa Scoops",
      description: "Cocoa-flavored cereal scoops with rich chocolate taste and fun shapes",
      image: cocoaScoopsImage,
      color: "text-rose-800"
    },
    {
      id: 9,
      name: "Kiddo Fruit Rings",
      description: "An assortment of fruit flavored cereal rings that ensure every bite is filled with surprises",
      image: fruitRingsImage,
      color: "text-rainbow"
    },
    {
      id: 10,
      name: "Kiddo Corn Flakes",
      description: "Simple, delicious crispy golden cereal flakes that can be enjoyed at any time of the day",
      image: cornFlakesImage,
      color: "text-amber-800"
    },
    {
      id: 11,
      name: "Kiddo Choco Flakes",
      description: "Crispy corn flakes with an added ingredient we all love - chocolate! A classic snack with a twist",
      image: chocoFlakesImage,
      color: "text-brown-800"
    },
    {
      id: 12,
      name: "Kiddo Oat Biscuits",
      description: "Wholesome oat biscuits in multiple flavors - perfect for healthy snacking anytime",
      image: "/lovable-uploads/3418b10e-36ee-4127-812a-6ec7d3a4cac4.png",
      color: "text-amber-800"
    },
    {
      id: 13,
      name: "Kiddo Oats",
      description: "Premium quality oats in convenient jars - nutritious and delicious breakfast option",
      image: "/lovable-uploads/67bdaba8-8cf8-4f23-b200-c4d9c836b289.png",
      color: "text-yellow-800"
    },
    {
      id: 14,
      name: "Kiddo Oat Jars",
      description: "Nutritious oat jars made with premium oats and natural sweeteners - perfect for on-the-go snacking",
      image: "/lovable-uploads/d9546a31-210b-4a34-97dd-4f137136de80.png",
      color: "text-orange-800"
    },
    {
      id: 15,
      name: "Kiddo Oat Jars Green",
      description: "Green apple flavored oat jars with a natural twist - healthy snacking has never been this delicious",
      image: "/lovable-uploads/287f6698-45ee-4e20-b64c-620f3368b5ab.png",
      color: "text-green-800"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('products.description')}
          </p>
        </div>

        {/* Hero Product Image */}
        <div className="mb-16 relative">
          <div className="bg-gradient-warm rounded-3xl p-8 overflow-hidden shadow-card">
            <img
              src="/lovable-uploads/ae02ccb8-aeeb-44b3-9703-c4e7024d1314.png"
              alt="Kiddo Products Collection"
              className="w-full h-auto max-h-[600px] object-contain rounded-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card 
            className="cursor-pointer group hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            onClick={() => navigate('/cereals')}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-primary w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🥣</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                Cereals Collection
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Explore our complete range of delicious cereals
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer group hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            onClick={() => navigate('/oat-jars')}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-secondary w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🍫</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                Oat Jars
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Nutritious oat jars for healthy snacking
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer group hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            onClick={() => navigate('/biscuits')}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-accent w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🍪</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                Oat Biscuits
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Wholesome biscuits in multiple flavors
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('products.subtitle')}
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {t('products.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
