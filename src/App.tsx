import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { InteractionProvider } from "@/contexts/InteractionContext";
import { SoundProvider } from "@/contexts/SoundContext";
import ErrorBoundary from "@/components/ErrorBoundary";

import Analytics from "@/components/Analytics";
import SkipToContent from "@/components/SkipToContent";
import { usePerformance } from "@/hooks/usePerformance";
import { lazy, Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence } from "framer-motion";

// Lazy load pages for better performance
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
const Careers = lazy(() => import("./pages/Careers"));
const Press = lazy(() => import("./pages/Press"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Nutrition = lazy(() => import("./pages/Nutrition"));
const Allergens = lazy(() => import("./pages/Allergens"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Refunds = lazy(() => import("./pages/Refunds"));

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
            <SmoothScroll>
              <SkipToContent />
              <Toaster />
              <Sonner />
              <CustomCursor />
              <SoundProvider>
                <BrowserRouter>
                  <Analytics />
                  <AnimatedRoutes />
                </BrowserRouter>
              </SoundProvider>
            </SmoothScroll>
          </TranslationProvider>
        </InteractionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageSuspense><Index /></PageSuspense>} />
        <Route path="/recipes" element={<PageSuspense><Recipes /></PageSuspense>} />
        <Route path="/recipe/:id" element={<PageSuspense><RecipeDetail /></PageSuspense>} />
        <Route path="/blog" element={<PageSuspense><Blog /></PageSuspense>} />
        <Route path="/blog/:id" element={<PageSuspense><BlogDetail /></PageSuspense>} />
        <Route path="/about" element={<PageSuspense><About /></PageSuspense>} />
        <Route path="/products" element={<PageSuspense><Products /></PageSuspense>} />
        <Route path="/characters" element={<PageSuspense><Characters /></PageSuspense>} />
        <Route path="/oat-jars" element={<PageSuspense><OatJars /></PageSuspense>} />
        <Route path="/biscuits" element={<PageSuspense><Biscuits /></PageSuspense>} />
        <Route path="/cereals" element={<PageSuspense><Cereals /></PageSuspense>} />
        <Route path="/search" element={<PageSuspense><SearchPage /></PageSuspense>} />
        <Route path="/careers" element={<PageSuspense><Careers /></PageSuspense>} />
        <Route path="/press" element={<PageSuspense><Press /></PageSuspense>} />
        <Route path="/faq" element={<PageSuspense><FAQ /></PageSuspense>} />
        <Route path="/nutrition" element={<PageSuspense><Nutrition /></PageSuspense>} />
        <Route path="/allergens" element={<PageSuspense><Allergens /></PageSuspense>} />
        <Route path="/privacy" element={<PageSuspense><Privacy /></PageSuspense>} />
        <Route path="/terms" element={<PageSuspense><Terms /></PageSuspense>} />
        <Route path="/cookies" element={<PageSuspense><Cookies /></PageSuspense>} />
        <Route path="/refunds" element={<PageSuspense><Refunds /></PageSuspense>} />
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