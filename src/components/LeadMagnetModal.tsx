import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, Download, Sparkles, Mail, Lock } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuiz: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose, onOpenQuiz }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        id="lead-magnet-modal"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full mb-2">
            <Sparkles className="w-3 h-3" />
            Free Digital Guide (Instant Access)
          </span>

          <h3 className="font-serif-title text-2xl font-bold text-white">
            The 7-Day Cellular Vitality & Metabolic Reset
          </h3>
          <p className="text-xs text-emerald-100 mt-1">
            Dr. Vance's clinical protocol for activating mitochondrial brown adipose tissue at home.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif-title text-xl font-bold text-slate-900">
                Check Your Inbox!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                We've dispatched your copy of <strong>The 7-Day Metabolic Reset Blueprint</strong> to <span className="font-mono text-slate-800 font-semibold">{email}</span>.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-left space-y-2">
                <p className="font-bold text-slate-800">What to do while waiting:</p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuiz();
                  }}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer text-center block"
                >
                  Take the 60-Second Vitality Quiz Now →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>The 3 specific polyphenol teas that awaken dormant brown fat cells</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>The 10-second morning hydration ratio to eliminate 3 PM brain fog</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Scientific meal-sequencing checklist (Eat this before carbs)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Where should we send your free PDF?
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your primary email address"
                    className="w-full text-xs sm:text-sm pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden"
                    id="lead-magnet-email-input"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
                id="submit-lead-magnet-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Free Blueprint (PDF)</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Lock className="w-3 h-3" />
                <span>Zero Spam Guarantee. Unsubscribe anytime in 1 click.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
