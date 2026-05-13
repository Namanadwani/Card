import { motion } from 'framer-motion'

const INSTAGRAM = 'https://www.instagram.com/'

/* Spinning CTA */
function SpinCTA({ href, label, sub, bg, textColor, borderColor }) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 px-6 text-center" style={{ background: bg }}>
      <p
        style={{
          fontFamily: 'Aboreto, cursive',
          fontSize: 'clamp(36px,10vw,70px)',
          color: textColor,
          lineHeight: 1.15,
          whiteSpace: 'pre-line',
        }}
      >
        {label}
      </p>
      <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '16px', color: textColor, opacity: 0.8 }}>
        {sub}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-4 flex items-center justify-center"
        style={{ width: 90, height: 90 }}
      >
        <svg width="90" height="90" className="absolute inset-0 spin-border" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="42" fill="none" stroke={borderColor} strokeWidth="2"
            strokeDasharray="8 6" strokeLinecap="round" />
        </svg>
        <svg width="90" height="90" className="absolute inset-0" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="34" fill="none" stroke={borderColor} strokeWidth="9" opacity="0.9" />
        </svg>
        <div className="relative z-10 w-3 h-3 rounded-full" style={{ background: borderColor }} />
      </a>
    </div>
  )
}

/* Info card */
function InfoCard({ icon, title, body, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="flex flex-col items-center text-center gap-3 p-5 rounded-xl"
      style={{ background: '#E8EAC0', border: '1px solid #6B6B3630' }}
    >
      {/* icon */}
      <div className="text-4xl" style={{ lineHeight: 1 }}>{icon}</div>
      <p style={{ fontFamily: 'Aboreto, cursive', fontSize: '22px', color: '#6B6B36' }}>
        {title}
      </p>
      <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '12px', color: '#4A4A20', lineHeight: '1.5', maxWidth: '220px' }}>
        {body}
      </p>
    </motion.div>
  )
}

const CARDS = [
  {
    icon: '📷',
    title: 'Hashtag',
    body: 'While posting photos on social media please use the hashtag — #HarshHitTheJackpot',
  },
  {
    icon: '☀️',
    title: 'Weather',
    body: 'It will be warm in June. Please dress comfortably. Stay hydrated and enjoy!',
  },
  {
    icon: '🚗',
    title: 'Parking',
    body: 'Valet parking for all our guests will be available at Solitare Hotel & Resorts.',
  },
  {
    icon: '📍',
    title: 'Venue',
    body: 'Solitare Hotel & Resorts. Tap "See the route" on any event card to open in Maps.',
  },
]

const reveal = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } }),
}

export default function ThingsToKnow() {
  return (
    <>
      {/* ── Things to know section ── */}
      <section
        className="w-full px-6 py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #D8DAAE, #E8EAC0 50%, #D8DAAE)' }}
      >
        {/* Horse/elephant silhouette breaker */}
        <div className="flex justify-center mb-10 opacity-30">
          <svg width="280" height="100" viewBox="0 0 280 100" fill="none">
            {/* simple elephant silhouette */}
            <ellipse cx="100" cy="60" rx="55" ry="35" fill="#6B6B36"/>
            <ellipse cx="60" cy="40" rx="28" ry="24" fill="#6B6B36"/>
            <path d="M40 56 Q20 60 18 80 Q18 90 24 88 Q28 80 32 74" fill="#6B6B36"/>
            {/* legs */}
            <rect x="60" y="88" width="12" height="12" rx="2" fill="#6B6B36"/>
            <rect x="78" y="88" width="12" height="12" rx="2" fill="#6B6B36"/>
            <rect x="110" y="88" width="12" height="12" rx="2" fill="#6B6B36"/>
            <rect x="128" y="88" width="12" height="12" rx="2" fill="#6B6B36"/>
            {/* ear */}
            <ellipse cx="44" cy="44" rx="14" ry="18" fill="#5A5A28"/>
            {/* eye */}
            <circle cx="52" cy="36" r="3" fill="#D8DAAE"/>
            {/* tusk */}
            <path d="M54 50 Q38 42 36 34" stroke="#D8DAAE" strokeWidth="2" fill="none"/>
            {/* rider */}
            <ellipse cx="100" cy="26" rx="10" ry="12" fill="#6B6B36"/>
            <rect x="70" y="30" width="60" height="8" rx="4" fill="#5A5A28"/>
          </svg>
        </div>

        <div className="max-w-lg mx-auto text-center">
          <motion.p
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: 'Aboreto, cursive', fontSize: 'clamp(32px,8vw,60px)', color: '#6B6B36', lineHeight: 1.2 }}
          >
            Things to know
          </motion.p>

          <motion.p
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
            className="mt-4 mb-10"
            style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '15px', color: '#4A4A20', lineHeight: 1.6, maxWidth: '360px', margin: '12px auto 40px' }}
          >
            To help you feel at ease and enjoy every moment of the celebrations,
            we've gathered a few thoughtful details we'd love for you to know before the big day.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {CARDS.map((c, i) => (
              <InfoCard key={c.title} {...c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <SpinCTA
        href={INSTAGRAM}
        label={'Follow\nthe action'}
        sub="Click to open our Instagram page"
        bg="#D8DAAE"
        textColor="#6B6B36"
        borderColor="#6B6B36"
      />
    </>
  )
}
