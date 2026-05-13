import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEPS = ['You', 'Guests', 'Vibe', 'Done']

const MOOD = [
  { e: '🍽️', l: 'Here for the food'    },
  { e: '💃', l: 'Dance floor all night' },
  { e: '😭', l: 'Will definitely cry'   },
  { e: '📸', l: 'Unofficial photographer'},
  { e: '🎤', l: 'Karaoke champion'       },
  { e: '🛋️', l: 'VIP couch sitter'       },
]

const CRY_FIRST = [
  { e: '👰', l: 'The Bride'    },
  { e: '🤵', l: 'The Groom'    },
  { e: '👪', l: 'The Parents'  },
  { e: '🥺', l: 'Me!'          },
  { e: '🎧', l: 'The DJ'       },
  { e: '😭', l: 'Everyone!'    },
]

function GoldLine() {
  return (
    <div className="w-20 h-px mx-auto my-5"
      style={{ background: 'linear-gradient(90deg,transparent,#C8A95160,transparent)' }} />
  )
}

function PillBtn({ active, onClick, children, accent = '#45A086' }) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="w-full py-3 px-4 rounded-xl text-sm text-left transition-all cursor-pointer"
      style={{
        fontFamily: 'Yaldevi, sans-serif',
        background: active ? `${accent}22` : 'rgba(255,255,255,0.04)',
        border: active ? `1.5px solid ${accent}` : '1.5px solid rgba(255,255,255,0.1)',
        color: active ? accent : '#F3ECBA90',
      }}
    >
      {children}
    </motion.button>
  )
}

function Input({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 11, color: '#F3ECBA60', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl outline-none"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1.5px solid rgba(200,169,81,0.25)',
          color: '#F3ECBA',
          fontFamily: 'Yaldevi, sans-serif',
          fontSize: 15,
        }}
      />
    </div>
  )
}

export default function RSVPSection() {
  const [step, setStep]   = useState(0)
  const [done, setDone]   = useState(false)
  const [data, setData]   = useState({
    name: '', phone: '', attending: '',
    guests: '1', cry: '', mood: '', wish: '',
  })

  const set = (k, v) => setData(p => ({ ...p, [k]: v }))
  const next = () => setStep(s => Math.min(s + 1, 3))
  const prev = () => setStep(s => Math.max(s - 1, 0))
  const submit = () => { console.log('RSVP:', data); setDone(true) }

  return (
    <section
      id="rsvp"
      className="w-full px-6 py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0A0400, #160800 40%, #0A0400)' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(200,169,81,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-sm mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'Aboreto, cursive', fontSize: 'clamp(36px,10vw,60px)', color: '#F3ECBA', lineHeight: 1.1 }}
          >
            Please RSVP
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-2"
            style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 14, color: '#F3ECBA60' }}
          >
            Kindly respond by 10th June 2026
          </motion.p>
          <GoldLine />
        </div>

        {/* ── Success screen ── */}
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.4 }}
              className="text-center py-12 space-y-4"
            >
              <div className="text-6xl">🎉</div>
              <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 32, color: '#F3ECBA' }}>
                Thank you, {data.name || 'Dear Guest'}!
              </p>
              <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 15, color: '#F3ECBA70', lineHeight: 1.6 }}>
                Your RSVP is confirmed.<br/>We can't wait to celebrate with you on 22nd June 2026!
              </p>
              <p style={{ fontFamily: 'Aboreto, cursive', fontSize: 13, color: '#C8A951', opacity: 0.7, letterSpacing: '0.2em', marginTop: 8 }}>
                #HarshHitTheJackpot
              </p>
            </motion.div>

          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              {/* Step dots */}
              <div className="flex justify-center gap-2 mb-6">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex flex-col items-center gap-1">
                    <div
                      className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                      style={{ background: i <= step ? '#C8A951' : 'rgba(200,169,81,0.2)' }}
                    />
                    <span style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 9, color: i <= step ? '#C8A951' : '#F3ECBA30', letterSpacing: '0.1em' }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(200,169,81,0.18)',
                  backdropFilter: 'blur(8px)',
                  minHeight: 320,
                }}
              >
                <AnimatePresence mode="wait">

                  {/* ── Step 0: Your Details ── */}
                  {step === 0 && (
                    <motion.div key="s0"
                      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }} className="space-y-5"
                    >
                      <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 22, color: '#F3ECBA' }}>
                        Your Details
                      </p>

                      <Input label="Full Name" value={data.name} onChange={v => set('name', v)} placeholder="Enter your name" />
                      <Input label="Phone" type="tel" value={data.phone} onChange={v => set('phone', v)} placeholder="+91 98XXX XXXXX" />

                      <div className="flex flex-col gap-1.5">
                        <label style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 11, color: '#F3ECBA60', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                          Will you attend?
                        </label>
                        <div className="flex gap-3">
                          {['Joyfully Yes 🎉', 'Cannot Make It 😢'].map(opt => (
                            <motion.button
                              key={opt}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => set('attending', opt)}
                              className="flex-1 py-3 rounded-xl text-sm cursor-pointer transition-all"
                              style={{
                                fontFamily: 'Yaldevi, sans-serif',
                                background: data.attending === opt ? '#C8A95122' : 'rgba(255,255,255,0.04)',
                                border: data.attending === opt ? '1.5px solid #C8A951' : '1.5px solid rgba(255,255,255,0.1)',
                                color: data.attending === opt ? '#C8A951' : '#F3ECBA60',
                              }}
                            >
                              {opt}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ── Step 1: Guest Count ── */}
                  {step === 1 && (
                    <motion.div key="s1"
                      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }} className="space-y-6"
                    >
                      <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 22, color: '#F3ECBA' }}>
                        Number of Guests
                      </p>

                      <div className="flex items-center justify-center gap-8 py-8">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => set('guests', String(Math.max(1, +data.guests - 1)))}
                          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer"
                          style={{ border: '1.5px solid rgba(200,169,81,0.4)', color: '#C8A951' }}
                        >
                          −
                        </motion.button>

                        <motion.span
                          key={data.guests}
                          initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                          style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 56, color: '#F3ECBA', minWidth: 56, textAlign: 'center' }}
                        >
                          {data.guests}
                        </motion.span>

                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => set('guests', String(Math.min(10, +data.guests + 1)))}
                          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer"
                          style={{ border: '1.5px solid rgba(200,169,81,0.4)', color: '#C8A951' }}
                        >
                          +
                        </motion.button>
                      </div>

                      <p className="text-center" style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 12, color: '#F3ECBA40' }}>
                        Including yourself
                      </p>
                    </motion.div>
                  )}

                  {/* ── Step 2: Vibe / Fun ── */}
                  {step === 2 && (
                    <motion.div key="s2"
                      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }} className="space-y-5"
                    >
                      <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 22, color: '#F3ECBA' }}>
                        Fun Time! 🎉
                      </p>

                      {/* Who cries first */}
                      <div>
                        <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 12, color: '#F3ECBA70', marginBottom: 8 }}>
                          Who cries first at the wedding? 😢
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {CRY_FIRST.map(o => (
                            <PillBtn
                              key={o.l}
                              active={data.cry === o.l}
                              onClick={() => set('cry', o.l)}
                              accent="#A07820"
                            >
                              {o.e} {o.l}
                            </PillBtn>
                          ))}
                        </div>
                      </div>

                      {/* Mood */}
                      <div>
                        <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 12, color: '#F3ECBA70', marginBottom: 8 }}>
                          Your wedding mood? 🎭
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {MOOD.map(o => (
                            <PillBtn
                              key={o.l}
                              active={data.mood === o.l}
                              onClick={() => set('mood', o.l)}
                              accent="#45A086"
                            >
                              {o.e} {o.l}
                            </PillBtn>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ── Step 3: Wishes ── */}
                  {step === 3 && (
                    <motion.div key="s3"
                      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }} className="space-y-5"
                    >
                      <p style={{ fontFamily: 'Cormorant Upright, serif', fontSize: 22, color: '#F3ECBA' }}>
                        Blessings &amp; Wishes 💌
                      </p>

                      <div className="flex flex-col gap-1.5">
                        <label style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 11, color: '#F3ECBA60', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                          Write a message for Harshit &amp; Neha
                        </label>
                        <textarea
                          rows={4}
                          value={data.wish}
                          onChange={e => set('wish', e.target.value)}
                          placeholder="Your heartfelt wishes…"
                          className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1.5px solid rgba(200,169,81,0.25)',
                            color: '#F3ECBA',
                            fontFamily: 'Yaldevi, sans-serif',
                            fontSize: 15,
                          }}
                        />
                      </div>

                      {/* Summary */}
                      <div className="rounded-xl p-4 space-y-1.5"
                        style={{ background: 'rgba(200,169,81,0.06)', border: '1px solid rgba(200,169,81,0.15)' }}>
                        <p style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 10, color: '#C8A95180', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                          Summary
                        </p>
                        {[
                          ['👤', data.name   || '—'],
                          ['📱', data.phone  || '—'],
                          ['✅', data.attending ? (data.attending.includes('Yes') ? 'Attending' : 'Declined') : '—'],
                          ['👥', `${data.guests} guest(s)`],
                          ['😢', data.cry    || '—'],
                          ['🎭', data.mood   || '—'],
                        ].map(([icon, val]) => (
                          <p key={icon} style={{ fontFamily: 'Yaldevi, sans-serif', fontSize: 12, color: '#F3ECBA70' }}>
                            {icon} {val}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-4"
                  style={{ borderTop: '1px solid rgba(200,169,81,0.1)' }}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={prev}
                    className={`px-5 py-2.5 rounded-full text-xs cursor-pointer ${step === 0 ? 'invisible' : ''}`}
                    style={{
                      fontFamily: 'Yaldevi, sans-serif',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(200,169,81,0.2)',
                      color: '#F3ECBA80',
                    }}
                  >
                    ← Back
                  </motion.button>

                  {step < 3 ? (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={next}
                      className="px-6 py-2.5 rounded-full text-xs cursor-pointer"
                      style={{
                        fontFamily: 'Yaldevi, sans-serif',
                        background: 'linear-gradient(135deg, #A07820, #C8A951)',
                        color: '#1B0A02',
                        fontWeight: 600,
                      }}
                    >
                      Next →
                    </motion.button>
                  ) : (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={submit}
                      className="px-6 py-2.5 rounded-full text-xs cursor-pointer"
                      style={{
                        fontFamily: 'Yaldevi, sans-serif',
                        background: 'linear-gradient(135deg, #45A086, #2D7A65)',
                        color: '#ffffff',
                        fontWeight: 600,
                      }}
                    >
                      Send RSVP 💌
                    </motion.button>
                  )}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
