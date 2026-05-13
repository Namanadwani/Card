import { motion } from 'framer-motion'

const MAP_URL = 'https://maps.app.goo.gl/mgomhZttvTdjHjrj8'

/* ── Spinning CTA circle button ── */
function SpinCTA({ href, label, sub, bg = '#1B0A02', textColor = '#DCDDA6', borderColor = '#DCDDA6' }) {
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

/* ── Flower SVG decoration ── */
function FlowerDecor({ flip = false }) {
  return (
    <svg
      width="90" height="96"
      viewBox="0 0 90 96"
      fill="none"
      style={{ transform: flip ? 'scaleX(-1)' : 'none', opacity: 0.9 }}
    >
      <ellipse cx="28" cy="48" rx="26" ry="12" fill="#4CAF50" opacity="0.7" transform="rotate(-30 28 48)" />
      <ellipse cx="28" cy="48" rx="26" ry="12" fill="#66BB6A" opacity="0.5" transform="rotate(10 28 48)" />
      <ellipse cx="22" cy="30" rx="18" ry="8" fill="#388E3C" opacity="0.7" transform="rotate(-60 22 30)" />
      <circle cx="38" cy="58" r="12" fill="#E91E63" opacity="0.85" />
      <circle cx="38" cy="58" r="8"  fill="#F06292" opacity="0.7" />
      <circle cx="38" cy="58" r="4"  fill="#FCE4EC" opacity="0.8" />
      <circle cx="52" cy="42" r="9"  fill="#C2185B" opacity="0.7" />
      <circle cx="52" cy="42" r="5"  fill="#E91E63" opacity="0.6" />
      <circle cx="24" cy="68" r="7"  fill="#AD1457" opacity="0.6" />
    </svg>
  )
}

/* ── Cane / bamboo border card — NO venue inside, just title/date/time ── */
function EventCard({ title, subtitle, date, time, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative flex-shrink-0 flex flex-col items-center text-center"
      style={{ width: 260 }}
    >
      <div className="relative w-full" style={{ paddingBottom: '115%' }}>

        {/* Bamboo border SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 260 300"
          fill="none"
          preserveAspectRatio="none"
        >
          {[0,1,2,3,4,5,6,7].map(i => (
            <rect
              key={i}
              x={4 + i * 0.3} y={4 + i * 0.3}
              width={252 - i * 0.6} height={292 - i * 0.6}
              rx="8" fill="none"
              stroke={i % 2 === 0 ? '#8B6914' : '#A07820'}
              strokeWidth={i === 0 ? 2 : 0.5}
              opacity={1 - i * 0.1}
            />
          ))}
          {[55,110,165,220].map(y => (
            <g key={y}>
              <ellipse cx="10"  cy={y} rx="4" ry="7" fill="#8B6914" opacity="0.5" />
              <ellipse cx="250" cy={y} rx="4" ry="7" fill="#8B6914" opacity="0.5" />
            </g>
          ))}
          {[65,130,195].map(x => (
            <g key={x}>
              <ellipse cx={x} cy="10"  rx="7" ry="4" fill="#8B6914" opacity="0.5" />
              <ellipse cx={x} cy="290" rx="7" ry="4" fill="#8B6914" opacity="0.5" />
            </g>
          ))}
          {[[8,8],[252,8],[8,292],[252,292]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="6" fill="#6B4F10" opacity="0.7" />
          ))}
        </svg>

        {/* Flower decorations */}
        <div className="absolute -top-6 -left-4 z-10"><FlowerDecor /></div>
        <div className="absolute top-1/3 -right-8 z-10"><FlowerDecor flip /></div>

        {/* Card content — NO venue */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10">
          <p style={{ fontFamily: 'Aboreto, cursive', fontSize: '26px', lineHeight: 1.5, color: '#45A086' }}>
            {title}
          </p>
          {subtitle && (
            <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '13px', color: '#45A086', opacity: 0.75, marginTop: 2 }}>
              {subtitle}
            </p>
          )}
          <div className="w-14 h-px my-3" style={{ background: 'linear-gradient(90deg,transparent,#45A08660,transparent)' }} />
          <p style={{ fontFamily: 'Cormorant, serif', fontSize: '14px', color: '#45A086', lineHeight: 1.4 }}>
            {date}
          </p>
          <p style={{ fontFamily: 'Cormorant, serif', fontSize: '15px', color: '#45A086', lineHeight: 1.4, fontWeight: 600, marginTop: 4 }}>
            {time}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const EVENTS = [
  { title: 'Carnival',   subtitle: 'Haldi Ceremony',           date: 'Sunday, 21st June 2026',  time: '1:00 PM Onwards'  },
  { title: 'Sangeet',    subtitle: 'DJ Night',                  date: 'Sunday, 21st June 2026',  time: '8:00 PM Onwards'  },
  { title: 'Dikh',       subtitle: 'The Auspicious Beginning',  date: 'Monday, 22nd June 2026',  time: '12:30 PM'          },
  { title: 'Barat',      subtitle: 'The Grand Arrival',         date: 'Monday, 22nd June 2026',  time: '1:00 PM'           },
  { title: 'Phere',      subtitle: 'The Sacred Vows',           date: 'Monday, 22nd June 2026',  time: '3:00 PM'           },
  { title: 'Reception',  subtitle: 'An Evening of Celebration', date: 'Monday, 22nd June 2026',  time: '9:00 PM Onwards'  },
]

export default function CeremonyCards() {
  return (
    <>
      {/* ── Event cards horizontal scroll ── */}
      <section
        className="w-full py-12 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #100600, #1B0A02)' }}
      >
        <div
          className="flex gap-6 px-8 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EVENTS.map((ev, i) => (
            <EventCard key={ev.title} {...ev} index={i} />
          ))}
        </div>
        <p
          className="text-center mt-4 text-xs tracking-widest uppercase opacity-40"
          style={{ fontFamily: 'Yaldevi, sans-serif', color: '#F3ECBA' }}
        >
          ← swipe to see all events →
        </p>
      </section>

      {/* ── Single venue block after all cards ── */}
      <section
        className="w-full px-6 py-14 text-center"
        style={{ background: '#100600', borderTop: '1px solid #F3ECBA15', borderBottom: '1px solid #F3ECBA15' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-sm mx-auto"
        >
          {/* Location icon */}
          <div className="flex justify-center mb-4">
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
              <path
                d="M16 2C9.37 2 4 7.37 4 14c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z"
                fill="#DCDDA6" opacity="0.8"
              />
              <circle cx="16" cy="14" r="5" fill="#1B0A02"/>
            </svg>
          </div>

          <p
            style={{ fontFamily: 'Aboreto, cursive', fontSize: '28px', color: '#DCDDA6', lineHeight: 1.2 }}
          >
            All events at
          </p>

          <p
            className="mt-3"
            style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '26px', color: '#F3ECBA', letterSpacing: '-0.02em', lineHeight: 1.3 }}
          >
            Solitare Hotel &amp; Resorts
          </p>

          {/* Decorative gold line */}
          <div className="w-16 h-px mx-auto my-4" style={{ background: 'linear-gradient(90deg,transparent,#DCDDA6,transparent)' }} />

          <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '14px', color: '#DCDDA6', opacity: 0.7 }}>
            Same venue for all six events
          </p>
        </motion.div>
      </section>

      {/* ── CTA: See the route ── */}
      <SpinCTA
        href={MAP_URL}
        label={'See the\nroute'}
        sub="Click to open in Google Maps"
        bg="#1B0A02"
        textColor="#DCDDA6"
        borderColor="#DCDDA6"
      />
    </>
  )
}
