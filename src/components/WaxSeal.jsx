import { motion } from 'framer-motion'

export default function WaxSeal() {
  return (
    <div className="relative w-24 h-24">
      {/* Glow pulse behind seal */}
      <motion.div
        className="absolute inset-0 rounded-full bg-maroon/25 blur-xl"
        animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 120 120" className="relative w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="wax3d" cx="36%" cy="30%" r="64%">
            <stop offset="0%"   stopColor="#C8405A" />
            <stop offset="35%"  stopColor="#9B1B3A" />
            <stop offset="70%"  stopColor="#800020" />
            <stop offset="100%" stopColor="#4A0012" />
          </radialGradient>
          <radialGradient id="waxShine" cx="30%" cy="25%" r="28%">
            <stop offset="0%"   stopColor="#FFAABC" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#800020" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Organic wax blob */}
        <path
          d="M60,7 C73,5 84,10 91,18 C98,25 103,35 104,46
             C105,57 102,67 96,75 C90,83 81,89 71,93
             C61,97 50,97 40,93 C30,89 21,83 15,75
             C9,67 7,57 8,46 C9,35 14,25 21,18
             C28,10 47,5 60,7 Z"
          fill="url(#wax3d)"
        />
        {/* Shine layer */}
        <path
          d="M60,7 C73,5 84,10 91,18 C98,25 103,35 104,46
             C105,57 102,67 96,75 C90,83 81,89 71,93
             C61,97 50,97 40,93 C30,89 21,83 15,75
             C9,67 7,57 8,46 C9,35 14,25 21,18
             C28,10 47,5 60,7 Z"
          fill="url(#waxShine)"
        />

        {/* Pressed inner rings */}
        <circle cx="60" cy="60" r="31" fill="none" stroke="#F8E8E0" strokeWidth="1.2" opacity="0.3" />
        <circle cx="60" cy="60" r="27" fill="none" stroke="#F8E8E0" strokeWidth="0.5" opacity="0.2" />

        {/* Ring of tiny dots */}
        {Array.from({ length: 18 }).map((_, i) => {
          const a = (i / 18) * Math.PI * 2
          return (
            <circle
              key={i}
              cx={60 + Math.cos(a) * 29}
              cy={60 + Math.sin(a) * 29}
              r="0.9"
              fill="#F8E8E0"
              opacity="0.3"
            />
          )
        })}

        {/* Monogram */}
        <text
          x="60" y="57"
          textAnchor="middle"
          fill="#F8E8E0"
          fontSize="17"
          fontFamily="'Great Vibes', cursive"
          opacity="0.95"
        >
          H &amp; N
        </text>

        {/* Heart */}
        <text
          x="60" y="74"
          textAnchor="middle"
          fill="#F8E8E0"
          fontSize="11"
          opacity="0.65"
        >
          ♥
        </text>

        {/* Top-left highlight ellipse for 3D effect */}
        <ellipse cx="44" cy="34" rx="11" ry="7" fill="white" opacity="0.07" />
      </svg>
    </div>
  )
}
