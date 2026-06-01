const Partners = () => {
  const partners = Array(5).fill(null).map((_, i) => ({
    id: i + 1,
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-white to-swahilipot-50 overflow-hidden">
      <div className="container-custom mb-14 reveal reveal-up" data-reveal>
        <div className="text-center">
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3 reveal reveal-left" data-reveal>
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 reveal reveal-left" data-reveal>
            Trusted By Leading Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-right" data-reveal>
            We collaborate with innovative organizations and institutions committed to youth empowerment and sustainable development.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .carousel-track {
            animation: scrollLeft 30s linear infinite;
          }
          
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="carousel-track flex gap-6 md:gap-8 w-max">
          {/* First set of partners */}
          {partners.map((partner) => (
            <div
              key={`set1-${partner.id}`}
              className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-swahilipot-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-swahilipot-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-swahilipot-200 transition-colors">
                  <svg className="w-10 h-10 text-swahilipot-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-500">Partner {partner.id}</p>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <div
              key={`set2-${partner.id}`}
              className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-swahilipot-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-swahilipot-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-swahilipot-200 transition-colors">
                  <svg className="w-10 h-10 text-swahilipot-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-500">Partner {partner.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info text */}
      <div className="container-custom mt-12 text-center">
        <p className="text-gray-600 text-sm">
          Interested in partnering with us?{" "}
          <a
            href="mailto:partnership@swahilipothub.co.ke"
            className="text-swahilipot-600 font-semibold hover:underline"
          >
            Get in touch with our partnerships team
          </a>
        </p>
      </div>
    </section>
  );
};

export default Partners;
