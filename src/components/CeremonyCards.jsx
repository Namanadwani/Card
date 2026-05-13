import { motion } from 'framer-motion'

const MAP_URL = 'https://maps.app.goo.gl/mgomhZttvTdjHjrj8'

/* ── Spinning CTA circle button (matches City template exactly) ── */
function SpinCTA({ href, label, sub, bg = '#1B0A02', textColor = '#DCDDA6', borderColor = '#DCDDA6' }) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 px-6 text-center" style={{ background: bg }}>
      <p style={{ fontFamily: 'Aboreto, cursive', fontSize: 'clamp(36px,10vw,70px)', color: textColor, lineHeight: 1.15 }}>
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
        {/* spinning dashed ring */}
        <svg
          width="90" height="90"
          className="absolute inset-0 spin-border"
          viewBox="0 0 90 90"
        >
          <circle
            cx="45" cy="45" r="42"
            fill="none"
            stroke={borderColor}
            strokeWidth="2"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />
        </svg>
        {/* inner solid ring */}
        <svg width="90" height="90" className="absolute inset-0" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="34" fill="none" stroke={borderColor} strokeWidth="9" opacity="0.9" />
        </svg>
        {/* center dot */}
        <div
          className="relative z-10 w-3 h-3 rounded-full"
          style={{ background: borderColor }}
        />
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
      <circle cx="38" cy="58" r="8" fill="#F06292" opacity="0.7" />
      <circle cx="38" cy="58" r="4" fill="#FCE4EC" opacity="0.8" />
      <circle cx="52" cy="42" r="9" fill="#C2185B" opacity="0.7" />
      <circle cx="52" cy="42" r="5" fill="#E91E63" opacity="0.6" />
      <circle cx="24" cy="68" r="7" fill="#AD1457" opacity="0.6" />
    </svg>
  )
}

/* ── Cane / bamboo border card ── */
function EventCard({ title, subtitle, date, time, venue, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="relative flex-shrink-0 flex flex-col items-center text-center"
      style={{ width: 280 }}
    >
      {/* Cane border (SVG drawn) */}
      <div className="relative w-full" style={{ paddingBottom: '120%' }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 280 336"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* outer bamboo border */}
          {[0,1,2,3,4,5,6,7].map(i => (
            <rect
              key={i}
              x={4 + i * 0.3}
              y={4 + i * 0.3}
              width={272 - i * 0.6}
              height={328 - i * 0.6}
              rx="8"
              fill="none"
              stroke={i % 2 === 0 ? '#8B6914' : '#A07820'}
              strokeWidth={i === 0 ? 2 : 0.5}
              opacity={1 - i * 0.1}
            />
          ))}
          {/* bamboo segments vertical left */}
          {[60,120,180,240].map(y => (
            <ellipse key={y} cx="10" cy={y} rx="4" ry="7" fill="#8B6914" opacity="0.5" />
          ))}
          {/* bamboo segments vertical right */}
          {[60,120,180,240].map(y => (
            <ellipse key={y} cx="270" cy={y} rx="4" ry="7" fill="#8B6914" opacity="0.5" />
          ))}
          {/* bamboo segments horizontal top */}
          {[70,140,210].map(x => (
            <ellipse key={x} cx={x} cy="10" rx="7" ry="4" fill="#8B6914" opacity="0.5" />
          ))}
          {/* bamboo segments horizontal bottom */}
          {[70,140,210].map(x => (
            <ellipse key={x} cx={x} cy="326" rx="7" ry="4" fill="#8B6914" opacity="0.5" />
          ))}
          {/* corner knots */}
          {[[8,8],[272,8],[8,328],[272,328]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="6" fill="#6B4F10" opacity="0.7" />
          ))}
        </svg>

        {/* Flower top-left */}
        <div className="absolute -top-6 -left-4 z-10">
          <FlowerDecor />
        </div>

        {/* Flower right-mid peeking */}
        <div className="absolute top-1/3 -right-8 z-10">
          <FlowerDecor flip />
        </div>

        {/* Card content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10"
          style={{ top: 12, left: 12, right: 12, bottom: 12 }}
        >
          {/* Event name */}
          <p
            style={{
              fontFamily: 'Aboreto, cursive',
              fontSize: '28px',
              lineHeight: 1.5,
              color: '#45A086',
            }}
          >
            {title}
          </p>

          {subtitle && (
            <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '13px', color: '#45A086', opacity: 0.8, marginTop: 2 }}>
              {subtitle}
            </p>
          )}

          <div className="w-16 h-px my-3" style={{ background: 'linear-gradient(90deg,transparent,#45A08660,transparent)' }} />

          {/* Details */}
          <div className="space-y-1.5">
            <p style={{ fontFamily: 'Cormorant, serif', fontSize: '14px', color: '#45A086', lineHeight: 1 }}>
              {date}
            </p>
            <p style={{ fontFamily: 'Cormorant, serif', fontSize: '14px', color: '#45A086', lineHeight: 1 }}>
              {venue}
            </p>
            <p style={{ fontFamily: 'Cormorant, serif', fontSize: '14px', color: '#45A086', lineHeight: 1 }}>
              {time}
            </p>
          </div>

          <div className="mt-4">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Cormorant, serif',
                fontWeight: 700,
                fontSize: '14px',
                color: '#E6D3FF',
                lineHeight: 1,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              See the route
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const EVENTS = [
  {
    title: 'Carnival',
    subtitle: 'Haldi Ceremony',
    date: 'Sunday, 21st June 2026',
    time: '1:00 PM Onwards',
    venue: 'Solitare Hotel & Resorts',
  },
  {
    title: 'Sangeet',
    subtitle: 'DJ Night',
    date: 'Sunday, 21st June 2026',
    time: '8:00 PM Onwards',
    venue: 'Solitare Hotel & Resorts',
  },
  {
    title: 'Dikh',
    subtitle: 'The Auspicious Beginning',
    date: 'Monday, 22nd June 2026',
    time: '12:30 PM',
    venue: 'Solitare Hotel & Resorts',
  },
  {
    title: 'Barat',
    subtitle: 'The Grand Arrival',
    date: 'Monday, 22nd June 2026',
    time: '1:00 PM',
    venue: 'Solitare Hotel & Resorts',
  },
  {
    title: 'Phere',
    subtitle: 'The Sacred Vows',
    date: 'Monday, 22nd June 2026',
    time: '3:00 PM',
    venue: 'Solitare Hotel & Resorts',
  },
  {
    title: 'Reception',
    subtitle: 'An Evening of Celebration',
    date: 'Monday, 22nd June 2026',
    time: '9:00 PM Onwards',
    venue: 'Solitare Hotel & Resorts',
  },
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

        {/* swipe hint */}
        <p
          className="text-center mt-4 text-xs tracking-widest uppercase opacity-40"
          style={{ fontFamily: 'Yaldevi, sans-serif', color: '#F3ECBA' }}
        >
          ← swipe to see all events →
        </p>
      </section>

      {/* ── CTA: See the route ── */}
      <SpinCTA
        href={MAP_URL}
        label={'See the\nroute'}
        sub="Click to open the map"
        bg="#1B0A02"
        textColor="#DCDDA6"
        borderColor="#DCDDA6"
      />
    </>
  )
}
