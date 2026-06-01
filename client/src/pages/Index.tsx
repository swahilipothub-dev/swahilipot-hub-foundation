import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Anniversary from "@/components/Anniversary";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
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
        <Anniversary />
        <About />
        <Programs />
        <Impact />
        <Team /> {/* Change this to sponsors maybe if the team section won't be necessary */}
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
