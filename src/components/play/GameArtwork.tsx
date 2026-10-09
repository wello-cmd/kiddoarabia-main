import './wheel-puzzle.css';
export default function GameArtwork({kind}:{kind:'wheel'|'puzzle'}){return <img src={`/generated/games/${kind}-v1.webp`} alt="" width="1254" height="1254" loading="lazy"/>;}
