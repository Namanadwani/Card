import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const moodOptions = [
  { emoji: '🍽️', label: "Here for the food" },
  { emoji: '💃', label: "Dance floor legend" },
  { emoji: '😭', label: "Definitely crying" },
  { emoji: '📸', label: "Photographer friend" },
  { emoji: '🎤', label: "Karaoke king/queen" },
  { emoji: '🛋️', label: "VIP couch sitter" },
]

const emotionalOptions = [
  { label: 'The Bride', emoji: '👰' },
  { label: 'The Groom', emoji: '🤵' },
  { label: 'Both Parents', emoji: '👪' },
  { label: 'Me, obviously!', emoji: '🥺' },
  { label: 'The DJ', emoji: '🎧' },
  { label: 'Everyone!', emoji: '😭' },
]

export default function RSVPForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: '',
    guests: '1',
    emotional: '',
    mood: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = () => {
    console.log('RSVP Data:', JSON.stringify(formData, null, 2))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-blush to-cream">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="max-w-md mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 5, -5, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-7xl mb-6"
          >
            🎉
          </motion.div>
          <h2 className="font-script text-5xl text-maroon mb-4">Thank You!</h2>
          <p className="font-serif text-maroon/60 text-sm font-light">
            We're so excited to celebrate with you, {formData.name}!
          </p>
          <p className="mt-3 text-xs text-maroon/40 font-sans">
            Your RSVP has been recorded. See you on June 21st!
          </p>
          <motion.p
            className="mt-4 font-serif text-gold-dark text-xs tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            #HarshHitTheJackpot
          </motion.p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blush/50 to-cream">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <p className="font-serif text-maroon/50 text-xs tracking-[0.4em] uppercase mb-2 font-light">
            Will You Be There?
          </p>
          <h2 className="font-script text-5xl text-maroon">RSVP</h2>
        </div>

        {/* Progress bar */}
        <div className="relative mb-8">
          <div className="h-0.5 bg-gold/10 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {['Details', 'Guests', 'Fun!', 'Wishes'].map((label, i) => (
              <span
                key={label}
                className={`text-[9px] font-sans transition-colors ${
                  i + 1 <= step ? 'text-gold-dark' : 'text-maroon/20'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gold/10 min-h-[320px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Your Details</h3>

                <div>
                  <label className="block text-[10px] text-maroon/50 mb-1.5 font-sans uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/50 text-sm text-maroon placeholder-maroon/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-maroon/50 mb-1.5 font-sans uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/50 text-sm text-maroon placeholder-maroon/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-maroon/50 mb-1.5 font-sans uppercase tracking-wider">Will you attend?</label>
                  <div className="flex gap-3">
                    {['Joyfully Accept', 'Respectfully Decline'].map(option => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateField('attending', option)}
                        className={`flex-1 py-3 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                          formData.attending === option
                            ? 'bg-gradient-to-r from-gold-dark to-gold text-white shadow-md'
                            : 'bg-cream border border-gold/20 text-maroon/60 hover:border-gold/40'
                        }`}
                      >
                        {option === 'Joyfully Accept' ? '🎉 ' : '😢 '}{option}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="font-serif text-maroon text-lg font-light">How Many Guests?</h3>

                <div className="flex items-center justify-center gap-8 py-10">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateField('guests', String(Math.max(1, parseInt(formData.guests) - 1)))}
                    className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center text-gold text-2xl cursor-pointer hover:bg-gold/5 transition-colors"
                  >
                    −
                  </motion.button>
                  <motion.span
                    key={formData.guests}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-serif text-6xl text-maroon w-16 text-center"
                  >
                    {formData.guests}
                  </motion.span>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateField('guests', String(Math.min(10, parseInt(formData.guests) + 1)))}
                    className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center text-gold text-2xl cursor-pointer hover:bg-gold/5 transition-colors"
                  >
                    +
                  </motion.button>
                </div>
                <p className="text-center text-xs text-maroon/40 font-sans">Including yourself</p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Fun Time! 🎉</h3>

                {/* Who gets emotional */}
                <div>
                  <p className="text-xs text-maroon/60 mb-3 font-sans font-medium">
                    Who will get emotional first? 😢
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {emotionalOptions.map(option => (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateField('emotional', option.label)}
                        className={`py-2.5 px-2 rounded-xl text-[10px] font-sans transition-all cursor-pointer flex flex-col items-center gap-1 ${
                          formData.emotional === option.label
                            ? 'bg-maroon text-white shadow-md scale-105'
                            : 'bg-cream border border-maroon/10 text-maroon/60 hover:border-maroon/30'
                        }`}
                      >
                        <span className="text-lg">{option.emoji}</span>
                        <span className="leading-tight">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Wedding mood selector */}
                <div>
                  <p className="text-xs text-maroon/60 mb-3 font-sans font-medium">
                    Your Wedding Mood? 🎭
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {moodOptions.map(option => (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => updateField('mood', option.label)}
                        className={`py-2.5 px-3 rounded-xl text-[10px] font-sans transition-all cursor-pointer text-left flex items-center gap-2 ${
                          formData.mood === option.label
                            ? 'bg-gradient-to-r from-gold-dark to-gold text-white shadow-md'
                            : 'bg-cream border border-gold/15 text-maroon/60 hover:border-gold/30'
                        }`}
                      >
                        <span className="text-base">{option.emoji}</span>
                        <span>{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="font-serif text-maroon text-lg font-light">Blessings & Wishes 💌</h3>

                <textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Write your wishes for Harshit & Neha..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/50 text-sm text-maroon placeholder-maroon/25 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all resize-none font-sans"
                />

                {/* Summary card */}
                <div className="bg-gradient-to-br from-cream to-blush/30 rounded-xl p-4 border border-gold/10">
                  <p className="text-[9px] text-maroon/40 mb-2 uppercase tracking-wider font-sans">Your RSVP Summary</p>
                  <div className="grid grid-cols-2 gap-y-1.5 text-[10px] text-maroon/60 font-sans">
                    <p>👤 {formData.name || '—'}</p>
                    <p>📱 {formData.phone || '—'}</p>
                    <p>✅ {formData.attending ? (formData.attending === 'Joyfully Accept' ? 'Attending' : 'Declined') : '—'}</p>
                    <p>👥 {formData.guests} guest(s)</p>
                    <p>😢 {formData.emotional || '—'}</p>
                    <p>🎭 {formData.mood || '—'}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-4 border-t border-gold/5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className={`px-5 py-2.5 rounded-full text-xs font-sans cursor-pointer ${
                step === 1 ? 'invisible' : 'bg-cream border border-gold/20 text-maroon/60 hover:border-gold/40'
              }`}
            >
              ← Back
            </motion.button>

            {step < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(200, 169, 81, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-white rounded-full text-xs font-sans shadow-md cursor-pointer"
              >
                Next →
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(128, 0, 32, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="px-6 py-2.5 bg-gradient-to-r from-maroon to-maroon-light text-white rounded-full text-xs font-sans shadow-md cursor-pointer"
              >
                Send RSVP 💌
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
