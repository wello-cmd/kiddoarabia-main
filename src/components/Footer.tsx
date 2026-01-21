import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { safeExternalLink } from "@/utils/security";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" }
    ],
    products: [
      { name: "Cereals", href: "/cereals" },
      { name: "Snacks", href: "/biscuits" },
      { name: "Beverages", href: "/oat-jars" },
      { name: "New Arrivals", href: "/products" }
    ],
    support: [
      { name: "Contact Us", href: "/#contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Nutrition Guide", href: "/nutrition" },
      { name: "Allergen Info", href: "/allergens" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refunds" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Kiddo-Arabia/100090897127132/?_rdr", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/kiddoarabia/", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@kiddoarabia_", label: "TikTok", color: "hover:text-black" },
    { icon: Youtube, href: "https://www.youtube.com/@KiddoArabia", label: "YouTube", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected with Kiddo
            </h3>
            <p className="text-background/80 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new products, special offers, parenting tips, and healthy recipes
              delivered straight to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-primary outline-none"
              />
              <Button
                variant="kiddo"
                className="px-8"
                onClick={() => alert('Thank you for subscribing! We\'ll keep you updated with our latest news and offers.')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-background/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/e560996b-c37d-4899-977d-d72bc3ef3ed0.png"
                alt="Kiddo"
                className="h-20 w-auto"
              />
            </div>

            <p className="text-background/80 leading-relaxed max-w-md">
              Nourishing young minds and bodies with love, care, and the finest natural ingredients.
              Building a healthier future, one meal at a time.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Egypt Maadi</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">01001000120</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">info@s2cfood.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`bg-background/10 hover:bg-background/20 text-background ${social.color} transition-all duration-300 hover:scale-110`}
                  onClick={() => safeExternalLink(social.href)}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-background/80">
              <span>© 2024 Kiddo Arabia. Made with</span>
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span>for healthy kids everywhere.</span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <span className="text-background/60">All rights reserved</span>
              <div className="flex gap-4">
                <Link
                  to="/privacy"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/cookies"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;