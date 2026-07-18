'use client'

import { useState, useEffect } from 'react'

const ROLES = ['SOFTWARE ENGINEER', 'PHOTOGRAPHER', 'FOODIE', 'BUDGET AUDIOPHILE', 'KILROY'] as const
const TYPE_MS  = 60
const ERASE_MS = 35
const HOLD_MS  = 2200

export default function RoleCycler() {
  const [text, setText]       = useState<string>(ROLES[0])
  const [roleIdx, setRoleIdx] = useState(0)
  const [phase, setPhase]     = useState<'hold' | 'erase' | 'type'>('hold')

  useEffect(() => {
    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('erase'), HOLD_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'erase') {
      if (text.length === 0) {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setPhase('type')
        return
      }
      const t = setTimeout(() => setText((s) => s.slice(0, -1)), ERASE_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'type') {
      const target = ROLES[roleIdx]
      if (text === target) {
        setPhase('hold')
        return
      }
      const t = setTimeout(
        () => setText(target.slice(0, text.length + 1)),
        TYPE_MS,
      )
      return () => clearTimeout(t)
    }
  }, [phase, text, roleIdx])

  return (
    <p className="font-display font-medium text-sm tracking-label uppercase">
      {text}
      <span className="typewriter-cursor" aria-hidden>|</span>
    </p>
  )
}
