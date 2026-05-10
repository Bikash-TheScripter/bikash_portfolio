import { ImageResponse } from 'next/og'
import { personalInfo } from '@/lib/data'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'linear-gradient(120deg, rgb(2, 6, 23) 0%, rgb(30, 58, 138) 50%, rgb(8, 145, 178) 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9 }}>Bikash Tripathy</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.05 }}>
            Full-Stack Developer
          </div>
          <div style={{ fontSize: 34, opacity: 0.95 }}>
            React, Next.js, TypeScript, Angular, Node.js
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.85 }}>{personalInfo.location}</div>
      </div>
    ),
    size
  )
}
