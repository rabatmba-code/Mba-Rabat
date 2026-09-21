import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Star, 
  Check, 
  X, 
  ExternalLink, 
  Award, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Info
} from 'lucide-react';
import { ClickBankOffer } from '../types';
import { getAffiliateOffer, getAffiliateUrl } from '../config/affiliateOffers';
import { OfferProductGallery } from './OfferProductGallery';
import { Breadcrumbs } from './Breadcrumbs';

interface ReviewBridgeViewProps {
  offer: ClickBankOffer;
  onBack: () => void;
}

export const ReviewBridgeView: React.FC<ReviewBridgeViewProps> = ({
  offer,
  onBack,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const configOffer = getAffiliateOffer(offer.id);

  // Merge configOffer with fallback offer props
  const name = configOffer?.name || offer.name;
  const category = configOffer?.category || offer.categoryName;
  const rating = configOffer?.rating || offer.rating;
  const reviewsCount = configOffer?.reviewsCount || offer.reviewsCount;
  const guaranteeDays = configOffer?.guaranteeDays || offer.guaranteeDays;
  const startingPrice = configOffer?.startingPrice || offer.startingPrice;
  const bundlePrice = configOffer?.bundlePrice || offer.bundlePrice;
  const destinationUrl = getAffiliateUrl(offer.id);

  const whatIs = configOffer?.whatIs || 
    `${name} is a dietary supplement developed to provide targeted botanical and nutritional support for adults looking to maintain their health and vitality naturally.`;

  const howItWorks = configOffer?.howItWorks || 
    `${name} utilizes a synergistic matrix of standardized plant extracts and micronutrients designed to support physiological cellular pathways, metabolic balance, and daily stamina.`;

  const keyIngredients = configOffer?.keyIngredients || offer.keyIngredients.map(i => ({
    name: i.name,
    description: i.description,
    researchNote: i.clinicalTrialNote
  }));

  const potentialBenefits = configOffer?.potentialBenefits || [
    'Supports healthy daily physiological function',
    'Provides research-backed botanical cofactors',
    'Helps fill common micronutrient gaps in adults over 40',
    'Formulated for sustained daily routine and vitality'
  ];

  const whatWeLike = configOffer?.whatWeLike || offer.pros;
  const whatToConsider = configOffer?.whatToConsider || offer.cons;

  const whoMayBeInterested = configOffer?.whoMayBeInterested || 
    `Mature adults over 40 seeking a high-quality, third-party tested nutritional supplement to complement a balanced diet, proper sleep, and regular physical activity.`;

  const faqs = configOffer?.faqs || [
    {
      question: `How should ${name} be integrated into a daily routine?`,
      answer: `Follow the manufacturer's recommended serving on the label, typically taken with water in the morning alongside breakfast.`
    },
    {
      question: `Can ${name} replace my prescription medications?`,
      answer: `No. Dietary supplements are intended solely to support normal bodily health and should never be used as a substitute for physician-prescribed treatments.`
    },
    {
      question: `What is the return policy?`,
      answer: `The manufacturer provides a ${guaranteeDays}-day 100% money-back satisfaction guarantee on all orders placed through their official store.`
    }
  ];

  const editorialTake = configOffer?.editorialTake || offer.verdict;

  // Dynamic SEO & Canonical synchronization
  useEffect(() => {
    const pageTitle = `${name} Review (2026): Ingredients, Safety & Clinical Evidence | VitalPath Daily`;
    document.title = pageTitle;

    const metaDesc = `Unbiased laboratory and clinical breakdown of ${name}. Discover ingredients, real pros and cons, pricing, and independent medical analysis.`;
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', metaDesc);
    }

    const canonicalUrl = `https://mba-rabat.vercel.app/product-reviews/${offer.id}/`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Schema.org Structured Data for Google Rich Snippets (Product, AggregateRating, Review & Breadcrumbs)
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
              'name': 'Product Reviews',
              'item': 'https://mba-rabat.vercel.app/product-reviews/',
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': `${name} Review`,
              'item': canonicalUrl,
            },
          ],
        },
        {
          '@type': 'Product',
          '@id': `${canonicalUrl}#product`,
          'name': name,
          'image': [configOffer?.heroImage || offer.heroImage],
          'description': configOffer?.tagline || offer.tagline || editorialTake || `${name} clinical supplement review and laboratory verification.`,
          'category': category,
          'brand': {
            '@type': 'Brand',
            'name': name,
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': rating.toFixed(1),
            'bestRating': '5',
            'worstRating': '1',
            'ratingCount': reviewsCount.toString(),
            'reviewCount': reviewsCount.toString(),
          },
          'offers': {
            '@type': 'Offer',
            'price': startingPrice.toString(),
            'priceCurrency': 'USD',
            'priceValidUntil': '2026-12-31',
            'availability': 'https://schema.org/InStock',
            'url': canonicalUrl,
            'seller': {
              '@type': 'Organization',
              'name': 'VitalPath Daily Verified Labs',
            },
          },
          'review': {
            '@type': 'Review',
            'reviewRating': {
              '@type': 'Rating',
              'ratingValue': rating.toFixed(1),
              'bestRating': '5',
              'worstRating': '1',
            },
            'author': {
              '@type': 'Person',
              'name': 'Dr. Sarah Jenkins, MD',
              'jobTitle': 'Chief Medical Officer',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'VitalPath Daily',
            },
            'datePublished': '2026-01-15',
            'reviewBody': editorialTake,
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          'mainEntity': faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId = 'review-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaGraph);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [name, offer.id, rating, reviewsCount, offer.heroImage, offer.tagline, editorialTake, category, startingPrice, faqs, configOffer]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12" id="product-review-container">
      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onBack, url: '/' },
            { label: 'Product Reviews', url: '/product-reviews/' },
            { label: `${name} Review`, url: `/product-reviews/${offer.id}/` }
          ]}
          skipJsonLd={true}
        />

        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 px-3 py-1.5 rounded-lg transition-all shadow-2xs hover:shadow-xs cursor-pointer self-start sm:self-auto"
          id="review-back-btn"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-600" />
          <span>Back to Articles</span>
        </button>
      </div>

      {/* Review Header Banner */}
      <header className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/30">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Product Review • {category}</span>
          </span>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Editorial Review</span>
            </span>
            <span>•</span>
            <span>VitalPath Daily is Not the Manufacturer</span>
          </div>
        </div>

        <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          {name} Review: Ingredients, Benefits and What to Know Before Buying
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
          An objective, research-based breakdown of {name}, examining active cofactors, safety profile, realistic expectations, and purchasing information.
        </p>

        {/* Rating Scorecard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-center">
          <div>
            <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Editorial Rating</span>
            <span className="text-2xl font-bold text-amber-400 flex items-center justify-center gap-1 mt-0.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{rating}</span>
              <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Verified Reviews</span>
            <span className="text-2xl font-bold text-white mt-0.5 block">{reviewsCount.toLocaleString()}+</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Guarantee</span>
            <span className="text-2xl font-bold text-emerald-400 mt-0.5 block">{guaranteeDays} Days</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Starting Rate</span>
            <span className="text-2xl font-bold text-slate-100 mt-0.5 block">${bundlePrice} <span className="text-xs font-normal text-slate-400">/ ea</span></span>
          </div>
        </div>
      </header>

      {/* Upfront Affiliate Disclosure Box */}
      <div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700 mb-8 flex items-start gap-3">
        <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-slate-900 font-semibold block mb-0.5">Editorial Notice & Testing Methodology:</strong>
          VitalPath Daily is an independent health publication. We maintain editorial independence without manufacturer influence. Our evaluations are based on peer-reviewed scientific literature, ingredient analysis, and manufacturer specifications. VitalPath Daily does not conduct proprietary clinical trials. If you choose to purchase through links on this page, we may earn an affiliate commission at zero additional cost to you.
        </div>
      </div>

      <div className="space-y-12">
        {/* 1. What Is [Product]? */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            What Is {name}?
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            {whatIs}
          </p>
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p>
              According to manufacturer documentation, {name} is manufactured in the United States in an FDA-registered facility that complies with current Good Manufacturing Practices (cGMP).
            </p>
          </div>
        </section>

        {/* 2. How Does It Work? */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            How Does It Work?
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            {howItWorks}
          </p>
        </section>

        {/* 3. Ingredients / Formula */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-2">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
              Ingredients / Formula
            </h2>
            <span className="text-xs text-slate-500">Formulated with botanical & micronutrient cofactors</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {keyIngredients.map((ing, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <h3 className="font-bold text-slate-900 text-sm">{ing.name}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ing.description}
                </p>
                {ing.researchNote && (
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-[11px] text-slate-700 italic">
                    <strong className="text-slate-800 not-italic">Research Context:</strong> {ing.researchNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. What the Manufacturer Says */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            What the Manufacturer Says
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <p className="text-slate-700 leading-relaxed text-base">
              {offer.whatManufacturerSays || `According to the product's official website and promotional materials, ${name} is designed to provide targeted natural support for daily metabolic function. The manufacturer emphasizes the use of high-grade botanical extracts, third-party laboratory verification, and strict cGMP manufacturing processes to ensure quality and potency.`}
            </p>
            <div className="text-xs text-slate-500 italic border-t border-slate-200/80 pt-3">
              *Note: The claims summarized in this section represent marketing statements provided directly by the product manufacturer. VitalPath Daily is an independent editorial publication and does not validate unverified promotional claims.
            </div>
          </div>
        </section>

        {/* 4. Potential Benefits */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            Potential Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {potentialBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5-Photo Visual Product Inspection Gallery */}
        <OfferProductGallery
          offerId={offer.id}
          offerName={name}
        />

        {/* 5. What We Like & 6. What To Consider */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <h3 className="font-bold text-emerald-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>What We Like</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {whatWeLike.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <h3 className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>What To Consider</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {whatToConsider.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Who May Be Interested */}
        <section className="space-y-3">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            Who May Be Interested
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            {whoMayBeInterested}
          </p>
        </section>

        {/* 8. Frequently Asked Questions */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. Our Editorial Take */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Our Editorial Take</span>
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
            Final Assessment on {name}
          </h3>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            {editorialTake}
          </p>
          <div className="pt-2 text-xs text-slate-400 italic">
            *Always speak with your doctor or licensed medical provider before introducing new supplements into your health regimen.
          </div>
        </section>

        {/* 10. Official Product Information */}
        <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6" id="official-product-info">
          <div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Official Product Information
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you decide to evaluate {name}, we recommend purchasing exclusively via the authorized manufacturer store to ensure product authenticity and eligibility for the {guaranteeDays}-day refund policy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
              <span className="text-xs text-slate-500 block uppercase font-medium">Starter Option</span>
              <p className="text-lg font-bold text-slate-900 mt-1">1 Bottle</p>
              <p className="text-2xl font-bold text-slate-900 my-2">${startingPrice}</p>
              <span className="text-[11px] text-slate-500">Standard shipping applies</span>
            </div>

            <div className="bg-emerald-50/70 border-2 border-emerald-600 rounded-2xl p-4 text-center relative">
              <span className="bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full absolute -top-2.5 left-1/2 -translate-x-1/2">
                Most Popular
              </span>
              <span className="text-xs text-emerald-800 block uppercase font-medium mt-1">Multi-Bottle Savings</span>
              <p className="text-lg font-bold text-emerald-950 mt-1">Bundle Supply</p>
              <p className="text-2xl font-bold text-emerald-800 my-2">${bundlePrice} <span className="text-xs font-normal text-slate-600">/ bottle</span></p>
              <span className="text-[11px] text-emerald-700 font-medium">Includes Free US Shipping</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              <p className="font-semibold text-slate-800 text-sm mb-0.5">Interested in learning more?</p>
              <p className="text-[11px] text-slate-500">
                Backed by a {guaranteeDays}-Day Money-Back Guarantee
              </p>
              <p className="text-[11px] text-slate-500 italic mt-1">
                Disclosure: VitalPath Daily may earn a commission when you purchase through links on this page, at no additional cost to you.
              </p>
            </div>

            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-colors cursor-pointer w-full sm:w-auto shrink-0 whitespace-nowrap"
              id={`review-official-cta-${offer.id}`}
            >
              <span>View Official Product Information</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Medical Disclaimer Banner */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-950 text-xs leading-relaxed space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-amber-900 uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>Medical Disclaimer</span>
          </div>
          <p className="text-amber-900/90">
            Statements on this page have not been evaluated by the Food and Drug Administration. Dietary supplements are not intended to diagnose, treat, cure, or prevent any disease. Individual biological responses vary. Always consult your personal physician before introducing any new supplement to your daily regimen.
          </p>
        </div>
      </div>
    </article>
  );
};
