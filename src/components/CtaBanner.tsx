import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-[#E8E2D8] text-[#1A1815]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
          alt="Bright modern interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8E2D8]/95 via-[#E8E2D8]/60 to-[#E8E2D8]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center justify-between">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans mb-2 sm:mb-3 block">
              Let's Build Your Space
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial leading-tight mb-3 sm:mb-4">
              Ready to transform your space?
            </h2>

            <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-[#5F5850] font-sans leading-relaxed max-w-xl">
              Get in touch for a consultation. We'd love to hear about your project.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <button
              id="cta-get-quote-btn"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded bg-white text-[#161412] text-[13px] sm:text-[14px] font-semibold tracking-wide hover:bg-[#F0EBE1] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer group w-full"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 text-[13px] sm:text-[14px]">
              <a
                id="cta-phone-link"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-[#1A1815] hover:text-[#9E7A3E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#9E7A3E]" />
                <span className="tracking-wide font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                id="cta-whatsapp-link"
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1A1815] hover:text-[#9E7A3E] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span className="tracking-wide font-semibold">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
