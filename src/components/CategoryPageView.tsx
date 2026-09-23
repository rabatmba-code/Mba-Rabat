import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Star, 
  BookOpen, 
  Activity, 
  Flame, 
  Moon, 
  HeartPulse, 
  Apple, 
  Award, 
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Filter,
  Sparkles
} from 'lucide-react';
import { Article, ClickBankOffer, AffiliateSettings } from '../types';
import { ArticleCard } from './ArticleCard';
import { getAffiliateUrl } from '../config/affiliateOffers';
import { Breadcrumbs } from './Breadcrumbs';
import { CATEGORY_PILLAR_NETWORKS } from '../utils/internalLinking';

interface CategoryPageViewProps {
  category: string;
  articles: Article[];
  allOffers: ClickBankOffer[];
  onBack: () => void;
  onReadArticle: (article: Article) => void;
  onOpenReview: (offer: ClickBankOffer) => void;
  onSelectCategory: (category: string) => void;
  affiliateSettings?: AffiliateSettings;
  onNavigateAuthor?: (slug: string) => void;
}

export const CategoryPageView: React.FC<CategoryPageViewProps> = ({
  category,
  articles,
  allOffers,
  onBack,
  onReadArticle,
  onOpenReview,
  onSelectCategory,
  onNavigateAuthor,
}) => {
  const [filterSubtopic, setFilterSubtopic] = useState<string>('all');

  // Category Metadata & Clinical Descriptors
  const categoryMeta: Record<string, {
    title: string;
    headline: string;
    description: string;
    clinicalFocus: string;
    subtopics: string[];
    icon: React.ReactNode;
    color: string;
    recommendedOfferId?: string;
  }> = {
    'Healthy Blood Sugar': {
      title: 'Healthy Blood Sugar & Glycemic Vitality Protocols',
      headline: 'Evidence-Based Protocols for Steady Glucose & Insulin Sensitivity',
      description: 'Explore clinically evaluated guides on meal sequencing, targeted botanical cofactors, carbohydrate thresholds, and morning glucose stability designed for mature adults.',
      clinicalFocus: 'Pancreatic beta-cell support, postprandial glucose blunting, and GLUT-4 receptor efficiency.',
      subtopics: ['all', 'Meal Sequencing', 'Insulin Sensitivity', 'Natural Botanicals', 'Morning Spikes'],
      icon: <Activity className="w-6 h-6 text-rose-500" />,
      color: 'rose',
      recommendedOfferId: 'gluco6'
    },
    'Weight Management': {
      title: 'Metabolic Health & Weight Management Protocols',
      headline: 'Science-Backed Approaches to Metabolic Rate, BAT & Satiety',
      description: 'Practical, non-restrictive metabolic protocols focused on brown adipose tissue (BAT) activation, liver lipid clearance, leptin signaling, and sustainable fat loss after 40.',
      clinicalFocus: 'Thermogenesis, visceral adiposity reduction, and appetite regulatory hormones.',
      subtopics: ['all', 'BAT Activation', 'Metabolism After 40', 'Visceral Fat', 'Hormonal Satiety'],
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      color: 'amber',
      recommendedOfferId: 'puravive'
    },
    'Sleep & Stress': {
      title: 'Sleep Architecture & Cortisol Rhythm Protocols',
      headline: 'Restorative Circadian Alignment and Stress Mitigation',
      description: 'Comprehensive research on evening cortisol reduction, slow-wave sleep phases, circadian light hygiene, and neuro-calming amino acids to awaken genuinely refreshed.',
      clinicalFocus: 'HPA-axis downregulation, GABA receptor support, and REM/Deep sleep cycles.',
      subtopics: ['all', 'Cortisol Rhythms', 'Deep Sleep Phases', 'Circadian Light', 'Calming Adaptogens'],
      icon: <Moon className="w-6 h-6 text-indigo-500" />,
      color: 'indigo',
      recommendedOfferId: 'zencortex'
    },
    'Healthy Aging': {
      title: 'Healthy Aging & Longevity Guidance Protocols',
      headline: 'Cellular Autophagy, Joint Lubrication & Everyday Vitality',
      description: 'Peer-reviewed insights into synovial joint fluid preservation, mitochondrial rejuvenation, hearing and cognitive acuity, and age-defying nutritional habits.',
      clinicalFocus: 'Hyaluronan matrix protection, mitochondrial biogenesis, and inflammatory pathway balance.',
      subtopics: ['all', 'Joint Mobility', 'Cellular Health', 'Cognitive Focus', 'Nerve Vitality'],
      icon: <HeartPulse className="w-6 h-6 text-teal-500" />,
      color: 'teal',
      recommendedOfferId: 'joint-genesis'
    },
    'Nutrition': {
      title: 'Clinical Nutrition & Gut Microbiome Protocols',
      headline: 'Microbiome Diversity, Anti-Inflammatory Foods & Digestion',
      description: 'Discover food sequencing strategies, prebiotic fiber matrices, gut lining integrity protocols, and gut-brain axis optimization verified by clinical nutritional science.',
      clinicalFocus: 'Bacterial strain diversity, short-chain fatty acid production, and mucosal barrier repair.',
      subtopics: ['all', 'Gut Microbiome', 'Prebiotic Fiber', 'Anti-Inflammatory', 'Digestive Enzymes'],
      icon: <Apple className="w-6 h-6 text-emerald-500" />,
      color: 'emerald',
      recommendedOfferId: 'gluco6'
    },
    'Product Reviews': {
      title: 'Laboratory Reviews & Ingredient Audits',
      headline: 'Independent Supplement Verifications, cGMP Checks & Refund Policies',
      description: 'Our medical review board analyzes peer-reviewed literature, ingredient bioavailability, third-party cGMP standards, and manufacturer refund policies without promotional bias.',
      clinicalFocus: 'HPLC purity testing, clinical dosage adherence, clean labels, and fair refund transparency.',
      subtopics: ['all', 'Blood Sugar Formulations', 'Metabolic Boosters', 'Joint & Aging', 'Audited Purity'],
      icon: <Star className="w-6 h-6 text-amber-500" />,
      color: 'amber',
      recommendedOfferId: 'gluco6'
    }
  };

  const currentMeta = categoryMeta[category] || {
    title: `${category} Wellness Library`,
    headline: `Evidence-Informed Research & Clinical Guides for ${category}`,
    description: `Browse all articles, educational summaries, and verified research relating to ${category}.`,
    clinicalFocus: 'Evidence-based protocols and clinical literature summaries.',
    subtopics: ['all'],
    icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
    color: 'emerald'
  };

  // Filter articles matching this category
  const categoryArticles = articles.filter(art => {
    const artCat = (art.category || '').toLowerCase();
    const selCat = category.toLowerCase();

    if (category === 'Product Reviews') {
      return art.linkedOfferId || artCat.includes('review') || art.title.toLowerCase().includes('review');
    }
    if (category === 'Healthy Blood Sugar') {
      return artCat.includes('blood sugar') || artCat.includes('glucose') || artCat.includes('glycemic') ||
        art.title.toLowerCase().includes('blood sugar') || art.title.toLowerCase().includes('glucose');
    }
    if (category === 'Weight Management') {
      return artCat.includes('metabolism') || artCat.includes('weight') || artCat.includes('fat') ||
        art.title.toLowerCase().includes('metabolic') || art.title.toLowerCase().includes('weight');
    }
    if (category === 'Sleep & Stress') {
      return artCat.includes('sleep') || artCat.includes('stress') || artCat.includes('cortisol') ||
        art.title.toLowerCase().includes('sleep') || art.title.toLowerCase().includes('stress');
    }
    if (category === 'Healthy Aging') {
      return artCat.includes('aging') || artCat.includes('longevity') || artCat.includes('joint') || artCat.includes('nerve') || artCat.includes('hearing') ||
        art.title.toLowerCase().includes('aging') || art.title.toLowerCase().includes('joint') || art.title.toLowerCase().includes('nerve');
    }
    if (category === 'Nutrition') {
      return artCat.includes('nutrition') || artCat.includes('gut') || artCat.includes('food') ||
        art.title.toLowerCase().includes('diet') || art.title.toLowerCase().includes('nutrition');
    }

    return artCat.includes(selCat) || art.title.toLowerCase().includes(selCat);
  });

  // Highlighted Lead Story for this category
  const leadArticle = categoryArticles[0];
  const remainingArticles = categoryArticles.slice(1);

  // Find recommended clinical product for this category
  const recommendedOffer = allOffers.find(o => 
    (currentMeta.recommendedOfferId && (o.id === currentMeta.recommendedOfferId || o.vendorId === currentMeta.recommendedOfferId)) ||
    o.categoryName?.toLowerCase().includes(category.toLowerCase().split(' ')[0])
  ) || allOffers[0];

  const allCategoriesList = [
    'Healthy Blood Sugar',
    'Weight Management',
    'Sleep & Stress',
    'Healthy Aging',
    'Nutrition',
    'Product Reviews'
  ];

  const categorySlugMap: Record<string, string> = {
    'Healthy Blood Sugar': 'healthy-blood-sugar',
    'Weight Management': 'weight-management',
    'Sleep & Stress': 'sleep-and-stress',
    'Healthy Aging': 'healthy-aging',
    'Nutrition': 'nutrition',
    'Product Reviews': 'product-reviews',
  };
  const categorySlug = categorySlugMap[category] || category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const canonicalUrl = `https://mba-rabat.vercel.app/${categorySlug}/`;

  // Dynamic SEO Structured Data for Category Hubs (Schema.org BreadcrumbList & CollectionPage)
  useEffect(() => {
    const pageTitle = `${currentMeta.title} | VitalPath Daily`;
    document.title = pageTitle;

    const setMetaTag = (selector: string, attr: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', currentMeta.description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', currentMeta.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', currentMeta.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Schema.org CollectionPage & BreadcrumbList
    const schemaGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://mba-rabat.vercel.app/',
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Categories',
              'item': 'https://mba-rabat.vercel.app/#categories',
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': category,
              'item': canonicalUrl,
            },
          ],
        },
        {
          '@type': 'CollectionPage',
          '@id': `${canonicalUrl}#collection`,
          'url': canonicalUrl,
          'name': currentMeta.title,
          'headline': currentMeta.headline,
          'description': currentMeta.description,
          'isPartOf': {
            '@type': 'WebSite',
            '@id': 'https://mba-rabat.vercel.app/#website',
            'name': 'VitalPath Daily',
            'url': 'https://mba-rabat.vercel.app/',
          },
          'about': {
            '@type': 'Thing',
            'name': category,
          },
        },
      ],
    };

    const scriptId = 'category-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaGraph);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      document.title = 'VitalPath Daily | Evidence-Based Health, Longevity & Clinical Nutrition';
      setMetaTag('meta[name="description"]', 'name', 'description', 'VitalPath Daily provides evidence-informed health research, physician-reviewed protocols, metabolic vitality guides, and independent clinical supplement audits.');
    };
  }, [category, currentMeta, canonicalUrl]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12" id="category-dedicated-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* TOP NAVIGATION / BREADCRUMBS & BACK BUTTON */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: onBack, url: '/' },
              { label: 'Categories', url: '/' },
              { label: category, url: `/${categorySlug}/` }
            ]}
            skipJsonLd={true}
          />

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-white hover:bg-emerald-50 px-4 py-2 rounded-xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer group self-start sm:self-auto"
            id="category-back-btn"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Previous Page / Home</span>
          </button>
        </div>

        {/* DEDICATED CATEGORY HERO BANNER */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {currentMeta.icon}
              <span>Editorial Series • {category}</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {currentMeta.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {currentMeta.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                {categoryArticles.length} Evidence-Informed Guides
              </span>
              <span>•</span>
              <span>Peer-Reviewed Literature</span>
              <span>•</span>
              <span className="text-slate-300">{currentMeta.clinicalFocus}</span>
            </div>
          </div>
        </div>

        {/* SUBTOPICS FILTER ROW */}
        {currentMeta.subtopics && currentMeta.subtopics.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              Focus:
            </span>
            {currentMeta.subtopics.map((st) => (
              <button
                key={st}
                onClick={() => setFilterSubtopic(st)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  filterSubtopic === st
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {st === 'all' ? 'All Guides' : st}
              </button>
            ))}
          </div>
        )}

        {/* LEAD ARTICLE SPOTLIGHT (If available) */}
        {leadArticle && (() => {
          const leadCategorySlug = (category || 'healthy-blood-sugar').toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const leadArticleUrl = leadArticle.path || `/${leadCategorySlug}/${leadArticle.slug}/`;

          return (
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Featured In {category}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {leadArticle.readingTime}
                      </span>
                    </div>

                    <a 
                      href={leadArticleUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        onReadArticle(leadArticle);
                      }}
                      className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 leading-snug hover:text-emerald-800 transition-colors cursor-pointer block"
                    >
                      {leadArticle.title}
                    </a>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {leadArticle.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={leadArticle.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
                        alt={leadArticle.author?.name || 'Editorial Team'}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/20"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-slate-900">{leadArticle.author?.name || 'VitalPath Editorial Team'}</p>
                        <p className="text-slate-400">{leadArticle.author?.credentials || 'Evidence-Based Research'}</p>
                      </div>
                    </div>

                    <a
                      href={leadArticleUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        onReadArticle(leadArticle);
                      }}
                      className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer group"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <a
                  href={leadArticleUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onReadArticle(leadArticle);
                  }}
                  className="lg:col-span-5 relative min-h-[220px] lg:min-h-full bg-slate-100 block group overflow-hidden"
                >
                  <img
                    src={leadArticle.coverImage}
                    alt={leadArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          );
        })()}

        {/* TOPIC CLUSTER & INTERLINKED PROTOCOLS (Direct Permanent Crawl Network) */}
        {CATEGORY_PILLAR_NETWORKS[category] && (
          <section className="bg-emerald-50/50 rounded-3xl border border-emerald-200/80 p-6 sm:p-8 space-y-4" id="category-pillar-network">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/60 pb-3">
              <div>
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Topic Cluster • Core Protocols &amp; Comparative Audits</span>
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
                  Featured Clinical Protocols &amp; Verified Reviews
                </h3>
              </div>
              <span className="text-xs text-slate-500">
                Direct indexing crawl path
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
              {CATEGORY_PILLAR_NETWORKS[category].map((item, pIdx) => (
                <a
                  key={pIdx}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    const found = articles.find(a => a.path === item.url || a.slug === item.url.split('/').filter(Boolean).pop());
                    if (found) {
                      onReadArticle(found);
                    } else if (item.url.includes('gluco6') && onOpenReview) {
                      onOpenReview(allOffers.find(o => o.id === 'gluco6') || allOffers[0]);
                    } else if (item.url.includes('sugar-defender') && onOpenReview) {
                      onOpenReview(allOffers.find(o => o.id === 'sugar-defender') || allOffers[0]);
                    } else if (item.url.includes('puravive') && onOpenReview) {
                      onOpenReview(allOffers.find(o => o.id === 'puravive') || allOffers[0]);
                    } else {
                      window.location.pathname = item.url;
                    }
                  }}
                  className="flex flex-col justify-between p-4 rounded-2xl bg-white border border-emerald-200/70 hover:border-emerald-500 hover:shadow-xs transition-all group cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <span className="inline-block text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-semibold text-emerald-700 group-hover:text-emerald-900 flex items-center justify-between">
                    <span>Read guide</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* REMAINING ARTICLES IN THIS CATEGORY */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif-title text-2xl font-bold text-slate-900">
              All {category} Guides &amp; Protocols
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Showing {categoryArticles.length} articles
            </span>
          </div>

          {categoryArticles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 text-base">No guides listed under this filter</h4>
              <p className="text-xs text-slate-500 mt-1">Please explore our other editorial wellness categories.</p>
              <button
                onClick={onBack}
                className="mt-4 text-xs font-semibold bg-emerald-700 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Return to Full Library
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onRead={onReadArticle}
                  onNavigateAuthor={onNavigateAuthor}
                />
              ))}
            </div>
          )}
        </section>

        {/* CLINICAL FORMULATION AUDIT (If applicable for this category) */}
        {recommendedOffer && (
          <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 w-fit mb-2">
                  <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  Audited Formula for {category}
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-white">
                  {recommendedOffer.name} • Clinical Formulation Review
                </h3>
              </div>
              <div className="text-xs text-amber-400 font-semibold bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                ★ {recommendedOffer.rating} / 5.0 Medical Verification
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {recommendedOffer.verdict || recommendedOffer.tagline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tested in FDA-Registered cGMP Facility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{recommendedOffer.guaranteeDays}-Day 100% Refund Policy</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={getAffiliateUrl(recommendedOffer.id)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                  >
                    <span>Check Official {recommendedOffer.name.split(' ')[0]} Deal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenReview(recommendedOffer)}
                    className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    <span>Read Ingredient Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Active Ingredients:
                </span>
                <div className="space-y-1.5">
                  {recommendedOffer.keyIngredients?.slice(0, 3).map((ing, i) => (
                    <div key={i} className="text-slate-300">
                      <strong className="text-white">{ing.name}:</strong> {ing.clinicalTrialNote || ing.description}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM NAVIGATION: SWITCH TO OTHER CATEGORIES OR RETURN HOME */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif-title text-lg font-bold text-slate-900">
                Explore Other Wellness Categories
              </h4>
              <p className="text-xs text-slate-500">
                Switch topics without leaving or return back to the main homepage.
              </p>
            </div>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-sm cursor-pointer self-start sm:self-auto"
              id="category-bottom-back-home-btn"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Return to Home / الرئيسية</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {allCategoriesList.map((cat) => {
              const catSlug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <a
                  key={cat}
                  href={`/${catSlug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory(cat);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-xs font-semibold p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    cat === category
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  {cat}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
