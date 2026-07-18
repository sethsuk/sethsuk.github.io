'use client'

import { useState, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&'

export default function ScrambleHeading({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text)
  const [active, setActive] = useState(false)
  const rafRef = useRef<number | undefined>(undefined)

  const trigger = () => {
    if (active) return
    setActive(true)
    if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)

    const original = text.split('')
    const startTime = performance.now()
    const SCRAMBLE_HOLD = 600
    const RESOLVE_SPREAD = 700
    const CYCLE_MS = 60 // how often random chars change
    let lastCycleTime = -Infinity

    const tick = (now: number) => {
      const elapsed = now - startTime
      const shouldCycle = now - lastCycleTime >= CYCLE_MS

      if (shouldCycle) {
        lastCycleTime = now
        const chars = original.map((char, i) => {
          if (char === ' ') return ' '
          const resolveAt = SCRAMBLE_HOLD + (i / Math.max(original.length - 1, 1)) * RESOLVE_SPREAD
          if (elapsed >= resolveAt) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        setDisplay(chars.join(''))
      }

      if (elapsed < SCRAMBLE_HOLD + RESOLVE_SPREAD + 50) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
        setActive(false)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  return (
    <h1
      onClick={trigger}
      className={`cursor-pointer select-none w-fit py-3 px-5 -my-3 -mx-5 ${className ?? ''}`}
    >
      {display}
    </h1>
  )
}
