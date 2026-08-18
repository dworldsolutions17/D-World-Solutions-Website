import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustedBy, MetricsSection } from "@/components/sections/trusted-by";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Industries } from "@/components/sections/industries";
import { CaseStudies } from "@/components/sections/case-studies";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { AboutCompany, TeamSection } from "@/components/sections/about";
import { Testimonials, Awards } from "@/components/sections/testimonials";
import { GlobalReach } from "@/components/sections/global-reach";
import { FAQ } from "@/components/sections/faq";
import { Blog } from "@/components/sections/blog";
import { FinalCTA } from "@/components/sections/final-cta";
import { ContactForm } from "@/components/forms/contact-form";
import { ScrollToTop, WhatsAppButton } from "@/components/ui/floating-actions";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const DigitalAuditPage = lazy(() => import("@/pages/DigitalAuditPage"));

function HomePage() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <MetricsSection />
        <ProblemSection />
        <SolutionSection />
        <Services />
        <CaseStudies />
        <Benefits />
        <HowWeWork />
        <Industries />
        <TechnologyStack />
        <AboutCompany />
        <TeamSection />
        <Testimonials />
        <Awards />
        <GlobalReach />
        <Blog />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/free-digital-audit" element={<DigitalAuditPage />} />
      </Routes>
    </Suspense>
  );
}
