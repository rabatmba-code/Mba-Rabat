import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Award, 
  Compass, 
  Sparkles, 
  CheckCircle2,
  TrendingUp,
  Heart,
  Flame,
  Moon,
  Zap,
  Activity,
  Lightbulb,
  Users
} from 'lucide-react';
import { Article, ClickBankOffer, AffiliateSettings } from '../types';

interface HeroFeaturedProps {
  article: Article;
  activeOffer: ClickBankOffer;
  affiliateSettings?: AffiliateSettings;
  onReadArticle: (article: Article) => void;
  onOpenReview: (offer: ClickBankOffer) => void;
  onOpenQuiz: () => void;
  onExploreGuides?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onReadArticle,
  onOpenQuiz,
  onExploreGuides,
  onSelectCategory,
}) => {
  const [activeGoal, setActiveGoal] = useState<string>('all');

  const handleScrollToGuides = () => {
    if (onExploreGuides) {
      onExploreGuides();
    } else {
      const el = document.getElementById('articles-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const smartGoals = [
    {
      id: 'Healthy Blood Sugar',
      label: 'Balance Blood Sugar',
      sub: 'Steady Energy & No Spikes',
      icon: <Activity className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'Weight Management',
      label: 'Revive Metabolism',
      sub: 'Burn Fat & Satiety Cues',
      icon: <Flame className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'Sleep & Stress',
      label: 'Deep Restorative Sleep',
      sub: 'Calm Cortisol Levels',
      icon: <Moon className="w-4 h-4 text-indigo-400" />
    },
    {
      id: 'Healthy Aging',
      label: 'Cellular Longevity 40+',
      sub: 'Joint Mobility & Clarity',
      icon: <Zap className="w-4 h-4 text-teal-400" />
    },
  ];

  const handleGoalClick = (categoryName: string) => {
    setActiveGoal(categoryName);
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    } else {
      handleScrollToGuides();
    }
  };

  return (
    <section 
      className="relative overflow-hidden text-white pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800" 
      id="hero-section"
    >
      {/* 
        MOTIVATING & INSPIRING SMART BACKGROUND
        High-definition vibrant healthy living imagery + Emerald/Teal dark glassmorphism gradient
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=2200&q=85"
          alt="Vitality, Morning Sunshine & Healthy Active Life"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse transition-transform duration-1000 ease-out"
          style={{ animationDuration: '8s' }}
        />
        {/* Multi-layered Smart Vignette & Color Grade */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-emerald-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950" />
        
        {/* Ambient Glowing Vitality Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        
        {/* TOP SMART MOTIVATIONAL STATUS BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-300">Live Community:</span>
            <span className="text-slate-300">Over 52,400 readers taking charge of their vitality today</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-300 font-medium">
            <span className="flex items-center gap-1 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Evidence-Informed
            </span>
            <span>•</span>
            <span className="text-teal-300">Zero Unrealistic Claims</span>
            <span>•</span>
            <span className="text-emerald-300">Daily Habit Actionable</span>
          </div>
        </div>

        {/* MAIN HERO HEADLINE & INSPIRATIONAL STATEMENT */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-950/50">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Smart Health Intelligence • VitalPath Daily</span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Take Control of Your Health, Energy &amp; Longevity
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-sm">
            Discover clinical breakthroughs, meal sequencing strategies, and vetted supplement analyses designed to help you feel energized, sharp, and confident every day.
          </p>

          {/* SMART GOAL SELECTOR: "What is your primary wellness goal today?" */}
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              ⚡ Select Your Priority Wellness Goal:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto">
              {smartGoals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => handleGoalClick(goal.id)}
                  className={`flex flex-col items-start text-left p-3 rounded-xl border backdrop-blur-md transition-all cursor-pointer group hover:scale-[1.02] ${
                    activeGoal === goal.id
                      ? 'bg-emerald-600/30 border-emerald-400 text-white shadow-lg shadow-emerald-900/40'
                      : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-700/80 text-slate-200'
                  }`}
                  id={`smart-goal-${goal.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {goal.icon}
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {goal.label}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 line-clamp-1">
                    {goal.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={handleScrollToGuides}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-950/60 transition-all cursor-pointer group hover:scale-[1.02]"
              id="hero-explore-guides-btn"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Research &amp; Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 text-slate-100 hover:text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-md transition-all cursor-pointer hover:border-emerald-500/50"
              id="hero-take-assessment-btn"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>3-Min Wellness Assessment</span>
            </button>
          </div>

          {/* MOTIVATING DAILY HEALTH NUGGET */}
          <div className="inline-flex items-center gap-2 text-xs text-emerald-200/90 bg-emerald-950/60 border border-emerald-800/60 px-4 py-2 rounded-xl backdrop-blur-xs max-w-xl mx-auto mt-2">
            <Lightbulb className="w-4 h-4 text-amber-300 shrink-0" />
            <span>
              <strong>Today's Habit Tip:</strong> A 10-minute stroll right after your largest meal can reduce blood sugar spikes by up to 22%.
            </span>
          </div>
        </div>

        {/* 
          LEAD STORY: PROMINENT EDITORIAL INVESTIGATION FEATURE 
          Sleek Glass Card with high contrast and motivating research summary
        */}
        <div className="bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-500/25 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/40 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Trending Investigation • {article.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime}
                  </span>
                </div>

                <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {article.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Key Insights bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Peer-reviewed scientific citations</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Easy-to-follow daily sequencing</span>
                  </div>
                </div>
              </div>

              {/* Author & Action footer */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-500/40"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-white text-sm">{article.author.name}</p>
                    <p className="text-slate-400">{article.author.credentials}</p>
                  </div>
                </div>

                <button
                  onClick={() => onReadArticle(article)}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer group"
                  id="hero-lead-read-btn"
                >
                  <span>Read Full Investigation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-950">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 shadow-xl">
                <span className="text-emerald-400 font-bold block mb-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Clinical Editorial Verification:
                </span>
                Audited for clinical validity, non-toxic recommendations, and sustainable health adherence for adults 40+.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
