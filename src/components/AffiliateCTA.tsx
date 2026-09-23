import React from 'react';
import { ExternalLink, BookOpen, ShieldCheck } from 'lucide-react';
import { getAffiliateOffer, getAffiliateUrl } from '../config/affiliateOffers';

interface AffiliateCTAProps {
  offerId?: string;
  customHeadline?: string;
  customButtonText?: string;
  variant?: 'card' | 'inline' | 'compact';
  onReadReview?: (offerId: string) => void;
}

export const AffiliateCTA: React.FC<AffiliateCTAProps> = ({
  offerId = 'gluco6',
  customHeadline = 'Interested in learning more?',
  customButtonText = 'View Official Product Information',
  variant = 'card',
  onReadReview,
}) => {
  const offer = getAffiliateOffer(offerId);

  if (!offer) {
    return null;
  }

  const destinationUrl = getAffiliateUrl(offer.id);

  if (variant === 'inline' || variant === 'compact') {
    return (
      <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50/60 to-slate-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="text-center sm:text-left flex-1 min-w-0">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <p className="font-bold text-slate-900 text-sm">
              {customHeadline}
            </p>
          </div>
          <p className="text-xs text-slate-600">
            {offer.name} — <span className="font-medium text-emerald-800">{offer.tagline}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-1.5 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              {offer.guaranteeDays}-Day 100% Money-Back Guarantee
            </span>
            <span>•</span>
            <span>Direct Manufacturer Stock</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
          {onReadReview && (
            <button
              onClick={() => onReadReview(offer.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Read Review</span>
            </button>
          )}
          <a
            href={destinationUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-98"
            id={`affiliate-cta-btn-${offer.id}`}
          >
            <span>{customButtonText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 rounded-2xl p-6 sm:p-8 border-2 border-emerald-600/30 shadow-md" id={`affiliate-cta-box-${offer.id}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-950">
            Editor's Choice Protocol • {offer.category}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600">
          {offer.rating && (
            <span className="font-bold text-amber-700 flex items-center gap-1">
              ★ {offer.rating.toFixed(1)}/5.0
            </span>
          )}
          <div className="flex items-center gap-1 text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{offer.guaranteeDays}-Day 100% Risk-Free Guarantee</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5 mb-5">
        {offer.heroImage && (
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-white shadow-xs">
            <img
              src={offer.heroImage}
              alt={offer.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-1 right-1 bg-emerald-600/90 text-white font-bold text-[9px] px-1.5 py-0.5 rounded shadow-xs">
              Verified
            </span>
          </div>
        )}

        <div className="space-y-2.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-lg sm:text-2xl font-bold font-serif-title text-slate-900 leading-snug">
              {customHeadline}
            </h4>
            {offer.badge && (
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-200">
                {offer.badge}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {offer.whatIs}
          </p>
          
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-1 text-xs text-slate-700">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              ✓ Direct Manufacturer Stock
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              ✓ cGMP Certified Facility
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              ✓ Secure 256-Bit SSL Checkout
            </span>
          </div>
        </div>
      </div>

      {offer.keyIngredients && offer.keyIngredients.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs text-slate-500 font-semibold mr-1">Key Botanical Co-Factors:</span>
          {offer.keyIngredients.slice(0, 4).map((ing, i) => (
            <span key={i} className="text-xs bg-white text-slate-700 border border-slate-200/80 px-2.5 py-0.5 rounded-md font-medium shadow-3xs">
              {ing.name}
            </span>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-slate-500 leading-relaxed text-center sm:text-left max-w-md">
          <strong className="text-slate-700 font-semibold block sm:inline">Affiliate Transparency: </strong>
          VitalPath Daily may earn a commission when you order through our verified merchant links, at no added cost to you. Orders are backed by an official {offer.guaranteeDays || 60}-day unconditional money-back guarantee.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
          {onReadReview && (
            <button
              onClick={() => onReadReview(offer.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>Read Full Review</span>
            </button>
          )}

          <a
            href={destinationUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-98 cursor-pointer whitespace-nowrap"
            id={`affiliate-cta-view-btn-${offer.id}`}
          >
            <span>{customButtonText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
