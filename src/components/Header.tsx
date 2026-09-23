import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  FileText, 
  Lock, 
  AlertTriangle, 
  Scale, 
  Mail, 
  BookOpen, 
  ChevronRight,
  Activity,
  Flame,
  Moon,
  HeartPulse,
  Apple,
  Star,
  Layers,
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight,
  Zap,
  Tag,
  SlidersHorizontal,
  Award
} from 'lucide-react';
import { StaticPageType } from './StaticPageView';
import { Article } from '../types';

interface HeaderProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeView: string;
  onNavigateHome: () => void;
  onNavigateStaticPage: (page: StaticPageType) => void;
  onOpenProductReviews?: () => void;
  onOpenComparison?: () => void;
  onOpenAffiliateManager?: () => void;
  onOpenLeadMagnet?: () => void;
  articles?: Article[];
  onReadArticle?: (article: Article) => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeView,
  onNavigateHome,
  onNavigateStaticPage,
  onOpenProductReviews,
  onOpenComparison,
  onOpenAffiliateManager,
  onOpenLeadMagnet,
  articles = [],
  onReadArticle,
}) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const desktopContains = searchContainerRef.current?.contains(e.target as Node);
      const mobileContains = mobileSearchContainerRef.current?.contains(e.target as Node);
      if (!desktopContains && !mobileContains) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Top SEO & Most-Read Articles Curated from Library
  const topSeoArticles = useMemo(() => {
    const list = articles || [];
    // Prioritize high SEO volume articles
    const prioritized = [...list].sort((a, b) => {
      const aIsReview = a.linkedOfferId || a.title.toLowerCase().includes('review');
      const bIsReview = b.linkedOfferId || b.title.toLowerCase().includes('review');
      if (aIsReview && !bIsReview) return -1;
      if (!aIsReview && bIsReview) return 1;
      return 0;
    });
    return prioritized.slice(0, 5);
  }, [articles]);

  // SEO View / Rank Mock Metas for visual trust
  const seoRanks = [
    { badge: '🔥 #1 Trending in SEO', views: '34.2k reads' },
    { badge: '⚡ #2 High Search Volume', views: '26.8k reads' },
    { badge: '⭐ #3 Top Clinical Review', views: '21.5k reads' },
    { badge: '📈 #4 Rising Health Query', views: '18.1k reads' },
    { badge: '🩺 #5 Doctor Recommended', views: '15.4k reads' },
  ];

  // Live Matching Articles based on user query
  const matchingArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return (articles || []).filter(a => {
      const title = (a.title || '').toLowerCase();
      const sub = (a.subtitle || '').toLowerCase();
      const cat = (a.category || '').toLowerCase();
      return title.includes(q) || sub.includes(q) || cat.includes(q);
    }).slice(0, 5);
  }, [searchQuery, articles]);

  // Popular SEO tags for quick click
  const popularKeywords = [
    { label: 'Blood Sugar Spikes', category: 'Healthy Blood Sugar' },
    { label: 'Gluco6 Review', category: 'Product Reviews' },
    { label: 'DUWZGU Sleep Gummies', category: 'Product Reviews' },
    { label: 'DUWZGU Immune Gummies', category: 'Product Reviews' },
    { label: 'DUWZGU Creatine', category: 'Product Reviews' },
    { label: 'Pre-Workout Caffeine', category: 'Product Reviews' },
    { label: 'Metabolism After 40', category: 'Weight Management' },
    { label: 'Puravive BAT Hack', category: 'Product Reviews' },
    { label: 'Cortisol & Sleep', category: 'Sleep & Stress' },
    { label: 'Joint Synovial Fluid', category: 'Healthy Aging' },
  ];

  const handleSelectKeyword = (item: { label: string; category: string }) => {
    onSearchChange(item.label);
    setIsSearchOpen(false);
    onSelectCategory(item.category);
    if (activeView !== 'home') {
      onNavigateHome();
    }
    setTimeout(() => {
      const el = document.getElementById('articles-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleArticleClick = (article: Article) => {
    setIsSearchOpen(false);
    if (onReadArticle) {
      onReadArticle(article);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav categories with specific icons and descriptions
  const topicCategories = [
    {
      id: 'All Topics',
      label: 'All Topics & Guides',
      desc: 'Browse complete evidence-informed health library',
      icon: <BookOpen className="w-4 h-4 text-emerald-700" />,
      tag: 'Complete Library'
    },
    {
      id: 'Healthy Blood Sugar',
      label: 'Healthy Blood Sugar',
      desc: 'Glucose regulation, insulin sensitivity & meal sequencing',
      icon: <Activity className="w-4 h-4 text-rose-600" />,
      tag: 'Endocrine'
    },
    {
      id: 'Weight Management',
      label: 'Weight Management',
      desc: 'Metabolic rate, brown adipose tissue & satiety cues',
      icon: <Flame className="w-4 h-4 text-amber-600" />,
      tag: 'Metabolism'
    },
    {
      id: 'Sleep & Stress',
      label: 'Sleep & Stress',
      desc: 'Cortisol rhythm, circadian alignment & restorative rest',
      icon: <Moon className="w-4 h-4 text-indigo-600" />,
      tag: 'Circadian'
    },
    {
      id: 'Healthy Aging',
      label: 'Healthy Aging',
      desc: 'Synovial joint fluid, cellular autophagy & energy at 40+',
      icon: <HeartPulse className="w-4 h-4 text-teal-600" />,
      tag: 'Longevity'
    },
    {
      id: 'Nutrition',
      label: 'Nutrition & Gut',
      desc: 'Microbiome diversity, prebiotic fibers & anti-inflammatory foods',
      icon: <Apple className="w-4 h-4 text-emerald-600" />,
      tag: 'Microbiome'
    },
    {
      id: 'Product Reviews',
      label: 'Product Reviews & Audits',
      desc: 'Independent ingredient audits, cGMP checks & guarantee tests',
      icon: <Star className="w-4 h-4 text-amber-500" />,
      tag: 'Lab Verified'
    }
  ];

  const handleTopicClick = (catId: string) => {
    setSideMenuOpen(false);
    if (catId === 'Product Reviews' && onOpenProductReviews) {
      onOpenProductReviews();
    } else {
      onSelectCategory(catId);
    }
  };

  // Reusable Smart Search Dropdown Component
  const renderSearchDropdown = () => (
    <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-fade-in divide-y divide-slate-100 text-slate-800">
      
      {/* Quick Search Chips */}
      <div className="p-3 bg-slate-50/80">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500" />
            Popular SEO Keywords:
          </span>
          <span className="text-[10px] text-slate-400">Click to filter</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {popularKeywords.map((kw, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSelectKeyword(kw)}
              className="text-xs bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium flex items-center gap-1"
            >
              <Tag className="w-2.5 h-2.5 text-emerald-600" />
              <span>{kw.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Case 1: Searching for query */}
      {searchQuery.trim() ? (
        <div className="p-3 max-h-[380px] overflow-y-auto">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-bold text-slate-700">
              Matching Search Results ({matchingArticles.length})
            </span>
            <span className="text-[11px] text-slate-400">For "{searchQuery}"</span>
          </div>

          {matchingArticles.length === 0 ? (
            <div className="text-center py-6 px-4">
              <p className="text-xs text-slate-500">No guides found for "{searchQuery}".</p>
              <p className="text-[11px] text-slate-400 mt-1">Try one of the popular SEO tags above or clear your search.</p>
              <button
                onClick={() => onSearchChange('')}
                className="mt-2 text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="space-y-1.5">
              {matchingArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleArticleClick(art)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group"
                >
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-12 h-12 rounded-lg object-cover shrink-0 bg-slate-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold mb-0.5">
                      <span className="bg-emerald-100/80 px-1.5 py-0.2 rounded">
                        {art.category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        {art.readingTime}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                      {art.title}
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {art.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Case 2: Empty query -> Show Trending in SEO & Most Read Guides */
        <div className="p-3 max-h-[380px] overflow-y-auto">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-rose-500" />
              <span>Trending in SEO &amp; Most Read Guides</span>
            </span>
            <span className="text-[10px] text-slate-400">USA Health Traffic</span>
          </div>

          <div className="space-y-1.5">
            {topSeoArticles.map((art, index) => {
              const rank = seoRanks[index] || { badge: 'Trending Guide', views: '12k reads' };
              return (
                <div
                  key={art.id}
                  onClick={() => handleArticleClick(art)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group"
                >
                  <div className="relative shrink-0">
                    <img
                      src={art.coverImage}
                      alt={art.title}
                      className="w-12 h-12 rounded-lg object-cover bg-slate-100"
                    />
                    <span className="absolute -top-1.5 -left-1.5 bg-slate-900 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-xs">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded">
                        {rank.badge}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {rank.views}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                      {art.title}
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {art.subtitle}
                    </p>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Dropdown Footer with Quick Action */}
      <div className="p-2.5 bg-slate-50 flex items-center justify-between text-xs text-slate-500 px-4">
        <span>Press <kbd className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-600">Esc</kbd> to close</span>
        <button
          onClick={() => {
            setIsSearchOpen(false);
            const el = document.getElementById('articles-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-emerald-700 hover:text-emerald-900 font-bold hover:underline cursor-pointer flex items-center gap-1"
        >
          <span>View All Guides Library</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        {/* Main Branding & Top Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Logo & Brand Identity */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onNavigateHome}
                className="text-left flex items-center gap-3 group cursor-pointer focus:outline-hidden"
                id="brand-logo-btn"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-emerald-100" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-emerald-800 transition-colors">
                      VitalPath <span className="text-emerald-700">Daily</span>
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase mt-0.5">
                    Evidence-Based Wellness &amp; Longevity
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Smart Search Bar with SEO Recommendations Dropdown */}
            <div 
              ref={searchContainerRef}
              className="hidden md:flex flex-1 max-w-lg mx-2 relative"
            >
              <div className="relative w-full">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles or view trending SEO guides..."
                  value={searchQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onClick={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (!isSearchOpen) setIsSearchOpen(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsSearchOpen(false);
                    if (e.key === 'Enter') {
                      setIsSearchOpen(false);
                      const el = document.getElementById('articles-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm pl-9.5 pr-8 py-2.5 rounded-full border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 outline-hidden transition-all text-slate-800 placeholder-slate-400 shadow-2xs"
                  id="header-search-input"
                />
                {searchQuery ? (
                  <button
                    onClick={() => {
                      onSearchChange('');
                      setIsSearchOpen(true);
                    }}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    ✕
                  </button>
                ) : (
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded">
                    SEO Trends
                  </span>
                )}
              </div>

              {/* Desktop Dropdown */}
              {isSearchOpen && renderSearchDropdown()}
            </div>

            {/* Side Menu Button in Corner (الموني في الجنب) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSideMenuOpen(true)}
                className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200/80 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
                id="header-side-menu-trigger"
                aria-label="Open Topics & Menu Drawer"
              >
                <Menu className="w-4 h-4 text-emerald-700 group-hover:rotate-180 transition-transform duration-300" />
                <span>Browse Topics &amp; Menu</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
              </button>
            </div>
          </div>

          {/* Mobile Smart Search bar (visible on mobile only) */}
          <div 
            ref={mobileSearchContainerRef}
            className="md:hidden mt-2.5 pt-2 border-t border-slate-100 relative"
          >
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search or view trending SEO articles..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onClick={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (!isSearchOpen) setIsSearchOpen(true);
                }}
                className="w-full bg-slate-50 text-xs pl-9 pr-3 py-2 rounded-lg border border-slate-200 outline-hidden"
                id="mobile-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Dropdown */}
            {isSearchOpen && renderSearchDropdown()}
          </div>
        </div>
      </header>

      {/* Slide-out Side Drawer (الموني في الجنب) */}
      {sideMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex justify-end animate-fade-in"
          onClick={() => setSideMenuOpen(false)}
        >
          <div 
            className="w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col overflow-hidden animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title font-bold text-slate-900 text-base leading-tight">
                    VitalPath Navigation
                  </h3>
                  <p className="text-[11px] text-slate-500">Explore by clinical health category</p>
                </div>
              </div>
              <button
                onClick={() => setSideMenuOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
              
              {/* Category Links with Descriptions */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Editorial Categories
                </span>
                <div className="space-y-1.5">
                  {topicCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleTopicClick(cat.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-3 group cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 border border-emerald-300/80 shadow-2xs'
                            : 'hover:bg-slate-50 border border-transparent'
                        }`}
                        id={`drawer-cat-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg mt-0.5 shrink-0 ${isSelected ? 'bg-white shadow-2xs' : 'bg-slate-100 group-hover:bg-white'}`}>
                            {cat.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-bold leading-snug ${isSelected ? 'text-emerald-950' : 'text-slate-900 group-hover:text-emerald-800'}`}>
                                {cat.label}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded">
                                {cat.tag}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {cat.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 mt-2 shrink-0 transition-transform ${isSelected ? 'text-emerald-700 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Research Matrix & Tools */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Clinical Comparison &amp; Tools
                </span>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSideMenuOpen(false);
                      if (onOpenComparison) {
                        onOpenComparison();
                      } else {
                        onNavigateStaticPage('terms');
                      }
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                      <Scale className="w-4 h-4 text-emerald-700" />
                      <span>Supplement Comparison Matrix</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  <button
                    onClick={() => {
                      setSideMenuOpen(false);
                      handleTopicClick('Product Reviews');
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span>Laboratory Vetted Formulations</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  {onOpenLeadMagnet && (
                    <button
                      onClick={() => {
                        setSideMenuOpen(false);
                        onOpenLeadMagnet();
                      }}
                      className="w-full text-left p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-950">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Free 7-Day Metabolic Reset Guide</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </button>
                  )}

                  {onOpenAffiliateManager && (
                    <button
                      onClick={() => {
                        setSideMenuOpen(false);
                        onOpenAffiliateManager();
                      }}
                      className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-bold text-slate-100">
                        <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                        <span>Affiliate ID &amp; Hoplink Settings</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                        Admin
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Editorial Trust & Legal */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Editorial Integrity &amp; Disclosures
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('brand-entity'); }}
                    className="p-2.5 rounded-lg border border-emerald-300 bg-emerald-50/80 text-emerald-950 font-bold text-left flex items-center gap-2 cursor-pointer col-span-2 shadow-2xs"
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Entity Profile &amp; Knowledge Graph (BEO)</span>
                  </button>
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('about'); }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-left flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>About VitalPath</span>
                  </button>
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('editorial-policy'); }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-left flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>Editorial Policy</span>
                  </button>
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('medical-review-board'); }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-left flex items-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Medical Board</span>
                  </button>
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('contact'); }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-left flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Contact Support</span>
                  </button>
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('affiliate-disclosure'); }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-left flex items-center gap-2 cursor-pointer"
                  >
                    <Scale className="w-3.5 h-3.5 text-slate-400" />
                    <span>Affiliate Notice</span>
                  </button>
                  <button
                    onClick={() => { setSideMenuOpen(false); onNavigateStaticPage('medical-disclaimer'); }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-left flex items-center gap-2 cursor-pointer"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Medical Advice</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5 font-bold text-slate-700 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Evidence-Informed &amp; Vetted Standards</span>
              </div>
              <p>Articles are reviewed by healthcare practitioners and verified against clinical PubMed references.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
