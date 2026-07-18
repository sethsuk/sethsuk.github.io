import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import { projects } from '@/lib/projects'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return new Response('Not found', { status: 404 })

  const font = readFileSync(join(process.cwd(), 'src/lib/fonts/SpaceGrotesk-Bold.ttf'))

  const BG = '#f5f0e8'
  const INK = '#1a1a1a'
  const RED = '#D4351C'
  const YELLOW = '#F2C94C'

  const isOdd = parseInt(project.number, 10) % 2 !== 0
  const badgeBg = isOdd ? RED : YELLOW
  const badgeText = isOdd ? '#ffffff' : INK

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: BG,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'SpaceGrotesk',
          border: `8px solid ${INK}`,
        }}
      >
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
          <div style={{ width: 48, height: 48, background: RED }} />
          <div style={{ width: 0, height: 0, borderLeft: '24px solid transparent', borderRight: '24px solid transparent', borderBottom: `48px solid ${YELLOW}` }} />
          <div style={{ width: 48, height: 48, background: INK, borderRadius: '50%' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ background: badgeBg, color: badgeText, fontSize: 32, fontWeight: 700, padding: '4px 16px' }}>
              {project.number}
            </div>
            <div style={{ fontSize: 24, color: INK, opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase' }}>
              Seth Sukboontip
            </div>
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: INK, lineHeight: 1, letterSpacing: '-1px', textTransform: 'uppercase' }}>
            {project.title}
          </div>
          <div style={{ fontSize: 26, color: INK, opacity: 0.6, letterSpacing: '1px' }}>
            {project.tagline}
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ height: 6, flex: 2, background: RED }} />
          <div style={{ height: 6, flex: 1, background: YELLOW }} />
          <div style={{ height: 6, flex: 1, background: INK }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'SpaceGrotesk', data: font, weight: 700 }] }
  )
}
