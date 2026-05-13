import { useState } from 'react'
import EnvelopeLanding from './components/EnvelopeLanding'
import MainContent     from './components/MainContent'

export default function App() {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      {/* Envelope intro — sits on top until user taps the seal */}
      {!revealed && <EnvelopeLanding onReveal={() => setRevealed(true)} />}

      {/* Main invitation content — always mounted so it loads in background */}
      <div style={{ visibility: revealed ? 'visible' : 'hidden' }}>
        <MainContent />
      </div>
    </>
  )
}
