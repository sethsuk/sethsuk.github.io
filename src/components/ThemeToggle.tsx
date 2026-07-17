'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  if (!mounted) {
    return (
      <span className="font-display font-bold text-xs tracking-label border border-ink px-3 py-1.5 opacity-0 select-none">
        DARK
      </span>
    )
  }

  return (
    <button
      onClick={toggle}
      className="font-display font-bold text-xs tracking-label border border-ink px-3 py-1.5 hover:bg-ink hover:text-bg transition-colors select-none"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? 'LIGHT' : 'DARK'}
    </button>
  )
}
