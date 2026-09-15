import React, { useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  url?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  // Inject BreadcrumbList JSON-LD structured data for Google & SEO
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.url ? `https://vitalpathdaily.com${item.url}` : undefined,
      })),
    };

    const scriptId = 'breadcrumbs-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-500">
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-1.5 min-w-0">
              {idx === 0 && (
                <Home className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-0.5" />
              )}
              {isLast ? (
                <span className="font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-xs md:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="hover:text-emerald-700 transition-colors cursor-pointer truncate max-w-[140px] sm:max-w-[180px]"
                    >
                      {item.label}
                    </button>
                  ) : item.url ? (
                    <a
                      href={item.url}
                      className="hover:text-emerald-700 transition-colors truncate max-w-[140px] sm:max-w-[180px]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
