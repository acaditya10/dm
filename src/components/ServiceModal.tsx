import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded shadow-2xl border border-[#E5DDD0] overflow-hidden p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#9E7A3E] uppercase block mb-1">
              Service Scope
            </span>
            <h3 className="text-2xl font-semibold text-[#1A1815] font-editorial">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#ECE4D6] text-[#70685F] hover:text-[#1A1815] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-[15px] text-[#554E46] leading-relaxed mb-6 font-sans">
          {service.description}
        </p>

        {service.startingPrice && (
          <div className="p-4 rounded bg-[#EFE8DC] border border-[#DDD3C2] mb-6 flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase text-[#736A5F]">
              Investment Guide
            </span>
            <span className="text-xl font-bold font-editorial text-[#1A1815]">
              Starting from {service.startingPrice}
            </span>
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#1A1815] uppercase tracking-wider mb-3">
            What's Included
          </h4>
          <div className="space-y-2.5">
            {service.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#4E473F]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A3E] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5DDD0] flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#1A1815] text-white text-[14px] font-semibold hover:bg-[#34302A] transition-colors cursor-pointer"
          >
            <span>Request {service.title} Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
