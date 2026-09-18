import React from 'react';
import { X, MapPin, Calendar, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded shadow-2xl border border-[#E5DDD0] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Image Preview */}
        <div className="relative h-64 sm:h-80 w-full bg-[#1C1A18] shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded bg-black/40 backdrop-blur-md text-white hover:bg-black/70 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-5 left-6 right-6">
            <span className="text-xs font-bold tracking-widest text-[#D6BE93] uppercase font-sans">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white font-editorial tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D6BE93]" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-[15px] sm:text-[16px] text-[#4A443D] leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded bg-[#F0EBE1] border border-[#E2D8C7]">
            {project.specs.area && (
              <div>
                <span className="text-[11px] font-semibold text-[#8C8479] uppercase tracking-wider block">
                  Carpet Area
                </span>
                <span className="text-[15px] font-semibold text-[#1A1815]">
                  {project.specs.area}
                </span>
              </div>
            )}
            <div>
              <span className="text-[11px] font-semibold text-[#8C8479] uppercase tracking-wider block">
                Design Style
              </span>
              <span className="text-[15px] font-semibold text-[#1A1815]">
                {project.specs.style}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#8C8479] uppercase tracking-wider block">
                Execution Time
              </span>
              <span className="text-[15px] font-semibold text-[#1A1815]">
                {project.specs.duration}
              </span>
            </div>
          </div>

          {/* Project Highlights */}
          {project.specs.highlights && project.specs.highlights.length > 0 && (
            <div>
              <h4 className="text-[14px] font-bold text-[#1A1815] uppercase tracking-wider mb-3">
                Key Design Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.specs.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-[14px] text-[#554E46]">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7A3E] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-[#E5DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#1A1815] text-white text-[14px] font-semibold hover:bg-[#34302A] transition-colors cursor-pointer"
            >
              <span>Inquire About Similar Space</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-sm text-[#70685F] hover:text-[#1A1815] font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
