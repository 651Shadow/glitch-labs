# Glitch Labs

A modern digital storefront, tools catalog, and engineering blog for developers and AI builders. Built as a fast, responsive, and maintainable static web application with zero monthly hosting costs.

**Live Demo:** [https://651shadow.github.io/glitch-labs/](https://651shadow.github.io/glitch-labs/)

---

## What It Is

Glitch Labs is a lightweight e-commerce and portfolio landing page designed for digital products, developer tools, and prompt kits. It combines high-converting product cards with an integrated markdown blog and interactive tool preview panels.

### Key Highlights
- **Zero Server Overhead:** 100% client-side static build deployable to GitHub Pages, Vercel, or Netlify.
- **Dual Checkout Flow:** Out-of-the-box support for credit card checkout (via Gumroad product links) and direct non-custodial crypto checkout modal (USDT TRC-20 / ERC-20).
- **Embedded Markdown Engine:** Blog articles and product release notes render client-side from markdown with code highlighting support.
- **Fully Responsive:** Tested across mobile, tablet, and desktop screens with accessible navigation and dark UI aesthetics.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 |
| **Language** | TypeScript 5 |
| **Bundler & Dev Server** | Vite 5 |
| **Markdown Parser** | Marked |
| **Styling** | Vanilla CSS with custom theme variables |
| **CI/CD & Hosting** | GitHub Actions + GitHub Pages |

---

## Features

- **Product Catalog (`/products`):** Grid view of developer packs, toolkits, and guides with status badges and pricing.
- **Product Detail Modal & View:** Dedicated product pages with feature lists, requirements, and direct checkout triggers.
- **Interactive DevBox:** Live interactive widget demonstrating developer tools and utility workflows.
- **Technical Blog:** Client-side markdown reader with sanitized HTML rendering.
- **Automated CI/CD:** GitHub Actions workflow automatically tests, builds, and deploys artifacts upon push to the main branch.

---

## Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm (or pnpm / yarn)

### Installation

```bash
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Type-check and compile optimized static assets into the `dist/` directory:

```bash
npm run build
```

### Local Preview

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
├── .github/workflows/deploy.yml # Automated GitHub Pages deployment
├── api/                         # Edge API webhook handler (optional)
├── content/                     # Product catalog & social metadata
├── public/                      # Static assets and icons
├── src/
│   ├── components/              # React UI components (Nav, Hero, Products, Blog, etc.)
│   ├── data/                    # Site configuration, products list, and blog posts
│   ├── lib/                     # Client payment utilities
│   ├── App.tsx                  # Main application routing and state
│   ├── main.tsx                 # React DOM root entry
│   └── styles.css               # Global theme and component styles
├── index.html                   # HTML entry template
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript project configuration
└── vite.config.ts               # Vite configuration with relative base paths
```

---

## License

MIT License. See repository for details.
