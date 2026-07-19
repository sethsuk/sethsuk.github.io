'use client'

import { useState } from 'react'

export default function PhillyEasterEgg({ location, className }: { location: string; className?: string }) {
  const [visible, setVisible]     = useState(true)
  const [showBirds, setShowBirds] = useState(false)

  const handleEnter = () => {
    setVisible(false)
    setTimeout(() => { setShowBirds(true);  setVisible(true) }, 150)
  }

  const handleLeave = () => {
    setVisible(false)
    setTimeout(() => { setShowBirds(false); setVisible(true) }, 150)
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`p-3 -m-3 w-fit ${className ?? 'font-display font-medium text-sm tracking-label uppercase select-none'}`}
      style={{ display: 'inline-grid' }}
    >
      {/* invisible anchors — container stays as wide as whichever string is wider */}
      <span style={{ gridArea: '1/1', visibility: 'hidden', pointerEvents: 'none' }} aria-hidden>{location}</span>
      <span style={{ gridArea: '1/1', visibility: 'hidden', pointerEvents: 'none' }} aria-hidden>GO BIRDS!</span>
      <span
        style={{
          gridArea: '1/1',
          opacity: visible ? 1 : 0,
          transition: 'opacity 150ms ease, color 150ms ease',
          color: showBirds ? 'var(--eagles-green)' : undefined,
        }}
      >
        {showBirds ? 'GO BIRDS!' : location}
      </span>
    </div>
  )
}
