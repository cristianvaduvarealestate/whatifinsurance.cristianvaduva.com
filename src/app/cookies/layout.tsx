import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica privind Modulele Cookie — WHAT IF INSURANCE',
  description: 'Informații complete despre utilizarea modulelor cookie tehnice strict necesare și preferințele de confidențialitate.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/cookies',
  },
  openGraph: {
    title: 'Politica privind Modulele Cookie — WHAT IF INSURANCE',
    description: 'Află cum funcționează stocarea locală pe dispozitivul tău pe platforma WHAT IF INSURANCE.',
    url: 'https://whatifinsurance.cristianvaduva.com/cookies',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
