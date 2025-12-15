import Reveal from './Reveal';

export default function TimelineRibbon({ items = [] }) {
  return (
    <section className="timelineSection" aria-label="Timeline">
      <div className="timelineHeader">
        <h2 className="timelineTitle">A Little Timeline</h2>
      </div>
      <div className="timelineRibbon">
        <div className="timelineTrack" />
        <div className="timelineEvents">
          {items.map((e, i) => (
            <Reveal key={i} anim={i % 2 ? 'slide-right' : 'slide-left'} delay={80 * i}>
              <div className="timelineEvent">
                <div className="timelineDot" aria-hidden="true">{e.icon}</div>
                <div className="timelineCard">
                  <div className="timelineDate">{e.date}</div>
                  <div className="timelineLabel">{e.title}</div>
                  {e.note ? <div className="timelineNote">{e.note}</div> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}