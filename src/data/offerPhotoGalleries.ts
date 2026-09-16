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
  ],

  // 10. DUWZGU D3+K2 High Potency
  duwzgu: [
    {
      id: 'duwzgu_bottle_packaging',
      name: 'DUWZGU D3+K2 - High-Potency Bottle Packaging & UV Protective Container',
      url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
      caption: 'DUWZGU pharmaceutical-grade protective bottle shielding sensitive fat-soluble D3 and all-trans K2 molecules from photo-oxidation.',
      alt: 'DUWZGU D3+K2 high potency bottle packaging with safety seal',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'duwzgu_active_synergy',
      name: 'DUWZGU D3+K2 - Bioavailable Cholecalciferol & Menaquinone MK-7 Active Duo',
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      caption: 'Synergistic pairing of 5000 IU Vitamin D3 with 100 mcg Vitamin K2 (MK-7) to optimize skeletal bone density and arterial protection.',
      alt: 'DUWZGU active micronutrient synergy supporting bone and heart health',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'duwzgu_cgmp_lab_assay',
      name: 'DUWZGU D3+K2 - Third-Party Lab Assay & Microbial Purity Verification',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Every manufacturing batch undergoes comprehensive HPLC potency testing to ensure exact 5000 IU D3 and 100 mcg MK-7 label accuracy.',
      alt: 'Laboratory HPLC testing verifying purity of DUWZGU D3+K2 softgels',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'duwzgu_veggie_softgel',
      name: 'DUWZGU D3+K2 - 100% Plant-Based Veggie Softgels & Lipid Bioavailability',
      url: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80',
      caption: 'Plant-derived vegetarian softgel capsules with cold-pressed lipid carrier matrix ensuring rapid micellar absorption without animal gelatin.',
      alt: 'DUWZGU plant-based veggie softgels showcasing clean, gelatin-free composition',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'duwzgu_daily_routine',
      name: 'DUWZGU D3+K2 - Daily Morning Mealtime & Immune Vitality Protocol',
      url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      caption: 'Taken once daily with water alongside breakfast or lunch containing dietary fats to promote sustained year-round immune defense.',
      alt: 'Taking DUWZGU D3+K2 veggie softgel with morning meal',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 11. Eelhoe Vitamin C Moisturizing Spray
  eelhoe: [
    {
      id: 'eelhoe_bottle_packaging',
      name: 'Eelhoe Vitamin C Spray - Packaging & Precision Micro-Mist Nozzle',
      url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      caption: 'Eelhoe ergonomic mist dispenser with specialized ultra-fine atomization nozzle engineered to prevent heavy droplets.',
      alt: 'Eelhoe Vitamin C Moisturizing Spray bottle packaging',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'eelhoe_active_vitaminc',
      name: 'Eelhoe Vitamin C Spray - Stabilized Ascorbic Derivative & Botanical Matrix',
      url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      caption: 'Infused with stabilized Vitamin C, hyaluronic acid, and niacinamide to simultaneously brighten and hydrate.',
      alt: 'Antioxidant citrus botanicals and hyaluronic active essence in Eelhoe spray',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'eelhoe_micro_mist',
      name: 'Eelhoe Vitamin C Spray - Featherweight Micro-Atomized Facial Mist Dispersion',
      url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      caption: 'Disperses a cloud of featherlight moisture that absorbs instantly across epidermal pores without dripping or smudging makeup.',
      alt: 'Ultra-fine facial mist cloud dispersion test',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'eelhoe_lab_testing',
      name: 'Eelhoe Vitamin C Spray - Dermatological Safety & Non-Comedogenic Testing',
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      caption: 'Third-party patch-tested for safety across sensitive skin and confirmed non-comedogenic with zero pore-clogging mineral oils.',
      alt: 'Cosmetics testing and microbial evaluation of Eelhoe formula',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'eelhoe_daily_routine',
      name: 'Eelhoe Vitamin C Spray - Daily Radiance, Post-Acne Recovery & Makeup Setting',
      url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      caption: 'Used post-cleanse to prep the barrier, mid-day for an antioxidant boost, and as a makeup refreshing mist.',
      alt: 'Woman applying refreshing facial mist spray for healthy glowing skin',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 12. Pre-Workout Caffeine Exercise Supplement
  'preworkout-caffeine': [
    {
      id: 'caffeine_bottle_packaging',
      name: 'Pre-Workout Caffeine Supplement - Bottle Packaging & Nutrition Facts',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      caption: 'Secure seal container with transparent dosage facts, batch lot verification, and safety tamper-evident closure.',
      alt: 'Pre-Workout Caffeine Exercise Supplement container packaging',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'caffeine_active_powder',
      name: 'Pre-Workout Caffeine - Anhydrous Caffeine & Ergogenic Matrix',
      url: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80',
      caption: 'High-purity anhydrous caffeine paired with L-theanine and B-vitamins for clean cellular energy and rapid uptake.',
      alt: 'Micro-crystallized active pre-workout compounds and amino acid co-factors',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'caffeine_shaker_mix',
      name: 'Pre-Workout Caffeine - Rapid Dissolution & Shaker Mixability Test',
      url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      caption: 'Rapidly dissolves in 8–10 oz of cold water within 15 seconds with zero residual clumping or gritty settling.',
      alt: 'Mixing pre-workout exercise drink in shaker cup',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'caffeine_lab_assay',
      name: 'Pre-Workout Caffeine - cGMP Heavy Metal & Stimulant Potency Testing',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Independently audited via High-Performance Liquid Chromatography (HPLC) confirming exact milligram potency and zero banned adulterants.',
      alt: 'Laboratory HPLC assay verifying caffeine supplement purity',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'caffeine_training_action',
      name: 'Pre-Workout Caffeine - High-Intensity Resistance Training & Peak Output',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      caption: 'Consumed 20–30 minutes pre-training to optimize muscular endurance, neuromuscular focus, and training capacity.',
      alt: 'Athlete training in the gym with high energy and focus',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 13. DUWZGU Creatine Monohydrate Pure Power
  'duwzgu-creatine': [
    {
      id: 'creatine_tub_packaging',
      name: 'DUWZGU Creatine Monohydrate - 360g Tub & 72 Serving Facts',
      url: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80',
      caption: '360g heavy-duty container with tamper-evident seal, calibrated 5000mg scoop, and clear 72-serving batch facts.',
      alt: 'DUWZGU Creatine Monohydrate 360g tub packaging and scoop',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'creatine_micronized_powder',
      name: 'DUWZGU Creatine - 200-Mesh Micro-Milled Pharmaceutical Powder',
      url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      caption: 'Ultra-fine 200-mesh micronization yielding a silky powder texture that prevents stomach cramping and clumping.',
      alt: 'Microscopic inspection of ultra-fine micronized creatine monohydrate powder',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'creatine_dissolution_test',
      name: 'DUWZGU Creatine - Rapid Clear Dissolution & Mixability Test',
      url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      caption: 'Dissolves completely in 8–10 oz of cold water within 15 seconds with zero gritty sediment left at the bottom of the glass.',
      alt: 'Creatine powder dissolving cleanly into clear glass of water',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'creatine_purity_lab',
      name: 'DUWZGU Creatine - HPLC Purity & Zero Heavy Metals Assay',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Independently tested via HPLC spectrophotometry confirming 99.9% pure creatine monohydrate with undetectable creatinine, dicyandiamide, and heavy metals.',
      alt: 'Laboratory HPLC testing verifying 99.9% creatine monohydrate purity',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'creatine_training_lifestyle',
      name: 'DUWZGU Creatine - Heavy Compound Resistance Training & Power Output',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      caption: 'Daily 5g supplementation sustains full myocellular phosphocreatine saturation for maximal barbell strength and intra-set recovery.',
      alt: 'Strength athlete performing heavy barbell lift in the gym',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 14. DUWZGU Immune Support Gummies (Elderberry, Zinc, Vit C, Vit D3)
  'duwzgu-immune-gummies': [
    {
      id: 'gummies_bottle_packaging',
      name: 'DUWZGU Immune Support Gummies - 60 Count Child-Resistant Bottle',
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      caption: '60-count protective bottle with child-resistant safety cap, tamper-evident neck band, and full supplement facts panel.',
      alt: 'DUWZGU Immune Support Gummies bottle packaging with supplement facts',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'gummies_chewable_texture',
      name: 'DUWZGU Gummies - Plant-Based Pectin Soft Chew Texture',
      url: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80',
      caption: 'Formulated with tender citrus pectin instead of animal gelatin, providing a soft, non-sticky chew with natural dark berry flavor.',
      alt: 'Macro view of soft berry chewable pectin immune gummies',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'gummies_elderberry_botanical',
      name: 'DUWZGU Gummies - Standardized Black Elderberry (Sambucus) Anthocyanins',
      url: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80',
      caption: 'Derived from whole Sambucus elderberries packed with antioxidant flavonoids and protective polyphenol bio-actives.',
      alt: 'Wild dark elderberries and natural botanical antioxidant ingredients',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'gummies_lab_assay',
      name: 'DUWZGU Gummies - cGMP Vitamin & Mineral Potency Verification',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'Analytical spectrometry verifies label claims of active Zinc, Ascorbic Acid, and Vitamin D3 with zero heavy metals or microbial contaminants.',
      alt: 'Laboratory assay confirming potency of Zinc, Vitamin C, and Elderberry',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'gummies_daily_lifestyle',
      name: 'DUWZGU Gummies - Convenient Daily Morning Wellness Routine',
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      caption: 'Taking 2 chewable gummies each morning delivers comprehensive 4-in-1 cellular protection for energetic, healthy living.',
      alt: 'Person starting morning wellness routine with healthy habits',
      categoryTag: 'Daily Lifestyle'
    }
  ],

  // 15. DUWZGU Sleep Support Gummies (Melatonin, L-Theanine, Chamomile, Rose)
  'duwzgu-sleep-gummies': [
    {
      id: 'sleep_bottle_packaging',
      name: 'DUWZGU Sleep Support Gummies - 60 Count Tamper-Sealed Bottle',
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      caption: '60-count child-resistant amber bottle with safety seal, full nocturnal ingredient panel, and cGMP certification batch stamp.',
      alt: 'DUWZGU Sleep Support Gummies bottle with supplement facts',
      categoryTag: 'Bottle & Packaging'
    },
    {
      id: 'sleep_gummies_texture',
      name: 'DUWZGU Sleep Gummies - Tender Plant Pectin Texture & Berry Scent',
      url: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80',
      caption: 'Formulated with plant-derived pectin for a clean, non-sticky chew that releases calming aromatic botanical terpenes.',
      alt: 'Soft chewable nocturnal botanical gummies close-up',
      categoryTag: 'Capsule Breakdown'
    },
    {
      id: 'sleep_botanicals_chamomile_rose',
      name: 'DUWZGU Sleep Gummies - Chamomile & Rose Calming Extracts',
      url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
      caption: 'Purified botanical extracts rich in apigenin bind to soothing GABA-A neuroreceptors to quiet nighttime stress and mental racing.',
      alt: 'Fresh soothing chamomile blossoms and gentle rose petals',
      categoryTag: 'Active Botanicals'
    },
    {
      id: 'sleep_lab_assay',
      name: 'DUWZGU Sleep Gummies - HPLC Melatonin & L-Theanine Purity Assay',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      caption: 'High-performance liquid chromatography testing validates exact 5mg Melatonin and 4mg L-Theanine potency per 2-gummy serving.',
      alt: 'Laboratory chromatography testing verifying melatonin purity',
      categoryTag: 'Lab Inspection'
    },
    {
      id: 'sleep_restful_lifestyle',
      name: 'DUWZGU Sleep Gummies - Restorative REM & Deep Sleep Slumber',
      url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
      caption: 'Encourages consistent circadian synchronization, resulting in effortless sleep onset and refreshed, non-groggy morning waking.',
      alt: 'Peaceful bedroom environment with soft lighting and comfortable bed',
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

  if (clean.includes('sleep') && (clean.includes('gumm') || clean.includes('melatonin'))) return OFFER_PHOTO_GALLERIES['duwzgu-sleep-gummies'];
  if (clean.includes('melatonin')) return OFFER_PHOTO_GALLERIES['duwzgu-sleep-gummies'];
  if (clean.includes('gumm') || clean.includes('elderberry') || clean.includes('sambucus')) return OFFER_PHOTO_GALLERIES['duwzgu-immune-gummies'];
  if (clean.includes('creatine')) return OFFER_PHOTO_GALLERIES['duwzgu-creatine'];
  if (clean.includes('caffeine') || clean.includes('preworkout') || clean.includes('exercise')) return OFFER_PHOTO_GALLERIES['preworkout-caffeine'];
  if (clean.includes('eelhoe') || clean.includes('spray') || clean.includes('mist')) return OFFER_PHOTO_GALLERIES.eelhoe;
  if (clean.includes('duwzgu') || clean.includes('d3k2') || clean.includes('d3') || clean.includes('k2')) return OFFER_PHOTO_GALLERIES.duwzgu;
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
