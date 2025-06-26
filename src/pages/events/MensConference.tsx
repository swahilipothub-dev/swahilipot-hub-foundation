import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramSection from "./ProgramSection";
import SpeakersSection from "./SpeakersSection";

// Pexels images for visual enhancement
const heroImage =
  "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=900&q=80";
const gamesImage =
  "/images/mensConference/games.jpg";
const healingImage =
  "/images/mensConference/yoga.jpg";
const mainEventImage =
  "/images/mensConference/Achaniongee.jpg";

// Speaker avatars from Pexels
const speakers = [
  {
    name: "Abdulrahman Ndegwa",
    title: "Writer, Cyclist, Heritage Department Lead, Swahilipot Hub Foundation",
    img: "/images/mensConference/speakers/abu.jpg"
  },
  {
    name: "Nathan Kikwai",
    title: "Strategic Advisor, Youth2Farm",
    img: "/images/mensConference/speakers/natan.jpeg"
  },
  {
    name: "Mahmoud Noor",
    title: "Chief Mentor, Swahilipot Hub Foundation",
    img: "/images/mensConference/speakers/mentori.jpg"
  },
//   {
//     name: "Maelenga 001",
//     title: "Moderator, Man Talks Panel",
//     img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&w=200&q=80"
//   },
  {
    name: "Kenneth Ambani",
    title: "CECM Public Service Administration, Youth, Gender, Sports, and Social Services",
    img: "/images/mensConference/speakers/ambani.jpeg"
  },
  {
    name: "It's Yusuf",
    title: "Brand and Social Influencer",
    img: "/images/mensConference/speakers/yusuf.jpeg"
  },
  {
    name: "El Khana aka Mr. MAN",
    title: "Business Mogul",
    img: "/images/mensConference/speakers/elkana.jpeg"
  },
  {
    name: "Elvis Otieno aka Beast",
    title: "President Emeritus TUM, SEC Gen. KUSO",
    img: "/images/mensConference/speakers/elvis.jpeg"
  },
  {
    name: "Shazmeen Kassam",
    title: "Counseling Psychologist",
    img: "/images/mensConference/speakers/shazmeen.jpeg"
  },
//   {
//     name: "HE. Abdulswamad Shariff Nassir",
//     title: "Governor, County Government of Mombasa (Special Guest)",
//     img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=200&q=80"
//   }
];

const programSections = [
  {
    image: gamesImage,
    alt: "Games & Interaction",
    title: "Cheza Kama Wewe (Games & Interaction)",
    items: [
      "PlayStation",
      "Ajua",
      "Call of Duty",
      "Pool Table",
      "Bouncing Castle",
      "Trampoline",
      "Photo Exhibition (RYZN)"
    ],
    note: "10:00 AM – 2:00 PM | Outdoor/Games Area | Casual attire encouraged",
    reverse: false
  },
  {
    image: healingImage,
    alt: "Healing Spaces",
    title: "Under the Sleeves (Healing Spaces)",
    items: [
      "1:1 Counselling",
      "Meditation",
      "Yoga",
      "Therapeutic Painting"
    ],
    note: "10:00 AM – 3:00 PM | Mekatilili Hall/Other Safe Corners | Private, intimate setting",
    reverse: true
  },
  {
    image: mainEventImage,
    alt: "Main Event",
    title: "Acha Nionge (Main Event)",
    items: [
      "2:00 PM – 2:10 PM: Opening Remarks by MC",
      "2:10 PM – 2:50 PM: Keynote Address 1: Redefining Masculinity (Abdulrahman Ndegwa)",
      "2:50 PM – 3:20 PM: Entertainment: Live Band Performance",
      "3:20 PM – 4:00 PM: Keynote Address 2: Redefining Masculinity (Nathan Kikwai)",
      "4:00 PM – 4:15 PM: Entertainment: Spoken Word + Dance Performance",
      "4:15 PM – 4:45 PM: Keynote Address 3: Men & Relationships: Balancing the Wheel (Mahmoud Noor)",
      "4:45 PM – 5:00 PM: Entertainment: DJ Set",
      "5:00 PM – 6:00 PM: Panel Discussion: Breaking Barriers; Man Talks (Moderator: Maelenga 001, Panelists: Kenneth Ambani, It's Yusuf, El Khana aka Mr. MAN, Elvis Otieno aka Beast, Shazmeen Kassam)",
      "6:20 PM – 6:50 PM: Entertainment: Musician Performance",
      "6:50 PM – 7:30 PM: Keynote Address 4: Launch Event: Rijali Halisi",
      "7:30 PM – 8:00 PM: Networking & Wind-Down",
      "Special Guest: HE. Abdulswamad Shariff Nassir – Governor, County Government of Mombasa"
    ],
    note: "2:00 PM – 8:00 PM | Main Hall",
    reverse: false
  }
];

const MensConference = () => (
  <>
    <Navbar />
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-swahilipot-50 to-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <img
          src={heroImage}
          alt="Men's Conference Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none -z-10"
        />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue drop-shadow">
              Men's Conference 2025
            </h1>
            <p className="text-xl text-gray-700 mb-2 font-semibold">
              Theme:{" "}
              <span className="font-bold text-swahilipot-600">
                "Men Matter Too"
              </span>
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-gray-700 mb-4 mt-6">
              <span className="bg-white/80 rounded px-4 py-2 shadow text-base font-medium">
                <strong>Date:</strong> Saturday, 28th June 2025
              </span>
              <span className="bg-white/80 rounded px-4 py-2 shadow text-base font-medium">
                <strong>Time:</strong> 10:00 AM – 8:00 PM
              </span>
              <span className="bg-white/80 rounded px-4 py-2 shadow text-base font-medium">
                <strong>Venue:</strong> Swahilipot Hub Foundation
              </span>
              <span className="bg-white/80 rounded px-4 py-2 shadow text-base font-medium">
                <strong>Dress Code:</strong> Smart & Decent
              </span>
              <span className="bg-white/80 rounded px-4 py-2 shadow text-base font-medium">
                <strong>Open to All (18+)</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Sections */}
      <section className="py-16 md:py-24 bg-gray-50">
        {programSections.map((section, idx) => (
          <ProgramSection key={idx} {...section} />
        ))}
      </section>

      {/* Speakers Section */}
      <SpeakersSection speakers={speakers} />
    </main>
    <Footer />
  </>
);

export default MensConference;
