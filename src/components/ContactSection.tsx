import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { safeExternalLink } from "@/utils/security";
const ContactSection = () => {
  const { t } = useTranslation();

  const contactInfo = [{
    icon: MapPin,
    title: t('contact.info.address'),
    content: "Egypt Maadi\nCairo, Egypt",
    color: "text-primary"
  }, {
    icon: Phone,
    title: t('contact.info.phone'),
    content: "01001000120",
    color: "text-accent"
  }, {
    icon: Mail,
    title: t('contact.info.email'),
    content: "hello@kiddoarabia.com\nsupport@kiddoarabia.com",
    color: "text-secondary"
  }, {
    icon: Clock,
    title: t('contact.info.hours'),
    content: "Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday - Saturday: Closed",
    color: "text-primary"
  }];
  return <section id="contact" className="py-20 bg-gradient-warm">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-glow bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Send className="h-6 w-6 text-primary" />
              {t('contact.form.title')}
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <Input placeholder={t('contact.form.name')} className="bg-background/50 border-border/50 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <Input type="email" placeholder={t('contact.form.email')} className="bg-background/50 border-border/50 focus:border-primary transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.phone')}
                </label>
                <Input placeholder={t('contact.form.phone')} className="bg-background/50 border-border/50 focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.subject')}
                </label>
                <Input placeholder={t('contact.form.subject')} className="bg-background/50 border-border/50 focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')} *
                </label>
                <Textarea placeholder={t('contact.form.message')} rows={5} className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none" />
              </div>

              <Button
                variant="kiddo"
                size="lg"
                className="w-full group"
                onClick={() => alert(t('contact.form.send') + '! We\'ll get back to you within 24 hours.')}
              >
                {t('contact.form.send')}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('contact.info.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">Have questions about our products? Need nutritional advice? Want to become a partner? We're here to help! Reach out to us through any of the channels below.</p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card/60 backdrop-blur-sm border-border/50" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`${info.color} bg-gradient-hero p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
          </div>

          <Card className="overflow-hidden shadow-card border-none">
            <div className="relative h-56 bg-[#e5e7eb] overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/31.2357,30.0444,12,0/800x400@2x?access_token=placeholder')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

              {/* Decorative Map Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <div className="relative bg-white p-3 rounded-full shadow-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  {/* Location Tooltip */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="font-bold text-xs text-primary">Kiddo HQ</p>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-xs font-bold text-foreground flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open Now
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Contact */}
          <div className="bg-gradient-hero rounded-2xl p-6 text-white">
            <h4 className="text-xl font-bold mb-3">{t('contact.help.title')}</h4>
            <p className="text-white/90 mb-4">
              Our customer service team is available during business hours to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary flex-1"
                onClick={() => safeExternalLink('tel:01001000120', '_self')}
              >
                <Phone className="h-4 w-4 mr-2" />
                {t('contact.help.call')}
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary flex-1"
                onClick={() => safeExternalLink('mailto:hello@kiddoarabia.com', '_self')}
              >
                <Mail className="h-4 w-4 mr-2" />
                {t('contact.help.email')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default ContactSection;