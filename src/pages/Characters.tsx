import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import EnhancedLayout from "@/components/EnhancedLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const Characters = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const characters = [
    {
      id: 1,
      name: "Aura",
      nameAr: "أورا",
      title: language === 'ar' ? "القائدة" : "The Leader",
      boxName: language === 'ar' ? "حلقات الفواكه" : "Fruit Rings",
      color: "🧿",
      colorClass: "bg-emerald-500",
      description: language === 'ar'
        ? "أورا دائماً فهمت الرموز قبل ظهورها. حذرت الآخرين من لمسها بالترتيب الخاطئ—لكن بعد أن لمست الرمز الأخير، ظهر مخلوق غريب."
        : "Aura always understood the symbols before they appeared. She warned others not to touch them in the wrong order—but after she touched the final one, a strange creature appeared.",
      image: "/lovable-uploads/4d696d66-dc3d-4e64-bf7c-cf683671f551.png"
    },
    {
      id: 2,
      name: "Dreamy",
      nameAr: "دريمي",
      title: language === 'ar' ? "الحالم" : "The Visionary",
      boxName: language === 'ar' ? "الوسادة المقرمشة" : "Crunchy Pillow",
      color: "🌙",
      colorClass: "bg-indigo-500",
      description: language === 'ar'
        ? "دريمي دائماً رأى ما لا يراه الآخرون. في يوم من الأيام، رسم رمزاً واختفى في بوابة متوهجة ظهرت من العدم."
        : "Dreamy always saw what others couldn't. One day, he drew a symbol and vanished into a glowing doorway that appeared out of nowhere.",
      image: "/lovable-uploads/859185ec-f53b-4630-957f-8e4a0871640a.png"
    },
    {
      id: 3,
      name: "Strawby",
      nameAr: "ستروبي",
      title: language === 'ar' ? "الحلوة" : "The Sweet One",
      boxName: language === 'ar' ? "وسادة الفراولة" : "Strawberry Pillow",
      color: "🌸",
      colorClass: "bg-pink-500",
      description: language === 'ar'
        ? "ستروبي تجلب الحلاوة أينما ذهبت. اكتشفت أن رموز الفراولة تتوهج بشكل مختلف في ضوء القمر."
        : "Strawby brings sweetness wherever she goes. She discovered that strawberry symbols glow differently in moonlight.",
      image: "/lovable-uploads/08e51767-f109-408c-95fa-9a01c96068cb.png"
    },
    {
      id: 4,
      name: "Krio",
      nameAr: "كريو",
      title: language === 'ar' ? "الفضولي" : "The Curious",
      boxName: language === 'ar' ? "تشوكو كريمو" : "Choco Creamo",
      color: "🟦",
      colorClass: "bg-blue-500",
      description: language === 'ar'
        ? "كريو لا يستطيع مقاومة الألغاز. وجد باباً مخفياً بداخله صندوق متوهج من مسحوق الشوكولاتة."
        : "Krio can't resist a mystery. He found a hidden door with a glowing box of chocolate powder inside.",
      image: "/lovable-uploads/e27b380d-f5b1-4472-9c86-eebf4c944cb7.png"
    },
    {
      id: 5,
      name: "Hona",
      nameAr: "هونا",
      title: language === 'ar' ? "الحكيمة" : "The Wise",
      boxName: language === 'ar' ? "حلقات العسل" : "Honey Rings",
      color: "🔮",
      colorClass: "bg-violet-500",
      description: language === 'ar'
        ? "هونا، المليئة بالحكمة، رأت رمزاً داخل مرآة جعلت كل من ينظر إليها يتلاشى."
        : "Hona, full of wisdom, saw a symbol inside a mirror that made anyone looking at it fade.",
      image: "/lovable-uploads/e97bc834-89c0-4d23-87b4-e7b2672e1986.png"
    },
    {
      id: 6,
      name: "Bono",
      nameAr: "بونو",
      title: language === 'ar' ? "السريع" : "The Speedster",
      boxName: language === 'ar' ? "وسادة الموز" : "Banana Pillow",
      color: "🌀",
      colorClass: "bg-cyan-500",
      description: language === 'ar'
        ? "بونو هو الأسرع في كيدو. دخل دائرة الرموز أولاً ورأى رمزاً لم يره أحد غيره—\"المجهول\"."
        : "Bono is the fastest in Kiddo. He entered the Code Circle first and saw a symbol no one else did—\"The Unknown.\"",
      image: "/lovable-uploads/c8623a2e-890a-4c5b-a36a-f796994b980e.png"
    },
    {
      id: 7,
      name: "Raizo",
      nameAr: "رايزو",
      title: language === 'ar' ? "المتمرد" : "The Rebel",
      boxName: language === 'ar' ? "تشوكو رايس" : "Choco Rice",
      color: "🟫",
      colorClass: "bg-amber-600",
      description: language === 'ar'
        ? "رايزو، الأكثر عناداً، لم ينتظر الرمز—بل طارده. في أقدم جزء من كيدو، استدعى عيناً عائمة."
        : "Raizo, the most stubborn, didn't wait for the code—he chased it. He summoned a floating eye by drawing a symbol.",
      image: "/lovable-uploads/e03e79b9-20e9-4c60-8160-45ad5ee80b4b.png"
    },
    {
      id: 8,
      name: "Mr. Scoop",
      nameAr: "السيد سكوب",
      title: language === 'ar' ? "المراقب" : "The Observer",
      boxName: language === 'ar' ? "كوكو سكوبس" : "Cocoa Scoops",
      color: "⬛",
      colorClass: "bg-gray-800",
      description: language === 'ar'
        ? "السيد سكوب يلاحظ ما لا يلاحظه الآخرون. تبع حبات الكاكاو إلى دائرة حول بقعة سوداء."
        : "Mr. Scoop notices what others don't. He followed cocoa puffs into a circle around a black spot.",
      image: "/lovable-uploads/be57f32b-ab79-48f8-a278-a5e7829bbef2.png"
    },
    {
      id: 9,
      name: "Captain Flakes",
      nameAr: "كابتن فليكس",
      title: language === 'ar' ? "الرياضي" : "The Athlete",
      boxName: language === 'ar' ? "تشوكو فليكس" : "Choco Flakes",
      color: "🟨",
      colorClass: "bg-yellow-500",
      description: language === 'ar'
        ? "كابتن فليكس هو أفضل رياضي في كيدو. أثناء التدريب، شقت سرعته الأرض لتكشف عن حلقة معدنية دوارة."
        : "Captain Flakes is Kiddo's top athlete. His incredible speed cracked the ground to reveal a spinning metal ring.",
      image: "/lovable-uploads/fe581ba8-e31d-45d6-b229-81bd5f459ad1.png"
    },
    {
      id: 10,
      name: "Professor Pops",
      nameAr: "البروفيسور بوبس",
      title: language === 'ar' ? "العبقري" : "The Genius",
      boxName: language === 'ar' ? "تشوكو بوبس" : "Choco Pops",
      color: "🟪",
      colorClass: "bg-purple-500",
      description: language === 'ar'
        ? "البروفيسور بوبس، الأذكى في كيدو، يرتدي نظارات سحرية تكشف الرموز والمعادلات المخفية."
        : "Professor Pops, the smartest in Kiddo, wears magic glasses that reveal hidden codes and equations.",
      image: "/lovable-uploads/6fdf2439-ecd3-4eb8-8a13-fbe50e1b17df.png"
    }
  ];

  return (
    <EnhancedLayout>
      <SEOHead
        title={language === 'ar'
          ? "قابل شخصيات كيدو أرابيا - أورا، دريمي والأصدقاء"
          : "Meet the Kiddo Arabia Characters - Aura, Dreamy & Friends"}
        description={language === 'ar'
          ? "ادخل عالم كيدو وقابل شخصياتنا الممتعة! من أورا إلى كابتن فليكس، اكتشف القصص وراء حبوب كيدو أرابيا المفضلة لديك."
          : "Enter the Kiddoverse and meet our fun characters! From Aura to Captain Flakes, discover the stories behind your favorite Kiddo Arabia cereals."}
        keywords={language === 'ar'
          ? "شخصيات كيدو أرابيا, تمائم حبوب إفطار, شخصيات أطفال, أورا, دريمي, كابتن فليكس, تمائم العلامة التجارية, قصص للأطفال"
          : "kiddo arabia characters, cereal mascots, kids characters, aura, dreamy, captain flakes, brand mascots, storytelling for kids"}
        lang={language}
      />
      <div className="bg-background min-h-screen">
        {/* Header */}
        <div className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('pages.characters.backToHome')}
            </Button>

            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <ScrollReveal animation="fade" delay={0.1}>
                  {t('pages.characters.title')}
                </ScrollReveal>
              </h1>
              <div className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                <ScrollReveal animation="fade" delay={0.2}>
                  {t('pages.characters.subtitle')}
                </ScrollReveal>
              </div>

              {/* Hero Character Group Image */}
              <div className="mt-12">
                <img
                  src="/lovable-uploads/73fea82d-bd47-4d65-87b0-239aea36d39b.png"
                  alt={language === 'ar' ? "مجموعة شخصيات كيدو" : "Kiddo Characters Group"}
                  className="w-full max-w-4xl mx-auto h-auto object-contain rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Characters Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((character, index) => {
                // Map character to cereal ID manually since we don't have it in the object yet
                const getCerealId = (id: number) => {
                  switch (id) {
                    case 1: return 9; // Aura -> Fruit Rings
                    case 2: return 6; // Dreamy -> Crunchy Pillow
                    case 3: return 3; // Strawby -> Strawberry Pillow
                    case 4: return 4; // Krio -> Choco Creamo
                    case 5: return 2; // Hona -> Honey Rings
                    case 6: return 1; // Bono -> Banana Pillow
                    case 7: return 7; // Raizo -> Choco Rice
                    case 8: return 8; // Mr. Scoop -> Cocoa Scoops
                    case 9: return 11; // Captain Flakes -> Choco Flakes
                    case 10: return 5; // Professor Pops -> Choco Pops
                    default: return 1;
                  }
                };
                const cerealId = getCerealId(character.id);

                return (
                  <ScrollReveal key={character.id} animation="scale" delay={index * 0.1}>
                    <Card
                      className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/cereals?id=${cerealId}`)}
                    >
                      <CardContent className="p-6">
                        {/* Character Badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-4 h-4 rounded-full ${character.colorClass}`}></div>
                          <span className="text-2xl">{character.color}</span>
                          <div className="text-sm text-muted-foreground">
                            {language === 'ar' ? 'المنتج:' : 'Box:'} {character.boxName}
                          </div>
                        </div>

                        {/* Character Image */}
                        <div className="h-48 rounded-xl mb-4 relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                          <img
                            src={character.image}
                            alt={language === 'ar' ? character.nameAr : character.name}
                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          <Sparkles className="absolute top-2 right-2 h-5 w-5 text-primary/50" />
                        </div>

                        {/* Character Info */}
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                              {language === 'ar' ? character.nameAr : character.name}
                            </h3>
                            <p className="text-primary font-medium text-sm">
                              {character.title}
                            </p>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {character.description}
                          </p>

                          {/* Link to Product */}
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/cereals?id=${cerealId}`);
                            }}
                          >
                            {language === 'ar' ? `جرب ${character.boxName}` : `Try ${character.boxName}`}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Mystery Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-hero rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">
                  {language === 'ar' ? 'سر رمز النكهة' : 'The Flavor Code Mystery'}
                </h3>
                <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                  {language === 'ar'
                    ? 'كل شخصية في عالم كيدو تحمل جزءاً من لغز قديم. بينما يكتشفون المزيد من الرموز ويكشفون الحقائق المخفية، تتضاعف الأسئلة: ما هو رمز النكهة؟ من ترك هذه الأدلة؟ وماذا يحدث عندما تجتمع كل القطع؟'
                    : 'Each character in the Kiddoverse holds a piece of an ancient mystery. As they discover more symbols and uncover hidden truths, the questions multiply: What is the Flavor Code? Who left these clues? And what happens when all the pieces come together?'}
                </p>
                <div className="mt-8 text-2xl opacity-80">
                  🔮 ⚡ 🌟 🎭 👁️ 🔥 🌙 💨 🔮 🧿
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedLayout>
  );
};

export default Characters;