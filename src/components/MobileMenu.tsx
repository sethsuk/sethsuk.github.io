'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { siteContent } from '@/lib/content'
import ThemeToggle from './ThemeToggle'

interface Props {
  onClose: () => void
}

export default function MobileMenu({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const links: { href: string; label: string; external?: boolean }[] = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/photos', label: 'PHOTOS' },
    ...(siteContent.contact.resumeUrl
      ? [{ href: siteContent.contact.resumeUrl, label: 'RESUME', external: true }]
      : []),
  ]

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col border-r-2 border-ink">
      <div className="flex items-center justify-between px-6 py-4 border-b-2 border-ink">
        <span className="font-display font-bold text-xs tracking-label uppercase">
          Menu
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="font-display font-bold text-2xl leading-none hover:text-red transition-colors select-none"
        >
          ×
        </button>
      </div>

      <nav className="flex flex-col flex-1 px-6 pt-8 gap-0">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="font-display font-bold text-4xl tracking-tight py-5 border-b border-ink/20 hover:text-red transition-colors select-none"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display font-bold text-4xl tracking-tight py-5 border-b border-ink/20 hover:text-red transition-colors select-none"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      <div className="px-6 py-6 border-t-2 border-ink">
        <ThemeToggle />
      </div>
    </div>
  )
}
