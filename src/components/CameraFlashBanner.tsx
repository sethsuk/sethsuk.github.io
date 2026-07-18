'use client'

import { useState } from 'react'

export default function CameraFlashBanner() {
  const [clicked, setClicked] = useState(false)

  const trigger = () => {
    if (clicked) return
    setClicked(true)
    setTimeout(() => setClicked(false), 1500)
  }

  return (
    <div className="px-6 md:px-16 py-3 font-display font-bold text-xs tracking-label uppercase select-none border-b-2 border-ink bg-yellow text-ink dark:bg-[#2C2924] dark:text-ink">
      <button onClick={trigger} className="relative cursor-pointer">
        Photography
        {clicked && (
          <span className="copied-badge-down absolute top-full mt-1 left-1/2 bg-ink text-bg font-display font-bold text-base tracking-label uppercase px-2 py-1 whitespace-nowrap pointer-events-none z-10">
            📸
          </span>
        )}
      </button>
    </div>
  )
}
