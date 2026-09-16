import { articles } from '../data/mockData';

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const BASE_URL = 'https://mba-rabat.vercel.app';
const TODAY = '2026-09-16';

/**
 * Parses dates like "September 15, 2026" or ISO strings to "YYYY-MM-DD"
 */
function formatDateToIso(dateStr?: string): string {
  if (!dateStr) return TODAY;
  try {
    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString().split('T')[0];
    }
  } catch {
    // Fallback to today
  }
  return TODAY;
}

/**
 * Static & Category Pages definition
 */
const staticPages: SitemapEntry[] = [
  {
    loc: `${BASE_URL}/`,
    lastmod: TODAY,
    changefreq: 'daily',
    priority: '1.0'
  },
  // Category Hubs
  {
    loc: `${BASE_URL}/healthy-blood-sugar/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${BASE_URL}/weight-management/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${BASE_URL}/sleep-and-stress/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${BASE_URL}/healthy-aging/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${BASE_URL}/nutrition/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${BASE_URL}/product-reviews/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${BASE_URL}/comparisons/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.8'
  },
  // Static / Legal & Trust Pages
  {
    loc: `${BASE_URL}/about-us/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${BASE_URL}/editorial-policy/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${BASE_URL}/medical-review-board/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${BASE_URL}/contact/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    loc: `${BASE_URL}/privacy-policy/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    loc: `${BASE_URL}/terms-of-use/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    loc: `${BASE_URL}/affiliate-disclosure/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    loc: `${BASE_URL}/medical-disclaimer/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    loc: `${BASE_URL}/cookie-policy/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  }
];

/**
 * Generates the complete list of sitemap entries by introspecting all articles,
 * product reviews, category hubs, and static pages.
 */
export function getAllSitemapEntries(): SitemapEntry[] {
  const seenPaths = new Set<string>();
  const entries: SitemapEntry[] = [];

  // 1. Add static & hub pages
  for (const page of staticPages) {
    seenPaths.add(page.loc.replace(BASE_URL, '').replace(/\/$/, '') || '/');
    entries.push(page);
  }

  // 2. Add all dynamic articles and reviews from content data
  for (const article of articles) {
    let cleanPath = article.path || `/${article.slug}/`;
    if (!cleanPath.startsWith('/')) {
      cleanPath = `/${cleanPath}`;
    }
    if (!cleanPath.endsWith('/')) {
      cleanPath = `${cleanPath}/`;
    }

    const normalizedKey = cleanPath.replace(/\/$/, '') || '/';
    if (seenPaths.has(normalizedKey)) {
      continue;
    }
    seenPaths.add(normalizedKey);

    const fullUrl = `${BASE_URL}${cleanPath}`;
    const isReview = cleanPath.includes('/product-reviews/');
    const isComparison = cleanPath.includes('/comparisons/');
    const isPillarGuide = cleanPath.includes('benefits') || cleanPath.includes('guide') || cleanPath.includes('blueprint') || cleanPath.includes('protocol');
    
    // Priority assignment
    let priority = '0.8';
    let changefreq: SitemapEntry['changefreq'] = 'monthly';

    if (isReview || isComparison) {
      priority = '0.85';
      changefreq = 'weekly';
    } else if (isPillarGuide) {
      priority = '0.85';
      changefreq = 'weekly';
    }

    // Determine lastmod date
    // If it was created or updated recently or today, use TODAY
    let lastmod = formatDateToIso(article.publishedDate);
    if (
      cleanPath.includes('vitamin-d3-k2-benefits') ||
      cleanPath.includes('creatine-monohydrate-benefits') ||
      cleanPath.includes('duwzgu') ||
      cleanPath.includes('eelhoe') ||
      cleanPath.includes('caffeine')
    ) {
      lastmod = TODAY;
    }

    entries.push({
      loc: fullUrl,
      lastmod,
      changefreq,
      priority
    });
  }

  return entries;
}

/**
 * Builds the standard XML sitemap string conforming to the Sitemaps.org schema.
 */
export function generateSitemapXml(): string {
  const entries = getAllSitemapEntries();
  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ];

  for (const entry of entries) {
    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${entry.loc}</loc>`);
    xmlLines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    xmlLines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${entry.priority}</priority>`);
    xmlLines.push('  </url>');
  }

  xmlLines.push('</urlset>');
  xmlLines.push(''); // Trailing newline

  return xmlLines.join('\n');
}
