import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import MondrianCanvas from '@/components/MondrianCanvas'
import KilroyBio from '@/components/KilroyBio'
import SectionBanner from '@/components/SectionBanner'
import WaveName from '@/components/WaveName'
import RoleCycler from '@/components/RoleCycler'
import PhillyEasterEgg from '@/components/PhillyEasterEgg'
import ScrollToProjects from '@/components/ScrollToProjects'
import { featuredPhotos } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Seth Sukboontip',
  description:
    'Software Engineer based in Philadelphia, PA. MSE + BS in Computer Science at the University of Pennsylvania.',
}


export default function HomePage() {
  const { hero, education, photos: photoContent } = siteContent
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
              <WaveName name={hero.name} />
              <div className="mt-8 space-y-1.5">
                <RoleCycler />
                <PhillyEasterEgg location={hero.location} />
                <p className="font-display font-medium text-sm tracking-label uppercase">
                  {hero.education}
                </p>
              </div>
            </div>
            <ScrollToProjects />
          </div>

          {/* Right: mondrian canvas + bio */}
          <div className="flex flex-col min-h-[360px]">
            <div className="flex-1 relative overflow-hidden min-h-[240px]">
              <MondrianCanvas />
            </div>
            <div className="border-t-2 border-ink px-6 py-8">
              <KilroyBio />
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────────── */}
      <section id="projects" className="border-b-2 border-ink scroll-mt-[63px]">
        <SectionBanner>Selected Projects</SectionBanner>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="px-6 md:px-16 py-8 border-t-2 border-ink flex justify-end">
          <Link
            href="/projects"
            className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors select-none"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ── Photos ───────────────────────────────────────────────── */}
      <section className="border-b-2 border-ink">
        <SectionBanner yellow>Photography</SectionBanner>
        <div className="grid grid-cols-2 gap-px bg-ink">
          {featuredPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-[3/2]">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="px-6 md:px-16 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-ink">
          <p className="font-body text-base leading-relaxed max-w-lg md:max-w-2xl">{photoContent.blurb}</p>
          <Link
            href="/photos"
            className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors whitespace-nowrap self-end sm:self-auto select-none"
          >
            View All Photos →
          </Link>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────────── */}
      <section className="border-b-2 border-ink">
        <SectionBanner>Education</SectionBanner>
        <div className="px-6 md:px-16 py-12">
          <div className="border-2 border-ink p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <span className="font-display font-bold text-lg tracking-tight uppercase">
                University of Pennsylvania
              </span>
              <PhillyEasterEgg
                location={education[0]?.location ?? ''}
                className="font-display text-xs tracking-label uppercase opacity-60 cursor-pointer select-none"
              />
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

    </>
  )
}
