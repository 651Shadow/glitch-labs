export type Category = 'automation' | 'ai-agents' | 'templates' | 'courses';

export interface Product {
  slug: string;
  title: string;
  pitch: string;
  price: number; // USD
  category: Category;
  description: string;
  features: string[];
  who: string;
  // Gumroad checkout URL for card payments. Replace placeholder per product.
  gumroadUrl: string;
}

export const products: Product[] = [
  {
    slug: 'telegram-gateway',
    title: 'Telegram Gateway — no-code bot framework',
    pitch:
      'A production-ready Telegram bot skeleton that handles commands, payments, and webhooks without the wiring.',
    price: 29,
    category: 'automation',
    description:
      'Most bot tutorials stop at "hello world". Telegram Gateway ships the parts that actually take a weekend: command routing, payment intents, webhook verification, and a clean config layer. Drop in your logic, deploy, done.',
    features: [
      'Command router with middleware and rate limiting',
      'Webhook verification + replay protection',
      'Payments-ready (crypto + Stripe hooks included)',
      'Single .env config — no framework lock-in',
      'Deploy script for any Node host',
    ],
    who: 'Indie hackers shipping a Telegram product this weekend.',
    gumroadUrl: 'https://gumroad.com/l/gl-telegram-gateway',
  },
  {
    slug: 'n8n-agent-pack',
    title: 'n8n AI Agent Pack',
    pitch: '12 production-tested n8n workflows that turn an LLM into a worker, not a chatbot.',
    price: 49,
    category: 'ai-agents',
    description:
      'Twelve workflows covering research, routing, summarization, and follow-up — the patterns we actually run. Each comes with a JSON you import, a readme, and notes on where it breaks in production.',
    features: [
      'Research agent (search → synthesize → cite)',
      'Inbound email triage and routing',
      'Doc ingestion → RAG-ready chunks',
      'Daily digest + follow-up scheduler',
      'Error handling and dead-letter queues',
    ],
    who: 'Builders using n8n who want agents that do work, not demos.',
    gumroadUrl: 'https://gumroad.com/l/gl-n8n-agent-pack',
  },
  {
    slug: 'ai-lead-qualifier',
    title: 'AI Lead Qualifier',
    pitch: 'A drop-in script that scores inbound leads and routes the hot ones to you.',
    price: 39,
    category: 'ai-agents',
    description:
      'Point it at any inbox or form endpoint. It reads the lead, scores fit and intent, and pushes only the ones worth your time to a channel of your choice. The rest get a polite auto-reply.',
    features: [
      'Pluggable source (email, webhook, CSV)',
      'Fit + intent scoring with explainable output',
      'Routes hot leads to Telegram / Slack / email',
      'Auto-reply for cold leads (editable)',
      'Runs as a cron or on-demand',
    ],
    who: 'Solopreneurs drowning in inbound who need signal, not noise.',
    gumroadUrl: 'https://gumroad.com/l/gl-lead-qualifier',
  },
  {
    slug: 'nextjs-saas-core',
    title: 'Next.js SaaS Core',
    pitch: 'A stripped-down SaaS starter: auth, billing hooks, dashboard, deploy script. No bloat.',
    price: 89,
    category: 'templates',
    description:
      'We removed every "feature" you delete on day one. What remains: clean auth, a billing-ready API surface, a usable dashboard, and a one-command deploy. Build your product, not your scaffold.',
    features: [
      'Auth (email + OAuth) wired to a session layer',
      'Billing hooks (Gumroad / Stripe-ready)',
      'Dashboard shell with dark mode',
      'Typed API layer + env validation',
      'Vercel / Node deploy script',
    ],
    who: 'Developers who have built the same auth+dashboard three times too many.',
    gumroadUrl: 'https://gumroad.com/l/gl-nextjs-saas-core',
  },
  {
    slug: 'api-marketplace-kit',
    title: 'API Marketplace Kit',
    pitch: 'The blueprint behind theglitchstore.com — credits, keys, webhooks, admin.',
    price: 149,
    category: 'templates',
    description:
      'Theglitchstore.com is a live, security-audited API marketplace. This kit is its anatomy: prepaid credit accounts, API key issuance, usage metering, and an admin panel. The same bones, generalized.',
    features: [
      'Prepaid credit + balance ledger',
      'API key issuance, rotation, revocation',
      'Usage metering + webhook delivery',
      'Admin panel with audit log',
      'Security notes from a real audit',
    ],
    who: 'Founders shipping a paid API or credit-based product.',
    gumroadUrl: 'https://gumroad.com/l/gl-api-marketplace-kit',
  },
  {
    slug: 'webhook-debugger-pro',
    title: 'Webhook Debugger Pro',
    pitch: 'Self-hostable request inspector with replay, diffing, and alerting. DevBox, with a backend.',
    price: 25,
    category: 'automation',
    description:
      'DevBox (free) catches requests in your browser. Debugger Pro adds a server you own: persistent history, request diffing, replay, and alerts when a payload changes shape. Built for people who debug at 2am.',
    features: [
      'Persistent request history (self-hosted)',
      'Request diffing between two captures',
      'One-click replay with editable body',
      'Alert on schema change',
      'Docker + bare-metal deploy',
    ],
    who: 'Engineers integrating flaky third-party webhooks.',
    gumroadUrl: 'https://gumroad.com/l/gl-webhook-debugger-pro',
  },
  {
    slug: 'automation-field-guide',
    title: 'The Automation Field Guide',
    pitch: 'A 60-page PDF on designing automations that survive contact with reality.',
    price: 19,
    category: 'courses',
    description:
      'Most automation content is screenshots. This is the thinking: where to put the human, how to handle failure, what to log, and how to know when the bot is wrong. Written from real production scars.',
    features: [
      '60 pages, PDF + epub',
      'Failure-mode patterns with fixes',
      'When to automate vs. when not to',
      'Logging & observability checklist',
      'Update-friendly (one revision included)',
    ],
    who: 'Anyone whose automation worked in the demo and died at 3am.',
    gumroadUrl: 'https://gumroad.com/l/gl-automation-field-guide',
  },
  {
    slug: 'supabase-auth-starter',
    title: 'Supabase Auth Starter',
    pitch: 'Email, magic-link, and OAuth auth wired to a clean dashboard — with RLS you can read.',
    price: 35,
    category: 'templates',
    description:
      'Supabase auth is powerful and easy to misconfigure. This starter ships email, magic-link, and OAuth with Row Level Security policies written in plain language, plus a dashboard that respects them.',
    features: [
      'Email + magic-link + OAuth (Google/GitHub)',
      'Readable RLS policies with comments',
      'Profile table + guarded queries',
      'Dashboard shell with session state',
      'Migration files you can read',
    ],
    who: 'Builders who want Supabase auth done right the first time.',
    gumroadUrl: 'https://gumroad.com/l/gl-supabase-auth-starter',
  },
];

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'automation', label: 'Automation' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'templates', label: 'Templates' },
  { id: 'courses', label: 'Field Guides' },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
