import Reveal from "./Reveal";

export default function ChapterCards({ chapters }) {
  return (
    <div className="chapters">
      {chapters.map((ch, idx) => (
        <Reveal as="section" anim={idx % 2 === 0 ? "slide-left" : "slide-right"} key={ch.id}>
        <section className="chapter" id={ch.id}>
          <header className="chapterHeader">
            <h3 className="chapterTitle">{ch.title}</h3>
            {ch.subtitle ? <p className="muted">{ch.subtitle}</p> : null}
          </header>

          {ch.body?.map((p, i) => (
            <p key={i} className="bodyText">{p}</p>
          ))}

          {ch.favourites?.length ? (
            <ul className="tags" aria-label="Favourites">
              {ch.favourites.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          ) : null}

          {ch.callout ? <div className="callout">{ch.callout}</div> : null}

          {ch.images?.length ? (
            <div className="masonry" aria-label={`${ch.title} photos`}>
              {ch.images.map((img, i) => (
                <Reveal as="figure" anim="fade-up" delay={i * 60} key={img.src}>
                  <figure className="tile">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : null}

          {ch.testimonials?.length ? (
            <div className="quotes" aria-label="Testimonials">
              {ch.testimonials.map((q, i) => (
                <blockquote key={i} className="quote">
                  <p>“{q.text}”</p>
                  <footer>— {q.from}</footer>
                </blockquote>
              ))}
            </div>
          ) : null}
        </section>
        </Reveal>
      ))}
    </div>
  );
}
