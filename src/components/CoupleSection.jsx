import { motion } from 'framer-motion'

export default function CoupleSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-cream to-blush overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <p className="font-serif text-maroon/60 text-xs tracking-[0.4em] uppercase mb-2">
          Two Souls, One Journey
        </p>
        <h2 className="font-script text-4xl text-maroon mb-10">
          Our Love Story
        </h2>

        {/* Couple Illustration Placeholders */}
        <div className="flex justify-center items-center gap-6 mb-10">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold/20 to-cream-dark border-2 border-gold/40 flex items-center justify-center shadow-lg overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                {/* Male illustration */}
                <circle cx="50" cy="32" r="16" fill="#D4A574" />
                <path d="M50,48 C35,48 25,58 25,75 L25,95 L75,95 L75,75 C75,58 65,48 50,48 Z" fill="#2C1810" />
                <path d="M35,30 C35,18 42,12 50,12 C58,12 65,18 65,30" fill="#1a0f09" />
                {/* Turban/Sehra detail */}
                <path d="M33,28 C33,15 40,8 50,8 C60,8 67,15 67,28" fill="#C8A951" stroke="#8B6914" strokeWidth="0.5" />
                <circle cx="50" cy="15" r="3" fill="#800020" />
              </svg>
            </div>
            <h3 className="mt-3 font-serif text-lg text-maroon">Naman</h3>
            <p className="text-xs text-maroon/50 font-sans">The Groom</p>
          </motion.div>

          {/* Heart connector */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="text-maroon text-2xl"
          >
            ♥
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-maroon/10 to-blush border-2 border-gold/40 flex items-center justify-center shadow-lg overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                {/* Female illustration */}
                <circle cx="50" cy="32" r="16" fill="#E8C4A0" />
                <path d="M50,48 C35,48 25,58 25,75 L25,95 L75,95 L75,75 C75,58 65,48 50,48 Z" fill="#800020" />
                {/* Hair */}
                <path d="M32,30 C32,16 39,10 50,10 C61,10 68,16 68,30 L68,35 C68,35 62,32 50,34 C38,36 32,35 32,35 Z" fill="#1a0f09" />
                {/* Dupatta/veil */}
                <path d="M30,28 C28,20 35,10 50,10 C65,10 72,20 70,28" fill="#C8A951" opacity="0.6" />
                {/* Bindi */}
                <circle cx="50" cy="24" r="1.5" fill="#FF0000" />
                {/* Maang tikka */}
                <path d="M50,10 L50,22" stroke="#C8A951" strokeWidth="1" />
                <circle cx="50" cy="22" r="2" fill="#C8A951" />
              </svg>
            </div>
            <h3 className="mt-3 font-serif text-lg text-maroon">Sonia</h3>
            <p className="text-xs text-maroon/50 font-sans">The Bride</p>
          </motion.div>
        </div>

        {/* Love Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30" />
          
          {[
            { year: '2019', text: 'First Met', icon: '✨' },
            { year: '2021', text: 'Started Dating', icon: '💕' },
            { year: '2024', text: 'The Proposal', icon: '💍' },
            { year: '2025', text: 'Forever Begins', icon: '🎊' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex items-center mb-6 ${i % 2 === 0 ? 'justify-end pr-[52%]' : 'justify-start pl-[52%]'}`}
            >
              <div className={`bg-white rounded-lg p-3 shadow-sm border border-gold/20 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-lg">{item.icon}</span>
                <p className="font-serif text-maroon text-sm font-semibold">{item.year}</p>
                <p className="text-xs text-maroon/60">{item.text}</p>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-white shadow" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
