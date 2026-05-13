import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function HeartScratchCard({ index, onRevealed, size = 140 }) {
  const canvasRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const isDrawing = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const labels = ['June', '21 & 22', '2025']
  const subLabels = ['Save the', 'Date', '♥']

  // Create heart-shaped clip path
  const getHeartPath = useCallback((ctx, w, h) => {
    const x = w / 2
    const y = h / 2
    const s = Math.min(w, h) * 0.42

    ctx.beginPath()
    ctx.moveTo(x, y + s * 0.7)
    ctx.bezierCurveTo(x - s * 1.2, y - s * 0.2, x - s * 0.6, y - s * 1.1, x, y - s * 0.5)
    ctx.bezierCurveTo(x + s * 0.6, y - s * 1.1, x + s * 1.2, y - s * 0.2, x, y + s * 0.7)
    ctx.closePath()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    // Draw heart-shaped gold overlay
    ctx.save()
    getHeartPath(ctx, size, size)
    ctx.clip()

    // Gold gradient fill
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size * 0.5)
    gradient.addColorStop(0, '#E8D48B')
    gradient.addColorStop(0.5, '#C8A951')
    gradient.addColorStop(1, '#8B6914')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    // Shimmer effect lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
    ctx.lineWidth = 0.5
    for (let i = 0; i < size; i += 8) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i + 20, size)
      ctx.stroke()
    }

    // Text overlay
    ctx.fillStyle = '#5C0015'
    ctx.font = `bold 11px 'Poppins', sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText('Scratch', size / 2, size / 2 - 4)
    ctx.font = `9px 'Poppins', sans-serif`
    ctx.fillText('me ♥', size / 2, size / 2 + 10)

    ctx.restore()
  }, [size, getHeartPath])

  const scratch = (x, y) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    const canvasX = (x - rect.left)
    const canvasY = (y - rect.top)

    // Scratch within heart shape
    ctx.save()
    ctx.globalCompositeOperation = 'destination-out'

    // Draw line from last position for smooth scratching
    ctx.lineWidth = 25
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(lastPos.current.x || canvasX, lastPos.current.y || canvasY)
    ctx.lineTo(canvasX, canvasY)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(canvasX, canvasY, 14, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    lastPos.current = { x: canvasX, y: canvasY }

    // Check scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparent = 0
    let total = 0
    for (let i = 3; i < pixels.length; i += 16) { // sample every 4th pixel for performance
      total++
      if (pixels[i] === 0) transparent++
    }
    const percent = (transparent / total) * 100

    if (percent > 35 && !isRevealed) {
      setIsRevealed(true)
      onRevealed(index)
    }
  }

  const handleStart = (e) => {
    isDrawing.current = true
    const pos = e.touches ? e.touches[0] : e
    lastPos.current = { x: 0, y: 0 }
    scratch(pos.clientX, pos.clientY)
  }

  const handleMove = (e) => {
    if (!isDrawing.current) return
    e.preventDefault()
    const pos = e.touches ? e.touches[0] : e
    scratch(pos.clientX, pos.clientY)
  }

  const handleEnd = () => {
    isDrawing.current = false
    lastPos.current = { x: 0, y: 0 }
  }

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* Revealed content (underneath) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Heart background */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id={`heartBg${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F5" />
                <stop offset="100%" stopColor="#FFE4E8" />
              </linearGradient>
            </defs>
            <path
              d="M50,85 C20,55 5,35 15,22 C25,10 40,12 50,25 C60,12 75,10 85,22 C95,35 80,55 50,85 Z"
              fill={`url(#heartBg${index})`}
              stroke="#C8A951"
              strokeWidth="0.5"
            />
          </svg>
          <motion.div
            className="relative z-10 text-center"
            animate={isRevealed ? { scale: [0.5, 1.2, 1] } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <p className="font-script text-maroon text-2xl leading-none">{labels[index]}</p>
            <p className="font-serif text-gold-dark text-[10px] mt-1">{subLabels[index]}</p>
          </motion.div>
        </div>

        {/* Scratch canvas */}
        <canvas
          ref={canvasRef}
          style={{ width: size, height: size }}
          className={`absolute inset-0 cursor-pointer touch-none z-20 ${isRevealed ? 'opacity-0 transition-opacity duration-700' : ''}`}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      </div>
    </div>
  )
}

export default function ScratchCards({ onAllRevealed }) {
  const [revealedCards, setRevealedCards] = useState(new Set())
  const [allDone, setAllDone] = useState(false)

  const handleCardRevealed = (index) => {
    setRevealedCards(prev => {
      const newSet = new Set(prev)
      newSet.add(index)
      if (newSet.size === 3 && !allDone) {
        setAllDone(true)
        setTimeout(() => onAllRevealed(), 500)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream to-blush relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
        className="max-w-md mx-auto text-center"
      >
        <p className="font-serif text-maroon/50 text-xs tracking-[0.4em] uppercase mb-2">
          A Little Surprise For You
        </p>
        <h2 className="font-script text-4xl md:text-5xl text-maroon mb-3">
          Save the Date
        </h2>
        <p className="font-sans text-maroon/40 text-xs mb-10">
          Scratch all three hearts to reveal the date
        </p>

        {/* Three heart scratch cards */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: i === 0 ? -5 : i === 2 ? 5 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -5 : i === 2 ? 5 : 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
            >
              <HeartScratchCard
                index={i}
                onRevealed={handleCardRevealed}
                size={i === 1 ? 150 : 120}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${revealedCards.has(i) ? 'bg-gold scale-125' : 'bg-gold/20'}`}
              animate={revealedCards.has(i) ? { scale: [1, 1.5, 1] } : {}}
            />
          ))}
        </div>

        {/* All revealed message */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <p className="font-script text-2xl text-maroon">June 21 & 22, 2025</p>
              <p className="font-serif text-gold-dark text-xs mt-1 tracking-wider">
                Sunday & Monday • Solitare Hotel & Resorts
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!allDone && (
          <motion.p
            className="mt-6 text-maroon/30 text-xs"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Use your finger to scratch the hearts above ☝️
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
