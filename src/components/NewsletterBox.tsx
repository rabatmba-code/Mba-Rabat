import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface NewsletterBoxProps {
  variant?: 'full' | 'sidebar' | 'compact';
}

export const NewsletterBox: React.FC<NewsletterBoxProps> = ({ variant = 'full' }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  if (variant === 'sidebar') {
    return (
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4" id="newsletter-sidebar-box">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>The VitalPath Dispatch</span>
        </div>
        <div>
          <h4 className="font-serif-title text-lg font-bold text-white leading-snug">
            Weekly Practical Wellness Insights
          </h4>
          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
            Get our latest research-backed healthy aging protocols and product audits delivered every Sunday morning.
          </p>
        </div>

        {subscribed ? (
          <div className="bg-emerald-950/80 border border-emerald-600/50 rounded-xl p-3 text-center space-y-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
            <p className="text-xs font-bold text-white">You are subscribed!</p>
            <p className="text-[11px] text-emerald-300">Check your inbox for our 2026 Welcome Guide.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Join 48,000+ Readers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>No spam. 100% Free. Unsubscribe anytime.</span>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 my-12 border border-slate-800 shadow-xl" id="newsletter-signup">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Weekly Editorial Newsletter</span>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Wellness Guidance Delivered Weekly
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Join 48,000+ American men and women over 40 receiving our weekly digest: clear nutrition tips, blood sugar stability habits, sleep protocols, and unbiased supplement reviews.
          </p>
        </div>

        {subscribed ? (
          <div className="max-w-md mx-auto bg-emerald-950/80 border border-emerald-500/60 rounded-2xl p-6 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Welcome to VitalPath Daily</h3>
            <p className="text-xs text-emerald-200">
              We've dispatched your introductory healthy-aging checklist. Please check your inbox (and spam folder just in case).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 hover:scale-[1.02]"
              id="newsletter-subscribe-btn"
            >
              <span>Subscribe Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            No sponsored spam
          </span>
          <span>•</span>
          <span>Delivered every Sunday at 8 AM EST</span>
          <span>•</span>
          <span>Instant one-click unsubscribe</span>
        </div>
      </div>
    </section>
  );
};
