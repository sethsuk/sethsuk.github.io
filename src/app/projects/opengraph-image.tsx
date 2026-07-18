import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import { projects } from '@/lib/projects'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const BG = '#f5f0e8'
const INK = '#1a1a1a'
const RED = '#D4351C'
const YELLOW = '#F2C94C'

export default function Image() {
  const font = readFileSync(join(process.cwd(), 'src/lib/fonts/SpaceGrotesk-Bold.ttf'))

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
        {/* Bauhaus shapes */}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 48, height: 48, background: RED }} />
          <svg width={48} height={48} viewBox="0 0 13 13">
            <polygon points="6.5,0 13,13 0,13" fill={YELLOW} />
          </svg>
          <div style={{ width: 48, height: 48, background: INK, borderRadius: '50%' }} />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 28, color: RED, letterSpacing: '4px', textTransform: 'uppercase' }}>
            Projects
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: INK, lineHeight: 1, letterSpacing: '-1px', textTransform: 'uppercase' }}>
            {projects.length} projects
          </div>
          <div style={{ fontSize: 24, color: INK, opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase' }}>
            Seth Sukboontip
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ height: 6, flex: 2, background: RED }} />
          <div style={{ height: 6, flex: 1, background: YELLOW }} />
          <div style={{ height: 6, flex: 1, background: INK }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'SpaceGrotesk', data: font, weight: 700 }],
    }
  )
}
