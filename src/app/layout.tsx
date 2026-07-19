import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})()`

export const metadata: Metadata = {
  title: {
    default: 'Seth Sukboontip',
    template: '%s',
  },
  description:
    'Software Engineer based in Philadelphia, PA. MSE + BAS in Computer Science at the University of Pennsylvania.',
  metadataBase: new URL('https://sethsukboontip.com'),
  openGraph: {
    siteName: 'Seth Sukboontip',
    type: 'website',
    locale: 'en_US',
    title: 'Seth Sukboontip',
    description: 'Software Engineer based in Philadelphia, PA.',
    url: 'https://sethsukboontip.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seth Sukboontip',
    description: 'Software Engineer based in Philadelphia, PA.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Seth Sukboontip',
  url: 'https://sethsukboontip.com',
  jobTitle: 'Software Engineer',
  alumniOf: 'University of Pennsylvania',
  sameAs: [
    'https://linkedin.com/in/seth-sukboontip',
    'https://github.com/sethsuk',
    'https://instagram.com/kilroys_magical_world',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        {/* Anti-flash theme script — must run before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-body min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
