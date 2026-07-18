'use client'

import { useState } from 'react'

export default function PhillyEasterEgg({ location, className }: { location: string; className?: string }) {
  const [text, setText]       = useState(location)
  const [visible, setVisible] = useState(true)
  const [active, setActive]   = useState(false)

  const handleHover = () => {
    if (active) return
    setActive(true)

    // fade out → swap to GO BIRDS → fade in
    setVisible(false)
    setTimeout(() => {
      setText('GO BIRDS!')
      setVisible(true)

      // hold → fade out → swap back → fade in
      setTimeout(() => {
        setVisible(false)
        setTimeout(() => {
          setText(location)
          setVisible(true)
          setActive(false)
        }, 150)
      }, 500)
    }, 150)
  }

  return (
    <p
      onMouseEnter={handleHover}
      className={`p-3 -m-3 w-fit ${className ?? 'font-display font-medium text-sm tracking-label uppercase select-none'}`}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 150ms ease, color 150ms ease',
        color: text === 'GO BIRDS!' ? 'var(--eagles-green)' : undefined,
      }}
    >
      {text}
    </p>
  )
}
