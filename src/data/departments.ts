// src/data/departments.ts
// ═══════════════════════════════════════════════════════════════════
// MASTER DEPARTMENTS LIST — GK360.pk
// Source: PACE GK Academy + cross-verified with PPSC official records
// ═══════════════════════════════════════════════════════════════════
//
// HOW TO ADD A NEW DEPARTMENT:
// 1. Add a new object to the DEPARTMENTS array below
// 2. That's it — all pages (homepage cards, departments index,
//    department page, sitemap) update automatically on next build.
//
// FIELDS:
//   slug       → URL: /past-papers/department/[slug]
//   name       → Full display name
//   short      → Short badge name (max 4 words)
//   icon       → Emoji icon
//   category   → Groups departments on the index page
//   active     → false = coming soon, not yet linked
// ═══════════════════════════════════════════════════════════════════

export interface Department {
  slug:     string;
  name:     string;
  short:    string;
  icon:     string;
  category: string;
  active:   boolean;
}

export const DEPARTMENTS: Department[] = [

  // ── LAW ENFORCEMENT ─────────────────────────────────────────────
  {
    slug:     'punjab-police',
    name:     'Punjab Police',
    short:    'Punjab Police',
    icon:     '👮',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'punjab-police-special-branch',
    name:     'Punjab Police Special Branch',
    short:    'Special Branch',
    icon:     '🕵️',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'traffic-warden',
    name:     'Traffic Warden — Punjab Police',
    short:    'Traffic Warden',
    icon:     '🚦',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'patrolling-police',
    name:     'Patrolling Police (Communication & Works)',
    short:    'Patrolling Police',
    icon:     '🚔',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'asf',
    name:     'Airport Security Force (ASF)',
    short:    'ASF',
    icon:     '✈️',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'civil-defence',
    name:     'Civil Defence — Punjab Home Department',
    short:    'Civil Defence',
    icon:     '🛡️',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'anti-corruption',
    name:     'Anti Corruption Establishment (ACE)',
    short:    'Anti-Corruption',
    icon:     '⚖️',
    category: 'Law Enforcement',
    active:   true,
  },
  {
    slug:     'prison-jail',
    name:     'Punjab Prison / Jail Department',
    short:    'Prison / Jail',
    icon:     '🔒',
    category: 'Law Enforcement',
    active:   true,
  },

  // ── REVENUE & LAND ───────────────────────────────────────────────
  {
    slug:     'board-of-revenue',
    name:     'Board of Revenue (Tehsildar / Naib Tehsildar)',
    short:    'Board of Revenue',
    icon:     '🏛️',
    category: 'Revenue & Land',
    active:   true,
  },
  {
    slug:     'land-record-authority',
    name:     'Land Record Authority (Patwari / Girdawar)',
    short:    'Land Record',
    icon:     '📜',
    category: 'Revenue & Land',
    active:   true,
  },
  {
    slug:     'excise-taxation',
    name:     'Excise and Taxation Department',
    short:    'Excise & Taxation',
    icon:     '🧾',
    category: 'Revenue & Land',
    active:   true,
  },
  {
    slug:     'punjab-revenue-authority',
    name:     'Punjab Revenue Authority — Finance Department',
    short:    'Revenue Authority',
    icon:     '💰',
    category: 'Revenue & Land',
    active:   true,
  },

  // ── FINANCE & ACCOUNTS ───────────────────────────────────────────
  {
    slug:     'finance-audit-accounts',
    name:     'Finance, Audit and Accounts Department',
    short:    'Finance & Accounts',
    icon:     '💼',
    category: 'Finance & Accounts',
    active:   true,
  },
  {
    slug:     'pessi',
    name:     'Punjab Employees Social Security Institution (PESSI)',
    short:    'PESSI',
    icon:     '🏦',
    category: 'Finance & Accounts',
    active:   true,
  },
  {
    slug:     'zakat-ushr',
    name:     'Zakat and Ushr Department',
    short:    'Zakat & Ushr',
    icon:     '🕌',
    category: 'Finance & Accounts',
    active:   true,
  },
  {
    slug:     'auqaf',
    name:     'Auqaf Department',
    short:    'Auqaf',
    icon:     '☪️',
    category: 'Finance & Accounts',
    active:   true,
  },

  // ── EDUCATION ────────────────────────────────────────────────────
  {
    slug:     'education',
    name:     'Education Department (ESE / SSE / SESE)',
    short:    'Education',
    icon:     '📚',
    category: 'Education',
    active:   true,
  },
  {
    slug:     'bise',
    name:     'Boards of Intermediate and Secondary Education (BISE)',
    short:    'BISE',
    icon:     '🎓',
    category: 'Education',
    active:   true,
  },
  {
    slug:     'literacy-nfbe',
    name:     'Literacy & Non Formal Basic Education (NFBE)',
    short:    'Literacy / NFBE',
    icon:     '✏️',
    category: 'Education',
    active:   true,
  },

  // ── HEALTH ───────────────────────────────────────────────────────
  {
    slug:     'health',
    name:     'Health Department (LHW / LHV / Dispenser)',
    short:    'Health',
    icon:     '🏥',
    category: 'Health',
    active:   true,
  },
  {
    slug:     'specialized-healthcare',
    name:     'Specialized Healthcare & Medical Education Department',
    short:    'Specialized Healthcare',
    icon:     '⚕️',
    category: 'Health',
    active:   true,
  },
  {
    slug:     'punjab-food-authority',
    name:     'Punjab Food Authority (PFA)',
    short:    'Punjab Food Authority',
    icon:     '🍽️',
    category: 'Health',
    active:   true,
  },
  {
    slug:     'population-welfare',
    name:     'Punjab Population Welfare Department',
    short:    'Population Welfare',
    icon:     '👨‍👩‍👧',
    category: 'Health',
    active:   true,
  },

  // ── AGRICULTURE & ENVIRONMENT ────────────────────────────────────
  {
    slug:     'agriculture',
    name:     'Punjab Agriculture Department',
    short:    'Agriculture',
    icon:     '🌾',
    category: 'Agriculture & Environment',
    active:   true,
  },
  {
    slug:     'livestock-dairy',
    name:     'Livestock & Dairy Development Department',
    short:    'Livestock & Dairy',
    icon:     '🐄',
    category: 'Agriculture & Environment',
    active:   true,
  },
  {
    slug:     'forestry-wildlife',
    name:     'Forestry, Wildlife & Fisheries Department',
    short:    'Forestry & Wildlife',
    icon:     '🌳',
    category: 'Agriculture & Environment',
    active:   true,
  },
  {
    slug:     'irrigation',
    name:     'Irrigation and Power Department',
    short:    'Irrigation & Power',
    icon:     '💧',
    category: 'Agriculture & Environment',
    active:   true,
  },

  // ── LOCAL GOVERNMENT & INFRASTRUCTURE ───────────────────────────
  {
    slug:     'local-government',
    name:     'Local Government & Community Development',
    short:    'Local Government',
    icon:     '🏙️',
    category: 'Local Government & Infrastructure',
    active:   true,
  },
  {
    slug:     'lda',
    name:     'Lahore Development Authority (LDA)',
    short:    'LDA',
    icon:     '🏗️',
    category: 'Local Government & Infrastructure',
    active:   true,
  },
  {
    slug:     'housing-public-health',
    name:     'Housing, Urban Development & Public Health Engineering',
    short:    'Housing & PHE',
    icon:     '🏠',
    category: 'Local Government & Infrastructure',
    active:   true,
  },
  {
    slug:     'punjab-highway',
    name:     'Punjab Highway Department (PHP)',
    short:    'Punjab Highway',
    icon:     '🛣️',
    category: 'Local Government & Infrastructure',
    active:   true,
  },
  {
    slug:     'transport',
    name:     'Transport Department',
    short:    'Transport',
    icon:     '🚌',
    category: 'Local Government & Infrastructure',
    active:   true,
  },

  // ── LABOUR & SOCIAL ──────────────────────────────────────────────
  {
    slug:     'labour-human-resource',
    name:     'Labour and Human Resource Department',
    short:    'Labour & HR',
    icon:     '🔧',
    category: 'Labour & Social',
    active:   true,
  },
  {
    slug:     'social-welfare',
    name:     'Social Welfare & Bait ul Maal Department',
    short:    'Social Welfare',
    icon:     '🤝',
    category: 'Labour & Social',
    active:   true,
  },
  {
    slug:     'cooperatives',
    name:     'Punjab Cooperatives Department',
    short:    'Cooperatives',
    icon:     '🤜',
    category: 'Labour & Social',
    active:   true,
  },

  // ── ADMINISTRATION & PLANNING ────────────────────────────────────
  {
    slug:     'services-general-admin',
    name:     'Services and General Administration Department',
    short:    'S&GAD',
    icon:     '📋',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'planning-development',
    name:     'Planning and Development Department',
    short:    'Planning & Dev',
    icon:     '📊',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'pms',
    name:     'Provincial Management Service (PMS / PCS)',
    short:    'PMS / PCS',
    icon:     '🎖️',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'ppsc',
    name:     'Punjab Public Service Commission (PPSC)',
    short:    'PPSC',
    icon:     '🏆',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'home-department',
    name:     'Home Department',
    short:    'Home Department',
    icon:     '🏢',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'law-parliamentary',
    name:     'Law and Parliamentary Affairs Department',
    short:    'Law & Parliamentary',
    icon:     '⚖️',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'computer-it',
    name:     'Computer and Information Technology Department',
    short:    'Computer & IT',
    icon:     '💻',
    category: 'Administration & Planning',
    active:   true,
  },
  {
    slug:     'industries-commerce',
    name:     'Industries, Commerce, Investment & Skills Development',
    short:    'Industries & Commerce',
    icon:     '🏭',
    category: 'Administration & Planning',
    active:   true,
  },

  // ── FEDERAL ──────────────────────────────────────────────────────
  {
    slug:     'ministry-of-defence',
    name:     'Government of Pakistan — Ministry of Defence (MOD)',
    short:    'Ministry of Defence',
    icon:     '🎖️',
    category: 'Federal',
    active:   true,
  },
  {
    slug:     'ecp',
    name:     'Election Commission of Pakistan (ECP)',
    short:    'ECP',
    icon:     '🗳️',
    category: 'Federal',
    active:   true,
  },

  // ── PERA ──────────────────────────────────────────────────────────
  {
    slug:     'pera',
    name:     'Punjab Enforcement and Regulatory Authority (PERA)',
    short:    'PERA',
    icon:     '🔍',
    category: 'Law Enforcement',
    active:   true,
  },

  // ── CULTURE & TOURISM ────────────────────────────────────────────
  {
    slug:     'information-culture',
    name:     'Information & Culture — Punjab Council of the Arts',
    short:    'Information & Culture',
    icon:     '🎨',
    category: 'Culture & Tourism',
    active:   true,
  },
  {
    slug:     'tourism-archaeology',
    name:     'Tourism, Archaeology & Museums Department',
    short:    'Tourism & Museums',
    icon:     '🏛️',
    category: 'Culture & Tourism',
    active:   true,
  },
];

// ── HELPERS ──────────────────────────────────────────────────────────
// Get unique categories in order
export const CATEGORIES = [...new Set(DEPARTMENTS.map(d => d.category))];

// Get department by slug
export function getDept(slug: string): Department | undefined {
  return DEPARTMENTS.find(d => d.slug === slug);
}

// Get departments by category
export function getDeptsByCategory(category: string): Department[] {
  return DEPARTMENTS.filter(d => d.category === category);
}
