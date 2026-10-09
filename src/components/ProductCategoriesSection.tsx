import ProductPack from '@/components/ProductPack';
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { cereals } from '@/data/cereals';
const favorites = ['Choco Pops','Fruit Rings','Honey Rings','Banana Pillow'].map(name => cereals.find(product => product.name === name)!);
const ProductCategoriesSection = () => {
 const {language}=useTranslation(); const ar=language==='ar';
 return <section id="products" className="product-stage" aria-labelledby="products-title"><div className="kiddo-wrap">
 <div className="section-heading"><h2 id="products-title">{ar?'اختار كيدو المفضل':'Choose your Kiddo.'}</h2><Link className="text-link" to="/products">{ar?'كل المنتجات':'All products'}<ArrowUpRight size={20}/></Link></div>
 <div className="product-shelf">{favorites.map((p,i)=><Link to="/cereals" key={p.name} className={`shelf-product shelf-product-${i}`}><ProductPack product={p} alt={p.name+' cereal packaging'}/><h3>{p.name}</h3><span>{ar?'اكتشف المنتج':'Explore cereal'}<ArrowUpRight size={16}/></span></Link>)}</div>
 <div className="oat-discovery">{[{name:'Oat jars',ar:'عبوات الشوفان',href:'/oat-jars',image:'products/jars-scene-v2'},{name:'Oat biscuits',ar:'بسكويت الشوفان',href:'/biscuits',image:'products/biscuits-scene-v3'}].map(c=><Link to={c.href} key={c.href}><img src={`/generated/${c.image}.webp`} alt={ar?c.ar:c.name} width="1536" height="1024" loading="lazy"/><div><h3>{ar?c.ar:c.name}</h3><ArrowUpRight size={24}/></div></Link>)}</div><div className="range-links"><span>{ar?'المزيد من كيدو':'More to discover'}</span><Link to="/oat-jars">{ar?'عبوات الشوفان':'Oat jars'}<ArrowUpRight size={19}/></Link><Link to="/biscuits">{ar?'بسكويت الشوفان':'Oat biscuits'}<ArrowUpRight size={19}/></Link></div>
 </div></section>;
}; export default ProductCategoriesSection;
