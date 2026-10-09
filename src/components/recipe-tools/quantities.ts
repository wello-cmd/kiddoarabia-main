const unicodeFractions: Record<string, string> = { '¼': '1/4', '½': '1/2', '¾': '3/4', '⅓': '1/3', '⅔': '2/3', '⅛': '1/8', '⅜': '3/8', '⅝': '5/8', '⅞': '7/8' };
const quantityPattern = /^([0-9]+(?:\.[0-9]+)?(?:\s+[0-9]+\/[0-9]+|\/[0-9]+)?)(?=\s|$)/;
function normalize(value: string) {
  return value.replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit))).replace(/٫/g, '.').replace(/(\d)([¼½¾⅓⅔⅛⅜⅝⅞])/g, '$1 $2').replace(/[¼½¾⅓⅔⅛⅜⅝⅞]/g, fraction => unicodeFractions[fraction]);
}
function parse(value: string) {
  const parts = value.split(/\s+/);
  return parts.reduce((total, part) => {
    const [numerator, denominator] = part.split('/').map(Number);
    return total + (denominator === undefined ? numerator : numerator / denominator);
  }, 0);
}
function format(value: number, arabic: boolean) {
  const whole = Math.floor(value + 0.000001);
  const remainder = value - whole;
  const fractions = [[1, 8], [1, 4], [1, 3], [1, 2], [2, 3], [3, 4], [7, 8]];
  const fraction = fractions.find(([n, d]) => Math.abs(remainder - n / d) < 0.0001);
  const formatted = fraction ? `${whole ? `${whole} ` : ''}${fraction[0]}/${fraction[1]}` : String(Math.round(value * 100) / 100);
  return arabic ? formatted.replace(/[0-9]/g, digit => '٠١٢٣٤٥٦٧٨٩'[Number(digit)]).replace('.', '٫') : formatted;
}
/** Only ingredient-leading amounts and parenthetical metric equivalents are scaled. */
export function scaleIngredient(ingredient: string, ratio: number, arabic = false): string {
  if (ratio === 1 || !Number.isFinite(ratio) || ratio <= 0) return ingredient;
  const normalized = normalize(ingredient);
  const match = normalized.match(quantityPattern);
  if (!match) return ingredient;
  const amount = parse(match[1]);
  if (!Number.isFinite(amount)) return ingredient;
  // Avoid changing an unsupported range, oven temperature, or duration.
  const rest = normalized.slice(match[1].length);
  if (/^\s*(?:[-–]|°|degrees|minutes?|mins?|hours?|دقيقة|دقائق|ساعة|ساعات|درجة)/i.test(rest)) return ingredient;
  const originalMatch = ingredient.match(/^[0-9٠-٩¼½¾⅓⅔⅛⅜⅝⅞٫./\s]+/);
  if (!originalMatch) return ingredient;
  const suffix = ingredient.slice(originalMatch[0].trimEnd().length);
  return `${format(amount * ratio, arabic)}${suffix}`.replace(/\(([0-9٠-٩٫.]+)\s*(kg|g|ml|l|غ|جم|كغ|مل|لتر)\)/gi, (_, n, unit) => `(${format(Number(normalize(n)) * ratio, arabic)} ${unit})`);
}
