export type Point = {x: number; y: number};
export type Stroke = {color: string; size: number; eraser: boolean; points: Point[]};
export const DRAWING_WIDTH = 800;
export const DRAWING_HEIGHT = 1133;
export const drawingKey = (id: string) => `kiddo-coloring-v1-${id}`;
export function canvasPoint(x: number, y: number, rect: {left:number; top:number; width:number; height:number}, width:number, height:number): Point {
  return {x: Math.max(0, Math.min(width, (x-rect.left)*width/Math.max(1,rect.width))), y: Math.max(0, Math.min(height, (y-rect.top)*height/Math.max(1,rect.height)))};
}
export function lineAlpha(r:number, g:number, b:number) {
  const shade = Math.min(r,g,b);
  return shade >= 245 ? 0 : 255-shade;
}
export function decodeDrawing(raw:string|null): Stroke[] {
  try {
    const value: unknown = JSON.parse(raw || '[]');
    if (!Array.isArray(value) || value.length > 600) return [];
    if (!value.every(s => s && /^#[0-9a-f]{6}$/i.test(s.color) && Number.isFinite(s.size) && s.size >= 2 && s.size <= 80 && typeof s.eraser === 'boolean' && Array.isArray(s.points) && s.points.length > 0 && s.points.length <= 4096 && s.points.every((p:Point) => p && Number.isFinite(p.x) && Number.isFinite(p.y) && p.x >= 0 && p.x <= DRAWING_WIDTH && p.y >= 0 && p.y <= DRAWING_HEIGHT))) return [];
    return value;
  } catch { return []; }
}
export function saveDrawing(storage: Pick<Storage,'setItem'>, id:string, strokes:Stroke[]) {
  try { storage.setItem(drawingKey(id), JSON.stringify(strokes)); return true; } catch { return false; }
}
export function remember<T>(history:T[][], previous:T[]): T[][] { return [...history.slice(-29), previous]; }
