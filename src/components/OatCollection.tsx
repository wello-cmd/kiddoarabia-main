import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import { useTranslation } from '@/contexts/TranslationContext';
import { oatJars, oatBiscuits } from '@/data/oats';

export default function OatCollection({ kind }: { kind: 'jars' | 'biscuits' }) {
  const { language } = useTranslation(); const ar = language === 'ar';
  const jars = kind === 'jars'; const items = jars ? oatJars : oatBiscuits;
  const title = jars ? (ar ? 'عبوات الشوفان.' : 'Oat jars.') : (ar ? 'بسكويت الشوفان.' : 'Oat biscuits.');
  return <EnhancedLayout>
    <section className="collection-hero">
      <div className="collection-copy"><Link className="page-back" to="/products"><ArrowLeft size={18} />{ar ? 'كل المنتجات' : 'All products'}</Link><h1>{title}</h1>
        <p>{jars ? (ar ? 'اكتشف شوفان الحبة الكاملة والشوفان سريع التحضير من كيدو.' : 'Whole-grain oats and quick-cooking oats. Two ways to bring oats to your table.') : (ar ? 'الشوكولاتة والتفاح والقرفة والشوفان السادة وجوز الهند. اكتشف بسكويت كيدو المفضل.' : 'Chocolate, Apple Cinnamon, Plain Oats and Coconut. Find your favourite Kiddo oat biscuit.')}</p>
        <a className="kiddo-action kiddo-action-red" href="#collection">{ar ? 'تصفح المجموعة' : 'Browse the collection'}<ArrowUpRight size={18} /></a>
      </div>
      <img src={jars ? "/generated/products/jars-scene-v2.webp" : "/generated/products/biscuits-scene-v3.webp"} alt={ar ? title : `Kiddo ${jars ? 'oat jars' : 'oat biscuits'} in a red and white studio scene`} width="1536" height="1024" {...{fetchpriority:"high"}} />
    </section>
    <section className="oat-collection kiddo-wrap" id="collection"><h2>{ar ? 'اختار المفضل.' : 'Choose your favourite.'}</h2><div className={`oat-pack-grid ${jars ? 'oat-pack-grid-jars' : ''}`}>{items.map(item => <article key={item.name}><img src={item.image} alt={`Kiddo ${jars ? 'Oat Jars' : 'Oat Biscuits'} ${item.name} pack illustration`} width="550" height="400" loading="lazy" /><h3>{ar ? item.ar : item.name}</h3><p>{title.replace('.', '')}</p><Link className="text-link product-enquire" to={`/partners?product=${encodeURIComponent(`Kiddo ${item.name}`)}#partner-enquiry`}>{ar ? "استفسر عن المنتج" : "Enquire"}<ArrowUpRight size={16}/></Link></article>)}</div>
      <div className="catalog-enquiry"><div><h2>{ar ? 'كيدو على رفوف متجرك.' : 'Bring Kiddo to your market.'}</h2><p>{ar ? 'تواصل مع الفريق للاستفسار عن المجموعة.' : 'Contact the team to enquire about the range.'}</p></div><a href="mailto:hello@kiddoarabia.com?subject=Retail%20or%20distribution%20enquiry" className="kiddo-action kiddo-action-red">{ar ? 'التجارة والتوزيع' : 'Retail & distribution'}<ArrowUpRight size={18} /></a></div>
    </section>
  </EnhancedLayout>;
}
