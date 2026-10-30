import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '121 de Dosare Reale de Risc — WHAT IF INSURANCE',
  description: '121 de situații documentate pe contracte reale în 10 categorii: locuință, auto, sănătate, călătorii, business. Diferența dintre ce crezi și ce spune clauza.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/scenarii',
  },
  openGraph: {
    title: '121 de Dosare Reale de Risc — WHAT IF INSURANCE',
    description: 'Casa ta arată perfect. Riscul nu se vede în poze. Explorează 121 de cazuri documentate pe contracte reale.',
    url: 'https://whatifinsurance.cristianvaduva.com/scenarii',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function ScenariiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
