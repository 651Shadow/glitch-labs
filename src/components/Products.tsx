import React, { useState } from 'react';
import { products, categories, type Category } from '../data/products';

interface Props {
  onOpen: (slug: string) => void;
  onCheckout: (slug: string) => void;
  limit?: number;
}

export function Products({ onOpen, onCheckout, limit }: Props) {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const list = products.filter((p) => filter === 'all' || p.category === filter);
  const shown = limit ? list.slice(0, limit) : list;

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <h2>Products</h2>
          <span className="muted">Pay with {`card (Gumroad)`} or {`USDT`}. No account needed.</span>
        </div>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter ${filter === c.id ? 'active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid cols-3">
          {shown.map((p) => (
            <div className="card" key={p.slug}>
              <span className="cat-chip">{p.category}</span>
              <h3 style={{ marginTop: 10 }}>{p.title}</h3>
              <div className="pitch">{p.pitch}</div>
              <div className="price">${p.price}</div>
              <div className="card-actions">
                <button className="btn sm" onClick={() => onOpen(p.slug)}>Details</button>
                <button className="btn sm primary" onClick={() => onCheckout(p.slug)}>Buy</button>
              </div>
            </div>
          ))}
        </div>
        {limit && products.length > limit && (
          <div style={{ marginTop: 20 }}>
            <a className="btn" href="#/products">View all {products.length} products</a>
          </div>
        )}
      </div>
    </section>
  );
}
