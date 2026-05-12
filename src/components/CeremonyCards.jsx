import { motion } from 'framer-motion'

const ceremonies = [
  {
    title: 'Sangeet',
    subtitle: 'Night of Music & Dance',
    date: 'December 13, 2025',
    time: '7:00 PM onwards',
    venue: 'Royal Banquet Hall',
    address: 'MG Road, Delhi',
    icon: '🎵',
    color: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    mapLink: 'https://maps.google.com/?q=Royal+Banquet+Hall+Delhi',
  },
  {
    title: 'Marriage',
    subtitle: 'The Sacred Union',
    date: 'December 15, 2025',
    time: '10:00 AM onwards',
    venue: 'Grand Palace Gardens',
    address: 'Ring Road, Delhi',
    icon: '🔥',
    color: 'from-red-50 to-orange-50',
    borderColor: 'border-red-200',
    mapLink: 'https://maps.google.com/?q=Grand+Palace+Gardens+Delhi',
  },
  {
    title: 'Reception',
    subtitle: 'An Evening of Celebration',
    date: 'December 16, 2025',
    time: '7:00 PM onwards',
    venue: 'The Imperial Ballroom',
    address: 'Connaught Place, Delhi',
    icon: '🥂',
    color: 'from-amber-50 to-yellow-50',
    borderColor: 'border-amber-200',
    mapLink: 'https://maps.google.com/?q=Imperial+Ballroom+Connaught+Place+Delhi',
  },
]

export default function CeremonyCards() {
  return (
    <section className="py-16 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <p className="font-serif text-maroon/60 text-xs tracking-[0.4em] uppercase mb-2">
          Join Us For
        </p>
        <h2 className="font-script text-4xl text-maroon mb-10">
          Wedding Celebrations
        </h2>

        <div className="space-y-6">
          {ceremonies.map((ceremony, index) => (
            <motion.div
              key={ceremony.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(200, 169, 81, 0.15)' }}
              className={`relative bg-gradient-to-br ${ceremony.color} rounded-2xl p-6 border ${ceremony.borderColor} shadow-md overflow-hidden`}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path d="M64,0 C64,35 35,64 0,64 L64,64 Z" fill="#C8A951" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 rotate-180">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path d="M64,0 C64,35 35,64 0,64 L64,64 Z" fill="#C8A951" />
                </svg>
              </div>

              {/* Icon */}
              <div className="text-3xl mb-2">{ceremony.icon}</div>

              {/* Title */}
              <h3 className="font-script text-2xl text-maroon">{ceremony.title}</h3>
              <p className="font-serif text-maroon/50 text-xs tracking-wider uppercase mt-0.5">
                {ceremony.subtitle}
              </p>

              {/* Details */}
              <div className="mt-4 space-y-1.5">
                <p className="font-sans text-sm text-maroon/80">
                  📅 {ceremony.date}
                </p>
                <p className="font-sans text-sm text-maroon/80">
                  🕐 {ceremony.time}
                </p>
                <p className="font-sans text-sm text-maroon/80 font-medium">
                  📍 {ceremony.venue}
                </p>
                <p className="font-sans text-xs text-maroon/50">
                  {ceremony.address}
                </p>
              </div>

              {/* View on Maps button */}
              <motion.a
                href={ceremony.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-gradient-to-r from-gold-dark to-gold text-white text-xs font-sans tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View on Maps
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
