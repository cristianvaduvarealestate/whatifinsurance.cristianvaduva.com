import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz de Intuiție: Acoperit, Neacoperit sau Depinde de Clauză? — WHAT IF INSURANCE',
  description: '8 întrebări scurte despre clauzele pe care le semnezi fără să le citești. Vezi dacă intuiția ta bate literele mici dintr-un contract real.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/quiz',
  },
  openGraph: {
    title: 'Quiz de Intuiție Contractuală — WHAT IF INSURANCE',
    description: 'Ai o poliță. Ai și răspunsul la clauza care contează? Testează-ți intuiția pe 8 situații reale de risc.',
    url: 'https://whatifinsurance.cristianvaduva.com/quiz',
    siteName: 'WHAT IF INSURANCE',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz de Intuiție Contractuală — WHAT IF INSURANCE',
    description: '8 situații de risc. Câte crezi că sunt acoperite de o poliță standard?',
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
