/**
 * PRODUCTION-READY HEADER v2.0
 * Elite-tier navigation with accessibility and performance optimizations
 * Matches Apple.com, Stripe.com navigation standards
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Search, Sun, Moon } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  badge?: string;
  external?: boolean;
}

const ProductionReadyHeader: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Navigation structure
  const navigation: NavigationItem[] = [
    {
      label: t('nav.products'),
      href: '/products',
      children: [
        { label: t('nav.cereals'), href: '/cereals' },
        { label: t('nav.oatJars'), href: '/oat-jars' },
        { label: t('nav.biscuits'), href: '/biscuits' },
      ]
    },
    { label: t('nav.recipes'), href: '/recipes' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.characters'), href: '/characters' },
    { label: t('nav.blog'), href: '/blog' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setIsSearchOpen(false);
      } else if (e.key === '/' && e.metaKey) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 transition-all duration-200"
      >
        {t('accessibility.skipToContent')}
      </a>

      <motion.header
        ref={headerRef}
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container mx-auto px-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="flex items-center space-x-2 font-bold text-xl text-foreground hover:text-primary transition-colors duration-200"
                aria-label={t('brand.name')}
              >
                <img
                  src="/lovable-uploads/8aa5e4ba-a495-4253-a878-6d7cd762bdf4.png"
                  alt="Kiddo logo"
                  className="h-10 md:h-12 w-auto transition-all duration-300"
                  decoding="async"
                />
                <span className="sr-only">{t('brand.name')}</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.href)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          'flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1',
                          location.pathname.startsWith(item.href)
                            ? 'text-primary'
                            : 'text-foreground/80'
                        )}
                        aria-expanded={activeDropdown === item.href}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.label}
                                {child.badge && (
                                  <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        'text-sm font-medium transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1',
                        location.pathname === item.href
                          ? 'text-primary'
                          : 'text-foreground/80'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="relative">
                <EnhancedButton
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-label={t('actions.search')}
                  className="hidden md:flex"
                >
                  <Search className="h-4 w-4" />
                </EnhancedButton>

                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 300 }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute right-0 top-full mt-2 overflow-hidden"
                    >
                      <form onSubmit={handleSearch} className="relative">
                        <input
                          ref={searchRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={t('actions.searchPlaceholder')}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                        />
                        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                          ⌘K
                        </kbd>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Language Selector */}
              <div className="relative">
                <EnhancedButton
                  variant="ghost"
                  size="icon"
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  aria-label={t('actions.changeLanguage')}
                  className="hidden sm:flex"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">{language.toUpperCase()}</span>
                </EnhancedButton>
              </div>

              {/* Dark Mode Toggle */}
              <EnhancedButton
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label={t('actions.toggleDarkMode')}
                className="hidden sm:flex"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </EnhancedButton>

              {/* Mobile Menu Toggle */}
              <EnhancedButton
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={t('actions.toggleMenu')}
                aria-expanded={isMenuOpen}
                className="lg:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </EnhancedButton>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative md:hidden">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('actions.searchPlaceholder')}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </form>

                {/* Mobile Navigation */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.href}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(
                              activeDropdown === item.href ? null : item.href
                            )}
                            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                'h-4 w-4 transition-transform duration-200',
                                activeDropdown === item.href && 'rotate-180'
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.href && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-2 overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <EnhancedButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                    className="flex items-center space-x-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language.toUpperCase()}</span>
                  </EnhancedButton>

                  <EnhancedButton
                    variant="ghost"
                    size="sm"
                    onClick={toggleDarkMode}
                    className="flex items-center space-x-2"
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    <span>{isDarkMode ? t('actions.lightMode') : t('actions.darkMode')}</span>
                  </EnhancedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductionReadyHeader;