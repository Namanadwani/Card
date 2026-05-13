import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-14 px-6 bg-gradient-to-b from-cream to-rose/30 text-center relative overflow-hidden">
      {/* Background ornament */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 300 300" className="w-60 h-60">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#C8A951" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="110" fill="none" stroke="#C8A951" strokeWidth="0.3" />
          <circle cx="150" cy="150" r="80" fill="none" stroke="#C8A951" strokeWidth="0.5" />
          {[...Array(8)].map((_, i) => (
            <line key={i} x1="150" y1="10" x2="150" y2="290" stroke="#C8A951" strokeWidth="0.3" transform={`rotate(${i * 45} 150 150)`} />
          ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
        className="relative z-10"
      >
        <p className="font-script text-3xl text-maroon mb-2">Harshit & Neha</p>
        <p className="font-serif text-xs text-maroon/40 tracking-[0.3em] uppercase font-light">
          June 21–22, 2025
        </p>

        <div className="mt-6 text-gold/30 text-xs">─── ✦ ───</div>

        <motion.p
          className="mt-4 font-serif text-sm text-gold-dark/60 tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          #HarshHitTheJackpot
        </motion.p>

        <p className="mt-6 text-[10px] text-maroon/20 font-sans">
          Made with ♥ for our special day
        </p>
      </motion.div>
    </footer>
  )
}
