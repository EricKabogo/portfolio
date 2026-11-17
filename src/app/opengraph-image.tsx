import { ImageResponse } from 'next/og';

export const alt = 'Eric Kabogo, full-stack developer in Nairobi, Kenya';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#fafaf9',
          color: '#18181b',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: '#52525b' }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#0f766e' }} />
          Full-stack developer · Nairobi, Kenya
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -3 }}>Eric Kabogo</div>
          <div style={{ fontSize: 36, color: '#52525b', marginTop: 16, maxWidth: 900 }}>
            Designing and building web applications end to end.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
