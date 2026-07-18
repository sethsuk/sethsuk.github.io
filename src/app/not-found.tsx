import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-between px-6 md:px-16 py-14 min-h-[calc(100vh-57px-73px)]">
      <div>
        <p className="font-display font-bold text-xs tracking-label uppercase text-red select-none">
          404
        </p>
        <h1 className="text-display font-display font-bold mt-2 select-none">
          Page not found.
        </h1>
        <p className="font-body text-base opacity-60 mt-4">
          Kilroy wasn&apos;t here.
        </p>
      </div>
      <Link
        href="/"
        className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors select-none mt-16"
      >
        ← Back home
      </Link>
    </div>
  )
}
