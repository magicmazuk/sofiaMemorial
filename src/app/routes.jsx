import "../styles/globals.css";
import "../styles/theme.css";

import { sofia, sofiaStory, FORCE_BIRTHDAY } from "./content/sofiaStory";
import React, { useState } from "react";
import ChapterCards from "./components/ChapterCards";
import Footer from "./components/Footer";
import HeroSwiper from "./components/HeroSwiper";
import LovedBars from "./components/LovedBars";
import Reveal from "./components/Reveal";
import TimelineVertical from "./components/TimelineVertical";
import Gallery from "./components/Gallery";
import VideoEmbeds from "./components/VideoEmbeds";
import BirthdayEffects from "./components/BirthdayEffects";
// CandleWall removed per request

export default function Home() {
  const [confettiKey, setConfettiKey] = useState(0);
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : "");
  const forceUrl = params.get('birthday') === '1';
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayMMDD = `${mm}-${dd}`;
  const isBirthday = !!(FORCE_BIRTHDAY || forceUrl || (sofia.birthday === todayMMDD));

  const replayConfetti = () => setConfettiKey((k) => k + 1);

  return (
    <div className={`page ${isBirthday ? 'birthday' : ''}`}>
      {isBirthday && <BirthdayEffects replayKey={confettiKey} />}
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

        {/* Vertical Timeline in cloudy panel */}
        <Reveal as="section" anim="fade-up">
          <section className="panel cloudy" aria-label="Timeline">
            <div className="birthdayHeader" style={{display:isBirthday?'flex':'none', marginBottom: 12, alignItems:'center', gap: 8, flexWrap:'wrap'}}>
              <span className="birthdayBadge" role="status" aria-live="polite">🎈 Today we celebrate Sofia’s birthday</span>
              <button type="button" className="birthdayReplay" onClick={replayConfetti} aria-label="Celebrate again">✨ Celebrate again</button>
            </div>
            <TimelineVertical items={sofia.timeline} variant="center" />
          </section>
        </Reveal>

        {/* Candle Wall removed */}
        <Reveal as="section" anim="slide-right">
          <section className="panel cloudy" aria-label="Gallery">
            <h2 className="panelTitle">Gallery</h2>
            <p className="panelIntro">Tap an image to open it larger.</p>
            <Gallery
              items={[
                { src: "/images/sofia/01.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sofia Born", caption: "Sofia Born" },
                { src: "/images/sofia/02.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sofia Too Cute", caption: "Sofia Too Cute" },
                { src: "/images/sofia/03.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sofia Cosy", caption: "Sofia Cosy" },
                { src: "/images/sofia/03a.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Happy Girl", caption: "Happy Girl" },
                { src: "/images/sofia/04.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Cute Overload", caption: "Cute Overload" },
                { src: "/images/sofia/05.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Beautiful", caption: "Beautiful" },
                { src: "/images/sofia/06.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Jumparoo", caption: "Jumparoo" },
                { src: "/images/sofia/06a.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Blowing out the fake cake", caption: "Blowing out the fake cake" },
                { src: "/images/sofia/07.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sofia Smiling", caption: "Sofia Smiling" },
                { src: "/images/sofia/07a.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sofia meeting Aria", caption: "Sofia meeting Aria" },
                { src: "/images/sofia/07b.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Piano master", caption: "Piano master" },
                { src: "/images/sofia/08.jpg?q=80&w=1200&auto=format&fit=crop", alt: "All the Family", caption: "All the Family" },
                { src: "/images/sofia/09.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sofia and Aria", caption: "Sofia and Aria" },
                { src: "/images/sofia/10.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Xmas Hugs", caption: "Xmas Hugs" },
                { src: "/images/sofia/11.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Besties", caption: "Besties" },
                { src: "/images/sofia/12.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Off to School", caption: "Off to School" },
                { src: "/images/sofia/13.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Fun chilling", caption: "Fun chilling" },
                { src: "/images/sofia/13a.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Best Pals", caption: "Best Pals" },
                { src: "/images/sofia/14.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Off to a concert", caption: "Off to a concert" },
                { src: "/images/sofia/15.jpg?q=80&w=1200&auto=format&fit=crop", alt: "Sisters at the caravan", caption: "Sisters at the caravan" },
              
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
