import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import SectionBanner from '@/components/SectionBanner'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects by Seth Sukboontip.',
}

export default function ProjectsPage() {
  return (
    <>
      <SectionBanner bordered>Projects</SectionBanner>

      <div className="px-6 md:px-16 py-8 border-b-2 border-ink">
        <h1 className="text-display font-display font-bold">Projects</h1>
        <p className="font-display text-xs tracking-label uppercase opacity-60 mt-2">
          {projects.length} projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border-b-2 border-ink">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  )
}
