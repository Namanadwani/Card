import { useState } from 'react'
import { motion } from 'framer-motion'
import Countdown      from './Countdown'
import ScratchCards   from './ScratchCard'
import CoupleSection  from './CoupleSection'
import CeremonyCards  from './CeremonyCards'
import RSVPForm       from './RSVPForm'
import Footer         from './Footer'
import { AmbientPetals, ConfettiExplosion } from './GoldPetals'

export default function MainContent() {
  const [boom, setBoom] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-cream"
    >
      {/* Ambient gold petals floating down */}
      <AmbientPetals />

      {/* Confetti explosion when scratch cards done */}
      {boom && <ConfettiExplosion />}

      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center
                           px-6 py-20 overflow-hidden text-center">

        {/* Subtle diamond pattern bg */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='%23800020' fill-opacity='0.6'/%3E%3C/svg%3E\")" }}
        />

        {/* Top wave ornament */}
        <motion.svg
          viewBox="0 0 220 24" className="w-44 h-5 opacity-35 mb-7"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.35, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <path d="M0,12 Q28,2 55,12 Q82,22 110,12 Q138,2 165,12 Q192,22 220,12"
            fill="none" stroke="#C8A951" strokeWidth="0.7" />
          <circle cx="110" cy="12" r="3.2" fill="#C8A951" opacity="0.7" />
          <circle cx="70"  cy="12" r="1.6" fill="#C8A951" opacity="0.45" />
          <circle cx="150" cy="12" r="1.6" fill="#C8A951" opacity="0.45" />
        </motion.svg>

        {/* Together label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', bounce: 0.3 }}
          className="font-serif text-maroon/40 text-xs tracking-[0.52em] uppercase mb-3"
        >
          Together with their families
        </motion.p>

        {/* Parent names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-7 space-y-0.5"
        >
          <p className="font-sans text-[10px] text-maroon/32 tracking-wider">
            Mr. Sushil Adwani &amp; Mrs. Komal Adwani
          </p>
          <p className="font-sans text-[10px] text-maroon/32 tracking-wider">
            Mr. Satish Varyani &amp; Mrs. Sunita Varyani
          </p>
        </motion.div>

        {/* Groom name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', bounce: 0.32 }}
          className="font-script text-[72px] md:text-8xl text-maroon leading-none"
        >
          Harshit
        </motion.h1>

        {/* Ampersand */}
        <motion.span
          initial={{ opacity: 0, scale: 0, rotate: -160 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.15, type: 'spring', stiffness: 190 }}
          className="font-script text-gold text-4xl my-1 block"
        >
          &amp;
        </motion.span>

        {/* Bride name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, type: 'spring', bounce: 0.32 }}
          className="font-script text-[72px] md:text-8xl text-maroon leading-none"
        >
          Neha
        </motion.h1>

        {/* Are getting married */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="mt-7 font-serif text-gold-dark text-sm tracking-[0.35em] uppercase"
        >
          Are Getting Married
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="mt-2 font-serif text-maroon/45 text-sm tracking-widest"
        >
          22nd June 2026
        </motion.p>

        {/* Hashtag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="mt-2 font-sans text-[10px] text-maroon/25 tracking-wider"
        >
          #HarshHitTheJackpot
        </motion.p>

        {/* Bottom wave ornament */}
        <motion.svg
          viewBox="0 0 220 24" className="w-44 h-5 opacity-35 mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.35, scaleX: 1 }}
          transition={{ delay: 2.2, duration: 0.9 }}
        >
          <path d="M0,12 Q28,22 55,12 Q82,2 110,12 Q138,22 165,12 Q192,2 220,12"
            fill="none" stroke="#C8A951" strokeWidth="0.7" />
          <circle cx="110" cy="12" r="3.2" fill="#C8A951" opacity="0.7" />
        </motion.svg>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-9 border-2 border-gold/30 rounded-full
                          flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1 bg-gold/55 rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          REST OF SECTIONS
          ═══════════════════════════════════════ */}
      <Countdown />
      <ScratchCards onAllRevealed={() => setBoom(true)} />
      <CoupleSection />
      <CeremonyCards />
      <RSVPForm />
      <Footer />
    </motion.div>
  )
}
