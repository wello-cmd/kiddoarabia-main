import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Leaf, Sparkles, Star } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/kiddo-hero-illustration.png";
import Hero3DElement from "./Hero3DElement";

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -25]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Simplified mouse tracking - only on desktop
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 10,
          y: (e.clientY / window.innerHeight - 0.5) * 10,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen bg-gradient-warm overflow-hidden"
    >
      <Hero3DElement />

      {/* Background Decorations - Simplified */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full blur-xl"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-accent rounded-full blur-xl"
          style={{ transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-secondary rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1" // Mobile: Text below image
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: y1 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm tracking-wide mb-2"
              >
                ✨ {t('header.notice')}
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('hero.title.part1')} <br />
                <span className="text-primary relative inline-block">
                  {t('hero.title.part2')}
                  <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent opacity-30 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl lg:text-3xl text-gray-700 font-medium font-serif italic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.subtitle.new')}
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t('hero.description.new')}
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Heart, text: t('hero.madeWithLove'), color: "text-red-500" },
                { icon: Shield, text: t('hero.safe'), color: "text-blue-500" },
                { icon: Leaf, text: t('hero.natural'), color: "text-green-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 shadow-glow border border-primary/20"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 40px hsl(var(--primary) / 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                  </motion.div>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                variant="kiddo"
                size="lg"
                className="group relative overflow-hidden h-14 px-8 text-lg" // Increased size for impact
                onClick={() => navigate('/products')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "100%" : "-100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 font-bold">{t('hero.exploreProducts')}</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-5 w-5 ml-2" />
                </motion.div>
                <Sparkles className="h-4 w-4 absolute top-2 right-2 text-white/60 animate-pulse" />
              </Button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="warm"
                  size="lg"
                  onClick={() => navigate('/about')}
                  className="relative group"
                >
                  <span>{t('hero.learnStory')}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{
              y: y2,
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
            }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-hero opacity-30 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <LazyImage
                src={heroImage}
                alt={t('hero.altText')}
                className="w-full h-auto max-w-lg mx-auto relative z-10"
                containerClassName="w-full"
              />

              {/* Enhanced Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-full shadow-glow"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.3 }}
              >
                <Heart className="h-6 w-6" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary text-foreground p-4 rounded-full shadow-glow"
                animate={{
                  y: [5, -5, 5],
                  rotate: [0, -360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.3 }}
              >
                <Leaf className="h-6 w-6" />
              </motion.div>

              {/* Additional floating sparkles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-primary/80 p-2 rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    right: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  <Sparkles className="h-3 w-3 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: y1 }}
      >
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-background"
          animate={{
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            initial={{ d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" }}
            opacity=".25"
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V52.29c47.79,18.2,103.59,28.17,158,24,70.36-3.37,136.33-29.31,206.8-33.5C438.64,36.43,512.34,57.67,583,76.05c69.27,14,138.3,20.88,209.4,9.08,36.15-4,69.85-15.84,104.45-27.34C989.49,29,1113-10.29,1200,56.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            initial={{ d: "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" }}
            opacity=".5"
            animate={{
              d: [
                "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
                "M0,0V20.81C13,40.92,27.64,60.86,47.69,76.05,99.41,115.27,165,115,224.58,95.58c31.15-8.15,60.09-24.07,89.67-37.8,40.92-17,84.73-44,130.83-47.67,36.26-1.85,70.9,11.42,98.6,33.56,31.77,27.39,62.32,64,103.63,75,40.44,12.79,81.35-4.69,119.13-22.28s75.16-37,116.92-41.05c59.73-4.85,113.28,24.88,168.9,40.84,30.2,9.66,59,7.17,87.09-6.5,22.43-9.89,48-25.93,60.65-48.24V0Z",
                "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            initial={{ d: "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" }}
            animate={{
              d: [
                "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
                "M0,0V8.63C149.93,62,314.09,74.32,475.83,45.57c43-6.64,84.23-19.12,127.61-25.46,59-7.63,112.48,13.24,165.56,36.4C827.93,80.22,886,98.24,951.2,93c86.53-6,172.46-44.71,248.8-83.81V0Z",
                "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;