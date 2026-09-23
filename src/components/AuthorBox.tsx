import React from 'react';
import { ShieldCheck, Award, ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { Author, MedicalReviewer } from '../types';

interface AuthorBoxProps {
  author: Author;
  medicallyReviewedBy?: MedicalReviewer;
  publishedDate?: string;
  updatedDate?: string;
  onNavigateAuthor?: (slug: string) => void;
}

export const AuthorBox: React.FC<AuthorBoxProps> = ({
  author,
  medicallyReviewedBy,
  publishedDate,
  updatedDate,
  onNavigateAuthor,
}) => {
  const safeAuthor = author || {
    slug: 'elena-vance',
    name: 'Dr. Elena Vance, MD',
    role: 'Chief Medical Editor',
    credentials: 'Board-Certified Internal Medicine & Preventive Cardiologist',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    bio: 'Medical research and editorial review team at VitalPath Health.',
  };

  const authorSlug = safeAuthor.slug || 'elena-vance';
  const reviewerSlug = medicallyReviewedBy?.slug || (medicallyReviewedBy?.name.toLowerCase().includes('vance') ? 'elena-vance' : 'sarah-lindqvist');

  const handleAuthorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateAuthor) {
      onNavigateAuthor(authorSlug);
    } else {
      window.location.href = `/author/${authorSlug}/`;
    }
  };

  const handleReviewerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateAuthor) {
      onNavigateAuthor(reviewerSlug);
    } else {
      window.location.href = `/author/${reviewerSlug}/`;
    }
  };

  return (
    <div className="my-10 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-6" id="author-bio-box">
      {/* Primary Author */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
        <a
          href={`/author/${authorSlug}/`}
          onClick={handleAuthorClick}
          className="shrink-0 group cursor-pointer block"
          title={`View full clinical profile for ${safeAuthor.name}`}
        >
          <img
            src={safeAuthor.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
            alt={safeAuthor.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-emerald-600/30 group-hover:ring-emerald-600 shadow-xs transition-all"
            loading="lazy"
          />
        </a>
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded">
                Lead Clinical Author
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {safeAuthor.role} • {safeAuthor.credentials}
              </span>
            </div>

            <a
              href={`/author/${authorSlug}/`}
              onClick={handleAuthorClick}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
            >
              <span>Full Profile &amp; SameAs IDs</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <h3 className="font-serif-title text-xl font-bold text-slate-900">
            <a
              href={`/author/${authorSlug}/`}
              onClick={handleAuthorClick}
              className="hover:text-emerald-800 hover:underline transition-colors cursor-pointer"
            >
              {safeAuthor.name}
            </a>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {safeAuthor.bio}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
            {(publishedDate || updatedDate) && (
              <div className="text-slate-400 flex flex-wrap items-center gap-3">
                {publishedDate && <span>First published: {publishedDate}</span>}
                {updatedDate && (
                  <>
                    <span>•</span>
                    <span className="font-medium text-emerald-800">
                      Fact-checked & updated: {updatedDate}
                    </span>
                  </>
                )}
              </div>
            )}

            {safeAuthor.sameAs && safeAuthor.sameAs.length > 0 && (
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="text-slate-400">Authority IDs:</span>
                <span className="text-emerald-800 font-medium">LinkedIn</span>
                <span>•</span>
                <span className="text-emerald-800 font-medium">ResearchGate</span>
                <span>•</span>
                <span className="text-emerald-800 font-medium">ORCID</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Medical Reviewer Co-Verification */}
      {medicallyReviewedBy && medicallyReviewedBy.name && (
        <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start gap-4 bg-white/70 p-4 rounded-xl border border-slate-200/60">
          <a
            href={`/author/${reviewerSlug}/`}
            onClick={handleReviewerClick}
            className="shrink-0 cursor-pointer block group"
            title={`View profile for reviewer ${medicallyReviewedBy.name}`}
          >
            <img
              src={medicallyReviewedBy.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
              alt={medicallyReviewedBy.name}
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-teal-600/30 group-hover:ring-teal-600 shrink-0 transition-all"
              loading="lazy"
            />
          </a>
          <div className="space-y-1 text-xs flex-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-teal-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Independent Medical Review</span>
              </div>
              <a
                href={`/author/${reviewerSlug}/`}
                onClick={handleReviewerClick}
                className="text-[11px] font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer"
              >
                Reviewer Profile →
              </a>
            </div>
            <p className="font-bold text-slate-900 text-sm">
              <a
                href={`/author/${reviewerSlug}/`}
                onClick={handleReviewerClick}
                className="hover:underline cursor-pointer"
              >
                {medicallyReviewedBy.name}
              </a>{' '}
              — <span className="font-normal text-slate-500">{medicallyReviewedBy.title}</span>
            </p>
            <p className="text-slate-600 text-[11px]">
              {medicallyReviewedBy.institution}
            </p>
            <p className="text-slate-600 pt-1 italic">
              "{medicallyReviewedBy.verificationNote}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
