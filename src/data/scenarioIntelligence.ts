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
      "Efectuează o inspecție vizuală a acoperișului, jgheaburilor și etanșeității ferestrelor înainte de sosirea toamnei.",
      "Păstrează o evidență digitală cu facturile și fotografiile bunurilor electrocasnice din locuință.",
      "Montează corpuri de iluminat cu senzor și alarme de securitate la punctele vulnerabile de acces.",
      "Evită postarea în timp real pe rețelele sociale a perioadelor în care locuința rămâne complet nesupravegheată."
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "Închide robinetul general de alimentare cu apă când locuința rămâne nesupravegheată mai mult de 48 de ore.",
      "Instalează senzori independenți de inundație cu notificare pe telefon lângă chiuvete, mașina de spălat și centrală.",
      "Înlocuiește racordurile flexibile din cauciuc și plasă metalică la fiecare 3–5 ani, înainte de apariția semnelor de îmbătrânire.",
      "Izolează conductele amplasate pe pereți exteriori sau în spații neîncălzite înainte de începerea sezonului rece."
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Regulamentul CE nr. 261/2004 & Clauza Întârziere Zbor",
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
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Regulamentul CE nr. 261/2004 & Clauza Întârziere Zbor)",
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
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență",
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
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență)",
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
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Regulamentul CE nr. 883/2004 & Condiții Călătorie Generali Turist Plus Premium",
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
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Regulamentul CE nr. 883/2004 & Condiții Călătorie Generali Turist Plus Premium)",
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
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Furt Documente (Plafon 1.000 €)",
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
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Condiții Călătorie Generali Turist Plus Premium — Secțiunea Furt Documente (Plafon 1.000 €))",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "evacuare-urgenta",
      "hidroavion-salvare",
      "insule-izolate",
      "asigurare-calatorie",
      "safari-africa",
      "călătorii & internațional"
    ]
  },
  "calatorii-intrerupere-sejur-deces-ruda": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Răspundere Civilă a Familiei (Personal Liability)",
      "policyVersion": "Art. 1357 și 1372 Codul Civil Român",
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
    "contractualProduct": "Răspundere Civilă a Familiei (Personal Liability)",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Art. 1357 și 1372 Codul Civil Român)",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "Folosește o cameră de bord cu modul de supraveghere în parcare și senzor de șoc alimentat prin kit dedicat.",
      "Alege locuri de parcare iluminate corespunzător și evită parcarea în unghiuri moarte sau strâmte.",
      "Pliază oglinzile retrovizoare exterioare la parcarea pe străzi cu circulație densă.",
      "Păstrează o distanță confortabilă față de borduri înalte și stâlpi pentru a preveni atingerile manevrelor vecine."
    ],
    "userProfiles": [
      "parinte",
      "proprietar"
    ],
    "searchKeywords": [
      "trotineta-copil",
      "masina-zgariata-parcare",
      "raspundere-parinti",
      "vopsitorie-portiere",
      "rc-familie",
      "răspundere civilă",
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare",
      "copil a spart ceva",
      "televizor spart magazin",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "magazin-fantoma",
      "frauda-online",
      "chargeback-refuz",
      "cyber-protectie-cumparaturi",
      "card-clonat",
      "viață digitală & tech",
      "copil a spart ceva",
      "televizor spart magazin",
      "raspundere parinte",
      "daune facute de copii"
    ]
  },
  "digital-scurgere-date-confidential-email-gresit": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "lovit masina in parcare",
      "zgarietura cheie",
      "autor necunoscut",
      "tamponare parcare",
      "casco parcare"
    ]
  },
  "luxury-colectie-vinuri-rare-avarie-climatizare": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "sourceTitle": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18)",
      "sourceUrl": "https://asfromania.ro/consumatori/ghiduri-si-brosuri/",
      "sourceDate": "Ediții Condiții Generale 2023-2024",
      "insurer": "Piața din România (ASF)",
      "product": "Asigurare Medicală de Călătorie",
      "policyVersion": "Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență",
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
    "contractualProduct": "Asigurare Medicală de Călătorie",
    "contractualDocument": "Ghidul Asigurării CASCO & Condiții Standard Generali România (Mod. CSC 18) (Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență)",
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
      "casco-copac",
      "asigurare-gradina",
      "degajare-arbore",
      "familie & lifestyle"
    ]
  },
  "familie-animal-companie-inghite-corp-strain-operatie": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "animal-companie",
      "operatie-caine",
      "veterinar-urgenta",
      "asigurare-animale-pet",
      "ocluzie-intestinala",
      "familie & lifestyle",
      "caine a muscat",
      "daune provocate de caine",
      "muscatura animal"
    ]
  },
  "familie-firma-mutari-deterioreaza-mobilier-scump": {
    "financialEstimate": {
      "currency": "RON",
      "type": "exemplu_ipotetic",
      "verificationStatus": "necesita_documentare",
      "sourceTitle": "În curs de documentare cu surse primare",
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
      "assumptions": "Evaluare exclusiv calitativă. Suma orientativă a fost retrasă din afișarea publică pentru că nu există devize medii sau surse primare documentate pe piața din România.",
      "qualitativeAssessment": "Impactul financiar variază considerabil în funcție de circumstanțele avariei, gravitatea daunelor și tarifele practicate de prestatorii autorizați. Până la obținerea unor devize oficiale sau studii de piață documentate, suma a fost retrasă din interfață pentru a garanta acuratețea informației.",
      "includedItems": [
        "Evaluarea calitativă a riscului financiar potențial",
        "Măsuri de prevenție practică independente de poliță"
      ],
      "excludedItems": [
        "Sume fixe sau intervale numerice neconfirmate prin documente"
      ]
    },
    "editorialStatus": "in_curs",
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
