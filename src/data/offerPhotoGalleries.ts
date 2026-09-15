import { OfferPhotoItem } from '../types';

export const OFFER_PHOTO_GALLERIES: Record<string, OfferPhotoItem[]> = {
  // 1. Gluco6
  gluco6: [
    {
      id: 'gluco6_bottle_packaging',
      name: 'Gluco6 - Official Bottle Packaging & Tamper-Evident Safety Seal',
      url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
      caption: 'Gluco6 pharmaceutical-grade amber packaging designed to protect delicate bioactive enzymes and Sukre molecules from UV degradation.',
      alt: 'Gluco6 official bottle packaging with safety seal and batch code',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'gluco6_botanical_ingredients',
      name: 'Gluco6 - Active Botanical Matrix (Sukre, TeaCrine & Gymnema)',
      url: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
      caption: 'Pure standardized botanicals including Sukre (L-arabinose), pure TeaCrine theacrine, and whole Ceylon cinnamon bark extract.',
      alt: 'Raw botanical ingredients formulated inside Gluco6 glycemic protocol',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'gluco6_cgmp_lab_testing',
      name: 'Gluco6 - Independent HPLC Quality Assay & Purity Verification',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Every manufacturing batch undergoes third-party HPLC chromatography testing to verify zero heavy metals, zero allergens, and 100% active label claim.',
      alt: 'High-performance liquid chromatography testing for Gluco6 batch purity',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'gluco6_capsule_absorption',
      name: 'Gluco6 - Micro-Encapsulated Bioavailability & Dissolution Profile',
      url: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80',
      caption: 'Vegetarian cellulose capsules engineered for targeted intestinal delivery and rapid gastric dissolution within 18 minutes.',
      alt: 'Gluco6 vegetarian capsules demonstrating clean filler-free formulation',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'gluco6_morning_routine',
      name: 'Gluco6 - Daily Morning Breakfast & Glycemic Balance Routine',
      url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      caption: 'Taken once daily with 8 oz of filtered water alongside breakfast to moderate post-prandial carbohydrate absorption and dawn glucose spikes.',
      alt: 'Patient taking Gluco6 supplement with morning breakfast water glass',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 2. Puravive
  puravive: [
    {
      id: 'puravive_bottle_packaging',
      name: 'Puravive - Official Catalyst Bottle Packaging & Quality Verification',
      url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      caption: 'Puravive protective bottle featuring tamper-proof induction foil sealing to preserve delicate antioxidant phytonutrients.',
      alt: 'Puravive official bottle container with batch authenticity hologram',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'puravive_botanical_nutrients',
      name: 'Puravive - 8 Exotic Tropical Botanicals (Luteolin & Kudzu)',
      url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
      caption: 'Standardized extracts of Holy Basil, White Korean Ginseng, Amur Cork Bark, and concentrated Luteolin specifically chosen to stimulate brown adipose tissue (BAT).',
      alt: 'Puravive herbal cofactors for brown adipose tissue recruitment',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'puravive_quality_inspection',
      name: 'Puravive - FDA-Registered cGMP Cleanroom Facility Inspection',
      url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      caption: 'Manufactured under strict ISO-9001 and current Good Manufacturing Practice (cGMP) sterile protocols in the United States.',
      alt: 'Sterile laboratory cleanroom where Puravive batches are compounded',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'puravive_capsule_delivery',
      name: 'Puravive - Non-GMO Pure Vegetarian Capsule Presentation',
      url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
      caption: '100% plant-derived capsules containing zero artificial binders, zero GMOs, zero dairy, and zero synthetic stimulants.',
      alt: 'Puravive pure vegetarian capsules inspected for uniform fill weight',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'puravive_metabolic_lifestyle',
      name: 'Puravive - Daily Metabolic Activation & Steady Energy Habit',
      url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
      caption: 'Formulated to encourage resting non-shivering thermogenesis without elevating resting heart rate or causing caffeine jitters.',
      alt: 'Active adult taking Puravive for sustainable daytime metabolic vitality',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 3. Sugar Defender
  sugardefender: [
    {
      id: 'sugardefender_liquid_dropper',
      name: 'Sugar Defender - Calibrated Sublingual Dropper & Bottle Packaging',
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      caption: 'Sugar Defender liquid formulation featuring a graduated medical dropper for accurate 1 ml sublingual dosing every morning.',
      alt: 'Sugar Defender liquid dropper bottle with calibrated dosing pipette',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'sugardefender_herbal_extracts',
      name: 'Sugar Defender - Bio-Fermented Herbal Synergy (Eleuthero & Coleus)',
      url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      caption: 'Synergistic botanical complex combining Siberian Eleuthero, Coleus Forskohlii, Maca root, and African Mango for cellular insulin receptor support.',
      alt: 'Fresh botanical herbs and plant roots extracted for Sugar Defender',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'sugardefender_facility_standards',
      name: 'Sugar Defender - Liquid Chromatography & Heavy Metal Screening',
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      caption: 'Tested by independent accredited laboratories to ensure zero pesticide residues, microbial sterility, and exact active potency per milliliter.',
      alt: 'Liquid laboratory assay validating purity of Sugar Defender extracts',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'sugardefender_sublingual_intake',
      name: 'Sugar Defender - Rapid Sublingual Micro-Capillary Absorption',
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      caption: 'Held under the tongue for 30 seconds to allow direct absorption into the rich sublingual venous plexus, bypassing preliminary hepatic first-pass breakdown.',
      alt: 'Sublingual dropper administration delivering bioactive nutrients directly',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'sugardefender_daily_routine',
      name: 'Sugar Defender - Midday Glycemic Balance & Sustained Mental Clarity',
      url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      caption: 'Prevents the dreaded 2:00 PM post-lunch energy crash by maintaining smooth glucose disposal and stable cellular mitochondrial energy.',
      alt: 'Mature adult maintaining clear mental focus with Sugar Defender daily protocol',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 4. LeanBiome
  leanbiome: [
    {
      id: 'leanbiome_bottle_packaging',
      name: 'LeanBiome - Microbiome Diversity Bottle with Desiccant Seal',
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      caption: 'Patented moisture-barrier bottle with integrated desiccant lining to guarantee live probiotic CFU viability without mandatory refrigeration.',
      alt: 'LeanBiome official probiotic supplement bottle with shelf-stable packaging',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'leanbiome_probiotic_strains',
      name: 'LeanBiome - Clinically Studied Lactobacillus Gasseri & Rhamnosus',
      url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      caption: 'Features pure Greenselect Phytosome green tea extract paired with 20 billion CFU of human-origin gut bacteria documented to suppress fat absorption.',
      alt: 'Microscopic beneficial probiotic strains cultured for LeanBiome formulation',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'leanbiome_delayed_release_capsule',
      name: 'LeanBiome - Patented DRcaps Acid-Resistant Delayed Delivery',
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
      caption: 'Innovative DRcaps resist stomach hydrochloric acid for 52 minutes, safely releasing live friendly bacteria directly into the alkaline small intestine.',
      alt: 'DRcaps gastro-resistant capsules protecting LeanBiome cultures',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'leanbiome_microbiome_testing',
      name: 'LeanBiome - Full Plate Count Viability & Microbial Purity Audit',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Certified free of pathogen contamination, yeast overgrowth, and gluten; verified by ISO-accredited third-party analytical laboratories.',
      alt: 'Laboratory Petri plate counting live beneficial bacteria in LeanBiome',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'leanbiome_gut_wellness_routine',
      name: 'LeanBiome - Daily Digestive Comfort & Flat-Belly Gut Health',
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      caption: 'Restores microbiome diversity to reduce bloating, quiet evening junk food cravings, and encourage natural short-chain fatty acid (SCFA) production.',
      alt: 'Healthy balanced meal paired with daily LeanBiome probiotic capsule',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 5. Joint Genesis
  jointgenesis: [
    {
      id: 'jointgenesis_bottle_packaging',
      name: 'Joint Genesis - Doctor-Formulated Mobility Bottle & Induction Seal',
      url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
      caption: 'Joint Genesis doctor-formulated packaging featuring airtight safety sealing to preserve sensitive bio-hyaluronan polymers.',
      alt: 'Joint Genesis official supplement bottle for synovial fluid restoration',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'jointgenesis_mobilee_hyaluronan',
      name: 'Joint Genesis - Patented Mobilee Hyaluronan Matrix & French Pine Bark',
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      caption: 'Patented Mobilee matrix delivers 10 times the bio-absorption of standard hyaluronic acid, reinforced with antioxidant French Maritime Pine Bark.',
      alt: 'Botanical pine bark and Mobilee hyaluronan matrix in Joint Genesis',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'jointgenesis_cartilage_lubrication',
      name: 'Joint Genesis - Synovial Fluid Cushioning & Viscosity Analysis',
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      caption: 'Clinical research confirms replenishing hyaluronan in synovial fluid rehydrates degrading cartilage, restoring smooth bone-on-bone glide.',
      alt: 'Biochemical viscosity testing of joint fluid cushioning mechanisms',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'jointgenesis_purity_verification',
      name: 'Joint Genesis - Allergen-Free & Shellfish-Free Vegetarian Formulation',
      url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80',
      caption: 'Formulated without shellfish-derived glucosamine, making it safe for individuals with common marine allergies. 100% vegetarian capsule profile.',
      alt: 'Clean allergen-free Joint Genesis capsules ready for daily use',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'jointgenesis_active_mobility_routine',
      name: 'Joint Genesis - Pain-Free Senior Walking & Stair Climbing Freedom',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      caption: 'Reclaims morning flexibility, effortless knee bending, and pain-free brisk walking for mature adults aged 50, 60, and beyond.',
      alt: 'Active mature couple walking outdoors with rejuvenated joint flexibility',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 6. Sleep Slim Tea
  sleepslimtea: [
    {
      id: 'sleepslimtea_powder_packaging',
      name: 'Sleep Slim Tea - Vacuum-Sealed Organic Spiced Elixir Canister',
      url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
      caption: 'Airtight resealable canister locking in volatile essential oils from organic ginger, cardamom, and whole ground Ceylon cinnamon.',
      alt: 'Sleep Slim Tea official spiced powder container with measuring scoop',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'sleepslimtea_organic_spices',
      name: 'Sleep Slim Tea - Organic Magnolia Bark, KSM-66 Ashwagandha & Turmeric',
      url: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
      caption: 'USDA-certified organic botanicals containing honokiol and withanolides that downregulate nighttime adrenocorticotropic hormone (cortisol).',
      alt: 'Fresh organic spices and adaptogenic roots in Sleep Slim Tea formula',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'sleepslimtea_laboratory_batch_audit',
      name: 'Sleep Slim Tea - Organic Identity Verification & Melatonin-Free Assay',
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      caption: 'Certified 100% melatonin-free and non-habit-forming. Stimulates endogenous GABA receptors naturally without morning grogginess.',
      alt: 'Certified testing confirming organic identity and zero artificial sedatives',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'sleepslimtea_nightly_brewing',
      name: 'Sleep Slim Tea - Warm Nightly Aromatic Elixir Preparation',
      url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      caption: 'Stirred into 6-8 oz of hot water or almond milk 30 minutes before bed; releases a soothing aroma that triggers sensory parasympathetic relaxation.',
      alt: 'Warm steaming mug of Sleep Slim Tea prepared before bedtime',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'sleepslimtea_bedtime_relaxation',
      name: 'Sleep Slim Tea - Delta-Wave Restorative Sleep & Fat-Burning Recovery',
      url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
      caption: 'Induces uninterrupted Stage 3 and Stage 4 deep sleep where natural human growth hormone (HGH) repairs tissues and optimizes overnight lipid metabolism.',
      alt: 'Peaceful restorative deep sleep supported by Sleep Slim Tea ritual',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 7. ProNervium
  pronervium: [
    {
      id: 'pronervium_bottle_packaging',
      name: 'ProNervium - Neurological Vitality Bottle with UV-Block Shield',
      url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
      caption: 'Clinical amber shield container protecting bioactive lipophilic B vitamins and Alpha Lipoic Acid from environmental oxidation.',
      alt: 'ProNervium official bottle for peripheral nerve health and cellular longevity',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'pronervium_nerve_botanicals',
      name: 'ProNervium - Lipid-Soluble Benfotiamine & R-Alpha Lipoic Acid Matrix',
      url: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80',
      caption: 'Delivers Benfotiamine (360% more absorbable than regular thiamine) plus natural R-ALA to neutralize advanced glycation end-products (AGEs) in nerve sheaths.',
      alt: 'Clinical nerve nourishment botanicals and antioxidant cofactors',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'pronervium_clinical_inspection',
      name: 'ProNervium - Microvascular Endothelial & Nerve Sheath Lab Assay',
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      caption: 'Laboratory validation of microvascular nitric oxide boosting potential to nourish tiny capillaries feeding peripheral nerve endings.',
      alt: 'Microscopic inspection of nerve sheath integrity and microcirculation',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'pronervium_cellular_absorption',
      name: 'ProNervium - High-Potency Enteric Coated Fast-Acting Capsules',
      url: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80',
      caption: 'Clean, vegetarian formulation free from artificial dyes, titanium dioxide, or talc fillers for optimal cellular assimilation.',
      alt: 'ProNervium capsules showing high bioavailability and pure powder fill',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'pronervium_daily_longevity_habit',
      name: 'ProNervium - Daily Foot & Finger Sensory Comfort and Stability',
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      caption: 'Quiets nighttime tingling, numbness, and burning sensations in the feet and extremities, restoring confident balance and restful sleep.',
      alt: 'Senior adult enjoying confident foot stability and pain-free mobility',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 8. Cortexi
  cortexi: [
    {
      id: 'cortexi_bottle_packaging',
      name: 'Cortexi - Calibrated Sublingual Ear Health Dropper Bottle',
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      caption: 'Cortexi sublingual bottle packaging engineered with a precision glass pipette for easy morning administration under the tongue.',
      alt: 'Cortexi official sublingual dropper bottle for hearing and mental focus',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'cortexi_bioactive_herbs',
      name: 'Cortexi - Grape Seed, Green Tea, Gymnema & Maca Root Synergy',
      url: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
      caption: 'Contains 20+ bioactive herbal cofactors chosen to support microvascular circulation to delicate inner ear hair cells.',
      alt: 'Herbal ingredients in Cortexi supporting auditory nerve health',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'cortexi_lab_testing',
      name: 'Cortexi - Cochlear Microcirculation & Hair Cell Lab Assay',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Audited in certified facilities to confirm zero heavy metals, zero synthetic stimulants, and 100% pure botanical integrity.',
      alt: 'Laboratory spectrophotometry verifying active polyphenols in Cortexi',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'cortexi_sublingual_intake',
      name: 'Cortexi - Sublingual Liquid Absorption Delivering Fast Bioavailability',
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      caption: 'Liquid sublingual drops dissolve rapidly without requiring digestive breakdown, delivering immediate antioxidant defense.',
      alt: 'Sublingual dropper administration for optimal hearing nutrient delivery',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'cortexi_auditory_clarity_lifestyle',
      name: 'Cortexi - Crisp Auditory Clarity & Sharp Conversation Enjoyment',
      url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
      caption: 'Helps mature adults enjoy sharp, clear conversations in noisy restaurants without auditory strain or mental fatigue.',
      alt: 'Adult enjoying clear hearing and lively conversation with friends',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 9. The Mediterranean Diet Plan
  'mediterranean-diet': [
    {
      id: 'mediterraneandiet_handbook_packaging',
      name: 'The Mediterranean Diet - 30-Day Protocol Guide & Recipe Plan',
      url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      caption: 'Comprehensive culinary guide featuring weekly shopping manifests, macro breakdowns, and rapid 20-minute evidence-based meals.',
      alt: 'The Mediterranean Diet 30-Day Protocol handbook and meal calendar',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'mediterraneandiet_polyphenol_ingredients',
      name: 'The Mediterranean Diet - Cold-Pressed Olive Oil, Omega-3s & Fresh Produce',
      url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
      caption: 'Abundant in hydroxytyrosol from extra virgin olive oil, wild fatty fish omega-3s, and prebiotic fiber for natural cardiovascular protection.',
      alt: 'Mediterranean fresh olive oil, tomatoes, greens, and heart-healthy fish',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'mediterraneandiet_cardio_validation',
      name: 'The Mediterranean Diet - PREDIMED Clinical Study Nutrient Profiling',
      url: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80',
      caption: 'Grounded in decades of clinical trials (including PREDIMED) demonstrating marked reductions in oxidized LDL and insulin resistance.',
      alt: 'Nutritional biochemistry analysis of the Mediterranean dietary pattern',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'mediterraneandiet_meal_prep_portions',
      name: 'The Mediterranean Diet - Delicious Anti-Inflammatory Meal Prep',
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      caption: 'Zero starvation, zero extreme carbohydrate cutting; delicious nutrient-dense meals that naturally keep satiety hormones balanced.',
      alt: 'Prepared Mediterranean bowl with quinoa, roasted greens, and wild salmon',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'mediterraneandiet_family_lifestyle',
      name: 'The Mediterranean Diet - Lifelong Cardiovascular Longevity & Vitality',
      url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
      caption: 'Sustainable cultural nutrition habit that promotes vibrant physical energy, stable vascular blood pressure, and long-term healthspan.',
      alt: 'Family enjoying wholesome Mediterranean dinner together outdoors',
      categoryTag: 'Daily Lifestyle'
    }
  ]
};

// Helper to get exactly 5 photos for any offer id or fallback
export function getOfferPhotos(offerId?: string | { id?: string } | any): OfferPhotoItem[] {
  if (!offerId) return OFFER_PHOTO_GALLERIES.gluco6;

  const rawId = typeof offerId === 'object' && offerId !== null
    ? (offerId.id || '')
    : String(offerId);

  const clean = rawId.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (clean.includes('gluco6') || clean.includes('gluco')) return OFFER_PHOTO_GALLERIES.gluco6;
  if (clean.includes('puravive') || clean.includes('pura')) return OFFER_PHOTO_GALLERIES.puravive;
  if (clean.includes('sugardefender') || clean.includes('defender')) return OFFER_PHOTO_GALLERIES.sugardefender;
  if (clean.includes('leanbiome') || clean.includes('lean')) return OFFER_PHOTO_GALLERIES.leanbiome;
  if (clean.includes('jointgenesis') || clean.includes('joint')) return OFFER_PHOTO_GALLERIES.jointgenesis;
  if (clean.includes('sleepslim') || clean.includes('sleep')) return OFFER_PHOTO_GALLERIES.sleepslimtea;
  if (clean.includes('pronerv') || clean.includes('nerve')) return OFFER_PHOTO_GALLERIES.pronervium;
  if (clean.includes('cortexi')) return OFFER_PHOTO_GALLERIES.cortexi;
  if (clean.includes('mediterranean')) return OFFER_PHOTO_GALLERIES['mediterranean-diet'];

  return OFFER_PHOTO_GALLERIES.gluco6;
}
