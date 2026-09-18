import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onViewWork }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Full-width background image — full viewport on mobile, 21:9 on desktop */}
      <div className="relative w-full h-dvh sm:h-auto sm:aspect-[21/9] bg-[#EAE3D6]">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85"
          alt="Contemporary interior living space by Designer Mad Mumbai"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Strong white/cream overlay on left half — opaque then fading */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(248,245,239,0.95) 0%, rgba(248,245,239,0.85) 30%, rgba(248,245,239,0.5) 55%, rgba(248,245,239,0) 70%)' }} />

        {/* Content overlaid on image */}
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 sm:pb-0">
            <div className="max-w-[520px]">
              {/* Tagline eyebrow */}
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans mb-3 block">
                Spaces That Feel Like Home
              </span>

              {/* Main Editorial Headline */}
              <h1 className="text-[40px] sm:text-[52px] lg:text-[58px] font-semibold text-[#1A1815] leading-[1.08] tracking-[-0.02em] font-editorial mb-4">
                Homes designed <br />
                to be lived in, <br />
                <span className="italic font-normal font-editorial">not just photographed.</span>
              </h1>

              {/* Subtext */}
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#5F5850] mb-7 font-sans">
                At Designer Mad, we create functional, beautiful and<br className="hidden sm:inline" />
                personalised spaces for modern living.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  id="hero-view-work-btn"
                  onClick={onViewWork}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#1A1815] text-white text-[13px] font-semibold tracking-wide transition-all duration-200 hover:bg-[#34302A] hover:shadow-md active:scale-[0.98] group cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  id="hero-get-quote-btn"
                  onClick={onOpenQuote}
                  className="inline-flex items-center justify-center px-5 py-3 rounded border border-[#C5BBA9] text-[#1A1815] text-[13px] font-medium tracking-wide bg-transparent transition-all duration-200 hover:bg-[#ECE4D6] hover:border-[#BDB2A2] active:scale-[0.98] cursor-pointer"
                >
                  Get a Quote
                </button>
              </div>

              {/* Metrics — below buttons, left-aligned */}
              <div className="flex items-start gap-5 sm:gap-8">
                {/* Metric 1 */}
                <div className="flex flex-col">
                  <span className="text-[28px] sm:text-[32px] font-bold font-editorial text-[#1A1815] tracking-tight leading-none">
                    {BUSINESS_INFO.projectsCompleted}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-medium text-[#6B635A] mt-1 font-sans">
                    Projects Completed
                  </span>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-[#C5BBA9] self-center" />

                {/* Metric 2 */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[28px] sm:text-[32px] font-bold font-editorial text-[#1A1815] tracking-tight leading-none">
                      4.9
                    </span>
                    <Star className="w-4 h-4 fill-[#B89358] text-[#B89358] -mt-0.5" />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-medium text-[#6B635A] mt-1 font-sans">
                    Google Rating ({BUSINESS_INFO.reviewCount})
                  </span>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-[#C5BBA9] self-center" />

                {/* Metric 3 */}
                <div className="flex flex-col">
                  <span className="text-[28px] sm:text-[32px] font-bold font-editorial text-[#1A1815] tracking-tight leading-none">
                    {BUSINESS_INFO.city}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-medium text-[#6B635A] mt-1 font-sans">
                    Based in Sandhurst Road
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote on image — right side, upper area (hidden on mobile) */}
        <div className="hidden sm:block absolute top-[15%] right-10 sm:right-16 max-w-[200px] sm:max-w-[240px]">
          <p className="text-[15px] sm:text-[17px] italic text-[#2A2620] font-editorial leading-snug">
            "Good design<br />makes everyday<br />life better."
          </p>
          <div className="w-10 h-px bg-[#2A2620] mt-4 opacity-50" />
        </div>
      </div>
    </section>
  );
};
