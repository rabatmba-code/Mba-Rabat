import React from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Scale, 
  FlaskConical,
  Star
} from 'lucide-react';
import { ClickBankOffer } from '../types';
import { getAffiliateUrl } from '../config/affiliateOffers';

interface EditorsResearchDeskProps {
  activeOffer: ClickBankOffer;
  allOffers: ClickBankOffer[];
  onOpenReview: (offer: ClickBankOffer) => void;
  onSelectCategory?: (cat: string) => void;
}

export const EditorsResearchDesk: React.FC<EditorsResearchDeskProps> = ({
  activeOffer,
  allOffers,
  onOpenReview,
  onSelectCategory,
}) => {
  const hopUrl = getAffiliateUrl(activeOffer?.id || activeOffer?.vendorId || 'gluco6');
  const featuredOffers = allOffers.slice(0, 3);

  return (
    <section className="my-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden" id="editors-research-desk-section">
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Editor's Research Desk • USA Lab Review</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Laboratory Product Review &amp; Ingredient Audit
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Our multidisciplinary team evaluates nutritional formulations against clinical trial literature, label transparency, certified cGMP standards, and genuine refund track records.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Independent Editorial Criteria
            </span>
          </div>
        </div>

        {/* Main Active Formulation Focus Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
          
          {/* Left: Product Overview & Badges */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-emerald-600/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-lg border border-emerald-500/30">
                {activeOffer.badge || '★ Top Reviewed Formula'}
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                {activeOffer.categoryName}
              </span>
              <span className="bg-slate-800 text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-300" />
                {activeOffer.rating} / 5.0 ({activeOffer.reviewsCount?.toLocaleString()} verified audits)
              </span>
            </div>

            <div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white leading-tight">
                {activeOffer.name}
              </h3>
              <p className="text-sm text-emerald-400/90 font-medium mt-1">
                {activeOffer.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeOffer.verdict}
            </p>

            {/* Key Clinical Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Made in USA (cGMP Facility)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Third-Party Purity Verified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{activeOffer.guaranteeDays}-Day 100% Refund Policy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Non-GMO, Plant-Based Extracts</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onOpenReview(activeOffer)}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950/40"
                id="research-desk-read-review-btn"
              >
                <span>Read Full Ingredient Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={hopUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                id="research-desk-official-site-link"
              >
                <span>Check Official Pricing</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right: Key Active Ingredients Panel */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>Key Ingredients In Profile</span>
              </div>

              <div className="space-y-3">
                {activeOffer.keyIngredients.slice(0, 3).map((ing, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs">
                    <p className="font-bold text-white">{ing.name}</p>
                    <p className="text-slate-300 text-[11px] mt-0.5 line-clamp-2">{ing.description}</p>
                    <span className="text-[10px] text-emerald-400 font-medium block mt-1">
                      {ing.clinicalTrialNote}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
              Pricing starts from <span className="text-white font-bold">${activeOffer.bundlePrice || activeOffer.startingPrice}/bottle</span> on multi-bottle packages.
            </div>
          </div>
        </div>

        {/* Quick Review Carousel/Grid of Other Formulations */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-slate-400">
              Other Formulations Under Clinical Review
            </span>
            {onSelectCategory && (
              <button
                onClick={() => onSelectCategory('Product Reviews')}
                className="text-emerald-400 hover:text-emerald-300 underline font-semibold cursor-pointer"
              >
                View All Vetted Formulations →
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredOffers.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenReview(item)}
                className="bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-4 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] text-slate-400 mb-1.5">
                    <span className="truncate">{item.categoryName}</span>
                    <span className="text-amber-400 font-semibold">★ {item.rating}</span>
                  </div>
                  <h4 className="font-serif-title font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[10px]">
                    {item.guaranteeDays}-Day Guarantee
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
                    Read Review <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
