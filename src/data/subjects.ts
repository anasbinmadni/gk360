// src/data/subjects.ts
// ═══════════════════════════════════════════════════════════════════
// MASTER SUBJECTS LIST — GK360.pk
// Cross-referenced: PACE GK Academy + PPSC official syllabus
//
// HOW TO ADD A NEW SUBJECT:
// Add one object here → appears on subjects index, subject page,
// homepage cards, and sitemap — all automatically.
// ═══════════════════════════════════════════════════════════════════

export interface Subject {
  slug:        string;
  name:        string;
  short:       string;
  icon:        string;
  category:    string;
  description: string;
  importance:  'core' | 'important' | 'special'; // affects sorting
  active:      boolean;
}

export const SUBJECTS: Subject[] = [

  // ── CORE (appear in almost every PPSC paper) ─────────────────────
  {
    slug:        'general-knowledge',
    name:        'General Knowledge',
    short:       'General Knowledge',
    icon:        '🌍',
    category:    'Core Subjects',
    description: 'General Knowledge is the highest-weightage subject in PPSC one-paper exams. Covers world affairs, famous personalities, inventions, geography, science basics, and Pakistan-specific GK.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'pakistan-studies',
    name:        'Pakistan Studies',
    short:       'Pakistan Studies',
    icon:        '🗺️',
    category:    'Core Subjects',
    description: 'Pakistan Studies covers the history of Pakistan from pre-partition to modern era, Pakistan Movement, geography, constitution highlights, and important national events.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'islamiyat',
    name:        'Islamiyat / Islamic Studies',
    short:       'Islamiyat',
    icon:        '☪️',
    category:    'Core Subjects',
    description: 'Islamiyat covers the Holy Quran, Hadith, Seerah of the Prophet (PBUH), pillars of Islam, Islamic history, and the lives of Sahaba and major Islamic personalities.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'english',
    name:        'English',
    short:       'English',
    icon:        '📝',
    category:    'Core Subjects',
    description: 'English section tests vocabulary (synonyms, antonyms, one-word substitution), grammar (tenses, prepositions, correction), idioms and phrases, and comprehension.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'urdu',
    name:        'Urdu',
    short:       'Urdu',
    icon:        '✒️',
    category:    'Core Subjects',
    description: 'Urdu section covers grammar, vocabulary, muhavre (idioms), famous Urdu poets and writers, Urdu literature history, and fill-in-the-blank questions.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'current-affairs',
    name:        'Current Affairs',
    short:       'Current Affairs',
    icon:        '📰',
    category:    'Core Subjects',
    description: 'Current Affairs covers recent national and international events, Pakistan affairs, economy, sports, science & technology developments. Updated monthly on GK360.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'basic-mathematics',
    name:        'Basic Mathematics',
    short:       'Mathematics',
    icon:        '🔢',
    category:    'Core Subjects',
    description: 'Mathematics in PPSC covers arithmetic, percentages, ratios & proportions, algebra, geometry, work & time, and data interpretation. Focus on speed and accuracy.',
    importance:  'core',
    active:      true,
  },

  // ── SCIENCE ─────────────────────────────────────────────────────
  {
    slug:        'general-science',
    name:        'General Science',
    short:       'General Science',
    icon:        '🔬',
    category:    'Science',
    description: 'General Science covers basic physics, chemistry, biology, and scientific discoveries. Questions test understanding of everyday scientific phenomena and inventions.',
    importance:  'core',
    active:      true,
  },
  {
    slug:        'everyday-science',
    name:        'Everyday Science',
    short:       'Everyday Science',
    icon:        '⚗️',
    category:    'Science',
    description: 'Everyday Science focuses on practical applications of science — why the sky is blue, how vaccines work, the science of cooking, and common household chemistry.',
    importance:  'important',
    active:      true,
  },

  // ── COMPUTER & TECHNOLOGY ────────────────────────────────────────
  {
    slug:        'computer-basics',
    name:        'Computer Basics / IT',
    short:       'Computer / IT',
    icon:        '💻',
    category:    'Computer & Technology',
    description: 'Computer Basics covers MS Office (Word, Excel, PowerPoint), internet fundamentals, computer hardware & software, networking basics, and basic programming concepts.',
    importance:  'important',
    active:      true,
  },

  // ── GEOGRAPHY ────────────────────────────────────────────────────
  {
    slug:        'geography-maps',
    name:        'Geography & Maps',
    short:       'Geography & Maps',
    icon:        '🧭',
    category:    'Geography',
    description: 'Geography covers world physical geography, rivers, mountains, oceans, climate zones, Pakistan geography, and map reading skills frequently tested in PPSC papers.',
    importance:  'important',
    active:      true,
  },
  {
    slug:        'punjab-general-knowledge',
    name:        'Punjab General Knowledge',
    short:       'Punjab GK',
    icon:        '🏙️',
    category:    'Geography',
    description: 'Punjab GK covers history, culture, districts, rivers, notable personalities of Punjab. Specifically tested in provincial PPSC exams for Punjab departments.',
    importance:  'important',
    active:      true,
  },

  // ── LAW & CONSTITUTION ───────────────────────────────────────────
  {
    slug:        'constitution-of-pakistan',
    name:        'Constitution of Pakistan 1973',
    short:       'Constitution',
    icon:        '📖',
    category:    'Law & Constitution',
    description: 'Covers fundamental rights, the structure of parliament, judiciary, federal vs provincial powers, constitutional amendments, and important articles of the 1973 Constitution.',
    importance:  'important',
    active:      true,
  },
  {
    slug:        'pakistan-penal-code',
    name:        'Pakistan Penal Code 1860 (PPC)',
    short:       'PPC 1860',
    icon:        '⚖️',
    category:    'Law & Constitution',
    description: 'PPC 1860 is tested in law enforcement and legal department exams. Covers definitions of crimes, punishments, offences against the state, property, and persons.',
    importance:  'important',
    active:      true,
  },
  {
    slug:        'code-of-criminal-procedure',
    name:        'Code of Criminal Procedure 1898 (CrPC)',
    short:       'CrPC 1898',
    icon:        '🔏',
    category:    'Law & Constitution',
    description: 'CrPC covers the procedure for investigation, trial, arrest, bail, and criminal court procedures. Heavily tested in Police, ACE, and judicial department papers.',
    importance:  'important',
    active:      true,
  },
  {
    slug:        'pera-act',
    name:        'PERA Act & Rules',
    short:       'PERA Act',
    icon:        '🔍',
    category:    'Law & Constitution',
    description: 'Punjab Enforcement and Regulatory Authority (PERA) Act and Rules 2024. Covers enforcement powers, officers, jurisdiction, penalties, and administrative structure of PERA.',
    importance:  'special',
    active:      true,
  },
  {
    slug:        'punjab-hoarding-act',
    name:        'Punjab Prevention of Hoarding Act 2020',
    short:       'Hoarding Act',
    icon:        '🏪',
    category:    'Law & Constitution',
    description: 'Punjab Prevention of Hoarding Act 2020 — tested specifically in PERA, Food Authority, and price enforcement department exams. Covers offences, penalties, and enforcement.',
    importance:  'special',
    active:      true,
  },
  {
    slug:        'plra',
    name:        'Punjab Land Revenue Act 1967 (PLRA)',
    short:       'PLRA 1967',
    icon:        '📜',
    category:    'Law & Constitution',
    description: 'PLRA covers land records, rights of occupancy, mutations, tenancy, and revenue court procedures. Essential for Board of Revenue, Patwari, and Tehsildar exams.',
    importance:  'special',
    active:      true,
  },

  // ── EDUCATION & PEDAGOGY ─────────────────────────────────────────
  {
    slug:        'pedagogy',
    name:        'Pedagogy & Education',
    short:       'Pedagogy',
    icon:        '🎓',
    category:    'Education & Pedagogy',
    description: 'Pedagogy covers teaching methods, learning theories (Bloom\'s taxonomy, Piaget), classroom management, curriculum design, and educational psychology. Tested in all Education department exams.',
    importance:  'important',
    active:      true,
  },

  // ── FINANCE & ACCOUNTS ───────────────────────────────────────────
  {
    slug:        'audits-accounting',
    name:        'Audits & Accounting',
    short:       'Audits & Accounting',
    icon:        '📊',
    category:    'Finance & Accounts',
    description: 'Covers basic accounting principles, bookkeeping, government auditing procedures, financial statements, and budgeting. Tested in Finance, Audit & Accounts department exams.',
    importance:  'special',
    active:      true,
  },

  // ── GENERAL ─────────────────────────────────────────────────────
  {
    slug:        'sports',
    name:        'Sports & Games',
    short:       'Sports',
    icon:        '🏆',
    category:    'General',
    description: 'Sports GK covers cricket, hockey, football, Olympics, sports records, famous Pakistani and world athletes, and international sports events.',
    importance:  'important',
    active:      true,
  },
  {
    slug:        'personalities',
    name:        'Famous Personalities',
    short:       'Personalities',
    icon:        '👤',
    category:    'General',
    description: 'Covers famous Pakistani leaders, world leaders, scientists, writers, poets, Nobel laureates, and personalities frequently asked in PPSC GK sections.',
    importance:  'important',
    active:      true,
  },
  {
    slug:        'sociology',
    name:        'Sociology',
    short:       'Sociology',
    icon:        '👥',
    category:    'General',
    description: 'Sociology basics — social structures, institutions, culture, socialization, key sociologists and their theories. Tested in Social Welfare and related department exams.',
    importance:  'special',
    active:      true,
  },
];

// ── HELPERS ──────────────────────────────────────────────────────────
export const SUBJECT_CATEGORIES = [...new Set(SUBJECTS.map(s => s.category))];

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find(s => s.slug === slug);
}

export function getSubjectsByCategory(category: string): Subject[] {
  return SUBJECTS.filter(s => s.category === category);
}

// Core subjects shown on homepage (importance === 'core')
export const CORE_SUBJECTS = SUBJECTS.filter(s => s.importance === 'core');
