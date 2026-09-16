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
      <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-slate-800 text-sm">
            {customHeadline}
          </p>
          <p className="text-xs text-slate-500">
            {offer.name} — {offer.tagline}
          </p>
          <p className="text-[11px] text-slate-500 italic mt-1">
            Disclosure: VitalPath Daily may earn a commission when you purchase through links on this page, at no additional cost to you.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {onReadReview && (
            <button
              onClick={() => onReadReview(offer.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs px-3.5 py-2 rounded-lg border border-slate-300 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Read Review</span>
            </button>
          )}
          <a
            href={destinationUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
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
    <div className="my-8 bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 rounded-2xl p-6 sm:p-8 border-2 border-emerald-600/20 shadow-sm" id={`affiliate-cta-box-${offer.id}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-950">
            Editor's Choice Protocol • {offer.category}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600">
          {offer.rating && (
            <span className="font-semibold text-amber-700 flex items-center gap-1">
              ★ {offer.rating.toFixed(1)}/5.0
            </span>
          )}
          <div className="flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{offer.guaranteeDays}-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5 mb-5">
        {offer.heroImage && (
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-white shadow-2xs">
            <img
              src={offer.heroImage}
              alt={offer.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-lg sm:text-xl font-bold font-serif-title text-slate-900 leading-snug">
              {customHeadline}
            </h4>
            {offer.badge && (
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                {offer.badge}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {offer.whatIs}
          </p>
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
          VitalPath Daily may earn a commission when you order through our verified merchant links, at no added cost to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
          {onReadReview && (
            <button
              onClick={() => onReadReview(offer.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Read Full Review</span>
            </button>
          )}

          <a
            href={destinationUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer whitespace-nowrap"
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
