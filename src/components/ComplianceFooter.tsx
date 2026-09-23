import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  FileText, 
  Scale, 
  AlertTriangle, 
  HelpCircle,
  BookOpen,
  Award
} from 'lucide-react';
import { StaticPageType } from './StaticPageView';

interface ComplianceFooterProps {
  onNavigateStaticPage: (page: StaticPageType) => void;
  onSelectCategory: (cat: string) => void;
  onOpenAffiliateManager?: () => void;
  onNavigateAuthor?: (slug: string) => void;
}

export const ComplianceFooter: React.FC<ComplianceFooterProps> = ({
  onNavigateStaticPage,
  onSelectCategory,
  onOpenAffiliateManager,
  onNavigateAuthor,
}) => {
  const categories = [
    'Healthy Blood Sugar',
    'Weight Management',
    'Sleep & Stress',
    'Healthy Aging',
    'Nutrition',
    'Product Reviews',
  ];

  const legalPages: { id: StaticPageType; slug: string; label: string; icon: React.ReactNode }[] = [
    { id: 'brand-entity', slug: 'brand-entity', label: 'Entity Profile (BEO)', icon: <Award className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: 'about', slug: 'about-us', label: 'About Us', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'editorial-policy', slug: 'editorial-policy', label: 'Editorial Policy', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'medical-review-board', slug: 'medical-review-board', label: 'Medical Review Board', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { id: 'contact', slug: 'contact', label: 'Contact', icon: <Mail className="w-3.5 h-3.5" /> },
    { id: 'privacy', slug: 'privacy-policy', label: 'Privacy Policy', icon: <Lock className="w-3.5 h-3.5" /> },
    { id: 'terms', slug: 'terms-of-use', label: 'Terms of Use', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'affiliate-disclosure', slug: 'affiliate-disclosure', label: 'Affiliate Disclosure', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'medical-disclaimer', slug: 'medical-disclaimer', label: 'Medical Disclaimer', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { id: 'cookie-policy', slug: 'cookie-policy', label: 'Cookie Policy', icon: <HelpCircle className="w-3.5 h-3.5" /> },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-16 px-4 sm:px-6 lg:px-8 mt-16" id="compliance-footer">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Brand & Editorial Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Editorial Credentials Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                VPD
              </div>
              <span className="font-serif-title text-xl font-bold text-white tracking-tight">
                VitalPath <span className="text-emerald-500">Daily</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              VitalPath Daily is an independent American health publication delivering evidence-informed wellness protocols, metabolic insights, and objective laboratory supplement analyses for mature adults.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Fact-checked against PubMed & Clinical Studies</span>
            </div>
          </div>

          {/* Topics Navigation Column */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <span>Primary Topics</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((cat) => {
                const slugMap: Record<string, string> = {
                  'Healthy Blood Sugar': 'healthy-blood-sugar',
                  'Weight Management': 'weight-management',
                  'Sleep & Stress': 'sleep-and-stress',
                  'Healthy Aging': 'healthy-aging',
                  'Nutrition': 'nutrition',
                  'Product Reviews': 'product-reviews',
                };
                const slug = slugMap[cat] || cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
                return (
                  <li key={cat}>
                    <a
                      href={`/${slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCategory(cat);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                    >
                      <span className="text-slate-600 group-hover:text-emerald-400 transition-colors">›</span>
                      <span>{cat}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Institutional & Legal Pages Column */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3.5">
              Editorial & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {legalPages.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/${item.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateStaticPage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-left cursor-pointer group"
                  >
                    <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Office & Inquiries */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3.5">
              Editorial Office
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-slate-500 block text-[11px]">Direct Support:</span>
                <a 
                  href="mailto:rabatmba@gmail.com"
                  className="text-slate-300 hover:text-emerald-400 font-mono text-xs transition-colors"
                >
                  rabatmba@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[11px]">Editorial Standards:</span>
                <span className="text-slate-400 text-xs">Independent medical reviews & strict peer citation standards</span>
              </li>
              <li>
                <span className="text-slate-500 block text-[11px]">Location:</span>
                <span className="text-slate-400 text-xs">Wilmington, DE • United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Authors & Medical Reviewers (E-E-A-T Entity Profiles) */}
        <div className="border-t border-slate-900 pt-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Medical Review Board &amp; Clinical Authors (E-E-A-T Verified)</span>
            </h4>
            <span className="text-[11px] text-slate-500">
              SameAs Schema Markup • PubMed &amp; ResearchGate Verified
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { slug: 'elena-vance', name: 'Dr. Elena Vance, MD', role: 'Chief Medical Editor', creds: 'Johns Hopkins Fellow' },
              { slug: 'marcus-thorne', name: 'Marcus Thorne, MS, CNS', role: 'Nutritional Biochemist', creds: 'Columbia Alumnus' },
              { slug: 'sarah-lindqvist', name: 'Sarah Lindqvist, PharmD', role: 'Clinical Pharmacologist', creds: 'UW Pharmacy' },
              { slug: 'sarah-bennett', name: 'Dr. Sarah Bennett, MD', role: 'Endocrinologist', creds: 'Harvard Medical' },
              { slug: 'david-chen', name: 'Dr. David Chen, MD, PhD', role: 'Sports Medicine Lead', creds: 'Stanford Medicine' },
              { slug: 'michael-vance', name: 'Dr. Michael Vance, PharmD', role: 'Toxicology & Safety', creds: 'Johns Hopkins' },
            ].map((author) => (
              <a
                key={author.slug}
                href={`/author/${author.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateAuthor) {
                    onNavigateAuthor(author.slug);
                  } else {
                    window.location.href = `/author/${author.slug}/`;
                  }
                }}
                className="bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-600/60 rounded-xl p-2.5 transition-all cursor-pointer group flex flex-col justify-between"
                title={`View ${author.name} Profile, Publications & SameAs Credentials`}
              >
                <div>
                  <span className="font-bold text-slate-200 group-hover:text-emerald-400 text-xs block truncate">
                    {author.name}
                  </span>
                  <span className="text-[10px] text-emerald-500 font-medium block">
                    {author.role}
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-0.5">
                    {author.creds}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-200 mt-2 inline-flex items-center gap-1">
                  <span>Profile &amp; SameAs</span>
                  <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Comprehensive Health Protocols & Evidence-Based Internal Linking Directory */}
        <div className="border-t border-slate-900 pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Evidence-Based Topic Directories & Core Clinical Protocols</span>
            </h4>
            <span className="text-[11px] text-slate-500">
              Direct permanent crawl index for Google Search Console & Readers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
            {/* Healthy Blood Sugar Cluster */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
              <a 
                href="/healthy-blood-sugar/"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory('Healthy Blood Sugar');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-bold text-emerald-400 hover:underline block text-xs"
              >
                Healthy Blood Sugar Hub →
              </a>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="/healthy-blood-sugar/blood-sugar-supplements-guide/" className="hover:text-white transition-colors">
                    • Blood Sugar Supplements Consumer Guide
                  </a>
                </li>
                <li>
                  <a href="/comparisons/gluco6-vs-other-blood-sugar-supplements/" className="hover:text-white transition-colors">
                    • Gluco6 vs Other Blood Sugar Supplements
                  </a>
                </li>
                <li>
                  <a href="/healthy-blood-sugar/post-meal-walk-glucose-protocol/" className="hover:text-white transition-colors">
                    • 10-Minute Post-Meal Walk Protocol
                  </a>
                </li>
                <li>
                  <a href="/healthy-blood-sugar/what-to-look-for-in-blood-sugar-supplement/" className="hover:text-white transition-colors">
                    • What to Look for in a Blood Sugar Supplement
                  </a>
                </li>
                <li>
                  <a href="/healthy-blood-sugar/what-is-healthy-blood-sugar/" className="hover:text-white transition-colors">
                    • What Is Healthy Blood Sugar & Why It Matters
                  </a>
                </li>
                <li>
                  <a href="/healthy-blood-sugar/how-diet-affects-blood-sugar/" className="hover:text-white transition-colors">
                    • How Diet Affects Blood Sugar Levels
                  </a>
                </li>
                <li>
                  <a href="/healthy-blood-sugar/lifestyle-habits-healthy-blood-sugar/" className="hover:text-white transition-colors">
                    • Simple Lifestyle Habits for Blood Sugar Balance
                  </a>
                </li>
                <li>
                  <a href="/healthy-blood-sugar/apple-cider-vinegar-benefits-uses/" className="hover:text-white transition-colors">
                    • Apple Cider Vinegar: Benefits, Uses & Evidence
                  </a>
                </li>
              </ul>
            </div>

            {/* Product Reviews & Audits Cluster */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
              <a 
                href="/product-reviews/"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory('Product Reviews');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-bold text-emerald-400 hover:underline block text-xs"
              >
                Audited Product Reviews Hub →
              </a>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="/product-reviews/gluco6-review/" className="hover:text-white transition-colors">
                    • Gluco6 Review: Ingredients, Benefits & Audit
                  </a>
                </li>
                <li>
                  <a href="/product-reviews/gluco6-ingredients/" className="hover:text-white transition-colors">
                    • Gluco6 Ingredients: Deep Scientific Breakdown
                  </a>
                </li>
                <li>
                  <a href="/product-reviews/sugar-defender-review/" className="hover:text-white transition-colors">
                    • Sugar Defender Review: Liquid Dropper Analysis
                  </a>
                </li>
                <li>
                  <a href="/product-reviews/puravive-review/" className="hover:text-white transition-colors">
                    • Puravive Review: Brown Adipose Tissue Audit
                  </a>
                </li>
                <li>
                  <a href="/product-reviews/duwzgu-d3-k2-review/" className="hover:text-white transition-colors">
                    • Duwzgu D3 + K2 Liquid Drops Review
                  </a>
                </li>
                <li>
                  <a href="/product-reviews/duwzgu-creatine-monohydrate-review/" className="hover:text-white transition-colors">
                    • Duwzgu Creatine Monohydrate Powder Review
                  </a>
                </li>
                <li>
                  <a href="/product-reviews/duwzgu-sleep-support-gummies-review/" className="hover:text-white transition-colors">
                    • Duwzgu Sleep Support Gummies Review
                  </a>
                </li>
              </ul>
            </div>

            {/* Longevity, Stress & Metabolism */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
              <span className="font-bold text-emerald-400 block text-xs">
                Metabolism, Sleep & Longevity Pillars:
              </span>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="/sleep-and-stress/understanding-cortisol-stress-hormone/" className="hover:text-white transition-colors">
                    • Understanding Cortisol & The Stress Hormone
                  </a>
                </li>
                <li>
                  <a href="/sleep-and-stress/magnesium-glycinate-benefits/" className="hover:text-white transition-colors">
                    • Magnesium Glycinate for Deep Sleep
                  </a>
                </li>
                <li>
                  <a href="/sleep-and-stress/circadian-rhythm-dawn-phenomenon-guide/" className="hover:text-white transition-colors">
                    • Circadian Rhythm & Dawn Phenomenon Protocol
                  </a>
                </li>
                <li>
                  <a href="/healthy-aging/mediterranean-anti-inflammatory-longevity-blueprint/" className="hover:text-white transition-colors">
                    • Mediterranean Longevity Blueprint
                  </a>
                </li>
                <li>
                  <a href="/healthy-aging/chronic-vs-acute-inflammation/" className="hover:text-white transition-colors">
                    • Chronic vs. Acute Inflammation Guide
                  </a>
                </li>
                <li>
                  <a href="/nutrition/food-sequencing-fiber-matrix-guide/" className="hover:text-white transition-colors">
                    • Food Sequencing & Fiber Matrix Protocol
                  </a>
                </li>
                <li>
                  <a href="/nutrition/best-foods-before-after-exercise/" className="hover:text-white transition-colors">
                    • Best Foods Before & After Exercise Guide
                  </a>
                </li>
                <li>
                  <a href="/nutrition/vitamin-b12-deficiency-signs-causes/" className="hover:text-white transition-colors">
                    • Vitamin B12 Deficiency: Signs & Causes Guide
                  </a>
                </li>
                <li>
                  <a href="/nutrition/improve-gut-microbiome-diversity-naturally/" className="hover:text-white transition-colors">
                    • Gut Microbiome Diversity: Evidence-Based Guide
                  </a>
                </li>
                <li>
                  <a href="/weight-management/hydration-electrolytes-metabolic-health-guide/" className="hover:text-white transition-colors">
                    • Hydration & Electrolytes for Metabolic Rate
                  </a>
                </li>
                <li>
                  <a href="/weight-management/intermittent-fasting-benefits-how-to-start/" className="hover:text-white transition-colors">
                    • Intermittent Fasting: Safe Protocol
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FDA & Medical Legal Disclaimer (Compliance & Trust Signals) */}
        <div className="border-t border-slate-900 pt-6 space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <div>
            <strong className="text-slate-400 block mb-1">FDA Compliance Disclaimer:</strong>
            <p>
              The statements made on this website have not been evaluated by the Food and Drug Administration. The products and information referenced herein are not intended to diagnose, treat, cure, or prevent any disease. All content is presented for informational and educational purposes only and is not intended to substitute for medical consultation with a licensed healthcare practitioner. Always consult your personal physician before commencing any dietary supplement, nutritional regimen, or exercise routine.
            </p>
          </div>

          <div>
            <strong className="text-slate-400 block mb-1">FTC Affiliate Compensation Disclosure:</strong>
            <p>
              VitalPath Daily maintains an affiliate relationship with certain product merchants reviewed on this site. When readers purchase through links on our site, we may receive an affiliate commission at zero additional cost to you. This compensation enables us to support our editorial team, independent medical reviewers, and ongoing health research. We only recommend products evaluated by our editorial guidelines.
            </p>
          </div>
        </div>

        {/* Bottom copyright and direct legal links */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 VitalPath Daily (<a href="mailto:rabatmba@gmail.com" className="hover:text-slate-300 transition-colors">rabatmba@gmail.com</a>). All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px]">
            <a 
              href="/brand-entity/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('brand-entity'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors cursor-pointer"
            >
              Entity Profile (BEO)
            </a>
            <span>•</span>
            <a 
              href="/about-us/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              About Us
            </a>
            <span>•</span>
            <a 
              href="/editorial-policy/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('editorial-policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Editorial Policy
            </a>
            <span>•</span>
            <a 
              href="/medical-review-board/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('medical-review-board'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Medical Review Board
            </a>
            <span>•</span>
            <a 
              href="/contact/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact
            </a>
            <span>•</span>
            <a 
              href="/privacy-policy/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="/terms-of-use/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Use
            </a>
            <span>•</span>
            <a 
              href="/affiliate-disclosure/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('affiliate-disclosure'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Affiliate Disclosure
            </a>
            <span>•</span>
            <a 
              href="/medical-disclaimer/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('medical-disclaimer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </a>
            <span>•</span>
            <a 
              href="/cookie-policy/"
              onClick={(e) => { e.preventDefault(); onNavigateStaticPage('cookie-policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Cookie Policy
            </a>
            {onOpenAffiliateManager && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenAffiliateManager}
                  className="hover:text-emerald-400 text-slate-400 font-medium transition-colors cursor-pointer"
                  title="Configure ClickBank Nickname & Hoplinks"
                >
                  Affiliate Settings
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
