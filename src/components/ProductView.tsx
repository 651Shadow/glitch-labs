import React from 'react';
import { getProduct } from '../data/products';

export function ProductView({ slug, onCheckout }: { slug: string; onCheckout: (slug: string) => void }) {
  const p = getProduct(slug);
  if (!p) return <section><div className="wrap"><p>Product not found.</p></div></section>;
  return (
    <section>
      <div className="wrap post">
        <a className="muted" href="#/products">← All products</a>
        <h1>{p.title}</h1>
        <span className="cat-chip">{p.category}</span>
        <p style={{ marginTop: 16 }}>{p.description}</p>
        <h2>What's included</h2>
        <ul>
          {p.features.map((f, i) => (<li key={i}>{f}</li>))}
        </ul>
        <h2>Who it's for</h2>
        <p>{p.who}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20 }}>
          <div className="price">${p.price} USD</div>
          <button className="btn primary" onClick={() => onCheckout(p.slug)}>Buy now</button>
        </div>
        <p className="note">Pay with card (Gumroad) or USDT. Both deliver the same product.</p>
      </div>
    </section>
  );
}
