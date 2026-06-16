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
        <Programs />
        <SuccessStories />
        <Partners />
        <ImpactNewsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
