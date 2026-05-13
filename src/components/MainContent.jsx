import { motion } from 'framer-motion'
import { useState } from 'react'
import Countdown from './Countdown'
import ScratchCards from './ScratchCard'
import CoupleSection from './CoupleSection'
import CeremonyCards from './CeremonyCards'
import RSVPForm from './RSVPForm'
import { AmbientPetals, ConfettiExplosion } from './GoldPetals'
import Footer from './Footer'

export default function MainContent() {
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-cream relative"
    >
      {/* Ambient falling gold petals */}
      <AmbientPetals />

      {/* Confetti explosion when scratch cards revealed */}
      {showConfetti && <ConfettiExplosion />}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800020'%3E%3Cpath d='M40 0L60 20L40 40L20 20z' fill-opacity='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <svg viewBox="0 0 200 30" className="w-48 h-8 opacity-40">
            <path d="M0,15 Q25,5 50,15 Q75,25 100,15 Q125,5 150,15 Q175,25 200,15" fill="none" stroke="#C8A951" strokeWidth="0.5" />
            <circle cx="100" cy="15" r="3" fill="#C8A951" opacity="0.6" />
            <circle cx="70" cy="15" r="1.5" fill="#C8A951" opacity="0.4" />
            <circle cx="130" cy="15" r="1.5" fill="#C8A951" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', bounce: 0.3 }}
          className="font-serif text-maroon/40 text-xs tracking-[0.5em] uppercase mb-3 font-light"
        >
          Together with their families
        </motion.p>

        {/* Family names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-6 text-center space-y-0.5"
        >
          <p className="font-serif text-maroon/35 text-[10px] tracking-wider font-light">
            Mr. Sushil Adwani & Mrs. Komal Adwani
          </p>
          <p className="font-serif text-maroon/35 text-[10px] tracking-wider font-light">
            Mr. Satish Varyani & Mrs. Sunita Varyani
          </p>
        </motion.div>

        {/* Groom name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="font-script text-6xl md:text-8xl text-maroon text-center leading-tight"
        >
          Harshit
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
          className="my-2"
        >
          <span className="font-script text-gold text-4xl text-shadow-gold">&</span>
        </motion.div>

        {/* Bride name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="font-script text-6xl md:text-8xl text-maroon text-center leading-tight"
        >
          Neha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-6 font-serif text-gold-dark text-sm tracking-[0.3em] uppercase font-light"
        >
          Are Getting Married
        </motion.p>

        {/* Hashtag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-3 font-sans text-maroon/25 text-xs tracking-wider"
        >
          #HarshHitTheJackpot
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.2 }}
          className="mt-8"
        >
          <svg viewBox="0 0 200 30" className="w-48 h-8">
            <path d="M0,15 Q25,25 50,15 Q75,5 100,15 Q125,25 150,15 Q175,5 200,15" fill="none" stroke="#C8A951" strokeWidth="0.5" />
            <circle cx="100" cy="15" r="3" fill="#C8A951" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-9 border-2 border-gold/30 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1 bg-gold/60 rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Countdown */}
      <Countdown />

      {/* Scratch Cards */}
      <ScratchCards onAllRevealed={() => setShowConfetti(true)} />

      {/* Couple Section & Timeline */}
      <CoupleSection />

      {/* Ceremony Cards */}
      <CeremonyCards />

      {/* RSVP Form */}
      <RSVPForm />

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}
