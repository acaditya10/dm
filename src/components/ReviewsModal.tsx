import React from 'react';
import { X, Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded shadow-2xl border border-[#E5DDD0] overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#E5DDD0] flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#9E7A3E] uppercase block">
              Client Feedback
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold text-[#1A1815] font-editorial">
                Verified Reviews
              </h3>
              <span className="text-xs px-2 py-0.5 rounded bg-[#EFE8DC] font-semibold text-[#665D52]">
                4.9 ★ (39 Reviews)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-[#F2ECE1] text-[#69625A] hover:text-[#1A1815] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reviews List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 divide-y divide-[#EAE2D5]">
          {TESTIMONIALS.map((review, idx) => (
            <div key={review.id} className={idx > 0 ? 'pt-4' : ''}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B89358] text-[#B89358]" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Project</span>
                </span>
              </div>

              <p className="text-[14.5px] text-[#3D3832] leading-relaxed italic font-sans mb-2">
                "{review.text}"
              </p>

              <div className="text-[13px] font-semibold text-[#1A1815]">
                {review.name}
                {review.location && (
                  <span className="text-[#847B70] font-normal"> — {review.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E5DDD0] bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-[#70685F]">
            Want to share your experience or start a project?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-5 py-2.5 rounded bg-[#1A1815] text-white text-xs font-semibold hover:bg-[#34302A] transition-colors cursor-pointer"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
