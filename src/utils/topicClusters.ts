import { Article } from '../types';

export interface TopicCluster {
  id: string;
  name: string;
  badgeName: string;
  description: string;
  color: string;
  primaryCategory: string;
}

export interface RelatedGuideWithSynergy {
  article: Article;
  synergyNote: string;
  clusterName: string;
}

export const TOPIC_CLUSTERS: Record<string, TopicCluster> = {
  'stress-cortisol-circadian': {
    id: 'stress-cortisol-circadian',
    name: 'Stress, Cortisol & Circadian Optimization',
    badgeName: 'HPA Axis & Circadian Cluster',
    description: 'Evidence-based protocols targeting adrenal regulation, evening parasympathetic tone, and restorative sleep architecture.',
    color: 'indigo',
    primaryCategory: 'Sleep & Stress',
  },
  'glycemic-metabolic-health': {
    id: 'glycemic-metabolic-health',
    name: 'Glycemic Control & Metabolic Health',
    badgeName: 'Glucose & Insulin Cluster',
    description: 'Clinical protocols blunting postprandial glucose spikes, activating GLUT-4 receptors, and maintaining steady cellular energy.',
    color: 'rose',
    primaryCategory: 'Healthy Blood Sugar',
  },
  'cellular-longevity-aging': {
    id: 'cellular-longevity-aging',
    name: 'Cellular Longevity & Anti-Inflammatory Aging',
    badgeName: 'Longevity & Joint Cluster',
    description: 'Nutritional blueprints and micronutrient cofactors targeting chronic low-grade inflammation, bone density, and telomere integrity.',
    color: 'emerald',
    primaryCategory: 'Healthy Aging',
  },
  'performance-mitochondrial-nutrition': {
    id: 'performance-mitochondrial-nutrition',
    name: 'Performance, Brain Health & Mitochondrial Energy',
    badgeName: 'Mitochondrial Energy Cluster',
    description: 'Clinically tested ergogenic aids and neuro-nutrients supporting ATP synthesis, cognitive speed, and cardiovascular longevity.',
    color: 'cyan',
    primaryCategory: 'Nutrition',
  },
  'metabolic-reset-weight': {
    id: 'metabolic-reset-weight',
    name: 'Metabolic Flexibility & Healthy Body Composition',
    badgeName: 'Metabolic Reset Cluster',
    description: 'Science-backed strategies for metabolic rate adaptation, hydration homeostasis, and sustainable weight management after 40.',
    color: 'amber',
    primaryCategory: 'Weight Management',
  },
  'clinical-reviews-formulations': {
    id: 'clinical-reviews-formulations',
    name: 'Independent Supplement Audits & Clinical Testing',
    badgeName: 'Laboratory Audit Cluster',
    description: 'Rigorous ingredient analyses, dosage verifications, cGMP compliance, and clinical research evaluations for consumer formulas.',
    color: 'purple',
    primaryCategory: 'Product Reviews',
  },
};

// Curated mappings for optimal Topic Cluster authority and minimum bounce rate
// Explicitly prioritizes the highest-value clinical companions
export const CURATED_RELATED_GUIDES: Record<string, { slug: string; synergyNote: string; clusterId?: string }[]> = {
  // Cortisol Guide (Requested specifically: Magnesium, Ashwagandha, Morning Routine)
  'understanding-cortisol-stress-hormone': [
    {
      slug: 'magnesium-glycinate-benefits',
      synergyNote: 'Biochemical Counterbalance: GABA receptor activation & acute down-regulation of hyperactive HPA axis signaling.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'ashwagandha-stress-cortisol-management',
      synergyNote: 'Adaptogenic Adrenal Modulator: Standardized withanolides clinically proven to reduce circulating serum cortisol.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'best-morning-routine-sustained-energy',
      synergyNote: 'Circadian Timing: Calibrating the Cortisol Awakening Response (CAR) with early photic exposure for sustained energy.',
      clusterId: 'stress-cortisol-circadian',
    },
  ],

  // Magnesium Glycinate Guide
  'magnesium-glycinate-benefits': [
    {
      slug: 'understanding-cortisol-stress-hormone',
      synergyNote: 'HPA Axis Homeostasis: Why chronic cortisol elevation accelerates urinary magnesium excretion and muscular tension.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'ashwagandha-stress-cortisol-management',
      synergyNote: 'Synergistic Deep Sleep: Dual-pathway action targeting both central nervous system relaxation and adrenal recovery.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'circadian-rhythm-dawn-phenomenon-guide',
      synergyNote: 'Nocturnal Glycemia: Preventing night-time adrenaline surges and counterbalancing early morning glucose spikes.',
      clusterId: 'stress-cortisol-circadian',
    },
  ],

  // Ashwagandha Guide
  'ashwagandha-stress-cortisol-management': [
    {
      slug: 'understanding-cortisol-stress-hormone',
      synergyNote: 'Endocrine Foundation: Understanding how adrenal gland fatigue and chronified stress deplete neurotransmitter reserves.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'magnesium-glycinate-benefits',
      synergyNote: 'Cofactor Synergy: Combining withanolide cortisol modulation with chelated magnesium for neuromuscular release.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'l-theanine-and-caffeine-focus',
      synergyNote: 'Daytime Calm Focus: Inducing sustained alpha-wave brain activity without drowsiness or jitteriness.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
  ],

  // Morning Routine Guide
  'best-morning-routine-sustained-energy': [
    {
      slug: 'understanding-cortisol-stress-hormone',
      synergyNote: 'Cortisol Curve Alignment: Harnessing your natural 30-minute post-wake hormone peak for sustained mental clarity.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'post-meal-walk-glucose-protocol',
      synergyNote: 'Metabolic Priming: Insulin-independent GLUT-4 activation following your morning breakfast or hydration ritual.',
      clusterId: 'glycemic-metabolic-health',
    },
    {
      slug: 'hydration-electrolytes-metabolic-health-guide',
      synergyNote: 'Cellular Hydration: Restoring overnight plasma volume and electrolyte gradients to activate metabolic rate.',
      clusterId: 'metabolic-reset-weight',
    },
  ],

  // Post-Meal Walk Protocol
  'post-meal-walk-glucose-protocol': [
    {
      slug: 'food-sequencing-fiber-matrix-guide',
      synergyNote: 'Nutritional Preload: Establishing a soluble fiber gel matrix before walking to eliminate postprandial spikes.',
      clusterId: 'glycemic-metabolic-health',
    },
    {
      slug: 'circadian-rhythm-dawn-phenomenon-guide',
      synergyNote: 'Circadian Glycemia: How walking resets peripheral muscle clocks and balances morning hepatic glucose output.',
      clusterId: 'glycemic-metabolic-health',
    },
    {
      slug: 'hydration-electrolytes-metabolic-health-guide',
      synergyNote: 'Osmotic Transport: Optimal cellular hydration required for microvascular capillary perfusion during light walking.',
      clusterId: 'metabolic-reset-weight',
    },
  ],

  // Food Sequencing & Fiber Matrix Guide
  'food-sequencing-fiber-matrix-guide': [
    {
      slug: 'post-meal-walk-glucose-protocol',
      synergyNote: 'Physical Clearance: Pairing gastric-emptying delay with muscular contraction for complete glycemic protection.',
      clusterId: 'glycemic-metabolic-health',
    },
    {
      slug: 'what-is-healthy-blood-sugar',
      synergyNote: 'Clinical Biomarkers: Understanding how blunting daily glycemic excursions protects endothelial cell walls.',
      clusterId: 'glycemic-metabolic-health',
    },
    {
      slug: 'protein-fiber-and-healthy-fats-understanding-the-basics',
      synergyNote: 'Macronutrient Timing: The biochemical science of why amino acids and lipids stimulate GLP-1 and CCK secretion.',
      clusterId: 'glycemic-metabolic-health',
    },
  ],

  // Dawn Phenomenon & Circadian Guide
  'circadian-rhythm-dawn-phenomenon-guide': [
    {
      slug: 'understanding-cortisol-stress-hormone',
      synergyNote: 'Endocrine Trigger: How the nocturnal cortisol awakening surge and growth hormone induce transient morning insulin resistance.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'best-morning-routine-sustained-energy',
      synergyNote: 'Photobiological Reset: Using early outdoor sunlight to re-entrain master suprachiasmatic clocks.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'post-meal-walk-glucose-protocol',
      synergyNote: 'Immediate Glycemic Countermeasure: A brisk 10-minute walk to clear dawn liver glucose output without insulin.',
      clusterId: 'glycemic-metabolic-health',
    },
  ],

  // Mediterranean Longevity Blueprint
  'mediterranean-anti-inflammatory-longevity-blueprint': [
    {
      slug: 'turmeric-curcumin-joint-inflammation-support',
      synergyNote: 'Targeted Polyphenols: Complementing whole-food polyphenols with standardized bioavailable curcuminoids.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'omega-3-fish-oil-benefits',
      synergyNote: 'Lipid Membrane Synergy: Re-balancing the cellular omega-6 to omega-3 ratio for arterial elasticity and brain longevity.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
    {
      slug: 'best-foods-healthy-cholesterol-levels',
      synergyNote: 'Cardiovascular Protection: Soluble phytosterols and extra virgin olive oil oleocanthal for LDL particle quality.',
      clusterId: 'cellular-longevity-aging',
    },
  ],

  // Turmeric Curcumin Guide
  'turmeric-curcumin-joint-inflammation-support': [
    {
      slug: 'mediterranean-anti-inflammatory-longevity-blueprint',
      synergyNote: 'Dietary Grounding: Enhancing curcumin absorption within an olive-oil-rich dietary fat matrix.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'collagen-peptides-skin-joint-health',
      synergyNote: 'Joint Rebuilding Synergy: Combining NF-kB pathway inhibition with structural type II collagen synthesis.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'omega-3-fish-oil-benefits',
      synergyNote: 'Resolvin Cascade: Dual-action eicosanoid and cytokine modulation for persistent joint comfort.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
  ],

  // Vitamin D3 + K2 Guide
  'vitamin-d3-k2-benefits-bone-heart-health': [
    {
      slug: 'magnesium-glycinate-benefits',
      synergyNote: 'Essential Enzymatic Activator: Vitamin D cannot be converted into active calcitriol without intracellular magnesium.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'zinc-deficiency-signs-immune-support',
      synergyNote: 'Immune Axis Synergy: Nuclear VDR receptor transcription paired with zinc-finger protein synthesis.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'mediterranean-anti-inflammatory-longevity-blueprint',
      synergyNote: 'Fat-Soluble Bioavailability: Why healthy monounsaturated fats are mandatory for optimal vitamin absorption.',
      clusterId: 'cellular-longevity-aging',
    },
  ],

  // Creatine Monohydrate Guide
  'creatine-monohydrate-benefits-strength-brain-health': [
    {
      slug: 'omega-3-fish-oil-benefits',
      synergyNote: 'Neuro-Mitochondrial Synergy: Phosphocreatine ATP recharge paired with DHA-mediated synaptic fluidity.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
    {
      slug: 'b-complex-vitamins-energy-metabolism',
      synergyNote: 'Cellular Respiration: Supporting mitochondrial electron transport chain enzymes alongside creatine phosphate.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
    {
      slug: 'l-theanine-and-caffeine-focus',
      synergyNote: 'Cognitive Stacking: Combining acute executive working memory with long-term neuronal cellular resilience.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
  ],

  // Omega-3 Fish Oil Guide
  'omega-3-fish-oil-benefits': [
    {
      slug: 'creatine-monohydrate-benefits-strength-brain-health',
      synergyNote: 'Cardiovascular & Brain Power: Dual clinical foundation for endothelial nitric oxide and cerebral bioenergetics.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
    {
      slug: 'turmeric-curcumin-joint-inflammation-support',
      synergyNote: 'Inflammatory Cascade Blunting: Synergistic inhibition of COX-2 enzymes and pro-inflammatory leukotrienes.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'mediterranean-anti-inflammatory-longevity-blueprint',
      synergyNote: 'Dietary Matrix Integration: Enhancing lipid profiles alongside polyphenol-rich cold-pressed olive oils.',
      clusterId: 'cellular-longevity-aging',
    },
  ],

  // Hydration & Electrolytes Guide
  'hydration-electrolytes-metabolic-health-guide': [
    {
      slug: 'intermittent-fasting-benefits-how-to-start',
      synergyNote: 'Fasting Mineral Preservation: Preventing sodium depletion, headaches, and energy crashes during fasting windows.',
      clusterId: 'metabolic-reset-weight',
    },
    {
      slug: 'best-morning-routine-sustained-energy',
      synergyNote: 'Awakening Hydration Protocol: Rapid cellular fluid re-balancing with sodium and potassium before morning coffee.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'post-meal-walk-glucose-protocol',
      synergyNote: 'Vascular Hydration: Ensuring adequate blood volume and electrolyte balance for active muscular glucose disposal.',
      clusterId: 'glycemic-metabolic-health',
    },
  ],

  // Intermittent Fasting Guide
  'intermittent-fasting-benefits-how-to-start': [
    {
      slug: 'hydration-electrolytes-metabolic-health-guide',
      synergyNote: 'Electrolyte Defense: Maintaining optimal cellular hydration and magnesium during low-insulin fasting states.',
      clusterId: 'metabolic-reset-weight',
    },
    {
      slug: 'circadian-rhythm-dawn-phenomenon-guide',
      synergyNote: 'Circadian Fasting Windows: Aligning eating windows with peripheral metabolic clocks for superior insulin sensitivity.',
      clusterId: 'glycemic-metabolic-health',
    },
    {
      slug: 'healthy-weight-management-after-40',
      synergyNote: 'Metabolic Adaptation: Countering hormonal shifts and preserving lean muscle mass while operating in a deficit.',
      clusterId: 'metabolic-reset-weight',
    },
  ],

  // Collagen Peptides Guide
  'collagen-peptides-skin-joint-health': [
    {
      slug: 'turmeric-curcumin-joint-inflammation-support',
      synergyNote: 'Dual Joint Protocol: Suppressing cartilage-degrading cytokines while providing proline and hydroxyproline peptides.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'vitamin-d3-k2-benefits-bone-heart-health',
      synergyNote: 'Skeletal Mineral Matrix: Ensuring calcium is bound within collagenous bone matrix rather than soft arterial walls.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'essential-nutrients-for-adults-over-40',
      synergyNote: 'Micronutrient Co-factors: Vitamin C and copper requirements for proper procollagen triple-helix hydroxylation.',
      clusterId: 'cellular-longevity-aging',
    },
  ],

  // Zinc Guide
  'zinc-deficiency-signs-immune-support': [
    {
      slug: 'vitamin-d3-k2-benefits-bone-heart-health',
      synergyNote: 'Immune Synergy: T-lymphocyte differentiation and antimicrobial peptide production driven by zinc and calcitriol.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'essential-nutrients-for-adults-over-40',
      synergyNote: 'Micronutrient Harmony: Balancing zinc supplementation with copper status for long-term health.',
      clusterId: 'cellular-longevity-aging',
    },
    {
      slug: 'best-foods-healthy-cholesterol-levels',
      synergyNote: 'Antioxidant Defense: Superoxide dismutase (SOD) synthesis to protect LDL particles from oxidation.',
      clusterId: 'cellular-longevity-aging',
    },
  ],

  // L-Theanine & Caffeine Guide
  'l-theanine-and-caffeine-focus': [
    {
      slug: 'creatine-monohydrate-benefits-strength-brain-health',
      synergyNote: 'Cognitive Optimization: Combining immediate prefrontal neurotransmitter modulation with bioenergetic ATP reserves.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
    {
      slug: 'ashwagandha-stress-cortisol-management',
      synergyNote: 'Neuro-Protection: Moderating sympathetic nervous system tone during mentally demanding work days.',
      clusterId: 'stress-cortisol-circadian',
    },
    {
      slug: 'b-complex-vitamins-energy-metabolism',
      synergyNote: 'Neurotransmitter Synthesis: B6 and B12 coenzymes required for serotonin and dopamine production.',
      clusterId: 'performance-mitochondrial-nutrition',
    },
  ],

  // Gluco6 Review
  'gluco6-review': [
    {
      slug: 'gluco6-ingredients',
      synergyNote: 'Ingredient Deep-Dive: Comprehensive chemical analysis of Gymnema, Cinnamon, and Sukre.',
      clusterId: 'clinical-reviews-formulations',
    },
    {
      slug: 'gluco6-vs-other-blood-sugar-supplements',
      synergyNote: 'Comparative Audit: Side-by-side benchmarking against Sugar Defender and conventional berberine.',
      clusterId: 'clinical-reviews-formulations',
    },
    {
      slug: 'blood-sugar-supplements-guide',
      synergyNote: 'Consumer Protection: What the clinical research really says about over-the-counter blood sugar formulas.',
      clusterId: 'glycemic-metabolic-health',
    },
  ],

  // Puravive Review
  'puravive-review': [
    {
      slug: 'healthy-weight-management-after-40',
      synergyNote: 'Clinical Context: Why age-related BAT slowdown and hormonal changes resist traditional caloric restriction.',
      clusterId: 'metabolic-reset-weight',
    },
    {
      slug: 'what-to-look-for-in-weight-management-supplement',
      synergyNote: 'Evaluation Standards: How to verify thermogenic claims and third-party laboratory purity testing.',
      clusterId: 'clinical-reviews-formulations',
    },
    {
      slug: 'intermittent-fasting-benefits-how-to-start',
      synergyNote: 'Lifestyle Synergy: Pairing targeted metabolic supplements with strategic fasting intervals.',
      clusterId: 'metabolic-reset-weight',
    },
  ],
};

/**
 * Returns the Topic Cluster for a given article
 */
export function getTopicClusterForArticle(article: Article): TopicCluster {
  // 1. Check curated mapping
  const curated = CURATED_RELATED_GUIDES[article.slug];
  if (curated && curated.length > 0 && curated[0].clusterId && TOPIC_CLUSTERS[curated[0].clusterId]) {
    return TOPIC_CLUSTERS[curated[0].clusterId];
  }

  // 2. Check category mapping
  const cat = (article.category || '').toLowerCase();
  if (cat.includes('blood sugar') || cat.includes('glucose')) {
    return TOPIC_CLUSTERS['glycemic-metabolic-health'];
  }
  if (cat.includes('stress') || cat.includes('sleep')) {
    return TOPIC_CLUSTERS['stress-cortisol-circadian'];
  }
  if (cat.includes('aging') || cat.includes('longevity') || cat.includes('joint')) {
    return TOPIC_CLUSTERS['cellular-longevity-aging'];
  }
  if (cat.includes('weight') || cat.includes('metabolism')) {
    return TOPIC_CLUSTERS['metabolic-reset-weight'];
  }
  if (cat.includes('nutrition') || cat.includes('fitness') || cat.includes('performance')) {
    return TOPIC_CLUSTERS['performance-mitochondrial-nutrition'];
  }
  if (cat.includes('review') || cat.includes('comparison')) {
    return TOPIC_CLUSTERS['clinical-reviews-formulations'];
  }

  return TOPIC_CLUSTERS['cellular-longevity-aging'];
}

/**
 * Resolves up to 3 highly relevant related clinical guides for any article.
 * Guarantees that the cortisol article directly receives Magnesium, Ashwagandha, and Morning Routine.
 */
export function getRelatedClinicalGuides(
  currentArticle: Article,
  allArticles: Article[]
): RelatedGuideWithSynergy[] {
  const currentSlug = currentArticle.slug;
  const currentId = currentArticle.id;
  const currentCluster = getTopicClusterForArticle(currentArticle);

  const results: RelatedGuideWithSynergy[] = [];
  const seenIds = new Set<string>([currentId]);
  const seenSlugs = new Set<string>([currentSlug]);

  // 1. Check curated overrides first
  const curatedEntries = CURATED_RELATED_GUIDES[currentSlug];
  if (curatedEntries && curatedEntries.length > 0) {
    for (const entry of curatedEntries) {
      // Find matching article by slug or partial slug
      const matched = allArticles.find(
        (a) => a.slug === entry.slug || a.slug.includes(entry.slug) || entry.slug.includes(a.slug)
      );

      if (matched && !seenIds.has(matched.id)) {
        seenIds.add(matched.id);
        seenSlugs.add(matched.slug);
        const cluster = entry.clusterId && TOPIC_CLUSTERS[entry.clusterId]
          ? TOPIC_CLUSTERS[entry.clusterId]
          : getTopicClusterForArticle(matched);

        results.push({
          article: matched,
          synergyNote: entry.synergyNote,
          clusterName: cluster.name,
        });
      }
    }
  }

  // 2. If we still need more, pull articles from the same Topic Cluster
  if (results.length < 3) {
    const clusterCandidates = allArticles.filter((a) => {
      if (seenIds.has(a.id) || seenSlugs.has(a.slug)) return false;
      const articleCluster = getTopicClusterForArticle(a);
      return articleCluster.id === currentCluster.id;
    });

    for (const candidate of clusterCandidates) {
      if (results.length >= 3) break;
      seenIds.add(candidate.id);
      seenSlugs.add(candidate.slug);
      results.push({
        article: candidate,
        synergyNote: `Topic Cluster Companion: Key clinical insights in ${currentCluster.name}.`,
        clusterName: currentCluster.name,
      });
    }
  }

  // 3. If still needed, pull articles from the same category
  if (results.length < 3) {
    const categoryCandidates = allArticles.filter(
      (a) => !seenIds.has(a.id) && !seenSlugs.has(a.slug) && a.category === currentArticle.category
    );

    for (const candidate of categoryCandidates) {
      if (results.length >= 3) break;
      seenIds.add(candidate.id);
      seenSlugs.add(candidate.slug);
      results.push({
        article: candidate,
        synergyNote: `Related ${candidate.category} Protocol: Evidence-informed clinical research.`,
        clusterName: currentCluster.name,
      });
    }
  }

  // 4. Final fallback: high authority articles
  if (results.length < 3) {
    const generalCandidates = allArticles.filter(
      (a) => !seenIds.has(a.id) && !seenSlugs.has(a.slug)
    );

    for (const candidate of generalCandidates) {
      if (results.length >= 3) break;
      seenIds.add(candidate.id);
      seenSlugs.add(candidate.slug);
      results.push({
        article: candidate,
        synergyNote: `Recommended Clinical Guide: High-authority evidence breakdown.`,
        clusterName: getTopicClusterForArticle(candidate).name,
      });
    }
  }

  return results.slice(0, 3);
}
