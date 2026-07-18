import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        red: '#D4351C',
        yellow: '#F2C94C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        hero: [
          'clamp(56px, 10vw, 144px)',
          { lineHeight: '0.92', letterSpacing: '-0.04em' },
        ],
        display: [
          'clamp(40px, 5vw, 72px)',
          { lineHeight: '1', letterSpacing: '-0.03em' },
        ],
      },
      letterSpacing: {
        label: '0.12em',
      },
    },
  },
  plugins: [],
}

export default config
