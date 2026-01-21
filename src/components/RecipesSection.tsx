import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, ChefHat, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import breakfastImage from "@/assets/kiddo-breakfast.png";
import classicBowlImage from "@/assets/classic-cornflakes-bowl.jpg";
import energyBarsImage from "@/assets/cornflakes-energy-bars.jpg";
import smoothieBowlImage from "@/assets/cornflakes-smoothie-bowl.jpg";
import cookiesImage from "@/assets/cornflakes-cookies.jpg";
import sundaeImage from "@/assets/cornflakes-ice-cream-sundae.jpg";
import chickenImage from "@/assets/cornflakes-crusted-chicken.jpg";

const RecipesSection = () => {
  const navigate = useNavigate();
  
  // Breakfast recipes
  const breakfastRecipes = [
    {
      id: 1,
      title: "Classic Cornflakes Bowl",
      description: "A simple yet nutritious breakfast bowl with fresh fruits and nuts",
      time: "5 min",
      serves: "2 kids",
      difficulty: "Easy",
      rating: 4.8,
      image: classicBowlImage,
      tags: ["Quick", "Healthy", "Kids Favorite"],
      category: "Breakfast"
    },
    {
      id: 4,
      title: "Cornflakes Smoothie Bowl",
      description: "Creamy smoothie bowl topped with crunchy cornflakes and fresh fruits",
      time: "10 min",
      serves: "2 kids",
      difficulty: "Easy",
      rating: 4.6,
      image: smoothieBowlImage,
      tags: ["Breakfast", "Healthy", "Smoothie"],
      category: "Breakfast"
    },
    {
      id: 12,
      title: "Banana Pillows Smoothie Bowl",
      description: "Creamy banana smoothie bowl topped with Banana Pillows for natural sweetness",
      time: "8 min",
      serves: "2 kids",
      difficulty: "Easy",
      rating: 4.8,
      image: breakfastImage,
      tags: ["Breakfast", "Banana", "Creamy"],
      category: "Breakfast"
    }
  ];

  // Snack recipes
  const snackRecipes = [
    {
      id: 3,
      title: "Cornflakes Energy Bars",
      description: "Homemade energy bars packed with cornflakes, nuts, and dried fruits",
      time: "20 min",
      serves: "8 kids",
      difficulty: "Easy",
      rating: 4.7,
      image: energyBarsImage,
      tags: ["Snack", "No-Bake", "Healthy"],
      category: "Snacks"
    },
    {
      id: 8,
      title: "Honey Rings Granola Bars",
      description: "Homemade granola bars featuring sweet Honey Rings cereal",
      time: "25 min",
      serves: "16 kids",
      difficulty: "Easy",
      rating: 4.7,
      image: energyBarsImage,
      tags: ["Snack", "Healthy", "No-Bake"],
      category: "Snacks"
    }
  ];

  // Dessert recipes
  const dessertRecipes = [
    {
      id: 5,
      title: "Cornflakes Cookies",
      description: "Crispy and sweet cookies made with cornflakes for extra texture",
      time: "30 min",
      serves: "24 kids",
      difficulty: "Medium",
      rating: 4.5,
      image: cookiesImage,
      tags: ["Dessert", "Baking", "Sweet"],
      category: "Desserts"
    },
    {
      id: 6,
      title: "Choco Creamo Ice Cream Sundae",
      description: "Delicious chocolate ice cream sundae with Choco Creamo for added crunch",
      time: "5 min",
      serves: "2 kids",
      difficulty: "Easy",
      rating: 4.9,
      image: sundaeImage,
      tags: ["Dessert", "Chocolate", "Cold Treat"],
      category: "Desserts"
    }
  ];

  // Drink recipes
  const drinkRecipes = [
    {
      id: 10,
      title: "Cocoa Scoops Chocolate Milkshake",
      description: "Rich and creamy chocolate milkshake with floating Cocoa Scoops",
      time: "5 min",
      serves: "2 kids",
      difficulty: "Easy",
      rating: 4.6,
      image: smoothieBowlImage,
      tags: ["Drink", "Chocolate", "Creamy"],
      category: "Drinks"
    }
  ];

  // Featured recipes for homepage display (mix of categories)
  const featuredRecipes = [
    ...breakfastRecipes.slice(0, 1),
    ...snackRecipes.slice(0, 1),
    ...dessertRecipes.slice(0, 1)
  ];

  const categories = [
    { name: "Breakfast", count: breakfastRecipes.length, color: "bg-yellow-400" },
    { name: "Snacks", count: snackRecipes.length, color: "bg-green-400" },
    { name: "Desserts", count: dessertRecipes.length, color: "bg-purple-400" },
    { name: "Drinks", count: drinkRecipes.length, color: "bg-blue-400" }
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Healthy Recipes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover delicious and nutritious recipes that will make healthy eating fun for your kids
          </p>
        </div>

        {/* Featured Recipe */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-glow bg-gradient-warm border-0">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={breakfastImage}
                  alt="Featured breakfast recipe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured Recipe
                  </span>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Superhero Breakfast Bowl
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Start the day right with this power-packed breakfast bowl featuring our Kiddo cereals, 
                      fresh fruits, and a touch of honey. Perfect for giving your little superheroes the energy they need!
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>5 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Serves 2</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2">
                      <ChefHat className="h-4 w-4 text-primary" />
                      <span>Super Easy</span>
                    </div>
                  </div>

                  <Button 
                    variant="kiddo" 
                    size="lg" 
                    className="group"
                    onClick={() => navigate('/recipe/1')}
                  >
                    Get Recipe
                    <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Recipe Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Browse by Category</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="cursor-pointer group hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate(`/recipes#${category.name.toLowerCase()}`)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${category.color} w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ChefHat className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.count} recipes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredRecipes.map((recipe, index) => (
            <Card 
              key={recipe.id}
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <div className="h-48 relative overflow-hidden rounded-t-lg">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/40 text-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{recipe.rating}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    {recipe.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {recipe.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.serves}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="h-4 w-4" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-playful rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want More Recipes?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join our community and get access to hundreds of kid-friendly recipes, meal plans, and nutrition tips
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/recipes')}
            >
              Browse All Recipes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;