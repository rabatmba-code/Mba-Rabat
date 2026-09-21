import React, { useEffect } from 'react';
import { ChevronRight, Home, Folder } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  skipJsonLd?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, skipJsonLd = false }) => {
  // Inject BreadcrumbList JSON-LD structured data for Google & SEO (unless handled centrally by parent)
  useEffect(() => {
    if (skipJsonLd) return;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => {
        const itemUrl = item.url 
          ? (item.url.startsWith('http') ? item.url : `https://mba-rabat.vercel.app${item.url}`)
          : (typeof window !== 'undefined' ? window.location.href : undefined);

        return {
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          ...(itemUrl ? { item: itemUrl } : {}),
        };
      }),
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
  }, [items, skipJsonLd]);

  return (
    <nav 
      aria-label="Breadcrumb navigation" 
      className="inline-flex items-center bg-slate-50/90 border border-slate-200/80 rounded-xl px-3 sm:px-4 py-2 text-xs text-slate-500 shadow-2xs max-w-full overflow-hidden"
    >
      <ol 
        className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isHome = idx === 0;
          const isCategory = idx === 1 && items.length > 2;
          const itemUrl = item.url 
            ? (item.url.startsWith('http') ? item.url : `https://mba-rabat.vercel.app${item.url.startsWith('/') ? item.url : `/${item.url}`}`)
            : undefined;

          return (
            <li 
              key={idx} 
              className="flex items-center gap-1.5 min-w-0"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(idx + 1)} />

              {isLast ? (
                <span 
                  className="font-bold text-slate-800 truncate max-w-[180px] sm:max-w-xs md:max-w-sm lg:max-w-md" 
                  aria-current="page"
                  itemProp="name"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <a
                    href={item.url || '#'}
                    itemProp="item"
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className={`inline-flex items-center gap-1 font-medium transition-colors cursor-pointer truncate max-w-[130px] sm:max-w-[180px] ${
                      isHome 
                        ? 'text-slate-600 hover:text-emerald-800' 
                        : isCategory 
                          ? 'text-emerald-800 hover:text-emerald-950 font-semibold' 
                          : 'text-slate-600 hover:text-emerald-800'
                    }`}
                    title={item.label}
                  >
                    {isHome && (
                      <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                    )}
                    {isCategory && (
                      <Folder className="w-3 h-3 text-emerald-600 shrink-0 hidden sm:inline" />
                    )}
                    <span itemProp="name">{item.label}</span>
                  </a>
                  <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
