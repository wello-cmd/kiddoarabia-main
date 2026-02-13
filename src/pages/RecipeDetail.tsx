import { useParams, useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Star, ArrowLeft, Check } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
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

const RecipeDetail = () => {
  const { id } = useParams();
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
      tags: ["Quick", "Healthy", "Kids Favorite"],
      nutritionFacts: {
        calories: 320,
        protein: "8g",
        carbs: "65g",
        fat: "4g",
        fiber: "6g"
      }
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
      tags: ["Dinner", "Family Meal", "Crispy"],
      nutritionFacts: {
        calories: 485,
        protein: "42g",
        carbs: "28g",
        fat: "22g",
        fiber: "3g"
      }
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
      tags: ["Snack", "No-Bake", "Healthy"],
      nutritionFacts: {
        calories: 285,
        protein: "8g",
        carbs: "35g",
        fat: "14g",
        fiber: "4g"
      }
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
      tags: ["Breakfast", "Healthy", "Smoothie"],
      nutritionFacts: {
        calories: 245,
        protein: "12g",
        carbs: "45g",
        fat: "3g",
        fiber: "8g"
      }
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
      tags: ["Dessert", "Baking", "Sweet"],
      nutritionFacts: {
        calories: 165,
        protein: "2g",
        carbs: "26g",
        fat: "6g",
        fiber: "1g"
      }
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
      tags: ["Dessert", "Kids Favorite", "Cold Treat"],
      nutritionFacts: {
        calories: 385,
        protein: "6g",
        carbs: "58g",
        fat: "16g",
        fiber: "2g"
      }
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
      tags: ["Drink", "Chocolate", "Sweet"],
      nutritionFacts: {
        calories: 350,
        protein: "8g",
        carbs: "45g",
        fat: "15g",
        fiber: "2g"
      }
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
      tags: ["Drink", "Breakfast", "Energy"],
      nutritionFacts: {
        calories: 280,
        protein: "9g",
        carbs: "42g",
        fat: "10g",
        fiber: "5g"
      }
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
      tags: ["Drink", "Fruity", "Fun"],
      nutritionFacts: {
        calories: 210,
        protein: "8g",
        carbs: "30g",
        fat: "5g",
        fiber: "1g"
      }
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
      tags: ["Snack", "Healthy", "No-Bake"],
      nutritionFacts: {
        calories: 140,
        protein: "4g",
        carbs: "18g",
        fat: "6g",
        fiber: "2g"
      }
    }
  ];

  const recipe = recipes.find(r => r.id === parseInt(id || "1"));

  if (!recipe) {
    return (
      <EnhancedLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
          <Button onClick={() => navigate('/recipes')}>
            {t('recipes.browseAll')}
          </Button>
        </div>
      </EnhancedLayout>
    );
  }

  return (
    <EnhancedLayout>
      <SEOHead
        title={`${recipe.title} - ${language === 'ar' ? 'وصفات كيدو أرابيا' : 'Kiddo Arabia Recipes'}`}
        description={recipe.description}
        image={recipe.image}
        keywords={`recipe, ${recipe.tags.join(', ')}, kiddo arabia`}
        type="article"
        lang={language}
      />
      <div className="bg-background">
        {/* Header */}
        <div className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/recipes')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('recipes.browseAll')}
            </Button>

            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {recipe.title}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {recipe.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recipe Image */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-96 object-cover"
                />
              </Card>

              {/* Recipe Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold">{recipe.time}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Serves</p>
                    <p className="font-semibold">{recipe.serves}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <ChefHat className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-semibold">{recipe.difficulty}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Rating */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold">{recipe.rating}</span>
                      <span className="text-muted-foreground">/ 5.0</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recipe Details */}
            <div className="space-y-6">
              {/* Ingredients */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Instructions */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <p className="pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Nutrition Facts */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Nutrition Facts</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-2xl font-bold text-primary">{recipe.nutritionFacts.calories}</p>
                      <p className="text-sm text-muted-foreground">Calories</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-lg font-semibold">{recipe.nutritionFacts.protein}</p>
                      <p className="text-sm text-muted-foreground">Protein</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-lg font-semibold">{recipe.nutritionFacts.carbs}</p>
                      <p className="text-sm text-muted-foreground">Carbs</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-lg font-semibold">{recipe.nutritionFacts.fat}</p>
                      <p className="text-sm text-muted-foreground">Fat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* More Recipes */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">More Recipes You'll Love</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recipes.filter(r => r.id !== recipe.id).slice(0, 3).map((otherRecipe) => (
                <Card
                  key={otherRecipe.id}
                  className="hover:shadow-glow transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/recipe/${otherRecipe.id}`)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={otherRecipe.image}
                      alt={otherRecipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{otherRecipe.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {otherRecipe.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {otherRecipe.rating}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
};

export default RecipeDetail;