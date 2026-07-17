import type { Metadata } from 'next'
import { siteContent } from '@/lib/content'
import SectionBanner from '@/components/SectionBanner'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Photography by Seth Sukboontip.',
}

export default function PhotosPage() {
  const { blurb, instagramHandle, instagramUrl } = siteContent.photos

  return (
    <>
      <SectionBanner yellow bordered>Photography</SectionBanner>

      <div className="px-6 md:px-16 py-12 border-b-2 border-ink">
        <h1 className="text-display font-display font-bold">Photography</h1>
      </div>

      <div className="px-6 md:px-16 py-16 max-w-2xl">
        <p className="font-body text-base leading-relaxed">{blurb}</p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors"
        >
          → View on Instagram (@{instagramHandle})
        </a>
      </div>
    </>
  )
}
