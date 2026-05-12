import { motion } from 'framer-motion'
import WaxSeal from './WaxSeal'

export default function Landing({ onReveal }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-cream z-50"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Decorative border */}
      <div className="absolute inset-4 border border-gold/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-6 border border-gold/15 rounded-lg pointer-events-none" />

      {/* Floating ornaments */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-gold/40 text-4xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦
      </motion.div>

      {/* Envelope visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex flex-col items-center"
      >
        {/* Envelope body */}
        <div className="relative w-72 h-48 md:w-80 md:h-52">
          {/* Envelope back */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream-dark to-cream border border-gold/40 rounded-sm shadow-lg" />
          
          {/* Envelope flap (triangle) */}
          <div className="absolute -top-0.5 left-0 right-0 h-24">
            <svg viewBox="0 0 320 96" className="w-full h-full">
              <path
                d="M0,0 L160,80 L320,0 L320,0 L0,0 Z"
                fill="url(#flapGradient)"
                stroke="#C8A951"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              <defs>
                <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F5EDE0" />
                  <stop offset="100%" stopColor="#FDF8F0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Inner card peek */}
          <div className="absolute top-6 left-4 right-4 bottom-4 bg-white/80 border border-gold/20 rounded-sm flex items-center justify-center">
            <p className="font-script text-maroon text-lg opacity-60">Harshit & Neha</p>
          </div>
        </div>

        {/* Wax Seal - centered on envelope */}
        <motion.div
          className="relative -mt-8 z-10"
          animate={{ rotateY: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <WaxSeal />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="font-serif text-maroon/70 text-sm tracking-[0.3em] uppercase mb-2">
          Wedding Invitation
        </p>
        <h1 className="font-script text-gold-dark text-3xl md:text-4xl mb-6">
          Harshit & Neha
        </h1>
      </motion.div>

      {/* Tap to Reveal button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200, 169, 81, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onReveal}
        className="mt-4 px-8 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-serif text-sm tracking-[0.2em] uppercase rounded-full shadow-lg hover:shadow-gold/40 transition-all duration-300 cursor-pointer"
      >
        ✧ Tap to Reveal ✧
      </motion.button>

      {/* Bottom ornament */}
      <motion.div
        className="absolute bottom-8 text-gold/30 text-xs tracking-[0.5em]"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ─── ✦ ───
      </motion.div>
    </motion.div>
  )
}
