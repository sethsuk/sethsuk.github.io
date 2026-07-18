import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { photos } from '@/lib/photos'
import CameraFlashBanner from '@/components/CameraFlashBanner'
import PhotoCaption from '@/components/PhotoCaption'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Photography by Seth Sukboontip.',
}

export default function PhotosPage() {
  const { instagramHandle, instagramUrl } = siteContent.photos

  return (
    <>
      <CameraFlashBanner />

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
            <PhotoCaption photo={photo} />
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
