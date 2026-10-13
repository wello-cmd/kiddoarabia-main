import { readFile, access } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
const xml = await readFile('public/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const errors=[]; const canonicals=new Set();
for(const url of urls){
 const path=new URL(url).pathname;
 const html=await readFile(`dist${path === '/' ? '' : path}/index.html`,'utf8');
 const d=new JSDOM(html).window.document;
 const canonical=[...d.querySelectorAll('link[rel="canonical"]')];
 if(canonical.length!==1||canonical[0].href!==url) errors.push(`${path}: canonical`);
 if(canonicals.has(url)) errors.push(`${path}: duplicate URL`); canonicals.add(url);
 if(d.querySelectorAll('h1').length!==1) errors.push(`${path}: heading`);
 const ar=path==='/ar'||path.startsWith('/ar/');
 if(d.documentElement.lang!==(ar?'ar':'en')||d.documentElement.dir!==(ar?'rtl':'ltr')) errors.push(`${path}: locale`);
 if(d.querySelector('meta[name="robots"]')?.content.includes('noindex')) errors.push(`${path}: noindex`);
 if(d.querySelectorAll('link[rel="alternate"][hreflang]').length!==3) errors.push(`${path}: alternates`);
 const graph=JSON.parse(d.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
 if(!graph.some(x=>x.url===url&&x['@type']==='WebPage')&&!graph.some(x=>x.url===url&&x['@type']==='AboutPage')) errors.push(`${path}: webpage schema`);
 if(/\/(cereals|oat-jars|biscuits)\//.test(path)&&!graph.some(x=>x['@type']==='Product'&&x.url===url)) errors.push(`${path}: product schema`);
 if(!d.querySelector('meta[name="description"]')?.content) errors.push(`${path}: description`);
 for(const a of d.querySelectorAll('a[href]')) {
  const href=a.getAttribute('href'); if(!href.startsWith('/')||href.startsWith('//')) continue;
  const p=new URL(href,url).pathname;
  try {await access(p.includes('.')?'dist'+p:`dist${p==='/'?'':p}/index.html`);} catch {errors.push(`${path}: broken internal link ${p}`);}
 }
 for(const img of d.querySelectorAll('img[src]')) {
  const src=img.getAttribute('src'); if(src.startsWith('/')) try {await access('dist'+src);}catch{errors.push(`${path}: missing image ${src}`);}
 }
}
console.log(JSON.stringify({publicPages:urls.length,errors:[...new Set(errors)]},null,2));
if(errors.length) process.exit(1);
