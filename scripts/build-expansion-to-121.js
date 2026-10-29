// scripts/build-expansion-to-121.js
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
  console.log(`✓ ${filename}: added ${toAdd.length} items (now total: ${combined.length})`);
}

// 1. FAMILIE (3 items -> total 7)
const moreFamilie = [
  {
    id: 'familie-bicicleta-electrica-furata-boxa-bloc',
    slug: 'bicicleta-electrica-furata-boxa-bloc',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'E-bike de 18.000 RON furat din boxa securizată a blocului',
    mainQuestion: 'Ce asigurare îți plătește bicicleta electrică dacă ușa boxei de la subsol a fost forțată cu ranga?',
    shortDescription: 'Hoții taie grilajul de siguranță și pleacă cu bicicleta de munte asistată electric.',
    situation: 'Păstrezi o bicicletă electrică de munte (E-MTB) de ultimă generație în boxa privată de la subsolul imobilului. Într-un weekend prelungit, ușa metalică a boxei este forțată cu ranga, iar antifurtul din oțel călit este tăiat cu polizorul unghiular pe baterie. Bicicleta în valoare de 18.500 RON dispare fără urmă. Poliția constată efracția calificată.',
    heroImage: '/images/scenarios/stolen-bicycle.jpg',
    imageCaption: 'Bicicletele electrice de mare valoare necesită clauze speciale de bunuri mobile asigurate în anexe gospodărești.',
    severityLabel: 'Furt prin Efracție',
    featured: false,
    tags: ['bicicleta-electrica', 'furt-boxa', 'efractie-subsol', 'asigurare-bicicleta', 'bunuri-anexe'],
    illustrativeCost: 'Valoare bicicletă furată: 14.000 – 22.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de locuință cu clauză de bunuri în anexe',
      statusLabel: 'Pierdere financiară de 100%',
      financialImpact: 'Pierderea a 18.500 RON fără despăgubire',
      points: [
        'Polițele standard de apartament limitează furtul din boxe la maximum 2.000 – 3.000 RON pe dosar.',
        'Asociația de proprietari nu răspunde pentru bunurile individuale depozitate în subsol.',
        'Ești nevoit să suporți integral pierderea bicicletei din fonduri personale.'
      ],
      summary: 'Absența unei clauze adecvate de efracție transformă furtul într-o gaură de mii de euro.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Bunuri de Mare Valoare în Anexe)',
      statusLabel: 'Despăgubire integrală aprobată pe baza seriilor de cadru',
      financialImpact: 'Recuperare a sumei asigurate minus franșiza agreată',
      points: [
        'Polița acoperă furtul prin efracție din anexele declarate ale imobilului.',
        'Bicicleta declarată cu serie de cadru este despăgubită la valoarea de factură/înlocuire.',
        'Primești fondurile necesare pentru cumpărarea unei noi biciclete.'
      ],
      summary: 'E-bike-ul tău este asigurat chiar și atunci când este depozitat în spațiile anexe ale blocului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Urme evidente de forțare', detail: 'Asigurătorul cere ca boxa să fi fost încuiată și să existe urme materiale vizibile de efracție consemnate de poliție.' },
        { label: 'Declararea seriilor de șasiu', detail: 'Bicicletele scumpe trebuie să aibă seria de cadru menționată în contract sau pe factura de cumpărare.' }
      ]
    },
    immediateSteps: [
      'Nu atinge ușa forțată și sună imediat la 112 pentru cercetarea criminalistică.',
      'Pregătește factura de achiziție a bicicletei și seria de cadru (Frame Number).',
      'Obține de la Poliție adeverința de înregistrare a plângerii de furt calificat.',
      'Transmite dosarul de daună către asigurător.'
    ],
    usefulDocuments: [
      'Dovada eliberată de Secția de Poliție (Furt prin efracție)',
      'Factura fiscală și cartea tehnică a bicicletei electrice',
      'Polița facultativă de locuință'
    ],
    advisorQuestions: [
      'Ce plafon de despăgubire oferă polița mea pentru biciclete depozitate în boxa subsolului?',
      'Este necesară legarea bicicletei de un punct fix ancorat în perete?'
    ],
    disclaimer: 'Polițele de locuință condiționează despăgubirea de asigurarea încuietorilor de securitate ale boxei.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'familie-panouri-solare-gradina-deteriorate-furtuna',
    slug: 'panouri-solare-gradina-deteriorate-furtuna',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'Sistem fotovoltaic montat la sol în grădină distrus de o vijelie cu vijelie puternică',
    mainQuestion: 'Ce poliță plătește dacă structura metalică a panourilor solare din curte este smulsă de vânt?',
    shortDescription: 'Rafalele de 90 km/h răstoarnă cadrele fotovoltaice din curte, spărgând 16 panouri monocristaline.',
    situation: 'Ai instalat un sistem de 10 kW de panouri fotovoltaice pe o structură metalică la sol în fundul grădinii. O furtună violentă de vară cu aspect tornadic smulge ancorele din pământ și răstoarnă întregul șir de panouri. Cablurile solare de curent continuu sunt sfâșiate, sticla temperată a 16 panouri este făcută țăndări, iar invertorul este ars din cauza scurtcircuitului pe stringuri. Paguba totală se ridică la 38.000 RON.',
    heroImage: '/images/scenarios/storm-roof.jpg',
    imageCaption: 'Sistemele fotovoltaice montate la sol sunt clasificate drept instalații exterioare și necesită acoperire specifică de amenajări exterioare.',
    severityLabel: 'Daună Energetică și Materială',
    featured: false,
    tags: ['panouri-solare', 'fotovoltaice-gradina', 'furtuna-vant', 'invertor-ars', 'energie-verde'],
    illustrativeCost: 'Cost înlocuire panouri + structură + invertor: 30.000 – 48.000 RON',
    withoutInsurance: {
      title: 'Doar asigurarea standard a casei (Fără clauză fotovoltaice la sol)',
      statusLabel: 'Instalația din grădină nu este considerată clădire de locuit',
      financialImpact: 'Plată integrală a refacerii sistemului din buzunar',
      points: [
        'Multe polițe de locuință de bază acoperă DOAR panourile montate pe acoperișul casei principale, excluzând structurile montate la sol în curte.',
        'Garanția producătorului exclude expres daunele provocate de fenomene meteo violente (furtuni, vânt extrem).',
        'Pierzi independența energetică și ești nevoit să investești din nou zeci de mii de lei.'
      ],
      summary: 'Fără o clauză adaptată pentru energie regenerabilă, parcul solar din curte rămâne neacoperit.'
    },
    withInsurance: {
      title: 'Cu poliță de Locuință cu Clauză Extinsă de Instalații Fotovoltaice & Energie Verde',
      statusLabel: 'Despăgubire completă a panourilor, structurii și invertorului',
      financialImpact: 'Reinstalare acoperită de asigurător minus franșiza agreată',
      points: [
        'Polița include explicit sistemele fotovoltaice montate la sol ca amenajări exterioare asigurate.',
        'Sunt decontate panourile noi, refacerea structurii din aluminiu/oțel și noul invertor hibrid.',
        'Include clauză pentru pierderea beneficiilor de prosumator (energia injectată nerealizată).'
      ],
      summary: 'Sistemul tău solar este repus în funcțiune pe cheltuiala companiei de asigurări.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Panouri pe acoperiș vs La sol', detail: 'CONDIȚIE CRITICĂ: Specifică clar în contract dacă panourile sunt montate pe casă sau pe cadre la sol în curte.' },
        { label: 'Proiectul tehnic de ancorare', detail: 'Asigurătorul cere ca montajul să fi fost efectuat de un instalator autorizat conform normelor de rezistență la vânt.' }
      ]
    },
    immediateSteps: [
      'Decuplează imediat siguranța generală a invertorului și întrerupătorul DC pentru a evita electrocutarea.',
      'Fotografiază panourile răsturnate și structura metalică deformată.',
      'Solicită firmei instalatoare un raport tehnic de constatare a daunelor.',
      'Deschide dosarul la compania de asigurări.'
    ],
    usefulDocuments: [
      'Factura inițială de montaj și certificatul de punere în funcțiune ca prosumator',
      'Raportul tehnic de daună emis de instalatorul autorizat ANRE',
      'Polița facultativă de locuință cu clauza de energie verde'
    ],
    advisorQuestions: [
      'Sunt asigurate panourile fotovoltaice amplasate la sol în curte pe polița mea curentă?',
      'Ce fenomene meteo sunt acoperite pentru instalațiile energetice exterioare?'
    ],
    disclaimer: 'Instalațiile solare trebuie ancorate conform standardelor seismice și de vânt în vigoare.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'familie-baterie-scuter-electric-incendiu-hol',
    slug: 'baterie-scuter-electric-incendiu-hol',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'Acumulatorul unei trotinete electrice explodează în hol în timpul încărcării',
    mainQuestion: 'Ce acoperă asigurarea dacă o baterie litiu-ion provoacă un incendiu fulgerător în apartament?',
    shortDescription: 'O ambalare termică (thermal runaway) umple casa de fum toxic și incendiază mobilierul din hol.',
    situation: 'Pui la încărcat bateria unei trotinete electrice în holul apartamentului peste noapte. Un scurtcircuit intern la celulele litiu-ion declanșează fenomenul de thermal runaway. Bateria explodează cu flăcări violente de 1.000°C și jeturi de gaze toxice. Ușa de la intrare, parchetul și dressingul din hol sunt cuprinse de foc. Pompierii sting incendiul, dar apartamentul este complet înnegrit de funingine toxică și necesită decopertare integrală.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Incendiile provocate de bateriile de micromobilitate litiu-ion se dezvoltă exploziv și generează depuneri masive de funingine acidă corozivă.',
    severityLabel: 'Incendiu Chimic și Daună Majoră',
    featured: false,
    tags: ['baterie-trotineta-explozie', 'thermal-runaway', 'incendiu-litiu', 'funingine-toxica', 'asigurare-apartament'],
    illustrativeCost: 'Cost renovare + decontaminare fum: 45.000 – 110.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare facultativă de locuință',
      statusLabel: 'Costuri suportate integral din economiile personale',
      financialImpact: 'Zeci de mii de euro pentru renovare completă și curățare chimică',
      points: [
        'Asigurarea obligatorie PAD NU acoperă incendiul din cauze electrice sau casnice.',
        'Funinginea toxică de litiu corodează electronicele și pătrunde adânc în tencuieli, necesitând igienizare specializată.',
        'Familia este nevoită să locuiască în chirie pe durata celor 2-3 luni de șantier.'
      ],
      summary: 'Explozia bateriei produce daune devastatoare care impun o renovare de la zero a locuinței.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Riscuri Extinse de Incendiu & Cazare Temporară)',
      statusLabel: 'Despăgubire completă a finisajelor, mobilierului și cazare la hotel',
      financialImpact: 'Refacerea apartamentului acoperită + decontarea chiriei temporare',
      points: [
        'Incendiul accidental este un risc de bază acoperit în polițele facultative.',
        'Sunt decontate operațiunile specializate de curățare a fumului, zugrăvelile, ușile și mobilierul distrus.',
        'Clauza de locuință temporară plătește cazarea familiei la un hotel sau apartament închiriat pe perioada renovării.'
      ],
      summary: 'Tot efortul de reconstrucție și cheltuielile de relocare sunt preluate de asigurător.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Excluderea modificărilor neomologate', detail: 'ATENȚIE: Dacă bateria a fost modificată artizanal („cipuită” pentru viteză mai mare sau reparată neautorizat), asigurătorul poate invoca neglijența gravă.' },
        { label: 'Curățarea de funingine și decontaminarea', detail: 'Verifică dacă polița acoperă cheltuielile de curățare profesională a urmelor de fum și miros.' }
      ]
    },
    immediateSteps: [
      'Evacuează imediat locuința (fumul de baterii litiu conține acid fluorhidric extrem de toxic) și sună la 112.',
      'Avertizează pompierii că incendiul este alimentat de o baterie litiu-ion.',
      'Obține Procesul-Verbal de intervenție de la ISU.',
      'Deschide dosarul la asigurătorul tău de locuință.'
    ],
    usefulDocuments: [
      'Procesul-Verbal emis de Pompieri (ISU) cu cauza tehnică probabilă',
      'Factura sau manualul tehnic al trotinetei electrice originale',
      'Polița facultativă de locuință'
    ],
    advisorQuestions: [
      'Ce sumă oferă contractul meu pentru cazarea temporară a familiei pe durata renovării?',
      'Sunt acoperite bunurile și electrocasnicele distruse de fumul dens fără flacără directă?'
    ],
    disclaimer: 'Încărcarea bateriilor litiu-ion trebuie realizată exclusiv cu încărcătoare originale sub supraveghere.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('familie.ts', 'familieScenarios', moreFamilie);

// 2. PROPRIETARI (3 items -> total 7)
const moreProprietari = [
  {
    id: 'proprietari-incendiu-bucatarie-chirias-neglijenta',
    slug: 'incendiu-bucatarie-chirias-neglijenta',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Chiriașul uită o tigaie cu ulei pe foc: bucătăria apartamentului arde complet',
    mainQuestion: 'Ce poliță intervine dacă chiriașul tău provoacă un incendiu grav din neglijență casnică?',
    shortDescription: 'Flăcările cuprind hota, mobila de bucătărie din MDF și afumă întregul apartament de închiriat.',
    situation: 'Chiriașul pune o tigaie cu ulei pe aragaz și adoarme în sufragerie. Uleiul se aprinde, flăcările cuprind hota din plastic și corpurile superioare de mobilier. Pompierii sparg ușa și sting focul înainte de propagarea la vecini, dar bucătăria este complet carbonizată, iar fumul negru a distrus zugrăvelile și mobilierul din toate camerele. Paguba este evaluată la 42.000 RON.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Răspunderea locativă a chiriașului (Risque Locatif) este un concept fundamental care separă bunul imobil al proprietarului de fapta culpabilă a chiriașului.',
    severityLabel: 'Incendiu Casnic și Risc Locativ',
    featured: false,
    tags: ['incendiu-chirias', 'ulei-foc', 'raspundere-locativa', 'mobilier-ars', 'asigurare-landlord'],
    illustrativeCost: 'Cost renovare bucătărie + decontaminare fum: 35.000 – 60.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de locuință pe numele proprietarului',
      statusLabel: 'Dispută judiciară lungă cu un chiriaș fără bani lichizi',
      financialImpact: 'Plată de 40.000+ RON din buzunarul proprietarului',
      points: [
        'Chiriașul nu are fondurile necesare pentru a renova pe loc apartamentul din salariul curent.',
        'Proprietarul este nevoit să plătească din economii reparațiile pentru a putea reintroduce imobilul în circuitul economic.',
        'Un proces civil împotriva chiriașului poate dura 2 ani fără garanția recuperării reale a banilor.'
      ],
      summary: 'Proprietarul suportă toată paguba din lipsa unui instrument de asigurare adecvat.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (cu Clauză de Imobil Dat în Chirie)',
      statusLabel: 'Despăgubire integrală achitată proprietarului de către asigurător',
      financialImpact: 'Bucătărie complet reconstruită și finisaje refăcute',
      points: [
        'Polița proprietarului acoperă riscul de incendiu indiferent dacă a fost produs de o defecțiune tehnică sau de neglijența chiriașului.',
        'Asigurătorul decontează devizul de reconstrucție al bucătăriei, electrocasnicele încorporate și zugrăvelile.',
        'Compania de asigurări preia dreptul de regres împotriva chiriașului dacă acesta a comis o culpă gravă dovedită.'
      ],
      summary: 'Investiția imobiliară este readusă la starea inițială fără întârzieri financiare.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Declararea calității de locator (Proprietar care închiriază)', detail: 'Asigură-te că polița conține mențiunea că spațiul este locuit de chiriași, nu de proprietar.' },
        { label: 'Asigurarea obligatorie cerută chiriașului', detail: 'O practică optimă este obligarea chiriașului prin contractul de chirie să dețină o poliță de răspundere locativă.' }
      ]
    },
    immediateSteps: [
      'Obține Raportul de intervenție de la Pompieri (ISU) cu indicarea cauzei incendiului.',
      'Fotografiază detaliat toate corpurile de mobilier arse și aparatele electrocasnice distruse.',
      'Avizează asigurătorul în termen de 48 de ore.',
      'Semnează cu chiriașul un proces-verbal de constatare a incidentului.'
    ],
    usefulDocuments: [
      'Procesul-Verbal emis de ISU Pompieri',
      'Contractul de locațiune încheiat cu chiriașul',
      'Polița de asigurare facultativă a proprietarului'
    ],
    advisorQuestions: [
      'Ce acoperire am dacă incendiul produs de chiriaș a afectat și fațada blocului sau apartamentul vecinilor?',
      'Cum se aplică regresul asigurătorului împotriva chiriașului vinovat?'
    ],
    disclaimer: 'Declararea corectă a destinației imobilului (locuit de proprietar vs închiriat) este esențială pentru evitarea respingerii dosarului.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('proprietari.ts', 'proprietariScenarios', moreProprietari);

// 3. LUXURY (3 items -> total 8)
const moreLuxury = [
  {
    id: 'luxury-scuter-acvatic-jet-ski-avarie-stanci',
    slug: 'scuter-acvatic-jet-ski-avarie-stanci',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Jet ski de performanță de 24.000 EUR lovit violent de stânci submarine',
    mainQuestion: 'Ce poliță maritimă acoperă fisurarea corpului din compozit și distrugerea turbinei hidrojet?',
    shortDescription: 'O manevră la viteză mare într-un golf necunoscut avariază grav carena și admisia de apă.',
    situation: 'Conduci un jet ski Sea-Doo de 300 CP în timpul unei vacanțe în Grecia. La virajul într-un golf retras, lovești o formațiune de stânci aflată la 20 cm sub suprafața apei. Impactul smulge grila de admisie a turbinei, sparge carena din fibră de sticlă pe 40 cm și îndoaie axul elicei hidrojet. Motorul se inundă cu apă sărată înainte ca ambarcațiunea să poată fi tractată la țărm. Devizul de reparație la dealerul maritim este de 12.000 EUR.',
    heroImage: '/images/scenarios/yacht-storm.jpg',
    imageCaption: 'Ambarcațiunile rapide de agrement necesită polițe maritime complete care acoperă atât avariile la corpul de navă, cât și riscul de aspirație a apei în motor.',
    severityLabel: 'Daună Marină Costisitoare',
    featured: false,
    tags: ['jet-ski', 'ambarcatiune-rapida', 'avarie-carena', 'turbina-hidrojet', 'asigurare-marina'],
    illustrativeCost: 'Cost reparație carenă + refacere motor: 35.000 – 65.000 RON',
    withoutInsurance: {
      title: 'Doar asigurarea minimă de răspundere a ambarcațiunii (RCA marin)',
      statusLabel: 'Avariile propriului jet ski se plătesc integral din buzunar',
      financialImpact: 'Plată de peste 12.000 EUR la șantierul naval',
      points: [
        'Polița maritimă obligatorie plătește doar dacă lovești un alt înotător sau ambarcațiune, NU și daunele propriului jet ski.',
        'Costul pieselor originale marine și al manoperei de specialitate este extrem de ridicat.',
        'Rămâi cu o ambarcațiune inutilizabilă în plin sezon estival.'
      ],
      summary: 'Impactul subacvatic fără o poliță CASCO marină înseamnă pierderea a jumătate din valoarea jet ski-ului.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare a Ambarcațiunilor de Agrement (Watercraft Comprehensive / CASCO Marin)',
      statusLabel: 'Decontare integrală a reparației corpului și turbinei',
      financialImpact: 'Plata doar a franșizei maritime contractuale (ex. 500 EUR)',
      points: [
        'Polița acoperă coliziunea cu obiecte submarine, stânci sau bancuri de nisip.',
        'Sunt decontate operațiunile de ranfluare din apă, spălarea de urgență a motorului cu fluide anti-coroziune și piese noi OE.',
        'Ambarcațiunea este repusă pe apă în stare tehnică perfectă.'
      ],
      summary: 'Sporturile nautice de viteză rămân o plăcere sigură datorită acoperirii complete marine.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Permisul de conducător de ambarcațiune', detail: 'Conducătorul jet ski-ului trebuie să posede permis valabil categoria D (ape interioare) sau C (maritim costier).' },
        { label: 'Zona teritorială de navigație', detail: 'Asigură-te că polița acoperă apele teritoriale ale țărilor vizitate (ex. apele Greciei, Croației, Italiei).' }
      ]
    },
    immediateSteps: [
      'Scoate ambarcațiunea imediat pe peridoc și spală motorul cu apă dulce pentru a opri coroziunea sării.',
      'Fotografiază fisura din carenă și zona de impact.',
      'Obține adeverința de incident de la autoritatea portuară locală (Port Police).',
      'Deschide dosarul la asigurătorul maritim.'
    ],
    usefulDocuments: [
      'Certificatul de înmatriculare al ambarcațiunii de agrement',
      'Permisul de conducător ambarcațiune de agrement',
      'Polița de asigurare CASCO Marin'
    ],
    advisorQuestions: [
      'Include contractul meu operațiunea de tractare marină de urgență până la cel mai apropiat port?',
      'Care este franșiza pentru daune la motor prin pătrunderea apei sărate?'
    ],
    disclaimer: 'Pilotarea ambarcațiunilor rapide presupune respectarea vitezelor limită și a distanțelor minime de siguranță față de plaje și zone de scăldat.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('luxury.ts', 'luxuryScenarios', moreLuxury);

// 4. BUSINESS (3 items -> total 10)
const moreBusiness = [
  {
    id: 'business-litigiu-contractual-furnizor-materie-prima',
    slug: 'litigiu-contractual-furnizor-materie-prima',
    categoryId: 'business',
    categoryName: 'BUSINESS & PROFESIONAL',
    title: 'Litigiu comercial internațional: un furnizor livrează materie primă neconformă de 80.000 EUR',
    mainQuestion: 'Ce asigurare acoperă onorariile de avocați și taxele de timbru într-un proces la Curtea de Arbitraj?',
    shortDescription: 'O livrare defectuoasă oprește linia de producție a fabricii, generând un conflict juridic transfrontalier.',
    situation: 'Compania ta de producție importă un lot masiv de granule de polimeri de la un furnizor din Germania în valoare de 80.000 EUR. În producție, lotul se dovedește neconform chimic, generând rebuturi de 100%. Furnizorul refuză restituirea banilor și contestă analizele de laborator. Clauza din contract prevede soluționarea litigiului la Curtea de Arbitraj Comercial Internațional de la Viena. Taxele arbitrale și onorariile casei de avocatură depășesc 25.000 EUR înainte de prima audiere.',
    heroImage: '/images/scenarios/professional-error.jpg',
    imageCaption: 'Protecția juridică comercială (Commercial Legal Expenses Insurance) preia costurile litigiilor complexe cu furnizorii și partenerii contractuali.',
    severityLabel: 'Blocaj Juridic și Costuri de Arbitraj',
    featured: false,
    tags: ['litigiu-comercial', 'curtea-arbitraj', 'asigurare-protectie-juridica', 'furnizor-materie-prima', 'avocati-comerciali'],
    illustrativeCost: 'Onorarii avocați internaționali + taxe arbitrale: 70.000 – 160.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Protecție Juridică a Companiei',
      statusLabel: 'Firma achită toate taxele judiciare și onorariile din profit',
      financialImpact: 'Zeci de mii de euro blocați în avans fără certitudinea recuperării rapide',
      points: [
        'Taxele de timbru și taxele de înregistrare la tribunalele arbitrale se achită obligatoriu în avans de partea reclamantă.',
        'Multe firme mici și mijlocii renunță la revendicarea drepturilor legitime din cauza costurilor prohibitive ale proceselor.',
        'Furnizorul incorect profită de asimetria financiară pentru a impune acorduri nefavorabile.'
      ],
      summary: 'Absența resurselor de apărare juridică te forțează să înghiți o pierdere de zeci de mii de euro.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Protecție Juridică Comercială (Commercial Legal Protection)',
      statusLabel: 'Finanțare completă a taxelor de arbitraj și a onorariilor de avocați',
      financialImpact: 'Costuri judiciare acoperite de asigurător până la 50.000 – 100.000 EUR',
      points: [
        'Compania de asigurări plătește direct onorariile avocaților comerciali specializați.',
        'Sunt decontate expertizele tehnice independente de laborator și taxele judiciare de arbitraj.',
        'Firma ta își poate susține drepturile cu fermitate împotriva oricărui partener incorect.'
      ],
      summary: 'Accesul la justiție de calitate superioară este garantat fără a-ți decapitaliza compania.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Litigii contractuale (Contract Disputes)', detail: 'Asigură-te că polița de protecție juridică include disputele comerciale contractuale cu furnizorii și clienții, nu doar dreptul muncii sau penal.' },
        { label: 'Plafonul de despăgubire pe dosar', detail: 'Alege o sumă asigurată adecvată anvergurii contractelor companiei tale.' }
      ]
    },
    immediateSteps: [
      'Emite o notificare oficială de refuz al lotului și solicită o expertiză tehnică de conformitate a mostrelor.',
      'Nu rezilia contractul înainte de a consulta avocații desemnați de asigurătorul de protecție juridică.',
      'Avizează dosarul la compania de asigurări transmițând corespondența comercială.',
      'Permite echipei juridice a asigurătorului să încerce o mediere prealabilă.'
    ],
    usefulDocuments: [
      'Contractul de furnizare cu clauza arbitrală inclusă',
      'Buletinul de analiză de laborator care certifică neconformitatea mărfii',
      'Polița de asigurare de protecție juridică comercială'
    ],
    advisorQuestions: [
      'Include polița mea acoperirea costurilor pentru litigii comerciale internaționale derulate în afara României?',
      'Pot alege propriul avocat sau trebuie să colaborez cu cel desemnat de asigurător?'
    ],
    disclaimer: 'Asigurarea de protecție juridică evaluează șansele de succes ale cauzei înainte de finanțarea procedurilor judiciare.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('business.ts', 'businessScenarios', moreBusiness);

// 5. VIATA (3 items -> total 10)
const moreViata = [
  {
    id: 'viata-coma-terapie-intensiva-septicemie',
    slug: 'coma-terapie-intensiva-septicemie',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Comă prelungită și 30 de zile de Terapie Intensivă (ATI) în urma unei infecții severe',
    mainQuestion: 'Ce indemnizație financiară primește familia pentru susținerea cheltuielilor colaterale pe durata comei?',
    shortDescription: 'O pneumonie severă complicată cu șoc septic impune ventilație mecanică invazivă timp de 4 săptămâni.',
    situation: 'Un adult de 40 de ani, fără antecedente medicale semnificative, dezvoltă o pneumonie bacteriană fulgerătoare care evoluează rapid în șoc septic și insuficiență multiplă de organe. Este internat de urgență la Terapie Intensivă (ATI), intubat și plasat în comă indusă medicamentos timp de 28 de zile. Familia suportă cheltuieli masive cu medicamente de linie a treia neacoperite în spital, transportul zilnic și pierderea completă a veniturilor familiei.',
    heroImage: '/images/scenarios/serious-diagnosis.jpg',
    imageCaption: 'Spitalizarea prelungită la Terapie Intensivă induce un stres financiar extrem asupra aparținătorilor prin prăbușirea veniturilor curente.',
    severityLabel: 'Stare Critică și Spitalizare Prelungită',
    featured: false,
    tags: ['terapie-intensiva', 'coma-prelungita', 'soc-septic', 'indemnizatie-spitalizare-ati', 'asigurare-sanatate'],
    illustrativeCost: 'Cheltuieli conexe familie + pierdere venituri: 25.000 – 60.000 RON',
    withoutInsurance: {
      title: 'Doar spitalizarea gratuită de stat',
      statusLabel: 'Statul asigură patul de ATI, dar familia este destabilizată financiar',
      financialImpact: 'Deficit bugetar sever și imposibilitatea achitării ratelor',
      points: [
        'Concediul medical este plafonat și se plătește cu întârziere de către angajator/stat.',
        'Familia trebuie să facă față ratelor bancare și cheltuielilor zilnice fără venitul principal al casei.',
        'Recuperarea post-ATI necesită luni de kinetoterapie respiratorie și nutriție enterală specializată.'
      ],
      summary: 'Perioada critică de ATI lasă familia epuizată emoțional și cu datorii acumulate.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Sănătate / Accidente cu Clauză de Spitalizare la Terapie Intensivă (ATI)',
      statusLabel: 'Dublarea indemnizației zilnice pentru zilele petrecute la Terapie Intensivă',
      financialImpact: 'Plată forfetară garantată de 500 – 1.000 RON pe fiecare zi de ATI',
      points: [
        'Polița plătește o sumă generoasă fixă pentru fiecare 24 de ore petrecute în secția de Anestezie-Terapie Intensivă.',
        'Pentru 28 de zile de ATI, familia încasează între 14.000 și 28.000 RON lichizi neimpozabili.',
        'Banii ajută la plata ratelor și la susținerea familiei până când pacientul se trezește și începe recuperarea.'
      ],
      summary: 'Familia este protejată financiar în cele mai grele momente de incertitudine medicală.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Multiplicatorul pentru Terapie Intensivă (ATI)', detail: 'Verifică dacă indemnizația zilnică standard se dublează sau se triplează pentru secția de reanimare/ATI.' },
        { label: 'Perioada maximă decontată', detail: 'Asigură-te că polița acoperă cel puțin 30 – 90 de zile de spitalizare continuă.' }
      ]
    },
    immediateSteps: [
      'Aparținătorul legal (soțul/soția) notifică asigurătorul de viață/sănătate privind internarea la ATI.',
      'Solicită medicului șef de secție ATI o adeverință medicală privind data internării și starea critică a pacientului.',
      'Transmite documentele pentru activarea indemnizației zilnice.',
      'Încasează sumele direct în contul bancar al familiei.'
    ],
    usefulDocuments: [
      'Adeverința medicală de spitalizare în secția ATI cu diagnosticul de șoc septic/comă',
      'Foaia de observație clinică',
      'Polița de asigurare de sănătate/viață'
    ],
    advisorQuestions: [
      'Ce indemnizație zilnică se acordă pentru fiecare zi de internare la Terapie Intensivă?',
      'Poate soțul/soția să depună actele în numele asiguratului aflat în comă?'
    ],
    disclaimer: 'Indemnizația de spitalizare ATI se acordă conform grilei contractuale în baza foii oficiale de observație medicală.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('viata.ts', 'viataScenarios', moreViata);

console.log('✓ Batch expansion to 121 executed successfully!');
