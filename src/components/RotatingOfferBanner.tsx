import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Star, 
  ExternalLink, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Pause, 
  Play, 
  ArrowRight,
  TrendingUp,
  Tag
} from 'lucide-react';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';
import { getAffiliateUrl } from '../config/affiliateOffers';

interface RotatingOfferBannerProps {
  offers: ClickBankOffer[];
  affiliateSettings: AffiliateSettings;
  onOpenReview?: (offer: ClickBankOffer) => void;
  rotationIntervalMs?: number;
}

export const RotatingOfferBanner: React.FC<RotatingOfferBannerProps> = ({
  offers,
  affiliateSettings,
  onOpenReview,
  rotationIntervalMs = 7000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeOffers = offers && offers.length > 0 ? offers : [];
  const currentOffer = activeOffers[currentIndex] || activeOffers[0];

  const handleNext = () => {
    if (activeOffers.length <= 1) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % activeOffers.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    if (activeOffers.length <= 1) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + activeOffers.length) % activeOffers.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handleSelectOffer = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused || isHovered || activeOffers.length <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, rotationIntervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, isHovered, activeOffers.length, rotationIntervalMs]);

  if (!currentOffer) return null;

  // Resolve affiliate destination URL
  const destinationUrl = getAffiliateUrl(currentOffer.id) || buildHoplink(currentOffer, affiliateSettings);

  return (
    <div 
      id="rotating-editorial-offer-banner"
      aria-label="Verified Manufacturer Rotating Deal"
      className="w-full my-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white shadow-xl border border-emerald-500/20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Animated Progress Bar */}
      <div className="w-full bg-slate-800/60 h-1 overflow-hidden">
        <div 
          key={`${currentIndex}-${isPaused || isHovered}`}
          className={`h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 ${
            isPaused || isHovered ? 'w-full opacity-60' : 'animate-progress-grow'
          }`}
          style={{
            animationDuration: `${rotationIntervalMs}ms`,
            animationPlayState: isPaused || isHovered ? 'paused' : 'running'
          }}
        />
      </div>

      {/* Decorative ambient glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Banner Container */}
      <div className="relative p-5 sm:p-7 md:p-8">
        
        {/* Top Header Bar: Status Badge + Live Deal Rotator Indicator + Arrows */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              Verified Direct Deal
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
              {currentOffer.categoryName || 'Evidence-Informed Protocol'}
            </span>
          </div>

          {/* Rotator Controls: Counter, Pause/Play, Prev, Next */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 tracking-wider">
              Deal <strong className="text-white">{currentIndex + 1}</strong> of {activeOffers.length}
            </span>

            <div className="flex items-center bg-white/5 backdrop-blur-xs rounded-xl p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <div className="w-[1px] h-3 bg-white/10 mx-1" />

              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Previous Offer"
                aria-label="Previous deal"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Next Offer"
                aria-label="Next deal"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Card Content with smooth fade */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center transition-all duration-300 ${
            isTransitioning ? 'opacity-30 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          {/* Left Column: Product Image & Badges (4 cols on desktop) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center gap-4 text-center sm:text-left lg:text-center">
            <div className="relative group shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-white/5 p-2 border border-white/15 shadow-2xl relative">
                <img
                  src={currentOffer.heroImage || 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'}
                  alt={currentOffer.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                {/* Savings Pill */}
                {currentOffer.savingsPercentage && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-0.5">
                    <Tag className="w-3 h-3" />
                    Save {currentOffer.savingsPercentage}%
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {currentOffer.guaranteeDays || 60}-Day Empty Bottle Refund
              </span>
              <p className="text-[11px] text-slate-400">
                cGMP Certified · FDA-Registered USA Facility
              </p>
            </div>
          </div>

          {/* Middle Column: Details, Highlights & Ratings (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-3 text-center sm:text-left">
            {/* Tagline / Badge */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                {currentOffer.badge || '★ Top Rated In Its Class'}
              </span>
            </div>

            {/* Offer Name */}
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white tracking-tight leading-tight">
              {currentOffer.name}
            </h3>

            {/* Tagline / Description */}
            <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
              {currentOffer.tagline}
            </p>

            {/* Star Rating & Reviews */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">{currentOffer.rating || 4.9} / 5.0</span>
              <span className="text-xs text-slate-400">
                ({(currentOffer.reviewsCount || 14000).toLocaleString()}+ clinical audits)
              </span>
            </div>

            {/* Bullets / Key Features */}
            {currentOffer.vslBulletPoints && currentOffer.vslBulletPoints.length > 0 && (
              <ul className="space-y-1.5 pt-1 text-xs text-slate-300 text-left">
                {currentOffer.vslBulletPoints.slice(0, 2).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Pricing & Action Buttons (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center gap-3 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10">
            <div className="text-center lg:text-right w-full">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                Official Bundle Pricing
              </span>
              <div className="flex items-baseline justify-center lg:justify-end gap-1.5 mt-0.5">
                <span className="text-xs text-slate-400 line-through">
                  ${(currentOffer.startingPrice || 69) + 30}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  ${currentOffer.bundlePrice || 39}
                </span>
                <span className="text-xs text-slate-300 font-medium">/ bottle</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 block mt-0.5">
                Complimentary US Shipping on Bundles
              </span>
            </div>

            {/* Main CTA Button */}
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-4 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all text-xs sm:text-sm tracking-tight cursor-pointer"
            >
              <span>Check Official Stock</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            {/* Secondary Review Button */}
            {onOpenReview && (
              <button
                type="button"
                onClick={() => onOpenReview(currentOffer)}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-semibold px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer border border-white/10"
              >
                <span>Read Editorial Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Bottom Navigation Dots for direct offer selection */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Featured Editorial Rotator · Automatically cycles daily recommendations</span>
          </div>

          <div className="flex items-center gap-1.5">
            {activeOffers.map((off, index) => {
              const isCurrent = index === currentIndex;
              return (
                <button
                  key={off.id}
                  type="button"
                  onClick={() => handleSelectOffer(index)}
                  className={`transition-all rounded-full cursor-pointer ${
                    isCurrent 
                      ? 'w-6 h-2 bg-emerald-400 shadow-sm shadow-emerald-400/50' 
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to offer ${index + 1}: ${off.name}`}
                  title={`${off.name} (${off.categoryName})`}
                />
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
