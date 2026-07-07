// Vercel serverless function: DevBox request relay.
// Captures inbound webhook calls into memory (no DB, no logs) and serves them
// to the polling DevBox page. NOT for production persistence — that's Webhook Debugger Pro.

// Module-scoped in-memory store (per instance).
const store = [];
const MAX = 100;

export default async function handler(req, res) {
  // CORS so any webhook source can POST and the page can poll.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET' && req.query.poll !== undefined) {
    return res.status(200).json(store);
  }

  // Capture a webhook hit.
  const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
  const headers = {};
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) headers[k] = v.join(', ');
    else if (v) headers[k] = String(v);
  }
  let body = '';
  try { body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body); } catch (e) { body = ''; }
  store.unshift({
    id,
    ts: Date.now(),
    method: req.method || 'POST',
    headers,
    query: req.query,
    body,
  });
  if (store.length > MAX) store.length = MAX;
  return res.status(200).json({ ok: true, id });
}
