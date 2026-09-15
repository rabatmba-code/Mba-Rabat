import { Author, MedicalReviewer } from '../types';

export const authors: Record<string, Author> = {
  elena: {
    name: 'Dr. Elena Vance, MD',
    role: 'Chief Medical Editor',
    credentials: 'Board-Certified Internal Medicine & Preventive Cardiologist',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    bio: 'Dr. Vance has over 16 years of clinical experience in metabolic health, longevity research, and preventive cardiology. She leads the VitalPath scientific review board.',
  },
  marcus: {
    name: 'Marcus Thorne, MS, CNS',
    role: 'Senior Nutritional Biochemist',
    credentials: 'MS in Human Nutrition, Certified Nutrition Specialist',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    bio: 'Specializing in gut microbiome signaling, bioavailable phytonutrients, and natural metabolic activation protocols.',
  },
  sarah: {
    name: 'Sarah Lindqvist, PharmD',
    role: 'Clinical Pharmacology Contributor',
    credentials: 'Doctor of Pharmacy, Dietary Supplement Safety Specialist',
    avatar: 'https://images.unsplash.com/photo-1594824813580-c11f7a016629?auto=format&fit=crop&w=300&q=80',
    bio: 'Focuses on botanical interactions, purity assays, and bioavailability validation in dietary supplements.',
  },
};

export const medicalReviewers: Record<string, MedicalReviewer> = {
  elena: {
    name: 'Dr. Elena Vance, MD',
    title: 'Board Certified Internal Medicine Specialist',
    institution: 'Former Clinical Fellow at Johns Hopkins Medicine',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    verificationNote: 'Reviewed for clinical accuracy, dosage alignment with human trials, and safety considerations.',
  },
};
