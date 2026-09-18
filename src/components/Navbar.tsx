import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#E5DDD0]/80 py-3.5'
          : 'bg-[#F8F5EF] border-b border-[#E5DDD0]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo matching reference */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src="/logo.png"
            alt="Designer Mad Logo"
            className="h-10 w-auto"
          />
          <div className="flex flex-col tracking-tight">
            <span className="text-xl sm:text-[22px] font-bold tracking-[0.14em] text-[#1D1B18] font-editorial uppercase">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] text-[#8C8479] uppercase -mt-0.5">
              {BUSINESS_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[14px] font-medium text-[#4A453F] hover:text-[#1D1B18] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1D1B18] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button matching reference */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="nav-get-quote-btn"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1D1B18] text-white text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#322F2A] active:scale-[0.98] shadow-xs cursor-pointer group"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1D1B18] rounded hover:bg-[#EAE4D7] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5EF] border-b border-[#E5DDD0] px-6 py-5 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[16px] font-medium text-[#2E2B27] py-2 border-b border-[#ECE5D8]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#1D1B18] text-white text-[14px] font-medium shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-[#D9D1C3] text-[#2E2B27] text-[13px] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#B28F4F]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
