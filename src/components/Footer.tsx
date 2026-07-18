'use client'

import { useState } from 'react'
import { siteContent } from '@/lib/content'

export default function Footer() {
  const { email, linkedin, github, resumeUrl } = siteContent.contact
  const [copied, setCopied] = useState(false)
  const [thatIsMe, setThatIsMe] = useState(false)

  const handleCopy = async () => {
    if (copied) return
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleName = () => {
    if (thatIsMe) return
    setThatIsMe(true)
    setTimeout(() => setThatIsMe(false), 1500)
  }

  const links = [
    { href: linkedin, label: 'LinkedIn' },
    { href: github, label: 'GitHub' },
    { href: siteContent.photos.instagramUrl, label: 'Instagram' },
    ...(resumeUrl ? [{ href: resumeUrl, label: 'Resume' }] : []),
  ]

  return (
    <footer className="border-t-2 border-ink">
      <div className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-display text-xs tracking-label">
          ©&nbsp;2026&nbsp;
          <button
            onClick={handleName}
            className="relative hover:text-red transition-colors"
          >
            Seth Sukboontip
            {thatIsMe && (
              <span className="copied-badge absolute -top-8 left-1/2 bg-ink text-bg font-display font-bold text-[10px] tracking-label uppercase px-2 py-1 whitespace-nowrap pointer-events-none">
                that's me!
              </span>
            )}
          </button>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <button
            onClick={handleCopy}
            className="relative hover:text-red transition-colors"
          >
            {email}
            {copied && (
              <span className="copied-badge absolute -top-8 left-1/2 bg-ink text-bg font-display font-bold text-[10px] tracking-label uppercase px-2 py-1 whitespace-nowrap pointer-events-none">
                Copied!
              </span>
            )}
          </button>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-xs tracking-label uppercase hover:text-red transition-colors select-none"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
