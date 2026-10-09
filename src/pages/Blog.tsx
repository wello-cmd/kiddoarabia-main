import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import {useTranslation} from '@/contexts/TranslationContext';
import {blogPosts, blogCategories, blogImageDimensions} from '@/data/blog';
import '@/styles/kiddo-editorial.css';

const categoryArabic = {'Activities':'أنشطة', 'Kitchen':'المطبخ', 'Kiddo world':'عالم كيدو', 'Oats':'الشوفان'};
export default function Blog() {
  const {language} = useTranslation();
  const ar = language === 'ar';
  const [category, setCategory] = useState<string>('All');
  const featured = blogPosts[0];
  const visible = blogPosts.filter(post => post.id !== featured.id && (category === 'All' || post.category === category));
  const includesFeaturedCategory = category === 'All' || category === featured.category;
  return <EnhancedLayout><div className="kiddo-editorial" dir={ar?'rtl':'ltr'}>
    <section className="editorial-intro kiddo-wrap"><h1>{ar?'أفكار صغيرة.\nلحظات معًا.':'Family ideas.\nTime together.'}</h1><p>{ar?'أفكار للوالدين: أنشطة بسيطة، وتجارب في المطبخ، ودليل إلى عالم كيدو. اختاروا قصة واجعلوها جزءًا من يومكم.':'Ideas for parents: simple activities, kitchen projects and a guide to the Kiddo world. Pick a story and make it part of your day.'}</p></section>
    <section className="editorial-feature kiddo-wrap" aria-label={ar?'القصة المختارة':'Featured story'}><Link to={`/blog/${featured.id}`} tabIndex={-1} aria-hidden="true"><img src={featured.image} alt="" width={blogImageDimensions[featured.id].width} height={blogImageDimensions[featured.id].height} decoding="async"/></Link><div><h2><Link to={`/blog/${featured.id}`}>{ar?featured.titleAr:featured.title}</Link></h2><p>{ar?featured.excerptAr:featured.excerpt}</p><Link className="kiddo-action kiddo-action-red" to={`/blog/${featured.id}`}>{ar?'اقرأ القصة':'Read the story'}<ArrowUpRight size={19}/></Link></div></section>
    <section className="editorial-library kiddo-wrap" aria-labelledby="story-library"><h2 id="story-library">{ar?'ما الذي تريدون تجربته؟':'What will you try next?'}</h2><div className="editorial-filters" aria-label={ar?'تصفية القصص حسب الموضوع':'Filter stories by topic'}><button type="button" aria-pressed={category==='All'} onClick={()=>setCategory('All')}>{ar?'كل القصص':'All stories'}</button>{blogCategories.map(c=><button type="button" key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{ar?categoryArabic[c]:c}</button>)}</div><p className="editorial-result" role="status">{ar?`${visible.length} ${includesFeaturedCategory?'قصة أخرى':'قصة'} للاستكشاف`:`${visible.length} ${includesFeaturedCategory?'more stories':'stories'} to explore`}</p><div className="editorial-grid">{visible.map(post=><article key={post.id} className="editorial-story"><Link to={`/blog/${post.id}`} tabIndex={-1} aria-hidden="true"><img src={post.image} alt="" loading="lazy" width={blogImageDimensions[post.id].width} height={blogImageDimensions[post.id].height} decoding="async"/></Link><h3><Link to={`/blog/${post.id}`}>{ar?post.titleAr:post.title}<ArrowUpRight size={20} aria-hidden="true"/></Link></h3><p className="editorial-topic">{ar?post.categoryAr:post.category}</p><p>{ar?post.excerptAr:post.excerpt}</p></article>)}</div></section>
    <section className="editorial-play"><div className="kiddo-wrap"><div><h2>{ar?'حان وقت اللعب.':'Time to play.'}</h2><p>{ar?'خذوا استراحة مع شخصيات كيدو واكتشفوا أفكارًا جديدة للمرح معًا.':'Take a break with the Kiddo crew and discover more ways to have fun together.'}</p></div><Link to="/play" className="kiddo-action kiddo-action-white">{ar?'اكتشف منطقة اللعب':'Explore the play zone'}<ArrowUpRight size={19}/></Link></div></section>
  </div></EnhancedLayout>;
}
