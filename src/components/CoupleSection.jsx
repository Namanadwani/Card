import { motion } from 'framer-motion'

const fadeUpBounce = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: 'spring',
      bounce: 0.4,
    },
  }),
}

const timelineItems = [
  { year: '2016', text: 'First Met', icon: '✨', desc: 'Two strangers crossed paths' },
  { year: '2018', text: 'Started Dating', icon: '💕', desc: 'Friends became soulmates' },
  { year: '2025', text: 'The Proposal', icon: '💍', desc: 'He asked, she said YES!' },
  { year: '2025', text: 'Forever Begins', icon: '🎊', desc: 'June 21–22 • Wedding Day' },
]

export default function CoupleSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream via-blush/30 to-cream overflow-hidden relative">
      {/* Decorative side elements */}
      <div className="absolute top-20 left-0 w-24 h-24 opacity-[0.04]">
        <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="none" stroke="#C8A951" strokeWidth="1"/><circle cx="50" cy="50" r="38" fill="none" stroke="#C8A951" strokeWidth="0.5"/></svg>
      </div>
      <div className="absolute bottom-20 right-0 w-24 h-24 opacity-[0.04]">
        <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="none" stroke="#C8A951" strokeWidth="1"/><circle cx="50" cy="50" r="38" fill="none" stroke="#C8A951" strokeWidth="0.5"/></svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-md mx-auto text-center"
      >
        <motion.p
          variants={fadeUpBounce}
          custom={0}
          className="font-serif text-maroon/50 text-xs tracking-[0.4em] uppercase mb-2 font-light"
        >
          Our Beautiful Journey
        </motion.p>
        <motion.h2
          variants={fadeUpBounce}
          custom={0.5}
          className="font-script text-5xl text-maroon mb-12"
        >
          Our Love Story
        </motion.h2>

        {/* Couple Illustrations */}
        <div className="flex justify-center items-center gap-8 mb-14">
          {/* Groom */}
          <motion.div
            variants={fadeUpBounce}
            custom={1}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-gold/10 to-cream-dark border-2 border-gold/30 flex items-center justify-center shadow-xl overflow-hidden relative"
            >
              {/* Decorative ring */}
              <div className="absolute inset-1 rounded-full border border-gold/20" />
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                <circle cx="50" cy="32" r="16" fill="#D4A574" />
                <path d="M50,48 C35,48 25,58 25,75 L25,95 L75,95 L75,75 C75,58 65,48 50,48 Z" fill="#2C1810" />
                <path d="M35,30 C35,18 42,12 50,12 C58,12 65,18 65,30" fill="#1a0f09" />
                <path d="M33,28 C33,15 40,8 50,8 C60,8 67,15 67,28" fill="#C8A951" stroke="#8B6914" strokeWidth="0.5" />
                <circle cx="50" cy="15" r="3" fill="#800020" />
              </svg>
            </motion.div>
            <h3 className="mt-4 font-serif text-xl text-maroon font-light">Harshit</h3>
            <p className="text-[10px] text-maroon/40 font-sans mt-1">S/o Mr. Sushil & Mrs. Komal Adwani</p>
          </motion.div>

          {/* Heart connector with pulse */}
          <motion.div
            variants={fadeUpBounce}
            custom={1.5}
            className="flex flex-col items-center"
          >
            <motion.span
              className="text-maroon text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ♥
            </motion.span>
          </motion.div>

          {/* Bride */}
          <motion.div
            variants={fadeUpBounce}
            custom={2}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-maroon/5 to-blush border-2 border-gold/30 flex items-center justify-center shadow-xl overflow-hidden relative"
            >
              <div className="absolute inset-1 rounded-full border border-gold/20" />
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                <circle cx="50" cy="32" r="16" fill="#E8C4A0" />
                <path d="M50,48 C35,48 25,58 25,75 L25,95 L75,95 L75,75 C75,58 65,48 50,48 Z" fill="#800020" />
                <path d="M32,30 C32,16 39,10 50,10 C61,10 68,16 68,30 L68,35 C68,35 62,32 50,34 C38,36 32,35 32,35 Z" fill="#1a0f09" />
                <path d="M30,28 C28,20 35,10 50,10 C65,10 72,20 70,28" fill="#C8A951" opacity="0.6" />
                <circle cx="50" cy="24" r="1.5" fill="#FF0000" />
                <path d="M50,10 L50,22" stroke="#C8A951" strokeWidth="1" />
                <circle cx="50" cy="22" r="2" fill="#C8A951" />
              </svg>
            </motion.div>
            <h3 className="mt-4 font-serif text-xl text-maroon font-light">Neha</h3>
            <p className="text-[10px] text-maroon/40 font-sans mt-1">D/o Mr. Satish & Mrs. Sunita Varyani</p>
          </motion.div>
        </div>

        {/* Animated Timeline */}
        <div className="relative mt-8">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                type: 'spring',
                bounce: 0.35,
              }}
              className={`relative flex items-center mb-8 ${
                i % 2 === 0 ? 'justify-end pr-[54%]' : 'justify-start pl-[54%]'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gold/15 max-w-[160px] ${
                  i % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <span className="text-2xl block mb-1">{item.icon}</span>
                <p className="font-serif text-maroon text-base font-medium">{item.year}</p>
                <p className="font-serif text-gold-dark text-xs font-light">{item.text}</p>
                <p className="text-[9px] text-maroon/40 mt-1 font-sans">{item.desc}</p>
              </motion.div>

              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gold bg-cream shadow-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
