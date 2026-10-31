import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PersistentQuoteCTA } from '@/components/lead/PersistentQuoteCTA';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { ReferralTracker } from '@/components/analytics/ReferralTracker';

export const metadata: Metadata = {
  title: 'WHAT IF INSURANCE — Ai fi acoperit dacă s-ar întâmpla mâine?',
  description:
    'Descoperă riscurile reale ale vieții cotidiene la care nu te-ai gândit niciodată. Înțelege diferența critică dintre ce presupui că acoperă o poliță și ce plătești din propriul buzunar.',
  keywords: [
    'asigurari',
    'ce se intampla daca',
    'what if insurance',
    'scenarii de risc',
    'clauze asigurare',
    'asigurare locuinta',
    'casco',
    'rca',
    'asigurare calatorie',
    'cyber insurance',
    'raspundere civila',
  ],
  authors: [{ name: 'Cristian Văduva', url: 'https://cristianvaduva.com' }],
  creator: 'Cristian Văduva',
  metadataBase: new URL('https://whatifinsurance.cristianvaduva.com'),
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://whatifinsurance.cristianvaduva.com',
    title: 'WHAT IF INSURANCE — Ai fi acoperit dacă s-ar întâmpla mâine?',
    description:
      'Descoperă riscurile reale ale vieții cotidiene la care nu te-ai gândit niciodată. Înțelege diferența critică dintre ce presupui că acoperă o poliță și ce plătești din propriul buzunar.',
    siteName: 'WHAT IF INSURANCE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHAT IF INSURANCE — Inteligență de Risc & Clauze Contractuale',
    description: 'Vezi diferența reală dintre ce presupui că acoperă o poliță și ce plătești din propriul buzunar.',
  },
};

export const viewport: Viewport = {
  themeColor: '#06141B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WHAT IF INSURANCE',
    alternateName: 'Ce Se Întâmplă Dacă...?',
    url: 'https://whatifinsurance.cristianvaduva.com',
    description:
      'Platformă educațională de conștientizare și simulare a riscurilor cotidiene, realizată în parteneriat cu Generali de către Cristian Văduva.',
    publisher: {
      '@type': 'Person',
      name: 'Cristian Văduva',
      url: 'https://cristianvaduva.com',
    },
  };

  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#06141B] antialiased selection:bg-[#E10600] selection:text-white">
        <Suspense fallback={null}>
          <ReferralTracker />
        </Suspense>
        <Navbar />
        <main className="flex-grow pb-20 lg:pb-0">{children}</main>
        <Footer />
        <PersistentQuoteCTA />
        <MobileBottomNav />
      </body>
    </html>
  );
}
