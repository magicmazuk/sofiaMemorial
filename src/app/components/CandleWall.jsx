import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'sofia.candles';

export default function CandleWall() {
  const [candles, setCandles] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [globalCount, setGlobalCount] = useState(null);
  const [syncError, setSyncError] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch('/api/candles')
      .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to load')))
      .then(({ count }) => { if (alive) setGlobalCount(count ?? 0); })
      .catch(() => { if (alive) setGlobalCount(0); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(candles));
    } catch {}
  }, [candles]);

  const fieldRef = useRef(null);

  const addCandle = () => {
    // Place within a safe inset so candles aren't clipped at edges
    const x = Math.random() * 88 + 6; // 6%..94%
    const y = Math.random() * 76 + 12; // 12%..88%
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
    setCandles((prev) => [...prev, { id, x: +x.toFixed(2), y: +y.toFixed(2), t: Date.now() }].slice(-300));
    // Optimistically bump global count
    setGlobalCount((c) => (typeof c === 'number' ? c + 1 : 1));
    // Sync to serverless counter if available
    fetch('/api/candles', { method: 'POST' })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to increment')))
      .then(({ count }) => setGlobalCount(count ?? null))
      .catch(err => setSyncError('Could not sync candle count (still saved locally).'));
  };

  return (
    <section className="candleWallSection" aria-label="Candle Wall">
      <div className="candleWallHeader">
        <h2 className="candleWallTitle">Candle Wall</h2>
        <p className="candleWallSubtitle">Light a gentle candle for Sofia</p>
      </div>

      <div className="candleWallActions">
        <button type="button" className="pill" onClick={addCandle} aria-label="Light a candle">🕯️ Light a candle</button>
        <div className="candleCount" aria-live="polite">{typeof globalCount === 'number' ? globalCount : '…'} lit</div>
      </div>

      <div className="candleWallWrap">
        <div ref={fieldRef} className="candleField" role="img" aria-label={`${candles.length} candles`} onClick={addCandle}>
          {candles.map((c) => (
            <div key={c.id} className="candle" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
              <span className="flame" />
              <span className="glow" />
              <span className="wick" />
            </div>
          ))}
        </div>
      </div>

      <p className="candleWallNote">Candles are saved on this device. Count syncs globally when configured.</p>
      {syncError ? <p className="candleSyncError">{syncError}</p> : null}
    </section>
  );
}
