import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trimite Prietenilor — Concepte Vizuale de Share — WHAT IF INSURANCE',
  description: 'Generează și trimite prietenilor imagini HD cu dileme de risc, clauze contractuale și mituri demontate. Deschide o conversație utilă înainte de daună.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/studio',
  },
  openGraph: {
    title: 'Trimite Prietenilor — Concepte Vizuale de Share — WHAT IF INSURANCE',
    description: 'Formate vizuale documentate pe contracte reale. Exportă dileme și trimite-le celor care cred că lor nu li se poate întâmpla.',
    url: 'https://whatifinsurance.cristianvaduva.com/studio',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
