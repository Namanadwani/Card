import { motion } from 'framer-motion'

/* Ganesh SVG illustration */
function GaneshIcon() {
  return (
    <svg width="80" height="96" viewBox="0 0 80 96" fill="none" className="mx-auto">
      {/* head */}
      <ellipse cx="40" cy="28" rx="22" ry="24" fill="#F3ECBA" opacity="0.15" stroke="#F3ECBA" strokeWidth="1" />
      {/* ears */}
      <ellipse cx="14" cy="26" rx="9" ry="12" fill="#F3ECBA" opacity="0.10" stroke="#F3ECBA" strokeWidth="0.8"/>
      <ellipse cx="66" cy="26" rx="9" ry="12" fill="#F3ECBA" opacity="0.10" stroke="#F3ECBA" strokeWidth="0.8"/>
      {/* trunk */}
      <path d="M40 48 Q28 56 30 68 Q32 74 38 72" stroke="#F3ECBA" strokeWidth="1.2" fill="none" opacity="0.6"/>
      {/* tusk */}
      <path d="M52 44 Q62 36 60 28" stroke="#F3ECBA" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* body */}
      <ellipse cx="40" cy="76" rx="22" ry="18" fill="#F3ECBA" opacity="0.08" stroke="#F3ECBA" strokeWidth="0.8"/>
      {/* crown */}
      <path d="M22 14 Q40 2 58 14" stroke="#F3ECBA" strokeWidth="1" fill="none" opacity="0.5"/>
      <circle cx="40" cy="6" r="3" fill="#F3ECBA" opacity="0.4"/>
      {/* eyes */}
      <circle cx="33" cy="24" r="2" fill="#F3ECBA" opacity="0.7"/>
      <circle cx="47" cy="24" r="2" fill="#F3ECBA" opacity="0.7"/>
    </svg>
  )
}

const reveal = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8 },
  }),
}

function GoldLine() {
  return (
    <div className="w-24 h-px mx-auto my-4" style={{ background: 'linear-gradient(90deg, transparent, #F3ECBA60, transparent)' }} />
  )
}

export default function InviteSection() {
  return (
    <section
      className="w-full text-center px-6 py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0D0500, #1B0A02 40%, #100600)',
      }}
    >
      {/* Subtle top glow */}
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

        {/* Ganesh illustration */}
        <motion.div
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          className="my-6"
        >
          <GaneshIcon />
        </motion.div>

        {/* Blessings of */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          className="text-base leading-snug"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.03em' }}
        >
          With the heavenly blessings of
        </motion.p>
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2.5}
          className="text-base leading-snug mt-1"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.03em' }}
        >
          Late Shri Laxmi Devi &amp; Late Shri Ram Adwani
        </motion.p>

        <GoldLine />

        {/* Divider dashes */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
          className="mb-1"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA60', fontSize: '24px', lineHeight: '1.5' }}
        >
          ——
        </motion.p>

        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3.2}
          className="text-base leading-snug"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.03em' }}
        >
          Mrs. Komal &amp; Mr. Sushil Adwani
        </motion.p>
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3.5}
          className="text-base leading-snug mt-1"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.03em' }}
        >
          Mrs. Sunita &amp; Mr. Satish Varyani
        </motion.p>

        <GoldLine />

        {/* INVITE big text */}
        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
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

        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4.5}
          className="mt-6 text-lg leading-tight"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '20px', letterSpacing: '-0.05em' }}
        >
          You to join us in the wedding celebrations of
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

        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.3}
          style={{
            fontFamily: 'Cormorant Upright, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(48px, 14vw, 100px)',
            color: '#F3ECBA',
            lineHeight: '1.1',
          }}
        >
          &amp;
        </motion.p>

        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5.6}
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

        <GoldLine />

        {/* Bride family */}
        <motion.div
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6}
          className="mt-4 space-y-1"
        >
          <p style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '18px', letterSpacing: '-0.05em' }}>
            Son of Mrs. Komal &amp; Mr. Sushil Adwani
          </p>
          <p style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '18px', letterSpacing: '-0.05em' }}>
            Daughter of Mrs. Sunita &amp; Mr. Satish Varyani
          </p>
        </motion.div>

        <motion.p
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6.5}
          className="mt-5"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#F3ECBA', fontSize: '18px', letterSpacing: '-0.05em' }}
        >
          On the following events
        </motion.p>

      </div>
    </section>
  )
}
