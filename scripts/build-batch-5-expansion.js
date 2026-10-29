// scripts/build-batch-5-expansion.js
const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, '..', 'src', 'data', 'scenarios');

function appendToCategory(filename, varName, newItems) {
  const filePath = path.join(targetDir, filename);
  let list = [];
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/export const \w+: Scenario\[\] = (\[[\s\S]*\]);/);
    if (match) {
      list = JSON.parse(match[1]);
    }
  }
  const existingIds = new Set(list.map(s => s.id));
  const toAdd = newItems.filter(item => !existingIds.has(item.id));
  const combined = [...list, ...toAdd];
  
  const code = `import { Scenario } from '@/types/scenario';

export const ${varName}: Scenario[] = ${JSON.stringify(combined, null, 2)};
`;
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✓ ${filename}: added ${toAdd.length} items (total: ${combined.length})`);
}

// -------------------------------------------------------------------------
// EXPAND VIATA (Add 6 scenarios)
// -------------------------------------------------------------------------
const extraViata = [
  {
    id: 'viata-arsuri-grave-explozie-casnica',
    slug: 'arsuri-grave-explozie-casnica',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Arsuri de gradul II și III în urma unei explozii casnice de butelie sau gaz',
    mainQuestion: 'Ce sprijin financiar există pentru grefe de piele, pansamente speciale și terapie de recuperare?',
    shortDescription: 'O acumulare de gaze provoacă o deflagrație cu arsuri pe 25% din suprafața corporală.',
    situation: 'O acumulare insidioasă de gaze într-o bucătărie sau anexă provoacă o explozie la aprinderea luminii. Asiguratul suferă arsuri de gradul II și III pe mâini, torace și față. Necesită internare prelungită la centrul de mari arși, intervenții repetate de debridare chirurgicală și grefe de piele. Tratamentele post-spitalicești (costume compresive pe măsură, creme cicatrizante speciale, kinetoterapie) costă mii de lei lunar și nu sunt decontate de stat.',
    heroImage: '/images/scenarios/burn-neighbor.jpg',
    imageCaption: 'Tratamentul și reabilitarea marilor arși presupun costuri uriașe pe termen lung pentru prevenirea cicatricilor retractile.',
    severityLabel: 'Traumatism Grav și Recuperare Costisitoare',
    featured: false,
    tags: ['arsuri-grave', 'explozie-gaz', 'spitalizare-mari-arsi', 'grefe-piele', 'recuperare-arsuri'],
    illustrativeCost: 'Costuri pansamente speciale + costume compresive + recuperare: 40.000 – 110.000 RON',
    withoutInsurance: {
      title: 'Doar sistemul public de sănătate',
      statusLabel: 'Consumabilele speciale și pansamentele moderne plătite de familie',
      financialImpact: 'Mii de lei lunar cheltuiți din economii timp de 1-2 ani',
      points: [
        'Spitalele publice oferă tratamentul acut, dar pansamentele moderne cu ioni de argint și costumele compresive se cumpără adesea privat.',
        'Operațiile estetice de corecție a cicatricilor deformante nu sunt considerate urgențe vitale și nu sunt finanțate de CNAS.',
        'Familia suportă o povară financiară imensă pe durata anilor de reabilitare.'
      ],
      summary: 'Recuperarea funcțională și estetică după arsuri severe impune cheltuieli personale continue.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Accidente cu Clauză de Arsuri Grave & Invaliditate Permanentă',
      statusLabel: 'Capital forfetar garantat la stabilirea procentului de arsură',
      financialImpact: 'Plată de 50.000 – 150.000 RON plătită direct asiguratului',
      points: [
        'Polița plătește un procent fix din suma asigurată corespunzător gradului și suprafeței corporale arse.',
        'Banii sunt virați direct pacientului și pot fi utilizați pentru chirurgie plastică reconstructivă privată sau clinici de arși din străinătate.',
        'Sunt asigurate indemnizațiile zilnice de spitalizare pentru fiecare zi petrecută la ATI/Salon de arși.'
      ],
      summary: 'Pacientul are fondurile necesare pentru a accesa cele mai bune tratamente dermatologice și chirurgicale.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Tabelul de indemnizații pentru arsuri', detail: 'Verifică grila procentuală: de exemplu, arsuri gr. III pe peste 20% din corp acordă de regulă 100% din suma asigurată.' },
        { label: 'Chirurgia estetică reconstructivă', detail: 'Asigură-te că polița acoperă intervențiile estetice necesare restabilirii funcționale după accident.' }
      ]
    },
    immediateSteps: [
      'Prioritatea absolută este transportul de urgență la Spitalul de Urgență / Clinica de Mari Arși.',
      'Obține raportul medical detaliat cu suprafața și gradul arsurilor (Regula celor 9 a lui Wallace).',
      'Deschide dosarul la asigurătorul de viață/accidente.',
      'Păstrează toate prescripțiile pentru tratamente cicatrizante și costume compresive.'
    ],
    usefulDocuments: [
      'Foaia de observație clinică și protocolul de externare de la centrul de arși',
      'Fotografiile medicale din dosarul clinic',
      'Polița de asigurare de accidente'
    ],
    advisorQuestions: [
      'Cum se calculează indemnizația pentru arsuri grave în contractul meu?',
      'Sunt decontate intervențiile de chirurgie plastică reparatorie efectuate în clinici private?'
    ],
    disclaimer: 'Asigurarea de accidente oferă compensație financiară pe baza baremului medical stabilit contractual.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'viata-stomatologie-urgenta-traumatism-dentar-copil',
    slug: 'stomatologie-urgenta-traumatism-dentar-copil',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Traumatism dentar la locul de joacă: copilul își sparge dinții definitivi din față',
    mainQuestion: 'Ce asigurare acoperă reconstrucția estetică, pivotul și implanturile dentare ale unui copil după o căzătură?',
    shortDescription: 'O cădere de pe leagăn se soldează cu pierderea a doi incisivi centrali superiori permanenți.',
    situation: 'Copilul tău de 9 ani cade de pe un leagăn în parc și se lovește cu gura de bara metalică. Doi dinți definitivi (incisivi centrali superiori) sunt fracturați până la rădăcină cu afectarea nervului. Intervenția de urgență impune extirparea nervului, reconstrucții pe pivot de fibră de sticlă, coroane temporare și coroane definitive din zirconiu ceramic. Costul total al planului de tratament la clinica privată de stomatologie pediatrică atinge 9.500 RON.',
    heroImage: '/images/scenarios/guest-injury-home.jpg',
    imageCaption: 'Stomatologia pediatrică de urgență nu este practic decontată în sistemul de stat din România la standardele estetice moderne.',
    severityLabel: 'Traumă Estetică și Cost Stomatologic',
    featured: false,
    tags: ['traumatism-dentar', 'dinti-sparti-copil', 'stomatologie-urgenta', 'implant-zirconiu', 'asigurare-sanatate-copii'],
    illustrativeCost: 'Tratament stomatologic complet de reconstrucție: 6.000 – 16.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de sănătate cu modul dentar de accident',
      statusLabel: 'Părintele achită 100% din veniturile proprii',
      financialImpact: 'Mii de lei plătiți la fiecare ședință stomatologică privată',
      points: [
        'Cabinetele dentare de stat nu dispun de materialele compozite moderne de estetică dentară pediatrică.',
        'Plafonul lunar CNAS la medicii dentiști privați se epuizează în primele 2 zile ale lunii.',
        'Părintele suportă toate costurile pe parcursul lunilor de tratamente și controale.'
      ],
      summary: 'Refacerea zâmbetului copilului devine o cheltuială apăsătoare din bugetul familiei.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Sănătate / Accidente Copii (Clauza de Traumatism Dentar din Accident)',
      statusLabel: 'Decontare directă a tratamentelor stomatologice restorative',
      financialImpact: 'Zero costuri sau aplicarea unei franșize mici',
      points: [
        'Traumatismele dentare produse exclusiv din cauză de accident exterior sunt acoperite în limita a 1.000 – 3.000 EUR.',
        'Sunt decontate radiografiile dentare, tratamentele de canal, pivotul și coroanele integral ceramice.',
        'Copilul beneficiază de tratamente nedureroase cu cele mai bune materiale estetice.'
      ],
      summary: 'Zâmbetul copilului este refăcut perfect fără ca părinții să fie puși în dificultate financiară.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Accident vs Carii', detail: 'Polițele acoperă stomatologia dentară cauzată strict de un traumatism/lovitură externă, nu cariile sau parodontopatiile preexistente.' },
        { label: 'Termenul de inițiere a tratamentului', detail: 'Tratamentul trebuie început de regulă în maximum 7 – 14 zile de la data producerii accidentului.' }
      ]
    },
    immediateSteps: [
      'Găsește fragmentele de dinte spart dacă este posibil și păstrează-le în ser fiziologic sau lapte rece.',
      'Mergi de urgență la o clinică stomatologică non-stop pentru toaleta plăgii și protejarea nervului.',
      'Solicită medicului dentist completarea fișei clinice cu mențiunea expresă a traumatismului mecanic.',
      'Transmite dosarul la asigurătorul de sănătate/accidente.'
    ],
    usefulDocuments: [
      'Radiografia dentară inițială (ortopantomogramă sau retroalveolară)',
      'Fișa de tratament stomatologic și devizul de plată',
      'Polița de asigurare de sănătate a copilului'
    ],
    advisorQuestions: [
      'Ce sumă asigurată este alocată pentru refacerea dinților distruși în accident?',
      'Sunt acoperite coroanele din zirconiu pentru dinții frontali ai minorilor?'
    ],
    disclaimer: 'Acoperirea dentară din accident exclude afecțiunile dentare degenerative preexistente.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'viata-avc-reabilitare-neurologica-termen-lung',
    slug: 'avc-reabilitare-neurologica-termen-lung',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Accident Vascular Cerebral (AVC) la 45 de ani: nevoie de reabilitare neurologică intensivă',
    mainQuestion: 'Cum susții financiar 12 luni de kinetoterapie, logopedie și asistență permanentă la domiciliu?',
    shortDescription: 'Un AVC ischemic provoacă hemipareză dreaptă și afazie, impunând recuperare neurologică de specialitate.',
    situation: 'Un antreprenor sau manager activ de 45 de ani suferă un accident vascular cerebral ischemic acut. Este salvat prin tromboliză la spitalul de urgență, dar rămâne cu hemipareză pe partea dreaptă și dificultăți de vorbire. Pentru a-și recăpăta mobilitatea și capacitatea de a vorbi, are nevoie de un program intensiv de reabilitare neurologică într-un centru privat specializat (cost de 12.000 – 18.000 RON pe lună) timp de cel puțin 6 luni.',
    heroImage: '/images/scenarios/serious-diagnosis.jpg',
    imageCaption: 'Reabilitarea neurologică după AVC în centre private moderne oferă șanse reale de recuperare a independenței motorii, dar costurile lunare sunt prohibitive fără asigurare.',
    severityLabel: 'Risc de Invaliditate și Costuri de Reabilitare',
    featured: true,
    tags: ['accident-vascular-cerebral', 'avc-recuperare', 'kinetoterapie-neurologica', 'boala-grava', 'afazie'],
    illustrativeCost: 'Costuri reabilitare neurologică 6-12 luni: 70.000 – 180.000 RON',
    withoutInsurance: {
      title: 'Doar cele 21 de zile decontate de stat la spitale de recuperare',
      statusLabel: 'Statul decontează doar câteva săptămâni de terapie',
      financialImpact: 'Epuizarea completă a economiilor sau abandonarea recuperării',
      points: [
        'Sistemul public CNAS decontează un număr strict limitat de zile de recuperare pe an, complet insuficiente pentru refacerea neuroplastică.',
        'Familia este nevoită să renunțe la job pentru a deveni îngrijitor cu normă întreagă sau să plătească asistenți la negru.',
        'Fără terapie intensivă în primele 6 luni de la AVC („fereastra de aur”), deficitele motorii devin ireversibile.'
      ],
      summary: 'Lipsa banilor lichizi condamnă un adult tânăr la invaliditate permanentă într-un scaun cu rotile.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare pentru Boli Critice & Invaliditate Permanentă',
      statusLabel: 'Capital forfetar de 150.000 – 300.000 RON virat direct în cont',
      financialImpact: 'Finanțare completă a celor mai bune clinici de recuperare neuro-motorie',
      points: [
        'AVC-ul este boală critică principală în toate polițele: întreaga sumă asigurată este plătită în cont la confirmarea neurologică.',
        'Familia poate interna pacientul în clinici de elită de recuperare neurologică (ex. clinici private din România sau Austria/Elveția).',
        'Sunt asigurate dispozitivele medicale robotizate de mers și logopedia intensivă.'
      ],
      summary: 'Pacientul beneficiază de cea mai performantă terapie din lume, recăpătându-și independența și demnitatea.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția AVC în contract', detail: 'Asigură-te că include AVC-ul ischemic și hemoragic care a lăsat sechele neurologice permanente documentate la 30-90 de zile.' },
        { label: 'Suma asigurată recomandată', detail: 'Alege o sumă de cel puțin 150.000 – 250.000 RON pentru a acoperi 1-2 ani de tratament intensiv.' }
      ]
    },
    immediateSteps: [
      'Urmează protocolul acut medical și obține RMN-ul cerebral și scrisoarea medicală de externare de la secția de neurologie.',
      'Avizează dosarul de boală gravă la compania de asigurări transmițând documentele medicale.',
      'Încasează capitalul asigurat în contul familiei.',
      'Rezervă locul în centrul de reabilitare neurologică specializat.'
    ],
    usefulDocuments: [
      'Raportul imagistic RMN cerebral cu evidențierea ariei de infarctizare ischemică',
      'Biletul de externare neurologică cu scala de deficit neurologic (Rankin / NIHSS)',
      'Polița de asigurare de viață/boli critice'
    ],
    advisorQuestions: [
      'În cât timp de la diagnostic se virează capitalul asigurat pentru AVC?',
      'Ce documente neurologice sunt cerute de medicul asigurătorului pentru lichidarea dosarului?'
    ],
    disclaimer: 'Recuperarea neurologică post-AVC necesită diagnosticare precoce și asistență medicală specializată susținută.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('viata.ts', 'viataScenarios', extraViata);

// -------------------------------------------------------------------------
// EXPAND BUSINESS (Add 5 scenarios)
// -------------------------------------------------------------------------
const extraBusiness = [
  {
    id: 'business-inundatie-magazin-haine-mall',
    slug: 'inundatie-magazin-haine-mall',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Conducta principală a centrului comercial se sparge și inundă magazinul tău de haine',
    mainQuestion: 'Ce despăgubire primești pentru colecția de îmbrăcăminte deteriorată și zilele în care magazinul este închis?',
    shortDescription: 'Tavanul fals din rigips se prăbușește sub greutatea apei, distrugând stocurile de haine și casa de marcat.',
    situation: 'Operezi un magazin de îmbrăcăminte într-un centru comercial aglomerat. În timpul nopții, o conductă a instalației de sprinklere sau a rețelei comune a mall-ului cedează la etajul superior. Sute de litri de apă murdară pătrund prin tavanul magazinului tău. Rafturile, manechinele, colecția nouă de haine de sezon și echipamentele POS sunt compromise. Magazinul este forțat să rămână închis pentru reparații 3 săptămâni.',
    heroImage: '/images/scenarios/shop-flood.jpg',
    imageCaption: 'Avariile de apă din centrele comerciale implică dispute între chiriaș, administrația mall-ului și firmele de mentenanță tehnică.',
    severityLabel: 'Daună Comercială și Întrerupere Vânzări',
    featured: false,
    tags: ['inundatie-magazin', 'dauna-mall', 'stocuri-haine', 'pierdere-profit-comercial', 'property-retail'],
    illustrativeCost: 'Valoare stocuri distruse + vânzări pierdute: 80.000 – 220.000 RON',
    withoutInsurance: {
      title: 'Doar acționarea în judecată a administrației centrului comercial',
      statusLabel: 'Blocaj în procese de ani de zile cu avocații mall-ului',
      financialImpact: 'Pierderi operaționale enorme până la o eventuală sentință',
      points: [
        'Contractele de închiriere din marile mall-uri conțin clauze leonine care declină răspunderea administrației pentru avarii accidentale.',
        'Administrația mall-ului dă vina pe instalatorul subcontractat, iar acesta pe producătorul robinetului.',
        'Firma ta este obligată să continue plata chiriei pe spațiu conform contractului, chiar dacă nu poate vinde nimic.'
      ],
      summary: 'Fără o poliță proprie, ești prins într-un hățiș juridic prelungit în timp ce afacerea pierde bani zilnic.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare a Bunurilor Chiriașului (Tenant Improvement & Content All-Risks)',
      statusLabel: 'Despăgubire imediată a stocurilor și amenajărilor + plata chiriei',
      financialImpact: 'Compensare completă pe baza stocurilor contabile și a devizului de amenajare',
      points: [
        'Asigurătorul tău achită imediat devizul de înlocuire a hainelor distruse și a mobilierului comercial.',
        'Clauza de Pierdere de Profit (Business Interruption) acoperă chiria datorată mall-ului și salariile vânzătorilor pe cele 3 săptămâni de închidere.',
        'Compania de asigurări se ocupă de recuperarea banilor de la administrația mall-ului prin regres juridic.'
      ],
      summary: 'Magazinul tău își reface stocul și redeschide rapid fără a fi împovărat de pierderi financiare.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza Tenant Improvements (Amenajări chiriaș)', detail: 'Asigură-te că sunt asigurate îmbunătățirile aduse spațiului (zugrăveli speciale, corpuri de iluminat, pardoseli).' },
        { label: 'Renunțarea la regres (Waiver of Subrogation)', detail: 'Verifică dacă mall-ul cere o clauză de renunțare la regres între asigurătorii părților.' }
      ]
    },
    immediateSteps: [
      'Solicită conducerii mall-ului întocmirea imediată a unui proces-verbal de incident semnat de directorul tehnic.',
      'Fotografiază tavanul prăbușit, apa acumulată și etichetele hainelor deteriorate.',
      'Păstrează mostre din hainele pătate pentru inspecția de daună.',
      'Transmite balanța contabilă cu stocurile de marfă către asigurător.'
    ],
    usefulDocuments: [
      'Procesul-verbal de incident emis de administrația centrului comercial',
      'Raportul de gestiune și facturile de achiziție a hainelor',
      'Polița de asigurare comercială'
    ],
    advisorQuestions: [
      'Sunt acoperite salariile angajaților pe perioada în care magazinul nu poate funcționa?',
      'Cum se evaluează hainele afectate parțial de apă (pot fi vândute la discount sau se casează integral)?'
    ],
    disclaimer: 'Asigurarea stocurilor comerciale se acordă pe baza evidențelor contabile legal înregistrate la data incidentului.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'business-furt-echipamente-scule-santier-noapte',
    slug: 'furt-echipamente-scule-santier-noapte',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Scule profesionale și utilaje de 25.000 EUR furate de pe un șantier securizat',
    mainQuestion: 'Ce poliță plătește dacă hoții taie gardul șantierului și golesc containerul de scule Hilti și generatoare?',
    shortDescription: 'Echipamentele de lucru de mare valoare dispar peste noapte, blocând execuția proiectului de construcție.',
    situation: 'O firmă de instalații și construcții are organizare de șantier împrejmuită și păzită. În timpul nopții, hoții neutralizează camerele video, taie lacătele containerului maritim metalic și sustrag rotopercutoare profesionale Hilti, lasere de trasare, generatoare de curent și scule electrice în valoare totală de 120.000 RON. Echipa de 15 muncitori nu mai poate lucra a doua zi, existând risc de penalități de întârziere a lucrărilor.',
    heroImage: '/images/scenarios/worksite-theft.jpg',
    imageCaption: 'Furtul de echipamente de pe șantierele de construcții reprezintă o problemă majoră din cauza valorii mari de revânzare a sculelor profesionale pe piața secundară.',
    severityLabel: 'Risc de Furt și Întârziere Execuție',
    featured: false,
    tags: ['furt-santier', 'scule-profesionale', 'container-efractie', 'asigurare-car-constructii', 'hilti-furt'],
    illustrativeCost: 'Valoare scule furate: 80.000 – 160.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Unelte și Utilaje de Șantier (Contractor Plant & Machinery - CPM)',
      statusLabel: 'Cost suportat integral de firma de construcții',
      financialImpact: 'Pierderea a peste 25.000 EUR din capitalul de lucru',
      points: [
        'Firma de pază privată are clauze contractuale care limitează răspunderea la valoarea a 1-2 facturi lunare de pază (câteva mii de lei).',
        'Poliția deschide dosar penal pentru furt calificat, dar sculele marcate sunt adesea scoase rapid din țară.',
        'Antreprenorul trebuie să cumpere din nou toate utilajele pe credit sau leasing pentru a nu pierde termenele de șantier.'
      ],
      summary: 'Furtul de pe șantier lasă firma decapitalizată și cu muncitorii blocați fără unelte.'
    },
    withInsurance: {
      title: 'Cu poliță CPM (Contractor Plant & Machinery) sau Clauza de Echipamente de Șantier',
      statusLabel: 'Despăgubire integrală aprobată pe baza seriilor de inventar',
      financialImpact: 'Achiziționarea unui set nou complet de scule acoperită de asigurător',
      points: [
        'Polița acoperă furtul prin efracție al sculelor și utilajelor mobile aflate în perimetrul șantierului.',
        'Despăgubirea se achită rapid conform facturilor de achiziție și seriilor declarate.',
        'Muncitorii sunt re-echipați în câteva zile, iar șantierul își reia ritmul normal.'
      ],
      summary: 'Investiția în scule profesionale este securizată împotriva rețelelor de hoți specializați.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Măsurile minime de pază', detail: 'Polița impune de regulă împrejmuire completă, containere încuiate cu lacăte de siguranță și prezența unui paznic sau a unui sistem de alarmă conectat la dispecerat.' },
        { label: 'Evidența seriilor unice', detail: 'Fiecare sculă profesională trebuie să aibă seria de fabricație înscrisă în registrul de inventar al firmei.' }
      ]
    },
    immediateSteps: [
      'Nu atinge containerul forțat și apelează 112 pentru cercetarea criminalistică la fața locului.',
      'Solicită firmei de pază raportul de patrulare din noaptea incidentului.',
      'Pregătește lista de inventar cu seriile unice ale tuturor aparatelor sustrase.',
      'Avizează asigurătorul transmițând dovada înregistrării plângerii penale.'
    ],
    usefulDocuments: [
      'Procesul-verbal de cercetare la fața locului emis de Poliție (Furt calificat)',
      'Facturile de achiziție ale sculelor cu seriile menționate',
      'Polița de asigurare CPM'
    ],
    advisorQuestions: [
      'Ce cerințe de securitate pe timp de noapte impune polița mea pentru uneltele lăsate pe șantier?',
      'Sunt acoperite sculele aflate în dubele utilitare parcate în incinta șantierului?'
    ],
    disclaimer: 'Polițele CPM cer dovezi clare de efracție și respectarea măsurilor de securitate asumate prin chestionarul de risc.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('business.ts', 'businessScenarios', extraBusiness);
