import React, { useState } from 'react';
import { 
  Camera, 
  CheckCircle2, 
  ExternalLink, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { OfferPhotoItem } from '../types';
import { getOfferPhotos } from '../data/offerPhotoGalleries';
import { getAffiliateOffer, getAffiliateUrl } from '../config/affiliateOffers';

interface OfferProductGalleryProps {
  offerId: string;
  offerName?: string;
  onReadReview?: (offerId: string) => void;
}

export const OfferProductGallery: React.FC<OfferProductGalleryProps> = ({
  offerId,
  offerName,
  onReadReview
}) => {
  const photos: OfferPhotoItem[] = getOfferPhotos(offerId);
  const offer = getAffiliateOffer(offerId);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const displayName = offerName || offer?.name || 'Vetted Protocol';
  const destinationUrl = getAffiliateUrl(offerId);

  const activePhoto = photos[selectedPhotoIndex] || photos[0];

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div 
      id={`offer-gallery-${offerId}`}
      className="my-10 bg-gradient-to-b from-slate-50 to-emerald-50/30 border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs"
    >
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            <Camera className="w-4 h-4 text-emerald-700" />
            <span>Visual Inspection &amp; Formulation Gallery</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
              5 Verified Photos
            </span>
          </div>
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
            {displayName}: Visual Breakdown &amp; Lab Inspection
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Click any image to inspect
          </span>
          <a
            href={destinationUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl transition-colors shadow-2xs"
          >
            <span>Visit Official Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Featured Photo & 4-Grid Thumbnails */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Large Featured Viewer (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-2 shadow-xs relative group overflow-hidden">
          <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-900">
            <img
              src={activePhoto.url}
              alt={activePhoto.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Badge Tag */}
            <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Photo {selectedPhotoIndex + 1} of 5: {activePhoto.categoryTag}</span>
            </div>

            {/* Lightbox button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Expand image"
              className="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-xl transition-colors shadow-md"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Overlay Caption Info */}
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-xs font-mono font-bold text-emerald-300 tracking-wide uppercase">
                ID: {activePhoto.id}
              </p>
              <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 leading-snug">
                {activePhoto.name}
              </h4>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Thumbnails / List Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          {photos.map((photo, index) => {
            const isCurrent = index === selectedPhotoIndex;
            return (
              <button
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`w-full text-left p-2.5 rounded-2xl transition-all border flex items-center gap-3 cursor-pointer ${
                  isCurrent 
                    ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20' 
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="relative shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-slate-900/85 text-white font-bold text-[9px] px-1.5 py-0.2 rounded">
                    #{index + 1}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {photo.categoryTag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {photo.id}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 truncate mt-1">
                    {photo.name.replace(`${displayName} - `, '')}
                  </h5>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trust & Guarantee Callout Footer */}
      <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>All 5 photography assets are archived and verified under laboratory batch audits.</span>
        </div>

        <a
          href={destinationUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1"
        >
          <span>Claim Direct Manufacturer Discount for {displayName}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-emerald-600 px-2.5 py-0.5 rounded-full text-white">
                  Photo {selectedPhotoIndex + 1} / 5
                </span>
                <span className="text-sm font-semibold truncate max-w-md">
                  {activePhoto.name}
                </span>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-16/10 bg-black flex items-center justify-center">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full border border-white/20 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full border border-white/20 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-emerald-400 font-mono uppercase">
                  Asset ID: {activePhoto.id}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {activePhoto.caption}
                </p>
              </div>

              <a
                href={destinationUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
              >
                <span>Check Official Price</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
