import type {ReactNode} from 'react';
import '@/styles/kiddo-full-stage.css';
export default function FullStageHero({image,alt,title,description,actions}:{image:string;alt:string;title:string;description:string;actions:ReactNode}){
 const mobile=image.replace('.webp','-mobile.webp');
 return <section className="kiddo-full-stage" aria-labelledby="full-stage-title"><picture className="full-stage-picture"><source media="(max-width:760px)" srcSet={mobile}/><img src={image} alt={alt} width="1672" height="941" {...{fetchpriority:'high'}}/></picture><div className="full-stage-copy"><h1 id="full-stage-title">{title}</h1><p>{description}</p><div className="full-stage-actions">{actions}</div></div></section>;
}
