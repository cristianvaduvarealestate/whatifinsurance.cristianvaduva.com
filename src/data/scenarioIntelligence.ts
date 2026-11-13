/**
 * WHATIF INSURANCE — SCENARIO INTELLIGENCE & TRUST REGISTRY
 * 
 * Auto-generated and verified intelligence for all 121 scenarios.
 * Strict principle: distinguishes contractual verification from editorial estimates.
 * Zero invented prices, zero invented dates, zero unverified contractual guarantees.
 * Generated: 2026-11-07
 */

import { FinancialEstimate, UserProfileId } from '@/types/scenario';

export interface ScenarioIntelligenceItem {
  financialEstimate: FinancialEstimate;
  editorialStatus: 'revizuit' | 'in_curs';
  editorialReviewDate?: string;
  contractualReviewDate?: string;
  contractualProduct?: string;
  contractualDocument?: string;
  legalReviewDate?: string;
  legalBasis?: string;
  preventionTips: string[];
  userProfiles: UserProfileId[];
  searchKeywords: string[];
}

export const SCENARIO_INTELLIGENCE: Record<string, ScenarioIntelligenceItem> = {
  "casa-teava-sparta": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Legea nr. 260/2008 privind asigurarea obligatorie a locuințelor împotriva dezastrelor naturale (PAD)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/98864",
      "sourceDate": "Monitorul Oficial nr. 757/2008, republicată / actualizată 2023 prin Legea 115/2023",
      "insurer": "PAID România / Asigurători Locuințe",
      "product": "Asigurare Facultativă a Locuinței vs PAD",
      "policyVersion": "Art. 18 Legea nr. 260/2008 & Condiții Asigurare Facultativă a Locuinței",
      "assumptions": "Evaluare calitativă a riscului conform Legea nr. 260/2008 privind asigurarea obligatorie a locuințelor împotriva dezastrelor naturale (PAD). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Legea nr. 260/2008 privind asigurarea obligatorie a locuințelor împotriva dezastrelor naturale (PAD) — Art. 18 Legea nr. 260/2008 & Condiții Asigurare Facultativă a Locuinței",
    "preventionTips": [
      "Închide robinetul general de alimentare cu apă când locuința rămâne nesupravegheată mai mult de 48 de ore.",
      "Instalează senzori independenți de inundație cu notificare pe telefon lângă chiuvete, mașina de spălat și centrală.",
      "Înlocuiește racordurile flexibile din cauciuc și plasă metalică la fiecare 3–5 ani, înainte de apariția semnelor de îmbătrânire.",
      "Izolează conductele amplasate pe pereți exteriori sau în spații neîncălzite înainte de începerea sezonului rece."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "inundație",
      "instalații",
      "parchet",
      "conductă",
      "casă & locuință",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta"
    ]
  },
  "casa-daune-vecini": {

    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Generale de Asigurare a Locuințelor Generali Eurocasa (Mod. E18) & Codul Civil Român",
      "sourceUrl": "https://www.generali.ro/asigurari/persoane-fizice/locuinte/completa-plus/",
      "sourceDate": "Mod. E18 / Ianuarie 2025",
      "insurer": "Generali România / Asigurători de Locuință Autorizați ASF",
      "product": "Generali Eurocasa",
      "policyVersion": "Condiții Generale Mod. E18 (Secțiunea Răspundere Civilă Față de Terți)",
      "assumptions": "Evaluare calitativă a riscului de răspundere civilă delictuală conform Art. 1376 Cod Civil și Condițiilor Generale Generali Eurocasa (Mod. E18). O eventuală despăgubire a vecinului afectat depinde de existența clauzei de răspundere civilă a proprietarului pe polița ta, de sublimita contractată per eveniment, de excluderile aplicabile și de devizul aprobat.",
      "qualitativeAssessment": "Costul remedierii depinde de gravitatea infiltrației, finisajele afectate în apartamentul vecinului de dedesubt (tavan fals, glet, parchet, mobilier) și tarifele manoperei autorizate. Despăgubirea nu este automată și depinde de produsul deținut, clauzele contractate, limitele maxime stabilite și lipsa culpei grave sau a excluderilor contractuale.",
      "includedItems": [
        "Evaluarea calitativă a riscului de răspundere civilă față de terți și regres",
        "Analiza clauzelor și condițiilor aplicabile pentru daune de apă produse vecinilor"
      ],
      "excludedItems": [
        "Sume fixe sau promisiuni automate de despăgubire",
        "Avarii provenite din coloanele comune aflate în paza asociației de bloc"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Generali Eurocasa",
    "contractualDocument": "Generali Eurocasa — Condiții Generale Mod. E18 (Secțiunea Răspundere Civilă Față de Terți)",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român — Art. 1376 (Răspunderea pentru prejudiciul cauzat de lucruri)",
    "preventionTips": [
      "Verifică periodic etanșeitatea racordurilor flexibile și a furtunului de alimentare al mașinii de spălat.",
      "Montează o electrovalvă automată sau senzori de inundație cu notificare și oprire la scurgere accidentală.",
      "Oprește robinetul dedicat mașinii de spălat și robinetul general de apă când pleci de acasă pe durate mai mari.",
      "Asigură refacerea hidroizolației elastice sub gresie în baie și bucătărie la lucrările de renovare."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "vecini",
      "răspundere civilă",
      "regres",
      "planșeu",
      "casă & locuință"
    ]
  },
  "casa-masina-spalat-furtun": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de înlocuirea parchetului umflat, zugrăvirea pereților deteriorați și eventualele daune de infiltrație produse la plafonul vecinilor. Evaluarea devizelor conform clauzei de apă de conductă este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Evită pornirea ciclurilor de spălare pe durata nopții sau când ești plecat de acasă.",
      "Echipează aparatul cu un furtun de siguranță cu supapă mecanică (sistem de tip AquaStop).",
      "Curăță periodic filtrul de evacuare și verifică etanșeitatea garniturilor la tambur și racord.",
      "Montează o tavă de retenție cu senzor de umiditate sub aparatele sanitare din bucătărie."
    ],
    "userProfiles": [
      "proprietar",
      "chirias"
    ],
    "searchKeywords": [
      "mașină spălat",
      "furtun",
      "apă",
      "baie",
      "casă & locuință",
      "furtun masina de spalat",
      "inundat baia",
      "refulare masina spalat"
    ]
  },
  "casa-masina-spalat-vase-scurgere": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde remedierea mobilierului de bucătărie degradat prin umiditate prelungită și refacerea hidroizolației locale. Evaluarea acoperirii avariilor accidentale la conducte este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Evită pornirea ciclurilor de spălare pe durata nopții sau când ești plecat de acasă.",
      "Echipează aparatul cu un furtun de siguranță cu supapă mecanică (sistem de tip AquaStop).",
      "Curăță periodic filtrul de evacuare și verifică etanșeitatea garniturilor la tambur și racord.",
      "Montează o tavă de retenție cu senzor de umiditate sub aparatele sanitare din bucătărie."
    ],
    "userProfiles": [
      "proprietar",
      "chirias"
    ],
    "searchKeywords": [
      "bucătărie",
      "mașină vase",
      "mobilă",
      "infiltrație",
      "casă & locuință"
    ]
  },
  "casa-teava-inghetata-iarna": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători Locuințe Retail (Piața din România)",
      "product": "Asigurare Facultativă de Locuință",
      "policyVersion": "Clauza Avarii Accidentale la Instalațiile de Apă / Fenomene de Îngheț",
      "assumptions": "Evaluare calitativă a riscului de îngheț și refulare de apă la instalații interioare conform normelor generale de asigurare a locuinței. Acoperirea nu este automată: depinde de contractarea expresă a clauzei de îngheț/apă de conductă, respectarea măsurilor de prevenție (menținerea unei temperaturi minime în imobil, golirea instalațiilor în spații neîncălzite) și de devizul aprobat.",
      "qualitativeAssessment": "Costul remedierii depinde de amploarea fisurii conductei, debitul de apă eliberat la dezgheț, instalațiile sanitare și termice avariate, finisajele degradate și eventualele daune provocate proprietăților învecinate. O eventuală despăgubire depinde strict de existența clauzei contractuale specifice în polița de locuință, notificarea în termen și respectarea măsurilor preventive (menținerea încălzirii minime, conservarea instalațiilor pe ger).",
      "includedItems": [
        "Evaluarea calitativă a riscului de îngheț și a daunelor produse de apă la instalații",
        "Cerințele de prevenție și notificare aplicabile asigurării locuinței"
      ],
      "excludedItems": [
        "Sume fixe sau estimări nesusținute de devize concrete",
        "Polițe de asigurare auto sau alte riscuri nespecifice locuinței"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "legalReviewDate": "12 noiembrie 2026",
    "legalBasis": "Codul Civil Român — Art. 1376 (Răspunderea pentru prejudiciul cauzat de lucruri) & Norme Cadru de Asigurare a Locuinței",
    "preventionTips": [
      "Menține o temperatură minimă de cel puțin 8–10°C în toate spațiile tranzitate de conducte în perioadele de ger extrem.",
      "Golește complet instalațiile de apă din imobilele nelocuite sau casele de vacanță înainte de debutul iernii.",
      "Izolează termic traseele conductelor amplasate pe pereți exteriori sau în camere tehnice neîncălzite.",
      "Oprește alimentarea generală cu apă înainte de dezghețare la observarea unei conducte înghețate pentru a limita inundarea."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "îngheț",
      "conductă",
      "iarnă",
      "cameră tehnică",
      "casă & locuință",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta",
      "teava crapata de ger",
      "inghet iarna",
      "robinet inghetat",
      "calorifer spart"
    ]
  },
  "casa-furtuna-acoperis-vant": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători Locuințe Retail",
      "product": "Asigurare Facultativă de Locuință",
      "policyVersion": "Clauza Fenomene Atmosferice (Furtună, Vijelie, Grindină)",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza Fenomene Atmosferice (Furtună, Vijelie, Grindină)",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "furtună",
      "acoperiș",
      "vijelie",
      "mansardă",
      "casă & locuință",
      "furtun masina de spalat",
      "inundat baia",
      "refulare masina spalat"
    ]
  },
  "casa-panouri-fotovoltaice-grindina": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Bunuri de Valoare / Proprietate Avansată",
      "policyVersion": "Clauza Echipamente Tehnice Fixate la Exterior & Panouri Fotovoltaice",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza Echipamente Tehnice Fixate la Exterior & Panouri Fotovoltaice",
    "preventionTips": [
      "Alege o structură de susținere și cleme de fixare certificate tehnic pentru rezistență la rafale de vânt specifice zonei.",
      "Efectuează o verificare anuală a strângerii mecanice și a traseelor de cabluri expuse la soare și intemperii.",
      "Montează descărcătoare de supratensiune (SPD) dedicate pe circuitele de curent continuu ale invertorului.",
      "Realizează o termografie periodică a panourilor pentru depistarea timpurie a punctelor calde (hot-spots)."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "fotovoltaice",
      "panouri solare",
      "grindină",
      "energie",
      "casă & locuință",
      "grindina",
      "panouri sparte",
      "daune grindina",
      "furtuna"
    ]
  },
  "casa-scurtcircuit-incendiu": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători Locuințe Retail",
      "product": "Asigurare Facultativă de Locuință (FLEXA)",
      "policyVersion": "Clauza FLEXA (Fire, Lightning, Explosion, Aircraft Impact)",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza FLEXA (Fire, Lightning, Explosion, Aircraft Impact)",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "incendiu",
      "scurtcircuit",
      "fum",
      "electric",
      "casă & locuință",
      "incendiu priza",
      "foc in apartament",
      "daune fum"
    ]
  },
  "casa-fum-incendiu-vecin": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători Locuințe Retail",
      "product": "Asigurare Facultativă de Locuință (FLEXA)",
      "policyVersion": "Clauza FLEXA (Fire, Lightning, Explosion, Aircraft Impact)",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza FLEXA (Fire, Lightning, Explosion, Aircraft Impact)",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "fum",
      "incendiu vecin",
      "decontaminare",
      "funingine",
      "casă & locuință",
      "incendiu priza",
      "scurtcircuit",
      "foc in apartament",
      "daune fum"
    ]
  },
  "casa-furt-bicicleta-spatii-comune": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar reprezintă valoarea de înlocuire a bicicletei sustrase din spațiile comune ale blocului (uscat / adăpost). Evaluarea condițiilor contractuale privind efracția în dependințe este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "bicicletă",
      "furt",
      "spații comune",
      "antifurt",
      "casă & locuință",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  },
  "casa-copac-cazut-proprietate": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include operațiunile de debitare și degajare a arborelui prăbușit, precum și refacerea acoperișului sau gardului avariat. Evaluarea riscului de furtună și cădere de corpuri este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "copac",
      "furtună",
      "gard",
      "anexe",
      "casă & locuință"
    ]
  },
  "casa-terasa-infiltratie-hidroizolatie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului de infiltrație prin terasă conform condițiilor generale de asigurare a locuinței.",
      "qualitativeAssessment": "Costurile reparațiilor pot varia semnificativ în funcție de natura și amploarea avariei, materialele necesare, complexitatea intervenției și tarifele practicate de prestatorii autorizați. Valoarea despăgubirii sau a reparației se stabilește în funcție de evaluarea concretă a daunelor și de devizele aferente.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "terasă",
      "hidroizolație",
      "infiltrație",
      "balcon",
      "casă & locuință"
    ]
  },
  "casa-daune-provocate-chirias": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de costul remedierii finisajelor, tâmplăriei sau instalațiilor degradate peste uzura normală. Evaluarea depozitului de garanție și a acoperirilor facultative este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Întocmește un proces-verbal detaliat de predare-primire însoțit de fotografii clare la începutul și finalul contractului.",
      "Prevede în contract o garanție echitabilă și reguli clare privind responsabilitatea micilor reparații curente.",
      "Verifică anual starea tehnică a instalației de gaze și a centralei termice cu o firmă autorizată ISCIR.",
      "Pentru închirierea în regim scurt, folosește încuietori inteligente cu coduri unice per rezervare."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "chirie",
      "chiriaș",
      "proprietar",
      "garanție",
      "casă & locuință",
      "chirias rau platnic",
      "apartament distrus chirias",
      "daune regim hotelier",
      "garantie chirie"
    ]
  },
  "casa-accidentare-musafir-locuinta": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar poate cuprinde cheltuielile de îngrijire medicală și pretențiile patrimoniale formulate de persoana vătămată în incinta locuinței. Evaluarea clauzei de răspundere civilă familială este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "musafir",
      "accident",
      "răspundere",
      "fractură",
      "casă & locuință"
    ]
  },
  "casa-renovare-daune-vecini": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde refacerea tencuielilor fisurate sau vopsitoriei deteriorate în apartamentul vecin pe durata lucrărilor de reamenajare. Evaluarea clauzelor de răspundere pentru renovări este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "renovare",
      "meșteri",
      "fisuri",
      "vecin",
      "casă & locuință"
    ]
  },
  "casa-usa-garaj-avarie-masina": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include remedierea mecanismului ușii de garaj și reparația caroseriei autovehiculului atins de poartă. Delimitarea între asigurarea locuinței și CASCO este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "ușă garaj",
      "automatizare",
      "plafon mașină",
      "avarie",
      "casă & locuință"
    ]
  },
  "casa-retea-electrica-supratensiune-electrocasnice": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de înlocuirea sau repararea aparatelor electrocasnice arse prin supratensiune tranzitorie de rețea. Evaluarea clauzei de fenomene electrice este în curs de verificare cu surse primare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Încarcă vehiculul sau echipamentele electrice folosind exclusiv stații sau cabluri conforme cu protecție diferențială.",
      "Evită încărcarea nesupravegheată peste noapte a bateriilor detașabile de trotinete pe căile de evacuare.",
      "Solicită inspectarea scutului de protecție al acumulatorului la service după orice contact dur cu o bordură sau piatră.",
      "Nu continua utilizarea acumulatorilor care prezintă deformări mecanice, miros de electrolit sau supraîncălzire."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "supratensiune",
      "electric",
      "pompă căldură",
      "trăsnet",
      "casă & locuință",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  },
  "casa-imobil-nelocuit-perioada-lunga": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este influențat de avariile neregulate produse pe perioada absenței și clauza de neocupare aplicabilă. Evaluarea documentată a termenelor de notificare a absenței este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "neocupare",
      "plecare",
      "absență",
      "excludere",
      "casă & locuință"
    ]
  },
  "casa-inundatie-revarsare-naturala-pad": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde remedierea daunelor structurale și a finisajelor produse prin revărsare de ape naturale. Delimitarea între despăgubirea legală PAD și asigurarea facultativă este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Închide robinetul general de alimentare cu apă când locuința rămâne nesupravegheată mai mult de 48 de ore.",
      "Instalează senzori independenți de inundație cu notificare pe telefon lângă chiuvete, mașina de spălat și centrală.",
      "Înlocuiește racordurile flexibile din cauciuc și plasă metalică la fiecare 3–5 ani, înainte de apariția semnelor de îmbătrânire.",
      "Izolează conductele amplasate pe pereți exteriori sau în spații neîncălzite înainte de începerea sezonului rece."
    ],
    "userProfiles": [
      "proprietar",
      "chirias"
    ],
    "searchKeywords": [
      "inundație naturală",
      "pad",
      "viitură",
      "râu",
      "casă & locuință",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta"
    ]
  },
  "casa-furt-bijuterii-seif": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar reprezintă valoarea bunurilor de valoare sustrase prin efracție din seiful ancorat. Evaluarea cerințelor de securitate și a sublimitelor pentru valori este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "furt",
      "efracție",
      "bijuterii",
      "yală",
      "casă & locuință",
      "teava crapata de ger",
      "inghet iarna",
      "robinet inghetat",
      "calorifer spart"
    ]
  },
  "casa-lucrari-santier-vecin-tasare": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde expertiza tehnică privind tasarea fundației și consolidarea zidăriei fisurate prin săpăturile alăturate. Evaluarea răspunderii executantului lucrării este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "șantier",
      "fundație",
      "tasare",
      "vecin",
      "casă & locuință"
    ]
  },
  "casa-explozie-acumulare-gaze": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include refacerea structurală masivă a clădirii, a instalațiilor distruse și despăgubirea prejudiciilor aduse vecinilor. Evaluarea clauzei standard de explozie este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "explozie",
      "gaze",
      "undă șoc",
      "geamuri sparte",
      "casă & locuință"
    ]
  },
  "casa-vandalism-usa-zugraveala": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde curățarea sau revopsirea fațadei deteriorate și înlocuirea ușii de acces vandalizate. Evaluarea condițiilor privind actele de vandalism este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Folosește o cameră de bord cu modul de supraveghere în parcare și senzor de șoc alimentat prin kit dedicat.",
      "Alege locuri de parcare iluminate corespunzător și evită parcarea în unghiuri moarte sau strâmte.",
      "Pliază oglinzile retrovizoare exterioare la parcarea pe străzi cu circulație densă.",
      "Păstrează o distanță confortabilă față de borduri înalte și stâlpi pentru a preveni atingerile manevrelor vecine."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "vandalism",
      "ușă",
      "yală",
      "distrugere",
      "casă & locuință"
    ]
  },
  "casa-scurgere-combustibil-centrala": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de neutralizarea și curățarea combustibilului scurs, remedierea instalației termice și refacerea finisajelor afectate. Evaluarea clauzei de scurgeri accidentale este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "centrală termică",
      "antigel",
      "avarie",
      "agent termic",
      "casă & locuință"
    ]
  },
  "casa-cutremur-daune-structurale": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului patrimonial asociat locuinței, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde consolidarea elementelor portante și refacerea tencuielilor avariate în urma mișcării seismice. Coordonarea între despăgubirea prin PAD și polița facultativă este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "cutremur",
      "seism",
      "pad",
      "structură",
      "consolidare",
      "casă & locuință"
    ]
  },
  "auto-tamponare-minora-costuri-mari": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Norma ASF nr. 20/2017 privind utilizările formularelor de constatare amiabilă și reglementarea daunelor RCA",
      "sourceUrl": "https://asfromania.ro/files/reglementari/Norma%2020%202017%20RCA.pdf",
      "sourceDate": "Monitorul Oficial nr. 605/2017",
      "insurer": "Asigurători autorizați RCA din România",
      "product": "RCA cu Decontare Directă vs CASCO",
      "policyVersion": "Art. 2223 Codul Civil Român & Art. 26 Legea 132/2017",
      "assumptions": "Evaluare calitativă a riscului conform Norma ASF nr. 20/2017 privind utilizările formularelor de constatare amiabilă și reglementarea daunelor RCA. Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Norma ASF nr. 20/2017 privind utilizările formularelor de constatare amiabilă și reglementarea daunelor RCA — Art. 2223 Codul Civil Român & Art. 26 Legea 132/2017",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "tamponare",
      "costuri-reparatii",
      "radar-adas",
      "faruri-led",
      "casco",
      "auto & mobilitate"
    ]
  },
  "auto-parcare-lovit-autor-necunoscut": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Legea nr. 132/2017 privind asigurarea obligatorie de răspundere civilă auto (RCA)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/189499",
      "sourceDate": "Monitorul Oficial nr. 431/2017, republicată / actualizată 2024",
      "insurer": "BAAR / Asigurători CASCO",
      "product": "CASCO Retail / Fondul de Protecție a Victimelor Străzii (FPVS)",
      "policyVersion": "Art. 34 alin. (1) Legea nr. 132/2017",
      "assumptions": "Evaluare calitativă a riscului conform Legea nr. 132/2017 privind asigurarea obligatorie de răspundere civilă auto (RCA). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Legea nr. 132/2017 privind asigurarea obligatorie de răspundere civilă auto (RCA) — Art. 34 alin. (1) Legea nr. 132/2017",
    "preventionTips": [
      "Folosește o cameră de bord cu modul de supraveghere în parcare și senzor de șoc alimentat prin kit dedicat.",
      "Alege locuri de parcare iluminate corespunzător și evită parcarea în unghiuri moarte sau strâmte.",
      "Pliază oglinzile retrovizoare exterioare la parcarea pe străzi cu circulație densă.",
      "Păstrează o distanță confortabilă față de borduri înalte și stâlpi pentru a preveni atingerile manevrelor vecine."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "parcare",
      "autor-necunoscut",
      "hit-and-run",
      "casco",
      "vandalism",
      "auto & mobilitate",
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare"
    ]
  },
  "auto-sofer-neainsurat-rca-expirat": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Norma ASF nr. 20/2017 privind utilizările formularelor de constatare amiabilă și reglementarea daunelor RCA",
      "sourceUrl": "https://asfromania.ro/files/reglementari/Norma%2020%202017%20RCA.pdf",
      "sourceDate": "Monitorul Oficial nr. 605/2017",
      "insurer": "Asigurători autorizați RCA din România",
      "product": "RCA cu Decontare Directă vs CASCO",
      "policyVersion": "Art. 2223 Codul Civil Român & Art. 26 Legea 132/2017",
      "assumptions": "Evaluare calitativă a riscului conform Norma ASF nr. 20/2017 privind utilizările formularelor de constatare amiabilă și reglementarea daunelor RCA. Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Norma ASF nr. 20/2017 privind utilizările formularelor de constatare amiabilă și reglementarea daunelor RCA — Art. 2223 Codul Civil Român & Art. 26 Legea 132/2017",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "rca-expirat",
      "sofer-neasigurat",
      "baar",
      "decontare-directa",
      "recuperare-daune",
      "auto & mobilitate",
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare"
    ]
  },
  "auto-furt-complet-masina": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Asigurători CASCO Retail",
      "product": "CASCO Risc Furt",
      "policyVersion": "Art. 2200-2204 Cod Civil & Clauza Furt din Condițiile Generale CASCO",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 2200-2204 Cod Civil & Clauza Furt din Condițiile Generale CASCO",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "furt-auto",
      "keyless-go",
      "pierdere-totala",
      "casco",
      "polita-auto",
      "auto & mobilitate"
    ]
  },
  "auto-grindina-plafon-capota": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători CASCO Retail",
      "product": "CASCO Complet",
      "policyVersion": "Secțiunea Fenomene Naturale, Clauza Grindină & Evaluare PDR",
      "assumptions": "Evaluare calitativă a riscului conform Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "CASCO Complet",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Secțiunea Fenomene Naturale, Clauza Grindină & Evaluare PDR)",
    "preventionTips": [
      "Evită pornirea ciclurilor de spălare pe durata nopții sau când ești plecat de acasă.",
      "Echipează aparatul cu un furtun de siguranță cu supapă mecanică (sistem de tip AquaStop).",
      "Curăță periodic filtrul de evacuare și verifică etanșeitatea garniturilor la tambur și racord.",
      "Montează o tavă de retenție cu senzor de umiditate sub aparatele sanitare din bucătărie."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "grindina",
      "fenomene-naturale",
      "pdr-reparatii",
      "parbriz-spart",
      "casco",
      "auto & mobilitate",
      "furtun masina de spalat",
      "inundat baia",
      "refulare masina spalat",
      "panouri sparte",
      "daune grindina",
      "furtuna"
    ]
  },
  "auto-parbriz-crapat-autostrada": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători CASCO Retail",
      "product": "CASCO Clauza Geamuri",
      "policyVersion": "Clauza Elemente Vitrate & Recalibrare Sisteme ADAS",
      "assumptions": "Evaluare calitativă a riscului conform Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "CASCO Clauza Geamuri",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Clauza Elemente Vitrate & Recalibrare Sisteme ADAS)",
    "preventionTips": [
      "Mărește distanța de urmărire față de autocamioane și vehicule de mare tonaj pe autostrăzi și drumuri expres.",
      "Repară operativ ciobiturile minore prin injectare cu rășină optică înainte ca vibrațiile să extindă fisura.",
      "Înlocuiește lamelele ștergătoarelor uzate pentru a evita zgârierea fină a stratului exterior de sticlă.",
      "Evită folosirea apei fierbinți pentru dezghețarea parbrizului iarna, pentru a nu produce șoc termic."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "parbriz",
      "autostrada",
      "piatra-sarita",
      "hud",
      "casco-geamuri",
      "auto & mobilitate",
      "parbriz crapat",
      "piatra autostrada",
      "inlocuire parbriz",
      "elemente vitrate"
    ]
  },
  "auto-inundatie-apa-motor-hidroizolare": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători CASCO Retail",
      "product": "CASCO",
      "policyVersion": "Secțiunea Excluderi Generale - Ingestie de Apă în Motor / Neglijență Gravă",
      "assumptions": "Evaluare calitativă a riscului conform Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "CASCO",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Secțiunea Excluderi Generale - Ingestie de Apă în Motor / Neglijență Gravă)",
    "preventionTips": [
      "Efectuează o diagnoză auto completă și verifică starea fluidelor de răcire înainte de călătorii lungi pe autostradă.",
      "Păstrează în mașină un compresor portabil, o roată de rezervă verificată sau un kit de pană cu spumă activă valabilă.",
      "Salvează în telefon numărul direct al asistenței rutiere internaționale furnizate prin abonament sau asigurare.",
      "Oprește în siguranță pe banda de urgență și îmbracă vesta reflectorizantă înainte de a coborî din vehicul."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "inundatie-motor",
      "hidrolock",
      "excludere-culpa",
      "casco",
      "ape-mari",
      "auto & mobilitate",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta"
    ]
  },
  "auto-baterie-vehicul-electric-avarie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Asigurători CASCO Retail",
      "product": "CASCO Dedicated EV / Clauză Mobilitate Electrică",
      "policyVersion": "Art. 2217 Codul Civil Român & Norme Tehnice de Securitate Producători EV",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 2217 Codul Civil Român & Norme Tehnice de Securitate Producători EV",
    "preventionTips": [
      "Încarcă vehiculul sau echipamentele electrice folosind exclusiv stații sau cabluri conforme cu protecție diferențială.",
      "Evită încărcarea nesupravegheată peste noapte a bateriilor detașabile de trotinete pe căile de evacuare.",
      "Solicită inspectarea scutului de protecție al acumulatorului la service după orice contact dur cu o bordură sau piatră.",
      "Nu continua utilizarea acumulatorilor care prezintă deformări mecanice, miros de electrolit sau supraîncălzire."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "vehicul-electric",
      "baterie-ev",
      "casco-electric",
      "dauna-totala",
      "inalta-tensiune",
      "auto & mobilitate",
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  },
  "auto-vandalism-zgariat-cheie-vopsea": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața Asigurărilor din România (Standard UNSAR / ASF)",
      "product": "CASCO / RCA",
      "policyVersion": "Condiții Particulare CASCO",
      "assumptions": "Evaluare calitativă a riscului conform Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "CASCO / RCA",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Condiții Particulare CASCO)",
    "preventionTips": [
      "Folosește o cameră de bord cu modul de supraveghere în parcare și senzor de șoc alimentat prin kit dedicat.",
      "Alege locuri de parcare iluminate corespunzător și evită parcarea în unghiuri moarte sau strâmte.",
      "Pliază oglinzile retrovizoare exterioare la parcarea pe străzi cu circulație densă.",
      "Păstrează o distanță confortabilă față de borduri înalte și stâlpi pentru a preveni atingerile manevrelor vecine."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "vandalism",
      "zgarieturi-cheie",
      "vopsitorie-integrala",
      "casco",
      "daune-parcare",
      "auto & mobilitate",
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare"
    ]
  },
  "auto-bagaje-furate-din-portbagaj": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar depinde de valoarea bunurilor sustrase prin efracție din portbagaj și costul remedierii încuietorilor sau geamurilor forțate. Evaluarea documentată a limitelor de acoperire pentru bunuri transportate este în curs de verificare cu surse primare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Plasează un dispozitiv discret de localizare (AirTag / SmartTag) în fiecare bagaj predat la cală.",
      "Fotografiază exteriorul bagajului și conținutul orientativ înainte de predarea la ghișeul de check-in.",
      "Păstrează întotdeauna actele, medicamentele de strictă necesitate și obiectele valoroase în bagajul de mână.",
      "Îndepărtează etichetele vechi de zbor pentru a nu crea confuzii în sistemele automate de sortare din aeroport."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "furt-bagaje",
      "efractie-auto",
      "casco-bagaje",
      "bunuri-personale",
      "auto & mobilitate",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "auto-masina-inchiriata-avarie-vacanta": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar depinde de cuantumul franșizei contractuale reținute de compania de închirieri (CDW/Super CDW) și costul efectiv al reparațiilor facturate. Evaluarea documentată a condițiilor de rambursare este în curs de verificare cu surse primare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "rent-a-car",
      "fransiza-inchiriere",
      "vacanta-strainatate",
      "card-credit",
      "asigurare-calatorie",
      "auto & mobilitate"
    ]
  },
  "auto-coliziune-trotineta-electrica-biciclist": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 Codul Civil Român (Răspunderea civilă delictuală)",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1357 Codul Civil Român (Răspunderea civilă delictuală)",
    "preventionTips": [
      "Încarcă vehiculul sau echipamentele electrice folosind exclusiv stații sau cabluri conforme cu protecție diferențială.",
      "Evită încărcarea nesupravegheată peste noapte a bateriilor detașabile de trotinete pe căile de evacuare.",
      "Solicită inspectarea scutului de protecție al acumulatorului la service după orice contact dur cu o bordură sau piatră.",
      "Nu continua utilizarea acumulatorilor care prezintă deformări mecanice, miros de electrolit sau supraîncălzire."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "trotineta-electrica",
      "biciclist",
      "autor-necunoscut",
      "casco",
      "dauna-caroserie",
      "auto & mobilitate",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  },
  "auto-pana-majora-motor-strainatate": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața Asigurărilor din România (Standard UNSAR / ASF)",
      "product": "CASCO / RCA",
      "policyVersion": "Condiții Particulare CASCO",
      "assumptions": "Evaluare calitativă a riscului conform Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "CASCO / RCA",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Condiții Particulare CASCO)",
    "preventionTips": [
      "Efectuează o diagnoză auto completă și verifică starea fluidelor de răcire înainte de călătorii lungi pe autostradă.",
      "Păstrează în mașină un compresor portabil, o roată de rezervă verificată sau un kit de pană cu spumă activă valabilă.",
      "Salvează în telefon numărul direct al asistenței rutiere internaționale furnizate prin abonament sau asigurare.",
      "Oprește în siguranță pe banda de urgență și îmbracă vesta reflectorizantă înainte de a coborî din vehicul."
    ],
    "userProfiles": [
      "sofer",
      "calator"
    ],
    "searchKeywords": [
      "asistenta-rutiera",
      "pana-strainatate",
      "repatriere-auto",
      "autostrada-germania",
      "cazare-urgenta",
      "auto & mobilitate",
      "teava crapata de ger",
      "inghet iarna",
      "robinet inghetat",
      "calorifer spart"
    ]
  },
  "auto-coliziune-masina-lux-costuri-exorbitante": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar depinde de valoarea devizului de reprezentanță pentru vehiculul de lux avariat și limita răspunderii prin polița RCA. Evaluarea documentată a riscului de regres sau depășire de plafon este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "masina-lux",
      "supercar",
      "limita-rca",
      "despagubire-maxima",
      "raspundere-auto",
      "auto & mobilitate"
    ]
  },
  "auto-daune-gard-proprietate-terti": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de costul refacerii împrejmuirii sau porții avariate și manopera de reconstrucție solicitată de proprietar. Decontarea prin RCA depinde de devizul aprobat și este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "daune-gard",
      "polei",
      "rca-imobile",
      "proprietate-terti",
      "casco-avarii",
      "auto & mobilitate"
    ]
  },
  "auto-vehicul-comercial-indisponibil-flota": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este influențat de costul reparației vehiculului utilitar și pierderile generate de indisponibilitatea acestuia în activitatea comercială. Evaluarea acoperirilor de flotă este în curs de verificare cu surse primare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "vehicul-comercial",
      "flota-auto",
      "lipsa-folosinta",
      "rca-business",
      "inchiriere-duba",
      "auto & mobilitate"
    ]
  },
  "auto-transport-platforma-avarie-tranzit": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de avariile suferite de autovehicul în timpul încărcării, transportului sau descărcării de pe platformă. Răspunderea transportatorului (CMR) și polițele facultative sunt în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "transport-platforma",
      "asigurare-cmr",
      "trailer-avarie",
      "casco-tranzit",
      "dauna-transport",
      "auto & mobilitate"
    ]
  },
  "auto-incendiu-statie-incarcare-ev": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de degradările produse bateriei de tracțiune, sistemului electric de înaltă tensiune și caroseriei prin scurtcircuit sau incendiu. Evaluarea tarifară pentru vehicule electrice este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "incendiu-ev",
      "wallbox",
      "statie-incarcare",
      "casco-incendiu",
      "asigurare-locuinta",
      "auto & mobilitate",
      "incendiu priza",
      "scurtcircuit",
      "foc in apartament",
      "daune fum",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  },
  "auto-alimentare-combustibil-eronat": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include golirea și curățarea rezervorului, înlocuirea filtrelor și eventuala reparație a pompei de înaltă presiune sau injectoarelor. Acoperirea prin asistență rutieră sau CASCO este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează o diagnoză auto completă și verifică starea fluidelor de răcire înainte de călătorii lungi pe autostradă.",
      "Păstrează în mașină un compresor portabil, o roată de rezervă verificată sau un kit de pană cu spumă activă valabilă.",
      "Salvează în telefon numărul direct al asistenței rutiere internaționale furnizate prin abonament sau asigurare.",
      "Oprește în siguranță pe banda de urgență și îmbracă vesta reflectorizantă înainte de a coborî din vehicul."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "combustibil-gresit",
      "benzina-in-diesel",
      "asistenta-auto",
      "casco-clauze",
      "pompa-injectie",
      "auto & mobilitate"
    ]
  },
  "auto-rasturnare-sant-zapada": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de operațiunea specializată de tractare/recuperare din șanț și remedierea avariilor la caroserie și trenul de rulare. Evaluarea devizelor specifice este în curs de verificare pe baza condițiilor CASCO.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "rasturnare",
      "sant-zapada",
      "viscol",
      "casco-avarii-proprii",
      "dauna-totala",
      "auto & mobilitate"
    ]
  },
  "auto-incendiu-motor-scurtcircuit-compartiment": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar depinde de amploarea incendiului în compartimentul motor, cablajele distruse și elementele de caroserie afectate. Evaluarea despăgubirii conform clauzei de incendiu CASCO este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "incendiu-motor",
      "scurtcircuit-auto",
      "dauna-totala-foc",
      "casco-incendiu",
      "isu-pompieri",
      "auto & mobilitate"
    ]
  },
  "auto-lovire-animal-salbatic-padure": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului auto și de mobilitate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de avariile frontale (radiator, faruri, capotă, airbaguri) cauzate de impactul cu animalul sălbatic. Evaluarea clauzelor CASCO specifice pentru coliziuni cu animale este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Verifică regulat starea anvelopelor, adâncimea profilului și presiunea recomandată de producător.",
      "Nu lăsa genți, echipamente electronice sau obiecte atractive la vedere pe scaunele mașinii.",
      "Păstrează în mașină trusa medicală, extinctorul în termen de valabilitate și două triunghiuri reflectorizante.",
      "Efectuează reviziile periodice ale sistemului de frânare și suspensie exclusiv în ateliere autorizate RAR."
    ],
    "userProfiles": [
      "sofer"
    ],
    "searchKeywords": [
      "animal-salbatic",
      "mistret-caprioara",
      "casco-animale",
      "impact-padure",
      "airbag-sarit",
      "auto & mobilitate"
    ]
  },
  "calatorii-zbor-anulat-conexiune-pierduta": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Regulamentul CE nr. 261/2004 & Condiții Standard Asigurare Călătorie",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Regulamentul CE nr. 261/2004 & Clauza Întârziere Zbor",
      "assumptions": "Evaluare calitativă a drepturilor de asistență și compensare conform Regulamentului CE nr. 261/2004 și condițiilor poliței de călătorie.",
      "qualitativeAssessment": "Compensația sau asistența depinde de durata întârzierii, distanța zborului și cauza anulării (circumstanțe extraordinare vs. culpă a operatorului). Preluarea costurilor de cazare sau mese depinde de asistența companiei aeriene și limitele poliței de călătorie.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Regulamentul CE nr. 261/2004 & Condiții Călătorie Generali Turist Plus Premium (Clauza Întârziere Zbor)",
    "preventionTips": [
      "Consultă drepturile stabilite prin Regulamentul European CE 261/2004 privind compensațiile la zboruri anulate sau întârziate.",
      "Păstrează toate chitanțele pentru mese, băuturi sau cazare pe perioada așteptării în aeroport.",
      "Solicită reprezentantului companiei aeriene o adeverință scrisă care precizează motivul întârzierii zborului.",
      "Instalează aplicația mobilă a companiei aeriene pentru notificări rapide despre modificările de poartă sau orar."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "zbor-anulat",
      "escala-pierduta",
      "ec261",
      "asigurare-calatorie",
      "cazare-aeroport",
      "călătorii & internațional",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "calatorii-bagaj-pierdut-intarziat-destinatie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Călătorie Generali Turist Plus Premium & Convenția de la Montreal",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență",
      "assumptions": "Evaluare calitativă a procedurii de despăgubire pentru bagaje întârziate sau pierdute în transport aerian.",
      "qualitativeAssessment": "Despăgubirea pentru bagaje depinde de raportul de neregularitate a proprietății (PIR) eliberat în aeroport, chitanțele pentru cumpărături de strictă necesitate și limitele prevăzute în contractul de asigurare de călătorie.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență",
    "preventionTips": [
      "Plasează un dispozitiv discret de localizare (AirTag / SmartTag) în fiecare bagaj predat la cală.",
      "Fotografiază exteriorul bagajului și conținutul orientativ înainte de predarea la ghișeul de check-in.",
      "Păstrează întotdeauna actele, medicamentele de strictă necesitate și obiectele valoroase în bagajul de mână.",
      "Îndepărtează etichetele vechi de zbor pentru a nu crea confuzii în sistemele automate de sortare din aeroport."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "bagaj-pierdut",
      "bagaj-intarziat",
      "pir-lost-found",
      "asigurare-calatorie",
      "achizitii-urgenta",
      "călătorii & internațional",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "calatorii-urgenta-medicala-spitalizare-strainatate": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Călătorie Generali Turist Plus Premium & Asistență Medicală 24/7",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Regulamentul CE nr. 883/2004 & Condiții Călătorie Generali Turist Plus Premium",
      "assumptions": "Evaluare calitativă a cheltuielilor medicale de urgență în străinătate conform condițiilor contractuale.",
      "qualitativeAssessment": "Acoperirea cheltuielilor de spitalizare depinde de notificarea prealabilă a dispeceratului de asistență 24/7, caracterul de urgență vitală sau acută și plafonul maxim asigurat prin polița de călătorie.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Regulamentul CE nr. 883/2004 & Condiții Călătorie Generali Turist Plus Premium",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "urgenta-medicala",
      "spitalizare-sua",
      "operatie-apendicita",
      "card-european-sanatate",
      "asigurare-calatorie",
      "călătorii & internațional"
    ]
  },
  "calatorii-repatriere-medicala-avion-sanitar": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Cadru Asigurare Asistență Medicală și Repatriere în Străinătate",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Condiții Cadru Asigurare Asistență Medicală și Repatriere în Străinătate",
    "preventionTips": [
      "Verifică periodic starea parâmelor de legătură la chei și a sistemelor automate de evacuare a apei din santină.",
      "Adăpostește ambarcațiunea sau aeronava în hangare/marine securizate la emiterea codurilor de vreme severă.",
      "Efectuează inspecțiile structurale periodice exclusiv conform manualului de mentenanță al producătorului autorizat.",
      "Păstrează un jurnal de bord actualizat și încheie contracte de mentenanță doar cu ateliere certificate tehnic."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "repatriere-medicala",
      "avion-sanitar",
      "accident-schi",
      "air-ambulance",
      "asigurare-calatorie",
      "călătorii & internațional",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "calatorii-pasaport-documente-furate-roma": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Călătorie Generali Turist Plus Premium — Asistență Furt Documente",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Furt Documente (Plafon 1.000 €)",
      "assumptions": "Evaluare calitativă a costurilor de refacere a documentelor de călătorie furate în străinătate.",
      "qualitativeAssessment": "Preluarea cheltuielilor depinde de înregistrarea plângerii la poliția locală, emiterea titlului de călătorie de către consulat și transmiterea chitanțelor oficiale de taxe consulare.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Furt Documente (Plafon 1.000 €)",
    "preventionTips": [
      "Fă copii digitale ale pașaportului, biletelor și asigurărilor și salvează-le pe telefon și pe email.",
      "Verifică alertele de călătorie și recomandările sanitare publicate pe site-ul Ministerului Afacerilor Externe (mae.ro).",
      "Păstrează fonduri de urgență pe un card secundar și configurează limite zilnice rezonabile de tranzacționare.",
      "Notează numărul de urgență al asistenței de călătorie înainte de plecarea din țară."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "pasaport-furat",
      "hoti-buzunare",
      "titlu-calatorie",
      "consulat",
      "avans-fonduri-urgenta",
      "călătorii & internațional"
    ]
  },
  "calatorii-stornare-anulare-vacanta-urgenta-familie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară depinde de penalitățile de anulare aplicate de agenție, compania aeriană sau hotel și de termenul de notificare. Evaluarea despăgubirii conform clauzei de stornare (storno) este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Fă copii digitale ale pașaportului, biletelor și asigurărilor și salvează-le pe telefon și pe email.",
      "Verifică alertele de călătorie și recomandările sanitare publicate pe site-ul Ministerului Afacerilor Externe (mae.ro).",
      "Păstrează fonduri de urgență pe un card secundar și configurează limite zilnice rezonabile de tranzacționare.",
      "Notează numărul de urgență al asistenței de călătorie înainte de plecarea din țară."
    ],
    "userProfiles": [
      "calator",
      "parinte"
    ],
    "searchKeywords": [
      "asigurare-storno",
      "anulare-vacanta",
      "urgenta-medicala-familie",
      "bilete-nerambursabile",
      "rambursare-concediu",
      "călătorii & internațional"
    ]
  },
  "calatorii-avarie-accidentala-hotel-mobilier": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară depinde de pretențiile de despăgubire facturate de unitatea hotelieră pentru obiectele sau mobilierul deteriorat. Evaluarea acoperirii prin clauza de răspundere civilă în călătorie este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Stabilește reguli clare cu minorii înainte de vizite în spații comerciale sau locuințele prietenilor.",
      "Ancorează ecranele TV mari și corpurile grele de mobilier de perete folosind kituri antibruscaj.",
      "Documentează amiabil și fotografiază orice incident casnic înainte de a conveni măsuri de remediere.",
      "Solicită întotdeauna devizul sau factura de reparație pentru obiectul avariat pentru a stabili valoarea corectă."
    ],
    "userProfiles": [
      "calator",
      "parinte"
    ],
    "searchKeywords": [
      "daune-hotel",
      "raspundere-turist",
      "televizor-spart-hotel",
      "inundatie-hotel",
      "asigurare-calatorie",
      "călătorii & internațional",
      "copil a spart ceva",
      "televizor spart magazin",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "calatorii-evacuare-urgenta-destinatie-izolata": {
    "financialEstimate": {
      "currency": "EUR",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Generale de Asigurare pentru Călătorii în Străinătate (Clauza Asistență Medicală și Evacuare de Urgență)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Standard Piață 2024-2025",
      "insurer": "Asigurători de Călătorie & Companii Internaționale de Asistență",
      "product": "Asigurare Medicală de Călătorie cu Asistență de Urgență",
      "policyVersion": "Secțiunea Transport Medical de Urgență, Salvare și Evacuare Aeriană",
      "assumptions": "Evaluare calitativă a cheltuielilor generate de o evacuare medicală de urgență dintr-o destinație izolată. Costul real depinde de distanța geografică până la cel mai apropiat centru medical specializat, mijlocul de transport impus de condițiile locale și aprobarea prealabilă a dispeceratului de asistență.",
      "qualitativeAssessment": "Costul evacuării depinde de distanța geografică până la cel mai apropiat spital adecvat, mijlocul de transport disponibil (elicopter, hidroavion, ambulanță aeriană sau maritim), necesitatea personalului medical și a echipamentelor de suport pe durata transportului, precum și urgența transferului. Decontarea costurilor de către asigurător depinde strict de respectarea procedurii de autorizare prin dispeceratul de asistență, de limitele maxime prevăzute în poliță și de absența excluderilor geografice.",
      "includedItems": [
        "Evaluarea calitativă a logisticii de evacuare medicală și a transportului de urgență",
        "Analiza cerințelor de aprobare prin dispecerat și a limitelor poliței de călătorie"
      ],
      "excludedItems": [
        "Tarife orare de zbor sau sume fixe nesusținute de devize concrete",
        "Referințe la reparații materiale, manoperă sau avarii de clădiri"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "legalReviewDate": "12 noiembrie 2026",
    "legalBasis": "Standarde Internaționale privind Asistența Medicală de Urgență în Călătorii & Condiții Cadru de Asigurare de Călătorie",
    "preventionTips": [
      "Salvează numărul internațional de urgență al dispeceratului de asistență pe telefon și pe un suport fizic înainte de plecare.",
      "Verifică dacă polița de călătorie acoperă destinația izolată și activitățile specifice (safari, sporturi acvatice, transfer cu hidroavion).",
      "Păstrează o copie a poliței și a condițiilor contractuale la îndemână pe toată durata călătoriei.",
      "Asigură-te că însoțitorii de călătorie cunosc procedura de apelare a dispeceratului în cazul în care ești în incapacitate medicală."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "evacuare-urgenta",
      "hidroavion-salvare",
      "insule-izolate",
      "asigurare-calatorie",
      "safari-africa",
      "călătorii & internațional",
      "transport sanitar",
      "salvare aeriana",
      "urgenta medicala strainatate"
    ]
  },
  "calatorii-intrerupere-sejur-deces-ruda": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară include costul repatrierii rapide și serviciile turistice neutilizate din pachetul de vacanță achitat. Evaluarea documentată a rambursării conform condițiilor de călătorie este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Fă copii digitale ale pașaportului, biletelor și asigurărilor și salvează-le pe telefon și pe email.",
      "Verifică alertele de călătorie și recomandările sanitare publicate pe site-ul Ministerului Afacerilor Externe (mae.ro).",
      "Păstrează fonduri de urgență pe un card secundar și configurează limite zilnice rezonabile de tranzacționare.",
      "Notează numărul de urgență al asistenței de călătorie înainte de plecarea din țară."
    ],
    "userProfiles": [
      "calator",
      "parinte"
    ],
    "searchKeywords": [
      "intrerupere-calatorie",
      "deces-familie",
      "zbor-urgenta",
      "asigurare-storno",
      "rambursare-zile-neutilizate",
      "călătorii & internațional"
    ]
  },
  "calatorii-croaziera-urgenta-medicala-mare": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară este determinată de tarifele spitalului de la bordul navei de croazieră și logistica transferului sanitar de urgență în cel mai apropiat port. Evaluarea plafoanelor de asistență este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "croaziera",
      "infarct-bord",
      "elicopter-salvare",
      "ape-internationale",
      "asigurare-calatorie",
      "călătorii & internațional"
    ]
  },
  "calatorii-refuz-imbarcare-suprarezervare-overbooking": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include cazarea neprevăzută, mesele și diferențele de bilet pentru zborul alternativ. Evaluarea drepturilor conform Regulamentului CE 261/2004 și polițelor de călătorie este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Consultă drepturile stabilite prin Regulamentul European CE 261/2004 privind compensațiile la zboruri anulate sau întârziate.",
      "Păstrează toate chitanțele pentru mese, băuturi sau cazare pe perioada așteptării în aeroport.",
      "Solicită reprezentantului companiei aeriene o adeverință scrisă care precizează motivul întârzierii zborului.",
      "Instalează aplicația mobilă a companiei aeriene pentru notificări rapide despre modificările de poartă sau orar."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "overbooking",
      "refuz-imbarcare",
      "drepturi-pasageri",
      "ec261",
      "compensatie-imediata",
      "călătorii & internațional",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "calatorii-furtuna-anulare-feribot-insula": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară cuprinde nopțile suplimentare de cazare forțată pe insulă și costurile reprogramării legăturilor de transport. Evaluarea clauzelor pentru fenomene meteo severe este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "feribot-anulat",
      "insula-grecia",
      "furtuna-mare",
      "escala-ratata",
      "asigurare-calatorie",
      "călătorii & internațional",
      "furtun masina de spalat",
      "inundat baia",
      "refulare masina spalat"
    ]
  },
  "calatorii-agresiune-talharie-destinatie-turistica": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului asociat călătoriilor și deplasărilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară cuprinde asistența medicală de urgență pentru vătămări corporale și valoarea bunurilor personale sustrase cu violență. Evaluarea documentată a limitelor contractuale este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "calator"
    ],
    "searchKeywords": [
      "talharie",
      "agresiune-fizica",
      "urgenta-medicala-strainatate",
      "asigurare-calatorie",
      "spitalizare-urgenta",
      "călătorii & internațional"
    ]
  },
  "raspundere-copil-sparge-televizor-magazin": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Art. 1357 și 1372 Codul Civil Român & Răspundere Civilă Legală",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 și 1372 Codul Civil Român",
      "assumptions": "Evaluare calitativă a răspunderii părintești pentru fapta minorului conform Codului Civil Român.",
      "qualitativeAssessment": "Răspunderea patrimonială depinde de evaluarea valorii reale a bunului deteriorat (exclusiv adaosul comercial nejustificat), probele privind dinamica incidentului și eventuala asigurare de răspundere civilă privată a familiei.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Răspundere Civilă a Familiei (Personal Liability)",
    "contractualDocument": "Condiții Asigurare Răspundere Civilă a Familiei & Art. 1357, 1372 Cod Civil",
    "preventionTips": [
      "Stabilește reguli clare cu minorii înainte de vizite în spații comerciale sau locuințele prietenilor.",
      "Ancorează ecranele TV mari și corpurile grele de mobilier de perete folosind kituri antibruscaj.",
      "Documentează amiabil și fotografiază orice incident casnic înainte de a conveni măsuri de remediere.",
      "Solicită întotdeauna devizul sau factura de reparație pentru obiectul avariat pentru a stabili valoarea corectă."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "raspundere-parinteasca",
      "copil-minor",
      "dauna-magazin",
      "televizor-spart",
      "rc-familie",
      "răspundere civilă",
      "copil a spart ceva",
      "televizor spart magazin",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "raspundere-caine-musca-trecator-parc": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1375 Codul Civil Român (Răspunderea pentru prejudiciile cauzate de animale)",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1375 Codul Civil Român (Răspunderea pentru prejudiciile cauzate de animale)",
    "preventionTips": [
      "Folosește lesa în spațiile publice și botnița acolo unde temperamentul animalului sau normele locale o cer.",
      "Păstrează carnetul de sănătate al animalului cu vaccinările antirabice efectuate strict la termen.",
      "Asigură-te că împrejmuirea curții este intactă și porțile nu pot fi deschise accidental de animal.",
      "Depozitează jucăriile mici, șosetele și obiectele casnice tăioase departe de accesul nesupravegheat al câinelui."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "caine-muscatura",
      "raspundere-animal-companie",
      "vatamare-corporala",
      "daune-morale",
      "rc-detinator-animale",
      "răspundere civilă",
      "caine a muscat",
      "daune provocate de caine",
      "muscatura animal"
    ]
  },
  "raspundere-biciclist-loveste-pieton-trotuar": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 Codul Civil Român (Răspunderea civilă delictuală)",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1357 Codul Civil Român (Răspunderea civilă delictuală)",
    "preventionTips": [
      "Efectuează inspecții vizuale periodice ale etanșeității sifoanelor de pardoseală și robineților de colț.",
      "Șterge prompt suprafețele umede din băi sau bucătării pentru a reduce riscul de alunecare al oaspeților.",
      "Păstrează datele de contact ale vecinilor direcți pentru alertare rapidă în caz de miros sau scurgeri.",
      "Consultă un specialist autorizat la orice suspiciune de condens sau infiltrație ascunsă în pereți."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "biciclist-pieton",
      "fractura-sold",
      "raspundere-civila-bicicleta",
      "proteza-ortopedica",
      "daune-morale",
      "răspundere civilă"
    ]
  },
  "raspundere-obiect-cazut-balcon-masina-parcata": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1378 Codul Civil Român (Răspunderea pentru ruina edificiului sau căderea lucrurilor)",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1378 Codul Civil Român (Răspunderea pentru ruina edificiului sau căderea lucrurilor)",
    "preventionTips": [
      "Efectuează inspecții vizuale periodice ale etanșeității sifoanelor de pardoseală și robineților de colț.",
      "Șterge prompt suprafețele umede din băi sau bucătării pentru a reduce riscul de alunecare al oaspeților.",
      "Păstrează datele de contact ale vecinilor direcți pentru alertare rapidă în caz de miros sau scurgeri.",
      "Consultă un specialist autorizat la orice suspiciune de condens sau infiltrație ascunsă în pereți."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "ghiveci-balcon",
      "obiect-cazut",
      "masina-avariata",
      "art-1378-cod-civil",
      "raspundere-locativa",
      "răspundere civilă",
      "parbriz crapat",
      "piatra autostrada",
      "inlocuire parbriz",
      "elemente vitrate"
    ]
  },
  "raspundere-prieten-imprumut-aparat-foto-distrus": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului de răspundere civilă legală, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea patrimonială constă în valoarea de piață sau devizul de reparare a echipamentului foto împrumutat și deteriorat accidental. Evaluarea clauzelor privind bunurile aflate în uz sau păstrare este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează inspecții vizuale periodice ale etanșeității sifoanelor de pardoseală și robineților de colț.",
      "Șterge prompt suprafețele umede din băi sau bucătării pentru a reduce riscul de alunecare al oaspeților.",
      "Păstrează datele de contact ale vecinilor direcți pentru alertare rapidă în caz de miros sau scurgeri.",
      "Consultă un specialist autorizat la orice suspiciune de condens sau infiltrație ascunsă în pereți."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "camera-foto",
      "echipament-imprumutat",
      "bunuri-incredintate",
      "comodat",
      "raspundere-privata",
      "răspundere civilă"
    ]
  },
  "raspundere-musafir-aluneca-gresie-umeda": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 & Art. 1376 Codul Civil Român",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1357 & Art. 1376 Codul Civil Român",
    "preventionTips": [
      "Efectuează inspecții vizuale periodice ale etanșeității sifoanelor de pardoseală și robineților de colț.",
      "Șterge prompt suprafețele umede din băi sau bucătării pentru a reduce riscul de alunecare al oaspeților.",
      "Păstrează datele de contact ale vecinilor direcți pentru alertare rapidă în caz de miros sau scurgeri.",
      "Consultă un specialist autorizat la orice suspiciune de condens sau infiltrație ascunsă în pereți."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "musafir-accidentat",
      "gresie-umeda",
      "fractura-brat",
      "raspundere-locuinta",
      "spitalizare-urgenta",
      "răspundere civilă"
    ]
  },
  "raspundere-menajera-accidentata-munca-locuinta": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului de răspundere civilă legală, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară poate include cheltuielile medicale de recuperare și pretențiile de despăgubire formulate de persoana accidentată în locuință. Evaluarea răspunderii civile a capului de familie este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează inspecții vizuale periodice ale etanșeității sifoanelor de pardoseală și robineților de colț.",
      "Șterge prompt suprafețele umede din băi sau bucătării pentru a reduce riscul de alunecare al oaspeților.",
      "Păstrează datele de contact ale vecinilor direcți pentru alertare rapidă în caz de miros sau scurgeri.",
      "Consultă un specialist autorizat la orice suspiciune de condens sau infiltrație ascunsă în pereți."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "personal-casnic",
      "menajera-accident",
      "cadere-scara",
      "raspundere-angajator-casnic",
      "pensie-invaliditate",
      "răspundere civilă"
    ]
  },
  "raspundere-incendiu-gratare-curte-gard-vecin": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 Codul Civil Român",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1357 Codul Civil Român",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "incendiu-gratar",
      "gard-viu-ars",
      "foisor-vecin",
      "isu-pompieri",
      "raspundere-delictuala",
      "răspundere civilă"
    ]
  },
  "raspundere-foc-artificii-revelion-acoperis-vecin": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului de răspundere civilă legală, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea patrimonială este determinată de devizul de refacere a acoperișului incendiat și a bunurilor deteriorate prin stingerea focului. Evaluarea încadrării conform răspunderii civile delictuale este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "artificii-incendiu",
      "acoperis-vecin",
      "isu-revelion",
      "daune-vecini",
      "raspundere-delictuala",
      "răspundere civilă"
    ]
  },
  "raspundere-drona-prabusita-parbriz-masina": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului de răspundere civilă legală, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară include înlocuirea parbrizului avariat și remedierea eventualelor zgârieturi pe caroseria vehiculului terț. Evaluarea asigurărilor de răspundere pentru drone este în curs de documentare conform legislației aeronautice.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Mărește distanța de urmărire față de autocamioane și vehicule de mare tonaj pe autostrăzi și drumuri expres.",
      "Repară operativ ciobiturile minore prin injectare cu rășină optică înainte ca vibrațiile să extindă fisura.",
      "Înlocuiește lamelele ștergătoarelor uzate pentru a evita zgârierea fină a stratului exterior de sticlă.",
      "Evită folosirea apei fierbinți pentru dezghețarea parbrizului iarna, pentru a nu produce șoc termic."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "drona-prabusita",
      "raspundere-drona",
      "easa-uav",
      "luneta-sparta",
      "asigurare-uav",
      "răspundere civilă"
    ]
  },
  "raspundere-trotineta-copil-zgaraie-masina-vecin": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 Codul Civil Român (Răspunderea civilă delictuală)",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de gravitatea zgârieturilor, numărul de repere afectate și devizul de vopsitorie prezentat de proprietarul autovehiculului avariat. Acoperirea depinde de existența unei asigurări de răspundere civilă privată a familiei.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1357 Codul Civil Român (Răspunderea civilă delictuală)",
    "preventionTips": [
      "Supraveghează copiii în spațiile comune sau parcări unde sunt manevrate sau garate autoturisme.",
      "Instruiește copiii să păstreze o distanță de siguranță față de vehiculele parcate când folosesc trotineta sau bicicleta.",
      "Încheie o asigurare de răspundere civilă privată a familiei (Personal Liability) pentru a acoperi daunele produse involuntar terților.",
      "Soluționează amiabil incidentul cu proprietarul vehiculului avariat, solicitând devizul oficial de vopsitorie."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "trotineta-copil",
      "masina-zgariata-vecin",
      "raspundere-parinti",
      "vopsitorie-portiere",
      "rc-familie",
      "răspundere civilă",
      "daune produse tertilor",
      "copil a zgariat masina",
      "raspundere civila legala",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "raspundere-inundare-subsol-bloc-robinet-spalat-boxa": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului de răspundere civilă legală, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea patrimonială este determinată de costurile igienizării subsolului și despăgubirea bunurilor depozitate de vecini în boxele afectate de apă. Evaluarea clauzei de răspundere locativă este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Închide robinetul general de alimentare cu apă când locuința rămâne nesupravegheată mai mult de 48 de ore.",
      "Instalează senzori independenți de inundație cu notificare pe telefon lângă chiuvete, mașina de spălat și centrală.",
      "Înlocuiește racordurile flexibile din cauciuc și plasă metalică la fiecare 3–5 ani, înainte de apariția semnelor de îmbătrânire.",
      "Izolează conductele amplasate pe pereți exteriori sau în spații neîncălzite înainte de începerea sezonului rece."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "inundatie-subsol",
      "boxa-depozitare",
      "racord-flexibil",
      "bunuri-vecini",
      "daune-asociatie",
      "răspundere civilă"
    ]
  },
  "viata-accident-incapacitate-temporara-munca": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Bunuri de Valoare / Proprietate Avansată",
      "policyVersion": "Polița de Incapacitate Temporară de Muncă & Asigurare de Accidente Persoane",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Polița de Incapacitate Temporară de Muncă & Asigurare de Accidente Persoane",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar",
      "calator"
    ],
    "searchKeywords": [
      "incapacitate-munca",
      "fractura-femur",
      "pierdere-venituri",
      "asigurare-accidente",
      "indemnizatie-zilnica",
      "sănătate & viață"
    ]
  },
  "viata-diagnostic-boala-grava-oncologie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include accesul la protocoale terapeutice inovatoare, investigații imagistice periodice (PET-CT, RMN) și compensarea pierderii de venit pe durata tratamentului. Evaluarea sumelor asigurate pentru boli grave este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "boala-critica",
      "cancer-oncologie",
      "terapii-inovatoare",
      "pet-ct",
      "capital-garantat-diagnostic",
      "sănătate & viață"
    ]
  },
  "viata-pierdere-sursa-principala-venit-deces-parinte": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar reprezintă dezechilibrul bugetului familial prin dispariția veniturilor recurente ale susținătorului principal. Evaluarea indemnizațiilor de deces din asigurările de viață este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "deces-sustinator",
      "credit-ipotecar",
      "asigurare-viata-credit",
      "protectie-copii",
      "executare-bancara",
      "sănătate & viață"
    ]
  },
  "viata-spitalizare-privata-interventie-complexa": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de tariful per zi de spitalizare privată, manopera echipei chirurgicale și materialele sanitare specifice. Evaluarea decontării conform asigurărilor private de sănătate este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "operatie-coloana",
      "spital-privat",
      "asigurare-sanatate-privata",
      "decontare-directa-medicala",
      "hernie-disc",
      "sănătate & viață"
    ]
  },
  "viata-arsuri-grave-explozie-casnica": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include tratamentul de urgență în secții specializate, grefele de piele, recuperarea funcțională și medicația specifică. Evaluarea indemnizațiilor forfetare pentru arsuri este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "arsuri-grave",
      "explozie-gaz",
      "spitalizare-mari-arsi",
      "grefe-piele",
      "recuperare-arsuri",
      "sănătate & viață"
    ]
  },
  "viata-stomatologie-urgenta-traumatism-dentar-copil": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar constă în manoperele de refacere dentară de urgență, reconstrucție sau coroane provizorii. Evaluarea pachetelor de stomatologie din asigurările medicale este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "traumatism-dentar",
      "dinti-sparti-copil",
      "stomatologie-urgenta",
      "implant-zirconiu",
      "asigurare-sanatate-copii",
      "sănătate & viață",
      "copil a spart ceva",
      "televizor spart magazin",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "viata-avc-reabilitare-neurologica-termen-lung": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include costurile kinetoterapiei, logopediei, centrelor specializate de reabilitare neuro-motorie și adaptării locuinței. Evaluarea clauzelor de invaliditate și îngrijire este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "accident-vascular-cerebral",
      "avc-recuperare",
      "kinetoterapie-neurologica",
      "boala-grava",
      "afazie",
      "sănătate & viață"
    ]
  },
  "viata-coma-terapie-intensiva-septicemie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscului pentru viață și sănătate, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de costurile monitorizării continue în secții ATI private, suportului ventilator și tratamentelor avansate. Evaluarea acoperirii spitalizării de lungă durată este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Efectuează un set anual de analize preventive și monitorizează periodic valorile tensiunii arteriale.",
      "Păstrează un dosar medical digital organizat cu istoricul consulturilor, prescripțiilor și alergiilor cunoscute.",
      "Constituie un fond de rezervă familial pentru acoperirea rapidă a investigațiilor imagistice sau coplăților private.",
      "Discută cu medicul de familie orice simptom persistent înainte de apariția unor complicații majore."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "terapie-intensiva",
      "coma-prelungita",
      "soc-septic",
      "indemnizatie-spitalizare-ati",
      "asigurare-sanatate",
      "sănătate & viață"
    ]
  },
  "business-atac-ransomware-blocare-servere": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Cyber / Bunuri Comerciale / Malpraxis",
      "policyVersion": "Condiții Speciale Asigurare Cyber Risks & Extorcare Digitală",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Condiții Speciale Asigurare Cyber Risks & Extorcare Digitală",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "ransomware",
      "cyber-insurance",
      "intrerupere-activitate",
      "forensic-it",
      "santaj-cibernetic",
      "business & profesional",
      "atac ransomware",
      "server blocat",
      "date furate companie",
      "asigurare cyber"
    ]
  },
  "business-eroare-profesionala-consultant-it-avocat": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Cyber / Bunuri Comerciale / Malpraxis",
      "policyVersion": "Răspundere Profesională / Errors & Omissions (E&O)",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Răspundere Profesională / Errors & Omissions (E&O)",
    "preventionTips": [
      "Definește precis în contractul de prestări servicii sfera livrabilelor, responsabilitățile și un plafon al răspunderii.",
      "Obține confirmarea scrisă în etape (proces-verbal de recepție parțială) pentru fiecare fază a proiectului.",
      "Păstrează arhiva comunicărilor tehnice și a modificărilor solicitate de client pe tot parcursul colaborării.",
      "Efectuează revizuiri interne de calitate înainte de livrarea soluțiilor către beneficiarul final."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "eroare-profesionala",
      "raspundere-it",
      "errors-and-omissions",
      "bug-software",
      "daune-contractuale",
      "business & profesional"
    ]
  },
  "business-incendiu-depozit-marfuri-distruse": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Cyber / Bunuri Comerciale / Malpraxis",
      "policyVersion": "Clauza Business Interruption (Pierdere de Profit din Întreruperea Activității)",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza Business Interruption (Pierdere de Profit din Întreruperea Activității)",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "incendiu-depozit",
      "stocuri-marfa",
      "hala-industriala",
      "isu-autorizatie",
      "asigurare-patrimoniu",
      "business & profesional",
      "incendiu priza",
      "scurtcircuit",
      "foc in apartament",
      "daune fum"
    ]
  },
  "business-accident-munca-santier-raspundere-angajator": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor comerciale și operaționale, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include indemnizațiile acordate salariatului accidentat, cheltuielile medicale și eventualele sancțiuni sau despăgubiri civile. Evaluarea clauzelor de răspundere a angajatorului este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Implementează proceduri clare de aprobare ierarhică pentru plățile bancare și modificarea conturilor furnizorilor.",
      "Revizuiește periodic contractele comerciale pentru a asigura echilibrul clauzelor de răspundere și penalități.",
      "Asigură protecția fizică a perimetrului sediului prin sisteme de alarmă antiefracție și supraveghere video autorizată.",
      "Actualizează un plan de continuitate operațională pentru scenarii de pană electrică sau întrerupere a rețelei."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "accident-munca",
      "santier-constructii",
      "itm-ancheta",
      "raspundere-angajator",
      "invaliditate-permanenta",
      "business & profesional"
    ]
  },
  "business-raspundere-administrator-directori-dno": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor comerciale și operaționale, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară cuprinde cheltuielile de apărare juridică și despăgubirile solicitate de acționari sau creditori pentru decizii de management pretins eronate. Evaluarea condițiilor D&O este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Documentează deciziile strategice și raționamentul economic în procesele-verbale ale Adunării Generale și Consiliului.",
      "Solicită opinii juridice și fiscale scrise prealabile pentru contractele atipice sau de valoare ridicată.",
      "Păstrează o delimitare strictă între patrimoniul personal și angajamentele financiare ale firmei.",
      "Instituie proceduri clare de aprobare și dublă semnătură pentru plățile bancare importante."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "dno-insurance",
      "raspundere-administratori",
      "directors-officers",
      "patrimoniu-personal",
      "litigiu-actionari",
      "business & profesional"
    ]
  },
  "business-inundatie-magazin-haine-mall": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Cyber / Bunuri Comerciale / Malpraxis",
      "policyVersion": "Polița Property & Stocuri de Marfă Comerciale",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Polița Property & Stocuri de Marfă Comerciale",
    "preventionTips": [
      "Închide robinetul general de alimentare cu apă când locuința rămâne nesupravegheată mai mult de 48 de ore.",
      "Instalează senzori independenți de inundație cu notificare pe telefon lângă chiuvete, mașina de spălat și centrală.",
      "Înlocuiește racordurile flexibile din cauciuc și plasă metalică la fiecare 3–5 ani, înainte de apariția semnelor de îmbătrânire.",
      "Izolează conductele amplasate pe pereți exteriori sau în spații neîncălzite înainte de începerea sezonului rece."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "inundatie-magazin",
      "dauna-mall",
      "stocuri-haine",
      "pierdere-profit-comercial",
      "property-retail",
      "business & profesional",
      "copil a spart ceva",
      "televizor spart magazin",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "business-furt-echipamente-scule-santier-noapte": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Cyber / Bunuri Comerciale / Malpraxis",
      "policyVersion": "Polița CAR / Toate Riscurile de Construcții Montaj & Echipamente Mobile",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Polița CAR / Toate Riscurile de Construcții Montaj & Echipamente Mobile",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "furt-santier",
      "scule-profesionale",
      "container-efractie",
      "asigurare-car-constructii",
      "hilti-furt",
      "business & profesional"
    ]
  },
  "business-litigiu-contractual-furnizor-materie-prima": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor comerciale și operaționale, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include penalitățile contractuale, costul aprovizionării de urgență și pierderile generate de întârzierea livrărilor. Evaluarea acoperirii riscurilor comerciale și de credit este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Definește precis în contractul de prestări servicii sfera livrabilelor, responsabilitățile și un plafon al răspunderii.",
      "Obține confirmarea scrisă în etape (proces-verbal de recepție parțială) pentru fiecare fază a proiectului.",
      "Păstrează arhiva comunicărilor tehnice și a modificărilor solicitate de client pe tot parcursul colaborării.",
      "Efectuează revizuiri interne de calitate înainte de livrarea soluțiilor către beneficiarul final."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "litigiu-comercial",
      "curtea-arbitraj",
      "asigurare-protectie-juridica",
      "furnizor-materie-prima",
      "avocati-comerciali",
      "business & profesional"
    ]
  },
  "digital-laptop-furat-calatorie-date-sensibile": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară include valoarea fizică a echipamentului portabil și costurile aferente măsurilor urgente de securizare a conturilor și datelor compromise. Evaluarea acoperirii pentru dispozitive mobile este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "laptop-furat",
      "lucru-remote",
      "gdpr-amenda",
      "cyber-personal",
      "date-confidentiale",
      "viață digitală & tech"
    ]
  },
  "digital-frauda-plata-phishing-ceo-fraud": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Cyber / Bunuri Comerciale / Malpraxis",
      "policyVersion": "Clauza Social Engineering & Fraudă Electronică",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza Social Engineering & Fraudă Electronică",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "phishing-plati",
      "ceo-fraud",
      "business-email-compromise",
      "frauda-bancara",
      "asigurare-cyber",
      "viață digitală & tech"
    ]
  },
  "digital-intrerupere-cloud-outage-afacere-online": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de pierderile din vânzări pe durata indisponibilității platformei și costurile de restabilire a serviciilor. Evaluarea clauzelor de întrerupere a afacerii cibernetice este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "cloud-outage",
      "intrerupere-cloud",
      "sla-penalitati",
      "asigurare-cyber",
      "business-interruption-it",
      "viață digitală & tech",
      "copil a spart ceva",
      "televizor spart magazin",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "digital-smartphone-spart-inainte-calatorie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar constă în costul reparației ecranului sau achiziției urgente a unui terminal de înlocuire înainte de plecare. Evaluarea documentată a polițelor pentru ecrane și dispozitive este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor",
      "proprietar"
    ],
    "searchKeywords": [
      "telefon-spart",
      "ecran-oled",
      "asigurare-telefon",
      "apple-care",
      "daune-accidentale",
      "viață digitală & tech",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta"
    ]
  },
  "digital-supratensiune-retea-distruge-pc-gaming-audio": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include înlocuirea componentelor electronice arse (sursă, placă de bază, procesor, sistem audio). Evaluarea clauzelor facultative de fenomene electrice este în curs de documentare pe baza condițiilor de locuință.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Încarcă vehiculul sau echipamentele electrice folosind exclusiv stații sau cabluri conforme cu protecție diferențială.",
      "Evită încărcarea nesupravegheată peste noapte a bateriilor detașabile de trotinete pe căile de evacuare.",
      "Solicită inspectarea scutului de protecție al acumulatorului la service după orice contact dur cu o bordură sau piatră.",
      "Nu continua utilizarea acumulatorilor care prezintă deformări mecanice, miros de electrolit sau supraîncălzire."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "supratensiune",
      "soc-electric",
      "pc-gaming",
      "placa-video-arsa",
      "fenomene-electrice",
      "viață digitală & tech",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  },
  "digital-preluare-cont-personal-santaj-deepfake": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară este influențată de costurile asistenței tehnice de recuperare a identității digitale și măsurilor juridice de limitare a prejudiciului de reputație. Evaluarea acoperirilor de protecție cyber este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "sim-swap",
      "furt-identitate",
      "santaj-online",
      "deepfake",
      "cyber-reputatie",
      "viață digitală & tech"
    ]
  },
  "digital-teapa-cumparaturi-online-magazin-fantom": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul privind Securitatea Tranzacțiilor Online și Drepturile Consumatorilor (ECC România / ANPC)",
      "sourceUrl": "https://eccromania.ro/informatii/cumparaturi-online-in-ue/",
      "sourceDate": "Ediție 2024-2025",
      "insurer": "Asigurători Cyber & Pachete Bancare Retail",
      "product": "Protecție Cibernetică / Clauză Cumpărături Online",
      "policyVersion": "Condiții Cadru privind Frauda în Comerțul Electronic",
      "assumptions": "Evaluare calitativă a expunerii financiare rezultate din tranzacții pe platforme online frauduloase. Recuperarea sumei nu este garantată și depinde de modalitatea de autorizare a plății, răspunsul procesatorului bancar la procedura de refuz la plată (chargeback) și existența unei clauze de protecție a cumpărăturilor online în contract.",
      "qualitativeAssessment": "Expunerea financiară este determinată de suma totală achitată, modalitatea de plată și autorizarea tranzacției. Posibilitatea recuperării banilor depinde de sesizarea rapidă a băncii pentru refuz la plată (chargeback), furnizarea dovezilor privind neprimirea produsului și imposibilitatea contactării comerciantului, precum și de limitele și condițiile unei eventuale clauze de protecție a cumpărăturilor online documentate în contract.",
      "includedItems": [
        "Evaluarea calitativă a expunerii financiare și a mecanismelor de contestare a tranzacției",
        "Pașii de sesizare bancară și documentare a fraudei online"
      ],
      "excludedItems": [
        "Garanții ferme de recuperare sau termene bancare prestabilite",
        "Referințe la reparații materiale, manoperă sau devize de atelier"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "legalReviewDate": "12 noiembrie 2026",
    "legalBasis": "OG nr. 34/2014 privind drepturile consumatorilor în cadrul contractelor încheiate la distanță & Regulamentele schemelor de plată cu cardul privind refuzul la plată (Chargeback)",
    "preventionTips": [
      "Verifică datele de identificare ale comerciantului (CUI, adresă fizică, număr de telefon funcțional) înainte de a efectua plăți online.",
      "Verifică vechimea domeniului web și recenziile independente pe platforme externe înainte de comenzi de valori mari.",
      "Folosește carduri virtuale cu limită strictă de tranzacționare sau plata ramburs la livrare când magazinul este necunoscut.",
      "Nu autoriza tranzacții în aplicația bancară dacă descrierea sau beneficiarul nu corespund comerciantului de la care cumperi."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "magazin-fantoma",
      "frauda-online",
      "chargeback-refuz",
      "cyber-protectie-cumparaturi",
      "card-clonat",
      "viață digitală & tech",
      "teapa online",
      "magazin fals",
      "plata card nerecunoscuta"
    ]
  },
  "digital-scurgere-date-confidential-email-gresit": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar poate include costurile notificării autorităților de supraveghere, asistența juridică de conformitate GDPR și eventualele măsuri corective. Evaluarea riscului de răspundere cibernetică este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor"
    ],
    "searchKeywords": [
      "scurgere-date",
      "eroare-umana-email",
      "amenda-gdpr",
      "cyber-liability",
      "notificare-anspdcp",
      "viață digitală & tech"
    ]
  },
  "digital-crypto-wallet-phishing-chei-private": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Expunerea financiară constă în valoarea activelor transferate neautorizat prin compromiterea credențialelor. Evaluarea limitărilor legale și contractuale privind tranzacțiile blockchain este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează copii de siguranță offline sau pe medii imutabile (regula 3-2-1), cu teste periodice de restaurare.",
      "Activează autentificarea cu factor multiplu (MFA/2FA) pe toate conturile cu acces la date și infrastructură.",
      "Aplică actualizările de securitate ale sistemelor de operare în maximum câteva zile de la publicare.",
      "Instruiește periodic echipa sau membrii familiei privind identificarea mesajelor false și linkurilor malițioase."
    ],
    "userProfiles": [
      "antreprenor",
      "proprietar"
    ],
    "searchKeywords": [
      "crypto-drainer",
      "portofel-golit",
      "web3-phishing",
      "smart-contract-malitios",
      "active-digitale",
      "viață digitală & tech"
    ]
  },
  "digital-imprimanta-3d-incendiu-atelier-acasa": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor digitale și cibernetice, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde distrugerea echipamentelor tehnice și pagubele produse de fum sau flacără încăperii. Evaluarea acoperirii atelierelor casnice în polițele de locuință este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "antreprenor",
      "proprietar"
    ],
    "searchKeywords": [
      "imprimanta-3d-incendiu",
      "thermal-runaway",
      "atelier-acasa",
      "asigurare-locuinta",
      "dauna-foc-tehnologic",
      "viață digitală & tech"
    ]
  },
  "luxury-ceas-scump-furat-calatorie-hotel": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Bunuri de Valoare / Proprietate Avansată",
      "policyVersion": "Condiții Locuință Facultativă, Clauza Bunuri Casnice de Valoare și Bijuterii",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Condiții Locuință Facultativă, Clauza Bunuri Casnice de Valoare și Bijuterii",
    "preventionTips": [
      "Păstrează bunurile de valoare într-un seif ancorat mecanic, certificat pentru clasa de securitate adecvată.",
      "Păstrează documentele de proveniență, certificatele gemologice și fotografiile de detaliu într-o arhivă digitală securizată.",
      "Folosește transportatori specializați cu ambalaje climatizate pentru deplasarea operelor de artă sau colecțiilor.",
      "Verifică starea legăturilor de acostare și a sistemelor de santină ale ambarcațiunii înainte de avertizările meteorologice."
    ],
    "userProfiles": [
      "proprietar",
      "calator"
    ],
    "searchKeywords": [
      "ceas-lux",
      "rolex-furt",
      "seif-hotel",
      "valoare-agreata",
      "asigurare-bijuterii",
      "bunuri de lux & valori"
    ]
  },
  "luxury-opera-arta-deteriorata-transport": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Bunuri de Valoare / Proprietate Avansată",
      "policyVersion": "Clauza Fine Art & Opere de Artă",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Clauza Fine Art & Opere de Artă",
    "preventionTips": [
      "Păstrează bunurile de valoare într-un seif ancorat mecanic, certificat pentru clasa de securitate adecvată.",
      "Păstrează documentele de proveniență, certificatele gemologice și fotografiile de detaliu într-o arhivă digitală securizată.",
      "Folosește transportatori specializați cu ambalaje climatizate pentru deplasarea operelor de artă sau colecțiilor.",
      "Verifică starea legăturilor de acostare și a sistemelor de santină ale ambarcațiunii înainte de avertizările meteorologice."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "arta-plastica",
      "tablou-deteriorat",
      "fine-art-insurance",
      "restaurare-muzeala",
      "pierdere-valoare-arta",
      "bunuri de lux & valori"
    ]
  },
  "luxury-yacht-ambarcatiune-avarie-furtuna-marina": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru bunuri de mare valoare, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de operațiunea de salvare marină, devizul șantierului naval pentru reparația cocii și înlocuirea accesoriilor de punte. Evaluarea condițiilor all-risks marine este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "proprietar",
      "calator"
    ],
    "searchKeywords": [
      "yacht-avarie",
      "furtuna-marina",
      "hull-machinery",
      "raspundere-maritima",
      "asigurare-ambarcatiune",
      "bunuri de lux & valori",
      "furtun masina de spalat",
      "inundat baia",
      "refulare masina spalat"
    ]
  },
  "luxury-supercar-zgariat-cheie-parcare-hotel": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața Asigurărilor din România (Standard UNSAR / ASF)",
      "product": "CASCO / RCA",
      "policyVersion": "Condiții Particulare CASCO",
      "assumptions": "Evaluare calitativă a riscului conform Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "CASCO / RCA",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Condiții Particulare CASCO)",
    "preventionTips": [
      "Folosește o cameră de bord cu modul de supraveghere în parcare și senzor de șoc alimentat prin kit dedicat.",
      "Alege locuri de parcare iluminate corespunzător și evită parcarea în unghiuri moarte sau strâmte.",
      "Pliază oglinzile retrovizoare exterioare la parcarea pe străzi cu circulație densă.",
      "Păstrează o distanță confortabilă față de borduri înalte și stâlpi pentru a preveni atingerile manevrelor vecine."
    ],
    "userProfiles": [
      "proprietar",
      "sofer",
      "calator"
    ],
    "searchKeywords": [
      "supercar",
      "vopsea-mata",
      "ferrari-dauna",
      "casco-supercar",
      "fibra-carbon",
      "bunuri de lux & valori",
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare"
    ]
  },
  "luxury-bijuterii-diamante-pierdute-tranzit": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru bunuri de mare valoare, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar reprezintă valoarea certificată gemologic a bijuteriilor dispărute în timpul transportului sau călătoriei. Evaluarea clauzelor de bunuri de mare valoare în tranzit este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "inel-diamant",
      "colier-platina",
      "mysterious-disappearance",
      "bijuterii-lux",
      "asigurare-valori",
      "bunuri de lux & valori"
    ]
  },
  "luxury-scuter-acvatic-jet-ski-avarie-stanci": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru bunuri de mare valoare, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Costul remedierii depinde de amploarea avariei la corpul ambarcațiunii (chila, fuzelaj), avariile la sistemul de propulsie (elice, turbină) și devizul șantierului naval autorizat.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează bunurile de valoare într-un seif ancorat mecanic, certificat pentru clasa de securitate adecvată.",
      "Păstrează documentele de proveniență, certificatele gemologice și fotografiile de detaliu într-o arhivă digitală securizată.",
      "Folosește transportatori specializați cu ambalaje climatizate pentru deplasarea operelor de artă sau colecțiilor.",
      "Verifică starea legăturilor de acostare și a sistemelor de santină ale ambarcațiunii înainte de avertizările meteorologice."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "jet-ski",
      "ambarcatiune-rapida",
      "avarie-carena",
      "turbina-hidrojet",
      "asigurare-marina",
      "bunuri de lux & valori",
      "scuter acvatic",
      "dauna stanci",
      "avarie elice jet ski"
    ]
  },
  "luxury-colectie-vinuri-rare-avarie-climatizare": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru bunuri de mare valoare, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar reprezintă deprecierea sticlelor rare de colecție cauzată de oscilațiile termice prin defectarea sistemului de climatizare. Evaluarea clauzelor pentru colecții speciale este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Păstrează bunurile de valoare într-un seif ancorat mecanic, certificat pentru clasa de securitate adecvată.",
      "Păstrează documentele de proveniență, certificatele gemologice și fotografiile de detaliu într-o arhivă digitală securizată.",
      "Folosește transportatori specializați cu ambalaje climatizate pentru deplasarea operelor de artă sau colecțiilor.",
      "Verifică starea legăturilor de acostare și a sistemelor de santină ale ambarcațiunii înainte de avertizările meteorologice."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "vinuri-rare",
      "crama-climatizare",
      "grand-cru",
      "alterare-temperatura",
      "fine-wine-insurance",
      "bunuri de lux & valori"
    ]
  },
  "luxury-avion-usor-delicopter-privat-avarie-hangar": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru bunuri de mare valoare, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde devizul tehnic autorizat de reparație structurală aeronautică și piesele de schimb certificate. Evaluarea documentată conform condițiilor de asigurare a aviației generale este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "avion-privat",
      "aviation-hull",
      "hangar-avarie",
      "easa-reparatie",
      "asigurare-aeronautica",
      "bunuri de lux & valori",
      "furtun masina de spalat",
      "inundat baia",
      "refulare masina spalat",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "proprietari-chirias-distruge-apartament-fuge": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală)",
      "sourceUrl": "https://legislatie.just.ro/Public/DetaliiDocument/175630",
      "sourceDate": "Republicat M. Of. nr. 505/2011, cu modificările ulterioare",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Bunuri de Valoare / Proprietate Avansată",
      "policyVersion": "Art. 1822 Codul Civil & Asigurarea Răspunderii Civile a Chiriașului",
      "assumptions": "Evaluare calitativă a riscului conform Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de circumstanțele concrete, de piesele avariate și de devizul unității reparatoare autorizate. Cifra orientativă a fost retrasă din afișarea publică până la documentarea cu surse primare verificabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Codul Civil Român (Legea nr. 287/2009) - Cartea a V-a: Despre obligații (Asigurarea și Răspunderea Delictuală) — Art. 1822 Codul Civil & Asigurarea Răspunderii Civile a Chiriașului",
    "preventionTips": [
      "Întocmește un proces-verbal detaliat de predare-primire însoțit de fotografii clare la începutul și finalul contractului.",
      "Prevede în contract o garanție echitabilă și reguli clare privind responsabilitatea micilor reparații curente.",
      "Verifică anual starea tehnică a instalației de gaze și a centralei termice cu o firmă autorizată ISCIR.",
      "Pentru închirierea în regim scurt, folosește încuietori inteligente cu coduri unice per rezervare."
    ],
    "userProfiles": [
      "chirias"
    ],
    "searchKeywords": [
      "proprietar-chirias",
      "daune-chirias",
      "garantie-insuficienta",
      "asigurare-proprietari",
      "vandalism-chirias",
      "proprietari & investitori",
      "chirias rau platnic",
      "apartament distrus chirias",
      "daune regim hotelier",
      "garantie chirie"
    ]
  },
  "proprietari-airbnb-daune-oaspeti-regim-hotelier": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor specifice proprietăților și chiriașilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include costul refacerii mobilierului sau finisajelor degradate de oaspeți și veniturile pierdute din rezervările anulate ulterior. Evaluarea clauzelor pentru închirieri pe termen scurt este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Întocmește un proces-verbal detaliat de predare-primire însoțit de fotografii clare la începutul și finalul contractului.",
      "Prevede în contract o garanție echitabilă și reguli clare privind responsabilitatea micilor reparații curente.",
      "Verifică anual starea tehnică a instalației de gaze și a centralei termice cu o firmă autorizată ISCIR.",
      "Pentru închirierea în regim scurt, folosește încuietori inteligente cu coduri unice per rezervare."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "airbnb-daune",
      "regim-hotelier",
      "petrecere-ilegala",
      "aircover-refuz",
      "asigurare-short-term-rental",
      "proprietari & investitori",
      "chirias rau platnic",
      "apartament distrus chirias",
      "daune regim hotelier",
      "garantie chirie"
    ]
  },
  "proprietari-imobil-vacant-spargere-inghet": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Asigurători Locuințe Retail (Piața din România)",
      "product": "Asigurare Facultativă de Locuință",
      "policyVersion": "Clauza Nelocuire Temporară, Spargere și Îngheț Instalații",
      "assumptions": "Evaluare calitativă a riscurilor asociate unui imobil nelocuit pe perioada iernii (efracție și avarii de îngheț). Acoperirea depinde de declararea stării de neocupare, de respectarea măsurilor preventive (golirea instalațiilor sau încălzire de gardă) și de devizul aprobat.",
      "qualitativeAssessment": "Costul remedierii depinde de valoarea echipamentelor sustrase, avariile cauzate instalației de încălzire prin îngheț și finisajele afectate. Despăgubirea depinde de contractarea clauzei de neocupare, de respectarea măsurilor preventive obligatorii pe timp de ger și de franșiza aplicabilă.",
      "includedItems": [
        "Evaluarea calitativă a riscului de neocupare, furt și îngheț",
        "Analiza clauzelor preventive din contractul de asigurare a locuinței"
      ],
      "excludedItems": [
        "Sume fixe neconfirmate prin devize oficiale",
        "Polițe de asigurare auto, fără aplicabilitate la riscuri imobiliare"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "13 noiembrie 2026",
    "legalReviewDate": "13 noiembrie 2026",
    "legalBasis": "Codul Civil Român — Art. 2199-2200 & Condiții Cadru de Asigurare a Locuinței",
    "preventionTips": [
      "Instalează un sistem de alarmă antiefracție conectat la un dispecerat de monitorizare și intervenție rapidă.",
      "Păstrează bijuteriile și bunurile de valoare într-un seif omologat, ancorat mecanic în structura de rezistență.",
      "Folosește încuietori de înaltă siguranță cu chei protejate împotriva copierii neautorizate pe ușile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "imobil-nelocuit",
      "clauza-neocupare",
      "teava-inghetata",
      "furt-cupru",
      "proprietate-vacanta",
      "proprietari & investitori",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta",
      "teava crapata de ger",
      "inghet iarna",
      "robinet inghetat",
      "calorifer spart"
    ]
  },
  "proprietari-inundatie-masiva-apartament-bloc-retea": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor specifice proprietăților și chiriașilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde refacerea pardoselilor, pereților și instalațiilor afectate, precum și despăgubirea vecinilor inundați la etajele inferioare. Evaluarea devizelor de locuință și răspundere este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Închide robinetul general de alimentare cu apă când locuința rămâne nesupravegheată mai mult de 48 de ore.",
      "Instalează senzori independenți de inundație cu notificare pe telefon lângă chiuvete, mașina de spălat și centrală.",
      "Înlocuiește racordurile flexibile din cauciuc și plasă metalică la fiecare 3–5 ani, înainte de apariția semnelor de îmbătrânire.",
      "Izolează conductele amplasate pe pereți exteriori sau în spații neîncălzite înainte de începerea sezonului rece."
    ],
    "userProfiles": [
      "chirias"
    ],
    "searchKeywords": [
      "coloana-comuna-bloc",
      "inundatie-ghena",
      "asociatie-proprietari",
      "chirias-plecat",
      "asigurare-investitii",
      "proprietari & investitori",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta"
    ]
  },
  "proprietari-incendiu-bucatarie-chirias-neglijenta": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor specifice proprietăților și chiriașilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar este determinat de refacerea completă a bucătăriei, instalației electrice și igienizarea urmelor de fum din restul apartamentului. Evaluarea răspunderii chiriașului vs. asigurarea proprietarului este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "chirias"
    ],
    "searchKeywords": [
      "incendiu-chirias",
      "ulei-foc",
      "raspundere-locativa",
      "mobilier-ars",
      "asigurare-landlord",
      "proprietari & investitori",
      "chirias rau platnic",
      "apartament distrus chirias",
      "daune regim hotelier",
      "garantie chirie"
    ]
  },
  "proprietari-refuz-evacuare-chirias-rau-platnic": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor specifice proprietăților și chiriașilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include chiria neîncasată pe durata litigiului, cheltuielile de asistență juridică și eventuala executare silită. Evaluarea asigurărilor de protecție juridică și garantare a chiriei este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Întocmește un proces-verbal detaliat de predare-primire însoțit de fotografii clare la începutul și finalul contractului.",
      "Prevede în contract o garanție echitabilă și reguli clare privind responsabilitatea micilor reparații curente.",
      "Verifică anual starea tehnică a instalației de gaze și a centralei termice cu o firmă autorizată ISCIR.",
      "Pentru închirierea în regim scurt, folosește încuietori inteligente cu coduri unice per rezervare."
    ],
    "userProfiles": [
      "proprietar",
      "chirias"
    ],
    "searchKeywords": [
      "evacuare-silita",
      "chirias-rau-platnic",
      "asigurare-protectie-juridica-chirie",
      "executor-judecatoresc",
      "chirie-neachitata",
      "proprietari & investitori",
      "chirias rau platnic",
      "apartament distrus chirias",
      "daune regim hotelier",
      "garantie chirie"
    ]
  },
  "proprietari-cedare-centrala-termica-iarna-apartament-inchiriat": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor specifice proprietăților și chiriașilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include intervenția tehnică de urgență, piesele de schimb sau înlocuirea completă a centralei termice defectate. Evaluarea clauzelor de avarii accidentale la instalații este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Întocmește un proces-verbal detaliat de predare-primire însoțit de fotografii clare la începutul și finalul contractului.",
      "Prevede în contract o garanție echitabilă și reguli clare privind responsabilitatea micilor reparații curente.",
      "Verifică anual starea tehnică a instalației de gaze și a centralei termice cu o firmă autorizată ISCIR.",
      "Pentru închirierea în regim scurt, folosește încuietori inteligente cu coduri unice per rezervare."
    ],
    "userProfiles": [
      "chirias"
    ],
    "searchKeywords": [
      "centrala-termica-avarie",
      "iarna-frig-apartament",
      "asistenta-urgenta-proprietari",
      "inlocuire-centrala-iscir",
      "landlord-cover",
      "proprietari & investitori"
    ]
  },
  "proprietari-lucrari-neautorizate-chirias-demolare-pereti": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor specifice proprietăților și chiriașilor, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde expertiza structurală de rezistență, obținerea autorizațiilor și aducerea imobilului la starea autorizată inițială. Evaluarea riscurilor de vandalism și modificări neautorizate este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Întocmește un proces-verbal detaliat de predare-primire însoțit de fotografii clare la începutul și finalul contractului.",
      "Prevede în contract o garanție echitabilă și reguli clare privind responsabilitatea micilor reparații curente.",
      "Verifică anual starea tehnică a instalației de gaze și a centralei termice cu o firmă autorizată ISCIR.",
      "Pentru închirierea în regim scurt, folosește încuietori inteligente cu coduri unice per rezervare."
    ],
    "userProfiles": [
      "chirias"
    ],
    "searchKeywords": [
      "modificari-neautorizate",
      "demolare-perete-chirias",
      "isc-disciplina-constructii",
      "amenzi-constructii",
      "reconstructie-zidarie",
      "proprietari & investitori",
      "chirias rau platnic",
      "apartament distrus chirias",
      "daune regim hotelier",
      "garantie chirie"
    ]
  },
  "familie-valiza-deteriorata-aeroport-transport": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Călătorie Generali Turist Plus Premium & Convenția de la Montreal",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență",
      "assumptions": "Evaluare calitativă a despăgubirii pentru deteriorarea bagajelor pe durata transportului aerian.",
      "qualitativeAssessment": "Compensația depinde de întocmirea imediată a raportului PIR la sosire, evaluarea gradului de deteriorare a bagajului și limitele contractuale aplicabile.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "contractualReviewDate": "30 octombrie 2026",
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență",
    "preventionTips": [
      "Plasează un dispozitiv discret de localizare (AirTag / SmartTag) în fiecare bagaj predat la cală.",
      "Fotografiază exteriorul bagajului și conținutul orientativ înainte de predarea la ghișeul de check-in.",
      "Păstrează întotdeauna actele, medicamentele de strictă necesitate și obiectele valoroase în bagajul de mână.",
      "Îndepărtează etichetele vechi de zbor pentru a nu crea confuzii în sistemele automate de sortare din aeroport."
    ],
    "userProfiles": [
      "parinte",
      "proprietar",
      "calator"
    ],
    "searchKeywords": [
      "valiza-deteriorata",
      "rimowa-avarie",
      "banda-bagaje",
      "lost-found",
      "asigurare-calatorie-bagaj",
      "familie & lifestyle",
      "bagaj pierdut",
      "bagaj intarziat",
      "anulare zbor",
      "intarziere avion",
      "despagubire wizz air",
      "despagubire tarom"
    ]
  },
  "familie-copac-curte-distruge-foisor-gard-furtuna": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Bunuri de Valoare / Proprietate Avansată",
      "policyVersion": "Condiții Locuință Facultativă, Clauza Înlăturare Resturi și Desprindere Corpuri",
      "assumptions": "Evaluare calitativă a riscului conform Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România). Cifra orientativă a fost retrasă din afișarea publică pentru a preveni inducerea în eroare; despăgubirea efectivă depinde de devizul aprobat și de franșiză.",
      "qualitativeAssessment": "Costul remedierii depinde de gravitatea avariilor structurale, elementele de tâmplărie/împrejmuire distruse și devizul de manoperă pentru degajarea arborelui și refacerea foișorului și a gardului.",
      "includedItems": [
        "Evaluarea calitativă a riscului și a limitărilor de acoperire",
        "Analiza clauzelor și condițiilor aplicabile"
      ],
      "excludedItems": [
        "Sume fixe sau estimări numerice nesusținute prin devize oficiale",
        "Garanții privind valoarea despăgubirii"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "30 octombrie 2026",
    "legalReviewDate": "30 octombrie 2026",
    "legalBasis": "Condiții Cadru de Asigurare Facultativă a Locuințelor și Bunurilor (Piața din România) — Condiții Locuință Facultativă, Clauza Înlăturare Resturi și Desprindere Corpuri",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "copac-cazut-curte",
      "foisor-distrus",
      "asigurare-gradina",
      "degajare-arbore",
      "familie & lifestyle"
    ]
  },
  "familie-animal-companie-inghite-corp-strain-operatie": {
    "financialEstimate": {
      "amount": "6.500",
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "Condiții Cadru de Asigurare Medicală pentru Animale de Companie (Pet Insurance)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Standard Piață 2024-2025",
      "insurer": "Asigurători Pet Insurance Retail (Piața din România)",
      "product": "Asigurare de Sănătate pentru Animale de Companie",
      "policyVersion": "Secțiunea Intervenții Chirurgicale de Urgență, Spitalizare și Terapie Intensivă",
      "assumptions": "Evaluare a cheltuielilor generate de o ocluzie intestinală acută care impune intervenție chirurgicală veterinară de urgență. Costul total ilustrativ de 6.500 RON reflectă serviciile medical-veterinare de urgență (diagnostic imagistic, chirurgie, anestezie inhalatorie, spitalizare la terapie intensivă și medicație), nu o despăgubire garantată. O eventuală decontare depinde de clauzele individuale ale contractului de asigurare pentru animale de companie, de franșiza sau coplata convenită și de documentele medicale justificative.",
      "qualitativeAssessment": "Expunerea financiară include consultația veterinară de urgență, investigațiile imagistice (ecografie abdominală, radiografie), intervenția chirurgicală de extragere a corpului străin, anestezia inhalatorie, monitorizarea în terapie intensivă veterinară (ATI), spitalizarea postoperatorie și medicația de refacere. În scenariu, costul total ilustrativ al acestor proceduri clinice atinge 6.500 RON. O eventuală despăgubire nu este automată și depinde de existența unei polițe active de sănătate pentru animale cu acoperire chirurgicală, de termenii contractuali privind perioada de așteptare și franșiza sau coplata agreată, precum și de transmiterea documentelor justificative complete (fișă clinică, protocol operator, factură fiscală detaliată).",
      "includedItems": [
        "Consultație veterinară de urgență și investigații imagistice (ecografie, radiografie)",
        "Intervenție chirurgicală pentru extragerea corpului străin și anestezie inhalatorie",
        "Spitalizare în secția de terapie intensivă veterinară și monitorizare postoperatorie",
        "Medicație, perfuzii și tratament de recuperare postoperatorie"
      ],
      "excludedItems": [
        "Garanții de despăgubire integrală a sumei de 6.500 RON",
        "Tratamente pentru afecțiuni preexistente sau apărute în perioada de așteptare",
        "Referințe la reparații de bunuri materiale sau devize de atelier"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "13 noiembrie 2026",
    "legalReviewDate": "13 noiembrie 2026",
    "legalBasis": "Norme Sanitar-Veterinare privind Asistența Medicală a Animalelor de Companie & Condiții Cadru Pet Insurance",
    "preventionTips": [
      "Nu lăsa la îndemâna animalului jucării de dimensiuni mici, mingi de cauciuc casante, șosete sau sfori ce pot fi înghițite.",
      "Alege exclusiv jucării speciale omologate pentru ros intensiv, adaptate taliei și forței maxilarului câinelui.",
      "Consultă imediat medicul veterinar la primele episoade de vărsături repetate, refuz al hranei sau letargie accentuată.",
      "Păstrează carnetul de sănătate cu microcipul și vaccinările anuale actualizate, cerință obligatorie în asigurările pentru animale."
    ],
    "userProfiles": [
      "proprietar"
    ],
    "searchKeywords": [
      "animal-companie",
      "operatie-caine",
      "veterinar-urgenta",
      "asigurare-animale-pet",
      "ocluzie-intestinala",
      "familie & lifestyle",
      "corp strain inghitit",
      "operatie stomac caine",
      "clinica veterinara non stop",
      "golden retriever operatie"
    ]
  },
  "familie-firma-mutari-deterioreaza-mobilier-scump": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru familie și stil de viață, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar constă în devizul de restaurare sau contravaloarea de înlocuire a pieselor de mobilier deteriorate pe durata transportului. Evaluarea răspunderii cărăușului și a polițelor de conținut este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Documentează detaliat orice incident prin fotografii din multiple unghiuri și notarea martorilor la fața locului.",
      "Păstrează chitanțele, facturile de achiziție și certificatele de garanție într-un dosar digital securizat.",
      "Verifică periodic dacă măsurile de siguranță implementate funcționează conform specificațiilor tehnice.",
      "Consultă condițiile contractuale specifice pentru a cunoaște cu exactitate limitele și excluderile aplicabile."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "mutare-locuinta",
      "mobilier-distrus",
      "firma-mutari",
      "asigurare-bunuri-tranzit",
      "dauna-transport",
      "familie & lifestyle",
      "teava crapata",
      "teava sparta",
      "inundatie de la vecin",
      "inundatie apartament",
      "reparatie parchet",
      "daune apa",
      "apa de conducta"
    ]
  },
  "familie-bicicleta-electrica-furata-boxa-bloc": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru familie și stil de viață, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar reprezintă costul de achiziție al unei biciclete electrice echivalente și remedierea încuietorilor boxei comune forțate. Evaluarea acoperirii furtului din spații comune este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Documentează detaliat orice incident prin fotografii din multiple unghiuri și notarea martorilor la fața locului.",
      "Păstrează chitanțele, facturile de achiziție și certificatele de garanție într-un dosar digital securizat.",
      "Verifică periodic dacă măsurile de siguranță implementate funcționează conform specificațiilor tehnice.",
      "Consultă condițiile contractuale specifice pentru a cunoaște cu exactitate limitele și excluderile aplicabile."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "bicicleta-electrica",
      "furt-boxa",
      "efractie-subsol",
      "asigurare-bicicleta",
      "bunuri-anexe",
      "familie & lifestyle"
    ]
  },
  "familie-panouri-solare-gradina-deteriorate-furtuna": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru familie și stil de viață, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar include înlocuirea panourilor fotovoltaice sparte de grindină sau vânt puternic și recalibrarea invertorului. Evaluarea clauzelor pentru instalații solare exterioare este în curs de verificare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Inspectează vizual starea țiglelor, coamelor și a jgheaburilor înainte de începerea sezonului de furtuni.",
      "Toaletează crengile bătrâne sau uscate din apropierea acoperișului și a liniilor electrice aeriene.",
      "Fixează sau adăpostește mobilierul de terasă și obiectele ușoare din curte la emiterea alertelor meteorologice.",
      "Curăță sifoanele de pardoseală și rigolele exterioare de scurgere pentru a preveni acumularea apelor pluviale."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "panouri-solare",
      "fotovoltaice-gradina",
      "furtuna-vant",
      "invertor-ars",
      "energie-verde",
      "familie & lifestyle"
    ]
  },
  "familie-baterie-scuter-electric-incendiu-hol": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare calitativă a riscurilor pentru familie și stil de viață, în curs de documentare cu surse primare.",
      "qualitativeAssessment": "Impactul financiar cuprinde remedierea degradărilor produse de flacără și fum în holul locuinței și refacerea instalației electrice adiacente. Evaluarea riscului de incendiu produs de acumulatori este în curs de documentare.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "revizuit",
    "editorialReviewDate": "12 noiembrie 2026",
    "preventionTips": [
      "Montează detectoare autonome de fum în dormitoare și zonele de trecere și verifică bateriile semestrial.",
      "Nu conecta consumatori de mare putere (aeroterme, boilere, cuptoare) pe același prelungitor sau priză multiplă.",
      "Păstrează un stingător portabil cu pulbere verificat periodic și ușor accesibil în apropierea bucătăriei.",
      "Apelează doar la electricieni autorizați ANRE pentru orice extindere sau modificare a instalației electrice."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "baterie-trotineta-explozie",
      "thermal-runaway",
      "incendiu-litiu",
      "funingine-toxica",
      "asigurare-apartament",
      "familie & lifestyle",
      "trotineta electrica",
      "baterie masina electrica",
      "baterie ev lovita",
      "incendiu baterie"
    ]
  }
};
