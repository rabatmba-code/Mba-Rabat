import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle, 
  BookOpen, 
  Share2, 
  Sparkles,
  Award
} from 'lucide-react';
import { Article, ClickBankOffer, AffiliateSettings } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface ArticleViewProps {
  article: Article;
  relatedOffer?: ClickBankOffer;
  affiliateSettings: AffiliateSettings;
  onBack: () => void;
  onOpenReview: (offer: ClickBankOffer) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  relatedOffer,
  affiliateSettings,
  onBack,
  onOpenReview,
}) => {
  const hoplinkUrl = relatedOffer ? buildHoplink(relatedOffer, affiliateSettings) : '#';

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 mb-6 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 transition-colors cursor-pointer"
        id="back-to-articles-btn"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to All Health Protocols</span>
      </button>

      {/* Category & Date */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
        <span className="font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
          {article.category}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {article.publishedDate}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {article.readingTime}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
        {article.title}
      </h1>

      <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-6">
        {article.subtitle}
      </p>

      {/* Medical Review Stamp */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={article.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
            alt={article.author?.name || 'Editorial Team'}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500"
          />
          <div>
            <p className="text-sm font-bold text-slate-900">Written by {article.author?.name || 'VitalPath Editorial Team'}</p>
            <p className="text-xs text-slate-500">{article.author?.role || 'Medical Contributor'} • {article.author?.credentials || 'Evidence-Based Research'}</p>
          </div>
        </div>

        {article.medicallyReviewedBy && (
          <div className="flex items-center gap-2.5 bg-white border border-emerald-200 px-3.5 py-2 rounded-lg text-xs text-emerald-950 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold block text-emerald-900">Medically Reviewed</span>
              <span className="text-emerald-800 text-[11px]">{article.medicallyReviewedBy.name}</span>
            </div>
          </div>
        )}
      </div>

      {/* Cover Image */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-md border border-slate-200">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-72 sm:h-96 object-cover"
        />
      </div>

      {/* Article Executive Summary Callout */}
      <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-5 rounded-r-xl mb-8">
        <h4 className="font-bold text-sm text-emerald-950 uppercase tracking-wider mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          Clinical Takeaways at a Glance
        </h4>
        <p className="text-sm text-emerald-900 leading-relaxed">
          {article.summary}
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8 text-base text-slate-800 leading-relaxed">
        {article.contentSections.map((sec, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="font-serif-title text-2xl font-bold text-slate-900 pt-2">
              {sec.heading}
            </h2>
            <p className="leading-relaxed text-slate-700">
              {sec.content}
            </p>

            {sec.callout && (
              <div className="my-4 p-4 rounded-xl border border-blue-200 bg-blue-50/60 text-blue-950 text-sm">
                <span className="font-bold uppercase text-[11px] tracking-wider text-blue-900 block mb-1">
                  🔬 Clinical Trial Insight:
                </span>
                <p className="italic text-blue-900/90">{sec.callout.text}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ClickBank Bridge Advertorial Box (Seamlessly Contextualized) */}
      {relatedOffer && (
        <div className="my-12 bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-emerald-800/40">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 fill-slate-950" />
            Recommended Protocol Recommendation
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h3 className="font-serif-title text-2xl font-bold text-white leading-snug">
                Putting The Science to Work: {relatedOffer.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {relatedOffer.verdict}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-emerald-300 font-semibold">
                <span>✓ {relatedOffer.guaranteeDays}-Day Money Back Guarantee</span>
                <span>✓ 100% Plant-Based Purity</span>
                <span>✓ Verified Customer Rating: {relatedOffer.rating} / 5.0</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs text-slate-300">Direct From Merchant Lab:</span>
              <a
                href={hoplinkUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="w-full text-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                id="article-bridge-cta-btn"
              >
                <span>Check Availability</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onOpenReview(relatedOffer)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                View Full Lab Ingredient Breakdown →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scientific Citations & References */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          Peer-Reviewed References & Clinical Sources ({article.references.length})
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
    </article>
  );
};
