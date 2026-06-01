import LazyImage from "./LazyImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  { id: 1, name: "Mahmoud Noor", role: "Chief Mentor", image: "/img/team/kpr.jpg", social: { twitter: "#", linkedin: "#", facebook: "#" } },
  { id: 2, name: "Atrash Mohammed", role: "Chief Operating Officer", image: "/img/team/atrash.jpg", social: { twitter: "#", linkedin: "#", facebook: "#" } },
  { id: 3, name: "Jacqueline Kiplangat", role: "Executive Associate", image: "/img/team/kiplangat.jpg", social: { twitter: "#", linkedin: "#", facebook: "#" } },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 reveal reveal-up" data-reveal>
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3 reveal reveal-left" data-reveal>
            The People Behind the Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 reveal reveal-left" data-reveal>
            Meet Our Team
          </h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5 reveal reveal-right" data-reveal></div>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-right" data-reveal>
            The dedicated individuals behind Swahilipot Hub Foundation's mission to empower youth across East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group reveal reveal-up" data-reveal>
              <div className="relative overflow-hidden aspect-square reveal-img" data-reveal>
                <LazyImage src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-swahilipot-900/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[
                    { href: member.social.facebook, icon: faFacebook },
                    { href: member.social.twitter, icon: faXTwitter },
                    { href: member.social.linkedin, icon: faLinkedinIn },
                  ].map(({ href, icon }) => (
                    <a key={href} href={href} className="w-9 h-9 bg-white/20 hover:bg-swahilipot-600 rounded-full flex items-center justify-center transition-colors" onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon icon={icon} className="text-white text-sm" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-4 text-center border-t-2 border-swahilipot-600">
                <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                <p className="text-swahilipot-600 text-sm font-medium mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
