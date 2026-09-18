import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { ReviewsModal } from './components/ReviewsModal';
import { Project, ServiceItem } from './types';
import { MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFloating(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedServiceForQuote(serviceName);
    setQuoteModalOpen(true);
  };

  const handleViewWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(null);
    handleOpenQuote(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#1A1815]">
      {/* Top Navbar matching reference */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onViewWork={handleViewWork}
        />

        {/* Section 2: Services ("Design. Plan. Execute.") */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 3: Projects ("Spaces We've Transformed") */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAll={() => {
            const filterAllBtn = document.getElementById('filter-btn-all');
            if (filterAllBtn) filterAllBtn.click();
            handleViewWork();
          }}
        />

        {/* Section 4: About ("Design is personal. So is our approach.") */}
        <AboutSection />

        {/* Section 5: What Clients Say ("Real People. Happy Spaces.") */}
        <TestimonialsSection onViewAllReviews={() => setReviewsModalOpen(true)} />

        {/* Section 6: How It Works ("A Simple, Transparent Process") */}
        <ProcessSection onGetStarted={() => handleOpenQuote()} />

        {/* Section 7: Ready to transform your space? */}
        <CtaBanner onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer matching reference */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating Quick Action for Mumbai Clients (WhatsApp & Call) — hidden on hero */}
      {showFloating && (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          id="floating-whatsapp-btn"
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 text-xs font-semibold"
          title="Chat directly on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          id="floating-call-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center w-11 h-11 rounded bg-[#1A1815] text-white shadow-xl hover:bg-[#322F2A] transition-all hover:scale-105 active:scale-95"
          title={`Call ${BUSINESS_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-[#B89358]" />
        </a>
      </div>
      )}

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => handleOpenQuote(`Inquiry regarding: ${projectName}`)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />

      <ReviewsModal
        isOpen={reviewsModalOpen}
        onClose={() => setReviewsModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}
