// src/data/english.ts
// ═══════════════════════════════════════════════════════════════════
// ENGLISH SECTION — GK360.pk
//
// This file controls the entire English section.
// Topics from JSON papers are auto-routed to the correct sub-section
// based on TOPIC_MAP below.
//
// HOW TO ADD A NEW ENGLISH SUB-SECTION:
// 1. Add entry to ENGLISH_SECTIONS array
// 2. Add topic → slug mapping in TOPIC_MAP
// 3. Done — page auto-generates, MCQs auto-route
// ═══════════════════════════════════════════════════════════════════

export interface EnglishSection {
  slug:        string;
  name:        string;
  short:       string;
  icon:        string;
  description: string;
  examTip:     string;
  voxPartner:  boolean; // shows VoxEnglishAcademy badge
}

export const ENGLISH_SECTIONS: EnglishSection[] = [
  {
    slug:       'vocabulary',
    name:       'Vocabulary',
    short:      'Vocabulary',
    icon:       '📖',
    description: 'Master the most frequently tested English words in PPSC exams. Covers synonyms, antonyms, one-word substitutions, and difficult word meanings taken directly from past papers.',
    examTip:    'Vocabulary carries 5-8 marks in most PPSC papers. Focus on words that appear repeatedly across multiple years.',
    voxPartner: false,
  },
  {
    slug:       'grammar',
    name:       'English Grammar',
    short:      'Grammar',
    icon:       '✍️',
    description: 'Complete grammar coverage for PPSC — sentence correction, tenses, prepositions, articles, subject-verb agreement, pronouns, and active/passive voice.',
    examTip:    'Grammar correction questions are easy marks if you know the rules. Practice spotting common errors in sentences.',
    voxPartner: false,
  },
  {
    slug:       'idioms',
    name:       'Idioms & Phrases',
    short:      'Idioms',
    icon:       '💬',
    description: 'All idioms and phrases from PPSC past papers. Learn their meanings with example sentences. PPSC repeats idioms frequently — these are predictable marks.',
    examTip:    'PPSC repeats idioms from older papers. Practicing past paper idioms gives you a high chance of seeing the exact same questions.',
    voxPartner: false,
  },
  {
    slug:       'introduction',
    name:       'How to Introduce Yourself',
    short:      'Self Introduction',
    icon:       '🎤',
    description: 'Prepare a confident, professional self-introduction for PPSC oral tests and interviews. Sample scripts, tips, and practice exercises for both formal and semi-formal settings.',
    examTip:    'A strong self-introduction sets the tone for your entire interview. Prepare a 60-second and 2-minute version.',
    voxPartner: true,
  },
];

// ── TOPIC → SECTION ROUTING MAP ──────────────────────────────────
// Maps the "topic" field in question JSONs → English section slug
// Add new topic strings here as you add more papers.
// The match is case-insensitive and checks if topic INCLUDES the key.

export const TOPIC_MAP: Record<string, string> = {
  // → vocabulary
  'synonyms':              'vocabulary',
  'antonyms':              'vocabulary',
  'one word substitution': 'vocabulary',
  'vocabulary':            'vocabulary',
  'word meaning':          'vocabulary',
  'fill in the blank':     'vocabulary',
  'spelling':              'vocabulary',

  // → grammar
  'grammar correction':    'grammar',
  'grammar (pronouns)':    'grammar',
  'grammar (tenses)':      'grammar',
  'grammar (articles)':    'grammar',
  'grammar (prepositions)':'grammar',
  'grammar (voice)':       'grammar',
  'grammar':               'grammar',
  'sentence correction':   'grammar',
  'correction':            'grammar',
  'tenses':                'grammar',
  'prepositions':          'grammar',
  'pronouns':              'grammar',

  // → idioms
  'idioms & phrases':      'idioms',
  'idioms and phrases':    'idioms',
  'idioms':                'idioms',
  'phrases':               'idioms',
  'proverbs':              'idioms',

  // → introduction (nothing from past papers goes here — it's standalone content)
};

// Route a question topic string to the correct English section slug
export function routeToEnglishSection(topic: string): string {
  const t = topic.toLowerCase();
  for (const [key, slug] of Object.entries(TOPIC_MAP)) {
    if (t.includes(key)) return slug;
  }
  return 'vocabulary'; // default fallback
}

export function getSection(slug: string): EnglishSection | undefined {
  return ENGLISH_SECTIONS.find(s => s.slug === slug);
}