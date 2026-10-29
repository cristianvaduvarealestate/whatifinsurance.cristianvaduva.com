// scripts/generate-all-scenarios.js
// Generates clean, robust, highly detailed TypeScript scenario definitions for the 9 remaining categories.

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'src', 'data', 'scenarios');

// Let's create the auto scenarios
const autoScenarios = [
  {
    id: 'auto-tamponare-minora-costuri-mari',
    slug: 'tamponare-minora-costuri-mari',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Tamponare ușoară în trafic cu senzori și faruri laser distruse',
    mainQuestion: 'Ce se întâmplă dacă lovești ușor bara din față într-o frânare bruscă în coloană?',
    shortDescription: 'O viteză de doar 20 km/h sparge farurile adaptive Matrix LED, grila activă și senzorii radar/LiDAR.',
    situation: 'În timp ce înaintezi lent pe bulevard la oră de vârf, mașina din față oprește neașteptat. Impactul are loc la circa 20 km/h. Caroseria metalică pare aproape intactă, dar farul laser dreapta este spart, bara de plastic a crăpat în dreptul senzorului radar de distanță (ACC), iar camera frontală este decalibrată.',
    heroImage: '/images/scenarios/car-crash.jpg',
    imageCaption: 'La vehiculele moderne, sistemele ADAS și blocurile optice complexe transformă o tamponare ușoară într-o reparație de mii de euro.',
    severityLabel: 'Risc Financiar Moderat spre Ridicat',
    featured: true,
    tags: ['tamponare', 'costuri-reparatii', 'radar-adas', 'faruri-led', 'casco'],
    illustrativeCost: 'Cost estimat reparații reprezentanță: 18.000 – 45.000 RON (în funcție de marcă și senzoristică)',
    withoutInsurance: {
      title: 'Fără CASCO (Doar RCA obligatoriu)',
      statusLabel: 'Reparație achitată integral din buget propriu',
      financialImpact: 'Pierdere financiară directă: 18.000 – 45.000 RON',
      points: [
        'Dacă tu ești vinovat de impactul din spate, asigurarea ta RCA plătește doar reparația mașinii din față.',
        'Vehiculul tău nu beneficiază de nicio despăgubire din RCA-ul propriu.',
        'Un singur far Matrix LED sau laser original costă între 8.000 și 20.000 RON fără manoperă.',
        'Calibrarea senzorilor radar ADAS pe stand dedicat necesită service autorizat cu costuri ridicate.'
      ],
      summary: 'Dacă nu ai CASCO activ, pentru mașina proprie suporți integral devizul de piese originale și calibrare electronică.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO completă',
      statusLabel: 'Reparație acoperită în rețea de service autorizată',
      financialImpact: 'Plătești doar franșiza contractuală agreată (uzual 100 – 200 EUR)',
      points: [
        'Asigurătorul CASCO emite accept de plată direct către reprezentanță sau service-ul partener.',
        'Piesele electronice și optice avariate sunt înlocuite cu componente originale de origine (OE).',
        'Sunt decontate operațiunile specializate de aliniere a caroseriei și calibrare a radarelor frontale.',
        'Multe polițe oferă mașină de curtoazie la schimb pe durata reparației în service.'
      ],
      summary: 'Impactul financiar este limitat strict la valoarea franșizei contractuale specificate în contract.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Franșiza la avarii proprii', detail: 'Verifică dacă franșiza este fixă (ex. 100 EUR) sau procentuală (ex. 10% din daună).' },
        { label: 'Decontare reprezentanță', detail: 'Asigură-te că polița permite reparația în rețeaua oficială a mărcii, nu doar în ateliere agreate generice.' },
        { label: 'Vehicul la schimb', detail: 'Verifică numărul de zile pentru mașina de curtoazie pe durata reparației caroseriei.' },
        { label: 'Clauza piese originale', detail: 'Asigură-te că asigurătorul nu impune piese aftermarket la mașini aflate în garanție de producător.' }
      ]
    },
    immediateSteps: [
      'Completează formularul de Constatare Amiabilă cu celălalt șofer sau mergi la Biroul de Accidente Ușoare dacă sunt dispute.',
      'Fotografiază detaliat poziția ambelor vehicule, numerele de înmatriculare și componentele avariate înainte de mutare.',
      'Deschide dosarul de daună CASCO la asigurătorul tău în termenul prevăzut (uzual 24-48 de ore).',
      'Nu efectua reparații sau demontări înainte de constatarea fizică a inspectorului de daune.'
    ],
    usefulDocuments: [
      'Formularul de Constatare Amiabilă semnat de ambele părți sau Procesul-Verbal Poliție',
      'Polița CASCO și copia cărții de identitate a vehiculului (CIV)',
      'Permisul de conducere și certificatul de înmatriculare cu ITP valabil',
      'Fotografii de la locul impactului'
    ],
    advisorQuestions: [
      'Ce franșiză se aplică dacă dauna are loc din vina mea exclusivă?',
      'Este acoperită calibrarea computerizată a senzorilor ADAS în devizul CASCO?',
      'Afectează această daună coeficientul de bonus/malus la reînnoirea poliței viitoare?'
    ],
    disclaimer: 'Acest scenariu este informativ. Despăgubirea depinde de termenii poliței CASCO, franșiză și dinamica producerii evenimentului.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-parcare-lovit-autor-necunoscut',
    slug: 'parcare-lovit-autor-necunoscut',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Găsești mașina lovită în parcare și autorul a fugit',
    mainQuestion: 'Ce se întâmplă dacă mașina parcată regulamentar este avariată serios de un șofer care părăsește locul faptei?',
    shortDescription: 'O aripă înfundată, portieră deformată și oglindă ruptă pe timpul nopții, fără bilet pe parbriz.',
    situation: 'Cobori dimineața la mașină și găsești partea laterală stânga complet zgâriată și înfundată: portiera șoferului nu se mai deschide, aripa spate este îndoită, iar oglinda este atârnată în cabluri. Niciun bilet de contact lăsat, iar în zonă nu există camere publice evidente.',
    heroImage: '/images/scenarios/parking-hit-run.jpg',
    imageCaption: 'Avariile produse în parcare cu autor necunoscut reprezintă o proporție masivă a dosarelor CASCO deschise în mediul urban.',
    severityLabel: 'Risc Financiar Moderat',
    featured: true,
    tags: ['parcare', 'autor-necunoscut', 'hit-and-run', 'casco', 'vandalism'],
    illustrativeCost: 'Cost reparație tinichigerie și vopsitorie: 6.000 – 16.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO (Doar RCA)',
      statusLabel: 'Fără despăgubire posibilă',
      financialImpact: 'Cost integral din economii proprii: 6.000 – 16.000 RON',
      points: [
        'Fondul de Protecție a Victimelor Străzii (BAAR) NU plătește daune materiale produse de autori necunoscuți decât în condiții foarte stricte legate de vătămări corporale grave.',
        'Poliția eliberează doar o Autorizație de Reparație pentru autor necunoscut, fără compensație bănească.',
        'Toate costurile de îndreptare a elementelor, schimbare de oglindă și vopsire cad exclusiv în sarcina ta.'
      ],
      summary: 'În lipsa identificării făptașului sau a unei polițe facultative CASCO, dauna nu este decontată de nimeni.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO activă',
      statusLabel: 'Despăgubire în baza autorizației emise de Poliție',
      financialImpact: 'Doar franșiza agreată per eveniment (ex. 100 EUR)',
      points: [
        'Evenimentul este încadrat ca daună cu autor necunoscut sau avarie în parcare, riscuri standard în polița CASCO.',
        'Poliția eliberează Autorizația de Reparație, actul obligatoriu pentru deschiderea dosarului.',
        'Service-ul înlocuiește piesele afectate și vopsește elementele la standardele tehnice ale mărcii.'
      ],
      summary: 'CASCO preia costurile de reparație fără a depinde de găsirea vinovatului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Franșiza la autor necunoscut', detail: 'Anumiți asigurători percep o franșiză specifică mai mare pentru daune fără vinovat identificat.' },
        { label: 'Termenul de declarare la Poliție', detail: 'Legea cere declararea în maximum 24 de ore la Biroul de Accidente Ușoare pentru autorizația legală.' },
        { label: 'Numărul de evenimente fără franșiză', detail: 'Unele polițe premium oferă o daună de parcare pe an fără aplicarea franșizei.' }
      ]
    },
    immediateSteps: [
      'Nu muta mașina înainte de a face poze clare de ansamblu și prim-plan cu vopseaua transferată și urmele.',
      'Verifică dacă există camere de supraveghere pe clădirile din proximitate (bănci, magazine, interfoane).',
      'Mergi în maximum 24 de ore la Biroul de Accidente Ușoare din raza sectorului/orașului pentru eliberarea Autorizației de Reparație.',
      'Avizează dauna către asigurătorul CASCO transmițând autorizația eliberată de Poliție.'
    ],
    usefulDocuments: [
      'Autorizația de Reparație eliberată de Poliția Rutieră',
      'Polița CASCO și anexa cu condițiile contractuale',
      'Certificatul de înmatriculare și Cartea de Identitate a proprietarului',
      'Fotografiile realizate la fața locului în momentul constatării'
    ],
    advisorQuestions: [
      'Am franșiză dedicată pentru evenimente cu autor necunoscut?',
      'Pot efectua reparația în regie proprie sau doar prin decontare directă către service?',
      'Dacă Poliția găsește ulterior vinovatul pe camere, îmi recuperez franșiza plătită prin regres?'
    ],
    disclaimer: 'Prezentare strict educațională. Acoperirea depinde de clauzele contractuale CASCO și obținerea autorizației legale de la Poliție.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-sofer-neainsurat-rca-expirat',
    slug: 'sofer-neainsurat-rca-expirat',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Ești lovit de un șofer fără poliță RCA valabilă',
    mainQuestion: 'Cine îți plătește reparația dacă mașina este avariată serios de un conducător auto neasigurat?',
    shortDescription: 'Celălalt șofer recunoaște vina, dar polița sa RCA este expirată de două luni.',
    situation: 'O mașină nu acordă prioritate într-un sens giratoriu și intră în plin în aripa și roata ta dreaptă. Când schimbați actele, constați că asigurarea RCA a celuilalt șofer a expirat de 60 de zile. Șoferul nu are fonduri lichide pentru a achita pe loc dauna evaluată preliminar la peste 15.000 RON.',
    heroImage: '/images/scenarios/uninsured-driver.jpg',
    imageCaption: 'Peste 200.000 de vehicule circulă fără RCA valabil în România, punând ceilalți participanți la trafic în fața unor recuperări complicate de creanțe.',
    severityLabel: 'Risc Financiar și Juridic Ridicat',
    featured: false,
    tags: ['rca-expirat', 'sofer-neasigurat', 'baar', 'decontare-directa', 'recuperare-daune'],
    illustrativeCost: 'Costuri estimative: 12.000 – 35.000 RON + procedură de recuperare de până la 6-12 luni',
    withoutInsurance: {
      title: 'Fără CASCO și fără Decontare Directă pe RCA propriu',
      statusLabel: 'Procedură anevoioasă prin Fondul de Protecție BAAR',
      financialImpact: 'Blocaj financiar temporar și timp îndelungat de soluționare',
      points: [
        'Trebuie să te adresezi Biroului Asigurătorilor de Autovehicule din România (BAAR - Fondul de Protecție a Victimelor Străzii).',
        'Procedura BAAR necesită dosar complet, anchetă și poate dura luni de zile până la efectuarea plății efective.',
        'Dacă decizi să repari mașina din banii tăi până la plata BAAR, ai fondurile blocate.',
        'Dacă BAAR refuză sau contestă vreo componentă, singura alternativă este acționarea în judecată a șoferului vinovat.'
      ],
      summary: 'Reparația poate fi amânată luni de zile sau necesită acțiune civilă în instanță împotriva persoanei fizice vinovate.'
    },
    withInsurance: {
      title: 'Cu CASCO cu regres sau RCA cu Decontare Directă',
      statusLabel: 'Reparație imediată și regres juridic gestionat de asigurător',
      financialImpact: 'Zero costuri nete după finalizarea procedurii de regres',
      points: [
        'Deschizi dosar pe propriul CASCO. Asigurătorul tău repară imediat mașina în service partener.',
        'Compania ta de asigurări preia sarcina de a recupera toți banii de la șoferul vinovat sau de la BAAR prin acțiune în regres.',
        'Franșiza achitată inițial la CASCO îți este returnată după ce asigurătorul recuperează prejudiciul.',
        'Nu pierzi timpul în procese civile sau la audieri cu persoana fizică vinovată.'
      ],
      summary: 'CASCO funcționează ca un scut financiar: mașina se repară imediat, iar recuperarea banilor devine treaba asigurătorului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de regres CASCO', detail: 'Confirmă că nu pierzi bonusul CASCO dacă deschizi dosar pentru o daună cu vinovat identificat fără RCA.' },
        { label: 'Restituirea franșizei', detail: 'Verifică procedura și termenul de recuperare a franșizei plătite după finalizarea regresului.' },
        { label: 'Clauza de Decontare Directă pe RCA', detail: 'Decontarea directă pe RCA se aplică doar dacă ambele vehicule au RCA valabil; dacă vinovatul nu are RCA, doar CASCO te protejează direct.' }
      ]
    },
    immediateSteps: [
      'Refuză amiabila clasică dacă celălalt nu are RCA valabil și mergi imediat la Biroul de Poliție Rutieră.',
      'Solicită polițistului menționarea clară în Procesul-Verbal a lipsei poliței RCA la data accidentului.',
      'Notifică asigurătorul tău CASCO specificând că dorești reparația cu formularea ulterioară de regres.',
      'Păstrează toate dovezile, devizele și chitanțele emise de atelierul de reparații.'
    ],
    usefulDocuments: [
      'Procesul-Verbal eliberat de Poliția Rutieră ce atestă vinovăția și lipsa asigurării RCA a vinovatului',
      'Polița CASCO sau adeverința de deschidere dosar regres',
      'Devizul de reparații și factura fiscală din service'
    ],
    advisorQuestions: [
      'Cum procedați la CASCO pentru a recupera banii de la șoferul fără asigurare?',
      'În cât timp îmi este restituită franșiza plătită după pornirea acțiunii de regres?'
    ],
    disclaimer: 'Informație cu caracter general. Procedura BAAR și clauzele de regres diferă în funcție de contract.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-furt-complet-masina',
    slug: 'furt-complet-masina',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Mașina este furată din fața blocului',
    mainQuestion: 'Ce se întâmplă dacă mașina ta dispare pe timpul nopții sau este sustrasă prin metoda releu (keyless)?',
    shortDescription: 'O dimineață în care locul de parcare este gol, iar cheile originale sunt încă pe noptieră.',
    situation: 'Un autoturism modern dotat cu sistem Keyless Go este clonat de la distanță cu un amplificator de semnal în miez de noapte. Mașina este deschisă și pornită în mai puțin de două minute, fără nicio urmă de efracție mecanică. Proprietarul realizează furtul abia la ora 08:00.',
    heroImage: '/images/scenarios/stolen-car.jpg',
    imageCaption: 'Furtul prin atac de tip „releu keyless” vizează frecvent mașinile premium parcate pe străzi rezidențiale.',
    severityLabel: 'Pierdere Totală de Capital',
    featured: true,
    tags: ['furt-auto', 'keyless-go', 'pierdere-totala', 'casco', 'polita-auto'],
    illustrativeCost: 'Valoare vehicul pierdut: 100.000 – 350.000 RON (sau valoarea de piață a mașinii)',
    withoutInsurance: {
      title: 'Fără CASCO cu risc de furt inclus',
      statusLabel: 'Pierdere financiară de 100%',
      financialImpact: 'Pierderea întregii valori a autoturismului',
      points: [
        'Rata de recuperare a mașinilor furate și dezmembrate rapid pentru piese este redusă.',
        'Dacă autoturismul a fost cumpărat în leasing sau credit, ești obligat legal să continui plata ratelor integrale.',
        'Nicio instituție de stat nu compensează contravaloarea mașinii sustrase.',
        'Rămâi fără mijloc de mobilitate și cu datoria financiară activă.'
      ],
      summary: 'Fără o poliță CASCO dedicată, furtul reprezintă o gaură financiară completă și ireversibilă.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO (Clauza de Furt Total)',
      statusLabel: 'Despăgubire la valoarea asigurată agreată',
      financialImpact: 'Primești suma asigurată minus cota de uzură/franșiza contractuală',
      points: [
        'După finalizarea anchetei de Poliție (termen uzual de 30-60 de zile), asigurătorul virează despăgubirea.',
        'Dacă mașina e în leasing, asigurătorul închide datoria către finanțator, iar diferența îți revine ție.',
        'Polițele CASCO de top includ clauza GAP (Garantarea Valorii de Factură) care acoperă chiar prețul inițial de achiziție din factură.'
      ],
      summary: 'Recuperezi capitalul necesar pentru achiziția unui nou autoturism, limitând pierderea la franșiza agreată.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Predarea ambelor chei originale', detail: 'Condiție eliminatorie: asigurătorul cere predarea ambelor chei originale și telecomenzilor pentru a exclude neglijența gravă.' },
        { label: 'Clauza GAP (Guaranteed Asset Protection)', detail: 'Verifică dacă ai opțiunea GAP pentru a nu pierde devalorizarea anuală din cotația de piață.' },
        { label: 'Termenul de declarare la Poliție și Asigurător', detail: 'Trebuie să suni imediat la 112 și să notifici asigurătorul în termen de maximum 24 de ore.' }
      ]
    },
    immediateSteps: [
      'Apelează imediat numărul de urgență 112 și declară furtul autovehiculului.',
      'Izolează cheile originale, talonul și cartea mașinii (nu lăsa niciodată actele originale în torpedoul mașinii!).',
      'Obține de la Poliție adeverința oficială de înregistrare a plângerii penale de furt.',
      'Transmite avizarea oficială către asigurătorul CASCO împreună cu documentele solicitate.'
    ],
    usefulDocuments: [
      'Toate seturile de chei originale ale autoturismului',
      'Cartea de Identitate a Vehiculului (CIV) în original',
      'Certificatul de înmatriculare dacă nu era în mașină',
      'Dovada eliberată de Secția de Poliție privind plângerea de furt'
    ],
    advisorQuestions: [
      'Ce se întâmplă dacă un set de chei a fost pierdut anterior producerii furtului?',
      'Include contractul meu acoperire GAP pentru valoarea de nou a mașinii?',
      'Care este termenul exact contractual de plată după clasarea sau suspendarea anchetei de către Parchet?'
    ],
    disclaimer: 'Despăgubirea la furt este condiționată strict de depunerea tuturor cheilor originale și neabandonarea documentelor în autovehicul.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-grindina-plafon-capota',
    slug: 'grindina-plafon-capota',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Furtună violentă cu grindină de mărimea unui ou',
    mainQuestion: 'Ce se întâmplă dacă mașina este ciuruită de grindină pe plafon, capotă și stâlpii laterali?',
    shortDescription: 'Zeci de adâncituri pe fiecare panou de caroserie, parbriz fisurat și stopuri sparte în doar 10 minute de furtună.',
    situation: 'O furtună de vară de o intensitate rară lovește orașul. Bucăți de gheață de 4-5 cm diametru lovesc mașina parcată în aer liber. Plafonul, capota, aripile și capacul portbagajului prezintă peste 150 de puncte de deformare, iar luneta din spate a cedat sub impact.',
    heroImage: '/images/scenarios/hail-damage.jpg',
    imageCaption: 'Daunele provocate de grindină pot depăși rapid 50% din valoarea comercială a mașinii din cauza volumului uriaș de ore de manoperă PDR.',
    severityLabel: 'Risc Financiar Ridicat',
    featured: true,
    tags: ['grindina', 'fenomene-naturale', 'pdr-reparatii', 'parbriz-spart', 'casco'],
    illustrativeCost: 'Cost reparație PDR (fără revopsire) sau tinichigerie: 15.000 – 40.000 RON',
    withoutInsurance: {
      title: 'Fără poliță facultativă CASCO',
      statusLabel: 'Cost integral din buget personal',
      financialImpact: 'Pierdere de 15.000 – 40.000 RON sau depreciere masivă la revânzare',
      points: [
        'Fenomenele meteo extreme nu sunt decontate prin asigurarea RCA sau de către autoritățile locale.',
        'Tehnica de tinichigerie fără revopsire (PDR - Paintless Dent Removal) este extrem de meticuloasă și scumpă.',
        'Dacă nu repari mașina, valoarea ei de revânzare scade dramatic, devenind greu de înstrăinat.',
        'Trebuie să achiți din buzunar înlocuirea geamurilor sparte pentru a proteja interiorul de ploaie.'
      ],
      summary: 'Fenomenele meteo extreme sunt riscuri personale pure în absența unei asigurări CASCO.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO cu riscuri naturale incluse',
      statusLabel: 'Decontare integrală PDR sau înlocuire elemente',
      financialImpact: 'Plata franșizei contractuale (ex. 100 EUR)',
      points: [
        'Riscul de grindină, furtună și cădere de corpuri este inclus standard în majoritatea contractelor CASCO complete.',
        'Asigurătorul decontează tehnologia PDR în ateliere specializate, păstrând vopseaua originală a mașinii intactă.',
        'Geamurile, chederele și parbrizul sunt înlocuite cu piese noi certificate.'
      ],
      summary: 'Mașina este adusă la starea estetică inițială fără pierdere de valoare la revânzare.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția fenomenelor naturale', detail: 'Asigură-te că grindina nu este exclusă sau limitată la un plafon maxim de despăgubire.' },
        { label: 'Atestatul meteo', detail: 'Verifică dacă asigurătorul cere buletin de la Administrația Națională de Meteorologie (ANM) pentru confirmarea fenomenului.' },
        { label: 'Franșiza la evenimente naturale', detail: 'Unele contracte aplică aceeași franșiză ca la avarii accidentale sau chiar franșiză zero la geamuri.' }
      ]
    },
    immediateSteps: [
      'Protejează temporar mașina cu o prelată sau folie pentru a preveni pătrunderea apei prin geamurile fisurate.',
      'Fotografiază mașina la fața locului alături de bucățile de grindină sau ziare/știri locale despre furtună.',
      'Contactează centrul de daune CASCO pentru avizarea evenimentului meteo.',
      'Solicită direcționarea către un atelier certificat în tehnica PDR.'
    ],
    usefulDocuments: [
      'Polița CASCO valabilă la momentul furtunii',
      'Fotografii detaliate ale caroseriei și ale fenomenului meteo',
      'Articole de presă sau buletin ANM dacă asigurătorul solicită dovada oficială a grindinei'
    ],
    advisorQuestions: [
      'Polița mea acceptă decontarea reparației prin tehnica PDR fără revopsire?',
      'Este necesară eliberarea unei dovezi de la Poliție sau e suficientă constatarea directă a asigurătorului?'
    ],
    disclaimer: 'Acest material este pur educațional. Evaluarea daunelor de grindină se face exclusiv pe baza inspecției tehnice de specialitate.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-parbriz-crapat-autostrada',
    slug: 'parbriz-crapat-autostrada',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Piatră sărită pe autostradă și parbriz crăpat cu senzori',
    mainQuestion: 'Ce se întâmplă dacă o piatră aruncată de o roată fisurează un parbriz încălzit cu Head-Up Display?',
    shortDescription: 'O ciobitură mică se transformă într-o fisură de 30 cm sub variația de temperatură a climei.',
    situation: 'Rulați regulamentar pe autostradă când o pietricică proiectată de un camion de pe banda alăturată lovește parbrizul. În câteva secunde, fisura se extinde exact prin câmpul vizual al șoferului și prin dreptul camerei pentru păstrarea benzii. Mașina are parbriz atermic, cu încălzire electrică în rețea și afișaj Head-Up Display (HUD).',
    heroImage: '/images/scenarios/windshield-crack.jpg',
    imageCaption: 'Parbrizele inteligente moderne nu mai sunt doar sticlă: ele conțin pelicule optice HUD, senzori de ploaie și camere de ghidaj.',
    severityLabel: 'Risc Financiar Moderat',
    featured: false,
    tags: ['parbriz', 'autostrada', 'piatra-sarita', 'hud', 'casco-geamuri'],
    illustrativeCost: 'Cost înlocuire parbriz original + calibrare ADAS: 5.000 – 16.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO sau clauză de geamuri',
      statusLabel: 'Plată integrală la service',
      financialImpact: '5.000 – 16.000 RON din bugetul personal',
      points: [
        'Nu poți atrage răspunderea șoferului camionului decât dacă ai dovadă video că încărcătura sa nu era asigurată conform normelor.',
        'Nu poți trece inspecția tehnică periodică (ITP) cu o fisură în câmpul de vizibilitate directă al șoferului.',
        'Un parbriz aftermarket ieftin poate distorsiona proiecția HUD și poate cauza erori la camera de frânare automată.'
      ],
      summary: 'Ești nevoit să suporți costul sticlei speciale și al recalibrării electronice din buzunar.'
    },
    withInsurance: {
      title: 'Cu CASCO cu clauză de geamuri / elemente vitrate',
      statusLabel: 'Înlocuire acoperită, adesea cu franșiză zero',
      financialImpact: '0 – 100 EUR în funcție de contract',
      points: [
        'Multe polițe CASCO oferă clauza „Doar Geamuri” fără franșiză sau cu franșiză redusă.',
        'Înlocuirea se face rapid prin centre specializate de parbrize partenere.',
        'Este decontată atât sticla originală conform specificațiilor din fabrică, cât și calibrarea camerei optice.'
      ],
      summary: 'Schimbul parbrizului este rezolvat rapid fără efort financiar major.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Franșiza la geamuri', detail: 'Verifică dacă daunele exclusiv la suprafețele vitrate au franșiză separată sau sunt scutite de franșiză.' },
        { label: 'Piese originale (OEM)', detail: 'Asigură-te că polița permite montarea unui parbriz original marcat cu sigla producătorului auto.' },
        { label: 'Impactul asupra bonus/malus', detail: 'Întreabă dacă înlocuirea unui parbriz este contorizată ca eveniment negativ la reînnoire.' }
      ]
    },
    immediateSteps: [
      'Nu spăla parbrizul cu apă rece când e cald afară pentru a evita extinderea violentă a crăpăturii.',
      'Lipește temporar o bandă adezivă transparentă pe zona de impact pentru a preveni intrarea prafului.',
      'Fotografiază punctul de impact și fisura din interior și exterior.',
      'Contactează asigurătorul pentru programare la constatare sau direct la centrul partener de parbrize.'
    ],
    usefulDocuments: [
      'Polița CASCO',
      'Certificatul de înmatriculare al vehiculului',
      'Fotografii ale parbrizului și seriei de șasiu'
    ],
    advisorQuestions: [
      'Se aplică franșiză dacă dauna este strict la parbriz?',
      'Este acoperită și recalibrarea camerei de asistență la rulare?'
    ],
    disclaimer: 'Articol informativ. Condițiile de înlocuire a parbrizelor depind de fiecare poliță CASCO în parte.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-inundatie-apa-motor-hidroizolare',
    slug: 'inundatie-apa-motor-hidroizolare',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Apă absorbită la motor la trecerea printr-un pasaj inundat',
    mainQuestion: 'Ce se întâmplă dacă forțezi o acumulare de apă pe carosabil și motorul aspiră apă prin admisie?',
    shortDescription: 'Fenomenul de „lovitură de berbec” blochează pistoanele și distruge ireversibil blocul motor.',
    situation: 'După o aversă torențială, un pasaj rutier subteran acumulează o baltă adâncă de 40 cm. Șoferul decide să traverseze urmând alte mașini mari. În mijlocul apei, valul creat pătrunde prin fanta de admisie a aerului. Motorul se oprește brusc cu un zgomot metalic puternic (hidrolock / șoc hidraulic).',
    heroImage: '/images/scenarios/water-engine.jpg',
    imageCaption: 'Aspirarea apei în camera de ardere provoacă deformarea bielor și fisurarea blocului motor, necesitând înlocuirea completă a propulsorului.',
    severityLabel: 'Daună Majoră / Risc de Excludere',
    featured: true,
    tags: ['inundatie-motor', 'hidrolock', 'excludere-culpa', 'casco', 'ape-mari'],
    illustrativeCost: 'Cost înlocuire motor nou/recondiționat: 30.000 – 90.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO sau dacă acțiunea este considerată culpă gravă',
      statusLabel: 'Cost suportat integral de proprietar',
      financialImpact: 'Pierdere financiară de 30.000 – 90.000 RON',
      points: [
        'Primăria sau administratorul drumului nu plătește decât dacă demonstrezi în instanță semnalizarea necorespunzătoare a căii rutiere.',
        'Costul unui motor complet nou depășește adesea valoarea reziduală a mașinii, provocând daună totală economică.',
        'Toate verificările, tractarea și piesele cad în sarcina exclusivă a proprietarului.'
      ],
      summary: 'Înlocuirea motorului afectat de hidrolock reprezintă una dintre cele mai scumpe avarii posibile.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO (Sub rezerva evaluării culpei)',
      statusLabel: 'Acoperire dependentă de condițiile contractuale',
      financialImpact: 'Acoperit doar dacă evenimentul nu este exclus explicit ca „forțare culpabilă a apei”',
      points: [
        'Dacă mașina era parcată și apa a crescut peste ea, dauna este acoperită 100% ca inundație naturală.',
        'ATENȚIE: Dacă șoferul a forțat în mod deliberat o zonă marcată ca inundată sau cu ape mari, mulți asigurători invocă clauza de neglijență gravă / manevră imprudentă.',
        'Dacă polița include clauză extinsă pentru fenomene hidro și nu există excludere specifică, dauna poate fi decontată.'
      ],
      summary: 'Nu orice inundație de motor este automat acoperită. Termenii contractuali fac diferența între despăgubire și refuz legitim.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Excluderea forțării apelor', detail: 'Verifică dacă scrie explicit: „Sunt excluse daunele produse ca urmare a pătrunderii cu bună știință în ape stătătoare sau zone inundate”.' },
        { label: 'Staționare vs Rulare', detail: 'Asigurarea face o distincție clară între vehicul surprins staționat și vehicul condus activ prin apă adâncă.' },
        { label: 'Repunerea în funcțiune', detail: 'Nu încerca niciodată să repornești motorul după oprirea în apă; forțarea electromotorului agravează dauna și anulează despăgubirea.' }
      ]
    },
    immediateSteps: [
      'NU încerca sub nicio formă să repornești motorul din cheie sau buton.',
      'Scoate cheia din contact, cuplează cutia pe liber și împinge mașina pe teren uscat sau apelează platforma.',
      'Fotografiază nivelul apei pe caroserie și mediul înconjurător.',
      'Transportă mașina pe platformă direct la un service autorizat pentru desfacerea bujiilor/injectoarelor.'
    ],
    usefulDocuments: [
      'Polița CASCO',
      'Raportul de constatare tehnică din service privind cauza opririi',
      'Fotografii de la fața locului'
    ],
    advisorQuestions: [
      'Cum tratează asigurătorul meu aspirarea apei la motor în timpul mersului?',
      'Este considerată neglijență gravă traversarea unei zone cu bălți pe carosabil public?'
    ],
    disclaimer: 'Atenție critică: Multe companii exclud expres avariile de motor produse prin forțarea vadurilor de apă.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-baterie-vehicul-electric-avarie',
    slug: 'baterie-vehicul-electric-avarie',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Pachetul de baterii al unei mașini electrice este lovit pe dedesubt',
    mainQuestion: 'Ce se întâmplă dacă lovești un corp dur pe șosea și carcasa bateriei de tracțiune este deformată?',
    shortDescription: 'Un bolovan de pe carosabil zgârie și înfunde scutul inferior al bateriei de înaltă tensiune (800V).',
    situation: 'Conduci un vehicul electric pe timp de noapte. Pe carosabil se află o bucată de bordură căzută dintr-un camion. Treci peste ea, iar zgomotul de impact sub podea este puternic. La reprezentanță, tehnicienii constată că scutul din titan/aluminiu este deformat, iar protocoalele producătorului cer înlocuirea completă a întregului pack de baterii pentru securitate contra incendiilor.',
    heroImage: '/images/scenarios/ev-battery-damage.jpg',
    imageCaption: 'La mașinile electrice, o deformare structurală minoră a pachetului de baterii impune adesea înlocuirea totală conform normelor stricte ale producătorilor.',
    severityLabel: 'Daună Totală Economică',
    featured: true,
    tags: ['vehicul-electric', 'baterie-ev', 'casco-electric', 'dauna-totala', 'inalta-tensiune'],
    illustrativeCost: 'Cost pachet baterie originală: 70.000 – 180.000 RON (frecvent daună totală economică)',
    withoutInsurance: {
      title: 'Fără poliță CASCO dedicată EV',
      statusLabel: 'Pierdere financiară catastrofală',
      financialImpact: 'Până la 180.000 RON sau radierea vehiculului',
      points: [
        'Producătorii interzic reparațiile improvizate la celulele de înaltă tensiune din motive de siguranță contra incendiilor chimice.',
        'Costul pachetului nou de baterii plus manopera autorizată depășește adesea valoarea întregii mașini second-hand.',
        'Fără CASCO, mașina devine o epavă inutilizabilă dacă nu ai resursele pentru înlocuire.'
      ],
      summary: 'Impactul sub podea la un EV fără asigurare poate distruge ireversibil investiția în mașină.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO adaptată pentru vehicule electrice',
      statusLabel: 'Acoperire completă a pachetului de baterii',
      financialImpact: 'Plata franșizei sau despăgubire de daună totală la valoarea asigurată',
      points: [
        'Polițele CASCO moderne includ explicit protecția bateriei de tracțiune la coliziuni cu obiecte de pe carosabil.',
        'Dacă devizul bateriei depășește 70-80% din valoarea mașinii, se declară daună totală și primești valoarea asigurată minus epava.',
        'Sunt acoperite cablurile de înaltă tensiune, invertorul și electronica de management termic (BMS).'
      ],
      summary: 'Ești protejat contra riscului financiar major specific arhitecturii mașinilor electrice.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza specifică EV / Baterie', detail: 'Verifică dacă bateria este asigurată ca parte integrantă a mașinii sau dacă există excluderi pentru avarii de șasiu inferior.' },
        { label: 'Stația de încărcare și cablurile', detail: 'Verifică dacă polița acoperă furtul sau deteriorarea cablului Type 2 / CCS și a stației de perete (Wallbox).' },
        { label: 'Tractarea pe platformă dedicată', detail: 'Vehiculele electrice nu pot fi tractate pe roți; asigură-te că asistența rutieră oferă platformă cu cărucior dacă roțile sunt blocate.' }
      ]
    },
    immediateSteps: [
      'Oprește în siguranță și verifică dacă pe bord apare vreun martor de avarie a sistemului de înaltă tensiune.',
      'Dacă miroase a fum chimic sau simți căldură sub podea, îndepărtează-te la distanță sigură și apelează 112.',
      'Nu permite tractarea pe roți a mașinii: transportul se face exclusiv pe platformă auto.',
      'Programează constatarea exclusiv la un atelier autorizat de înaltă tensiune (High Voltage Certified).'
    ],
    usefulDocuments: [
      'Polița CASCO',
      'Raportul de diagnoză al bateriei emis de service-ul autorizat',
      'Devizul de piese cu codul pachetului de baterii'
    ],
    advisorQuestions: [
      'Include CASCO acoperirea bateriei de înaltă tensiune la valoarea întreagă fără coeficient de uzură?',
      'Ce asistență rutieră am în caz de descărcare accidentală completă a bateriei?'
    ],
    disclaimer: 'Informații orientative. Tehnologia EV presupune reguli stricte de securitate dictate de producători.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-vandalism-zgariat-cheie-vopsea',
    slug: 'vandalism-zgariat-cheie-vopsea',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Mașina este vandalizată și zgâriată cu cheia pe toate elementele',
    mainQuestion: 'Ce se întâmplă dacă găsești mașina zgâriată adânc de jur împrejur peste noapte?',
    shortDescription: 'O dungă adâncă până la tablă trasată pe capotă, portiere, aripi și capacul portbagajului.',
    situation: 'Parchezi regulamentar pe o stradă rezidențială. Dimineața găsești toate elementele de caroserie laterale și capota zgâriate adânc cu un obiect ascuțit (cheie sau șurubelniță), plus vopsea spray aplicată pe parbriz. Vopseaua originală este afectată până la grund pe 8 panouri diferite.',
    heroImage: '/images/scenarios/car-vandalism.jpg',
    imageCaption: 'Actele de vandalism gratuit asupra autoturismelor necesită revopsirea integrală a caroseriei pe stand profesional.',
    severityLabel: 'Risc Financiar Moderat',
    featured: false,
    tags: ['vandalism', 'zgarieturi-cheie', 'vopsitorie-integrala', 'casco', 'daune-parcare'],
    illustrativeCost: 'Cost vopsitorie integrală în cabină: 8.000 – 22.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO (Doar RCA)',
      statusLabel: 'Zero despăgubire',
      financialImpact: 'Plată integrală: 8.000 – 22.000 RON',
      points: [
        'RCA-ul nu are nicio legătură cu faptele de vandalism asupra propriului automobil.',
        'Șansele ca Poliția să identifice autorul unui act de vandalism comis noaptea fără camere sunt minime.',
        'Rămâi cu mașina degradată estetic sau plătești revopsirea completă din economiile personale.'
      ],
      summary: 'Vandalismul este suportat 100% de proprietar dacă nu există asigurare CASCO.'
    },
    withInsurance: {
      title: 'Cu CASCO cu clauza de vandalism inclusă',
      statusLabel: 'Revopsire completă acoperită de asigurător',
      financialImpact: 'Doar franșiza contractuală (ex. 100 EUR)',
      points: [
        'Clauza de vandalism/acțiuni răuvoitoare ale terților acoperă revopsirea panourilor afectate.',
        'Mașina este pregătită și revopsită în cabină profesională la codul exact de culoare.',
        'Dosarul se deschide în baza dovezii de depunere a plângerii la Poliție.'
      ],
      summary: 'Caroseria este refăcută impecabil cu o cheltuială limitată strict la franșiză.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția vandalismului', detail: 'Verifică dacă vandalismul este inclus în pachetul de bază sau necesită o clauză adițională.' },
        { label: 'Dovada de la Poliție', detail: 'Majoritatea asigurătorilor cer depunerea unei plângeri penale la Poliție pentru distrugere (Art. 253 Cod Penal).' }
      ]
    },
    immediateSteps: [
      'Nu încerca să cureți vopseaua spray cu solvenți agresivi care pot distruge lacul.',
      'Fotografiază detaliat toate elementele zgâriate.',
      'Mergi la secția de Poliție pe raza căreia s-a produs fapta și depune plângere penală pentru distrugere.',
      'Notifică asigurătorul CASCO transmițând numărul de înregistrare al plângerii de la Poliție.'
    ],
    usefulDocuments: [
      'Dovada depunerii plângerii penale la Secția de Poliție',
      'Polița CASCO',
      'Fotografii martor cu toate componentele afectate'
    ],
    advisorQuestions: [
      'Ce documente cere asigurătorul pentru închiderea dosarului de vandalism?',
      'Pot alege vopsirea elementelor adiacente pentru a nu exista diferențe de nuanță?'
    ],
    disclaimer: 'Prezentare strict informativă. Polițele diferă în privința franșizelor aplicabile la actele de vandalism.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-bagaje-furate-din-portbagaj',
    slug: 'bagaje-furate-din-portbagaj',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Bagaje și bunuri de valoare furate din portbagajul încuiat',
    mainQuestion: 'Ce se întâmplă dacă geamul mașinii este spart într-o parcare și îți sunt sustrase valizele?',
    shortDescription: 'Hoții sparg geamul custode, rabatează bancheta și golesc portbagajul de genți și echipamente.',
    situation: 'Oprești la un popas sau într-o parcare turistică în drum spre concediu. În timp ce iei masa 30 de minute, hoții sparg geamul lateral mic, acționează maneta portbagajului și sustrag două valize conținând haine, o cameră foto și încălțăminte de marcă în valoare totală de 18.000 RON.',
    heroImage: '/images/scenarios/luggage-stolen-car.jpg',
    imageCaption: 'Furtul de bunuri din autovehicule este acoperit doar dacă există urme clare de efracție și o clauză specială pentru bagaje.',
    severityLabel: 'Risc Financiar Moderat',
    featured: false,
    tags: ['furt-bagaje', 'efractie-auto', 'casco-bagaje', 'bunuri-personale'],
    illustrativeCost: 'Valoare bunuri furate + geam spart: 12.000 – 25.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO cu clauză de bunuri transportate',
      statusLabel: 'Pierdere integrală a bunurilor',
      financialImpact: '12.000 – 25.000 RON pierdere totală',
      points: [
        'Polița CASCO standard acoperă de regulă DOAR reparația mașinii (geamul spart și capitonajul tăiat), NU și bunurile din interior.',
        'Bunurile mobile nu fac parte din autovehicul dacă nu ai cumpărat clauza opțională dedicată.',
        'Recuperarea bunurilor de la autori necunoscuți este extrem de rară.'
      ],
      summary: 'CASCO simplu îți repară geamul spart, dar hainele și electronicele furate rămân o pierdere personală totală.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO extinsă cu clauză de bagaje / bunuri personale',
      statusLabel: 'Despăgubire geam + compensație pentru conținutul furat',
      financialImpact: 'Recuperezi valoarea bunurilor până la limita din contract (ex. 1.000 – 3.000 EUR)',
      points: [
        'Geamul și daunele aduse tapițeriei sunt decontate integral pe avaria CASCO.',
        'Bunurile sustrase sunt despăgubite pe clauza dedicată dacă se face dovada efracției și a faptului că erau ascunse vederii în portbagaj.',
        'Multe polițe de asigurare de locuință cu clauză de „bunuri în afara casei” pot compensa de asemenea pierderea.'
      ],
      summary: 'Ești protejat atât pentru tabla și sticla mașinii, cât și pentru o parte din valoarea bagajelor furate.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Excluderea bunurilor lăsate la vedere', detail: 'Asigurătorul NU despăgubește bunuri lăsate pe scaune la vedere; este obligatoriu ca acestea să fi fost închise în portbagaj.' },
        { label: 'Sublimita de despăgubire pe obiect', detail: 'Verifică dacă există limită maximă per obiect (ex. max 500 EUR per laptop sau cameră).' },
        { label: 'Urme evidente de efracție', detail: 'Furtul fără urme vizibile de efracție (ex. bruiere telecomandă) este de regulă exclus.' }
      ]
    },
    immediateSteps: [
      'Nu atinge interiorul mașinii pentru a permite criminaliștilor prelevarea de amprente.',
      'Sună imediat la 112 și solicită echipaj de Poliție pentru constatarea efracției.',
      'Întocmește o listă exactă cu toate bunurile dispărute și caută facturile/chitanțele de achiziție.',
      'Avizează dauna la asigurător prezentând dovada plângerii penale.'
    ],
    usefulDocuments: [
      'Procesul-Verbal de cercetare la fața locului emis de Poliție',
      'Facturi sau extrase de cont care atestă cumpărarea bunurilor sustrase',
      'Polița CASCO cu clauza specifică de bagaje bifată'
    ],
    advisorQuestions: [
      'Include contractul meu CASCO protecție pentru bagajele aflate în portbagaj?',
      'Care este limita maximă de despăgubire pentru bunuri personale per eveniment?'
    ],
    disclaimer: 'Acoperirea bunurilor din vehicul este opțională și supusă unor reguli stricte privind efracția și depozitarea ascunsă.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-masina-inchiriata-avarie-vacanta',
    slug: 'masina-inchiriata-avarie-vacanta',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Avariezi mașina închiriată într-o vacanță în străinătate',
    mainQuestion: 'Ce se întâmplă dacă lovești o mașină de rent-a-car în Grecia sau Italia și nu ai cumpărat asigurarea completă de la ghișeu?',
    shortDescription: 'Compania de rent-a-car îți oprește instant întreaga garanție de 1.500 EUR de pe cardul de credit.',
    situation: 'Închiriezi o mașină la aeroport refuzând asigurarea „Super CDW” de 35 EUR/zi pentru a economisi bani. Într-o parcare îngustă pe coasta Amalfi, atingi un stâlp de piatră și deformezi pragul și portiera. La returnare, agentul consemnează dauna și debitează imediat depozitul de garanție de 1.800 EUR blocat pe card.',
    heroImage: '/images/scenarios/breakdown-abroad.jpg',
    imageCaption: 'Franșizele la companiile de rent-a-car pot atinge 1.500 – 2.500 EUR dacă nu există o acoperire suplimentară de răscumpărare a franșizei.',
    severityLabel: 'Risc Financiar Imediat',
    featured: false,
    tags: ['rent-a-car', 'fransiza-inchiriere', 'vacanta-strainatate', 'card-credit', 'asigurare-calatorie'],
    illustrativeCost: 'Pierdere directă garanție card: 1.200 – 2.500 EUR (6.000 – 12.500 RON)',
    withoutInsurance: {
      title: 'Doar asigurarea de bază cu franșiză mare inclusă de rent-a-car',
      statusLabel: 'Pierderea completă a depozitului de pe card',
      financialImpact: 'Debitare de 1.200 – 2.500 EUR de pe card',
      points: [
        'Compania de închirieri reține integral franșiza blocată pe card fără a fi nevoie de acordul tău ulterior.',
        'Costurile de deviz stabilite intern de firmele de rent-a-car sunt substanțial mai mari decât la atelierele independente.',
        'Dacă refuzi plata, ești raportat în bazele de date internaționale ale rețelelor de închiriere.'
      ],
      summary: 'Economisirea câtorva euro pe zi la ghișeu se transformă într-o pierdere certă de mii de euro.'
    },
    withInsurance: {
      title: 'Cu poliță de Răscumpărare Franșiză Rent-a-Car (Stand-alone sau card premium)',
      statusLabel: 'Rambursare 100% a banilor reținuți de rent-a-car',
      financialImpact: 'Cost net 0 EUR după rambursare',
      points: [
        'Compania de închirieri îți oprește garanția, dar transmiți documentele către asigurătorul tău independent sau cel al cardului bancar premium.',
        'Asigurătorul îți rambursează suma reținută (până la limita agreată de 2.000 – 5.000 EUR).',
        'Polițele independente de franșiză costă adesea doar 5-10 EUR/zi, de 4 ori mai puțin decât tarifele de la ghișeu.'
      ],
      summary: 'Îți recuperezi toți banii opriți pe nedrept sau cu titlu de franșiză de compania de închirieri.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Acoperirea roților și a parbrizului', detail: 'Multe polițe de bază rent-a-car exclud expres avariile la anvelope, jante și geamuri.' },
        { label: 'Drumuri neasfaltate', detail: 'Dacă dauna s-a produs pe un drum de pământ sau plajă, asigurarea este complet nulă conform regulamentelor.' },
        { label: 'Procesul-Verbal la predare (Check-out Sheet)', detail: 'Asigură-te că agentul notează exact natura avariilor și îți dă copie semnată.' }
      ]
    },
    immediateSteps: [
      'Fotografiază detaliat mașina și dauna din toate unghiurile în lumina zilei.',
      'Solicită la predare raportul complet de incident (Damage Report) semnat de angajatul firmei.',
      'Cere factura sau chitanța justificativă pentru debitarea de pe cardul de credit.',
      'Depune dosarul de rambursare a franșizei către asigurătorul tău în termen de 30 de zile.'
    ],
    usefulDocuments: [
      'Contractul de închiriere (Rental Agreement)',
      'Check-in și Check-out Report cu marcarea daunelor',
      'Extrasul de cont cu tranzacția de debitare a garanției'
    ],
    advisorQuestions: [
      'Cardul meu bancar premium include acoperire pentru franșiza mașinilor închiriate?',
      'Ce excluderi geografice există pentru asigurarea de rent-a-car?'
    ],
    disclaimer: 'Informații orientative. Condițiile de închiriere sunt guvernate de legislația țării în care se derulează contractul.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-coliziune-trotineta-electrica-biciclist',
    slug: 'coliziune-trotineta-electrica-biciclist',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'O trotinetă electrică lovește mașina și fuge',
    mainQuestion: 'Ce se întâmplă dacă un utilizator de trotinetă electrică îți zgârie portiera și îndoaie aripa, apoi dispare?',
    shortDescription: 'O manevră bruscă pe trotuar sau pistă provoacă o daună serioasă caroseriei, fără nicio asigurare obligatorie a utilizatorului.',
    situation: 'Oprești la o trecere de pietoni sau ieși dintr-o curte cu viteză minimă. Un utilizator de trotinetă electrică fără cască rulează cu viteză pe trotuar, nu poate frâna și intră direct în aripa stângă a mașinii. Se ridică rapid, își ia trotineta și pleacă în grabă printre blocuri înainte să poți coborî.',
    heroImage: '/images/scenarios/scooter-collision.jpg',
    imageCaption: 'Trotinetele electrice personale nu au obligația de a deține poliță RCA în prezent, lăsând șoferii fără mecanisme simple de despăgubire.',
    severityLabel: 'Risc Financiar Moderat',
    featured: false,
    tags: ['trotineta-electrica', 'biciclist', 'autor-necunoscut', 'casco', 'dauna-caroserie'],
    illustrativeCost: 'Cost îndreptare aripă + vopsire: 3.500 – 9.000 RON',
    withoutInsurance: {
      title: 'Fără CASCO',
      statusLabel: 'Cost suportat integral de proprietarul auto',
      financialImpact: '3.500 – 9.000 RON din economii proprii',
      points: [
        'Trotinetele electrice personale nu au numere de înmatriculare și nici polițe RCA obligatorii.',
        'Poliția deschide dosar pentru accident cu părăsirea locului, dar identificarea fără camere 4K este aproape imposibilă.',
        'Ești nevoit să repari aripa și vopseaua din propriul buzunar.'
      ],
      summary: 'Absența unui RCA obligatoriu pentru trotinete lasă paguba exclusiv pe umerii proprietarului auto.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO activă',
      statusLabel: 'Reparație pe clauza de avarii produse de terți / autor necunoscut',
      financialImpact: 'Plata franșizei contractuale (ex. 100 EUR)',
      points: [
        'Evenimentul se deschide pe CASCO ca avarie accidentală provocată de un terț.',
        'Elementul de caroserie este refăcut sau înlocuit conform normelor tehnice.',
        'Dacă deții cameră de bord și poliția îl identifică pe vinovat, asigurătorul recuperează banii de la acesta.'
      ],
      summary: 'CASCO îți garantează refacerea caroseriei fără a rămâne blocat în căutarea utilizatorului de trotinetă.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Autorizația de reparație', detail: 'Fiind vorba de un impact cu o persoană/vehicul pe două roți, este obligatorie declararea la Biroul de Accidente Ușoare.' },
        { label: 'Camera de bord (Dashcam)', detail: 'Înregistrările video sunt acceptate ca probă la Poliție și accelerează dosarul la asigurător.' }
      ]
    },
    immediateSteps: [
      'Verifică imediat dacă pe camera de bord s-a salvat secvența impactului.',
      'Mergi la Poliția Rutieră în termen de 24 de ore pentru a declara incidentul și a obține autorizația de reparație.',
      'Avizează dauna la compania ta CASCO.',
      'Programează mașina în service-ul partener.'
    ],
    usefulDocuments: [
      'Dovada eliberată de Poliția Rutieră',
      'Polița CASCO',
      'Fișierul video de pe camera de bord dacă există'
    ],
    advisorQuestions: [
      'Cum se clasează dosarul dacă vinovatul pe trotinetă nu este identificat de autorități?',
      'Pot efectua reparația înainte de finalizarea cercetărilor de la Poliție?'
    ],
    disclaimer: 'Informații educative. Statutul juridic al micromobilității este în evoluție legislativă continuă.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-pana-majora-motor-strainatate',
    slug: 'pana-majora-motor-strainatate',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Defecțiune mecanică sau pană gravă pe autostradă în Austria sau Germania',
    mainQuestion: 'Cât te costă tractarea de pe autostrada externă și repatrierea mașinii până în România?',
    shortDescription: 'Turbina cedează la 130 km/h pe autobahn, iar serviciile locale cer mii de euro pentru tractare și garaj.',
    situation: 'Te afli în tranzit pe o autostradă în Germania sau Austria. Motorul pierde brusc putere și scoate fum dens. Oprești pe banda de urgență. Poliția de autostradă ajunge în 15 minute și impune evacuarea imediată a vehiculului cu o platformă autorizată locală. Doar tractarea până la prima ieșire costă 450 EUR, iar repatrierea pe platformă până în România depășește 1.800 EUR.',
    heroImage: '/images/scenarios/breakdown-abroad.jpg',
    imageCaption: 'Tractarea pe autostrăzile din Europa de Vest este strict reglementată de companii autorizate de stat cu tarife orare ridicate.',
    severityLabel: 'Risc Financiar și Logistic Mare',
    featured: true,
    tags: ['asistenta-rutiera', 'pana-strainatate', 'repatriere-auto', 'autostrada-germania', 'cazare-urgenta'],
    illustrativeCost: 'Costuri tractare + garaj + repatriere pe platformă: 1.500 – 3.200 EUR',
    withoutInsurance: {
      title: 'Fără pachet de Asistență Rutieră Extinsă Europa',
      statusLabel: 'Toate cheltuielile plătite pe loc cash/card',
      financialImpact: '1.500 – 3.200 EUR din fondul de vacanță',
      points: [
        'Tractarea forțată de pe autostradă impusă de poliție se achită pe loc de către șofer.',
        'Tariful orar la un service german/austriac este de 150 – 220 EUR/oră fără piese.',
        'Repatrierea mașinii pe platformă dedicată până la București/Cluj/Timișoara costă între 1.500 și 2.500 EUR.',
        'Trebuie să plătești din buzunar cazarea la hotel pentru toți pasagerii sau biletele de avion de întoarcere.'
      ],
      summary: 'O simplă defecțiune tehnică pe o autostradă din vestul Europei îți poate anula complet bugetul familiei pe jumătate de an.'
    },
    withInsurance: {
      title: 'Cu poliță de Asistență Rutieră Premium (Pachet Europa)',
      statusLabel: 'Organizare completă a intervenției și decontare directă',
      financialImpact: 'Zero costuri pentru tractare, repatriere și cazare',
      points: [
        'Dispeceratul internațional trimite direct platforma parteneră și garantează plata taxelor de autostradă.',
        'Dacă mașina nu poate fi reparată în 48 de ore, asigurătorul organizează repatrierea gratuită până în localitatea de domiciliu.',
        'Pasagerii primesc cazare la hotel de 3-4 stele sau bilete de tren/avion pentru continuarea călătoriei ori întoarcere acasă.'
      ],
      summary: 'Tot stresul logistic și miile de euro sunt preluate de dispeceratul de asistență internațională 24/7.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Limita de kilometri pentru tractare', detail: 'Asigură-te că polița are acoperire de repatriere fără limită strictă de 100-200 km.' },
        { label: 'Defecțiune mecanică vs Accident', detail: 'Verifică dacă asistența acoperă doar evenimente rutiere (accidente) sau și defecțiuni pur tehnice (pene de motor, alternator, ambreiaj).' },
        { label: 'Vechimea maximă a vehiculului', detail: 'Multe produse de asistență exclud mașinile cu vechime mai mare de 10-15 ani.' }
      ]
    },
    immediateSteps: [
      'Îmbracă vesta reflectorizantă înainte de a coborî, instalează triunghiul reflectorizant și treci dincolo de glisiera de protecție.',
      'Apelează imediat numărul de urgență de pe cardul de asistență rutieră înainte de a accepta oferte particulare locale.',
      'Transmite coordonatele GPS exacte ale bornei kilometrice de pe autostradă.',
      'Păstrează toate chitanțele emise de autoritățile locale dacă au impus intervenția de urgență.'
    ],
    usefulDocuments: [
      'Cardul de asistență rutieră cu numărul de dosar internațional',
      'Polița de asigurare valabilă',
      'Facturile de tractare și procesul-verbal emis de poliția de autostradă'
    ],
    advisorQuestions: [
      'Include contractul meu asistență la defecțiuni tehnice sau doar la accident rutier?',
      'Care este plafonul maxim pentru repatrierea mașinii în România?'
    ],
    disclaimer: 'Asistența rutieră depinde strict de limitele teritoriale și financiare stabilite în condițiile particulare ale contractului.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'auto-coliziune-masina-lux-costuri-exorbitante',
    slug: 'coliziune-masina-lux-costuri-exorbitante',
    categoryId: 'auto',
    categoryName: 'AUTO & MOBILITATE',
    title: 'Tamponare din vina ta cu un automobil de lux de 250.000 EUR',
    mainQuestion: 'Ce se întâmplă dacă lovești din greșeală un Porsche sau Bentley și paguba depășește limita standard?',
    shortDescription: 'O clipă de neatenție la plecarea de pe loc distruge bara din fibră de carbon și evacuarea sport a unui supercar.',
    situation: 'La o trecere de pietoni, pleci de pe loc crezând că mașina din față a înaintat. În fața ta se află un model exotic din fibră de carbon evaluat la 280.000 EUR. Bara spate, difuzorul aerodinamic din compozit și sistemul de eșapament din titan sunt zdrobite. Devizul preliminar în reprezentanța oficială depășește 65.000 EUR.',
    heroImage: '/images/scenarios/luxury-car-crash.jpg',
    imageCaption: 'Piesele din fibră de carbon și componentele de caroserie artizanale ale mașinilor exotice necesită adesea înlocuiri integrale din fabrică.',
    severityLabel: 'Risc Financiar Extrem',
    featured: true,
    tags: ['masina-lux', 'supercar', 'limita-rca', 'despagubire-maxima', 'raspundere-auto'],
    illustrativeCost: 'Valoare deviz reparație: 250.000 – 450.000 RON',
    withoutInsurance: {
      title: 'Dacă limita RCA este depășită sau polița nu este valabilă',
      statusLabel: 'Executare silită pe bunurile personale',
      financialImpact: 'Datorie pe viață dacă se depășește plafonul legal sau dacă ești neasigurat',
      points: [
        'Dacă nu deții RCA, proprietarul supercarului te va acționa în judecată pentru recuperarea integrală a celor 65.000 EUR.',
        'Instanța pune sechestru asigurător pe conturi bancare, salarii și proprietăți imobiliare.',
        'Chiar și cu o firmă insolvabilă de asigurări, ești târât în procese complicate de stabilire a culpei.'
      ],
      summary: 'O secundă de neatenție fără o poliță RCA solidă poate însemna ruinarea financiară personală.'
    },
    withInsurance: {
      title: 'Cu poliță RCA la un asigurător de prim rang',
      statusLabel: 'Despăgubire integrală pe plafonul legal european',
      financialImpact: 'Zero cheltuieli personale (acoperit în limita legală de 1.22 milioane EUR)',
      points: [
        'Plafonul legal minim obligatoriu pentru daune materiale în România este de peste 1.220.000 EUR per eveniment.',
        'Un asigurător solvabil și serios achită direct devizul reprezentanței de lux fără a te expune pe tine la procese.',
        'Nu ești nevoit să scoți niciun ban din buzunar, chiar dacă dauna este enormă.'
      ],
      summary: 'Plafonul generos al unui RCA conform normelor europene te protejează complet împotriva ruinei financiare.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Solvabilitatea asigurătorului RCA', detail: 'Alege o companie stabilă financiar, nu doar cel mai ieftin tarif de pe piață, pentru a evita procesele prelungite.' },
        { label: 'Excluderi de culpă gravă', detail: 'Asigurătorul are drept de regres împotriva ta dacă ai condus sub influența alcoolului sau fără permis valid.' }
      ]
    },
    immediateSteps: [
      'Păstrează-ți calmul și completează cu maximă atenție datele de identificare pe constatarea amiabilă.',
      'Fotografiază detaliat toate avariile vizibile pentru a nu se adăuga ulterior piese neafectate de impact.',
      'Transmite copia RCA-ului tău șoferului păgubit.',
      'Anunță asigurătorul tău despre emiterea amiabilei.'
    ],
    usefulDocuments: [
      'Polița RCA valabilă la momentul impactului',
      'Formularul de Constatare Amiabilă corect completat',
      'Fotografiile realizate imediat după impact'
    ],
    advisorQuestions: [
      'Care este limita maximă de despăgubire pentru daune materiale prevăzută pe polița mea RCA?',
      'În ce situații se poate îndrepta asigurătorul împotriva mea prin acțiune în regres?'
    ],
    disclaimer: 'Acest scenariu evidențiază importanța respectării regulilor de circulație și a menținerii unei polițe RCA valide în orice moment.',
    lastReviewed: 'Octombrie 2026'
  }
];

// Write the autoScenarios file
const autoContent = `import { Scenario } from '@/types/scenario';

export const autoScenarios: Scenario[] = ${JSON.stringify(autoScenarios, null, 2)};
`;

fs.writeFileSync(path.join(targetDir, 'auto.ts'), autoContent, 'utf8');
console.log('✓ Successfully wrote src/data/scenarios/auto.ts with', autoScenarios.length, 'scenarios');
