import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WaxSeal from './WaxSeal'

export default function Landing({ onReveal }) {
  const [tapped, setTapped]     = useState(false)
  const [opening, setOpening]   = useState(false)

  const handleTap = () => {
    if (tapped) return
    setTapped(true)
    setTimeout(() => setOpening(true), 500)
    setTimeout(() => onReveal(), 2000)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.7 } }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose via-cream to-blush" />

      {/* Gold corner brackets */}
      <div className="absolute top-5 left-5 w-14 h-14 border-t-2 border-l-2 border-gold/50" />
      <div className="absolute top-5 right-5 w-14 h-14 border-t-2 border-r-2 border-gold/50" />
      <div className="absolute bottom-5 left-5 w-14 h-14 border-b-2 border-l-2 border-gold/50" />
      <div className="absolute bottom-5 right-5 w-14 h-14 border-b-2 border-r-2 border-gold/50" />

      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/40"
          style={{ left: `${18 + i * 13}%`, top: `${22 + (i % 2) * 40}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.6, 1] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="relative z-10 mb-8 font-serif text-maroon/50 text-xs tracking-[0.55em] uppercase"
      >
        Wedding Invitation
      </motion.p>

      {/* ── ENVELOPE ── */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9, type: 'spring', stiffness: 90 }}
        className="relative z-10"
        style={{ perspective: 1000 }}
      >
        <div className="relative w-80 h-52 md:w-96 md:h-60">

          {/* Envelope body */}
          <motion.div
            className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
            animate={opening ? { y: 14, scale: 0.96 } : {}}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            {/* Rose paper */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-dark via-rose to-blush" />
            <div className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20L20 0L40 20L20 40Z' fill='%23C8A951' fill-opacity='0.15'/%3E%3C/svg%3E\")" }}
            />
            {/* Gold inner border */}
            <div className="absolute inset-3 border border-gold/30 rounded-md" />

            {/* Inner card text */}
            <motion.div
              className="absolute inset-x-6 top-8 bottom-5 flex flex-col items-center justify-center
                         bg-white/85 rounded-md border border-gold/10"
              animate={opening ? { y: -110, opacity: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <p className="font-script text-maroon/40 text-base">You are invited to</p>
              <p className="font-script text-maroon text-2xl mt-1">Harshit &amp; Neha's</p>
              <p className="font-serif text-gold-dark text-[11px] tracking-[0.35em] uppercase mt-2">
                Wedding Celebration
              </p>
              <p className="font-sans text-maroon/30 text-[10px] mt-2">22nd June 2026</p>
            </motion.div>
          </motion.div>

          {/* Envelope flap */}
          <motion.div
            className="absolute -top-1 left-0 right-0 h-[52%] z-20 origin-top"
            animate={opening ? { rotateX: 175, opacity: 0 } : {}}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg viewBox="0 0 384 120" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="flap" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C8A070" />
                  <stop offset="100%" stopColor="#E8C4B8" />
                </linearGradient>
              </defs>
              <path d="M0,0 L192,105 L384,0 Z" fill="url(#flap)" stroke="#C8A951" strokeWidth="0.6" strokeOpacity="0.4" />
              <path d="M36,4 L192,86 L348,4" fill="none" stroke="#C8A951" strokeWidth="0.4" strokeOpacity="0.25" />
            </svg>
          </motion.div>

          {/* Wax seal over flap seam */}
          <AnimatePresence>
            {!tapped && (
              <motion.div
                className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                exit={{ scale: [1, 1.25, 0], rotate: [0, 15, -200], opacity: [1, 1, 0], transition: { duration: 0.55 } }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleTap}
              >
                <WaxSeal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Tap prompt */}
      <AnimatePresence>
        {!tapped && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.4 }}
            className="relative z-10 mt-8 flex flex-col items-center gap-2"
          >
            <motion.p
              className="font-serif text-maroon/55 text-sm tracking-widest"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              Tap the seal to open
            </motion.p>
            <motion.span
              className="text-gold/50 text-lg"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening feedback */}
      <AnimatePresence>
        {tapped && !opening && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative z-10 mt-8 font-script text-maroon text-xl"
          >
            Opening…
          </motion.p>
        )}
      </AnimatePresence>

      {/* Bottom hashtag */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 2 }}
        className="absolute bottom-7 z-10 font-sans text-[10px] text-maroon/40 tracking-widest"
      >
        #HarshHitTheJackpot
      </motion.p>
    </motion.div>
  )
}
