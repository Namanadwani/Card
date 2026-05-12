import { motion } from 'framer-motion'
import { useState } from 'react'
import Countdown from './Countdown'
import ScratchCard from './ScratchCard'
import CoupleSection from './CoupleSection'
import CeremonyCards from './CeremonyCards'
import RSVPForm from './RSVPForm'
import GoldPetals from './GoldPetals'
import Footer from './Footer'

export default function MainContent() {
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-cream"
    >
      {showConfetti && <GoldPetals />}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800020' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold/50 text-2xl mb-4"
        >
          ─── ✦ ───
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-serif text-maroon/60 text-xs tracking-[0.4em] uppercase mb-4"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-script text-5xl md:text-7xl text-maroon text-center leading-tight"
        >
          Naman
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
          className="my-3"
        >
          <span className="font-script text-gold text-3xl">&</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-script text-5xl md:text-7xl text-maroon text-center leading-tight"
        >
          Sonia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 font-serif text-gold-dark text-sm tracking-[0.3em] uppercase"
        >
          Are Getting Married
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-4 text-gold/50 text-lg"
        >
          ─── ✦ ───
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-gold rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <Countdown />

      {/* Scratch Card Section */}
      <ScratchCard onReveal={() => setShowConfetti(true)} />

      {/* Couple Section */}
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
