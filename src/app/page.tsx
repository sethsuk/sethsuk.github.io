import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import MondrianCanvas from '@/components/MondrianCanvas'

export const metadata: Metadata = {
  title: 'Seth Sukboontip — Software Engineer',
  description:
    'Software Engineer based in Philadelphia, PA. MSE + BS in Computer Science at the University of Pennsylvania.',
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red dark:bg-[#2C2924] text-white dark:text-ink px-6 md:px-16 py-3 font-display font-bold text-xs tracking-label uppercase">
      {children}
    </div>
  )
}

export default function HomePage() {
  const { hero, education, awards, photos } = siteContent
  const featured = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="border-b-2 border-ink">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[calc(100vh-57px)]">
          {/* Left: name + info */}
          <div className="flex flex-col justify-between px-6 md:px-16 py-14 border-b-2 md:border-b-0 md:border-r-2 border-ink">
            <div />
            <div>
              <h1 className="text-hero font-display font-bold leading-[0.92] tracking-[-0.04em] uppercase">
                {hero.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h1>
              <div className="mt-8 space-y-1.5">
                <p className="font-display font-medium text-sm tracking-label uppercase">
                  {hero.tagline}
                </p>
                <p className="font-display font-medium text-sm tracking-label uppercase">
                  {hero.location}
                </p>
                <p className="font-display font-medium text-sm tracking-label uppercase">
                  {hero.education}
                </p>
              </div>
            </div>
            <a
              href="#projects"
              className="font-display font-bold text-xs tracking-label uppercase border-b-2 border-ink self-start pb-1 hover:text-red transition-colors"
            >
              ↓ Selected Projects
            </a>
          </div>

          {/* Right: mondrian canvas + bio */}
          <div className="flex flex-col min-h-[360px]">
            <div className="flex-1 relative overflow-hidden min-h-[240px]">
              <MondrianCanvas />
            </div>
            <div className="border-t-2 border-ink px-8 py-8">
              <p className="font-body text-base leading-relaxed">{hero.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────────── */}
      <section id="projects" className="border-b-2 border-ink">
        <SectionHeader>Selected Projects</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="px-6 md:px-16 py-8 border-t-2 border-ink flex justify-end">
          <Link
            href="/projects"
            className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ── Photos ───────────────────────────────────────────────── */}
      <section className="border-b-2 border-ink">
        <SectionHeader>Photography</SectionHeader>
        <div className="px-6 md:px-16 py-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <p className="font-body text-base leading-relaxed max-w-lg">{photos.blurb}</p>
          <a
            href={photos.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            @{photos.instagramHandle} →
          </a>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────────── */}
      <section className="border-b-2 border-ink">
        <SectionHeader>Education</SectionHeader>
        <div className="px-6 md:px-16 py-12">
          <div className="border-2 border-ink p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <span className="font-display font-bold text-lg tracking-tight uppercase">
                University of Pennsylvania
              </span>
              <span className="font-display text-xs tracking-label uppercase opacity-60">
                {education[0]?.location}
              </span>
            </div>
            <hr className="border-t-2 border-ink my-5" />
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center">
                    <span className="font-display font-bold text-sm tracking-tight">
                      {edu.degree}
                    </span>
                    <span className="font-display text-sm leading-none opacity-60 mx-3">·</span>
                    <span className="font-display text-xs opacity-60">Expected {edu.expected}</span>
                  </div>
                  <span className="font-display text-xs tracking-label opacity-60">
                    {edu.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ────────────────────────────────────────────────── */}
      <section className="border-b-2 border-ink">
        <SectionHeader>Awards</SectionHeader>
        <div className="px-6 md:px-16 py-12">
          <div className="border-2 border-ink">
            {awards.map((award, i) => {
              const isFirst = i === 0
              return (
                <div
                  key={i}
                  className={`flex flex-wrap items-center gap-4 px-6 py-4 ${
                    i < awards.length - 1 ? 'border-b-2 border-ink' : ''
                  }`}
                >
                  <span
                    className={`font-display font-bold text-xs tracking-label px-2 py-0.5 ${
                      isFirst
                        ? 'bg-red text-white'
                        : 'bg-yellow text-ink dark:text-bg'
                    }`}
                  >
                    {award.place}
                  </span>
                  <span className="font-display font-bold text-sm">
                    {award.title}
                  </span>
                  <span className="font-display text-xs opacity-50">·</span>
                  <span className="font-display text-xs opacity-60 flex-1 min-w-0">
                    {award.event}
                  </span>
                  <span className="font-display text-xs opacity-50 ml-auto">
                    {award.year}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
