import ProductPack from '@/components/ProductPack';
import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { tradeCategories, tradeProducts, TradeCategory } from './catalogue';

type Props = { ar: boolean; selected: string[]; onToggle: (id: string) => void };
export default function TradeCatalogue({ ar, selected, onToggle }: Props) {
  const [category, setCategory] = useState<TradeCategory>('All products');
  const visible = tradeProducts.filter(p => category === 'All products' || p.category === category);
  return <section className="trade-catalogue kiddo-wrap" id="trade-catalogue" aria-labelledby="trade-catalogue-title">
    <div className="trade-section-heading"><div><h2 id="trade-catalogue-title">{ar ? 'اختر مجموعة متجرك.' : 'Choose your shelf lineup.'}</h2><p>{ar ? 'أضف المنتجات التي تهمك، ثم شاركنا تفاصيل شركتك وسوقك.' : 'Add the products you’re interested in, then tell us about your company and market.'}</p></div><a className="text-link" href="/downloads/kiddo-product-catalogue.pdf" download>{ar ? 'تحميل الكتالوج PDF' : 'Download catalogue PDF'}</a></div>
    <div className="trade-filters" aria-label={ar ? 'تصفية المنتجات' : 'Filter products'}>{tradeCategories.map(c => <button key={c.value} type="button" aria-pressed={category === c.value} onClick={() => setCategory(c.value)}>{ar ? c.ar : c.value}<span>{c.value === 'All products' ? tradeProducts.length : tradeProducts.filter(p => p.category === c.value).length}</span></button>)}</div>
    <div className="trade-table-heading" aria-hidden="true"><span>{ar ? 'المنتج' : 'Product'}</span><span>{ar ? 'المجموعة' : 'Range'}</span><span>{ar ? 'أضف للاستفسار' : 'Add to enquiry'}</span></div>
    <ul className="trade-product-list">{visible.map(p => { const active = selected.includes(p.id); return <li key={p.id}><div className="trade-product-name"><ProductPack product={p} alt=""/><h3>{ar ? p.ar : p.name}</h3></div><p className="trade-range">{ar ? tradeCategories.find(c => c.value === p.category)?.ar : p.category}</p><button type="button" className={`trade-add ${active ? 'is-selected' : ''}`} aria-pressed={active} aria-label={`${active ? (ar ? 'إزالة' : 'Remove') : (ar ? 'إضافة' : 'Add')} ${ar ? p.ar : p.name}`} onClick={() => onToggle(p.id)}>{active ? <Check size={20}/> : <Plus size={20}/>}<span>{active ? (ar ? 'تمت الإضافة' : 'Added') : (ar ? 'إضافة' : 'Add')}</span></button></li>; })}</ul>
    <p className="trade-art-note">{ar ? 'تواصل مع الفريق لتأكيد تفاصيل العبوات الحالية والتوفر في سوقك.' : 'Ask the team to confirm current pack details and availability in your market.'}</p>
  </section>;
}
