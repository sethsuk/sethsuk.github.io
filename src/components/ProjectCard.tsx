import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const isOdd = parseInt(project.number, 10) % 2 !== 0
  const badgeBg = isOdd ? 'bg-red' : 'bg-yellow'
  const badgeText = isOdd ? 'text-white' : 'text-ink'
  const hasImage = project.imageUrl && project.imageUrl.length > 0

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col bg-bg hover:bg-ink hover:text-bg transition-colors"
    >
      <div className="p-5 pb-3">
        <span
          className={`inline-block ${badgeBg} ${badgeText} font-display font-bold text-xl px-3 py-0.5 select-none`}
        >
          {project.number}
        </span>
      </div>

      {hasImage && (
        <div className="relative w-full aspect-video border-t border-b border-ink/20 group-hover:border-bg/20">
          <Image
            src={project.imageUrl!}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-5 pt-3 flex flex-col flex-1 justify-end">
        <h3 className="font-display font-bold text-xl leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="font-display text-sm mt-1 opacity-60">{project.tagline}</p>
      </div>
    </Link>
  )
}
