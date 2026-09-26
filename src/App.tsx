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
import { AuthorProfilePage } from './components/AuthorProfilePage';
import { getAuthorBySlug, authorsBase } from './data/editorialTeam';
import { Author } from './types';
import { QuizFunnel } from './components/QuizFunnel';
import { ComplianceFooter } from './components/ComplianceFooter';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { StickyDealBar } from './components/StickyDealBar';
import { RotatingOfferBanner } from './components/RotatingOfferBanner';
import { AffiliateManagerModal } from './components/AffiliateManagerModal';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { LiveDealToast } from './components/LiveDealToast';

type ViewState = 'home' | 'article' | 'review' | 'comparison' | 'category' | 'author' | StaticPageType;

export default function App() {
  // Navigation & View States
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [previousView, setPreviousView] = useState<ViewState>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[0]);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(authorsBase.elena);
  const [selectedReviewOffer, setSelectedReviewOffer] = useState<ClickBankOffer>(clickBankOffers[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [productReviewFilter, setProductReviewFilter] = useState<string>('all-clickbank');

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

  // SEO Category Slug Map & Inverse Map for canonical sitemap routing
  const CATEGORY_SLUG_MAP: Record<string, string> = {
    'Healthy Blood Sugar': 'healthy-blood-sugar',
    'Weight Management': 'weight-management',
    'Sleep & Stress': 'sleep-and-stress',
    'Healthy Aging': 'healthy-aging',
    'Nutrition': 'nutrition',
    'Product Reviews': 'product-reviews',
  };

  const SLUG_TO_CATEGORY_MAP: Record<string, string> = {
    'healthy-blood-sugar': 'Healthy Blood Sugar',
    'weight-management': 'Weight Management',
    'sleep-and-stress': 'Sleep & Stress',
    'healthy-aging': 'Healthy Aging',
    'nutrition': 'Nutrition',
    'product-reviews': 'Product Reviews',
    'reviews': 'Product Reviews',
  };

  // Handle URL changes and initial URL routing
  React.useEffect(() => {
    try {
      const storedToken = localStorage.getItem('gsc_verification_token') || (import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined);
      if (storedToken) {
        const meta = document.getElementById('google-site-verification') || document.querySelector('meta[name="google-site-verification"]');
        if (meta) {
          meta.setAttribute('content', storedToken);
        }
      }
    } catch (e) {}

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

      // Product review bridge view routing: /product-reviews/:id or /product-reviews/:id/
      if (cleanPath.startsWith('/product-reviews/')) {
        const reviewSlug = cleanPath.replace(/^\/product-reviews\//, '').replace(/\/$/, '');
        const matchedReviewArticle = articles.find(
          (a) => a.path === path || (a.path && a.path.replace(/\/$/, '') === cleanPath) || a.slug === reviewSlug
        );
        if (matchedReviewArticle) {
          setSelectedArticle(matchedReviewArticle);
          setActiveView('article');
          return;
        }
        const matchedOffer = clickBankOffers.find(
          (o) => o.id === reviewSlug || o.vendorId === reviewSlug || o.id.includes(reviewSlug) || reviewSlug.includes(o.id)
        );
        if (matchedOffer) {
          setSelectedReviewOffer(matchedOffer);
          setActiveView('review');
          return;
        }
      }

      // Author Profile routing: /author/:slug or /author/:slug/
      if (cleanPath.startsWith('/author/')) {
        const authorSlug = cleanPath.replace(/^\/author\//, '').replace(/\/$/, '');
        const matchedAuthor = getAuthorBySlug(authorSlug) || authorsBase.elena;
        setSelectedAuthor(matchedAuthor);
        setActiveView('author');
        return;
      }
      if (cleanPath === '/author') {
        setSelectedAuthor(authorsBase.elena);
        setActiveView('author');
        return;
      }

      // Comparison page routing
      if (cleanPath === '/comparison' || cleanPath === '/comparisons' || path.includes('comparison')) {
        setActiveView('comparison');
        return;
      }

      // Category page routing: Supports direct sitemap URLs (/sleep-and-stress/, /healthy-blood-sugar/)
      // as well as legacy /category/ prefixed paths (/category/sleep-and-stress/)
      const pathSegments = cleanPath.split('/').filter(Boolean);
      const candidateCatSlug = pathSegments[0] === 'category' ? pathSegments[1] : pathSegments[0];
      
      if (candidateCatSlug && SLUG_TO_CATEGORY_MAP[candidateCatSlug]) {
        setSelectedCategory(SLUG_TO_CATEGORY_MAP[candidateCatSlug]);
        setActiveView('category');
        return;
      }

      // Static compliance and brand entity pages routing
      const staticPage = ['about', 'about-us', 'brand-entity', 'entity-hub', 'editorial-policy', 'medical-review-board', 'privacy', 'terms', 'affiliate-disclosure', 'contact'].find(
        (p) => path.includes(p)
      );
      if (staticPage) {
        const resolvedPage = staticPage === 'about-us' ? 'about' : (staticPage === 'entity-hub' ? 'brand-entity' : staticPage);
        setActiveView(resolvedPage as StaticPageType);
        return;
      }
    };

    resolveCurrentUrl();
    window.addEventListener('popstate', resolveCurrentUrl);
    return () => window.removeEventListener('popstate', resolveCurrentUrl);
  }, []);

  // Ensure canonical tag and document title are restored on home view or brand entity view
  React.useEffect(() => {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    if (activeView === 'home') {
      document.title = 'VitalPath Daily - Evidence-Based Wellness & Longevity';
      canonicalLink.setAttribute('href', 'https://mba-rabat.vercel.app/');
    } else if (activeView === 'brand-entity') {
      document.title = 'VitalPath Daily: Official Entity Fact Sheet & Medical Review Board (BEO)';
      canonicalLink.setAttribute('href', 'https://mba-rabat.vercel.app/brand-entity/');
    } else if (activeView === 'editorial-policy') {
      document.title = 'Editorial Policy & Evidence Standards - VitalPath Daily';
      canonicalLink.setAttribute('href', 'https://mba-rabat.vercel.app/editorial-policy/');
    } else if (activeView === 'medical-review-board') {
      document.title = 'Medical Review Board & Clinical Oversight - VitalPath Daily';
      canonicalLink.setAttribute('href', 'https://mba-rabat.vercel.app/medical-review-board/');
    }
  }, [activeView]);

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
        ((offer.id === 'duwzgu-creatine-gummies' || (offer.id.includes('creatine') && (offer.id.includes('gumm') || offer.id.includes('candy')))) && (a.slug === 'duwzgu-creatine-monohydrate-gummies-review' || a.slug.includes('creatine-monohydrate-gummies'))) ||
        ((offer.id === 'duwzgu-sleep-gummies' || (offer.id.includes('sleep') && offer.id.includes('gumm')) || offer.id.includes('melatonin')) && (a.slug === 'duwzgu-sleep-support-gummies-review' || a.slug.includes('sleep-support-gummies'))) ||
        ((offer.id === 'duwzgu-immune-gummies' || (offer.id.includes('immune') && offer.id.includes('gumm')) || offer.id.includes('elderberry')) && (a.slug === 'duwzgu-immune-support-gummies-review' || a.slug.includes('immune-support-gummies') || a.slug.includes('gummies'))) ||
        ((offer.id === 'duwzgu-creatine' || offer.id === 'creatine' || offer.id === 'creatine-powder') && (a.slug === 'duwzgu-creatine-monohydrate-review')) ||
        ((offer.id === 'duwzgu' || offer.id === 'duwzgu-d3k2' || offer.id.includes('duwzgu')) && (a.slug === 'duwzgu-d3-k2-review' || a.slug === 'duwzgu-d3k2-review')) ||
        ((offer.id === 'eelhoe' || offer.id === 'eelhoe-vc' || offer.id.includes('eelhoe')) && (a.slug === 'eelhoe-vitamin-c-spray-review' || a.slug.includes('eelhoe'))) ||
        ((offer.id === 'preworkout-caffeine' || offer.id.includes('caffeine') || offer.id.includes('preworkout')) && (a.slug === 'preworkout-caffeine-exercise-supplement-review' || a.slug.includes('preworkout'))) ||
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

  const handleNavigateAuthor = (slug: string) => {
    const author = getAuthorBySlug(slug) || authorsBase.elena;
    setSelectedAuthor(author);
    setActiveView('author');
    const authorSlug = author.slug || slug;
    window.history.pushState(null, '', `/author/${authorSlug}/`);
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
    const slug = CATEGORY_SLUG_MAP[cat] || cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
    window.history.pushState(null, '', `/${slug}/`);
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
        art.title.toLowerCase().includes('aging') || art.title.toLowerCase().includes('joint') || art.title.toLowerCase().includes('nerve') || art.title.toLowerCase().includes('vitamin');
      if (!isAging) return false;
    } else if (selectedCategory === 'Nutrition') {
      const isNutrition = artCat.includes('nutrition') || artCat.includes('gut') || artCat.includes('diet') || artCat.includes('probiotic') || artCat.includes('fitness') || artCat.includes('creatine') ||
        art.title.toLowerCase().includes('nutrition') || art.title.toLowerCase().includes('gut') || art.title.toLowerCase().includes('diet') || art.title.toLowerCase().includes('vitamin') || art.title.toLowerCase().includes('creatine');
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
  const contextOffer = (activeView === 'article'
    ? (selectedArticle.linkedOfferId
        ? clickBankOffers.find(o => o.id === selectedArticle.linkedOfferId || o.vendorId === selectedArticle.linkedOfferId)
        : clickBankOffers.find(o => o.niche === selectedArticle.category?.toLowerCase() || o.categoryName?.toLowerCase().includes(selectedArticle.category?.toLowerCase())))
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
        {activeView === 'author' ? (
          <AuthorProfilePage
            author={selectedAuthor}
            articles={articles}
            onReadArticle={handleReadArticle}
            onNavigateAuthor={handleNavigateAuthor}
            onBackHome={handleNavigateHome}
          />
        ) : activeView === 'article' ? (
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
            onNavigateAuthor={handleNavigateAuthor}
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
            onNavigateAuthor={handleNavigateAuthor}
          />
        ) : activeView !== 'home' ? (
          <StaticPageView
            pageType={activeView}
            onBack={handleNavigateHome}
            onBackToHome={handleNavigateHome}
            onNavigate={handleNavigateStaticPage}
            onNavigatePage={handleNavigateStaticPage}
            onNavigateAuthor={handleNavigateAuthor}
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
              onNavigateAuthor={handleNavigateAuthor}
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
                onNavigateAuthor={handleNavigateAuthor}
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
                        onNavigateAuthor={handleNavigateAuthor}
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

                {/* FILTER TABS FOR PRODUCT REVIEWS */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {[
                    { id: 'all-clickbank', label: 'All 13 ClickBank Reviews (13)' },
                    { id: 'bloodsugar-metabolism', label: 'Blood Sugar & Metabolism (4)' },
                    { id: 'joints-mobility', label: 'Joints & Mobility (2)' },
                    { id: 'brain-hearing', label: 'Brain & Hearing (3)' },
                    { id: 'sleep-women', label: "Sleep & Women's Health (2)" },
                    { id: 'nutrition', label: 'Longevity Nutrition (1)' },
                    { id: 'all-catalog', label: 'Complete Catalog (20)' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setProductReviewFilter(tab.id)}
                      className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                        productReviewFilter === tab.id
                          ? 'bg-emerald-800 text-white shadow-2xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {(() => {
                  const clickBank13Ids = [
                    'bloodsugar-gluco6',
                    'metabolism-puravive',
                    'bloodsugar-defender',
                    'gut-leanbiome',
                    'joints-genesis',
                    'sleep-deep-rest',
                    'aging-cellular-boost',
                    'aging-cortexi',
                    'joints-instasoothe',
                    'nutrition-mediterraneandiet',
                    'wellness-femicore',
                    'brain-thebrainsong',
                    'brain-neurovera',
                  ];

                  const all13Offers = clickBank13Ids
                    .map((id) => clickBankOffers.find((o) => o.id === id))
                    .filter(Boolean) as ClickBankOffer[];

                  let displayedOffers: ClickBankOffer[] = all13Offers;
                  if (productReviewFilter === 'bloodsugar-metabolism') {
                    displayedOffers = all13Offers.filter((o) =>
                      ['bloodsugar-gluco6', 'metabolism-puravive', 'bloodsugar-defender', 'gut-leanbiome'].includes(o.id)
                    );
                  } else if (productReviewFilter === 'joints-mobility') {
                    displayedOffers = all13Offers.filter((o) =>
                      ['joints-genesis', 'joints-instasoothe'].includes(o.id)
                    );
                  } else if (productReviewFilter === 'brain-hearing') {
                    displayedOffers = all13Offers.filter((o) =>
                      ['aging-cortexi', 'brain-thebrainsong', 'brain-neurovera'].includes(o.id)
                    );
                  } else if (productReviewFilter === 'sleep-women') {
                    displayedOffers = all13Offers.filter((o) =>
                      ['sleep-deep-rest', 'wellness-femicore'].includes(o.id)
                    );
                  } else if (productReviewFilter === 'nutrition') {
                    displayedOffers = all13Offers.filter((o) =>
                      ['nutrition-mediterraneandiet'].includes(o.id)
                    );
                  } else if (productReviewFilter === 'all-catalog') {
                    displayedOffers = clickBankOffers;
                  }

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedOffers.map((offer) => {
                    const destinationUrl = getAffiliateUrl(offer.id);
                        // Dropship types
                        const isCreatineGummies = offer.id === 'duwzgu-creatine-gummies' || (offer.id.includes('creatine') && (offer.id.includes('gumm') || offer.id.includes('candy')));
                        const isSleepGummies = offer.id.includes('sleep') && (offer.id.includes('gumm') || offer.id.includes('melatonin'));
                        const isImmuneGummies = (offer.id.includes('gumm') || offer.id.includes('elderberry')) && !isSleepGummies && !isCreatineGummies;
                        const isCreatine = offer.id.includes('creatine') && !isCreatineGummies;
                        const isDuwzgu = (offer.id.includes('duwzgu') || offer.id.includes('d3k2')) && !isCreatine && !isImmuneGummies && !isSleepGummies && !isCreatineGummies;
                        const isEelhoe = offer.id.includes('eelhoe');
                        const isPreworkout = offer.id.includes('caffeine') || offer.id.includes('preworkout');

                        // ClickBank products
                        const isBrainSong = offer.id.includes('brainsong') || offer.vendorId === 'thebrainsong';
                        const isMedDiet = offer.id.includes('mediterranean') || offer.vendorId === 'mediterraneandiet';
                        const isFemiCore = offer.id.includes('femicore') || offer.vendorId === 'femicore';
                        const isCortexi = offer.id.includes('cortexi') || offer.vendorId === 'cortexi';
                        const isInstaSoothe = offer.id.includes('instasoothe') || offer.vendorId === 'instasoothe';
                        const isNeuroVera = offer.id.includes('neurovera') || offer.vendorId === 'neurovera';
                        const isLeanBiome = offer.id.includes('leanbiome') || offer.vendorId === 'leanbiome';
                        const isJointGenesis = offer.id.includes('joints-genesis') || offer.id.includes('jointgenesis') || offer.vendorId === 'jointgenesis';
                        const isSleepTea = offer.id.includes('sleep-deep') || offer.id.includes('sleepslim') || offer.vendorId === 'sleeptea';
                        const isProNervium = offer.id.includes('aging-cellular') || offer.id.includes('pronervium') || offer.vendorId === 'pronervium';
                        const isGluco6 = offer.id.includes('gluco6') || offer.vendorId === 'gluco6';
                        const isSugarDefender = offer.id.includes('defender') || offer.vendorId === 'sugardef';
                        const isPuravive = offer.id.includes('puravive') || offer.vendorId === 'puravive';

                        const badgeText = 
                          isBrainSong ? "★ Audio Brainwave Therapy" :
                          isMedDiet ? "★ #1 Diet Challenge" :
                          isFemiCore ? "★ Women's Health #1" :
                          isCortexi ? "★ Hearing & Brain" :
                          isInstaSoothe ? "★ Knee & Mobility" :
                          isNeuroVera ? "★ Neuro-Nutrition" :
                          isJointGenesis ? "★ Synovial Joint Matrix" :
                          isLeanBiome ? "★ Microbiome Formula" :
                          isSleepTea ? "★ Restorative Sleep" :
                          isProNervium ? "★ Nerve & Longevity" :
                          isGluco6 ? "★ 2026 Top Glycemic" :
                          isSugarDefender ? "★ Glycemic Matrix" :
                          isPuravive ? "★ Top Metabolism" :
                          isCreatineGummies || isSleepGummies || isImmuneGummies || isEelhoe || isCreatine || isDuwzgu || isPreworkout ? "★ Editor's Pick" : "Vetted Formula";

                        const badgeColor = 
                          isBrainSong ? "bg-purple-700 text-white" :
                          isMedDiet ? "bg-emerald-700 text-white" :
                          isFemiCore ? "bg-rose-700 text-white" :
                          isCortexi ? "bg-indigo-700 text-white" :
                          isInstaSoothe ? "bg-teal-700 text-white" :
                          isNeuroVera ? "bg-blue-700 text-white" :
                          isJointGenesis ? "bg-cyan-700 text-white" :
                          isLeanBiome ? "bg-emerald-700 text-white" :
                          isSleepTea ? "bg-violet-700 text-white" :
                          isProNervium ? "bg-amber-700 text-white" :
                          isCreatineGummies ? "bg-cyan-700 text-white" :
                          isSleepGummies ? "bg-indigo-700 text-white" :
                          isImmuneGummies ? "bg-purple-700 text-white" :
                          isEelhoe ? "bg-pink-600 text-white" :
                          isCreatine ? "bg-blue-600 text-white" :
                          isDuwzgu ? "bg-amber-600 text-white" :
                          isPreworkout ? "bg-orange-600 text-white" :
                          "bg-emerald-700 text-white";

                        const cardBorder = 
                          isCreatineGummies ? "border-cyan-400/80 ring-1 ring-cyan-400/30 shadow-md" :
                          isSleepGummies ? "border-indigo-400/80 ring-1 ring-indigo-400/30 shadow-md" :
                          isImmuneGummies ? "border-purple-400/80 ring-1 ring-purple-400/30 shadow-md" :
                          isEelhoe ? "border-pink-300/80 ring-1 ring-pink-400/30 shadow-md" :
                          isCreatine ? "border-blue-400/80 ring-1 ring-blue-400/30 shadow-md" :
                          isDuwzgu ? "border-amber-400/80 ring-1 ring-amber-400/30 shadow-md" :
                          isPreworkout ? "border-orange-400/80 ring-1 ring-orange-400/30 shadow-md" :
                          isBrainSong ? "border-purple-200 hover:border-purple-400 hover:shadow-lg" :
                          isMedDiet ? "border-emerald-200 hover:border-emerald-400 hover:shadow-lg" :
                          isFemiCore ? "border-rose-200 hover:border-rose-400 hover:shadow-lg" :
                          isCortexi ? "border-indigo-200 hover:border-indigo-400 hover:shadow-lg" :
                          isInstaSoothe ? "border-teal-200 hover:border-teal-400 hover:shadow-lg" :
                          "border-slate-200 hover:border-emerald-600/40 hover:shadow-lg";

                        const pricingText = 
                          isBrainSong ? "$39 digital audio" :
                          isMedDiet ? "$27 complete challenge" :
                          isCreatineGummies ? "$26.99 retail" :
                          isSleepGummies || isImmuneGummies ? "$18.99 retail" :
                          isEelhoe ? "$24.99 retail" :
                          isCreatine ? "$27.99 retail" :
                          isDuwzgu ? "$19.99 retail" :
                          isPreworkout ? "$22.99 retail" :
                          `$${offer.bundlePrice} / bottle`;

                        const standardText = 
                          isBrainSong ? "Audio Neuro-Acoustic Protocol" :
                          isMedDiet ? "Whole-Food Meal Blueprint" :
                          isFemiCore ? "USA cGMP / Hormone-Free" :
                          isCortexi ? "USA cGMP / Sublingual Dropper" :
                          isInstaSoothe ? "USA cGMP / AKBA Boswellia" :
                          isNeuroVera ? "USA cGMP / Standardized Bacosides" :
                          isJointGenesis ? "USA cGMP / Mobilee Hyaluronan" :
                          isLeanBiome ? "USA cGMP / DRcaps Acid-Resistant" :
                          isSleepTea ? "USA cGMP / USDA Spiced Brew" :
                          isProNervium ? "USA cGMP / Benfotiamine & ALA" :
                          isCreatineGummies ? "USA cGMP / 6000mg Formula" :
                          isSleepGummies || isImmuneGummies ? "USA cGMP / Plant Pectin" :
                          isEelhoe ? "Dermatology Tested" :
                          isCreatine ? "USA cGMP / Micronized 200 Mesh" :
                          isPreworkout ? "USA cGMP / HPLC Tested" :
                          "USA cGMP Facility";

                        const buyBtnText = 
                          isBrainSong ? "Download Audio Protocol ($39)" :
                          isMedDiet ? "Access 30-Day Challenge ($27)" :
                          isCreatineGummies ? "Claim Discount Now ($26.99)" :
                          isSleepGummies || isImmuneGummies ? "Claim Discount Now ($18.99)" :
                          isEelhoe ? "Claim Discount Now ($24.99)" :
                          isCreatine ? "Claim Discount Now ($27.99)" :
                          isDuwzgu ? "Claim Discount Now ($19.99)" :
                          isPreworkout ? "Claim Discount Now ($22.99)" :
                          "Check Official VIP Discount";

                    return (
                      <div
                        key={offer.id}
                        className={`bg-white rounded-2xl border ${cardBorder} transition-all flex flex-col justify-between overflow-hidden group`}
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
                          <div className={`absolute top-2.5 right-2.5 ${badgeColor} text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs`}>
                            {badgeText}
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
                                <span className="font-bold text-slate-900">{pricingText}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500">Manufacturing Standard:</span>
                                <span className="text-slate-700 font-medium">{standardText}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <a
                              href={destinationUrl}
                              target="_blank"
                              rel="nofollow sponsored noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-1.5 text-center text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md py-2.5 px-3 rounded-xl transition-all active:scale-98 cursor-pointer"
                              id={`claim-deal-btn-${offer.id}`}
                            >
                              <span>{buyBtnText}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            <button
                              onClick={() => handleOpenReview(offer)}
                              className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2 px-3 rounded-xl transition-colors cursor-pointer"
                              id={`read-review-btn-${offer.id}`}
                            >
                              <span>Read Independent Review</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                  );
                })()}

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
        onNavigateAuthor={handleNavigateAuthor}
      />

      {/* Wellness Assessment Modal */}
      <QuizFunnel
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        offers={clickBankOffers}
        affiliateSettings={affiliateSettings}
        onOpenReview={handleOpenReview}
      />

      {/* Contextual Product Actions (Displayed on review and article views when scrolling) */}
      {(activeView === 'review' || activeView === 'article') && (
        <StickyDealBar
          activeOffer={contextOffer}
          affiliateSettings={affiliateSettings}
          onOpenReview={handleOpenReview}
        />
      )}

      {/* Live Social Proof Activity Toast */}
      {affiliateSettings.enableLiveNotification && (
        <LiveDealToast
          offers={clickBankOffers}
          affiliateSettings={affiliateSettings}
        />
      )}

      {/* Exit-Intent VIP Special Discount Modal */}
      <ExitIntentModal
        activeOffer={contextOffer}
        affiliateSettings={affiliateSettings}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

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
