/**
 * WHAT IF INSURANCE — BAZA DE CUNOȘTINȚE OFICIALĂ GENERALI ROMÂNIA
 * 
 * Sursă unică de date factuale, produse, clauze, condiții contractuale
 * și proceduri de daună pentru parteneriatul exclusiv cu Generali România.
 * 
 * Partener Oficial: Cristian Văduva (Powered by CristianVaduva.com)
 * Tel: +40 767 110 439
 * Call Center Oficial Generali Daune: 0372.010.202
 */

export interface GeneraliProductFeature {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface GeneraliOptionalRider {
  code: string;
  name: string;
  description: string;
  practicalScenario: string;
  recommendedFor: string;
}

export interface GeneraliProduct {
  id: string;
  category: 'casa' | 'auto' | 'calatorii' | 'business' | 'raspundere';
  commercialName: string;
  officialContractCode: string;
  categoryBadge: string;
  headline: string;
  summary: string;
  officialSourceUrl: string;
  pidDocumentDate: string;
  keyBaseCoverages: GeneraliProductFeature[];
  freeIncludedBenefits: GeneraliProductFeature[];
  optionalRiders: GeneraliOptionalRider[];
  deductiblesInfo: string;
  claimsNoticeDeadline: string;
  targetAudience: string;
}

export interface GeneraliProductSpecificDeadline {
  category: 'casa' | 'auto' | 'calatorii' | 'business';
  productName: string;
  deadlineTitle: string;
  deadlineDetails: string;
  criticalNoticeRule: string;
}

export interface GeneraliClaimsGuide {
  productDeadlines: GeneraliProductSpecificDeadline[];
  emergencyPhone: string;
  roadsideAssistancePhone: string;
  travelAssistancePhone: string;
  onlineNoticeUrl: string;
  advisorContact: {
    name: string;
    phone: string;
    role: string;
  };
  stepByStepProcess: {
    stepNumber: number;
    title: string;
    action: string;
    criticalTip: string;
  }[];
  requiredDocumentsByCategory: {
    category: 'casa' | 'auto' | 'calatorii' | 'business';
    title: string;
    documents: string[];
  }[];
}

export const GENERALI_PRODUCTS: Record<string, GeneraliProduct> = {
  eurocasa: {
    id: 'eurocasa',
    category: 'casa',
    commercialName: 'Generali Eurocasa',
    officialContractCode: 'Mod. E18 Ianuarie 2025 / PID Eurocasa 2025',
    categoryBadge: 'LOCUINȚĂ & BUNURI CASNICE',
    headline: 'Asigurare Facultativă Completă pentru Locuințe și Bunuri',
    summary: 'Polița completă de locuință cu 0 franșiză pe clădire, avans de reparație de până la 30% și acoperire flexibilă pentru riscuri de apă, incendiu, furtună și răspundere familială.',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-fizice/locuinte/completa-plus/',
    pidDocumentDate: 'Ianuarie 2025',
    keyBaseCoverages: [
      {
        title: 'Pachetul Incendiu & FLEXA',
        description: 'Foc, trăsnet, explozie și căderea aparatelor de zbor pe imobil, inclusiv fumul coroziv și daunele produse de apa pompierilor.',
        highlight: true,
      },
      {
        title: 'Fenomene Atmosferice & Naturale',
        description: 'Vijelie, furtună, grindină, cădere de corpuri și arbori, lovirea clădirii de către autovehicule terțe.',
      },
      {
        title: 'Zero Franșiză pe Clădire',
        description: 'Despăgubirea pentru daunele suferite de clădire se achită integral, fără deducere de franșiză pe dosar.',
        highlight: true,
      },
      {
        title: 'Avans de Reparație până la 30%',
        description: 'Generali poate acorda un avans de până la 30% din valoarea estimată a reparației pentru demararea imediată a lucrărilor.',
        highlight: true,
      },
    ],
    freeIncludedBenefits: [
      {
        title: 'Cazare Temporară de Urgență',
        description: 'Până la 3 luni (100 €/lună, max. 300 €) dacă locuința devine nelocuibilă în urma unui eveniment acoperit.',
      },
      {
        title: 'Anularea Călătoriei din Cauza Daunei la Domiciliu',
        description: 'Până la 2.000 € pentru recuperarea cheltuielilor de vacanță compromise dacă trebuie să te întorci de urgență acasă.',
      },
    ],
    optionalRiders: [
      {
        code: 'RIDER_APA_CONDUCTA',
        name: 'Avarii la Instalațiile de Apă & Canalizare',
        description: 'Acoperă spargerea accidentală a conductelor interioare, infiltrațiile și apa refulată din rețea.',
        practicalScenario: 'Țeavă fisurată în peretele băii care inundă parchetul propriu și tavanul vecinilor.',
        recommendedFor: 'Apartamente de bloc și vile cu instalații sanitare încastrate în zidărie.',
      },
      {
        code: 'RIDER_DETECTION_ACCESS',
        name: 'Căutare & Acces la Defecțiune (Detection & Access)',
        description: 'Decontează manopera de spargere a pereților/faianței pentru localizarea fisurii și refacerea ulterioară a finisajelor.',
        practicalScenario: 'Fisură nedetectabilă vizual în șapă care necesită decopertare cu echipamente termografice.',
        recommendedFor: 'Locuințe finisate recent cu plăci ceramice scumpe sau instalații îngropate.',
      },
      {
        code: 'RIDER_RASPUNDERE_FAMILIE',
        name: 'Răspundere Civilă Legală a Familiei',
        description: 'Protejează bugetul familiei în cazul prejudiciilor provocate terților de copii, animale de companie sau neglijență locativă.',
        practicalScenario: 'Copilul sparge un ecran scump într-un showroom comercial sau un ghiveci cade pe o mașină.',
        recommendedFor: 'Familii cu copii minori sau animale de companie.',
      },
      {
        code: 'RIDER_HOME_ASSISTANCE',
        name: 'Home Assistance 24/7 de Urgență',
        description: 'Trimiterea gratuită a unui specialist autorizat (instalator, electrician, lăcătuș) la locație în maximum 3 ore de la apel.',
        practicalScenario: 'Canalizare blocată în weekend sau cheie ruptă în broasca ușii de la intrare.',
        recommendedFor: 'Oricine dorește intervenție operativă fără căutarea meșterilor pe cont propriu.',
      },
      {
        code: 'RIDER_BUNURI_VALOARE',
        name: 'Bunuri de Valoare Deosebită & Obiecte de Colecție',
        description: 'Preluarea ceasurilor de lux, bijuteriilor și tablourilor peste plafonul standard, pe bază de declarație nominală.',
        practicalScenario: 'Ceas de lux furat din locuință evaluat la peste 5.000 €.',
        recommendedFor: 'Posesori de ceasuri, bijuterii de patrimoniu sau obiecte de artă.',
      },
      {
        code: 'RIDER_FOTOVOLTAICE',
        name: 'Instalații Solare și Panouri Fotovoltaice',
        description: 'Acoperă daunele produse panourilor fotovoltaice, invertoarelor și acumulatorilor de grindină, trăsnet sau furtună.',
        practicalScenario: 'Grindină de mari dimensiuni care fisurează celulele fotovoltaice de pe acoperiș.',
        recommendedFor: 'Proprietari de case cu sisteme prosumator instalate.',
      },
    ],
    deductiblesInfo: 'Fără franșiză pe clădire la riscurile de bază. La bunuri casnice și clauze specifice se poate opta pentru franșiză redusă (ex. 50–100 €) pentru un cost optim de primă.',
    claimsNoticeDeadline: 'Maxim 3 zile lucrătoare de la data producerii sau luării la cunoștință a evenimentului.',
    targetAudience: 'Proprietari de apartamente și case, chiriași responsabili și investitori imobiliari.',
  },

  casco: {
    id: 'casco',
    category: 'auto',
    commercialName: 'Generali CASCO (CASCO Perfecto)',
    officialContractCode: 'Mod. CSC 18 / PID CASCO 2025',
    categoryBadge: 'AUTO · PROTECȚIE COMPLETĂ',
    headline: 'Asigurare Auto Facultativă cu Acoperiri Complete și Inspectare Rapidă',
    summary: 'Polița CASCO de la Generali acoperă coliziuni, avarii cu autor necunoscut în parcare, grindină, furt și vandalism, cu opțiuni avansate de decontare directă și mașină la schimb.',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-fizice/auto/casco-perfecto/',
    pidDocumentDate: '2024–2025',
    keyBaseCoverages: [
      {
        title: 'Accidente & Coliziuni Rutiere',
        description: 'Ciocniri cu alte vehicule, răsturnări, derapaje și ieșiri în decor, chiar și din vina proprie.',
        highlight: true,
      },
      {
        title: 'Avarii în Parcare (Autor Necunoscut)',
        description: 'Zgârieturi, înfundături și elemente sparte provocate de alți șoferi care părăsesc locul incidentului.',
        highlight: true,
      },
      {
        title: 'Grindină & Fenomene Naturale (Tehnica PDR)',
        description: 'Deformările produse de grindină sunt remediate prioritar prin metoda PDR (fără revopsire), păstrând vopseaua originală de fabrică.',
      },
      {
        title: 'Furt Parțial sau Total & Vandalism',
        description: 'Furtul autovehiculului sau al unor componente (oglinzi, roți, catalizator), precum și zgârierea intenționată cu cheia.',
      },
      {
        title: 'Inspectare Daună prin Video Call',
        description: 'Constatare operativă la distanță pentru daune medii și ușoare, fără drumuri inutile la centrele de daună.',
        highlight: true,
      },
    ],
    freeIncludedBenefits: [
      {
        title: 'Extensie Teritorială Gratuită în Străinătate',
        description: 'Acoperirea CASCO este valabilă automat în țările din Spațiul Economic European fără primă suplimentară.',
      },
      {
        title: 'Asistență Rutieră de Bază',
        description: 'Depanare la fața locului și tractare de urgență la cel mai apropiat atelier partener.',
      },
    ],
    optionalRiders: [
      {
        code: 'RIDER_APA_MOTOR',
        name: 'Daune Produse de Intrarea Apei la Motor (Șoc Hidraulic)',
        description: 'Acoperă remedierea sau înlocuirea motorului dacă acesta aspiră apă la traversarea carosabilului inundat.',
        practicalScenario: 'Traversarea unui pasaj inundat unde nivelul apei depășește priza de aer a motorului.',
        recommendedFor: 'Șoferi din marile orașe expuse la acumulări rapide de apă după ploi torențiale.',
      },
      {
        code: 'RIDER_JANTE_ANVELOPE',
        name: 'Avarii Exclusiv la Jante și Anvelope',
        description: 'Decontează tăierea anvelopelor sau spargerea jantelor în gropi, chiar dacă nu au fost avariate elementele de suspensie.',
        practicalScenario: 'Tăiere de anvelopă într-o groapă cu muchie ascuțită pe drum național.',
        recommendedFor: 'Autovehicule echipate cu jante din aliaj de dimensiuni mari și anvelope cu profil îngust.',
      },
      {
        code: 'RIDER_MASINA_SCHIMB',
        name: 'Autoturism la Schimb (Vehicul de Curtoazie)',
        description: 'Mașină de înlocuire pusă la dispoziție pe întreaga durată a reparației în service-ul partener.',
        practicalScenario: 'Mașina rămâne 14 zile în atelier pentru vopsitorie și tinichigerie.',
        recommendedFor: 'Persoane a căror activitate zilnică depinde exclusiv de mobilitatea auto.',
      },
      {
        code: 'RIDER_DECONTARE_REPREZENTANTA',
        name: 'Decontare Directă în Reprezentanță Oficială',
        description: 'Garanția efectuării reparațiilor la tarifele rețelei autorizate de marcă a producătorului.',
        practicalScenario: 'Vehicul în perioada de garanție de fabrică la care se cer piese și softuri originale.',
        recommendedFor: 'Autoturisme noi sau aflate în perioada de garanție comercială a producătorului.',
      },
    ],
    deductiblesInfo: 'Configurabilă: 0 franșiză pe eveniment, franșiză fixă (100–200 €) sau procentuală (ex. 10% la furt total). Franșiza fixă optimizează semnificativ prima anuală.',
    claimsNoticeDeadline: 'Imediat la Asistență Rutieră 24h (0313.200.222) dacă mașina este nedeplasabilă; avizare promptă online pe portal sau telefonic; Poliție în 24–48h pentru furt/vandalism.',
    targetAudience: 'Deținători de vehicule noi sau rulate până la 10–12 ani vechime.',
  },

  turist_plus_premium: {
    id: 'turist_plus_premium',
    category: 'calatorii',
    commercialName: 'Generali Turist Plus Premium',
    officialContractCode: 'PID Turist Plus Premium 2025',
    categoryBadge: 'CĂLĂTORII · STRĂINĂTATE',
    headline: 'Asigurare Medicală și de Asistență de Călătorie de Top',
    summary: 'Pachetul premium pentru călătorii internaționale cu 50.000 € cheltuieli medicale de urgență cu decontare directă, repatriere, STORNO și asistență pentru bagaje și documente.',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-fizice/vacante-si-calatorii/turist-plus-premium/',
    pidDocumentDate: '2025',
    keyBaseCoverages: [
      {
        title: 'Urgențe Medicale & Spitalizare (50.000 €)',
        description: 'Acoperire directă a spitalizării, investigațiilor și tratamentelor în clinici private din străinătate.',
        highlight: true,
      },
      {
        title: 'Repatriere Medicală & Transport Sanitar',
        description: 'Transfer sanitar asistat către România sau repatrierea în caz de deces, organizată direct de centrala de asistență Generali.',
        highlight: true,
      },
      {
        title: 'Întârzierea Bagajului (>12 ore) — Până la 400 €',
        description: 'Decontarea cumpărăturilor de primă necesitate (haine, cosmetice) exclusiv pe durata șederii la destinație în străinătate.',
      },
      {
        title: 'Furt sau Pierdere Documente de Călătorie (1.000 €)',
        description: 'Preluarea cheltuielilor și taxelor consulare oficiale pentru emiterea titlului de călătorie de urgență în caz de furt al pașaportului.',
        highlight: true,
      },
      {
        title: 'Răspundere Civilă Privată în Străinătate (10.000 €)',
        description: 'Acoperă daunele materiale sau corporale provocate involuntar terților pe durata deplasării în afara României.',
      },
    ],
    freeIncludedBenefits: [
      {
        title: 'Asistență Telefonică de Urgență 24/7 Europ Assistance',
        description: 'Dispecerat multilingv disponibil non-stop pentru îndrumare către spitale agreate cu decontare directă.',
      },
      {
        title: 'Trimitere Medicamente de Urgență',
        description: 'Livrarea medicamentelor prescrise de urgență indisponibile la destinația din străinătate.',
      },
    ],
    optionalRiders: [
      {
        code: 'RIDER_STORNO',
        name: 'Clauza de Anulare a Călătoriei (STORNO)',
        description: 'Despăgubește costurile de cazare și transport plătite în avans (până la 6.000 € / persoană, cu 10% franșiză) dacă nu mai poți pleca din motive medicale dovedite.',
        practicalScenario: 'Îmbolnăvire neprevăzută sau spitalizare chiar înainte de zborul programat.',
        recommendedFor: 'Pachete turistice scumpe rezervate cu mult timp înainte.',
      },
      {
        code: 'RIDER_SPORTURI_SEZON',
        name: 'Sporturi de Agrement & Schi / Snowboard',
        description: 'Extinde acoperirea medicală pentru accidentele produse pe pârtiile omologate de schi sau la scufundări de agrement.',
        practicalScenario: 'Fractură pe pârtia de schi în Austria care necesită salvare cu sania specializată și ghips.',
        recommendedFor: 'Turiști care practică sporturi de iarnă sau activități montane.',
      },
    ],
    deductiblesInfo: 'Fără franșiză la cheltuielile medicale de urgență. La clauza STORNO de anulare călătorie se aplică o franșiză contractuală standard de 10%.',
    claimsNoticeDeadline: 'Imediat pentru urgențe medicale (contactare dispecerat înainte de internare); maxim 3 zile pentru bagaje și documente.',
    targetAudience: 'Familii, turiști individuali și profesioniști care călătoresc în vacanță sau în interes de afaceri.',
  },

  asigurare_imm: {
    id: 'asigurare_imm',
    category: 'business',
    commercialName: 'Asigurarea IMM Generali',
    officialContractCode: 'Condiții Cadru Asigurarea Întreprinderilor Mici și Mijlocii 2024–2025',
    categoryBadge: 'COMPANII · PATRIMONIU IMM',
    headline: 'Pachet Modular Integrat pentru Clădiri, Utilaje, Stocuri și Răspundere B2B',
    summary: 'Soluția dedicată companiilor mici și mijlocii cu underwriting până la 2.5 milioane EUR, clauză de renunțare la regres și protecție pentru panouri fotovoltaice și întreruperea activității.',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-juridice/cladiri-si-bunuri/imm/',
    pidDocumentDate: '2024–2025',
    keyBaseCoverages: [
      {
        title: 'Protecția Clădirilor și Spațiilor Comerciale',
        description: 'Incendiu, explozie, fenomene naturale, inundații, alunecări de teren și cădere de corpuri pe sediul de afaceri.',
        highlight: true,
      },
      {
        title: 'Utilaje, Echipamente & Mobilier de Birou',
        description: 'Avarii accidentale, scurtcircuite electrice și furt prin efracție al mijloacelor fixe.',
      },
      {
        title: 'Stocuri de Marfă & Materii Prime',
        description: 'Acoperirea mărfurilor depozitate conform normelor de siguranță (inclusiv cerința de depozitare pe paleți la min. 10 cm).',
      },
      {
        title: 'Plată Rapidă pe Bază de Fotografii (până la 1.500 lei)',
        description: 'Generali poate achita direct daunele minore în baza documentației foto fără a mai trimite un inspector în teren.',
        highlight: true,
      },
    ],
    freeIncludedBenefits: [
      {
        title: 'Clauza de Exonerare de Răspundere a Terților (Renunțare la Regres)',
        description: 'Generali despăgubește asiguratul și renunță la dreptul de regres împotriva vecinilor sau colocatarilor culpabili de producerea daunei.',
        highlight: true,
      },
      {
        title: 'Pachet Active Sustenabile',
        description: 'Protecție inclusă pentru panouri fotovoltaice și stații de încărcare EV amplasate la sediul firmei.',
      },
    ],
    optionalRiders: [
      {
        code: 'RIDER_BUSINESS_INTERRUPTION',
        name: 'Pierderea de Profit / Întreruperea Activității (BI)',
        description: 'Decontează marja brută nerealizată și cheltuielile fixe (salarii, chirii) pe durata opririi producției din cauza unei avarii acoperite.',
        practicalScenario: 'Un incendiu oprește secția de producție timp de 60 de zile.',
        recommendedFor: 'Companii de producție, restaurante, clinici și depozite de distribuție.',
      },
      {
        code: 'RIDER_RASPUNDERE_PRODUSE',
        name: 'Răspundere Civilă Față de Terți & Produse Livrate',
        description: 'Protecție legală și despăgubiri pentru daunele cauzate clienților de produsele sau serviciile livrate.',
        practicalScenario: 'Un produs alimentar sau cosmetic defect provoacă alergii unui grup de consumatori.',
        recommendedFor: 'Producători, comercianți și prestatori de servicii profesionale.',
      },
    ],
    deductiblesInfo: 'Personalizabilă per secțiune de risc, în funcție de profilul operațional și valoarea patrimoniului asigurat (capacitate până la 2.500.000 EUR).',
    claimsNoticeDeadline: 'Conform termenului stipulat în condițiile speciale ale poliței IMM (uzual 48–72h), concomitent cu inițierea măsurilor urgente de limitare a pagubelor.',
    targetAudience: 'Firme din comerț, servicii, mici fabrici, restaurante, clinici medicale și birouri profesionale.',
  },
};

export const GENERALI_PRODUCT_DEADLINES: GeneraliProductSpecificDeadline[] = [
  {
    category: 'casa',
    productName: 'Generali Eurocasa',
    deadlineTitle: 'Maxim 3 Zile Lucrătoare',
    deadlineDetails: 'Notificarea oficială trebuie transmisă în maxim 3 zile lucrătoare de la data producerii sau luării la cunoștință a daunei (termen specificat oficial în condițiile generale Eurocasa și pe generali.ro/daune/locuinta/).',
    criticalNoticeRule: 'Oprirea imediată a alimentării generale cu apă și conservarea urmelor sunt cerințe obligatorii de prevenție.',
  },
  {
    category: 'auto',
    productName: 'Generali CASCO (CASCO Perfecto)',
    deadlineTitle: 'Imediat pentru Asistență 24h / Prompt pentru Notificare',
    deadlineDetails: 'Dacă vehiculul este nedeplasabil, contactează imediat Asistența 24h la 0313.200.222. Avizează dosarul prompt online pe generali.ro/daune/auto/casco/notificare/ sau la 0372.010.202 (L-V 09:00 - 17:00).',
    criticalNoticeRule: 'În caz de furt parțial/total sau vandalism, anunță Poliția în termen legal (24–48h) pentru obținerea dovezii oficiale.',
  },
  {
    category: 'calatorii',
    productName: 'Generali Turist Plus Premium',
    deadlineTitle: 'Imediat la Producerea Evenimentului Medical',
    deadlineDetails: 'Accesează online https://eoperation.europ-assistance.hu/travel-693 sau sună la 0313.20.20.20 / 0036.14.58.44.38 imediat ce evenimentul s-a produs, înainte de internare.',
    criticalNoticeRule: 'Generali recomandă expres să nu inițiezi cheltuieli medicale mai mari de 1.500 EUR fără avizarea prealabilă a centralei de asistență Europ Assistance.',
  },
  {
    category: 'business',
    productName: 'Asigurarea IMM Generali',
    deadlineTitle: 'Conform Condițiilor din Contract (uzual 48–72h)',
    deadlineDetails: 'Notificarea se transmite în termenul prevăzut în condițiile de asigurare ale poliței IMM, concomitent cu demararea măsurilor de salvare și limitare a pagubelor.',
    criticalNoticeRule: 'Păstrează registrele de stocuri și dovezile măsurilor de protecție (ex. depozitarea mărfurilor pe paleți la min. 10 cm de sol).',
  },
];

export const GENERALI_CLAIMS_GUIDE: GeneraliClaimsGuide = {
  productDeadlines: GENERALI_PRODUCT_DEADLINES,
  emergencyPhone: '0372.010.202',
  roadsideAssistancePhone: '0313.200.222',
  travelAssistancePhone: '0313.20.20.20 / 0036.14.58.44.38',
  onlineNoticeUrl: 'https://www.generali.ro/daune/',
  advisorContact: {
    name: 'Cristian Văduva',
    phone: '+40 767 110 439',
    role: 'Ghid Independent & Asistență · Powered by CristianVaduva.com',
  },
  stepByStepProcess: [
    {
      stepNumber: 1,
      title: 'Limitarea Daunei & Măsuri de Salvare',
      action: 'Oprește alimentarea cu apă/energie electrică, apelează serviciul 112 în caz de incendiu sau solicită asistența rutieră Generali la 0313.200.222 dacă vehiculul este nedeplasabil.',
      criticalTip: 'Păstrează toate resturile și bunurile avariate; nu demola și nu curăța zona înainte de documentarea fotografică completă!',
    },
    {
      stepNumber: 2,
      title: 'Fotografierea Detaliată & Documentarea Scenei',
      action: 'Fă minimum 10-15 fotografii clare din mai multe unghiuri: imagini de ansamblu ale încăperii/vehiculului și macro-detalii cu componentele avariate, seriile de identificare și contoarele.',
      criticalTip: 'Pozele trebuie realizate înainte de orice remediere provizorie pentru a permite reconstituirea dinamicii daunei.',
    },
    {
      stepNumber: 3,
      title: 'Obținerea Documentelor Oficiale de la Autorități',
      action: 'Solicită actul constatator specific: Notă de constatare de la Asociația de Proprietari (apă/vecini), Proces-Verbal ISU (incendiu/vijelie), Formular Amiabilă sau Dovadă Poliție (auto/furt/vandalism).',
      criticalTip: 'Fără actul oficial de constatare eliberat de autoritatea competentă, stabilirea cauzei și soluționarea dosarului pot fi blocate.',
    },
    {
      stepNumber: 4,
      title: 'Avizarea Oficială conform Termenului Specific Produsului',
      action: 'Respectă termenul specific: 3 zile lucrătoare pentru Locuință (Eurocasa) pe generali.ro/daune/locuinta/; imediat pentru Urgențe Medicale de Călătorie la 0313.20.20.20; prompt pentru CASCO online sau la 0372.010.202.',
      criticalTip: 'La călătorii internaționale, nu iniția cheltuieli medicale mai mari de 1.500 EUR fără avizarea prealabilă a centralei Europ Assistance a grupului Generali.',
    },
    {
      stepNumber: 5,
      title: 'Constatarea, Devizul & Avansul de Reparație',
      action: 'Programarea vizitei inspectorului Generali sau inspectare video la distanță. La Generali Eurocasa, poți solicita avansul de reparație de până la 30% din costul estimat.',
      criticalTip: 'Pentru CASCO, poți alege direct service-urile partenere cu autoconstatare sau atelierele specializate PDR pentru grindină fără revopsire.',
    },
  ],
  requiredDocumentsByCategory: [
    {
      category: 'casa',
      title: 'Locuință & Bunuri Casnice (Generali Eurocasa)',
      documents: [
        'Copie după polița de asigurare Generali Eurocasa și chitanța/dovada achitării primei',
        'Actul de identitate al asiguratului / coproprietarului (CI / BI)',
        'Actul de proprietate al imobilului (contract vânzare-cumpărare, certificat de moștenitor sau extras CF recent)',
        'Schița cadastrală a locuinței sau planul de compartimentare',
        'Notă de constatare emisă de Asociația de Proprietari (în caz de infiltrații de la vecini sau coloane comune)',
        'Proces-Verbal emis de Pompieri / ISU (în caz de incendiu, trăsnet sau explozie)',
        'Dovadă eliberată de Poliție în caz de furt prin efracție sau vandalism',
        'Fotografii detaliate ale tuturor bunurilor și încăperilor avariate',
        'Deviz estimativ de reparație sau facturi/chitanțe doveditoare',
      ],
    },
    {
      category: 'auto',
      title: 'Auto CASCO (Generali CASCO Perfecto)',
      documents: [
        'Polița de asigurare Generali CASCO și anexa cu condițiile particulare',
        'Certificatul de înmatriculare al vehiculului (talonul) cu ITP valabil',
        'Permisul de conducere al persoanei care a condus autovehiculul la momentul incidentului',
        'Actul de identitate al conducătorului auto',
        'Formularul de Constatare Amiabilă de Accident sau Procesul-Verbal emis de Poliție / Anexa 2',
        'Ambele chei originale ale vehiculului (obligatoriu în caz de furt total)',
        'Împuternicire de la firma de leasing sau proprietar (dacă mașina aparține unei persoane juridice)',
        'Fotografii ale avariilor și ale numărului de înmatriculare / seriei de șasiu',
      ],
    },
    {
      category: 'calatorii',
      title: 'Călătorii în Străinătate (Turist Plus Premium)',
      documents: [
        'Polița de asigurare de călătorie Generali Turist Plus Premium',
        'Pașaportul sau cartea de identitate cu ștampilele / dovezile de ieșire/intrare în țară',
        'Biletele de avion / tren / autocar sau confirmarea rezervării pachetului turistic',
        'Raportul medical de urgență emis de medicul / spitalul din străinătate cu diagnostic și prescripții',
        'Facturile și chitanțele originale detaliate ale tratamentelor și medicamentelor achitate',
        'PIR (Property Irregularity Report) eliberat de compania aeriană în caz de întârziere sau pierdere a bagajului',
        'Bonurile fiscale originale pentru cumpărăturile urgente de îmbrăcăminte/cosmetice efectuate la destinație',
        'Dovada depunerii plângerii la poliția locală în caz de furt al actelor de călătorie',
      ],
    },
    {
      category: 'business',
      title: 'Companii & Bunuri B2B (Asigurarea IMM)',
      documents: [
        'Polița de asigurare IMM Generali și anexele de specificare a bunurilor',
        'Certificatul de Înregistrare al companiei (CUI)',
        'Dovada calității de reprezentant legal sau împuternicire pentru persoana care gestionează dosarul',
        'Balanța mijloacelor fixe și fișele contabile ale bunurilor avariate',
        'Facturile de achiziție ale utilajelor, echipamentelor sau stocurilor distruse',
        'Proces-Verbal emis de Pompieri (ISU) sau Poliție (după natura riscului)',
        'Registru de evidență a stocurilor din depozit și dovada respectării condițiilor preventive (depozitare pe paleți)',
        'Deviz de reparație / ofertă de înlocuire de la furnizori autorizați',
      ],
    },
  ],
};
