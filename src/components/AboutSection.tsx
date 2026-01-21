import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Leaf, Award, Users, Globe } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
const AboutSection = () => {
  const { t } = useTranslation();
  
  const values = [{
    icon: Heart,
    title: t('about.values.healthy.title'),
    description: t('about.values.healthy.description')
  }, {
    icon: Shield,
    title: t('about.values.safe.title'),
    description: t('about.values.safe.description')
  }, {
    icon: Leaf,
    title: t('about.values.taste.title'),
    description: t('about.values.taste.description')
  }];
  
  const stats = [{
    icon: Users,
    number: "10K+",
    label: t('about.impact.families'),
    color: "text-primary"
  }, {
    icon: Award,
    number: "500K+",
    label: t('about.impact.products'),
    color: "text-accent"
  }, {
    icon: Globe,
    number: "15+",
    label: t('about.impact.countries'),
    color: "text-secondary"
  }, {
    icon: Heart,
    number: "4.9★",
    label: t('about.impact.reviews'),
    color: "text-primary"
  }];
  return <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => <Card key={index} className="text-center group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50" style={{
          animationDelay: `${index * 200}ms`
        }}>
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Story Section */}
        <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-card mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                {t('about.story.title')}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t('about.story.description')}
                </p>
              </div>
              <Button 
                variant="kiddo" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('about.learnMore')}
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-playful rounded-3xl p-8 text-white text-center shadow-glow">
                <h4 className="text-2xl font-bold mb-6">{t('about.impact.title')}</h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => <div key={index} className="group">
                      <div className="flex items-center justify-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <stat.icon className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                          <div className="text-3xl font-bold">{stat.number}</div>
                          <div className="text-white/80">{stat.label}</div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-accent p-3 rounded-full animate-bounce-gentle">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary p-3 rounded-full animate-float">
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('about.newsletter.title')}
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {t('about.newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('about.newsletter.placeholder')} 
                className="flex-1 px-4 py-3 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-white/50 outline-none" 
              />
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
                onClick={() => alert('Thank you for subscribing! We\'ll keep you updated with our latest products and recipes.')}
              >
                {t('about.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;