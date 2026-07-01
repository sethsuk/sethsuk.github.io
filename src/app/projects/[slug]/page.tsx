import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  const isOdd = parseInt(project.number, 10) % 2 !== 0
  const badgeBg = isOdd ? 'bg-red' : 'bg-yellow'
  const badgeText = isOdd ? 'text-white' : 'text-ink'
  const hasImage = !!project.imageUrl
  const hasLinks = !!project.githubUrl || !!project.liveUrl

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-16 py-12">
      <Link
        href="/projects"
        className="font-display font-bold text-xs tracking-label uppercase hover:text-red transition-colors inline-flex items-center gap-2"
      >
        ← Back to Projects
      </Link>

      <hr className="border-t-2 border-ink my-8" />

      <div className="flex items-start gap-5">
        <span
          className={`${badgeBg} ${badgeText} font-display font-bold text-2xl px-4 py-1.5 shrink-0`}
        >
          {project.number}
        </span>
        <div>
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="font-display text-base opacity-60 mt-1">
            {project.tagline}
          </p>
        </div>
      </div>

      {hasImage && (
        <div className="relative w-full aspect-video border-2 border-ink mt-10">
          <Image
            src={project.imageUrl!}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-10">
        <span className="font-display font-bold text-xs tracking-label uppercase border-b-2 border-ink pb-1">
          Overview
        </span>
        <hr className="border-t-2 border-ink mt-0 mb-6" />
        <p className="font-body text-base leading-relaxed">{project.description}</p>
      </div>

      {hasLinks && (
        <div className="flex flex-wrap gap-4 mt-10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors"
            >
              → View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors"
            >
              → View Report
            </a>
          )}
        </div>
      )}
    </div>
  )
}
