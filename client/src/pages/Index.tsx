import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Anniversary from "@/components/Anniversary";
import Approach from "@/components/Approach";
import Programs from "@/components/Programs";
import SuccessStories from "@/components/SuccessStories";
import Partners from "@/components/Partners";
import ImpactNewsletter from "@/components/ImpactNewsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useHomePageSEO } from "@/hooks/useSEO";

const Index = () => {
  useHomePageSEO();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="border-t border-slate-200" />
        <Anniversary />
        <Approach />
        <div className="relative">
          <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
            {/* Fixed-in-viewport background while scrolling Programs → Stories of Impact */}
            <div
              className="sticky top-0 h-screen w-full z-0 pointer-events-none"
              aria-hidden
            >
              <img
                src="/img/programs/image4.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
            </div>

            <div className="relative z-10">
              <Programs />
              <SuccessStories />
            </div>
          </div>
        </div>
        <Partners />
        <ImpactNewsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
