import { motion } from 'framer-motion'

/* ── Lantern SVG (drawn, no external PNG needed) ── */
function Lantern({ rot = 7, scale = 1, opacity = 1 }) {
  return (
    <motion.div
      className="sway pointer-events-none select-none"
      style={{ '--r': `${rot}deg`, transform: `rotate(${rot}deg) scale(${scale})`, opacity }}
    >
      <svg width="52" height="90" viewBox="0 0 52 90" fill="none">
        {/* cord */}
        <line x1="26" y1="0" x2="26" y2="12" stroke="#C8A951" strokeWidth="1.5"/>
        {/* top cap */}
        <rect x="14" y="11" width="24" height="6" rx="2" fill="#B8923A"/>
        {/* lantern body */}
        <rect x="10" y="17" width="32" height="50" rx="5" fill="#C8600A" opacity="0.85"/>
        {/* glow panels */}
        <rect x="14" y="21" width="8"  height="42" rx="2" fill="#FFD97A" opacity="0.35"/>
        <rect x="24" y="21" width="8"  height="42" rx="2" fill="#FFD97A" opacity="0.25"/>
        <rect x="34" y="21" width="4"  height="42" rx="2" fill="#FFD97A" opacity="0.20"/>
        {/* inner glow */}
        <rect x="10" y="17" width="32" height="50" rx="5" fill="#FF8C00" opacity="0.15"/>
        {/* bottom cap */}
        <rect x="14" y="67" width="24" height="6" rx="2" fill="#B8923A"/>
        {/* tassel */}
        <line x1="26" y1="73" x2="26" y2="85" stroke="#C8A951" strokeWidth="1.5"/>
        <circle cx="26" cy="87" r="3" fill="#C8A951"/>
        {/* horizontal bars */}
        <line x1="10" y1="32" x2="42" y2="32" stroke="#B8923A" strokeWidth="1" opacity="0.6"/>
        <line x1="10" y1="52" x2="42" y2="52" stroke="#B8923A" strokeWidth="1" opacity="0.6"/>
      </svg>
    </motion.div>
  )
}

/* ── A group of lanterns at a given position ── */
function LanternCluster({ top, left, right, items }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ top, left, right }}
    >
      <div className="flex gap-3 items-start">
        {items.map((l, i) => (
          <Lantern key={i} rot={l.rot} scale={l.scale ?? 1} opacity={l.opacity ?? 1} />
        ))}
      </div>
    </div>
  )
}

/* ── Decorative divider line ── */
function GoldLine() {
  return (
    <div className="w-24 h-px mx-auto my-3" style={{ background: 'linear-gradient(90deg, transparent, #F3ECBA, transparent)' }} />
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden text-center"
      style={{
        background: 'linear-gradient(to bottom, #0D0500 0%, #1B0A02 30%, #2A1205 60%, #1B0A02 80%, #0D0500 100%)',
        minHeight: '100vh',
      }}
    >
      {/* ── Atmospheric radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(200,96,10,0.18) 0%, transparent 70%)',
        }}
      />

      {/* ── Lanterns left ── */}
      <LanternCluster
        top="4%"
        left="2%"
        items={[
          { rot: 7,   scale: 0.85 },
          { rot: -8,  scale: 0.95 },
        ]}
      />

      {/* ── Lanterns right ── */}
      <LanternCluster
        top="4%"
        right="2%"
        items={[
          { rot: -7,  scale: 0.90 },
          { rot: 10,  scale: 0.80 },
        ]}
      />

      {/* ── Lanterns left mid ── */}
      <LanternCluster
        top="28%"
        left="0%"
        items={[
          { rot: 8,   scale: 0.75, opacity: 0.8 },
          { rot: -6,  scale: 0.70, opacity: 0.7 },
        ]}
      />

      {/* ── Lanterns right mid ── */}
      <LanternCluster
        top="28%"
        right="0%"
        items={[
          { rot: -9,  scale: 0.80, opacity: 0.8 },
          { rot: 7,   scale: 0.72, opacity: 0.7 },
        ]}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 min-h-screen">

        {/* OM shloka */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base tracking-wider mb-4"
          style={{ fontFamily: 'Gotu, sans-serif', color: '#F3ECBA' }}
        >
          ॐ श्री गणेशाय नम
        </motion.p>

        <GoldLine />

        {/* HARSHIT */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="uppercase leading-none tracking-tight"
          style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(52px, 14vw, 100px)',
            color: '#F3ECBA',
            letterSpacing: '-0.01em',
          }}
        >
          HARSHIT
        </motion.h1>

        {/* WEDS */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="uppercase tracking-[0.42em]"
          style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(20px, 5vw, 42px)',
            color: '#F3ECBA',
            lineHeight: '2',
          }}
        >
          WEDS
        </motion.h2>

        {/* NEHA */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="uppercase leading-none tracking-tight"
          style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(52px, 14vw, 100px)',
            color: '#F3ECBA',
            letterSpacing: '-0.01em',
          }}
        >
          NEHA
        </motion.h1>

        <GoldLine />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-4 text-sm tracking-widest uppercase"
          style={{ fontFamily: 'Cormorant Upright, Georgia, serif', color: '#DCDDA6' }}
        >
          22nd June 2026
        </motion.p>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #F3ECBA, transparent)' }} />
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1l5 5 5-5" stroke="#F3ECBA" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
