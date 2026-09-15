import React, { useState } from 'react';
import { Scale, Info, ChevronDown, ChevronUp } from 'lucide-react';

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'card' | 'compact';
  onNavigateDisclosure?: () => void;
}

export const AffiliateDisclosure: React.FC<AffiliateDisclosureProps> = ({
  variant = 'banner',
  onNavigateDisclosure,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (variant === 'compact') {
    return (
      <div className="text-[11px] text-slate-500 bg-slate-50 border border-slate-200/80 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span>
            <strong>Affiliate Disclosure:</strong> We may earn an affiliate commission on purchases made through links on this page.
          </span>
        </span>
        {onNavigateDisclosure && (
          <button
            onClick={onNavigateDisclosure}
            className="text-emerald-700 hover:underline font-semibold shrink-0 cursor-pointer"
          >
            Learn more
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-4 my-6 text-slate-700 text-xs leading-relaxed" id="affiliate-disclosure-box">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <Scale className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-emerald-950 uppercase tracking-wider text-[11px] block">
              Editorial Transparency & Affiliate Disclosure
            </span>
            <p className="text-slate-700 mt-1">
              VitalPath Daily is an independently owned wellness publication. We research, test, and write about products we believe provide genuine value to adults over 40. When you click links on our site and make a purchase, we may receive compensation from the merchant (such as ClickBank) at no additional charge to you.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-emerald-800 hover:text-emerald-950 p-1 shrink-0 cursor-pointer"
          aria-label={isExpanded ? 'Collapse disclosure' : 'Expand full disclosure details'}
        >
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-emerald-200/80 text-[11px] text-slate-600 space-y-1.5">
          <p>
            This financial relationship does not dictate our ratings, ingredient analysis, or editorial verdicts. Our team never accepts compensation in exchange for guaranteed favorable scores. All reviews evaluate FDA-registered facility compliance, ingredient dosages against published clinical literature, and genuine return policies.
          </p>
          {onNavigateDisclosure && (
            <button
              onClick={onNavigateDisclosure}
              className="text-emerald-800 font-semibold underline hover:text-emerald-950 cursor-pointer pt-1 block"
            >
              Read our full FTC Compliance & Compensation Policy →
            </button>
          )}
        </div>
      )}
    </div>
  );
};
