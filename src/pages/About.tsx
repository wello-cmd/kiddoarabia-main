import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Leaf, Users, Award, Globe, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every product is crafted with care and love for children's health and happiness."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest safety standards in all our manufacturing processes."
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Only the finest natural ingredients make it into our products."
    },
    {
      icon: Users,
      title: "Family Focused",
      description: "We understand families and create products that bring them together."
    }
  ];

  const achievements = [
    { number: "50+", label: "Countries Served" },
    { number: "1M+", label: "Happy Families" },
    { number: "4+", label: "Years of Excellence" },
    { number: "100%", label: "Natural Ingredients" }
  ];

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
              {t('nav.about')}
            </Button>

            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {t('about.story.title')}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {t('about.story.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Kiddo Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a simple mission: to provide children with nutritious, delicious, and safe breakfast options
                that parents can trust. Our journey began when our founders, as parents themselves, realized the need for
                healthier breakfast alternatives in the region.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To nourish young minds and bodies with love, care, and the finest natural ingredients.
                  We believe that a great day starts with a great breakfast, and every child deserves
                  the very best nutrition to fuel their dreams and adventures.
                </p>
                <p className="text-muted-foreground">
                  From our state-of-the-art facilities in Egypt, we ensure that every grain of our
                  cornflakes meets the highest quality standards, bringing joy and nutrition to breakfast
                  tables across the Middle East and beyond.
                </p>
              </div>
              <div className="bg-gradient-warm rounded-3xl h-64 flex items-center justify-center">
                <Globe className="h-24 w-24 text-white/60" />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-warm rounded-3xl p-12 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold">{achievement.number}</div>
                  <div className="text-lg opacity-90">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Behind every great product is a passionate team. Our experts in nutrition, food science,
              and child development work together to create the perfect breakfast experience.
            </p>
            <Button size="lg" variant="outline">
              Join Our Team
            </Button>
          </div>
        </div>
      </motion.div>
    </EnhancedLayout>
  );
};

export default About;