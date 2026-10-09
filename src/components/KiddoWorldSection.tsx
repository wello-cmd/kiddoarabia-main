import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/contexts/TranslationContext';

export default function KiddoWorldSection() {
  const { language } = useTranslation(); const ar = language === 'ar';
  return <section className="club-banner"><div className="kiddo-wrap club-banner-inner">
    <div><h2>{ar ? 'تعرف على فريق إفطارك.' : 'Meet your breakfast crew.'}</h2><p>{ar ? 'بوبس وكينغ ولوبي وبقية الفريق. لكل شخصية كيدو المفضل.' : 'Pops, King, Loopy and the whole crew. Find the character behind your favourite cereal.'}</p><Link className="kiddo-action kiddo-action-white" to="/characters">{ar ? 'تعرف على الشخصيات' : 'Meet the crew'}<ArrowUpRight size={20} /></Link></div>
    <div className="club-ensemble" aria-hidden="true">{['king','pops','loopy'].map(name => <img key={name} src={`/generated/mascots/${name}.webp`} alt="" width="1024" height="1024" loading="lazy" />)}</div>
  </div></section>;
}
