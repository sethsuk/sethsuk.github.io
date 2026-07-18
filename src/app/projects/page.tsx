import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import SectionBanner from '@/components/SectionBanner'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects by Seth Sukboontip.',
}

export default function ProjectsPage() {
  const { github } = siteContent.contact

  return (
    <>
      <SectionBanner bordered>Projects</SectionBanner>

      <div className="px-6 md:px-16 py-8 border-b-2 border-ink select-none">
        <h1 className="text-display font-display font-bold">Projects</h1>
        <p className="font-display text-xs tracking-label uppercase opacity-60 mt-2 select-none">
          {projects.length} projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border-b-2 border-ink">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="px-6 md:px-16 py-10 flex justify-between">
        <Link
          href="/"
          className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors select-none"
        >
          ← Back
        </Link>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors select-none"
        >
          → GitHub
        </a>
      </div>
    </>
  )
}
