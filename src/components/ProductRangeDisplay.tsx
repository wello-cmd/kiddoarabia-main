import ProductPack from '@/components/ProductPack';
import { cereals } from '@/data/cereals';
import { oatJars, oatBiscuits } from '@/data/oats';
import '@/styles/product-range-display.css';

/** A complete lineup using the current catalog artwork, never redrawn package labels. */
export default function ProductRangeDisplay({ ar, studio = false }: { ar: boolean; studio?: boolean }) {
  return <div className={`product-range-display${studio ? ' product-range-studio' : ''}`} aria-label={ar ? 'مجموعة كيدو كاملة: ١٧ منتجًا' : 'The complete Kiddo range: 17 products'}>
    <div className="range-cereals">{cereals.map(product => <ProductPack key={product.name} product={product} alt={ar ? product.ar : product.name} />)}</div>
    <div className="range-oats">{[...oatJars, ...oatBiscuits].map(product => <img key={product.name} src={product.image.replace('.webp','-320.webp')} srcSet={`${product.image.replace('.webp','-320.webp')} 320w, ${product.image.replace('.webp','-640.webp')} 640w`} sizes="(max-width:760px) 30vw, 160px" alt={ar ? product.ar : product.name} width="1024" height="1024" loading="lazy" decoding="async" />)}</div>
  </div>;
}
