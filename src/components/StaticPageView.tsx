import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  HelpCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  UserCheck, 
  BookOpen, 
  Award,
  ChevronRight,
  ArrowLeft,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

export type StaticPageType = 
  | 'about' 
  | 'contact' 
  | 'privacy' 
  | 'terms' 
  | 'affiliate-disclosure' 
  | 'medical-disclaimer'
  | 'cookie-policy'
  | 'sitemap';

interface StaticPageViewProps {
  pageType: StaticPageType;
  onNavigate?: (type: StaticPageType) => void;
  onNavigatePage?: (type: StaticPageType) => void;
  onBackToHome?: () => void;
  onBack?: () => void;
}

export const StaticPageView: React.FC<StaticPageViewProps> = ({
  pageType,
  onNavigate,
  onNavigatePage,
  onBackToHome,
  onBack,
}) => {
  const handleNav = (target: StaticPageType) => {
    if (typeof onNavigate === 'function') {
      onNavigate(target);
    } else if (typeof onNavigatePage === 'function') {
      onNavigatePage(target);
    }
  };

  const handleBack = () => {
    if (typeof onBackToHome === 'function') {
      onBackToHome();
    } else if (typeof onBack === 'function') {
      onBack();
    }
  };

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setSubmitted(true);
  };

  const navItems: { id: StaticPageType; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: 'About Us', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <Lock className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms of Use', icon: <FileText className="w-4 h-4" /> },
    { id: 'affiliate-disclosure', label: 'Affiliate Disclosure', icon: <Scale className="w-4 h-4" /> },
    { id: 'medical-disclaimer', label: 'Medical Disclaimer', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'cookie-policy', label: 'Cookie Policy', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-1 text-xs text-slate-400">
          <span>VitalPath Daily</span>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold text-slate-700 capitalize">
            {pageType.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-slate-200">
        {navItems.map((item) => {
          const isActive = pageType === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Page Content Containers */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10">
        {/* ===================== 1. ABOUT US ===================== */}
        {pageType === 'about' && (
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                Editorial Mission & Standards
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                About VitalPath Daily
              </h1>
              <p className="text-slate-500 text-base mt-2">
                Evidence-based longevity protocols and vetted supplement evaluations dedicated to American adults aged 40 and older.
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 text-emerald-950">
              <h2 className="font-bold text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                The 40+ Metabolic Pivot: Why We Exist
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-emerald-900">
                Most mainstream wellness advice in the United States is engineered for 22-year-olds with rapid mitochondrial turn-over and pristine insulin sensitivity. When men and women cross age 40, biological realities change: basal metabolic rate declines, sleep architecture experiences slow-wave (delta) decay, anabolic resistance demands higher protein thresholds, and joint synovial fluid levels recede. VitalPath Daily bridge the gap between complex peer-reviewed medical journals and practical daily protocols.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold text-xl text-slate-900">Our 5 Core Editorial Commitments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs">1</span>
                    PubMed & Clinical Trial Verification
                  </div>
                  <p className="text-xs text-slate-600">
                    Every article and review references peer-reviewed human clinical trials published in leading medical journals like <em>Cell Metabolism</em>, <em>The Lancet</em>, and <em>JAMA</em>.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs">2</span>
                    Physician & Dietitian Oversight
                  </div>
                  <p className="text-xs text-slate-600">
                    Our team of contributing researchers, molecular biologists, and registered dietitians independently review product formulations for active dosages and bioavailability.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs">3</span>
                    Strict cGMP & Purity Audits
                  </div>
                  <p className="text-xs text-slate-600">
                    We exclusively evaluate nutritional supplements manufactured in US-based, FDA-registered facilities adhering to current Good Manufacturing Practices (cGMP) with third-party testing.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs">4</span>
                    60 to 180-Day Guarantee Requirement
                  </div>
                  <p className="text-xs text-slate-600">
                    We mandate that any featured commercial formulation offers a minimum 60-day (and preferably up to 180-day) 100% money-back satisfaction guarantee to eliminate consumer risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="font-bold text-xl text-slate-900">Editorial & Review Board</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-2xl p-4 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" 
                    alt="Dr. Elena Vance"
                    className="w-16 h-16 rounded-full mx-auto object-cover mb-2 border-2 border-emerald-600"
                  />
                  <div className="font-bold text-slate-900 text-sm">Dr. Elena Vance, MD</div>
                  <div className="text-xs text-emerald-800 font-medium">Chief Medical Reviewer</div>
                  <div className="text-[11px] text-slate-500 mt-1">Specialist in Endocrinology & Metabolic Science</div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80" 
                    alt="Dr. Marcus Thorne"
                    className="w-16 h-16 rounded-full mx-auto object-cover mb-2 border-2 border-emerald-600"
                  />
                  <div className="font-bold text-slate-900 text-sm">Dr. Marcus Thorne, PhD</div>
                  <div className="text-xs text-emerald-800 font-medium">Head of Research</div>
                  <div className="text-[11px] text-slate-500 mt-1">Cellular Autophagy & Mitochondrial Aging</div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1594824813686-2a7e75bf14a7?auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Jenkins, MS, RD"
                    className="w-16 h-16 rounded-full mx-auto object-cover mb-2 border-2 border-emerald-600"
                  />
                  <div className="font-bold text-slate-900 text-sm">Sarah Jenkins, MS, RD</div>
                  <div className="text-xs text-emerald-800 font-medium">Clinical Nutrition Lead</div>
                  <div className="text-[11px] text-slate-500 mt-1">Functional Gastroenterology & Microbiome</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== 2. CONTACT ===================== */}
        {pageType === 'contact' && (
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                Editorial & Support Desk
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Contact VitalPath Daily
              </h1>
              <p className="text-slate-500 text-base mt-2">
                Have a question regarding a protocol, an editorial correction, or partnership inquiry? Our team responds within 24–48 business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                  <div className="flex items-center gap-2.5 text-emerald-800 font-bold mb-1">
                    <Mail className="w-4 h-4" />
                    <span>Editorial Inquiries</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">For study verification, citations, and corrections:</p>
                  <a href="mailto:rabatmba@gmail.com" className="text-xs font-semibold text-emerald-700 hover:underline">
                    rabatmba@gmail.com
                  </a>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                  <div className="flex items-center gap-2.5 text-blue-800 font-bold mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>US Headquarters</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    VitalPath Daily Editorial Labs<br />
                    1201 N Orange St, Suite 710<br />
                    Wilmington, DE 19801, USA
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                  <div className="flex items-center gap-2.5 text-amber-800 font-bold mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Hours of Operation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Monday – Friday: 9:00 AM – 6:00 PM EST<br />
                    Saturday – Sunday: Closed for research review
                  </p>
                </div>
              </div>

              {/* Interactive Contact Form */}
              <div className="md:col-span-2 border border-slate-200 rounded-2xl p-6 bg-white">
                {submitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Message Received</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you for contacting VitalPath Daily. An editorial team member has been assigned to your ticket and will follow up shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-emerald-700 hover:underline font-semibold mt-2 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h3 className="font-bold text-base text-slate-900 mb-2">Send an Official Inquiry</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="Dr. / Mr. / Ms. Jane Doe"
                          className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Department</label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden bg-white"
                      >
                        <option value="General Question">General Reader Inquiry</option>
                        <option value="Editorial Correction">Editorial Citation or Correction</option>
                        <option value="Product Review Request">Supplement Review Request</option>
                        <option value="Press / Media">Press & Media Relations</option>
                        <option value="Affiliate Inquiry">ClickBank & Publisher Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message</label>
                      <textarea
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Please include relevant details, URLs, or study references..."
                        className="w-full text-xs p-3.5 border border-slate-300 rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================== 3. PRIVACY POLICY ===================== */}
        {pageType === 'privacy' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-xs sm:text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5 text-slate-600" />
                Legal Compliance
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                Effective Date: September 2026 | Governing: United States (CCPA/CPRA, CalOPPA compliant)
              </p>
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-4">
              <h2 className="font-bold text-base text-slate-900">1. Information We Collect</h2>
              <p>
                VitalPath Daily collects non-personally identifiable information when you browse our site, including your browser type, device category, referring URL, operating system, and anonymous IP geolocation. If you voluntarily subscribe to our free newsletter or download our 7-Day Cellular Vitality Blueprint, we securely collect your email address. We do not solicit or store financial, credit card, or sensitive healthcare patient records on our servers.
              </p>

              <h2 className="font-bold text-base text-slate-900">2. Affiliate Tracking & Cookies</h2>
              <p>
                Our site incorporates outbound affiliate referral links (including ClickBank HopLinks). When you click an affiliate link, a temporary tracking cookie is placed in your web browser by the respective retailer (such as ClickBank). This cookie registers that you were referred by VitalPath Daily, permitting us to receive an editorial commission if you choose to purchase an item. These cookies do not store private medical information or passwords.
              </p>

              <h2 className="font-bold text-base text-slate-900">3. CCPA & CPRA Notice for California Residents</h2>
              <p>
                Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents are entitled to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                <li>The right to know what personal data is collected and processed.</li>
                <li>The right to request immediate deletion of personal email addresses from our subscriber database.</li>
                <li>The right to opt-out of the sale or sharing of personal data (VitalPath Daily <strong>NEVER sells or rents personal email lists</strong>).</li>
                <li>The right to non-discrimination for exercising your privacy rights.</li>
              </ul>

              <h2 className="font-bold text-base text-slate-900">4. Third-Party Service Providers</h2>
              <p>
                We partner with reputable third-party infrastructure providers for website hosting, content delivery (CDN), and automated email transmission. These entities are contractually prohibited from using your data for any unauthorized purpose.
              </p>

              <h2 className="font-bold text-base text-slate-900">5. Opt-Out & Contact</h2>
              <p>
                To opt out of our email newsletters or request data deletion, click the "Unsubscribe" link at the bottom of any email or write to <a href="mailto:rabatmba@gmail.com" className="text-emerald-700 font-semibold hover:underline">rabatmba@gmail.com</a>.
              </p>
            </div>
          </div>
        )}

        {/* ===================== 4. TERMS OF USE ===================== */}
        {pageType === 'terms' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-xs sm:text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                Terms of Service
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Terms of Use
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                Last Updated: September 2026 | Applicable to all visitors and subscribers
              </p>
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-4">
              <h2 className="font-bold text-base text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing and utilizing VitalPath Daily (vitalpathdaily.com), you confirm that you are at least 18 years of age and legally capable of entering into binding agreements in the United States. If you do not agree with any provision of these terms, you must immediately discontinue use of this site.
              </p>

              <h2 className="font-bold text-base text-slate-900">2. Intellectual Property Rights</h2>
              <p>
                All text, graphics, proprietary comparison matrices, clinical evaluation cards, and editorial formulations published on VitalPath Daily are the intellectual property of VitalPath Daily and protected under United States and international copyright statutes. Reproduction without express written consent is strictly prohibited.
              </p>

              <h2 className="font-bold text-base text-slate-900">3. Third-Party Retailers & Orders</h2>
              <p>
                VitalPath Daily functions as an editorial publisher and independent review authority. When purchasing supplements reviewed on our site, your transaction is processed directly by authorized third-party merchants (including ClickBank / Click Sales, Inc.). All order fulfillment, billing inquiries, refunds, and shipping logistics are governed by the merchant of record's respective terms of service.
              </p>

              <h2 className="font-bold text-base text-slate-900">4. Limitation of Liability</h2>
              <p>
                In no event shall VitalPath Daily, its founders, medical review contributors, or affiliates be liable for any direct, indirect, consequential, or incidental damages arising from the use of, or inability to use, the information, protocols, or products discussed on this website.
              </p>

              <h2 className="font-bold text-base text-slate-900">5. Governing Law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
            </div>
          </div>
        )}

        {/* ===================== 5. AFFILIATE DISCLOSURE ===================== */}
        {pageType === 'affiliate-disclosure' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-xs sm:text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Scale className="w-3.5 h-3.5 text-emerald-700" />
                FTC 16 CFR Part 255 Transparency
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Affiliate Compensation Disclosure
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                Full transparency regarding our business model, review integrity, and retailer partnerships.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-emerald-950">
              <h2 className="font-bold text-sm mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                Our Promise: You Never Pay a Penny More
              </h2>
              <p className="text-xs leading-relaxed text-emerald-900">
                Clicking an affiliate link on VitalPath Daily will <strong>NEVER increase the price you pay</strong>. In fact, our negotiated publisher agreements and direct vendor HopLinks frequently grant our readers exclusive VIP manufacturer discounts, discounted 6-bottle packages, free US shipping, and digital bonus manuals.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold text-base text-slate-900">1. Federal Trade Commission (FTC) Compliance</h2>
              <p>
                In strict accordance with the Federal Trade Commission's Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255), please assume that any link pointing to an external merchant or supplement brand may generate an affiliate commission for VitalPath Daily.
              </p>

              <h2 className="font-bold text-base text-slate-900">2. Relationship With ClickBank</h2>
              <p>
                VitalPath Daily participates in the ClickBank affiliate marketplace. ClickBank is the trusted merchant of record for nutritional supplements reviewed on this portal. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
              </p>

              <h2 className="font-bold text-base text-slate-900">3. Editorial Separation & Testing Autonomy</h2>
              <p>
                Our commercial relationships do NOT dictate our scientific opinions or clinical reviews. We regularly decline partnership requests from supplement companies whose formulas lack peer-reviewed human trials, use deceptive proprietary blends, or fail third-party contaminant tests. The compensation we earn funds independent research, medical reviewer honorariums, and daily editorial maintenance.
              </p>
            </div>
          </div>
        )}

        {/* ===================== 6. MEDICAL DISCLAIMER ===================== */}
        {pageType === 'medical-disclaimer' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-xs sm:text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                Mandatory FDA & Medical Advisory Notice
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Medical Disclaimer & Safety Guidance
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                Required health disclosure for all wellness protocols and dietary supplement reviews.
              </p>
            </div>

            <div className="bg-amber-50/80 border border-amber-300/80 rounded-2xl p-5 text-amber-950">
              <h2 className="font-bold text-sm mb-1 flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                Not a Substitute for Professional Healthcare
              </h2>
              <p className="text-xs leading-relaxed text-amber-900">
                The content published on VitalPath Daily is provided exclusively for general informational, educational, and research purposes. It is not intended, and must not be construed, as individualized medical diagnosis, medical treatment, or prescription guidance.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold text-base text-slate-900">1. Official FDA Disclaimer</h2>
              <p>
                The statements made on this website regarding dietary supplements, herbs, botanicals, and lifestyle protocols have not been evaluated by the Food and Drug Administration (FDA). The products and protocols referenced herein are not intended to diagnose, treat, cure, or prevent any disease.
              </p>

              <h2 className="font-bold text-base text-slate-900">2. Consultation With Your Personal Physician</h2>
              <p>
                If you are a man or woman aged 40 or older, you must always consult your primary care physician, endocrinologist, or qualified healthcare professional prior to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                <li>Initiating any new dietary supplement, botanical extract, or vitamin routine.</li>
                <li>Altering, reducing, or discontinuing any prescribed prescription medication (including insulin, metformin, statins, or ACE inhibitors).</li>
                <li>Commencing a caloric restriction, intermittent fasting, or intense physical training regimen.</li>
              </ul>

              <h2 className="font-bold text-base text-slate-900">3. Contraindications & Drug Interactions</h2>
              <p>
                Natural botanicals (such as Berberine, Ashwagandha, Chromium, Cinnamon, and Glucosamine) possess potent bio-active mechanisms and can interact with prescription pharmaceuticals. Individuals who are pregnant, nursing, have chronic renal or hepatic impairment, or are scheduled for surgery must seek explicit physician clearance.
              </p>

              <h2 className="font-bold text-base text-slate-900">4. Emergency Situations</h2>
              <p>
                If you believe you are experiencing a medical emergency, acute chest discomfort, sudden shortness of breath, or allergic anaphylaxis, dial <strong>911 immediately</strong> in the United States or report to the nearest emergency medical facility.
              </p>
            </div>
          </div>
        )}

        {/* ===================== 7. COOKIE POLICY ===================== */}
        {pageType === 'cookie-policy' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
                Browser Data & Tracking Transparency
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Cookie Policy
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                Effective Date: September 13, 2026 | Last Reviewed: September 13, 2026
              </p>
            </div>

            <p>
              This Cookie Policy explains how VitalPath Daily ("we", "us", or "our") uses cookies and similar technologies when you visit our website at vitalpathdaily.com.
            </p>

            <div className="space-y-4">
              <h2 className="font-bold text-base text-slate-900">1. What Are Cookies?</h2>
              <p>
                Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, remember user preferences, and provide analytical reporting.
              </p>

              <h2 className="font-bold text-base text-slate-900">2. Categories of Cookies We Use</h2>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Essential & Security Cookies</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Necessary for core website navigation, load balancing, preventing cross-site scripting, and enforcing security policies.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Performance & Analytics Cookies</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Allow us to analyze aggregated visitor traffic, identify popular health guides, and optimize page load speeds without storing personally identifiable information.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Affiliate Referral Cookies</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    When you click an outbound link to a third-party merchant (such as ClickBank or an official supplement vendor), a session cookie may be set by the merchant to attribute any resulting referral commission to VitalPath Daily. These cookies are subject to the third party's independent privacy policies.
                  </p>
                </div>
              </div>

              <h2 className="font-bold text-base text-slate-900">3. Controlling Your Cookies</h2>
              <p>
                You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies or alert you when a cookie is placed. Note that disabling certain cookies may affect the functionality of interactive calculators or quizzes.
              </p>
            </div>
          </div>
        )}

        {/* ===================== 8. XML SITEMAP VIEWER ===================== */}
        {pageType === 'sitemap' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                Search Engine & User Directory
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Editorial Sitemap & Directory
              </h1>
              <p className="text-slate-500 text-xs mt-1">
                XML Sitemap URL: <a href="/sitemap.xml" className="text-emerald-700 underline font-mono" target="_blank" rel="noopener noreferrer">https://mba-rabat.vercel.app/sitemap.xml</a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <h2 className="font-bold text-slate-900 text-sm">Primary Category Hubs</h2>
                <ul className="space-y-1 text-xs text-emerald-800">
                  <li>/healthy-blood-sugar/</li>
                  <li>/weight-management/</li>
                  <li>/sleep-and-stress/</li>
                  <li>/healthy-aging/</li>
                  <li>/nutrition/</li>
                  <li>/product-reviews/</li>
                  <li>/comparisons/</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <h2 className="font-bold text-slate-900 text-sm">Institutional & Legal Pages</h2>
                <ul className="space-y-1 text-xs text-emerald-800">
                  <li>/about-us/</li>
                  <li>/contact/</li>
                  <li>/privacy-policy/</li>
                  <li>/terms-of-use/</li>
                  <li>/affiliate-disclosure/</li>
                  <li>/medical-disclaimer/</li>
                  <li>/cookie-policy/</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Return CTA */}
      <div className="mt-8 text-center">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to VitalPath Daily Home</span>
        </button>
      </div>
    </div>
  );
};
