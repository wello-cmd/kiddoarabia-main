export const challenges = [
 {mascot:'Pops',en:'Make your funniest face for Pops.',ar:'اصنع أطرف تعبير بوجهك مع بوبس.',label:'Funny face',labelAr:'وجه مضحك'},
 {mascot:'Loopy',en:'Clap a little rhythm for Loopy to copy.',ar:'صفّق بإيقاع قصير ليقلّدك لوبي.',label:'Clap along',labelAr:'صفّق معنا'},
 {mascot:'Buzz',en:'Tell Buzz one thing that made you smile today.',ar:'أخبر باز بشيء جعلك تبتسم اليوم.',label:'Happy story',labelAr:'حكاية سعيدة'},
 {mascot:'Berry',en:'Name three things that are red, just like Berry.',ar:'اذكر ثلاثة أشياء حمراء مثل بيري.',label:'Find the red',labelAr:'ابحث عن الأحمر'},
 {mascot:'Pops',en:'Invent a superhero name for Pops.',ar:'اختر اسم بطل خارق لبوبس.',label:'Hero name',labelAr:'اسم البطل'},
 {mascot:'Loopy',en:'Draw a circle in the air with your finger for Loopy.',ar:'ارسم دائرة في الهواء بإصبعك مع لوبي.',label:'Air artist',labelAr:'ارسم في الهواء'},
] as const;
export const challengeIndex = (random:number) => Math.max(0,Math.min(challenges.length-1,Math.floor(random*challenges.length)));
export function wheelTarget(current:number,index:number){
 const center=360-(index+.5)*(360/challenges.length);
 return current+1440+((center-current%360+360)%360);
}
export const solvedPuzzle=[1,2,3,4,5,6,7,8,0] as const;
export function slideTile(board:readonly number[],index:number):readonly number[]{
 const empty=board.indexOf(0);
 if(index<0||index>=9||Math.abs(Math.floor(empty/3)-Math.floor(index/3))+Math.abs(empty%3-index%3)!==1)return board;
 const next=[...board];[next[empty],next[index]]=[next[index],next[empty]];return next;
}
export const puzzleSolved=(board:readonly number[])=>board.length===9&&board.every((tile,index)=>tile===solvedPuzzle[index]);
export function scramblePuzzle(random:()=>number=Math.random):readonly number[]{
 let board:readonly number[]=[...solvedPuzzle];let previous=-1;
 for(let step=0;step<60;step++){
  const empty=board.indexOf(0);
  const choices=Array.from({length:9},(_,i)=>i).filter(i=>i!==previous&&slideTile(board,i)!==board);
  const next=choices[Math.min(choices.length-1,Math.max(0,Math.floor(random()*choices.length)))];
  board=slideTile(board,next);previous=empty;
 }
 // A legal final move guarantees an unfinished board if the walk returned home.
 if(puzzleSolved(board))board=slideTile(board,7);
 return board;
}
