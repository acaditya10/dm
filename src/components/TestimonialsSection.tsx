import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface TestimonialsSectionProps {
  onViewAllReviews: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onViewAllReviews }) => {
  const featuredReviews = TESTIMONIALS.slice(0, 3);

  return (
    <section id="reviews" className="py-10 sm:py-16 lg:py-20 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="mb-2 sm:mb-3">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
            What Clients Say
          </span>
        </div>

        {/* Heading + View All Reviews */}
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial">
            Real People. Happy Spaces.
          </h2>
          <button
            id="view-all-reviews-btn"
            onClick={onViewAllReviews}
            className="group hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1815] hover:text-[#9E7A3E] transition-colors cursor-pointer"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Testimonials — horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:sm:grid-cols-3 scrollbar-hide">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="shrink-0 w-[280px] sm:w-auto p-5 sm:p-6 lg:p-8 rounded bg-[#FAF8F4] border border-[#E8E0D4] flex flex-col justify-between shadow-2xs hover:border-[#D5CABB] transition-colors"
            >
              <div>
                <div className="mb-3 sm:mb-4 text-[#C2B7A5]">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 rotate-180" />
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#423D37] leading-[1.6] sm:leading-[1.65] font-sans mb-4 sm:mb-6">
                  "{review.text}"
                </p>
              </div>

              <div>
                <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#B89358] text-[#B89358]" />
                  ))}
                </div>
                <p className="text-[14px] sm:text-[15px] font-semibold text-[#1A1815] font-sans">
                  {review.name}
                </p>
                {review.location && (
                  <p className="text-[11px] sm:text-[12px] text-[#7A7268] font-sans mt-0.5">
                    {review.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Reviews */}
        <div className="sm:hidden mt-5 text-center">
          <button
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1815] underline"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
