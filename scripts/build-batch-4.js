// scripts/build-batch-4.js
const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, '..', 'src', 'data', 'scenarios');

function save(filename, varName, list) {
  const filePath = path.join(targetDir, filename);
  const code = `import { Scenario } from '@/types/scenario';

export const ${varName}: Scenario[] = ${JSON.stringify(list, null, 2)};
`;
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✓ ${filename} written with ${list.length} scenarios.`);
}

// =========================================================================
// 1. VIAȚĂ DIGITALĂ & TEHNOLOGIE (10 scenarii)
// =========================================================================
const digitalScenarios = [
  {
    id: 'digital-laptop-furat-calatorie-date-sensibile',
    slug: 'laptop-furat-calatorie-date-sensibile',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Laptopul de serviciu este furat dintr-o cafenea în timp ce lucrezi remote',
    mainQuestion: 'Ce se întâmplă dacă un laptop cu baze de date de clienți nesecurizate dispare într-o pauză de cafea?',
    shortDescription: 'Un rucsac lăsat pe scaun este sustras într-o fracțiune de secundă, generând risc de amendă GDPR.',
    situation: 'Lucrezi de la distanță dintr-o cafenea centrală din Lisabona. Te ridici 45 de secunde pentru a ridica o comandă. La întoarcere, rucsacul conținând laptopul MacBook Pro de 3.000 EUR, telefonul de serviciu și un hard disk extern cu date de lucru a dispărut. Dincolo de valoarea fizică a hardware-ului, pe laptop se aflau date cu caracter personal ale clienților companiei fără criptare completă a hard disk-ului.',
    heroImage: '/images/scenarios/cloud-outage.jpg',
    imageCaption: 'Furtul dispozitivelor mobile de lucru generează două riscuri majore paralele: pierderea fizică a echipamentului și expunerea la sancțiuni GDPR pentru breșă de securitate.',
    severityLabel: 'Risc Hardware și Juridic GDPR',
    featured: true,
    tags: ['laptop-furat', 'lucru-remote', 'gdpr-amenda', 'cyber-personal', 'date-confidentiale'],
    illustrativeCost: 'Valoare hardware + asistență juridică GDPR: 15.000 – 45.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare cyber / bunuri mobile',
      statusLabel: 'Pierdere financiară hardware + risc direct de amenzi',
      financialImpact: 'Plată din fonduri proprii a laptopului nou și consultanței IT',
      points: [
        'Angajatorul îți poate imputa contravaloarea laptopului pierdut din neglijență.',
        'Compania este obligată să notifice ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor) în 72 de ore.',
        'Dacă datele ajung pe dark web, amenzile pentru nerespectarea securității datelor pot fi considerabile.'
      ],
      summary: 'O cafea neatenți costă mii de euro și generează o criză de securitate în companie.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare pentru Dispozitive Mobile & Risc Cyber',
      statusLabel: 'Despăgubire rapidă hardware + asistență de răspuns la breșă de date',
      financialImpact: 'Înlocuirea laptopului acoperită + blocare și ștergere de la distanță',
      points: [
        'Echipamentul electronic este despăgubit pe baza plângerii de furt de la poliție.',
        'Echipa tehnică a asigurătorului activează protocoalele de ștergere de la distanță (remote wipe) a datelor.',
        'Sunt asigurate costurile de consultanță juridică pentru redactarea raportului către autoritatea de protecție a datelor.'
      ],
      summary: 'Hardware-ul este înlocuit imediat, iar expunerea juridică a companiei este neutralizată.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Criptarea hard disk-ului (BitLocker / FileVault)', detail: 'Condiție contractuală: dispozitivele de lucru trebuie să aibă activată criptarea completă a datelor pentru a exclude neglijența.' },
        { label: 'Furt prin sustragere clandestină vs Efracție', detail: 'Verifică dacă polița acoperă furtul din locuri publice deschise (cafenele, trenuri) sau doar furtul prin efracție din încăperi încuiate.' }
      ]
    },
    immediateSteps: [
      'Accesează imediat contul iCloud / Google de pe alt dispozitiv și activează modul „Lost / Ștergere Date de la Distanță”.',
      'Mergi la cea mai apropiată secție de poliție locală pentru a depune plângere de furt.',
      'Anunță departamentul IT și Responsabilul cu Protecția Datelor (DPO) din companie în termen de 2 ore.',
      'Deschide dosarul la asigurător transmițând seria dispozitivului și dovada de la poliție.'
    ],
    usefulDocuments: [
      'Procesul-verbal de plângere penală pentru furt emis de poliție',
      'Factura de achiziție a laptopului cu seria (SN) menționată',
      'Polița de asigurare dispozitive mobile / cyber'
    ],
    advisorQuestions: [
      'Include polița mea acoperire pentru laptopuri lăsate nesupravegheate scurt timp în spații de co-working sau cafenele?',
      'Ce costuri de investigație IT sunt decontate în caz de suspiciune de scurgere de date?'
    ],
    disclaimer: 'Securitatea datelor profesionale impune utilizarea parolelor complexe și a criptării la nivel de sistem de operare.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-frauda-plata-phishing-ceo-fraud',
    slug: 'frauda-plata-phishing-ceo-fraud',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Plată eronată de 40.000 EUR în urma unui atac de tip BEC (Business Email Compromise)',
    mainQuestion: 'Ce faci dacă un hacker clonează e-mailul unui partener comercial și schimbă contul IBAN de pe factură?',
    shortDescription: 'Un e-mail perfect redactat determină contabila să vireze contravaloarea mărfii într-un cont bancar din altă țară.',
    situation: 'Departamentul financiar al unei companii primește o factură proformă de la un furnizor tradițional pentru un transport de marfă. E-mailul pare identic cu cel al directorului de vânzări partener, diferind doar printr-o singură literă insesizabilă în domeniu (ex. @furnizorr.ro). Mesajul solicită plata urgentă într-un nou cont bancar IBAN deschis recent în Polonia. Contabila efectuează transferul de 42.000 EUR. Trei zile mai târziu, furnizorul real sună cerându-și banii.',
    heroImage: '/images/scenarios/phishing-payment.jpg',
    imageCaption: 'Atacurile de tip inginerie socială și compromitere a corespondenței de afaceri (BEC) produc pierderi masive prin plăți frauduloase greu de reversat bancar.',
    severityLabel: 'Frauda Financiară Imediată',
    featured: true,
    tags: ['phishing-plati', 'ceo-fraud', 'business-email-compromise', 'frauda-bancara', 'asigurare-cyber'],
    illustrativeCost: 'Suma deturnată ireversibil: 150.000 – 300.000 RON',
    withoutInsurance: {
      title: 'Fără poliță de Cyber Crime & Social Engineering Fraud',
      statusLabel: 'Pierdere financiară de 100% din capitalul firmei',
      financialImpact: '42.000 EUR pierduți definitiv fără sprijin din partea băncii',
      points: [
        'Băncile comerciale NU despăgubesc transferurile autorizate voluntar de către client, chiar dacă au fost determinate de o înșelăciune.',
        'Banii virați în conturile din străinătate sunt retrași instant în numerar sau convertiți în criptomonede de rețelele de spălare de bani.',
        'Poliția deschide dosar penal pentru înșelăciune, dar recuperarea fondurilor peste hotare durează ani sau este imposibilă.'
      ],
      summary: 'Firma este lăsată cu o gaură masivă în fluxul de numerar și trebuie să plătească încă o dată factura reală.'
    },
    withInsurance: {
      title: 'Cu poliță de Cyber Crime (Clauza de Inginerie Socială și Fraudă Electronică)',
      statusLabel: 'Despăgubire integrală a sumei pierdute prin transferul fraudulos',
      financialImpact: 'Recuperare a sumei furate minus franșiza contractuală',
      points: [
        'Polița de fraudă cibernetică include explicit transferurile realizate pe baza unor instrucțiuni false primite prin e-mail compromis.',
        'Asigurătorul activează specialiști bancari de urmărire a fondurilor pentru înghețarea contului destinație.',
        'Compania își recuperează capitalul de lucru și își poate onora obligațiile față de furnizorul real.'
      ],
      summary: 'Prejudiciul financiar provocat de ingineria socială sofisticată este absorbit de asigurare.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Procedura de verificare telefonică (Call-back verification)', detail: 'ATENȚIE: Majoritatea asigurătorilor impun ca firmă să aibă o procedură internă scrisă prin care orice schimbare de IBAN să fie confirmată telefonic pe un număr cunoscut anterior.' },
        { label: 'Sublimita pentru Social Engineering', detail: 'Verifică dacă frauda prin e-mail are o limită separată mai mică decât suma asigurată globală a poliței.' }
      ]
    },
    immediateSteps: [
      'Contactează imediat banca plătitoare și solicită revocarea de urgență (Recall) a transferului SEPA.',
      'Depune plângere penală de urgență la Direcția de Investigare a Infracțiunilor de Criminalitate Organizată și Terorism (DIICOT).',
      'Salvează e-mailul suspect în format .eml sau .msg original (cu toate headerele tehnice neatinse).',
      'Avizează asigurătorul de Cyber Crime atașând copia plângerii penale.'
    ],
    usefulDocuments: [
      'E-mailul malițios cu antetul tehnic complet (Full Email Headers)',
      'Ordinul de plată bancar și confirmarea debitării din cont',
      'Polița de asigurare Cyber cu modulul de Social Engineering'
    ],
    advisorQuestions: [
      'Care sunt condițiile obligatorii de verificare a modificării conturilor bancare impuse de poliță?',
      'Ce sumă maximă este acoperită per eveniment de fraudă de tip Business Email Compromise?'
    ],
    disclaimer: 'Prevenirea fraudelor de tip phishing impune implementarea strictă a verificării vocale obligatorii a oricărei schimbări de cont bancar.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-intrerupere-cloud-outage-afacere-online',
    slug: 'intrerupere-cloud-outage-afacere-online',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Pană majoră a furnizorului de cloud: magazinul online este offline 48 de ore',
    mainQuestion: 'Cine suportă profitul nerealizat când serverele AWS sau Azure cad din cauze externe afacerii tale?',
    shortDescription: 'O eroare globală a infrastructurii cloud blochează platforma SaaS și vânzările companiei.',
    situation: 'Compania ta operează o platformă de comerț electronic sau o aplicație SaaS cu mii de utilizatori plătitori. O defecțiune majoră a centrului de date al furnizorului internațional de cloud lasă serviciul complet inaccesibil timp de 48 de ore. Nu poți încasa abonamente, pierzi vânzări directe de 80.000 RON și clienții cer penalități contractuale pentru nerespectarea clauzei de disponibilitate (SLA).',
    heroImage: '/images/scenarios/cloud-outage.jpg',
    imageCaption: 'Dependența afacerilor moderne de infrastructura marilor giganți de cloud computing creează riscuri sistemice de întrerupere comercială.',
    severityLabel: 'Risc Financiar de Întrerupere Operațională',
    featured: false,
    tags: ['cloud-outage', 'intrerupere-cloud', 'sla-penalitati', 'asigurare-cyber', 'business-interruption-it'],
    illustrativeCost: 'Pierderi vânzări + penalități SLA: 50.000 – 160.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Cloud Outage / Business Interruption IT',
      statusLabel: 'Furnizorul de cloud oferă doar credite simbolice de câțiva dolari',
      financialImpact: 'Pierderi operaționale suportate 100% din veniturile proprii',
      points: [
        'Contractele standard ale giganților de cloud (AWS, Microsoft, Google) exclud expres orice răspundere pentru daune indirecte sau pierderi de profit.',
        'În cel mai bun caz primești o reducere de 10% la factura lunii următoare de hosting (câteva sute de lei).',
        'Firma ta este obligată legal să plătească despăgubiri propriilor clienți pentru nerespectarea timpului de funcționare garantat (uptime).'
      ],
      summary: 'Giganții de cloud sunt blindați juridic, lăsând toate riscurile comerciale pe umerii firmei tale.'
    },
    withInsurance: {
      title: 'Cu poliță de Cyber Insurance cu clauză de Dependent Business Interruption (Cloud Provider Outage)',
      statusLabel: 'Despăgubire integrală a profitului operațional pierdut',
      financialImpact: 'Plată conform mediei istorice de încasări zilnice',
      points: [
        'Polița compensează marja brută de profit și costurile fixe (salarii, chirii) pe toată durata cât serverele cloud au fost indisponibile.',
        'Sunt decontate penalitățile contractuale justificate datorate clienților pentru nerespectarea SLA.',
        'Fluxul de numerar al companiei este protejat împotriva incidentelor globale de rețea.'
      ],
      summary: 'Afacerea ta digitală este asigurată chiar și atunci când defecțiunea aparține unor furnizori externi giganți.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Perioada de franșiză orară (Waiting Period)', detail: 'Polițele compensează pierderile dacă pana de cloud depășește un prag minim (uzual 6 – 12 ore continue).' },
        { label: 'Lista furnizorilor eligibili', detail: 'Asigură-te că furnizorul tău specific de cloud (AWS, Azure, GCP, OVH) este acceptat în contract.' }
      ]
    },
    immediateSteps: [
      'Fă capturi de ecran cu paginile oficiale de status ale furnizorului de cloud (ex. AWS Health Dashboard) care confirmă incidentul.',
      'Activează planul intern de comunicare de criză cu clienții platformei tale.',
      'Notifică asigurătorul de Cyber Insurance în primele ore de la depășirea perioadei de așteptare.',
      'Pregătește extrasele de contabilitate cu încasările medii zilnice din ultimele 3 luni pentru calcularea daunei.'
    ],
    usefulDocuments: [
      'Raportul oficial de incident (RCA - Root Cause Analysis) emis de furnizorul de cloud',
      'Rapoartele interne de monitorizare uptime (Datadog, New Relic, Pingdom)',
      'Situațiile financiare comparative privind vânzările zilnice'
    ],
    advisorQuestions: [
      'Include polița mea clauza de Dependent Business Interruption pentru furnizori externi de servicii digitale?',
      'Cum se calculează indemnizația pentru orele de oprire a vânzărilor magazinului online?'
    ],
    disclaimer: 'Asigurarea pentru întreruperea afacerii acoperă indisponibilitatea accidentală neprevăzută a serviciilor de găzduire contractate.',
    lastReviewed: 'Octombrie 2026'
  }
];

save('digital.ts', 'digitalScenarios', digitalScenarios);

// =========================================================================
// 2. BUNURI DE LUX & PROPRIETĂȚI DE MARE VALOARE (10 scenarii)
// =========================================================================
const luxuryScenarios = [
  {
    id: 'luxury-ceas-scump-furat-calatorie-hotel',
    slug: 'ceas-scump-furat-calatorie-hotel',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Ceas de lux de 35.000 EUR furat din seiful camerei de hotel în vacanță',
    mainQuestion: 'Ce se întâmplă dacă un ceas elvețian valoros dispare din camera de hotel și asigurarea standard oferă doar 1.000 EUR?',
    shortDescription: 'Un ceas de colecție Rolex sau Patek Philippe este sustras din seiful electronic cu cheie master.',
    situation: 'Te cazezi la un hotel de 5 stele pe Coasta de Azur. Înainte de a merge la plajă, lași în seiful din camera de hotel un ceas de colecție din aur evaluat la 35.000 EUR, achiziționat cu certificat original. Seara găsești seiful deschis fără urme de forțare mecanică evidentă (utilizarea codului master de urgență al hotelului). Conducerea hotelului își declină răspunderea invocând regulamentul intern care limitează despăgubirea pentru bunuri din cameră la 500 – 1.000 EUR.',
    heroImage: '/images/scenarios/luxury-watch-theft.jpg',
    imageCaption: 'Bunurile de mare valoare necesită asigurări specializate cu evaluare pe bază de listă nominală (Agreed Value) pentru a evita subasigurarea.',
    severityLabel: 'Pierdere Masivă de Capital',
    featured: true,
    tags: ['ceas-lux', 'rolex-furt', 'seif-hotel', 'valoare-agreata', 'asigurare-bijuterii'],
    illustrativeCost: 'Valoare ceas sustras: 150.000 – 220.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de obiecte de valoare (Doar polița de călătorie obișnuită)',
      statusLabel: 'Despăgubire limitată la câteva sute de euro',
      financialImpact: 'Pierdere de peste 34.000 EUR suportată personal',
      points: [
        'Polițele standard de călătorie sau de locuință plafonează despăgubirea pentru bijuterii și ceasuri la maximum 1.000 – 2.000 EUR per obiect.',
        'Regulamentele hoteliere internaționale limitează drastic răspunderea pentru bunurile lăsate în seiful din cameră dacă nu au fost depuse în seiful central al recepției.',
        'Poliția locală deschide dosar, dar ceasurile fără înregistrare în registre internaționale de furt sunt vândute rapid pe piața neagră.'
      ],
      summary: 'În lipsa unei polițe specifice de lux, recuperarea financiară a valorii reale a ceasului este imposibilă.'
    },
    withInsurance: {
      title: 'Cu poliță dedicată de Asigurare a Bunurilor de Mare Valoare (Valoare Agreată / Agreed Value)',
      statusLabel: 'Despăgubire integrală de 35.000 EUR aprobată rapid',
      financialImpact: 'Zero pierderi financiare nete',
      points: [
        'Polița privată de lux include ceasul pe o anexă nominativă cu serie de carcasă, certificat de autenticitate și valoare de catalog agreată.',
        'Asigurarea oferă acoperire la nivel global (Worldwide Cover) fără limitare la teritoriul de domiciliu.',
        'Asigurătorul raportează seria ceasului în registrul mondial The Watch Register, blocând revânzarea acestuia la casele de licitații.'
      ],
      summary: 'Primești întreaga contravaloare a piesei de lux fără negocieri complicate legate de uzură.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de Valoare Agreată (Agreed Value)', detail: 'Asigură-te că suma este stabilită la semnare pe baza unei expertize oficiale, fără aplicarea coeficientului de uzură la data producerii daunei.' },
        { label: 'Condiții de păstrare în seif', detail: 'Verifică cerințele legate de clasa de securitate a seifului în care trebuie depus bunul când nu este purtat la mână.' },
        { label: 'Acoperire teritorială globală', detail: 'Verifică dacă bijuteriile și ceasurile sunt asigurate și în călătorii internaționale.' }
      ]
    },
    immediateSteps: [
      'Nu atinge seiful sau clanțele camerei pentru a permite poliției ridicarea amprentelor.',
      'Sună imediat la recepție și solicită prezența conducerii și a Poliției naționale la fața locului.',
      'Obține dovada plângerii de furt cu menționarea seriei unice a ceasului.',
      'Notifică brokerul de asigurări de lux transmițând certificatul de garanție și numărul de serie.'
    ],
    usefulDocuments: [
      'Certificatul de autenticitate și cardul de garanție oficial al mărcii',
      'Factura de cumpărare și evaluarea de la un evaluator autorizat',
      'Plângerea penală eliberată de poliția locală'
    ],
    advisorQuestions: [
      'Cum se actualizează valoarea asigurată dacă prețul de piață al ceasului de colecție crește anual?',
      'Este necesară purtarea ceasului exclusiv pe mână sau e acoperit și în bagajul de mână?'
    ],
    disclaimer: 'Polițele pentru bunuri de lux cer expertize recente de evaluare și respectarea măsurilor de securitate.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'luxury-opera-arta-deteriorata-transport',
    slug: 'opera-arta-deteriorata-transport',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Pictură valoroasă din secolul XIX deteriorată ireversibil în timpul relocării',
    mainQuestion: 'Ce poliță compensează pierderea de valoare a unui tablou de patrimoniu zgâriat și străpuns în tranzit?',
    shortDescription: 'O manipulare defectuoasă a ambalajului perforează pânza unui tablou evaluat la 60.000 EUR.',
    situation: 'Colecționezi artă plastică. În timpul mutării într-o nouă reședință sau transportului către o galerie de expoziție, o cutie de transport cade de pe cărucior. Un colț metalic străpunge ambalajul din lemn și perforează pânza unei lucrări semnate de un pictor clasic român de patrimoniu. Tabloul suferă o ruptură de 10 cm în zona centrală a compoziției. Deși poate fi restaurat parțial, valoarea sa de piață pe piața de artă scade cu peste 40%.',
    heroImage: '/images/scenarios/art-damage.jpg',
    imageCaption: 'Asigurările pentru obiecte de artă (Fine Art) acoperă nu doar costurile de restaurare muzeală, ci și pierderea de valoare artistică și comercială (Depreciation in Value).',
    severityLabel: 'Daună Culturală și Financiară Majoră',
    featured: true,
    tags: ['arta-plastica', 'tablou-deteriorat', 'fine-art-insurance', 'restaurare-muzeala', 'pierdere-valoare-arta'],
    illustrativeCost: 'Cost restaurare + depreciere artistică: 80.000 – 180.000 RON',
    withoutInsurance: {
      title: 'Fără poliță specializată de Artă (Fine Art)',
      statusLabel: 'Firma de mutări oferă o despăgubire derizorie la kilogram',
      financialImpact: 'Pierdere masivă de zeci de mii de euro din valoarea operei',
      points: [
        'Contractele standard ale companiilor de mutări sau transportatori mărfuri limitează răspunderea la 10-20 EUR per kilogram de marfă (tabloul are 3 kg = 60 EUR despăgubire!).',
        'Polița standard de locuință nu acoperă daunele produse operelor de artă în timpul transportului în afara casei.',
        'Costul unui restaurator atestat de Ministerul Culturii (mii de euro) se plătește din buzunar.'
      ],
      summary: 'Rămâi cu o capodoperă mutilată și o pierdere ireversibilă de capital artistic.'
    },
    withInsurance: {
      title: 'Cu poliță dedicată Fine Art & Collectibles (Clauza All-Risks de Tranzit și Depreciere)',
      statusLabel: 'Acoperire completă a restaurării + compensarea pierderii de valoare',
      financialImpact: 'Plată integrală aprobată pe baza evaluării de specialitate',
      points: [
        'Polița Fine Art acoperă daunele accidentale produse pe durata transportului („nail-to-nail”).',
        'Asigurătorul plătește onorariul laboratorului de restaurare de artă acreditat.',
        'CRITIC: Polița plătește diferența de depreciere comercială (Deficit in Value) stabilită de experți autorizați între valoarea inițială și valoarea de după restaurare.'
      ],
      summary: 'Integritatea financiară a colecției tale este prezervată impecabil.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de Depreciere Artistică (Loss in Value)', detail: 'Asigură-te că polița nu plătește doar cârpeala pânzei, ci recunoaște scăderea valorii de piață a operei restaurate.' },
        { label: 'Ambalatori specializați', detail: 'Verifică dacă asigurătorul impune ca ambalarea și manipularea să fie realizate exclusiv de firme specializate în transport de artă (Art Handlers).' }
      ]
    },
    immediateSteps: [
      'Nu atinge pânza și nu încerca să lipești sau să fixezi marginile rupturii cu bandă adezivă.',
      'Fotografiază detaliat ambalajul exterior și dauna sub iluminare adecvată.',
      'Depune lucrarea într-un mediu cu temperatură și umiditate controlate.',
      'Notifică departamentul Fine Art al companiei de asigurări pentru desemnarea unui expert evaluator.'
    ],
    usefulDocuments: [
      'Certificatul de autenticitate și raportul de condiție inițial (Condition Report)',
      'Fotografii detaliate ale daunelor',
      'Polița de asigurare Fine Art'
    ],
    advisorQuestions: [
      'Cum se stabilește procentul de depreciere a valorii unui tablou după restaurare?',
      'Acoperă polița transportul între diferite reședințe sau doar expozițiile publice?'
    ],
    disclaimer: 'Polițele Fine Art necesită documentație de proveniență și expertiză de specialitate înainte de emitere.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'luxury-yacht-ambarcatiune-avarie-furtuna-marina',
    slug: 'yacht-ambarcatiune-avarie-furtuna-marina',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Yachtul privat rupe parâmele în marina din Grecia în timpul unei furtuni violente',
    mainQuestion: 'Ce se întâmplă dacă o ambarcațiune de lux se izbește de chei și avariază alte două veliere?',
    shortDescription: 'Valurile smulg tacheții de acostare, provocând spargerea corpului din fibră de sticlă și daune altor ambarcațiuni.',
    situation: 'Yachtul tău cu motor de 14 metri este acostat într-o marină privată în Grecia. O furtună mediteraneană (Medicane) aduce vânturi de peste 60 de noduri și valuri care pătrund în bazinul portuar. Parâmele de pupa se rup, iar ambarcațiunea este aruncată violent în pontonul din beton și în două veliere scumpe ancorate alături. Corpul din fibră este găurit deasupra liniei de plutire, elicele sunt îndoite, iar prova celuilalt velier este distrusă.',
    heroImage: '/images/scenarios/yacht-storm.jpg',
    imageCaption: 'Asigurarea navală de agrement (Yacht Hull & Machinery + P&I) acoperă atât avariile la propriul corp de navă, cât și răspunderea maritimă față de terți.',
    severityLabel: 'Risc Naval de Sute de Mii de Euro',
    featured: true,
    tags: ['yacht-avarie', 'furtuna-marina', 'hull-machinery', 'raspundere-maritima', 'asigurare-ambarcatiune'],
    illustrativeCost: 'Avarii proprii + daune aduse altor ambarcațiuni: 200.000 – 600.000 RON',
    withoutInsurance: {
      title: 'Doar asigurarea minimă obligatorie de răspundere maritimă a marinei',
      statusLabel: 'Reparația propriei ambarcațiuni se plătește integral din buzunar',
      financialImpact: 'Sute de mii de lei pagubă directă la corpul de navă și motoare',
      points: [
        'Polița de răspundere civilă de bază (Third Party Liability) acoperă doar daunele aduse celorlalte veliere, NU și reparația propriului yacht.',
        'Costul ridicării pe macara, al reparației structurale a fibrei de sticlă și al înlocuirii axelor port-elice este uriaș.',
        'Dacă marina constată că parâmele tale erau uzate sau subdimensionate, poate refuza orice responsabilitate.'
      ],
      summary: 'Rămâi cu o ambarcațiune grav avariată și cu devize uriașe de șantier naval.'
    },
    withInsurance: {
      title: 'Cu poliță completă Yacht All-Risks (Hull & Machinery + P&I / Protection and Indemnity)',
      statusLabel: 'Despăgubire integrală pentru corpul de navă și răspunderea față de terți',
      financialImpact: 'Plata doar a franșizei contractuale maritime agregate',
      points: [
        'Secțiunea Hull & Machinery acoperă integral reparațiile la corpul ambarcațiunii, motoare, generatoare și navigație electronică.',
        'Secțiunea P&I decontează toate reparațiile necesare la velierele avariate și la pontonul marinei.',
        'Sunt acoperite costurile de ranfluare, salvare maritimă și tractare de urgență la șantierul naval.'
      ],
      summary: 'Tot impactul naval este preluat de poliță, păstrând investiția ta nautică în deplină siguranță.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Limite de navigație (Cruising Limits)', detail: 'Asigură-te că polița include zona geografică în care navighezi (ex. Marea Egee, Mediterana de Est) și perioada de iernare (In-commission vs Laid-up).' },
        { label: 'Salvarea maritimă (Salvage Charges)', detail: 'Verifică dacă asigurarea acoperă remunerația de asistență și salvare conform convențiilor internaționale maritime.' }
      ]
    },
    immediateSteps: [
      'Contactează imediat administrația portuară (Capitainerie / Marina Office) și securizează ambarcațiunea cu parâme suplimentare dacă furtuna a trecut.',
      'Fotografiază amănunțit punctele de impact cu pontonul și cu celelalte veliere.',
      'Cere Căpităniei eliberarea raportului oficial de eveniment marin.',
      'Avizează asigurătorul maritim pentru trimiterea unui inspector de specialitate (Marine Surveyor).'
    ],
    usefulDocuments: [
      'Raportul de incident emis de Căpitănia Portului / Marina',
      'Certificatul de ambarcațiune de agrement și carnetul de marinar',
      'Polița de asigurare maritimă Yacht All-Risks'
    ],
    advisorQuestions: [
      'Ce cerințe de ancorare și legare la chei prevede contractul meu pe perioada iernării?',
      'Care este franșiza contractuală pentru daune produse de furtuni violente în port?'
    ],
    disclaimer: 'Asigurarea maritimă este guvernată de regulile internaționale de drept maritim și impune menținerea navei în stare de navigabilitate.',
    lastReviewed: 'Octombrie 2026'
  }
];

save('luxury.ts', 'luxuryScenarios', luxuryScenarios);

// =========================================================================
// 3. PROPRIETARI, CHIRIAȘI & INVESTITORI (10 scenarii)
// =========================================================================
const proprietariScenarios = [
  {
    id: 'proprietari-chirias-distruge-apartament-fuge',
    slug: 'chirias-distruge-apartament-fuge',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Chiriașul pleacă pe neașteptate lăsând apartamentul devastat și facturi neachitate',
    mainQuestion: 'Ce faci dacă garanția de o lună nu acoperă nici 10% din distrugerile lăsate în urmă de chiriaș?',
    shortDescription: 'Mobilier zgâriat, pereți desenați, electrocasnice arse și cheltuieli de întreținere neplătite de 6 luni.',
    situation: 'Ai investit într-un apartament cu 2 camere pentru închiriere pe termen lung, mobilat modern. Chiriașul încetează să mai răspundă la telefon. Când mergi să verifici apartamentul, găsești ușa încuiată cu cheia lăsată pe masă. Interiorul este ruinat: canapeaua este ruptă, parchetul este pătat și umflat, plita prin inducție este spartă, iar la asociație există restanțe de 4.500 RON. Garanția de 400 EUR este complet insuficientă în fața pagubelor de peste 18.000 RON.',
    heroImage: '/images/scenarios/tenant-damage.jpg',
    imageCaption: 'Asigurarea pentru proprietari care închiriază protejează investițiile imobiliare împotriva actelor de vandalism ale chiriașilor și a neplății chiriei.',
    severityLabel: 'Risc Financiar pentru Investiția Imobiliară',
    featured: true,
    tags: ['proprietar-chirias', 'daune-chirias', 'garantie-insuficienta', 'asigurare-proprietari', 'vandalism-chirias'],
    illustrativeCost: 'Cost renovare + înlocuire mobilier + datorii: 15.000 – 35.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare dedicată pentru proprietari de locuințe închiriate (Landlord Insurance)',
      statusLabel: 'Proprietarul suportă toate reparațiile din buzunar',
      financialImpact: 'Pierdere de mii de euro și blocarea veniturilor din chirie pe 2 luni',
      points: [
        'Garanția de o lună acoperă cel mult o zugrăveală parțială.',
        'Acționarea în instanță a unui fost chiriaș fără venituri oficiale este lungă, costisitoare și fără garanții reale de recuperare silită.',
        'Apartamentul rămâne neînchiriat pe perioada renovărilor, adâncind pierderea financiară.'
      ],
      summary: 'Randamentul investiției imobiliare pe 2 ani este complet șters de daunele lăsate de chiriaș.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare pentru Proprietari de Locuințe Închiriate (Landlord Cover)',
      statusLabel: 'Despăgubire integrală a distrugerilor și recuperarea chiriei neîncasate',
      financialImpact: 'Renovare completă acoperită + compensarea pierderii de chirie',
      points: [
        'Polița acoperă daunele malițioase (vandalism) și accidentale provocate de chiriași mobilierului și finisajelor.',
        'Sunt decontate electrocasnicele distruse și manopera zugravilor.',
        'Clauza de pierdere de chirie compensează venitul lunar pe durata în care apartamentul este renovat și nu poate fi locuit.'
      ],
      summary: 'Investiția ta imobiliară este protejată, iar veniturile pasive rămân sigure și predictibile.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Contractul legal de închiriere', detail: 'Asigurătorul cere ca închirierea să fie realizată pe baza unui contract scris și înregistrat fiscal (ANAF).' },
        { label: 'Procesul-verbal de predare-primire cu inventar foto', detail: 'Dovadă esențială: lista de inventar a mobilierului semnată la intrarea chiriașului în spațiu.' }
      ]
    },
    immediateSteps: [
      'Nu arunca bunurile deteriorate înainte de inspecția inspectorului de daune.',
      'Fotografiază și filmează amănunțit fiecare cameră, defectele aparatelor și contoarele.',
      'Obține de la asociația de proprietari adeverința cu datoriile la zi la întreținere.',
      'Avizează dosarul la asigurător transmițând contractul de închiriere și pozele inițiale.'
    ],
    usefulDocuments: [
      'Contractul de închiriere semnat și dovada înregistrării ANAF',
      'Procesul-verbal inițial de predare-primire cu inventarul foto',
      'Polița de locuință cu clauza de închiriere (Landlord) bifată'
    ],
    advisorQuestions: [
      'Include polița mea clauza de protecție împotriva distrugerilor provocate cu intenție de chiriași?',
      'Ce sumă pot primi pentru acoperirea chiriei pierdute pe perioada reparațiilor?'
    ],
    disclaimer: 'Asigurarea pentru proprietari este condiționată de existența unei forme legale de contract de locațiune.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'proprietari-airbnb-daune-oaspeti-regim-hotelier',
    slug: 'airbnb-daune-oaspeti-regim-hotelier',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Oaspeți de pe Airbnb organizează o petrecere clandestină și distrug apartamentul',
    mainQuestion: 'Ce se întâmplă dacă platforma de rezervare refuză compensarea completă a daunelor provocate de turiști?',
    shortDescription: 'O noapte de petrecere ilegală se soldează cu uși sparte, pereți afumați și plângeri penale de la vecini.',
    situation: 'Închiriezi un studio în regim hotelier prin Airbnb sau Booking. Oaspetele rezervă pentru 2 persoane, dar aduce 15 oameni pentru o petrecere clandestină cu alcool și substanțe interzise. Dimineața, vecinii cheamă poliția pentru tulburarea liniștii. Ușa de la intrare a fost forțată, parchetul este ars cu mucuri de țigară, chiuveta din baie este smulsă din perete, iar televizorul lipsește. Cererea de despăgubire depusă la suportul platformei online este amânată și respinsă parțial.',
    heroImage: '/images/scenarios/short-term-rental.jpg',
    imageCaption: 'Închirierea în regim hotelier de scurtă durată este considerată activitate comercială și este exclusă din polițele standard de locuință dacă nu există clauză specifică.',
    severityLabel: 'Risc Financiar Comercial și Relație cu Asociația',
    featured: true,
    tags: ['airbnb-daune', 'regim-hotelier', 'petrecere-ilegala', 'aircover-refuz', 'asigurare-short-term-rental'],
    illustrativeCost: 'Pagube totale reparații + curățenie extremă: 15.000 – 40.000 RON',
    withoutInsurance: {
      title: 'Doar asigurarea standard de locuință (Fără clauză de regim hotelier)',
      statusLabel: 'Refuz total de plată din partea asigurătorului tradițional',
      financialImpact: 'Plată integrală a reparațiilor din veniturile proprietarului',
      points: [
        'ATENȚIE: Polițele obișnuite de locuință exclud complet spațiile folosite în scop comercial sau de cazare turistică.',
        'Programele automate de protecție ale platformelor (ex. AirCover) au proceduri birocratice greoaie și resping frecvent dosarele dacă nu ai chitanțe originale pentru fiecare obiect.',
        'Proprietarul rămâne cu apartamentul blocat și riscă amenzi mari de la asociația de proprietari.'
      ],
      summary: 'Închirierea pe Airbnb fără poliță dedicată de scurtă durată te lasă complet neacoperit la daune mari.'
    },
    withInsurance: {
      title: 'Cu poliță dedicată de Asigurare pentru Închirieri în Regim Hotelier (Short-Term Rental Cover)',
      statusLabel: 'Despăgubire rapidă pe poliță privată independentă de platformă',
      financialImpact: 'Costuri de renovare, mobilier și igienizare acoperite 100%',
      points: [
        'Polița recunoaște expres activitatea de cazare turistică pe termen scurt.',
        'Sunt decontate reparațiile la instalații, schimbarea ușilor și curățenia profesională extremă.',
        'Include răspundere civilă față de vecini dacă apa sau zgomotul au afectat apartamentele din jur.'
      ],
      summary: 'Afacerea ta de regim hotelier rulează în siguranță, fără a depinde de capriciile suportului clienți al platformelor.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția utilizării spațiului', detail: 'Asigură-te că este bifată opțiunea „Închiriere de scurtă durată / Regim hotelier / Airbnb”.' },
        { label: 'Răspunderea față de asociația de locatari', detail: 'Verifică dacă sunt acoperite daunele aduse spațiilor comune ale blocului (lift, casa scării) de către oaspeți.' }
      ]
    },
    immediateSteps: [
      'Mergi imediat la fața locului și solicită intervenția Poliției dacă s-au comis fapte de furt sau distrugere.',
      'Fotografiază și filmează amănunțit fiecare detaliu al degradărilor.',
      'Deschide incidentul simultan în platforma de rezervare și la compania ta de asigurări.',
      'Nu permite intrarea unor noi oaspeți înainte de constatarea fizică a pagubelor.'
    ],
    usefulDocuments: [
      'Confirmarea rezervării din platforma online (cu datele de identificare ale oaspetelui)',
      'Procesul-verbal emis de Poliție în caz de furt/distrugere',
      'Polița de asigurare cu clauză de regim hotelier'
    ],
    advisorQuestions: [
      'Este activitatea mea de Airbnb acoperită în contractul de asigurare de locuință?',
      'Ce procedură se aplică dacă daunele produse de oaspeți afectează și apartamentul vecinului de jos?'
    ],
    disclaimer: 'Cazarea turistică presupune respectarea normelor legale de autorizare a activității și declararea oaspeților conform legii.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'proprietari-imobil-vacant-spargere-inghet',
    slug: 'imobil-vacant-spargere-inghet',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Proprietate nelocuită timp de 4 luni: țeavă spartă de ger și efracție',
    mainQuestion: 'De ce refuză asigurătorii despăgubirea dacă o casă sau un apartament stă gol mai mult de 30-60 de zile?',
    shortDescription: 'Clauza de neocupare (Unoccupancy Clause) anulează acoperirea dacă proprietarul nu a notificat absența îndelungată.',
    situation: 'Ai cumpărat o casă sau un apartament ca investiție și îl lași nelocuit pe timpul iernii în așteptarea unui chiriaș potrivit. Nu oprești alimentarea generală cu apă și lași căldura pe minim. În timpul unui ger de -15°C, centrala intră în avarie, apa îngheață în calorifere și conductele plesnesc. Câteva săptămâni mai târziu, hoții observă casa nelocuită, forțează ușa din spate și fură centrala termică și cablurile de cupru. Asigurătorul respinge dosarul invocând clauza de nelocuire mai mare de 30 de zile.',
    heroImage: '/images/scenarios/vacant-property.jpg',
    imageCaption: 'Polițele standard de locuință suspendă automat acoperirea pentru riscuri de apă de conductă și furt dacă imobilul rămâne nelocuit peste 30 – 60 de zile consecutive.',
    severityLabel: 'Risc Major de Excludere Contractuală',
    featured: true,
    tags: ['imobil-nelocuit', 'clauza-neocupare', 'teava-inghetata', 'furt-cupru', 'proprietate-vacanta'],
    illustrativeCost: 'Pagube din îngheț + efracție: 40.000 – 120.000 RON',
    withoutInsurance: {
      title: 'Poliță standard fără notificare de nelocuire',
      statusLabel: 'Refuz legitim de despăgubire din partea asigurătorului',
      financialImpact: 'Pierdere de zeci de mii de lei suportată integral de proprietar',
      points: [
        'Aproape toate polițele de casă conțin clauza: „Dacă imobilul rămâne neocupat mai mult de 30 (sau 60) de zile, riscurile de furt, vandalism și avarii de apă sunt excluse”.',
        'Asigurătorul verifică istoricul facturilor de utilități (consum zero de apă și electricitate pe 3 luni) și demonstrează starea de abandon.',
        'Proprietarul trebuie să refacă instalația termică și finisajele exclusiv din fonduri proprii.'
      ],
      summary: 'Clauza de nelocuire este una dintre cele mai frecvente cauze de respingere a dosarelor de daună la locuințe.'
    },
    withInsurance: {
      title: 'Cu poliță cu Clauză de Locuință Nelocuită / Casă de Vacanță (Unoccupied Property Cover)',
      statusLabel: 'Acoperire validă confirmată pe toată durata absenței',
      financialImpact: 'Despăgubire integrală a instalației și finisajelor distruse',
      points: [
        'Proprietarul a declarat contractual starea de nelocuire și a plătit o primă adaptată riscului crescut.',
        'Condițiile de golire a instalațiilor sau menținere a temperaturii de gardă (anti-îngheț la minim 10°C) au fost documentate.',
        'Asigurătorul compensează atât avaria tehnică a conductelor, cât și daunele produse de efracție.'
      ],
      summary: 'Investiția ta imobiliară rămâne protejată chiar și atunci când nu ai încă un chiriaș.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Termenul maxim de nelocuire', detail: 'Verifică în condițiile generale câte zile consecutive poate sta casa nelocuită (30, 45 sau 60 de zile).' },
        { label: 'Măsurile obligatorii pe timp de iarnă', detail: 'Polițele impun golirea completă a instalației de apă sau menținerea centralei pornite pe regim anti-îngheț dacă imobilul este vacant între 1 noiembrie și 31 martie.' }
      ]
    },
    immediateSteps: [
      'Oprește imediat robinetul general de alimentare cu apă de la căminul de branșament.',
      'Contactează Poliția pentru constatarea efracției și a furtului echipamentelor.',
      'Fotografiază caloriferele crăpate, centrala distrusă și urmele de forțare ale ușii.',
      'Verifică contractul de asigurare înainte de a da declarații scrise privind durata exactă de neocupare.'
    ],
    usefulDocuments: [
      'Procesul-verbal de cercetare la fața locului emis de Poliție',
      'Facturile de utilități (gaze, electricitate) din ultimele luni',
      'Polița de asigurare facultativă de locuință'
    ],
    advisorQuestions: [
      'Cum procedez dacă apartamentul meu rămâne nelocuit 3-4 luni între doi chiriași?',
      'Ce măsuri tehnice trebuie să iau pe timp de iarnă pentru a nu pierde valabilitatea asigurării?'
    ],
    disclaimer: 'Respectarea clauzei de neocupare este esențială; nedeclararea perioadelor lungi de absență atrage pierderea acoperirii conform contractului.',
    lastReviewed: 'Octombrie 2026'
  }
];

save('proprietari.ts', 'proprietariScenarios', proprietariScenarios);

// =========================================================================
// 4. FAMILIE, LIFESTYLE & SITUAȚII NEOBIȘNUITE (10 scenarii)
// =========================================================================
const familieScenarios = [
  {
    id: 'familie-valiza-deteriorata-aeroport-transport',
    slug: 'valiza-deteriorata-aeroport-transport',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'Geamantan de firmă de 1.000 EUR rupt și deformat pe banda de bagaje',
    mainQuestion: 'Ce despăgubire primești de la compania aeriană dacă valiza ta premium este distrusă la descărcare?',
    shortDescription: 'O carcasă din policarbonat sau aluminiu Rimowa fisurată și roțile smulse de manipularea dură.',
    situation: 'Călătorești cu avionul folosind o valiză scumpă din policarbonat sau aluminiu evaluată la 4.500 RON. Când geamantanul iese pe banda de bagaje la sosire, constați că o roată a fost smulsă din șasiu, carcasa este crăpată adânc pe 20 cm, iar fermoarul este forțat. Valiza nu mai poate fi folosită sau reparată. Compania aeriană oferă un voucher de 50 EUR sau o valiză promoțională ieftină din poliester fără valoare de brand.',
    heroImage: '/images/scenarios/lost-luggage.jpg',
    imageCaption: 'Deteriorarea fizică a bagajelor premium este acoperită prin clauze specifice de bagaje în polițele extinse de călătorie.',
    severityLabel: 'Daună Materială Personală',
    featured: false,
    tags: ['valiza-deteriorata', 'rimowa-avarie', 'banda-bagaje', 'lost-found', 'asigurare-calatorie-bagaj'],
    illustrativeCost: 'Valoare valiză premium: 2.500 – 6.000 RON',
    withoutInsurance: {
      title: 'Doar reclamația la compania aeriană la ghișeu',
      statusLabel: 'Oferte derizorii de înlocuire cu produse low-cost',
      financialImpact: 'Pierdere de mii de lei din valoarea bagajului de calitate',
      points: [
        'Companiile aeriene susțin adesea că uzura exterioară sau mânerele rupte reprezintă uzură normală de manipulare.',
        'Despăgubirea bănească acordată de companii pentru valize vechi de peste un an este diminuată masiv prin cote de amortizare.',
        'Trebuie să cumperi o nouă valiză din banii personali pentru a-ți continua călătoria.'
      ],
      summary: 'Investiția într-o valiză de calitate superioară este pierdută în fața procedurilor aeriene standard.'
    },
    withInsurance: {
      title: 'Cu poliță de călătorie cu clauză de deteriorare bagaje',
      statusLabel: 'Despăgubire la valoarea reală de achiziție/înlocuire',
      financialImpact: 'Recuperezi contravaloarea valizei pe baza formularului PIR',
      points: [
        'Asigurătorul preia diferența neacoperită de linia aeriană până la valoarea reală din factura de cumpărare a valizei.',
        'Despăgubirea este virată direct în contul tău bancar fără să fii obligat să accepți un produs ieftin de la ghișeu.',
        'Procedura este simplă și rapidă în baza fotografiilor făcute direct la aeroport.'
      ],
      summary: 'Îți cumperi o nouă valiză din aceeași clasă premium pe cheltuiala asigurării.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Formularul PIR (Damage Report)', detail: 'Condiție eliminatorie: trebuie să completezi raportul de deteriorare la biroul din aeroport ÎNAINTE de a părăsi zona benzilor de bagaje.' },
        { label: 'Sublimita pentru bagajul în sine', detail: 'Verifică dacă suma asigurată de bagaje acoperă atât conținutul, cât și valoarea fizică a geamantanului.' }
      ]
    },
    immediateSteps: [
      'Nu părăsi zona de recuperare a bagajelor fără a merge la ghișeul Baggage Claim.',
      'Solicită agentului întocmirea formularului PIR pentru bagaj deteriorat (Damaged Baggage Report).',
      'Fotografiază eticheta de bagaj (baggage tag) și toate fisurile valizei direct pe căruciorul aeroportului.',
      'Transmite documentele la asigurătorul tău de călătorie.'
    ],
    usefulDocuments: [
      'Raportul PIR emis la aeroport',
      'Talonul de bagaj atașat pe biletul de avion',
      'Factura inițială de cumpărare a valizei'
    ],
    advisorQuestions: [
      'Ce sumă maximă decontează asigurătorul pentru o valiză deteriorată ireversibil?',
      'Pot achiziționa o nouă valiză imediat la destinație și trimite factura spre decontare?'
    ],
    disclaimer: 'Constatarea deteriorării bagajului trebuie făcută obligatoriu înainte de ieșirea din zona vamală a aeroportului.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'familie-copac-curte-distruge-foisor-gard-furtuna',
    slug: 'copac-curte-distruge-foisor-gard-furtuna',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'Un nuc secular din curte se prăbușește peste foișor și mașina parcată',
    mainQuestion: 'Ce asigurare plătește tăierea copacului uriaș, refacerea grădinii și mașina strivită?',
    shortDescription: 'Vântul puternic smulge din rădăcini un arbore de 15 metri care strivește acoperișul foișorului și capota.',
    situation: 'În curtea casei tale se află un nuc mare cu coroană bogată. În timpul unei furtuni de cod portocaliu cu vânt de peste 85 km/h, pământul îmbibat de apă cedează, iar arborele este smuls din rădăcini. Trunchiul gros de 80 cm se prăbușește peste foișorul din curte, distrugând structura din lemn și grătarul de cărămidă, iar coroana grea strivește pavilionul mașinii parcate pe aleea de acces.',
    heroImage: '/images/scenarios/garden-tree-fall.jpg',
    imageCaption: 'Căderea arborilor pe proprietate privată ridică necesitatea combinării poliței facultative de locuință cu polița CASCO a autovehiculului.',
    severityLabel: 'Daună Mixtă Casă și Auto',
    featured: true,
    tags: ['copac-cazut-curte', 'foisor-distrus', 'casco-copac', 'asigurare-gradina', 'degajare-arbore'],
    illustrativeCost: 'Cost tăiere arbore + refacere foișor + mașină: 35.000 – 85.000 RON',
    withoutInsurance: {
      title: 'Fără polițe facultative corelate (Doar PAD obligatoriu)',
      statusLabel: 'Toate cheltuielile suportate integral de familie',
      financialImpact: 'Zeci de mii de lei cheltuiți din economii',
      points: [
        'Polița PAD obligatorie NU acoperă anexele gospodărești (foișor, gard) și nici căderea de arbori din motive de furtună.',
        'Costul unei echipe de alpiniști utilitari și macarale pentru debitarea și transportul unui arbore masiv depășește 3.000 – 5.000 RON.',
        'Mașina strivită fără CASCO rămâne o pierdere personală totală.'
      ],
      summary: 'O noapte de furtună lasă în urmă o curte ruinată și cheltuieli uriașe de refacere.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Grădină și Anexe) + CASCO Auto',
      statusLabel: 'Decontare integrală a operațiunilor de degajare și reconstrucție',
      financialImpact: 'Curte curățată și foișor reconstruit pe cheltuiala asigurătorilor',
      points: [
        'Polița de locuință decontează costul intervenției de tăiere, evacuare a lemnului și refacere a foișorului.',
        'Sunt acoperite refacerea pavajului, a gazonului și a împrejmuirilor deteriorate.',
        'Polița CASCO preia reparația mașinii pe riscul standard de „Cădere de corpuri / Fenomene naturale”.'
      ],
      summary: 'Tot efortul logistic greu și costurile financiare sunt preluate eficient prin cele două polițe.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de anexe și amenajări exterioare', detail: 'Asigură-te că foișorul, magaziile și mobilierul de grădină sunt cuprinse explicit în suma asigurată a locuinței.' },
        { label: 'Costurile de curățare și degajare (Debris Removal)', detail: 'Verifică dacă asigurătorul plătește separat manopera de debitare și transport a trunchiului căzut.' }
      ]
    },
    immediateSteps: [
      'Nu te apropia de arbore dacă acesta a atins fire electrice de joasă sau medie tensiune (apelează 112 și distribuitorul de energie).',
      'Fotografiază detaliat rădăcina smulsă, foișorul strivit și mașina înainte de orice intervenție.',
      'Apelează serviciul de asistență de urgență al poliței de locuință pentru trimiterea unei echipe de intervenție.',
      'Avizează dosarul de daună la locuință și la CASCO.'
    ],
    usefulDocuments: [
      'Polița facultativă de locuință și polița CASCO',
      'Fotografii martor de la fața locului din mai multe unghiuri',
      'Facturile de debitare și transport al materialului lemnos'
    ],
    advisorQuestions: [
      'Sunt acoperite cheltuielile pentru închirierea macaralei de degajare a arborelui căzut?',
      'Care este limita de despăgubire pentru amenajările peisagistice și foișoarele de grădină?'
    ],
    disclaimer: 'Proprietarii au obligația de a toaleta arborii uscați sau periculoși pentru a preveni prăbușirea lor la vânt moderat.',
    lastReviewed: 'Octombrie 2026'
  }
];

save('familie.ts', 'familieScenarios', familieScenarios);
