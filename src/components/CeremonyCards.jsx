import { motion } from 'framer-motion'

const ceremonies = [
  {
    title: 'Carnival',
    subtitle: 'Haldi Ceremony',
    date: 'June 21, 2025 • Sunday',
    time: '1:00 PM onwards',
    venue: 'Solitare Hotel & Resorts',
    icon: '🌼',
    illustration: (
      <svg viewBox="0 0 200 80" className="w-full h-full opacity-10">
        <circle cx="30" cy="40" r="20" fill="#FFD700" />
        <circle cx="80" cy="30" r="15" fill="#FFA500" />
        <circle cx="130" cy="45" r="18" fill="#FFD700" />
        <circle cx="170" cy="35" r="12" fill="#FFA500" />
        <path d="M0,70 Q50,50 100,65 Q150,80 200,60" fill="none" stroke="#C8A951" strokeWidth="1" />
      </svg>
    ),
    gradientFrom: 'from-yellow-50',
    gradientTo: 'to-amber-50/80',
    accentColor: '#FFD700',
  },
  {
    title: 'Sangeet',
    subtitle: 'DJ Night',
    date: 'June 21, 2025 • Sunday',
    time: '8:00 PM onwards',
    venue: 'Solitare Hotel & Resorts',
    icon: '🎵',
    illustration: (
      <svg viewBox="0 0 200 80" className="w-full h-full opacity-10">
        <path d="M20,60 Q30,20 40,50 Q50,10 60,55 Q70,25 80,50" fill="none" stroke="#9B59B6" strokeWidth="2" />
        <path d="M100,60 Q110,20 120,50 Q130,10 140,55 Q150,25 160,50" fill="none" stroke="#8E44AD" strokeWidth="2" />
        <circle cx="40" cy="55" r="8" fill="#9B59B6" opacity="0.3" />
        <circle cx="160" cy="50" r="8" fill="#8E44AD" opacity="0.3" />
        <text x="100" y="30" textAnchor="middle" fill="#9B59B6" fontSize="20" opacity="0.2">♪</text>
      </svg>
    ),
    gradientFrom: 'from-purple-50',
    gradientTo: 'to-pink-50/80',
    accentColor: '#9B59B6',
  },
  {
    title: 'Dikh',
    subtitle: 'The Auspicious Beginning',
    date: 'June 22, 2025 • Monday',
    time: '12:30 PM',
    venue: 'Solitare Hotel & Resorts',
    icon: '🙏',
    illustration: (
      <svg viewBox="0 0 200 80" className="w-full h-full opacity-10">
        <path d="M80,60 L100,20 L120,60 Z" fill="none" stroke="#FF6B35" strokeWidth="1.5" />
        <circle cx="100" cy="35" r="5" fill="#FF6B35" opacity="0.3" />
        <path d="M60,70 Q100,50 140,70" fill="none" stroke="#C8A951" strokeWidth="1" />
        <circle cx="50" cy="50" r="3" fill="#C8A951" opacity="0.4" />
        <circle cx="150" cy="50" r="3" fill="#C8A951" opacity="0.4" />
      </svg>
    ),
    gradientFrom: 'from-orange-50',
    gradientTo: 'to-amber-50/80',
    accentColor: '#FF6B35',
  },
  {
    title: 'Barat',
    subtitle: 'The Grand Arrival',
    date: 'June 22, 2025 • Monday',
    time: '1:00 PM',
    venue: 'Solitare Hotel & Resorts',
    icon: '🐴',
    illustration: (
      <svg viewBox="0 0 200 80" className="w-full h-full opacity-10">
        <path d="M30,60 C50,40 70,50 90,30 C110,10 130,20 150,40 C170,60 180,50 190,55" fill="none" stroke="#E74C3C" strokeWidth="2" />
        <circle cx="60" cy="45" r="6" fill="#E74C3C" opacity="0.2" />
        <circle cx="140" cy="35" r="8" fill="#C0392B" opacity="0.2" />
        <path d="M20,75 L180,75" stroke="#C8A951" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    ),
    gradientFrom: 'from-red-50',
    gradientTo: 'to-rose-50/80',
    accentColor: '#E74C3C',
  },
  {
    title: 'Phere',
    subtitle: 'The Sacred Vows',
    date: 'June 22, 2025 • Monday',
    time: '3:00 PM',
    venue: 'Solitare Hotel & Resorts',
    icon: '🔥',
    illustration: (
      <svg viewBox="0 0 200 80" className="w-full h-full opacity-10">
        <circle cx="100" cy="40" r="25" fill="none" stroke="#E74C3C" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="100" cy="40" r="18" fill="none" stroke="#FF6B35" strokeWidth="1" />
        <circle cx="100" cy="40" r="8" fill="#FF6B35" opacity="0.3" />
        <path d="M95,35 Q100,25 105,35" fill="#E74C3C" opacity="0.3" />
        <path d="M92,38 Q100,20 108,38" fill="#FF6B35" opacity="0.2" />
      </svg>
    ),
    gradientFrom: 'from-red-50',
    gradientTo: 'to-orange-50/80',
    accentColor: '#E74C3C',
  },
  {
    title: 'Reception',
    subtitle: 'An Evening of Celebration',
    date: 'June 22, 2025 • Monday',
    time: '9:00 PM onwards',
    venue: 'Solitare Hotel & Resorts',
    icon: '🥂',
    illustration: (
      <svg viewBox="0 0 200 80" className="w-full h-full opacity-10">
        <path d="M80,70 L80,40 L70,10 L90,10 Z" fill="none" stroke="#C8A951" strokeWidth="1" />
        <path d="M120,70 L120,40 L110,10 L130,10 Z" fill="none" stroke="#C8A951" strokeWidth="1" />
        <circle cx="80" cy="15" r="5" fill="#C8A951" opacity="0.3" />
        <circle cx="120" cy="15" r="5" fill="#C8A951" opacity="0.3" />
        <path d="M85,12 Q100,5 115,12" fill="none" stroke="#E8D48B" strokeWidth="1" />
        <circle cx="40" cy="30" r="2" fill="#C8A951" opacity="0.4" />
        <circle cx="160" cy="25" r="2" fill="#C8A951" opacity="0.4" />
        <circle cx="50" cy="55" r="1.5" fill="#E8D48B" opacity="0.4" />
      </svg>
    ),
    gradientFrom: 'from-amber-50',
    gradientTo: 'to-yellow-50/80',
    accentColor: '#C8A951',
  },
]

const mapLink = 'https://maps.app.goo.gl/mgomhZttvTdjHjrj8'

export default function CeremonyCards() {
  return (
    <section className="py-20 px-6 bg-cream relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="font-serif text-maroon/50 text-xs tracking-[0.4em] uppercase mb-2 font-light"
        >
          Join Us For
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: 'spring', bounce: 0.4 }}
          className="font-script text-5xl text-maroon mb-12"
        >
          Wedding Celebrations
        </motion.h2>

        {/* Day labels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="font-serif text-gold-dark text-sm tracking-wider">Day 1 — Sunday, June 21</p>
        </motion.div>

        <div className="space-y-5">
          {ceremonies.map((ceremony, index) => (
            <div key={ceremony.title}>
              {/* Day 2 label */}
              {index === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="my-8 py-3"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-4" />
                  <p className="font-serif text-gold-dark text-sm tracking-wider">Day 2 — Monday, June 22</p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: (index % 3) * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  bounce: 0.3,
                }}
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(200, 169, 81, 0.12)' }}
                className={`relative bg-gradient-to-br ${ceremony.gradientFrom} ${ceremony.gradientTo} rounded-2xl p-6 border border-white/60 shadow-lg overflow-hidden backdrop-blur-sm`}
              >
                {/* Illustrated background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {ceremony.illustration}
                </div>

                {/* Gold corner accents */}
                <div className="absolute top-0 right-0 w-12 h-12">
                  <svg viewBox="0 0 48 48" className="w-full h-full opacity-20">
                    <path d="M48,0 L48,48 C48,20 28,0 0,0 Z" fill={ceremony.accentColor} />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 rotate-180">
                  <svg viewBox="0 0 48 48" className="w-full h-full opacity-20">
                    <path d="M48,0 L48,48 C48,20 28,0 0,0 Z" fill={ceremony.accentColor} />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-2">{ceremony.icon}</div>
                  <h3 className="font-script text-2xl text-maroon">{ceremony.title}</h3>
                  <p className="font-serif text-maroon/50 text-[11px] tracking-wider uppercase mt-0.5 font-light">
                    {ceremony.subtitle}
                  </p>

                  <div className="mt-4 space-y-1">
                    <p className="font-sans text-sm text-maroon/80 font-light">📅 {ceremony.date}</p>
                    <p className="font-sans text-sm text-maroon/80 font-light">🕐 {ceremony.time}</p>
                    <p className="font-sans text-sm text-maroon/80 font-medium">📍 {ceremony.venue}</p>
                  </div>

                  <motion.a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(200, 169, 81, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-white text-[11px] font-sans tracking-wider uppercase rounded-full shadow-md transition-shadow"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View on Maps
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
