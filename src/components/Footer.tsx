import { siteContent } from '@/lib/content'

export default function Footer() {
  const { email, linkedin, github, resumeUrl } = siteContent.contact

  const links = [
    { href: linkedin, label: 'LinkedIn' },
    { href: github, label: 'GitHub' },
    { href: siteContent.photos.instagramUrl, label: 'Instagram' },
    ...(resumeUrl ? [{ href: resumeUrl, label: 'Resume' }] : []),
  ]

  return (
    <footer className="border-t-2 border-ink">
      <div className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-display text-xs tracking-label">
          © 2026 Seth Sukboontip&nbsp;&nbsp;·&nbsp;&nbsp;
          <a
            href={`mailto:${email}`}
            className="hover:text-red transition-colors"
          >
            {email}
          </a>
        </span>
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
