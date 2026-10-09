import {Link, useParams} from 'react-router-dom';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import EnhancedLayout from '@/components/EnhancedLayout';
import {useTranslation} from '@/contexts/TranslationContext';
import {blogPosts, blogImageDimensions} from '@/data/blog';
import '@/styles/kiddo-editorial.css';

export default function BlogDetail() {
  const {id} = useParams();
  const {language} = useTranslation();
  const ar = language === 'ar';
  const post = blogPosts.find(p=>String(p.id)===id);
  if(!post) return <EnhancedLayout><section className="editorial-intro kiddo-wrap"><h1>{ar?'لم نجد هذه القصة.':'We couldn’t find that story.'}</h1><p>{ar?'تصفح القصص واختر فكرة جديدة لتجربتها.':'Browse the stories and choose a new idea to try.'}</p><Link to="/blog" className="kiddo-action kiddo-action-red">{ar?'تصفح القصص':'Browse stories'}</Link></section></EnhancedLayout>;
  const imageDimensions = blogImageDimensions[post.id];
  const firstParagraph = ar ? post.sections[0]?.paragraphsAr[0] : post.sections[0]?.paragraphs[0];
  const excerpt = ar ? post.excerptAr : post.excerpt;
  const imageKind = post.image.startsWith('/brand/') ? (ar ? 'صورة العبوات المقدمة' : 'Supplied packaging artwork') : post.image.startsWith('/blog-source/') ? (ar ? 'صورة كيدو الأصلية' : 'Original Kiddo photograph') : (ar ? 'رسم توضيحي' : 'Illustration');
  const related = blogPosts.filter(p=>p.id!==post.id).sort((a,b)=>Number(b.category===post.category)-Number(a.category===post.category)).slice(0,3);
  return <EnhancedLayout><article className="kiddo-editorial editorial-article" dir={ar?'rtl':'ltr'}>
    <header className="editorial-article-head kiddo-wrap"><Link className="editorial-back" to="/blog"><ArrowLeft size={18}/>{ar?'العودة إلى القصص':'Back to stories'}</Link><h1>{ar?post.titleAr:post.title}</h1>{excerpt !== firstParagraph && <p>{excerpt}</p>}<p className="editorial-article-topic">{ar?post.categoryAr:post.category}</p></header>
    <figure className="editorial-article-image kiddo-wrap"><img src={post.image} alt={ar?post.imageAltAr:post.imageAlt} width={imageDimensions.width} height={imageDimensions.height} decoding="async"/><figcaption>{imageKind} · {ar?post.imageAltAr:post.imageAlt}</figcaption></figure>
    <div className="editorial-reading">{post.sections.map((s,i)=><section key={i}><h2>{ar?s.headingAr:s.heading}</h2>{(ar?s.paragraphsAr:s.paragraphs).map((p,j)=><p key={j}>{p}</p>)}</section>)}
      {post.sources&&<section className="editorial-sources"><h2>{post.image.startsWith('/blog-source/') ? (ar?'القصة الأصلية':'Original story') : (ar?'مصدر المعلومات':'Information source')}</h2>{post.sources.map(s=><a href={s.url} key={s.url} target="_blank" rel="noopener noreferrer">{ar?s.labelAr:s.label}<ArrowUpRight size={17}/></a>)}</section>}
      <Link className="kiddo-action kiddo-action-red" to={post.relatedLink.to}>{ar?post.relatedLink.labelAr:post.relatedLink.label}<ArrowUpRight size={19}/></Link>
    </div>
    <section className="editorial-related kiddo-wrap"><h2>{ar?'فكرة أخرى ليوم آخر':'Another idea for another day'}</h2><div>{related.map(p=><Link key={p.id} to={`/blog/${p.id}`}><span>{ar?p.titleAr:p.title}</span><ArrowUpRight size={22}/></Link>)}</div></section>
  </article></EnhancedLayout>;
}
