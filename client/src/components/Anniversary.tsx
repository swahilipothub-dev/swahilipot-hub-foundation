import { useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import CountOnHover from "./CountOnHover";

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

  const milestones = [
    { target: 51088, suffix: "+", label: "Connected",   icon: faUsers,  desc: "Youth connected to opportunities" },
    { target: 33049, suffix: "+", label: "Improved",    icon: faStar,   desc: "Lives meaningfully improved" },
    { target: 7263,  suffix: "+", label: "Transformed", icon: faRocket, desc: "Entrepreneurs launched" },
  ];

  const timeline = [
    { milestone: "Milestone 1", title: "Founded",      desc: "Established to empower coastal youth" },
    { milestone: "Milestone 2", title: "1,000 Youth",  desc: "First thousand youth reached" },
    { milestone: "Milestone 3", title: "Regional",     desc: "Extended impact beyond Mombasa" },
    { milestone: "Milestone 4", title: "Digital",      desc: "Programs adapted for online platforms" },
    { milestone: "Milestone 5", title: "10 Years",     desc: "A full decade of transformation" },
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
          <div className="relative inline-block leading-none animate-[celebrationPop_0.8s_ease-out_both]">
            <span className="text-[10rem] md:text-[14rem] font-black text-amber-300 select-none leading-none">
              10
            </span>
          </div>
          <div className="text-white/70 text-2xl md:text-3xl font-bold tracking-[0.25em] uppercase -mt-4 mb-6">
            Years of Impact
          </div>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2016, Swahilipot Hub Foundation has been a beacon of hope and opportunity,
            empowering thousands of young people across East Africa through technology, arts,
            and entrepreneurship.
          </p>
        </div>

        {/* Glassmorphism stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal reveal-up"
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-swahilipot-600/40 border border-swahilipot-400/30 mb-5 group-hover:bg-swahilipot-500/40 transition-colors">
                <FontAwesomeIcon icon={m.icon} className="text-lg text-swahilipot-300" />
              </div>
              <div className="text-5xl font-black text-white mb-2 tabular-nums">
                <CountOnHover target={m.target} suffix={m.suffix} />
              </div>
              <div className="text-amber-300 font-bold text-base mb-1">{m.label}</div>
              <div className="text-white/40 text-sm">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mb-20 reveal reveal-up" data-reveal>
          <div className="relative overflow-hidden rounded-3xl bg-amber-500">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Decorative amber glow blobs */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-amber-400 rounded-full opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-swahilipot-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-10 py-16 md:py-20 text-center">
              {/* Decorative top rule */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/40" />
                <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">10 Years &amp; Beyond</span>
                <div className="h-px w-12 bg-white/40" />
              </div>

              {/* Large quotation mark */}
              <div
                className="text-[7rem] font-black leading-none select-none mb-0 -mb-6"
                style={{ color: "rgba(251,191,36,0.18)", fontFamily: "Georgia, serif" }}
              >
                "
              </div>

              {/* Main quote */}
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 max-w-3xl mx-auto">
                A decade in, we're{" "}
                <span className="text-white/90 underline decoration-white/40 underline-offset-4">just getting started.</span>
              </h3>

              {/* Sub-text */}
              <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed mb-10">
                Our commitment to nurturing the next generation of innovators, artists, and
                entrepreneurs remains stronger than ever. Together, we are building a
                brighter future for East Africa.
              </p>

              {/* Attribution row */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                  <span className="text-white text-lg font-black">S</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm leading-none">Swahilipot Hub Foundation</p>
                  <p className="text-white/70 text-xs mt-0.5">Mombasa, Kenya · Est. 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal timeline */}
        <div className="reveal reveal-up" data-reveal>
          <h3 className="text-center text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-12">
            Our Journey
          </h3>

          <div className="relative">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-swahilipot-400/30 hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-swahilipot-800 border-2 border-swahilipot-500 flex items-center justify-center font-black text-lg text-amber-300 mb-4 group-hover:border-amber-400 group-hover:bg-swahilipot-700 group-hover:scale-110 transition-all duration-300 relative z-10">
                    {i + 1}
                  </div>
                  <div className="text-amber-300 font-bold text-xs mb-0.5">{item.milestone}</div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
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
