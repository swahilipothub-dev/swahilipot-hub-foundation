import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
  faCircleCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const contactItems = [
  {
    icon: faLocationDot,
    label: "Visit Us",
    value: "Swahili Cultural Centre, Mombasa Hospital Road, Opp. Governor's Office",
    href: "https://maps.google.com/?q=Swahilipot+Hub+Mombasa",
  },
  {
    icon: faEnvelope,
    label: "Email Us",
    value: "info@swahilipothub.co.ke",
    href: "mailto:info@swahilipothub.co.ke",
  },
  {
    icon: faPhone,
    label: "Call Us",
    value: "+254 11 4635505",
    href: "tel:+254114635505",
  },
];

const subjects = [
  "General enquiry",
  "Programme information",
  "Partnership / Sponsorship",
  "Volunteering",
  "Media &amp; Press",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="text-center mb-14 reveal reveal-up" data-reveal>
          <span className="inline-block text-swahilipot-600 font-semibold uppercase tracking-wider text-xs mb-3">
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-swahilipot-600 mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Whether you want to join a programme, partner with us, or simply say hello — we'd love to hear from you.
          </p>
        </div>

        {/* ── Split card ─────────────────────────────────────────── */}
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row reveal reveal-up" data-reveal>

          {/* ── Left panel — dark brand ──────────────────────────── */}
          <div
            className="relative lg:w-[42%] flex-shrink-0 flex flex-col justify-between p-10 md:p-12 text-white overflow-hidden"
            style={{
              backgroundImage: "url('/images/theme-color/SPH Brand Pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-swahilipot-950/80" />

            {/* Glow orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-swahilipot-500 rounded-full opacity-15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-amber-400 rounded-full opacity-8 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
                We'd love to hear<br />
                <span className="text-amber-300">from you.</span>
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-10">
                Reach us through any channel below, or fill in the form and we'll get back to you within one business day.
              </p>

              {/* Contact items */}
              <ul className="space-y-6 mb-10">
                {contactItems.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 group-hover:bg-swahilipot-600 flex items-center justify-center transition-colors">
                        <FontAwesomeIcon icon={c.icon} className="text-amber-300 text-sm" />
                      </span>
                      <div>
                        <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-0.5">
                          {c.label}
                        </p>
                        <p className="text-white text-sm font-medium group-hover:text-amber-300 transition-colors leading-snug">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* ── Right panel — form ───────────────────────────────── */}
          <div className="flex-1 bg-white p-10 md:p-12 flex flex-col justify-center">
            {sent ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center h-full py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h4>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-7 text-swahilipot-600 text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Send us a message</h3>
                  <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours.</p>
                </div>

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Jane Mwangi"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-swahilipot-400 focus:border-transparent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-swahilipot-400 focus:border-transparent transition-shadow"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-swahilipot-400 focus:border-transparent transition-shadow appearance-none"
                  >
                    <option value="">Select a topic…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us how we can help…"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-swahilipot-400 focus:border-transparent transition-shadow resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-swahilipot-600 hover:bg-swahilipot-700 active:bg-swahilipot-800 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Your information is kept private and never shared with third parties.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
