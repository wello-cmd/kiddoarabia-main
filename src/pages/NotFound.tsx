import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "@/contexts/TranslationContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title={language === 'ar'
          ? "الصفحة غير موجودة - كيدو أرابيا"
          : "Page Not Found - Kiddo Arabia"}
        description={language === 'ar'
          ? "الصفحة التي تبحث عنها غير موجودة."
          : "The page you are looking for does not exist."}
        noIndex={true}
        lang={language}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
