import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Phone, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    spaceType: preselectedService || 'Full Home (2BHK / 3BHK)',
    location: 'Mumbai - South / Central',
    budget: '₹5L - ₹15L',
    timeline: 'Within 1-2 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const spaceTypes = [
    'Full Home (1BHK)',
    'Full Home (2BHK / 3BHK)',
    'Modular Kitchen',
    'Luxury Bedroom & Wardrobe',
    'Bathroom Renovation',
    'Commercial / Office Space',
    'Other / Custom Renovation',
  ];

  const budgetOptions = [
    '₹1L - ₹3L (Modular / Single Room)',
    '₹3L - ₹6L (Kitchen / Makeover)',
    '₹6L - ₹15L (Full Home Renovation)',
    '₹15L+ (Bespoke Luxury)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hi Designer Mad (Ayazb Chougule),\nI would like an interior design quote:\n• Name: ${formData.name || 'Interested Client'}\n• Phone: ${formData.phone || 'N/A'}\n• Project Type: ${formData.spaceType}\n• Budget Range: ${formData.budget}\n• Location: ${formData.location}\n• Details: ${formData.message || 'Looking for site visit & design consultation.'}`
    );
    window.open(`https://wa.me/919137389866?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] rounded shadow-2xl border border-[#E5DDD0] overflow-hidden">
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-[#E5DDD0] flex items-center justify-between bg-white">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#9E7A3E] uppercase block">
              Direct Studio Consultation
            </span>
            <h3 className="text-2xl font-semibold text-[#1A1815] font-editorial">
              Get an Estimate & Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-[#F2ECE1] text-[#69625A] hover:text-[#1A1815] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#E8F5E9] text-[#2E7D32] rounded flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-semibold text-[#1A1815] font-editorial mb-2">
                Thank You, {formData.name || 'there'}!
              </h4>
              <p className="text-[15px] text-[#5C554E] max-w-md mx-auto mb-6">
                Your consultation request has been received. Ayazb Chougule and the Designer Mad team will review your requirements and reach out within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#25D366] text-white text-[14px] font-semibold hover:bg-[#20bd5a] transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-[#1A1815] text-white text-[14px] font-medium hover:bg-[#34302A] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#524B43] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded border border-[#DCD4C7] bg-white text-[#1A1815] text-sm focus:outline-none focus:border-[#9E7A3E] focus:ring-1 focus:ring-[#9E7A3E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#524B43] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98200 12345"
                    className="w-full px-4 py-2.5 rounded border border-[#DCD4C7] bg-white text-[#1A1815] text-sm focus:outline-none focus:border-[#9E7A3E] focus:ring-1 focus:ring-[#9E7A3E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#524B43] uppercase tracking-wider mb-1.5">
                    Project Space Type
                  </label>
                  <select
                    value={formData.spaceType}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-[#DCD4C7] bg-white text-[#1A1815] text-sm focus:outline-none focus:border-[#9E7A3E]"
                  >
                    {spaceTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#524B43] uppercase tracking-wider mb-1.5">
                    Expected Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-[#DCD4C7] bg-white text-[#1A1815] text-sm focus:outline-none focus:border-[#9E7A3E]"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#524B43] uppercase tracking-wider mb-1.5">
                  Property Location (Area in Mumbai)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Sandhurst Road / Bandra / Andheri / Worli"
                  className="w-full px-4 py-2.5 rounded border border-[#DCD4C7] bg-white text-[#1A1815] text-sm focus:outline-none focus:border-[#9E7A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#524B43] uppercase tracking-wider mb-1.5">
                  Brief Project Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your space, timeline, or any specific design ideas you love..."
                  className="w-full px-4 py-2.5 rounded border border-[#DCD4C7] bg-white text-[#1A1815] text-sm focus:outline-none focus:border-[#9E7A3E]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#1A1815] text-white text-[14px] font-semibold hover:bg-[#322F2A] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded border border-[#25D366] text-[#1E7E34] bg-[#25D366]/10 text-[14px] font-semibold hover:bg-[#25D366]/20 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Fast WhatsApp Chat</span>
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-[#8A8277]">
                <span>Or call directly: </span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#1A1815] hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
