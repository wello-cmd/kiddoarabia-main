import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/contexts/TranslationContext';
import ProductRangeDisplay from '@/components/ProductRangeDisplay';
import '@/styles/kiddo-range-hero.css';

export default function HeroSection() {
  const { language } = useTranslation();
  const ar = language === 'ar';
  return <section className="kiddo-range-hero" aria-labelledby="home-range-title">
    <div className="range-hero-intro">
      <div className="range-hero-copy"><h1 id="home-range-title">{ar ? 'عالم كيدو.\nنكهات تستكشفها.' : 'Your world of Kiddo.\nAll the flavors.'}</h1><p>{ar ? 'حبوب الإفطار وعبوات الشوفان وبسكويت الشوفان. استكشف المجموعة كاملة، وتعرّف على فريق كيدو.' : 'Cereals, oat jars and oat biscuits. Discover the full range and meet the crew behind the crunch.'}</p><div className="range-hero-actions"><Link to="/products" className="kiddo-action kiddo-action-red">{ar ? 'تصفح المنتجات' : 'Explore products'}<ArrowUpRight size={19}/></Link><Link to="/partners" className="kiddo-action kiddo-action-white">{ar ? 'التجارة والتوزيع' : 'Retail & distribution'}<ArrowUpRight size={19}/></Link></div></div>
      <img className="range-hero-mascots" src="/generated/home-range-backdrop-v1.webp" alt={ar ? 'بوبس وكينغ ولوبي يرحبون بك في عالم كيدو' : 'Pops, King and Loopy welcome you to Kiddo'} width="1672" height="941" {...{fetchpriority:'high'}}/>
    </div>
    <ProductRangeDisplay ar={ar}/>
  </section>;
}
