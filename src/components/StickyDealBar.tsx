import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ChevronUp, 
  ChevronDown, 
  X, 
  ExternalLink,
  Flame,
  Star
} from 'lucide-react';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface StickyDealBarProps {
  activeOffer: ClickBankOffer;
  affiliateSettings: AffiliateSettings;
  onOpenReview?: (offer: ClickBankOffer) => void;
}

export const StickyDealBar: React.FC<StickyDealBarProps> = ({
  activeOffer,
  affiliateSettings,
  onOpenReview
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  useEffect(() => {
    // Show sticky deal bar after 2.5 seconds or after user scrolls 300px
    const handleScroll = () => {
      if (window.scrollY > 250 && !isClosed) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 2500);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  if (!affiliateSettings.enableStickyBanner || isClosed || !isVisible || !activeOffer) {
    return null;
  }

  const hoplinkUrl = buildHoplink(activeOffer, affiliateSettings);

  if (isMinimized) {
    return (
      <div 
        id="sticky-deal-bar-minimized"
        className="fixed bottom-4 right-4 z-40 animate-bounce-subtle"
      >
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-full shadow-xl border border-emerald-500/50 transition-all text-xs"
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Unlock {activeOffer.name.split(' ')[0]} Deal (Save 60%)</span>
          <ChevronUp className="w-4 h-4 text-emerald-400" />
        </button>
      </div>
    );
  }

  return (
    <div 
      id="sticky-deal-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-emerald-600 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left: Product Media + Badges */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative shrink-0">
            <img 
              src={activeOffer.heroImage} 
              alt={activeOffer.name} 
              className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-xl border border-slate-200 shadow-xs" 
            />
            <span className="absolute -top-1.5 -left-1.5 bg-rose-600 text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded-full shadow-xs">
              60% OFF
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ★ Editor's Top Pick
              </span>
              <div className="flex items-center text-amber-500 text-[11px] font-semibold">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline mr-0.5" />
                <span>{activeOffer.rating} ({activeOffer.reviewsCount.toLocaleString()}+ verified reviews)</span>
              </div>
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
              {activeOffer.name}
            </h4>

            <p className="hidden md:block text-[11px] text-slate-500 truncate">
              {activeOffer.tagline}
            </p>
          </div>
        </div>

        {/* Right: Guarantee & Direct CTA Buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto shrink-0">
          <div className="hidden lg:flex flex-col items-end text-right pr-2">
            <span className="text-[10px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600 inline" />
              {activeOffer.guaranteeDays}-Day 100% Refund Protection
            </span>
            <span className="text-xs font-extrabold text-emerald-700">
              Starting at ${activeOffer.bundlePrice || activeOffer.startingPrice}/bottle
            </span>
          </div>

          {onOpenReview && (
            <button
              id="sticky-read-review-btn"
              onClick={() => onOpenReview(activeOffer)}
              className="hidden sm:inline-flex text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Read Review
            </button>
          )}

          <a
            id="sticky-claim-deal-btn"
            href={hoplinkUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98"
          >
            <span>Claim Discount Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Minimize / Close controls */}
          <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
            <button
              id="minimize-sticky-bar-btn"
              onClick={() => setIsMinimized(true)}
              aria-label="Minimize deal bar"
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
              title="Minimize"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              id="close-sticky-bar-btn"
              onClick={() => setIsClosed(true)}
              aria-label="Close deal bar"
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
