import { motion } from 'framer-motion'

const WHATSAPP = 'https://wa.me/919999999999?text=Hi!%20I%20would%20like%20to%20RSVP%20for%20Harshit%20%26%20Neha%27s%20wedding%20on%2022nd%20June%202026.'

/* Spinning CTA circle (reusable) */
function SpinCTA({ href, label, sub, bg, textColor, borderColor }) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 px-6 text-center" style={{ background: bg }}>
      <p
        style={{
          fontFamily: 'Aboreto, cursive',
          fontSize: 'clamp(36px,10vw,70px)',
          color: textColor,
          lineHeight: 1.15,
          whiteSpace: 'pre-line',
        }}
      >
        {label}
      </p>
      <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '16px', color: textColor, opacity: 0.8 }}>
        {sub}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-4 flex items-center justify-center"
        style={{ width: 90, height: 90 }}
      >
        <svg width="90" height="90" className="absolute inset-0 spin-border" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="42" fill="none" stroke={borderColor} strokeWidth="2"
            strokeDasharray="8 6" strokeLinecap="round" />
        </svg>
        <svg width="90" height="90" className="absolute inset-0" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="34" fill="none" stroke={borderColor} strokeWidth="9" opacity="0.9" />
        </svg>
        <div className="relative z-10 w-3 h-3 rounded-full" style={{ background: borderColor }} />
      </a>
    </div>
  )
}

/* Vintage car silhouette SVG */
function VintageCar() {
  return (
    <div className="flex justify-center overflow-hidden py-2" style={{ opacity: 0.55 }}>
      <svg width="320" height="120" viewBox="0 0 320 120" fill="none">
        {/* wheels */}
        <circle cx="80"  cy="96" r="22" stroke="#F3ECBA" strokeWidth="3" fill="none"/>
        <circle cx="80"  cy="96" r="10" stroke="#F3ECBA" strokeWidth="2" fill="none"/>
        <circle cx="240" cy="96" r="22" stroke="#F3ECBA" strokeWidth="3" fill="none"/>
        <circle cx="240" cy="96" r="10" stroke="#F3ECBA" strokeWidth="2" fill="none"/>
        {/* body */}
        <path d="M30 96 L30 68 Q40 68 55 50 Q70 32 110 30 L210 30 Q245 30 260 50 Q272 68 290 68 L290 96 Z"
          stroke="#F3ECBA" strokeWidth="2" fill="none" />
        {/* windows */}
        <path d="M100 54 L100 34 L155 34 L155 54 Z" stroke="#F3ECBA" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <path d="M162 54 L162 34 L205 34 L205 54 Z" stroke="#F3ECBA" strokeWidth="1.5" fill="none" opacity="0.6"/>
        {/* door lines */}
        <line x1="155" y1="56" x2="155" y2="96" stroke="#F3ECBA" strokeWidth="1" opacity="0.5"/>
        <line x1="205" y1="56" x2="205" y2="96" stroke="#F3ECBA" strokeWidth="1" opacity="0.5"/>
        {/* headlight */}
        <circle cx="294" cy="72" r="6" stroke="#F3ECBA" strokeWidth="1.5" fill="none" opacity="0.6"/>
        {/* bumper */}
        <path d="M20 90 Q10 90 8 96" stroke="#F3ECBA" strokeWidth="2" fill="none" opacity="0.5"/>
        <path d="M300 90 Q312 90 314 96" stroke="#F3ECBA" strokeWidth="2" fill="none" opacity="0.5"/>
      </svg>
    </div>
  )
}

/* Photo frame SVG */
function PhotoFrame({ children }) {
  return (
    <div className="relative mx-auto" style={{ width: 240, height: 320 }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 320" fill="none">
        {/* outer ornate frame */}
        <rect x="4" y="4" width="232" height="312" rx="12" stroke="#F3ECBA" strokeWidth="2" opacity="0.6"/>
        <rect x="10" y="10" width="220" height="300" rx="10" stroke="#F3ECBA" strokeWidth="1" opacity="0.3"/>
        {/* corner ornaments */}
        {[[4,4],[236,4],[4,316],[236,316]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#F3ECBA" opacity="0.25"/>
            <circle cx={cx} cy={cy} r="3" fill="#F3ECBA" opacity="0.45"/>
          </g>
        ))}
        {/* top center ornament */}
        <path d="M110 4 Q120 0 130 4 Q120 8 110 4 Z" fill="#F3ECBA" opacity="0.4"/>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-6 pt-10">
        {children}
      </div>
    </div>
  )
}

const reveal = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8 } }),
}

export default function CoupleSection() {
  return (
    <>
      {/* ── Section 2 dark background ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0A0400, #1A1200, #0A0400)' }}
      >
        {/* Vintage car breaker */}
        <div className="py-8 border-t border-b" style={{ borderColor: '#F3ECBA20' }}>
          <VintageCar />
        </div>

        {/* Meet the bride and groom */}
        <div className="px-6 py-14 text-center max-w-lg mx-auto">

          <motion.p
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ fontFamily: 'Aboreto, cursive', fontSize: '22px', color: '#FBEEE2' }}
          >
            meet the
          </motion.p>

          <motion.p
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
            style={{ fontFamily: 'Aboreto, cursive', fontSize: 'clamp(28px,8vw,54px)', color: '#FBEEE2', lineHeight: 1.2 }}
          >
            bride and groom
          </motion.p>

          {/* Description */}
          <motion.p
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="mt-6 leading-relaxed"
            style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#FBEEE2', textAlign: 'center' }}
          >
            We are both so delighted that you are able to join us in celebrating
            what we hope will be one of the happiest days of our lives.
            The love and support shown to us by so many people since our engagement
            has been incredibly moving, and has touched us both deeply.
            We look forward to celebrating with you on 22nd June 2026.
          </motion.p>

          {/* Photo frames */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1.5}
            className="flex flex-col items-center gap-8 mt-10"
          >
            {/* Groom */}
            <PhotoFrame>
              <div className="text-center">
                {/* Groom SVG portrait */}
                <svg width="100" height="130" viewBox="0 0 100 130" fill="none" className="mx-auto">
                  <ellipse cx="50" cy="42" rx="24" ry="26" fill="#D4A574" opacity="0.9"/>
                  <path d="M50,68 C28,68 12,82 12,105 L12,130 L88,130 L88,105 C88,82 72,68 50,68 Z" fill="#2C1810"/>
                  <path d="M26,40 C26,22 34,14 50,14 C66,14 74,22 74,40" fill="#1a0f09"/>
                  <path d="M24,36 C24,18 33,8 50,8 C67,8 76,18 76,36" fill="#C8A951" stroke="#8B6914" strokeWidth="0.8"/>
                  <circle cx="50" cy="16" r="4" fill="#800020"/>
                  <circle cx="40" cy="36" r="2.5" fill="#1a0f09"/>
                  <circle cx="60" cy="36" r="2.5" fill="#1a0f09"/>
                </svg>
                <p className="mt-3" style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '20px', color: '#FBEEE2' }}>Harshit</p>
                <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '11px', color: '#FBEEE2', opacity: 0.6 }}>The Groom</p>
                <p className="mt-1" style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '13px', color: '#FBEEE2', opacity: 0.65, lineHeight: 1.4 }}>
                  S/o Mr. Sushil Adwani<br/>&amp; Mrs. Komal Adwani
                </p>
              </div>
            </PhotoFrame>

            {/* Bride */}
            <PhotoFrame>
              <div className="text-center">
                {/* Bride SVG portrait */}
                <svg width="100" height="130" viewBox="0 0 100 130" fill="none" className="mx-auto">
                  <ellipse cx="50" cy="42" rx="24" ry="26" fill="#E8C4A0" opacity="0.9"/>
                  <path d="M50,68 C28,68 12,82 12,105 L12,130 L88,130 L88,105 C88,82 72,68 50,68 Z" fill="#800020"/>
                  <path d="M26,40 C26,22 34,14 50,14 C66,14 74,22 74,40 L74,46 C66,44 50,46 34,48 Z" fill="#1a0f09"/>
                  <path d="M22,34 C20,24 30,10 50,10 C70,10 80,24 78,34" fill="#C8A951" opacity="0.7"/>
                  <circle cx="50" cy="26" r="2" fill="#FF2244"/>
                  <line x1="50" y1="10" x2="50" y2="24" stroke="#C8A951" strokeWidth="1.2"/>
                  <circle cx="50" cy="24" r="2.5" fill="#C8A951"/>
                  <circle cx="40" cy="36" r="2.5" fill="#1a0f09"/>
                  <circle cx="60" cy="36" r="2.5" fill="#1a0f09"/>
                </svg>
                <p className="mt-3" style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '20px', color: '#FBEEE2' }}>Neha</p>
                <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '11px', color: '#FBEEE2', opacity: 0.6 }}>The Bride</p>
                <p className="mt-1" style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '13px', color: '#FBEEE2', opacity: 0.65, lineHeight: 1.4 }}>
                  D/o Mr. Satish Varyani<br/>&amp; Mrs. Sunita Varyani
                </p>
              </div>
            </PhotoFrame>
          </motion.div>

          {/* Photo placeholder note */}
          <motion.p
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="mt-10 text-center"
            style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: '13px', color: '#FBEEE2', opacity: 0.4, lineHeight: 1.6 }}
          >
            📸 Couple photos coming soon
          </motion.p>
        </div>
      </section>

      {/* ── RSVP CTA ── */}
      <SpinCTA
        href={WHATSAPP}
        label={'Please\nRSVP'}
        sub="Click to message on WhatsApp"
        bg="#100600"
        textColor="#FBEEE2"
        borderColor="#FBEEE2"
      />
    </>
  )
}
