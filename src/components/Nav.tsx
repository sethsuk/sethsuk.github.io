'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteContent } from '@/lib/content'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import BauhausLogo from './BauhausLogo'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { resumeUrl } = siteContent.contact

  return (
    <>
      <nav className="sticky top-0 z-40 bg-bg border-b-2 border-ink">
        <div className="flex items-center justify-between px-6 md:px-16 py-4">
          <Link href="/" className="flex items-center gap-2.5 group select-none">
            <BauhausLogo />
            <span className="font-display font-bold text-xs tracking-label uppercase group-hover:text-red transition-colors">
              Seth Sukboontip
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/projects"
              className="font-display font-bold text-xs tracking-label uppercase hover:text-red transition-colors select-none"
            >
              Projects
            </Link>
            <Link
              href="/photos"
              className="font-display font-bold text-xs tracking-label uppercase hover:text-red transition-colors select-none"
            >
              Photos
            </Link>
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-xs tracking-label uppercase hover:text-red transition-colors select-none"
              >
                Resume
              </a>
            )}
            <ThemeToggle />
          </div>

          <button
            className="md:hidden font-display font-bold text-xl leading-none hover:text-red transition-colors select-none p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  )
}
