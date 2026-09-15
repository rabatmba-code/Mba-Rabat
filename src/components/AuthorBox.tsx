import React from 'react';
import { ShieldCheck, Award, UserCheck, BookOpen } from 'lucide-react';
import { Author, MedicalReviewer } from '../types';

interface AuthorBoxProps {
  author: Author;
  medicallyReviewedBy?: MedicalReviewer;
  publishedDate?: string;
  updatedDate?: string;
}

export const AuthorBox: React.FC<AuthorBoxProps> = ({
  author,
  medicallyReviewedBy,
  publishedDate,
  updatedDate,
}) => {
  return (
    <div className="my-10 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-6" id="author-bio-box">
      {/* Primary Author */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-emerald-600/30 shrink-0 shadow-xs"
          loading="lazy"
        />
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded">
              Lead Author
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {author.role} • {author.credentials}
            </span>
          </div>

          <h3 className="font-serif-title text-xl font-bold text-slate-900">
            {author.name}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {author.bio}
          </p>

          {(publishedDate || updatedDate) && (
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-3">
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
        </div>
      </div>

      {/* Medical Reviewer Co-Verification */}
      {medicallyReviewedBy && (
        <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start gap-4 bg-white/70 p-4 rounded-xl border border-slate-200/60">
          <img
            src={medicallyReviewedBy.avatar}
            alt={medicallyReviewedBy.name}
            className="w-12 h-12 rounded-xl object-cover ring-2 ring-teal-600/30 shrink-0"
            loading="lazy"
          />
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-1.5 text-teal-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Independent Medical Review</span>
            </div>
            <p className="font-bold text-slate-900 text-sm">
              {medicallyReviewedBy.name} — <span className="font-normal text-slate-500">{medicallyReviewedBy.title}</span>
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
