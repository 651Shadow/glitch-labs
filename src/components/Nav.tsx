import React from 'react';
import { site } from '../data/site';

export function Nav({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#/" onClick={() => onNavigate('/')}>
          <span className="dot">&gt;_</span> {site.name}
        </a>
        <div>
          <a className="navlink" href="#/products" onClick={() => onNavigate('/products')}>Products</a>
          <a className="navlink" href="#/devbox" onClick={() => onNavigate('/devbox')}>DevBox</a>
          <a className="navlink" href="#/blog" onClick={() => onNavigate('/blog')}>Blog</a>
        </div>
      </div>
    </div>
  );
}
