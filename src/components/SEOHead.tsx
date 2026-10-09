import { recipes } from "@/data/recipes";
import { blogPosts } from "@/data/blog";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const origin = "https://kiddo-kid.com";
const pages: Record<string, { title: string; description: string }> = {
  "/": { title: "Kiddo Arabia | Cereals, Oat Jars & Family Recipes", description: "Discover Kiddo Arabia cereals, oat jars and oat biscuits. Explore the product ranges and find simple family recipes." },
  "/products": { title: "Kiddo Arabia Products | Cereals, Oat Jars & Biscuits", description: "Browse Kiddo Arabia's range of cereals, oat jars and oat biscuits." },
  "/cereals": { title: "Kiddo Cereals | Flavors for Every Breakfast", description: "Explore Kiddo cereals, from corn flakes and honey rings to chocolate and fruit flavors." },
  "/oat-jars": { title: "Kiddo Oat Jars | Explore the Range", description: "Discover the Kiddo oat jar collection and explore whole-grain and quick-cooking oats." },
  "/biscuits": { title: "Kiddo Oat Biscuits | Explore the Range", description: "Browse Kiddo oat biscuits and their available flavors." },
  "/recipes": { title: "Family Recipes with Kiddo | Breakfast & More", description: "Find easy breakfast, snack and dessert ideas made with Kiddo products." },
  "/blog": { title: "Kiddo Journal | Products, Recipes & Family Moments", description: "Read stories and ideas from Kiddo Arabia about products, recipes and family moments." },
  "/about": { title: "About Kiddo Arabia | Our Story & Leadership", description: "Learn about Kiddo Arabia and meet our CEO, Waleed Fathy Afify." },
  "/play": {title:"Kiddo Club | Mini Games & Free Coloring Books",description:"Play mascot matching, character quizzes and cereal games. Download free printable Kiddo coloring pages."},
  "/partners": {title:"Partner with Kiddo | Retailers & Worldwide Distributors",description:"Contact Kiddo Arabia about retail and worldwide distribution opportunities for cereals, oats and oat biscuits."},
  "/characters": { title: "Kiddo Characters | Meet the Family", description: "Meet the colorful characters in the Kiddo Arabia world." },
};


interface SEOHeadProps { title?: string; description?: string; image?: string; noIndex?: boolean; structuredData?: Record<string, unknown>; }
const SEOHead = ({ title, description, image, noIndex, structuredData }: SEOHeadProps) => {
  const { pathname } = useLocation();
  const { language } = useTranslation();
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const recipeMatch = path.match(/^\/recipe\/(\d+)$/);
  const articleMatch = path.match(/^\/blog\/(\d+)$/);
  const recipe = recipeMatch ? recipes.find(r => r.id === Number(recipeMatch[1])) : undefined;
  const article = articleMatch ? blogPosts.find(p => p.id === Number(articleMatch[1])) : undefined;
  const ar = language === "ar";
  // Older recipes fall back to English in the visible detail page.
  const recipeIsArabic = ar && !!recipe?.titleAr && !!recipe?.ingredientsAr && !!recipe?.instructionsAr;
  const recipeTitle = recipe ? (recipeIsArabic ? recipe.titleAr! : recipe.title) : undefined;
  const articleTitle = article ? (ar ? article.titleAr : article.title) : undefined;
  const page = pages[path] || (recipe ? { title: `${recipeTitle} Recipe | Kiddo Arabia`, description: recipe.description } : article ? { title: `${articleTitle} | Kiddo Arabia`, description: ar ? article.excerptAr : article.excerpt } : { title: "Page not found | Kiddo Arabia", description: "Explore Kiddo Arabia products and recipes." });
  const robots = noIndex || path === "/search" || (!pages[path] && !recipe && !article) ? "noindex, follow" : "index, follow";
  const canonical = `${origin}${path}`;
  const absoluteImage = (value: string) => new URL(value, origin).href;
  const socialImage = absoluteImage(image || recipe?.image || article?.image || "/og-image.png");
  const organization = {
    "@type": "Organization", "@id": `${origin}/#organization`, name: "Kiddo Arabia",
    url: origin, logo: `${origin}/kiddo-logo.png`,
    description: "Kiddo Arabia offers cereals, oat jars and oat biscuits, with recipes and ideas for family moments.",
    sameAs: ["https://www.instagram.com/kiddoarabia/", "https://www.facebook.com/people/Kiddo-Arabia/100090897127132/", "https://www.youtube.com/@KiddoArabia", "https://www.tiktok.com/@kiddoarabia_"]
  };
  const graph: Record<string, unknown>[] = [organization];
  if (path === "/about") graph.push({
    "@type": "Person", "@id": `${origin}/about#ceo`, name: "Waleed Fathy Afify",
    jobTitle: "CEO", worksFor: { "@id": organization["@id"] },
    image: `${origin}/team/waleed-fathy-afify.jpg`, url: `${origin}/about`
  });
  if (recipe) graph.push({
    "@type": "Recipe", "@id": `${canonical}#recipe`, url: canonical, name: recipeTitle,
    image: absoluteImage(recipe.image), inLanguage: recipeIsArabic ? "ar" : "en",
    recipeYield: `${recipe.serves} servings`,
    recipeIngredient: recipeIsArabic ? recipe.ingredientsAr : recipe.ingredients,
    recipeInstructions: (recipeIsArabic ? recipe.instructionsAr! : recipe.instructions).map((text, i) => ({
      "@type": "HowToStep", position: i + 1, text
    }))
  });
  if (article) graph.push({
    "@type": "Article", "@id": `${canonical}#article`, headline: articleTitle,
    description: ar ? article.excerptAr : article.excerpt, image: absoluteImage(article.image),
    url: canonical, mainEntityOfPage: canonical, inLanguage: language,
    articleSection: ar ? article.categoryAr : article.category,
    publisher: { "@id": organization["@id"] }
  });
  if (path === "/recipes" || path === "/blog") {
    const collection = path === "/recipes"
      ? recipes.map(r => ({ name: ar ? (r.titleAr ?? r.title) : r.title, url: `${origin}/recipe/${r.id}` }))
      : blogPosts.map(p => ({ name: ar ? p.titleAr : p.title, url: `${origin}/blog/${p.id}` }));
    graph.push({ "@type": "ItemList", "@id": `${canonical}#list`, numberOfItems: collection.length,
      itemListElement: collection.map((item, i) => ({ "@type": "ListItem", position: i + 1, ...item })) });
  }
  if (recipe || article) graph.push({
    "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Kiddo Arabia", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: recipe ? (ar ? "الوصفات" : "Recipes") : (ar ? "القصص" : "Journal"), item: `${origin}${recipe ? "/recipes" : "/blog"}` },
      { "@type": "ListItem", position: 3, name: recipeTitle || articleTitle, item: canonical }
    ]
  });
  const data = structuredData || { "@context": "https://schema.org", "@graph": graph };
  return <Helmet>
    <title>{title || page.title}</title>
    <meta name="description" content={description || page.description} />
    <meta name="robots" content={robots} />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content={path.startsWith("/blog/") ? "article" : "website"} />
    <meta property="og:site_name" content="Kiddo Arabia" />
    <meta property="og:locale" content={language === "ar" ? "ar_EG" : "en_US"} />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={title || page.title} />
    <meta property="og:description" content={description || page.description} />
    <meta property="og:image" content={socialImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title || page.title} />
    <meta name="twitter:description" content={description || page.description} />
    <meta name="twitter:image" content={socialImage} />
    {data && <script type="application/ld+json">{JSON.stringify(data).replace(/</g, "\\u003c")}</script>}
  </Helmet>;
};
export default SEOHead;
