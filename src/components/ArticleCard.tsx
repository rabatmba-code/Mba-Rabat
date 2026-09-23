import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { getOptimizedImageUrl, IMAGE_DIMENSIONS } from '../utils/imageOptimization';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
  onNavigateAuthor?: (slug: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead, onNavigateAuthor }) => {
  const categorySlug = article.path
    ? article.path.split('/')[1]
    : (article.category || 'wellness').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const articleUrl = article.path || `/${categorySlug}/${article.slug}/`;
  const optimizedCover = getOptimizedImageUrl(article.coverImage, { width: 640, height: 360 });

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
          src={optimizedCover}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
          width={IMAGE_DIMENSIONS.CARD.width}
          height={IMAGE_DIMENSIONS.CARD.height}
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
          {onNavigateAuthor ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                const slug = article.author?.slug || article.author?.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'elena-vance';
                onNavigateAuthor(slug);
              }}
              className="flex items-center gap-2 cursor-pointer group/author"
              title={`View ${article.author?.name || 'Author'} profile`}
            >
              <img
                src={article.author?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
                alt={article.author?.name || 'Editorial Team'}
                className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 group-hover/author:ring-emerald-600 transition-all"
                loading="lazy"
              />
              <span className="text-xs font-medium text-slate-700 group-hover/author:text-emerald-800 group-hover/author:underline transition-colors">
                {article.author?.name || 'Editorial Team'}
              </span>
            </div>
          ) : (
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
          )}

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
