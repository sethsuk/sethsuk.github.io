'use client'

import { useRef, useState } from 'react'

export default function KilroyBio() {
  const nameRef = useRef<HTMLSpanElement>(null)
  const [isDefault, setIsDefault] = useState(true)
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
    requestAnimationFrame(() => {
      const el = nameRef.current
      if (!el) return
      const range = document.createRange()
      range.selectNodeContents(el)
      const sel = window.getSelection()
      sel?.removeAllRanges()
      sel?.addRange(range)
    })
  }

  const handleBlur = () => {
    setFocused(false)
    const text = nameRef.current?.textContent?.trim().replace(/\n/g, '') ?? ''
    if (!text) {
      nameRef.current!.textContent = 'Kilroy'
      setIsDefault(true)
    } else {
      if (nameRef.current) nameRef.current.textContent = text
      setIsDefault(text === 'Kilroy')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      nameRef.current?.blur()
    }
    if (e.key === 'Escape') {
      if (nameRef.current) nameRef.current.textContent = 'Kilroy'
      setIsDefault(true)
      nameRef.current?.blur()
    }
  }

  const nameClass = [
    'outline-none cursor-text inline-block align-baseline min-w-[0.75ch]',
    'underline decoration-2 underline-offset-2 transition-colors',
    focused
      ? 'decoration-solid decoration-ink'
      : isDefault
      ? 'decoration-dashed decoration-ink hover:text-red hover:decoration-red'
      : 'text-red decoration-solid decoration-red',
  ].join(' ')

  return (
    <p className="font-body text-base leading-relaxed">
      <span
        ref={nameRef}
        contentEditable
        suppressContentEditableWarning
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={nameClass}
      >
        Kilroy
      </span>{' '}
      was here!
    </p>
  )
}
