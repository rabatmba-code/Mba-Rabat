import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Scale, 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  Filter,
  Sparkles,
  Info
} from 'lucide-react';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface ProductComparisonTableProps {
  offers: ClickBankOffer[];
  affiliateSettings: AffiliateSettings;
  onOpenReview: (offer: ClickBankOffer) => void;
  onOpenAffiliateManager: () => void;
}

export const ProductComparisonTable: React.FC<ProductComparisonTableProps> = ({
  offers,
  affiliateSettings,
  onOpenReview,
  onOpenAffiliateManager,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  const categories = [
    'All',
    'Healthy Blood Sugar',
    'Weight Management',
    'Sleep & Stress',
    'Healthy Aging',
  ];

  const filteredOffers = offers.filter((offer) => {
    if (selectedCategoryFilter === 'All') return true;
    if (selectedCategoryFilter === 'Healthy Blood Sugar') return offer.niche === 'bloodsugar';
    if (selectedCategoryFilter === 'Weight Management') return offer.niche === 'metabolism';
    if (selectedCategoryFilter === 'Sleep & Stress') return offer.niche === 'sleep';
    if (selectedCategoryFilter === 'Healthy Aging') return offer.niche === 'aging' || offer.niche === 'joints' || offer.niche === 'gut';
    return true;
  });

  return (
    <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden" id="comparison-section">
      {/* Table Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                <Scale className="w-3.5 h-3.5" />
                2026 Head-to-Head Evaluation
              </span>
              <span className="text-slate-400 text-xs">
                Audience Target: Adults 40+ USA
              </span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
              Vetted Supplement Comparison & Buyer Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Cross-comparing clinical dosages, refund safety windows, bioavailability formulations, and cGMP compliance across top-tier health protocols.
            </p>
          </div>

          <button
            onClick={onOpenAffiliateManager}
            className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 px-3 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <span>Affiliate Nickname: <strong className="text-emerald-400">{affiliateSettings.clickBankNickname}</strong></span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-6 mt-2 text-xs border-t border-slate-800">
          <span className="text-slate-400 font-medium whitespace-nowrap">Filter Focus:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                selectedCategoryFilter === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop & Tablet Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold text-[11px]">
              <th className="py-4 px-5">Formula & Purpose</th>
              <th className="py-4 px-4">Primary Mechanism</th>
              <th className="py-4 px-4 text-center">Trial Guarantee</th>
              <th className="py-4 px-4 text-center">Package Rate</th>
              <th className="py-4 px-4 text-center">Clinical Assay</th>
              <th className="py-4 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredOffers.map((offer) => {
              const hoplink = buildHoplink(offer, affiliateSettings);
              const isPrimary = affiliateSettings.activePromotedOfferId === offer.id;

              return (
                <tr 
                  key={offer.id} 
                  className={`hover:bg-slate-50/70 transition-colors ${
                    isPrimary ? 'bg-emerald-50/30' : ''
                  }`}
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={offer.heroImage}
                        alt={offer.name}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-slate-900 text-sm">{offer.name}</span>
                          {isPrimary && (
                            <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded uppercase">
                              Active Primary
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-emerald-800 font-semibold block mt-0.5">
                          {offer.categoryName}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-[11px] mt-1">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span className="font-bold">{offer.rating}</span>
                          <span className="text-slate-400">({offer.reviewsCount.toLocaleString()} verified users)</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <p className="text-slate-700 line-clamp-2 max-w-xs font-medium">
                      {offer.tagline}
                    </p>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Targeted for adults 40+ dealing with metabolic slowdown
                    </span>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full text-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {offer.guaranteeDays} Days
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">100% Money-Back</span>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <div className="font-black text-slate-900 text-sm">
                      ${offer.bundlePrice}
                      <span className="text-[10px] font-normal text-slate-500"> / bottle</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold">
                      Save {offer.savingsPercentage}% on 6-Pack
                    </span>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 text-slate-700 font-medium bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                      <Check className="w-3 h-3 text-emerald-600" />
                      USA cGMP Lab
                    </span>
                  </td>

                  <td className="py-4 px-5 text-right space-y-1.5">
                    <a
                      href={hoplink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-colors whitespace-nowrap"
                    >
                      <span>Check VIP Deal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => onOpenReview(offer)}
                      className="block text-right w-full text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      Read Full Review →
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Comparison Bottom Trust Banner */}
      <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Independent testing protocols adhere to US cGMP & FDA-registered facility guidelines. All formulas undergo third-party purity and heavy-metal screening.
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
          Updated September 2026 for US Consumers
        </span>
      </div>
    </section>
  );
};
