import {useCallback, useState} from 'react';
export const badgeKey='kiddo-earned-badges-v1';
export const badgeCatalog=[
 {id:'memory',en:'Memory maker',ar:'بطل الذاكرة',hint:'Find all six matching pairs.',hintAr:'اعثر على الأزواج الستة.'},
 {id:'quiz',en:'Crew explorer',ar:'مستكشف الفريق',hint:'Finish all eleven character questions.',hintAr:'أكمل الأسئلة الأحد عشر.'},
 {id:'catch',en:'Crunch catcher',ar:'صائد الحلقات',hint:'Catch a ring and finish the 20-second round.',hintAr:'التقط حلقة وأكمل الجولة.'},
 {id:'sequence',en:'Sequence star',ar:'نجم الترتيب',hint:'Complete all five memory levels.',hintAr:'أكمل مستويات الترتيب الخمسة.'},
 {id:'tic',en:'Team player',ar:'لاعب الفريق',hint:'Finish a tic-tac-toe round with a friend.',hintAr:'أكمل جولة إكس أو مع صديق.'},
 {id:'odd',en:'Sharp eyes',ar:'عين حادة',hint:'Spot at least four visitors in five rounds.',hintAr:'اعثر على أربعة مختلفين في خمس جولات.'},
 {id:'wheel',en:'Fun star',ar:'نجم المرح',hint:'Try three wheel challenges and mark each done.',hintAr:'جرّب ثلاثة تحديات للعجلة واضغط على الانتهاء.'},
 {id:'puzzle',en:'Puzzle hero',ar:'بطل الأحجية',hint:'Slide all eight tiles back into place.',hintAr:'أعد قطع الأحجية الثماني إلى أماكنها.'},
 {id:'coloring',en:'Color artist',ar:'فنان الألوان',hint:'Paint a picture and mark it finished.',hintAr:'لوّن رسمة واضغط على الانتهاء.'},
] as const;
export type BadgeId=typeof badgeCatalog[number]['id'];
export function readBadges(storage:Pick<Storage,'getItem'>):BadgeId[]{
 try{const value:unknown=JSON.parse(storage.getItem(badgeKey)||'[]');if(!Array.isArray(value))return [];return [...new Set(value.filter((id):id is BadgeId=>badgeCatalog.some(b=>b.id===id)))];}catch{return [];}
}
export function saveBadges(storage:Pick<Storage,'setItem'>,ids:BadgeId[]):boolean{
 try{storage.setItem(badgeKey,JSON.stringify(ids));return true;}catch{return false;}
}
export function useGameBadges(){
 const [earned,setEarned]=useState<BadgeId[]>(()=>{try{return readBadges(window.localStorage);}catch{return [];}});
 const [latest,setLatest]=useState<BadgeId|null>(null);
 const [saved,setSaved]=useState(true);
 const award=useCallback((id:BadgeId)=>{setEarned(previous=>{if(previous.includes(id))return previous;const next=[...previous,id];try{setSaved(saveBadges(window.localStorage,next));}catch{setSaved(false);}setLatest(id);return next;});},[]);
 return {earned,latest,saved,award};
}
