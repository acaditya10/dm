import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onGetStarted: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="process" className="py-10 sm:py-16 lg:py-20 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="mb-2 sm:mb-3">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
            How It Works
          </span>
        </div>

        {/* Heading + Get Started */}
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial">
            A Simple, Transparent Process
          </h2>

          <button
            id="process-get-started-btn"
            onClick={onGetStarted}
            className="group hidden sm:inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1A1815] hover:text-[#9E7A3E] transition-colors cursor-pointer pb-1"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Steps — 2x2 grid on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 sm:gap-x-6 lg:gap-0">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className={`${
                index < PROCESS_STEPS.length - 1 ? 'lg:border-r lg:border-[#DDD5C8]' : ''
              } ${
                index % 2 === 1 ? 'sm:border-l sm:border-[#DDD5C8]' : ''
              } lg:px-0 ${index > 0 ? 'lg:pl-8' : ''} ${index % 2 === 1 ? 'lg:pl-8' : index > 0 ? 'lg:pl-8' : ''}`}
            >
              <span className="text-xl sm:text-[22px] font-bold font-editorial text-[#1A1815] block mb-1">
                {step.number}
              </span>
              <h3 className="text-[14px] sm:text-[15px] lg:text-[17px] font-semibold text-[#1A1815] font-editorial mb-1.5 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#69625A] leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Get Started */}
        <div className="sm:hidden mt-6 text-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1A1815] underline"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
