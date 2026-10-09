import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, X } from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import StoreStrip from '@/components/StoreStrip';
import TradeCatalogue from '@/components/trade/TradeCatalogue';
import { productFromQuery, readShortlist, saveShortlist, tradeCategories, tradeProducts, TradeCategory } from '@/components/trade/catalogue';
import { useTranslation } from '@/contexts/TranslationContext';
import '@/styles/kiddo-partners.css';
import '@/styles/kiddo-trade-hero.css';

export default function Partners() {
  const { language } = useTranslation();
  const ar = language === 'ar';
  const [params] = useSearchParams();
  const requested = params.get('product');
  const [selected, setSelected] = useState<string[]>(() => {
    const saved = readShortlist();
    const product = productFromQuery(requested);
    return product && !saved.includes(product.id) ? [...saved, product.id] : saved;
  });
  const [announcement, setAnnouncement] = useState('');
  const [type, setType] = useState('Distributor');
  const [company, setCompany] = useState('');
  const [market, setMarket] = useState('');
  const [range, setRange] = useState<TradeCategory>('All products');
  const [message, setMessage] = useState('');
  const products = tradeProducts.filter(p => selected.includes(p.id));
  useEffect(() => { saveShortlist(selected); }, [selected]);
  useEffect(() => {
    const product = productFromQuery(requested);
    if (product) setSelected(previous => previous.includes(product.id) ? previous : [...previous, product.id]);
  }, [requested]);
  function toggle(id: string) {
    const product = tradeProducts.find(p => p.id === id);
    if (!product) return;
    const removing = selected.includes(id);
    setSelected(previous => removing ? previous.filter(value => value !== id) : [...previous, id]);
    setAnnouncement(ar ? `${product.ar} ${removing ? 'تمت إزالته من الاستفسار' : 'تمت إضافته للاستفسار'}` : `${product.name} ${removing ? 'removed from' : 'added to'} your enquiry.`);
  }
  function clear() {
    setSelected([]);
    setAnnouncement(ar ? 'تم إفراغ قائمة المنتجات.' : 'Your product shortlist has been cleared.');
  }
  function enquire(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Kiddo ${type.toLowerCase()} enquiry: ${company}`;
    const body = `Company: ${company}\nMarket / country: ${market}\nInterest: ${type}\nProduct range: ${range}\nSelected products: ${products.length ? products.map(p => p.name).join('; ') : 'No individual products selected'}\n\n${message}`;
    window.location.href = `mailto:hello@kiddoarabia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <EnhancedLayout><section className="partner-hero kiddo-wrap"><div><h1>{ar ? 'كيدو على\nرفوف متجرك.' : 'Bring Kiddo\nto your shelves.'}</h1><p>{ar ? 'اكتشف حبوب الإفطار وبسكويت الشوفان وعبوات الشوفان. تحدث مع فريقنا عن البيع بالتجزئة والتوزيع في سوقك.' : 'Explore cereals, oat biscuits and oats. Talk to our team about retail and distribution in your market.'}</p><div className="partner-hero-actions"><a className="kiddo-action kiddo-action-red" href="#trade-catalogue">{ar ? 'جهز استفسارك' : 'Build your enquiry'}<ArrowUpRight size={18}/></a><a className="text-link" href="/downloads/kiddo-product-catalogue.pdf" download>{ar ? 'تحميل الكتالوج' : 'Download catalogue'}<Download size={18}/></a></div></div><div className="partner-visual"><img src="/brand/cereal-packaging-supplied.png" alt={ar ? 'تشكيلة عبوات حبوب إفطار كيدو المقدمة' : 'Supplied Kiddo cereal packaging range'} width="1448" height="1086"/>
    <div className="trade-enquiry-bar"><p><strong>{ar ? 'استفسارك' : 'Your enquiry'}</strong><span>{ar ? `${products.length} منتجات` : `${products.length} ${products.length === 1 ? "product" : "products"}`}</span></p><p className="trade-bar-help">{products.length ? (ar ? 'قائمتك جاهزة للمراجعة.' : 'Your shortlist is ready to review.') : (ar ? 'أضف منتجات من القائمة أدناه.' : 'Add products from the range below.')}</p><a className="kiddo-action kiddo-action-red" href="#partner-enquiry">{ar ? 'مراجعة الاستفسار' : 'Review enquiry'}<ArrowUpRight size={18}/></a></div></div></section>
    <div className="trade-announcement" role="status" aria-live="polite" aria-atomic="true">{announcement}</div>
    <TradeCatalogue ar={ar} selected={selected} onToggle={toggle}/>
    <section className="partner-content kiddo-wrap" id="partner-enquiry"><div><h2>{ar ? 'منتجات لها شخصية.' : 'A range with personality.'}</h2><p>{ar ? 'حبوب إفطار بشخصيات مميزة، وشوفان الحبة الكاملة وسريع التحضير، وبسكويت الشوفان بأربع نكهات. نرحب باستفسارات المتاجر وشركاء التوزيع من جميع أنحاء العالم.' : 'Character-led cereals, whole-grain and quick-cooking oats, and oat biscuits in four flavors. We welcome enquiries from retail and distribution partners around the world.'}</p><h3>{ar ? 'قائمة منتجاتك' : 'Your product shortlist'}</h3><p className="trade-save-note">{ar ? 'تُحفظ اختيارات المنتجات على هذا الجهاز عند توفر التخزين.' : 'Product selections are saved on this device when storage is available.'}</p>{products.length ? <ul className="trade-shortlist">{products.map(p => <li key={p.id}><span>{ar ? p.ar : p.name}</span><button type="button" onClick={() => toggle(p.id)} aria-label={`${ar ? 'إزالة' : 'Remove'} ${ar ? p.ar : p.name}`}><X size={18}/></button></li>)}</ul> : <p className="trade-empty">{ar ? 'لم تضف منتجات بعد. اختر منتجات أعلاه أو استفسر عن مجموعة كاملة باستخدام النموذج.' : 'No products selected yet. Choose products above, or enquire about a complete range using the form.'}</p>}<button className="trade-clear" type="button" disabled={!products.length} onClick={clear}>{ar ? 'إفراغ القائمة' : 'Clear shortlist'}</button><h3>{ar ? 'للمتاجر والموزعين' : 'For retailers and distributors'}</h3><p>{ar ? 'شاركنا شركتك وبلدك وقنوات البيع لديك. سيساعدك الفريق في مناقشة التشكيلة والتوفر في سوقك.' : 'Share your company, country and sales channels. The team can discuss the range and availability for your market.'}</p></div>
    <form className="partner-form" onSubmit={enquire}><h2>{ar ? 'عرفنا بك.' : 'Tell us about you.'}</h2><label>{ar ? 'نوع التعاون' : 'I’m interested in'}<select value={type} onChange={e => setType(e.target.value)}><option value="Distributor">{ar ? 'التوزيع' : 'Distribution'}</option><option value="Retailer">{ar ? 'البيع بالتجزئة' : 'Retail'}</option></select></label><label>{ar ? 'الشركة' : 'Company'}<input required maxLength={120} value={company} onChange={e => setCompany(e.target.value)} autoComplete="organization"/></label><label>{ar ? 'البلد أو السوق' : 'Country / market'}<input required maxLength={100} value={market} onChange={e => setMarket(e.target.value)} autoComplete="country-name"/></label><label>{ar ? 'المجموعة المطلوبة' : 'Product range'}<select value={range} onChange={e => setRange(e.target.value as TradeCategory)}>{tradeCategories.map(c => <option key={c.value} value={c.value}>{ar ? c.ar : c.value}</option>)}</select></label><p className="trade-form-selection">{products.length ? (ar ? `ستُدرج المنتجات المختارة (${products.length}) في رسالتك.` : `${products.length} selected ${products.length === 1 ? "product" : "products"} will be included in your email.`) : (ar ? 'يمكنك الاستفسار عن المجموعة دون اختيار منتجات محددة.' : 'You can enquire about the range without selecting individual products.')}</p><label>{ar ? 'أخبرنا المزيد' : 'Anything else?'}<textarea maxLength={2000} value={message} onChange={e => setMessage(e.target.value)} rows={4}/></label><button className="kiddo-action kiddo-action-red" type="submit">{ar ? 'اكتب رسالة بالبريد' : 'Compose enquiry email'}<ArrowUpRight size={18}/></button><p className="form-note">{ar ? 'يفتح تطبيق بريدك برسالة جاهزة تتضمن قائمتك. يمكنك مراجعتها وإرسالها بنفسك.' : 'Opens your email app with your details and shortlist. Review and send the message there.'}</p></form></section><StoreStrip/></EnhancedLayout>;
}
