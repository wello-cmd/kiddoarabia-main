import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Users, Heart } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import EnhancedLayout from '@/components/EnhancedLayout';
import FullStageHero from '@/components/FullStageHero';
import { recipes } from '@/data/recipes';
import { useSavedRecipes } from '@/components/recipe-tools/useSavedRecipes';
import '@/components/recipe-tools/family-kitchen.css';

const Recipes = () => {
  const { language } = useTranslation(); const ar = language === 'ar';
  const [category, setCategory] = useState('All');
  const [savedOnly, setSavedOnly] = useState(false);
  const { saved } = useSavedRecipes();
  const recipeCategory = (id: number) => [1,4,7,9,12].includes(id) ? 'Breakfast' : [3].includes(id) ? 'Snacks' : id === 10 ? 'Drinks' : id === 2 ? 'Meals' : 'Desserts';
  const categories = [{name:'All',ar:'الكل'},{name:'Breakfast',ar:'الإفطار'},{name:'Snacks',ar:'وجبات خفيفة'},{name:'Desserts',ar:'الحلويات'},{name:'Drinks',ar:'المشروبات'},{name:'Meals',ar:'الوجبات'}];
  const arabicTitles: Record<number,string> = {1:'طبق الكورن فليكس الكلاسيكي',2:'دجاج مقرمش بالكورن فليكس',3:'ألواح الكورن فليكس',4:'شوفان منقوع طوال الليل مع التوت',5:'كوكيز الكورن فليكس',6:'آيس كريم بالكورن فليكس',7:'مافن الشوكولاتة بتشوكو بوبس',8:'أكواب تشيز كيك ببسكويت الشوفان والتفاح والقرفة',9:'بارفيه بحلقات الفواكه',10:'حليب الشوكولاتة بكوكوا سكوبس',11:'بودينغ الأرز بتشوكو رايس',12:'بان كيك بالموز والشوفان'};
  const visible = recipes.filter(r => (!savedOnly || saved.includes(r.id)) && (category === 'All' || recipeCategory(r.id) === category));
  return <EnhancedLayout>
    <FullStageHero image="/generated/recipe-stage-v6.webp" alt={ar?'بوبس ولوبي وكِرانشي بيلو مع بان كيك الشوفان وبارفيه الفواكه والشوفان بالتوت':'Pops, Loopy and Crunchy Pillow with oat pancakes, fruit parfait and berry oats'} title={ar?'اطبخوا مع\nفريق كيدو.':'Cook with\nthe crew.'} description={ar?'من البان كيك إلى البارفيه. اصنعوا شيئًا لذيذًا، مهمة صغيرة في كل مرة.':'From pancakes to parfaits. Make something delicious together, one little kitchen job at a time.'} actions={<a href="#recipe-library" className="kiddo-action kiddo-action-red">{ar?'اكتشف الوصفات':'Discover recipes'}<ArrowUpRight size={19}/></a>}/>
    <section className="recipe-library kiddo-wrap" id="recipe-library"><h2>{ar ? 'ماذا سنصنع اليوم؟' : 'What shall we make today?'}</h2><div className="catalog-filters" aria-label={ar ? 'تصفية الوصفات' : 'Filter recipes'}>{categories.map(c=><button key={c.name} type="button" className="catalog-filter" aria-pressed={category===c.name} onClick={()=>setCategory(c.name)}>{ar?c.ar:c.name}</button>)}<button type="button" className="catalog-filter kitchen-library-saved" aria-pressed={savedOnly} onClick={() => setSavedOnly(value => !value)}><Heart size={16}/>{ar ? 'المحفوظة' : 'Saved recipes'} ({saved.filter(id => recipes.some(r => r.id === id)).length.toLocaleString(ar ? 'ar-EG' : 'en')})</button></div>
      <div aria-live="polite">{visible.length === 0 && <div className="kitchen-library-empty"><h3>{ar ? 'لا توجد وصفات محفوظة هنا بعد' : 'No saved recipes here yet'}</h3><p>{ar ? 'افتح وصفة واضغط «احفظ الوصفة» لتجدها على هذا الجهاز. جرّب أيضًا اختيار فئة أخرى.' : 'Open a recipe and choose Save recipe to keep it on this device. You can also try another category.'}</p><button type="button" className="catalog-filter" onClick={() => { setSavedOnly(false); setCategory('All'); }}>{ar ? 'اكتشف كل الوصفات' : 'Explore all recipes'}</button></div>}<div className="recipe-grid">{visible.map(r=><Link className="recipe-item" key={r.id} to={`/recipe/${r.id}`}><img src={r.image} alt="" width="600" height="400" loading="lazy"/><div><h3>{ar?arabicTitles[r.id]:r.title}</h3><ArrowUpRight size={22}/></div><span><Clock size={15}/>{ar ? (r.timeAr ?? r.time.replace('mins','دقيقة')) : r.time}<Users size={15}/>{ar ? `${r.serves} أشخاص` : `Serves ${r.serves}`}</span></Link>)}</div></div>
    </section>
  </EnhancedLayout>;
};
export default Recipes;
