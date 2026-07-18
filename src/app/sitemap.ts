import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const BASE = 'https://sethsukboontip.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/photos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...projects.map((p) => ({
      url: `${BASE}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
