interface Props {
  children: React.ReactNode
  yellow?: boolean
  bordered?: boolean
}

export default function SectionBanner({ children, yellow = false, bordered = false }: Props) {
  return (
    <div
      className={[
        'px-6 md:px-16 py-3 font-display font-bold text-xs tracking-label uppercase select-none',
        bordered ? 'border-b-2 border-ink' : '',
        yellow
          ? 'bg-yellow text-ink'
          : 'bg-red text-white dark:bg-[#2C2924] dark:text-ink',
      ].join(' ')}
    >
      {children}
    </div>
  )
}
