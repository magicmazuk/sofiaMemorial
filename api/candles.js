// Vercel Serverless Function: Global candle count via JSONBin.io
// Requires env vars: JSONBIN_ID, JSONBIN_KEY
// Deploy on Vercel; the client calls /api/candles (GET to read, POST to increment)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const BIN_ID = process.env.JSONBIN_ID;
  const BIN_KEY = process.env.JSONBIN_KEY;
  if (!BIN_ID || !BIN_KEY) {
    return res.status(500).json({ error: 'Server not configured: missing JSONBIN_ID/JSONBIN_KEY' });
  }

  const base = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
  const headers = { 'X-Master-Key': BIN_KEY, 'Content-Type': 'application/json' };

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${base}/latest`, { headers });
      if (!r.ok) throw new Error(`GET failed ${r.status}`);
      const data = await r.json();
      const count = (data && data.record && typeof data.record.count === 'number') ? data.record.count : 0;
      return res.status(200).json({ count });
    }

    if (req.method === 'POST') {
      // Fetch current count, then increment and write back
      const r = await fetch(`${base}/latest`, { headers });
      const data = r.ok ? await r.json() : { record: { count: 0 } };
      const current = (data && data.record && typeof data.record.count === 'number') ? data.record.count : 0;
      const next = current + 1;
      const put = await fetch(base, { method: 'PUT', headers, body: JSON.stringify({ count: next }) });
      if (!put.ok) throw new Error(`PUT failed ${put.status}`);
      return res.status(200).json({ count: next });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Unexpected error' });
  }
}
