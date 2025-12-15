import Reveal from './Reveal';

export default function LovedBars({ items = [] }) {
  const max = Math.max(1, ...items.map(i => i.level ?? 0));
  return (
    <section className="lovedSection" aria-label="Things Sofia loved">
      <div className="lovedHeader">
        <h2 className="lovedTitle">Things Sofia Loved</h2>
        <p className="lovedSubtitle">Little joys, big smiles</p>
      </div>
      <div className="lovedList">
        {items.map((item, idx) => (
          <Reveal key={idx} anim={idx % 2 === 0 ? 'slide-left' : 'slide-right'} delay={80 * idx}>
            <div className="lovedItem">
              <div className="lovedLabel">
                <span className="lovedIcon" aria-hidden="true">{item.icon}</span>
                <span className="lovedText">{item.label}</span>
              </div>
              <div className="lovedMeter" role="img" aria-label={`${item.label} level ${item.level}`}>
                <div
                  className="lovedFill"
                  style={{
                    width: `${Math.round(((item.level ?? 0) / max) * 100)}%`,
                    background: item.color ?? 'linear-gradient(90deg, #c084fc, #f472b6)',
                  }}
                />
                <div className="lovedTicks" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="lovedTick" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}