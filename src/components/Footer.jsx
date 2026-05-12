import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-cream to-cream-dark text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Mandala decoration */}
        <div className="mb-6">
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto opacity-30">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#C8A951" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#C8A951" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#C8A951" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="5"
                x2="50"
                y2="95"
                stroke="#C8A951"
                strokeWidth="0.3"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
            <circle cx="50" cy="50" r="4" fill="#C8A951" opacity="0.5" />
          </svg>
        </div>

        <p className="font-script text-2xl text-maroon mb-2">
          Harshit & Neha
        </p>
        <p className="font-serif text-xs text-maroon/50 tracking-[0.3em] uppercase">
          June 21–22, 2025
        </p>

        <div className="mt-6 text-gold/40 text-xs">
          ─── ✦ ───
        </div>

        <p className="mt-4 text-xs text-maroon/30 font-sans">
          Made with ♥ for our special day
        </p>

        {/* Hashtag */}
        <motion.p
          className="mt-3 font-serif text-sm text-gold-dark/70"
          whileHover={{ scale: 1.05 }}
        >
          #HarshHitTheJackpot
        </motion.p>
      </motion.div>
    </footer>
  )
}
