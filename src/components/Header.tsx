import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: t('nav.about'), href: "#about", isSection: true },
    { name: t('nav.products'), href: "#products", isSection: true },
    { name: t('nav.recipes'), href: "/recipes", isSection: false },
    { name: language === 'ar' ? 'الشخصيات' : 'Characters', href: "/characters", isSection: false },
    { name: language === 'ar' ? 'المدونة' : 'Blog', href: "/blog", isSection: false },
    { name: t('nav.contact'), href: "#contact", isSection: true },
  ];

  const handleNavClick = (item: any) => {
    if (item.isSection) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
      {/* Top Notice Bar */}
      <div className="bg-gradient-hero text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          {t('header.notice')}
          <span
            className="underline ml-1 cursor-pointer hover:no-underline"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('header.learnMore')}
          </span>
        </p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="/logo.png"
              alt="Kiddo logo"
              className="h-16 md:h-20 w-auto"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Search - scrolls to contact for questions */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title="Contact Us"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;