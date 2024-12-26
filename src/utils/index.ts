/**
 *
 * @param {string} txt - The text to be sliced
 * @param {number} [max=50] - The maximum length of the sliced text
 * @returns The sliced text, with an ellipsis (. . .) appended if truncated */

export function txtSlicer(txt: string, max: number = 30) {
  if (txt.length >= max) return `${txt.slice(0, max)} . . .`;
  return txt;
}

export function enhancePriceNumber(price: string) {
  return price.replace(/\d{3}/g, ",");
}
