import React, { useState } from 'react';
import { site } from '../data/site';
import { resolvePayment } from '../lib/payments';
import type { Product } from '../data/products';

export function CheckoutModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [method, setMethod] = useState<'card' | 'crypto'>('card');

  const card = resolvePayment(product.slug, 'card');
  const crypto = resolvePayment(product.slug, 'crypto');

  const copyAddr = () => {
    navigator.clipboard?.writeText(crypto.address || '');
  };

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>✕</span>
        <h3>{product.title}</h3>
        <div className="price" style={{ fontSize: 18 }}>${product.price} USD</div>

        <div className="filters" style={{ marginBottom: 16 }}>
          <button className={`filter ${method === 'card' ? 'active' : ''}`} onClick={() => setMethod('card')}>Card (Gumroad)</button>
          <button className={`filter ${method === 'crypto' ? 'active' : ''}`} onClick={() => setMethod('crypto')}>Crypto (USDT)</button>
        </div>

        {method === 'card' ? (
          <div>
            <p className="steps">Pay securely with any card via Gumroad. No account needed.</p>
            <a className="btn primary" href={card.url} target="_blank" rel="noreferrer" style={{ marginTop: 10 }}>
              Continue to checkout →
            </a>
            <p className="muted" style={{ fontSize: 12, marginTop: 10 }}>
              You'll be sent to Gumroad to complete payment, then receive the product.
            </p>
          </div>
        ) : (
          <div>
            <p className="steps">
              Send <b>${product.price} {site.crypto.ticker}</b> on {site.crypto.networks.join(' / ')} to:
            </p>
            <div className="addr">{crypto.address}</div>
            <button className="btn sm" onClick={copyAddr}>Copy address</button>
            <p className="steps" style={{ marginTop: 12 }}>
              After sending, email your transaction hash to <b>{site.contactEmail}</b> with the product name.
              We deliver within 24h. Manual, but it works anywhere.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
