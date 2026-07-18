'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="font-display font-bold text-xs tracking-label uppercase hover:text-red transition-colors select-none"
    >
      ← Back
    </button>
  )
}
