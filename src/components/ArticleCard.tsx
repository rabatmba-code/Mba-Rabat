import React from 'react';
import { Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead }) => {
  return (
    <div 
      onClick={() => onRead(article)}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col group cursor-pointer"
      id={`article-card-${article.id}`}
    >
      <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
          {article.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readingTime}
            </span>
            <span>•</span>
            <span>{article.publishedDate}</span>
          </div>

          <h3 className="font-serif-title text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2">
            {article.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {article.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
              alt={article.author?.name || 'Editorial Team'}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-slate-700">
              {article.author?.name || 'Editorial Team'}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
