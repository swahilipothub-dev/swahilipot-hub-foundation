interface Speaker {
  name: string;
  title: string;
  img: string;
}

interface SpeakersSectionProps {
  speakers: Speaker[];
}

const SpeakersSection = ({ speakers }: SpeakersSectionProps) => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container-custom">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient-blue">Speakers & Panelists</h2>
        <p className="text-gray-700">Meet the thought leaders, mentors, and special guests for Men's Conference 2025.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-swahilipot-50 rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-swahilipot-200 mb-3 shadow-md"
            />
            <div className="text-center">
              <h3 className="font-semibold text-swahilipot-700 text-lg mb-1">{speaker.name}</h3>
              <p className="text-xs text-gray-600 leading-tight">{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpeakersSection;
