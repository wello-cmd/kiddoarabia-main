import { describe, it, expect } from 'vitest';
import { scaleIngredient } from './quantities';
describe('ingredient scaling', () => {
 it('scales both cup amounts and their metric equivalents', () => {
  expect(scaleIngredient('1/4 cup (60 ml) milk', 2)).toBe('1/2 cup (120 ml) milk');
  expect(scaleIngredient('1 cup (90 g) oats', 3)).toBe('3 cup (270 g) oats');
 });
 it('supports mixed and Unicode fractions', () => {
  expect(scaleIngredient('1 1/2 cups flour', 2)).toBe('3 cups flour');
  expect(scaleIngredient('½ tsp cinnamon', 3)).toBe('1 1/2 tsp cinnamon');
  expect(scaleIngredient('1½ cups flour', 2)).toBe('3 cups flour');
 });
 it('scales Arabic numerals and metric amounts', () => {
  expect(scaleIngredient('١/٤ كوب (٦٠ مل) حليب', 2, true)).toBe('١/٢ كوب (١٢٠ مل) حليب');
  expect(scaleIngredient('١٢٠ غ بسكويت', .5, true)).toBe('٦٠ غ بسكويت');
 });
 it('preserves unspecified quantities, timing, temperatures and unsupported ranges', () => {
  for (const original of ['Honey for serving', '350°F (175°C)', '20 minutes chilling', '2–3 apples', '1/0 cup milk']) expect(scaleIngredient(original, 2)).toBe(original);
 });
 it('preserves the original wording at base servings', () => {
  expect(scaleIngredient('١/٢ كوب حليب', 1, true)).toBe('١/٢ كوب حليب');
 });
});
