import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { InteractionProvider } from "@/contexts/InteractionContext";
import ErrorBoundary from "@/components/ErrorBoundary";

import Analytics from "@/components/Analytics";
import SEOHead from "@/components/SEOHead";
import SkipToContent from "@/components/SkipToContent";
import { usePerformance } from "@/hooks/usePerformance";
import { lazy, Suspense, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { AnimatePresence } from "framer-motion";

// Lazy load pages for better performance
const Play = lazy(() => import("./pages/Play"));
const Partners = lazy(() => import("./pages/Partners"));
const Index = lazy(() => import("./pages/Index"));
const Recipes = lazy(() => import("./pages/Recipes"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Characters = lazy(() => import("./pages/Characters"));
const OatJars = lazy(() => import("./pages/OatJars"));
const Biscuits = lazy(() => import("./pages/Biscuits"));
const Cereals = lazy(() => import("./pages/Cereals"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SearchPage = lazy(() => import("./pages/Search"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const PageSuspense = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

const AppContent = () => {
  usePerformance();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <InteractionProvider>
          <TranslationProvider>
              <SkipToContent />
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Analytics />
                <AnimatedRoutes />
              </BrowserRouter>
          </TranslationProvider>
        </InteractionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) { window.scrollTo(0, 0); return; }
    const target = location.hash.slice(1);
    const timer = window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 400);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <SEOHead />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageSuspense><Index /></PageSuspense>} />
        <Route path="/recipes" element={<PageSuspense><Recipes /></PageSuspense>} />
        <Route path="/recipe/:id" element={<PageSuspense><RecipeDetail /></PageSuspense>} />
        <Route path="/blog" element={<PageSuspense><Blog /></PageSuspense>} />
        <Route path="/blog/:id" element={<PageSuspense><BlogDetail /></PageSuspense>} />
        <Route path="/about" element={<PageSuspense><About /></PageSuspense>} />
        <Route path="/products" element={<PageSuspense><Products /></PageSuspense>} />
        <Route path="/play" element={<PageSuspense><Play /></PageSuspense>} />
        <Route path="/partners" element={<PageSuspense><Partners /></PageSuspense>} />
        <Route path="/characters" element={<PageSuspense><Characters /></PageSuspense>} />
        <Route path="/oat-jars" element={<PageSuspense><OatJars /></PageSuspense>} />
        <Route path="/biscuits" element={<PageSuspense><Biscuits /></PageSuspense>} />
        <Route path="/cereals" element={<PageSuspense><Cereals /></PageSuspense>} />
        <Route path="/search" element={<PageSuspense><SearchPage /></PageSuspense>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageSuspense><NotFound /></PageSuspense>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ErrorBoundary>
    <AppContent />
  </ErrorBoundary>
);

export default App;