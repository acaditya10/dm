import React from 'react';
import { Home, Building2, LayoutGrid, Wrench } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-7 h-7 text-[#1A1815] stroke-[1.2]" />;
      case 'commercial':
        return <Building2 className="w-7 h-7 text-[#1A1815] stroke-[1.2]" />;
      case 'modular':
        return <LayoutGrid className="w-7 h-7 text-[#1A1815] stroke-[1.2]" />;
      case 'renovation':
        return <Wrench className="w-7 h-7 text-[#1A1815] stroke-[1.2]" />;
      default:
        return <Home className="w-7 h-7 text-[#1A1815] stroke-[1.2]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
            Our Services
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial leading-tight">
            Design. Plan. Execute.
          </h2>
          <p className="text-[15px] sm:text-base text-[#615A52] max-w-xl font-sans leading-relaxed">
            From concept to completion, we handle every detail to create spaces that are practical, aesthetic and truly yours.
          </p>
        </div>

        {/* Services Row with Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service)}
              className={`group cursor-pointer transition-all duration-300 hover:bg-[#F5F0E8] ${
                index < SERVICES.length - 1 ? 'lg:border-r lg:border-[#DDD5C8]' : ''
              } ${index === 0 ? '' : 'border-t sm:border-t-0 sm:border-l-0 border-[#DDD5C8]'} p-8 sm:px-8 sm:py-6`}
            >
              {/* Icon */}
              <div className="mb-5">
                {getIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#1A1815] mb-2 font-editorial tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#69625A] leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
