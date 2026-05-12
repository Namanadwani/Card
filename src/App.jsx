import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import MainContent from './components/MainContent'

function App() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="min-h-screen bg-cream">
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <Landing key="landing" onReveal={() => setIsRevealed(true)} />
        ) : (
          <MainContent key="content" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
