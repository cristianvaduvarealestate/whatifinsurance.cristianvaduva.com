// scripts/build-expansion-136.js
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

// 1. DIGITAL (7 scenarios -> total 10)
const extraDigital = [
  {
    id: 'digital-smartphone-spart-inainte-calatorie',
    slug: 'smartphone-spart-inainte-calatorie',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Telefonul de ultimă generație scapă pe beton chiar în ziua plecării în concediu',
    mainQuestion: 'Ce poliță îți oferă înlocuire de urgență dacă ecranul și camera se sparg înainte de zbor?',
    shortDescription: 'Un iPhone Pro Max de 1.400 EUR cade pe asfalt, devenind inutilizabil pentru bilete de avion și plăți.',
    situation: 'În timp ce încarci bagajele în mașină pentru a merge la aeroport, telefonul de 6.800 RON îți alunecă din buzunar și lovește bordura de beton. Ecranul OLED este complet negru cu dungi verzi, iar spatele din sticlă este spart în dreptul senzorilor foto. Ai pe telefon toate cartelele de îmbarcare digitale, cardurile bancare și codurile de acces.',
    heroImage: '/images/scenarios/power-surge.jpg',
    imageCaption: 'Asigurările moderne pentru telefoane mobile acoperă avariile accidentale prin cădere și oferă dispozitiv de schimb pe durata reparației.',
    severityLabel: 'Disconfort și Risc Imediat',
    featured: false,
    tags: ['telefon-spart', 'ecran-oled', 'asigurare-telefon', 'apple-care', 'daune-accidentale'],
    illustrativeCost: 'Cost înlocuire display + carcasă originală: 2.200 – 3.500 RON',
    withoutInsurance: {
      title: 'Fără asigurare de telefon mobil',
      statusLabel: 'Cost de reparație uriaș sau cumpărarea unui alt telefon',
      financialImpact: 'Plată de 2.500+ RON pe loc în service privat',
      points: [
        'Garanția legală de conformitate a producătorului exclude expres căzăturile și șocurile mecanice.',
        'Schimbarea ecranului original la service autorizat costă până la 40% din prețul inițial al telefonului.',
        'Rămâi fără mijloc de comunicare și navigare în vacanță.'
      ],
      summary: 'O secundă de neatenție te lasă fără telefon și cu o cheltuială neprevăzută mare.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare Dispozitive Electronice (Screen & Accident Protection)',
      statusLabel: 'Reparație pe loc cu piese originale sau telefon de schimb',
      financialImpact: 'Plata doar a unei franșize mici (ex. 150 – 250 RON)',
      points: [
        'Asigurătorul emite acceptul de reparație la service-ul oficial autorizat de brand.',
        'Sunt montate componente originale menținând rezistența la apă (IP68) a aparatului.',
        'În caz de daună totală, primești un telefon nou identic sau echivalent.'
      ],
      summary: 'Telefonul este reparat rapid și garantat cu impact financiar minim.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Piese originale autorizate', detail: 'Asigură-te că polița nu impune ecrane aftermarket compatibile ieftine care degradează culorile.' },
        { label: 'Numărul maxim de daune pe an', detail: 'Verifică dacă ai dreptul la 1 sau 2 înlocuiri de ecran pe an contractual.' }
      ]
    },
    immediateSteps: [
      'Nu încerca să apeși pe sticla spartă pentru a evita rănirea degetelor sau distrugerea senzorilor faciali (Face ID).',
      'Deschide tichetul de daună în aplicația asigurătorului sau sună la numărul de asistență.',
      'Mergi la centrul de service autorizat cu seria IMEI a dispozitivului.'
    ],
    usefulDocuments: [
      'Factura de cumpărare a telefonului cu codul IMEI',
      'Polița de asigurare a echipamentului electronic',
      'Fotografii ale aparatului avariat'
    ],
    advisorQuestions: [
      'Include polița mea și daunele produse prin scufundare accidentală în apă?',
      'Care este timpul de soluționare pentru înlocuirea ecranului?'
    ],
    disclaimer: 'Asigurarea de dispozitive mobile exclude pierderea din neatenție dacă nu s-a contractat clauza de furt/pierdere.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-supratensiune-retea-distruge-pc-gaming-audio',
    slug: 'supratensiune-retea-distruge-pc-gaming-audio',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Supratensiune pe rețeaua electrică: PC de lucru de 18.000 RON și sistem audio arse',
    mainQuestion: 'Cine suportă daunele dacă o cădere de trăsnet pe transformatorul stradal arde sursa, placa video și monitoarele?',
    shortDescription: 'Un șoc de tensiune de 400V trece prin priză, distrugând electronica sensibilă a stației de editare.',
    situation: 'În timpul unei furtuni cu descărcări electrice, un fulger lovește un stâlp de distribuție din cartier. Șocul de supratensiune trece prin rețeaua electrică de alimentare. Deși PC-ul era oprit dar lăsat în priză, sursa de alimentare explodează cu miros puternic de ars, transmițând șocul către placa de bază, placa grafică RTX 4090 și monitoarele profesionale conectate. Devizul de componente distruse este de 22.000 RON.',
    heroImage: '/images/scenarios/power-surge.jpg',
    imageCaption: 'Fenomenele electrice induse de trăsnete sau manevre greșite pe rețeaua de distribuție necesită clauza specifică de Fenomene Electrice în polița de locuință.',
    severityLabel: 'Distrugere Hardware Electronic',
    featured: false,
    tags: ['supratensiune', 'soc-electric', 'pc-gaming', 'placa-video-arsa', 'fenomene-electrice'],
    illustrativeCost: 'Cost înlocuire componente hardware arse: 14.000 – 26.000 RON',
    withoutInsurance: {
      title: 'Fără clauză de fenomene electrice în asigurarea de casă',
      statusLabel: 'Distribuitorul de energie refuză plata invocând forța majoră',
      financialImpact: 'Plată integrală a echipamentelor noi din buzunar',
      points: [
        'Compania de distribuție a energiei electrice respinge plângerile dacă fulgerul este catalogat drept fenomen meteo de forță majoră.',
        'Garanțiile producătorilor de componente PC exclud expres daunele provocate de supratensiune exterioară.',
        'Toate echipamentele de lucru și divertisment trebuie reachiziționate din economii.'
      ],
      summary: 'Un șoc de tensiune de o fracțiune de secundă distruge mii de euro în componente electronice.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Fenomene Electrice / Supratensiune)',
      statusLabel: 'Despăgubire integrală a echipamentelor electronice arse',
      financialImpact: 'Înlocuirea componentelor acoperită pe baza devizului de laborator',
      points: [
        'Clauza de fenomene electrice acoperă avariile provocate de scurtcircuit, variații bruște de tensiune și inducție electrostatică.',
        'Asigurătorul decontează piesele arse conform valorii de înlocuire declarate.',
        'Echipamentele sunt testate și înlocuite fără dispute birocratice cu furnizorul de curent.'
      ],
      summary: 'Investiția în calculatoare și electronice este protejată împotriva oricărui șoc din rețeaua electrică.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza explicită de Fenomene Electrice', detail: 'Atenție: simpla bifare a riscului de trăsnet acoperă doar incendiul provocat de trăsnet direct; supratensiunea indusă fără foc cere clauză separată.' },
        { label: 'Utilizarea prizelor cu protecție (Surge Protector)', detail: 'Multe contracte recomandă sau cer folosirea de prelungitoare cu protecție împotriva supratensiunii.' }
      ]
    },
    immediateSteps: [
      'Scoate toate aparatele din priză pentru a preveni alte șocuri la revenirea curentului.',
      'Nu încerca să pornești componentele mirosind a ars pentru a nu agrava avaria pe placa de bază.',
      'Duceți componentele la un laborator de service IT autorizat pentru emiterea unei fișe de constatare a arsurii electrice.',
      'Transmite cererea de daună către asigurătorul tău.'
    ],
    usefulDocuments: [
      'Raportul de expertiză tehnică din service-ul autorizat care atestă dauna prin supratensiune',
      'Facturile de achiziție a componentelor PC',
      'Polița de locuință cu clauza de fenomene electrice inclusă'
    ],
    advisorQuestions: [
      'Include polița mea de locuință clauza de fenomene electrice fără foc?',
      'Care este suma asigurată maximă pentru aparatură electronică și electrocasnică?'
    ],
    disclaimer: 'Protejarea electronicelor sensibile impune utilizarea de surse neîntreruptibile (UPS) și descărcătoare de supratensiune certificate.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-preluare-cont-personal-santaj-deepfake',
    slug: 'preluare-cont-personal-santaj-deepfake',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Preluarea ostilă a conturilor de social media și șantaj cu imagini manipulate (Deepfake)',
    mainQuestion: 'Ce sprijin juridic și tehnic ai dacă un hacker îți fură identitatea digitală și cere bani de la prieteni?',
    shortDescription: 'Contul de Instagram și WhatsApp este compromis prin SIM Swap, iar contactele primesc mesaje de șantaj.',
    situation: 'Printr-un atac de tip SIM-swapping la operatorul de telefonie, un atacator preia controlul numărului tău de telefon și al conturilor de WhatsApp, Instagram și e-mail. Atacatorul folosește fotografii personale pentru a genera imagini compromițătoare trucate prin inteligență artificială (deepfake) și contactează prietenii și partenerii de afaceri cerând transferuri urgente de bani în numele tău.',
    heroImage: '/images/scenarios/cyber-attack.jpg',
    imageCaption: 'Protecția identității digitale și asigurările de e-reputație oferă suport specializat pentru recuperarea conturilor și combaterea defăimării online.',
    severityLabel: 'Traumă Reputațională și Șantaj Digital',
    featured: false,
    tags: ['sim-swap', 'furt-identitate', 'santaj-online', 'deepfake', 'cyber-reputatie'],
    illustrativeCost: 'Consultanță juridică specializată + ștergere date online: 8.000 – 25.000 RON',
    withoutInsurance: {
      title: 'Fără asistență de Cyber Protection Personal',
      statusLabel: 'Eforturi individuale lente prin formulare automate de suport ale rețelelor',
      financialImpact: 'Costuri mari cu avocați și pierderea reputației profesionale',
      points: [
        'Formularele de recuperare ale marilor platforme (Meta, Google) funcționează prin roboți și pot dura săptămâni fără rezultat.',
        'Poliția acționează lent pe cazuri de șantaj cibernetic dacă nu există un prejudiciu financiar direct imediat dovedit.',
        'Victima suferă stres extrem, anxietate și degradarea imaginii profesionale.'
      ],
      summary: 'Recuperarea identității pe cont propriu este o luptă epuizantă cu platformele gigant.'
    },
    withInsurance: {
      title: 'Cu poliță de Cyber Safety & Protecția Identității Digitale',
      statusLabel: 'Intervenție tehnică rapidă prin canale prioritare + consiliere juridică',
      financialImpact: 'Cheltuieli de restaurare a reputației și consiliere juridică acoperite',
      points: [
        'Echipa tehnică a asigurătorului are canale directe prioritare de escaladare la departamentele de securitate ale platformelor.',
        'Sunt acoperite costurile serviciilor specializate de „Right to be Forgotten” și eliminare a conținutului defăimător de pe internet.',
        'Beneficiezi de asistență psihologică și juridică pentru depunerea plângerii la poliție.'
      ],
      summary: 'Criza reputațională este dezamorsată rapid cu sprijinul experților în securitate digitală.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de e-Reputație și defăimare', detail: 'Verifică dacă polița acoperă costurile de curățare a imaginii online și acțiunile împotriva hărțuirii cibernetice.' },
        { label: 'Asistență juridică împotriva furtului de identitate', detail: 'Asigură-te că sunt acoperite cheltuielile judiciare necesare anulării eventualelor contracte încheiate fraudulos pe numele tău.' }
      ]
    },
    immediateSteps: [
      'Contactează imediat operatorul de telefonie mobilă pentru blocarea cartelei SIM compromise.',
      'Alertează băncile comerciale unde ai conturi pentru suspendarea temporară a aplicațiilor de mobile banking.',
      'Activează linia de asistență cyber a asigurătorului.',
      'Depune plângere penală la Poliție (Serviciul de Combatere a Criminalității Informatice).'
    ],
    usefulDocuments: [
      'Dovada eliberată de operatorul telecom privind înlocuirea cartelei SIM',
      'Capturile de ecran cu mesajele de șantaj și conturile compromise',
      'Polița de asigurare Cyber'
    ],
    advisorQuestions: [
      'Ce servicii de asistență tehnică oferă asigurătorul pentru recuperarea conturilor de social media?',
      'Sunt acoperite onorariile de avocați pentru dosare de șantaj și defăimare online?'
    ],
    disclaimer: 'Asigurarea identității digitale sprijină procedurile de recuperare și apărare legală a drepturilor asiguratului.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-teapa-cumparaturi-online-magazin-fantom',
    slug: 'teapa-cumparaturi-online-magazin-fantom',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Achiziție online pe un magazin fantomă clonat: 1.500 EUR plătiți pe produse inexistente',
    mainQuestion: 'Ce faci dacă un site aparent legitim îți debitează cardul și dispare de pe internet a doua zi?',
    shortDescription: 'O ofertă tentantă pentru electrocasnice scumpe se dovedește a fi o clonă frauduloasă a unui brand mare.',
    situation: 'Comanzi o pompă de căldură sau un televizor de pe un magazin online care pare identic cu un retailer cunoscut, beneficiind de un discount tentant de 30%. Plătești 7.500 RON prin card bancar. A doua zi, site-ul web nu mai este funcțional, numerele de telefon sunt desființate, iar banca te informează că tranzacția a fost procesată către un procesator de plăți dintr-un paradis fiscal, refuzând refuzul de plată simplu (Chargeback).',
    heroImage: '/images/scenarios/phishing-payment.jpg',
    imageCaption: 'Fraudele la cumpărături online afectează anual mii de cumpărători prin intermediul magazinelor clone și reclamelor sponsorizate frauduloase.',
    severityLabel: 'Frauda Comercială Online',
    featured: false,
    tags: ['magazin-fantoma', 'frauda-online', 'chargeback-refuz', 'cyber-protectie-cumparaturi', 'card-clonat'],
    illustrativeCost: 'Pierdere financiară nerambursabilă: 4.000 – 12.000 RON',
    withoutInsurance: {
      title: 'Doar procedura standard bancară de refuz la plată',
      statusLabel: 'Banca respinge chargeback-ul dacă tranzacția a fost autorizată prin 3D-Secure',
      financialImpact: 'Pierdere de 100% a banilor transferați',
      points: [
        'Dacă ai introdus codul SMS sau ai aprobat plata în aplicația bancară (3D Secure), banca consideră tranzacția autorizată voluntar și respinge cererea de refuz.',
        'Recuperarea banilor de la servere găzduite în zone offshore este practic imposibilă pentru o persoană fizică.',
        'Rămâi și fără produs și fără banii plătiți.'
      ],
      summary: 'Fără o poliță de protecție a cumpărăturilor online, banii virați pe site-uri fantomă sunt pierduți iremediabil.'
    },
    withInsurance: {
      title: 'Cu poliță de Protecție a Cumpărăturilor Online (Online Shopper Protection)',
      statusLabel: 'Rambursare integrală a sumei furate pe baza dosarului de fraudă',
      financialImpact: 'Recuperare a sumei de 7.500 RON direct în cont',
      points: [
        'Polița acoperă ne-livrarea produselor achiziționate de la comercianți online frauduloși sau fraudarea la plată.',
        'Asigurătorul decontează contravaloarea comenzii dacă bunurile nu ajung în 30 de zile și comerciantul nu poate fi contactat.',
        'Primești asistență specializată pentru raportarea domeniului fraudulos la autorități.'
      ],
      summary: 'Cumpărăturile pe internet sunt lipsite de riscuri chiar și în fața celor mai abile înșelăciuni.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Termenul de raportare a ne-livrării', detail: 'Verifică în câte zile de la data estimată a livrării trebuie deschis dosarul la asigurător (uzual 30 – 60 de zile).' },
        { label: 'Plafonul anual de cumpărături online', detail: 'Asigură-te că polița oferă un plafon rezonabil (ex. 2.000 – 5.000 EUR/an per asigurat).' }
      ]
    },
    immediateSteps: [
      'Contactează banca emitentă a cardului și solicită blocarea cardului pentru a preveni alte tranzacții automate.',
      'Depune o cerere formală de refuz la plată (Chargeback) la bancă.',
      'Depune plângere penală pentru înșelăciune online la Secția de Poliție.',
      'Transmite dosarul către asigurătorul tău de protecție a cumpărăturilor.'
    ],
    usefulDocuments: [
      'Confirmarea comenzii primită pe e-mail cu detaliile tranzacției',
      'Extrasul de cont bancar cu debitarea sumei',
      'Copia plângerii depuse la Poliție'
    ],
    advisorQuestions: [
      'Ce cumpărături online sunt acoperite de polița mea (bunuri fizice, bilete de avion, servicii)?',
      'Care este limita maximă de despăgubire per achiziție frauduloasă?'
    ],
    disclaimer: 'Asigurarea cumpărăturilor online completează drepturile legale ale consumatorilor și protejează împotriva fraudelor electronice.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('digital.ts', 'digitalScenarios', extraDigital);

// 2. LUXURY (7 scenarios -> total 10)
const extraLuxury = [
  {
    id: 'luxury-supercar-zgariat-cheie-parcare-hotel',
    slug: 'supercar-zgariat-cheie-parcare-hotel',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Supercar de 300.000 EUR cu vopsea specială multistrat zgâriat adânc cu cheia',
    mainQuestion: 'Cât costă revopsirea unui Ferrari sau Lamborghini cu vopsea mată perlată dacă doar reprezentanța oficială o poate aplica?',
    shortDescription: 'O vopsea specială pe bază de pulbere perlată impune revopsirea completă a mașinii în fabrică în Italia.',
    situation: 'Deții un supercar (Ferrari sau McLaren) cu o vopsea rară cu finisaj mat perlat (opțiune de catalog de 25.000 EUR). În timpul unui weekend la munte, mașina parcată în spațiul rezervat al hotelului este zgâriată adânc cu un obiect ascuțit pe ambele portiere și pe aripa spate din fibră de carbon. Reprezentanța oficială comunică că tehnologia de vopsire multistrat nu permite retușuri locale și impune trimiterea mașinii la fabrica producătorului sau demontarea completă a elementelor.',
    heroImage: '/images/scenarios/supercar-damage.jpg',
    imageCaption: 'Caroseriile exotice din compozite și vopselele artizanale personalizate ale mașinilor de lux impun expertiză tehnică dedicată și ateliere omologate de fabrică.',
    severityLabel: 'Deviz de Reparație Exorbitant',
    featured: false,
    tags: ['supercar', 'vopsea-mata', 'ferrari-dauna', 'casco-supercar', 'fibra-carbon'],
    illustrativeCost: 'Cost vopsitorie oficială + transport fabrică: 90.000 – 180.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO specializat pentru supercaruri',
      statusLabel: 'Proprietarul achită integral devizul de zeci de mii de euro',
      financialImpact: 'Plată de peste 30.000 EUR din capital propriu',
      points: [
        'Polițele CASCO obișnuite refuză asigurarea mașinilor cu puteri de peste 500 CP sau valori de piață ce depășesc 150.000 EUR.',
        'Atelierele independente nu au codurile chimice exacte de vopsea și riscă să distrugă panourile de carbon.',
        'Deprecierea comercială la revânzarea unei mașini exotice cu vopsea neconformă este uriașă.'
      ],
      summary: 'Vandalismul asupra unui supercar fără asigurare dedicată înseamnă o pierdere de capital masivă.'
    },
    withInsurance: {
      title: 'Cu poliță dedicată Supercar All-Risks (Specialist Luxury Underwriting)',
      statusLabel: 'Reparație aprobată în reprezentanța oficială cu componente de fabrică',
      financialImpact: 'Plata doar a franșizei contractuale agreate (ex. 1.000 – 2.500 EUR)',
      points: [
        'Polița acoperă daunele de caroserie executate strict la standardele fabricantului oficial.',
        'Sunt decontate costurile de transport pe trailer închis până la centrul tehnic autorizat.',
        'Valoarea de colecție a vehiculului este menținută prin certificarea originală a reparației.'
      ],
      summary: 'Supercarul este readus la starea inițială impecabilă cu protecție financiară completă.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de reparație la reprezentanță oficială', detail: 'Asigură-te că polița nu impune service-uri agreate generice care nu au echipamente pentru fibră de carbon.' },
        { label: 'Acoperirea pieselor din compozite', detail: 'Verifică dacă panourile de caroserie din carbon au acoperire la valoarea de nou fără uzură.' }
      ]
    },
    immediateSteps: [
      'Nu încerca să polișezi zgârietura pe vopseaua mată (acțiunea va crea o zonă lucioasă ireversibilă).',
      'Mergi la Biroul de Poliție Rutieră pentru eliberarea Autorizației de Reparație pentru autor necunoscut.',
      'Solicită reprezentanței oficiale a mărcii devizul tehnologic detaliat.',
      'Avizează asigurătorul specializat de supercaruri.'
    ],
    usefulDocuments: [
      'Autorizația de Reparație eliberată de Poliție',
      'Devizul de reparații emis de reprezentanța oficială',
      'Polița de asigurare CASCO Supercar'
    ],
    advisorQuestions: [
      'Include contractul meu transportul pe platformă închisă la fabrica oficială dacă este necesar?',
      'Care este franșiza fixă pentru evenimente produse în parcare cu autor necunoscut?'
    ],
    disclaimer: 'Asigurarea autovehiculelor exotice se realizează pe bază de inspecție de risc amănunțită și subscriere specializată.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'luxury-bijuterii-diamante-pierdute-tranzit',
    slug: 'bijuterii-diamante-pierdute-tranzit',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Inel cu diamant de 3 carate și colier din platină pierdute în timpul unui eveniment de gală',
    mainQuestion: 'Ce poliță acoperă pierderea accidentală (Mysterious Disappearance) a unei bijuterii de mare valoare?',
    shortDescription: 'Un clips de siguranță cedează la o recepție, iar colierul dispare fără urmă de efracție.',
    situation: 'Participi la o gală caritabilă internațională purtând un colier din platină cu diamante în valoare de 45.000 EUR și un inel de logodnă cu diamant de 3 carate evaluat la 50.000 EUR. La finalul serii, constați cu groază că sistemul de închidere al colierului s-a desfăcut, iar piesa a căzut și nu mai poate fi găsită în sala de evenimente. Căutările administrației și verificarea camerelor nu duc la recuperarea bijuteriei.',
    heroImage: '/images/scenarios/luxury-watch-theft.jpg',
    imageCaption: 'Dispariția inexplicabilă (Mysterious Disappearance) este un risc exclus din 99% dintre polițele standard, necesitând o clauză specială pentru bijuterii de înaltă clasă.',
    severityLabel: 'Pierdere Totală Inexplicabilă',
    featured: false,
    tags: ['inel-diamant', 'colier-platina', 'mysterious-disappearance', 'bijuterii-lux', 'asigurare-valori'],
    illustrativeCost: 'Valoare bijuterie pierdută: 200.000 – 250.000 RON',
    withoutInsurance: {
      title: 'Poliță standard de locuință sau călătorie',
      statusLabel: 'Refuz instant de plată: „pierderea simplă este exclusă”',
      financialImpact: 'Pierderea a 45.000 EUR fără nicio cale de recuperare',
      points: [
        'Aproape toate polițele obișnuite cer „urme evidente de efracție sau violență” pentru a plăti; căderea de pe gât sau pierderea fără efracție este 100% exclusă.',
        'Plafoanele pentru bijuterii pe polițele generice sunt limitate la maxim 1.000 – 2.000 EUR.',
        'Familia suportă o pierdere materială și emoțională uriașă.'
      ],
      summary: 'Absența clauzei de dispariție misterioasă lasă bijuteriile pierdute complet neasigurate.'
    },
    withInsurance: {
      title: 'Cu poliță privată de Bijuterii All-Risks (cu clauză de Mysterious Disappearance & Unexplained Loss)',
      statusLabel: 'Despăgubire integrală la valoarea agreată din certificatul GIA',
      financialImpact: 'Plată de 45.000 EUR direct în contul asiguratului',
      points: [
        'Polițele internaționale de elită (High Net Worth) acoperă expres pierderea accidentală și dispariția inexplicabilă a bijuteriilor asigurate nominativ.',
        'Despăgubirea se achită conform valorii de expertiză gemologică (GIA / HRD) fără deduceri.',
        'Piesa poate fi refăcută de casa de bijuterii pe baza documentației tehnice.'
      ],
      summary: 'Ești protejat împotriva oricărui scenariu, inclusiv căderea accidentală sau desfacerea neobservată a închizătorii.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de Mysterious Disappearance', detail: 'CONDIȚIE ELIMINATORIE: Verifică dacă scrie explicit că sunt acoperite pierderea accidentală și dispariția neexplicată.' },
        { label: 'Revizia periodică a monturii', detail: 'Unele contracte cer ca bijuteriile de peste 20.000 EUR să fie inspectate o dată la 2 ani de un bijutier autorizat pentru verificarea gheruțelor de prindere.' }
      ]
    },
    immediateSteps: [
      'Anunță imediat securitatea locației și conducerea evenimentului pentru salvarea înregistrărilor video.',
      'Depune declarație la Poliția locală menționând pierderea bijuteriei unice.',
      'Pregătește certificatul gemologic original (GIA/HRD) și fotografiile de înaltă rezoluție.',
      'Deschide dosarul la brokerul tău specializat de bunuri de lux.'
    ],
    usefulDocuments: [
      'Certificatul gemologic oficial de diamant (GIA / HRD / IGI)',
      'Raportul de evaluare recent eliberat de un evaluator acreditat',
      'Polița de asigurare High Net Worth All-Risks'
    ],
    advisorQuestions: [
      'Include contractul meu acoperire pentru bijuterii purtate în călătorii internaționale fără efracție?',
      'Ce documente sunt cerute pentru dovada dispariției accidentale la o recepție?'
    ],
    disclaimer: 'Polițele All-Risks pentru bijuterii se bazează pe certificate gemologice oficiale și evaluări periodice de piață.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('luxury.ts', 'luxuryScenarios', extraLuxury);

// 3. PROPRIETARI & CHIRIASI (7 scenarios -> total 10)
const extraProprietari = [
  {
    id: 'proprietari-inundatie-masiva-apartament-bloc-retea',
    slug: 'inundatie-masiva-apartament-bloc-retea',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Apartamentul închiriat suferă o inundație masivă din coloana principală a blocului',
    mainQuestion: 'Cine este responsabil dacă o coloană comună se rupe în ghena de instalații a imobilului închiriat?',
    shortDescription: 'Zeci de metri cubi de apă distrug parchetul chiriașului și tavanul a 3 apartamente de dedesubt.',
    situation: 'Deții un apartament dat în chirie. Într-o noapte, coloana comună de alimentare cu apă rece din ghena tehnică fisurează la nivelul etajului tău. Deși avaria este pe partea comună a blocului, apa se revarsă prin apartamentul tău și se scurge la etajele inferioare, afectând trei vecini. Chiriașul cere rezilierea contractului și restituirea chiriei plătite în avans, iar asociația de locatari refuză să își asume rapid reparațiile.',
    heroImage: '/images/scenarios/neighbor-flood.jpg',
    imageCaption: 'Avariile pe rețelele comune de apă ale blocurilor creează dispute complexe de răspundere între asociațiile de proprietari și proprietarii individuali.',
    severityLabel: 'Conflict Juridic și Daună Imobiliară',
    featured: false,
    tags: ['coloana-comuna-bloc', 'inundatie-ghena', 'asociatie-proprietari', 'chirias-plecat', 'asigurare-investitii'],
    illustrativeCost: 'Costuri reparații finisaje + pierdere chirie: 25.000 – 55.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare completă de proprietar',
      statusLabel: 'Proprietarul rămâne blocat între chiriaș și asociație',
      financialImpact: 'Pierderi de zeci de mii de lei suportate provizoriu din buzunar',
      points: [
        'Fondul de reparații al asociației de locatari este adesea insuficient pentru plata imediată a devizelor.',
        'Vecinii de jos dau în judecată proprietarul apartamentului de unde a pornit apa, obligându-te să te aperi pe cheltuială proprie.',
        'Pierzi chiriașul și veniturile lunare pe o perioadă de cel puțin 2-3 luni.'
      ],
      summary: 'Investiția imobiliară devine o sursă de cheltuieli neprevăzute și stres juridic.'
    },
    withInsurance: {
      title: 'Cu poliță completă de Locuință cu Clauză de Răspundere față de Vecini și Pierdere de Chirie',
      statusLabel: 'Reparație imediată și preluarea disputelor de către asigurător',
      financialImpact: 'Despăgubire integrală a finisajelor + compensarea chiriei pierdute',
      points: [
        'Asigurătorul repară finisajele din apartamentul tău și decontează daunele celor trei vecini de dedesubt.',
        'Compania de asigurări se ocupă de regresul împotriva Asociației de Proprietari pentru recuperarea banilor.',
        'Clauza de pierdere de chirie compensează venitul lunar pe durata lucrărilor de refacere.'
      ],
      summary: 'Patrimoniul tău este protejat, iar relația cu chiriașii și vecinii este gestionată impecabil.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Delimitarea instalațiilor private vs comune', detail: 'Asigură-te că polița include apa de conductă indiferent dacă fisura s-a produs pe coloana comună verticală sau pe rețeaua interioară orizontală.' },
        { label: 'Suma asigurată pentru răspundere terți', detail: 'Recomandat minim 20.000 – 50.000 EUR pentru a acoperi mai multe apartamente inundate concomitent.' }
      ]
    },
    immediateSteps: [
      'Solicită președintelui și administratorului de bloc întocmirea unui proces-verbal de constatare la fața locului.',
      'Fotografiază țeava fisurată din ghena tehnică și urmele de apă din apartamentele afectate.',
      'Avizează asigurătorul tău în termen de 24 de ore.',
      'Propune chiriașului o soluție amiabilă de relocare temporară sau reziliere conform contractului.'
    ],
    usefulDocuments: [
      'Procesul-verbal de constatare semnat de Asociația de Proprietari și instalator',
      'Polița facultativă de locuință',
      'Contractul de închiriere'
    ],
    advisorQuestions: [
      'Cum se împarte răspunderea între asigurarea mea și fondul de reparații al asociației?',
      'Este acoperită chiria pe care o pierd dacă chiriașul reziliază contractul din cauza inundației?'
    ],
    disclaimer: 'Asigurarea de locuință decontează daunele și preia acțiunile de regres împotriva asociațiilor responsabile de rețelele comune.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('proprietari.ts', 'proprietariScenarios', extraProprietari);

// 4. FAMILIE & LIFESTYLE (8 scenarios -> total 10)
const extraFamilie = [
  {
    id: 'familie-animal-companie-inghite-corp-strain-operatie',
    slug: 'animal-companie-inghite-corp-strain-operatie',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'Câinele familiei înghite o jucărie sau o șosetă: operație veterinară de urgență',
    mainQuestion: 'Ce faci dacă salvarea vieții animalului tău de companie impune o operație veterinară de 6.000 RON?',
    shortDescription: 'Ocluzia intestinală acută necesită endoscopie chirurgicală și 4 zile de spitalizare la clinica veterinară privată.',
    situation: 'Câinele familiei (un Golden Retriever jucăuș de 2 ani) înghite o minge de cauciuc sau o șosetă în timp ce se joacă în casă. După 24 de ore de vărsături continue și letargie, ecografia și radiografia cu bariu la clinica veterinară de urgență confirmă un blocaj intestinal complet. Medicul chirurg avertizează că întârzierea operației va duce la necroză de intestin și deces. Costul chirurgiei de urgență, anesteziei inhalatorii și al terapiei intensive veterinare atinge 6.500 RON.',
    heroImage: '/images/scenarios/dog-bite.jpg',
    imageCaption: 'Medicina veterinară modernă pentru animale de companie folosește tehnologii chirurgicale de vârf, dar tarifele clinice se achită integral privat.',
    severityLabel: 'Urgență Veterinară și Cost Imediat',
    featured: false,
    tags: ['animal-companie', 'operatie-caine', 'veterinar-urgenta', 'asigurare-animale-pet', 'ocluzie-intestinala'],
    illustrativeCost: 'Cost chirurgie veterinară + spitalizare: 4.500 – 9.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de sănătate pentru animale de companie (Pet Insurance)',
      statusLabel: 'Stăpânul achită 100% din veniturile familiei',
      financialImpact: 'Plată de mii de lei pe loc la recepția clinicii',
      points: [
        'Nu există niciun sistem public de asigurări pentru animale de companie în România; orice act medical veterinar este privat.',
        'Multe familii sunt puse în fața unei alegeri sfâșietoare între bugetul casei și viața companionului drag.',
        'Economiile de vacanță ale familiei sunt epuizate într-o singură noapte de urgență.'
      ],
      summary: 'Urgențele veterinare grave impun plăți mari care destabilizează finanțele familiei.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Sănătate pentru Animale de Companie (Pet Insurance)',
      statusLabel: 'Decontare integrală a intervențiilor chirurgicale de urgență',
      financialImpact: 'Plata a 80 – 90% din factura veterinară preluată de asigurător',
      points: [
        'Polița acoperă intervențiile chirurgicale de urgență provocate de accidente și ingerare de corpi străini.',
        'Sunt decontate investigațiile imagistice (radiografii, ecografii), analizele de sânge și salonul de terapie intensivă.',
        'Animalul este salvat fără ca stăpânii să fie stresați de costul facturilor medicale.'
      ],
      summary: 'Iubirea pentru animalul de companie este dublată de o plasă de siguranță financiară responsabilă.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Vârsta maximă de asigurare a animalului', detail: 'Polițele acceptă de regulă câini și pisici cu vârsta între 3 luni și 7-8 ani la intrarea în asigurare.' },
        { label: 'Carnetul de sănătate și vaccinurile', detail: 'Animalul trebuie să aibă microcip înregistrat în RECS și toate vaccinările anuale obligatorii la zi.' }
      ]
    },
    immediateSteps: [
      'Transportă imediat animalul la cea mai apropiată clinică veterinară dotată cu laborator și secție de chirurgie.',
      'Cere medicului veterinar completarea fișei clinice de urgență cu diagnosticul exact.',
      'Păstrează toate facturile, chitanțele și imaginile radiologice.',
      'Transmite cererea de decontare către compania de asigurări.'
    ],
    usefulDocuments: [
      'Fișa clinică veterinară și protocolul operator',
      'Factura fiscală detaliată și chitanța de plată din clinică',
      'Carnetul de sănătate cu seria microcipului'
    ],
    advisorQuestions: [
      'Include polița mea de animale de companie intervențiile de urgență pentru ingerare de obiecte străine?',
      'Care este plafonul anual de decontare veterinară per animal asigurat?'
    ],
    disclaimer: 'Asigurarea pentru animale de companie impune îngrijirea responsabilă a companionului și menținerea vaccinărilor periodice.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'familie-firma-mutari-deterioreaza-mobilier-scump',
    slug: 'firma-mutari-deterioreaza-mobilier-scump',
    categoryId: 'familie-lifestyle',
    categoryName: 'FAMILIE & LIFESTYLE',
    title: 'Firma de mutări scapă pe scări și distruge o bibliotecă din lemn masiv de nuc',
    mainQuestion: 'Ce despăgubire poți obține dacă manipulatorii neatenți sparg o piesă de mobilier de design?',
    shortDescription: 'O piesă de colecție din lemn nobil este izbită de balustradă, suferind fisuri structurale ireversibile.',
    situation: 'Te muți într-o casă nouă și angajezi o firmă de relocări. În timp ce coboară pe scările înguste ale blocului o bibliotecă artizanală din lemn masiv de nuc evaluată la 18.000 RON, manipulatorii pierd controlul. Piesa cade două etaje pe casa scării, rupându-și picioarele sculptate și fețele de uși din sticlă cristalizată. Șoferul susține că firma răspunde doar cu 200 de lei conform contractului standard de cărăușie.',
    heroImage: '/images/scenarios/art-damage.jpg',
    imageCaption: 'Contractele uzuale ale transportatorilor locali de mobilă limitează răspunderea la sume modice dacă nu este încheiată o asigurare cargo/all-risks.',
    severityLabel: 'Pierdere Materială la Relocare',
    featured: false,
    tags: ['mutare-locuinta', 'mobilier-distrus', 'firma-mutari', 'asigurare-bunuri-tranzit', 'dauna-transport'],
    illustrativeCost: 'Valoare mobilier distrus: 12.000 – 25.000 RON',
    withoutInsurance: {
      title: 'Doar contractul de transport de bază',
      statusLabel: 'Despăgubire simbolică de câteva sute de lei',
      financialImpact: 'Pierdere financiară de mii de euro suportată personal',
      points: [
        'Transportatorii mici nu au polițe profesionale și invocă limita de răspundere per kilogram de mobilă.',
        'Un proces civil împotriva unui SRL fără active durează ani și implică onorarii de avocați.',
        'Bucuria mutării în casa nouă este umbrită de pierderea unei piese de suflet.'
      ],
      summary: 'Fără asigurare de bunuri în tranzit, mobilierul deteriorat de cărăuși rămâne o pierdere asumată.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă de Locuință (Clauza de Bunuri pe durata Relocării / Goods in Transit)',
      statusLabel: 'Despăgubire completă la valoarea reală de înlocuire',
      financialImpact: 'Contravaloarea mobilierului despăgubită de asigurător',
      points: [
        'Polițele complete de locuință oferă acoperire automată pentru bunurile asigurate pe o durată de 30 de zile pe durata schimbării domiciliului.',
        'Sunt decontate daunele produse de cădere, manipulare defectuoasă sau răsturnare a vehiculului pe traseu.',
        'Mobilierul este restaurat profesional sau despăgubit integral.'
      ],
      summary: 'Relocarea familiei se derulează în deplină siguranță financiară.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de schimbare a domiciliului', detail: 'Verifică dacă asigurarea ta de locuință acoperă automat bunurile transportate către noua adresă declarată.' },
        { label: 'Fotografii înainte de împachetare', detail: 'Fă întotdeauna fotografii clare ale fiecărei piese înainte de ridicarea de către echipa de mutări.' }
      ]
    },
    immediateSteps: [
      'Notează pe avizul de însoțire a mărfii sau pe foaia de recepție dauna exactă produsă.',
      'Nu permite echipei de mutări să arunce fragmentele sparte din lemn.',
      'Fotografiază piesa avariată și locul căderii pe casa scării.',
      'Deschide dosarul la compania ta de asigurări de locuință.'
    ],
    usefulDocuments: [
      'Documentul de transport semnat cu mențiunea daunelor',
      'Factura inițială de achiziție a piesei de mobilier',
      'Polița de asigurare facultativă de locuință'
    ],
    advisorQuestions: [
      'Include polița mea acoperire pentru daune produse de firmele de mutări în timpul transportului?',
      'Care este procedura de evaluare a mobilierului artizanal vechi?'
    ],
    disclaimer: 'Acoperirea bunurilor pe durata mutării necesită notificarea prealabilă a noii adrese către asigurător.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('familie.ts', 'familieScenarios', extraFamilie);

console.log('✓ All 4 categories expanded successfully!');
