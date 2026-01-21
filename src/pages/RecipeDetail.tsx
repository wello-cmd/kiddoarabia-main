import { useParams, useNavigate } from "react-router-dom";
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

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const recipes = [
    {
      id: 1,
      title: "Classic Cornflakes Bowl",
      description: "A simple yet nutritious breakfast bowl with fresh fruits and nuts",
      image: classicBowlImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.8,
      ingredients: [
        "2 cups Kiddo Cornflakes",
        "1 cup cold milk",
        "1 sliced banana",
        "2 tbsp honey",
        "1/4 cup mixed berries"
      ],
      instructions: [
        "Pour cornflakes into a bowl",
        "Add cold milk until cornflakes are covered",
        "Top with sliced banana and berries",
        "Drizzle honey on top",
        "Serve immediately and enjoy!"
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
      title: "Cornflakes Crusted Chicken",
      description: "Crispy chicken pieces coated with crushed cornflakes for extra crunch",
      image: chickenImage,
      time: "45 mins",
      serves: 4,
      difficulty: "Medium",
      rating: 4.9,
      ingredients: [
        "4 chicken breasts",
        "3 cups Kiddo Cornflakes, crushed",
        "2 eggs, beaten",
        "1/2 cup flour",
        "1 tsp paprika",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Crush cornflakes in a bowl",
        "Set up breading station: flour, beaten eggs, crushed cornflakes",
        "Season chicken with salt, pepper, and paprika",
        "Dredge chicken in flour, dip in eggs, coat with cornflakes",
        "Bake for 25-30 minutes until golden and cooked through"
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
      title: "Cornflakes Energy Bars",
      description: "Homemade energy bars packed with cornflakes, nuts, and dried fruits",
      image: energyBarsImage,
      time: "20 mins",
      serves: 8,
      difficulty: "Easy",
      rating: 4.7,
      ingredients: [
        "3 cups Kiddo Cornflakes",
        "1/2 cup honey",
        "1/2 cup peanut butter",
        "1/4 cup dried cranberries",
        "1/4 cup chopped almonds",
        "1 tsp vanilla extract"
      ],
      instructions: [
        "Line an 8x8 inch pan with parchment paper",
        "In a large bowl, mix cornflakes, cranberries, and almonds",
        "In a saucepan, warm honey and peanut butter until smooth",
        "Add vanilla to the honey mixture",
        "Pour over cornflakes mixture and stir well",
        "Press into prepared pan and refrigerate for 2 hours",
        "Cut into bars and serve"
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
      title: "Cornflakes Smoothie Bowl",
      description: "Creamy smoothie bowl topped with crunchy cornflakes and fresh fruits",
      image: smoothieBowlImage,
      time: "10 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: [
        "1 frozen banana",
        "1/2 cup frozen berries",
        "1/2 cup Greek yogurt",
        "1/4 cup milk",
        "1 cup Kiddo Cornflakes",
        "Fresh fruits for topping"
      ],
      instructions: [
        "Blend frozen banana, berries, yogurt, and milk until smooth",
        "Pour into bowls",
        "Top with cornflakes and fresh fruits",
        "Add a drizzle of honey if desired",
        "Serve immediately"
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
      title: "Cornflakes Cookies",
      description: "Crispy and sweet cookies made with cornflakes for extra texture",
      image: cookiesImage,
      time: "30 mins",
      serves: 24,
      difficulty: "Medium",
      rating: 4.5,
      ingredients: [
        "2 cups Kiddo Cornflakes",
        "1 cup butter, softened",
        "3/4 cup brown sugar",
        "1/2 cup white sugar",
        "1 egg",
        "1 1/2 cups flour",
        "1 tsp vanilla extract"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C)",
        "Cream butter and sugars until light and fluffy",
        "Beat in egg and vanilla",
        "Gradually mix in flour",
        "Fold in cornflakes",
        "Drop spoonfuls onto baking sheet",
        "Bake 10-12 minutes until golden"
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
      title: "Cornflakes Ice Cream Sundae",
      description: "Delicious ice cream sundae with cornflakes for added crunch",
      image: sundaeImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.9,
      ingredients: [
        "4 scoops vanilla ice cream",
        "1 cup Kiddo Cornflakes",
        "2 tbsp chocolate syrup",
        "2 tbsp caramel sauce",
        "Whipped cream",
        "Maraschino cherries"
      ],
      instructions: [
        "Place ice cream scoops in bowls",
        "Sprinkle cornflakes generously over ice cream",
        "Drizzle with chocolate syrup and caramel sauce",
        "Top with whipped cream",
        "Garnish with a cherry",
        "Serve immediately"
      ],
      tags: ["Dessert", "Kids Favorite", "Cold Treat"],
      nutritionFacts: {
        calories: 385,
        protein: "6g",
        carbs: "58g",
        fat: "16g",
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