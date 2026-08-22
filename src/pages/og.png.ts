import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Fuentes TTF guardadas localmente — satori no acepta WOFF2
const fontBold    = readFileSync(resolve('./src/assets/fonts/SpaceGrotesk-Bold.ttf'));
const fontRegular = readFileSync(resolve('./src/assets/fonts/SpaceGrotesk-Bold.ttf')); // fallback misma fuente

export const GET: APIRoute = async () => {

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          background: '#0D1017',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: '"Space Grotesk"',
          position: 'relative',
        },
        children: [
          // Top row: badge + hash
          {
            type: 'div',
            props: {
              style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
              children: [
                {
                  type: 'span',
                  props: {
                    style: {
                      fontFamily: '"JetBrains Mono"',
                      fontSize: '14px',
                      color: '#D4513A',
                      background: 'rgba(212,81,58,0.12)',
                      padding: '6px 14px',
                      letterSpacing: '0.08em',
                      fontWeight: '700',
                    },
                    children: '▶ BACKEND & AI · SCZ, BO',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: {
                      fontFamily: '"JetBrains Mono"',
                      fontSize: '13px',
                      color: '#4B8A6E',
                      letterSpacing: '0.05em',
                    },
                    children: '// daxkenyi.is-a.dev',
                  },
                },
              ],
            },
          },

          // Main title
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '8px' },
              children: [
                {
                  type: 'h1',
                  props: {
                    style: {
                      fontSize: '110px',
                      fontWeight: '900',
                      lineHeight: '0.92',
                      letterSpacing: '-0.04em',
                      margin: '0',
                      display: 'flex',
                      gap: '24px',
                    },
                    children: [
                      { type: 'span', props: { style: { color: '#E8E0D4' }, children: 'DAX' } },
                      { type: 'span', props: { style: { color: '#D4513A' }, children: 'KENJI' } },
                    ],
                  },
                },
                {
                  type: 'p',
                  props: {
                    style: {
                      fontFamily: '"JetBrains Mono"',
                      fontSize: '18px',
                      color: '#6B7280',
                      margin: '0',
                      letterSpacing: '0.02em',
                    },
                    children: 'Ingeniero de Sistemas · Datos · IA aplicada · Python · SQL · RAG',
                  },
                },
              ],
            },
          },

          // Bottom row: stack pills
          {
            type: 'div',
            props: {
              style: { display: 'flex', gap: '10px', alignItems: 'center' },
              children: ['Python', 'SQL', 'pandas', 'Power BI', 'RAG', 'Node.js', 'Docker'].map(t => ({
                type: 'span',
                props: {
                  style: {
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '13px',
                    color: '#8A8A8E',
                    background: '#1A1D24',
                    border: '1px solid rgba(232,224,212,0.15)',
                    padding: '5px 12px',
                  },
                  children: t,
                },
              })),
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Space Grotesk',  data: fontBold,    weight: 700, style: 'normal' },
        { name: 'JetBrains Mono', data: fontRegular,  weight: 700, style: 'normal' },
      ],
    }
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000' },
  });
};
