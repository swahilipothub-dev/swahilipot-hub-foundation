import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Index from "./pages/Index";
import useScrollReveal from "@/hooks/useScrollReveal";
import SplashScreen from "@/components/SplashScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import FloatingSuggestionIcon from "@/components/FloatingSuggestionIcon";

const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Contact = lazy(() => import("./pages/Contact"));
const Impact = lazy(() => import("./pages/Impact"));
const Donate = lazy(() => import("./pages/Donate"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseManagement = lazy(() => import("./pages/CaseManagement"));
const TourismInnovationLab = lazy(() => import("./pages/TourismInnovationLab"));
const Events = lazy(() => import("./pages/Events"));
const CampusAmbassador = lazy(() => import("./pages/CampusAmbassador"));
const SwahiliTechWomen = lazy(() => import("./pages/SwahiliTechWomen"));
const Communication = lazy(() => import("./pages/Communication"));
const TechEngineering = lazy(() => import("./pages/TechEngineering"));
const Creatives = lazy(() => import("./pages/Creatives"));
const CommunityEntrepreneurship = lazy(() => import("./pages/CommunityEntrepreneurship"));
const EmployerEngagement = lazy(() => import("./pages/EmployerEngagement"));
const Careers = lazy(() => import("./pages/Careers"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const IndustrialAttachments = lazy(() => import("./pages/admin/IndustrialAttachments"));
const Institutions = lazy(() => import("./pages/admin/Institutions"));
const Departments = lazy(() => import("./pages/admin/Departments"));
const Courses = lazy(() => import("./pages/admin/Courses"));
const Users = lazy(() => import("./pages/admin/Users"));
const IndustrialAttachment = lazy(() => import("./pages/IndustrialAttachment"));
const IndustrialAttachmentApply = lazy(() => import("./pages/IndustrialAttachmentApply"));
const IndustrialAttachmentSuccess = lazy(() => import("./pages/IndustrialAttachmentSuccess"));
const Login = lazy(() => import("./pages/Login"));
const AnalyticsDashboard = lazy(() => import("./pages/admin/AnalyticsDashboard"));
const TermsOfReference = lazy(() => import("./pages/TermsOfReference"));
const BoardMembers = lazy(() => import("./pages/BoardMembers"));
const PlacementPartnersTOR = lazy(() => import("@/pages/PlacementPartnersTOR"));
const Heritage = lazy(() => import("./pages/Heritage"));
const V2T = lazy(() => import("./pages/V2T"));
const YouthHubNetwork = lazy(() => import("./pages/YouthHubNetwork"));
const DigitalLiteracy = lazy(() => import("./pages/DigitalLiteracy"));
const ScaleUp = lazy(() => import("./pages/ScaleUp"));

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useScrollReveal();

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }>
            <Route index element={<AnalyticsDashboard />} />
            <Route path="industrial-attachments" element={<IndustrialAttachments />} />
            <Route path="departments" element={<Departments />} />
            <Route path="institutions" element={<Institutions />} />
            <Route path="courses" element={<Courses />} />
            <Route path="users" element={<Users />} />
          </Route>
          {/* Program-specific routes */}
          <Route path="/programs/case-management" element={<CaseManagement />} />
          <Route path="/programs/tourism-innovation-lab" element={<TourismInnovationLab />} />
          <Route path="/events" element={<Events />} />
          <Route path="/programs/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/programs/swahili-tech-women" element={<SwahiliTechWomen />} />
          <Route path="/programs/employer-engagement" element={<EmployerEngagement />} />

          <Route path="/programs/heritage" element={<Heritage />} />
          <Route path="/programs/v2t" element={<V2T />} />
          <Route path="/programs/youth-hub-network" element={<YouthHubNetwork />} />
          <Route path="/programs/digital-literacy" element={<DigitalLiteracy />} />
          <Route path="/programs/scale-up" element={<ScaleUp />} />

          {/* Department routes */}
          <Route path="/department/communication" element={<Communication />} />
          <Route path="/department/tech-engineering" element={<TechEngineering />} />
          <Route path="/department/creatives" element={<Creatives />} />
          <Route path="/department/community-entrepreneurship" element={<CommunityEntrepreneurship />} />

          {/* Career routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/career/:jobId" element={<CareerDetail />} />
          {/* Industrial Attachment routes */}
          <Route path="/industrial-attachment" element={<IndustrialAttachment />} />
          <Route path="/industrial-attachment/apply" element={<IndustrialAttachmentApply />} />
          <Route path="/industrial-attachment/success" element={<IndustrialAttachmentSuccess />} />

          {/* Board Members */}
          <Route path="/board-members" element={<BoardMembers />} />

          {/* terms of reference */}
          <Route path="/terms-of-reference" element={<TermsOfReference />} />
          <Route
            path="/placement-partners-tor"
            element={<PlacementPartnersTOR />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <FloatingSuggestionIcon />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
