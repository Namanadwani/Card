import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Petal({ delay, x, size, duration, rotation }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      initial={{ 
        top: -20, 
        left: `${x}%`, 
        opacity: 1,
        rotate: 0,
        scale: size 
      }}
      animate={{ 
        top: '110vh', 
        opacity: [1, 1, 0.8, 0],
        rotate: rotation,
        x: [0, 30, -20, 40, 0]
      }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: 'linear',
        x: { duration: duration, ease: 'easeInOut' }
      }}
    >
      <svg width="12" height="16" viewBox="0 0 12 16">
        <ellipse cx="6" cy="8" rx="5" ry="7" fill="#C8A951" opacity="0.7" />
        <ellipse cx="6" cy="8" rx="3" ry="5" fill="#E8D48B" opacity="0.5" />
      </svg>
    </motion.div>
  )
}

function ConfettiPiece({ delay, x, color }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-2 h-2 rounded-sm"
      style={{ backgroundColor: color }}
      initial={{ 
        top: -10, 
        left: `${x}%`, 
        opacity: 1,
        rotate: 0,
      }}
      animate={{ 
        top: '100vh', 
        opacity: [1, 1, 0],
        rotate: [0, 360, 720],
        x: [0, 20, -30, 15]
      }}
      transition={{ 
        duration: 4 + Math.random() * 2, 
        delay: delay,
        ease: 'linear',
      }}
    />
  )
}

export default function GoldPetals() {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const items = []
    // Gold petals
    for (let i = 0; i < 20; i++) {
      items.push({
        id: `petal-${i}`,
        type: 'petal',
        delay: Math.random() * 2,
        x: Math.random() * 100,
        size: 0.5 + Math.random() * 1,
        duration: 4 + Math.random() * 3,
        rotation: 360 + Math.random() * 360,
      })
    }
    // Confetti
    const colors = ['#C8A951', '#E8D48B', '#800020', '#A0324F', '#FFD700']
    for (let i = 0; i < 30; i++) {
      items.push({
        id: `confetti-${i}`,
        type: 'confetti',
        delay: Math.random() * 1.5,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setPetals(items)

    // Auto-remove after animation
    const timer = setTimeout(() => setPetals([]), 7000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {petals.map(item => 
        item.type === 'petal' ? (
          <Petal key={item.id} {...item} />
        ) : (
          <ConfettiPiece key={item.id} {...item} />
        )
      )}
    </>
  )
}
