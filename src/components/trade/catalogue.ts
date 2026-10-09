import { cereals, type PackAsset } from '@/data/cereals';
import { oatJars, oatBiscuits } from '@/data/oats';

export type TradeCategory = 'All products' | 'Cereals' | 'Oat jars' | 'Oat biscuits';
export type TradeProduct = PackAsset & { id: string; name: string; ar: string; image: string; category: TradeCategory; aliases: string[] };
const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const tradeProducts: TradeProduct[] = [
  ...cereals.map(p => ({ ...p, id: `cereal-${slug(p.name)}`, category: 'Cereals' as const, aliases: [p.name, `Kiddo ${p.name}`, p.ar] })),
  ...oatJars.map(p => ({ ...p, id: `oats-${slug(p.name)}`, category: 'Oat jars' as const, aliases: [p.name, `Kiddo ${p.name}`, p.ar] })),
  ...oatBiscuits.map(p => ({ ...p, id: `biscuit-${slug(p.name)}`, name: p.name === 'Plain Oats' ? 'Plain Oat Biscuits' : `${p.name} Oat Biscuits`, ar: `بسكويت الشوفان - ${p.ar}`, category: 'Oat biscuits' as const, aliases: [p.name, `Kiddo ${p.name}`, p.name === 'Plain Oats' ? 'Plain Oat Biscuits' : `${p.name} Oat Biscuits`, p.ar] })),
];
export const tradeCategories: { value: TradeCategory; ar: string }[] = [
  { value: 'All products', ar: 'كل المنتجات' }, { value: 'Cereals', ar: 'حبوب الإفطار' },
  { value: 'Oat jars', ar: 'عبوات الشوفان' }, { value: 'Oat biscuits', ar: 'بسكويت الشوفان' },
];
const normalize = (value: string) => value.trim().toLowerCase();
// Keep old shared enquiry links and saved selections working after the flavour correction.
const legacyPlainProductValues = new Set(['biscuit-honey', 'honey', 'kiddo honey', 'honey oat biscuits', 'kiddo honey oat biscuits', 'العسل', 'بسكويت الشوفان - العسل']);
const canonicalProductValue = (value: string) => legacyPlainProductValues.has(normalize(value)) ? 'biscuit-plain-oats' : value;
export function productFromQuery(value: string | null) {
  if (!value) return undefined;
  const canonical = canonicalProductValue(value);
  return tradeProducts.find(p => p.id === canonical || p.aliases.some(a => normalize(a) === normalize(canonical)));
}
export const shortlistKey = 'kiddo-trade-shortlist-v1';
export function readShortlist(): string[] {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(shortlistKey) || '[]');
    if (!Array.isArray(value)) return [];
    const migrated = value.filter((id): id is string => typeof id === 'string').map(canonicalProductValue);
    const ids = tradeProducts.filter(p => migrated.includes(p.id)).map(p => p.id);
    if (JSON.stringify(value) !== JSON.stringify(ids)) saveShortlist(ids);
    return ids;
  } catch { return []; }
}
export function saveShortlist(ids: string[]) {
  try { window.localStorage.setItem(shortlistKey, JSON.stringify(ids)); } catch { /* Browsing remains available without storage. */ }
}
