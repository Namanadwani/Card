import HeroSection    from './HeroSection'
import InviteSection  from './InviteSection'
import CeremonyCards  from './CeremonyCards'
import CoupleSection  from './CoupleSection'
import ThingsToKnow   from './ThingsToKnow'
import Footer         from './Footer'

export default function MainContent() {
  return (
    <div style={{ background: '#0D0500' }}>
      {/* 1. Full-screen hero with lanterns + names */}
      <HeroSection />

      {/* 2. Invite / family blessing / big names */}
      <InviteSection />

      {/* 3. Event cards (horizontal scroll) + See the route CTA */}
      <CeremonyCards />

      {/* 4. Meet the bride & groom + RSVP CTA */}
      <CoupleSection />

      {/* 5. Things to know + Instagram CTA */}
      <ThingsToKnow />

      {/* 6. Footer with live countdown */}
      <Footer />
    </div>
  )
}
