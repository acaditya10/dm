import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onOpenQuote: () => void;
  onSelectServiceTab?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    { label: 'Residential Interiors', href: '#services' },
    { label: 'Commercial Interiors', href: '#services' },
    { label: 'Modular Furniture', href: '#services' },
    { label: 'Renovation & Makeovers', href: '#services' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#11100E] text-[#B8B1A6] pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top: Brand + Contact */}
        <div className="mb-8 sm:mb-10 lg:mb-14">
          <div className="mb-5 sm:mb-6">
            <span className="text-lg sm:text-xl font-bold tracking-[0.14em] text-white font-editorial uppercase block">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C8479] uppercase block mt-0.5">
              {BUSINESS_INFO.tagline}
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3.5 text-[13px] text-[#A69E92]">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <MapPin className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
              <p className="leading-relaxed">{BUSINESS_INFO.address}</p>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Phone className="w-4 h-4 text-[#B89358] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Mail className="w-4 h-4 text-[#B89358] shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.emailFull}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.emailFull}
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid — 2 cols on mobile */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-14">
          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] sm:text-[14px] font-semibold text-white tracking-wider uppercase mb-3 sm:mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[12px] sm:text-[13.5px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[13px] sm:text-[14px] font-semibold text-white tracking-wider uppercase mb-3 sm:mb-5 font-sans">
              Our Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[12px] sm:text-[13.5px]">
              {servicesList.map((serv) => (
                <li key={serv.label}>
                  <a
                    href={serv.href}
                    onClick={(e) => handleSmoothScroll(e, serv.href)}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {serv.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow Us — full width on mobile */}
        <div className="mb-8 sm:mb-10 lg:mb-0">
          <h4 className="text-[13px] sm:text-[14px] font-semibold text-white tracking-wider uppercase mb-3 sm:mb-5 font-sans">
            Follow Us
          </h4>
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-4 py-2 rounded bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors cursor-pointer"
          >
            Request Consultation
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#80796F]">
          <p>© 2026 Designer Mad. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <p className="font-editorial italic text-[12px] sm:text-[13px] text-[#A69E92]">
              Better Spaces. Brighter Lives.
            </p>
            <span className="text-[#80796F]">|</span>
            <p>
              Designed by{' '}
              <a
                href="https://getvortexlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B89358] hover:text-white transition-colors"
              >
                Vortex Labs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
