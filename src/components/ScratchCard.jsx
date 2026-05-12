import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ScratchCard({ onReveal }) {
  const canvasRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [scratchPercent, setScratchPercent] = useState(0)
  const isDrawing = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * 2
    canvas.height = rect.height * 2
    ctx.scale(2, 2)

    // Draw scratch overlay
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height)
    gradient.addColorStop(0, '#C8A951')
    gradient.addColorStop(0.5, '#E8D48B')
    gradient.addColorStop(1, '#C8A951')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Add text on scratch layer
    ctx.fillStyle = '#800020'
    ctx.font = '14px Poppins, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('✧ Scratch Here ✧', rect.width / 2, rect.height / 2 - 5)
    ctx.font = '11px Poppins, sans-serif'
    ctx.fillStyle = '#5C0015'
    ctx.fillText('to reveal the date', rect.width / 2, rect.height / 2 + 15)

    // Decorative border
    ctx.strokeStyle = '#800020'
    ctx.lineWidth = 2
    ctx.strokeRect(4, 4, rect.width - 8, rect.height - 8)
  }, [])

  const scratch = (x, y) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()

    const scaleX = rect.width
    const scaleY = rect.height

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(
      (x - rect.left),
      (y - rect.top),
      20,
      0,
      Math.PI * 2
    )
    ctx.fill()

    // Calculate scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparent = 0
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++
    }
    const percent = (transparent / (pixels.length / 4)) * 100

    setScratchPercent(percent)
    if (percent > 40 && !isRevealed) {
      setIsRevealed(true)
      onReveal()
    }
  }

  const handleStart = (e) => {
    isDrawing.current = true
    const pos = e.touches ? e.touches[0] : e
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
  }

  return (
    <section className="py-16 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="font-serif text-maroon/60 text-xs tracking-[0.4em] uppercase mb-2">
          A Little Surprise
        </p>
        <h2 className="font-script text-4xl text-maroon mb-6">
          Save the Date
        </h2>

        {/* Scratch Card */}
        <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-lg border border-gold/30 mx-auto">
          {/* Revealed content underneath */}
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center">
            <motion.div
              animate={isRevealed ? { scale: [0.8, 1.1, 1] } : {}}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <p className="font-serif text-maroon/60 text-xs tracking-[0.2em] uppercase">
                Mark Your Calendar
              </p>
              <p className="font-script text-4xl text-maroon mt-1">
                June 21 & 22
              </p>
              <p className="font-serif text-gold-dark text-lg mt-1">2025</p>
              <p className="text-xs text-maroon/50 mt-2">Sunday & Monday • Summer Wedding</p>
            </motion.div>
          </div>

          {/* Scratch canvas overlay */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-pointer touch-none ${isRevealed ? 'opacity-0 transition-opacity duration-1000' : ''}`}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          />
        </div>

        {isRevealed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-gold-dark font-serif text-sm"
          >
            🎉 Date Revealed! We can't wait to celebrate with you!
          </motion.p>
        )}

        {!isRevealed && (
          <p className="mt-4 text-maroon/40 text-xs animate-pulse">
            Use your finger to scratch the golden card above ☝️
          </p>
        )}
      </motion.div>
    </section>
  )
}
