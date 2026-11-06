import React from 'react';
import { ImageResponse } from 'next/og';
import { getScenarioBySlug } from '@/data/scenarios';


export const alt = 'WHATIF Insurance — Scenariu de risc';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const scenario = getScenarioBySlug(params.slug);

  const title = scenario?.title || 'Scenariu de risc din viața reală';
  const categoryName = scenario?.categoryName || 'ASIGURĂRI & PREVENȚIE';
  const mainQuestion = scenario?.mainQuestion || 'Ce se întâmplă dacă s-ar întâmpla mâine?';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#06141B',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative background grid and glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(225, 6, 0, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#E10600',
              }}
            />
            <span
              style={{
                fontSize: '24px',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
              }}
            >
              WHATIF <span style={{ color: '#E10600' }}>INSURANCE</span>
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#E2E8F0',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {categoryName}
            </span>
          </div>
        </div>

        {/* Middle Content: Title and Question */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1050px',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#E10600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            SITUAȚIA LA CARE NU TE-AI GÂNDIT
          </span>

          <h1
            style={{
              fontSize: title.length > 60 ? '42px' : '52px',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              margin: 0,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              lineHeight: 1.35,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            „{mainQuestion}”
          </p>
        </div>

        {/* Bottom Footer Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: '#64748B',
              fontWeight: 600,
            }}
          >
            Ghid educațional de prevenție și analiză a riscurilor din România
          </span>

          <span
            style={{
              fontSize: '15px',
              color: '#CBD5E1',
              fontWeight: 700,
            }}
          >
            whatifinsurance.cristianvaduva.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
