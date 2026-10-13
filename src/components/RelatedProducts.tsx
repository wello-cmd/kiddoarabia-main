import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { productDetails, productName } from '@/data/product-details';
import '@/styles/kiddo-product-detail.css';
export default function RelatedProducts({ recipeId, range }: { recipeId?: number; range?: 'jars' | 'biscuits' | 'cereals' }) {
  const { language } = useTranslation(); const ar = language === 'ar';
  const products = productDetails.filter(p => range ? p.kind === range : p.recipeIds.includes(recipeId ?? -1)).slice(0, 4);
  if (!products.length) return null;
  return <section className="product-detail-more kiddo-wrap"><h2>{ar ? 'منتجات من مجموعة كيدو' : 'Explore the Kiddo products'}</h2><p>{ar ? 'راجع مكونات الوصفة ومعلومات العبوة لاختيار الصنف المناسب.' : 'Check the recipe ingredients and pack information to choose the matching variety.'}</p><div>{products.map(p => <Link key={p.path} to={p.path}>{productName(p, ar)}<ArrowUpRight size={18}/></Link>)}</div></section>;
}
