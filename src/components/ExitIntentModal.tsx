import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  Clock,
  Star,
  Award
} from 'lucide-react';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface ExitIntentModalProps {
  activeOffer: ClickBankOffer;
  affiliateSettings: AffiliateSettings;
  onOpenQuiz: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  activeOffer,
  affiliateSettings,
  onOpenQuiz
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);

  useEffect(() => {
    // If exit intent disabled in settings, return
    if (!affiliateSettings.enableExitIntentDiscount) return;

    // Check if previously dismissed in this session
    const previouslyClosed = sessionStorage.getItem('vpd_exit_intent_dismissed');
    if (previouslyClosed === 'true') return;

    // Desktop Exit-Intent trigger: mouse leaves top viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        setHasTriggered(true);
        setIsOpen(true);
        sessionStorage.setItem('vpd_exit_intent_dismissed', 'true');
      }
    };

    // Mobile / Inactivity trigger: 55 seconds of reading
    const timer = setTimeout(() => {
      if (!hasTriggered && sessionStorage.getItem('vpd_exit_intent_dismissed') !== 'true') {
        setHasTriggered(true);
        setIsOpen(true);
        sessionStorage.setItem('vpd_exit_intent_dismissed', 'true');
      }
    }, 55000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered, affiliateSettings.enableExitIntentDiscount]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('vpd_exit_intent_dismissed', 'true');
  };

  const handleQuizClick = () => {
    handleClose();
    onOpenQuiz();
  };

  if (!isOpen || !activeOffer) return null;

  const hoplinkUrl = buildHoplink(activeOffer, affiliateSettings);

  return (
    <div 
      id="exit-intent-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div 
        id="exit-intent-modal-card"
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner Alert */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-6 py-3.5 text-center relative">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Wait! Before You Leave VitalPath Daily</span>
          </div>
          <p className="text-xs text-emerald-100 mt-0.5">
            Your 2026 Reader VIP Discount has been verified and reserved.
          </p>

          <button
            id="close-exit-intent-x"
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative shrink-0">
              <img 
                src={activeOffer.heroImage} 
                alt={activeOffer.name} 
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-2xl border-2 border-emerald-100 shadow-md"
              />
              <span className="absolute -bottom-2 -right-2 bg-rose-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                SAVE 60%
              </span>
            </div>

            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1">
                  {activeOffer.rating} ({activeOffer.reviewsCount.toLocaleString()}+ reviews)
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {activeOffer.name}
              </h3>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {activeOffer.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  {activeOffer.guaranteeDays}-Day 100% Refund
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                  <Award className="w-3 h-3 text-emerald-600" />
                  cGMP Certified
                </span>
              </div>
            </div>
          </div>

          {/* Value Highlights */}
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 space-y-2">
            <p className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              Direct-to-Consumer Reader Benefits Activated:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Up to 60% Multi-Bottle Savings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Free Expedited Domestic Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>2 Free VIP Wellness E-Books</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero Subscription or Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-1">
            <a
              id="exit-modal-claim-btn"
              href={hoplinkUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={handleClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-98"
            >
              <span>Claim Official Discount &amp; Check Availability</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
              <button
                id="exit-modal-quiz-btn"
                onClick={handleQuizClick}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 py-1"
              >
                <span>Not sure? Take our 60-Second Vitality Assessment</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                id="exit-modal-dismiss-btn"
                onClick={handleClose}
                className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors py-1"
              >
                No thanks, I'll pay full retail price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
