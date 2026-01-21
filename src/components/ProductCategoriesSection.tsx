import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Star } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const ProductCategoriesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      id: "cereals",
      name: "Cereals Collection",
      description: "Explore our complete range of delicious cereals",
      icon: "🥣",
      gradient: "bg-gradient-hero",
      route: "/cereals",
      particles: <Sparkles className="h-4 w-4" />
    },
    {
      id: "oat-jars",
      name: "Oat Jars",
      description: "Nutritious oat jars for healthy snacking",
      icon: "🍯",
      gradient: "bg-gradient-warm",
      route: "/oat-jars",
      particles: <Zap className="h-4 w-4" />
    },
    {
      id: "biscuits",
      name: "Oat Biscuits",
      description: "Wholesome biscuits in multiple flavors",
      icon: "🍪",
      gradient: "bg-gradient-playful",
      route: "/biscuits",
      particles: <Star className="h-4 w-4" />
    }
  ];

  return (
    <motion.section
      id="products"
      className="py-20 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background - Simplified */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-secondary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.span
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))",
                  "linear-gradient(45deg, hsl(var(--accent)), hsl(var(--secondary)))",
                  "linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--primary)))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-clip-text text-transparent"
            >
              {t('products.title')}
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('products.description')}
          </motion.p>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                rotateX: 0
              } : {
                opacity: 0,
                y: 100,
                rotateX: -15
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <TiltCard
                onClick={() => navigate(category.route)}
                className="h-full"
              >
                <Card
                  className="group cursor-pointer hover:shadow-glow transition-all duration-300 bg-card border-border/50 overflow-hidden relative h-full"
                >

                  <CardContent className="p-8 text-center h-full flex flex-col justify-between relative z-10">
                    {/* Category Icon */}
                    <div
                      className={`${category.gradient} w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-3xl relative z-10">{category.icon}</span>
                    </div>

                    {/* Category Info */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Explore Button */}
                    <Button
                      className="w-full mt-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(category.route);
                      }}
                      variant="kiddo"
                    >
                      <span>Explore Collection</span>
                      <Sparkles className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Info Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-hero rounded-3xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <motion.h3
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {t('products.subtitle')}
            </motion.h3>
            <motion.p
              className="text-lg opacity-90 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {t('products.description')}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section >
  );
};

export default ProductCategoriesSection;