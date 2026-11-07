/**
 * WHAT IF INSURANCE — GENERALI POLICY MINI-AUDIT ENGINE
 * 
 * Baza de date oficială de clauze, produse și întrebări de audit pentru
 * produsele Generali România documentate în proiect:
 * 1. Generali Eurocasa (Condiții Generale Mod. E18 Ianuarie 2025 + PID Eurocasa 2025)
 * 2. Generali CASCO Perfecto (Condiții Generale Mod. CSC 18 + PID CASCO 2025)
 * 3. Generali Turist Plus Premium (Document de Informare PID Turist Plus 2025)
 * 
 * SEMNIFICAȚIA RĂSPUNSURILOR DECLARATE DE UTILIZATOR:
 * - DA: Confirmat de utilizator / Clauză identificată declarativ
 * - NU: Declarat absent de utilizator / Necesită verificare documentară
 * - NU_STIU: Neverificat
 * - NU_SE_APLICA: Nerelevant pentru situația declarată
 * 
 * NOTĂ METODOLOGICĂ:
 * Răspunsurile nu reprezintă o verificare documentară a contractului individual,
 * ci exclusiv date declarate de utilizator. Scorul măsoară proporția clauzelor
 * declarate ca identificate și nu constituie rating sau probabilitate de despăgubire.
 */

export type AuditAnswer = 'DA' | 'NU' | 'NU_STIU' | 'NU_SE_APLICA';

export type DocumentNature = 'CONDITII_COMPLETE' | 'PID_PRECONTRACTUAL';
export type DocumentationSufficiency = 'DOCUMENTAT_COMPLET' | 'DOCUMENTATIE_INSUFICIENTA';

export interface GeneraliAuditClause {
  id: string;
  clauseName: string;
  documentNature: DocumentNature;
  documentationSufficiency: DocumentationSufficiency;
  exactDocumentName: string;
  documentVersionDate: string;
  exactClauseSection: string;
  officialDocumentReference: string;
  categoryTag: string;
  auditQuestion: string;
  whereToCheckInPolicy: string;
  whyItMatters: string;
  relevantConditionsAndLimits: string;
  riskIfMissing: string;
  recommendedAction: string;
}

export interface GeneraliAuditProduct {
  id: 'eurocasa' | 'casco' | 'turist_plus';
  title: string;
  officialContractCode: string;
  category: 'locuinta' | 'auto' | 'calatorii';
  badge: string;
  description: string;
  documentDate: string;
  officialSourceUrl: string;
  documentNature: DocumentNature;
  documentationSufficiency: DocumentationSufficiency;
  documentationNote: string;
  clauses: GeneraliAuditClause[];
}

export const GENERALI_AUDIT_PRODUCTS: Record<string, GeneraliAuditProduct> = {
  eurocasa: {
    id: 'eurocasa',
    title: 'Generali Eurocasa',
    officialContractCode: 'Mod. E18 Ianuarie 2025 / PID Eurocasa 2025',
    category: 'locuinta',
    badge: 'LOCUINȚĂ & CLĂDIRE',
    description: 'Mini-audit pentru asigurarea facultativă a locuinței și a bunurilor casnice.',
    documentDate: 'Ianuarie 2025',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-fizice/locuinte/completa-plus/',
    documentNature: 'CONDITII_COMPLETE',
    documentationSufficiency: 'DOCUMENTAT_COMPLET',
    documentationNote: 'Condiții Contractuale Generale complete Mod. E18 și Document de Informare PID 2025 integrate.',
    clauses: [
      {
        id: 'ec-apa-conducta',
        clauseName: 'Avarii la Instalațiile de Apă & Canalizare (Apă de Conductă)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale de Asigurare a Locuințelor',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Secțiunea Clauze Suplimentare Facultative — Clauza C.1 «Apă de Conductă și Refulare»',
        officialDocumentReference: 'Condiții Generale Eurocasa Mod. E18 — Clauza C.1 Apă de Conductă',
        categoryTag: 'Instalații Sanitare',
        auditQuestion: 'Ai identificat în poliță clauza suplimentară pentru avarii produse de apa de conductă?',
        whereToCheckInPolicy: 'Polița de asigurare, secțiunea «Riscuri Facultative Contractate» sau Anexa 1.',
        whyItMatters: 'Avariile la instalațiile sanitare interioare reprezintă cel mai frecvent incident urban și sunt complet excluse de polița obligatorie PAD.',
        relevantConditionsAndLimits: 'Acoperă scurgerea accidentală din rețele interioare. Exclude infiltrațiile prin rosturi neetanșate de faianță, înghețul dacă imobilul a fost lăsat neocupat peste 30/60 zile fără golire, și conductele exterioare neîngropate.',
        riskIfMissing: 'Refuz legitim de despăgubire pentru parchet, zugrăveli și finisaje distruse de inundație interioară.',
        recommendedAction: 'Verifică pe polița tipărită dacă pachetul conține opțiunea de apă de conductă cu sumă asigurată adecvată.'
      },
      {
        id: 'ec-detection-access',
        clauseName: 'Căutare și Acces la Defecțiune (Trace & Access)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Secțiunea Cheltuieli Suplimentare Acoperite — Clauza C.1.4 «Căutare și Acces la Defecțiune»',
        officialDocumentReference: 'Eurocasa Mod. E18 — Clauza C.1.4 Căutare & Acces Instalații Îngropate',
        categoryTag: 'Costuri Suplimentare',
        auditQuestion: 'Polița ta prevede decontarea cheltuielilor de spargere/decopertare pentru localizarea defecțiunii ascunse?',
        whereToCheckInPolicy: 'Condițiile Generale Mod. E18, capitolul cheltuieli suplimentare acoperite / limite specifice.',
        whyItMatters: 'Fisurile din șapă sau din spatele faianței necesită frecvent decopertări extinse și detecție specializată.',
        relevantConditionsAndLimits: 'Decontare în limita sublimitei stabilite prin contract (uzual sumă fixă per eveniment sau procent din suma asigurată). Exclude refacerea îmbunătățirilor decorative de lux nedeclarate la emitere.',
        riskIfMissing: 'Asigurătorul poate despăgubi strict fitingul/țeava spartă, refuzând manopera de decopertare și refacerea faianței.',
        recommendedAction: 'Confirmă pe contract plafonul nominal alocat cheltuielilor de căutare și acces.'
      },
      {
        id: 'ec-raspundere-vecini',
        clauseName: 'Răspundere Civilă Față de Terți (Vecini Afectați)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Secțiunea Răspundere Civilă Legală — Secțiunea R.C. Proprietar / Locatar',
        officialDocumentReference: 'Eurocasa Mod. E18 — Secțiunea R.C. Terți',
        categoryTag: 'Răspundere Civilă',
        auditQuestion: 'Ai contractată răspunderea civilă a proprietarului pentru pagube aduse apartamentelor vecine?',
        whereToCheckInPolicy: 'Polița de asigurare, rubrica «Răspundere Civilă Terți» cu suma asigurată aferentă.',
        whyItMatters: 'O inundație la etajul superior poate avaria finisajele a multiple apartamente vecine inferioare.',
        relevantConditionsAndLimits: 'Sublimită pe eveniment și în agregat anual (ex: 5.000 – 20.000 EUR). Exclude faptele cu intenție, daunele produse de lucrări de construcție fără autorizație și răspunderea asiguratului față de membrii familiei cu care locuiește.',
        riskIfMissing: 'Plata integrală din fonduri proprii sau procese în regres intentate de vecini ori de asigurătorii acestora.',
        recommendedAction: 'Asigură-te că limita pentru vecini este de minimum 10.000 EUR per eveniment.'
      },
      {
        id: 'ec-clauza-nelocuire',
        clauseName: 'Clauza de Nelocuire / Neocupare (Termen 30–60 Zile)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Capitolul «Obligațiile Asiguratului la Producerea Riscului & Măsuri Preventive — Îngheț»',
        officialDocumentReference: 'Eurocasa Mod. E18 — Excluderi Specifice Nelocuire & Îngheț',
        categoryTag: 'Prevenție & Valabilitate',
        auditQuestion: 'Cunoști obligația contractuală de golire a instalației dacă imobilul rămâne nelocuit peste 30 de zile iarna?',
        whereToCheckInPolicy: 'Condițiile Generale, capitolul obligații preventive și excluderi la riscul de îngheț.',
        whyItMatters: 'Lăsarea imobilului neocupat în sezonul rece fără oprirea apei și golirea rețelei atrage pierderea dreptului la despăgubire.',
        relevantConditionsAndLimits: 'Obligație contractuală expresă: oprirea robinetului general și golirea apei din conducte/calorifere dacă imobilul stă nelocuit continuu peste termenul prevăzut (30/60 zile) între 1 noiembrie și 31 martie.',
        riskIfMissing: 'Respingerea integrală a dosarului de daună pentru țevi sparte de îngheț în lipsa măsurilor preventive.',
        recommendedAction: 'Oprește întotdeauna robinetul principal și golește conductele înainte de plecări prelungite iarna.'
      },
      {
        id: 'ec-fransiza-cladire',
        clauseName: 'Zero Franșiză pe Clădire (Condiție Standard Eurocasa)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18 & PID Eurocasa 2025',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Dispoziții Financiare — Tabel Franșize Subscriere Clădire',
        officialDocumentReference: 'Eurocasa Mod. E18 & PID 2025 — Dispoziții Financiare Franșize',
        categoryTag: 'Franșize',
        auditQuestion: 'Polița ta confirmă 0 franșiză la daunele suferite de structura și finisajele clădirii?',
        whereToCheckInPolicy: 'Polița de asigurare, tabelul de franșize aplicabile (Franșiză Clădire: 0).',
        whyItMatters: '0 franșiză pe clădire înseamnă că asigurătorul nu reține o cotă deductibilă din despăgubirea aprobată.',
        relevantConditionsAndLimits: 'Standard 0 franșiză pe clădire. Pentru conținut (bunuri casnice) poate exista opțiunea de franșiză selectată de client la emitere pentru reducerea primei.',
        riskIfMissing: 'Deducerea automată a franșizei din fiecare dosar de daună dacă a fost subscrisă o variantă cu franșiză.',
        recommendedAction: 'Verifică rubrica de franșiză de pe contractul fizic/electronic primit.'
      },
      {
        id: 'ec-flexa-fum',
        clauseName: 'Pachetul Incendiu (FLEXA) & Daune Indirecte de Fum',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Secțiunea A — Riscuri de Bază (FLEXA) & Clauza Extinsă Fum/Funingine',
        officialDocumentReference: 'Eurocasa Mod. E18 — Secțiunea A Riscuri FLEXA & Fum Coroziv',
        categoryTag: 'Incendiu & FLEXA',
        auditQuestion: 'Polița acoperă daunele produse de fum coroziv și funingine în încăperile neatinse de flacăra directă?',
        whereToCheckInPolicy: 'Definiția riscului de incendiu în Mod. E18, clauza extinsă de afumare și funingine.',
        whyItMatters: 'La un incendiu localizat, fumul dens și coroziv degradează electronicele și zugrăvelile din toată locuința.',
        relevantConditionsAndLimits: 'Acoperă daune produse de căldură radiantă, fum dens, funingine și apa folosită la stingere de către pompieri. Exclude deteriorările provocate de acțiunea lentă a fumului din sobe/șeminee defecte nesupravegheate.',
        riskIfMissing: 'Refuzul igienizării camerelor sau aparatelor unde nu au existat urme de ardere deschisă.',
        recommendedAction: 'Verifică mențiunea că daunele prin căldură radiantă și fum coroziv sunt acoperite explicit.'
      },
      {
        id: 'ec-bunuri-valoare',
        clauseName: 'Plafon Bunuri de Valoare / Obiecte de Colecție',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Secțiunea Bunuri Casnice — Clauza Specială Obiecte de Valoare și Colecții',
        officialDocumentReference: 'Eurocasa Mod. E18 — Secțiunea Bunuri Casnice & Obiecte de Valoare',
        categoryTag: 'Bunuri de Valoare',
        auditQuestion: 'Ai declarat nominal bijuteriile, ceasurile sau obiectele de artă care depășesc plafonul standard?',
        whereToCheckInPolicy: 'Anexa poliței «Bunuri declarate nominal» cu inventar și evaluare aprobată.',
        whyItMatters: 'Polițele standard conțin o sublimită redusă (uzual 1.000 – 2.500 EUR per obiect sau cumul) pentru bunuri nedeclarate nominal.',
        relevantConditionsAndLimits: 'Sublimită standard strictă dacă bunurile nu sunt listate nominal în anexa contractului cu facturi sau rapoarte de expertiză.',
        riskIfMissing: 'În caz de furt sau distrugere, despăgubirea este plafonată la limita minimă contractuală.',
        recommendedAction: 'Anexează certificate de autenticitate și facturi pentru bunurile ce depășesc 1.500 EUR.'
      },
      {
        id: 'ec-panouri-fotovoltaice',
        clauseName: 'Acoperire Panouri Solare / Fotovoltaice la Grindină și Vijelie',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Clauza Specială Echipamente Exterioare — Instalații Solare, Fotovoltaice & Prosumatori',
        officialDocumentReference: 'Eurocasa Mod. E18 — Rider Echipamente Solare & Prosumatori',
        categoryTag: 'Echipamente Speciale',
        auditQuestion: 'Sistemul de panouri fotovoltaice și invertorul sunt asigurate expres împotriva grindinei și vântului?',
        whereToCheckInPolicy: 'Polița Eurocasa, secțiunea «Instalații speciale exterioare / Panouri solare».',
        whyItMatters: 'Panourile montate pe acoperiș sunt direct expuse căderilor de grindină de mari dimensiuni și vijeliilor.',
        relevantConditionsAndLimits: 'Necesită includerea valorii sistemului în suma asigurată totală și montaj de către instalator autorizat. Exclude defectele interne de randament sau uzura chimică a celulelor fotovoltaice.',
        riskIfMissing: 'Excluderea instalațiilor exterioare dacă nu au fost cuprinse nominal în suma asigurată a clădirii.',
        recommendedAction: 'Include valoarea de factură a instalației solare în valoarea asigurată a imobilului.'
      },
      {
        id: 'ec-home-assistance',
        clauseName: 'Home Assistance 24/7 (Intervenție de Urgență la Domiciliu)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18 & PID Eurocasa 2025',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Anexa Servicii de Asistență Domiciliară de Urgență (Home Assistance 24/7)',
        officialDocumentReference: 'Eurocasa Mod. E18 — Serviciul Asistență Domiciliară de Urgență',
        categoryTag: 'Asistență Operativă',
        auditQuestion: 'Ai acces la trimiterea gratuită a unui instalator sau electrician de urgență în caz de avarie acută?',
        whereToCheckInPolicy: 'Cardul de asistență Generali sau numerele de urgență 0372.010.202 / 0313.200.222.',
        whyItMatters: 'În weekend sau noaptea, intervenția rapidă a unui instalator autorizat limitează substanțial paguba.',
        relevantConditionsAndLimits: 'Serviciu operativ limitat la 2–3 intervenții pe an, plafon standard de cost per intervenție (uzual 100–200 EUR). Asigură măsuri provizorii de urgență, nu renovări definitive.',
        riskIfMissing: 'Suportarea din buzunar a tarifelor majorate la meșteri independenți de urgență fără decontare.',
        recommendedAction: 'Salvează numărul oficial Home Assistance Generali în agenda telefonului.'
      },
      {
        id: 'ec-termen-avizare',
        clauseName: 'Termenul Contractual de Avizare a Daunei (Max. 3 Zile Lucrătoare)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali Eurocasa — Condiții Generale Mod. E18',
        documentVersionDate: 'Mod. E18 / Ianuarie 2025',
        exactClauseSection: 'Capitolul «Procedura de Notificare a Daunelor & Obligațiile Asiguratului»',
        officialDocumentReference: 'Eurocasa Mod. E18 — Capitolul Notificare & Avizare Daune',
        categoryTag: 'Procedură Legală',
        auditQuestion: 'Cunoști termenul contractual de maximum 3 zile lucrătoare pentru anunțarea oricărei daune?',
        whereToCheckInPolicy: 'Condițiile Generale Eurocasa Mod. E18, capitolul avizarea daunelor.',
        whyItMatters: 'Notificarea întârziată poate împiedica inspectorii să constate starea inițială și cauza reală a avariei.',
        relevantConditionsAndLimits: 'Obligație legală și contractuală de avizare în maximum 3 zile lucrătoare de la producere/luare la cunoștință. Depășirea nejustificată dă dreptul asigurătorului să diminueze despăgubirea dacă întârzierea a mărit paguba.',
        riskIfMissing: 'Dificultăți sau diminuări ale despăgubirii în dosarul de daună din cauza constatării tardive.',
        recommendedAction: 'Avizează orice daună imediat la call center 0372.010.202 sau online pe generali.ro.'
      }
    ]
  },

  casco: {
    id: 'casco',
    title: 'Generali CASCO Perfecto',
    officialContractCode: 'Mod. CSC 18 / PID CASCO 2025',
    category: 'auto',
    badge: 'AUTO & CASCO',
    description: 'Mini-audit pentru protecția autovehiculului împotriva coliziunilor, parcării, grindinei și vandalismului.',
    documentDate: '2024–2025',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-fizice/auto/casco-perfecto/',
    documentNature: 'CONDITII_COMPLETE',
    documentationSufficiency: 'DOCUMENTAT_COMPLET',
    documentationNote: 'Condiții Contractuale Generale complete Mod. CSC 18 și Document de Informare PID CASCO 2025 integrate.',
    clauses: [
      {
        id: 'csc-avarii-parcare',
        clauseName: 'Avarii în Parcare cu Autor Necunoscut',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Secțiunea «Avarii Accidentale în Staționare / Autor Necunoscut»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Secțiunea Avarii în Staționare',
        categoryTag: 'Parcare & Vandalism',
        auditQuestion: 'Polița acoperă zgârieturile și înfundăturile produse în parcare fără identificarea autorului?',
        whereToCheckInPolicy: 'Polița CASCO, clauza «Autor Necunoscut în Parcare» și franșiza aferentă.',
        whyItMatters: 'O proporție mare de daune urbane CASCO se produc în parcări fără lăsarea datelor de contact de către cel vinovat.',
        relevantConditionsAndLimits: 'Acoperă lovirea de către autovehicule neidentificate. Atenție: poate exista o franșiză contractuală specifică per eveniment sau limitare la numărul de elemente avariate.',
        riskIfMissing: 'Plata integrală din buzunar pentru revopsirea caroseriei sau schimbarea barelor de protecție.',
        recommendedAction: 'Verifică dacă polița ta conține o franșiză distinctă pentru daune cu autor necunoscut.'
      },
      {
        id: 'csc-reprezentanta',
        clauseName: 'Decontare Directă în Reprezentanță Oficială de Marcă',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Capitolul «Rețeaua de Unități Reparatoare Agreate & Reprezentanțe Autorizate de Marcă»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Clauza Unități Reparatoare Agreate',
        categoryTag: 'Service & Garanție',
        auditQuestion: 'Ai dreptul contractual de a repara mașina în reprezentanța autorizată a mărcii auto?',
        whereToCheckInPolicy: 'Condițiile Particulare, clauza «Reparații în unități autorizate de marcă» vs. «Ateliere partenere».',
        whyItMatters: 'Păstrarea garanției de fabrică și calibrarea senzorilor ADAS (radar, camere) impun standuri oficiale de marcă.',
        relevantConditionsAndLimits: 'Dreptul de reparație în reprezentanță depinde de vechimea vehiculului (uzual până la 5 ani) sau de selectarea expresă a acestei opțiuni de decontare la emitere.',
        riskIfMissing: 'Obligația de a efectua reparația exclusiv în ateliere independente partenere sau suportarea diferenței de manoperă.',
        recommendedAction: 'Selectează clauza de decontare în reprezentanță dacă mașina este nouă sau în garanție de producător.'
      },
      {
        id: 'csc-apa-motor',
        clauseName: 'Apă Aspirată la Motor (Șoc Hidraulic / Pasaj Inundat)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Rider / Clauză Suplimentară «Avarii produse compartimentului motor prin aspirare de apă»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Clauza Suplimentară Șoc Hidraulic Motor',
        categoryTag: 'Avarii Speciale',
        auditQuestion: 'Polița include clauza suplimentară pentru distrugerea motorului prin aspirarea apei în pasaj inundat?',
        whereToCheckInPolicy: 'Condițiile Particulare CSC 18, clauza opțională de șoc hidraulic.',
        whyItMatters: 'Aspirarea apei prin priza de aer provoacă blocarea hidraulică a pistoanelor și distrugerea blocului motor (daună de 8.000 – 25.000 EUR).',
        relevantConditionsAndLimits: 'Rider suplimentar cu primă separată. Exclude forțarea intenționată a traversării zonelor cu apă adâncă evident semnalizate ca impracticabile.',
        riskIfMissing: 'Excluderea fermă a șocului hidraulic pe motiv de forțare a trecerii prin apă adâncă.',
        recommendedAction: 'Activează această clauză suplimentară dacă circuli frecvent pe trasee urbane predispuse la băltiri masive.'
      },
      {
        id: 'csc-fransiza-eveniment',
        clauseName: 'Cuantumul Franșizei Contractuale pe Eveniment',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Dispoziții Financiare & Tabel Franșize Contractuale',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Dispoziții Financiare Franșize',
        categoryTag: 'Franșize',
        auditQuestion: 'Cunoști valoarea exactă a franșizei deductibile pe care o achiți la fiecare reparație?',
        whereToCheckInPolicy: 'Polița CASCO, secțiunea franșize aplicabile (ex: 100 €, 150 € sau 0).',
        whyItMatters: 'Franșiza fixă reduce costul poliței, dar reprezintă o cheltuială certă suportată din buzunar la fiecare daună.',
        relevantConditionsAndLimits: 'Franșiza se aplică per eveniment asigurat. La daune totale, se poate aplica o franșiză procentuală distinctă din suma asigurată.',
        riskIfMissing: 'Costuri neprevăzute suportate din buzunar direct către service la ridicarea vehiculului reparat.',
        recommendedAction: 'Alege o franșiză proporțională cu fondul tău de urgență disponibil.'
      },
      {
        id: 'csc-grindina-pdr',
        clauseName: 'Grindină & Tehnica Paintless Dent Removal (PDR)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Capitolul «Remedierea Daunelor de Fenomene Naturale & Decontare Tehnologie PDR»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Decontare PDR Fenomene Naturale',
        categoryTag: 'Fenomene Naturale',
        auditQuestion: 'Polița acoperă grindina și acceptă tehnica modernă de îndreptare a tablei fără revopsire (PDR)?',
        whereToCheckInPolicy: 'Secțiunea fenomene naturale și proceduri de remediere mecanică fără revopsire.',
        whyItMatters: 'Tehnica PDR păstrează vopseaua originală de fabrică și valoarea de revânzare a vehiculului.',
        relevantConditionsAndLimits: 'Acoperire standard în riscurile de bază fenomene naturale. Generali decontează manopera PDR la ateliere partenere specializate.',
        riskIfMissing: 'Chituirea și revopsirea integrală a caroseriei, ceea ce scade valoarea comercială a mașinii.',
        recommendedAction: 'Cere constatatorului aprobarea metodei PDR dacă vopseaua nu este fisurată.'
      },
      {
        id: 'csc-masina-schimb',
        clauseName: 'Autoturism la Schimb pe Durata Reparației',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Rider / Clauză Suplimentară «Vehicul de Înlocuire / Asistență Extinsă»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Rider Vehicul de Înlocuire',
        categoryTag: 'Mobilitate',
        auditQuestion: 'Ai inclus dreptul la mașină de înlocuire pe perioada în care vehiculul tău este în service?',
        whereToCheckInPolicy: 'Polița CASCO, clauza suplimentară «Vehicul de curtoazie / Mașină la schimb».',
        whyItMatters: 'Livrările întârziate de piese pot prelungi imobilizarea mașinii în service cu săptămâni întregi.',
        relevantConditionsAndLimits: 'Limitat contractual la un număr maxim de zile (uzual 5–15 zile per eveniment) și acordat doar dacă mașina este nedeplasabilă sau reparația depășește un număr de ore de manoperă.',
        riskIfMissing: 'Cheltuieli mari de rent-a-car pe cont propriu sau pierderea mobilității cotidiene.',
        recommendedAction: 'Include clauza dacă depinzi de autoturism pentru navetă sau afacere.'
      },
      {
        id: 'csc-ev-baterie',
        clauseName: 'Acoperire Specifică pentru Baterie EV / Hibrid',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Clauză Specială «Vehicule Electrice și Hibride — Pachetul Baterie de Tracțiune»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Clauza Specială Vehicule Electrice & Hibride',
        categoryTag: 'Vehicule Electrice',
        auditQuestion: 'Dacă ai mașină electrică/hibridă, este asigurată bateria împotriva lovirii dedesubt?',
        whereToCheckInPolicy: 'Condițiile particulare / anexa pentru autovehicule cu propulsie electrică.',
        whyItMatters: 'Un impact cu un obstacol pe dedesubt poate deforma carcasa bateriei, impunând înlocuirea completă a pachetului (15.000 – 30.000 EUR).',
        relevantConditionsAndLimits: 'Acoperă avariile mecanice accidentale la baterie și cabluri de înaltă tensiune. Exclude degradarea treptată a capacității chimice a celulelor.',
        riskIfMissing: 'Refuz pe motiv de deformare a carcasei fără scurgere de electrolit sau interpretări restrictive.',
        recommendedAction: 'Asigură-te că valoarea bateriei este declarată integral în suma asigurată CASCO.'
      },
      {
        id: 'csc-strainatate',
        clauseName: 'Extensie Teritorială Gratuită în Spațiul European (SEE)',
        documentNature: 'CONDITII_COMPLETE',
        documentationSufficiency: 'DOCUMENTAT_COMPLET',
        exactDocumentName: 'Generali CASCO — Condiții Generale Mod. CSC 18',
        documentVersionDate: 'Mod. CSC 18',
        exactClauseSection: 'Capitolul «Teritorialitatea Acoperirii Contractuale — Spațiul Economic European»',
        officialDocumentReference: 'CASCO Mod. CSC 18 — Teritorialitate SEE',
        categoryTag: 'Teritorialitate',
        auditQuestion: 'Polița ta CASCO este valabilă automat în vacanțele cu mașina în străinătate (SEE)?',
        whereToCheckInPolicy: 'Rubrica «Limite teritoriale ale acoperirii» (România + țările Carte Verde / SEE).',
        whyItMatters: 'Generali CASCO Perfecto extinde acoperirea de bază în statele din Spațiul Economic European fără primă suplimentară.',
        relevantConditionsAndLimits: 'Valabil pe teritoriul statelor membre SEE. Riscul de furt extern poate necesita măsuri suplimentare (ambele chei originale, certificat de înmatriculare nesupravegheat în mașină).',
        riskIfMissing: 'Lipsa protecției contractuale la accidente sau furt petrecute în afara țării.',
        recommendedAction: 'Verifică lista statelor acoperite pe poliță înainte de plecarea în concediu cu mașina.'
      }
    ]
  },

  turist_plus: {
    id: 'turist_plus',
    title: 'Generali Turist Plus Premium',
    officialContractCode: 'PID Turist Plus Premium 2025 (Document Precontractual de Informare)',
    category: 'calatorii',
    badge: 'CĂLĂTORII INTERNAȚIONALE (PID)',
    description: 'Mini-audit bazat pe Documentul de Informare (PID) pentru asigurarea medicală de călătorie, asistență și bagaje.',
    documentDate: '2025',
    officialSourceUrl: 'https://www.generali.ro/asigurari/persoane-fizice/vacante-si-calatorii/turist-plus-premium/',
    documentNature: 'PID_PRECONTRACTUAL',
    documentationSufficiency: 'DOCUMENTATIE_INSUFICIENTA',
    documentationNote: 'ATENȚIE: În baza de date a proiectului este disponibil exclusiv Documentul de Informare (PID). Condițiile contractuale complete nu sunt integrate; întrebările reflectă sinteza din PID.',
    clauses: [
      {
        id: 'tp-plafon-medical',
        clauseName: 'Plafon de Urgențe Medicale (50.000 €)',
        documentNature: 'PID_PRECONTRACTUAL',
        documentationSufficiency: 'DOCUMENTATIE_INSUFICIENTA',
        exactDocumentName: 'Document de Informare privind Produsul de Asigurare (PID) — Turist Plus Premium',
        documentVersionDate: 'Versiunea 2025',
        exactClauseSection: 'PID Secțiunea «Ce se asigură? — Cheltuieli medicale de urgență»',
        officialDocumentReference: 'PID Turist Plus Premium 2025 — Sumar Cheltuieli Medicale',
        categoryTag: 'Urgențe Medicale (PID)',
        auditQuestion: 'Ai confirmat în certificatul de călătorie un plafon de minimum 50.000 EUR pentru spitalizare de urgență?',
        whereToCheckInPolicy: 'Certificatul de asigurare Turist Plus, rubrica «Suma asigurată cheltuieli medicale».',
        whyItMatters: 'În clinici private din Europa sau peste ocean, câteva zile la terapie intensivă depășesc rapid 30.000 EUR.',
        relevantConditionsAndLimits: 'Atenție: Extras exclusiv din PID 2025 (documentație contractuală completă insuficientă în proiect). Conform PID, pachetul Premium prevede până la 50.000 EUR pentru spitalizare de urgență. Condițiile detaliate privind afecțiunile preexistente nu sunt detaliate în PID.',
        riskIfMissing: 'Diferența de cost este facturată direct pacientului dacă plafonul este epuizat.',
        recommendedAction: 'Alege pachetul Premium cu 50.000 EUR pentru orice destinație internațională.'
      },
      {
        id: 'tp-repatriere',
        clauseName: 'Repatriere Medicală Asistată & Evacuare Sanitară',
        documentNature: 'PID_PRECONTRACTUAL',
        documentationSufficiency: 'DOCUMENTATIE_INSUFICIENTA',
        exactDocumentName: 'Document de Informare privind Produsul de Asigurare (PID) — Turist Plus Premium',
        documentVersionDate: 'Versiunea 2025',
        exactClauseSection: 'PID Secțiunea «Ce se asigură? — Asistență medicală de urgență și repatriere»',
        officialDocumentReference: 'PID Turist Plus Premium 2025 — Sumar Repatriere Medicală',
        categoryTag: 'Evacuare Medicală (PID)',
        auditQuestion: 'Polița acoperă organizarea și plata directă a transportului sanitar asistat către România?',
        whereToCheckInPolicy: 'Certificatul Turist Plus, beneficiul «Repatriere medicală de urgență».',
        whyItMatters: 'Zborul sanitar specializat cu echipaj medical costă între 20.000 și 60.000 EUR.',
        relevantConditionsAndLimits: 'Extras din PID (documentație contractuală completă insuficientă în proiect). Repatrierea este organizată prin centrala de asistență Generali. Nu include repatrierea fără acordul prealabil al medicului desemnat de asigurător.',
        riskIfMissing: 'Costuri uriașe de transfer medical suportate de pacient sau de familia acestuia.',
        recommendedAction: 'Confirmă că repatrierea este acoperită fără sublimitare restrictivă.'
      },
      {
        id: 'tp-bagaj-intarziat',
        clauseName: 'Întârzierea Bagajului de Cală (>12 ore) — Achiziții de Urgență',
        documentNature: 'PID_PRECONTRACTUAL',
        documentationSufficiency: 'DOCUMENTATIE_INSUFICIENTA',
        exactDocumentName: 'Document de Informare privind Produsul de Asigurare (PID) — Turist Plus Premium',
        documentVersionDate: 'Versiunea 2025',
        exactClauseSection: 'PID Secțiunea «Ce se asigură? — Bagaje și bunuri personale»',
        officialDocumentReference: 'PID Turist Plus Premium 2025 — Sumar Clauză Bagaje',
        categoryTag: 'Bagaje & Confort (PID)',
        auditQuestion: 'Ai inclus dreptul de decontare (până la 400 EUR) pentru produse de primă necesitate la bagaj întârziat?',
        whereToCheckInPolicy: 'Beneficiul «Întârziere bagaj la destinație externă» din certificatul de călătorie.',
        whyItMatters: 'Rămânerea fără haine și cosmetice la destinație este cel mai comun incident aviatic.',
        relevantConditionsAndLimits: 'Extras din PID (documentație contractuală completă insuficientă în proiect). Conform PID, decontarea se acordă după minimum 12 ore de întârziere confirmată prin raport PIR emis de compania aeriană.',
        riskIfMissing: 'Cheltuieli neprevăzute suportate integral din fonduri proprii în vacanță.',
        recommendedAction: 'Păstrează chitanțele cumpărăturilor de primă necesitate și formularul PIR emis de aeroport.'
      },
      {
        id: 'tp-documente-furate',
        clauseName: 'Furt sau Pierdere Documente de Călătorie (1.000 €)',
        documentNature: 'PID_PRECONTRACTUAL',
        documentationSufficiency: 'DOCUMENTATIE_INSUFICIENTA',
        exactDocumentName: 'Document de Informare privind Produsul de Asigurare (PID) — Turist Plus Premium',
        documentVersionDate: 'Versiunea 2025',
        exactClauseSection: 'PID Secțiunea «Ce se asigură? — Pierderea sau furtul documentelor»',
        officialDocumentReference: 'PID Turist Plus Premium 2025 — Sumar Refacere Documente',
        categoryTag: 'Documente (PID)',
        auditQuestion: 'Polița acoperă cheltuielile consulare și cazarea suplimentară necesară în caz de furt al pașaportului?',
        whereToCheckInPolicy: 'Beneficiul «Refacere documente / Titlu de călătorie» din certificatul de asigurare.',
        whyItMatters: 'Furtul documentelor în străinătate impune deplasări consulare, taxe de urgență și prelungirea cazării.',
        relevantConditionsAndLimits: 'Extras din PID (documentație contractuală completă insuficientă în proiect). Necesită raport de poliție obținut în maximum 24 ore de la incident.',
        riskIfMissing: 'Plata din fonduri proprii a nopților suplimentare de hotel și a biletelor de transport schimbate.',
        recommendedAction: 'Declară imediat furtul la secția de poliție locală din țara de destinație.'
      },
      {
        id: 'tp-notificare-centrala',
        clauseName: 'Obligația de Notificare a Centralei de Alarmă Înainte de Spitalizare',
        documentNature: 'PID_PRECONTRACTUAL',
        documentationSufficiency: 'DOCUMENTATIE_INSUFICIENTA',
        exactDocumentName: 'Document de Informare privind Produsul de Asigurare (PID) — Turist Plus Premium',
        documentVersionDate: 'Versiunea 2025',
        exactClauseSection: 'PID Secțiunea «Care sunt obligațiile mele? — Procedura în caz de daună»',
        officialDocumentReference: 'PID Turist Plus Premium 2025 — Procedură Notificare Asistență',
        categoryTag: 'Procedură Esențială (PID)',
        auditQuestion: 'Ai salvat numărul centralei de urgență Europ Assistance / Generali pentru notificare înainte de tratament?',
        whereToCheckInPolicy: 'Cardul de asistență / emailul de confirmare: numărul internațional 24/7.',
        whyItMatters: 'Centrala deschide garanția de plată directă către clinică, evitând plata din buzunar de către pacient.',
        relevantConditionsAndLimits: 'Extras din PID (documentație contractuală completă insuficientă în proiect). Notificarea prealabilă este cerută conform procedurilor de asistență directă, cu excepția stărilor comatoase/urgențelor vitale imediate.',
        riskIfMissing: 'Dacă te internezi fără notificare prealabilă, riști să fii obligat să achiți factura și să ceri decontare ulterioară.',
        recommendedAction: 'Salvează numărul centralei în agenda telefonului înainte de plecare.'
      }
    ]
  }
};

export interface AuditEvaluationSummary {
  product: GeneraliAuditProduct;
  totalClauses: number;
  confirmedCount: number;      // DA (Confirmat de utilizator / clauză identificată declarativ)
  declaredAbsentCount: number; // NU (Declarat absent de utilizator / necesită verificare documentară)
  unverifiedCount: number;     // NU_STIU (Neverificat)
  notApplicableCount: number;  // NU_SE_APLICA (Nerelevant pentru situația declarată)
  scoreRatio: number;          // Proporție confirmate declarativ din totalul aplicabile
  scoreDisplay: string;        // Ex: "7 / 10"
  answers: Record<string, AuditAnswer>;
  confirmedClauses: GeneraliAuditClause[];
  unverifiedClauses: GeneraliAuditClause[];
  declaredAbsentClauses: GeneraliAuditClause[];
  mandatoryDisclaimer: string;
}

export function evaluateGeneraliPolicyAudit(
  productId: 'eurocasa' | 'casco' | 'turist_plus',
  answers: Record<string, AuditAnswer>
): AuditEvaluationSummary {
  const product = GENERALI_AUDIT_PRODUCTS[productId] || GENERALI_AUDIT_PRODUCTS.eurocasa;
  const clauses = product.clauses;

  let confirmedCount = 0;
  let declaredAbsentCount = 0;
  let unverifiedCount = 0;
  let notApplicableCount = 0;

  const confirmedClauses: GeneraliAuditClause[] = [];
  const unverifiedClauses: GeneraliAuditClause[] = [];
  const declaredAbsentClauses: GeneraliAuditClause[] = [];

  for (const clause of clauses) {
    const ans = answers[clause.id] || 'NU_STIU';
    if (ans === 'DA') {
      confirmedCount++;
      confirmedClauses.push(clause);
    } else if (ans === 'NU') {
      declaredAbsentCount++;
      declaredAbsentClauses.push(clause);
    } else if (ans === 'NU_SE_APLICA') {
      notApplicableCount++;
    } else {
      // NU_STIU
      unverifiedCount++;
      unverifiedClauses.push(clause);
    }
  }

  const applicableTotal = Math.max(1, clauses.length - notApplicableCount);
  const scoreRatio = Math.round((confirmedCount / applicableTotal) * 100);
  const scoreDisplay = `${confirmedCount} / ${applicableTotal}`;

  const mandatoryDisclaimer =
    'Scorul măsoară exclusiv proporția clauzelor declarate ca identificate de către utilizator în acest checklist educativ. Nu reprezintă o verificare documentară a contractului tău individual, un rating al calității poliței, o evaluare a produsului sau o probabilitate de despăgubire din partea Generali România.';

  return {
    product,
    totalClauses: clauses.length,
    confirmedCount,
    declaredAbsentCount,
    unverifiedCount,
    notApplicableCount,
    scoreRatio,
    scoreDisplay,
    answers,
    confirmedClauses,
    unverifiedClauses,
    declaredAbsentClauses,
    mandatoryDisclaimer
  };
}
