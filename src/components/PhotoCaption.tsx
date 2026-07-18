'use client'

import { useState } from 'react'
import type { Photo } from '@/lib/photos'

function Badge({ text, align }: { text: string; align: 'left' | 'right' }) {
  return (
    <span
      className={`pop-badge absolute -top-8 ${align === 'left' ? 'left-0' : 'right-0'} bg-[var(--bg)] text-[var(--ink)] font-display font-bold text-[10px] tracking-label uppercase px-2 py-1 whitespace-nowrap pointer-events-none z-10`}
    >
      {text}
    </span>
  )
}

export default function PhotoCaption({ photo }: { photo: Photo }) {
  const [showCountry, setShowCountry] = useState(false)
  const [showGear, setShowGear] = useState(false)

  const handleLocation = () => {
    if (!photo.country || showCountry) return
    setShowCountry(true)
    setTimeout(() => setShowCountry(false), 1500)
  }

  const handleGear = () => {
    if (!photo.gear || showGear) return
    setShowGear(true)
    setTimeout(() => setShowGear(false), 1500)
  }

  if (!photo.location && !photo.medium) return null

  return (
    <div className="flex-1 bg-ink text-bg px-4 py-2 font-display text-xs tracking-label uppercase select-none flex justify-between items-center">
      <button
        onClick={handleLocation}
        className={`relative ${photo.country ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {photo.location}
        {showCountry && photo.country && <Badge text={photo.country} align="left" />}
      </button>
      {photo.medium && (
        <button
          onClick={handleGear}
          className={`relative opacity-60 ${photo.gear ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {photo.medium}
          {showGear && photo.gear && <Badge text={photo.gear} align="right" />}
        </button>
      )}
    </div>
  )
}
