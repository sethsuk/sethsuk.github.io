'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

const ACCENTS = ['#D4351C', '#F2C94C'] as const
type AccentColor = typeof ACCENTS[number]

interface AccentCtx {
  canvasColor: AccentColor
  bannerColor: AccentColor
}

const AccentContext = createContext<AccentCtx>({
  canvasColor: '#D4351C',
  bannerColor: '#F2C94C',
})

export function AccentProvider({ children }: { children: ReactNode }) {
  const [canvasColor, setCanvasColor] = useState<AccentColor>('#D4351C')

  useEffect(() => {
    setCanvasColor(ACCENTS[Math.floor(Math.random() * ACCENTS.length)])
  }, [])

  const bannerColor: AccentColor = canvasColor === '#D4351C' ? '#F2C94C' : '#D4351C'

  return (
    <AccentContext.Provider value={{ canvasColor, bannerColor }}>
      {children}
    </AccentContext.Provider>
  )
}

export const useAccent = () => useContext(AccentContext)
