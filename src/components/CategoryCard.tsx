import React from 'react';
import { 
  Activity, 
  Flame, 
  Moon, 
  Clock, 
  Apple, 
  Sparkles, 
  Scale, 
  ArrowRight 
} from 'lucide-react';

interface CategoryCardProps {
  name?: string;
  title?: string;
  slug?: string;
  description?: string;
  count?: number;
  articleCount?: number;
  isActive?: boolean;
  onSelect?: (category: string) => void;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  title,
  slug,
  description,
  count,
  articleCount,
  isActive = false,
  onSelect,
  onClick,
}) => {
  const categoryName = name || title || 'General Wellness';
  const effectiveCount = count ?? articleCount ?? 0;
  const effectiveSlug = slug || categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const defaultDescriptions: Record<string, string> = {
    'healthy blood sugar': 'Glucose balance, insulin sensitivity & nutrition',
    'weight management': 'Healthy metabolic habits & nutritional support',
    'sleep & stress': 'Circadian rhythm optimization & rest recovery',
    'healthy aging': 'Cellular vitality, joint mobility & longevity',
    'nutrition': 'Whole food dietary density & micronutrient balance',
    'product reviews': 'Laboratory ingredient audits & cGMP verification',
    'comparisons': 'Side-by-side supplement evaluations',
  };

  const effectiveDescription =
    description ||
    defaultDescriptions[categoryName.toLowerCase()] ||
    'Evidence-informed guidance for daily wellbeing';

  const getCategoryIcon = (n: string) => {
    const safeStr = (n || '').toLowerCase();
    switch (safeStr) {
      case 'healthy blood sugar':
      case 'blood sugar':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'weight management':
      case 'metabolism':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'sleep & stress':
      case 'sleep':
        return <Moon className="w-5 h-5 text-indigo-600" />;
      case 'healthy aging':
      case 'longevity':
        return <Clock className="w-5 h-5 text-teal-600" />;
      case 'nutrition':
        return <Apple className="w-5 h-5 text-rose-600" />;
      case 'product reviews':
      case 'reviews':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'comparisons':
        return <Scale className="w-5 h-5 text-blue-600" />;
      default:
        return <Activity className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getAccentColor = (n: string, active: boolean) => {
    if (active) {
      return 'border-emerald-600 bg-emerald-50 shadow-xs ring-2 ring-emerald-600/20';
    }
    const safeStr = (n || '').toLowerCase();
    switch (safeStr) {
      case 'healthy blood sugar':
        return 'hover:border-emerald-500/60 bg-white hover:bg-emerald-50/30 text-emerald-950';
      case 'weight management':
        return 'hover:border-amber-500/60 bg-white hover:bg-amber-50/30 text-amber-950';
      case 'sleep & stress':
        return 'hover:border-indigo-500/60 bg-white hover:bg-indigo-50/30 text-indigo-950';
      case 'healthy aging':
        return 'hover:border-teal-500/60 bg-white hover:bg-teal-50/30 text-teal-950';
      case 'nutrition':
        return 'hover:border-rose-500/60 bg-white hover:bg-rose-50/30 text-rose-950';
      case 'product reviews':
        return 'hover:border-purple-500/60 bg-white hover:bg-purple-50/30 text-purple-950';
      case 'comparisons':
        return 'hover:border-blue-500/60 bg-white hover:bg-blue-50/30 text-blue-950';
      default:
        return 'hover:border-emerald-500/60 bg-white hover:bg-slate-50 text-slate-900';
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (onSelect) {
      onSelect(categoryName);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 sm:p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${getAccentColor(
        categoryName,
        isActive
      )}`}
      id={`category-card-${effectiveSlug}`}
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-slate-50 shadow-2xs flex items-center justify-center mb-3 border border-slate-200/80 group-hover:scale-105 transition-transform">
          {getCategoryIcon(categoryName)}
        </div>
        <h4 className="font-serif-title font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-800 transition-colors mb-1 leading-snug">
          {categoryName}
        </h4>
        <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {effectiveDescription}
        </p>
      </div>

      <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-medium text-slate-500 text-[11px]">
          {effectiveCount} {effectiveCount === 1 ? 'Guide' : 'Guides'}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform text-[11px]">
          <span>Explore</span>
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
