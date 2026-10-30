import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audit de Clauze & Contact Direct — WHAT IF INSURANCE',
  description: 'Trimiți contractul, primești o privire fără filtre comerciale. Discută deschis despre clauze, riscuri și excluderi cu Cristian Văduva.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/contact',
  },
  openGraph: {
    title: 'Audit de Clauze & Contact Direct — WHAT IF INSURANCE',
    description: 'Trimiți contractul, primești o privire fără filtre comerciale. Discută deschis despre clauze, riscuri și excluderi.',
    url: 'https://whatifinsurance.cristianvaduva.com/contact',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
