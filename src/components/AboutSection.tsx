import React from 'react';
import { UserCheck, Gem, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-16 lg:py-24 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Founder Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
              <div className="absolute -bottom-4 sm:-bottom-5 -left-4 sm:-left-5 w-full h-full bg-[#E5DDD0] rounded -z-10" />
              <div className="relative rounded overflow-hidden shadow-xl aspect-[4/5] bg-[#D8CEBE]">
                <img
                  src="/founder-ayazb.jpg"
                  alt={`${BUSINESS_INFO.founder} - Founder of Designer Mad`}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <div className="mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
                About Designer Mad
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-semibold text-[#1A1815] tracking-tight font-editorial leading-[1.18] mb-4 sm:mb-6">
              Design is personal. <br className="hidden sm:inline" />
              <span className="font-editorial">So is our approach.</span>
            </h2>

            {/* Bio + Signature */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-start mb-6 sm:mb-10 pb-6 sm:pb-8 border-b border-[#E5DDD0]">
              <div className="sm:col-span-8">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#5A534B] leading-relaxed font-sans">
                  I'm <strong className="text-[#1A1815] font-semibold">{BUSINESS_INFO.founder}</strong>, and at Designer Mad we believe every space has a story. Our goal is to understand your needs, your style and your budget, and turn them into spaces that truly work for you.
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#6E665D] leading-relaxed font-sans mt-2.5 sm:mt-3">
                  With over 8 years of specialized expertise in residential renovations, modular cabinetry, and hotel FF&E consultancy across Mumbai, we manage everything from concept sketches to turnkey handover.
                </p>
              </div>

              <div className="sm:col-span-4 sm:pl-6 sm:border-l sm:border-[#E5DDD0] flex flex-row sm:flex-col justify-between sm:justify-center gap-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1815] font-signature leading-tight -rotate-2 select-none">
                  Ayazb Chougule
                </span>
                <div className="flex flex-col sm:mt-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#8C8479] uppercase">
                    Founder
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#1A1815] uppercase font-sans">
                    Designer Mad
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1815] stroke-[1.3] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-medium text-[#1A1815] leading-tight font-sans">
                  Personalised Guidance
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1815] stroke-[1.3] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-medium text-[#1A1815] leading-tight font-sans">
                  Quality & Attention to Detail
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1815] stroke-[1.3] shrink-0" />
                <span className="text-[13px] sm:text-[14px] font-medium text-[#1A1815] leading-tight font-sans">
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
