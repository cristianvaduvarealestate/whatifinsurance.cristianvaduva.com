// scripts/build-batch-6-final-library.js
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

// =========================================================================
// 1. RASPUNDERE CIVILA (4 more items -> total 12)
// =========================================================================
const extraRaspundere = [
  {
    id: 'raspundere-foc-artificii-revelion-acoperis-vecin',
    slug: 'foc-artificii-revelion-acoperis-vecin',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'O rachetă de artificii de Revelion aterizează pe acoperișul din lemn al vecinului',
    mainQuestion: 'Cine plătește dacă jocurile pirotehnice de sărbători provoacă un incendiu la o casă din apropiere?',
    shortDescription: 'O baterie de artificii se dezechilibrează, iar o ghiulea incendiază termoizolația și podul vecin.',
    situation: 'În noaptea de Revelion, aprinzi o baterie de artificii cumpărată legal din magazin. Din cauza reculului, cutia se răstoarnă pe alee, iar următoarea salvă pleacă pe orizontală și lovește mansarda casei vecine. Focul aprinde asteriala din lemn și vata minerală a acoperișului. Intervenția promptă a pompierilor limitează focul, dar apa de stingere și flăcările distrug acoperișul și etajul superior al vecinului. Devizul de reparații depășește 65.000 RON.',
    heroImage: '/images/scenarios/burn-neighbor.jpg',
    imageCaption: 'Utilizarea materialelor pirotehnice în zone rezidențiale atrage răspunderea delictuală directă a persoanei care a inițiat focul.',
    severityLabel: 'Răspundere Civilă și Penală Pirotehnică',
    featured: false,
    tags: ['artificii-incendiu', 'acoperis-vecin', 'isu-revelion', 'daune-vecini', 'raspundere-delictuala'],
    illustrativeCost: 'Cost refacere acoperiș și etaj: 50.000 – 120.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de răspundere civilă privată',
      statusLabel: 'Răspundere patrimonială directă 100%',
      financialImpact: 'Plată de 65.000+ RON sau executare silită pe bunuri',
      points: [
        'Poliția deschide dosar penal pentru distrugere din culpă (Art. 255 Cod Penal) și nerespectarea regimului materiilor pirotehnice.',
        'Vecinul sau asigurătorul său facultativ se va îndrepta împotriva ta prin acțiune civilă în regres.',
        'Sărbătorile se încheie cu un dezastru financiar și certuri judiciare pe termen lung.'
      ],
      summary: 'Distracția de Revelion devine o sursă de datorii masive fără o asigurare de răspundere.'
    },
    withInsurance: {
      title: 'Cu Asigurare de Răspundere Civilă a Familiei (cu clauză de risc accidental)',
      statusLabel: 'Preluarea prejudiciilor materiale provocate proprietății vecine',
      financialImpact: 'Asigurătorul decontează reparațiile pe baza Procesului-Verbal ISU',
      points: [
        'Polița acoperă daunele materiale accidentale produse terților prin neglijență simplă.',
        'Asigurătorul decontează devizul de reconstrucție al acoperișului și uscarea profesională a finisajelor inundate de pompieri.',
        'Relațiile cu vecinii sunt salvate prin stingerea amiabilă a prejudiciului.'
      ],
      summary: 'Asigurarea funcționează ca un garant financiar pentru greșelile neintenționate de sărbători.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Excluderea articolelor pirotehnice interzise', detail: 'ATENȚIE: Dacă artificiile erau din categorii interzise publicului larg (F2/F3/F4 fără autorizație de pirotehnist), asigurătorul refuză legitim despăgubirea pe motiv de ilegalitate.' },
        { label: 'Suma asigurată pentru daune materiale terți', detail: 'Asigură-te că plafonul este de minim 20.000 – 50.000 EUR.' }
      ]
    },
    immediateSteps: [
      'Sună imediat la 112 și alertează vecinii pentru evacuarea clădirii.',
      'Oferă vecinului detaliile poliței tale de asigurare și colaborează cu pompierii.',
      'Păstrează ambalajul bateriei de artificii pentru a demonstra că a fost un produs omologat comercial.',
      'Avizează asigurătorul în primele 48 de ore de la eveniment.'
    ],
    usefulDocuments: [
      'Procesul-Verbal de stingere emis de Pompieri (ISU)',
      'Bonul fiscal sau ambalajul produsului pirotehnic omologat',
      'Polița de răspundere civilă'
    ],
    advisorQuestions: [
      'Acoperă polița mea de răspundere incidentele produse de utilizarea artificiilor de uz civil F1?',
      'Se aplică regresul dacă poliția aplică o sancțiune contravențională la fața locului?'
    ],
    disclaimer: 'Utilizarea articolelor pirotehnice trebuie să respecte cu strictețe Legea 126/1995 privind regimul materiilor explozive.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-drona-prabusita-parbriz-masina',
    slug: 'drona-prabusita-parbriz-masina',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Drona personală pierde semnalul GPS și se prăbușește pe trapa de sticlă a unei mașini',
    mainQuestion: 'Ce poliță plătește dacă o dronă de agrement cade necontrolat peste un autoturism sau o persoană?',
    shortDescription: 'Un DJI de 900 de grame rămâne fără baterie și cade de la 50 de metri direct peste o mașină parcată.',
    situation: 'Pilotezi o dronă de agrement (DJI Mavic) într-un parc sau zonă rezidențială. Dintr-o eroare de calibrare sau interferență radio, drona pierde semnalul de comandă (Flyaway) și inițiază o aterizare forțată necontrolată. Cade de la 40 de metri altitudine direct pe luneta și capacul de portbagaj al unui autoturism BMW parcat regulamentar. Luneta din sticlă securizată explodează, iar elicele din carbon zgârie adânc vopseaua.',
    heroImage: '/images/scenarios/windshield-crack.jpg',
    imageCaption: 'Reglementările EASA și Codul Aerian civil impun deținătorilor de drone obligații stricte privind răspunderea pentru daunele cauzate la sol.',
    severityLabel: 'Răspundere Operare Dispozitive Zburătoare',
    featured: false,
    tags: ['drona-prabusita', 'raspundere-drona', 'easa-uav', 'luneta-sparta', 'asigurare-uav'],
    illustrativeCost: 'Cost înlocuire lunetă + revopsire portbagaj: 6.000 – 14.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de răspundere pentru operare UAV / dronă',
      statusLabel: 'Pilotul dronei plătește integral reparația mașinii terțului',
      financialImpact: 'Plată de 6.000 – 14.000 RON din economii proprii',
      points: [
        'Polițele standard de locuință exclud de regulă vehiculele aeriene fără pilot (UAV) dacă au o greutate mai mare de 250 de grame.',
        'Proprietarul mașinii sau asigurătorul său CASCO va cere plata integrală pe baza procesului-verbal al poliției.',
        'Rămâi și cu drona distrusă și cu obligația de a deconta devizul reprezentanței auto.'
      ],
      summary: 'Pilotarea dronelor fără asigurare atrage răspunderea patrimonială directă pentru orice impact la sol.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Civilă pentru Drone (UAV Third Party Liability)',
      statusLabel: 'Despăgubire integrală aprobată direct proprietarului autovehiculului',
      financialImpact: 'Plata reparațiilor preluată 100% de asigurător',
      points: [
        'Polița dedicată de drone conform normelor UE acoperă daunele materiale și corporale provocate terților în timpul zborului.',
        'Inspectorul de daune emite acceptul de plată către service-ul auto pentru înlocuirea lunetei și revopsire.',
        'Ești protejat împotriva pretențiilor civile neprevăzute.'
      ],
      summary: 'Pasiunea pentru zborul cu drone rămâne lipsită de griji financiare datorită poliței UAV.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Înregistrarea operatorului la AACR', detail: 'Conform normelor EASA, pilotul trebuie să fie înregistrat ca operator UAS și drona marcată cu numărul unic de identificare.' },
        { label: 'Zone interzise de zbor (No-Fly Zones)', detail: 'Zborul neautorizat în proximitatea aeroporturilor sau bazelor militare anulează orice acoperire de asigurare.' }
      ]
    },
    immediateSteps: [
      'Găsește drona și nu părăsi locul incidentului; identifică proprietarul vehiculului avariat.',
      'Fotografiază poziția dronei pe mașină și pagubele produse.',
      'Oferă datele de identificare și seria poliței tale de asigurare UAV.',
      'Dacă este necesar, mergi la Biroul de Accidente Ușoare pentru autorizația de reparație a mașinii.'
    ],
    usefulDocuments: [
      'Certificatul de înregistrare al operatorului UAV emis de AACR',
      'Polița de asigurare de răspundere civilă a dronei',
      'Fotografii și log-ul de zbor (Flight Log) din aplicația de control'
    ],
    advisorQuestions: [
      'Este acoperită drona mea de 249g pe polița standard de familie sau necesită o poliță de aviație dedicată?',
      'Care este limita de răspundere recomandată conform reglementărilor europene?'
    ],
    disclaimer: 'Operarea dronelor este reglementată de Regulamentul UE 2019/947 și legislația aeronautică națională.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-trotineta-copil-zgaraie-masina-vecin',
    slug: 'trotineta-copil-zgaraie-masina-vecin',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Copilul zgârie cu ghidonul trotinetei două portiere ale unei mașini din parcare',
    mainQuestion: 'Ce faci dacă jocul copiilor în fața blocului se soldează cu o zgârietură adâncă pe mașina unui vecin?',
    shortDescription: 'Un viraj greșit pe aleea dintre blocuri lasă o dungă metalică de 1.5 metri pe vopseaua metalizată.',
    situation: 'Copilul tău de 7 ani se plimbă cu trotineta nemotorizată pe aripa pietonală a parcării rezidențiale. Se dezechilibrează și atinge cu manșonul metalic al ghidonului două portiere consecutive ale unui autoturism nou parcat pe margine. Zgârietura adâncă trece de stratul de lac și grund până la tablă. Vecinul constată dauna și cere plata vopsirii ambelor elemente la reprezentanță (cost 3.800 RON).',
    heroImage: '/images/scenarios/car-vandalism.jpg',
    imageCaption: 'Micile incidente de joacă ale copiilor în parcările rezidențiale sunt cauza a mii de dispute de vecinătate în fiecare an.',
    severityLabel: 'Răspundere Părintească Cotidiană',
    featured: false,
    tags: ['trotineta-copil', 'masina-zgariata-parcare', 'raspundere-parinti', 'vopsitorie-portiere', 'rc-familie'],
    illustrativeCost: 'Cost revopsire două portiere: 2.800 – 4.500 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere a Familiei (Cap de Familie)',
      statusLabel: 'Părintele achită din salariu devizul de service al vecinului',
      financialImpact: 'Plată directă de 3.800 RON din economii',
      points: [
        'Art. 1372 Cod Civil te obligă la repararea integrală a prejudiciului cauzat de fapta copilului minor.',
        'Dacă refuzi să plătești devizul de reprezentanță, vecinul își deschide dosar pe CASCO, iar compania CASCO va veni în regres împotriva ta.',
        'Relațiile de bună vecinătate sunt tensionate grav.'
      ],
      summary: 'Gafa copilului la joacă se transformă într-o cheltuială neprevăzută din bugetul familiei.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Civilă a Familiei (inclusă în asigurarea de locuință)',
      statusLabel: 'Despăgubire aprobată direct către service sau asigurătorul CASCO al vecinului',
      financialImpact: 'Zero costuri plătite din buzunar',
      points: [
        'Polița de Răspundere a Familiei acoperă explicit faptele ilicite neintenționate ale copiilor minori aflați în îngrijire.',
        'Asigurătorul tău decontează costul de vopsire al celor două portiere fără procese sau dispute.',
        'Vecinul este mulțumit că mașina se repară pe asigurare, iar tu nu scoți niciun ban din cont.'
      ],
      summary: 'Asigurarea rezolvă incidentul elegant, civilizat și rapid.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Franșiza la răspundere terți', detail: 'Verifică dacă există franșiză pe dosar (ex. 50 – 100 EUR) sau dacă daunele materiale mici sunt acoperite 100%.' },
        { label: 'Vârsta copiilor asigurați', detail: 'Asigură-te că toți copiii minori sunt cuprinși automat sub umbrela poliței de familie.' }
      ]
    },
    immediateSteps: [
      'Nu certa agresiv copilul; verifică dacă este teafăr.',
      'Identifică vecinul proprietar al mașinii și recunoaște incidentul cu calm.',
      'Fotografiază zgârietura și poziția trotinetei.',
      'Completează formularul de avizare de răspundere civilă către asigurătorul tău.'
    ],
    usefulDocuments: [
      'Fotografiile elementelor zgâriate ale mașinii',
      'Devizul estimativ de reparații emis de atelierul de vopsitorie',
      'Polița de Răspundere Civilă a Familiei'
    ],
    advisorQuestions: [
      'Este acoperită răspunderea pentru faptele copiilor produse în parcarea blocului?',
      'Cum se face plata dacă vecinul dorește să repare mașina în regie proprie?'
    ],
    disclaimer: 'Asigurarea de familie funcționează ca un mecanism de pace socială și despăgubire civilă în comunitate.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-inundare-subsol-bloc-robinet-spalat-boxa',
    slug: 'inundare-subsol-bloc-robinet-spalat-boxa',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Un robinet uitat deschis în boxa de la subsol inundă arhivele și bunurile altor locatari',
    mainQuestion: 'Ce răspundere ai dacă o neglijență în boxa de depozitare distruge bunurile depozitate de vecini?',
    shortDescription: 'Un furtun lăsat sub presiune cedează în weekend, inundând 8 boxe de la subsolul blocului.',
    situation: 'Ai montat un robinet și un furtun de spălat în boxa privată de la subsolul blocului. Vineri uiți robinetul deschis sub presiune. În timpul nopții, racordul flexibil cedează. Apa curge continuu timp de 48 de ore, acumulându-se până la 30 cm în întreg subsolul. Opt boxe de depozitare ale vecinilor sunt inundate: cărți, haine depozitate în cutii de carton, arhive contabile de firme și scule electrice sunt complet distruse de mâl și apă.',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Avariile produse în spațiile anexe și boxe de subsol generează pretenții cumulative din partea mai multor proprietari afectați simultan.',
    severityLabel: 'Pretenții Multiple de Vecinătate',
    featured: false,
    tags: ['inundatie-subsol', 'boxa-depozitare', 'racord-flexibil', 'bunuri-vecini', 'daune-asociatie'],
    illustrativeCost: 'Compensare bunuri deteriorate 8 vecini: 25.000 – 60.000 RON',
    withoutInsurance: {
      title: 'Fără răspundere civilă extinsă pentru anexe',
      statusLabel: 'Proprietarul vinovat este obligat la despăgubirea fiecărui vecin în parte',
      financialImpact: 'Zeci de mii de lei achitați către 8 familii diferite',
      points: [
        'Vecinii formează front comun prin intermediul Asociației de Proprietari și cer despăgubiri pentru bunurile distruse.',
        'Costurile de evacuare a apei cu motopompe și igienizare a subsolului sunt imputate exclusiv pe cota ta de întreținere.',
        'Relațiile din bloc sunt complet compromise pe ani de zile.'
      ],
      summary: 'O neglijență banală la un robinet secundar creează o avalanșă de pretenții financiare.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Răspundere Extinsă pentru Anexe Gospodărești)',
      statusLabel: 'Despăgubire cumulativă gestionată direct de asigurător',
      financialImpact: 'Plata bunurilor dovedite ale vecinilor acoperită de poliță',
      points: [
        'Polița acoperă prejudiciile provocate de apă provenită din imobilul asigurat și anexele declarate (boxe, garaje).',
        'Inspectorul de daune evaluează bunurile deteriorate din fiecare boxă și emite acorduri de despăgubire direct către locatarii afectați.',
        'Asociația de locatari este despăgubită pentru costurile de igienizare și dezinfectare a subsolului.'
      ],
      summary: 'Asigurarea stinge un conflict comunitar complex printr-un proces organizat de lichidare de daune.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Declararea boxei de la subsol ca anexă', detail: 'Asigură-te că pe polița de locuință este menționată explicit boxa / spațiul de depozitare cu număr cadastral sau cotă indiviză.' },
        { label: 'Plafonul agregat per eveniment', detail: 'Verifică dacă suma de răspundere acoperă mai multe părți vătămate în același incident (minim 30.000 EUR).' }
      ]
    },
    immediateSteps: [
      'Oprește robinetul de la coloana generală și solicită intervenția asociației pentru pornirea pompei de evacuare.',
      'Invită fiecare vecin afectat să fotografieze conținutul boxei înainte de aruncarea cutiilor umede.',
      'Păstrează un tabel cu datele de contact și bunurile revendicate de fiecare proprietar.',
      'Deschide dosarul la compania ta de asigurări de locuință.'
    ],
    usefulDocuments: [
      'Procesul-verbal de constatare întocmit de Asociația de Proprietari',
      'Fotografiile fiecărei boxe inundate',
      'Polița de asigurare de locuință cu anexa de boxă menționată'
    ],
    advisorQuestions: [
      'Este boxa de la subsol acoperită automat în clauza de răspundere sau trebuie declarată separat?',
      'Cum se probează valoarea bunurilor vechi depozitate în cutii fără facturi fiscale?'
    ],
    disclaimer: 'Instalațiile sanitare din anexele de depozitare trebuie verificate periodic pentru a preveni cedarea racordurilor flexibile.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('raspundere.ts', 'raspundereScenarios', extraRaspundere);

console.log('✓ Batch 6 expansion executed successfully.');
