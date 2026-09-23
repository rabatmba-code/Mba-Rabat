import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Award, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Stethoscope, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight,
  Share2,
  Check
} from 'lucide-react';
import { Author, Article } from '../types';
import { getAllAuthors } from '../data/editorialTeam';
import { Breadcrumbs } from './Breadcrumbs';

interface AuthorProfilePageProps {
  author: Author;
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onNavigateAuthor: (slug: string) => void;
  onBackHome: () => void;
}

export const AuthorProfilePage: React.FC<AuthorProfilePageProps> = ({
  author,
  articles,
  onReadArticle,
  onNavigateAuthor,
  onBackHome,
}) => {
  const [copied, setCopied] = React.useState(false);
  const authorSlug = author.slug || author.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const canonicalUrl = `https://mba-rabat.vercel.app/author/${authorSlug}/`;
  const allAuthors = getAllAuthors();

  // Filter articles authored or reviewed by this author
  const authoredArticles = articles.filter(
    (art) =>
      (art.author && (art.author.slug === author.slug || art.author.name === author.name)) ||
      (art.medicallyReviewedBy && art.medicallyReviewedBy.name.includes(author.name.replace(/^Dr\.\s*/, '').split(',')[0]))
  );

  // Set page title, canonical tag, and structured data
  useEffect(() => {
    const pageTitle = `${author.name} (${author.credentials}) - Medical Author & Reviewer Profile | VitalPath Daily`;
    document.title = pageTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    const bioExcerpt = author.fullBio || author.bio;
    metaDesc.setAttribute('content', `${author.name} is ${author.role} at VitalPath Daily. ${bioExcerpt.slice(0, 150)}...`);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // OpenGraph
    const setOgTag = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };
    setOgTag('og:title', pageTitle);
    setOgTag('og:description', bioExcerpt.slice(0, 200));
    setOgTag('og:url', canonicalUrl);
    setOgTag('og:image', author.avatar);
    setOgTag('og:type', 'profile');

    // JSON-LD ProfilePage & Person with SameAs
    const existingScript = document.getElementById('author-profile-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'author-profile-jsonld';
    script.type = 'application/ld+json';

    const personType = author.credentials.includes('MD') 
      ? ['Person', 'Physician'] 
      : (author.credentials.includes('PharmD') ? ['Person', 'Pharmacist'] : 'Person');

    const schemaGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          '@id': `${canonicalUrl}#profilepage`,
          'url': canonicalUrl,
          'name': `${author.name} - Clinical Profile & Research Directory`,
          'isPartOf': {
            '@id': 'https://mba-rabat.vercel.app/#website'
          },
          'breadcrumb': {
            '@id': `${canonicalUrl}#breadcrumb`
          },
          'mainEntity': {
            '@id': `https://mba-rabat.vercel.app/#person-${authorSlug}`
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://mba-rabat.vercel.app/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Medical Review Board',
              'item': 'https://mba-rabat.vercel.app/medical-review-board/'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': author.name,
              'item': canonicalUrl
            }
          ]
        },
        {
          '@type': personType,
          '@id': `https://mba-rabat.vercel.app/#person-${authorSlug}`,
          'name': author.name,
          'url': canonicalUrl,
          'image': author.avatar,
          'jobTitle': author.role,
          'honorificSuffix': author.credentials,
          'description': author.fullBio || author.bio,
          'worksFor': {
            '@type': ['NewsMediaOrganization', 'MedicalOrganization'],
            '@id': 'https://mba-rabat.vercel.app/#organization',
            'name': 'VitalPath Daily',
            'url': 'https://mba-rabat.vercel.app/'
          },
          ...(author.institution ? {
            'affiliation': {
              '@type': 'MedicalOrganization',
              'name': author.institution
            }
          } : {}),
          ...(author.education && author.education.length > 0 ? {
            'alumniOf': author.education.map((edu) => ({
              '@type': 'EducationalOrganization',
              'name': edu.split('–')[1]?.trim() || edu
            }))
          } : {}),
          ...(author.certifications && author.certifications.length > 0 ? {
            'hasCredential': author.certifications.map((cert) => ({
              '@type': 'EducationalOccupationalCredential',
              'name': cert
            }))
          } : {}),
          ...(author.expertiseAreas && author.expertiseAreas.length > 0 ? {
            'knowsAbout': author.expertiseAreas
          } : {}),
          ...(author.sameAs && author.sameAs.length > 0 ? {
            'sameAs': author.sameAs
          } : {})
        }
      ]
    };

    script.text = JSON.stringify(schemaGraph, null, 2);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('author-profile-jsonld');
      if (s) s.remove();
    };
  }, [author, canonicalUrl, authorSlug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Top Breadcrumbs & Actions Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <Breadcrumbs
            items={[
              { label: 'Home', url: '/' },
              { label: 'Medical Board', url: '/medical-review-board/' },
              { label: author.name, url: `/author/${authorSlug}/` },
            ]}
            skipJsonLd={true}
          />
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              title="Share Author Profile"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Profile Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-600" />
                  <span>Share Profile</span>
                </>
              )}
            </button>
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Articles</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Profile Hero Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Decorative Top Banner */}
          <div className="h-32 sm:h-44 bg-linear-to-r from-emerald-900 via-teal-900 to-slate-900 relative">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>VitalPath Daily Clinical Oversight</span>
            </div>
          </div>

          {/* Profile Header Details */}
          <div className="px-6 sm:px-10 pb-8 pt-0 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16 sm:-mt-20 mb-6">
              {/* High-Res Avatar */}
              <div className="relative group">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover ring-4 ring-white shadow-xl bg-white border border-slate-200"
                />
                <div 
                  className="absolute -bottom-2 -right-2 bg-emerald-700 text-white p-1.5 rounded-full ring-2 ring-white shadow-md"
                  title="Verified Clinical Contributor"
                >
                  <CheckCircle2 className="w-5 h-5 text-white fill-emerald-500" />
                </div>
              </div>

              {/* Title, Name & Role */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    Verified Medical Contributor
                  </span>
                  {author.yearsOfExperience && (
                    <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {author.yearsOfExperience}+ Years Clinical Practice
                    </span>
                  )}
                </div>

                <h1 className="font-serif-title text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {author.name}
                </h1>
                
                <p className="text-base sm:text-lg font-semibold text-emerald-900 mt-1">
                  {author.role} • <span className="text-slate-600 font-normal">{author.credentials}</span>
                </p>

                {/* Institution & Location metadata */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 mt-3">
                  {author.institution && (
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
                      {author.institution}
                    </span>
                  )}
                  {author.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {author.location}
                    </span>
                  )}
                  {author.medicalLicense && (
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {author.medicalLicense}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* External Authority Links (SameAs Hub) */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Verified Academic &amp; Clinical Profiles (SameAs Authority Hub)
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500">
                  Confirmed identities indexed in Knowledge Graph &amp; PubMed
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {author.externalLinks?.linkedIn && (
                  <a
                    href={author.externalLinks.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0A66C2]"></span>
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                  </a>
                )}

                {author.externalLinks?.researchGate && (
                  <a
                    href={author.externalLinks.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00CCBB]"></span>
                    <span>ResearchGate Index</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                  </a>
                )}

                {author.externalLinks?.orcid && (
                  <a
                    href={author.externalLinks.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#A6CE39]"></span>
                    <span>ORCID Record</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                  </a>
                )}

                {author.externalLinks?.googleScholar && (
                  <a
                    href={author.externalLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                    <span>Google Scholar Citations</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                  </a>
                )}

                {author.externalLinks?.pubmed && (
                  <a
                    href={author.externalLinks.pubmed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#205493]"></span>
                    <span>PubMed Search Directory</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                  </a>
                )}

                <div className="ml-auto text-[11px] text-emerald-800 font-mono font-medium hidden md:block">
                  Schema: sameAs [ {author.sameAs?.length || 0} external IDs ]
                </div>
              </div>
            </div>

            {/* In-Depth Clinical Biography */}
            <div className="space-y-4 text-slate-700 text-base leading-relaxed border-b border-slate-200 pb-8 mb-8">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                Clinical Background &amp; Editorial Mission
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {author.fullBio || author.bio}
              </p>
            </div>

            {/* Credentials, Education & Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-200 mb-8">
              {/* Education & Fellowships */}
              {author.education && author.education.length > 0 && (
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <GraduationCap className="w-4 h-4 text-emerald-700" />
                    <span>Education &amp; Clinical Training</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {author.education.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Board Certifications & Professional Memberships */}
              {author.certifications && author.certifications.length > 0 && (
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Board Certifications &amp; Professional Societies</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {author.certifications.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Clinical Expertise Taxonomy Areas */}
              {author.expertiseAreas && author.expertiseAreas.length > 0 && (
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200 space-y-3 md:col-span-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Clinical Focus &amp; Medical Taxonomy Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {author.expertiseAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-slate-200 text-slate-800 text-xs font-medium px-3 py-1 rounded-lg shadow-2xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Published Books & Human Clinical Trials */}
            {author.publications && author.publications.length > 0 && (
              <div className="space-y-4 pb-8 border-b border-slate-200 mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <h3 className="font-serif-title text-xl font-bold text-slate-900">
                    Selected Books, Clinical Trials &amp; Systematic Reviews
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {author.publications.map((pub, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 bg-white hover:border-emerald-500/60 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded">
                            {pub.type || 'Publication'}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">{pub.year}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-xs leading-snug mb-1.5">
                          {pub.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 italic mt-2">
                        {pub.publisherOrJournal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Editorial Independence & Financial Firewall Pledge */}
            <div className="bg-emerald-950 text-emerald-50 p-6 sm:p-7 rounded-2xl space-y-3 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Editorial Independence &amp; Commercial Firewall Charter</span>
              </div>
              <h4 className="font-serif-title text-lg sm:text-xl font-bold text-white">
                Our Non-Negotiable Standard of Medical Objectivity
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                As a member of the VitalPath Daily medical board, {author.name} conducts clinical reviews and authorial audits under an absolute editorial firewall. Formulations are evaluated strictly on published human clinical trials, bioavailable chelation chemistry, and cGMP laboratory certificates of analysis. Editorial recommendations cannot be purchased, altered, or vetoed by commercial advertisers or affiliate vendors.
              </p>
            </div>

            {/* Articles Authored or Medically Reviewed by this Clinician */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif-title text-2xl font-bold text-slate-900">
                    Articles &amp; Clinical Protocols by {author.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Peer-reviewed medical guides, nutritional biochemistry breakdowns, and purity audits.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto">
                  {authoredArticles.length} Published Resource{authoredArticles.length === 1 ? '' : 's'}
                </span>
              </div>

              {authoredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {authoredArticles.map((art) => {
                    const catSlug = art.path
                      ? art.path.split('/')[1]
                      : (art.category || 'wellness').toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    const articleUrl = art.path || `/${catSlug}/${art.slug}/`;

                    return (
                      <div
                        key={art.id}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600/50 hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <a
                          href={articleUrl}
                          onClick={(e) => {
                            e.preventDefault();
                            onReadArticle(art);
                          }}
                          className="block relative aspect-16/9 overflow-hidden bg-slate-100 cursor-pointer"
                        >
                          <img
                            src={art.coverImage}
                            alt={art.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute top-2 left-2 bg-slate-900/85 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                            {art.category}
                          </div>
                        </a>

                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {art.readingTime}
                              </span>
                              <span>•</span>
                              <span>{art.publishedDate}</span>
                            </div>
                            <h4 className="font-serif-title text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2 mb-2">
                              <a
                                href={articleUrl}
                                onClick={(e) => {
                                  e.preventDefault();
                                  onReadArticle(art);
                                }}
                                className="hover:underline cursor-pointer"
                              >
                                {art.title}
                              </a>
                            </h4>
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                              {art.summary}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-medium text-emerald-800">
                              Evidence-Based Guide
                            </span>
                            <a
                              href={articleUrl}
                              onClick={(e) => {
                                e.preventDefault();
                                onReadArticle(art);
                              }}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                            >
                              <span>Read</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-500">
                    Additional upcoming monographs and clinical reviews by {author.name} are currently undergoing two-tier peer verification.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Directory of Other Medical Board Members */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                VitalPath Medical Review Board
              </span>
              <h3 className="font-serif-title text-xl font-bold text-slate-900">
                Explore Other Clinicians &amp; Research Specialists
              </h3>
            </div>
            <button
              onClick={onBackHome}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer self-start sm:self-auto"
            >
              View All Content →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allAuthors
              .filter((a) => a.slug !== author.slug)
              .map((otherAuthor) => (
                <div
                  key={otherAuthor.slug}
                  onClick={() => {
                    if (otherAuthor.slug) {
                      onNavigateAuthor(otherAuthor.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500/60 hover:shadow-xs bg-slate-50/50 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={otherAuthor.avatar}
                      alt={otherAuthor.name}
                      className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-200 group-hover:ring-emerald-500/50 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-emerald-800 truncate">
                        {otherAuthor.name}
                      </h4>
                      <p className="text-[11px] text-emerald-800 font-medium truncate">
                        {otherAuthor.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {otherAuthor.credentials}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-700 pt-2 border-t border-slate-200/60">
                    <span>View Profile &amp; SameAs</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
