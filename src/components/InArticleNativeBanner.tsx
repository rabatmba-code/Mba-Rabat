import React from 'react';
import { ShieldCheck, Star, ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { getAffiliateOffer, getAffiliateUrl } from '../config/affiliateOffers';

interface InArticleNativeBannerProps {
  offerId?: string;
  onReadReview?: (offerId: string) => void;
  title?: string;
  contextNote?: string;
}

export const InArticleNativeBanner: React.FC<InArticleNativeBannerProps> = ({
  offerId = 'gluco6',
  onReadReview,
  title = "Editor's Top Vetted Protocol",
  contextNote = "Direct-to-consumer clinical grade formulation matching this article's research."
}) => {
  const offer = getAffiliateOffer(offerId);

  if (!offer) return null;

  const destinationUrl = getAffiliateUrl(offer.id);

  return (
    <div 
      id={`in-article-banner-${offer.id}`}
      className="my-8 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-slate-50 border-2 border-emerald-200/80 p-5 sm:p-6 shadow-sm relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

      {/* Header Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-emerald-100">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full shadow-2xs">
            <Sparkles className="w-3 h-3 text-amber-300" />
            {title}
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline">
            {contextNote}
          </span>
        </div>

        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{offer.rating} / 5.0</span>
          <span className="text-slate-400 font-normal">({offer.reviewsCount?.toLocaleString() || '12,000'}+ reviews)</span>
        </div>
      </div>

      {/* Content layout */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Product Image */}
        <div className="relative shrink-0 text-center">
          <img
            src={offer.heroImage || 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'}
            alt={offer.name}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl border border-slate-200 shadow-xs"
          />
          <span className="block text-[10px] font-semibold text-emerald-800 bg-emerald-100/90 rounded px-1.5 py-0.5 mt-1.5 border border-emerald-200">
            {offer.guaranteeDays || 60}-Day Guarantee
          </span>
        </div>

        {/* Details & Copy */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <h4 className="font-serif-title text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {offer.name}
          </h4>
          
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {offer.whatIs || offer.tagline}
          </p>

          {/* Benefits Bullet points */}
          {offer.potentialBenefits && offer.potentialBenefits.length > 0 && (
            <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 pt-1">
              {offer.potentialBenefits.slice(0, 2).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
            <a
              id={`in-article-claim-btn-${offer.id}`}
              href={destinationUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
            >
              <span>Check Official Price &amp; Availability</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {onReadReview && (
              <button
                id={`in-article-review-btn-${offer.id}`}
                onClick={() => onReadReview(offer.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                <span>Read Full Review</span>
              </button>
            )}
          </div>

          <p className="text-[10px] text-slate-400 italic pt-1 text-center sm:text-left">
            *Orders are fulfilled securely through the verified ClickBank merchant portal with full refund protection.
          </p>
        </div>
      </div>
    </div>
  );
};
