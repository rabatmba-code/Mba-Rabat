export interface Author {
  name: string;
  role: string;
  credentials: string;
  avatar: string;
  bio: string;
}

export interface MedicalReviewer {
  name: string;
  title: string;
  institution: string;
  avatar: string;
  verificationNote: string;
}

export interface ScientificReference {
  id: number;
  title: string;
  journal: string;
  year: number;
  doiOrUrl?: string;
}

export interface OfferPhotoItem {
  id: string; // e.g. "gluco6_bottle_packaging"
  name: string; // e.g. "Gluco6 Bottle Packaging & Tamper Seal"
  url: string;
  caption: string;
  alt: string;
  categoryTag: string; // e.g. "Packaging", "Ingredients", "Testing", "Capsules", "Daily Use"
}

export interface ClickBankOffer {
  id: string;
  name: string;
  niche: 'metabolism' | 'bloodsugar' | 'gut' | 'joints' | 'longevity' | 'sleep' | 'aging';
  categoryName: string;
  tagline: string;
  badge: string;
  vendorId: string; // e.g. "puravive", "sugardef", "leanbiome"
  hoplinkFallback: string;
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  bundlePrice: number;
  savingsPercentage: number;
  guaranteeDays: number;
  heroImage: string;
  galleryPhotos?: OfferPhotoItem[];
  pros: string[];
  cons: string[];
  keyIngredients: {
    name: string;
    description: string;
    clinicalTrialNote: string;
  }[];
  verdict: string;
  ctaText: string;
  vslBulletPoints: string[];
  bonusGifts: string[];
}

export interface ArticleContentSection {
  heading: string;
  subheading?: string;
  content?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  subsections?: {
    title: string;
    content: string;
    bulletPoints?: string[];
  }[];
  callout?: {
    type?: 'tip' | 'warning' | 'study';
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  path?: string; // e.g. "/healthy-blood-sugar/what-is-healthy-blood-sugar/"
  title: string;
  subtitle: string;
  category: 
    | 'Healthy Blood Sugar'
    | 'Blood Sugar'
    | 'Weight Management'
    | 'Sleep & Stress'
    | 'Healthy Aging'
    | 'Nutrition'
    | 'Product Reviews'
    | 'Reviews'
    | 'Comparisons'
    | 'Metabolism'
    | 'Gut Health'
    | 'Joints & Mobility';
  readingTime: string;
  publishedDate: string;
  author: Author;
  medicallyReviewedBy?: MedicalReviewer;
  coverImage: string;
  summary: string;
  isEditorialPinnacle?: boolean;
  linkedOfferId?: string; // References central AFFILIATE_OFFERS key
  contentSections: ArticleContentSection[];
  tableData?: {
    title?: string;
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  internalLinks?: {
    anchorText: string;
    url: string;
    context: string;
  }[];
  seoTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  references: ScientificReference[];
  visualPlan?: ArticleVisualPlan;
  editorialImages?: EditorialImageItem[];
}

export type EditorialImageRole = 'hero' | 'problem' | 'educational' | 'lifestyle' | 'solution' | 'cta';

export interface SeoImageMetadata {
  altText: string;
  imageTitle: string;
  caption: string;
  fileName: string;
}

export interface EditorialImageItem {
  id: string;
  index: number;
  role: EditorialImageRole;
  roleLabel: string;
  purpose: string;
  placement: string;
  placementSectionIndex: number; // -1 for hero/top, 0 for after sec 0, etc.
  prompt: string;
  seoMetadata: SeoImageMetadata;
  aspectRatio: '16:9' | '4:3' | '1:1';
  imageUrl: string;
  isInserted: boolean;
  status: 'ready' | 'generating' | 'customized';
  photographerCredit?: string;
}

export interface ArticleVisualPlan {
  articleId: string;
  articleTitle: string;
  articleTopic: string;
  primaryKeyword: string;
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Educational Routine' | 'Buyer Guide';
  healthCategory: string;
  targetAudience: string;
  matchedOfferId: string | null;
  matchedOfferName: string | null;
  matchedOfferUrl: string | null;
  matchedOfferReason: string;
  naturalCtaText: string;
  naturalCtaHeadline: string;
  imageCount: number;
  images: EditorialImageItem[];
}

export interface ClickBankOfferDetail {
  id: string;
  name: string;
  affiliateLink: string;
  additionalPages?: string[];
  primaryTopics: string[];
  targetDemographics: string;
  negativeFilters: string[];
  naturalCtaTransitions: string[];
  keyBenefits: string[];
  editorialSummary: string;
}

export interface AffiliateSettings {
  clickBankNickname: string; // e.g. "vitalpath"
  trackingId: string; // e.g. "fb_camp_1" or "google_ad"
  activePromotedOfferId: string;
  customHoplinkOverride?: string;
  enableStickyBanner: boolean;
  enableExitIntentDiscount: boolean;
}

export interface DomainOption {
  domain: string;
  verdict: 'Recommended' | 'Great Alternative' | 'Niche Focused';
  authorityScore: number;
  pros: string[];
  strategyNote: string;
  trafficSuitability: string;
  targetAudienceMatch?: string;
}
