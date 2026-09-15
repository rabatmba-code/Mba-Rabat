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
    <div className="my-8 bg-slate-50/90 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs" id={`affiliate-cta-box-${offer.id}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Editorial Spotlight • {offer.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>{offer.guaranteeDays}-Day Return Policy</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h4 className="text-lg sm:text-xl font-bold font-serif-title text-slate-900">
          {customHeadline}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {offer.whatIs}
        </p>
      </div>

      {offer.keyIngredients && offer.keyIngredients.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-500 font-medium mr-1">Noteworthy Co-Factors:</span>
          {offer.keyIngredients.slice(0, 4).map((ing, i) => (
            <span key={i} className="text-xs bg-white text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-md font-medium">
              {ing.name}
            </span>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-slate-500 leading-relaxed text-center sm:text-left max-w-md">
          <strong className="text-slate-700 font-semibold block sm:inline">Disclosure: </strong>
          VitalPath Daily may earn a commission when you purchase through links on this page, at no additional cost to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-colors cursor-pointer whitespace-nowrap"
            id={`affiliate-cta-view-btn-${offer.id}`}
          >
            <span>{customButtonText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
