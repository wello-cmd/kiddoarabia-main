import {useEffect,useRef,type ReactNode} from 'react';
import {ArrowLeft} from 'lucide-react';
export default function GamePlayer({open,ar,onClose,notice,children}:{open:boolean;ar:boolean;onClose:()=>void;notice:string;children:ReactNode}){
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(!open)return;const el=dialog.current;if(!el)return;const before=document.body.style.overflow;
  el.showModal();document.body.style.overflow='hidden';
  return()=>{el.close();document.body.style.overflow=before;};
 },[open]);
 if(!open)return null;
 return <dialog ref={dialog} className="kiddo-game-dialog" aria-label={ar?'لعبة كيدو':'Kiddo game player'} onCancel={event=>{event.preventDefault();onClose();}} dir={ar?'rtl':'ltr'}><div className="game-player-bar"><button type="button" autoFocus onClick={onClose}><ArrowLeft size={20} aria-hidden="true"/>{ar?'العودة إلى الألعاب':'Back to games'}</button><p role="status">{notice}</p></div><div className="game-player-content"><div className="game-surface">{children}</div></div></dialog>;
}
