import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const moodOptions = [
  { emoji: '🍽️', label: "I'm here for the food" },
  { emoji: '💃', label: "I'm hitting the dance floor" },
  { emoji: '😭', label: "I'm definitely crying" },
  { emoji: '📸', label: "I'm the photographer friend" },
]

const cryOptions = [
  { label: 'The Bride', emoji: '👰' },
  { label: 'The Groom', emoji: '🤵' },
  { label: 'The Parents', emoji: '👪' },
  { label: 'Me!', emoji: '🥺' },
]

export default function RSVPForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: '',
    guests: '1',
    cryPoll: '',
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
      <section className="py-16 px-6 bg-gradient-to-b from-blush to-cream">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h2 className="font-script text-4xl text-maroon mb-3">Thank You!</h2>
          <p className="font-serif text-maroon/70 text-sm">
            We're so excited to celebrate with you!
          </p>
          <p className="mt-2 text-xs text-maroon/50">
            {formData.name}, your RSVP has been recorded.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blush to-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <p className="font-serif text-maroon/60 text-xs tracking-[0.4em] uppercase mb-2">
            Will You Be There?
          </p>
          <h2 className="font-script text-4xl text-maroon">RSVP</h2>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map(s => (
            <motion.div
              key={s}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${s === step ? 'bg-gold' : s < step ? 'bg-gold/60' : 'bg-gold/20'}`}
              animate={s === step ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 min-h-[280px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-maroon text-lg mb-4">Your Details</h3>
                
                <div>
                  <label className="block text-xs text-maroon/60 mb-1 font-sans">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gold/30 bg-cream/50 text-sm text-maroon placeholder-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-maroon/60 mb-1 font-sans">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-2.5 rounded-lg border border-gold/30 bg-cream/50 text-sm text-maroon placeholder-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-maroon/60 mb-1 font-sans">Will you attend?</label>
                  <div className="flex gap-3">
                    {['Joyfully Accept', 'Respectfully Decline'].map(option => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateField('attending', option)}
                        className={`flex-1 py-2.5 rounded-lg text-xs font-sans transition-all cursor-pointer ${
                          formData.attending === option
                            ? 'bg-gold text-white shadow-md'
                            : 'bg-cream border border-gold/30 text-maroon/70 hover:border-gold'
                        }`}
                      >
                        {option === 'Joyfully Accept' ? '🎉 ' : '😢 '}{option}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Guest Count */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-maroon text-lg mb-4">Number of Guests</h3>
                
                <div className="flex items-center justify-center gap-6 py-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateField('guests', String(Math.max(1, parseInt(formData.guests) - 1)))}
                    className="w-10 h-10 rounded-full border-2 border-gold/40 flex items-center justify-center text-gold text-xl cursor-pointer hover:bg-gold/10"
                  >
                    −
                  </motion.button>
                  <span className="font-serif text-4xl text-maroon w-12 text-center">{formData.guests}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateField('guests', String(Math.min(10, parseInt(formData.guests) + 1)))}
                    className="w-10 h-10 rounded-full border-2 border-gold/40 flex items-center justify-center text-gold text-xl cursor-pointer hover:bg-gold/10"
                  >
                    +
                  </motion.button>
                </div>
                <p className="text-center text-xs text-maroon/50">Including yourself</p>
              </motion.div>
            )}

            {/* Step 3: Fun Poll */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="font-serif text-maroon text-lg">Fun Questions! 🎉</h3>
                
                {/* Who will cry first */}
                <div>
                  <p className="text-sm text-maroon/70 mb-3 font-sans">Who will cry first at the wedding?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cryOptions.map(option => (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => updateField('cryPoll', option.label)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-sans transition-all cursor-pointer ${
                          formData.cryPoll === option.label
                            ? 'bg-maroon text-white shadow-md'
                            : 'bg-cream border border-maroon/20 text-maroon/70 hover:border-maroon/40'
                        }`}
                      >
                        {option.emoji} {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Wedding mood */}
                <div>
                  <p className="text-sm text-maroon/70 mb-3 font-sans">Your wedding mood?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {moodOptions.map(option => (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => updateField('mood', option.label)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-sans transition-all cursor-pointer text-left ${
                          formData.mood === option.label
                            ? 'bg-gold text-white shadow-md'
                            : 'bg-cream border border-gold/30 text-maroon/70 hover:border-gold'
                        }`}
                      >
                        {option.emoji} {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Message */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-maroon text-lg mb-4">Blessings & Wishes 💌</h3>
                
                <textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Write your wishes for the couple..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gold/30 bg-cream/50 text-sm text-maroon placeholder-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                />

                {/* Summary */}
                <div className="bg-cream rounded-lg p-4 border border-gold/20 text-left">
                  <p className="text-xs text-maroon/50 mb-2 uppercase tracking-wider">Summary</p>
                  <div className="space-y-1 text-xs text-maroon/70">
                    <p>👤 {formData.name || '—'}</p>
                    <p>📱 {formData.phone || '—'}</p>
                    <p>✅ {formData.attending || '—'}</p>
                    <p>👥 {formData.guests} guest(s)</p>
                    <p>😢 Cry vote: {formData.cryPoll || '—'}</p>
                    <p>🎭 Mood: {formData.mood || '—'}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6 pt-4 border-t border-gold/10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className={`px-5 py-2 rounded-full text-xs font-sans cursor-pointer ${
                step === 1 ? 'invisible' : 'bg-cream border border-gold/30 text-maroon/70 hover:border-gold'
              }`}
            >
              ← Back
            </motion.button>

            {step < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(200, 169, 81, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="px-6 py-2 bg-gradient-to-r from-gold-dark to-gold text-white rounded-full text-xs font-sans shadow-md cursor-pointer"
              >
                Next →
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(128, 0, 32, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="px-6 py-2 bg-gradient-to-r from-maroon to-maroon-light text-white rounded-full text-xs font-sans shadow-md cursor-pointer"
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
