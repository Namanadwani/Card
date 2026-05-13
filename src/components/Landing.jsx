import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WaxSeal from './WaxSeal'

export default function Landing({ onReveal }) {
  const [sealBroken, setSealBroken] = useState(false)
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  const handleSealTap = () => {
    setSealBroken(true)
    // After seal breaks, open envelope
    setTimeout(() => setEnvelopeOpen(true), 600)
    // After envelope opens, transition to main content
    setTimeout(() => onReveal(), 2200)
  }

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Rose/cream textured background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose via-cream to-blush" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative gold corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-sm" />

      {/* Floating gold particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          style={{ left: `${15 + i * 10}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Top text */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 font-serif text-maroon/50 text-xs tracking-[0.5em] uppercase mb-8"
      >
        Wedding Invitation
      </motion.p>

      {/* ENVELOPE */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
        className="relative z-10"
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-80 h-56 md:w-96 md:h-64">
          {/* Envelope body - textured rose */}
          <motion.div
            className="absolute inset-0 rounded-md shadow-2xl overflow-hidden"
            animate={envelopeOpen ? { y: 20, scale: 0.95 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Rose paper texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-dark via-rose to-blush" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' fill='%23C8A951' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }} />
            
            {/* Gold trim border */}
            <div className="absolute inset-2 border border-gold/30 rounded-sm" />

            {/* Inner card visible */}
            <motion.div
              className="absolute top-8 left-6 right-6 bottom-6 bg-white/90 rounded-sm flex flex-col items-center justify-center border border-gold/10"
              animate={envelopeOpen ? { y: -100, opacity: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="font-script text-maroon/40 text-lg">You're Invited to</p>
              <p className="font-script text-maroon text-2xl mt-1">Harshit & Neha's</p>
              <p className="font-serif text-gold-dark text-xs tracking-[0.3em] uppercase mt-2">Wedding Celebration</p>
            </motion.div>
          </motion.div>

          {/* Envelope flap (top triangle) */}
          <motion.div
            className="absolute -top-1 left-0 right-0 h-32 z-20 origin-top"
            animate={envelopeOpen ? { rotateX: 180, opacity: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg viewBox="0 0 384 128" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4A090" />
                  <stop offset="100%" stopColor="#E8C4B8" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L192,110 L384,0 L384,0 L0,0 Z"
                fill="url(#flapGrad)"
                stroke="#C8A951"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              {/* Gold line detail on flap */}
              <path
                d="M40,5 L192,90 L344,5"
                fill="none"
                stroke="#C8A951"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </svg>
          </motion.div>

          {/* WAX SEAL - positioned at the flap meeting point */}
          <AnimatePresence>
            {!sealBroken && (
              <motion.div
                className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                exit={{ scale: [1, 1.3, 0], rotate: [0, 10, -180], opacity: [1, 1, 0] }}
                transition={{ duration: 0.6 }}
                onClick={handleSealTap}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <WaxSeal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Tap instruction */}
      <AnimatePresence>
        {!sealBroken && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
            className="relative z-10 mt-8 text-center"
          >
            <motion.p
              className="font-serif text-maroon/60 text-sm tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap the seal to open
            </motion.p>
            <motion.div
              className="mt-3 text-gold/50"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening message after seal breaks */}
      <AnimatePresence>
        {sealBroken && !envelopeOpen && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative z-10 mt-6 font-script text-maroon text-xl"
          >
            Opening...
          </motion.p>
        )}
      </AnimatePresence>

      {/* Bottom ornament */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 font-serif text-gold/40 text-xs tracking-[0.5em] z-10"
      >
        #HarshHitTheJackpot
      </motion.p>
    </motion.div>
  )
}
