import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WEDDING_DATE = new Date('2025-12-15T10:00:00')

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

function TimeBox({ value, label }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md border border-gold/20 flex items-center justify-center mb-2">
        <motion.span
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-serif text-2xl md:text-3xl text-maroon font-bold"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-xs text-gold-dark tracking-[0.2em] uppercase font-sans">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-cream to-blush">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <p className="font-serif text-maroon/60 text-xs tracking-[0.4em] uppercase mb-2">
          Counting Down To
        </p>
        <h2 className="font-script text-4xl text-maroon mb-8">
          Our Special Day
        </h2>

        <div className="flex justify-center gap-3 md:gap-5">
          <TimeBox value={time.days} label="Days" />
          <TimeBox value={time.hours} label="Hours" />
          <TimeBox value={time.minutes} label="Mins" />
          <TimeBox value={time.seconds} label="Secs" />
        </div>

        <motion.p
          className="mt-8 font-serif text-gold-dark text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          December 15, 2025 • Save the Date
        </motion.p>
      </motion.div>
    </section>
  )
}
