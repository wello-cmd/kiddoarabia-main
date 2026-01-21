import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, ArrowLeft, Play, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EnhancedLayout from "@/components/EnhancedLayout";
import { useTranslation } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();
  const { language, t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "Meet Our Happy Kiddo Family",
      titleAr: "تعرف على عائلة كيدو السعيدة",
      excerpt: "Discover the joy our products bring to children around the world. From breakfast moments to outdoor adventures, see how Kiddo cereals are part of every happy childhood.",
      excerptAr: "اكتشف الفرحة التي تجلبها منتجاتنا للأطفال حول العالم. من لحظات الإفطار إلى المغامرات الخارجية، انظر كيف تكون حبوب كيدو جزءاً من كل طفولة سعيدة.",
      image: "/lovable-uploads/fa0c8a7a-4a0f-4e73-9e7e-935ab148d65a.png",
      date: "2024-01-15",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
      views: "1.2k",
      type: "article",
      category: "Community",
      categoryAr: "المجتمع",
      tags: ["Kids", "Family", "Happiness"],
      tagsAr: ["الأطفال", "العائلة", "السعادة"]
    },
    {
      id: 2,
      title: "Choco Flakes - A Delicious Start to the Day",
      titleAr: "تشوكو فليكس - بداية لذيذة لليوم",
      excerpt: "Experience the perfect balance of chocolate flavor and nutrition with our Choco Flakes. Watch how kids light up when they see their favorite cereal in the morning.",
      excerptAr: "استمتع بالتوازن المثالي بين نكهة الشوكولاتة والتغذية مع تشوكو فليكس. شاهد كيف يشرق وجه الأطفال عندما يرون حبوبهم المفضلة في الصباح.",
      image: "/lovable-uploads/380d0d6d-a1ba-4e5a-a04e-3c23b0806cf2.png",
      date: "2024-01-12",
      readTime: "3 min read",
      readTimeAr: "3 دقائق قراءة",
      views: "2.8k",
      type: "article",
      category: "Products",
      categoryAr: "المنتجات",
      tags: ["Chocolate", "Breakfast", "Kids"],
      tagsAr: ["شوكولاتة", "إفطار", "أطفال"]
    },
    {
      id: 3,
      title: "Cocoa Scoops - Fun in Every Bowl",
      titleAr: "كوكو سكوبس - متعة في كل وعاء",
      excerpt: "Join us as we explore the joy that Cocoa Scoops brings to children. Rich in cocoa flavor and packed with nutrients, it's the perfect treat that parents can feel good about.",
      excerptAr: "انضم إلينا بينما نستكشف الفرحة التي يجلبها كوكو سكوبس للأطفال. غني بنكهة الكاكاو ومليء بالعناصر الغذائية، إنه الحلوى المثالية التي يمكن للوالدين أن يشعروا بالرضا عنها.",
      image: "/lovable-uploads/58b57dfa-03ba-4697-b4d7-51562d6fe546.png",
      date: "2024-01-10",
      readTime: "4 min read",
      readTimeAr: "4 دقائق قراءة",
      views: "5.1k",
      type: "article",
      category: "Products",
      categoryAr: "المنتجات",
      tags: ["Cocoa", "Nutrition", "Fun"],
      tagsAr: ["كاكاو", "تغذية", "متعة"]
    },
    {
      id: 4,
      title: "Kiddo Goes Global - London Adventures",
      titleAr: "كيدو يذهب عالمياً - مغامرات لندن",
      excerpt: "Follow our journey as Kiddo cereals travel the world! From the iconic London Eye to breakfast tables everywhere, see how our products connect families across continents.",
      excerptAr: "تابع رحلتنا بينما تسافر حبوب كيدو حول العالم! من عين لندن الشهيرة إلى طاولات الإفطار في كل مكان، انظر كيف تربط منتجاتنا العائلات عبر القارات.",
      image: "/lovable-uploads/26012788-0d1f-4bb2-add8-7c3bff893033.png",
      date: "2024-01-08",
      readTime: "6 min read",
      readTimeAr: "6 دقائق قراءة",
      views: "890",
      type: "article",
      category: "Travel",
      categoryAr: "السفر",
      tags: ["Travel", "Global", "Adventure"],
      tagsAr: ["سفر", "عالمي", "مغامرة"]
    },
    {
      id: 5,
      title: "Strawberry Pillows in Paris",
      titleAr: "وسائد الفراولة في باريس",
      excerpt: "A magical morning in Paris with our beloved Strawberry Pillows! Discover how the sweetness of strawberries and the romance of Paris create unforgettable breakfast memories.",
      excerptAr: "صباح سحري في باريس مع وسائد الفراولة المحبوبة! اكتشف كيف تخلق حلاوة الفراولة ورومانسية باريس ذكريات إفطار لا تُنسى.",
      image: "/lovable-uploads/20e4d50a-d8ae-4ca6-b869-d33e24fc4294.png",
      date: "2024-01-05",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
      views: "3.5k",
      type: "article",
      category: "Travel",
      categoryAr: "السفر",
      tags: ["Strawberry", "Paris", "Sweet"],
      tagsAr: ["فراولة", "باريس", "حلو"]
    },
    {
      id: 6,
      title: "The Perfect Bite - Healthy Snacking Made Fun",
      titleAr: "القضمة المثالية - تناول الوجبات الخفيفة الصحية بطريقة ممتعة",
      excerpt: "Watch the pure joy as children discover the perfect balance of health and taste. Our cereals aren't just breakfast - they're perfect for any time snacking!",
      excerptAr: "شاهد الفرحة الخالصة بينما يكتشف الأطفال التوازن المثالي بين الصحة والطعم. حبوبنا ليست فقط للإفطار - إنها مثالية لتناول الوجبات الخفيفة في أي وقت!",
      image: "/lovable-uploads/8d0576c7-9c92-43f3-96c4-9e1cfe1009be.png",
      date: "2024-01-03",
      readTime: "3 min read",
      readTimeAr: "3 دقائق قراءة",
      views: "1.8k",
      type: "article",
      category: "Nutrition",
      categoryAr: "التغذية",
      tags: ["Healthy", "Snacking", "Fun"],
      tagsAr: ["صحي", "وجبات خفيفة", "متعة"]
    },
    {
      id: 7,
      title: "Sharing is Caring - Fruit Rings Family Moments",
      titleAr: "المشاركة هي الاهتمام - لحظات عائلية مع حلقات الفواكه",
      excerpt: "Discover the beautiful moments when siblings share their favorite Fruit Rings cereal. It's not just about nutrition - it's about building bonds and creating memories.",
      excerptAr: "اكتشف اللحظات الجميلة عندما يتشارك الأشقاء حبوب حلقات الفواكه المفضلة لديهم. الأمر لا يتعلق فقط بالتغذية - بل ببناء الروابط وخلق الذكريات.",
      image: "/lovable-uploads/4ab122d2-8f22-4f0e-8e69-05380770241c.png",
      date: "2024-01-01",
      readTime: "4 min read",
      readTimeAr: "4 دقائق قراءة",
      views: "4.2k",
      type: "article",
      category: "Family",
      categoryAr: "العائلة",
      tags: ["Sharing", "Family", "Bonding"],
      tagsAr: ["مشاركة", "عائلة", "ترابط"]
    },
    {
      id: 8,
      title: "Honey Rings - Sweet Mornings Together",
      titleAr: "حلقات العسل - صباحات حلوة معاً",
      excerpt: "Nothing beats the sweetness of honey-flavored cereal shared between friends. Watch as these young food enthusiasts enjoy their Honey Rings breakfast with pure delight.",
      excerptAr: "لا شيء يضاهي حلاوة حبوب بنكهة العسل المتشاركة بين الأصدقاء. شاهد بينما يستمتع عشاق الطعام الصغار هؤلاء بإفطار حلقات العسل بفرحة خالصة.",
      image: "/lovable-uploads/f90922c9-016b-4d07-be6c-7cdceb6b4253.png",
      date: "2023-12-30",
      readTime: "3 min read",
      readTimeAr: "3 دقائق قراءة",
      views: "2.1k",
      type: "article",
      category: "Friendship",
      categoryAr: "الصداقة",
      tags: ["Honey", "Friendship", "Morning"],
      tagsAr: ["عسل", "صداقة", "صباح"]
    },
    {
      id: 9,
      title: "Little Chefs, Big Dreams",
      titleAr: "طهاة صغار، أحلام كبيرة",
      excerpt: "Meet our young chef ambassador showing off the amazing variety of Kiddo products! From Cocoa Scoops to all our delicious cereals, see how kids take pride in healthy eating.",
      excerptAr: "تعرف على سفير الطباخ الصغير وهو يستعرض التنوع المذهل لمنتجات كيدو! من كوكو سكوبس إلى جميع حبوبنا اللذيذة، انظر كيف يفتخر الأطفال بالأكل الصحي.",
      image: "/lovable-uploads/63de4f8e-3a0c-4c6d-8af0-155f4c2f9df3.png",
      date: "2023-12-28",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
      views: "3.8k",
      type: "article",
      category: "Kids",
      categoryAr: "الأطفال",
      tags: ["Chef", "Dreams", "Variety"],
      tagsAr: ["طباخ", "أحلام", "تنوع"]
    },
    {
      id: 10,
      title: "Team Work Makes the Dream Work",
      titleAr: "العمل الجماعي يحقق الحلم",
      excerpt: "Young chefs collaborating and sharing their love for healthy cereals. This heartwarming story shows how Kiddo brings children together through the joy of cooking and eating well.",
      excerptAr: "طهاة صغار يتعاونون ويتشاركون حبهم للحبوب الصحية. هذه القصة المؤثرة تظهر كيف يجمع كيدو الأطفال من خلال متعة الطبخ والأكل الجيد.",
      image: "/lovable-uploads/4925f44c-4ddc-4eec-bb5f-6dff75bd6cde.png",
      date: "2023-12-25",
      readTime: "4 min read",
      readTimeAr: "4 دقائق قراءة",
      views: "2.9k",
      type: "article",
      category: "Teamwork",
      categoryAr: "العمل الجماعي",
      tags: ["Teamwork", "Cooking", "Together"],
      tagsAr: ["عمل جماعي", "طبخ", "معاً"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Community", count: 1, active: false },
    { name: "Products", count: 2, active: false },
    { name: "Travel", count: 2, active: false },
    { name: "Family", count: 2, active: false },
    { name: "Kids", count: 2, active: false }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'gallery':
        return <Image className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-red-500 text-white';
      case 'gallery':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <EnhancedLayout>
      <div className="bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {t('pages.blog.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('pages.blog.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {language === 'ar' ? 'تصفح المحتوى' : 'Browse Content'}
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={category.active ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:shadow-md transition-all"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {language === 'ar' ? 'المحتوى المميز' : 'Featured Content'}
          </h2>
          <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={language === 'ar' ? blogPosts[0].titleAr : blogPosts[0].title}
                  className="w-full h-full object-contain object-center bg-muted"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Badge className={getTypeColor(blogPosts[0].type)}>
                      {getTypeIcon(blogPosts[0].type)}
                      <span className="ml-1 capitalize">{blogPosts[0].type}</span>
                    </Badge>
                    <Badge variant="outline">
                      {language === 'ar' ? blogPosts[0].categoryAr : blogPosts[0].category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    {language === 'ar' ? blogPosts[0].titleAr : blogPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {language === 'ar' ? blogPosts[0].excerptAr : blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                    </div>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(blogPosts[0].type)}
                      {language === 'ar' ? blogPosts[0].readTimeAr : blogPosts[0].readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {blogPosts[0].views}
                    </div>
                  </div>
                  
                  <Button className="mt-4" onClick={() => navigate(`/blog/${blogPosts[0].id}`)}>
                    {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Follow Us on Social Media</h2>
          <p className="text-muted-foreground mb-8">Stay connected with the Kiddo family and see our latest content, behind-the-scenes moments, and community highlights!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Instagram */}
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-500 cursor-pointer group" onClick={() => window.open('https://www.instagram.com/kiddoarabia/', '_blank')}>
              <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="font-bold text-lg">Instagram</h3>
                  <p className="text-sm opacity-90">@kiddoarabia</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Daily breakfast inspiration, kid-friendly recipes, and family moments!</p>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-500 cursor-pointer group" onClick={() => window.open('https://www.facebook.com/people/Kiddo-Arabia/100090897127132/?_rdr', '_blank')}>
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="font-bold text-lg">Facebook</h3>
                  <p className="text-sm opacity-90">Kiddo Arabia</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Community stories, parenting tips, and nutritional advice for families.</p>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-500 cursor-pointer group" onClick={() => window.open('https://www.tiktok.com/@kiddoarabia_', '_blank')}>
              <div className="h-48 bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <h3 className="font-bold text-lg">TikTok</h3>
                  <p className="text-sm opacity-90">@kiddoarabia_</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Fun breakfast videos, quick recipes, and trending content with kids!</p>
              </CardContent>
            </Card>

            {/* YouTube */}
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-500 cursor-pointer group" onClick={() => window.open('https://www.youtube.com/@KiddoArabia', '_blank')}>
              <div className="h-48 bg-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <h3 className="font-bold text-lg">YouTube</h3>
                  <p className="text-sm opacity-90">Kiddo Arabia</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Extended cooking tutorials, family vlogs, and educational content.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter((_, index) => index !== 0).map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* Post Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={language === 'ar' ? post.titleAr : post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Post Meta */}
                  <div className="flex items-center justify-between">
                    <Badge className={`${getTypeColor(post.type)} text-xs`}>
                      {getTypeIcon(post.type)}
                      <span className="ml-1 capitalize">{post.type}</span>
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>

                   {/* Post Title */}
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {language === 'ar' ? post.titleAr : post.title}
                  </h3>
                  
                  {/* Post Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {language === 'ar' ? post.excerptAr : post.excerpt}
                  </p>

                  {/* Post Stats */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(post.type)}
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    {language === 'ar' 
                      ? (post.type === 'video' ? 'شاهد' : post.type === 'gallery' ? 'عرض المعرض' : 'اقرأ المزيد')
                      : (post.type === 'video' ? 'Watch' : post.type === 'gallery' ? 'View Gallery' : 'Read More')
                    }
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="bg-gradient-warm rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter and never miss our latest content, recipes, and family tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </EnhancedLayout>
  );
};

export default Blog;