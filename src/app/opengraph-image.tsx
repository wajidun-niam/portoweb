import { ImageResponse } from 'next/og';

// Konfigurasi runtime dan ukuran standar OG Image (1200x630px)
export const runtime = 'edge';
export const alt = 'Wajidun Niam — Fullstack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Logo WN Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 16,
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: 36,
            fontWeight: 'bold',
            marginBottom: 32,
            letterSpacing: '-1px',
          }}
        >
          WN
        </div>
        
        {/* Nama */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          Wajidun Niam
        </div>
        
        {/* Role */}
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            fontWeight: 500,
            marginBottom: 48,
            textAlign: 'center',
          }}
        >
          Fullstack Developer
        </div>

        {/* Tech Stack Pills */}
        <div
          style={{
            display: 'flex',
            gap: 16,
          }}
        >
          {['Next.js', 'TypeScript', 'Supabase', 'Tailwind'].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#60a5fa',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: 9999,
                padding: '8px 24px',
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}