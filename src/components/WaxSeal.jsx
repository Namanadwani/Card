import { motion } from 'framer-motion'

export default function WaxSeal() {
  return (
    <div className="relative w-20 h-20">
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-maroon/20 blur-md"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Main seal */}
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          {/* Wax drip shape */}
          <path
            d="M50,5 C60,5 72,8 78,15 C84,22 88,32 90,42 C92,52 90,62 85,70 C80,78 72,84 63,88 C54,92 44,92 35,88 C26,84 18,78 13,70 C8,62 6,52 8,42 C10,32 14,22 20,15 C26,8 38,5 50,5 Z"
            fill="url(#sealGradient)"
            stroke="#5C0015"
            strokeWidth="0.5"
          />
          
          {/* Inner circle */}
          <circle cx="50" cy="50" r="28" fill="none" stroke="#F8E8E0" strokeWidth="1" opacity="0.4" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="#F8E8E0" strokeWidth="0.5" opacity="0.3" />
          
          {/* Initials / monogram */}
          <text
            x="50"
            y="46"
            textAnchor="middle"
            fill="#F8E8E0"
            fontSize="14"
            fontFamily="'Great Vibes', cursive"
            opacity="0.9"
          >
            N & S
          </text>
          
          {/* Small heart */}
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fill="#F8E8E0"
            fontSize="8"
            opacity="0.7"
          >
            ♥
          </text>

          <defs>
            <radialGradient id="sealGradient" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#A0324F" />
              <stop offset="50%" stopColor="#800020" />
              <stop offset="100%" stopColor="#5C0015" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
