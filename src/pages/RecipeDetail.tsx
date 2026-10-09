import { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Heart, Minus, Plus, Printer, Check, X } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import EnhancedLayout from '@/components/EnhancedLayout';
import { recipes } from '@/data/recipes';
import { scaleIngredient } from '@/components/recipe-tools/quantities';
import { useSavedRecipes } from '@/components/recipe-tools/useSavedRecipes';
import '@/components/recipe-tools/family-kitchen.css';

type Recipe = typeof recipes[number];
function RecipeKitchen({ recipe, ar }: { recipe: Recipe; ar: boolean }) {
  const [servings, setServings] = useState(recipe.serves);
  const [checked, setChecked] = useState<number[]>([]);
  const [step, setStep] = useState<number | null>(null);
  const cookRef = useRef<HTMLElement>(null);
  const { saved, toggle, storageUnavailable } = useSavedRecipes();
  const title = ar ? recipe.titleAr : recipe.title;
  const ingredients = ar ? recipe.ingredientsAr : recipe.ingredients;
  const instructions = ar ? recipe.instructionsAr : recipe.instructions;
  const number = (value: number) => value.toLocaleString(ar ? 'ar-EG' : 'en');
  const isSaved = saved.includes(recipe.id);
  const savedOthers = recipes.filter(r => saved.includes(r.id) && r.id !== recipe.id);
  function startCooking() {
    setStep(0);
    requestAnimationFrame(() => { cookRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }); cookRef.current?.focus({ preventScroll: true }); });
  }
  function servingControl() {
    return <div className="kitchen-servings"><span>{ar ? 'الحصص' : 'Servings'}</span><div className="kitchen-stepper"><button type="button" disabled={servings <= 1} aria-label={ar ? 'تقليل الحصص' : 'Decrease servings'} onClick={() => setServings(s => s - 1)}><Minus size={18}/></button><output aria-live="polite" aria-label={ar ? 'عدد الحصص' : 'Number of servings'}>{number(servings)}</output><button type="button" disabled={servings >= 48} aria-label={ar ? 'زيادة الحصص' : 'Increase servings'} onClick={() => setServings(s => s + 1)}><Plus size={18}/></button></div></div>;
  }
  return <div className="family-kitchen" dir={ar ? 'rtl' : 'ltr'}>
    <section className="kitchen-stage">
      <div className="kitchen-copy">
        <Link className="kitchen-back" to="/recipes"><ArrowLeft size={16}/>{ar ? 'كل الوصفات' : 'All recipes'}</Link>
        <h1>{title}</h1>
        <p className="kitchen-introduction">{ar ? 'وقت لذيذ نقضيه معًا في المطبخ.' : 'A little mixing. A lovely moment together.'}</p>
        <div className="kitchen-time"><Clock size={22}/><span>{ar ? recipe.timeAr : recipe.time}</span></div>
        <div className="kitchen-copy-servings">{servingControl()}</div>
        <h2>{ar ? 'المكونات' : 'Ingredients'}</h2>
        <ul className="kitchen-ingredients">{ingredients.map((ingredient, index) => <li key={index}><label className={checked.includes(index) ? 'is-checked' : ''}><input type="checkbox" checked={checked.includes(index)} onChange={() => setChecked(items => items.includes(index) ? items.filter(i => i !== index) : [...items, index])}/><span>{scaleIngredient(ingredient, servings / recipe.serves, ar)}</span></label></li>)}</ul>
        <button className="kitchen-start" type="button" onClick={startCooking}>{ar ? 'ابدأ الطهي' : 'Start cooking'}<ArrowRight size={21}/></button>
        <button className="kitchen-print" type="button" onClick={() => window.print()}><Printer size={20}/>{ar ? 'اطبع الوصفة' : 'Print recipe'}</button>
        <p className="kitchen-print-servings">{ar ? `الحصص: ${number(servings)}` : `Servings: ${servings}`}</p>
      </div>
      <div className="kitchen-photo"><img src={recipe.image} alt={title} width="1000" height="1000" {...{ fetchpriority: "high" }}/><div className="kitchen-photo-tools"><button type="button" className="kitchen-save" aria-pressed={isSaved} onClick={() => toggle(recipe.id)}><Heart size={21} fill={isSaved ? 'currentColor' : 'none'}/>{isSaved ? (ar ? 'تم الحفظ' : 'Recipe saved') : (ar ? 'احفظ الوصفة' : 'Save recipe')}</button>{servingControl()}</div></div>
    </section>
    <p className="kitchen-storage-note" role="status">{storageUnavailable ? (ar ? 'الحفظ متاح لهذه الزيارة فقط؛ تخزين المتصفح غير متاح.' : 'Saved for this visit. Browser storage is unavailable.') : isSaved ? (ar ? 'محفوظة على هذا الجهاز.' : 'Saved on this device.') : ''}</p>
    <section className="kitchen-method kiddo-wrap" ref={cookRef} tabIndex={-1} aria-label={ar ? 'خطوات الطهي' : 'Cooking steps'}>
      <div className="kitchen-method-heading"><h2>{ar ? 'لنبدأ الطهي.' : 'Let’s get cooking.'}</h2>{step !== null && <button type="button" className="kitchen-end" onClick={() => setStep(null)}><X size={17}/>{ar ? 'إنهاء وضع الطهي' : 'End cook mode'}</button>}</div>
      {servings !== recipe.serves && <p className="kitchen-serving-note">{ar ? `تم تعديل المكونات إلى ${number(servings)} حصص. تظل أوقات الطهي والحرارة وحجم كل قطعة كما هي؛ إشارات عدد الأطباق في الخطوات تخص ${number(recipe.serves)} حصص.` : `Ingredients adjusted to ${servings} servings. Keep cooking times, temperatures and individual portion sizes as written; plate counts in the steps refer to the original ${recipe.serves} servings.`}</p>}
      {step !== null && <div className="kitchen-cook-mode"><div className="kitchen-cook-progress" aria-live="polite">{ar ? `الخطوة ${number(step + 1)} من ${number(instructions.length)}` : `Step ${step + 1} of ${instructions.length}`}<div><span style={{ width: `${(step + 1) / instructions.length * 100}%` }}/></div></div><p aria-live="polite">{instructions[step]}</p><div className="kitchen-cook-controls"><button type="button" disabled={step === 0} onClick={() => setStep(s => Math.max(0, s! - 1))}><ArrowLeft size={18}/>{ar ? 'السابق' : 'Previous'}</button><button type="button" onClick={() => step === instructions.length - 1 ? setStep(null) : setStep(s => s! + 1)}>{step === instructions.length - 1 ? (ar ? 'تم الطهي' : 'Finish cooking') : (ar ? 'التالي' : 'Next step')}{step === instructions.length - 1 ? <Check size={18}/> : <ArrowRight size={18}/>}</button></div></div>}
      <ol className={`kitchen-steps${step !== null ? ' kitchen-steps-inactive' : ''}`}>{instructions.map((instruction, index) => <li key={index}><span className="kitchen-step-number">{number(index + 1)}</span><p>{instruction}</p></li>)}</ol>
    </section>
    <section className="kitchen-saved kiddo-wrap"><h2>{ar ? 'وصفاتك المحفوظة' : 'Your saved recipes'}</h2>{savedOthers.length ? <div className="kitchen-saved-list">{savedOthers.slice(0, 3).map(r => <Link key={r.id} to={`/recipe/${r.id}`}><img src={r.image} alt="" width="112" height="80"/><span>{ar ? r.titleAr : r.title}<small>{ar ? r.timeAr : r.time}</small></span><ArrowRight size={20}/></Link>)}</div> : <p>{ar ? 'احفظ وصفاتك المفضلة لتجدها هنا.' : 'Save your favourites and find them here.'}</p>}<Link className="kitchen-saved-browse" to="/recipes#recipe-library">{ar ? 'اكتشف المزيد من الوصفات' : 'Explore more recipes'}<ArrowRight size={18}/></Link></section>
  </div>;
}
export default function RecipeDetail() {
  const { id } = useParams(); const { language } = useTranslation(); const ar = language === 'ar';
  const recipe = recipes.find(r => r.id === Number(id));
  if (!recipe) return <EnhancedLayout><section className="page-intro"><div className="kiddo-wrap"><h1>{ar ? 'الوصفة غير موجودة' : 'Recipe not found'}</h1><Link className="text-link" to="/recipes">{ar ? 'كل الوصفات' : 'Browse all recipes'}</Link></div></section></EnhancedLayout>;
  return <EnhancedLayout><RecipeKitchen key={recipe.id} recipe={recipe} ar={ar}/></EnhancedLayout>;
}
