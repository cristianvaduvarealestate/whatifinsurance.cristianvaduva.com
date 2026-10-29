import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PersistentQuoteCTA } from '@/components/lead/PersistentQuoteCTA';

export const metadata: Metadata = {
  title: 'WHAT IF INSURANCE — Descoperă ce se poate întâmpla. Află ce te poate proteja.',
  description: 'O platformă interactivă care transformă riscurile cotidiene în experiențe vizuale captivante. Înțelege diferența critică dintre situația cu și fără asigurare.',
  keywords: [
    'asigurari',
    'ce se intampla daca',
    'what if insurance',
    'scenarii de risc',
    'asigurare locuinta',
    'casco',
    'rca',
    'asigurare calatorie',
    'cyber insurance',
    'raspundere civila',
  ],
  authors: [{ name: 'Cristian Văduva', url: 'https://insurance.cristianvaduva.com' }],
  creator: 'Cristian Văduva',
  metadataBase: new URL('https://insurance.cristianvaduva.com'),
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://insurance.cristianvaduva.com',
    title: 'WHAT IF INSURANCE — Descoperă ce se poate întâmpla.',
    description: 'Explorează situații reale de risc, compară consecințele financiare și descarcă postări vizuale branduite.',
    siteName: 'WHAT IF INSURANCE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHAT IF INSURANCE — Scenarii Interactive de Risc',
    description: 'Vezi ce se poate schimba atunci când ai protecția potrivită.',
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
    '@type': 'EducationalOrganization',
    name: 'WHAT IF INSURANCE',
    alternateName: 'Ce Se Întâmplă Dacă...?',
    url: 'https://insurance.cristianvaduva.com',
    logo: 'https://insurance.cristianvaduva.com/images/hero/hero-villa.jpg',
    founder: {
      '@type': 'Person',
      name: 'Cristian Văduva',
      url: 'https://cristianvaduva.com',
    },
    description:
      'Platformă interactivă de conștientizare și simulare a riscurilor cotidiene, daune patrimoniale și acoperire de asigurare.',
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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <PersistentQuoteCTA />
      </body>
    </html>
  );
}
