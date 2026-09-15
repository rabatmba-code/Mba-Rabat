import React, { useState } from 'react';
import { 
  X, 
  Flame, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ExternalLink,
  RefreshCw,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { quizQuestions } from '../data/mockData';
import { ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface QuizFunnelProps {
  isOpen: boolean;
  onClose: () => void;
  offers: ClickBankOffer[];
  affiliateSettings: AffiliateSettings;
  onOpenReview: (offer: ClickBankOffer) => void;
}

export const QuizFunnel: React.FC<QuizFunnelProps> = ({
  isOpen,
  onClose,
  offers,
  affiliateSettings,
  onOpenReview,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOfferId, setSelectedOfferId] = useState<string>('metabolism-puravive');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = quizQuestions[currentStep];

  const handleSelectOption = (opt: any) => {
    const updated = { ...answers, [currentStep]: opt.text };
    setAnswers(updated);

    if (opt.offerId) {
      setSelectedOfferId(opt.offerId);
    }

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Analyze simulation
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setIsFinished(true);
      }, 1500);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
    setIsAnalyzing(false);
  };

  const matchedOffer = offers.find(o => o.id === selectedOfferId) || offers[0];
  // Quiz specific tracking ID
  const quizSettings: AffiliateSettings = {
    ...affiliateSettings,
    trackingId: affiliateSettings.trackingId ? `${affiliateSettings.trackingId}_quiz` : 'vpd_quiz'
  };
  const hoplinkUrl = buildHoplink(matchedOffer, quizSettings);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        id="vitality-quiz-modal"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-5 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                VitalPath 60-Second Vitality Assessment
              </h2>
              <p className="text-xs text-slate-300">
                Personalized protocol matching based on current metabolic signaling.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!isFinished && !isAnalyzing && (
          <div className="w-full bg-slate-100 h-1.5">
            <div 
              className="bg-emerald-600 h-1.5 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {isAnalyzing ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto"></div>
              <h3 className="font-serif-title text-xl font-bold text-slate-900">
                Analyzing Your Metabolic Responses...
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Comparing your lifestyle profile against our clinical database to identify your highest-efficiency biological protocol.
              </p>
            </div>
          ) : isFinished ? (
            <div className="space-y-6">
              {/* Results Top */}
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Assessment Complete
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-slate-900">
                  Your Matched Protocol Recommendation
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Based on your answers, your cellular profile indicates potential receptor exhaustion in the <strong>{matchedOffer.categoryName}</strong> pathway.
                </p>
              </div>

              {/* Matched Offer Spotlight */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-start gap-4">
                  <img
                    src={matchedOffer.heroImage}
                    alt={matchedOffer.name}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-700 shrink-0"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase">
                      #1 Precision Match
                    </span>
                    <h4 className="font-serif-title text-lg font-bold text-white">
                      {matchedOffer.name}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      {matchedOffer.tagline}
                    </p>
                    <div className="text-amber-300 text-xs font-semibold mt-1">
                      ★ {matchedOffer.rating} / 5.0 Rating • {matchedOffer.guaranteeDays}-Day Guarantee
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Targets root cellular blockages identified in your responses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Backed by 3rd party verified cGMP lab certificates</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="pt-2 space-y-2">
                  <a
                    href={hoplinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                    id="quiz-claim-offer-btn"
                  >
                    <span>View Official VSL Presentation & Exclusive Discount</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenReview(matchedOffer);
                    }}
                    className="w-full text-center text-xs text-slate-400 hover:text-white py-1 underline cursor-pointer"
                  >
                    Read Our Clinical Lab & Ingredient Analysis →
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-1 hover:text-slate-800 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
                <span>Confidential & Free</span>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-800">
                  Question {currentStep + 1} of {quizQuestions.length}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  Takes ~15 seconds
                </span>
              </div>

              <h3 className="font-serif-title text-xl font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>

              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-emerald-950">
                      {opt.text}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
