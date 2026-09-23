import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface TopAnnouncementBarProps {
  activeOffer?: ClickBankOffer;
  affiliateSettings: AffiliateSettings;
  onOpenQuiz: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({
  activeOffer,
  affiliateSettings,
  onOpenQuiz
}) => {
  const [isDismissed, setIsDismissed] = useState<boolean>(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('vpd_top_bar_dismissed');
    if (!dismissed) {
      setIsDismissed(false);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem('vpd_top_bar_dismissed', 'true');
  };

  if (isDismissed) return null;

  const targetUrl = activeOffer 
    ? buildHoplink(activeOffer, affiliateSettings) 
    : '#';

  return (
    <div 
      id="top-announcement-bar"
      className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-xs py-2 px-3 sm:px-4 relative z-50 border-b border-emerald-800/40 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-slate-200">
          <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase shrink-0">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })} Audit
          </span>
          <span className="flex items-center gap-1.5 text-xs truncate font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 inline" />
            <span>
              Verified cGMP manufacturer pricing &amp; 60-day guarantees active on top protocols.
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {activeOffer && targetUrl !== '#' ? (
            <a
              id="top-bar-claim-link"
              href={targetUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1 rounded-md text-[11px] transition-colors shadow-xs"
            >
              <span>View {activeOffer.name.split(' ')[0]} Deal</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          ) : (
            <button
              id="top-bar-quiz-btn"
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1 rounded-md text-[11px] transition-colors shadow-xs"
            >
              <span>Take Health Quiz</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}

          <button
            id="dismiss-top-bar-btn"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
            className="text-slate-400 hover:text-white p-1 transition-colors rounded hover:bg-white/10"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
