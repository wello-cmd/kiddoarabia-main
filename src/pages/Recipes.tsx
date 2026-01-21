import { Button } from "@/components/ui/button";
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
import chocoMuffinsImage from "@/assets/choco-muffins.jpg";
import fruitRingsParfaitImage from "@/assets/fruit-rings-parfait.jpg";
import cocoaChocolateMilkImage from "@/assets/cocoa-chocolate-milk.jpg";
import chocoRicePuddingImage from "@/assets/choco-rice-pudding.jpg";
import strawberrySmoothieBowlImage from "@/assets/strawberry-smoothie-bowl.jpg";

const Recipes = () => {
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
      tags: ["Quick", "Healthy", "Kids Favorite"]
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
      tags: ["Dinner", "Family Meal", "Crispy"]
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
      tags: ["Snack", "No-Bake", "Healthy"]
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
      tags: ["Breakfast", "Healthy", "Smoothie"]
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
      tags: ["Dessert", "Baking", "Sweet"]
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
      tags: ["Dessert", "Kids Favorite", "Cold Treat"]
    },
    {
      id: 7,
      title: "Choco Pops Chocolate Muffins",
      description: "Moist chocolate muffins with crunchy Choco Pops for extra fun",
      image: chocoMuffinsImage,
      time: "35 mins",
      serves: 12,
      difficulty: "Medium",
      rating: 4.8,
      ingredients: [
        "2 cups flour",
        "1/2 cup cocoa powder",
        "1 cup Kiddo Choco Pops",
        "1/2 cup sugar",
        "2 eggs",
        "1 cup milk",
        "1/3 cup vegetable oil"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Mix dry ingredients in a large bowl",
        "Whisk eggs, milk, and oil in another bowl",
        "Combine wet and dry ingredients",
        "Fold in Choco Pops",
        "Fill muffin cups and bake 18-20 minutes"
      ],
      tags: ["Breakfast", "Chocolate", "Baking"]
    },
    {
      id: 8,
      title: "Honey Rings Granola Bars",
      description: "Homemade granola bars featuring sweet Honey Rings cereal",
      image: energyBarsImage,
      time: "25 mins",
      serves: 16,
      difficulty: "Easy",
      rating: 4.7,
      ingredients: [
        "3 cups Kiddo Honey Rings",
        "1/2 cup rolled oats",
        "1/3 cup honey",
        "1/4 cup peanut butter",
        "1/4 cup chopped almonds",
        "2 tbsp chia seeds"
      ],
      instructions: [
        "Line a 9x9 pan with parchment paper",
        "Mix Honey Rings, oats, almonds, and chia seeds",
        "Warm honey and peanut butter until smooth",
        "Pour over dry mixture and stir well",
        "Press firmly into prepared pan",
        "Refrigerate 2 hours, then cut into bars"
      ],
      tags: ["Snack", "Healthy", "No-Bake"]
    },
    {
      id: 9,
      title: "Fruit Rings Rainbow Parfait",
      description: "Colorful layered parfait with Fruit Rings and fresh fruits",
      image: fruitRingsParfaitImage,
      time: "15 mins",
      serves: 4,
      difficulty: "Easy",
      rating: 4.9,
      ingredients: [
        "2 cups Kiddo Fruit Rings",
        "2 cups Greek yogurt",
        "1 cup mixed berries",
        "1 banana, sliced",
        "2 tbsp honey",
        "1/4 cup granola"
      ],
      instructions: [
        "Mix yogurt with honey",
        "Layer yogurt in glasses",
        "Add a layer of Fruit Rings",
        "Add fresh fruits",
        "Repeat layers",
        "Top with granola and serve"
      ],
      tags: ["Breakfast", "Healthy", "Colorful"]
    },
    {
      id: 10,
      title: "Cocoa Scoops Chocolate Milk",
      description: "Rich and creamy chocolate milk with floating Cocoa Scoops",
      image: cocoaChocolateMilkImage,
      time: "3 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: [
        "2 cups cold milk",
        "3 tbsp chocolate syrup",
        "1 cup Kiddo Cocoa Scoops",
        "Whipped cream",
        "Chocolate shavings"
      ],
      instructions: [
        "Mix milk and chocolate syrup",
        "Pour into tall glasses",
        "Add Cocoa Scoops to float on top",
        "Top with whipped cream",
        "Garnish with chocolate shavings",
        "Serve with a straw"
      ],
      tags: ["Drink", "Chocolate", "Quick"]
    },
    {
      id: 11,
      title: "Choco Rice Pudding",
      description: "Creamy rice pudding elevated with crunchy Choco Rice cereal",
      image: chocoRicePuddingImage,
      time: "40 mins",
      serves: 6,
      difficulty: "Medium",
      rating: 4.5,
      ingredients: [
        "1 cup jasmine rice",
        "4 cups milk",
        "1/3 cup sugar",
        "1 tsp vanilla",
        "1 cup Kiddo Choco Rice",
        "Cinnamon for dusting"
      ],
      instructions: [
        "Cook rice in 2 cups water until tender",
        "Add milk and sugar, simmer 20 minutes",
        "Stir in vanilla",
        "Cool slightly and fold in Choco Rice",
        "Serve warm or chilled",
        "Dust with cinnamon before serving"
      ],
      tags: ["Dessert", "Comfort Food", "Creamy"]
    },
    {
      id: 12,
      title: "Strawberry Pillows Smoothie Bowl",
      description: "Pink smoothie bowl topped with Strawberry Pillows for sweetness",
      image: strawberrySmoothieBowlImage,
      time: "10 mins",
      serves: 2,
      difficulty: "Easy",
      rating: 4.8,
      ingredients: [
        "1 cup frozen strawberries",
        "1 frozen banana",
        "1/2 cup Greek yogurt",
        "1/4 cup milk",
        "1 cup Kiddo Strawberry Pillows",
        "Fresh strawberries for topping"
      ],
      instructions: [
        "Blend frozen fruits, yogurt, and milk until smooth",
        "Pour into bowls",
        "Top with Strawberry Pillows",
        "Add fresh strawberry slices",
        "Drizzle with honey if desired",
        "Serve immediately"
      ],
      tags: ["Breakfast", "Fruity", "Pink"]
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
              >
                <a href={`#${category.name.toLowerCase().replace(' ', '-')}`}>
                  {category.name} ({category.count})
                </a>
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
          <div className="bg-gradient-warm rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Have a Recipe to Share?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              We'd love to hear from you! Share your creative cornflakes recipes with the Kiddo community.
            </p>
            <Button variant="secondary" size="lg">
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