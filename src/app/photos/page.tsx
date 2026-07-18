import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { photos } from '@/lib/photos'
import SectionBanner from '@/components/SectionBanner'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Photography by Seth Sukboontip.',
}

export default function PhotosPage() {
  const { instagramHandle, instagramUrl } = siteContent.photos

  return (
    <>
      <SectionBanner yellow bordered>Photography</SectionBanner>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border-b-2 border-ink">
        {photos.map((photo) => (
          <div key={photo.src} className="flex flex-col">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {(photo.location || photo.medium) && (
              <div className="flex-1 bg-ink text-bg px-4 py-2 font-display text-xs tracking-label uppercase select-none flex justify-between items-center">
                <span>{photo.location}</span>
                {photo.medium && <span className="opacity-60">{photo.medium}</span>}
              </div>
            )}
          </div>
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
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-bold text-xs tracking-label uppercase border-2 border-ink px-6 py-3 hover:bg-ink hover:text-bg transition-colors select-none"
        >
          → Instagram<span className="hidden sm:inline"> (@{instagramHandle})</span>
        </a>
      </div>
    </>
  )
}
