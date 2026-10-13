import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import ProductPack from '@/components/ProductPack';
import StoreStrip from '@/components/StoreStrip';
import { useTranslation } from '@/contexts/TranslationContext';
import { getProduct, productDetails, productName } from '@/data/product-details';
import { productRetailers } from '@/data/product-retailers';
import { recipes } from '@/data/recipes';
import '@/styles/kiddo-product-detail.css';

export default function ProductDetail() {
  const { pathname } = useLocation();
  const { language } = useTranslation(); const ar = language === 'ar';
  const product = getProduct(pathname);
  if (!product) return <EnhancedLayout><section className="page-intro kiddo-wrap"><h1>{ar ? 'المنتج غير موجود' : 'Product not found'}</h1><Link to="/products">{ar ? 'كل المنتجات' : 'Browse products'}</Link></section></EnhancedLayout>;
  const category = product.kind === 'cereals' ? '/cereals' : product.kind === 'jars' ? '/oat-jars' : '/biscuits';
  const categoryName = product.kind === 'cereals' ? (ar ? 'حبوب الإفطار' : 'Breakfast cereals') : product.kind === 'jars' ? (ar ? 'عبوات الشوفان' : 'Oat jars') : (ar ? 'بسكويت الشوفان' : 'Oat biscuits');
  const ideas = recipes.filter(r => product.recipeIds.includes(r.id));
  const siblings = productDetails.filter(p => p.kind === product.kind && p.path !== product.path).slice(0, 4);
  return <EnhancedLayout>
    <section className="product-detail-hero kiddo-wrap">
      <div className="product-detail-copy">
        <nav aria-label={ar ? 'مسار الصفحة' : 'Breadcrumb'}><Link to="/products">{ar ? 'المنتجات' : 'Products'}</Link><span aria-hidden="true"> / </span><Link to={category}>{categoryName}</Link></nav>
        <h1>{productName(product, ar)}</h1><p>{ar ? product.descriptionAr : product.description}</p>
        <div className="product-detail-actions"><a className="kiddo-action kiddo-action-red" href="#where-to-buy">{ar ? 'أين تجد كيدو' : 'Where to find Kiddo'}<ArrowUpRight size={18}/></a><Link className="kiddo-action kiddo-action-outline" to={`/partners?product=${encodeURIComponent(productName(product, false))}#partner-enquiry`}>{ar ? 'استفسر عن المنتج' : 'Enquire about this product'}<ArrowUpRight size={18}/></Link></div>
      </div>
      <figure className="product-detail-pack">{product.kind === 'cereals' ? <ProductPack product={product} alt={productName(product, ar) + (ar ? ' — صورة العبوة' : ' — supplied pack artwork')} eager/> : <img src={product.image.replace('.webp', '-640.webp')} alt={productName(product, ar) + (ar ? ' — رسم توضيحي للعبوة' : ' — packaging illustration')} width="640" height="640"/>}<figcaption>{product.illustration ? (ar ? 'رسم توضيحي للعبوة' : 'Packaging illustration') : (ar ? 'صورة العبوة المقدمة من كيدو' : 'Supplied Kiddo packaging artwork')}</figcaption></figure>
    </section>
    <section className="product-detail-information kiddo-wrap"><div><h2>{ar ? 'من العبوة إلى مائدتك' : 'From the pack to your table'}</h2><p>{product.kind === 'cereals' ? (ar ? 'قدّم حبوب الإفطار مع الحليب أو الزبادي حسب ذوقك. أضف الفاكهة المجهزة عند التقديم، واختر الحصة المناسبة باتباع معلومات العبوة.' : 'Serve cereal with milk or yoghurt to suit your taste. Add prepared fruit at serving time and use the pack information to choose your portion.') : product.kind === 'jars' ? (ar ? 'راجع تعليمات العبوة قبل التحضير. تصفح وصفات الشوفان أدناه للاختيار بين إفطار محضر مسبقًا وأفكار طهي أخرى.' : 'Read the pack preparation instructions before cooking. Browse the oat recipes below for a make-ahead breakfast and other kitchen ideas.') : (ar ? 'جرّب البسكويت بجانب مشروبك المفضل أو كإضافة لطبقات الزبادي. وصفة حلوى التفاح أدناه تستخدم بسكويت التفاح والقرفة تحديدًا.' : 'Try oat biscuits alongside your favourite drink or as a topping for layered yoghurt. The apple dessert below specifically uses Apple Cinnamon oat biscuits.')}</p></div><div><h2>{ar ? 'معلومات المكونات والحساسية' : 'Ingredients & allergen information'}</h2><p>{ar ? 'راجع قائمة المكونات، ومسببات الحساسية، والقيم الغذائية، والوزن وتعليمات التخزين على العبوة التي تشتريها. للاستفسار عن بيانات منتج أو سوق معين، تواصل مع فريق كيدو.' : 'Check the ingredients, allergens, nutrition, net weight and storage instructions on the pack you purchase. For product information for a particular market, contact the Kiddo team.'}</p><Link className="text-link" to={`/partners?product=${encodeURIComponent(product.name)}#partner-enquiry`}>{ar ? 'اسأل فريق كيدو' : 'Ask the Kiddo team'}<ArrowUpRight size={17}/></Link></div></section>
    <section className="product-detail-recipes kiddo-wrap"><h2>{ar ? 'أفكار من مطبخ كيدو' : 'Ideas from the Kiddo kitchen'}</h2><p>{ar ? 'راجع مكونات كل وصفة لاختيار المنتج المناسب.' : 'Check each recipe’s ingredients to choose the matching product.'}</p><div className="product-detail-recipe-grid">{ideas.map(r => <Link to={`/recipe/${r.id}`} key={r.id}><img src={r.image} alt={ar ? r.titleAr : r.title} width="600" height="400" loading="lazy"/><h3>{ar ? r.titleAr : r.title}</h3><span>{ar ? r.timeAr : r.time}<ArrowUpRight size={18}/></span></Link>)}</div></section>
    <section id="where-to-buy" className="product-detail-more kiddo-wrap"><h2>{ar ? 'تصفح المنتج لدى المتاجر' : 'Find this product at retailers'}</h2><p>{ar ? 'تحقق من السعر وتوفر المنتج وخيارات التوصيل مباشرة لدى المتجر. تختلف التشكيلة حسب الفرع والمنطقة.' : 'Check current prices, stock and delivery options directly with the retailer. The range varies by branch and delivery area.'}</p>{productRetailers[product.path]?.map(retailer => <a key={retailer.url} className="kiddo-action kiddo-action-outline" href={retailer.url} target="_blank" rel="noopener noreferrer">{ar ? `عرض المنتج لدى ${retailer.name}` : `View at ${retailer.name}`}<ArrowUpRight size={18}/></a>)}{!productRetailers[product.path] && <Link className="text-link" to={`/partners?product=${encodeURIComponent(product.name)}#partner-enquiry`}>{ar ? 'اسأل عن توفر المنتج في منطقتك' : 'Ask about availability in your area'}<ArrowUpRight size={18}/></Link>}</section><StoreStrip/>
    <section className="product-detail-more kiddo-wrap"><h2>{ar ? 'اكتشف المزيد من المجموعة' : 'More from this collection'}</h2><div>{siblings.map(p => <Link key={p.path} to={p.path}>{productName(p, ar)}<ArrowUpRight size={18}/></Link>)}</div><Link className="page-back" to={category}><ArrowLeft size={17}/>{ar ? 'العودة للمجموعة' : 'Back to the collection'}</Link></section>
  </EnhancedLayout>;
}
