import { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const indices = Array.from({ length: 9 }).map((_, i) => i + 1);

export default function HeroSlider() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const resolveFirst = async (candidates) => {
      for (const url of candidates) {
        const ok = await new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
        if (ok) return url;
      }
      return null;
    };

    (async () => {
      const resolved = await Promise.all(
        indices.map((i) =>
          resolveFirst([
            `/sofia/thumbnail_${i}.jpg`,
            `/sofia/thumbnail_${i}.png`,
            `/images/sofia/thumbnail_${i}.jpg`,
            `/images/sofia/thumbnail_${i}.png`,
          ])
        )
      );
      if (!cancelled) {
        const valid = resolved.filter(Boolean);
        setSources(valid);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="heroSlider" aria-label="Memorial gallery">
      <AwesomeSlider bullets={true} organicArrows={true} className="heroSliderInner">
        {sources.map((src) => (
          <div key={src} data-src={src} />
        ))}
      </AwesomeSlider>

      {/* Debug list below the slider to verify image availability */}
      <div className="heroDebug">
        <h3>Detected images</h3>
        {sources.length === 0 ? (
          <p>No images detected. Check folder and filenames.</p>
        ) : (
          <ul className="heroDebugList" aria-label="Detected image sources">
            {sources.map((src) => (
              <li key={src} className="heroDebugItem">
                <img src={src} alt={src} loading="lazy" />
                <span>{src}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
