import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import BackButton from '@/components/BackButton'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  const isOdd = parseInt(project.number, 10) % 2 !== 0
  const badgeBg = isOdd ? 'bg-red' : 'bg-yellow'
  const badgeText = isOdd ? 'text-white' : 'text-ink dark:text-bg'
  const hasImage = !!project.imageUrl
  const hasLinks = !!project.githubUrl || !!project.liveUrl

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-16 py-12">
      <BackButton />

      <hr className="border-t-2 border-ink my-8" />

      <div className="flex items-start gap-5">
        <span
          className={`${badgeBg} ${badgeText} font-display font-bold text-2xl px-4 py-1.5 shrink-0 select-none`}
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
        <div className="border-2 border-ink mt-10">
          <Image
            src={project.imageUrl!}
            alt={project.title}
            width={1600}
            height={900}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}

      <div className="mt-10">
        <span className="font-display font-bold text-xs tracking-label uppercase border-b-2 border-ink pb-1 select-none">
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
