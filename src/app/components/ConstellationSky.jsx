import { useEffect, useRef } from "react";

const defaultStars = [
  { x: 0.2, y: 0.3, name: "Joy", note: "Giggles and twirls" },
  { x: 0.5, y: 0.2, name: "Courage", note: "Brave heart" },
  { x: 0.72, y: 0.42, name: "Magic", note: "Pony dreams" },
  { x: 0.35, y: 0.65, name: "Hugs", note: "Blanky and love" }
];

export default function ConstellationSky({ stars = defaultStars, height = 360 }){
  const canvasRef = useRef(null);
  const tooltipRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.scale(dpr, dpr);

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const starCount = Math.floor((w * h) / 2200);
    const cloud = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 0.9 + 0.5,
      p: Math.random() * Math.PI * 2
    }));

    function draw(now=0){
      ctx.clearRect(0,0,w,h);
      // gradient backdrop
      const g = ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0, "rgba(20,12,60,0.6)");
      g.addColorStop(1, "rgba(36,6,79,0.9)");
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);

      // background starfield
      ctx.fillStyle = "#fff";
      for(const s of cloud){
        const tw = prefersReduced ? 0.2 : (0.2 + 0.15 * Math.sin(s.p + now * 0.0015));
        const r = s.r + tw;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // named stars
      for(const ns of stars){
        const sx = ns.x * w;
        const sy = ns.y * h;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(sx, sy, 2.2, 0, Math.PI*2);
        ctx.fill();
      }

      if (!prefersReduced){
        rafRef.current = requestAnimationFrame(draw);
      }
    }
    draw();

    function onResize(){
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(dpr,dpr);
      draw();
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    function onMove(e){
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left);
      const y = (e.clientY - rect.top);
      const hit = stars.find(ns => {
        const sx = ns.x * w; const sy = ns.y * h;
        const dx = sx - x; const dy = sy - y;
        return (dx*dx + dy*dy) < 7*7;
      });
      const tip = tooltipRef.current;
      if (!tip) return;
      if (hit){
        tip.style.display = 'block';
        tip.style.left = `${x + 10}px`;
        tip.style.top = `${y + 10}px`;
        tip.innerHTML = `<strong>${hit.name}</strong><br/><span>${hit.note||""}</span>`;
      } else {
        tip.style.display = 'none';
      }
    }
    function onLeave(){ const tip = tooltipRef.current; if (tip) tip.style.display='none'; }
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      ro.disconnect();
    };
  }, [stars]);

  return (
    <div className="skySection" style={{height}}>
      <canvas ref={canvasRef} className="skyCanvas" role="img" aria-label="A calm starry sky with little constellations" />
      <div ref={tooltipRef} className="skyTooltip" style={{display:'none'}} />
    </div>
  );
}
