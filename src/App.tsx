/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  Info
} from 'lucide-react';
import { articles, clickBankOffers } from './data/mockData';
import { Article, ClickBankOffer, AffiliateSettings } from './types';
import { defaultAffiliateSettings } from './utils/hoplink';
import { getAffiliateUrl } from './config/affiliateOffers';

// Components
import { Header } from './components/Header';
import { HeroFeatured } from './components/HeroFeatured';
import { ArticleCard } from './components/ArticleCard';
import { ArticlePage } from './components/ArticlePage';
import { CategoryCard } from './components/CategoryCard';
import { EditorsPicks } from './components/EditorsPicks';
import { EditorsResearchDesk } from './components/EditorsResearchDesk';
import { AboutSection } from './components/AboutSection';
import { NewsletterBox } from './components/NewsletterBox';
import { ReviewBridgeView } from './components/ReviewBridgeView';
import { ProductComparisonTable } from './components/ProductComparisonTable';
import { StaticPageView, StaticPageType } from './components/StaticPageView';
import { CategoryPageView } from './components/CategoryPageView';
import { QuizFunnel } from './components/QuizFunnel';
import { ComplianceFooter } from './components/ComplianceFooter';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { StickyDealBar } from './components/StickyDealBar';
import { RotatingOfferBanner } from './components/RotatingOfferBanner';
import { AffiliateManagerModal } from './components/AffiliateManagerModal';
import { LeadMagnetModal } from './components/LeadMagnetModal';

type ViewState = 'home' | 'article' | 'review' | 'comparison' | 'category' | StaticPageType;

export default function App() {
  // Navigation & View States
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [previousView, setPreviousView] = useState<ViewState>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[0]);
  const [selectedReviewOffer, setSelectedReviewOffer] = useState<ClickBankOffer>(clickBankOffers[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAffiliateManagerOpen, setIsAffiliateManagerOpen] = useState(false);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  // Affiliate Settings (persisted in localStorage for fallback hoplinks)
  const [affiliateSettings, setAffiliateSettings] = useState<AffiliateSettings>(() => {
    const saved = localStorage.getItem('vpd_affiliate_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultAffiliateSettings;
      }
    }
    return defaultAffiliateSettings;
  });

  const handleUpdateAffiliateSettings = (newSettings: AffiliateSettings) => {
    setAffiliateSettings(newSettings);
    try {
      localStorage.setItem('vpd_affiliate_settings', JSON.stringify(newSettings));
    } catch (e) {}
  };

  // Active primary offer
  const activeOffer = clickBankOffers.find(o => o.id === affiliateSettings.activePromotedOfferId) || clickBankOffers[0];

  // Handle URL changes and initial URL routing
  React.useEffect(() => {
    const resolveCurrentUrl = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setActiveView('home');
        return;
      }

      // Check if path matches any article
      const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
      const matchedArticle = articles.find(
        (a) =>
          a.path === path ||
          (a.path && a.path.replace(/\/$/, '') === cleanPath) ||
          `/${a.slug}` === cleanPath ||
          `/${a.slug}/` === path ||
          a.slug === cleanPath.replace(/^\//, '')
      );

      if (matchedArticle) {
        setSelectedArticle(matchedArticle);
        setActiveView('article');
        return;
      }

      if (path.includes('comparison')) {
        setActiveView('comparison');
        return;
      }

      if (path.includes('/category/')) {
        const catSlug = cleanPath.replace(/^.*\/category\//, '').replace(/\/$/, '');
        const validCategories = [
          'Healthy Blood Sugar',
          'Weight Management',
          'Sleep & Stress',
          'Healthy Aging',
          'Nutrition',
          'Product Reviews'
        ];
        const matchedCategory = validCategories.find(
          c => c.toLowerCase().replace(/[^a-z0-9]/g, '-') === catSlug
        );
        if (matchedCategory) {
          setSelectedCategory(matchedCategory);
          setActiveView('category');
          return;
        }
      }

      const staticPage = ['about', 'editorial-policy', 'medical-review-board', 'privacy', 'terms', 'affiliate-disclosure', 'contact'].find(
        (p) => path.includes(p)
      );
      if (staticPage) {
        setActiveView(staticPage as StaticPageType);
        return;
      }
    };

    resolveCurrentUrl();
    window.addEventListener('popstate', resolveCurrentUrl);
    return () => window.removeEventListener('popstate', resolveCurrentUrl);
  }, []);

  // Navigation handlers
  const handleReadArticle = (article: Article) => {
    setSelectedArticle(article);
    setActiveView('article');
    if (article.path) {
      window.history.pushState(null, '', article.path);
    } else {
      window.history.pushState(null, '', `/${article.slug}/`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReview = (offer: ClickBankOffer) => {
    // Check if there is a matching detailed review article
    const reviewArticle = articles.find(
      (a) =>
        ((offer.id === 'gluco6' || offer.id === 'bloodsugar-gluco6') && a.slug === 'gluco6-review') ||
        ((offer.id === 'bloodsugar-defender' || offer.id === 'sugar-defender' || offer.id === 'sugarDefender' || offer.id === 'sugardefender') && a.slug === 'sugar-defender-review') ||
        ((offer.id === 'puravive' || offer.id === 'metabolism-puravive') && a.slug === 'puravive-review')
    );
    if (reviewArticle) {
      handleReadArticle(reviewArticle);
      return;
    }
    setSelectedReviewOffer(offer);
    setActiveView('review');
    window.history.pushState(null, '', `/product-reviews/${offer.id}/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActiveView('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateStaticPage = (page: StaticPageType) => {
    setActiveView(page);
    window.history.pushState(null, '', `/${page}/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: string) => {
    if (cat === 'All Topics') {
      setSelectedCategory('All Topics');
      setActiveView('home');
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (cat === 'Comparisons') {
      setActiveView('comparison');
      window.history.pushState(null, '', '/comparison/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Dedicated Category Page
    if (activeView !== 'category') {
      setPreviousView(activeView);
    }
    setSelectedCategory(cat);
    setActiveView('category');
    const slug = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
    window.history.pushState(null, '', `/category/${slug}/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryBack = () => {
    setSelectedCategory('All Topics');
    setActiveView(previousView && previousView !== 'category' ? previousView : 'home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProductReviews = () => {
    handleSelectCategory('Product Reviews');
  };

  // Filter articles
  const filteredArticles = articles.filter(art => {
    const artCat = (art.category || '').toLowerCase();
    const selCat = (selectedCategory || '').toLowerCase();

    if (selectedCategory === 'All Topics') {
      // Show all
    } else if (selectedCategory === 'Product Reviews') {
      if (!art.linkedOfferId && !artCat.includes('review') && !art.title.toLowerCase().includes('review')) return false;
    } else if (selectedCategory === 'Healthy Blood Sugar') {
      const isBloodSugar = artCat.includes('blood sugar') || artCat.includes('glucose') || artCat.includes('glycemic') ||
        art.title.toLowerCase().includes('blood sugar') || art.title.toLowerCase().includes('glucose');
      if (!isBloodSugar) return false;
    } else if (selectedCategory === 'Weight Management') {
      const isWeight = artCat.includes('metabolism') || artCat.includes('weight') || artCat.includes('fat') ||
        art.title.toLowerCase().includes('metabolic') || art.title.toLowerCase().includes('weight');
      if (!isWeight) return false;
    } else if (selectedCategory === 'Sleep & Stress') {
      const isSleep = artCat.includes('sleep') || artCat.includes('stress') || artCat.includes('cortisol') ||
        art.title.toLowerCase().includes('sleep') || art.title.toLowerCase().includes('stress');
      if (!isSleep) return false;
    } else if (selectedCategory === 'Healthy Aging') {
      const isAging = artCat.includes('aging') || artCat.includes('longevity') || artCat.includes('joint') || artCat.includes('nerve') || artCat.includes('hearing') ||
        art.title.toLowerCase().includes('aging') || art.title.toLowerCase().includes('joint') || art.title.toLowerCase().includes('nerve');
      if (!isAging) return false;
    } else if (selectedCategory === 'Nutrition') {
      const isNutrition = artCat.includes('nutrition') || artCat.includes('gut') || artCat.includes('diet') || artCat.includes('probiotic') ||
        art.title.toLowerCase().includes('nutrition') || art.title.toLowerCase().includes('gut') || art.title.toLowerCase().includes('diet');
      if (!isNutrition) return false;
    } else if (!artCat.includes(selCat)) {
      return false;
    }

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = 
      !q ||
      (art.title || '').toLowerCase().includes(q) ||
      (art.subtitle || '').toLowerCase().includes(q) ||
      (art.summary || '').toLowerCase().includes(q);

    return matchesSearch;
  });

  // Contextually active offer for banners & exit popup
  const contextOffer = (activeView === 'article' && selectedArticle.linkedOfferId
    ? clickBankOffers.find(o => o.id === selectedArticle.linkedOfferId || o.vendorId === selectedArticle.linkedOfferId)
    : activeView === 'review'
    ? selectedReviewOffer
    : null) || clickBankOffers.find(o => o.id === affiliateSettings.activePromotedOfferId) || clickBankOffers[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Consumer Advisory Announcement Bar */}
      <TopAnnouncementBar 
        activeOffer={contextOffer}
        affiliateSettings={affiliateSettings}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Universal Editorial Header */}
      <Header
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeView={activeView}
        onNavigateHome={handleNavigateHome}
        onNavigateStaticPage={handleNavigateStaticPage}
        onOpenProductReviews={handleScrollToProductReviews}
        onOpenComparison={() => setActiveView('comparison')}
        onOpenAffiliateManager={() => setIsAffiliateManagerOpen(true)}
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        articles={articles}
        onReadArticle={handleReadArticle}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'article' ? (
          <ArticlePage
            article={selectedArticle}
            allArticles={articles}
            affiliateSettings={affiliateSettings}
            onBack={handleNavigateHome}
            onReadArticle={handleReadArticle}
            onNavigateCategory={handleSelectCategory}
            onNavigateDisclosure={() => handleNavigateStaticPage('affiliate-disclosure')}
            onOpenReview={(offerId) => {
              const off = clickBankOffers.find(o => o.id === offerId || o.vendorId === offerId);
              if (off) {
                handleOpenReview(off);
              }
            }}
          />
        ) : activeView === 'review' ? (
          <ReviewBridgeView
            offer={selectedReviewOffer}
            onBack={handleNavigateHome}
          />
        ) : activeView === 'comparison' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={handleNavigateHome}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <span>← Back to Articles</span>
              </button>
              <h1 className="font-serif-title text-xl font-bold text-slate-900">
                Editorial Supplement Comparison Matrix
              </h1>
            </div>

            <ProductComparisonTable
              offers={clickBankOffers}
              affiliateSettings={affiliateSettings}
              onOpenReview={handleOpenReview}
              onOpenAffiliateManager={() => setIsAffiliateManagerOpen(true)}
            />
          </div>
        ) : activeView === 'category' ? (
          <CategoryPageView
            category={selectedCategory}
            articles={articles}
            allOffers={clickBankOffers}
            onBack={handleCategoryBack}
            onReadArticle={handleReadArticle}
            onOpenReview={handleOpenReview}
            onSelectCategory={handleSelectCategory}
            affiliateSettings={affiliateSettings}
          />
        ) : activeView !== 'home' ? (
          <StaticPageView
            pageType={activeView}
            onBack={handleNavigateHome}
            onBackToHome={handleNavigateHome}
            onNavigate={handleNavigateStaticPage}
            onNavigatePage={handleNavigateStaticPage}
          />
        ) : (
          /* HOMEPAGE VIEW */
          <div className="space-y-12">
            {/* 1. Hero Editorial Section */}
            <HeroFeatured
              article={articles[0]}
              activeOffer={activeOffer}
              affiliateSettings={affiliateSettings}
              onReadArticle={handleReadArticle}
              onOpenReview={handleOpenReview}
              onOpenQuiz={() => setIsQuizOpen(true)}
              onSelectCategory={handleSelectCategory}
              onExploreGuides={() => {
                const el = document.getElementById('articles-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
              {/* 2. Popular Topics Strip */}
              <section>
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Explore Wellness Categories
                  </h2>
                  <span className="text-xs text-slate-400">Curated protocols for mature adults</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {[
                    'Healthy Blood Sugar',
                    'Weight Management',
                    'Sleep & Stress',
                    'Healthy Aging',
                    'Nutrition',
                    'Product Reviews',
                  ].map((cat) => (
                    <CategoryCard
                      key={cat}
                      name={cat}
                      title={cat}
                      articleCount={articles.filter(a => (a.category || '').toLowerCase().includes(cat.toLowerCase())).length || 5}
                      isActive={selectedCategory === cat}
                      onClick={() => handleSelectCategory(cat)}
                      onSelect={() => handleSelectCategory(cat)}
                    />
                  ))}
                </div>
              </section>

              {/* 3. Editor's Guides */}
              <EditorsPicks
                articles={articles.slice(0, 6)}
                onReadArticle={handleReadArticle}
              />

              {/* Editor's Research Desk - Placed in middle of site, visible only on initial All Topics / Hero view */}
              {selectedCategory === 'All Topics' && !searchQuery && (
                <EditorsResearchDesk
                  activeOffer={activeOffer}
                  allOffers={clickBankOffers}
                  onOpenReview={handleOpenReview}
                  onSelectCategory={handleSelectCategory}
                />
              )}

              {/* 4. Latest Articles Library with Filtering Pills */}
              <section id="articles-section">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                      Latest Guides & Clinical Summaries
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Evidence-informed research, meal sequencing strategies, and wellness habits.
                    </p>
                  </div>

                  {selectedCategory !== 'All Topics' && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        Showing: {selectedCategory}
                      </span>
                      <button
                        onClick={() => setSelectedCategory('All Topics')}
                        className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    </div>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                  {[
                    { label: 'All Topics', count: articles.length },
                    { label: 'Healthy Blood Sugar', count: articles.filter(a => a.category.includes('Blood Sugar')).length },
                    { label: 'Weight Management', count: articles.filter(a => a.category.includes('Weight') || a.category.includes('Metabolism')).length },
                    { label: 'Sleep & Stress', count: articles.filter(a => a.category.includes('Sleep') || a.category.includes('Stress')).length },
                    { label: 'Healthy Aging', count: articles.filter(a => a.category.includes('Aging') || a.category.includes('Longevity')).length },
                    { label: 'Nutrition', count: articles.filter(a => a.category.includes('Nutrition') || a.category.includes('Gut')).length },
                    { label: 'Product Reviews', count: clickBankOffers.length },
                  ].map((item) => {
                    const isActive = selectedCategory === item.label;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleSelectCategory(item.label)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                          isActive
                            ? 'bg-emerald-800 text-white shadow-2xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                        id={`filter-pill-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <span>{item.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-emerald-900 text-emerald-200' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {filteredArticles.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                    <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <h3 className="font-bold text-slate-800 text-base">No guides found</h3>
                    <p className="text-xs text-slate-500 mt-1">Try resetting your search query or category filter.</p>
                    <button
                      onClick={() => { setSelectedCategory('All Topics'); setSearchQuery(''); }}
                      className="mt-4 text-xs font-semibold bg-emerald-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                      View All Guides
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onRead={handleReadArticle}
                      />
                    ))}
                  </div>
                )}
              </section>

              {/* Verified Rotating Offer Banner (Auto-rotating deal showcase) */}
              <RotatingOfferBanner
                offers={clickBankOffers}
                affiliateSettings={affiliateSettings}
                onOpenReview={handleOpenReview}
                rotationIntervalMs={7000}
              />

              {/* 5. Dedicated "Healthy Blood Sugar" Section */}
              <section className="bg-emerald-950/5 border border-emerald-900/10 rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      <span>Focused Editorial Series</span>
                    </div>
                    <h3 className="font-serif-title text-2xl font-bold text-slate-900">
                      Healthy Blood Sugar Guidance
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Practical food sequencing, daily habits, and nutrient cofactors to support healthy glucose ranges.
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelectCategory('Healthy Blood Sugar')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer self-start sm:self-auto"
                  >
                    <span>View All Blood Sugar Articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {articles
                    .filter((a) => (a.category || '').toLowerCase().includes('blood sugar'))
                    .slice(0, 3)
                    .map((art) => (
                      <ArticleCard
                        key={art.id}
                        article={art}
                        onRead={handleReadArticle}
                      />
                    ))}
                </div>
              </section>

              {/* 6. Dedicated "Healthy Aging" Section */}
              <section className="bg-teal-950/5 border border-teal-900/10 rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
                      <span>Longevity & Vitality</span>
                    </div>
                    <h3 className="font-serif-title text-2xl font-bold text-slate-900">
                      Healthy Aging After 40
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Evidence-informed cellular health habits, joint flexibility, and everyday energy preservation.
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelectCategory('Healthy Aging')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 underline cursor-pointer self-start sm:self-auto"
                  >
                    <span>View All Healthy Aging Articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {articles
                    .filter((a) => (a.category || '').toLowerCase().includes('aging') || (a.category || '').toLowerCase().includes('longevity'))
                    .slice(0, 3)
                    .map((art) => (
                      <ArticleCard
                        key={art.id}
                        article={art}
                        onRead={handleReadArticle}
                      />
                    ))}
                </div>
              </section>

              {/* 7. Popular Product Reviews (Gluco6, Sugar Defender, Puravive) */}
              <section id="product-reviews-section" className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      <Award className="w-4 h-4 text-emerald-700" />
                      <span>Evidence-Grounded Supplement Audits</span>
                    </div>
                    <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                      Popular Product Reviews
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Independent ingredient audits, cGMP manufacturing verification, and verified manufacturer refund terms.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveView('comparison');
                      window.history.pushState(null, '', '/comparisons/gluco6-vs-other-blood-sugar-supplements/');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <span>Side-by-Side Comparison Matrix →</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    clickBankOffers.find((o) => o.id === 'gluco6' || o.id === 'bloodsugar-gluco6') || clickBankOffers[0],
                    clickBankOffers.find((o) => o.id === 'bloodsugar-defender') || clickBankOffers[1],
                    clickBankOffers.find((o) => o.id === 'puravive' || o.id === 'metabolism-puravive') || clickBankOffers[2],
                  ].map((offer) => {
                    const destinationUrl = getAffiliateUrl(offer.id);

                    return (
                      <div
                        key={offer.id}
                        className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-600/40 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                      >
                        <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                          <img
                            src={offer.heroImage}
                            alt={offer.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            {offer.categoryName}
                          </div>
                          <div className="absolute top-2.5 right-2.5 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                            Vetted Formula
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                              <span>★ {offer.rating}</span>
                              <span className="text-slate-400">({offer.reviewsCount.toLocaleString()} consumer ratings)</span>
                            </div>

                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-800 transition-colors leading-snug mb-1">
                              {offer.name}
                            </h3>

                            <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                              {offer.tagline}
                            </p>

                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5 mb-4">
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Money-Back Guarantee:</span>
                                <span className="font-semibold text-emerald-800">{offer.guaranteeDays} Days Full Refund</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Official Direct Pricing:</span>
                                <span className="font-bold text-slate-900">${offer.bundlePrice} / bottle</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Manufacturing Standard:</span>
                                <span className="text-slate-700 font-medium">USA cGMP Facility</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <button
                              onClick={() => handleOpenReview(offer)}
                              className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-3 rounded-xl shadow-2xs transition-colors cursor-pointer"
                              id={`read-review-btn-${offer.id}`}
                            >
                              <span>Read Independent Review</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            <a
                              href={destinationUrl}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="w-full inline-flex items-center justify-center gap-1 text-center text-xs font-medium text-slate-600 hover:text-emerald-800 py-1.5 transition-colors cursor-pointer"
                            >
                              <span>Official Product Information</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Section FTC Affiliate Transparency Callout */}
                <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-slate-800 font-semibold">Editorial & Affiliate Disclosure:</strong> VitalPath Daily operates an independent health editorial team. When readers purchase through links on our site, we may receive an affiliate referral fee at no extra cost to you. We strictly review ingredients against published research, verify cGMP facility standards, and ensure authentic manufacturer money-back guarantees.
                  </p>
                </div>
              </section>

              {/* 8. Newsletter Signup Box */}
              <NewsletterBox variant="full" />

              {/* 9. About VitalPath Daily Section */}
              <AboutSection onNavigateAbout={handleNavigateStaticPage} />
            </div>
          </div>
        )}
      </main>

      {/* Compliance & Legal Footer (No debug buttons) */}
      <ComplianceFooter
        onNavigateStaticPage={handleNavigateStaticPage}
        onSelectCategory={handleSelectCategory}
        onOpenAffiliateManager={() => setIsAffiliateManagerOpen(true)}
      />

      {/* Wellness Assessment Modal */}
      <QuizFunnel
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        offers={clickBankOffers}
        affiliateSettings={affiliateSettings}
        onOpenReview={handleOpenReview}
      />

      {/* Contextual Product Actions (Only displayed when actively reviewing a product) */}
      {activeView === 'review' && (
        <StickyDealBar
          activeOffer={contextOffer}
          affiliateSettings={affiliateSettings}
          onOpenReview={handleOpenReview}
        />
      )}

      {/* Free Digital Guide Lead Capture Modal */}
      <LeadMagnetModal
        isOpen={isLeadMagnetOpen}
        onClose={() => setIsLeadMagnetOpen(false)}
        onOpenQuiz={() => {
          setIsLeadMagnetOpen(false);
          setIsQuizOpen(true);
        }}
      />

      {/* Affiliate & Hoplink Management Modal (Admin Control) */}
      <AffiliateManagerModal
        isOpen={isAffiliateManagerOpen}
        onClose={() => setIsAffiliateManagerOpen(false)}
        settings={affiliateSettings}
        onUpdateSettings={handleUpdateAffiliateSettings}
        offers={clickBankOffers}
      />
    </div>
  );
}
