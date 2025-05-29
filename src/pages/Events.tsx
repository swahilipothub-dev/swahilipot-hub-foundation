import HeroSection from "@/components/Events/Hero";
import AllEvents from "@/components/Events/All";
import Host from "@/components/Events/Host";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AllEvents />
            <Host />
            <Footer />

        </div>

    )
};
export default Events;