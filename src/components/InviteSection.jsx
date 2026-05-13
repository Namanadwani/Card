import { motion } from 'framer-motion'

/* Ganesh SVG illustration */
function GaneshIcon() {
  return (
    <svg width="80" height="96" viewBox="0 0 80 96" fill="none" className="mx-auto">
      <ellipse cx="40" cy="28" rx="22" ry="24" fill="#F3ECBA" opacity="0.15" stroke="#F3ECBA" strokeWidth="1" />
      <ellipse cx="14" cy="26" rx="9" ry="12" fill="#F3ECBA" opacity="0.10" stroke="#F3ECBA" strokeWidth="0.8"/>
      <ellipse cx="66" cy="26" rx="9" ry="12" fill="#F3ECBA" opacity="0.10" stroke="#F3ECBA" strokeWidth="0.8"/>
      <path d="M40 48 Q28 56 30 68 Q32 74 38 72" stroke="#F3ECBA" strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M52 44 Q62 36 60 28" stroke="#F3ECBA" strokeWidth="1" fill="none" opacity="0.5"/>
      <ellipse cx="40" cy="76" rx="22" ry="18" fill="#F3ECBA" opacity="0.08" stroke="#F3ECBA" strokeWidth="0.8"/>
      <path d="M22 14 Q40 2 58 14" stroke="#F3ECBA" strokeWidth="1" fill="none" opacity="0.5"/>
      <circle cx="40" cy="6" r="3" fill="#F3ECBA" opacity="0.4"/>
      <circle cx="33" cy="24" r="2" fill="#F3ECBA" opacity="0.7"/>
      <circle cx="47" cy="24" r="2" fill="#F3ECBA" opacity="0.7"/>
    </svg>
  )
}

const reveal = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8 } }),
}

function GoldLine() {
  return (
    <div
      className="w-24 h-px mx-auto my-4"
      style={{ background: 'linear-gradient(90deg, transparent, #F3ECBA60, transparent)' }}
    />
  )
}

function GoldDiamond() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C8A95180)' }} />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <rect x="1" y="1" width="8" height="8" rx="1" fill="#C8A951" opacity="0.5" transform="rotate(45 5 5)"/>
      </svg>
      <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #C8A95180, transparent)' }} />
    </div>
  )
}

export default function InviteSection() {
  return (
    <section
      className="w-full text-center px-6 py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0D0500, #1B0A02 40%, #100600)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,96,10,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-lg mx-auto">

        {/* OM */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="text-sm tracking-wider mb-2"
          style={{ fontFamily: 'Gotu, sans-serif', color: '#F3ECBA' }}
        >
          ॐ श्री गणेशाय नम
        </motion.p>

        {/* Ganesh */}
        <motion.div
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          className="my-6"
        >
          <GaneshIcon />
        </motion.div>

        {/* Blessings */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '18px', letterSpacing: '-0.03em', opacity: 0.8 }}
        >
          With the divine blessings of
        </motion.p>
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2.4}
          className="mt-1"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.02em' }}
        >
          Shri Narsinghlal Adwani
        </motion.p>
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2.7}
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.02em' }}
        >
          &amp; Late Shri Nirmaladevi
        </motion.p>

        <GoldLine />

        {/* INVITE big text */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
          className="uppercase leading-none my-4"
          style={{
            fontFamily: 'Cormorant Infant, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(64px, 18vw, 100px)',
            color: '#F3ECBA',
            lineHeight: '0.75',
          }}
        >
          INVITE
        </motion.p>

        {/* Celebratory tagline instead of boring "You to join us" */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4.5}
          className="mt-6"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.04em', lineHeight: 1.4 }}
        >
          Two families. One celebration.<br/>
          Come be a part of our joy.
        </motion.p>

        <GoldLine />

        {/* HARSHIT big */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}
          className="leading-none"
          style={{
            fontFamily: 'Cormorant Upright, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(60px, 16vw, 120px)',
            color: '#F3ECBA',
            lineHeight: '1.1',
          }}
        >
          Harshit
        </motion.p>

        {/* S/o under Harshit */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.2}
          className="mt-1 mb-2"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '16px', opacity: 0.75, letterSpacing: '-0.02em' }}
        >
          S/o Mr. Sushil Adwani &amp; Mrs. Komal Adwani
        </motion.p>

        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.4}
          style={{
            fontFamily: 'Cormorant Upright, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(36px, 10vw, 72px)',
            color: '#F3ECBA',
            lineHeight: '1.2',
          }}
        >
          &amp;
        </motion.p>

        {/* NEHA big */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.7}
          className="leading-none"
          style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(60px, 16vw, 120px)',
            color: '#F3ECBA',
            lineHeight: '0.9',
          }}
        >
          Neha
        </motion.p>

        {/* D/o under Neha */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.9}
          className="mt-1"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '16px', opacity: 0.75, letterSpacing: '-0.02em' }}
        >
          D/o Mr. Satish Varyani &amp; Mrs. Sunita Varyani
        </motion.p>

        <GoldLine />

        {/* Closing line */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6.2}
          className="mt-2"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '18px', letterSpacing: '-0.04em', opacity: 0.8 }}
        >
          On the following events
        </motion.p>

      </div>
    </section>
  )
}
