import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface TestimonialsSectionProps {
  onViewAllReviews: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onViewAllReviews }) => {
  const featuredReviews = TESTIMONIALS.slice(0, 3);

  return (
    <section id="reviews" className="py-16 sm:py-20 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
            What Clients Say
          </span>
        </div>

        {/* Heading + View All Reviews link */}
        <div className="flex items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial">
            Real People. Happy Spaces.
          </h2>

          <button
            id="view-all-reviews-btn"
            onClick={onViewAllReviews}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1815] hover:text-[#9E7A3E] transition-colors cursor-pointer"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Testimonials Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="p-8 rounded bg-[#FAF8F4] border border-[#E8E0D4] flex flex-col justify-between shadow-2xs hover:border-[#D5CABB] transition-colors"
            >
              <div>
                {/* Quote Icon */}
                <div className="mb-4 text-[#C2B7A5]">
                  <Quote className="w-7 h-7 rotate-180" />
                </div>

                {/* Review Text */}
                <p className="text-[15px] sm:text-[15.5px] text-[#423D37] leading-[1.65] font-sans mb-6">
                  "{review.text}"
                </p>
              </div>

              <div>
                {/* 5 Stars matching gold color in reference */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B89358] text-[#B89358]" />
                  ))}
                </div>

                {/* Client Name */}
                <p className="text-[15px] font-semibold text-[#1A1815] font-sans">
                  {review.name}
                </p>
                {review.location && (
                  <p className="text-[12px] text-[#7A7268] font-sans mt-0.5">
                    {review.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
