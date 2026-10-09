import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductionReadyHeader from "./ProductionReadyHeader";
import Footer from "./Footer";
import AiBot from "./AiBot";
import CookieConsent from "./CookieConsent";
import SkipToContent from "./SkipToContent";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <ProductionReadyHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <AiBot />
      <CookieConsent />
    </div>
  );
};

export default Layout;