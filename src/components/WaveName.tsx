'use client'

import { useState } from 'react'

interface Props {
  name: string
}

export default function WaveName({ name }: Props) {
  const [waving, setWaving] = useState(false)
  const words = name.split(' ')
  const totalChars = words.reduce((sum, w) => sum + w.length, 0)

  const trigger = () => {
    if (waving) return
    setWaving(true)
    setTimeout(() => setWaving(false), totalChars * 40 + 500)
  }

  let charIndex = 0

  return (
    <h1
      className="text-hero font-display font-bold leading-[0.92] tracking-[-0.04em] uppercase cursor-pointer select-none"
      onClick={trigger}
    >
      {words.map((word, wi) => (
        <span key={wi} className="block whitespace-nowrap">
          {word.split('').map((letter) => {
            const idx = charIndex++
            return (
              <span
                key={idx}
                className="inline-block"
                style={waving ? {
                  animation: 'letter-wave 500ms ease both',
                  animationDelay: `${idx * 40}ms`,
                } : {}}
              >
                {letter}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
