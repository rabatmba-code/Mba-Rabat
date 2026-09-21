import React from 'react';
import { BookOpen, Clock, ArrowRight, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { Article } from '../types';
import { getRelatedClinicalGuides, getTopicClusterForArticle } from '../utils/topicClusters';

interface RelatedArticlesProps {
  currentArticle: Article;
  articles: Article[];
  onReadArticle: (article: Article) => void;
  // Optional backward compatibility props
  currentArticleId?: string;
  category?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentArticle,
  articles,
  onReadArticle,
  currentArticleId,
  category,
}) => {
  // If only currentArticleId was passed, find article in articles array
  const activeArticle = currentArticle || articles.find((a) => a.id === currentArticleId);
  if (!activeArticle) return null;

  // Resolve topic cluster and top 3 curated related guides
  const topicCluster = getTopicClusterForArticle(activeArticle);
  const relatedGuides = getRelatedClinicalGuides(activeArticle, articles);

  if (relatedGuides.length === 0) return null;

  return (
    <section 
      className="my-12 pt-10 border-t-2 border-slate-200/90" 
      id="related-clinical-guides"
      aria-label="Related Clinical Guides"
    >
      {/* Topic Cluster Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-900 border border-emerald-300/70 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Topic Cluster • {topicCluster.badgeName}</span>
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Related Clinical Guides
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Deepen your understanding with peer-reviewed companion protocols, biochemical synergy mechanisms, and physician-reviewed lifestyle interventions.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Evidence-Based Cluster</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedGuides.map(({ article: art, synergyNote, clusterName }) => {
          const categorySlug = art.path 
            ? art.path.split('/')[1] 
            : (art.category || 'wellness').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          const articleUrl = art.path || `/${categorySlug}/${art.slug}/`;

          return (
            <article
              key={art.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600/60 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Article Card Image with Anchor Tag for Googlebot Crawling */}
                <a
                  href={articleUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onReadArticle(art);
                  }}
                  className="block aspect-16/10 overflow-hidden bg-slate-100 relative cursor-pointer"
                  title={art.title}
                >
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider border border-white/10 shadow-xs">
                    {art.category}
                  </span>
                </a>

                {/* Content Container */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {art.readingTime}
                    </span>
                    <span>•</span>
                    <span>{art.publishedDate}</span>
                  </div>

                  <h4 className="font-serif-title font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                    <a
                      href={articleUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        onReadArticle(art);
                      }}
                      className="hover:underline focus:outline-hidden"
                    >
                      {art.title}
                    </a>
                  </h4>

                  {/* Summary / Subtitle snippet */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {art.subtitle || art.summary}
                  </p>

                  {/* Clinical Synergy Highlight Box */}
                  {synergyNote && (
                    <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-xl p-3 text-[11px] text-emerald-950 leading-relaxed flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-emerald-900 block mb-0.5">Clinical Synergy:</strong>
                        <span>{synergyNote}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Read Action */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={articleUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onReadArticle(art);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 group-hover:underline cursor-pointer"
                >
                  <span>Read Clinical Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                {art.medicallyReviewedBy && (
                  <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                    MD Reviewed
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
