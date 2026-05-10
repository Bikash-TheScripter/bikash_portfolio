import { ImageResponse } from 'next/og'
import { personalInfo } from '@/lib/data'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
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
            'linear-gradient(135deg, rgb(10, 15, 32) 0%, rgb(26, 37, 74) 45%, rgb(12, 96, 133) 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9 }}>Portfolio</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.05 }}>
            {personalInfo.name}
          </div>
          <div style={{ fontSize: 36, opacity: 0.95 }}>{personalInfo.title}</div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.85 }}>{personalInfo.location}</div>
      </div>
    ),
    size
  )
}
