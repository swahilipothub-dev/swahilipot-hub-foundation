
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team /> {/* Change this to sponsors maybe if the team section won't be necessary */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
