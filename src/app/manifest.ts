import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bikash Tripathy Portfolio',
    short_name: 'Bikash Portfolio',
    description:
      'Frontend-focused full-stack developer portfolio featuring projects, experience, and contact details.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f20',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
