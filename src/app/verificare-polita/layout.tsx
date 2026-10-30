import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nu ghici. Verifică ce ai semnat — WHAT IF INSURANCE',
  description: '11 clauze contractuale care decid dosarul de daună: excluderi la țeavă spartă, franșize ascunse în parcare, carantină medicală și termenul critic de notificare.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/verificare-polita',
  },
  openGraph: {
    title: 'Nu ghici. Verifică ce ai semnat — WHAT IF INSURANCE',
    description: 'Află ce clauze fac diferența între un dosar de daună achitat și un refuz de plată.',
    url: 'https://whatifinsurance.cristianvaduva.com/verificare-polita',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function PolicyChecklistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
