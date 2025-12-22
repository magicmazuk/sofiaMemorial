import React, { useEffect, useRef } from "react";

export default function BirthdayEffects({ replayKey = 0 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const resizeRef = useRef(null);

  // Confetti burst on mount and when replayKey changes
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    resizeRef.current = onResize;

    const colors = [
      '#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6', '#f59e0b', '#22d3ee'
    ];

    const count = Math.min(140, Math.floor((width * height) / 24000));
    const gravity = 0.3;
    const drag = 0.995;

    const particles = Array.from({ length: count }, (_, i) => {
      const angle = (Math.random() * Math.PI) - (Math.PI / 2);
      const speed = 6 + Math.random() * 6;
      const size = 6 + Math.random() * 6;
      return {
        x: width / 2 + (Math.random() * 120 - 60),
        y: height * 0.25 + (Math.random() * 40 - 20),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        w: size,
        h: size * (0.6 + Math.random() * 0.8),
        color: colors[i % colors.length],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.25,
        life: 0,
        ttl: 160 + Math.random() * 60
      };
    });

    let running = true;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      let alive = 0;
      for (const p of particles) {
        p.life += 1;
        if (p.life > p.ttl) continue;
        alive++;
        p.vy += gravity;
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;

        if (p.y > height + 40) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (alive > 0 && running) {
        rafRef.current = requestAnimationFrame(render);
      }
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeRef.current) window.removeEventListener('resize', resizeRef.current);
      ctx && ctx.clearRect(0, 0, width, height);
    };
  }, [replayKey]);

  return (
    <div className="birthdayEffects" aria-hidden="true">
      <canvas ref={canvasRef} className="confettiCanvas" />
      <div className="balloonLayer">
        <span className="balloon" style={{
          '--x': '8%', '--delay': '0s', '--dur': '14s', '--hue':'320'
        }} />
        <span className="balloon" style={{
          '--x': '22%', '--delay': '1.2s', '--dur': '16s', '--hue':'260'
        }} />
        <span className="balloon" style={{
          '--x': '38%', '--delay': '0.6s', '--dur': '15s', '--hue':'40'
        }} />
        <span className="balloon" style={{
          '--x': '56%', '--delay': '2.1s', '--dur': '17s', '--hue':'200'
        }} />
        <span className="balloon" style={{
          '--x': '74%', '--delay': '0.9s', '--dur': '16.5s', '--hue':'140'
        }} />
        <span className="balloon" style={{
          '--x': '88%', '--delay': '1.6s', '--dur': '15.5s', '--hue':'10'
        }} />
      </div>
    </div>
  );
}
