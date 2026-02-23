import React, { createContext, useContext, useState, useEffect } from 'react';

interface TranslationContextType {
  language: 'en' | 'ar';
  t: (key: string) => string;
  setLanguage: (lang: 'en' | 'ar') => void;
  isRtl: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.about': 'About Us',
    'nav.products': 'Our Products',
    'nav.recipes': 'Recipes',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',
    'nav.cereals': 'Cereals',
    'nav.oatJars': 'Oat Jars',
    'nav.biscuits': 'Biscuits',
    'nav.characters': 'Characters',
    'header.notice': 'New! Premium nutrition for healthy lifestyles.',
    'header.learnMore': 'Learn more',

    // New 10/10 Components
    'testimonials.title': 'Trusted by Happy Families',
    'testimonials.subtitle': 'Join thousands of parents who have made the switch to healthier, happier nutrition.',

    'trust.iso': 'ISO Certified Facility',
    'trust.iso.desc': 'Highest safety standards',
    'trust.natural': '100% Natural',
    'trust.natural.desc': 'No artificial preservatives',
    'trust.quality': 'Premium Quality',
    'trust.quality.desc': 'Sourced from best farms',
    'trust.nutritionist': 'Nutritionist Possible',
    'trust.nutritionist.desc': 'Approved healthy formulas',

    // Hero Section
    'hero.title.part1': 'Fueling Future', // Added part 1
    'hero.title.part2': 'Champions', // Added part 2
    'hero.subtitle.new': 'Pure nutrition for every generation.', // Renamed to avoid conflicts if needed or new key
    'hero.description.new': 'Discover the region\'s first premium functional food brand. From crunchy Cornflakes to wholesome Oat Jars, we craft nutrition for everyone with 100% natural ingredients.',

    'hero.subtitle': 'Made with love & care',
    'hero.description': 'Nourishing your little ones with the finest, healthiest ingredients. Every bite is crafted with love for growing minds and bodies.',
    'hero.madeWithLove': 'Made with Love',
    'hero.safe': '100% Safe',
    'hero.natural': 'Natural Ingredients',
    'hero.exploreProducts': 'Explore Our Products',
    'hero.learnStory': 'Learn Our Story',
    'hero.altText': 'Mother and child illustration',

    // Products Section
    'products.title': 'Our Delicious Products',
    'products.subtitle': 'Healthy & Tasty Nutrition for All',
    'products.description': 'Discover our range of nutritious options, from Oat Biscuits to Cornflakes, carefully crafted with the finest ingredients to support a healthy lifestyle.',
    'products.viewDetails': 'View Details',
    'products.benefits': 'Benefits',
    'products.nutritionFacts': 'Nutrition Facts',
    'products.servingSize': 'Serving Size',
    'products.calories': 'Calories',
    'products.protein': 'Protein',
    'products.carbs': 'Carbs',
    'products.fat': 'Fat',
    'products.fiber': 'Fiber',
    'products.sugar': 'Sugar',
    'products.sodium': 'Sodium',
    'products.ageRange': 'Age Range',
    'products.allergens': 'Allergens',
    'products.storage': 'Storage',
    'products.coolDryPlace': 'Store in a cool, dry place',

    // About Section
    'about.title': 'About Kiddo',
    'about.description': 'We believe in creating products that nourish both body and soul, bringing families together through delicious, healthy moments.',
    'about.values.healthy.title': 'Healthy Ingredients',
    'about.values.healthy.description': 'We use only the finest, most nutritious ingredients',
    'about.values.safe.title': 'Child-Safe',
    'about.values.safe.description': 'All our products are thoroughly tested for safety',
    'about.values.taste.title': 'Great Taste',
    'about.values.taste.description': 'Delicious flavors that kids absolutely love',
    'about.story.title': 'Our Story',
    'about.story.description': 'Started by parents who wanted to create the perfect snacks for their children, Kiddo has grown into a beloved brand trusted by families across the region. We\'re committed to providing nutritious, delicious options that support healthy growth.',
    'about.learnMore': 'Learn More About Us',
    'about.impact.title': 'Our Impact',
    'about.impact.families': 'Happy Families',
    'about.impact.products': 'Products Sold',
    'about.impact.countries': 'Countries Served',
    'about.impact.reviews': 'Five Star Reviews',
    'about.newsletter.title': 'Stay Updated with Kiddo',
    'about.newsletter.description': 'Get the latest news, recipes, and special offers delivered to your inbox.',
    'about.newsletter.placeholder': 'Enter your email address',
    'about.newsletter.subscribe': 'Subscribe Now',

    // Recipes Section
    'recipes.title': 'Healthy Recipes.',
    'recipes.subtitle': 'Fun & Nutritious Meal Ideas',
    'recipes.description': 'Discover delicious recipes that your kids will love, made with our products and designed to support their healthy growth.',
    'recipes.featured.title': 'Featured Recipe',
    'recipes.categories.title': 'Recipe Categories',
    'recipes.time': 'minutes',
    'recipes.serves': 'Serves',
    'recipes.difficulty': 'Difficulty',
    'recipes.rating': 'Rating',
    'recipes.viewRecipe': 'View Recipe',
    'recipes.browseAll': 'Browse All Recipes',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.description': 'We\'d love to hear from you! Reach out with any questions, feedback, or just to say hello.',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Get in Touch',
    'contact.info.address': 'Visit Us',
    'contact.info.phone': 'Call Us',
    'contact.info.email': 'Email Us',
    'contact.info.hours': 'Working Hours',
    'contact.info.map': 'Interactive Map',
    'contact.info.mapDescription': 'Find us easily with our interactive location map',
    'contact.help.title': 'Need Immediate Help?',
    'contact.help.call': 'Call Now',
    'contact.help.email': 'Send Email',

    // Footer
    'footer.newsletter.title': 'Stay Connected with Kiddo',
    'footer.newsletter.description': 'Subscribe to our newsletter for the latest updates, recipes, and special offers.',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.contact.title': 'Contact Information',
    'footer.contact.address': '123 Kids Street, Family District, Riyadh 12345, Saudi Arabia',
    'footer.contact.phone': '+966 11 123 4567',
    'footer.contact.email': 'hello@kiddoarabia.com',
    'footer.links.company': 'Company',
    'footer.links.products': 'Products',
    'footer.links.support': 'Support',
    'footer.links.legal': 'Legal',
    'footer.copyright': '© 2024 Kiddo Arabia. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ for families everywhere',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.cookies': 'Cookies',

    // Category Pages
    'pages.cereals.title': 'Kiddo Cereals Collection',
    'pages.cereals.subtitle': 'Discover our complete range of delicious and nutritious cereals designed specifically for kids',
    'pages.cereals.backToProducts': 'Back to Products',
    'pages.cereals.viewDetails': 'View Details',
    'pages.cereals.productFeatures': 'Product Features',
    'pages.cereals.feature1': 'Made with natural ingredients',
    'pages.cereals.feature2': 'Rich in vitamins and minerals',
    'pages.cereals.feature3': 'Perfect for growing kids',
    'pages.cereals.feature4': 'No artificial preservatives',
    'pages.cereals.feature5': 'Fun shapes and exciting flavors',
    'pages.cereals.infoTitle': 'The Perfect Start to Every Day',
    'pages.cereals.infoDescription': 'Our cereals are specially crafted to provide the nutrition growing children need, with flavors they absolutely love. From breakfast bowls to after-school snacks, Kiddo cereals make every moment delicious and nutritious.',
    'pages.cereals.all': 'All',

    'pages.biscuits.title': 'Kiddo Oat Biscuits',
    'pages.biscuits.subtitle': 'Wholesome oat biscuits in multiple delicious flavors - perfect for healthy snacking anytime',
    'pages.biscuits.backToProducts': 'Back to Products',
    'pages.biscuits.keyIngredients': 'Key Ingredients',
    'pages.biscuits.benefits': 'Benefits',
    'pages.biscuits.infoTitle': 'Wholesome Nutrition in Every Bite',
    'pages.biscuits.infoDescription': 'Our oat biscuits combine the goodness of whole oats with exciting flavors that kids love. Each biscuit is carefully crafted to provide essential nutrients while delivering the taste and texture that makes snack time special.',
    'pages.biscuits.flavor': 'Flavor',

    'pages.oatjars.title': 'Kiddo Oat Jars',
    'pages.oatjars.subtitle': 'Nutritious and delicious oat jars made with premium ingredients for healthy snacking anytime',
    'pages.oatjars.backToProducts': 'Back to Products',
    'pages.oatjars.keyIngredients': 'Key Ingredients',
    'pages.oatjars.benefits': 'Benefits',
    'pages.oatjars.infoTitle': 'Perfect for Active Kids',
    'pages.oatjars.infoDescription': 'Our oat jars are specially formulated to provide sustained energy for growing children. Made with natural ingredients and no artificial preservatives, they\'re the perfect healthy snack for school, sports, or anytime nutrition.',

    // Recipe 1
    'recipe.1.title': 'Classic Cornflakes Bowl',
    'recipe.1.description': 'A simple yet nutritious breakfast bowl with fresh fruits and nuts',
    'recipe.1.ing.1': '2 cups Kiddo Cornflakes',
    'recipe.1.ing.2': '1 cup cold milk',
    'recipe.1.ing.3': '1 sliced banana',
    'recipe.1.ing.4': '2 tbsp honey',
    'recipe.1.ing.5': '1/4 cup mixed berries',
    'recipe.1.inst.1': 'Pour cornflakes into a bowl',
    'recipe.1.inst.2': 'Add cold milk until cornflakes are covered',
    'recipe.1.inst.3': 'Top with sliced banana and berries',
    'recipe.1.inst.4': 'Drizzle honey on top',
    'recipe.1.inst.5': 'Serve immediately and enjoy!',
    // Recipe 2
    'recipe.2.title': 'Cornflakes Crusted Chicken',
    'recipe.2.description': 'Crispy chicken pieces coated with crushed cornflakes for extra crunch',
    'recipe.2.ing.1': '4 chicken breasts',
    'recipe.2.ing.2': '3 cups Kiddo Cornflakes, crushed',
    'recipe.2.ing.3': '2 eggs, beaten',
    'recipe.2.ing.4': '1/2 cup flour',
    'recipe.2.ing.5': '1 tsp paprika',
    'recipe.2.ing.6': 'Salt and pepper to taste',
    'recipe.2.inst.1': 'Preheat oven to 375°F (190°C)',
    'recipe.2.inst.2': 'Crush cornflakes in a bowl',
    'recipe.2.inst.3': 'Set up breading station: flour, beaten eggs, crushed cornflakes',
    'recipe.2.inst.4': 'Season chicken with salt, pepper, and paprika',
    'recipe.2.inst.5': 'Dredge chicken in flour, dip in eggs, coat with cornflakes',
    'recipe.2.inst.6': 'Bake for 25-30 minutes until golden and cooked through',
    // Recipe 3
    'recipe.3.title': 'Cornflakes Energy Bars',
    'recipe.3.description': 'Homemade energy bars packed with cornflakes, nuts, and dried fruits',
    'recipe.3.ing.1': '3 cups Kiddo Cornflakes',
    'recipe.3.ing.2': '1/2 cup honey',
    'recipe.3.ing.3': '1/2 cup peanut butter',
    'recipe.3.ing.4': '1/4 cup dried cranberries',
    'recipe.3.ing.5': '1/4 cup chopped almonds',
    'recipe.3.ing.6': '1 tsp vanilla extract',
    'recipe.3.inst.1': 'Line an 8x8 inch pan with parchment paper',
    'recipe.3.inst.2': 'In a large bowl, mix cornflakes, cranberries, and almonds',
    'recipe.3.inst.3': 'In a saucepan, warm honey and peanut butter until smooth',
    'recipe.3.inst.4': 'Add vanilla to the honey mixture',
    'recipe.3.inst.5': 'Pour over cornflakes mixture and stir well',
    'recipe.3.inst.6': 'Press into prepared pan and refrigerate for 2 hours',
    'recipe.3.inst.7': 'Cut into bars and serve',
    // Recipe 4
    'recipe.4.title': 'Cornflakes Smoothie Bowl',
    'recipe.4.description': 'Creamy smoothie bowl topped with crunchy cornflakes and fresh fruits',
    'recipe.4.ing.1': '1 frozen banana',
    'recipe.4.ing.2': '1/2 cup frozen berries',
    'recipe.4.ing.3': '1/2 cup Greek yogurt',
    'recipe.4.ing.4': '1/4 cup milk',
    'recipe.4.ing.5': '1 cup Kiddo Cornflakes',
    'recipe.4.ing.6': 'Fresh fruits for topping',
    'recipe.4.inst.1': 'Blend frozen banana, berries, yogurt, and milk until smooth',
    'recipe.4.inst.2': 'Pour into bowls',
    'recipe.4.inst.3': 'Top with cornflakes and fresh fruits',
    'recipe.4.inst.4': 'Add a drizzle of honey if desired',
    'recipe.4.inst.5': 'Serve immediately',
    // Recipe 5
    'recipe.5.title': 'Cornflakes Cookies',
    'recipe.5.description': 'Crispy and sweet cookies made with cornflakes for extra texture',
    'recipe.5.ing.1': '2 cups Kiddo Cornflakes',
    'recipe.5.ing.2': '1 cup butter, softened',
    'recipe.5.ing.3': '3/4 cup brown sugar',
    'recipe.5.ing.4': '1/2 cup white sugar',
    'recipe.5.ing.5': '1 egg',
    'recipe.5.ing.6': '1 1/2 cups flour',
    'recipe.5.ing.7': '1 tsp vanilla extract',
    'recipe.5.inst.1': 'Preheat oven to 350°F (175°C)',
    'recipe.5.inst.2': 'Cream butter and sugars until light and fluffy',
    'recipe.5.inst.3': 'Beat in egg and vanilla',
    'recipe.5.inst.4': 'Gradually mix in flour',
    'recipe.5.inst.5': 'Fold in cornflakes',
    'recipe.5.inst.6': 'Drop spoonfuls onto baking sheet',
    'recipe.5.inst.7': 'Bake 10-12 minutes until golden',
    // Recipe 6
    'recipe.6.title': 'Cornflakes Ice Cream Sundae',
    'recipe.6.description': 'Delicious ice cream sundae with cornflakes for added crunch',
    'recipe.6.ing.1': '4 scoops vanilla ice cream',
    'recipe.6.ing.2': '1 cup Kiddo Cornflakes',
    'recipe.6.ing.3': '2 tbsp chocolate syrup',
    'recipe.6.ing.4': '2 tbsp caramel sauce',
    'recipe.6.ing.5': 'Whipped cream',
    'recipe.6.ing.6': 'Maraschino cherries',
    'recipe.6.inst.1': 'Place ice cream scoops in bowls',
    'recipe.6.inst.2': 'Sprinkle cornflakes generously over ice cream',
    'recipe.6.inst.3': 'Drizzle with chocolate syrup and caramel sauce',
    'recipe.6.inst.4': 'Top with whipped cream',
    'recipe.6.inst.5': 'Garnish with a cherry',
    'recipe.6.inst.6': 'Serve immediately',

    // Recipe 7
    'recipe.7.title': 'Cocoa Crunch Milkshake',
    'recipe.7.description': 'A rich chocolate milkshake topped with crunchy Cocoa Scoops for the ultimate treat.',
    'recipe.7.ing.1': '2 cups cold milk',
    'recipe.7.ing.2': '1/2 cup Kiddo Cocoa Scoops',
    'recipe.7.ing.3': '2 scoops chocolate ice cream',
    'recipe.7.ing.4': 'Whipped cream',
    'recipe.7.ing.5': 'Chocolate syrup',
    'recipe.7.inst.1': 'Blend milk and chocolate ice cream until smooth',
    'recipe.7.inst.2': 'Pour into tall glasses',
    'recipe.7.inst.3': 'Top generously with whipped cream',
    'recipe.7.inst.4': 'Sprinkle Kiddo Cocoa Scoops on top for crunch',
    'recipe.7.inst.5': 'Drizzle with chocolate syrup and serve',
    // Recipe 8
    'recipe.8.title': 'Honey Rings Morning Blast',
    'recipe.8.description': 'Energizing breakfast smoothie with the sweetness of honey rings.',
    'recipe.8.ing.1': '1 banana',
    'recipe.8.ing.2': '1 cup almond milk',
    'recipe.8.ing.3': '1/2 cup Kiddo Honey Rings',
    'recipe.8.ing.4': '1 tbsp peanut butter',
    'recipe.8.ing.5': '1 tsp honey',
    'recipe.8.inst.1': 'Combine banana, milk, peanut butter, and honey in a blender',
    'recipe.8.inst.2': 'Add a handful of Honey Rings for texture',
    'recipe.8.inst.3': 'Blend until smooth and creamy',
    'recipe.8.inst.4': 'Pour into a glass',
    'recipe.8.inst.5': 'Top with a few extra Honey Rings',
    // Recipe 9
    'recipe.9.title': 'Fruit Rings Splash',
    'recipe.9.description': 'Refreshing fruity milk with a colorful Fruit Rings surprise.',
    'recipe.9.ing.1': '2 cups cold milk',
    'recipe.9.ing.2': '1 cup Kiddo Fruit Rings',
    'recipe.9.ing.3': '1/4 tsp vanilla extract',
    'recipe.9.ing.4': 'Ice cubes (optional)',
    'recipe.9.inst.1': 'Pour cold milk into glasses',
    'recipe.9.inst.2': 'Stir in vanilla extract',
    'recipe.9.inst.3': 'Add ice cubes if desired',
    'recipe.9.inst.4': 'Top with a generous amount of Fruit Rings',
    'recipe.9.inst.5': 'Serve with a colorful straw and a spoon',
    // Recipe 10 (Snack)
    'recipe.10.title': 'Cereal Energy Bites',
    'recipe.10.description': 'No-bake energy bites made with oats, peanut butter, and crunchy cornflakes.',
    'recipe.10.ing.1': '1 cup Kiddo Cornflakes, crushed',
    'recipe.10.ing.2': '1/2 cup peanut butter',
    'recipe.10.ing.3': '1/3 cup honey',
    'recipe.10.ing.4': '1 cup rolled oats',
    'recipe.10.ing.5': '1/2 tsp vanilla extract',
    'recipe.10.inst.1': 'Mix peanut butter, honey, and vanilla in a bowl',
    'recipe.10.inst.2': 'Stir in oats and crushed cornflakes',
    'recipe.10.inst.3': 'Roll mixture into small balls',
    'recipe.10.inst.4': 'Refrigerate for 30 minutes to set',
    'recipe.10.inst.5': 'Store in an airtight container',

    // Characters Page
    'pages.characters.title': 'Meet the Kiddo Characters',
    'pages.characters.subtitle': 'In the Kiddoverse, every flavor has a power… and every character holds a part of a missing code!',
    'pages.characters.backToHome': 'Back to Home',

    // Blog Page
    'pages.blog.title': 'Kiddo Blog',
    'pages.blog.subtitle': 'Stories, videos, and insights from the Kiddo family. Discover nutrition tips, fun activities, and behind-the-scenes content.',
    'pages.blog.browseContent': 'Browse Content',
    'pages.blog.featuredContent': 'Featured Content',
    'pages.blog.readMore': 'Read More',
    'pages.blog.followUs': 'Follow Us on Social Media',
    'pages.blog.allPosts': 'All Posts',

    // AiBot
    'aibot.open': 'Open chat assistant',
    'aibot.close': 'Close chat',
    'aibot.inputLabel': 'Chat message',
    'aibot.send': 'Send message',
    'aibot.history': 'Chat history',
    'aibot.apiKeyLabel': 'Enter API Key'
  },
  ar: {
    // Header
    'nav.about': 'من نحن',
    'nav.products': 'منتجاتنا',
    'nav.recipes': 'الوصفات',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.cereals': 'الحبوب',
    'nav.oatJars': 'برطمانات الشوفان',
    'nav.biscuits': 'بسكويت',
    'nav.characters': 'الشخصيات',
    'header.notice': 'جديد! تغذية ممتازة لأنماط حياة صحية.',
    'header.learnMore': 'اعرف المزيد',

    // New 10/10 Components
    'testimonials.title': 'موثوق به من قبل العائلات السعيدة',
    'testimonials.subtitle': 'انضم إلى آلاف الآباء الذين تحولوا إلى تغذية صحية وأكثر سعادة.',

    'trust.iso': 'منشأة معتمدة من ISO',
    'trust.iso.desc': 'أعلى معايير السلامة',
    'trust.natural': '100٪ طبيعي',
    'trust.natural.desc': 'بدون مواد حافظة صناعية',
    'trust.quality': 'جودة ممتازة',
    'trust.quality.desc': 'مصدرها أفضل المزارع',
    'trust.nutritionist': 'ممكن مع خبير التغذية',
    'trust.nutritionist.desc': 'تركيبات صحية معتمدة',

    // Hero Section
    'hero.title.part1': 'تغذية أبطال',
    'hero.title.part2': 'المستقبل',
    'hero.subtitle.new': 'تغذية نقية لكل جيل.',
    'hero.description.new': 'اكتشف أول علامة تجارية للأغذية الوظيفية الفاخرة في المنطقة. من رقائق الذرة المقرمشة إلى برطمانات الشوفان الصحية، نصنع التغذية للجميع بمكونات طبيعية 100٪.',


    // Hero Section
    'hero.title': 'كيدو العربية',
    'hero.subtitle': 'مصنوع بحب وعناية',
    'hero.description': 'نغذي أطفالكم الصغار بأجود المكونات وأكثرها صحة. كل قضمة مصنوعة بحب للعقول والأجسام النامية.',
    'hero.madeWithLove': 'مصنوع بحب',
    'hero.safe': '100% آمن',
    'hero.natural': 'مكونات طبيعية',
    'hero.exploreProducts': 'استكشف منتجاتنا',
    'hero.learnStory': 'تعرف على قصتنا',
    'hero.altText': 'رسم توضيحي لأم وطفل',

    // Products Section
    'products.title': 'منتجاتنا اللذيذة',
    'products.subtitle': 'تغذية صحية ولذيذة للجميع',
    'products.description': 'اكتشف مجموعتنا من الخيارات المغذية، من بسكويت الشوفان إلى رقائق الذرة، المصنوعة بعناية من أجود المكونات لدعم نمط حياة صحي.',
    'products.viewDetails': 'عرض التفاصيل',
    'products.benefits': 'الفوائد',
    'products.nutritionFacts': 'حقائق التغذية',
    'products.servingSize': 'حجم الحصة',
    'products.calories': 'السعرات الحرارية',
    'products.protein': 'البروتين',
    'products.carbs': 'الكربوهيدرات',
    'products.fat': 'الدهون',
    'products.fiber': 'الألياف',
    'products.sugar': 'السكر',
    'products.sodium': 'الصوديوم',
    'products.ageRange': 'الفئة العمرية',
    'products.allergens': 'مسببات الحساسية',
    'products.storage': 'التخزين',
    'products.coolDryPlace': 'يُحفظ في مكان بارد وجاف',

    // About Section
    'about.title': 'حول كيدو',
    'about.description': 'نؤمن بصنع منتجات تغذي الجسد والروح، وتجمع العائلات من خلال لحظات صحية ولذيذة.',
    'about.values.healthy.title': 'مكونات صحية',
    'about.values.healthy.description': 'نستخدم فقط أجود المكونات الغذائية وأكثرها قيمة',
    'about.values.safe.title': 'آمن للأطفال',
    'about.values.safe.description': 'جميع منتجاتنا مختبرة بدقة من ناحية الأمان',
    'about.values.taste.title': 'طعم رائع',
    'about.values.taste.description': 'نكهات لذيذة يحبها الأطفال تماماً',
    'about.story.title': 'قصتنا',
    'about.story.description': 'بدأت من قِبل والدين أرادا صنع الوجبات الخفيفة المثالية لأطفالهما، نمت كيدو لتصبح علامة تجارية محبوبة تثق بها العائلات في جميع أنحاء المنطقة. نحن ملتزمون بتوفير خيارات مغذية ولذيذة تدعم النمو الصحي.',
    'about.learnMore': 'اعرف المزيد عنا',
    'about.impact.title': 'تأثيرنا',
    'about.impact.families': 'عائلة سعيدة',
    'about.impact.products': 'منتج مُباع',
    'about.impact.countries': 'دولة نخدمها',
    'about.impact.reviews': 'تقييم خمس نجوم',
    'about.newsletter.title': 'ابق على اطلاع مع كيدو',
    'about.newsletter.description': 'احصل على آخر الأخبار والوصفات والعروض الخاصة في صندوق الوارد.',
    'about.newsletter.placeholder': 'أدخل عنوان بريدك الإلكتروني',
    'about.newsletter.subscribe': 'اشترك الآن',

    // Recipes Section
    'recipes.title': 'وصفات صحية.',
    'recipes.subtitle': 'أفكار وجبات ممتعة ومغذية',
    'recipes.description': 'اكتشف وصفات لذيذة سيحبها أطفالك، مصنوعة من منتجاتنا ومصممة لدعم نموهم الصحي.',
    'recipes.featured.title': 'الوصفة المميزة',
    'recipes.categories.title': 'فئات الوصفات',
    'recipes.time': 'دقيقة',
    'recipes.serves': 'يكفي لـ',
    'recipes.difficulty': 'الصعوبة',
    'recipes.rating': 'التقييم',
    'recipes.viewRecipe': 'عرض الوصفة',
    'recipes.browseAll': 'تصفح جميع الوصفات',

    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.description': 'نسعد بسماع رأيك! تواصل معنا لأي استفسارات أو ملاحظات أو حتى لقول مرحباً.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info.title': 'تواصل معنا',
    'contact.info.address': 'زُرنا',
    'contact.info.phone': 'اتصل بنا',
    'contact.info.email': 'راسلنا',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.map': 'الخريطة التفاعلية',
    'contact.info.mapDescription': 'اعثر علينا بسهولة باستخدام خريطة الموقع التفاعلية',
    'contact.help.title': 'تحتاج مساعدة فورية؟',
    'contact.help.call': 'اتصل الآن',
    'contact.help.email': 'أرسل بريد إلكتروني',

    // Footer
    'footer.newsletter.title': 'ابق على تواصل مع كيدو',
    'footer.newsletter.description': 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والوصفات والعروض الخاصة.',
    'footer.newsletter.placeholder': 'عنوان بريدك الإلكتروني',
    'footer.newsletter.subscribe': 'اشترك',
    'footer.contact.title': 'معلومات الاتصال',
    'footer.contact.address': 'شارع الأطفال 123، حي العائلة، الرياض 12345، المملكة العربية السعودية',
    'footer.contact.phone': '+966 11 123 4567',
    'footer.contact.email': 'hello@kiddoarabia.com',
    'footer.links.company': 'الشركة',
    'footer.links.products': 'المنتجات',
    'footer.links.support': 'الدعم',
    'footer.links.legal': 'قانوني',
    'footer.copyright': '© 2024 كيدو العربية. جميع الحقوق محفوظة.',
    'footer.madeWith': 'صُنع بـ ❤️ للعائلات في كل مكان',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
    'footer.cookies': 'الكوكيز',

    // Category Pages
    'pages.cereals.title': 'مجموعة حبوب كيدو',
    'pages.cereals.subtitle': 'اكتشف مجموعتنا الكاملة من الحبوب اللذيذة والمغذية المصممة خصيصاً للأطفال',
    'pages.cereals.backToProducts': 'العودة للمنتجات',
    'pages.cereals.viewDetails': 'عرض التفاصيل',
    'pages.cereals.productFeatures': 'مميزات المنتج',
    'pages.cereals.feature1': 'مصنوع من مكونات طبيعية',
    'pages.cereals.feature2': 'غني بالفيتامينات والمعادن',
    'pages.cereals.feature3': 'مثالي للأطفال النامين',
    'pages.cereals.feature4': 'بدون مواد حافظة صناعية',
    'pages.cereals.feature5': 'أشكال ممتعة ونكهات مثيرة',
    'pages.cereals.infoTitle': 'البداية المثالية لكل يوم',
    'pages.cereals.infoDescription': 'حبوبنا مصنوعة خصيصاً لتوفير التغذية التي يحتاجها الأطفال النامون، مع نكهات يحبونها تماماً. من أوعية الإفطار إلى وجبات ما بعد المدرسة، حبوب كيدو تجعل كل لحظة لذيذة ومغذية.',
    'pages.cereals.all': 'الكل',

    'pages.biscuits.title': 'بسكويت الشوفان من كيدو',
    'pages.biscuits.subtitle': 'بسكويت شوفان صحي بنكهات لذيذة متعددة - مثالي للوجبات الخفيفة الصحية في أي وقت',
    'pages.biscuits.backToProducts': 'العودة للمنتجات',
    'pages.biscuits.keyIngredients': 'المكونات الرئيسية',
    'pages.biscuits.benefits': 'الفوائد',
    'pages.biscuits.infoTitle': 'تغذية صحية في كل قضمة',
    'pages.biscuits.infoDescription': 'يجمع بسكويت الشوفان لدينا بين فوائد الشوفان الكامل والنكهات المثيرة التي يحبها الأطفال. كل قطعة بسكويت مصنوعة بعناية لتوفير العناصر الغذائية الأساسية مع تقديم الطعم والقوام الذي يجعل وقت الوجبات الخفيفة مميزاً.',
    'pages.biscuits.flavor': 'النكهة',

    'pages.oatjars.title': 'برطمانات الشوفان من كيدو',
    'pages.oatjars.subtitle': 'برطمانات شوفان مغذية ولذيذة مصنوعة من مكونات فاخرة للوجبات الخفيفة الصحية في أي وقت',
    'pages.oatjars.backToProducts': 'العودة للمنتجات',
    'pages.oatjars.keyIngredients': 'المكونات الرئيسية',
    'pages.oatjars.benefits': 'الفوائد',
    'pages.oatjars.infoTitle': 'مثالية للأطفال النشطين',
    'pages.oatjars.infoDescription': 'برطمانات الشوفان لدينا مصممة خصيصاً لتوفير طاقة مستدامة للأطفال النامين. مصنوعة من مكونات طبيعية وبدون مواد حافظة صناعية، إنها الوجبة الخفيفة الصحية المثالية للمدرسة أو الرياضة أو أي وقت.',

    // Recipe 7
    'recipe.7.title': 'ميلك شيك الشوكولاتة المقرمش',
    'recipe.7.description': 'ميلك شيك شوكولاتة غني مغطى بكرات كوكو سكوبس المقرمشة للحصول على أفضل حلوى.',
    'recipe.7.ing.1': '2 كوب حليب بارد',
    'recipe.7.ing.2': '1/2 كوب كيدو كوكو سكوبس',
    'recipe.7.ing.3': '2 ملعقة آيس كريم شوكولاتة',
    'recipe.7.ing.4': 'كريمة مخفوقة',
    'recipe.7.ing.5': 'شراب شوكولاتة',
    'recipe.7.inst.1': 'اخلط الحليب وآيس كريم الشوكولاتة حتى يصبح ناعمًا',
    'recipe.7.inst.2': 'اسكب في أكواب طويلة',
    'recipe.7.inst.3': 'زيّن بسخاء بالكريمة المخفوقة',
    'recipe.7.inst.4': 'رش كيدو كوكو سكوبس على الوجه للقرمشة',
    'recipe.7.inst.5': 'أضف رشة من شراب الشوكولاتة وقدمها',
    // Recipe 8
    'recipe.8.title': 'مشروب طاقة حلقات العسل الصباحي',
    'recipe.8.description': 'سموثي إفطار منشط مع حلاوة حلقات العسل.',
    'recipe.8.ing.1': '1 موزة',
    'recipe.8.ing.2': '1 كوب حليب لوز',
    'recipe.8.ing.3': '1/2 كوب كيدو حلقات العسل',
    'recipe.8.ing.4': '1 ملعقة كبيرة زبدة فول سوداني',
    'recipe.8.ing.5': '1 ملعقة صغيرة عسل',
    'recipe.8.inst.1': 'اخلط الموز والحليب وزبدة الفول السوداني والعسل في الخلاط',
    'recipe.8.inst.2': 'أضف حفنة من حلقات العسل للقوام',
    'recipe.8.inst.3': 'اخلط حتى يصبح ناعمًا وكريميًا',
    'recipe.8.inst.4': 'اسكب في كوب',
    'recipe.8.inst.5': 'زيّن ببضع حلقات عسل إضافية',
    // Recipe 9
    'recipe.9.title': 'سبلاش حلقات الفواكه',
    'recipe.9.description': 'حليب فواكه منعش مع مفاجأة حلقات الفواكه الملونة.',
    'recipe.9.ing.1': '2 كوب حليب بارد',
    'recipe.9.ing.2': '1 كوب كيدو حلقات الفواكه',
    'recipe.9.ing.3': '1/4 ملعقة صغيرة فانيليا',
    'recipe.9.ing.4': 'مكعبات ثلج (اختياري)',
    'recipe.9.inst.1': 'اسكب الحليب البارد في الأكواب',
    'recipe.9.inst.2': 'حرك الفانيليا',
    'recipe.9.inst.3': 'أضف مكعبات الثلج إذا رغبت',
    'recipe.9.inst.4': 'زيّن بكمية وفيرة من حلقات الفواكه',
    'recipe.9.inst.5': 'قدمها مع قشة ملونة وملعقة',
    // Recipe 10 (Snack)
    'recipe.10.title': 'كرات طاقة الحبوب',
    'recipe.10.description': 'كرات طاقة بدون خبز مصنوعة من الشوفان وزبدة الفول السوداني ورقائق الذرة المقرمشة.',
    'recipe.10.ing.1': '1 كوب كيدو كورن فليكس، مطحون',
    'recipe.10.ing.2': '1/2 كوب زبدة فول سوداني',
    'recipe.10.ing.3': '1/3 كوب عسل',
    'recipe.10.ing.4': '1 كوب شوفان',
    'recipe.10.ing.5': '1/2 ملعقة صغيرة فانيليا',
    'recipe.10.inst.1': 'اخلط زبدة الفول السوداني والعسل والفانيليا في وعاء',
    'recipe.10.inst.2': 'قلب الشوفان ورقائق الذرة المطحونة',
    'recipe.10.inst.3': 'شكل الخليط إلى كرات صغيرة',
    'recipe.10.inst.4': 'بردها لمدة 30 دقيقة لتتماسك',
    'recipe.10.inst.5': 'خزنها في وعاء محكم الإغلاق',

    // Characters Page
    'pages.characters.title': 'تعرف على شخصيات كيدو',
    'pages.characters.subtitle': 'في عالم كيدو، كل نكهة لها قوة... وكل شخصية تحمل جزءاً من رمز مفقود!',
    'pages.characters.backToHome': 'العودة للرئيسية',

    // Blog Page
    'pages.blog.title': 'مدونة كيدو',
    'pages.blog.subtitle': 'قصص وفيديوهات ورؤى من عائلة كيدو. اكتشف نصائح التغذية والأنشطة الممتعة والمحتوى من وراء الكواليس.',
    'pages.blog.browseContent': 'تصفح المحتوى',
    'pages.blog.featuredContent': 'المحتوى المميز',
    'pages.blog.readMore': 'اقرأ المزيد',
    'pages.blog.followUs': 'تابعنا على وسائل التواصل الاجتماعي',
    'pages.blog.allPosts': 'جميع المنشورات',

    // AiBot
    'aibot.open': 'فتح مساعد المحادثة',
    'aibot.close': 'إغلاق المحادثة',
    'aibot.inputLabel': 'رسالة المحادثة',
    'aibot.send': 'إرسال الرسالة',
    'aibot.history': 'سجل المحادثة',
    'aibot.apiKeyLabel': 'أدخل مفتاح API'
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  return (
    <TranslationContext.Provider value={{ language, t, setLanguage, isRtl }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};