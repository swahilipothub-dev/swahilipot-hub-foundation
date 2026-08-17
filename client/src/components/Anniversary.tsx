import { useEffect, useRef, useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStar,
  faRocket,
  faBriefcase,
  faLightbulb,
  faScrewdriverWrench,
  faUserTie,
  faStore,
  faArrowTrendUp,
  faGraduationCap,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import CountOnHover from "./CountOnHover";

const GOLD_SPARKLE_COLORS = ["#FFD700", "#FFC107", "#FFE08A", "#FFF3C4", "#FFB300"];

/* ─── Shared colours ────────────────────────────────────────────────────── */

const BURST_COLORS = [
  "#FFD700", "#FFA500", "#FF6B6B", "#4FC3F7",
  "#81C784", "#CE93D8", "#FFCC80", "#80DEEA",
  "#F48FB1", "#AED581", "#FFD54F", "#4DD0E1",
];

/* ─── Fireworks engine ──────────────────────────────────────────────────── */

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; color: string;
  size: number; decay: number; gravity: number;
}

interface Rocket {
  x: number; y: number; targetY: number;
  vy: number; color: string; trail: { x: number; y: number }[];
}

function runFireworks(
  canvas: HTMLCanvasElement,
  rafRef: React.MutableRefObject<number>,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let particles: Particle[] = [];
  let rockets:   Rocket[]   = [];
  const startTime = Date.now();
  const DURATION  = 7000;

  const explode = (x: number, y: number, color: string) => {
    const count = 55 + Math.floor(Math.random() * 35);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
      const speed = 1.5 + Math.random() * 5;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        alpha: 1,
        color: Math.random() > 0.35
          ? color
          : BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
        size: 1.5 + Math.random() * 3,
        decay: 0.010 + Math.random() * 0.010,
        gravity: 0.06 + Math.random() * 0.06,
      });
    }
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        alpha: 1,
        color: "#FFD700",
        size: 3.5 + Math.random() * 2,
        decay: 0.008,
        gravity: 0.04,
      });
    }
  };

  const launch = () => {
    const x = canvas.width * (0.1 + Math.random() * 0.8);
    rockets.push({
      x, y: canvas.height + 10,
      targetY: canvas.height * (0.08 + Math.random() * 0.38),
      vy: -(12 + Math.random() * 9),
      color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
      trail: [],
    });
  };

  const schedule = [0, 300, 650, 1050, 1500, 1900, 2350, 2800, 3300, 3800, 4400, 5000, 5600];
  schedule.forEach((delay) => {
    setTimeout(() => {
      launch();
      if (Math.random() > 0.45) setTimeout(launch, 180);
    }, delay);
  });

  const draw = () => {
    ctx.fillStyle = "rgba(6, 40, 68, 0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    rockets = rockets.filter((r) => {
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 14) r.trail.shift();
      r.y += r.vy;
      r.vy *= 0.985;

      r.trail.forEach((pt, idx) => {
        const a = (idx / r.trail.length) * 0.7;
        ctx.save();
        ctx.globalAlpha = a;
        ctx.fillStyle = r.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.5 - idx * 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.shadowBlur = 8;
      ctx.shadowColor = r.color;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (r.y <= r.targetY) { explode(r.x, r.y, r.color); return false; }
      return true;
    });

    particles = particles.filter((p) => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.97;
      p.alpha -= p.decay;
      if (p.alpha <= 0) return false;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur  = 4;
      ctx.shadowColor = p.color;
      ctx.fillStyle   = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return true;
    });

    const elapsed = Date.now() - startTime;
    if (elapsed < DURATION || particles.length > 0 || rockets.length > 0) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  rafRef.current = requestAnimationFrame(draw);
}

/* ─── Falling decorations engine ───────────────────────────────────────── */

const FALL_COLORS = [
  "#FFD700", "#FFC107", "#FF8C00", "#FF6B6B",
  "#4FC3F7", "#81C784", "#CE93D8", "#FFCC80",
  "#80DEEA", "#F48FB1", "#AED581", "#A5D6A7",
];

interface FallingItem {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number; rotSpeed: number;
  alpha: number; color: string;
  w: number; h: number;
  size: number;
  shape: number; // 0=rect 1=circle 2=star 3=diamond
}

function drawStar(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const outer = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const inner = outer + Math.PI / 5;
    const fn = i === 0 ? "moveTo" : "lineTo";
    ctx[fn](Math.cos(outer) * r, Math.sin(outer) * r);
    ctx.lineTo(Math.cos(inner) * r * 0.42, Math.sin(inner) * r * 0.42);
  }
  ctx.closePath();
}

function startFalling(
  canvas: HTMLCanvasElement,
  rafRef: React.MutableRefObject<number>,
  isVisible: React.MutableRefObject<boolean>,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let items: FallingItem[] = [];
  let frame = 0;

  const spawn = (burst = false) => {
    const count = burst ? 8 + Math.floor(Math.random() * 6) : 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      items.push({
        x:        Math.random() * canvas.width,
        y:        burst ? -5 - Math.random() * 30 : -10 - Math.random() * 10,
        vx:       (Math.random() - 0.5) * 2,
        vy:       1 + Math.random() * 3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.09,
        alpha:    0.55 + Math.random() * 0.45,
        color:    FALL_COLORS[Math.floor(Math.random() * FALL_COLORS.length)],
        w:        6 + Math.random() * 12,
        h:        3 + Math.random() * 5,
        size:     4 + Math.random() * 8,
        shape:    Math.floor(Math.random() * 4),
      });
    }
  };

  // Initial burst so decorations appear immediately
  for (let i = 0; i < 5; i++) spawn(true);

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;

    // Spawn a few every ~20 frames while visible
    if (isVisible.current && frame % 20 === 0) spawn();

    items = items.filter((it) => {
      it.x        += it.vx;
      it.y        += it.vy;
      it.rotation += it.rotSpeed;
      if (it.y > canvas.height * 0.82) it.alpha -= 0.018;
      if (it.alpha <= 0 || it.y > canvas.height + 20) return false;

      ctx.save();
      ctx.globalAlpha = it.alpha;
      ctx.fillStyle   = it.color;
      ctx.translate(it.x, it.y);
      ctx.rotate(it.rotation);

      if (it.shape === 0) {
        // Confetti strip (rectangle)
        ctx.shadowBlur  = 2;
        ctx.shadowColor = it.color;
        ctx.fillRect(-it.w / 2, -it.h / 2, it.w, it.h);
      } else if (it.shape === 1) {
        // Circle dot
        ctx.shadowBlur  = 3;
        ctx.shadowColor = it.color;
        ctx.beginPath();
        ctx.arc(0, 0, it.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (it.shape === 2) {
        // 5-pointed star
        ctx.shadowBlur  = 4;
        ctx.shadowColor = it.color;
        drawStar(ctx, it.size * 0.7);
        ctx.fill();
      } else {
        // Diamond
        ctx.rotate(Math.PI / 4);
        const s = it.size * 0.55;
        ctx.shadowBlur  = 2;
        ctx.shadowColor = it.color;
        ctx.fillRect(-s, -s, s * 2, s * 2);
      }

      ctx.restore();
      return true;
    });

    if (isVisible.current || items.length > 0) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rafRef.current = 0;
    }
  };

  rafRef.current = requestAnimationFrame(draw);
}

/* ─── Component ─────────────────────────────────────────────────────────── */

const Anniversary = () => {
  const sectionRef        = useRef<HTMLElement>(null);
  const fireworksCanvasRef = useRef<HTMLCanvasElement>(null);
  const fallingCanvasRef   = useRef<HTMLCanvasElement>(null);
  const fireworksRafRef    = useRef<number>(0);
  const fallingRafRef      = useRef<number>(0);
  const isVisibleRef       = useRef(false);

  const [hoverSparkles, setHoverSparkles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const sparkleIdRef       = useRef(0);
  const lastSparkleTimeRef = useRef(0);

  const spawnSparkleAt = useCallback((x: number, y: number) => {
    const id = sparkleIdRef.current++;
    const color = GOLD_SPARKLE_COLORS[Math.floor(Math.random() * GOLD_SPARKLE_COLORS.length)];
    setHoverSparkles((prev) => [...prev, { id, x, y, color }]);
    setTimeout(() => {
      setHoverSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 700);
  }, []);

  const handleNumberMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSparkleTimeRef.current < 110) return;
    lastSparkleTimeRef.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    spawnSparkleAt(e.clientX - rect.left, e.clientY - rect.top);
  }, [spawnSparkleAt]);

  const handleNumberMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        spawnSparkleAt(
          rect.width * (0.2 + Math.random() * 0.6),
          rect.height * (0.1 + Math.random() * 0.6),
        );
      }, i * 70);
    }
  }, [spawnSparkleAt]);

  const milestones = [
    { target: 67000, suffix: "", label: "Youth Connected",   icon: faUsers,  desc: "Young people engaged and linked to opportunities, networks and resources" },
    { target: 59700, suffix: "", label: "Youth Improved",    icon: faStar,   desc: "Young people equipped with skills, mindset, experience and tools to advance their potential" },
    { target: 25400, suffix: "", label: "Youth Transformed", icon: faRocket, desc: "Young people achieving meaningful outcomes in employment, entrepreneurship and beyond" },
  ];

  const youthImproved = [
    { target: 14490, icon: faUserTie,            label: "Improved Career Management", desc: "Stronger career planning and job search skills" },
    { target: 14490, icon: faLightbulb,          label: "Improved Mindset",           desc: "Positive mindset, confidence and resilience" },
    { target: 6572,  icon: faScrewdriverWrench,  label: "Skilled",                    desc: "Trained with in-demand, market-relevant skills" },
    { target: 11120, icon: faBriefcase,          label: "Obtained Work Experience",   desc: "Gained practical work experience and exposure" },
  ];

  const youthTransformed = [
    { target: 11120, icon: faBriefcase,     label: "Youth Employed",    desc: "Young people in decent and sustainable employment" },
    { target: 4191,  icon: faStore,         label: "Businesses Started", desc: "Young entrepreneurs who started their own businesses" },
    { target: 670,   icon: faArrowTrendUp,  label: "Businesses Grown",   desc: "Businesses strengthened and scaled for greater impact" },
  ];

  const additionalImpact = [
    { target: 59700, icon: faGraduationCap, label: "Youth Trained",          desc: "Completed training programs across multiple fields" },
    { target: 2136,  icon: faCertificate,   label: "Certifications Issued",  desc: "Industry-recognized certifications earned to validate skills and enhance employability" },
  ];

  const journey = [
    { no: "01", year: "2016", title: "The Journey Begins",     points: ["Tech ecosystem partnerships formed", "Safe space for youth innovation"] },
    { no: "02", year: "2018", title: "Expanding Opportunities", points: ["Programmes diversified", "Digital skills & creative arts", "First Pwani Innovation Week launched"] },
    { no: "03", year: "2020", title: "Building Resilience",     points: ["Joined GOYN", "Youth-centred programmes expanded", "Demand-driven approach adopted"] },
    { no: "04", year: "2022", title: "Growing Partnerships",    points: ["County & private sector collaboration", "Youth programmes co-designed", "Expanded to Kilifi & Kwale", "Youth Hub Networks"] },
    { no: "05", year: "2024", title: "Scaling Impact",          points: ["PIW becomes a regional platform", "Tanga Collaboration", "Swahilipot FM is launched", "Greater regional participation"] },
    { no: "06", year: "2026", title: "A Decade of Impact",      points: ["10 years of youth empowerment", "Stronger institutional growth", "Inclusive innovation ecosystem"] },
  ];

  const youthGallery = [
    "/img/general-people/image2.jpeg",
    "/img/general-people/image5.jpeg",
    "/img/general-people/image7.jpeg",
    "/img/general-people/image9.jpeg",
    "/img/general-people/image11.jpeg",
    "/img/general-people/image13.jpeg",
    "/img/general-people/image16.jpeg",
    "/img/general-people/image17.jpeg",
    "/img/general-people/image19.jpeg",
    "/img/general-people/image21.jpeg",
  ];

  const launchFireworks = useCallback(() => {
    cancelAnimationFrame(fireworksRafRef.current);
    if (fireworksCanvasRef.current) {
      runFireworks(fireworksCanvasRef.current, fireworksRafRef);
    }
  }, []);

  const launchFalling = useCallback(() => {
    cancelAnimationFrame(fallingRafRef.current);
    fallingRafRef.current = 0;
    if (fallingCanvasRef.current) {
      startFalling(fallingCanvasRef.current, fallingRafRef, isVisibleRef);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisibleRef.current = true;
          launchFireworks();
          // Only start falling if not already running
          if (!fallingRafRef.current) launchFalling();
        } else {
          isVisibleRef.current = false;
          // Falling loop self-terminates once isVisible goes false and items drain
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(fireworksRafRef.current);
      cancelAnimationFrame(fallingRafRef.current);
    };
  }, [launchFireworks, launchFalling]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-swahilipot-950 py-24"
    >
      {/* Canvas 1 — fireworks (semi-transparent fill for glow trails) */}
      <canvas
        ref={fireworksCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      {/* Canvas 2 — falling decorations (clear each frame) */}
      <canvas
        ref={fallingCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Concentric ring decorations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="w-[500px]  h-[500px]  rounded-full border border-white/5 absolute" />
        <div className="w-[750px]  h-[750px]  rounded-full border border-white/5 absolute" />
        <div className="w-[1000px] h-[1000px] rounded-full border border-white/5 absolute" />
        <div className="w-[1300px] h-[1300px] rounded-full border border-white/5 absolute" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-swahilipot-500 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ zIndex: 0 }} />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-swahilipot-400 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ zIndex: 0 }} />
      <div className="absolute top-1/2 left-0 w-56 h-56 bg-amber-400 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ zIndex: 0 }} />

      {/* Content */}
      <div className="container-custom relative" style={{ zIndex: 3 }}>

        {/* Badge */}
        <div className="flex justify-center mb-6 reveal reveal-up" data-reveal>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-amber-300 px-5 py-2 rounded-full text-xs font-semibold border border-white/10 tracking-widest uppercase">
            <FontAwesomeIcon icon={faStar} className="text-amber-400 text-[10px]" />
            A Decade of Excellence
          </span>
        </div>

        {/* Giant "10" */}
        <div className="text-center mb-14">
          <div
            className="relative inline-block leading-none animate-[celebrationPop_0.8s_ease-out_both] cursor-default"
            onMouseEnter={handleNumberMouseEnter}
            onMouseMove={handleNumberMouseMove}
          >
            <style>{`
              @keyframes annvOrbitCW  { from { transform: rotate(0deg);   } to { transform: rotate(360deg); } }
              @keyframes annvOrbitCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg);   } }
              @keyframes annvTwinkle {
                0%, 100% { opacity: 0.25; transform: scale(0.6); }
                50%      { opacity: 1;    transform: scale(1.2); }
              }
              @keyframes annvSparklePop {
                0%   { opacity: 0; transform: translate(-50%, -50%) scale(0)   rotate(0deg); }
                25%  { opacity: 1; transform: translate(-50%, -50%) scale(1)   rotate(40deg); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(110deg) translateY(-22px); }
              }
              .annv-orbit-ring   { position: absolute; top: 50%; left: 50%; width: 0; height: 0; pointer-events: none; }
              .annv-orbit-ring--a { animation: annvOrbitCW  9s  linear infinite; }
              .annv-orbit-ring--b { animation: annvOrbitCCW 14s linear infinite; }
              .annv-orbit-ring--c { animation: annvOrbitCW  22s linear infinite; }
              .annv-comet {
                position: absolute; top: 0; left: 0;
                transform-origin: 0 0;
                width: 64px; height: 3px; border-radius: 9999px;
                background: linear-gradient(90deg, transparent, #FFD700 55%, #FFFBEA);
                box-shadow: 0 0 12px 2px rgba(255,215,0,0.75);
              }
              .annv-star {
                position: absolute; top: 0; left: 0;
                transform-origin: 0 0;
                width: 5px; height: 5px; border-radius: 9999px;
                background: #FFE08A;
                box-shadow: 0 0 8px 2px rgba(255,224,138,0.8);
                animation: annvTwinkle 2.4s ease-in-out infinite;
              }
              .annv-hover-sparkle {
                position: absolute; pointer-events: none;
                animation: annvSparklePop 700ms ease-out forwards;
              }
            `}</style>

            {/* Orbiting golden comets + twinkling stars, looping around the 10 */}
            <div className="annv-orbit-ring annv-orbit-ring--a">
              <span className="annv-comet" style={{ transform: "rotate(0deg) translateX(130px) translateY(-50%)" }} />
              <span className="annv-star" style={{ transform: "rotate(140deg) translateX(150px)", animationDelay: "0.2s" }} />
              <span className="annv-star" style={{ transform: "rotate(250deg) translateX(120px)", animationDelay: "0.9s" }} />
            </div>
            <div className="annv-orbit-ring annv-orbit-ring--b">
              <span className="annv-comet" style={{ transform: "rotate(200deg) translateX(170px) translateY(-50%)", width: "48px" }} />
              <span className="annv-star" style={{ transform: "rotate(40deg) translateX(190px)", animationDelay: "0.5s" }} />
              <span className="annv-star" style={{ transform: "rotate(320deg) translateX(175px)", animationDelay: "1.3s" }} />
            </div>
            <div className="annv-orbit-ring annv-orbit-ring--c">
              <span className="annv-star" style={{ transform: "rotate(80deg) translateX(220px)", animationDelay: "0.1s" }} />
              <span className="annv-star" style={{ transform: "rotate(190deg) translateX(210px)", animationDelay: "1.6s" }} />
              <span className="annv-star" style={{ transform: "rotate(300deg) translateX(225px)", animationDelay: "0.7s" }} />
            </div>

            <span className="relative z-10 text-[10rem] md:text-[14rem] font-black text-amber-300 select-none leading-none">
              10
            </span>

            {/* Sparkles spawned fresh on every hover/move, not just once */}
            {hoverSparkles.map((s) => (
              <span
                key={s.id}
                className="annv-hover-sparkle"
                style={{ left: s.x, top: s.y }}
              >
                <FontAwesomeIcon icon={faStar} style={{ color: s.color, fontSize: "10px" }} />
              </span>
            ))}
          </div>
          <div className="text-white/70 text-2xl md:text-3xl font-bold tracking-[0.25em] uppercase -mt-4 mb-6">
            Years of Impact
          </div>
          <p className="text-amber-200/80 text-base md:text-lg max-w-2xl mx-auto italic mb-5">
            A decade of empowering coastal youth. Transforming lives. Building futures.
          </p>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Over the past decade, Swahilipot Hub Foundation has connected thousands of young
            people to opportunities, strengthened their skills and mindset, and supported them
            to build better futures.
          </p>
        </div>

        {/* Glassmorphism stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal reveal-up"
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-swahilipot-600/40 border border-swahilipot-400/30 mb-3 group-hover:bg-swahilipot-500/40 transition-colors">
                <FontAwesomeIcon icon={m.icon} className="text-sm text-swahilipot-300" />
              </div>
              <div className="text-3xl font-black text-white mb-1 tabular-nums">
                <CountOnHover target={m.target} suffix={m.suffix} className="annv-counter w-full" />
              </div>
              <div className="text-amber-300 font-bold text-sm mb-1">{m.label}</div>
              <div className="text-white/40 text-xs leading-snug">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Youth Improved — breakdown */}
        <div className="mb-12 reveal reveal-up" data-reveal>
          <h3 className="text-center text-white text-xl md:text-2xl font-black mb-1">
            Youth Improved — What Change Looks Like
          </h3>
          <p className="text-center text-white/50 text-xs mb-6">
            59,700 young people equipped to advance their potential
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {youthImproved.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={item.icon} className="text-swahilipot-300 text-sm mb-2" />
                <div className="text-2xl font-black text-white mb-1 tabular-nums">
                  <CountOnHover target={item.target} className="annv-counter w-full" />
                </div>
                <div className="text-amber-300 font-bold text-xs mb-1">{item.label}</div>
                <div className="text-white/40 text-[11px] leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Youth Transformed — breakdown */}
        <div className="mb-12 reveal reveal-up" data-reveal>
          <h3 className="text-center text-white text-xl md:text-2xl font-black mb-1">
            Youth Transformed — Lasting Outcomes
          </h3>
          <p className="text-center text-white/50 text-xs mb-6">
            25,400 young people achieving meaningful outcomes
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {youthTransformed.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={item.icon} className="text-swahilipot-300 text-sm mb-2" />
                <div className="text-2xl font-black text-white mb-1 tabular-nums">
                  <CountOnHover target={item.target} className="annv-counter w-full" />
                </div>
                <div className="text-amber-300 font-bold text-xs mb-1">{item.label}</div>
                <div className="text-white/40 text-[11px] leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional impact */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto reveal reveal-up" data-reveal>
          {additionalImpact.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-swahilipot-600/40 border border-swahilipot-400/30">
                <FontAwesomeIcon icon={item.icon} className="text-sm text-swahilipot-300" />
              </div>
              <div>
                <div className="text-2xl font-black text-white mb-0.5 tabular-nums">
                  <CountOnHover target={item.target} className="annv-counter w-full" />
                </div>
                <div className="text-amber-300 font-bold text-xs mb-1">{item.label}</div>
                <div className="text-white/40 text-[11px] leading-snug">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* From Room to Hub — milestone timeline */}
        <div className="mb-16 reveal reveal-up" data-reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            <span>Part I • Chapter 02</span>
            <span className="text-white/20">/</span>
            <span>Swahilipot@10 • Pwani Innovation Week</span>
            <span className="text-white/20">/</span>
            <span>Mombasa, Kenya</span>
            <span className="text-white/20">/</span>
            <span>2016/2026</span>
          </div>

          <h3 className="text-center text-white text-3xl md:text-4xl font-black mb-2">
            From Room to Hub
          </h3>
          <p className="text-center text-amber-200/80 text-sm italic mb-10">
            Ten years, told in milestones.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Spine */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-swahilipot-400/25 md:-translate-x-1/2" />

            <div className="space-y-8">
              {journey.map((item, i) => (
                <div
                  key={item.no}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${
                    i % 2 === 0 ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 top-5 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-swahilipot-950 -translate-x-1/2 z-10" />

                  <div className={`[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-2" : "md:text-left md:pl-2"}`}>
                    <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-left w-full">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-amber-300/70 font-black text-xs tracking-widest">{item.no}</span>
                        <span className="text-white font-black text-2xl tabular-nums">{item.year}</span>
                      </div>
                      <div className="text-amber-300 font-bold text-sm mb-3">{item.title}</div>
                      <ul className="space-y-1.5">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-white/50 text-xs leading-snug">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-swahilipot-300 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-white/50 text-sm leading-relaxed max-w-3xl mx-auto mt-10">
            From its beginnings as a safe space for youth innovation, Swahilipot Hub Foundation has
            grown into a regional youth empowerment and inclusive innovation ecosystem — marked by
            expanding programmes, partnerships, geographic reach, Pwani Innovation Week, and
            Swahilipot FM.
          </p>
        </div>

        {/* Infinite youth gallery marquee */}
        <div className="reveal reveal-up" data-reveal>
          <h3 className="text-center text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-12">
            The Youth We Serve
          </h3>

          <div className="relative overflow-hidden">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-swahilipot-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-swahilipot-950 to-transparent z-10" />

            <div className="flex w-max animate-[marqueeScroll_45s_linear_infinite] hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                  {youthGallery.map((src, i) => (
                    <div
                      key={i}
                      className="h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 mr-5"
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Anniversary;
