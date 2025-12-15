import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, as: Tag = "div", anim = "fade-up", threshold = 0.2, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const className = `reveal ${visible ? "is-visible" : ""}`;
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} className={className} data-anim={anim} style={style}>
      {children}
    </Tag>
  );
}
