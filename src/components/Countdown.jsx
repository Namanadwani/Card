import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// ── Target: 22 June 2026, 1:00 PM ──
const WEDDING = new Date('2026-06-22T13:00:00')

function getTimeLeft() {
  const diff = WEDDING - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Box({ value, label, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, type: 'spring', bounce: 0.45 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-[68px] h-20 md:w-20 md:h-24 bg-white rounded-xl shadow-lg
                      border border-gold/15 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <motion.span
          key={value}
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className="relative font-serif text-3xl md:text-4xl text-maroon font-light"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold-dark">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream via-blush/20 to-cream">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
        className="max-w-sm mx-auto text-center"
      >
        {/* Section label */}
        <p className="font-serif text-maroon/45 text-xs tracking-[0.45em] uppercase mb-2">
          Counting Down To
        </p>

        {/* Heading */}
        <h2 className="font-script text-5xl text-maroon mb-10">
          Our Special Day
        </h2>

        {/* Timer boxes */}
        <div className="flex justify-center gap-3 md:gap-5">
          <Box value={time.days}    label="Days"  i={0} />
          <Box value={time.hours}   label="Hours" i={1} />
          <Box value={time.minutes} label="Mins"  i={2} />
          <Box value={time.seconds} label="Secs"  i={3} />
        </div>

        {/* Date line */}
        <motion.div
          className="mt-10 space-y-1"
          animate={{ opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="font-serif text-gold-dark text-sm tracking-wider">
            22nd June 2026
          </p>
          <p className="font-sans text-maroon/30 text-[10px] tracking-wider">
            Solitare Hotel &amp; Resorts
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
