import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, ArrowLeft, Share2, Heart, User } from "lucide-react";
import EnhancedLayout from "@/components/EnhancedLayout";
import { useTranslation } from "@/contexts/TranslationContext";
import { sanitizeHtml } from "@/utils/security";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "Meet Our Happy Kiddo Family",
      titleAr: "تعرف على عائلة كيدو السعيدة",
      content: `
        <p>There's nothing quite like the joy on a child's face when they discover something they truly love. At Kiddo, we've been privileged to witness countless moments of pure happiness as children around the world enjoy our carefully crafted cereals.</p>
        
        <h2>Building Memories One Bowl at a Time</h2>
        <p>Every morning represents a new opportunity to create special moments with your children. Whether it's the excitement of trying a new flavor or the comfort of a favorite breakfast routine, Kiddo cereals have become part of countless family traditions.</p>
        
        <h2>Our Global Family</h2>
        <p>From bustling city apartments to quiet suburban homes, children everywhere have made Kiddo a part of their daily lives. Our products travel the world, bringing nutrition and joy to families across different cultures and communities.</p>
        
        <h2>Quality You Can Trust</h2>
        <p>Behind every smile is our commitment to quality and nutrition. We carefully select ingredients and follow strict quality standards to ensure that every bowl delivers not just great taste, but also the nutrients growing children need.</p>
        
        <h2>Join Our Family</h2>
        <p>When you choose Kiddo, you're not just choosing a cereal - you're joining a global family of parents who prioritize both nutrition and happiness for their children.</p>
      `,
      contentAr: `
        <p>لا يوجد شيء مثل الفرحة على وجه الطفل عندما يكتشف شيئاً يحبه حقاً. في كيدو، كنا محظوظين بمشاهدة لحظات لا تحصى من السعادة الخالصة بينما يستمتع الأطفال حول العالم بحبوبنا المصنوعة بعناية.</p>
        
        <h2>بناء الذكريات وعاء تلو الآخر</h2>
        <p>كل صباح يمثل فرصة جديدة لخلق لحظات خاصة مع أطفالك. سواء كان إثارة تجربة نكهة جديدة أو راحة روتين الإفطار المفضل، أصبحت حبوب كيدو جزءاً من تقاليد عائلية لا تحصى.</p>
        
        <h2>عائلتنا العالمية</h2>
        <p>من شقق المدينة المزدحمة إلى المنازل الضاحية الهادئة، الأطفال في كل مكان جعلوا كيدو جزءاً من حياتهم اليومية. تسافر منتجاتنا حول العالم، تجلب التغذية والفرح للعائلات عبر ثقافات ومجتمعات مختلفة.</p>
        
        <h2>جودة يمكنك الوثوق بها</h2>
        <p>وراء كل ابتسامة التزامنا بالجودة والتغذية. نختار المكونات بعناية ونتبع معايير جودة صارمة لضمان أن كل وعاء يوفر ليس فقط طعماً رائعاً، بل أيضاً العناصر الغذائية التي يحتاجها الأطفال النامون.</p>
        
        <h2>انضم إلى عائلتنا</h2>
        <p>عندما تختار كيدو، فأنت لا تختار حبوباً فقط - بل تنضم إلى عائلة عالمية من الوالدين الذين يعطون الأولوية لكل من التغذية والسعادة لأطفالهم.</p>
      `,
      excerpt: "Discover the joy our products bring to children around the world. From breakfast moments to outdoor adventures, see how Kiddo cereals are part of every happy childhood.",
      excerptAr: "اكتشف الفرحة التي تجلبها منتجاتنا للأطفال حول العالم. من لحظات الإفطار إلى المغامرات الخارجية، انظر كيف تكون حبوب كيدو جزءاً من كل طفولة سعيدة.",
      image: "/lovable-uploads/fa0c8a7a-4a0f-4e73-9e7e-935ab148d65a.png",
      date: "2024-01-15",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
      views: "1.2k",
      author: "Sarah Johnson",
      authorAr: "سارة جونسون",
      category: "Community",
      categoryAr: "المجتمع",
      tags: ["Kids", "Family", "Happiness"],
      tagsAr: ["الأطفال", "العائلة", "السعادة"]
    },
    {
      id: 2,
      title: "Choco Flakes - A Delicious Start to the Day",
      titleAr: "تشوكو فليكس - بداية لذيذة لليوم",
      content: `
        <p>Nothing brightens a morning quite like the sight of a child's face lighting up at breakfast time. Our Choco Flakes have become a beloved morning ritual for children who love the perfect balance of chocolate taste and wholesome nutrition.</p>
        
        <h2>The Perfect Balance</h2>
        <p>Choco Flakes deliver the chocolate flavor kids crave while providing essential nutrients parents can feel good about. Each bowl contains vitamins and minerals crucial for growing bodies and developing minds.</p>
        
        <h2>Morning Magic</h2>
        <p>Watch as breakfast transforms from a daily routine into a moment of pure joy. The rich chocolate taste makes every spoonful a treat, while the satisfying crunch adds excitement to each bite.</p>
        
        <h2>Nutritional Excellence</h2>
        <p>Behind the delicious chocolate flavor lies our commitment to nutrition. Choco Flakes are fortified with essential vitamins including B-vitamins for energy metabolism, iron for cognitive development, and calcium for strong bones.</p>
        
        <h2>Creating Happy Mornings</h2>
        <p>When children love their breakfast, mornings become easier for the whole family. Choco Flakes help create positive associations with healthy eating that last a lifetime.</p>
      `,
      contentAr: `
        <p>لا شيء ينير الصباح مثل رؤية وجه الطفل يشرق في وقت الإفطار. أصبحت تشوكو فليكس طقوساً صباحية محبوبة للأطفال الذين يحبون التوازن المثالي بين طعم الشوكولاتة والتغذية الصحية.</p>
        
        <h2>التوازن المثالي</h2>
        <p>تقدم تشوكو فليكس نكهة الشوكولاتة التي يشتهيها الأطفال بينما توفر العناصر الغذائية الأساسية التي يمكن للوالدين أن يشعروا بالرضا عنها. كل وعاء يحتوي على فيتامينات ومعادن مهمة للأجسام النامية والعقول المتطورة.</p>
        
        <h2>سحر الصباح</h2>
        <p>شاهد بينما يتحول الإفطار من روتين يومي إلى لحظة من الفرح الخالص. الطعم الغني للشوكولاتة يجعل كل ملعقة حلوى، بينما القرمشة المرضية تضيف إثارة لكل قضمة.</p>
        
        <h2>التميز الغذائي</h2>
        <p>وراء نكهة الشوكولاتة اللذيذة يكمن التزامنا بالتغذية. تشوكو فليكس مدعمة بالفيتامينات الأساسية بما في ذلك فيتامينات ب لاستقلاب الطاقة، والحديد للتطور المعرفي، والكالسيوم للعظام القوية.</p>
        
        <h2>خلق صباحات سعيدة</h2>
        <p>عندما يحب الأطفال إفطارهم، تصبح الصباحات أسهل للعائلة بأكملها. تشوكو فليكس تساعد في خلق ارتباطات إيجابية مع الأكل الصحي التي تدوم مدى الحياة.</p>
      `,
      excerpt: "Experience the perfect balance of chocolate flavor and nutrition with our Choco Flakes. Watch how kids light up when they see their favorite cereal in the morning.",
      excerptAr: "استمتع بالتوازن المثالي بين نكهة الشوكولاتة والتغذية مع تشوكو فليكس. شاهد كيف يشرق وجه الأطفال عندما يرون حبوبهم المفضلة في الصباح.",
      image: "/lovable-uploads/380d0d6d-a1ba-4e5a-a04e-3c23b0806cf2.png",
      date: "2024-01-12",
      readTime: "3 min read",
      readTimeAr: "3 دقائق قراءة",
      views: "2.8k",
      author: "Maria Chen",
      authorAr: "ماريا تشين",
      category: "Products",
      categoryAr: "المنتجات",
      tags: ["Chocolate", "Breakfast", "Kids"],
      tagsAr: ["شوكولاتة", "إفطار", "أطفال"]
    },
    {
      id: 3,
      title: "Cocoa Scoops - Fun in Every Bowl",
      titleAr: "كوكو سكوبس - متعة في كل وعاء",
      content: `
        <p>Join us as we explore the joy that Cocoa Scoops brings to children. Rich in cocoa flavor and packed with nutrients, it's the perfect treat that parents can feel good about.</p>
        
        <h2>Rich Cocoa Experience</h2>
        <p>Every spoonful of Cocoa Scoops delivers an authentic cocoa taste that children love. Our carefully selected cocoa gives each bowl a rich, chocolatey flavor that makes breakfast an exciting experience.</p>
        
        <h2>Nutrition Meets Taste</h2>
        <p>While kids enjoy the delicious cocoa flavor, parents can rest assured knowing that Cocoa Scoops are fortified with essential vitamins and minerals to support healthy growth and development.</p>
        
        <h2>The Perfect Morning Ritual</h2>
        <p>Transform ordinary mornings into special moments with Cocoa Scoops. Watch as your children's faces light up with each chocolatey spoonful, creating positive breakfast memories that last.</p>
      `,
      contentAr: `
        <p>انضم إلينا بينما نستكشف الفرحة التي يجلبها كوكو سكوبس للأطفال. غني بنكهة الكاكاو ومليء بالعناصر الغذائية، إنه الحلوى المثالية التي يمكن للوالدين أن يشعروا بالرضا عنها.</p>
        
        <h2>تجربة كاكاو غنية</h2>
        <p>كل ملعقة من كوكو سكوبس تقدم طعم كاكاو أصيل يحبه الأطفال. الكاكاو المختار بعناية يعطي كل وعاء نكهة شوكولاتة غنية تجعل الإفطار تجربة مثيرة.</p>
        
        <h2>التغذية تلتقي بالطعم</h2>
        <p>بينما يستمتع الأطفال بنكهة الكاكاو اللذيذة، يمكن للوالدين أن يطمئنوا عندما يعلمون أن كوكو سكوبس مدعم بالفيتامينات والمعادن الأساسية لدعم النمو والتطور الصحي.</p>
        
        <h2>الطقوس الصباحية المثالية</h2>
        <p>حول الصباحات العادية إلى لحظات خاصة مع كوكو سكوبس. شاهد بينما تشرق وجوه أطفالك مع كل ملعقة شوكولاتة، خالقين ذكريات إفطار إيجابية تدوم.</p>
      `,
      excerpt: "Join us as we explore the joy that Cocoa Scoops brings to children. Rich in cocoa flavor and packed with nutrients, it's the perfect treat that parents can feel good about.",
      excerptAr: "انضم إلينا بينما نستكشف الفرحة التي يجلبها كوكو سكوبس للأطفال. غني بنكهة الكاكاو ومليء بالعناصر الغذائية، إنه الحلوى المثالية التي يمكن للوالدين أن يشعروا بالرضا عنها.",
      image: "/lovable-uploads/58b57dfa-03ba-4697-b4d7-51562d6fe546.png",
      date: "2024-01-10",
      readTime: "4 min read",
      readTimeAr: "4 دقائق قراءة",
      views: "5.1k",
      author: "Ahmed Hassan",
      authorAr: "أحمد حسن",
      category: "Products",
      categoryAr: "المنتجات",
      tags: ["Cocoa", "Nutrition", "Fun"],
      tagsAr: ["كاكاو", "تغذية", "متعة"]
    },
    {
      id: 4,
      title: "Kiddo Goes Global - London Adventures",
      titleAr: "كيدو يذهب عالمياً - مغامرات لندن",
      content: `
        <p>Follow our journey as Kiddo cereals travel the world! From the iconic London Eye to breakfast tables everywhere, see how our products connect families across continents.</p>
        
        <h2>A Global Mission</h2>
        <p>Kiddo's mission extends far beyond breakfast bowls. We're committed to bringing joy and nutrition to children worldwide, creating connections between families separated by oceans but united by their love for healthy, delicious food.</p>
        
        <h2>London Calling</h2>
        <p>Our recent adventure in London showcased how universal the joy of good food can be. From traditional English breakfasts to international cuisine, Kiddo cereals found their place on tables throughout this vibrant city.</p>
        
        <h2>Cultural Connections</h2>
        <p>Food has the power to bridge cultures, and Kiddo cereals serve as ambassadors of nutrition and happiness wherever they go. In London, we witnessed firsthand how our products bring smiles to children's faces regardless of their background.</p>
      `,
      contentAr: `
        <p>تابع رحلتنا بينما تسافر حبوب كيدو حول العالم! من عين لندن الشهيرة إلى طاولات الإفطار في كل مكان، انظر كيف تربط منتجاتنا العائلات عبر القارات.</p>
        
        <h2>مهمة عالمية</h2>
        <p>مهمة كيدو تمتد إلى ما هو أبعد من أوعية الإفطار. نحن ملتزمون بجلب الفرح والتغذية للأطفال في جميع أنحاء العالم، خالقين روابط بين العائلات المفصولة بالمحيطات ولكن المتحدة بحبها للطعام الصحي واللذيذ.</p>
        
        <h2>لندن تنادي</h2>
        <p>مغامرتنا الأخيرة في لندن أظهرت كيف يمكن أن تكون فرحة الطعام الجيد عالمية. من الإفطار الإنجليزي التقليدي إلى المأكولات الدولية، وجدت حبوب كيدو مكانها على الطاولات في جميع أنحاء هذه المدينة النابضة بالحياة.</p>
        
        <h2>الروابط الثقافية</h2>
        <p>الطعام لديه القوة لربط الثقافات، وحبوب كيدو تعمل كسفراء للتغذية والسعادة أينما ذهبت. في لندن، شهدنا بأنفسنا كيف تجلب منتجاتنا الابتسامات على وجوه الأطفال بغض النظر عن خلفيتهم.</p>
      `,
      excerpt: "Follow our journey as Kiddo cereals travel the world! From the iconic London Eye to breakfast tables everywhere, see how our products connect families across continents.",
      excerptAr: "تابع رحلتنا بينما تسافر حبوب كيدو حول العالم! من عين لندن الشهيرة إلى طاولات الإفطار في كل مكان، انظر كيف تربط منتجاتنا العائلات عبر القارات.",
      image: "/lovable-uploads/26012788-0d1f-4bb2-add8-7c3bff893033.png",
      date: "2024-01-08",
      readTime: "6 min read",
      readTimeAr: "6 دقائق قراءة",
      views: "890",
      author: "James Wilson",
      authorAr: "جيمس ويلسون",
      category: "Travel",
      categoryAr: "السفر",
      tags: ["Travel", "Global", "Adventure"],
      tagsAr: ["سفر", "عالمي", "مغامرة"]
    },
    {
      id: 5,
      title: "Strawberry Pillows in Paris",
      titleAr: "وسائد الفراولة في باريس",
      content: `
        <p>A magical morning in Paris with our beloved Strawberry Pillows! Discover how the sweetness of strawberries and the romance of Paris create unforgettable breakfast memories.</p>
        
        <h2>Parisian Mornings</h2>
        <p>There's something special about breakfast in the City of Light. Our Strawberry Pillows perfectly complement the romantic atmosphere of Paris, bringing sweet moments to families exploring this beautiful city.</p>
        
        <h2>Sweet Memories</h2>
        <p>The combination of real strawberry flavor and the magical backdrop of Paris creates memories that families treasure forever. Every bite tells a story of adventure, discovery, and the simple joy of sharing good food.</p>
        
        <h2>Global Flavors</h2>
        <p>Strawberry Pillows represent our commitment to bringing natural fruit flavors to children everywhere. The sweet taste of strawberries transcends cultural boundaries, creating universal moments of happiness.</p>
      `,
      contentAr: `
        <p>صباح سحري في باريس مع وسائد الفراولة المحبوبة! اكتشف كيف تخلق حلاوة الفراولة ورومانسية باريس ذكريات إفطار لا تُنسى.</p>
        
        <h2>صباحات باريسية</h2>
        <p>هناك شيء خاص حول الإفطار في مدينة النور. وسائد الفراولة تكمل بشكل مثالي الأجواء الرومانسية لباريس، تجلب لحظات حلوة للعائلات التي تستكشف هذه المدينة الجميلة.</p>
        
        <h2>ذكريات حلوة</h2>
        <p>مزيج نكهة الفراولة الحقيقية والخلفية السحرية لباريس يخلق ذكريات تقدرها العائلات إلى الأبد. كل قضمة تحكي قصة عن المغامرة والاكتشاف والفرحة البسيطة لمشاركة الطعام الجيد.</p>
        
        <h2>نكهات عالمية</h2>
        <p>وسائد الفراولة تمثل التزامنا بجلب نكهات الفواكه الطبيعية للأطفال في كل مكان. طعم الفراولة الحلو يتجاوز الحدود الثقافية، خالقاً لحظات سعادة عالمية.</p>
      `,
      excerpt: "A magical morning in Paris with our beloved Strawberry Pillows! Discover how the sweetness of strawberries and the romance of Paris create unforgettable breakfast memories.",
      excerptAr: "صباح سحري في باريس مع وسائد الفراولة المحبوبة! اكتشف كيف تخلق حلاوة الفراولة ورومانسية باريس ذكريات إفطار لا تُنسى.",
      image: "/lovable-uploads/20e4d50a-d8ae-4ca6-b869-d33e24fc4294.png",
      date: "2024-01-05",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
      views: "3.5k",
      author: "Sophie Martin",
      authorAr: "صوفي مارتن",
      category: "Travel",
      categoryAr: "السفر",
      tags: ["Strawberry", "Paris", "Sweet"],
      tagsAr: ["فراولة", "باريس", "حلو"]
    },
    {
      id: 6,
      title: "The Perfect Bite - Healthy Snacking Made Fun",
      titleAr: "القضمة المثالية - تناول الوجبات الخفيفة الصحية بطريقة ممتعة",
      content: `
        <p>Watch the pure joy as children discover the perfect balance of health and taste. Our cereals aren't just breakfast - they're perfect for any time snacking!</p>
        
        <h2>Beyond Breakfast</h2>
        <p>Kiddo cereals aren't limited to morning meals. They make excellent snacks throughout the day, providing sustained energy and nutrition whenever children need it most.</p>
        
        <h2>Healthy Choices Made Easy</h2>
        <p>When healthy food tastes great, children naturally make better choices. Our cereals prove that nutritious eating doesn't have to be a compromise on flavor or fun.</p>
        
        <h2>Anytime Nutrition</h2>
        <p>Whether it's an after-school snack or a bedtime treat, Kiddo cereals provide consistent nutrition and taste that children can enjoy at any time of day.</p>
      `,
      contentAr: `
        <p>شاهد الفرحة الخالصة بينما يكتشف الأطفال التوازن المثالي بين الصحة والطعم. حبوبنا ليست فقط للإفطار - إنها مثالية لتناول الوجبات الخفيفة في أي وقت!</p>
        
        <h2>أبعد من الإفطار</h2>
        <p>حبوب كيدو لا تقتصر على وجبات الصباح. إنها تصنع وجبات خفيفة ممتازة طوال اليوم، توفر طاقة وتغذية مستدامة كلما احتاجها الأطفال أكثر.</p>
        
        <h2>خيارات صحية سهلة</h2>
        <p>عندما يكون طعم الطعام الصحي رائعاً، يتخذ الأطفال خيارات أفضل بطبيعة الحال. حبوبنا تثبت أن الأكل المغذي لا يجب أن يكون تنازلاً عن النكهة أو المتعة.</p>
        
        <h2>تغذية في أي وقت</h2>
        <p>سواء كان وجبة خفيفة بعد المدرسة أو حلوى وقت النوم، حبوب كيدو توفر تغذية وطعم ثابت يمكن للأطفال الاستمتاع به في أي وقت من اليوم.</p>
      `,
      excerpt: "Watch the pure joy as children discover the perfect balance of health and taste. Our cereals aren't just breakfast - they're perfect for any time snacking!",
      excerptAr: "شاهد الفرحة الخالصة بينما يكتشف الأطفال التوازن المثالي بين الصحة والطعم. حبوبنا ليست فقط للإفطار - إنها مثالية لتناول الوجبات الخفيفة في أي وقت!",
      image: "/lovable-uploads/8d0576c7-9c92-43f3-96c4-9e1cfe1009be.png",
      date: "2024-01-03",
      readTime: "3 min read",
      readTimeAr: "3 دقائق قراءة",
      views: "1.8k",
      author: "Lisa Brown",
      authorAr: "ليزا براون",
      category: "Nutrition",
      categoryAr: "التغذية",
      tags: ["Healthy", "Snacking", "Fun"],
      tagsAr: ["صحي", "وجبات خفيفة", "متعة"]
    },
    {
      id: 7,
      title: "Sharing is Caring - Fruit Rings Family Moments",
      titleAr: "المشاركة هي الاهتمام - لحظات عائلية مع حلقات الفواكه",
      content: `
        <p>Discover the beautiful moments when siblings share their favorite Fruit Rings cereal. It's not just about nutrition - it's about building bonds and creating memories.</p>
        
        <h2>Family Bonding</h2>
        <p>Fruit Rings bring families together in the most natural way. When children share their favorite cereal, they're not just sharing food - they're sharing love, care, and precious moments that strengthen family bonds.</p>
        
        <h2>Life Lessons in Every Bowl</h2>
        <p>Through sharing Fruit Rings, children learn valuable lessons about generosity, kindness, and the joy that comes from caring for others. These early experiences shape their character for life.</p>
        
        <h2>Creating Traditions</h2>
        <p>Simple moments of sharing become cherished family traditions. The act of passing a bowl of Fruit Rings between siblings creates memories that last long after childhood.</p>
      `,
      contentAr: `
        <p>اكتشف اللحظات الجميلة عندما يتشارك الأشقاء حبوب حلقات الفواكه المفضلة لديهم. الأمر لا يتعلق فقط بالتغذية - بل ببناء الروابط وخلق الذكريات.</p>
        
        <h2>الترابط العائلي</h2>
        <p>حلقات الفواكه تجمع العائلات بأكثر الطرق طبيعية. عندما يتشارك الأطفال حبوبهم المفضلة، فهم لا يتشاركون الطعام فقط - بل يتشاركون الحب والاهتمام واللحظات الثمينة التي تقوي الروابط العائلية.</p>
        
        <h2>دروس الحياة في كل وعاء</h2>
        <p>من خلال مشاركة حلقات الفواكه، يتعلم الأطفال دروساً قيمة عن الكرم واللطف والفرح الذي يأتي من الاهتمام بالآخرين. هذه التجارب المبكرة تشكل شخصيتهم مدى الحياة.</p>
        
        <h2>خلق التقاليد</h2>
        <p>لحظات المشاركة البسيطة تصبح تقاليد عائلية عزيزة. فعل تمرير وعاء من حلقات الفواكه بين الأشقاء يخلق ذكريات تدوم طويلاً بعد الطفولة.</p>
      `,
      excerpt: "Discover the beautiful moments when siblings share their favorite Fruit Rings cereal. It's not just about nutrition - it's about building bonds and creating memories.",
      excerptAr: "اكتشف اللحظات الجميلة عندما يتشارك الأشقاء حبوب حلقات الفواكه المفضلة لديهم. الأمر لا يتعلق فقط بالتغذية - بل ببناء الروابط وخلق الذكريات.",
      image: "/lovable-uploads/4ab122d2-8f22-4f0e-8e69-05380770241c.png",
      date: "2024-01-01",
      readTime: "4 min read",
      readTimeAr: "4 دقائق قراءة",
      views: "4.2k",
      author: "Emma Davis",
      authorAr: "إيما ديفيس",
      category: "Family",
      categoryAr: "العائلة",
      tags: ["Sharing", "Family", "Bonding"],
      tagsAr: ["مشاركة", "عائلة", "ترابط"]
    },
    {
      id: 8,
      title: "Honey Rings - Sweet Mornings Together",
      titleAr: "حلقات العسل - صباحات حلوة معاً",
      content: `
        <p>Nothing beats the sweetness of honey-flavored cereal shared between friends. Watch as these young food enthusiasts enjoy their Honey Rings breakfast with pure delight.</p>
        
        <h2>Natural Sweetness</h2>
        <p>Honey Rings capture the natural sweetness of honey in every bite. This wholesome flavor provides children with a delicious way to start their day while enjoying the benefits of natural ingredients.</p>
        
        <h2>Friendship and Food</h2>
        <p>Food has a unique way of bringing people together, and Honey Rings are no exception. Sharing breakfast creates bonds between friends that extend far beyond the breakfast table.</p>
        
        <h2>Golden Moments</h2>
        <p>Like honey itself, the moments shared over Honey Rings are golden. These breakfast experiences create lasting memories filled with laughter, conversation, and the simple joy of good food.</p>
      `,
      contentAr: `
        <p>لا شيء يضاهي حلاوة حبوب بنكهة العسل المتشاركة بين الأصدقاء. شاهد بينما يستمتع عشاق الطعام الصغار هؤلاء بإفطار حلقات العسل بفرحة خالصة.</p>
        
        <h2>حلاوة طبيعية</h2>
        <p>حلقات العسل تحتوي على الحلاوة الطبيعية للعسل في كل قضمة. هذه النكهة الصحية توفر للأطفال طريقة لذيذة لبدء يومهم مع الاستمتاع بفوائد المكونات الطبيعية.</p>
        
        <h2>الصداقة والطعام</h2>
        <p>الطعام له طريقة فريدة في جمع الناس، وحلقات العسل ليست استثناء. مشاركة الإفطار تخلق روابط بين الأصدقاء تمتد إلى ما هو أبعد من طاولة الإفطار.</p>
        
        <h2>لحظات ذهبية</h2>
        <p>مثل العسل نفسه، اللحظات المتشاركة مع حلقات العسل ذهبية. تجارب الإفطار هذه تخلق ذكريات دائمة مليئة بالضحك والمحادثة والفرحة البسيطة للطعام الجيد.</p>
      `,
      excerpt: "Nothing beats the sweetness of honey-flavored cereal shared between friends. Watch as these young food enthusiasts enjoy their Honey Rings breakfast with pure delight.",
      excerptAr: "لا شيء يضاهي حلاوة حبوب بنكهة العسل المتشاركة بين الأصدقاء. شاهد بينما يستمتع عشاق الطعام الصغار هؤلاء بإفطار حلقات العسل بفرحة خالصة.",
      image: "/lovable-uploads/f90922c9-016b-4d07-be6c-7cdceb6b4253.png",
      date: "2023-12-30",
      readTime: "3 min read",
      readTimeAr: "3 دقائق قراءة",
      views: "2.1k",
      author: "Michael Johnson",
      authorAr: "مايكل جونسون",
      category: "Friendship",
      categoryAr: "الصداقة",
      tags: ["Honey", "Friendship", "Morning"],
      tagsAr: ["عسل", "صداقة", "صباح"]
    },
    {
      id: 9,
      title: "Little Chefs, Big Dreams",
      titleAr: "طهاة صغار، أحلام كبيرة",
      content: `
        <p>Meet our young chef ambassador showing off the amazing variety of Kiddo products! From Cocoa Scoops to all our delicious cereals, see how kids take pride in healthy eating.</p>
        
        <h2>Inspiring Young Minds</h2>
        <p>When children take an active interest in their food choices, they develop a lifelong appreciation for nutrition and cooking. Our young chefs represent the future of healthy eating.</p>
        
        <h2>Variety and Choice</h2>
        <p>With such a wide variety of Kiddo products, children can explore different flavors and find their favorites. This variety encourages adventurous eating and helps develop diverse palates.</p>
        
        <h2>Building Confidence</h2>
        <p>When children feel proud of their food choices, it builds confidence that extends beyond the kitchen. These positive experiences with healthy eating shape their relationship with food for life.</p>
      `,
      contentAr: `
        <p>تعرف على سفير الطباخ الصغير وهو يستعرض التنوع المذهل لمنتجات كيدو! من كوكو سكوبس إلى جميع حبوبنا اللذيذة، انظر كيف يفتخر الأطفال بالأكل الصحي.</p>
        
        <h2>إلهام العقول الصغيرة</h2>
        <p>عندما يأخذ الأطفال اهتماماً نشطاً بخيارات طعامهم، يطورون تقديراً مدى الحياة للتغذية والطبخ. طهاتنا الصغار يمثلون مستقبل الأكل الصحي.</p>
        
        <h2>التنوع والاختيار</h2>
        <p>مع هذا التنوع الواسع من منتجات كيدو، يمكن للأطفال استكشاف نكهات مختلفة وإيجاد مفضلاتهم. هذا التنوع يشجع الأكل المغامر ويساعد في تطوير أذواق متنوعة.</p>
        
        <h2>بناء الثقة</h2>
        <p>عندما يشعر الأطفال بالفخر بخيارات طعامهم، يبني ذلك ثقة تمتد إلى ما هو أبعد من المطبخ. هذه التجارب الإيجابية مع الأكل الصحي تشكل علاقتهم بالطعام مدى الحياة.</p>
      `,
      excerpt: "Meet our young chef ambassador showing off the amazing variety of Kiddo products! From Cocoa Scoops to all our delicious cereals, see how kids take pride in healthy eating.",
      excerptAr: "تعرف على سفير الطباخ الصغير وهو يستعرض التنوع المذهل لمنتجات كيدو! من كوكو سكوبس إلى جميع حبوبنا اللذيذة، انظر كيف يفتخر الأطفال بالأكل الصحي.",
      image: "/lovable-uploads/63de4f8e-3a0c-4c6d-8af0-155f4c2f9df3.png",
      date: "2023-12-28",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
      views: "3.8k",
      author: "Dr. Rachel Green",
      authorAr: "د. راشيل جرين",
      category: "Kids",
      categoryAr: "الأطفال",
      tags: ["Chef", "Dreams", "Variety"],
      tagsAr: ["طباخ", "أحلام", "تنوع"]
    },
    {
      id: 10,
      title: "Team Work Makes the Dream Work",
      titleAr: "العمل الجماعي يحقق الحلم",
      content: `
        <p>Young chefs collaborating and sharing their love for healthy cereals. This heartwarming story shows how Kiddo brings children together through the joy of cooking and eating well.</p>
        
        <h2>Collaboration in the Kitchen</h2>
        <p>When children work together in the kitchen, they learn valuable life skills beyond cooking. They discover the importance of teamwork, communication, and shared responsibility.</p>
        
        <h2>Shared Passion</h2>
        <p>A shared love of good food creates strong bonds between children. Working together to create healthy, delicious meals builds friendships that can last a lifetime.</p>
        
        <h2>Future Leaders</h2>
        <p>Today's young chefs are tomorrow's leaders in health and nutrition. By encouraging collaboration and creativity in the kitchen, we're nurturing the next generation of healthy eating advocates.</p>
      `,
      contentAr: `
        <p>طهاة صغار يتعاونون ويتشاركون حبهم للحبوب الصحية. هذه القصة المؤثرة تظهر كيف يجمع كيدو الأطفال من خلال متعة الطبخ والأكل الجيد.</p>
        
        <h2>التعاون في المطبخ</h2>
        <p>عندما يعمل الأطفال معاً في المطبخ، يتعلمون مهارات حياتية قيمة تتجاوز الطبخ. يكتشفون أهمية العمل الجماعي والتواصل والمسؤولية المشتركة.</p>
        
        <h2>شغف مشترك</h2>
        <p>حب مشترك للطعام الجيد يخلق روابط قوية بين الأطفال. العمل معاً لإنشاء وجبات صحية ولذيذة يبني صداقات يمكن أن تدوم مدى الحياة.</p>
        
        <h2>قادة المستقبل</h2>
        <p>طهاة اليوم الصغار هم قادة الغد في الصحة والتغذية. من خلال تشجيع التعاون والإبداع في المطبخ، نحن نرعى الجيل القادم من دعاة الأكل الصحي.</p>
      `,
      excerpt: "Young chefs collaborating and sharing their love for healthy cereals. This heartwarming story shows how Kiddo brings children together through the joy of cooking and eating well.",
      excerptAr: "طهاة صغار يتعاونون ويتشاركون حبهم للحبوب الصحية. هذه القصة المؤثرة تظهر كيف يجمع كيدو الأطفال من خلال متعة الطبخ والأكل الجيد.",
      image: "/lovable-uploads/4925f44c-4ddc-4eec-bb5f-6dff75bd6cde.png",
      date: "2023-12-25",
      readTime: "4 min read",
      readTimeAr: "4 دقائق قراءة",
      views: "2.9k",
      author: "Chef Antonio",
      authorAr: "الشيف أنطونيو",
      category: "Teamwork",
      categoryAr: "العمل الجماعي",
      tags: ["Teamwork", "Cooking", "Together"],
      tagsAr: ["عمل جماعي", "طبخ", "معاً"]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <EnhancedLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'ar' ? 'المقال غير موجود' : 'Blog post not found'}
          </h1>
          <Button onClick={() => navigate('/blog')}>
            {language === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Button>
        </div>
      </EnhancedLayout>
    );
  }

  const currentTitle = language === 'ar' ? post.titleAr : post.title;
  const currentContent = language === 'ar' ? post.contentAr : post.content;
  const currentExcerpt = language === 'ar' ? post.excerptAr : post.excerpt;
  const currentAuthor = language === 'ar' ? post.authorAr : post.author;
  const currentCategory = language === 'ar' ? post.categoryAr : post.category;
  const currentTags = language === 'ar' ? post.tagsAr : post.tags;
  const currentReadTime = language === 'ar' ? post.readTimeAr : post.readTime;

  return (
    <EnhancedLayout>
      <div className="bg-background">
        {/* Header */}
        <div className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
            </Button>

            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                {currentCategory}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {currentTitle}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {currentExcerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{currentAuthor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentReadTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <Card className="overflow-hidden mb-12">
              <img
                src={post.image}
                alt={currentTitle}
                className="w-full h-96 object-contain object-center bg-muted"
              />
            </Card>

            {/* Article Content */}
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none text-foreground"
                  style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(currentContent) }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'ar' ? 'العلامات' : 'Tags'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentTags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8">
                  <div className="flex items-center gap-4">
                    <span className="font-medium">
                      {language === 'ar' ? 'شارك هذا المقال:' : 'Share this article:'}
                    </span>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      {language === 'ar' ? 'شارك' : 'Share'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      {language === 'ar' ? 'أعجبني' : 'Like'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="font-semibold mb-4">
                    {language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
                      <div
                        key={relatedPost.id}
                        className="cursor-pointer group"
                        onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      >
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {language === 'ar' ? relatedPost.titleAr : relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(relatedPost.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'ابق على اطلاع' : 'Stay Updated'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'اشترك في نشرتنا الإخبارية للحصول على آخر المقالات والوصفات ونصائح التغذية.'
                : 'Subscribe to our newsletter for the latest articles, recipes, and nutrition tips.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="flex-1 px-4 py-3 rounded-lg border"
              />
              <Button>
                {language === 'ar' ? 'اشترك' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
};

export default BlogDetail;