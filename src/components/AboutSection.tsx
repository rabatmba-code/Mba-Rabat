import React from 'react';
import { ShieldCheck, BookOpen, Scale, Award, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import { StaticPageType } from './StaticPageView';

interface AboutSectionProps {
  onNavigateAbout: (page: StaticPageType) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateAbout }) => {
  return (
    <section className="my-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs" id="about-vitalpath">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            <span>Our Editorial Mission</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About VitalPath Daily
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Practical wellness guidance and evidence-informed health reporting crafted specifically for American adults over 40.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-slate-900">
              No Exaggerated Claims
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never publish miracle cures, fake doctor endorsements, or sensational weight-loss promises. Our editorial team uses measured, responsible language grounded in scientific literature.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-600/10 text-teal-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-slate-900">
              Peer-Reviewed Evidence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every protocol, nutrient guide, and supplement audit is verified against published PubMed studies, randomized controlled trials, and verified cGMP laboratory standards.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-slate-900">
              Radical Transparency
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We maintain strict separation between editorial evaluations and affiliate partnerships. All commercial relationships are disclosed prominently at the top of every relevant article.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-slate-900">
              Designed for Adults 40+
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Metabolism, sleep architecture, and glucose sensitivity naturally shift over time. Our practical advice is tailored to real-life adult schedules and physiological changes.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => onNavigateAbout('about')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
          >
            <span>Read Our Full Editorial Charter</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigateAbout('contact')}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
          >
            <span>Contact Editorial Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
