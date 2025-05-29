import HeroSection from "@/components/Events/Hero";
import AllEvents from "@/components/Events/All";
import PastEvents from "@/components/Events/PastEvents";
import UpcomingEvents from "@/components/Events/UpcomingEvents";
import Host from "@/components/Events/Host";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AllEvents />

            <UpcomingEvents />
            <PastEvents />
            <Host />
            <Footer />
            
        </div>

    )};
    export default Events;