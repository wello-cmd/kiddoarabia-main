import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const ProductionReadyHeader = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useTranslation();
  const ar = language === "ar";
  const { pathname } = useLocation();
  const links = [
    { to: "/products", label: ar ? "المنتجات" : "Products" },
    { to: "/characters", label: ar ? "الشخصيات" : "Characters" },
    { to: "/recipes", label: ar ? "الوصفات" : "Recipes" },
    { to: "/play", label: ar ? "العب" : "Play" },
    { to: "/blog", label: ar ? "المدونة" : "Blog" },
    { to: "/about", label: ar ? "من نحن" : "About" },
  ];
  const retailLabel = ar ? "تواصل مع فريق كيدو" : "Partner with Kiddo";
  return (
    <header className={`site-header ${pathname === '/characters' ? 'living-glass-header' : ''}`}>
      <nav className="site-nav" aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
        <Link to="/" onClick={() => setOpen(false)} aria-label={ar ? "الرئيسية - كيدو" : "Kiddo Arabia home"} className="site-logo">
          <img src="/lovable-uploads/8aa5e4ba-a495-4253-a878-6d7cd762bdf4.png" alt="Kiddo" width="112" height="78" />
        </Link>
        <div className="site-nav-links">
          {links.map(link => <NavLink key={link.to} to={link.to} className={({ isActive }) => `site-nav-link ${isActive ? "is-active" : ""}`}>{link.label}</NavLink>)}
        </div>
        <div className="site-nav-actions">
          <button type="button" className="site-language" onClick={() => setLanguage(ar ? "en" : "ar")} aria-label={ar ? "Switch to English" : "التبديل إلى العربية"}>{ar ? "EN" : "عربي"}</button>
          <Link className="site-retail" to="/partners">{retailLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link>
          <button type="button" className="site-menu-toggle" aria-label={open ? (ar ? "إغلاق القائمة" : "Close menu") : (ar ? "فتح القائمة" : "Open menu")} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={25} /> : <Menu size={25} />}</button>
        </div>
      </nav>
      {open && <div id="mobile-navigation" className="site-mobile-menu">
        {links.map(link => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="site-mobile-link">{link.label}</NavLink>)}
        <Link to="/partners" onClick={()=>setOpen(false)} className="site-mobile-retail">{retailLabel}<ArrowUpRight size={18} /></Link>
      </div>}
    </header>
  );
};
export default ProductionReadyHeader;
