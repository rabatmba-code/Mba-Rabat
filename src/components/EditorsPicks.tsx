import React from 'react';
import { Award, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface EditorsPicksProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const EditorsPicks: React.FC<EditorsPicksProps> = ({ articles, onReadArticle }) => {
  // Select top 6 curated editorial guides
  const guides = articles.slice(0, 6);

  return (
    <section className="my-12" id="editors-guides">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Curated Evidence-Based Library</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
            Editor's Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Comprehensive, clinically reviewed introductory guides to metabolic vitality, nutrition, and daily longevity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((article, index) => (
          <div
            key={article.id}
            onClick={() => onReadArticle(article)}
            className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600/40 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    Guide #{index + 1}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                  <span>•</span>
                  <span>{article.author.name}</span>
                </div>

                <h3 className="font-serif-title font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-700">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
