import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faArrowRight,
  faCircleCheck,
  faChartLine,
  faNewspaper,
  faBullhorn,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  { value: "51,088", label: "Youth Connected" },
  { value: "33,049", label: "Lives Improved" },
  { value: "7,263",  label: "Transformed" },
];

const benefits = [
  { icon: faNewspaper,  text: "Monthly program and event updates" },
  { icon: faBullhorn,   text: "Youth success stories and highlights" },
  { icon: faBriefcase,  text: "Opportunities: jobs, internships & calls" },
];

const ImpactNewsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* Section label */}
        <div className="text-center mb-12 reveal reveal-up" data-reveal>
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Reports &amp; Updates
          </h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* ── Impact Report ─────────────────────────────────── */}
          <div
            className="relative rounded-3xl overflow-hidden text-white flex flex-col reveal reveal-left"
            data-reveal
            style={{
              backgroundImage: "url('/images/theme-color/SPH Brand Pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay so text remains readable over the pattern */}
            <div className="absolute inset-0 bg-swahilipot-900/80" aria-hidden="true" />

            {/* Decorative glow */}

            <div className="relative z-10 flex flex-col h-full p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-swahilipot-600/15 border border-swahilipot-600/25 text-swahilipot-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest self-start mb-8">
                <FontAwesomeIcon icon={faChartLine} className="text-[10px]" />
                Annual Impact Report 2024
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                A Decade of<br />
                <span className="text-swahilipot-300">Measurable Impact</span>
              </h3>

              <p className="text-white/65 leading-relaxed mb-10 text-sm">
                Our 2024 Annual Impact Report documents ten years of transforming lives through
                technology, arts, and entrepreneurship — the youth we've connected, the communities
                we've strengthened, and the future we're building together.
              </p>

              {/* Stat strip */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl p-4 text-center transition-colors"
                  >
                    <div className="text-xl md:text-2xl font-black text-swahilipot-300 tabular-nums mb-1">
                      {h.value}
                    </div>
                    <div className="text-white/55 text-[11px] leading-tight">{h.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href="/impact"
                  className="inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  <FontAwesomeIcon icon={faChartLine} />
                  View Full Report
                </a>
                <a
                  href="/impact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* ── Newsletter ────────────────────────────────────── */}
          <div
            className="rounded-3xl border border-gray-100 bg-gray-50 flex flex-col reveal reveal-right"
            data-reveal
          >
            <div className="p-10 flex flex-col h-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-swahilipot-100 text-swahilipot-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest self-start mb-8">
                <FontAwesomeIcon icon={faNewspaper} className="text-[10px]" />
                Newsletter
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Stay in the Loop
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Get program updates, youth success stories, event announcements, and opportunities
                delivered straight to your inbox. Join over <strong className="text-gray-700">2,000+</strong> subscribers.
              </p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-swahilipot-100 flex items-center justify-center">
                      <FontAwesomeIcon icon={b.icon} className="text-swahilipot-600 text-xs" />
                    </span>
                    {b.text}
                  </li>
                ))}
              </ul>

              {/* Form / success state */}
              <div className="mt-auto">
                {subscribed ? (
                  <div className="flex items-start gap-4 bg-swahilipot-50 border border-swahilipot-200 rounded-2xl px-6 py-5">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-swahilipot-600 text-2xl mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-bold text-swahilipot-700 mb-0.5">You're subscribed!</p>
                      <p className="text-swahilipot-500 text-sm">
                        Thank you — check your inbox for a welcome email.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe}>
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          required
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-swahilipot-400 focus:border-transparent transition-shadow"
                        />
                      </div>
                      <button
                        type="submit"
                        className="shrink-0 inline-flex items-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                      >
                        Subscribe
                        <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                      </button>
                    </div>
                    <p className="text-gray-400 text-xs mt-3 flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-gray-300" />
                      No spam, ever. Unsubscribe any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactNewsletter;
