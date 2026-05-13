import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Labels revealed on each of the 3 heart cards ──
const LABELS    = ['22nd June', '2026', '♥']
const SUBLABELS = ['The Wedding', 'Mark your calendar', 'Harshit & Neha']

function HeartCard({ index, size, onDone }) {
  const canvasRef  = useRef(null)
  const drawing    = useRef(false)
  const lastPos    = useRef({ x: 0, y: 0 })
  const [revealed, setRevealed] = useState(false)

  /* ── Draw golden overlay once ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    canvas.width  = size * dpr
    canvas.height = size * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    // Heart clip
    ctx.save()
    heartPath(ctx, size)
    ctx.clip()

    // Gold radial fill
    const g = ctx.createRadialGradient(size * 0.4, size * 0.35, 0, size / 2, size / 2, size * 0.55)
    g.addColorStop(0,   '#F0DC8E')
    g.addColorStop(0.5, '#C8A951')
    g.addColorStop(1,   '#8B6914')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, size, size)

    // Diagonal shimmer lines
    ctx.strokeStyle = 'rgba(255,255,255,0.13)'
    ctx.lineWidth = 0.6
    for (let x = -size; x < size * 2; x += 9) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + size * 0.6, size); ctx.stroke()
    }

    // Prompt text
    ctx.fillStyle = '#5C0015'
    ctx.textAlign = 'center'
    ctx.font = `bold 11px Poppins, sans-serif`
    ctx.fillText('Scratch', size / 2, size / 2 - 4)
    ctx.font = `9px Poppins, sans-serif`
    ctx.fillText('me ♥', size / 2, size / 2 + 11)

    ctx.restore()
  }, [size])

  function heartPath(ctx, s) {
    const cx = s / 2, cy = s / 2, r = s * 0.42
    ctx.beginPath()
    ctx.moveTo(cx, cy + r * 0.7)
    ctx.bezierCurveTo(cx - r * 1.2, cy - r * 0.2, cx - r * 0.6, cy - r * 1.1, cx, cy - r * 0.5)
    ctx.bezierCurveTo(cx + r * 0.6, cy - r * 1.1, cx + r * 1.2, cy - r * 0.2, cx, cy + r * 0.7)
    ctx.closePath()
  }

  const doScratch = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx  = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.save()
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineWidth  = 28
    ctx.lineCap    = 'round'
    ctx.lineJoin   = 'round'
    ctx.beginPath()
    ctx.moveTo(lastPos.current.x || x, lastPos.current.y || y)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI * 2); ctx.fill()
    ctx.restore()
    lastPos.current = { x, y }

    // Sample transparency
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let gone = 0, total = 0
    for (let i = 3; i < data.length; i += 20) { total++; if (data[i] === 0) gone++ }
    if (!revealed && gone / total > 0.38) { setRevealed(true); onDone(index) }
  }, [index, onDone, revealed])

  const onDown = e => { drawing.current = true; lastPos.current = { x: 0, y: 0 }; const p = e.touches?.[0] ?? e; doScratch(p.clientX, p.clientY) }
  const onMove = e => { if (!drawing.current) return; e.preventDefault(); const p = e.touches?.[0] ?? e; doScratch(p.clientX, p.clientY) }
  const onUp   = () => { drawing.current = false; lastPos.current = { x: 0, y: 0 } }

  return (
    <div className="flex flex-col items-center" style={{ width: size, height: size }}>
      {/* Heart background + revealed text */}
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id={`hbg${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0F5" />
              <stop offset="100%" stopColor="#FFE4EA" />
            </linearGradient>
          </defs>
          <path
            d="M50,84 C22,56 6,36 16,22 C25,10 40,12 50,26 C60,12 75,10 84,22 C94,36 78,56 50,84 Z"
            fill={`url(#hbg${index})`} stroke="#C8A951" strokeWidth="0.6"
          />
        </svg>

        {/* Revealed content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="text-center px-2"
            animate={revealed ? { scale: [0.5, 1.15, 1] } : {}}
            transition={{ type: 'spring', duration: 0.55 }}
          >
            <p className="font-script text-maroon leading-none"
               style={{ fontSize: size * 0.16 }}>{LABELS[index]}</p>
            <p className="font-serif text-gold-dark mt-1"
               style={{ fontSize: size * 0.07 }}>{SUBLABELS[index]}</p>
          </motion.div>
        </div>

        {/* Scratch canvas */}
        <canvas
          ref={canvasRef}
          style={{ width: size, height: size }}
          className={`absolute inset-0 touch-none cursor-pointer transition-opacity duration-700 ${revealed ? 'opacity-0 pointer-events-none' : ''}`}
          onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
          onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}
        />
      </div>
    </div>
  )
}

export default function ScratchCards({ onAllRevealed }) {
  const [done,   setDone]   = useState(new Set())
  const [allDone, setAllDone] = useState(false)

  const markDone = useCallback((i) => {
    setDone(prev => {
      const next = new Set(prev)
      next.add(i)
      if (next.size === 3 && !allDone) {
        setAllDone(true)
        setTimeout(onAllRevealed, 600)
      }
      return next
    })
  }, [allDone, onAllRevealed])

  const SIZES = [118, 148, 118]   // middle card is bigger

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream to-blush">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', bounce: 0.3 }}
        className="max-w-sm mx-auto text-center"
      >
        {/* Heading */}
        <p className="font-serif text-maroon/45 text-xs tracking-[0.45em] uppercase mb-2">
          A Little Surprise
        </p>
        <h2 className="font-script text-5xl text-maroon mb-2">
          Save the Date
        </h2>
        <p className="font-sans text-maroon/35 text-xs mb-10">
          Scratch all three hearts to reveal the wedding date
        </p>

        {/* Hearts row */}
        <div className="flex items-end justify-center gap-4">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22, rotate: i === 0 ? -6 : i === 2 ? 6 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -6 : i === 2 ? 6 : 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, type: 'spring', bounce: 0.4 }}
            >
              <HeartCard index={i} size={SIZES[i]} onDone={markDone} />
            </motion.div>
          ))}
        </div>

        {/* Dot progress */}
        <div className="flex justify-center gap-2 mt-7">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-500 ${done.has(i) ? 'bg-gold' : 'bg-gold/20'}`}
              animate={done.has(i) ? { scale: [1, 1.6, 1] } : {}}
            />
          ))}
        </div>

        {/* Full date revealed */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-1"
            >
              <p className="font-script text-3xl text-maroon">22nd June 2026</p>
              <p className="font-serif text-gold-dark text-xs tracking-wider">
                Monday · Solitare Hotel &amp; Resorts
              </p>
              <p className="font-sans text-maroon/35 text-[10px] mt-1">
                🎉 We can't wait to celebrate with you!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!allDone && (
          <motion.p
            className="mt-5 font-sans text-[10px] text-maroon/30"
            animate={{ opacity: [0.3, 0.75, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Use your finger to scratch each heart ☝️
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
