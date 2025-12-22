import Reveal from "./Reveal";

export default function TimelineVertical({ items = [], variant = "center" }){
  const list = Array.isArray(items) ? items : [];
  return (
    <section className="timelineVSection" aria-label="Timeline">
      <div className="timelineVHeader">
        <h2 className="timelineVTitle">A Gentle Vertical Timeline</h2>
      </div>
      <div className={`timelineV ${variant}`}>
        <div className="timelineVLine" aria-hidden="true" />
        <div className="timelineVItems">
          {list.map((e, i) => (
            <Reveal key={i} anim={i % 2 ? "slide-right" : "slide-left"} delay={80 * i}>
              <div className={`timelineVItem ${i % 2 ? "right" : "left"}`}>
                <div className="timelineVMarker" aria-hidden="true">
                  {e.image ? (
                    <span className="timelineVThumb">
                      <img src={e.image} alt={e.alt || "Timeline photo"} loading="lazy" />
                    </span>
                  ) : (
                    <span className="timelineVDot">{e.icon || "✦"}</span>
                  )}
                </div>
                <div className="timelineVCard">
                  <div className="timelineVDate">{e.date}</div>
                  <div className="timelineVLabel">{e.title}</div>
                  {e.note ? <div className="timelineVNote">{e.note}</div> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
