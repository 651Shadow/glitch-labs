import React from 'react';

export function Hero({ onBrowse, onTool }: { onBrowse: () => void; onTool: () => void }) {
  return (
    <section className="hero">
      <div className="wrap">
        <h1>
          Tools &amp; kits for <span className="tag">developers</span> and{' '}
          <span className="tag">AI builders</span>.
        </h1>
        <p className="lede">
          Glitch Labs ships the boring parts so you can build the product: automation scripts, agent
          configs, web app starters, and field guides — plus a free, privacy-first request inspector.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
          <a className="btn primary" href="#/products" onClick={onBrowse}>Browse products</a>
          <a className="btn ghost" href="#/devbox" onClick={onTool}>Try DevBox — free</a>
        </div>
        <p className="note" style={{ marginTop: 24 }}>
          Built by the team behind <a href="https://theglitchstore.com" target="_blank" rel="noreferrer">theglitchstore.com</a> — a live, security-audited API marketplace.
        </p>
      </div>
    </section>
  );
}
