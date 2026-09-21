import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  FileText, 
  Scale, 
  AlertTriangle, 
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { StaticPageType } from './StaticPageView';

interface ComplianceFooterProps {
  onNavigateStaticPage: (page: StaticPageType) => void;
  onSelectCategory: (cat: string) => void;
  onOpenAffiliateManager?: () => void;
}

export const ComplianceFooter: React.FC<ComplianceFooterProps> = ({
  onNavigateStaticPage,
  onSelectCategory,
  onOpenAffiliateManager,
}) => {
  const categories = [
    'Healthy Blood Sugar',
    'Weight Management',
    'Sleep & Stress',
    'Healthy Aging',
    'Nutrition',
    'Product Reviews',
  ];

  const legalPages: { id: StaticPageType; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: 'About Us', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-3.5 h-3.5" /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <Lock className="w-3.5 h-3.5" /> },
    { id: 'terms', label: 'Terms of Use', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'affiliate-disclosure', label: 'Affiliate Disclosure', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'medical-disclaimer', label: 'Medical Disclaimer', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { id: 'cookie-policy', label: 'Cookie Policy', icon: <HelpCircle className="w-3.5 h-3.5" /> },
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
                  <button
                    onClick={() => {
                      onNavigateStaticPage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-left cursor-pointer group"
                  >
                    <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
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
            <button 
              onClick={() => { onNavigateStaticPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              About
            </button>
            <span>•</span>
            <button 
              onClick={() => { onNavigateStaticPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <span>•</span>
            <button 
              onClick={() => { onNavigateStaticPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => { onNavigateStaticPage('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button 
              onClick={() => { onNavigateStaticPage('affiliate-disclosure'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Affiliate Disclosure
            </button>
            <span>•</span>
            <button 
              onClick={() => { onNavigateStaticPage('medical-disclaimer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
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
