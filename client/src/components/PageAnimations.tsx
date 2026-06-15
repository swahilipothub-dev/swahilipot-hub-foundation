import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ── Observer: activates all [data-ht*] scroll-reveal variants ─────── */
export const usePageReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ht-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );
    document
      .querySelectorAll("[data-ht],[data-ht-left],[data-ht-right],[data-ht-scale]")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ── WordReveal: hero title — words slide up from mask ─────────────── */
export const WordReveal = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => (
  <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`} aria-label={text}>
    {text.split(" ").map((word, i) => (
      <span key={i} className="overflow-hidden inline-block" style={{ paddingBottom: "0.1em" }}>
        <span className="inline-block word-reveal" style={{ animationDelay: `${delay + i * 90}ms` }}>
          {word}
        </span>
      </span>
    ))}
  </span>
);

/* ── SplitHeading: section h2 — words fly from alternating sides ───── */
export const SplitHeading = ({
  text,
  className = "",
  delay = 0,
  accentWords = [],
  accentClass = "text-swahilipot-600",
}: {
  text: string;
  className?: string;
  delay?: number;
  accentWords?: number[];      // word indices to colour differently
  accentClass?: string;
}) => (
  <span className={`inline-flex flex-wrap gap-x-[0.25em] leading-tight ${className}`} aria-label={text}>
    {text.split(" ").map((word, i) => (
      <span
        key={i}
        className={`${i % 2 === 0 ? "word-from-left" : "word-from-right"} ${accentWords.includes(i) ? accentClass : ""}`}
        style={{ animationDelay: `${delay + i * 75}ms` }}
      >
        {word}
      </span>
    ))}
  </span>
);

/* ── MagneticLink: cursor-following CTA button ─────────────────────── */
export const MagneticLink = ({
  to,
  children,
  className = "inline-flex items-center gap-3 bg-swahilipot-600 hover:bg-swahilipot-700 text-white font-bold px-10 py-4 rounded-xl text-sm",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.35s cubic-bezier(.23,1,.32,1), background-color 0.2s" }}
    >
      {children}
    </Link>
  );
};

/* ── MarqueeStrip: horizontal scrolling ticker ─────────────────────── */
export const MarqueeStrip = ({
  items,
  bg = "bg-amber-400",
  text = "text-swahilipot-900",
}: {
  items: string[];
  bg?: string;
  text?: string;
}) => (
  <section className={`${bg} py-4 overflow-hidden`}>
    <div className={`marquee-track flex items-center gap-10 ${text} font-black text-sm uppercase tracking-widest`}>
      {Array(6).fill(null).map((_, i) => (
        <span key={i} className="flex items-center gap-10 flex-shrink-0">
          {items.map((item, j) => (
            <span key={j} className="flex items-center gap-10 flex-shrink-0">
              <span>{item}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${text} inline-block opacity-50`} />
            </span>
          ))}
        </span>
      ))}
    </div>
  </section>
);

/* ── PageHero: full-screen banner with parallax + word reveal ──────── */
export const PageHero = ({
  label,
  title,
  subtitle,
  breadcrumb,
  image,
  accentColor = "bg-amber-400 text-swahilipot-900",
}: {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; to?: string }[];
  image: string;
  accentColor?: string;
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 bg-cover"
        style={{ backgroundImage: `url('${image}')`, backgroundPosition: "center 20%" }}
      />
      <div className="absolute inset-0 bg-swahilipot-950/75" />

      {/* Vertical side label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="h-24 w-px bg-white/20" />
        <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] rotate-90 origin-center whitespace-nowrap">
          Swahilipot Hub · Programs
        </span>
      </div>

      <div className="container-custom relative z-10 pb-20 pt-44">
        <span
          className={`inline-block text-[10px] font-black uppercase tracking-[0.35em] px-4 py-1.5 rounded mb-8 ${accentColor}`}
          style={{ animation: "wordFromLeft 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          {label}
        </span>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 max-w-4xl">
          <WordReveal text={title} delay={200} />
        </h1>

        {subtitle && (
          <p
            className="text-white/60 text-base md:text-lg max-w-md leading-relaxed mb-6"
            style={{ animation: "wordFromRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}
          >
            {subtitle}
          </p>
        )}

        <nav
          className="flex items-center gap-2 text-sm text-white/40"
          style={{ animation: "wordFromLeft 0.6s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
        >
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {crumb.to
                ? <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                : <span className="text-amber-400">{crumb.label}</span>
              }
            </span>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
          <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
};
