import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead }) => {
  const categorySlug = article.path
    ? article.path.split('/')[1]
    : (article.category || 'wellness').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const articleUrl = article.path || `/${categorySlug}/${article.slug}/`;

  return (
    <article 
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600/50 hover:shadow-md transition-all flex flex-col group"
      id={`article-card-${article.id}`}
    >
      {/* Visual Header Link */}
      <a
        href={articleUrl}
        onClick={(e) => {
          e.preventDefault();
          onRead(article);
        }}
        className="block relative aspect-16/9 overflow-hidden bg-slate-100 cursor-pointer"
        title={article.title}
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
          {article.category}
        </div>
      </a>

      {/* Card Body */}
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
            <a
              href={articleUrl}
              onClick={(e) => {
                e.preventDefault();
                onRead(article);
              }}
              className="hover:underline focus:outline-hidden cursor-pointer"
            >
              {article.title}
            </a>
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {article.summary}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
              alt={article.author?.name || 'Editorial Team'}
              className="w-7 h-7 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-xs font-medium text-slate-700">
              {article.author?.name || 'Editorial Team'}
            </span>
          </div>

          <a
            href={articleUrl}
            onClick={(e) => {
              e.preventDefault();
              onRead(article);
            }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-all cursor-pointer"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
