import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/YouthEngagement/Hero";
import CoreObjectives from "@/components/YouthEngagement/CoreObjectives";
import KeyPrograms from "@/components/YouthEngagement/KeyPrograms";
import Impacts from "@/components/YouthEngagement/Impacts";
import SuccessStories from "@/components/YouthEngagement/successStories";
import Join from "@/components/YouthEngagement/Join";


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
