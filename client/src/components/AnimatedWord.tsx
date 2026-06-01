import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

const AnimatedWord: React.FC<Props> = ({ text }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(true); // default visible so text isn't hidden if observer fails

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.3 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const pct = (rect.top + rect.height / 2 - vh / 2) / vh; // -0.5..0.5-ish
      setOffset(pct * 30); // subtle parallax
    };

    onScroll();
    const handler = () => (raf = requestAnimationFrame(onScroll));
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-700 ease-out will-change-transform ${visible ? "opacity-100" : "opacity-0"} hover:scale-105`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <span
        style={{
          backgroundImage: "linear-gradient(90deg,#38bdf8,#06b6d4,#2dd4bf)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="font-extrabold text-2xl md:text-3xl"
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedWord;
