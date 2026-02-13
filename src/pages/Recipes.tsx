import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
import { motion } from "framer-motion";
import classicBowlImage from "@/assets/classic-cornflakes-bowl.jpg";
import chickenImage from "@/assets/cornflakes-crusted-chicken.jpg";
import energyBarsImage from "@/assets/cornflakes-energy-bars.jpg";
import smoothieBowlImage from "@/assets/cornflakes-smoothie-bowl.jpg";
import cookiesImage from "@/assets/cornflakes-cookies.jpg";
import sundaeImage from "@/assets/cornflakes-ice-cream-sundae.jpg";
import cocoaCrunchMilkshakeImage from "@/assets/cocoa-crunch-milkshake.png";
import honeyRingsMorningBlastImage from "@/assets/honey-rings-morning-blast.png";
import fruitRingsSplashImage from "@/assets/fruit-rings-splash.png";
import cerealEnergyBitesImage from "@/assets/cereal-energy-bites.png";


const Recipes = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const recipes = [
    {
      id: 1,
      title: t('recipe.1.title'),
      description: t('recipe.1.description'),
      image: classicBowlImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.8,
      ingredients: [
        t('recipe.1.ing.1'),
        t('recipe.1.ing.2'),
        t('recipe.1.ing.3'),
        t('recipe.1.ing.4'),
        t('recipe.1.ing.5')
      ],
      instructions: [
        t('recipe.1.inst.1'),
        t('recipe.1.inst.2'),
        t('recipe.1.inst.3'),
        t('recipe.1.inst.4'),
        t('recipe.1.inst.5')
      ],
      tags: ["Quick", "Healthy", "Kids Favorite"]
    },
    {
      id: 2,
      title: t('recipe.2.title'),
      description: t('recipe.2.description'),
      image: chickenImage,
      time: "45 mins",
      serves: 4,
      difficulty: "Medium",
      rating: 4.9,
      ingredients: [
        t('recipe.2.ing.1'),
        t('recipe.2.ing.2'),
        t('recipe.2.ing.3'),
        t('recipe.2.ing.4'),
        t('recipe.2.ing.5'),
        t('recipe.2.ing.6')
      ],
      instructions: [
        t('recipe.2.inst.1'),
        t('recipe.2.inst.2'),
        t('recipe.2.inst.3'),
        t('recipe.2.inst.4'),
        t('recipe.2.inst.5'),
        t('recipe.2.inst.6')
      ],
      tags: ["Dinner", "Family Meal", "Crispy"]
    },
    {
      id: 3,
      title: t('recipe.3.title'),
      description: t('recipe.3.description'),
      image: energyBarsImage,
      time: "20 mins",
      serves: 8,
      difficulty: "Easy",
      rating: 4.7,
      ingredients: [
        t('recipe.3.ing.1'),
        t('recipe.3.ing.2'),
        t('recipe.3.ing.3'),
        t('recipe.3.ing.4'),
        t('recipe.3.ing.5'),
        t('recipe.3.ing.6')
      ],
      instructions: [
        t('recipe.3.inst.1'),
        t('recipe.3.inst.2'),
        t('recipe.3.inst.3'),
        t('recipe.3.inst.4'),
        t('recipe.3.inst.5'),
        t('recipe.3.inst.6'),
        t('recipe.3.inst.7')
      ],
      tags: ["Snack", "No-Bake", "Healthy"]
    },
    {
      id: 4,
      title: t('recipe.4.title'),
      description: t('recipe.4.description'),
      image: smoothieBowlImage,
      time: "10 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: [
        t('recipe.4.ing.1'),
        t('recipe.4.ing.2'),
        t('recipe.4.ing.3'),
        t('recipe.4.ing.4'),
        t('recipe.4.ing.5'),
        t('recipe.4.ing.6')
      ],
      instructions: [
        t('recipe.4.inst.1'),
        t('recipe.4.inst.2'),
        t('recipe.4.inst.3'),
        t('recipe.4.inst.4'),
        t('recipe.4.inst.5')
      ],
      tags: ["Breakfast", "Healthy", "Smoothie"]
    },
    {
      id: 5,
      title: t('recipe.5.title'),
      description: t('recipe.5.description'),
      image: cookiesImage,
      time: "30 mins",
      serves: 24,
      difficulty: "Medium",
      rating: 4.5,
      ingredients: [
        t('recipe.5.ing.1'),
        t('recipe.5.ing.2'),
        t('recipe.5.ing.3'),
        t('recipe.5.ing.4'),
        t('recipe.5.ing.5'),
        t('recipe.5.ing.6'),
        t('recipe.5.ing.7')
      ],
      instructions: [
        t('recipe.5.inst.1'),
        t('recipe.5.inst.2'),
        t('recipe.5.inst.3'),
        t('recipe.5.inst.4'),
        t('recipe.5.inst.5'),
        t('recipe.5.inst.6'),
        t('recipe.5.inst.7')
      ],
      tags: ["Dessert", "Baking", "Sweet"]
    },
    {
      id: 6,
      title: t('recipe.6.title'),
      description: t('recipe.6.description'),
      image: sundaeImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.9,
      ingredients: [
        t('recipe.6.ing.1'),
        t('recipe.6.ing.2'),
        t('recipe.6.ing.3'),
        t('recipe.6.ing.4'),
        t('recipe.6.ing.5'),
        t('recipe.6.ing.6')
      ],
      instructions: [
        t('recipe.6.inst.1'),
        t('recipe.6.inst.2'),
        t('recipe.6.inst.3'),
        t('recipe.6.inst.4'),
        t('recipe.6.inst.5'),
        t('recipe.6.inst.6')
      ],
      tags: ["Dessert", "Kids Favorite", "Cold Treat"]
    },
    {
      id: 7,
      title: t('recipe.7.title'),
      description: t('recipe.7.description'),
      image: cocoaCrunchMilkshakeImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.8,
      ingredients: [
        t('recipe.7.ing.1'),
        t('recipe.7.ing.2'),
        t('recipe.7.ing.3'),
        t('recipe.7.ing.4'),
        t('recipe.7.ing.5')
      ],
      instructions: [
        t('recipe.7.inst.1'),
        t('recipe.7.inst.2'),
        t('recipe.7.inst.3'),
        t('recipe.7.inst.4'),
        t('recipe.7.inst.5')
      ],
      tags: ["Drink", "Chocolate", "Sweet"]
    },
    {
      id: 8,
      title: t('recipe.8.title'),
      description: t('recipe.8.description'),
      image: honeyRingsMorningBlastImage,
      time: "5 mins",
      serves: 1,
      difficulty: "Easy",
      rating: 4.7,
      ingredients: [
        t('recipe.8.ing.1'),
        t('recipe.8.ing.2'),
        t('recipe.8.ing.3'),
        t('recipe.8.ing.4'),
        t('recipe.8.ing.5')
      ],
      instructions: [
        t('recipe.8.inst.1'),
        t('recipe.8.inst.2'),
        t('recipe.8.inst.3'),
        t('recipe.8.inst.4'),
        t('recipe.8.inst.5')
      ],
      tags: ["Drink", "Breakfast", "Energy"]
    },
    {
      id: 9,
      title: t('recipe.9.title'),
      description: t('recipe.9.description'),
      image: fruitRingsSplashImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: [
        t('recipe.9.ing.1'),
        t('recipe.9.ing.2'),
        t('recipe.9.ing.3'),
        t('recipe.9.ing.4'),
        t('recipe.9.inst.1'),
        t('recipe.9.inst.2'),
        t('recipe.9.inst.3'),
        t('recipe.9.inst.4'),
        t('recipe.9.inst.5')
      ],
      instructions: [
        t('recipe.9.inst.1'),
        t('recipe.9.inst.2'),
        t('recipe.9.inst.3'),
        t('recipe.9.inst.4'),
        t('recipe.9.inst.5')
      ],
      tags: ["Drink", "Fruity", "Fun"]
    },
    {
      id: 10,
      title: t('recipe.10.title'),
      description: t('recipe.10.description'),
      image: cerealEnergyBitesImage,
      time: "40 mins",
      serves: 12,
      difficulty: "Easy",
      rating: 4.9,
      ingredients: [
        t('recipe.10.ing.1'),
        t('recipe.10.ing.2'),
        t('recipe.10.ing.3'),
        t('recipe.10.ing.4'),
        t('recipe.10.ing.5')
      ],
      instructions: [
        t('recipe.10.inst.1'),
        t('recipe.10.inst.2'),
        t('recipe.10.inst.3'),
        t('recipe.10.inst.4'),
        t('recipe.10.inst.5')
      ],
      tags: ["Snack", "Healthy", "No-Bake"]
    }

  ];

  // Categorize recipes
  const breakfastRecipes = recipes.filter(recipe =>
    recipe.tags.includes("Breakfast") || recipe.title.includes("Bowl") || recipe.title.includes("Smoothie")
  );
  const snackRecipes = recipes.filter(recipe =>
    recipe.tags.includes("Snack") || recipe.title.includes("Bars") || recipe.title.includes("Energy")
  );
  const dessertRecipes = recipes.filter(recipe =>
    recipe.tags.includes("Dessert") || recipe.title.includes("Cookie") || recipe.title.includes("Ice Cream") || recipe.title.includes("Muffin") || recipe.title.includes("Pudding")
  );
  const drinkRecipes = recipes.filter(recipe =>
    recipe.tags.includes("Drink") || recipe.title.includes("Milk") || recipe.title.includes("Chocolate Milk")
  );

  const categories = [
    { name: "All Recipes", count: recipes.length, active: true },
    { name: "Breakfast", count: breakfastRecipes.length, active: false },
    { name: "Snacks", count: snackRecipes.length, active: false },
    { name: "Desserts", count: dessertRecipes.length, active: false },
    { name: "Drinks", count: drinkRecipes.length, active: false }
  ];

  const RecipeCard = ({ recipe, index, navigate }: { recipe: any, index: number, navigate: any }) => (
    <Card
      key={recipe.id}
      className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        {/* Recipe Image */}
        <div className="h-48 bg-gradient-warm rounded-t-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6">
          {/* Recipe Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{recipe.rating}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {recipe.difficulty}
              </Badge>
            </div>

            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {recipe.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {recipe.description}
            </p>

            {/* Recipe Stats */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {recipe.time}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Serves {recipe.serves}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                <Badge key={tagIndex} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* View Recipe Button */}
            <Button
              className="w-full mt-4"
              variant="outline"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              View Full Recipe
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );



  return (
    <EnhancedLayout>
      <SEOHead
        title={language === 'ar'
          ? "وصفات صحية للأطفال - كورن فليكس، وجبات خفيفة وعصائر | كيدو أرابيا"
          : "Healthy Kids Recipes - Cornflakes, Snacks & Smoothies | Kiddo Arabia"}
        description={language === 'ar'
          ? "اكتشف مجموعتنا من الوصفات اللذيذة والمغذية للأطفال باستخدام منتجات كيدو أرابيا. من أطباق الإفطار إلى ألواح الطاقة، اعثر على الوجبة المثالية لصغارك."
          : "Explore our collection of delicious and nutritious recipes for kids using Kiddo Arabia products. From breakfast bowls to energy bars, find the perfect meal for your little ones."}
        keywords={language === 'ar'
          ? "وصفات أطفال, وجبات صحية, وصفات كورن فليكس, إفطار أطفال, عصائر, وجبات مغذية, وصفات كيدو أرابيا"
          : "kids recipes, healthy snacks, cornflakes recipes, children breakfast ideas, smoothie bowls, nutritious meals, kiddo arabia recipes"}
        lang={language}
      />
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
                {t('recipes.title')}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {t('recipes.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Recipe Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={category.active ? "default" : "secondary"}
                  className="px-4 py-2 cursor-pointer hover:shadow-md transition-all"
                  onClick={() => {
                    const sectionId = category.name.toLowerCase().split(' ')[0]; // "All" -> "all", "Breakfast" -> "breakfast", "Snacks" -> "snacks"
                    if (category.name === "All Recipes") {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>

          {/* Recipe Sections by Category */}
          <div className="space-y-16">
            {/* Breakfast Section */}
            <section id="breakfast" className="scroll-mt-20">
              <h3 className="text-3xl font-bold text-foreground mb-8">🍳 Breakfast Recipes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {breakfastRecipes.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} navigate={navigate} />
                ))}
              </div>
            </section>

            {/* Snacks Section */}
            <section id="snacks" className="scroll-mt-20">
              <h3 className="text-3xl font-bold text-foreground mb-8">🥜 Snack Recipes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {snackRecipes.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} navigate={navigate} />
                ))}
              </div>
            </section>

            {/* Desserts Section */}
            <section id="desserts" className="scroll-mt-20">
              <h3 className="text-3xl font-bold text-foreground mb-8">🍰 Dessert Recipes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dessertRecipes.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} navigate={navigate} />
                ))}
              </div>
            </section>

            {/* Drinks Section */}
            <section id="drinks" className="scroll-mt-20">
              <h3 className="text-3xl font-bold text-foreground mb-8">🥤 Drink Recipes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drinkRecipes.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} navigate={navigate} />
                ))}
              </div>
            </section>
          </div>


          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-warm rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Have a Recipe to Share?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                We'd love to hear from you! Share your creative cornflakes recipes with the Kiddo community.
              </p>
              <Button variant="default" size="lg">
                Submit Your Recipe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </EnhancedLayout>
  );
};

export default Recipes;