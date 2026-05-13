import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WEDDING_DATE = new Date('2025-06-22T13:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBox({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring', bounce: 0.4 }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.08, y: -3 }}
        className="w-16 h-20 md:w-20 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gold/15 flex items-center justify-center mb-2 relative overflow-hidden"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="font-serif text-3xl md:text-4xl text-maroon font-light relative z-10"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </motion.div>
      <span className="text-[10px] text-gold-dark tracking-[0.25em] uppercase font-sans font-light">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream via-blush/20 to-cream relative">
      {/* Decorative mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 400 400" className="w-80 h-80">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#C8A951" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#C8A951" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#C8A951" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="200" y1="20" x2="200" y2="380" stroke="#C8A951" strokeWidth="0.3" transform={`rotate(${i * 30} 200 200)`} />
          ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
        className="max-w-md mx-auto text-center relative z-10"
      >
        <p className="font-serif text-maroon/50 text-xs tracking-[0.4em] uppercase mb-2 font-light">
          Counting Down To
        </p>
        <h2 className="font-script text-5xl text-maroon mb-10">
          Our Special Day
        </h2>

        <div className="flex justify-center gap-3 md:gap-5">
          <TimeBox value={time.days} label="Days" index={0} />
          <TimeBox value={time.hours} label="Hours" index={1} />
          <TimeBox value={time.minutes} label="Mins" index={2} />
          <TimeBox value={time.seconds} label="Secs" index={3} />
        </div>

        <motion.div
          className="mt-10"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="font-serif text-gold-dark text-sm font-light tracking-wider">
            June 21–22, 2025
          </p>
          <p className="font-sans text-maroon/30 text-[10px] mt-1">
            Solitare Hotel & Resorts
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
