import { describe, expect, it } from 'vitest';
import { canvasPoint, lineAlpha, decodeDrawing, saveDrawing, remember } from './coloringHelpers';

describe('coloring canvas boundaries', () => {
  it('maps a scaled, offset touch to intrinsic canvas coordinates and clamps captured pointers', () => {
    const rect = { left: 20, top: 40, width: 200, height: 300 };
    expect(canvasPoint(120, 190, rect, 800, 1200)).toEqual({ x: 400, y: 600 });
    expect(canvasPoint(-5, 999, rect, 800, 1200)).toEqual({ x: 0, y: 1200 });
  });
  it('removes white paper while retaining dark and antialiased outlines', () => {
    expect(lineAlpha(255, 255, 255)).toBe(0);
    expect(lineAlpha(250, 250, 250)).toBe(0);
    expect(lineAlpha(0, 0, 0)).toBe(255);
    expect(lineAlpha(128, 128, 128)).toBeGreaterThan(100);
  });
});
describe('saved drawings and undo', () => {
  it('recovers only valid drawing records and rejects malformed browser data', () => {
    const stroke = { color: '#e51b24', size: 12, eraser: false, points: [{x: 20, y: 30}] };
    expect(decodeDrawing(JSON.stringify([stroke]))).toEqual([stroke]);
    for (const bad of ['oops', '{}', '[{"color":"red"}]', '[{"color":"#e51b24","size":12,"eraser":false,"points":[{"x":null,"y":1}]}]']) expect(decodeDrawing(bad)).toEqual([]);
  });
  it('reports unavailable storage without interrupting drawing', () => {
    expect(saveDrawing({setItem() { throw new Error('quota'); }}, 'pops', [])).toBe(false);
    let saved = ''; expect(saveDrawing({setItem(_key, value) {saved = value;}}, 'pops', [])).toBe(true);
    expect(saved).toBe('[]');
  });
  it('keeps the latest 30 reversible edits including a reset', () => {
    let history: number[][] = [];
    for (let n = 0; n < 40; n++) history = remember(history, [n]);
    expect(history).toHaveLength(30); expect(history[0]).toEqual([10]);
    history = remember(history, [99]);
    expect(history.at(-1)).toEqual([99]);
  });
});
