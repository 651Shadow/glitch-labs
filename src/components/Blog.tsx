import React from 'react';
import { posts } from '../data/posts';

export function Blog({ onOpen }: { onOpen: (slug: string) => void }) {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <h2>Writing</h2>
          <span className="muted">Practical notes on building and automating.</span>
        </div>
        <div className="grid cols-2">
          {posts.map((p) => (
            <div className="card" key={p.slug} onClick={() => onOpen(p.slug)} style={{ cursor: 'pointer' }}>
              <h3>{p.title}</h3>
              <div className="pitch">{p.description}</div>
              <div className="meta" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 10 }}>
                {p.date} · {p.tags.slice(0, 3).join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
