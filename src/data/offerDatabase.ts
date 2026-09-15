import { ClickBankOfferDetail } from '../types';

/**
 * Structured ClickBank Offer Database for VitalPath Daily
 * 
 * Strict Editorial Rule:
 * Use an offer ONLY when the article is genuinely relevant to its core topics.
 * NEVER force an affiliate product into an unrelated article.
 */

export const CLICKBANK_OFFER_DATABASE: Record<string, ClickBankOfferDetail> = {
  instasoothe: {
    id: 'instasoothe',
    name: 'Insta Soothe',
    affiliateLink: 'https://9e0faj-jlewmbm73tmy02hrmlm.hop.clickbank.net',
    primaryTopics: [
      'Knee pain',
      'Joint pain',
      'Mobility',
      'Stiff joints',
      'Healthy aging',
      'Walking discomfort',
      'Active lifestyle',
      'Cartilage support',
      'Flexibility',
      'Morning joint stiffness'
    ],
    targetDemographics: 'USA Men & Women Age 40+ managing joint stiffness, knee discomfort, or seeking active mobility',
    negativeFilters: [
      'brain',
      'memory',
      'blood sugar',
      'diabetes',
      'women only pelvic',
      'bladder'
    ],
    naturalCtaTransitions: [
      'One option worth exploring for daily knee comfort and smooth mobility is',
      'For readers looking for targeted joint ease during morning walks, you can',
      'To explore how this botanical mobility approach works, see',
      'Learn more about this natural joint comfort option here:'
    ],
    keyBenefits: [
      'Supports healthy synovial joint fluid and cartilage nourishment',
      'Designed to ease morning knee stiffness and walking discomfort',
      'Free from harsh pharmaceutical compounds or digestive distress',
      'Formulated in an FDA-registered, cGMP-certified facility in the USA'
    ],
    editorialSummary: 'An evidence-informed botanical blend formulated specifically for mature adults seeking to maintain active, comfortable knees and flexible joints without high-impact stress.'
  },

  femicore: {
    id: 'femicore',
    name: 'FemiCore',
    affiliateLink: 'https://8f04fh0dqd5q2oaw32og3jr55j.hop.clickbank.net',
    additionalPages: [
      'https://getfemicore.com/video_new2head.php?vtid=new2head',
      'https://getfemicore.com/text.php?hop=0&hopId=f04b7e8b-56a4-4575-81eb-eb52ef66dc75'
    ],
    primaryTopics: [
      "Women's wellness",
      'Women 40+',
      "Women's health",
      'Healthy aging',
      'Bladder/pelvic wellness when relevant',
      'Pelvic muscle tone',
      'Urinary tract comfort',
      'Midlife hormonal transitions',
      'Perimenopause wellness'
    ],
    targetDemographics: 'USA Women Age 40+ navigating midlife hormonal shifts, pelvic floor vitality, and bladder confidence',
    negativeFilters: [
      'men only',
      'prostate',
      'knee stiffness',
      'blood sugar glucose'
    ],
    naturalCtaTransitions: [
      "For women seeking focused nutritional support for pelvic and bladder confidence, one option worth exploring is",
      "To see how this specialized women's wellness protocol works, explore",
      "Learn more about this natural pelvic muscle support option here:",
      "Explore the product details and research behind this formula:"
    ],
    keyBenefits: [
      'Targeted plant bioflavonoids supporting healthy pelvic floor tissue elasticity',
      'Assists normal bladder muscle tone and nighttime urinary comfort',
      'Formulated without synthetic hormones or harsh stimulants',
      'Made in the USA adhering to strict cGMP pharmaceutical standards'
    ],
    editorialSummary: 'A specialized botanical formulation developed for women over 40 to promote pelvic floor strength, bladder control confidence, and overall feminine vitality.'
  },

  thebrainsong: {
    id: 'thebrainsong',
    name: 'The Brain Song',
    affiliateLink: 'https://7b4f29vgoj5r8x1mljsez6u25r.hop.clickbank.net',
    primaryTopics: [
      'Focus',
      'Memory',
      'Brain wellness',
      'Mental performance',
      'Healthy aging',
      'Concentration',
      'Cognitive stamina',
      'Sound frequency therapy',
      'Neuro-acoustic wellness'
    ],
    targetDemographics: 'USA Adults 40+ experiencing mental fatigue, brain fog, or seeking non-pill cognitive focus',
    negativeFilters: [
      'knee',
      'joint pain',
      'pelvic',
      'bladder',
      'weight loss'
    ],
    naturalCtaTransitions: [
      'For readers interested in non-invasive neuro-acoustic techniques to support mental clarity, see how this approach works:',
      'One unique sensory option worth exploring for daily focus and concentration is',
      'Explore the science and audio protocol behind The Brain Song:',
      'Learn more about this innovative brain wellness method here:'
    ],
    keyBenefits: [
      'Engages natural auditory brainwave entrainment (Alpha & Theta frequencies)',
      '100% non-invasive with zero supplements, caffeine, or pills required',
      'Designed for busy mature adults seeking 10 minutes of daily mental focus',
      'Instant digital access compatible with any headphones or mobile device'
    ],
    editorialSummary: 'A specialized audio-frequency protocol designed to stimulate focused brainwave patterns, encouraging concentration, mental recall, and daytime cognitive calm.'
  },

  neurovera: {
    id: 'neurovera',
    name: 'NeuroVera',
    affiliateLink: 'https://cc398mqohixn5q7hgptc5cs21a.hop.clickbank.net',
    primaryTopics: [
      'Memory',
      'Brain wellness',
      'Cognitive wellness',
      'Focus',
      'Healthy aging',
      'Neuron protection',
      'Mental clarity',
      'Word recall',
      'Antioxidant brain support'
    ],
    targetDemographics: 'USA Adults Age 45+ proactively maintaining sharp memory recall, neuronal health, and sustained mental energy',
    negativeFilters: [
      'knee',
      'joint pain',
      'pelvic',
      'bladder'
    ],
    naturalCtaTransitions: [
      'One botanical option worth exploring for proactive memory recall and neuronal nourishment is',
      'To see the clinical research and botanical breakdown behind this cognitive formula, explore',
      'Learn more about this cognitive wellness option here:',
      'See how this clean botanical blend supports mature brain vitality:'
    ],
    keyBenefits: [
      'Supplies clinically investigated neuro-nutrients and cellular antioxidants',
      'Supports synaptic plasticity, acetylcholine synthesis, and neurotransmitter balance',
      'Zero synthetic caffeine spikes, jitter-free sustained mental alertness',
      'Manufactured in the USA in an FDA-registered, cGMP-certified facility'
    ],
    editorialSummary: 'A multi-action nootropic and neuro-protective botanical complex developed to support sharp memory recall, mental clarity, and cellular brain health in mature adults.'
  },

  gluco6: {
    id: 'gluco6',
    name: 'Gluco6',
    affiliateLink: 'https://f6c1aiwhec3p5s99srqhmlbt2j.hop.clickbank.net',
    primaryTopics: [
      'Healthy blood sugar',
      'Glucose metabolism',
      'Insulin sensitivity',
      'Carbohydrate digestion',
      'GLUT-4 receptor',
      'Afternoon energy crashes',
      'Sugar cravings'
    ],
    targetDemographics: 'USA Adults Age 40+ seeking natural botanical support for normal blood sugar balance',
    negativeFilters: ['knee', 'pelvic', 'audio'],
    naturalCtaTransitions: [
      'One evidence-informed option worth exploring for healthy daytime glycemic balance is',
      'To see how this 6-ingredient glucose management blend works, explore',
      'Learn more about this blood sugar support option here:'
    ],
    keyBenefits: [
      'Features Sukre (L-arabinose) to moderate dietary sugar absorption',
      'Contains pure TeaCrine for sustained, jitter-free daily alertness',
      'Manufactured in an FDA-inspected, cGMP facility in the USA'
    ],
    editorialSummary: 'A 6-ingredient glucose support supplement targeting cellular GLUT-4 gateways and sucrase enzyme moderation.'
  },

  sugardefender: {
    id: 'sugardefender',
    name: 'Sugar Defender',
    affiliateLink: 'https://14544g0kldyq8qekw4hkg2qlej.hop.clickbank.net',
    primaryTopics: [
      'Healthy blood sugar',
      'Liquid sublingual absorption',
      'Energy balance',
      'Eleuthero adaptogen',
      'Gymnema sylvestre'
    ],
    targetDemographics: 'USA Adults Age 40+ preferring a liquid sublingual dropper for glycemic support',
    negativeFilters: ['knee', 'pelvic', 'audio'],
    naturalCtaTransitions: [
      'For readers interested in liquid sublingual glycemic support, one option worth exploring is',
      'Explore how this liquid adaptogenic blood sugar formula works:'
    ],
    keyBenefits: [
      'Sublingual liquid dropper format for rapid bioavailability',
      'Combines 8 herbal adaptogens with chromium and African mango',
      '60-day full manufacturer money-back guarantee'
    ],
    editorialSummary: 'A liquid botanical blend combining adaptogenic herbs with chromium for comprehensive daily blood sugar and energy support.'
  },

  puravive: {
    id: 'puravive',
    name: 'Puravive',
    affiliateLink: 'https://841c47zls8wz3l7-f756i91cj0.hop.clickbank.net',
    primaryTopics: [
      'Weight management',
      'Metabolic rate',
      'Brown adipose tissue',
      'BAT activation',
      'Healthy aging weight'
    ],
    targetDemographics: 'USA Adults 40+ looking for stimulant-free metabolic support through brown fat activation',
    negativeFilters: ['knee', 'pelvic', 'audio', 'memory'],
    naturalCtaTransitions: [
      'One non-stimulant option worth exploring for brown adipose tissue support is',
      'See how this tropical botanical metabolic approach works:'
    ],
    keyBenefits: [
      'Stimulant-free formula featuring 8 tropical plant bioflavonoids',
      'Supports cellular thermogenesis and mitochondrial health',
      '180-day manufacturer money-back guarantee'
    ],
    editorialSummary: 'A plant-based metabolic supplement targeting healthy Brown Adipose Tissue (BAT) activity and non-shivering thermogenesis.'
  },
  pronervium: {
    id: 'pronervium',
    name: 'ProNervium',
    affiliateLink: 'https://6628b9ykgauw6pf7oi-15lums8.hop.clickbank.net',
    primaryTopics: [
      'Nerve support',
      'Peripheral nerve vitality',
      'Tingling and numbness comfort',
      'Cellular longevity',
      'Microcirculation',
      'Healthy aging'
    ],
    targetDemographics: 'Adults 45+ experiencing peripheral nerve discomfort, foot/hand tingling, or seeking cellular longevity support',
    negativeFilters: ['weight loss', 'pelvic', 'audio'],
    naturalCtaTransitions: [
      'One evidence-guided nutritional protocol designed to nourish peripheral nerve sheaths is',
      'To view the clinical breakdown and verified cGMP manufacturing details for this nerve longevity formula, see',
      'Learn more about this natural peripheral nerve comfort protocol here:'
    ],
    keyBenefits: [
      'Delivers lipid-soluble benfotiamine and neuro-antioxidants directly to nerve sheaths',
      'Supports peripheral microvascular circulation and sensation in extremities',
      'Manufactured in an FDA-registered, cGMP-certified USA facility',
      'Full 180-day 100% money-back satisfaction guarantee'
    ],
    editorialSummary: 'A clinical-grade cellular longevity formula engineered to soothe tingling nerves, support microcirculation, and nourish peripheral nerve endings.'
  },
  mediterraneandiet: {
    id: 'mediterraneandiet',
    name: 'The Mediterranean Diet Plan',
    affiliateLink: 'https://8ab5dm3jkl-udt09r7mltqso56.hop.clickbank.net',
    primaryTopics: [
      'Mediterranean diet',
      'Meal plan',
      'Nutrition',
      'Healthy eating',
      'Whole foods',
      'Weight loss',
      'Metabolic wellness'
    ],
    targetDemographics: 'Adults looking for a structured, evidence-based whole-food meal plan and 30-day dietary challenge',
    negativeFilters: ['supplements only', 'pills only'],
    naturalCtaTransitions: [
      'If you are seeking a structured, science-backed 30-day whole-food roadmap, see',
      'To explore the official Mediterranean meal blueprint and 30-day challenge, visit',
      'Learn more about the official Mediterranean Diet Plan protocol here:'
    ],
    keyBenefits: [
      'Structured 30-day whole-food challenge with daily meal blueprints',
      'Extensively backed by clinical nutrition studies on cardiovascular & metabolic health',
      'Comprehensive recipes, grocery guides, and portion optimization strategies',
      'Full 60-day 100% money-back satisfaction guarantee'
    ],
    editorialSummary: 'An evidence-based 30-day nutrition and recipe challenge designed to promote metabolic health, steady energy, and long-term vitality through whole Mediterranean foods.'
  },
  leanbiome: {
    id: 'leanbiome',
    name: 'LeanBiome',
    affiliateLink: 'https://62a9dauitg3vcv05j9szofpcef.hop.clickbank.net',
    primaryTopics: [
      'Gut microbiome',
      'Digestive health',
      'Bloating and gut flora',
      'Probiotics',
      'Metabolic rate',
      'Weight management',
      'DRcaps'
    ],
    targetDemographics: 'Individuals struggling with stubborn weight, digestive bloat, or slow metabolism tied to gut flora imbalance',
    negativeFilters: ['audio', 'nerve only'],
    naturalCtaTransitions: [
      'One clinically formulated probiotic protocol engineered with acid-resistant DRcaps for gut flora repopulation is',
      'To view the published research behind the 9 "lean bacteria" probiotic strains, see',
      'Learn more about the official LeanBiome gut-metabolic protocol here:'
    ],
    keyBenefits: [
      'Delivers 9 clinically researched probiotic strains including Lactobacillus Gasseri & Rhamnosus',
      'State-of-the-art DRcaps encapsulation protects delicate live cultures from stomach acid',
      'Combines probiotic flora with caffeine-free Greenselect Phytosome green tea extract',
      'Backed by a full 180-day 100% money-back manufacturer guarantee'
    ],
    editorialSummary: 'A doctor-formulated probiotic supplement targeting gut flora diversity with acid-resistant delayed-release capsules to support digestion, satiety, and healthy metabolic function.'
  },
  sleepslimtea: {
    id: 'sleepslimtea',
    name: 'Sleep Slim Tea',
    affiliateLink: 'https://16a37hzfrh2t4n3l-9ocu-739v.hop.clickbank.net',
    primaryTopics: [
      'Restorative sleep',
      'Delta wave sleep',
      'Nocturnal cortisol reset',
      'Stress and insomnia',
      'Herbal night tea',
      'Ashwagandha and magnolia bark',
      'Deep sleep protocol'
    ],
    targetDemographics: 'Adults aged 40+ dealing with broken sleep cycles, 3 AM stress wakeups, or morning exhaustion',
    negativeFilters: ['stimulants', 'caffeine', 'pills only'],
    naturalCtaTransitions: [
      'To discover how this calming nightly herbal tea modulates cortisol and restores delta sleep, visit',
      'For readers interested in a delicious non-habit forming herbal sleep elixir, see',
      'Learn more about the official Sleep Slim Tea protocol and evening routine here:'
    ],
    keyBenefits: [
      'Promotes natural delta-wave restorative deep sleep without next-day grogginess',
      'Modulates nighttime cortisol surges that cause 3:00 AM awakenings and visceral fat storage',
      'Combines Magnolia Bark, Chamomile, Ashwagandha KSM-66, and L-Theanine',
      'Full 60-day 100% money-back satisfaction guarantee'
    ],
    editorialSummary: 'An extra-strength USDA-organic spiced herbal night tea formulated to quiet nocturnal cortisol, induce delta-wave rest, and foster daytime metabolic recovery without pharmaceutical sedatives.'
  },
  jointgenesis: {
    id: 'jointgenesis',
    name: 'Joint Genesis',
    affiliateLink: 'https://30650jplgj6o5t230d-ii0rqdi.hop.clickbank.net',
    primaryTopics: [
      'Joint health',
      'Synovial fluid',
      'Cartilage cushioning',
      'Knee stiffness',
      'Mobilee hyaluronan',
      'French maritime pine bark',
      'Joint mobility'
    ],
    targetDemographics: 'Adults aged 50+ experiencing joint stiffness, cartilage friction, or loss of synovial fluid lubrication',
    negativeFilters: ['audio', 'ear only'],
    naturalCtaTransitions: [
      'To learn more about the clinically studied Mobilee hyaluronan matrix for synovial fluid restoration, visit',
      'For readers seeking to rehydrate and cushion stiff joints, explore the official protocol here:',
      'Learn more about the official Joint Genesis formula and package discounts here:'
    ],
    keyBenefits: [
      'Patented Mobilee hyaluronan matrix is 10x more bioavailable than synthetic hyaluronic acid',
      'Rehydrates and thickens protective synovial fluid (joint jelly)',
      'Infused with French Maritime Pine Bark for joint tissue antioxidant support',
      'Industry-leading 180-day 100% money-back satisfaction guarantee'
    ],
    editorialSummary: 'A doctor-formulated joint nourishment supplement designed to replenish degrading synovial fluid and nourish articular cartilage for smooth, pain-free mobility in mature adults.'
  },
  cortexi: {
    id: 'cortexi',
    name: 'Cortexi',
    affiliateLink: 'https://42911k3po86p7lf0gmwfxdco39.hop.clickbank.net',
    primaryTopics: [
      'Auditory nerve health',
      'Hearing sensitivity',
      'Inner ear microcirculation',
      'Tinnitus and ear ringing',
      'Cognitive clarity',
      'Grape seed and green tea',
      'Sublingual liquid dropper'
    ],
    targetDemographics: 'Adults aged 45+ wanting to support auditory nerve vitality, ear circulation, and clear mental focus',
    negativeFilters: ['knee only', 'weight only'],
    naturalCtaTransitions: [
      'To explore how these botanical cofactors support inner ear microcirculation and auditory nerve health, visit',
      'For readers interested in sublingual botanical support for auditory vitality, see',
      'Learn more about the official Cortexi auditory formula here:'
    ],
    keyBenefits: [
      'Bioactive botanicals including Grape Seed, Green Tea, Panax Ginseng, and Maca Root',
      'Sublingual liquid dropper delivers rapid absorption without digestive breakdown',
      'Supports inner ear hair cell antioxidant defense and microvascular blood flow',
      'Full 60-day 100% money-back manufacturer guarantee'
    ],
    editorialSummary: 'An all-natural liquid formulation combining 20+ herbal cofactors designed to support microvascular circulation to the inner ear, nourish auditory nerve cells, and sharpen mental focus.'
  }
};

/**
 * Helper to retrieve offer details safely by ID or alias
 */
export function getOfferDetails(offerId?: string | { id?: string } | any): ClickBankOfferDetail | null {
  if (!offerId) return null;
  const rawId = typeof offerId === 'object' && offerId !== null
    ? (offerId.id || '')
    : String(offerId);

  if (!rawId || typeof rawId !== 'string') return null;
  const clean = rawId.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (CLICKBANK_OFFER_DATABASE[clean]) {
    return CLICKBANK_OFFER_DATABASE[clean];
  }

  // Alias lookup
  const aliases: Record<string, string> = {
    'insta-soothe': 'instasoothe',
    'instasoothe': 'instasoothe',
    'femicore': 'femicore',
    'the-brain-song': 'thebrainsong',
    'thebrainsong': 'thebrainsong',
    'brainsong': 'thebrainsong',
    'neuro-vera': 'neurovera',
    'neurovera': 'neurovera',
    'gluco6': 'gluco6',
    'sugar-defender': 'sugardefender',
    'sugardefender': 'sugardefender',
    'bloodsugar-defender': 'sugardefender',
    'bloodsugardefender': 'sugardefender',
    'sugardef': 'sugardefender',
    'puravive': 'puravive',
    'metabolism-puravive': 'puravive',
    'metabolismpuravive': 'puravive',
    'leanbiome': 'leanbiome',
    'gut-leanbiome': 'leanbiome',
    'gutleanbiome': 'leanbiome',
    'metabolism-leanbiome': 'leanbiome',
    'metabolismleanbiome': 'leanbiome',
    'pronervium': 'pronervium',
    'nerve-pronervium': 'pronervium',
    'nervepronervium': 'pronervium',
    'aging-cellular-boost': 'pronervium',
    'agingcellularboost': 'pronervium',
    'pronerve6': 'pronervium',
    'pronerve': 'pronervium',
    'mediterranean': 'mediterraneandiet',
    'mediterraneandiet': 'mediterraneandiet',
    'mediterraneanplan': 'mediterraneandiet',
    'medplan': 'mediterraneandiet',
    'meddiet': 'mediterraneandiet',
    'sleep-deep-rest': 'sleepslimtea',
    'sleepdeeprest': 'sleepslimtea',
    'sleep-slim-tea': 'sleepslimtea',
    'sleepslimtea': 'sleepslimtea',
    'sleep-slimtea': 'sleepslimtea',
    'sleepslim': 'sleepslimtea',
    'sleeptea': 'sleepslimtea',
    'joint-genesis': 'jointgenesis',
    'jointgenesis': 'jointgenesis',
    'joints-genesis': 'jointgenesis',
    'jointsgenesis': 'jointgenesis',
    'aging-jointgenesis': 'jointgenesis',
    'agingjointgenesis': 'jointgenesis',
    'cortexi': 'cortexi',
    'aging-cortexi': 'cortexi',
    'agingcortexi': 'cortexi'
  };

  const resolved = aliases[clean];
  if (resolved && CLICKBANK_OFFER_DATABASE[resolved]) {
    return CLICKBANK_OFFER_DATABASE[resolved];
  }

  for (const key of Object.keys(CLICKBANK_OFFER_DATABASE)) {
    if (clean.includes(key) || key.includes(clean)) {
      return CLICKBANK_OFFER_DATABASE[key];
    }
  }

  return null;
}
