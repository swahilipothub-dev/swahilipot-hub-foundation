import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  { icon: faLocationDot, title: "Visit Us", content: "Opp. Governor's Office, Butterfly House, Mombasa, Kenya", href: "https://maps.google.com/?q=Swahilipot+Hub+Mombasa", color: "bg-swahilipot-600" },
  { icon: faEnvelope, title: "Email Us", content: "info@swahilipothub.co.ke", href: "mailto:info@swahilipothub.co.ke", color: "bg-swahilipot-700" },
  { icon: faPhone, title: "Call Us", content: "+254 11 4635505", href: "tel:+254114635505", color: "bg-swahilipot-800" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14 reveal reveal-up" data-reveal>
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3 reveal reveal-left" data-reveal>
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 reveal reveal-left" data-reveal>
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5 reveal reveal-right" data-reveal></div>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-right" data-reveal>
            Have questions about our programs or want to get involved? Reach out to us — we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {contactInfo.map((item) => (
            <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group block reveal reveal-up" data-reveal>
              <div className={`${item.color} p-6 flex items-center justify-center`}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={item.icon} className="text-white text-2xl" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-swahilipot-600 p-10 text-center text-white reveal reveal-up" data-reveal>
          <h3 className="text-2xl font-bold mb-3">Want to partner with us?</h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            We're always looking for organizations, donors, and volunteers who share our mission of empowering youth.
          </p>
          <a href="mailto:info@swahilipothub.co.ke" className="inline-block bg-white text-swahilipot-700 hover:bg-swahilipot-50 font-semibold px-8 py-3 rounded transition-colors">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
