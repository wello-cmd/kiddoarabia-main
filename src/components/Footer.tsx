import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { language } = useTranslation();
  const ar = language === "ar";
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-lead">
          <img src="/lovable-uploads/8aa5e4ba-a495-4253-a878-6d7cd762bdf4.png" alt="Kiddo Arabia" width="112" height="78" />
          <p>{ar ? "شخصيات محبوبة ونكهات تضيف المرح لكل صباح." : "A colorful crew for every breakfast table."}</p>
          <a href="mailto:hello@kiddoarabia.com" className="site-footer-email">hello@kiddoarabia.com <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div>
          <h2>{ar ? "استكشف" : "Explore"}</h2>
          <ul><li><Link to="/products">{ar ? "المنتجات" : "Products"}</Link></li><li><Link to="/characters">{ar ? "الشخصيات" : "Characters"}</Link></li><li><Link to="/recipes">{ar ? "الوصفات" : "Recipes"}</Link></li><li><Link to="/play">{ar ? "ألعاب وتلوين" : "Games & coloring"}</Link></li><li><Link to="/blog">{ar ? "ركن العائلة" : "Parents’ corner"}</Link></li><li><Link to="/partners">{ar ? "التوزيع والتجارة" : "Retail & distribution"}</Link></li><li><Link to="/about">{ar ? "من نحن" : "About"}</Link></li></ul>
        </div>
        <div>
          <h2>{ar ? "تابعنا" : "Follow Kiddo"}</h2>
          <div className="site-footer-social"><a aria-label="Instagram" href="https://www.instagram.com/kiddoarabia/" target="_blank" rel="noopener noreferrer"><Instagram /></a><a aria-label="Facebook" href="https://www.facebook.com/people/Kiddo-Arabia/100090897127132/" target="_blank" rel="noopener noreferrer"><Facebook /></a><a aria-label="YouTube" href="https://www.youtube.com/@KiddoArabia" target="_blank" rel="noopener noreferrer"><Youtube /></a><a aria-label="TikTok" href="https://www.tiktok.com/@kiddoarabia_" target="_blank" rel="noopener noreferrer"><FaTiktok /></a></div>
        </div>
      </div>
      <div className="site-footer-bottom">© {new Date().getFullYear()} Kiddo Arabia</div>
    </footer>
  );
};
export default Footer;
