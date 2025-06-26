import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import CaseManagement from "./pages/CaseManagement";
import TourismInnovationLab from "./pages/TourismInnovationLab";
import Events from "./pages/Events";
import CampusAmbassador from "./pages/CampusAmbassador";
import SwahiliTechWomen from "./pages/SwahiliTechWomen";
import Communication from "./pages/Communication";
import TechEngineering from "./pages/TechEngineering";
import Creatives from "./pages/Creatives";
import CommunityEntrepreneurship from "./pages/CommunityEntrepreneurship";
import MensConference from "./pages/events/MensConference";
import Team from "./pages/Team";
import Bio from "./pages/Bio";

import EmployerEngagement from "./pages/EmployerEngagement";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import YouthEngagement from "./pages/YouthEngagement";
import MensMentalHealth from "./pages/MensMentalHealth";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/donate" element={<Donate />} />

          {/* Program-specific routes */}
          <Route path="/programs/case-management" element={<CaseManagement />} />
          <Route path="/programs/tourism-innovation-lab" element={<TourismInnovationLab />} />
          <Route path="/events" element={<Events />} />
          <Route path="/programs/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/programs/swahili-tech-women" element={<SwahiliTechWomen />} />
          <Route path="/programs/employer-engagement" element={<EmployerEngagement />} />
          <Route path="/programs/youth-engagement" element={<YouthEngagement />} />

          {/* Department routes */}
          <Route path="/department/communication" element={<Communication />} />
          <Route path="/department/tech-engineering" element={<TechEngineering />} />
          <Route path="/department/creatives" element={<Creatives />} />
          <Route path="/department/community-entrepreneurship" element={<CommunityEntrepreneurship />} />
          
          {/* Event routes */}
          <Route path="/events/mens-conference" element={<MensConference />} />

          {/* Career routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/career/:jobId" element={<CareerDetail />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberName" element={<Bio />} />
          <Route path="/events/mens-mental-health" element={<MensMentalHealth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
