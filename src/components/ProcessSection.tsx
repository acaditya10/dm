import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onGetStarted: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="process" className="py-16 sm:py-20 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
            How It Works
          </span>
        </div>

        {/* Heading + Get Started */}
        <div className="flex items-end justify-between gap-4 mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial">
            A Simple, Transparent Process
          </h2>

          <button
            id="process-get-started-btn"
            onClick={onGetStarted}
            className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1A1815] hover:text-[#9E7A3E] transition-colors cursor-pointer pb-1"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Steps Row with Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className={`py-6 ${index < PROCESS_STEPS.length - 1 ? 'lg:border-r lg:border-[#DDD5C8]' : ''} ${index === 0 ? '' : 'border-t sm:border-t-0 sm:border-l-0 border-[#DDD5C8]'} lg:px-0 ${index > 0 ? 'lg:pl-8' : ''}`}
            >
              {/* Number */}
              <span className="text-[22px] font-bold font-editorial text-[#1A1815] block mb-1">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-[17px] font-semibold text-[#1A1815] font-editorial mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#69625A] leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
