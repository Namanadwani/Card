import { motion } from 'framer-motion'

const TIMELINE = [
  { year: '2016', label: 'First Met',       icon: '✨', note: 'Two strangers, one moment'       },
  { year: '2018', label: 'Started Dating',  icon: '💕', note: 'Friends who became soulmates'    },
  { year: '2025', label: 'The Proposal',    icon: '💍', note: 'He asked — she said YES!'        },
  { year: '2026', label: 'Forever Begins',  icon: '🎊', note: '22nd June 2026 · The Wedding'   },
]

function GrillIllustration({ isBride }) {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
      {/* Head */}
      <circle cx="50" cy="32" r="16" fill={isBride ? '#E8C4A0' : '#D4A574'} />
      {/* Body */}
      <path
        d="M50,48 C35,48 25,58 25,75 L25,95 L75,95 L75,75 C75,58 65,48 50,48 Z"
        fill={isBride ? '#800020' : '#2C1810'}
      />
      {isBride ? (
        <>
          {/* Bride hair */}
          <path d="M32,30 C32,16 39,10 50,10 C61,10 68,16 68,30 L68,35 C62,32 50,34 38,36 Z" fill="#1a0f09" />
          {/* Dupatta */}
          <path d="M30,28 C28,20 35,10 50,10 C65,10 72,20 70,28" fill="#C8A951" opacity="0.6" />
          {/* Bindi */}
          <circle cx="50" cy="24" r="1.5" fill="#FF2244" />
          {/* Maang tikka */}
          <line x1="50" y1="10" x2="50" y2="22" stroke="#C8A951" strokeWidth="1" />
          <circle cx="50" cy="22" r="2" fill="#C8A951" />
        </>
      ) : (
        <>
          {/* Groom hair */}
          <path d="M35,30 C35,18 42,12 50,12 C58,12 65,18 65,30" fill="#1a0f09" />
          {/* Sehra / turban */}
          <path d="M33,28 C33,15 40,8 50,8 C60,8 67,15 67,28" fill="#C8A951" stroke="#8B6914" strokeWidth="0.5" />
          <circle cx="50" cy="15" r="3" fill="#800020" />
        </>
      )}
    </svg>
  )
}

function PersonCard({ name, role, parentLine, isBride }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isBride ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: isBride ? 0.3 : 0.1, type: 'spring', bounce: 0.35 }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.06, rotate: isBride ? -2 : 2 }}
        className={`w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-gold/35
                    flex items-center justify-center shadow-xl overflow-hidden relative
                    ${isBride ? 'bg-gradient-to-br from-maroon/8 to-blush' : 'bg-gradient-to-br from-gold/12 to-cream-dark'}`}
      >
        <div className="absolute inset-1 rounded-full border border-gold/18" />
        <GrillIllustration isBride={isBride} />
      </motion.div>
      <h3 className="mt-4 font-serif text-xl text-maroon font-light">{name}</h3>
      <p className="font-sans text-[10px] text-maroon/45 mt-0.5">{role}</p>
      <p className="font-sans text-[9px] text-maroon/30 mt-1 text-center leading-tight max-w-[130px]">{parentLine}</p>
    </motion.div>
  )
}

export default function CoupleSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream via-blush/25 to-cream overflow-hidden">
      <div className="max-w-md mx-auto text-center">

        {/* ── Heading ── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.35 }}
          className="font-serif text-maroon/45 text-xs tracking-[0.45em] uppercase mb-2"
        >
          Our Beautiful Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: 'spring', bounce: 0.35 }}
          className="font-script text-5xl text-maroon mb-14"
        >
          Our Love Story
        </motion.h2>

        {/* ── Couple Illustrations ── */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <PersonCard
            name="Harshit"
            role="The Groom"
            parentLine="S/o Mr. Sushil Adwani & Mrs. Komal Adwani"
            isBride={false}
          />

          {/* Pulsing heart */}
          <motion.span
            className="text-maroon text-3xl mb-8"
            animate={{ scale: [1, 1.22, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ♥
          </motion.span>

          <PersonCard
            name="Neha"
            role="The Bride"
            parentLine="D/o Mr. Satish Varyani & Mrs. Sunita Varyani"
            isBride={true}
          />
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical spine */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
                       bg-gradient-to-b from-transparent via-gold/40 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -55 : 55, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.15, type: 'spring', bounce: 0.38 }}
                className={`relative flex items-center mb-8
                            ${isLeft ? 'justify-end pr-[54%]' : 'justify-start pl-[54%]'}`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md
                               border border-gold/15 w-[148px]
                               ${isLeft ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-xl block mb-1">{item.icon}</span>
                  <p className="font-serif text-maroon text-base font-medium leading-none">{item.year}</p>
                  <p className="font-serif text-gold-dark text-xs mt-0.5">{item.label}</p>
                  <p className="font-sans text-[9px] text-maroon/38 mt-1 leading-tight">{item.note}</p>
                </motion.div>

                {/* Spine dot */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full
                             bg-cream border-2 border-gold shadow-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.25, type: 'spring', stiffness: 280 }}
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
