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
    'recipes.title': 'Healthy Recipes for Kids',
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
    'pages.blog.allPosts': 'All Posts'
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
    'recipes.title': 'وصفات صحية للأطفال',
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
    'pages.blog.allPosts': 'جميع المنشورات'
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