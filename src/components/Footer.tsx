import React from 'react';
import { site } from '../data/site';

export function Footer() {
  return (
    <footer>
      <div className="wrap cols">
        <div>
          <h4>{site.name}</h4>
          <div className="muted">Tools &amp; kits for developers and AI builders.</div>
          <div className="muted" style={{ marginTop: 8 }}>
            From the team behind <a href="https://theglitchstore.com" target="_blank" rel="noreferrer">theglitchstore.com</a>.
          </div>
        </div>
        <div>
          <h4>Products</h4>
          <div><a href="#/products">All products</a></div>
          <div><a href="#/devbox">DevBox (free)</a></div>
          <div><a href="#/blog">Writing</a></div>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <div><a href={site.socials.twitter} target="_blank" rel="noreferrer">X / Twitter</a></div>
          <div><a href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a></div>
          <div><a href={site.socials.pinterest} target="_blank" rel="noreferrer">Pinterest</a></div>
          <div><a href={site.socials.reddit} target="_blank" rel="noreferrer">Reddit</a></div>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="muted">{site.contactEmail}</div>
          <div className="muted">Crypto: {site.crypto.ticker} on {site.crypto.networks.join(' / ')}</div>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 24, fontSize: 12 }}>
        © {new Date().getFullYear()} {site.name}. No tracking. No account required.
      </div>
    </footer>
  );
}
