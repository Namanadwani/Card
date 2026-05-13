import { motion } from 'framer-motion'

export default function WaxSeal() {
  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      {/* Outer glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-maroon/20 blur-lg"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* 3D-style wax seal */}
      <div className="relative w-full h-full drop-shadow-xl">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {/* Outer wax drip/organic edge */}
          <defs>
            <radialGradient id="waxGrad3d" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#C04060" />
              <stop offset="30%" stopColor="#9B1B3A" />
              <stop offset="60%" stopColor="#800020" />
              <stop offset="100%" stopColor="#4A0012" />
            </radialGradient>
            <radialGradient id="waxHighlight" cx="30%" cy="25%" r="30%">
              <stop offset="0%" stopColor="#FF8899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#800020" stopOpacity="0" />
            </radialGradient>
            <filter id="innerShadow">
              <feOffset dx="0" dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite operator="out" in="SourceGraphic" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feBlend in="SourceGraphic" />
            </filter>
          </defs>

          {/* Wax body with organic shape */}
          <path
            d="M60,8 C72,6 82,10 90,16 C96,22 102,32 104,44 C106,56 104,66 98,76 C92,84 84,90 74,94 C64,98 52,98 42,94 C32,90 24,84 18,76 C12,66 10,56 12,44 C14,32 20,22 28,16 C36,10 48,6 60,8 Z"
            fill="url(#waxGrad3d)"
            stroke="#4A0012"
            strokeWidth="0.5"
            filter="url(#innerShadow)"
          />
          
          {/* 3D highlight */}
          <path
            d="M60,8 C72,6 82,10 90,16 C96,22 102,32 104,44 C106,56 104,66 98,76 C92,84 84,90 74,94 C64,98 52,98 42,94 C32,90 24,84 18,76 C12,66 10,56 12,44 C14,32 20,22 28,16 C36,10 48,6 60,8 Z"
            fill="url(#waxHighlight)"
          />

          {/* Inner pressed circle */}
          <circle cx="60" cy="60" r="30" fill="none" stroke="#F8E8E0" strokeWidth="1.5" opacity="0.3" />
          <circle cx="60" cy="60" r="26" fill="none" stroke="#F8E8E0" strokeWidth="0.5" opacity="0.2" />

          {/* Decorative ring dots */}
          {[...Array(16)].map((_, i) => {
            const angle = (i / 16) * Math.PI * 2
            const x = 60 + Math.cos(angle) * 28
            const y = 60 + Math.sin(angle) * 28
            return <circle key={i} cx={x} cy={y} r="0.8" fill="#F8E8E0" opacity="0.3" />
          })}

          {/* H & N initials */}
          <text
            x="60"
            y="56"
            textAnchor="middle"
            fill="#F8E8E0"
            fontSize="16"
            fontFamily="'Great Vibes', cursive"
            opacity="0.95"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            H & N
          </text>
          
          {/* Small heart */}
          <text
            x="60"
            y="74"
            textAnchor="middle"
            fill="#F8E8E0"
            fontSize="10"
            opacity="0.7"
          >
            ♥
          </text>

          {/* Subtle edge shine */}
          <ellipse cx="45" cy="35" rx="12" ry="8" fill="white" opacity="0.06" />
        </svg>
      </div>
    </div>
  )
}
