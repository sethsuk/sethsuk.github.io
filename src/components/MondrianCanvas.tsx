'use client'

import { useState, useCallback, useEffect, useRef, Fragment, memo } from 'react'

const ACCENTS = ['#D4351C', '#F2C94C'] as const
const DURATION = 250

function getPalette(base: string) {
  const other = ACCENTS.filter((c) => c !== base)[0]
  return [
    '#F5F0E8', '#F5F0E8', '#F5F0E8', '#F5F0E8', '#F5F0E8', '#F5F0E8',
    base,
    other,
  ]
}

const MIN_GAP = 6

interface HLine { y: number; fromX: number }
interface VLine { x: number; fromY: number }
interface Overlay { id: number; hLine?: HLine; vLine?: VLine }
interface CellEntry {
  color: string
  top: number
  left: number
  width: number
  height: number
}

function cellKey(top: number, left: number) {
  return `${top.toFixed(1)},${left.toFixed(1)}`
}

// Cells fade opacity 0→1 on mount only.
// Old cells keep their original (larger) dimensions and sit behind new cells.
// During the fade, the old cell's color shows through the transparent new cell —
// so the only thing visible is the previous correct color, never the base background.
const Cell = memo(function Cell({
  top, left, width, height, color,
}: {
  top: number; left: number; width: number; height: number; color: string
}) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpacity(1))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}%`,
        height: `${height}%`,
        backgroundColor: color,
        opacity,
        transition: 'opacity 900ms linear',
      }}
    />
  )
})

export default function MondrianCanvas() {
  const [baseColor, setBaseColor] = useState('#D4351C')
  const [hintVerb, setHintVerb] = useState('Click')
  const [hLines, setHLines] = useState<HLine[]>([])
  const [vLines, setVLines] = useState<VLine[]>([])
  const [colors, setColors] = useState<Record<string, string>>({})
  const [overlays, setOverlays] = useState<Overlay[]>([])

  // Cells stored with fixed dimensions, in commitment order (older = behind, newer = in front)
  const pendingRef = useRef<Record<string, CellEntry>>({})
  const cellOrderRef = useRef<string[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    setBaseColor(ACCENTS[Math.floor(Math.random() * ACCENTS.length)])
    if (window.matchMedia('(pointer: coarse)').matches) setHintVerb('Tap')
  }, [])

  const pick = useCallback(() => {
    const palette = getPalette(baseColor)
    return palette[Math.floor(Math.random() * palette.length)]
  }, [baseColor])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      const cx = Math.max(MIN_GAP, Math.min(100 - MIN_GAP, x))
      const cy = Math.max(MIN_GAP, Math.min(100 - MIN_GAP, y))

      const allH = [...hLines, ...overlays.flatMap((o) => (o.hLine ? [o.hLine] : []))]
      const allV = [...vLines, ...overlays.flatMap((o) => (o.vLine ? [o.vLine] : []))]
      const tooCloseH = allH.some((l) => Math.abs(l.y - cy) < MIN_GAP)
      const tooCloseV = allV.some((l) => Math.abs(l.x - cx) < MIN_GAP)
      if (tooCloseH && tooCloseV) return

      const newHLine = !tooCloseH ? { y: cy, fromX: cx } : undefined
      const newVLine = !tooCloseV ? { x: cx, fromY: cy } : undefined

      const futureH = newHLine
        ? [...allH, newHLine].sort((a, b) => a.y - b.y)
        : [...allH].sort((a, b) => a.y - b.y)
      const futureV = newVLine
        ? [...allV, newVLine].sort((a, b) => a.x - b.x)
        : [...allV].sort((a, b) => a.x - b.x)
      const futureY = [0, ...futureH.map((l) => l.y), 100]
      const futureX = [0, ...futureV.map((l) => l.x), 100]

      const isFirstClick = cellOrderRef.current.length === 0
      const next = { ...pendingRef.current }

      for (let i = 0; i < futureY.length - 1; i++) {
        for (let j = 0; j < futureX.length - 1; j++) {
          const k = cellKey(futureY[i], futureX[j])
          if (next[k]) continue

          const color = isFirstClick
            ? (Math.random() < 0.75 ? '#F5F0E8' : baseColor)
            : pick()

          // Dimensions are fixed at the moment of creation — cells never resize.
          next[k] = {
            color,
            top: futureY[i],
            left: futureX[j],
            width: futureX[j + 1] - futureX[j],
            height: futureY[i + 1] - futureY[i],
          }
          cellOrderRef.current.push(k)
        }
      }
      pendingRef.current = next

      const id = idRef.current++
      setOverlays((prev) => [...prev, { id, hLine: newHLine, vLine: newVLine }])

      setTimeout(() => {
        setHLines((prev) =>
          newHLine ? [...prev, newHLine].sort((a, b) => a.y - b.y) : prev
        )
        setVLines((prev) =>
          newVLine ? [...prev, newVLine].sort((a, b) => a.x - b.x) : prev
        )
        const flatColors: Record<string, string> = {}
        for (const [k, v] of Object.entries(pendingRef.current)) {
          flatColors[k] = v.color
        }
        setColors(flatColors)
        setOverlays((prev) => prev.filter((o) => o.id !== id))
      }, DURATION)
    },
    [hLines, vLines, overlays, pick, baseColor]
  )

  const handleReset = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    pendingRef.current = {}
    cellOrderRef.current = []
    setHLines([])
    setVLines([])
    setColors({})
    setOverlays([])
  }, [])

  const hasContent = hLines.length > 0 || overlays.length > 0

  return (
    <div
      className="absolute inset-0 cursor-crosshair select-none overflow-hidden"
      style={{ backgroundColor: baseColor }}
      onClick={handleClick}
    >
      {/* Cells rendered oldest-first so newer cells are on top in DOM stacking order.
          Old cells keep their original dimensions and act as the "previous color" layer
          that shows through while the new cell fades in above. */}
      {cellOrderRef.current.map((k) => {
        if (!colors[k]) return null
        const entry = pendingRef.current[k]!
        return (
          <Cell
            key={k}
            top={entry.top}
            left={entry.left}
            width={entry.width}
            height={entry.height}
            color={entry.color}
          />
        )
      })}

      {/* Committed lines — static, rendered above cells */}
      {hLines.map((line) => (
        <div
          key={`h-${line.y.toFixed(1)}`}
          className="absolute left-0 right-0 z-10 pointer-events-none"
          style={{
            top: `${line.y}%`,
            height: '3px',
            backgroundColor: '#1A1A1A',
            transform: 'translateY(-50%)',
          }}
        />
      ))}
      {vLines.map((line) => (
        <div
          key={`v-${line.x.toFixed(1)}`}
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{
            left: `${line.x}%`,
            width: '3px',
            backgroundColor: '#1A1A1A',
            transform: 'translateX(-50%)',
          }}
        />
      ))}

      {/* Animating line overlays */}
      {overlays.map(({ id, hLine, vLine }) => (
        <Fragment key={id}>
          {hLine && (
            <div
              className="absolute left-0 right-0 z-10 pointer-events-none"
              style={{ top: `${hLine.y}%`, height: '3px', transform: 'translateY(-50%)' }}
            >
              <div
                className="absolute top-0 bottom-0"
                style={{
                  left: 0,
                  right: `${100 - hLine.fromX}%`,
                  backgroundColor: '#1A1A1A',
                  transformOrigin: 'right center',
                  animation: `drawH ${DURATION}ms linear forwards`,
                }}
              />
              <div
                className="absolute top-0 bottom-0"
                style={{
                  left: `${hLine.fromX}%`,
                  right: 0,
                  backgroundColor: '#1A1A1A',
                  transformOrigin: 'left center',
                  animation: `drawH ${DURATION}ms linear forwards`,
                }}
              />
            </div>
          )}
          {vLine && (
            <div
              className="absolute top-0 bottom-0 z-10 pointer-events-none"
              style={{ left: `${vLine.x}%`, width: '3px', transform: 'translateX(-50%)' }}
            >
              <div
                className="absolute left-0 right-0"
                style={{
                  top: 0,
                  height: `${vLine.fromY}%`,
                  backgroundColor: '#1A1A1A',
                  transformOrigin: 'center bottom',
                  animation: `drawV ${DURATION}ms linear forwards`,
                }}
              />
              <div
                className="absolute left-0 right-0"
                style={{
                  top: `${vLine.fromY}%`,
                  bottom: 0,
                  backgroundColor: '#1A1A1A',
                  transformOrigin: 'center top',
                  animation: `drawV ${DURATION}ms linear forwards`,
                }}
              />
            </div>
          )}
        </Fragment>
      ))}

      {!hasContent && (
        <div className="absolute inset-0 flex items-end justify-start p-4 z-20 pointer-events-none">
          <span className="font-display font-bold text-[10px] tracking-label uppercase text-black/40">
            {hintVerb} to compose
          </span>
        </div>
      )}

      {hasContent && (
        <button
          onClick={handleReset}
          className="absolute bottom-3 right-3 z-20 font-display font-bold text-[10px] tracking-label uppercase bg-ink text-bg px-2 py-1 hover:bg-red hover:text-white transition-colors"
        >
          Reset
        </button>
      )}
    </div>
  )
}
