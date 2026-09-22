import { Article, InternalLink } from '../types';

export interface CategoryPillarLink {
  title: string;
  url: string;
  badge: string;
  description: string;
}

/**
 * Top Pillar Guides, Comparative Audits, and Consumer Guides by Category.
 * Solves Google Search Console Orphan Page indexing issues by establishing
 * permanent, crawlable links from Hub pages to all sub-protocols and reviews.
 */
export const CATEGORY_PILLAR_NETWORKS: Record<string, CategoryPillarLink[]> = {
  'Healthy Blood Sugar': [
    {
      title: 'Blood Sugar Supplements: What Consumers Should Know',
      url: '/healthy-blood-sugar/blood-sugar-supplements-guide/',
      badge: 'Core Pillar Guide',
      description: 'Comprehensive consumer guide on biological timelines, clinical mechanisms, and FDA compliance.'
    },
    {
      title: 'Gluco6 vs Other Blood Sugar Supplements: Comparative Analysis',
      url: '/comparisons/gluco6-vs-other-blood-sugar-supplements/',
      badge: 'Head-to-Head Audit',
      description: 'Side-by-side benchmark comparing Gluco6 against berberine capsules, liquid droppers, and cinnamon formulas.'
    },
    {
      title: 'Gluco6 Review: Ingredients, Clinical Trials & Guarantee Audit',
      url: '/product-reviews/gluco6-review/',
      badge: 'Verified Product Review',
      description: 'In-depth laboratory audit of Sukre, TeaCrine, and Gymnema Sylvestre with verified buyer ratings.'
    },
    {
      title: 'Gluco6 Ingredients Explained: Scientific Breakdown',
      url: '/product-reviews/gluco6-ingredients/',
      badge: 'Chemical Breakdown',
      description: 'Detailed analysis of active botanical dosages, standardizations, and GLUT-4 receptor efficiency.'
    },
    {
      title: 'Sugar Defender Review: Liquid Dropper Formulation Analysis',
      url: '/product-reviews/sugar-defender-review/',
      badge: 'Alternative Review',
      description: 'Examination of sublingual liquid absorption, 24 adaptogenic botanicals, and refund policies.'
    },
    {
      title: 'The 10-Minute Post-Meal Walk Protocol for Glucose Blunting',
      url: '/healthy-blood-sugar/post-meal-walk-glucose-protocol/',
      badge: 'Clinical Protocol',
      description: 'How brief light walking activates non-insulin-dependent GLUT-4 glucose clearance in skeletal muscle.'
    },
    {
      title: 'What to Look for in a Blood Sugar Supplement',
      url: '/healthy-blood-sugar/what-to-look-for-in-blood-sugar-supplement/',
      badge: 'Buyer Checklist',
      description: 'Essential checklist: cGMP certifications, third-party lab testing, and realistic physiological timelines.'
    },
    {
      title: 'What Is Healthy Blood Sugar & Why It Matters After 40',
      url: '/healthy-blood-sugar/what-is-healthy-blood-sugar/',
      badge: 'Foundational Biology',
      description: 'Normal fasting ranges, postprandial glycemic curves, and the cellular biology of insulin sensitivity.'
    },
    {
      title: 'How Diet Can Affect Blood Sugar Levels & Glycemic Curves',
      url: '/healthy-blood-sugar/how-diet-affects-blood-sugar/',
      badge: 'Nutritional Protocol',
      description: 'Food sequencing, fiber shielding, and macronutrient combinations that blunt glycemic volatility.'
    },
    {
      title: 'Simple Lifestyle Habits That Support Healthy Blood Sugar',
      url: '/healthy-blood-sugar/lifestyle-habits-healthy-blood-sugar/',
      badge: 'Daily Habits',
      description: 'Sleep hygiene, stress reduction, and daily hydration habits that protect pancreatic beta-cell health.'
    },
    {
      title: 'Apple Cider Vinegar: Evidence-Based Benefits, Uses, and Glycemic Mechanisms',
      url: '/healthy-blood-sugar/apple-cider-vinegar-benefits-uses/',
      badge: 'Clinical Protocol',
      description: 'How acetic acid inhibits digestive enzymes, delays gastric emptying, and blunts postprandial glucose curves.'
    }
  ],

  'Product Reviews': [
    {
      title: 'Gluco6 Review: Ingredients, Benefits & What to Know',
      url: '/product-reviews/gluco6-review/',
      badge: 'Blood Sugar Review',
      description: 'Full independent review of Gluco6 6-in-1 glycemic formula, pricing, and 60-day guarantee.'
    },
    {
      title: 'Gluco6 Ingredients Explained: A Closer Look at the Formula',
      url: '/product-reviews/gluco6-ingredients/',
      badge: 'Formulation Analysis',
      description: 'Detailed scientific audit of Sukre, TeaCrine, Gymnema Sylvestre, and Chromium picolinate.'
    },
    {
      title: 'Gluco6 vs Other Blood Sugar Supplements: What’s the Difference?',
      url: '/comparisons/gluco6-vs-other-blood-sugar-supplements/',
      badge: 'Category Comparison',
      description: 'Head-to-head comparison against high-dose berberine capsules, cinnamon, and liquid droppers.'
    },
    {
      title: 'Sugar Defender Review: Liquid Dropper Formula Evaluation',
      url: '/product-reviews/sugar-defender-review/',
      badge: 'Blood Sugar Dropper',
      description: 'Objective audit of Sugar Defender sublingual formula, energy support, and user satisfaction.'
    },
    {
      title: 'Puravive Review: Brown Adipose Tissue (BAT) Weight Support Audit',
      url: '/product-reviews/puravive-review/',
      badge: 'Metabolism Review',
      description: 'Clinical evaluation of 8 exotic nutrients targeting thermogenic brown fat activation after 40.'
    },
    {
      title: 'Blood Sugar Supplements: What Consumers Should Know',
      url: '/healthy-blood-sugar/blood-sugar-supplements-guide/',
      badge: 'Essential Consumer Guide',
      description: 'FDA regulatory landscape under DSHEA, interaction warnings, and biological timelines.'
    },
    {
      title: 'Duwzgu D3 + K2 Liquid Drops Review',
      url: '/product-reviews/duwzgu-d3-k2-review/',
      badge: 'Micronutrient Audit',
      description: 'Laboratory assessment of fat-soluble D3/K2 synergy for bone mineralization and arterial health.'
    },
    {
      title: 'Duwzgu Pure Creatine Monohydrate Review',
      url: '/product-reviews/duwzgu-creatine-monohydrate-review/',
      badge: 'Strength & Brain',
      description: 'Evaluation of unflavored micronized 200-mesh creatine powder for muscle and cellular energy.'
    },
    {
      title: 'Duwzgu Sleep Support Melatonin Gummies Review',
      url: '/product-reviews/duwzgu-sleep-support-gummies-review/',
      badge: 'Sleep Support',
      description: 'Pectin-based evening sleep formula evaluation with passionflower and vitamin B6 cofactors.'
    },
    {
      title: 'Eelhoe Vitamin C Brightening Spray Review',
      url: '/product-reviews/eelhoe-vitamin-c-spray-review/',
      badge: 'Antioxidant Care',
      description: 'Topical antioxidant facial spray evaluation for free radical protection and skin elasticity.'
    },
    {
      title: 'Duwzgu Elderberry Immune Support Gummies Review',
      url: '/product-reviews/duwzgu-immune-support-gummies-review/',
      badge: 'Immune Defense',
      description: 'Standardized black elderberry extract, zinc, and vitamin C triple immune defense audit.'
    },
    {
      title: 'Duwzgu Creatine Monohydrate Chewable Gummies Review',
      url: '/product-reviews/duwzgu-creatine-monohydrate-gummies-review/',
      badge: 'Chewable Creatine',
      description: 'Convenient no-shaker creatine gummy formulation audit with zero artificial dyes.'
    }
  ],

  'Weight Management': [
    {
      title: 'Healthy Weight Management After 40: Metabolic Rate & BAT',
      url: '/weight-management/healthy-weight-management-after-40/',
      badge: 'Metabolic Guide',
      description: 'Overcoming hormonal shifts, leptin resistance, and diminished brown adipose tissue.'
    },
    {
      title: 'What to Look for in a Weight Management Supplement',
      url: '/weight-management/what-to-look-for-in-weight-management-supplement/',
      badge: 'Safety Checklist',
      description: 'Avoiding deceptive stimulant blends and verifying clinically backed thermogenic ingredients.'
    },
    {
      title: 'Puravive Review: Exotic Rice Method & BAT Activation',
      url: '/product-reviews/puravive-review/',
      badge: 'Supplement Audit',
      description: 'Comprehensive analysis of Puravive ingredients, manufacturing standards, and refund guarantee.'
    },
    {
      title: 'Hydration and Electrolytes for Metabolic Rate Optimization',
      url: '/weight-management/hydration-electrolytes-metabolic-health-guide/',
      badge: 'Cellular Hydration',
      description: 'Sodium-potassium pump balance, mitochondrial efficiency, and non-caloric metabolic support.'
    },
    {
      title: 'Intermittent Fasting Benefits: How to Start Safely',
      url: '/weight-management/intermittent-fasting-benefits-how-to-start/',
      badge: 'Fasting Protocol',
      description: 'Circadian-aligned 16:8 protocols to lower fasting insulin without triggering stress responses.'
    },
    {
      title: 'Common Weight Management Mistakes Adults Over 40 Make',
      url: '/common-weight-management-mistakes-adults-over-40-make/',
      badge: 'Pitfalls Guide',
      description: 'Why crash diets backfire and how to maintain resting metabolic rate through protein pacing.'
    }
  ],

  'Sleep & Stress': [
    {
      title: 'Understanding Cortisol: The Stress Hormone & Sleep Disruption',
      url: '/sleep-and-stress/understanding-cortisol-stress-hormone/',
      badge: 'Hormonal Science',
      description: 'Diurnal cortisol curves, HPA-axis overactivation, and nighttime awakenings.'
    },
    {
      title: 'Magnesium Glycinate: Deep Sleep & Neurological Calm',
      url: '/sleep-and-stress/magnesium-glycinate-benefits/',
      badge: 'Mineral Protocol',
      description: 'Why chelated bisglycinate crosses the blood-brain barrier to activate soothing GABA receptors.'
    },
    {
      title: 'Circadian Rhythm & The Dawn Phenomenon Guide',
      url: '/sleep-and-stress/circadian-rhythm-dawn-phenomenon-guide/',
      badge: 'Circadian Alignment',
      description: 'Managing early morning cortisol surges and nighttime liver glucose release.'
    },
    {
      title: 'Ashwagandha for Stress & Cortisol Management',
      url: '/sleep-and-stress/ashwagandha-stress-cortisol-management/',
      badge: 'Adaptogenic Herb',
      description: 'Standardized withanolides clinically proven to regulate adrenal stress response.'
    },
    {
      title: 'Duwzgu Sleep Support Melatonin Gummies Review',
      url: '/product-reviews/duwzgu-sleep-support-gummies-review/',
      badge: 'Product Audit',
      description: 'Evaluating micro-dosed melatonin with botanical cofactors for restorative slow-wave sleep.'
    },
    {
      title: 'Why Quality Sleep Matters as You Get Older',
      url: '/why-quality-sleep-matters-as-you-get-older/',
      badge: 'Longevity Foundation',
      description: 'The glymphatic waste clearance system and deep sleep phases required for brain health.'
    }
  ],

  'Healthy Aging': [
    {
      title: 'Mediterranean Anti-Inflammatory Longevity Blueprint',
      url: '/healthy-aging/mediterranean-anti-inflammatory-longevity-blueprint/',
      badge: 'Dietary Protocol',
      description: 'Polyphenol density, extra virgin olive oil, and cellular autophagy activation.'
    },
    {
      title: 'Vitamin D3 and K2 Synergy: Bone Density & Arterial Protection',
      url: '/healthy-aging/vitamin-d3-k2-benefits/',
      badge: 'Micronutrient Pair',
      description: 'How Vitamin K2 directs calcium into bone matrix rather than soft arterial walls.'
    },
    {
      title: 'Turmeric Curcumin: Joint Inflammation & Mobility Protocol',
      url: '/healthy-aging/turmeric-curcumin-joint-inflammation-support/',
      badge: 'Joint Protocol',
      description: 'Inhibiting NF-kB pathways with standardized 95% curcuminoids and piperine.'
    },
    {
      title: 'Collagen Peptides for Skin Elasticity & Joint Cartilage',
      url: '/healthy-aging/collagen-peptides-skin-joint-health/',
      badge: 'Structural Protein',
      description: 'Bioactive collagen hydrolysate for joint synovial fluid and dermal collagen synthesis.'
    },
    {
      title: 'Zinc Deficiency Signs & Immune Support Protocol',
      url: '/healthy-aging/zinc-deficiency-signs-immune-support/',
      badge: 'Immune Mineral',
      description: 'Thymic hormone activation, wound healing, and cellular antioxidant enzymes.'
    },
    {
      title: 'The Best Morning Routine for Sustained All-Day Energy',
      url: '/healthy-aging/best-morning-routine-sustained-energy/',
      badge: 'Daily Routine',
      description: 'Photic stimulation, delayed caffeine intake, and hydration architecture.'
    },
    {
      title: 'Chronic vs. Acute Inflammation: Biological Cascades & Interventions',
      url: '/healthy-aging/chronic-vs-acute-inflammation/',
      badge: 'Immunology & Aging',
      description: 'Acute tissue healing versus unresolved systemic low-grade inflammation, biomarkers, and clinical protocols.'
    }
  ],

  'Nutrition': [
    {
      title: 'Food Sequencing & The Fiber Matrix: Blunting Glucose Spikes',
      url: '/nutrition/food-sequencing-fiber-matrix-guide/',
      badge: 'Digestive Strategy',
      description: 'Consuming vegetables and protein before starches to create a viscous intestinal mesh.'
    },
    {
      title: 'Omega-3 Fish Oil: Cardiovascular & Cognitive Longevity',
      url: '/nutrition/omega-3-fish-oil-benefits/',
      badge: 'Essential Fatty Acids',
      description: 'EPA and DHA cellular membrane incorporation, resolvin synthesis, and triglyceride support.'
    },
    {
      title: 'Creatine Monohydrate: Muscle Retention & Neuro-Protection',
      url: '/nutrition/creatine-monohydrate-benefits/',
      badge: 'Bioenergetics',
      description: 'Replenishing cellular phosphocreatine reserves for cognitive clarity and sarcopenia prevention.'
    },
    {
      title: 'Probiotics, Prebiotics & The Gut Microbiome Axis',
      url: '/nutrition/probiotics-gut-health-digestion/',
      badge: 'Microbiome Health',
      description: 'Short-chain fatty acid (SCFA) production, intestinal barrier integrity, and metabolic signaling.'
    },
    {
      title: 'B-Complex Vitamins: Cellular Energy & Homocysteine Balance',
      url: '/nutrition/b-complex-vitamins-energy-metabolism/',
      badge: 'Metabolic Coenzymes',
      description: 'Methylated folate and B12 coenzymes driving the mitochondrial Krebs cycle.'
    },
    {
      title: 'L-Theanine & Caffeine: Smooth Cognitive Focus Protocol',
      url: '/nutrition/l-theanine-and-caffeine-focus/',
      badge: 'Nootropic Synergy',
      description: 'Alpha brain wave elevation eliminating caffeine jitters and afternoon crashes.'
    },
    {
      title: 'The Best Foods Before and After Exercise: Clinical Timing Guide',
      url: '/nutrition/best-foods-before-after-exercise/',
      badge: 'Sports Nutrition',
      description: 'Optimizing pre-workout glycogen and post-exercise muscle protein synthesis with evidence-based timing.'
    }
  ]
};

/**
 * Returns an enriched list of 4-6 authoritative internal links for ANY given article.
 * Guarantees zero orphan pages and cross-links key pillars, comparisons, and reviews.
 */
export function getEnrichedInternalLinks(
  article: Article,
  allArticles: Article[]
): InternalLink[] {
  // 1. If the article already has customized internal links, inspect and enrich them
  const existingLinks: InternalLink[] = article.internalLinks ? [...article.internalLinks] : [];

  // 2. Determine category and cluster
  const cat = article.category || 'Healthy Blood Sugar';
  const pillarPool = CATEGORY_PILLAR_NETWORKS[cat] || CATEGORY_PILLAR_NETWORKS['Healthy Blood Sugar'];

  // 3. For specific high-priority articles, inject dedicated anchor links:
  const isBloodSugarGuide = article.slug === 'blood-sugar-supplements-guide';
  const isGluco6Comparison = article.slug === 'gluco6-vs-other-blood-sugar-supplements';
  const isGluco6Review = article.slug === 'gluco6-review';

  if (isBloodSugarGuide) {
    const requiredUrls = [
      '/comparisons/gluco6-vs-other-blood-sugar-supplements/',
      '/product-reviews/gluco6-review/',
      '/product-reviews/gluco6-ingredients/',
      '/product-reviews/sugar-defender-review/',
      '/healthy-blood-sugar/what-to-look-for-in-blood-sugar-supplement/',
      '/healthy-blood-sugar/post-meal-walk-glucose-protocol/'
    ];
    requiredUrls.forEach((reqUrl) => {
      if (!existingLinks.some((l) => l.url === reqUrl)) {
        const foundPillar = pillarPool.find((p) => p.url === reqUrl) ||
          CATEGORY_PILLAR_NETWORKS['Product Reviews'].find((p) => p.url === reqUrl);
        if (foundPillar) {
          existingLinks.push({
            url: foundPillar.url,
            anchorText: foundPillar.title,
            context: foundPillar.description
          });
        }
      }
    });
    return existingLinks;
  }

  if (isGluco6Comparison) {
    const requiredUrls = [
      '/healthy-blood-sugar/blood-sugar-supplements-guide/',
      '/product-reviews/gluco6-review/',
      '/product-reviews/gluco6-ingredients/',
      '/product-reviews/sugar-defender-review/',
      '/healthy-blood-sugar/what-to-look-for-in-blood-sugar-supplement/'
    ];
    requiredUrls.forEach((reqUrl) => {
      if (!existingLinks.some((l) => l.url === reqUrl)) {
        const foundPillar = pillarPool.find((p) => p.url === reqUrl) ||
          CATEGORY_PILLAR_NETWORKS['Product Reviews'].find((p) => p.url === reqUrl);
        if (foundPillar) {
          existingLinks.push({
            url: foundPillar.url,
            anchorText: foundPillar.title,
            context: foundPillar.description
          });
        }
      }
    });
    return existingLinks;
  }

  if (isGluco6Review) {
    const requiredUrls = [
      '/comparisons/gluco6-vs-other-blood-sugar-supplements/',
      '/healthy-blood-sugar/blood-sugar-supplements-guide/',
      '/product-reviews/gluco6-ingredients/',
      '/healthy-blood-sugar/what-to-look-for-in-blood-sugar-supplement/'
    ];
    requiredUrls.forEach((reqUrl) => {
      if (!existingLinks.some((l) => l.url === reqUrl)) {
        const foundPillar = pillarPool.find((p) => p.url === reqUrl) ||
          CATEGORY_PILLAR_NETWORKS['Product Reviews'].find((p) => p.url === reqUrl);
        if (foundPillar) {
          existingLinks.push({
            url: foundPillar.url,
            anchorText: foundPillar.title,
            context: foundPillar.description
          });
        }
      }
    });
    return existingLinks;
  }

  // 4. If existing links are fewer than 4, fill in from the category's pillar pool
  for (const pillar of pillarPool) {
    // Skip link if it points to the current article
    if (pillar.url.includes(article.slug)) continue;
    if (existingLinks.some((l) => l.url === pillar.url)) continue;

    existingLinks.push({
      url: pillar.url,
      anchorText: pillar.title,
      context: pillar.description
    });

    if (existingLinks.length >= 5) break;
  }

  // 5. Always ensure cross-cluster connection to the Blood Sugar Supplements Guide & Reviews
  if (cat !== 'Healthy Blood Sugar' && cat !== 'Product Reviews' && existingLinks.length < 5) {
    existingLinks.push({
      url: '/healthy-blood-sugar/blood-sugar-supplements-guide/',
      anchorText: 'Blood Sugar Supplements: What Consumers Should Know',
      context: 'Evaluate metabolic wellness cofactors, biological timelines, and FDA manufacturing standards.'
    });
  }

  return existingLinks;
}
