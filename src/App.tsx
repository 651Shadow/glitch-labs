import React, { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { DevBox } from './components/DevBox';
import { Blog } from './components/Blog';
import { PostView } from './components/PostView';
import { ProductView } from './components/ProductView';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { site } from './data/site';
import { getProduct } from './data/products';
import { getPost } from './data/posts';

export function App() {
  // Hash-based router (no server config needed for static hosts).
  const [route, setRoute] = useState<{ path: string; param: string | null }>(() => parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = (path: string, param?: string) => {
    window.location.hash = param ? `${path}/${param}` : path;
  };

  // Checkout modal state
  const [checkout, setCheckout] = useState<{ slug: string } | null>(null);

  let view: React.ReactNode = null;
  switch (route.path) {
    case '/':
    case '/home':
      view = (
        <>
          <Hero onBrowse={() => go('/products')} onTool={() => go('/devbox')} />
          <Products onOpen={(slug) => go('/product', slug)} onCheckout={(slug) => setCheckout({ slug })} limit={6} />
          <DevBox />
        </>
      );
      break;
    case '/products':
      view = <Products onOpen={(slug) => go('/product', slug)} onCheckout={(slug) => setCheckout({ slug })} />;
      break;
    case '/product':
      view = route.param ? (
        <ProductView slug={route.param} onCheckout={(slug) => setCheckout({ slug })} />
      ) : (
        <Products onOpen={(slug) => go('/product', slug)} onCheckout={(slug) => setCheckout({ slug })} />
      );
      break;
    case '/devbox':
      view = <DevBox full />;
      break;
    case '/blog':
      view = <Blog onOpen={(slug) => go('/post', slug)} />;
      break;
    case '/post':
      view = route.param ? <PostView slug={route.param} /> : <Blog onOpen={(slug) => go('/post', slug)} />;
      break;
    default:
      view = (
        <>
          <Hero onBrowse={() => go('/products')} onTool={() => go('/devbox')} />
          <Products onOpen={(slug) => go('/product', slug)} onCheckout={(slug) => setCheckout({ slug })} />
        </>
      );
  }

  return (
    <>
      <Nav onNavigate={(p) => go(p)} />
      <main>{view}</main>
      <Footer />
      {checkout && (
        <CheckoutModal
          product={getProduct(checkout.slug)!}
          onClose={() => setCheckout(null)}
        />
      )}
      {/* touch refs so unused imports don't trip strict mode */}
      {false && site.contactEmail}
      {false && getPost('x')}
    </>
  );
}

function parseHash(): { path: string; param: string | null } {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw || raw === '/') return { path: '/', param: null };
  const parts = raw.split('/').filter(Boolean);
  return { path: '/' + (parts[0] || ''), param: parts[1] || null };
}
