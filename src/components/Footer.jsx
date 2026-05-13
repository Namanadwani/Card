import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-cream to-rose/25 text-center overflow-hidden">
      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
        <svg viewBox="0 0 280 280" className="w-56 h-56">
          <circle cx="140" cy="140" r="130" fill="none" stroke="#C8A951" strokeWidth="0.6" />
          <circle cx="140" cy="140" r="100" fill="none" stroke="#C8A951" strokeWidth="0.4" />
          <circle cx="140" cy="140" r="70"  fill="none" stroke="#C8A951" strokeWidth="0.6" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="140" y1="10" x2="140" y2="270"
              stroke="#C8A951" strokeWidth="0.35"
              transform={`rotate(${i * 45} 140 140)`} />
          ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', bounce: 0.3 }}
        className="relative z-10 space-y-3"
      >
        {/* Names */}
        <p className="font-script text-4xl text-maroon">Harshit &amp; Neha</p>

        {/* Wedding date — single date */}
        <p className="font-serif text-xs text-maroon/40 tracking-[0.35em] uppercase">
          22nd June 2026
        </p>

        {/* Venue */}
        <p className="font-sans text-[10px] text-maroon/30 tracking-wider">
          Solitare Hotel &amp; Resorts
        </p>

        {/* Divider */}
        <div className="pt-4 pb-1 text-gold/28 text-xs">─── ✦ ───</div>

        {/* Hashtag */}
        <motion.p
          className="font-sans text-sm text-gold-dark/55 tracking-widest"
          whileHover={{ scale: 1.06 }}
        >
          #HarshHitTheJackpot
        </motion.p>

        {/* Love note */}
        <p className="font-sans text-[9px] text-maroon/20 pt-2">
          Made with ♥ for our special day
        </p>
      </motion.div>
    </footer>
  )
}
