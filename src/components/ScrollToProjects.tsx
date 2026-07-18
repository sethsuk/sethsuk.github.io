'use client'

export default function ScrollToProjects() {
  return (
    <a
      href="#projects"
      onClick={(e) => {
        e.preventDefault()
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }}
      className="font-display font-bold text-xs tracking-label uppercase border-b-2 border-ink self-start pb-1 hover:text-red transition-colors select-none"
    >
      ↓ Work
    </a>
  )
}
