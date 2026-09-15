import React from 'react';
import { X, Globe, CheckCircle2, Star, ShieldCheck, ArrowRight, Lightbulb, Zap } from 'lucide-react';
import { domainOptions } from '../data/mockData';

interface DomainStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DomainStrategyModal: React.FC<DomainStrategyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        id="domain-strategy-modal"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Domain Strategy & Brand Analysis
              </h2>
              <p className="text-xs text-slate-400">
                Evaluation of the 3 domain ideas for ClickBank affiliate marketing and advertising scalability.
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Darija Insight Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="text-xs text-emerald-950">
                <h4 className="font-bold text-sm text-emerald-900 mb-1">
                  تحليل الاختيار: VitalPath Daily هو الاختيار رقم 1 بامتياز
                </h4>
                <p className="leading-relaxed">
                  التحليل ديالك دقيق بزاف: ملي كتشري دومين عام بحال <strong>vitalpathdaily.com</strong>، الموقع ديالك كيكون بحال جريدة أو منصة صحية يومية مستقلة. هادشي كيعطيك 3 مميزات كبار:
                  الأولى: فيسبوك وTikTok Ads كيقبلوه بلا مشاكل، الثانية: كتقدر تبيع عروض التخسيس، السكر، المفاصل، والمعدة فنفس الوقت، والثالثة: كيسهل تبني Email List كيثيقو فالمحتوى ديالك.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Comparing The 3 Domain Names
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {domainOptions.map((opt, idx) => {
                const isWinner = opt.verdict === 'Recommended';
                return (
                  <div
                    key={opt.domain}
                    className={`rounded-xl p-4 border relative flex flex-col justify-between transition-all ${
                      isWinner
                        ? 'border-emerald-500 bg-emerald-50/30 ring-2 ring-emerald-500/20 shadow-md'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {isWinner && (
                      <div className="absolute -top-2.5 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs uppercase tracking-wide">
                        ★ #1 Best Choice
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-slate-900 text-sm">
                          {opt.domain}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < Math.floor(opt.authorityScore / 20) ? 'fill-amber-400' : 'text-slate-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-slate-600">
                          {opt.authorityScore}/100
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                        {opt.pros.map((pro, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
                      <strong>Best For:</strong> {opt.trafficSuitability}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Setup Checklist for Launch */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Recommended ClickBank Funnel Structure for VitalPath Daily:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-emerald-700 block mb-1">1. Traffic Source</span>
                <p className="text-slate-600 text-[11px]">Facebook / YouTube / Native ads promoting an informational health angle.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-emerald-700 block mb-1">2. VitalPath Bridge</span>
                <p className="text-slate-600 text-[11px]">Editorial article or Quiz Funnel providing medical proof and high trust.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-emerald-700 block mb-1">3. Lead Capture</span>
                <p className="text-slate-600 text-[11px]">Offers the free 7-Day Protocol PDF to build a lifetime email asset.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-emerald-700 block mb-1">4. ClickBank VSL</span>
                <p className="text-slate-600 text-[11px]">Seamless redirect to the vendor's high-converting video sales letter.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
