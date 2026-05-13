import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/*
  3-step reveal:
  0 → idle   : folded cream envelope + gold wax seal in center
  1 → unsealed: seal breaks, top flap folds up (rotateX)
  2 → opening : card slides up out of envelope
  3 → done    : parent unmounts this screen, shows main site
*/

export default function EnvelopeLanding({ onReveal }) {
  const [step, setStep] = useState(0)

  function handleTap() {
    if (step === 0) {
      setStep(1)
      setTimeout(() => setStep(2), 700)
      setTimeout(() => setStep(3), 1800)
      setTimeout(() => onReveal(), 2400)
    }
  }

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          key="envelope-screen"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #1a0900 0%, #2e1600 50%, #1a0900 100%)' }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 55%, rgba(200,169,81,0.13) 0%, transparent 70%)' }}
          />

          {/* Corner ornaments */}
          {[
            'top-6 left-6',
            'top-6 right-6 rotate-90',
            'bottom-6 left-6 -rotate-90',
            'bottom-6 right-6 rotate-180',
          ].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-12 h-12 opacity-30`}>
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M4 4 L4 20 M4 4 L20 4" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="4" cy="4" r="2" fill="#C8A951" opacity="0.7"/>
              </svg>
            </div>
          ))}

          {/* Main envelope container */}
          <div className="relative flex flex-col items-center" style={{ perspective: 1000 }}>

            {/* Envelope wrapper — everything lives inside */}
            <div className="relative" style={{ width: 300, height: 210 }}>

              {/* ── ENVELOPE BODY (cream paper) ── */}
              <div
                className="absolute inset-0 rounded-sm overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(145deg, #FDF5E4 0%, #F5E6C8 50%, #EDD9A3 100%)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 2px 8px rgba(200,169,81,0.3)',
                }}
              >
                {/* Paper texture lines */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0"
                    style={{
                      top: `${15 + i * 14}%`,
                      height: '0.5px',
                      background: 'rgba(139,105,20,0.08)',
                    }}
                  />
                ))}

                {/* Bottom triangle fold (V shape inner) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 210" preserveAspectRatio="none">
                  <path
                    d="M0 210 L150 120 L300 210 Z"
                    fill="rgba(210,180,100,0.25)"
                    stroke="rgba(139,105,20,0.2)"
                    strokeWidth="0.5"
                  />
                  {/* Left diagonal fold */}
                  <path
                    d="M0 0 L150 120 L0 210 Z"
                    fill="rgba(220,190,110,0.18)"
                    stroke="rgba(139,105,20,0.15)"
                    strokeWidth="0.5"
                  />
                  {/* Right diagonal fold */}
                  <path
                    d="M300 0 L150 120 L300 210 Z"
                    fill="rgba(200,170,90,0.18)"
                    stroke="rgba(139,105,20,0.15)"
                    strokeWidth="0.5"
                  />
                  {/* Gold inner border */}
                  <rect x="6" y="6" width="288" height="198" rx="2"
                    fill="none" stroke="#C8A951" strokeWidth="0.8" opacity="0.4"/>
                  <rect x="10" y="10" width="280" height="190" rx="2"
                    fill="none" stroke="#C8A951" strokeWidth="0.4" opacity="0.25"/>
                </svg>

                {/* ── Letter peeking out (step 2) ── */}
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: -80, opacity: 1 }}
                      exit={{ y: 60, opacity: 0 }}
                      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute left-6 right-6 rounded-sm overflow-hidden"
                      style={{
                        bottom: 16,
                        background: 'linear-gradient(160deg, #FFFBF0 0%, #FDF0C8 100%)',
                        boxShadow: '0 -4px 24px rgba(200,169,81,0.25)',
                        border: '0.5px solid rgba(200,169,81,0.4)',
                        height: 160,
                        zIndex: 10,
                      }}
                    >
                      {/* Letter content */}
                      <div className="flex flex-col items-center justify-center h-full px-4 py-4 text-center gap-1">
                        <p style={{ fontFamily: 'Gotu, sans-serif', fontSize: 11, color: '#8B6914', opacity: 0.8 }}>
                          ॐ श्री गणेशाय नम
                        </p>
                        <div className="w-12 h-px my-1" style={{ background: 'linear-gradient(90deg,transparent,#C8A951,transparent)' }} />
                        <p style={{ fontFamily: 'Cormorant Upright, serif', fontWeight: 400, fontSize: 13, color: '#6B4F10', letterSpacing: '0.05em' }}>
                          WEDDING INVITATION
                        </p>
                        <p style={{ fontFamily: 'Cormorant, serif', fontWeight: 400, fontSize: 28, color: '#5C3A00', lineHeight: 1.1 }}>
                          Harshit &amp; Neha
                        </p>
                        <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 12, color: '#8B6914', opacity: 0.8 }}>
                          22nd June 2026
                        </p>
                        <div className="w-12 h-px mt-1" style={{ background: 'linear-gradient(90deg,transparent,#C8A951,transparent)' }} />
                        <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 10, color: '#8B6914', opacity: 0.6 }}>
                          Solitare Hotel &amp; Resorts
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── TOP FLAP (folds up on step 1+) ── */}
              <motion.div
                className="absolute top-0 left-0 right-0 overflow-hidden"
                style={{
                  height: 110,
                  transformOrigin: 'top center',
                  zIndex: 20,
                }}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: step >= 1 ? -170 : 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              >
                <svg width="300" height="110" viewBox="0 0 300 110" fill="none">
                  <path
                    d="M0 0 L300 0 L300 2 L150 105 L0 2 Z"
                    fill="url(#flapGrad)"
                    stroke="rgba(139,105,20,0.3)"
                    strokeWidth="0.5"
                  />
                  {/* Flap texture */}
                  <path d="M0 0 L150 105" stroke="rgba(139,105,20,0.1)" strokeWidth="0.5"/>
                  <path d="M300 0 L150 105" stroke="rgba(139,105,20,0.1)" strokeWidth="0.5"/>
                  <defs>
                    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EDD9A3"/>
                      <stop offset="100%" stopColor="#D9C082"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* ── WAX SEAL COIN (center of envelope) ── */}
              <motion.div
                className="absolute z-30 cursor-pointer"
                style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                onClick={handleTap}
                animate={step === 0 ? {
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    '0 0 18px rgba(200,169,81,0.4)',
                    '0 0 30px rgba(200,169,81,0.65)',
                    '0 0 18px rgba(200,169,81,0.4)',
                  ],
                } : {
                  scale: [1, 1.2, 0],
                  opacity: [1, 1, 0],
                }}
                transition={step === 0
                  ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.5, ease: 'easeIn' }
                }
              >
                <WaxSeal />
              </motion.div>
            </div>

            {/* Tap prompt (only step 0) */}
            <AnimatePresence>
              {step === 0 && (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-10 flex flex-col items-center gap-2"
                >
                  <motion.p
                    style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 16, color: '#C8A951', letterSpacing: '0.2em' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    Tap the seal to open
                  </motion.p>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M1 1l6 6 6-6" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Opening text */}
            <AnimatePresence>
              {step >= 1 && step < 3 && (
                <motion.p
                  key="opening"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-10"
                  style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 16, color: '#C8A951', letterSpacing: '0.15em' }}
                >
                  Opening…
                </motion.p>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom hashtag */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p style={{ fontFamily: 'Aboreto, cursive', fontSize: 10, color: '#C8A951', opacity: 0.35, letterSpacing: '0.3em' }}>
              #HarshHitTheJackpot
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Gold Wax Seal SVG coin ── */
function WaxSeal() {
  return (
    <div
      className="relative"
      style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <defs>
          <radialGradient id="sealGold" cx="38%" cy="32%" r="65%">
            <stop offset="0%"  stopColor="#F5D97A"/>
            <stop offset="35%" stopColor="#C8A951"/>
            <stop offset="70%" stopColor="#A07820"/>
            <stop offset="100%" stopColor="#6B4F10"/>
          </radialGradient>
          <radialGradient id="sealShine" cx="30%" cy="25%" r="30%">
            <stop offset="0%"  stopColor="white" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Coin base */}
        <circle cx="40" cy="40" r="39" fill="url(#sealGold)"/>
        <circle cx="40" cy="40" r="39" fill="url(#sealShine)"/>

        {/* Outer serrated edge (coin look) */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2
          const r1 = 37, r2 = 39
          const x1 = 40 + Math.cos(a) * r1
          const y1 = 40 + Math.sin(a) * r1
          const x2 = 40 + Math.cos(a) * r2
          const y2 = 40 + Math.sin(a) * r2
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6B4F10" strokeWidth="0.8" opacity="0.5"/>
        })}

        {/* Inner border rings */}
        <circle cx="40" cy="40" r="33" fill="none" stroke="#6B4F10" strokeWidth="0.8" opacity="0.5"/>
        <circle cx="40" cy="40" r="29" fill="none" stroke="#8B6914" strokeWidth="0.5" opacity="0.4"/>

        {/* Dot ring around H&N */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2
          const x = 40 + Math.cos(a) * 27
          const y = 40 + Math.sin(a) * 27
          return <circle key={i} cx={x} cy={y} r="1" fill="#6B4F10" opacity="0.6"/>
        })}

        {/* H & N monogram */}
        <text
          x="40" y="36"
          textAnchor="middle"
          fill="#3D2800"
          fontSize="13"
          fontFamily="Cormorant, serif"
          fontWeight="600"
          opacity="0.95"
        >
          H
        </text>
        <text
          x="40" y="46"
          textAnchor="middle"
          fill="#3D2800"
          fontSize="7"
          fontFamily="Cormorant Upright, serif"
          opacity="0.75"
          letterSpacing="2"
        >
          &amp;
        </text>
        <text
          x="40" y="58"
          textAnchor="middle"
          fill="#3D2800"
          fontSize="13"
          fontFamily="Cormorant, serif"
          fontWeight="600"
          opacity="0.95"
        >
          N
        </text>

        {/* Highlight ellipse for 3D depth */}
        <ellipse cx="32" cy="28" rx="9" ry="5" fill="white" opacity="0.10" transform="rotate(-30 32 28)"/>
      </svg>
    </div>
  )
}
