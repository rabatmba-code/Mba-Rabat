import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, ExternalLink, Sparkles } from 'lucide-react';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface LiveDealToastProps {
  offers: ClickBankOffer[];
  affiliateSettings: AffiliateSettings;
}

interface ActivityEvent {
  buyerLocation: string;
  timeAgo: string;
  offerId: string;
  packageType: string;
}

const SAMPLE_EVENTS: ActivityEvent[] = [
  { buyerLocation: 'Austin, Texas', timeAgo: '4 minutes ago', offerId: 'bloodsugar-gluco6', packageType: '6-Bottle VIP Supply' },
  { buyerLocation: 'Tampa, Florida', timeAgo: '8 minutes ago', offerId: 'joints-genesis', packageType: 'Synovial Fluid 6-Month Protocol' },
  { buyerLocation: 'Scottsdale, Arizona', timeAgo: '12 minutes ago', offerId: 'bloodsugar-defender', packageType: '3-Bottle Sublingual Dropper' },
  { buyerLocation: 'Denver, Colorado', timeAgo: '15 minutes ago', offerId: 'sleep-deep-rest', packageType: 'Sleep Slim Tea 6-Month Supply' },
  { buyerLocation: 'Columbus, Ohio', timeAgo: '19 minutes ago', offerId: 'gut-leanbiome', packageType: '6-Month Delayed-Release Probiotic' },
  { buyerLocation: 'Charlotte, North Carolina', timeAgo: '22 minutes ago', offerId: 'aging-cellular-boost', packageType: 'ProNervium Cellular Longevity Supply' }
];

export const LiveDealToast: React.FC<LiveDealToastProps> = ({ offers, affiliateSettings }) => {
  const [eventIndex, setEventIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Initial delay before first toast
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 8000);

    // Rotate toasts every 24 seconds
    const interval = setInterval(() => {
      if (!isDismissed) {
        setIsVisible(false);
        setTimeout(() => {
          setEventIndex((prev) => (prev + 1) % SAMPLE_EVENTS.length);
          setIsVisible(true);
        }, 1200);
      }
    }, 24000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const currentEvent = SAMPLE_EVENTS[eventIndex];
  const matchedOffer = offers.find(o => o.id === currentEvent.offerId) || offers[0];

  if (!matchedOffer) return null;

  const hoplinkUrl = buildHoplink(matchedOffer, affiliateSettings);

  return (
    <div
      id="live-deal-toast"
      className="fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200/90 text-xs transition-all duration-500 animate-slide-up"
    >
      <button
        onClick={() => setIsDismissed(true)}
        aria-label="Dismiss live alert"
        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="flex items-start gap-3 pr-4">
        <div className="relative shrink-0 mt-0.5">
          <img
            src={matchedOffer.heroImage}
            alt={matchedOffer.name}
            className="w-11 h-11 object-cover rounded-xl border border-slate-200 shadow-2xs"
          />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white animate-ping" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>Verified Reader Order</span>
            <span className="text-slate-400 font-normal ml-auto">
              {currentEvent.timeAgo}
            </span>
          </div>

          <p className="text-slate-800 text-[11px] leading-snug mt-0.5">
            A reader in <strong>{currentEvent.buyerLocation}</strong> ordered <strong>{currentEvent.packageType}</strong>.
          </p>

          <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100">
            <span className="text-[10px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              60-Day Guarantee
            </span>

            <a
              href={hoplinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold text-[11px] hover:underline"
            >
              <span>View Deal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
