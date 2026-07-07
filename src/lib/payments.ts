import { site } from '../data/site';
import { products } from '../data/products';

export type PayMethod = 'crypto' | 'card';

// Returns the destination for a given product + method.
// Crypto: a single USDT address (set once in site.ts).
// Card: the product's Gumroad checkout URL (set per product in products.ts).
export function resolvePayment(
  productSlug: string,
  method: PayMethod
): { url?: string; address?: string } {
  if (method === 'crypto') {
    return { address: site.crypto.address };
  }
  const p = products.find((x) => x.slug === productSlug);
  return { url: p?.gumroadUrl };
}
