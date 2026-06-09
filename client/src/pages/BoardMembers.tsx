import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const members = [
  { name: "Placeholder Name", role: "Board Chairperson",       initials: "BC" },
  { name: "Placeholder Name", role: "Vice Chairperson",        initials: "VC" },
  { name: "Placeholder Name", role: "Board Secretary",         initials: "BS" },
  { name: "Placeholder Name", role: "Treasurer",               initials: "TR" },
  { name: "Placeholder Name", role: "Board Member",            initials: "BM" },
  { name: "Placeholder Name", role: "Board Member",            initials: "BM" },
  { name: "Placeholder Name", role: "Board Member",            initials: "BM" },
  { name: "Placeholder Name", role: "Board Member",            initials: "BM" },
];

const BoardMembers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow theme-bg-pattern-1">

        {/* Banner */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2" />
          <div className="absolute inset-0 bg-swahilipot-950/75" />
          <div className="container-custom relative z-10 text-center text-white">
            <span className="inline-block text-amber-300 font-semibold uppercase tracking-widest text-xs mb-3">
              Leadership
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Board of Directors</h1>
            <div className="w-12 h-1 bg-amber-400 mx-auto mb-4" />
            <p className="text-white/65 max-w-xl mx-auto text-base">
              The dedicated leaders who guide Swahilipot Hub Foundation's vision and strategy.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              {members.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Photo placeholder */}
                  <div className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <span className="text-5xl font-black text-gray-300 select-none">
                        {m.initials}
                      </span>
                    </div>
                    {/* "Photo coming soon" badge */}
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 text-white/80 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                      Photo coming soon
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center border-t-2 border-swahilipot-600">
                    <h3 className="font-bold text-gray-900 text-base">{m.name}</h3>
                    <p className="text-swahilipot-600 text-sm font-medium mt-0.5">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default BoardMembers;
