import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faHandHoldingHeart,
  faLightbulb,
  faPhone,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

/* Replace this with the actual YouTube video URL */
const YOUTUBE_URL = "https://www.youtube.com/watch?v=bscypssE8Ms";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Image collage ── */}
          <div className="relative" style={{ height: "520px" }}>

            {/* Single dot — very top left */}
            <div className="absolute top-0 left-6 w-2.5 h-2.5 rounded-full bg-swahilipot-600 z-10" />

            {/* Squiggly line — top right */}
            <div className="absolute top-2 right-4 z-10">
              <svg width="100" height="30" viewBox="0 0 100 30" fill="none">
                <path
                  d="M0 15 Q12 0 24 15 Q36 30 48 15 Q60 0 72 15 Q84 30 96 15"
                  stroke="#025997"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Dot grid — bottom left */}
            <div className="absolute bottom-8 left-16 z-0 grid grid-cols-5 gap-2">
              {Array(20).fill(null).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-swahilipot-200" />
              ))}
            </div>

            {/* Dark green sidebar */}
            <div
              className="absolute left-0 z-20 flex items-center justify-center rounded-2xl"
              style={{ top: "60px", bottom: "20px", width: "52px", background: "#025997" }}
            >
              <p
                className="text-white text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                we give{" "}
                <span className="text-swahilipot-100">empowerment</span>{" "}
                to youth
              </p>
            </div>

            {/* Top-left floating image card */}
            <div
              className="absolute z-30 rounded-2xl overflow-hidden shadow-xl reveal reveal-img"
              data-reveal
              style={{
                top: "20px",
                left: "20px",
                width: "220px",
                height: "190px",
                border: "6px solid white",
              }}
            >
              <img
                src="/img/about-1.jpg"
                alt="Youth at Swahilipot"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/img/team-1.jpg";
                }}
              />
            </div>

            {/* Main large image */}
            <div
              className="absolute z-10 rounded-2xl overflow-hidden shadow-2xl reveal reveal-img"
              data-reveal
              style={{
                top: "80px",
                left: "72px",
                right: "0px",
                bottom: "60px",
              }}
            >
              <img
                src="/img/communityspace.jpg"
                alt="Swahilipot community space"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(40%) brightness(0.85)" }}
              />

              {/* Play button — yellow circle */}
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute z-20 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                style={{
                  top: "50%",
                  left: "42%",
                  transform: "translate(-50%, -50%)",
                  width: "64px",
                  height: "64px",
                  background: "#025997",
                  border: "3px dashed rgba(2,89,151,0.5)",
                  boxShadow: "0 0 0 8px rgba(2,89,151,0.2)",
                }}
              >
                <FontAwesomeIcon icon={faPlay} className="text-white text-lg ml-1" />
              </a>
            </div>

            {/* Bottom-right floating image card */}
            <div
              className="absolute z-30 rounded-2xl overflow-hidden shadow-xl reveal reveal-img"
              data-reveal
              style={{
                bottom: "0px",
                right: "0px",
                width: "210px",
                height: "175px",
                border: "6px solid white",
              }}
            >
              <img
                src="/img/about-2.jpg"
                alt="Youth program"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/img/team-2.jpg";
                }}
              />
            </div>

            {/* Empty placeholder card — bottom left (like in screenshot) */}
            <div
              className="absolute z-20 rounded-2xl reveal reveal-up"
              data-reveal
              style={{
                bottom: "0px",
                left: "72px",
                width: "140px",
                height: "100px",
                border: "3px solid #e5e7eb",
                background: "white",
              }}
            />
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="reveal reveal-right" data-reveal>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 reveal reveal-left" data-reveal>
              <FontAwesomeIcon icon={faHandHoldingHeart} className="text-swahilipot-600 text-lg" />
              <span className="text-swahilipot-700 font-semibold italic text-sm tracking-wide">
                About Swahilipot Hub Foundation
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5 reveal reveal-left" data-reveal>
              Helping Each Other Can Make{" "}
              <span className="text-swahilipot-600">Youth</span> Better
            </h2>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-7 reveal reveal-right" data-reveal>
              Volunteering and collaboration offer opportunities to develop new skills
              and gain valuable experience. This can include leadership, communication,
              project management, and teamwork skills that shape the next generation.
            </p>

            {/* Two feature boxes */}
            <div className="grid grid-cols-2 gap-6 mb-7 pb-7 border-b border-gray-100 reveal reveal-up" data-reveal>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-swahilipot-100 border border-swahilipot-200">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="text-xl text-swahilipot-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Start Helping Them</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Raising awareness about the youth empowerment mission and cause.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-swahilipot-100 border border-swahilipot-200">
                  <FontAwesomeIcon icon={faLightbulb} className="text-xl text-swahilipot-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Build Communities</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Raising awareness about the charity's mission and broader cause.
                  </p>
                </div>
              </div>
            </div>

            {/* Checkmarks */}
            <ul className="space-y-3 mb-8">
              {[
                "Founded in 2016 — over 8 years of community impact",
                "Empowering youth through Tech, Arts & Entrepreneurship",
                "Supporting companies develop Corporate Social Responsibility",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#025997" }}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} className="text-white text-xs" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                to="/about"
                className="bg-swahilipot-600 text-white px-9 py-3.5 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
              >
                More About Us
              </Link>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ border: "2px solid #e5e7eb" }}
                >
                  <FontAwesomeIcon icon={faPhone} className="text-swahilipot-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 leading-none mb-0.5">Phone</p>
                  <p className="text-sm font-bold text-gray-900">+254 11 4635505</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
