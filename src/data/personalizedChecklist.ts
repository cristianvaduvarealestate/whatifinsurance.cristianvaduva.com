/**
 * WHATIF INSURANCE — PERSONALIZED POLICY CHECKLIST ENGINE
 * 
 * Curated database of critical clauses across categories with contextual matching.
 * Produces 5–8 high-priority clauses tailored to user interest and life situations.
 * Never requests sensitive data (no CNP, no bank accounts, no policy IDs).
 */

export interface ChecklistClause {
  id: string;
  category: ChecklistCategory;
  categoryLabel?: string;
  contexts?: ChecklistContext[]; // e.g. 'copii', 'ev', 'calatorii_frecvente', 'detin_locuinta', 'inchiriez', 'firma'
  priority: number; // 1 (highest) to 10
  clauseName: string; // Ce trebuie verificat
  whyItMatters: string; // De ce este important
  whereToFind: string; // Unde se găsește în document
  advisorQuestion: string; // Ce întrebare concretă adresezi consultantului
  scenarioSlug?: string; // Link către scenariul relevant
  scenarioCategory?: string;
}

export type ChecklistCategory =
  | 'locuinta'
  | 'auto'
  | 'calatorii'
  | 'familie'
  | 'sanatate'
  | 'business'
  | 'luxury'
  | 'chiriasi';

export type ChecklistContext =
  | 'copii'
  | 'ev'
  | 'calatorii_frecvente'
  | 'detin_locuinta'
  | 'inchiriez'
  | 'firma';

export interface CategoryOption {
  id: ChecklistCategory;
  label: string;
  description: string;
  iconName: string;
}

export interface ContextOption {
  id: ChecklistContext;
  label: string;
  hint: string;
}

export const CHECKLIST_CATEGORIES: CategoryOption[] = [
  { id: 'locuinta', label: 'Locuință', description: 'Casă, apartament, instalații interioare', iconName: 'Home' },
  { id: 'auto', label: 'Auto & CASCO', description: 'Accidente, parcare, asistență rutieră', iconName: 'Car' },
  { id: 'calatorii', label: 'Călătorii', description: 'Urgențe medicale, întârzieri, bagaje', iconName: 'Plane' },
  { id: 'familie', label: 'Familie', description: 'Răspundere civilă copii, animale de companie', iconName: 'Users' },
  { id: 'sanatate', label: 'Sănătate', description: 'Spitalizare privată, intervenții chirurgicale', iconName: 'HeartPulse' },
  { id: 'business', label: 'Business', description: 'Răspundere profesională, cyber, întrerupere activitate', iconName: 'Briefcase' },
  { id: 'luxury', label: 'Bunuri de Valoare', description: 'Ceasuri, bijuterii, echipamente foto/electronice', iconName: 'Gem' },
  { id: 'chiriasi', label: 'Proprietar / Chiriaș', description: 'Daune produse de chiriași, pierderea chiriei', iconName: 'Key' },
];

export const CHECKLIST_CONTEXTS: ContextOption[] = [
  { id: 'copii', label: 'Am copii minori', hint: 'Verifică clauzele de răspundere civilă a părinților' },
  { id: 'ev', label: 'Am automobil electric / hybrid', hint: 'Verifică avariile la baterie și stația de încărcare' },
  { id: 'calatorii_frecvente', label: 'Călătoresc frecvent în străinătate', hint: 'Verifică plafonul medical și evacuarea de urgență' },
  { id: 'detin_locuinta', label: 'Dețin o locuință în proprietate', hint: 'Verifică avariile la conducte și clauza de nelocuire' },
  { id: 'inchiriez', label: 'Închiriez o proprietate (ca proprietar sau chiriaș)', hint: 'Verifică răspunderea locativă și daunele la mobilier' },
  { id: 'firma', label: 'Dețin o firmă sau activez ca freelancer / IT', hint: 'Verifică răspunderea profesională și riscurile cyber' },
];

export const ALL_CHECKLIST_CLAUSES: ChecklistClause[] = [
  // --- LOCUINȚĂ ---
  {
    id: 'cl-casa-teava',
    category: 'locuinta',
    contexts: ['detin_locuinta'],
    priority: 1,
    clauseName: 'Avarii la instalațiile interioare de apă (spargere conducte)',
    whyItMatters: 'Avariile de apă reprezintă peste 65% din daunele de locuință din mediul urban și sunt complet excluse de polița obligatorie PAD.',
    whereToFind: 'Condițiile Generale/Particulare facultative, secțiunea «Apă de conductă și refulare canalizare».',
    advisorQuestion: 'Sunt acoperite cheltuielile pentru decopertarea peretelui pentru localizarea avariei, sau doar reparația țevii propriu-zise?',
    scenarioSlug: 'teava-sparta',
    scenarioCategory: 'casa',
  },
  {
    id: 'cl-casa-vecini',
    category: 'locuinta',
    contexts: ['detin_locuinta'],
    priority: 2,
    clauseName: 'Răspunderea civilă față de vecini (inundație / incendiu)',
    whyItMatters: 'Dacă apa afectează apartamentele de dedesubt, ești direct responsabil legal pentru refacerea finisajelor și mobilierului vecinilor.',
    whereToFind: 'Anexa sau Capitolul «Răspundere civilă a proprietarului față de terți».',
    advisorQuestion: 'Care este limita maximă de despăgubire per eveniment pentru daune aduse vecinilor și dacă există franșiză?',
    scenarioSlug: 'daune-vecini',
    scenarioCategory: 'casa',
  },
  {
    id: 'cl-casa-nelocuire',
    category: 'locuinta',
    contexts: ['detin_locuinta', 'calatorii_frecvente'],
    priority: 4,
    clauseName: 'Clauza de nelocuire temporară (locuință vacantă)',
    whyItMatters: 'Dacă locuința stă nelocuită mai mult de 30 sau 60 de zile consecutive, multe polițe suspendă automat riscul de îngheț, furt sau inundație.',
    whereToFind: 'Secțiunea «Obligațiile asiguratului» și «Clauze speciale de neocupare».',
    advisorQuestion: 'După câte zile de absență trebuie să golesc instalațiile de apă sau să notific asigurătorul pentru a păstra acoperirea?',
    scenarioSlug: 'teava-inghetata-iarna',
    scenarioCategory: 'casa',
  },

  // --- AUTO & CASCO ---
  {
    id: 'cl-auto-parcare',
    category: 'auto',
    priority: 1,
    clauseName: 'Franșiza la avarii cu autor necunoscut (parcare)',
    whyItMatters: 'Dacă găsești mașina lovită sau zgâriată fără bilet de contact, unele polițe aplică franșize considerabil mai mari decât la accidentele cu vinovat identificat.',
    whereToFind: 'Condițiile Particulare CASCO, tabelul «Franșize aplicabile pe eveniment».',
    advisorQuestion: 'Ce franșiză exactă plătesc dacă autorul daunei din parcare nu este găsit de Poliție?',
    scenarioSlug: 'parcare-lovit-autor-necunoscut',
    scenarioCategory: 'auto',
  },
  {
    id: 'cl-auto-service',
    category: 'auto',
    priority: 3,
    clauseName: 'Decontarea în reprezentanță oficială vs. ateliere partenere',
    whyItMatters: 'Pentru a păstra garanția de caroserie și calibrarea senzorilor ADAS, este esențial să poți alege service-ul autorizat de marcă.',
    whereToFind: 'Clauza «Unități reparatoare agreate» și decontare directă.',
    advisorQuestion: 'Am libertatea de a repara mașina în reprezentanța oficială sau sunt obligat să folosesc rețeaua restrânsă a asigurătorului?',
    scenarioSlug: 'tamponare-minora-costuri-mari',
    scenarioCategory: 'auto',
  },
  {
    id: 'cl-auto-ev',
    category: 'auto',
    contexts: ['ev'],
    priority: 2,
    clauseName: 'Acoperirea bateriei de tracțiune și a cablului/stației de încărcare',
    whyItMatters: 'Avariile carcasei inferioare a bateriei (pietre pe carosabil) pot duce la daune totale de peste 15.000 EUR dacă bateria este declasificată de producător.',
    whereToFind: 'Condițiile specifice pentru Vehicule Electrice și Hibride (Rider EV).',
    advisorQuestion: 'Polița acoperă înlocuirea completă a pachetului de baterii la zgârieturi ale scutului inferior fără deformare mecanică gravă?',
    scenarioSlug: 'baterie-ev-lovita-dedesubt-piatra',
    scenarioCategory: 'auto',
  },

  // --- CĂLĂTORII ---
  {
    id: 'cl-travel-urgent',
    category: 'calatorii',
    contexts: ['calatorii_frecvente'],
    priority: 1,
    clauseName: 'Plafonul de asistență medicală de urgență și evacuare',
    whyItMatters: 'O intervenție chirurgicală sau un transport aeromedical în afara UE poate depăși rapid 50.000–100.000 EUR.',
    whereToFind: 'Tabelul de beneficii, secțiunea «Cheltuieli medicale de urgență și repatriere».',
    advisorQuestion: 'Asigurarea plătește direct spitalului prin compania de asistență sau trebuie să achit eu inițial din fonduri proprii?',
    scenarioSlug: 'urgenta-medicala-strainatate',
    scenarioCategory: 'calatorii',
  },
  {
    id: 'cl-travel-notif',
    category: 'calatorii',
    contexts: ['calatorii_frecvente'],
    priority: 3,
    clauseName: 'Obligația de apelare a centralei de alarmă înainte de internare',
    whyItMatters: 'Dacă mergi la o clinică privată fără acordul prealabil al centralei de urgență, polița poate aplica penalități sau franșize substanțiale.',
    whereToFind: 'Ghidul de asistență al asiguratului, secțiunea «Procedura în caz de daună».',
    advisorQuestion: 'Care este numărul de telefon al centralei operaționale 24/7 și ce fac dacă urgența medicală nu permite apelul imediat?',
    scenarioSlug: 'zbor-anulat-conexiune-pierduta',
    scenarioCategory: 'calatorii',
  },

  // --- FAMILIE & COPII ---
  {
    id: 'cl-fam-copii',
    category: 'familie',
    contexts: ['copii'],
    priority: 1,
    clauseName: 'Răspunderea civilă a părinților pentru faptele copiilor minori',
    whyItMatters: 'Dacă un copil sparge un ecran scump într-un magazin sau avariază un vehicul parcat, părinții răspund patrimonial conform Codului Civil.',
    whereToFind: 'Polița de Răspundere Civilă a Familiei (Head of Family / Răspundere delictuală privată).',
    advisorQuestion: 'Sunt acoperite daunele accidentale produse de copii în spații comerciale sau hoteluri, și care este franșiza per eveniment?',
    scenarioSlug: 'copil-sparge-televizor-magazin',
    scenarioCategory: 'raspundere-civila',
  },

  // --- SĂNĂTATE & VIAȚĂ ---
  {
    id: 'cl-sanatate-waiting',
    category: 'sanatate',
    priority: 1,
    clauseName: 'Perioada de așteptare (Waiting Period / Carantină medicală)',
    whyItMatters: 'Bolile apărute în primele 30–90 de zile de la emiterea poliței sunt de regulă excluse pentru a preveni subscrierea oportunistă.',
    whereToFind: 'Condițiile Particulare, definițiile termenilor «Perioadă de carantină / așteptare».',
    advisorQuestion: 'De la ce dată exactă devine activă acoperirea pentru spitalizare și intervenții chirurgicale neprovocate de accident?',
    scenarioSlug: 'interventie-chirurgicala-privat',
    scenarioCategory: 'viata-sanatate',
  },
  {
    id: 'cl-sanatate-work',
    category: 'sanatate',
    priority: 2,
    clauseName: 'Definiția incapacității temporare de muncă',
    whyItMatters: 'Există o diferență majoră între incapacitatea de a exercita propria profesie și incapacitatea de a desfășura orice activitate remunerată.',
    whereToFind: 'Secțiunea «Indemnizație zilnică de incapacitate temporară de muncă».',
    advisorQuestion: 'Clauza mea acoperă incapacitatea specifică meseriei mele sau doar invaliditatea generală?',
    scenarioSlug: 'accident-incapacitate-temporara-munca',
    scenarioCategory: 'viata-sanatate',
  },

  // --- BUSINESS ---
  {
    id: 'cl-biz-interruption',
    category: 'business',
    contexts: ['firma'],
    priority: 1,
    clauseName: 'Perioada maximă de indemnizare la întreruperea activității (Business Interruption)',
    whyItMatters: 'Refacerea unui sediu sau livrarea utilajelor specializate durează adesea peste 6–12 luni, timp în care costurile fixe curg.',
    whereToFind: 'Condițiile Asigurării Property Business, secțiunea «Pierderi financiare din întreruperea activității».',
    advisorQuestion: 'Perioada de indemnizare acoperită este de 6, 12 sau 24 de luni, și include profitul brut nerealizat plus salariile angajaților?',
    scenarioSlug: 'intrerupere-activitate-business',
    scenarioCategory: 'business',
  },
  {
    id: 'cl-biz-cyber',
    category: 'business',
    contexts: ['firma'],
    priority: 2,
    clauseName: 'Ingineria socială și frauda de plată (Business Email Compromise)',
    whyItMatters: 'Multe polițe Cyber acoperă doar breșele tehnice directe (malware/ransomware), excluzând plățile autorizate din greșeală prin phishing.',
    whereToFind: 'Anexa «Fraudă electronică și transferuri bancare neautorizate».',
    advisorQuestion: 'Este inclusă manipularea prin inginerie socială sau polița acoperă doar recuperarea datelor după atac ransomware?',
    scenarioSlug: 'atac-ransomware-blocare-servere',
    scenarioCategory: 'business',
  },

  // --- BUNURI DE VALOARE ---
  {
    id: 'cl-lux-valoare',
    category: 'luxury',
    priority: 1,
    clauseName: 'Clauza de valoare agreată (Agreed Value) vs. depreciere de uzură',
    whyItMatters: 'La furtul unui ceas de lux sau al unei bijuterii, aplicarea uzurii contabile poate reduce despăgubirea cu peste 40% din valoarea de piață.',
    whereToFind: 'Specificația de bunuri de valoare atașată poliței de locuință sau poliței dedicate Fine Arts & Valuables.',
    advisorQuestion: 'Despăgubirea se face la valoarea de piață atestată de expertiză sau asigurătorul aplică tabele standard de depreciere?',
    scenarioSlug: 'ceas-scump-furat-calatorie-hotel',
    scenarioCategory: 'luxury-bunuri',
  },

  // --- PROPRIETAR / CHIRIAȘ ---
  {
    id: 'cl-chiriasi-locativa',
    category: 'chiriasi',
    contexts: ['inchiriez'],
    priority: 1,
    clauseName: 'Răspunderea locativă a chiriașului față de proprietar',
    whyItMatters: 'Dacă un chiriaș uită aragazul aprins sau un robinet deschis, proprietarul sau asigurătorul acestuia se va regresa împotriva chiriașului.',
    whereToFind: 'Clauza specifică «Răspundere civilă a chiriașului față de proprietar».',
    advisorQuestion: 'Polița mea acoperă riscul de regres al asigurătorului proprietarului în cazul unui incendiu sau al unei inundații produse din neglijență?',
    scenarioSlug: 'incendiu-bucatarie-chirias',
    scenarioCategory: 'proprietari-chiriasi',
  },
];

/**
 * Intelligent clause selection algorithm.
 * Selects 5–8 high-impact clauses based on selected categories and life contexts.
 */
export function getPersonalizedChecklist(
  selectedCategories: ChecklistCategory[],
  selectedContexts: ChecklistContext[]
): ChecklistClause[] {
  if (selectedCategories.length === 0) {
    selectedCategories = ['locuinta', 'auto', 'calatorii'];
  }

  // Score each clause
  const scored = ALL_CHECKLIST_CLAUSES.map((clause) => {
    let score = 0;
    // Category match
    if (selectedCategories.includes(clause.category)) {
      score += 10;
    }
    // Context match
    if (clause.contexts && clause.contexts.length > 0) {
      const matchingContexts = clause.contexts.filter((c) => selectedContexts.includes(c));
      score += matchingContexts.length * 8;
    }
    // Base priority (lower priority number = higher urgency)
    score += (10 - clause.priority) * 2;

    return { clause, score };
  });

  // Filter only clauses that have some category or context relevance
  const relevant = scored
    .filter((item) => item.score > 10)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.clause);

  // Return strictly between 5 and 8 clauses
  const targetCount = Math.max(5, Math.min(8, relevant.length));
  if (relevant.length >= targetCount) {
    return relevant.slice(0, targetCount);
  }

  // If fewer than 5 matched, fill with top general clauses
  const ids = new Set(relevant.map((c) => c.id));
  const fallbackFillers = ALL_CHECKLIST_CLAUSES.filter((c) => !ids.has(c.id)).sort(
    (a, b) => a.priority - b.priority
  );

  const finalClauses = [...relevant];
  for (const filler of fallbackFillers) {
    if (finalClauses.length >= 6) break;
    finalClauses.push(filler);
  }

  return finalClauses.slice(0, 8);
}
