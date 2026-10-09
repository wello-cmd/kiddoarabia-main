import ProductPack from '@/components/ProductPack';
import PlayInvite from "@/components/PlayInvite";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import { useTranslation } from '@/contexts/TranslationContext';
import { cereals } from '@/data/cereals';
import { characterStories } from '@/data/character-stories';
import '@/styles/kiddo-living.css';

const crew = cereals.filter(p => p.character);
const mascot = (name: string) => `/generated/mascots/${name.toLowerCase()}.webp`;
export default function Characters() {
  const { language } = useTranslation(); const ar = language === 'ar';
  const [selected, setSelected] = useState('Pops');
  const product = crew.find(p => p.character === selected)!;
  const stage = useRef<HTMLElement>(null);
  const feature = useRef<HTMLDivElement>(null);
  const story = characterStories[selected];
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.living-crew-art', {y:22, rotation:-1, opacity:.75, duration:1.1, ease:'expo.out', clearProps:'all'});
    }, stage);
    return () => media.revert();
  }, []);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.featured-mascot', {y:16, scale:.97, opacity:.8, duration:.65, ease:'expo.out', clearProps:'all'});
    }, feature);
    return () => media.revert();
  }, [selected]);
  return <EnhancedLayout>
    <section ref={stage} className="kiddo-page-hero kiddo-crew-hero living-crew-hero"><div className="kiddo-wrap kiddo-page-hero-inner">
      <div className="kiddo-page-hero-copy"><h1>{ar ? 'تعرف على فريق كيدو.' : 'Meet the Kiddo crew.'}</h1><p>{ar ? 'اختار شخصيتك. اكتشف حبوب إفطارك.' : 'Pick your character. Find your cereal.'}</p><a className="kiddo-action kiddo-action-white" href="#choose-crew">{ar ? 'اختار شخصيتك' : 'Choose your character'}<ArrowUpRight size={19} /></a></div>
      <img className="kiddo-page-hero-art living-crew-art" src="/generated/crew-hero-v5.webp" alt={ar?"كينغ وبوبس ولوبي وباز":"King, Pops, Loopy and Buzz"} width="1536" height="1024" {...{ fetchpriority: "high" }}/>
    </div></section>
    <section id="choose-crew" className="crew-selector kiddo-wrap" aria-labelledby="crew-selector-title">
      <h2 id="crew-selector-title">{ar ? 'كل الشخصيات هنا.' : 'The whole crew is here.'}</h2>
      <div className="crew-choices" aria-label={ar ? 'اختار شخصية' : 'Choose a character'}>{crew.map(p => <button type="button" key={p.character} className="crew-choice" aria-pressed={selected === p.character} aria-controls="character-feature" onClick={() => setSelected(p.character!)}><img src={mascot(p.character!)} alt="" width="1254" height="1254" loading="lazy" /><span>{p.character}</span></button>)}</div>
      <div ref={feature} id="character-feature" className="character-feature living-character-feature" aria-live="polite" aria-atomic="true">
        <img className="featured-mascot" src={mascot(selected)} alt={`${selected}, Kiddo character`} width="1254" height="1254" />
        <div><h3 lang="en" dir="ltr">{selected}</h3><h4>{ar ? story.headingAr : story.heading}</h4><p className="character-story">{ar ? story.storyAr : story.story}</p><p>{ar ? product.ar : product.name}</p><div className="character-story-actions"><Link to={`/cereals#${product.name.toLowerCase().replace(/ /g, '-')}`} className="kiddo-action kiddo-action-red">{ar ? 'اكتشف حبوب الإفطار' : 'See the cereal'}<ArrowUpRight size={19}/></Link><Link to="/play#games" className="kiddo-action kiddo-action-outline">{ar ? 'العب مع الفريق' : 'Play with the crew'}<ArrowUpRight size={19}/></Link></div><Link to={`/partners?product=${encodeURIComponent(product.name)}#partner-enquiry`} className="text-link character-enquire">{ar?"استفسر عن المنتج":"Enquire about this cereal"}<ArrowUpRight size={18}/></Link></div>
        <ProductPack className="featured-package" product={product} alt={`${product.name} cereal packaging`} />
      </div>
    </section>
    <PlayInvite />
  </EnhancedLayout>;
}
