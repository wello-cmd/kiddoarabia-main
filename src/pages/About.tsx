import ProductRangeDisplay from '@/components/ProductRangeDisplay';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import ContactSection from '@/components/ContactSection';
import { useTranslation } from '@/contexts/TranslationContext';
import '@/styles/kiddo-about-professional.css';

export default function About() {
  const { language } = useTranslation();
  const ar = language === 'ar';
  const ranges = [
    { href: '/cereals', name: ar ? 'حبوب الإفطار' : 'Cereals', detail: ar ? '١١ صنفًا من حبوب الإفطار، تشمل الشوكولاتة والحلقات وبيلو والكورن فليكس.' : 'Eleven cereals spanning chocolate varieties, rings, pillows and corn flakes.', count: ar ? '١١ منتجًا' : '11 products' },
    { href: '/oat-jars', name: ar ? 'عبوات الشوفان' : 'Oat jars', detail: ar ? 'شوفان الحبة الكاملة وشوفان سريع التحضير، للإفطار والوصفات المنزلية.' : 'Whole-grain oats and quick-cooking oats for breakfast and home recipes.', count: ar ? 'منتجان' : '2 products' },
    { href: '/biscuits', name: ar ? 'بسكويت الشوفان' : 'Oat biscuits', detail: ar ? 'الشوكولاتة، والتفاح والقرفة، والشوفان السادة، وجوز الهند.' : 'Chocolate, Apple Cinnamon, Plain Oats and Coconut.', count: ar ? '٤ منتجات' : '4 products' },
  ];

  return (
    <EnhancedLayout>
      <div className="kiddo-company" dir={ar ? 'rtl' : 'ltr'}>
        <section className="company-intro kiddo-wrap" aria-labelledby="company-title">
          <h1 id="company-title">{ar ? 'عن كيدو أرابيا.' : 'About Kiddo Arabia.'}</h1>
          <div className="company-intro-copy">
            <p className="company-lead">{ar ? 'كيدو أرابيا علامة للمنتجات الغذائية تجمع حبوب الإفطار وعبوات الشوفان وبسكويت الشوفان في هوية مميزة بشخصياتها وألوان عبواتها.' : 'Kiddo Arabia is a food brand bringing cereals, oat jars and oat biscuits together through distinctive characters and colorful packaging.'}</p>
            <p>{ar ? 'نقدم مجموعة يمكن للعائلات استكشافها حسب تفضيلاتها، ونرحب بتجار التجزئة والموزعين حول العالم الراغبين في التعرف على المنتجات ومناقشة فرص التعاون.' : 'Our range gives families different products to explore according to their preferences. We also welcome retailers and distributors worldwide who want to learn about the products and discuss cooperation.'}</p>
          </div>
          <div className="company-intro-actions">
            <Link to="/products" className="kiddo-action kiddo-action-red">{ar ? 'استكشف المنتجات' : 'Explore our products'}<ArrowUpRight size={19} aria-hidden="true" /></Link>
            <Link to="/partners" className="company-link">{ar ? 'تواصل بشأن الشراكات' : 'Discuss a partnership'}<ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="company-range kiddo-wrap" aria-labelledby="company-range-title">
          <div className="company-section-intro">
            <h2 id="company-range-title">{ar ? 'مجموعة كيدو.' : 'The Kiddo range.'}</h2>
            <p>{ar ? '١٧ منتجًا في ثلاث فئات. تصفح كل فئة للتعرف على الأصناف واختيار ما يهمك، سواء لبيتك أو لعملك.' : 'Seventeen products across three categories. Browse each range to find the varieties that interest you, whether for your home or your business.'}</p>
          </div>
          <div className="company-range-list">
            {ranges.map((range) => (
              <Link key={range.href} to={range.href} className="company-range-row">
                <h3>{range.name}</h3>
                <p>{range.detail}</p>
                <span>{range.count}</span>
                <ArrowUpRight size={24} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="company-pack-note">{ar ? 'للمكونات ومعلومات الحساسية وتعليمات التحضير، يرجى الرجوع إلى العبوة الحالية للمنتج الذي تختاره.' : 'For ingredients, allergen information and preparation instructions, refer to the current packaging of the product you choose.'}</p>
        </section>

        <section className="company-identity" aria-labelledby="company-identity-title">
          <div className="kiddo-wrap company-identity-inner">
            <ProductRangeDisplay ar={ar} studio/>
            <div>
              <h2 id="company-identity-title">{ar ? 'هوية تتعرف عليها.' : 'A recognizable identity.'}</h2>
              <p>{ar ? 'شخصيات كيدو وألوان العبوات جزء أساسي من العلامة. تمنح كل منتج وجهًا مميزًا، وتربط المجموعة بعالم مشترك من الشخصيات التي يمكن للعائلات التعرف عليها.' : 'Kiddo’s characters and package colors are central to the brand. They give individual products a distinctive face and connect the range through a shared character world for families to discover.'}</p>
              <Link to="/characters" className="company-link">{ar ? 'تعرّف على شخصيات كيدو' : 'Meet the Kiddo characters'}<ArrowUpRight size={19} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="company-leadership kiddo-wrap" aria-labelledby="company-leadership-title">
          <h2 id="company-leadership-title">{ar ? 'قيادة كيدو أرابيا.' : 'Our leadership.'}</h2>
          <figure className="company-leader">
            <img src="/team/waleed-fathy-afify.jpg" alt={ar ? 'وليد فتحي عفيفي' : 'Waleed Fathy Afify'} width="303" height="303" loading="lazy" />
            <figcaption>
              <h3>{ar ? 'وليد فتحي عفيفي' : 'Waleed Fathy Afify'}</h3>
              <p>{ar ? 'الرئيس التنفيذي، كيدو أرابيا' : 'CEO, Kiddo Arabia'}</p>
            </figcaption>
          </figure>
        </section>

        <section className="company-audiences kiddo-wrap" aria-label={ar ? 'للعائلات والشركاء التجاريين' : 'For families and business partners'}>
          <div>
            <h2>{ar ? 'للعائلات.' : 'For families.'}</h2>
            <p>{ar ? 'إلى جانب المجموعة، تجدون وصفات تستخدم منتجات كيدو، وأفكار أنشطة في المدونة، وألعابًا وصفحات تلوين مع الشخصيات. استكشفوا المنتجات والأفكار التي تناسب أوقاتكم معًا.' : 'Alongside the range, discover recipes using Kiddo products, activity ideas in our journal, and games and coloring pages featuring the characters. Explore products and ideas for the time you share.'}</p>
            <div className="company-audience-links">
              <Link to="/recipes" className="company-link">{ar ? 'اكتشف الوصفات' : 'Discover recipes'}<ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link to="/play" className="company-link">{ar ? 'العب مع كيدو' : 'Play with Kiddo'}<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <div>
            <h2>{ar ? 'لتجار التجزئة والموزعين.' : 'For retailers and distributors.'}</h2>
            <p>{ar ? 'نرحب باستفسارات الشراكة من حول العالم. تصفح المجموعة، واختر المنتجات التي تهمك، وعرّفنا بعملك وسوقك عبر صفحة الشراكات لبدء الحديث مع الفريق.' : 'We welcome partnership enquiries from around the world. Browse the range, select the products that interest you, and introduce your business and market through our partner page to start a conversation with the team.'}</p>
            <Link to="/partners" className="kiddo-action kiddo-action-red">{ar ? 'ناقش فرص الشراكة' : 'Discuss partnership opportunities'}<ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
        </section>
        <ContactSection />
      </div>
    </EnhancedLayout>
  );
}
