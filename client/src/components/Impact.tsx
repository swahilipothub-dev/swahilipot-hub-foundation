import CountOnHover from "./CountOnHover";

const stats = [
  { count: 5000, suffix: "+", label: "Youth Impacted" },
  { count: 10, suffix: "+", label: "Community Centers" },
];

const Impact = () => {
  return (
    <section id="impact" className="section-padding relative overflow-hidden theme-bg-light">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-card { animation: slideUp 0.6s ease-out forwards; }
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
      `}</style>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">What We've Achieved</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Impact</h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since our founding, Swahilipot Hub has created measurable change in the lives of youth across East Africa.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card reveal reveal-up bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl font-extrabold text-swahilipot-600 mb-2">
                <CountOnHover target={stat.count} suffix={stat.suffix} />
              </p>
              <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/impact"
            className="inline-flex items-center gap-2 bg-swahilipot-600 text-white hover:bg-swahilipot-700 font-semibold px-8 py-3 rounded transition-colors"
          >
            View Full Impact Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
