import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.tsx";
import FAQ from "./pages/FAQ.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Evogue Consulting",
  description:
    "Evogue Consulting is a product studio and consulting firm based in Lagos, Nigeria. We design, engineer, and scale digital products for ambitious teams across Africa and globally.",
  url: "https://www.evogue.co",
  logo: "https://www.evogue.co/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  areaServed: ["Africa", "Europe", "Global"],
  serviceType: [
    "Product Design and Engineering",
    "Strategy and Consulting",
    "AI Agents and Automation",
    "Training and Advisory",
  ],
  foundingLocation: "Lagos, Nigeria",
};

const App = () => (
  <HelmetProvider>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
