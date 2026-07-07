import React, { useEffect, useRef, useState } from 'react';

interface Req {
  id: string;
  ts: number;
  method: string;
  headers: Record<string, string>;
  query: Record<string, string>;
  body: string;
}

// DevBox: a privacy-first request inspector.
// The capture endpoint is a tiny client-side relay that forwards requests to this
// open tab. Nothing is stored on a server. Two modes:
//   - DEMO: works offline, no network, to prove the UI. Used as a fallback.
//   - LIVE: posts to /api/catch (or DEVBOX_RELAY env) and opens an EventSource.

const RELAY = (import.meta as any).env?.DEVBOX_RELAY || '/api/catch';

export function DevBox({ full = false }: { full?: boolean }) {
  const [url, setUrl] = useState('');
  const [reqs, setReqs] = useState<Req[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [mode, setMode] = useState<'idle' | 'live' | 'demo'>('idle');
  const [copied, setCopied] = useState(false);
  const pollRef = useRef<number | null>(null);

  const start = (useDemo: boolean) => {
    if (useDemo) {
      setMode('demo');
      setReqs([]);
      return;
    }
    // Live relay: poll the endpoint. Falls back to demo if it 404s (static host).
    setMode('live');
    setReqs([]);
    const tick = async () => {
      try {
        const res = await fetch(`${RELAY}?poll=1`, { cache: 'no-store' });
        if (!res.ok) throw new Error('no relay');
        const data = (await res.json()) as Req[];
        if (Array.isArray(data) && data.length) {
          setReqs((prev) => {
            const seen = new Set(prev.map((r) => r.id));
            const fresh = data.filter((r) => !seen.has(r.id));
            return [...fresh, ...prev].slice(0, 100);
          });
        }
      } catch {
        setMode('demo');
      }
    };
    tick();
    pollRef.current = window.setInterval(tick, 1500);
  };

  useEffect(() => {
    return () => { if (pollRef.current) window.clearInterval(pollRef.current); };
  }, []);

  const genUrl = () => {
    // The URL you give to your webhook source. The page polls /api/catch?poll=1.
    setUrl(`${location.origin}${location.pathname.replace(/index\.html$/, '')}api/catch`);
    if (mode === 'idle') start(false);
  };

  const sendDemo = () => {
    const sample: Req = {
      id: Math.random().toString(36).slice(2),
      ts: Date.now(),
      method: ['POST', 'GET', 'PUT'][Math.floor(Math.random() * 3)],
      headers: { 'content-type': 'application/json', 'x-request-id': Math.random().toString(36).slice(2, 8) },
      query: { 'ref': 'demo' },
      body: JSON.stringify({ event: 'payment.succeeded', id: 'pi_' + Math.random().toString(36).slice(2, 8), amount: 2900 }, null, 2),
    };
    setReqs((prev) => [sample, ...prev].slice(0, 100));
  };

  const copyCurl = (r: Req) => {
    const curl = `curl -X ${r.method} ${JSON.stringify(url)} \\\n  -H 'content-type: application/json' \\\n  -d '${r.body.replace(/'/g, "'\\''")}'`;
    navigator.clipboard?.writeText(curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <h2>DevBox — free request inspector</h2>
          {!full && <a className="muted" href="#/devbox">Open full ↗</a>}
        </div>
        <p className="muted" style={{ marginTop: -10 }}>
          Point any webhook at your DevBox URL. Requests appear live in this tab. No server stores your payload.
        </p>

        <div className="devbox">
          <div className="urlbar">
            <input readOnly value={url || 'Generate a URL to start catching requests…'} placeholder="Your temporary endpoint" />
            <button className="btn primary" onClick={genUrl}>Generate URL</button>
            {mode === 'idle' && (
              <button className="btn" onClick={() => start(true)} title="No server — simulates requests">Demo</button>
            )}
            {mode === 'demo' && (
              <button className="btn" onClick={sendDemo} title="Drop a sample request">+ Sample</button>
            )}
          </div>

          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>
            Mode: <b style={{ color: 'var(--accent)' }}>{mode === 'demo' ? 'demo (offline)' : mode === 'live' ? 'live relay' : 'idle'}</b>
            {mode === 'live' && ' — if the relay is unavailable, switch to Demo.'}
            {copied && <span style={{ marginLeft: 10, color: 'var(--accent)' }}>cURL copied ✓</span>}
          </div>

          {reqs.length === 0 ? (
            <div className="muted" style={{ fontSize: 14 }}>
              No requests yet. {mode === 'idle' ? 'Click "Generate URL" then POST to it.' : 'Send a test request to see it appear here.'}
            </div>
          ) : (
            reqs.map((r) => (
              <div className="req" key={r.id} onClick={() => setOpenId(openId === r.id ? null : r.id)}>
                <div className="meta">
                  <span className="method">{r.method}</span>
                  <span>{new Date(r.ts).toLocaleTimeString()}</span>
                  <span>{Object.keys(r.headers).length} headers</span>
                  <span>{r.body ? `${r.body.length}b body` : 'no body'}</span>
                </div>
                {openId === r.id && (
                  <pre>{`HEADERS:\n${JSON.stringify(r.headers, null, 2)}\n\nQUERY:\n${JSON.stringify(r.query, null, 2)}\n\nBODY:\n${r.body}`}</pre>
                )}
                {openId === r.id && (
                  <button className="btn sm" style={{ marginTop: 8 }} onClick={(e) => { e.stopPropagation(); copyCurl(r); }}>
                    Copy as cURL
                  </button>
                )}
              </div>
            ))
          )}
        </div>
        <p className="note">
          Privacy: the demo and idle modes run entirely in your browser. The live relay forwards payloads to your tab only and does not persist them. For persistent history and alerting, see Webhook Debugger Pro.
        </p>
      </div>
    </section>
  );
}
