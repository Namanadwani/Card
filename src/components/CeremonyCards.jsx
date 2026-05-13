import { motion } from 'framer-motion'

const MAP = 'https://maps.app.goo.gl/mgomhZttvTdjHjrj8'

// ── Events ──────────────────────────────────────────────────────────────────
// Carnival & Sangeet → 21st June 2026
// All others        → 22nd June 2026
const EVENTS = [
  {
    day:      'Day 1  ·  Sunday, 21st June 2026',
    title:    'Carnival',
    subtitle: 'Haldi Ceremony',
    time:     '1:00 PM onwards',
    icon:     '🌼',
    from:     'from-yellow-50',
    to:       'to-amber-50',
    accent:   '#F59E0B',
  },
  {
    day:      'Day 1  ·  Sunday, 21st June 2026',
    title:    'Sangeet',
    subtitle: 'DJ Night',
    time:     '8:00 PM onwards',
    icon:     '🎵',
    from:     'from-purple-50',
    to:       'to-pink-50',
    accent:   '#9B59B6',
  },
  {
    day:      'Day 2  ·  Monday, 22nd June 2026',
    title:    'Dikh',
    subtitle: 'The Auspicious Beginning',
    time:     '12:30 PM',
    icon:     '🙏',
    from:     'from-orange-50',
    to:       'to-amber-50',
    accent:   '#EA580C',
  },
  {
    day:      'Day 2  ·  Monday, 22nd June 2026',
    title:    'Barat',
    subtitle: 'The Grand Arrival',
    time:     '1:00 PM',
    icon:     '🐴',
    from:     'from-red-50',
    to:       'to-rose-50',
    accent:   '#E74C3C',
  },
  {
    day:      'Day 2  ·  Monday, 22nd June 2026',
    title:    'Phere',
    subtitle: 'The Sacred Vows',
    time:     '3:00 PM',
    icon:     '🔥',
    from:     'from-red-50',
    to:       'to-orange-50',
    accent:   '#E74C3C',
  },
  {
    day:      'Day 2  ·  Monday, 22nd June 2026',
    title:    'Reception',
    subtitle: 'An Evening of Celebration',
    time:     '9:00 PM onwards',
    icon:     '🥂',
    from:     'from-amber-50',
    to:       'to-yellow-50',
    accent:   '#C8A951',
  },
]

function Card({ ev, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-36px' }}
      transition={{ delay: (index % 3) * 0.08, type: 'spring', bounce: 0.28 }}
      whileHover={{ y: -5, boxShadow: '0 22px 48px rgba(200,169,81,0.12)' }}
      className={`relative rounded-2xl p-6 border border-white/60 shadow-md
                  overflow-hidden bg-gradient-to-br ${ev.from} ${ev.to}`}
    >
      {/* Accent corner top-right */}
      <div className="absolute top-0 right-0 w-12 h-12 opacity-[0.18]">
        <svg viewBox="0 0 48 48"><path d="M48,0 L48,48 C48,20 28,0 0,0 Z" fill={ev.accent} /></svg>
      </div>
      {/* Accent corner bottom-left */}
      <div className="absolute bottom-0 left-0 w-12 h-12 opacity-[0.18] rotate-180">
        <svg viewBox="0 0 48 48"><path d="M48,0 L48,48 C48,20 28,0 0,0 Z" fill={ev.accent} /></svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left">
        {/* Date badge */}
        <p className="font-sans text-[9px] text-maroon/40 tracking-wider uppercase mb-3">
          {ev.day}
        </p>

        {/* Icon + title row */}
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">{ev.icon}</span>
          <div>
            <h3 className="font-script text-2xl text-maroon leading-none">{ev.title}</h3>
            <p className="font-serif text-[11px] text-maroon/45 tracking-wider uppercase mt-0.5">
              {ev.subtitle}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-1.5">
          <p className="font-sans text-sm text-maroon/75">🕐 {ev.time}</p>
          <p className="font-sans text-sm text-maroon/75 font-medium">
            📍 Solitare Hotel &amp; Resorts
          </p>
        </div>

        {/* Maps button */}
        <motion.a
          href={MAP}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 4px 18px rgba(200,169,81,0.28)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5
                     bg-gradient-to-r from-gold-dark to-gold text-white
                     text-[11px] font-sans tracking-wider uppercase
                     rounded-full shadow-md"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd" />
          </svg>
          View on Maps
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function CeremonyCards() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-md mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.35 }}
          className="text-center mb-12"
        >
          <p className="font-serif text-maroon/45 text-xs tracking-[0.45em] uppercase mb-2">
            Join Us For
          </p>
          <h2 className="font-script text-5xl text-maroon">
            Wedding Celebrations
          </h2>
        </motion.div>

        {/* ── Day 1 divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <p className="font-serif text-gold-dark text-xs tracking-widest whitespace-nowrap">
            Day 1  ·  Sunday, 21st June 2026
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>

        {/* Carnival + Sangeet */}
        <div className="space-y-5 mb-10">
          {EVENTS.slice(0, 2).map((ev, i) => <Card key={ev.title} ev={ev} index={i} />)}
        </div>

        {/* ── Day 2 divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <p className="font-serif text-gold-dark text-xs tracking-widest whitespace-nowrap">
            Day 2  ·  Monday, 22nd June 2026
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>

        {/* Dikh, Barat, Phere, Reception */}
        <div className="space-y-5">
          {EVENTS.slice(2).map((ev, i) => <Card key={ev.title} ev={ev} index={i + 2} />)}
        </div>

      </div>
    </section>
  )
}
