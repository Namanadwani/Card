import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MOOD_OPTIONS = [
  { emoji: '🍽️', label: 'Here for the food'    },
  { emoji: '💃', label: 'Dance floor legend'   },
  { emoji: '😭', label: 'Definitely crying'    },
  { emoji: '📸', label: 'Photographer friend'  },
  { emoji: '🎤', label: 'Karaoke king/queen'   },
  { emoji: '🛋️', label: 'VIP couch sitter'     },
]

const EMOTIONAL_OPTIONS = [
  { emoji: '👰', label: 'The Bride'       },
  { emoji: '🤵', label: 'The Groom'       },
  { emoji: '👪', label: 'Both Parents'    },
  { emoji: '🥺', label: 'Me, obviously!'  },
  { emoji: '🎧', label: 'The DJ'          },
  { emoji: '😭', label: 'Everyone!'       },
]

const STEPS = ['Details', 'Guests', 'Fun!', 'Wishes']

export default function RSVPForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    name: '', phone: '', attending: '', guests: '1',
    emotional: '', mood: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => setData(p => ({ ...p, [k]: v }))
  const next = () => setStep(s => Math.min(s + 1, 4))
  const prev = () => setStep(s => Math.max(s - 1, 1))
  const submit = () => { console.log('RSVP:', data); setSubmitted(true) }

  /* ── Success screen ── */
  if (submitted) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-blush/60 to-cream">
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="max-w-sm mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 12, -10, 6, -4, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-7xl mb-6"
          >
            🎉
          </motion.div>
          <h2 className="font-script text-5xl text-maroon mb-3">Thank You!</h2>
          <p className="font-serif text-maroon/55 text-sm">
            We're so excited to celebrate with you, {data.name || 'dear guest'}!
          </p>
          <p className="mt-2 font-sans text-maroon/35 text-xs">
            Your RSVP is confirmed for 22nd June 2026.
          </p>
          <motion.p
            className="mt-5 font-sans text-gold-dark/60 text-xs tracking-widest"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            #HarshHitTheJackpot
          </motion.p>
        </motion.div>
      </section>
    )
  }

  /* ── Form ── */
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blush/40 to-cream">
      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', bounce: 0.28 }}
        className="max-w-sm mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="font-serif text-maroon/45 text-xs tracking-[0.45em] uppercase mb-2">
            Will You Be There?
          </p>
          <h2 className="font-script text-5xl text-maroon">RSVP</h2>
        </div>

        {/* Progress bar */}
        <div className="mb-7">
          <div className="h-0.5 bg-gold/12 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.45 }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            {STEPS.map((lbl, i) => (
              <span key={lbl}
                className={`font-sans text-[9px] transition-colors ${i + 1 <= step ? 'text-gold-dark' : 'text-maroon/22'}`}>
                {lbl}
              </span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gold/10 min-h-[310px]">
          <AnimatePresence mode="wait">

            {/* ── Step 1: Details ── */}
            {step === 1 && (
              <motion.div key="s1"
                initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -44 }}
                transition={{ duration: 0.28 }}
                className="space-y-5"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Your Details</h3>

                {/* Name */}
                <div>
                  <label className="block font-sans text-[10px] text-maroon/45 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text" value={data.name}
                    onChange={e => set('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/50
                               text-sm text-maroon placeholder-maroon/25
                               focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all font-sans"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans text-[10px] text-maroon/45 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel" value={data.phone}
                    onChange={e => set('phone', e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/50
                               text-sm text-maroon placeholder-maroon/25
                               focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all font-sans"
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="block font-sans text-[10px] text-maroon/45 uppercase tracking-wider mb-1.5">
                    Will You Attend?
                  </label>
                  <div className="flex gap-3">
                    {['Joyfully Accept', 'Respectfully Decline'].map(opt => (
                      <motion.button key={opt}
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        onClick={() => set('attending', opt)}
                        className={`flex-1 py-3 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                          data.attending === opt
                            ? 'bg-gradient-to-r from-gold-dark to-gold text-white shadow-md'
                            : 'bg-cream border border-gold/20 text-maroon/55 hover:border-gold/40'
                        }`}
                      >
                        {opt === 'Joyfully Accept' ? '🎉 Accept' : '😢 Decline'}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Guests ── */}
            {step === 2 && (
              <motion.div key="s2"
                initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -44 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Number of Guests</h3>

                <div className="flex items-center justify-center gap-10 py-10">
                  <motion.button whileHover={{ scale: 1.18 }} whileTap={{ scale: 0.88 }}
                    onClick={() => set('guests', String(Math.max(1, +data.guests - 1)))}
                    className="w-12 h-12 rounded-full border-2 border-gold/30 text-gold text-2xl
                               flex items-center justify-center cursor-pointer hover:bg-gold/6 transition-colors"
                  >−</motion.button>

                  <motion.span key={data.guests}
                    initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="font-serif text-6xl text-maroon w-14 text-center"
                  >{data.guests}</motion.span>

                  <motion.button whileHover={{ scale: 1.18 }} whileTap={{ scale: 0.88 }}
                    onClick={() => set('guests', String(Math.min(10, +data.guests + 1)))}
                    className="w-12 h-12 rounded-full border-2 border-gold/30 text-gold text-2xl
                               flex items-center justify-center cursor-pointer hover:bg-gold/6 transition-colors"
                  >+</motion.button>
                </div>

                <p className="text-center font-sans text-[10px] text-maroon/35">
                  Including yourself
                </p>
              </motion.div>
            )}

            {/* ── Step 3: Fun polls ── */}
            {step === 3 && (
              <motion.div key="s3"
                initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -44 }}
                transition={{ duration: 0.28 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Fun Time! 🎉</h3>

                {/* Who gets emotional */}
                <div>
                  <p className="font-sans text-[11px] text-maroon/55 font-medium mb-2.5">
                    Who will get emotional first? 😢
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {EMOTIONAL_OPTIONS.map(o => (
                      <motion.button key={o.label}
                        whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
                        onClick={() => set('emotional', o.label)}
                        className={`py-2.5 px-1 rounded-xl text-[10px] font-sans
                                    flex flex-col items-center gap-1 cursor-pointer transition-all ${
                          data.emotional === o.label
                            ? 'bg-maroon text-white shadow-md scale-105'
                            : 'bg-cream border border-maroon/10 text-maroon/55 hover:border-maroon/30'
                        }`}
                      >
                        <span className="text-lg">{o.emoji}</span>
                        <span className="leading-tight text-center">{o.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Wedding mood */}
                <div>
                  <p className="font-sans text-[11px] text-maroon/55 font-medium mb-2.5">
                    Your Wedding Mood? 🎭
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {MOOD_OPTIONS.map(o => (
                      <motion.button key={o.label}
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        onClick={() => set('mood', o.label)}
                        className={`py-2.5 px-3 rounded-xl text-[10px] font-sans
                                    flex items-center gap-2 cursor-pointer transition-all ${
                          data.mood === o.label
                            ? 'bg-gradient-to-r from-gold-dark to-gold text-white shadow-md'
                            : 'bg-cream border border-gold/15 text-maroon/55 hover:border-gold/30'
                        }`}
                      >
                        <span className="text-base">{o.emoji}</span>
                        <span>{o.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 4: Wishes ── */}
            {step === 4 && (
              <motion.div key="s4"
                initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -44 }}
                transition={{ duration: 0.28 }}
                className="space-y-5"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Blessings &amp; Wishes 💌</h3>

                <textarea
                  value={data.message}
                  onChange={e => set('message', e.target.value)}
                  placeholder="Write your wishes for Harshit & Neha…"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/50
                             text-sm text-maroon placeholder-maroon/25 resize-none
                             focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all font-sans"
                />

                {/* Summary */}
                <div className="bg-gradient-to-br from-cream to-blush/30 rounded-xl p-4 border border-gold/10">
                  <p className="font-sans text-[9px] text-maroon/38 uppercase tracking-wider mb-2">
                    Your RSVP Summary
                  </p>
                  <div className="grid grid-cols-2 gap-y-1.5 font-sans text-[10px] text-maroon/55">
                    <p>👤 {data.name     || '—'}</p>
                    <p>📱 {data.phone    || '—'}</p>
                    <p>✅ {data.attending ? (data.attending === 'Joyfully Accept' ? 'Attending' : 'Declined') : '—'}</p>
                    <p>👥 {data.guests} guest(s)</p>
                    <p>😢 {data.emotional || '—'}</p>
                    <p>🎭 {data.mood      || '—'}</p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-7 pt-4 border-t border-gold/8">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={prev}
              className={`px-5 py-2.5 rounded-full text-xs font-sans cursor-pointer ${
                step === 1
                  ? 'invisible'
                  : 'bg-cream border border-gold/20 text-maroon/55 hover:border-gold/40'
              }`}
            >
              ← Back
            </motion.button>

            {step < 4
              ? (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(200,169,81,0.28)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={next}
                  className="px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold
                             text-white rounded-full text-xs font-sans shadow-md cursor-pointer"
                >
                  Next →
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(128,0,32,0.28)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={submit}
                  className="px-6 py-2.5 bg-gradient-to-r from-maroon to-maroon-light
                             text-white rounded-full text-xs font-sans shadow-md cursor-pointer"
                >
                  Send RSVP 💌
                </motion.button>
              )
            }
          </div>
        </div>
      </motion.div>
    </section>
  )
}
