// scripts/build-batch-3.js
const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, '..', 'src', 'data', 'scenarios');

function appendOrSave(filename, varName, list) {
  const filePath = path.join(targetDir, filename);
  let combined = list;
  if (fs.existsSync(filePath)) {
    try {
      const existingContent = fs.readFileSync(filePath, 'utf8');
      const match = existingContent.match(/export const \w+: Scenario\[\] = (\[[\s\S]*\]);/);
      if (match) {
        const existingList = JSON.parse(match[1]);
        const existingIds = new Set(existingList.map(s => s.id));
        const newItems = list.filter(s => !existingIds.has(s.id));
        combined = [...existingList, ...newItems];
      }
    } catch (e) {
      console.warn('Could not parse existing', filename, e.message);
    }
  }
  const code = `import { Scenario } from '@/types/scenario';

export const ${varName}: Scenario[] = ${JSON.stringify(combined, null, 2)};
`;
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✓ ${filename} written with total ${combined.length} scenarios.`);
}

// =========================================================================
// BUSINESS, PROFESIONAL & COMERCIAL (16 scenarii)
// =========================================================================
const businessScenarios = [
  {
    id: 'business-atac-ransomware-blocare-servere',
    slug: 'atac-ransomware-blocare-servere',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Atac ransomware: serverele companiei sunt criptate și activitatea se oprește complet',
    mainQuestion: 'Ce faci dacă hackerii cer 150.000 EUR răscumpărare și firma pierde 20.000 EUR pe zi din cauza blocajului?',
    shortDescription: 'Un fișier malițios deschis de un angajat criptează baza de date a clienților, ERP-ul și copiile de rezervă locale.',
    situation: 'Luni dimineața, toți angajații unei companii medii de logistică și comerț găsesc ecranele blocate cu un mesaj de șantaj cibernetic (ransomware LockBit). Baza de date a comenzilor, facturarea, softul ERP și backup-urile conectate la rețea sunt criptate indescifrabil. Hackerii solicită 150.000 EUR în criptomonede pentru cheia de decriptare. Depozitul nu poate expedia comenzi, generând pierderi operaționale de peste 25.000 EUR pe zi.',
    heroImage: '/images/scenarios/ransomware-server.jpg',
    imageCaption: 'Atacurile cibernetice asupra firmelor mici și mijlocii provoacă costuri imense de întrerupere a activității, investigație forensică și refacere de date.',
    severityLabel: 'Risc Operațional și Financiar Critic',
    featured: true,
    tags: ['ransomware', 'cyber-insurance', 'intrerupere-activitate', 'forensic-it', 'santaj-cibernetic'],
    illustrativeCost: 'Pierderi întrerupere activitate + recuperare IT: 150.000 – 400.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de risc cibernetic (Cyber Insurance)',
      statusLabel: 'Costuri suportate integral de firmă + risc de faliment',
      financialImpact: 'Pierderi masive de sute de mii de lei din capitalul propriu',
      points: [
        'Firma trebuie să angajeze pe cont propriu o echipă externă de securitate cibernetică și investigație forensică (onorarii de 200 – 400 EUR/oră).',
        'Nicio instituție bancară sau de asigurări clasice nu acoperă pierderile cauzate de oprirea vânzărilor.',
        'Dacă decizi să plătești răscumpărarea, nu ai nicio garanție că hackerii îți vor trimite cheia funcțională și riști încălcarea legilor internaționale privind finanțarea terorismului.'
      ],
      summary: 'Blocajul operațional prelungit poate duce la insolvența companiei în câteva săptămâni.'
    },
    withInsurance: {
      title: 'Cu poliță completă de Cyber Insurance & Business Interruption',
      statusLabel: 'Activare imediată a echipei de răspuns la incidente (Incident Response Team)',
      financialImpact: 'Acoperire completă a investigației IT, decriptării și pierderilor de profit',
      points: [
        'Asigurătorul pune la dispoziție în maximum 2 ore o echipă specializată de negociere și experți forensici IT certificați internațional.',
        'Sunt decontate pierderile financiare din întreruperea afacerii (Business Interruption) pe toată durata până la repunerea în funcțiune.',
        'Sunt acoperite costurile de restaurare a bazelor de date din backup-uri securizate și reconfigurarea securizată a serverelor.'
      ],
      summary: 'Criza este gestionată profesionist, minimizând timpul de oprire și salvând compania de la faliment.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Cerințele minime de securitate (MFA)', detail: 'Atenție critică: asigurătorul cere obligatoriu autentificare cu doi factori (MFA) pe toate conturile administrative și backup offline/imobil.' },
        { label: 'Plata răscumpărării (Extortion payment)', detail: 'Verifică dacă polița permite sau exclude expres plata efectivă a sumelor de șantaj.' },
        { label: 'Perioada de franșiză temporală', detail: 'Verifică numărul de ore de oprire a activității (ex. 8 sau 12 ore) de la care începe compensarea pierderilor operaționale.' }
      ]
    },
    immediateSteps: [
      'Deconectează imediat toate serverele și calculatoarele de la rețeaua fizică de internet și Wi-Fi pentru a opri propagarea criptării.',
      'NU reporni serverele și NU plăti nimic pe cont propriu.',
      'Apelează linia fierbinte 24/7 a asigurătorului de Cyber Insurance pentru activarea Incident Response.',
      'Notifică Directoratul Național de Securitate Cibernetică (DNSC) conform obligațiilor legale.'
    ],
    usefulDocuments: [
      'Jurnalele de securitate (log-uri de firewall și servere izolate)',
      'Mesajul de răscumpărare (ransom note)',
      'Polița de Cyber Insurance'
    ],
    advisorQuestions: [
      'Include polița mea clauză de întrerupere a afacerii (Business Interruption) cauzată de un atac cibernetic?',
      'Ce parteneri de securitate IT intervinează la solicitarea asigurătorului meu?'
    ],
    disclaimer: 'Asigurarea cibernetică presupune respectarea standardelor fundamentale de igienă digitală și securitate IT.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'business-eroare-profesionala-consultant-it-avocat',
    slug: 'eroare-profesionala-consultant-it-avocat',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Eroare profesională de programare sau consultanță care provoacă pierderi unui client de 100.000 EUR',
    mainQuestion: 'Ce se întâmplă dacă un bug într-o linie de cod scrisă de firma ta șterge datele clienților sau oprește o campanie Black Friday?',
    shortDescription: 'O eroare tehnică într-un modul de plăți blochează tranzacțiile unui magazin online în cel mai aglomerat weekend din an.',
    situation: 'Compania ta de software dezvoltă un modul de checkout pentru un mare retailer online. Cu 24 de ore înainte de Black Friday, un release neverificat suficient introduce un bug critic care respinge toate plățile cu cardul. Magazinul pierde sute de mii de euro în vânzări nerealizate timp de 36 de ore. Clientul îți înaintează o notificare de despăgubire și acțiune în instanță pentru pierderi financiare directe și prejudiciu comercial.',
    heroImage: '/images/scenarios/professional-error.jpg',
    imageCaption: 'Asigurarea de Răspundere Profesională (E&O - Errors and Omissions) este esențială pentru companiile IT, consultanți, contabili și arhitecți.',
    severityLabel: 'Răspundere Contractuală Masivă',
    featured: true,
    tags: ['eroare-profesionala', 'raspundere-it', 'errors-and-omissions', 'bug-software', 'daune-contractuale'],
    illustrativeCost: 'Pretenții despăgubire client: 200.000 – 500.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere Profesională (E&O / Professional Indemnity)',
      statusLabel: 'Firma ta răspunde cu tot capitalul social și activele proprii',
      financialImpact: 'Plată de sute de mii de lei sau blocarea conturilor firmei',
      points: [
        'Clauzele de limitare a răspunderii din contract sunt adesea atacate cu succes în instanță dacă se demonstrează neglijență profesională gravă.',
        'Costurile cu avocații comerciali specializați pe litigii contractuale depășesc zeci de mii de lei.',
        'Compania își distruge reputația pe piață și riscă falimentul.'
      ],
      summary: 'O singură eroare tehnică a unui angajat poate anula ani întregi de profituri acumulate.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Profesională IT (Professional Indemnity / E&O)',
      statusLabel: 'Apărare juridică specializată și despăgubire decontată de asigurător',
      financialImpact: 'Asigurătorul preia plata despăgubirii în limita sumei asigurate (ex. 250.000 – 1.000.000 EUR)',
      points: [
        'Compania de asigurări pune la dispoziție avocați comerciali de top pentru negocierea amiabilă sau apărarea în instanță.',
        'Prejudiciul financiar provocat clientului prin neglijență profesională neintenționată este compensat pe baza acordului sau hotărârii judecătorești.',
        'Afacerea își continuă activitatea fără a fi decapitalizată.'
      ],
      summary: 'Asigurarea E&O transformă o potențială catastrofă comercială într-un dosar de despăgubire administrat legal.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Retroactive Date (Data retroactivă)', detail: 'Asigură-te că polița acoperă lucrări începute anterior dacă data de debut a contractului cu clientul este mai veche.' },
        { label: 'Jurisdicția teritorială', detail: 'Dacă livrezi software pentru clienți din SUA sau UK, verifică dacă polița are acoperire globală sau exclude SUA/Canada.' },
        { label: 'Cheltuielile de apărare în instanță', detail: 'Verifică dacă onorariile de avocați sunt plătite peste suma asigurată sau se scad din aceasta.' }
      ]
    },
    immediateSteps: [
      'Nu recunoaște vinovăția contractuală în scris fără acordul prealabil al asigurătorului.',
      'Izolează fișierele de cod, commit-urile de Git și specificațiile tehnice agreate în proiect (Jira, Confluence).',
      'Avizează pretenția primită de la client la asigurătorul tău de răspundere profesională în termen de 48 de ore.',
      'Coordonează orice răspuns oficial prin intermediul avocaților desemnați de asigurător.'
    ],
    usefulDocuments: [
      'Contractul de prestări servicii software și Anexa cu specificațiile tehnice (SOW)',
      'Notificarea oficială de daună primită de la client',
      'Polița de Răspundere Profesională (E&O)'
    ],
    advisorQuestions: [
      'Include polița mea răspunderea pentru pierderi financiare pure (Pure Financial Loss) cauzate de indisponibilitatea sistemelor clientului?',
      'Care este acoperirea teritorială (România, UE, Global)?'
    ],
    disclaimer: 'Asigurarea de răspundere profesională acoperă erorile și omisiunile neintenționate săvârșite în exercitarea profesiei.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'business-incendiu-depozit-marfuri-distruse',
    slug: 'incendiu-depozit-marfuri-distruse',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Incendiu violent într-o hală de depozitare: stocuri de marfă de 500.000 EUR arse complet',
    mainQuestion: 'Ce se întâmplă dacă o hală comercială este distrusă de flăcări împreună cu toate produsele gata de livrare?',
    shortDescription: 'Un scurtcircuit la un motostivuitor lăsat la încărcat aprinde paleții de lemn și marfa stivuită.',
    situation: 'Un depozit comercial de 1.200 mp adăpostește stocuri de electrocasnice, ambalaje și textile în valoare de peste 2.500.000 RON. În timpul nopții, un acumulator de motostivuitor explodează la stația de încărcare. Focul cuprinde stivele de paleți în câteva minute. Structura metalică a halei se prăbușește parțial sub căldură, iar marfa este carbonizată integral.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Incendiile din spațiile industriale provoacă daune majore la trei nivele: clădire, echipamente fixe și stocuri circulante de marfă.',
    severityLabel: 'Daună Industrială Catastrofală',
    featured: true,
    tags: ['incendiu-depozit', 'stocuri-marfa', 'hala-industriala', 'isu-autorizatie', 'asigurare-patrimoniu'],
    illustrativeCost: 'Pagube totale clădire + mărfuri: 1.500.000 – 4.000.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare completă de patrimoniu (Property Insurance)',
      statusLabel: 'Pierdere financiară ireversibilă și faliment imediat',
      financialImpact: 'Milioane de lei datorii către furnizori și clienți',
      points: [
        'Furnizorii care au livrat marfa cu termen de plată la 60 de zile vor solicita plata integrală a facturilor.',
        'Proprietarul halei (dacă ești chiriaș) te va da în judecată pentru distrugerea imobilului dacă incendiul a pornit de la echipamentul tău.',
        'Compania este forțată să intre în faliment din cauza datoriilor masive.'
      ],
      summary: 'Absența asigurării de stocuri și proprietate transformă un incendiu industrial într-un dezastru economic terminal.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare a Proprietății Comerciale (Clădiri, Utilaje și Stocuri Flotante)',
      statusLabel: 'Despăgubire integrală la valoarea reală de achiziție/înlocuire',
      financialImpact: 'Plată de milioane de lei direct în contul companiei',
      points: [
        'Stocurile de marfă sunt despăgubite la prețul de achiziție din facturile furnizorilor conform evidenței contabile din ziua anterioară incendiului.',
        'Hala metalică este reconstruită integral conform devizelor aprobate.',
        'Dacă polița include clauza de Pierdere de Profit (Business Interruption), sunt acoperite salariile angajaților și cheltuielile fixe pe perioada refacerii halei.'
      ],
      summary: 'Compania își reface stocurile și își onorează datoriile fără a-și suspenda definitiv existența.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Autorizația de Securitate la Incendiu (ISU)', detail: 'CONDIȚIE CRITICĂ: Verifică dacă polița conține clauza de valabilitate a Autorizației ISU; lipsa autorizației la clădiri care impuneau aviz poate duce la refuzul despăgubirii.' },
        { label: 'Stocuri flotante (Declaration Policy)', detail: 'Asigură-te că valoarea stocurilor este actualizată periodic conform fluctuațiilor sezoniere de volum.' },
        { label: 'Mentenanța stingătoarelor și hidranților', detail: 'Polița impune respectarea verificărilor tehnice periodice la instalațiile de sprinklere și stingătoare.' }
      ]
    },
    immediateSteps: [
      'Asigură salvarea vieții oamenilor și sprijină intervenția brigăzilor ISU.',
      'Salvează serverul de contabilitate sau backup-ul din cloud pentru a avea evidența exactă a stocurilor din gestiune din ziua incendiului.',
      'Avizează asigurătorul în termen de maximum 24-48 de ore.',
      'Obține Raportul oficial de intervenție și Procesul-Verbal de la Pompieri.'
    ],
    usefulDocuments: [
      'Procesul-Verbal de intervenție emis de ISU cu stabilirea cauzei probabile',
      'Balanța contabilă și registrul stocurilor din ziua incidentului',
      'Facturile de achiziție ale mărfurilor și polița de asigurare comercială'
    ],
    advisorQuestions: [
      'Este acoperită marfa aparținând clienților dacă depozitul funcționează ca centru logistic terț (3PL)?',
      'Ce cerințe de autorizare ISU prevede contractul meu pentru valabilitatea despăgubirii?'
    ],
    disclaimer: 'Respectarea normelor de securitate la incendiu și a prescripțiilor tehnice ale producătorilor de utilaje este obligatorie.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'business-accident-munca-santier-raspundere-angajator',
    slug: 'accident-munca-santier-raspundere-angajator',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Accident grav de muncă pe șantier: un muncitor cade de pe schelă',
    mainQuestion: 'Ce răspundere civilă și penală are antreprenorul general când un muncitor este rănit grav?',
    shortDescription: 'O schelă neancorată conform normelor se balansează, iar un lucrător suferă traumatisme multiple.',
    situation: 'Pe un șantier de construcții rezidențiale, un muncitor dulgher cade de pe o schelă de la etajul 2 din cauza lipsei balustradei de protecție și a neutilizării hamului de siguranță. Victima suferă politraumatisme majore, fracturi costale și contuzii cerebrale, rămânând cu o invaliditate permanentă de gradul II. Inspectoratul Teritorial de Muncă (ITM) și Parchetul deschid anchetă pentru nerespectarea normelor SSM (Securitate și Sănătate în Muncă). Familia solicită despăgubiri civile de 100.000 EUR.',
    heroImage: '/images/scenarios/guest-injury-home.jpg',
    imageCaption: 'Răspunderea Civilă a Angajatorului față de propriii salariați protejează compania împotriva pretențiilor civile formulate în urma accidentelor de muncă.',
    severityLabel: 'Risc Penal și Despăgubiri Civile Majore',
    featured: false,
    tags: ['accident-munca', 'santier-constructii', 'itm-ancheta', 'raspundere-angajator', 'invaliditate-permanenta'],
    illustrativeCost: 'Despăgubiri civile + rentă de invaliditate: 150.000 – 450.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere Civilă a Angajatorului (Employer Liability)',
      statusLabel: 'Firma de construcții este obligată la plata tuturor despăgubirilor din fonduri proprii',
      financialImpact: 'Plăți masive de sute de mii de lei sau popriri pe conturile de încasări',
      points: [
        'Sistemul public de asigurări sociale acoperă doar o mică pensie de invaliditate; diferența uriașă până la prejudiciul real este imputată firmei de construcții.',
        'Instanța civilă obligă angajatorul la plata daunelor morale și a unei rente lunare pe durata întregii vieți a muncitorului.',
        'Directorul tehnic și administratorul firmei pot fi trimiși în judecată penală.'
      ],
      summary: 'Accidentul de muncă poate aduce blocajul financiar total al companiei de construcții.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Civilă a Angajatorului (Employer Liability / CAR - Contractor All Risks)',
      statusLabel: 'Preluarea pretențiilor civile și a cheltuielilor de apărare de către asigurător',
      financialImpact: 'Asigurătorul decontează despăgubirile civile stabilite pe cale amiabilă sau judecătorească',
      points: [
        'Polița acoperă sumele pe care angajatorul este obligat legal să le plătească angajatului vătămat (inclusiv daune morale și diferențe salariale).',
        'Sunt asigurate costurile onorariilor avocațiale pentru apărarea intereselor firmei în fața instanțelor de judecată.',
        'Muncitorul și familia sa primesc compensația bănească cuvenită fără certuri interminabile.'
      ],
      summary: 'Compania este salvgardată financiar, iar victima accidentului beneficiază de suportul material necesar.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Instruirea SSM și echipamentele de protecție (EIP)', detail: 'Asigurătorul verifică fișele de protecția muncii semnate și dovada predării echipamentului de lucru omologat.' },
        { label: 'Subcontractori și zilieri', detail: 'Verifică dacă polița acoperă doar salariații cu contract individual de muncă sau și personalul subcontractorilor de pe șantier.' }
      ]
    },
    immediateSteps: [
      'Acordă primul ajutor, apelează 112 și securizează zona pentru a nu se modifica starea de fapt.',
      'Anunță imediat Inspectoratul Teritorial de Muncă (ITM) și Poliția conform legislației SSM.',
      'Avizează asigurătorul de răspundere civilă în termen de maximum 24 de ore.',
      'Păstrează fișele de instruire periodică și procesele-verbale de predare a schelei.'
    ],
    usefulDocuments: [
      'Procesul-Verbal de cercetare a accidentului de muncă întocmit de ITM',
      'Fișa individuală de instruire în domeniul securității și sănătății în muncă (SSM)',
      'Polița de Răspundere Civilă a Angajatorului'
    ],
    advisorQuestions: [
      'Ce plafon de răspundere per victimă este recomandat pentru un șantier cu risc ridicat?',
      'Sunt acoperiți și muncitorii subcontractați dacă antreprenorul general coordonează șantierul?'
    ],
    disclaimer: 'Asigurarea de răspundere preia exclusiv obligațiile civile bănești; respectarea normelor de securitate în muncă este obligatorie prin lege.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'business-raspundere-administrator-directori-dno',
    slug: 'raspundere-administrator-directori-dno',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Administratorul sau directorul general este dat în judecată de asociați pentru o decizie de management',
    mainQuestion: 'Ce se întâmplă dacă ești acționat personal în instanță pentru o presupusă eroare de decizie strategică în firmă?',
    shortDescription: 'Acționarii minoritari cer 200.000 EUR despăgubiri de la CEO din averea sa personală.',
    situation: 'În calitate de director general sau administrator al unei societăți pe acțiuni, semnezi un contract important de achiziție a unui furnizor. Din cauza unei schimbări bruște de piață, tranzacția se dovedește neprofitabilă. Acționarii minoritari invocă încălcarea obligației de diligență și loialitate conform Legii 31/1990 și formulează o acțiune în răspundere împotriva administratorului, solicitând poprirea averii personale (case, conturi, mașini).',
    heroImage: '/images/scenarios/professional-error.jpg',
    imageCaption: 'Polița D&O (Directors and Officers Liability) protejează patrimoniul personal al liderilor de companie împotriva litigiilor de management.',
    severityLabel: 'Risc Personal asupra Patrimoniului Propriu',
    featured: true,
    tags: ['dno-insurance', 'raspundere-administratori', 'directors-officers', 'patrimoniu-personal', 'litigiu-actionari'],
    illustrativeCost: 'Onorarii de avocați comerciali + potențiale despăgubiri: 150.000 – 600.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare D&O (Directors and Officers Liability)',
      statusLabel: 'Administratorul răspunde cu toate bunurile personale din casă',
      financialImpact: 'Sechestru asigurător pe bunurile familiei administratorului',
      points: [
        'Conform Legii societăților comerciale 31/1990, administratorii răspund solidar față de societate pentru nerespectarea îndatoririlor statutare.',
        'Cheltuielile de apărare juridică într-un astfel de dosar comercial complex se ridică la zeci de mii de euro și trebuie plătite din salariul personal.',
        'Instanța poate institui ipoteci judiciare pe locuința de familie a directorului până la finalizarea procesului.'
      ],
      summary: 'O decizie asumată cu bună-credință în afaceri poate distruge patrimoniul familiei tale.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare a Răspunderii Administratorilor și Directorilor (D&O)',
      statusLabel: 'Apărare juridică de elită finanțată de asigurător + acoperirea daunelor',
      financialImpact: 'Activele personale ale directorului sunt complet protejate',
      points: [
        'Compania de asigurări preia plata tuturor onorariilor celor mai buni avocați comerciali pentru formularea apărării.',
        'Sunt protejate conturile personale, proprietățile și veniturile private ale directorului.',
        'Dacă instanța constată o eroare de management neintenționată, despăgubirea este achitată integral de polița D&O.'
      ],
      summary: 'Poți lua decizii curajoase și strategice de business fără teama că îți riști casa și viitorul familiei.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Excluderea fraudei dovedite', detail: 'Polița D&O acoperă deciziile eronate luate cu bună-credință (Business Judgment Rule); faptele penale intenționate sau frauda fiscală dovedită sunt excluse.' },
        { label: 'Run-off Cover (Acoperire post-mandat)', detail: 'Verifică dacă ești protejat și după ce îți dai demisia sau părăsești consiliul de administrație (uzual 3 – 6 ani post-mandat).' }
      ]
    },
    immediateSteps: [
      'Notifică imediat asigurătorul D&O la prima primire a unei somații, cereri de chemare în judecată sau convocări AGA cu puncte privind atragerea răspunderii.',
      'Nu încheia tranzacții amiabile și nu accepta acuzațiile înainte de consultarea avocaților desemnați de asigurător.',
      'Colectează toate minutele de ședință ale Consiliului de Administrație și rapoartele de analiză care au stat la baza deciziei.',
      'Solicită asigurătorului avansul fondurilor pentru onorariile de apărare juridică.'
    ],
    usefulDocuments: [
      'Cererea de chemare în judecată formulată de asociați/acționari',
      'Actul constitutiv al societății și Hotărârile AGA/CA relevante',
      'Polița de asigurare D&O activă'
    ],
    advisorQuestions: [
      'Include polița D&O acoperirea cheltuielilor de apărare în caz de investigații declanșate de autoritățile de reglementare (ANAF, Consiliul Concurenței)?',
      'Care este perioada de raportare extinsă (Run-off) după încheierea mandatului meu de director?'
    ],
    disclaimer: 'Polița D&O nu acoperă faptele de natură penală săvârșite cu intenție directă sau obținerea de foloase necuvenite personale.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendOrSave('business.ts', 'businessScenarios', businessScenarios);
