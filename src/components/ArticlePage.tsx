import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ListTree, 
  AlertTriangle, 
  Share2, 
  Check, 
  Bookmark, 
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Printer
} from 'lucide-react';
import { Article, ClickBankOffer, AffiliateSettings } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { AuthorBox } from './AuthorBox';
import { AffiliateDisclosure } from './AffiliateDisclosure';
import { AffiliateCTA } from './AffiliateCTA';
import { FAQSection, FAQItem } from './FAQSection';
import { RelatedArticles } from './RelatedArticles';
import { InArticleNativeBanner } from './InArticleNativeBanner';
import { OfferProductGallery } from './OfferProductGallery';

interface ArticlePageProps {
  article: Article;
  allArticles: Article[];
  affiliateSettings: AffiliateSettings;
  onBack: () => void;
  onReadArticle: (article: Article) => void;
  onNavigateCategory?: (category: string) => void;
  onNavigateDisclosure?: () => void;
  onOpenReview?: (offerId: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  allArticles,
  affiliateSettings,
  onBack,
  onReadArticle,
  onNavigateCategory,
  onNavigateDisclosure,
  onOpenReview,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTocId, setActiveTocId] = useState<string>('');

  // Generate category slug for SEO URLs
  const categorySlug = (article?.category || 'wellness').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const canonicalUrl = article.path 
    ? `https://vitalpathdaily.com${article.path}` 
    : `https://vitalpathdaily.com/${categorySlug}/${article?.slug || ''}/`;

  // Dynamic SEO Structured Data (Schema.org Article & Breadcrumbs)
  useEffect(() => {
    // 1. Update Title and Meta Tags
    document.title = article.seoTitle 
      ? `${article.seoTitle} | VitalPath Daily` 
      : `${article.title} | VitalPath Daily`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', article.metaDescription || article.summary);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 2. Inject Article JSON-LD Schema
    const schemaGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://vitalpathdaily.com',
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': article.category,
              'item': `https://vitalpathdaily.com/${categorySlug}/`,
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': article.title,
              'item': canonicalUrl,
            },
          ],
        },
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          'headline': article.seoTitle || article.title,
          'description': article.metaDescription || article.summary,
          'image': [article.coverImage],
          'datePublished': '2026-09-12T08:00:00+00:00',
          'dateModified': '2026-09-13T10:00:00+00:00',
          'author': {
            '@type': 'Person',
            'name': article.author.name,
            'jobTitle': article.author.role,
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'VitalPath Daily',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://vitalpathdaily.com/assets/vitalpath-logo.png',
            },
          },
          'about': article.category,
        },
      ],
    };

    const scriptId = 'article-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaGraph);

    // Scroll to top upon viewing
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [article, canonicalUrl, categorySlug]);

  // Handle Share / Copy Link
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Handle Print-Friendly View (triggers simplified print view via CSS media queries)
  const handlePrint = () => {
    window.print();
  };

  // Build Table of Contents items from content sections
  const tocItems = article.contentSections.map((sec, idx) => ({
    id: `section-${idx}`,
    title: sec.heading,
  }));

  // Build Contextual FAQs for this article type if not explicitly provided
  const articleFaqs: FAQItem[] = article.faqs && article.faqs.length > 0 ? article.faqs : [
    {
      question: `Is this protocol safe for adults over 50?`,
      answer: `Yes, this guidance is specifically curated for mature adults. However, because metabolic adaptations and prescription medications vary between individuals, you should always consult your personal physician before making significant dietary or supplement adjustments.`
    },
    {
      question: `How soon might someone notice lifestyle or dietary improvements?`,
      answer: `Clinical nutrition observations indicate that consistent meal sequencing and daily hydration habits often support digestive ease and daytime alertness within 1 to 3 weeks. Long-term biological adaptations generally require 8 to 12 weeks of steady adherence.`
    },
    {
      question: `Can supplements replace prescribed medications?`,
      answer: `No. Dietary supplements are intended solely to support normal bodily processes and fill nutritional gaps. They should never be utilized as a substitute for physician-prescribed treatments or ongoing medical oversight.`
    }
  ];

  const hasAffiliateLink = !!article.linkedOfferId;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Breadcrumb Navigation & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-200 no-print print:hidden">
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onBack },
            { 
              label: article.category, 
              onClick: () => onNavigateCategory && onNavigateCategory(article.category) 
            },
            { label: article.title }
          ]}
        />

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Print Friendly Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 px-3 py-1.5 rounded-lg transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            id="article-print-btn"
            title="Print simplified, ink-friendly article or save as PDF"
            aria-label="Print article"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-700" />
            <span>Print Guide</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            id="article-share-btn"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Guide</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Article Content Column (around 750px) */}
        <article className="lg:col-span-8 article-container">
          {/* Simplified Print View Header (Visible ONLY during print) */}
          <div className="hidden print:block mb-8 pb-4 border-b-2 border-slate-900 text-slate-900">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div>
                <h2 className="font-serif-title text-2xl font-bold tracking-tight text-slate-900 m-0">
                  VitalPath Daily
                </h2>
                <p className="text-xs text-slate-600 m-0">
                  Evidence-Based Clinical Nutrition, Metabolic Health &amp; Longevity
                </p>
              </div>
              <div className="text-right text-[10pt] text-slate-600 font-mono">
                <span>vitalpathdaily.com</span>
                <br />
                <span className="text-[9pt] text-slate-500">Archival Clinical Print Edition</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
              <span><strong>Category:</strong> {article.category}</span>
              <span>•</span>
              <span><strong>Published:</strong> {article.publishedDate}</span>
              <span>•</span>
              <span><strong>Author:</strong> {article.author.name} ({article.author.credentials})</span>
              {article.medicallyReviewedBy && (
                <>
                  <span>•</span>
                  <span><strong>Reviewed by:</strong> {article.medicallyReviewedBy.name}</span>
                </>
              )}
            </div>
          </div>
          {/* Category, Read Time, Dates Header */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 mb-3">
            <span className="font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published: {article.publishedDate}
            </span>
            <span>•</span>
            <span className="text-emerald-800 font-medium">
              Updated: September 13, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          {/* Article Subtitle / Introduction */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-6">
            {article.subtitle}
          </p>

          {/* Editorial / Medical Review Bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-600/40"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">
                  By {article.author.name}
                </p>
                <p className="text-xs text-slate-500">
                  {article.author.role} • {article.author.credentials}
                </p>
              </div>
            </div>

            {article.medicallyReviewedBy && (
              <div className="flex items-center gap-2.5 bg-white border border-emerald-200/80 px-3.5 py-2 rounded-xl text-xs text-slate-800 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold block text-emerald-950">Medically Reviewed</span>
                  <span className="text-slate-500 text-[11px]">{article.medicallyReviewedBy.name}</span>
                </div>
              </div>
            )}
          </div>

          {/* Featured Image with Descriptive Alt Text */}
          <figure className="rounded-2xl overflow-hidden mb-8 shadow-sm border border-slate-200 bg-slate-100">
            <img
              src={article.coverImage}
              alt={`Clinical illustration representing ${article.title}`}
              className="w-full h-72 sm:h-96 object-cover"
              loading="eager"
            />
            <figcaption className="text-center text-[11px] text-slate-500 py-2 bg-slate-50 border-t border-slate-200">
              Evidence-informed guidance for mature adults. Medical photography & research diagram.
            </figcaption>
          </figure>

          {/* Affiliate Disclosure (if affiliate links are present) */}
          {hasAffiliateLink && (
            <div className="no-print print:hidden affiliate-disclosure-box">
              <AffiliateDisclosure 
                variant="banner" 
                onNavigateDisclosure={onNavigateDisclosure} 
              />
            </div>
          )}

          {/* Key Clinical Takeaways / Bullet Points */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 sm:p-6 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Key Takeaways & Protocol Summary</span>
            </div>
            <p className="text-sm text-emerald-950 font-medium leading-relaxed mb-3">
              {article.summary}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Focuses on sustained metabolic and cellular stability rather than rapid, unsustainable changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Integrates dietary timing, natural micronutrient cofactors, and daily stress modulation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Formulated with responsible, non-exaggerated evidence suitable for individuals over 40.</span>
              </li>
            </ul>
          </div>

          {/* Top In-Article Protocol Recommendation (if linked offer exists) */}
          {article.linkedOfferId && (
            <div className="no-print print:hidden in-article-banner">
              <InArticleNativeBanner 
                offerId={article.linkedOfferId} 
                onReadReview={onOpenReview}
                title="Editor's Vetted Protocol Spotlight"
                contextNote="Clinically supported formula matching the biological mechanisms in this guide."
              />
            </div>
          )}

          {/* Table of Contents (Mobile/In-content) */}
          {tocItems.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8 no-print print:hidden table-of-contents">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                <ListTree className="w-4 h-4 text-emerald-700" />
                <span>Table of Contents</span>
              </div>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal pl-5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-emerald-800 hover:underline transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          setActiveTocId(item.id);
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* H2 / H3 Article Content Sections */}
          <div className="space-y-10 text-base text-slate-800 leading-relaxed font-sans">
            {article.contentSections.map((sec, idx) => (
              <section key={idx} id={`section-${idx}`} className="space-y-4 pt-2 scroll-mt-24">
                <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  {sec.heading}
                </h2>

                {sec.subheading && (
                  <p className="text-sm font-medium text-emerald-800 italic">
                    {sec.subheading}
                  </p>
                )}

                {/* Paragraphs */}
                {sec.paragraphs && sec.paragraphs.length > 0 ? (
                  sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed text-slate-700 text-base">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="leading-relaxed text-slate-700 text-base">
                    {sec.content}
                  </p>
                )}

                {/* Bullet points if present */}
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-2.5 my-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-sm text-slate-700">
                    {sec.bulletPoints.map((point, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subsections if present */}
                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="space-y-6 pt-2">
                    {sec.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-2 border-l-2 border-emerald-600/30 pl-4 py-1">
                        <h3 className="font-serif-title text-xl font-bold text-slate-900">
                          {sub.title}
                        </h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                          {sub.content}
                        </p>
                        {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                          <ul className="space-y-1.5 pt-1 text-sm text-slate-600">
                            {sub.bulletPoints.map((sp, spIdx) => (
                              <li key={spIdx} className="flex items-start gap-2">
                                <span className="text-emerald-700 font-bold">•</span>
                                <span>{sp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {sec.callout && (
                  <div className="my-5 p-4 rounded-xl border border-blue-200 bg-blue-50/70 text-blue-950 text-sm">
                    <span className="font-bold uppercase text-[11px] tracking-wider text-blue-900 block mb-1">
                      🔬 Scientific Context:
                    </span>
                    <p className="italic text-blue-900/90 leading-relaxed">{sec.callout.text}</p>
                  </div>
                )}

                {/* Mid-Article Clinical Callout Banner (after Section 2) */}
                {idx === 1 && article.linkedOfferId && (
                  <div className="no-print print:hidden in-article-banner">
                    <InArticleNativeBanner 
                      offerId={article.linkedOfferId} 
                      onReadReview={onOpenReview}
                      title="Mid-Guide Recommended Protocol"
                      contextNote="Verified direct manufacturer pricing and 60-day money-back guarantee."
                    />
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Structured Table Section (if present) */}
          {article.tableData && (
            <div className="my-10 space-y-3" id="article-comparison-table">
              {article.tableData.title && (
                <h3 className="font-serif-title text-xl font-bold text-slate-900">
                  {article.tableData.title}
                </h3>
              )}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-2xs">
                <table className="w-full text-left text-sm text-slate-700 border-collapse">
                  <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                    <tr>
                      {article.tableData.headers.map((header, hIdx) => (
                        <th key={hIdx} className="py-3.5 px-4 sm:px-5">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {article.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-3 px-4 sm:px-5 text-xs sm:text-sm leading-relaxed">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {article.tableData.caption && (
                <p className="text-xs text-slate-500 italic text-center sm:text-left">
                  * {article.tableData.caption}
                </p>
              )}
            </div>
          )}

          {/* Editorial Internal Links Section */}
          {article.internalLinks && article.internalLinks.length > 0 && (
            <div className="my-10 bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Related Research & In-Depth Reviews</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                Explore our complementary research guides and independent editorial product breakdowns:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {article.internalLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    onClick={(e) => {
                      e.preventDefault();
                      // Find article if matching or navigate
                      const found = allArticles.find(a => a.path === link.url || a.slug === link.url.split('/').filter(Boolean).pop());
                      if (found) {
                        onReadArticle(found);
                      } else if (link.url.includes('gluco6') && onOpenReview) {
                        onOpenReview('gluco6');
                      } else if (link.url.includes('sugar-defender') && onOpenReview) {
                        onOpenReview('sugarDefender');
                      } else if (link.url.includes('puravive') && onOpenReview) {
                        onOpenReview('puravive');
                      } else {
                        window.location.pathname = link.url;
                      }
                    }}
                    className="flex flex-col p-3 rounded-xl bg-white border border-emerald-200/70 hover:border-emerald-500 hover:shadow-xs transition-all group cursor-pointer"
                  >
                    <span className="text-xs font-bold text-emerald-950 group-hover:text-emerald-700 flex items-center justify-between">
                      <span>{link.anchorText}</span>
                      <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-emerald-600 opacity-60 group-hover:opacity-100" />
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {link.context}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 5-Photo Visual Product Inspection Gallery (if article references an offer) */}
          {article.linkedOfferId && (
            <div className="no-print print:hidden product-gallery">
              <OfferProductGallery
                offerId={article.linkedOfferId}
                offerName={article.title.split(':')[0]}
                onReadReview={onOpenReview}
              />
            </div>
          )}

          {/* Contextual Affiliate CTA Component (if article references an offer) */}
          {article.linkedOfferId && (
            <div className="no-print print:hidden article-cta-box">
              <AffiliateCTA
                offerId={article.linkedOfferId}
                customHeadline="Interested in learning more?"
                customButtonText="View Official Product Information"
                variant="card"
                onReadReview={onOpenReview}
              />
            </div>
          )}

          {/* Medical Disclaimer Callout */}
          <div className="my-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Medical Disclaimer</span>
            </div>
            <p className="text-amber-900/90">
              The information presented on VitalPath Daily is published solely for informational and educational purposes. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or before beginning any diet, supplement, or exercise routine.
            </p>
          </div>

          {/* FAQ Section */}
          <FAQSection faqs={articleFaqs} />

          {/* Scientific Citations & References */}
          {article.references && article.references.length > 0 && (
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Peer-Reviewed Scientific Literature & Clinical References</span>
              </h3>
              <ol className="space-y-2 text-xs text-slate-600 list-decimal pl-5">
                {article.references.map((ref) => (
                  <li key={ref.id} className="leading-relaxed">
                    <span className="font-semibold text-slate-800">{ref.title}.</span>{' '}
                    <span className="italic">{ref.journal}</span> ({ref.year}).{' '}
                    {ref.doiOrUrl && (
                      <span className="text-emerald-700 font-mono text-[11px]">DOI: {ref.doiOrUrl}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Author / Editor Bio Component */}
          <AuthorBox
            author={article.author}
            medicallyReviewedBy={article.medicallyReviewedBy}
            publishedDate={article.publishedDate}
            updatedDate="September 13, 2026"
          />

          {/* Related Articles Component */}
          <div className="no-print print:hidden related-articles-section">
            <RelatedArticles
              currentArticleId={article.id}
              category={article.category}
              articles={allArticles}
              onReadArticle={onReadArticle}
            />
          </div>

          {/* Simplified Print View Document Footer (Visible ONLY during print) */}
          <div className="hidden print:block mt-10 pt-6 border-t border-slate-400 text-[9.5pt] text-slate-600 space-y-2">
            <p className="font-bold text-slate-800 uppercase tracking-wider text-[8.5pt]">
              VitalPath Daily Clinical Verification &amp; Educational Notice:
            </p>
            <p className="leading-relaxed">
              This clinical summary was printed for offline reference and personal educational review. It does not constitute formal medical diagnosis, therapy, or direct physician prescription. Always consult a board-certified physician or healthcare provider prior to adjusting medications, diet, or clinical supplementation.
            </p>
            <div className="pt-2 text-[8pt] text-slate-500 font-mono flex items-center justify-between">
              <span>Document Reference: {canonicalUrl}</span>
              <span>© {new Date().getFullYear()} VitalPath Daily. All rights reserved.</span>
            </div>
          </div>
        </article>

        {/* Desktop Sidebar Column (~350px) */}
        <aside className="lg:col-span-4 space-y-8 no-print print:hidden">
          {/* Quick Navigation Back */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
            <button
              onClick={onBack}
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-slate-200 py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Articles</span>
            </button>
          </div>

          {/* Sticky Table of Contents on Desktop */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs sticky top-24 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              <ListTree className="w-4 h-4 text-emerald-700" />
              <span>In This Guide</span>
            </div>

            <nav className="space-y-2 text-xs text-slate-600">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block hover:text-emerald-800 hover:underline transition-colors py-1 truncate"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* Sidebar Compact Affiliate Box */}
            {article.linkedOfferId && (
              <div className="pt-4 border-t border-slate-100">
                <AffiliateCTA
                  offerId={article.linkedOfferId}
                  variant="compact"
                  customHeadline="Vetted Recommendation:"
                  customButtonText="View Offer"
                />
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
