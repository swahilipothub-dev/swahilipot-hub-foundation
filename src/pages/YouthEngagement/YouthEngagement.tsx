import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./Hero";
import CoreObjectives from "./CoreObjectives";
import KeyPrograms from "./KeyPrograms";
import Impacts from "./Impacts";
import Join from "./Join";
import SuccessStories from "./successStories";

const YouthEngagement = () => {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CoreObjectives />
        <KeyPrograms />
        <Impacts />
        <SuccessStories />
        <Join />
      </main>
      <Footer />
    </>
  );
};

export default YouthEngagement;
