import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bikash-tripathy.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bikash Tripathy | Full-Stack Developer (Frontend-Focused)',
    template: '%s | Bikash Tripathy',
  },
  description: 'Full-Stack Developer with a strong frontend focus and 4+ years of experience building performant, scalable web applications using React.js, Next.js, TypeScript, Angular, and Node.js. Skilled in prompt engineering and AI-augmented development with Cursor.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Full-Stack Developer', 'Frontend Developer', 'React.js', 'Next.js',
    'TypeScript', 'Angular', 'Node.js', 'Prompt Engineering',
    'Cursor', 'GitHub Copilot', 'Bikash Tripathy', 'Web Developer', 'Hyderabad'
  ],
  authors: [{ name: 'Bikash Tripathy' }],
  creator: 'Bikash Tripathy',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Bikash Tripathy | Full-Stack Developer (Frontend-Focused)',
    description: 'Full-Stack Developer (frontend-focused) building performant, scalable web apps with React, Next.js, Angular, and Node.js — augmented by prompt engineering and Cursor.',
    siteName: 'Bikash Tripathy Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Bikash Tripathy - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bikash Tripathy | Full-Stack Developer (Frontend-Focused)',
    description: 'Full-Stack Developer (frontend-focused) building performant, scalable web apps with React, Next.js, Angular, and Node.js — augmented by prompt engineering and Cursor.',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366f1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
