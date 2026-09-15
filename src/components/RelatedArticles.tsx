import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface RelatedArticlesProps {
  currentArticleId: string;
  category: string;
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentArticleId,
  category,
  articles,
  onReadArticle,
}) => {
  // Find up to 3 related articles, prioritizing same category, then other top guides
  const related = articles
    .filter((a) => a.id !== currentArticleId)
    .sort((a, b) => {
      const aSame = a.category === category ? 1 : 0;
      const bSame = b.category === category ? 1 : 0;
      return bSame - aSame;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="my-12 pt-8 border-t border-slate-200" id="related-articles">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Further Reading</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold text-slate-900">
            Related Wellness Guides
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((art) => (
          <div
            key={art.id}
            onClick={() => onReadArticle(art)}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-600/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <img
                  src={art.coverImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {art.category}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readingTime}
                  </span>
                  <span>•</span>
                  <span>{art.publishedDate}</span>
                </div>

                <h4 className="font-serif-title font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                  {art.title}
                </h4>
              </div>
            </div>

            <div className="px-4 pb-4 pt-1 flex items-center text-xs font-semibold text-emerald-700 group-hover:underline gap-1">
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
