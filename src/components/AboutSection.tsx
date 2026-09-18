import React from 'react';
import { UserCheck, Gem, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo with Offset Backing Card matching reference */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Offset decorative sand/cream backdrop card */}
              <div className="absolute -bottom-5 -left-5 w-full h-full bg-[#E5DDD0] rounded -z-10" />

              {/* Main portrait image */}
              <div className="relative rounded overflow-hidden shadow-xl aspect-[4/5] bg-[#D8CEBE]">
                <img
                  src="/founder-ayazb.jpg"
                  alt={`${BUSINESS_INFO.founder} - Founder of Designer Mad`}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  onError={(e) => {
                    // Fallback to high quality designer portrait if local asset fails
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Content matching reference */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
                About Designer Mad
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1A1815] tracking-tight font-editorial leading-[1.18] mb-6">
              Design is personal. <br />
              <span className="font-editorial">So is our approach.</span>
            </h2>

            {/* Split row: Bio text on left, signature badge on right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-10 pb-8 border-b border-[#E5DDD0]">
              <div className="sm:col-span-8">
                <p className="text-[15px] sm:text-[16px] text-[#5A534B] leading-relaxed font-sans">
                  I'm <strong className="text-[#1A1815] font-semibold">{BUSINESS_INFO.founder}</strong>, and at Designer Mad we believe every space has a story. Our goal is to understand your needs, your style and your budget, and turn them into spaces that truly work for you.
                </p>
                <p className="text-[14px] text-[#6E665D] leading-relaxed font-sans mt-3">
                  With over 8 years of specialized expertise in residential renovations, modular cabinetry, and hotel FF&E consultancy across Mumbai, we manage everything from concept sketches to turnkey handover.
                </p>
              </div>

              {/* Signature block with vertical rule */}
              <div className="sm:col-span-4 sm:pl-6 sm:border-l sm:border-[#E5DDD0] flex flex-col justify-center">
                <span className="text-3xl sm:text-4xl text-[#1A1815] font-signature leading-tight -rotate-2 select-none">
                  Ayazb Chougule
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8C8479] uppercase mt-1">
                  Founder
                </span>
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#1A1815] uppercase font-sans">
                  Designer Mad
                </span>
              </div>
            </div>

            {/* 3 Core Value Items with Icons matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-[#1A1815] stroke-[1.3] shrink-0" />
                <span className="text-[14px] font-medium text-[#1A1815] leading-tight font-sans">
                  Personalised Guidance
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <Gem className="w-6 h-6 text-[#1A1815] stroke-[1.3] shrink-0" />
                <span className="text-[14px] font-medium text-[#1A1815] leading-tight font-sans">
                  Quality & Attention to Detail
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#1A1815] stroke-[1.3] shrink-0" />
                <span className="text-[14px] font-medium text-[#1A1815] leading-tight font-sans">
                  On-Time Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
