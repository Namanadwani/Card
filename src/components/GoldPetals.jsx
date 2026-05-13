import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Ambient falling petals (subtle background effect)
function FallingPetal({ delay, x, duration, size, opacity }) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ zIndex: 5 }}
      initial={{
        top: -30,
        left: `${x}%`,
        opacity: 0,
        rotate: 0,
        scale: size,
      }}
      animate={{
        top: '105vh',
        opacity: [0, opacity, opacity, 0],
        rotate: [0, 180, 360],
        x: [0, 30, -20, 40, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'linear',
        repeat: Infinity,
        x: { duration: duration * 0.8, ease: 'easeInOut', repeat: Infinity },
      }}
    >
      <svg width="14" height="18" viewBox="0 0 14 18">
        <ellipse cx="7" cy="9" rx="5" ry="8" fill="#C8A951" opacity="0.6" />
        <ellipse cx="7" cy="9" rx="3" ry="5" fill="#E8D48B" opacity="0.4" />
      </svg>
    </motion.div>
  )
}

// Ambient gold particles
export function AmbientPetals() {
  const [petals] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 8,
      size: 0.4 + Math.random() * 0.6,
      opacity: 0.2 + Math.random() * 0.3,
    }))
  )

  return (
    <>
      {petals.map(petal => (
        <FallingPetal key={petal.id} {...petal} />
      ))}
    </>
  )
}

// Confetti explosion (triggered on scratch card reveal)
function ConfettiPiece({ x, y, color, delay, angle, speed, size }) {
  return (
    <motion.div
      className="fixed pointer-events-none rounded-sm"
      style={{
        width: size,
        height: size * (0.5 + Math.random()),
        backgroundColor: color,
        zIndex: 100,
      }}
      initial={{
        top: '50%',
        left: '50%',
        opacity: 1,
        rotate: 0,
        scale: 0,
      }}
      animate={{
        top: `${50 + Math.sin(angle) * speed}%`,
        left: `${50 + Math.cos(angle) * speed}%`,
        opacity: [1, 1, 1, 0],
        rotate: [0, 360 + Math.random() * 720],
        scale: [0, 1.5, 1, 0.5],
        y: [0, -100, 200],
      }}
      transition={{
        duration: 2.5 + Math.random(),
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    />
  )
}

function GoldBurst({ delay, x, y }) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ zIndex: 100, left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: [0, 3, 0], opacity: [1, 0.8, 0] }}
      transition={{ duration: 1.2, delay }}
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <circle cx="15" cy="15" r="12" fill="none" stroke="#C8A951" strokeWidth="2" opacity="0.6" />
        <circle cx="15" cy="15" r="6" fill="#E8D48B" opacity="0.4" />
      </svg>
    </motion.div>
  )
}

export function ConfettiExplosion() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const colors = ['#C8A951', '#E8D48B', '#800020', '#A0324F', '#FFD700', '#FFF8DC', '#D4A090']
    const items = []

    // Confetti pieces
    for (let i = 0; i < 60; i++) {
      items.push({
        id: `confetti-${i}`,
        type: 'confetti',
        x: 50 + (Math.random() - 0.5) * 20,
        y: 50 + (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.3,
        angle: (Math.random() * Math.PI * 2),
        speed: 20 + Math.random() * 30,
        size: 4 + Math.random() * 6,
      })
    }

    // Gold bursts
    for (let i = 0; i < 5; i++) {
      items.push({
        id: `burst-${i}`,
        type: 'burst',
        x: 30 + Math.random() * 40,
        y: 35 + Math.random() * 30,
        delay: i * 0.2,
      })
    }

    setPieces(items)

    const timer = setTimeout(() => setPieces([]), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {pieces.map(item =>
        item.type === 'confetti' ? (
          <ConfettiPiece key={item.id} {...item} />
        ) : (
          <GoldBurst key={item.id} {...item} />
        )
      )}
    </>
  )
}

export default AmbientPetals
