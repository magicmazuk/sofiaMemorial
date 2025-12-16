import "../styles/globals.css";
import "../styles/theme.css";

import { sofia, sofiaStory } from "./content/sofiaStory";
import ChapterCards from "./components/ChapterCards";
import Footer from "./components/Footer";
import HeroSwiper from "./components/HeroSwiper";
import LovedBars from "./components/LovedBars";
import Reveal from "./components/Reveal";
import TimelineRibbon from "./components/TimelineRibbon";
import Gallery from "./components/Gallery";
import VideoEmbeds from "./components/VideoEmbeds";
// CandleWall removed per request

export default function Home() {
  return (
    <div className="page">
      <a className="skipLink" href="#story">
        Skip to content
      </a>

      {/* Full-screen slider at the very top */}
      <HeroSwiper />

      <main className="container">
        <Reveal as="section" anim="fade-up">
        <section className="panel cloudy" id="story" aria-label="Sofia's story">
          <h2 className="panelTitle">Sofia’s story</h2>
          <div className="storyBlock" aria-live="polite">
            <p className="storyShort" style={{ marginTop: "1rem" }}>{sofiaStory.short}</p>
            <details className="storyDetails" style={{ marginTop: "1rem" }}>
              <summary aria-controls="long-story" aria-expanded="false" className="btn btn-secondary" style={{ cursor: "pointer" }}>
                Read the full story
              </summary>
              <div id="long-story" className="storyLong" style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
                {sofiaStory.long}
              </div>
            </details>
          </div>
        </section>
        </Reveal>

        <Reveal as="section" anim="slide-left">
          <section className="panel cloudy" aria-label="Things Sofia loved">
            <LovedBars
              items={[
                { label: 'My Little Pony', level: 4, icon: '🦄', color: 'linear-gradient(90deg, #c084fc, #f472b6)' },
                { label: 'Blanky', level: 5, icon: '🫶', color: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
                { label: 'Wonder Woman', level: 3, icon: '🦸‍♀️', color: 'linear-gradient(90deg, #fb7185, #f59e0b)' },
                { label: 'Dancing', level: 4, icon: '💃', color: 'linear-gradient(90deg, #22d3ee, #38bdf8)' },
                { label: 'Play Parks', level: 4, icon: '🎠', color: 'linear-gradient(90deg, #34d399, #10b981)' },
                { label: 'In the Night Garden', level: 4, icon: '📺', color: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' },
              ]}
            />
          </section>
        </Reveal>

        {/* Timeline Ribbon in cloudy panel */}
        <Reveal as="section" anim="fade-up">
          <section className="panel cloudy" aria-label="Timeline">
            <TimelineRibbon items={sofia.timeline} />
          </section>
        </Reveal>

        {/* Candle Wall removed */}
        <Reveal as="section" anim="slide-right">
          <section className="panel cloudy" aria-label="Gallery">
            <h2 className="panelTitle">Gallery</h2>
            <p className="panelIntro">Tap an image to open it larger.</p>
            <Gallery
              items={[
                { src: "/images/sofia/thumbnail_1.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Soft sunset sky", caption: "Evening sky" },
                { src: "/images/sofia/thumbnail_2.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Pastel balloons", caption: "Pastel balloons" },
                { src: "/images/sofia/thumbnail_3.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Flower field", caption: "Wildflowers" },
                { src: "/images/sofia/thumbnail_4.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Clouds", caption: "Clouds" },
                { src: "/images/sofia/thumbnail_5.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Stars", caption: "Starry night" },
                { src: "/images/sofia/thumbnail_6.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Beach", caption: "Gentle waves" }
              ]}
            />
          </section>
        </Reveal>

        <Reveal as="section" anim="fade-up">
          <section className="panel cloudy" aria-label="Videos">
            <h2 className="panelTitle">Videos</h2>
            <p className="panelIntro">YouTube and Vimeo embeds in a gentle frame.</p>
            <VideoEmbeds
              videos={[
                { url: "https://www.youtube.com/watch?v=NC7qA7tFw20", title: "Story time" },
                { url: "https://www.youtube.com/watch?v=EJX9gvrAgoc", title: "Listening to the Radio" },
                { url: "https://www.youtube.com/watch?v=7SzBTk5H_8s", title: "Sofia Perry"}
              ]}
            />
          </section>
        </Reveal>
       
      </main>

      <Footer footer={sofia.footer} />
    </div>
  );
}
