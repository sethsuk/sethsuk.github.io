interface Props {
  size?: number
}

export default function BauhausLogo({ size = 13 }: Props) {
  return (
    <div className="flex items-center gap-[3px]" aria-hidden="true">
      {/* Square — red */}
      <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
        <rect width="13" height="13" fill="#D4351C" />
      </svg>
      {/* Triangle — yellow */}
      <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
        <polygon points="6.5,0 13,13 0,13" fill="#F2C94C" />
      </svg>
      {/* Circle — ink (theme-aware) */}
      <svg width={size} height={size} viewBox="0 0 13 13" fill="none" className="text-ink">
        <circle cx="6.5" cy="6.5" r="6.5" fill="currentColor" />
      </svg>
    </div>
  )
}
