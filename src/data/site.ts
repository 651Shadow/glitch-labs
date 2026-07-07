// Central site config. Shadow fills real values here (no code changes needed elsewhere).
export const site = {
  name: 'Glitch Labs',
  tagline: 'Tools & kits for developers and AI builders',
  domain: 'glitchlabs.dev', // set this once DNS points here; the site runs from any host today
  contactEmail: 'pay@glitchlabs.dev',
  // USDT receiving address. Replace with a real TRC-20 (or ERC-20) wallet you control.
  // NOTE: Alpha inserted a placeholder. No funds will arrive until Shadow sets the real address.
  crypto: {
    ticker: 'USDT',
    networks: ['TRC-20', 'ERC-20'],
    address: 'REPLACE_WITH_YOUR_USDT_TRC20_ADDRESS',
    confirmations: 1,
  },
  // Gumroad handles card payments (USD) with zero setup cost. Create a product per slug,
  // then paste each product's Gumroad checkout URL into products.ts -> gumroadUrl.
  socials: {
    twitter: 'https://x.com/glitchlabs',
    github: 'https://github.com/651Shadow/glitch-labs',
    pinterest: 'https://pinterest.com/glitchlabs',
    reddit: 'https://reddit.com/u/glitchlabs',
  },
};
