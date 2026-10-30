/**
 * WHAT IF INSURANCE — VIRAL CONTENT ENGINE 2.0
 * 
 * 8 Distinct Editorial Concepts with genuine educational value,
 * based on verified authentic scenarios and contractual insurance rules.
 */

export type EditorialConceptId =
  | 'hidden_detail'
  | 'myth_vs_fact'
  | 'what_would_you_do'
  | 'fine_print'
  | 'two_policies'
  | 'did_you_know'
  | 'check_policy'
  | 'challenge_friend';

export interface EditorialConceptMeta {
  id: EditorialConceptId;
  englishTitle: string;
  romanianBadge: string;
  roBadge: string;
  tagline: string;
  iconName: string;
}

export const EDITORIAL_CONCEPTS: Record<EditorialConceptId, EditorialConceptMeta> = {
  hidden_detail: {
    id: 'hidden_detail',
    englishTitle: 'THE HIDDEN DETAIL',
    romanianBadge: 'DETALIUL ASCUNS',
    roBadge: 'DETALIUL ASCUNS',
    tagline: 'O clauză contractuală pe care 9 din 10 oameni o ignoră până la dauna reală.',
    iconName: 'Eye',
  },
  myth_vs_fact: {
    id: 'myth_vs_fact',
    englishTitle: 'MYTH VS FACT',
    romanianBadge: 'MIT VS REALITATE',
    roBadge: 'MIT VS REALITATE',
    tagline: 'O convingere populară demontată punctual pe baza condițiilor contractuale.',
    iconName: 'HelpCircle',
  },
  what_would_you_do: {
    id: 'what_would_you_do',
    englishTitle: 'WHAT WOULD YOU DO?',
    romanianBadge: 'CE AI FACE?',
    roBadge: 'CE AI FACE?',
    tagline: 'O dilemă din viața reală cu decizie, consecință și verdict legal.',
    iconName: 'Compass',
  },
  fine_print: {
    id: 'fine_print',
    englishTitle: 'THE FINE PRINT',
    romanianBadge: 'CLAUZA SCRISĂ MĂRUNT',
    roBadge: 'CLAUZA SCRISĂ MĂRUNT',
    tagline: 'Franșize, excluderi și sublimite care schimbă suma efectivă primită.',
    iconName: 'FileText',
  },
  two_policies: {
    id: 'two_policies',
    englishTitle: 'TWO POLICIES, ONE DIFFERENCE',
    romanianBadge: 'DOUĂ POLIȚE, O DIFERENȚĂ',
    roBadge: 'DOUĂ POLIȚE, O DIFERENȚĂ',
    tagline: 'Aceeași situație de risc, două contracte diferite, rezultate financiare opuse.',
    iconName: 'Scale',
  },
  did_you_know: {
    id: 'did_you_know',
    englishTitle: 'DID YOU KNOW?',
    romanianBadge: 'ȘTIAI CĂ?',
    roBadge: 'ȘTIAI CĂ?',
    tagline: 'O descoperire statistică și contractuală concretă, verificabilă în practică.',
    iconName: 'Lightbulb',
  },
  check_policy: {
    id: 'check_policy',
    englishTitle: 'CHECK YOUR POLICY',
    romanianBadge: 'VERIFICĂ-ȚI POLIȚA',
    roBadge: 'VERIFICĂ-ȚI POLIȚA',
    tagline: '3 elemente exacte pe care să le verifici chiar azi în contractul tău.',
    iconName: 'CheckSquare',
  },
  challenge_friend: {
    id: 'challenge_friend',
    englishTitle: 'Challenge a Friend',
    romanianBadge: 'Surprinde-ți prietenii',
    roBadge: 'Surprinde-ți prietenii',
    tagline: 'O întrebare inteligentă care testează intuiția oricărui deținător de poliță.',
    iconName: 'Share2',
  },
};

export type EditorialApprovalStatus = 'APROBAT_EDITORIAL' | 'NECESITA_CORECTARE' | 'BLOCAT';

export interface FactualProvenance {
  documentTitle: string;
  exactClauseOrArticle: string;
  sourceUrl?: string;
  verifiedAt: string; // ISO Date YYYY-MM-DD
  applicability: 'lege_statutara' | 'conditii_generale_piata' | 'ipoteza_produs_specific';
  editorialStatus: EditorialApprovalStatus;
  verdictRationale: string;
}

export interface BaseEditorialCard {
  id: string;
  conceptId: EditorialConceptId;
  category: 'casa' | 'auto' | 'calatorii' | 'raspundere' | 'viata';
  headline: string;
  summary: string;
  takeaway: string;
  heroImage: string;
  imageCaption?: string;
  sourceNote: string;
  ctaText: string;
  factualProvenance: FactualProvenance;
  relatedScenarioSlug?: string;
  relatedQuizQuestionId?: string;
}

export interface HiddenDetailCard extends BaseEditorialCard {
  conceptId: 'hidden_detail';
  clauseName: string;
  clauseQuote: string;
  realConsequence: string;
  whereToFind: string;
}

export interface MythVsFactCard extends BaseEditorialCard {
  conceptId: 'myth_vs_fact';
  mythText: string;
  mythReason: string;
  factText: string;
  contractualReality: string;
}

export interface WhatWouldYouDoCard extends BaseEditorialCard {
  conceptId: 'what_would_you_do';
  scenarioDilemma: string;
  optionA: { label: string; explanation: string };
  optionB: { label: string; explanation: string };
  verdictLaw: string;
}

export interface FinePrintCard extends BaseEditorialCard {
  conceptId: 'fine_print';
  totalInsuredAmount: string;
  sublimitAmount: string;
  outOfPocketCost: string;
  clauseExplanation: string;
}

export interface TwoPoliciesCard extends BaseEditorialCard {
  conceptId: 'two_policies';
  declaredAssumptions: string;
  policyA: { name: string; coverage: string; userOutPocket: string };
  policyB: { name: string; coverage: string; userOutPocket: string };
  keyDifferenceReason: string;
}

export interface DidYouKnowCard extends BaseEditorialCard {
  conceptId: 'did_you_know';
  statHighlight: string;
  contextExplanation: string;
  practicalInsight: string;
}

export interface CheckPolicyCard extends BaseEditorialCard {
  conceptId: 'check_policy';
  questionsToCheck: { question: string; reason: string }[];
  whereToLookInContract: string;
}

export interface ChallengeFriendCard extends BaseEditorialCard {
  conceptId: 'challenge_friend';
  provocation: string;
  trapAssumption: string;
  realAnswer: string;
}

export type EditorialCard =
  | HiddenDetailCard
  | MythVsFactCard
  | WhatWouldYouDoCard
  | FinePrintCard
  | TwoPoliciesCard
  | DidYouKnowCard
  | CheckPolicyCard
  | ChallengeFriendCard;

/**
 * Curated authentic editorial cards based on verified scenarios and actual Romanian market conditions
 */
export const EDITORIAL_CARDS: EditorialCard[] = [
  // 1. THE HIDDEN DETAIL — Locuință neocupată
  {
    id: 'hd-locuinta-vacanta',
    conceptId: 'hidden_detail',
    category: 'casa',
    headline: 'Clauza de nelocuire: Ce condiții de prevenție se aplică în contract în caz de absență prelungită?',
    heroImage: '/images/scenarios/vacant-freeze-damage.jpg',
    imageCaption: 'Avarie de conductă prin îngheț într-o locuință neocupată',
    clauseName: 'CLAUZA DE NEOCUPARE (UZUAL 30–60 ZILE)',
    clauseQuote: '„Sunt excluse daunele de furt, vandalism sau avarierea conductelor prin îngheț dacă locuința rămâne neocupată peste intervalul specificat (uzual 30–60 zile), fără măsuri de siguranță (oprirea apei, golirea instalațiilor).”',
    summary: 'Dacă pleci în concediu prelungit sau imobilul stă nelocuit între chiriași, polițele facultative impun măsuri preventive exprese și limitează acoperirea după un anumit număr de zile consecutive.',
    realConsequence: 'În caz de furt sau spargere de conductă provocată de îngheț în timpul unei absențe prelungite, dosarul poate fi respins dacă nu ai oprit alimentarea generală cu apă și nu ai notificat asigurătorul conform cerințelor din poliță.',
    whereToFind: 'Condițiile Generale ale Poliței Facultative, capitolul «Obligațiile Asiguratului / Excluderi specifice».',
    takeaway: 'Oprește robinetul general de apă la plecările prelungite și verifică termenul exact de nelocuire din contractul tău (uzual 30–60 de zile).',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18 Ianuarie 2025); Art. 2199-2200 Cod Civil.',
    ctaText: 'Verifică termenul din polița ta pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Condițiile Generale pentru Asigurarea Locuințelor Eurocasa — Generali România (Mod. E18)',
      exactClauseOrArticle: 'Secțiunea «Obligațiile Asiguratului & Măsuri de prevenție pentru imobile nelocuite»',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/casa/teava-sparta',
      verifiedAt: '2026-10-30',
      applicability: 'ipoteza_produs_specific',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual corect și conform condițiilor oficiale Generali Eurocasa (Mod. E18) și Art. 2199-2200 Cod Civil: oprirea apei și măsurile preventive sunt obligatorii în caz de nelocuire prelungită.',
    },
    relatedScenarioSlug: 'teava-sparta',
    relatedQuizQuestionId: 'q-casa-nelocuita',
  },

  // 2. MYTH VS FACT — PAD vs Inundație de la vecini
  {
    id: 'mf-pad-vecini',
    conceptId: 'myth_vs_fact',
    category: 'casa',
    headline: '„Polița obligatorie PAD mă despăgubește dacă mă inundă vecinul de la etaj?”',
    heroImage: '/images/scenarios/neighbor-flood.jpg',
    imageCaption: 'Infiltrație de apă prin plafon de la apartamentul superior',
    mythText: 'MIT FRECVENT: „Dețin asigurarea obligatorie a locuinței (PAD), deci sunt acoperit pentru orice inundație în apartament.”',
    mythReason: 'Proprietarii asociază cuvântul „inundație” cu orice apă scursă pe tavan sau pe pereți.',
    factText: 'REALITATEA CONTRACTUALĂ: PAD acoperă STRICT inundațiile din cauze naturale (revărsări de ape, ploi torențiale).',
    contractualReality: 'Avariile produse de apa de conductă, defecțiunile instalațiilor sanitare și neglijența vecinilor sunt excluse din polița PAD conform Art. 18 din Legea nr. 260/2008. Despăgubirea necesită o poliță facultativă separată (cum este Generali Eurocasa cu clauza de apă de conductă) sau acțiune de regres.',
    summary: 'Una dintre cele mai frecvente confuzii la deschiderea dosarului este presupunerea că polița PAD este o asigurare generală de apartament.',
    takeaway: 'Verifică dacă deții o poliță facultativă separată Generali Eurocasa care acoperă explicit riscul «Apă de conductă și refulare».',
    sourceNote: 'Legea nr. 260/2008 republicată, Art. 2 lit. b) și Art. 18; Ghidul Oficial PAID; Condiții Generali Eurocasa.',
    ctaText: 'Explorează diferența completă pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Legea nr. 260/2008 privind asigurarea obligatorie a locuințelor împotriva cutremurelor, alunecărilor de teren și inundațiilor',
      exactClauseOrArticle: 'Art. 2 lit. b) (Definiția dezastrelor naturale) și Art. 18 (Excluderea instalațiilor interioare); Condiții Generali Eurocasa',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/casa/daune-vecini',
      verifiedAt: '2026-10-30',
      applicability: 'lege_statutara',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Verificat legal conform Legii nr. 260/2008 republicată. PAID acoperă exclusiv cele 3 catastrofe naturale, apa de conductă fiind preluată doar prin asigurări facultative precum Generali Eurocasa.',
    },
    relatedScenarioSlug: 'daune-vecini',
    relatedQuizQuestionId: 'q-pad-vecini',
  },

  // 3. WHAT WOULD YOU DO? — Showroom Display
  {
    id: 'ww-showroom-ecran',
    conceptId: 'what_would_you_do',
    category: 'raspundere',
    headline: 'Dilemă în magazin: Dacă un copil avariază accidental un display comercial, cine suportă paguba?',
    heroImage: '/images/scenarios/family-tv-broken.jpg',
    imageCaption: 'Avarie accidentală la display în showroom comercial',
    scenarioDilemma: 'Ce prevede legea privind răspunderea și în ce condiții poate interveni o poliță privată?',
    optionA: {
      label: 'Varianta A: „Magazinul își asumă automat riscul comercial.”',
      explanation: 'FALS. Magazinul nu este obligat prin lege să suporte distrugerea bunului dacă fapta minorului a cauzat prejudiciul din lipsă de supraveghere.',
    },
    optionB: {
      label: 'Varianta B: „Părintele răspunde civil delictual, însă clauza de Răspundere a Familiei (Generali Eurocasa) poate prelua despăgubirea.”',
      explanation: 'CORECT. Art. 1372 Cod Civil institue răspunderea părinților pentru fapta minorului. Prin clauza opțională de Răspundere Civilă a Familiei atașată poliței Generali Eurocasa, asigurătorul preia plata despăgubirilor solicitate.',
    },
    verdictLaw: 'Răspunderea civilă delictuală revine părintelui conform legii, însă costul poate fi acoperit dacă ai contractată clauza de Răspundere a Familiei (Generali Eurocasa).',
    summary: 'O poliță facultativă Generali Eurocasa include la alegere modulul de răspundere civilă privată a familiei pentru faptele accidentale ale copiilor.',
    takeaway: 'Verifică dacă polița ta Generali Eurocasa include clauza opțională de «Răspundere civilă legală a familiei / vieții private».',
    sourceNote: 'Art. 1357 și Art. 1372 Codul Civil Român; Condiții Generali Eurocasa — Modulul Răspunderea Familiei.',
    ctaText: 'Descoperă scenariul pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Codul Civil al României & Condiții Speciale Răspunderea Familiei Generali Eurocasa',
      exactClauseOrArticle: 'Art. 1357 și Art. 1372 Cod Civil (Răspunderea pentru fapta minorului); Clauza Răspundere Civilă a Familiei Eurocasa',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/casa/copil-showroom',
      verifiedAt: '2026-10-30',
      applicability: 'lege_statutara',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual și juridic corect conform Codului Civil Român și condițiilor Generali Eurocasa pentru răspunderea vieții private.',
    },
    relatedScenarioSlug: 'copil-showroom',
  },

  // 4. THE FINE PRINT — Sublimita Ceasuri / Bunuri de Valoare
  {
    id: 'fp-sublimita-ceas',
    conceptId: 'fine_print',
    category: 'casa',
    headline: 'Sublimita pentru bunuri de valoare: De ce o sumă asigurată mare nu garantează plata integrală a unui bun scump?',
    heroImage: '/images/scenarios/luxury-watch-theft.jpg',
    imageCaption: 'Ceas de lux și bijuterii fără declarație nominală sau seif',
    totalInsuredAmount: 'Exemplu: 50.000 € (Sumă Conținut)',
    sublimitAmount: 'Plafon uzual fără seif: ~1.500 €',
    outOfPocketCost: 'Pierdere suportată din buzunar',
    clauseExplanation: 'Condițiile de asigurare a bunurilor casnice (inclusiv Generali Eurocasa) prevăd sublimite exprese (de regulă până la 1.500 EUR per obiect sau un procent din suma asigurată a conținutului) pentru ceasuri de lux și bijuterii, dacă nu sunt păstrate într-un seif omologat sau declarate nominal cu evaluare prealabilă.',
    summary: 'Furtul unui ceas de lux sau al unei bijuterii de valoare lasă adesea proprietarul cu o pierdere majoră dacă bunul nu a fost declarat nominal pe o anexă separată.',
    takeaway: 'Solicită declararea nominală pe polița Generali Eurocasa a oricărui bun individual de mare valoare și păstrează facturile sau certificatele de autenticitate.',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18 Ianuarie 2025) — Secțiunea Bunuri de Valoare Deosebită.',
    ctaText: 'Află cum asiguri corect bunurile de valoare pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Condițiile Generale pentru Asigurarea Locuințelor Eurocasa — Generali România (Mod. E18)',
      exactClauseOrArticle: 'Capitolul «Bunuri de valoare deosebită / Limite maxime de despăgubire per obiect neținut în seif omologat»',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/casa/ceas-furt-hotel',
      verifiedAt: '2026-10-30',
      applicability: 'ipoteza_produs_specific',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual corect și conform condițiilor Generali Eurocasa Mod. E18: bunurile de valoare deosebită necesită menționare nominală sau păstrare în seif omologat pentru despăgubire peste plafonul standard.',
    },
    relatedScenarioSlug: 'ceas-furt-hotel',
  },

  // 5. TWO POLICIES, ONE DIFFERENCE — Generali Eurocasa Bază vs. Clauza de Apă
  {
    id: 'tp-conducta-perete',
    conceptId: 'two_policies',
    category: 'casa',
    headline: 'Țeavă spartă în perete: Pachetul de Bază vs. Clauza de Instalații (Generali Eurocasa)',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Conductă spartă îngropată în perete cu spargere faianță',
    declaredAssumptions: 'Generali Eurocasa: Acoperirea de bază FLEXA vs. Clauza extinsă Avarii Instalații de Apă',
    policyA: {
      name: 'Eurocasa Pachet Bază (FLEXA & Riscuri Naturale)',
      coverage: 'Acoperă riscurile fundamentale (incendiu, trăsnet, explozie, cădere aparate de zbor, furtună). Fără clauza opțională de conducte, avaria internă a țevilor nu este inclusă.',
      userOutPocket: 'Cost suportat personal: căutarea avariei, decopertarea peretelui și refacerea faianței.',
    },
    policyB: {
      name: 'Eurocasa Pachet Extins (Cu Clauza Instalații de Apă)',
      coverage: 'Include căutarea defecțiunii, decopertarea zidăriei pentru remedierea țevii, refacerea finisajelor și asistență de urgență Home Assistance 24/7 (instalator la locație).',
      userOutPocket: 'Protecție completă: fără franșiză pe clădire la Generali Eurocasa, conform condițiilor contractate.',
    },
    keyDifferenceReason: 'Diferența stă în activarea clauzei opționale «Avarii la instalațiile de apă și canalizare». Fără această clauză, costurile majore de căutare a avariei, spargere a pereților și refacere a finisajelor rămân în sarcina proprietarului.',
    summary: 'Spargerea pereților și refacerea finisajelor pentru găsirea unei conducte defecte reprezintă adesea cea mai costisitoare etapă a intervenției.',
    takeaway: 'Asigură-te că polița ta Generali Eurocasa conține clauza explicită de avarii la instalațiile de apă și asistență de urgență Home Assistance.',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18 Ianuarie 2025) — Clauza Avarii la Instalațiile de Apă & Home Assistance.',
    ctaText: 'Compară opțiunile complete pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Condițiile Generale pentru Asigurarea Locuințelor Eurocasa — Generali România (Mod. E18)',
      exactClauseOrArticle: 'Clauza opțională «Avarii la instalațiile de apă» & Clauza «Home Assistance»',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/casa/teava-sparta',
      verifiedAt: '2026-10-30',
      applicability: 'ipoteza_produs_specific',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual corect și transparent formulat conform pachetelor Generali Eurocasa Mod. E18: pachetul de bază FLEXA nu acoperă avariile interne de apă fără atașarea clauzei opționale specifice.',
    },
    relatedScenarioSlug: 'teava-sparta',
  },

  // 6. DID YOU KNOW? — Zbor de retur bagaj
  {
    id: 'dyk-bagaj-retur',
    conceptId: 'did_you_know',
    category: 'calatorii',
    headline: 'Întârzierea bagajului la zborul de retur: De ce cumpărăturile urgente făcute acasă nu sunt decontate?',
    heroImage: '/images/scenarios/lost-luggage.jpg',
    imageCaption: 'Bagaj de cală întârziat pe zborul de întoarcere în țară',
    statHighlight: 'CHELTUIELI DE URGENȚĂ NEDECONATE LA RETUR',
    contextExplanation: 'Polițele de călătorie (inclusiv Generali Turist Plus Premium) decontează cumpărături de primă necesitate (până la 400 € / persoană) EXCLUSIV pe durata deplasării în străinătate, când ești temporar lipsit de bunurile personale.',
    practicalInsight: 'La sosirea în țara de domiciliu, asigurătorul consideră că ai acces la garderoba de acasă. Clauza de întârziere exclude cumpărăturile făcute la întoarcere (pierderea definitivă a bagajului rămâne însă acoperită separat conform plafonului).',
    summary: 'Mulți călători cumpără haine de urgență după aterizare crezând că decontează bonurile, primind o respingere conform condițiilor contractuale.',
    takeaway: 'Păstrează bonurile și solicită decontarea doar pentru cumpărăturile urgente efectuate la destinația din străinătate, nu la revenirea acasă.',
    sourceNote: 'Condiții Generale Generali Turist Plus Premium (PID 2025) — Secțiunea Întârzierea Bagajelor predate transportatorului.',
    ctaText: 'Vezi toate regulile de călătorie pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Condițiile Generale Asigurare de Călătorie Turist Plus Premium — Generali România (PID 2025)',
      exactClauseOrArticle: 'Secțiunea «Întârzierea bagajelor predate transportatorului — Excluderea zborului de întoarcere la domiciliu»',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/calatorii/bagaj-pierdut',
      verifiedAt: '2026-10-30',
      applicability: 'ipoteza_produs_specific',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual corect conform condițiilor Generali Turist Plus Premium (PID 2025): indemnizația de întârziere a bagajului (max 400 €) acoperă cheltuieli de primă necesitate strict pe durata călătoriei în străinătate.',
    },
    relatedScenarioSlug: 'bagaj-pierdut',
    relatedQuizQuestionId: 'q-calatorii-bagaj',
  },

  // 7. CHECK YOUR POLICY — 3 Întrebări Auto CASCO
  {
    id: 'cp-auto-casco',
    conceptId: 'check_policy',
    category: 'auto',
    headline: '3 clauze contractuale de verificat imediat în contractul tău CASCO:',
    heroImage: '/images/scenarios/parking-hit-run.jpg',
    imageCaption: 'Avarie produsă în parcare de autor neidentificat',
    questionsToCheck: [
      {
        question: '1. Franșiza la evenimente cu autor necunoscut (parcare)',
        reason: 'Multe contracte CASCO aplică o franșiză fixă (ex. 100–200 €) sau procentuală dacă mașina este găsită avariată în parcare fără un vinovat identificat.',
      },
      {
        question: '2. Decontarea în reprezentanță oficială vs. ateliere partenere',
        reason: 'Dacă mașina este în perioada de garanție, asigură-te că polița include clauza de decontare directă la tarifele reprezentanței de marcă, nu doar în rețeaua proprie a asigurătorului.',
      },
      {
        question: '3. Clauza specifică pentru anvelope și jante',
        reason: 'Tăierea sau deteriorarea exclusivă a unei anvelope (fără avarierea altor elemente de suspensie sau caroserie) necesită clauza dedicată de jante și anvelope (disponibilă ca rider CASCO Generali).',
      },
    ],
    whereToLookInContract: 'Condițiile Particulare ale Poliței CASCO Generali România (Mod. CSC 18), secțiunile «Franșize pe eveniment», «Unități reparatoare agreate» și «Clauze speciale».',
    summary: 'Cele mai multe dispute CASCO nu apar din cauza acoperirii de bază pentru accident, ci din cauza franșizelor la autor necunoscut și a atelierelor partenere agreate.',
    takeaway: 'Verifică valoarea franșizei pentru daune cu autor necunoscut și lista service-urilor agreate înainte de semnarea contractului CASCO.',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) & Ghidul Asiguratului ASF.',
    ctaText: 'Verifică dacă ești protejat pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Condițiile Generale Asigurare CASCO Generali România (Mod. CSC 18) & Ghidul Asiguratului ASF',
      exactClauseOrArticle: 'Capitolele «Franșize pe eveniment», «Unități reparatoare agreate» și «Clauze speciale anvelope/jante»',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/auto/pasaj-inundat',
      verifiedAt: '2026-10-30',
      applicability: 'ipoteza_produs_specific',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual corect conform condițiilor Generali CASCO Mod. CSC 18: clauzele de franșiză, unități reparatoare și anvelope sunt opțiuni cheie de configurare.',
    },
    relatedScenarioSlug: 'pasaj-inundat',
  },

  // 8. CHALLENGE A FRIEND — Pasaj Inundat & Motor distrus
  {
    id: 'cf-pasaj-inundat',
    conceptId: 'challenge_friend',
    category: 'auto',
    headline: 'Provocare CASCO: Dacă traversezi un pasaj inundat și motorul aspiră apă, plătește asigurarea?',
    heroImage: '/images/scenarios/water-engine.jpg',
    imageCaption: 'Șoc hidraulic prin forțarea unui pasaj inundat',
    provocation: 'Dacă traversezi o porțiune de drum inundată și motorul aspiră apă (șoc hidraulic / hidrolock), plătește polița CASCO?',
    trapAssumption: 'Presupunerea comună: „Am poliță CASCO completă, deci orice daună provocată de apă sau inundație este acoperită automat.”',
    realAnswer: 'RĂSPUNS CONTRACTUAL: De regulă NU în pachetul de bază. Condițiile CASCO exclud avariile cauzate de pătrunderea apei în motor prin forțarea conștientă a zonelor inundate, cu excepția situației în care a fost contractată clauza dedicată «Daune produse de intrarea apei la motor» (disponibilă opțional la Generali). În schimb, dacă mașina este inundată în stare de staționare parcată, riscul de inundație este acoperit.',
    summary: 'Aspirarea apei în admisie (șocul hidraulic) distruge motorul și constituie o cauză frecventă de refuz la dosarele de daună deschise după ploi torențiale.',
    takeaway: 'Nu forța traversarea zonelor cu apă adâncă. Dacă apa crește în jurul mașinii parcate, evenimentul este de regulă acoperit; dacă înaintezi conștient în apă adâncă, avaria de motor poate fi respinsă fără clauza specifică de apă la motor.',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Clauza Daune produse de intrarea apei la motor.',
    ctaText: 'Acceptă provocarea completă pe whatifinsurance.cristianvaduva.com',
    factualProvenance: {
      documentTitle: 'Condițiile Generale pentru Asigurarea Autovehiculelor Terestre CASCO — Generali România (Mod. CSC 18)',
      exactClauseOrArticle: 'Capitolul «Excluderi & Clauza opțională: Daune produse de intrarea apei la motor»',
      sourceUrl: 'https://whatifinsurance.cristianvaduva.com/scenarii/auto/pasaj-inundat',
      verifiedAt: '2026-10-30',
      applicability: 'ipoteza_produs_specific',
      editorialStatus: 'APROBAT_EDITORIAL',
      verdictRationale: 'Factual corect conform condițiilor Generali CASCO Mod. CSC 18: forțarea apei este exclusă în mod standard, putând fi acoperită exclusiv prin clauza opțională dedicată «Daune produse de intrarea apei la motor».',
    },
    relatedScenarioSlug: 'pasaj-inundat',
    relatedQuizQuestionId: 'q-auto-apa-motor',
  },
];

/**
 * Helper to fetch cards by concept
 */
export function getEditorialCardsByConcept(conceptId: EditorialConceptId): EditorialCard[] {
  return EDITORIAL_CARDS.filter((c) => c.conceptId === conceptId);
}

/**
 * Helper to fetch a card by ID
 */
export function getEditorialCardById(id: string): EditorialCard | undefined {
  return EDITORIAL_CARDS.find((c) => c.id === id);
}

/**
 * Finds a recommended educational card tailored to a quiz question or category
 */
export function getRecommendedEditorialCardForQuiz(
  questionIds: string[],
  score: number
): EditorialCard {
  // If the user encountered water pipes, vacancy or home questions
  if (
    questionIds.some(
      (id) =>
        id.includes('nelocuit') ||
        id.includes('casa') ||
        id.includes('home') ||
        id.includes('teav') ||
        id.includes('pipe')
    )
  ) {
    return EDITORIAL_CARDS.find((c) => c.id === 'hd-locuinta-vacanta') || EDITORIAL_CARDS[0];
  }

  // If user encountered PAD / neighbor water leak
  if (questionIds.some((id) => id.includes('pad') || id.includes('vecin'))) {
    return EDITORIAL_CARDS.find((c) => c.id === 'mf-pad-vecini') || EDITORIAL_CARDS[1];
  }

  // If user encountered the flooded underpass or auto questions
  if (
    questionIds.some(
      (id) =>
        id.includes('auto') ||
        id.includes('motor') ||
        id.includes('car') ||
        id.includes('casco') ||
        id.includes('puddle')
    )
  ) {
    return EDITORIAL_CARDS.find((c) => c.id === 'cf-pasaj-inundat') || EDITORIAL_CARDS[7];
  }

  // If user encountered travel questions
  if (questionIds.some((id) => id.includes('calator') || id.includes('bagaj') || id.includes('travel'))) {
    return EDITORIAL_CARDS.find((c) => c.id === 'dyk-bagaj-retur') || EDITORIAL_CARDS[5];
  }

  // Default fallback based on score: if lower score, show fine print or myth vs fact
  if (score < 3) {
    return EDITORIAL_CARDS.find((c) => c.id === 'mf-pad-vecini') || EDITORIAL_CARDS[1];
  }

  return EDITORIAL_CARDS[0];
}
