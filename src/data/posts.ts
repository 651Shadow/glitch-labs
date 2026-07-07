export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  tags: string[];
  // Markdown body. Rendered with `marked`.
  body: string;
}

export const posts: Post[] = [
  {
    slug: 'free-webhook-testing-tool',
    title: 'A free webhook testing tool that runs entirely in your browser',
    date: '2026-07-07',
    description:
      'Most request inspectors send your data to someone else’s server. Here’s one that doesn’t — and how it works.',
    tags: ['devtools', 'webhooks', 'privacy'],
    body: `Testing webhooks usually means pasting your payloads into a third-party site and hoping they don't log them. For anything real — payment callbacks, auth events, internal APIs — that's a bad trade.

**DevBox** is a request inspector that runs the capture step in *your* browser tab. You get a temporary URL, point Stripe / GitHub / your own service at it, and the requests show up live in the page. Nothing is stored on a server. Close the tab and it's gone.

## Why client-side

A traditional request bin needs a server to receive the HTTP call and hold it until you refresh. That server is a trust boundary. DevBox removes it: the URL is a thin relay that forwards the raw request straight to your open tab over a websocket. The relay never persists the body.

## What you can do with it

- Inspect headers, query params, body, and method
- Pretty-print JSON automatically
- Copy any request as a cURL command
- Use it as a quick "is my endpoint even firing?" check

## When you outgrow it

The browser-only version is perfect for local work and demos. If you need *persistent* history, diffing between two captures, or alerts when a payload changes shape, that's exactly what the self-hosted [Webhook Debugger Pro](/#/product/webhook-debugger-pro) adds — a server you control, Docker-deployable in minutes.

Try it: [DevBox](/#/devbox). No account, no tracking.

## A note on privacy

We don't run analytics scripts that fingerprint you, and the free tool doesn't require login. If you want to verify that claim, the whole site is open and the relay is something you can self-host.`,
  },
  {
    slug: 'build-telegram-bot-without-code',
    title: 'How to build a Telegram bot without writing the boring parts',
    date: '2026-07-07',
    description:
      'You don’t need a framework war. Here’s the skeleton that handles commands, webhooks, and payments.',
    tags: ['telegram', 'automation', 'bots'],
    body: `Every Telegram bot tutorial teaches you to send "hello world" and stops. The real work is the plumbing: routing commands, verifying webhooks, handling payments, and not falling over when Telegram retries a delivery.

## The parts nobody shows

1. **Command routing** — a map of command → handler, with middleware for auth and rate limits.
2. **Webhook verification** — Telegram signs deliveries; verify before you trust.
3. **Payment intents** — invoice creation, confirmation, and the "what if they don't pay" path.
4. **Config** — one env file, no scattered secrets.

[Telegram Gateway](/#/product/telegram-gateway) ships all four as a skeleton. You write the logic; it handles the wiring.

## A minimal router

The pattern is dead simple:

\`\`\`ts
const routes = {
  '/start': (ctx) => ctx.reply('Hi.'),
  '/pay': (ctx) => createInvoice(ctx),
};
bot.on('message', (ctx) => {
  const handler = routes[ctx.text];
  return handler ? handler(ctx) : fallback(ctx);
});
\`\`\`

That's 80% of every bot. The other 20% is the parts Gateway already includes.

## Deploy in one command

A single script pushes to any Node host. No Dockerfile archaeology, no "works on my machine."

If you'd rather not assemble it, the kit is [here](/#/product/telegram-gateway). If you do want to build it yourself, the structure above is the whole secret.`,
  },
  {
    slug: 'n8n-ai-agent-templates',
    title: 'n8n AI agent templates that actually do work',
    date: '2026-07-07',
    description:
      'Twelve workflows that turn an LLM into a worker — research, routing, summarization, follow-up.',
    tags: ['n8n', 'ai-agents', 'automation'],
    body: `n8n is a great engine and a terrible place to start from a blank canvas. The gap between "I have n8n" and "I have an agent that does my research" is a dozen small decisions.

## The workflows that pay off

- **Research agent** — search → synthesize → cite. The citations matter; an LLM without them is a guess with confidence.
- **Inbound triage** — read an email, decide if it's worth your time, route it.
- **Doc ingestion** — take a folder of PDFs, chunk them into RAG-ready pieces.
- **Daily digest** — pull sources, summarize, deliver.
- **Follow-up scheduler** — remember to chase the thing that got dropped.

The [n8n AI Agent Pack](/#/product/n8n-agent-pack) is these, imported as JSON, with a readme and notes on where each one breaks in production.

## The part tutorials skip: failure

Every workflow needs a dead-letter path. When the LLM returns garbage or the API times out, where does the work go? If the answer is "nowhere," your agent is a demo. Wire a failure branch before you trust it with anything real.

## Start small

Import one workflow. Run it on something low-stakes. Watch where it surprises you. Then add the next.`,
  },
  {
    slug: 'automate-lead-qualification',
    title: 'Automate lead qualification without losing the human touch',
    date: '2026-07-07',
    description:
      'Score inbound leads, route the hot ones to yourself, and answer the rest politely. Automatically.',
    tags: ['ai-agents', 'sales', 'automation'],
    body: `If you're a solo founder, every inbound lead costs you attention. The trick isn't to automate the reply — it's to automate the *decision* about whether this lead deserves you.

## The pipeline

1. **Capture** from email, a webhook, or a CSV.
2. **Score** fit (do they match what you sell?) and intent (are they ready to buy?).
3. **Route** — hot leads go to your Telegram/Slack/email. Cold ones get a polite, editable auto-reply.
4. **Log** — so you can see the pattern over a month.

[AI Lead Qualifier](/#/product/ai-lead-qualifier) is this as a drop-in script.

## Why scoring, not filtering

A hard filter throws away money. Scoring lets you triage: act now, act later, or auto-reply. You stay in the loop on the deals that matter and stop drowning in the rest.

## The explainable part

Don't trust a black box on who gets ignored. The scorer outputs *why* — "high intent, weak fit" — so you can override it. That's the difference between automation that helps and automation that loses you a client.`,
  },
  {
    slug: 'self-host-request-bin',
    title: 'How to self-host a request bin (and why you’d want to)',
    date: '2026-07-07',
    description:
      'When the free, browser-only tool isn’t enough, here’s the architecture for owning your inspector.',
    tags: ['devtools', 'self-host', 'webhooks'],
    body: `The free [DevBox](/#/devbox) inspector is great until you need history across tabs, or you want to know when a webhook's payload *changed shape* overnight.

## What self-hosting buys you

- **Persistence** — requests survive a refresh and a closed laptop.
- **Diffing** — compare two captures and see exactly what moved.
- **Alerting** — ping you when a field appears, vanishes, or changes type.
- **Ownership** — the data never leaves your infra.

## The shape of it

A tiny receiver writes each request to a store (SQLite is enough to start). A websocket pushes new captures to any open dashboard. A small diff function compares schemas. That's the whole thing.

[Webhook Debugger Pro](/#/product/webhook-debugger-pro) is this packaged — Docker or bare metal, with the alerting wired in.

## Start with the free version

If you only need to confirm "did it fire and what did it send," the browser tool is enough and costs nothing. Reach for the self-hosted version when you start caring about *trends*, not just snapshots.`,
  },
  {
    slug: 'nextjs-saas-starter-template',
    title: 'The Next.js SaaS starter we wish we had',
    date: '2026-07-07',
    description:
      'Auth, billing hooks, a dashboard, and a deploy script — without the 40 features you delete on day one.',
    tags: ['nextjs', 'templates', 'saas'],
    body: `Most SaaS starters are Christmas trees. You spend the first day deleting features you'll never use. [Next.js SaaS Core](/#/product/nextjs-saas-core) is the opposite: the minimum that's still a real product.

## What's in

- **Auth** — email + OAuth, with a real session layer.
- **Billing hooks** — a typed surface ready for Gumroad or Stripe.
- **Dashboard** — a usable shell with dark mode, not a toy.
- **Deploy** — one script to Vercel or any Node host.

## What's out

Analytics dashboards you don't need yet. Admin magic you'll rebuild anyway. Three state libraries. All of it.

## Why start here

The first version of any product is mostly scaffold. If the scaffold is clean and small, the product shows up faster. When you're ready to charge, the billing hooks are already there — point them at [Gumroad](https://gumroad.com) and ship.

The same thinking powers our [API Marketplace Kit](/#/product/api-marketplace-kit), which generalizes the architecture behind theglitchstore.com.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
