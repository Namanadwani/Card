import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

function pad(n) { return String(n).padStart(2, '0') }

export default function Footer() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer
      className="w-full text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0A0400, #1B0A02 40%, #0A0400)' }}
    >
      {/* Decorative floral mandala bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,169,81,0.07) 0%, transparent 70%)' }}
      />

      {/* Decorative arch / garland */}
      <div className="relative flex justify-center pt-12 pb-4 opacity-30">
        <svg width="280" height="60" viewBox="0 0 280 60" fill="none">
          <path d="M10 58 Q70 10 140 8 Q210 6 270 58" stroke="#F3ECBA" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
          {[20,60,100,140,180,220,260].map(x => (
            <circle key={x} cx={x} cy={58 - Math.sin((x/280)*Math.PI)*50} r="3" fill="#F3ECBA" opacity="0.6"/>
          ))}
        </svg>
      </div>

      <div className="relative z-10 px-6 pb-14 max-w-md mx-auto">

        {/* The countdown begins */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '28px', color: '#E79300', lineHeight: 1.1 }}
        >
          The countdown begins
        </motion.p>

        {/* Live timer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 tabular-nums"
          style={{
            fontFamily: 'Cormorant Upright, serif',
            fontWeight: 500,
            fontSize: 'clamp(28px, 8vw, 42px)',
            color: '#E79300',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}
        >
          {pad(time.days)}:{pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
        </motion.p>
        <p
          className="mt-1 text-xs tracking-widest opacity-50"
          style={{ fontFamily: 'Yaldevi, sans-serif', color: '#E79300' }}
        >
          DAYS · HRS · MINS · SECS
        </p>

        {/* Divider */}
        <div className="w-24 h-px mx-auto my-6" style={{ background: 'linear-gradient(90deg,transparent,#F3ECBA50,transparent)' }} />

        {/* Family message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '15px', color: '#E79300', lineHeight: 1.6 }}
        >
          Our families are excited that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives.
        </motion.p>

        {/* Divider */}
        <div className="w-24 h-px mx-auto my-6" style={{ background: 'linear-gradient(90deg,transparent,#F3ECBA50,transparent)' }} />

        {/* Hashtag */}
        <p style={{ fontFamily: 'Aboreto, cursive', fontSize: '14px', color: '#F3ECBA', opacity: 0.6 }}>
          #HarshHitTheJackpot
        </p>

        {/* Copyright */}
        <p className="mt-4 text-xs" style={{ fontFamily: 'Cormorant Upright, serif', color: '#F3ECBA', opacity: 0.35 }}>
          © Harshit &amp; Neha 2026
        </p>
      </div>
    </footer>
  )
}
