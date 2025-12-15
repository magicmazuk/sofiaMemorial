import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const indices = Array.from({ length: 9 }).map((_, i) => i + 1);

export default function HeroSwiper({ slidesData }) {
  const [sources] = useState(indices.map((i) => `/images/sofia/thumbnail_${i}.jpg`));
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gradientRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(max-width: 720px)').matches : true);

  const normalizeAnchor = (anchor) => {
    if (!anchor) return 'center';
    switch (anchor) {
      case 'top-left': return 'left top';
      case 'top-right': return 'right top';
      case 'top-center': return 'center top';
      case 'bottom-left': return 'left bottom';
      case 'bottom-right': return 'right bottom';
      case 'bottom-center': return 'center bottom';
      case 'top': return 'center top';
      case 'bottom': return 'center bottom';
      case 'left': return 'left center';
      case 'right': return 'right center';
      case 'center-left': return 'left center';
      case 'center-right': return 'right center';
      case 'center': return 'center';
      default: return anchor; // allow custom e.g. '25% 75%'
    }
  };

  

  useEffect(() => {
    const updateOffset = () => {
      const h = titleRef.current?.offsetHeight || 0;
      const spacing = 12;
      sectionRef.current?.style.setProperty('--top-safe', `${h + spacing}px`);
      const gb = gradientRef.current?.offsetHeight || 0;
      sectionRef.current?.style.setProperty('--bottom-safe', `${gb}px`);
    };
    updateOffset();
    const mq = window.matchMedia('(max-width: 720px)');
    const onMQ = (e) => setIsMobile(e.matches);
    mq.addEventListener ? mq.addEventListener('change', onMQ) : mq.addListener(onMQ);
    window.addEventListener('resize', updateOffset);
    return () => {
      window.removeEventListener('resize', updateOffset);
      mq.removeEventListener ? mq.removeEventListener('change', onMQ) : mq.removeListener(onMQ);
    };
  }, []);

  const perSlideDefaults = [
    { imageAnchor: 'top-center', animateIn: { type: 'fade-in', targets: 'all', delayBase: 300 } },
    { imageAnchor: 'top-center', animateIn: { type: 'slide-left', targets: [0,1], delayBase: 600 } },
    { imageAnchor: 'top-center', animateIn: { type: 'slide-right', targets: 'all', delayBase: 1000 } },
  ];

  return (
    <section className="heroSwiper" aria-label="Memorial gallery" ref={sectionRef}>
      <div className="heroTitle" aria-hidden="false" ref={titleRef}>
        <div className="heroTitleName">Sofia Jaconelli</div>
        <div className="heroTitleYears">2012–2018</div>
      </div>
      
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        effect="fade"
        loop
        speed={900}
        className="heroSwiperInner"
      >
        {(slidesData ?? sources.map((src, i) => ({
          src,
          overlays: [],
          imageAnchor: (perSlideDefaults[i]?.imageAnchor) ?? 'center',
          // optional animation defaults per slide
          animateIn: (perSlideDefaults[i]?.animateIn),
        }))).map((slide) => (
          <SwiperSlide key={slide.src}>
            {/* Blurred background layer */}
            <img src={slide.src} alt="" className="heroSwiperBg" aria-hidden="true" />
            {/* Main image */}
            <img
              src={slide.src}
              alt={slide.src}
              className="heroSwiperImg"
              style={{
                objectFit: isMobile ? 'cover' : 'contain',
                objectPosition: normalizeAnchor(slide.imageAnchor ?? 'center'),
              }}
            />
            {/* Overlay text(s) */}
            <div className="overlayLayer" aria-hidden={false}>
              {slide.overlays?.map((o, idx) => (
                <div
                  key={idx}
                  className={`overlayCard pos-${o.position}${o.className ? ` ${o.className}` : ""}${slide.animateIn?.type && (!slide.animateIn.targets || slide.animateIn.targets === 'all' || slide.animateIn.targets?.includes?.(idx)) ? ` overlayAnimate ${slide.animateIn.type}` : ''}`}
                  style={{
                    ...(o.style || {}),
                    ...(slide.animateIn?.type
                      ? { ['--overlay-delay']: `${(slide.animateIn.delayBase ?? 0) * idx}ms` }
                      : {}),
                  }}
                >
                  {o.content
                    ? o.content
                    : o.html
                      ? <div className="overlayHtml" dangerouslySetInnerHTML={{ __html: o.html }} />
                      : <p className="overlayText">{o.text}</p>}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="heroGradientBottom" aria-hidden="true" ref={gradientRef} />
      <a href="#story" className="scrollHint" aria-label="Scroll to content">
        <svg className="scrollHintIcon" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 16l-6-6h12l-6 6z" fill="currentColor"/>
        </svg>
      </a>
    </section>
  );
}
