import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/* ────────────────────────────────────────
   Ambient falling gold petals (always on)
   ──────────────────────────────────────── */
function Petal({ x, delay, duration, scale }) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ zIndex: 4 }}
      initial={{ top: -24, left: `${x}%`, opacity: 0, scale, rotate: 0 }}
      animate={{
        top: '108vh',
        opacity: [0, 0.5, 0.5, 0],
        rotate: [0, 200, 360],
        x: [0, 28, -18, 36, 0],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
        x: { duration: duration * 0.75, ease: 'easeInOut', repeat: Infinity },
      }}
    >
      <svg width="13" height="17" viewBox="0 0 13 17">
        <ellipse cx="6.5" cy="8.5" rx="5" ry="7.5" fill="#C8A951" opacity="0.55" />
        <ellipse cx="6.5" cy="8.5" rx="3"   ry="5"   fill="#E8D48B" opacity="0.35" />
      </svg>
    </motion.div>
  )
}

export function AmbientPetals() {
  const [petals] = useState(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 9,
      duration: 11 + Math.random() * 9,
      scale: 0.45 + Math.random() * 0.65,
    }))
  )
  return <>{petals.map(p => <Petal key={p.id} {...p} />)}</>
}

/* ──────────────────────────────────────────────
   Confetti explosion triggered on scratch reveal
   ────────────────────────────────────────────── */
function Piece({ color, delay, angle, speed, size }) {
  return (
    <motion.div
      className="fixed pointer-events-none rounded-sm"
      style={{ width: size, height: size * 1.4, backgroundColor: color, zIndex: 120 }}
      initial={{ top: '48%', left: '50%', opacity: 1, scale: 0, rotate: 0 }}
      animate={{
        top:     `${48 + Math.sin(angle) * speed}%`,
        left:    `${50 + Math.cos(angle) * speed}%`,
        opacity: [1, 1, 0.8, 0],
        scale:   [0, 1.4, 1, 0.4],
        rotate:  [0, 360 * 2 + Math.random() * 360],
        y:       [0, -80, 180],
      }}
      transition={{ duration: 2.4 + Math.random() * 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  )
}

function Ring({ x, y, delay }) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, zIndex: 120 }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: [0, 3.2, 0], opacity: [1, 0.7, 0] }}
      transition={{ duration: 1.1, delay }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="11" fill="none" stroke="#C8A951" strokeWidth="2" opacity="0.65" />
        <circle cx="14" cy="14" r="5"  fill="#E8D48B" opacity="0.4" />
      </svg>
    </motion.div>
  )
}

export function ConfettiExplosion() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const colors = ['#C8A951','#E8D48B','#800020','#A0324F','#FFD700','#FFF0DC','#D4A090']
    const list = []

    // 65 confetti pieces
    for (let i = 0; i < 65; i++) {
      list.push({
        id: `c${i}`, type: 'piece',
        color:  colors[i % colors.length],
        delay:  Math.random() * 0.35,
        angle:  Math.random() * Math.PI * 2,
        speed:  22 + Math.random() * 32,
        size:   4 + Math.random() * 6,
      })
    }
    // 6 gold rings
    for (let i = 0; i < 6; i++) {
      list.push({
        id: `r${i}`, type: 'ring',
        x: 28 + Math.random() * 44,
        y: 32 + Math.random() * 36,
        delay: i * 0.18,
      })
    }

    setPieces(list)
    const t = setTimeout(() => setPieces([]), 4500)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {pieces.map(p =>
        p.type === 'piece'
          ? <Piece key={p.id} {...p} />
          : <Ring  key={p.id} {...p} />
      )}
    </>
  )
}

export default AmbientPetals
