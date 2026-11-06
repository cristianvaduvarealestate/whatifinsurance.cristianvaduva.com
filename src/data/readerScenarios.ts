/**
 * WHATIF INSURANCE — CONȚINUT DE LA CITITORI (FLUX EDITORIAL MODERAT)
 * 
 * PRECIZARE EDITORIALĂ STRICTĂ:
 * Cele 3 situații de mai jos sunt EXEMPLE ILUSTRATIVE concepute pentru a demonstra
 * arhitectura editorială și modul de analiză a clauzelor.
 * Ele NU reprezintă cazuri reale documentate ale unor clienți, nu inventează despăgubiri
 * și nu au fost preluate din dosare de daună confidențiale.
 * Situațiile transmise autentic de comunitate prin formularul de propunere sunt supuse
 * moderării manuale și vor fi publicate exclusiv după verificarea provenienței și autorizarea explicită.
 */

export interface ReaderScenario {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  situation: string;
  keyQuestion: string;
  editorialAnalysis: string;
  status: 'exemplu_ilustrativ' | 'in_revizuire';
  sourceTag: string;
  relatedScenarioUrl?: string;
}

export const APPROVED_READER_SCENARIOS: ReaderScenario[] = [
  {
    id: 'exemplu-turturi-parcare',
    title: 'Bucată de gheață căzută de pe acoperiș pe parbrizul mașinii parcate',
    category: 'auto',
    categoryName: 'Auto · CASCO & Răspundere',
    situation: 'O mașină este parcată lângă un imobil. O bucată de gheață desprinsă de pe streașină avariază parbrizul și plafonul.',
    keyQuestion: 'Ce clauză intervine: CASCO cu regres sau răspunderea asociației de proprietari?',
    editorialAnalysis: 'În contractele CASCO, căderea de corpuri este un risc acoperit uzual, însă poate exista franșiză contractuală. Asigurătorul CASCO poate exercita dreptul de regres împotriva asociației dacă proprietarii nu au curățat turturii, dar recuperarea depinde de constatarea poliției locale.',
    status: 'exemplu_ilustrativ',
    sourceTag: 'Exemplu ilustrativ · Model metodologic',
    relatedScenarioUrl: '/scenarii/auto/parbriz-crapat-piatra-autostrada',
  },
  {
    id: 'exemplu-centrala-vecin',
    title: 'Avarie la vasul de expansiune al centralei într-un apartament',
    category: 'casa',
    categoryName: 'Locuință · Răspundere Civilă',
    situation: 'O supapă de presiune cedează la o centrală de apartament în timpul weekendului, iar apa afectează tavanul apartamentului de dedesubt.',
    keyQuestion: 'Ce clauză acoperă reparațiile din apartamentul vecinului afectat?',
    editorialAnalysis: 'Polița facultativă a locuinței proprii despăgubește bunurile asiguratului dacă include clauza de apă de conductă. Daunele produse vecinilor necesită însă secțiunea separată de Răspundere Civilă Față de Terți (RCT), cu plafon suficient stabilit în contract.',
    status: 'exemplu_ilustrativ',
    sourceTag: 'Exemplu ilustrativ · Model metodologic',
    relatedScenarioUrl: '/scenarii/casa/inundatie-vecin-subsol',
  },
  {
    id: 'exemplu-bagaj-intarziat-conferinta',
    title: 'Bagajul de cală ajunge cu întârziere la o călătorie de afaceri',
    category: 'calatorii',
    categoryName: 'Călătorii · Asistență',
    situation: 'În timpul unui zbor cu escală, bagajul de cală nu sosește la destinație odată cu pasagerul, impunând achiziția unor articole de primă necesitate.',
    keyQuestion: 'Ce documente sunt obligatorii pentru decontarea cumpărăturilor de strictă necesitate?',
    editorialAnalysis: 'Asigurarea de călătorie acoperă uzual întârzierea bagajului peste un prag minim (frecvent 6 sau 12 ore consecutive). Condiția obligatorie este raportul PIR eliberat la biroul Lost & Found din aeroport și păstrarea bonurilor fiscale pentru cumpărăturile urgente efectuate până la returnarea bagajului.',
    status: 'exemplu_ilustrativ',
    sourceTag: 'Exemplu ilustrativ · Model metodologic',
    relatedScenarioUrl: '/scenarii/calatorii/bagaj-pierdut-tranzit',
  },
];
