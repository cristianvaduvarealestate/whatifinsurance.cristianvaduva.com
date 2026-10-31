import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '121 de Scenarii Ilustrative de Risc — WHAT IF INSURANCE',
  description: '121 de scenarii ilustrative bazate pe condiții contractuale în 10 categorii: locuință, auto, sănătate, călătorii, business. Diferența dintre ce crezi și ce spune clauza.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/scenarii',
  },
  openGraph: {
    title: '121 de Scenarii Ilustrative de Risc — WHAT IF INSURANCE',
    description: 'Casa ta arată perfect. Riscul nu se vede în poze. Explorează 121 de scenarii ilustrative bazate pe condiții contractuale.',
    url: 'https://whatifinsurance.cristianvaduva.com/scenarii',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: 'https://whatifinsurance.cristianvaduva.com/images/hero/hero-villa.jpg',
        width: 1200,
        height: 630,
        alt: 'WHAT IF INSURANCE — 121 de Scenarii Ilustrative de Risc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '121 de Scenarii Ilustrative de Risc — WHAT IF INSURANCE',
    description: '121 de scenarii ilustrative bazate pe condiții contractuale. Explorează diferența dintre presupuneri și clauzele din poliță.',
    images: ['https://whatifinsurance.cristianvaduva.com/images/hero/hero-villa.jpg'],
  },
};

export default function ScenariiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
