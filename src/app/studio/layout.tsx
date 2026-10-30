import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio Vizual de Share & Concepte Editoriale — WHAT IF INSURANCE',
  description: 'Exportă vizualuri HD cu clauze contractuale, mituri demontate și dileme de risc. Deschide o conversație utilă înainte de daună.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/studio',
  },
  openGraph: {
    title: 'Studio Vizual de Share & Concepte Editoriale — WHAT IF INSURANCE',
    description: '8 formate vizuale documentate pe contracte reale. Exportă dileme și trimite-le celor care cred că lor nu li se poate întâmpla.',
    url: 'https://whatifinsurance.cristianvaduva.com/studio',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
