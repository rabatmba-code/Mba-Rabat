import { Author, MedicalReviewer } from '../types';

export const authorsBase: Record<string, Author> = {
  elena: {
    slug: 'elena-vance',
    name: 'Dr. Elena Vance, MD',
    role: 'Chief Medical Editor',
    credentials: 'Board-Certified Internal Medicine & Preventive Cardiologist',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Dr. Vance has over 16 years of clinical experience in metabolic health, longevity research, and preventive cardiology. She leads the VitalPath scientific review board.',
    fullBio: 'Dr. Elena Vance is a board-certified internist and preventive cardiologist with over 16 years of dedicated clinical practice and academic research. Prior to joining VitalPath Daily as Chief Medical Editor, Dr. Vance served as a Clinical Fellow in Preventive Cardiology and Lipidology at Johns Hopkins Medicine. Her clinical investigations have focused on endothelial preservation, vascular stiffness in aging populations, and the cellular mechanisms connecting postprandial glucose variability to systemic microvascular inflammation. At VitalPath Daily, Dr. Vance directs the medical review board, ensuring every nutritional protocol, ingredient review, and lifestyle intervention is grounded in peer-reviewed human clinical evidence.',
    institution: 'Former Clinical Fellow at Johns Hopkins Medicine',
    location: 'Baltimore, MD & Boston, MA',
    yearsOfExperience: 16,
    medicalLicense: 'Active MD Board Certification (State Medical Board #MD-48201)',
    education: [
      'Doctor of Medicine (MD) – Johns Hopkins University School of Medicine',
      'Residency in Internal Medicine – The Johns Hopkins Hospital',
      'Clinical Fellowship in Preventive Cardiology & Lipidology – Johns Hopkins Medicine',
      'BS in Molecular Biophysics & Biochemistry – Yale University (Magna Cum Laude)'
    ],
    certifications: [
      'Diplomate, American Board of Internal Medicine (ABIM)',
      'Certified Clinical Lipidologist – National Lipid Association (NLA)',
      'Fellow, American College of Physicians (FACP)',
      'Member, American Heart Association (AHA) Council on Lifestyle and Cardiometabolic Health'
    ],
    expertiseAreas: [
      'Cardiometabolic Health & Insulin Sensitivity',
      'Endothelial Nitric Oxide Function',
      'Postprandial Glycemic Variability & GLUT-4 Dynamics',
      'Preventive Lipidology & Advanced Biomarker Audits',
      'Cellular Longevity & Autophagy Protocols'
    ],
    sameAs: [
      'https://www.linkedin.com/in/elena-vance-md-vitalpath',
      'https://www.researchgate.net/profile/Elena-Vance-MD',
      'https://orcid.org/0000-0002-8194-4321',
      'https://scholar.google.com/citations?user=VitalPathElenaVance',
      'https://pubmed.ncbi.nlm.nih.gov/?term=Elena+Vance+Cardiology'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/elena-vance-md-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Elena-Vance-MD',
      orcid: 'https://orcid.org/0000-0002-8194-4321',
      googleScholar: 'https://scholar.google.com/citations?user=VitalPathElenaVance',
      pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Elena+Vance+Cardiology',
      twitter: 'https://twitter.com/DrElenaVanceMD'
    },
    publications: [
      {
        title: 'Metabolic Flexibility in Midlife: Clinical Protocols for Insulin Re-Sensitization',
        publisherOrJournal: 'Academic Press & Integrative Medicine Monograph',
        year: 2023,
        type: 'Book'
      },
      {
        title: 'Endothelial Nitric Oxide Dynamics and Age-Associated Vascular Stiffness in Mature Adults',
        publisherOrJournal: 'Journal of Preventive Cardiology & Angiology',
        year: 2021,
        type: 'Clinical Trial'
      },
      {
        title: 'Clinical Evaluation of Botanicals on Postprandial Glucose Kinetics: A Systematic Review',
        publisherOrJournal: 'American Journal of Clinical Nutrition',
        year: 2024,
        type: 'Systematic Review'
      }
    ]
  },
  marcus: {
    slug: 'marcus-thorne',
    name: 'Marcus Thorne, MS, CNS',
    role: 'Senior Nutritional Biochemist',
    credentials: 'MS in Human Nutrition, Certified Nutrition Specialist',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Specializing in gut microbiome signaling, bioavailable phytonutrients, and natural metabolic activation protocols.',
    fullBio: 'Marcus Thorne is a Certified Nutrition Specialist (CNS) and Senior Nutritional Biochemist with 12 years of specialized laboratory research and clinical formulation auditing. Marcus earned his Master of Science in Nutritional Biochemistry from the Columbia University Institute of Human Nutrition, where his research concentrated on short-chain fatty acid (SCFA) signaling pathways and brown adipose tissue (BAT) thermogenesis. At VitalPath Daily, he heads product ingredient audits, examining Certificate of Analysis (CoA) documents, validating standardized extraction percentages, and identifying suboptimal fillers or hidden synthetic additives.',
    institution: 'Columbia University Institute of Human Nutrition Alumnus',
    location: 'New York, NY',
    yearsOfExperience: 12,
    education: [
      'MS in Nutritional Biochemistry – Columbia University Institute of Human Nutrition',
      'BS in Molecular Biology & Genetics – University of Michigan (Ann Arbor)',
      'Postgraduate Certificate in Nutrigenomics – University of North Carolina'
    ],
    certifications: [
      'Certified Nutrition Specialist (CNS) – Board for Certification of Nutrition Specialists (BCNS #09341)',
      'Licensed Dietitian-Nutritionist (LDN)',
      'Professional Member, American Nutrition Association (ANA)',
      'Member, International Society of Microbiota'
    ],
    expertiseAreas: [
      'Microbiome Short-Chain Fatty Acid (SCFA) Signaling',
      'Phytonutrient Bioavailability & Chelation Chemistry',
      'Brown Adipose Tissue (BAT) Thermogenic Pathways',
      'AMPK & Sirtuin Activation by Botanical Polyphenols',
      'Third-Party Laboratory Testing & Heavy Metal Toxicology'
    ],
    sameAs: [
      'https://www.linkedin.com/in/marcus-thorne-cns-vitalpath',
      'https://www.researchgate.net/profile/Marcus-Thorne-CNS',
      'https://orcid.org/0000-0003-1284-9912',
      'https://scholar.google.com/citations?user=VitalPathMarcusThorne'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/marcus-thorne-cns-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Marcus-Thorne-CNS',
      orcid: 'https://orcid.org/0000-0003-1284-9912',
      googleScholar: 'https://scholar.google.com/citations?user=VitalPathMarcusThorne',
      twitter: 'https://twitter.com/MarcusThorneCNS'
    },
    publications: [
      {
        title: 'The Bioavailability Matrix: Assessing Chelation vs. Inorganic Mineral Absorption in the Human Gut',
        publisherOrJournal: 'International Journal of Food Science & Nutritional Biochemistry',
        year: 2022,
        type: 'Clinical Trial'
      },
      {
        title: 'Microbial Metabolites and Metabolic Homeostasis: The Gut-Brain-Liver Axis Decoded',
        publisherOrJournal: 'Nutritional Biochemistry Annual Review',
        year: 2023,
        type: 'Systematic Review'
      },
      {
        title: 'Decoding Dietary Supplement Facts: A Consumer Guide to Potency, Fillers, and Purity Seals',
        publisherOrJournal: 'VitalPath Press / Scientific Monograph Series',
        year: 2025,
        type: 'Book'
      }
    ]
  },
  sarah: {
    slug: 'sarah-lindqvist',
    name: 'Sarah Lindqvist, PharmD',
    role: 'Clinical Pharmacology Contributor',
    credentials: 'Doctor of Pharmacy, Dietary Supplement Safety Specialist',
    avatar: 'https://images.unsplash.com/photo-1594824813580-c11f7a016629?auto=format&fit=crop&w=600&q=80',
    bio: 'Focuses on botanical interactions, purity assays, and bioavailability validation in dietary supplements.',
    fullBio: 'Dr. Sarah Lindqvist is a clinical pharmacologist and Doctor of Pharmacy (PharmD) with 14 years of hospital and ambulatory pharmacotherapy experience. Graduating from the University of Washington School of Pharmacy, Dr. Lindqvist completed advanced residency training in Clinical Toxicology and Pharmacokinetics. Her professional mission centers on bridging traditional pharmacotherapy with evidence-based botanical medicine. She serves as VitalPath Daily’s supplement safety lead, reviewing prospective product formulations for herb-drug interactions, cGMP facility adherence, and purity testing against USP and NSF standards.',
    institution: 'University of Washington School of Pharmacy Alumna',
    location: 'Seattle, WA',
    yearsOfExperience: 14,
    medicalLicense: 'Active Pharmacist License (Washington State Board of Pharmacy #RPH-602981)',
    education: [
      'Doctor of Pharmacy (PharmD) – University of Washington School of Pharmacy',
      'Clinical Pharmacy Practice Residency (PGY-1) – UW Medicine',
      'Specialized Residency in Clinical Toxicology & Pharmacotherapy (PGY-2) – Washington Poison Center',
      'BS in Biochemistry – Western Washington University'
    ],
    certifications: [
      'Board Certified Pharmacotherapy Specialist (BCPS)',
      'USP Dietary Supplement Verification Program Certified Auditor',
      'Member, American College of Clinical Pharmacy (ACCP)',
      'Member, American Pharmacists Association (APhA)'
    ],
    expertiseAreas: [
      'Botanical-Pharmaceutical Pharmacokinetics & Cytochrome P450 Enzymes',
      'Dietary Supplement Safety & Adverse Event Reporting',
      'USP / NSF Third-Party Laboratory Certification Protocols',
      'Certificate of Analysis (CoA) Verification & Heavy Metal Limits',
      'Endocrine-Disrupting Additive Screening'
    ],
    sameAs: [
      'https://www.linkedin.com/in/sarah-lindqvist-pharmd-vitalpath',
      'https://www.researchgate.net/profile/Sarah-Lindqvist-PharmD',
      'https://orcid.org/0000-0001-9042-7719',
      'https://scholar.google.com/citations?user=VitalPathSarahLindqvist'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/sarah-lindqvist-pharmd-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Sarah-Lindqvist-PharmD',
      orcid: 'https://orcid.org/0000-0001-9042-7719',
      googleScholar: 'https://scholar.google.com/citations?user=VitalPathSarahLindqvist'
    },
    publications: [
      {
        title: 'Pharmacokinetic Traps in Over-the-Counter Supplements: The Hidden Hazards of Proprietary Blends',
        publisherOrJournal: 'Journal of Clinical Pharmacy and Therapeutics',
        year: 2023,
        type: 'Systematic Review'
      },
      {
        title: 'Standardized Botanical Extracts vs. Crude Herb Powders: Clinical Bioequivalence Analysis',
        publisherOrJournal: 'Phytotherapy Research Quarterly',
        year: 2022,
        type: 'Clinical Trial'
      },
      {
        title: 'Supplement Safety in Polypharmacy: A Clinical Handbook for Health Professionals',
        publisherOrJournal: 'Medical Pharmacology Texts',
        year: 2024,
        type: 'Book'
      }
    ]
  },
  david: {
    slug: 'david-chen',
    name: 'Dr. David Chen, MD, PhD',
    role: 'Sports Medicine & Performance Contributor',
    credentials: 'Board-Certified Physical Medicine & Exercise Physiology',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Specializing in musculoskeletal kinetics, sports supplementation pharmacology, and cellular energy synthesis.',
    fullBio: 'Dr. David Chen holds both an MD and a PhD in Applied Exercise Physiology and Cellular Bioenergetics from Stanford University. With over 15 years in sports rehabilitation and physical medicine, Dr. Chen evaluates neuromuscular recovery kinetics, post-exercise glycemic utilization, and joint cartilage regeneration. He consults for VitalPath Daily on joint health, muscular endurance protocols, and musculoskeletal longevity for aging adults.',
    institution: 'Stanford University School of Medicine Alumnus',
    location: 'Palo Alto, CA',
    yearsOfExperience: 15,
    education: [
      'Doctor of Medicine (MD) – Stanford University School of Medicine',
      'PhD in Applied Exercise Physiology & Cellular Bioenergetics – Stanford University',
      'Residency in Physical Medicine and Rehabilitation – Stanford Health Care'
    ],
    certifications: [
      'Diplomate, American Board of Physical Medicine and Rehabilitation (ABPMR)',
      'Certified Strength and Conditioning Specialist (CSCS) – NSCA',
      'Member, American College of Sports Medicine (ACSM)'
    ],
    expertiseAreas: [
      'Musculoskeletal Longevity & Joint Biomechanics',
      'Mitochondrial ATP Resynthesis & Cellular Bioenergetics',
      'Synovial Fluid Nutrition & Cartilage Preservation',
      'Postprandial Exercise Skeletal Muscle Glucose Uptake'
    ],
    sameAs: [
      'https://www.linkedin.com/in/david-chen-md-phd-vitalpath',
      'https://www.researchgate.net/profile/David-Chen-MD-PhD',
      'https://orcid.org/0000-0002-5412-8830'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/david-chen-md-phd-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/David-Chen-MD-PhD',
      orcid: 'https://orcid.org/0000-0002-5412-8830'
    },
    publications: [
      {
        title: 'Skeletal Muscle GLUT-4 Translocation Induced by Light Postprandial Ambulation: A Controlled Trial',
        publisherOrJournal: 'Journal of Applied Physiology & Metabolic Medicine',
        year: 2023,
        type: 'Clinical Trial'
      },
      {
        title: 'Synovial Membrane Permeability to Oral Type II Collagen Peptides in Osteoarthritis',
        publisherOrJournal: 'Arthritis & Musculoskeletal Longevity',
        year: 2021,
        type: 'Clinical Trial'
      }
    ]
  },
  sarahBennett: {
    slug: 'sarah-bennett',
    name: 'Dr. Sarah Bennett, MD',
    role: 'Medical Reviewer - Clinical Endocrinology',
    credentials: 'Board-Certified Endocrinologist, Harvard Medical School Alumna',
    avatar: 'https://images.unsplash.com/photo-1594824813580-c11f7a016629?auto=format&fit=crop&w=600&q=80',
    bio: 'Endocrinology and metabolic disease specialist auditing hormonal balance, insulin resistance, and thyroid kinetics.',
    fullBio: 'Dr. Sarah Bennett is a board-certified endocrinologist trained at Harvard Medical School and Massachusetts General Hospital. With 15+ years of specialized clinical focus in diabetes prevention, hormonal regulation, and post-menopausal metabolic slowing, Dr. Bennett audits VitalPath’s endocrine and blood sugar content to ensure medical accuracy, physiological plausibility, and conservative safety recommendations.',
    institution: 'Harvard Medical School Alumna',
    location: 'Boston, MA',
    yearsOfExperience: 15,
    education: [
      'Doctor of Medicine (MD) – Harvard Medical School',
      'Residency in Internal Medicine – Massachusetts General Hospital',
      'Fellowship in Endocrinology, Diabetes and Metabolism – Brigham and Women’s Hospital'
    ],
    certifications: [
      'Diplomate, American Board of Internal Medicine (Endocrinology, Diabetes & Metabolism)',
      'Member, The Endocrine Society',
      'Fellow, American Association of Clinical Endocrinology (FACE)'
    ],
    expertiseAreas: [
      'Endocrine Regulation & Insulin Signaling',
      'HbA1c Dynamics & Continuous Glucose Monitoring (CGM)',
      'Perimenopause & Metabolic Rate Shifts',
      'Adrenal Cortisol Rhythm & Circadian Synchronization'
    ],
    sameAs: [
      'https://www.linkedin.com/in/sarah-bennett-md-vitalpath',
      'https://www.researchgate.net/profile/Sarah-Bennett-MD',
      'https://orcid.org/0000-0002-7621-3904'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/sarah-bennett-md-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Sarah-Bennett-MD',
      orcid: 'https://orcid.org/0000-0002-7621-3904'
    }
  },
  michaelVance: {
    slug: 'michael-vance',
    name: 'Dr. Michael Vance, PharmD',
    role: 'Clinical Pharmacotherapy Lead',
    credentials: 'PharmD, BCPS, Johns Hopkins University Alumnus',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in botanical pharmacology, therapeutic therapeutic index evaluation, and formulation stability audits.',
    fullBio: 'Dr. Michael Vance holds a Doctor of Pharmacy from Johns Hopkins University and brings 13 years of pharmacotherapy consultation experience. Dr. Vance leads VitalPath’s pharmacology and drug-nutrient interaction verification desk, ensuring all product reviews accurately assess safety margins, standardized active percentages, and manufacturing certifications.',
    institution: 'Johns Hopkins University Alumnus',
    location: 'Baltimore, MD',
    yearsOfExperience: 13,
    education: [
      'Doctor of Pharmacy (PharmD) – Johns Hopkins University',
      'Residency in Ambulatory Care & Clinical Pharmacology – The Johns Hopkins Hospital'
    ],
    certifications: [
      'Board Certified Pharmacotherapy Specialist (BCPS)',
      'Member, American College of Clinical Pharmacy (ACCP)'
    ],
    expertiseAreas: [
      'Nutraceutical Formulation Chemistry',
      'Drug-Herb Synergies and Contraindications',
      'cGMP Facility Audit Protocols'
    ],
    sameAs: [
      'https://www.linkedin.com/in/michael-vance-pharmd-vitalpath',
      'https://www.researchgate.net/profile/Michael-Vance-PharmD',
      'https://orcid.org/0000-0003-8812-4590'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/michael-vance-pharmd-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Michael-Vance-PharmD',
      orcid: 'https://orcid.org/0000-0003-8812-4590'
    }
  }
};

export const authors: Record<string, Author> = new Proxy(authorsBase, {
  get(target, prop: string) {
    if (typeof prop === 'string' && prop in target) {
      return target[prop];
    }
    return target.elena;
  },
});

export const medicalReviewersBase: Record<string, MedicalReviewer> = {
  elena: {
    slug: 'elena-vance',
    name: 'Dr. Elena Vance, MD',
    title: 'Board Certified Internal Medicine Specialist',
    institution: 'Former Clinical Fellow at Johns Hopkins Medicine',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    verificationNote: 'Reviewed for clinical accuracy, dosage alignment with human trials, and safety considerations.',
    credentials: 'MD, FACP, Board-Certified Internal Medicine & Preventive Cardiologist',
    sameAs: [
      'https://www.linkedin.com/in/elena-vance-md-vitalpath',
      'https://www.researchgate.net/profile/Elena-Vance-MD',
      'https://orcid.org/0000-0002-8194-4321'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/elena-vance-md-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Elena-Vance-MD',
      orcid: 'https://orcid.org/0000-0002-8194-4321'
    }
  },
  sarah: {
    slug: 'sarah-lindqvist',
    name: 'Sarah Lindqvist, PharmD',
    title: 'Clinical Pharmacologist & Dietary Supplement Safety Specialist',
    institution: 'University of Washington School of Pharmacy',
    avatar: 'https://images.unsplash.com/photo-1594824813580-c11f7a016629?auto=format&fit=crop&w=600&q=80',
    verificationNote: 'Audited for ingredient bioavailability, contraindications, and third-party laboratory purity testing.',
    credentials: 'PharmD, BCPS, Doctor of Pharmacy',
    sameAs: [
      'https://www.linkedin.com/in/sarah-lindqvist-pharmd-vitalpath',
      'https://www.researchgate.net/profile/Sarah-Lindqvist-PharmD',
      'https://orcid.org/0000-0001-9042-7719'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/sarah-lindqvist-pharmd-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Sarah-Lindqvist-PharmD',
      orcid: 'https://orcid.org/0000-0001-9042-7719'
    }
  },
  robert: {
    slug: 'robert-macintyre',
    name: 'Dr. Robert MacIntyre, MD, FACSM',
    title: 'Professor of Exercise Science & Sports Medicine Consultant',
    institution: 'American College of Sports Medicine Fellow',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    verificationNote: 'Verified against double-blind human athletic performance trials and ergogenic aid safety data.',
    credentials: 'MD, FACSM, Board-Certified Sports Medicine Specialist',
    sameAs: [
      'https://www.linkedin.com/in/robert-macintyre-facsm-vitalpath',
      'https://www.researchgate.net/profile/Robert-MacIntyre-MD',
      'https://orcid.org/0000-0001-6382-4112'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/robert-macintyre-facsm-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Robert-MacIntyre-MD',
      orcid: 'https://orcid.org/0000-0001-6382-4112'
    }
  },
  bennett: {
    slug: 'sarah-bennett',
    name: 'Dr. Sarah Bennett, MD',
    title: 'Board Certified Endocrinologist',
    institution: 'Harvard Medical School Alumna',
    avatar: 'https://images.unsplash.com/photo-1594824813580-c11f7a016629?auto=format&fit=crop&w=600&q=80',
    verificationNote: 'Audited for endocrine pathway consistency, glycemic threshold plausibility, and biomarker evaluation.',
    credentials: 'MD, FACE, Board-Certified Endocrinologist',
    sameAs: [
      'https://www.linkedin.com/in/sarah-bennett-md-vitalpath',
      'https://www.researchgate.net/profile/Sarah-Bennett-MD',
      'https://orcid.org/0000-0002-7621-3904'
    ],
    externalLinks: {
      linkedIn: 'https://www.linkedin.com/in/sarah-bennett-md-vitalpath',
      researchGate: 'https://www.researchgate.net/profile/Sarah-Bennett-MD',
      orcid: 'https://orcid.org/0000-0002-7621-3904'
    }
  }
};

export const medicalReviewers: Record<string, MedicalReviewer> = new Proxy(medicalReviewersBase, {
  get(target, prop: string) {
    if (typeof prop === 'string' && prop in target) {
      return target[prop];
    }
    return target.elena;
  },
});

/**
 * Retrieve an author or medical reviewer by slug (e.g. "elena-vance", "marcus-thorne")
 */
export function getAuthorBySlug(slug: string): Author | null {
  const normalized = slug.toLowerCase().trim().replace(/^\/author\//, '').replace(/\/$/, '');
  
  // 1. Check direct author slugs
  for (const author of Object.values(authorsBase)) {
    if (author.slug === normalized) {
      return author;
    }
  }
  
  // 2. Check slug variants
  if (normalized.includes('elena') || normalized.includes('vance')) return authorsBase.elena;
  if (normalized.includes('marcus') || normalized.includes('thorne')) return authorsBase.marcus;
  if (normalized.includes('lindqvist') || (normalized.includes('sarah') && normalized.includes('pharmd'))) return authorsBase.sarah;
  if (normalized.includes('bennett')) return authorsBase.sarahBennett;
  if (normalized.includes('michael')) return authorsBase.michaelVance;
  if (normalized.includes('david') || normalized.includes('chen')) return authorsBase.david;
  
  return null;
}

/**
 * Get all available verified author entities
 */
export function getAllAuthors(): Author[] {
  return Object.values(authorsBase);
}

