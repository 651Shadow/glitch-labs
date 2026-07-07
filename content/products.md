# Glitch Labs — Products

Zero-capital digital-product studio. Developer & AI tools built to be used, not admired.

- Free: **DevBox** — a client-side developer toolbox that runs entirely in your browser.
- Paid: automation scripts, AI-agent configs, web app templates, and mini-courses.

---

## webhook-debugger
**Title:** Webhook Debugger Kit
**Pitch:** A request-inspection setup you can run locally to catch, replay, and inspect webhooks without leaking data to a third party.
**Price:** $19
**Category:** automation

A small Node script plus a Docker Compose file that stands up a local request bin, logs every inbound payload, and lets you replay a captured request with one command. It pairs well with the free DevBox inspector when you want a quick look without spinning up a server.

- Capture and pretty-print any HTTP request body, headers, and query params
- Replay stored requests with cURL-style export
- Persist logs to disk for later diffing
- Optional bearer-token gate so only your services can post
- Single `docker compose up` to start, `Ctrl-C` to stop

**Who it's for:** Indie hackers integrating Stripe, GitHub, or SaaS webhooks who don't want test traffic sitting on someone else's server.

**Buy:** Grab the Webhook Debugger Kit for $19 and stop guessing what your provider actually sent.

---

## telegram-no-code-bot
**Title:** Telegram Bot Builder (No-Code)
**Pitch:** A configuration-driven Telegram bot you control through a YAML file — no coding required to ship a working notify-and-reply bot.
**Price:** $29
**Category:** automation

Define commands, auto-replies, and outbound alerts in a single config file; the bundled runner handles polling, session state, and error recovery. Point it at any webhook or cron job and it relays events to a Telegram chat you own.

- Declarative YAML: commands, keywords, and scheduled messages
- Instant notifications from any HTTP endpoint via a tiny relay
- Built-in rate limiting so you don't trip Telegram's flood limits
- SQLite state store, zero external database
- One-binary deploy to any VPS or even a Raspberry Pi

**Who it's for:** Non-coders and solo founders who want a Telegram alert bot for their side project without hiring a developer.

**Buy:** Get the Telegram Bot Builder for $29 and have a working bot configured by lunch.

---

## n8n-agent-pack
**Title:** n8n AI Agent Template Pack
**Pitch:** Five production-shaped n8n workflows that wire an LLM agent into your tools — import, set keys, run.
**Price:** $49
**Category:** ai-agents

Production-shaped n8n workflows covering support triage, doc summarization, SQL assistant, inbox cleaner, and a research aggregator. Each comes with a README explaining the node graph, the failure modes, and where to swap in your own model.

- 5 prebuilt workflows with annotated nodes
- Model-agnostic: works with OpenAI, Anthropic, or self-hosted endpoints
- Clear error-handling and retry branches
- Environment-variable template for secrets
- Notes on cost and latency per run

**Who it's for:** Ops-minded founders and AI tinkerers who use n8n and want agent patterns that don't fall over on the first edge case.

**Buy:** Pick up the n8n AI Agent Template Pack for $49 and skip the blank-canvas phase.

---

## lead-qualifier-agent
**Title:** Lead Qualifier Agent
**Pitch:** An AI agent that reads inbound leads, scores them against your criteria, and routes the good ones to your inbox.
**Price:** $79
**Category:** ai-agents

A config-driven agent that ingests lead forms or CSV exports, classifies fit using a prompt you control, and writes a short rationale for every decision. Output lands in a tidy table you can hand to a human or feed downstream.

- Configurable scoring rubric via plain-language prompt
- Connects to web forms, email, or a JSON endpoint
- Explains each score so you can audit it
- Exports to CSV and posts summaries to Slack/Telegram
- Runs on a cron or on-demand; no always-on server needed

**Who it's for:** Technical founders drowning in inbound who want a first-pass filter before they touch a lead themselves.

**Buy:** Get the Lead Qualifier Agent for $79 and let the obvious-no's filter themselves out.

---

## nextjs-saas-starter
**Title:** Next.js SaaS Starter
**Pitch:** A stripped-down Next.js + Stripe + auth template that gets you from clone to checkout in an afternoon.
**Price:** $129
**Category:** templates

A clean, opinionated Next.js App Router template with auth, Stripe billing, a database layer, and a basic dashboard — no bloated UI kit, no mystery abstractions. Read the code in one sitting; change what you need.

- Next.js App Router, TypeScript, Tailwind
- Auth (email + magic link) and Stripe subscriptions wired end to end
- Prisma schema with sensible defaults
- Environment setup script and seed data
- No vendor lock-in; remove any piece without breaking the rest

**Who it's for:** Developers shipping a paid product who want billing and auth solved so they can build the actual feature.

**Buy:** Start from the Next.js SaaS Starter at $129 instead of rebuilding the same scaffolding for the tenth time.

---

## indie-launch-template
**Title:** Indie Launch Landing Template
**Pitch:** A fast, accessible landing-page template with waitlist, pricing, and FAQ sections already wired.
**Price:** $39
**Category:** templates

A single-page HTML/Tailwind template tuned for launch pages: hero, feature grid, pricing toggle, waitlist capture, and an FAQ accordion. Ships as static files you can host on any CDN for near-zero cost.

- Responsive, accessible, ~40KB uncompressed CSS
- Waitlist form posts to a configurable endpoint
- Pricing toggle (monthly/annual) with no framework
- Dark and light themes included
- Lighthouse-friendly: no render-blocking JS

**Who it's for:** Indie hackers who need a credible launch page tonight and would rather not fight a page builder.

**Buy:** Grab the Indie Launch Landing Template for $39 and ship your page before the weekend.

---

## automation-foundations
**Title:** Automation Foundations (Mini-Course)
**Pitch:** A short, practical course on building reliable automations without a sprawl of brittle scripts.
**Price:** $59
**Category:** courses

Eight focused lessons on picking the right tool, structuring workflows for debugging, handling failures, and knowing when not to automate. Comes with runnable examples you can adapt to your own stack.

- 8 lessons, ~2 hours total, text + video
- Patterns for idempotent, observable automations
- Failure-handling checklist you can reuse
- Example repo with 6 working workflows
- Lifetime access, including future revisions

**Who it's for:** Developers new to automation who want to avoid the "it worked once and never again" trap.

**Buy:** Take Automation Foundations for $59 and build automations that survive contact with reality.

---

## ai-agent-prompt-course
**Title:** AI Agent Prompt Engineering (Mini-Course)
**Pitch:** A hands-on mini-course on writing agent prompts that hold up under real inputs.
**Price:** $89
**Category:** courses

Six lessons on system prompts, tool-use instructions, guardrails, and evaluation — with a workbook of prompts you can copy and stress-test. Built around practical agents, not toy chatbots.

- 6 lessons with a copy-paste prompt workbook
- How to write tool specs the model actually follows
- Guardrail patterns for scope and safety
- A tiny eval harness to measure prompt changes
- Lifetime access, including future revisions

**Who it's for:** AI tinkerers and founders shipping agent features who keep getting surprised by what their prompts permit.

**Buy:** Enroll in AI Agent Prompt Engineering for $89 and stop negotiating with your own prompts.

---

*All paid products are digital downloads. DevBox is free and runs entirely client-side — no account, no upload.*
