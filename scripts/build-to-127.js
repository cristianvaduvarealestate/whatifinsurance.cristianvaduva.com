// scripts/build-to-127.js
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

// PROPRIETARI (3 items -> total 8)
const pItems = [
  {
    id: 'proprietari-refuz-evacuare-chirias-rau-platnic',
    slug: 'refuz-evacuare-chirias-rau-platnic',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Chiriașul nu mai plătește de 5 luni și refuză să elibereze apartamentul',
    mainQuestion: 'Ce costuri juridice și procedurale implică evacuarea silită a unui chiriaș rău-platnic?',
    shortDescription: 'Un chiriaș schimbă yala și refuză dialogul, acumulând mii de euro restanțe la chirie și întreținere.',
    situation: 'Chiriașul unui apartament de 3 camere încetează plata chiriei și a utilităților. După 90 de zile de promisiuni neonorate, proprietarul îi cere evacuarea amiabilă. Chiriașul schimbă butucul ușii și amenință cu plângere penală pentru violare de domiciliu dacă proprietarul încearcă să intre. Proprietarul este nevoit să apeleze la procedura specială de evacuare din Codul de Procedură Civilă prin executor judecătoresc și instanță.',
    heroImage: '/images/scenarios/vacant-property.jpg',
    imageCaption: 'Evacuarea silită legală a unui locatar fără titlu durează între 3 și 9 luni și implică taxe judiciare și onorarii de executare silită.',
    severityLabel: 'Litigiu Locativ și Pierdere de Venituri',
    featured: false,
    tags: ['evacuare-silita', 'chirias-rau-platnic', 'asigurare-protectie-juridica-chirie', 'executor-judecatoresc', 'chirie-neachitata'],
    illustrativeCost: 'Onorariu avocat + executor judecătoresc + chirie pierdută: 18.000 – 35.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Protecție Juridică a Proprietarului (Rent Legal Protection)',
      statusLabel: 'Proprietarul plătește din buzunar toate cheltuielile judiciare',
      financialImpact: 'Mii de euro cheltuiți cu avocați în timp ce apartamentul nu produce chirie',
      points: [
        'Proprietarul nu poate întrerupe utilitățile sau forța ușa fără riscul de a comite infracțiuni.',
        'Onorariile avocatului și ale executorului judecătoresc depășesc 5.000 – 10.000 RON și se achită în avans.',
        'Chiria neîncasată pe durata procesului este greu de recuperat dacă chiriașul nu are bunuri urmăribile.'
      ],
      summary: 'Blocajul imobiliar cauzat de un chiriaș de rea-credință generează pierderi grele.'
    },
    withInsurance: {
      title: 'Cu poliță de Protecție Juridică a Proprietarului & Asigurare de Chirie (Rent Guarantee)',
      statusLabel: 'Finanțarea completă a evacuării legale + plata chiriei restante de către asigurător',
      financialImpact: 'Recuperarea chiriei lunare garantate + costuri judiciare plătite de asigurător',
      points: [
        'Polița plătește lunar chiria garantată direct în contul proprietarului pe durata litigiului (până la 6-12 luni).',
        'Asigurătorul pune la dispoziție avocați specializați și acoperă onorariul executorului judecătoresc pentru punerea în executare.',
        'Investiția imobiliară își păstrează randamentul fără stresul proceselor.'
      ],
      summary: 'Venitul tău din chirie este asigurat chiar și atunci când chiriașul refuză plata.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Contract de închiriere titlu executoriu', detail: 'Recomandare legală: contractul înregistrat la ANAF sau autentificat la notar constituie titlu executoriu pentru chirie, accelerând evacuarea.' },
        { label: 'Numărul de luni de chirie garantată', detail: 'Verifică dacă asigurarea plătește 6, 9 sau 12 luni de chirie restantă pe durata evacuării.' }
      ]
    },
    immediateSteps: [
      'Emite o notificare oficială de punere în întârziere și reziliere prin intermediul unui executor judecătoresc sau avocat.',
      'NU încerca să intri cu forța sau să schimbi yala fără executor (riști dosar penal pentru violare de domiciliu).',
      'Deschide dosarul la compania de asigurări transmițând contractul de închiriere și dovezile de neplată.',
      'Lasă avocații asigurătorului să introducă cererea de evacuare pe procedura specială prevăzută de lege.'
    ],
    usefulDocuments: [
      'Contractul de închiriere înregistrat fiscal la ANAF',
      'Extrasele de cont cu lipsa încasării chiriei',
      'Polița de Protecție Juridică a Proprietarului'
    ],
    advisorQuestions: [
      'Câte luni de chirie neachitată sunt compensate de polița mea pe perioada procesului de evacuare?',
      'Sunt acoperite onorariile executorului judecătoresc pentru evacuarea efectivă?'
    ],
    disclaimer: 'Procedurile de evacuare trebuie să respecte strict normele Codului de Procedură Civilă român.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'proprietari-cedare-centrala-termica-iarna-apartament-inchiriat',
    slug: 'cedare-centrala-termica-iarna-apartament-inchiriat',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Centrala termică cedează în miezul iernii la -15°C într-un apartament închiriat',
    mainQuestion: 'Ce obligații urgente ai ca proprietar când chiriașii rămân fără căldură și apă caldă de Crăciun?',
    shortDescription: 'Schimbătorul de căldură se fisurează, lăsând familia cu bebeluș în frig în zile de sărbătoare.',
    situation: 'Este 28 decembrie, iar afară sunt -12°C. Chiriașii din apartamentul tău de investiții te sună disperați: centrala termică murală pe gaz are cod de eroare de blocaj total, curge apă sub ea, iar apartamentul s-a răcit la 14°C. În casă locuiește o familie cu un bebeluș de 4 luni. Niciun service tehnic nu are piese pe stoc în perioada sărbătorilor, iar înlocuirea de urgență cu o centrală nouă în condensare costă 8.500 RON cu tot cu montaj autorizat ISCIR.',
    heroImage: '/images/scenarios/freezing-pipe.jpg',
    imageCaption: 'Avariile sistemelor de încălzire în plină iarnă impun intervenții tehnice de urgență 24/7 pentru a preveni înghețul instalațiilor și rezilierea contractelor.',
    severityLabel: 'Urgență Termică și Confort Locativ',
    featured: false,
    tags: ['centrala-termica-avarie', 'iarna-frig-apartament', 'asistenta-urgenta-proprietari', 'inlocuire-centrala-iscir', 'landlord-cover'],
    illustrativeCost: 'Cost centrală nouă + montaj autorizat: 6.500 – 11.000 RON',
    withoutInsurance: {
      title: 'Fără serviciu de asistență tehnică de urgență la domiciliu',
      statusLabel: 'Proprietarul caută disperat instalatori privați la tarife duble de sărbători',
      financialImpact: 'Plată de mii de lei cash pe loc sau chiriași plecați la hotel pe cheltuiala ta',
      points: [
        'Proprietarul are obligația legală conform Codului Civil de a asigura funcționarea utilităților de bază (căldură, apă).',
        'Dacă nu rezolvi problema în 24 de ore, chiriașii pot cere cazare la hotel plătită de tine sau rezilierea unilaterală cu daune.',
        'Echipele particulare cer tarife exorbitante pentru intervenții în perioada sărbătorilor de iarnă.'
      ],
      summary: 'Avaria centralei în plin sezon rece devine o criză stresantă și costisitoare.'
    },
    withInsurance: {
      title: 'Cu poliță de Locuință cu Asistență Tehnică de Urgență la Domiciliu (Home Emergency 24/7)',
      statusLabel: 'Intervenție de urgență în 2 ore a tehnicianului partener autorizat',
      financialImpact: 'Manopera de urgență și remedierea temporară/definitivă decontate de asigurător',
      points: [
        'Dispeceratul de asistență trimite în 2-4 ore un tehnician acreditat ISCIR dotat cu piese de schimb.',
        'Sunt acoperite costurile de deplasare, manoperă și remediere a defecțiunilor de încălzire.',
        'Dacă centrala nu poate fi reparată pe loc, asigurătorul furnizează radiatoare electrice de urgență pentru confortul chiriașilor.'
      ],
      summary: 'Urgența de încălzire este rezolvată profesionist fără ca tu să alergi după meșteri privați.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Autorizarea ISCIR periodică', detail: 'Centrala termică trebuie să aibă verificarea tehnică periodică (VTP) valabilă la zi efectuată de o firmă autorizată ISCIR.' },
        { label: 'Plafonul per intervenție de urgență', detail: 'Verifică suma alocată pentru asistența de avarii termice și sanitare per intervenție.' }
      ]
    },
    immediateSteps: [
      'Apelează imediat numărul de asistență tehnică de urgență 24/7 de pe polița ta de locuință.',
      'Oferă chiriașilor radiatoare electrice temporare pentru a menține temperatura în camere.',
      'Asigură accesul tehnicianului de service autorizat în apartament.',
      'Păstrează fișa de intervenție și devizul de piese.'
    ],
    usefulDocuments: [
      'Procesul-verbal de punere în funcțiune / VTP ISU/ISCIR valabil',
      'Fișa de constatare tehnică emisă de tehnicianul de service',
      'Polița de asigurare de locuință cu asistență de urgență activă'
    ],
    advisorQuestions: [
      'Include polița mea asistență de urgență 24/7 pentru centrale termice în weekend și sărbători legale?',
      'Ce sumă este decontată dacă centrala trebuie înlocuită complet cu un model nou?'
    ],
    disclaimer: 'Centralele termice pe gaz necesită revizii tehnice bienale obligatorii conform legislației ISCIR.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'proprietari-lucrari-neautorizate-chirias-demolare-pereti',
    slug: 'lucrari-neautorizate-chirias-demolare-pereti',
    categoryId: 'proprietari-chiriasi',
    categoryName: 'PROPRIETARI & INVESTITORI',
    title: 'Chiriașul dărâmă fără acord un perete despărțitor pentru a face open-space',
    mainQuestion: 'Ce faci dacă un chiriaș modifică structura apartamentului fără autorizație de construire?',
    shortDescription: 'Un perete din cărămidă este demolat ilegal, atrăgând amenzi de la Inspectoratul de Stat în Construcții.',
    situation: 'Închiriezi un apartament generos pe termen lung unei firme sau unui locatar. După 6 luni, la o vizită convenită, descoperi că locatarul a demolat peretele dintre bucătărie și hol pentru a crea un spațiu deschis, fără autorizație de construire și fără acordul tău scris. Vecinii au sesizat Poliția Locală (Disciplina în Construcții) și Inspectoratul de Stat în Construcții (ISC), care emit o amendă de 10.000 RON și dispoziție de aducere la starea inițială pe numele proprietarului.',
    heroImage: '/images/scenarios/renovation-leak.jpg',
    imageCaption: 'Modificările neautorizate ale compartimentărilor interioare încalcă Legea 50/1991 privind autorizarea construcțiilor, atrăgând sancțiuni dure pentru proprietar.',
    severityLabel: 'Sancțiune Administrativă și Viciu Structural',
    featured: false,
    tags: ['modificari-neautorizate', 'demolare-perete-chirias', 'isc-disciplina-constructii', 'amenzi-constructii', 'reconstructie-zidarie'],
    illustrativeCost: 'Cost expertiză structurală + zidire + amendă: 18.000 – 40.000 RON',
    withoutInsurance: {
      title: 'Fără protecție juridică a proprietarului',
      statusLabel: 'Proprietarul este amendat și obligat la refacerea zidăriei din bani proprii',
      financialImpact: 'Plată de zeci de mii de lei către ISC și echipe de zidari',
      points: [
        'Legea 50/1991 sancționează proprietarul înscris în cartea funciară, nu neapărat chiriașul executant.',
        'Proprietarul trebuie să angajeze un expert tehnic atestat MLPAT pentru a demonstra că peretele nu era de rezistență.',
        'Chiriașul refuză să plătească amenda și își dă demisia din contract.'
      ],
      summary: 'Gafa iresponsabilă a chiriașului devine o problemă administrativă grea pentru proprietar.'
    },
    withInsurance: {
      title: 'Cu poliță de Protecție Juridică Imobiliară & Asigurare de Răspundere Contractuală',
      statusLabel: 'Asistență juridică completă pentru regresul imediat împotriva chiriașului',
      financialImpact: 'Costurile expertizei MLPAT și ale apărării juridice preluate de asigurător',
      points: [
        'Avocații asigurați formulează acțiune în regres de urgență cu măsuri asigurătorii pe conturile chiriașului vinovat.',
        'Sunt acoperite cheltuielile judiciare și expertiza tehnică de rezistență.',
        'Proprietarul este ghidat pas cu pas pentru intrarea în legalitate în fața ISC.'
      ],
      summary: 'Proprietarul este susținut juridic și financiar pentru a transfera toată răspunderea asupra chiriașului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de interdicție absolută a modificărilor', detail: 'Contractul de închiriere trebuie să prevadă expres interdicția oricăror modificări constructive fără acord notarial prealabil.' },
        { label: 'Recepția periodică a stării imobilului', detail: 'Păstrează dreptul contractual de a inspecta apartamentul la fiecare 3-6 luni.' }
      ]
    },
    immediateSteps: [
      'Emite o notificare oficială prin executor prin care ceri oprirea oricăror lucrări și predarea spațiului.',
      'Angajează un expert tehnic în construcții pentru evaluarea stabilității planșeului.',
      'Avizează asigurătorul de protecție juridică pentru preluarea dosarului în fața autorităților locale.',
      'Depune plângere împotriva chiriașului pentru distrugere de bunuri.'
    ],
    usefulDocuments: [
      'Procesul-verbal de sancțiune emis de Poliția Locală / Disciplina în Construcții',
      'Contractul de închiriere cu clauzele de protecție a imobilului',
      'Raportul de expertiză tehnică MLPAT'
    ],
    advisorQuestions: [
      'Ce asistență juridică oferă polița mea în caz de sancțiuni administrative cauzate de chiriași?',
      'Cum pot institui poprire pe conturile chiriașului pentru recuperarea cheltuielilor de reconstrucție?'
    ],
    disclaimer: 'Orice modificare a compartimentării interioare a locuințelor necesită autorizație de construire conform Legii 50/1991.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('proprietari.ts', 'proprietariScenarios', pItems);

// LUXURY (2 items -> total 8)
const lItems = [
  {
    id: 'luxury-colectie-vinuri-rare-avarie-climatizare',
    slug: 'colectie-vinuri-rare-avarie-climatizare',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Colecție de vinuri rare de 70.000 EUR compromisă de defectarea sistemului de climatizare',
    mainQuestion: 'Ce poliță plătește dacă o pană de răcire în pivniță degradează termic sute de sticle Grand Cru?',
    shortDescription: 'Temperatura urcă la 38°C timp de 4 zile în mijlocul verii, alterând gustul și proprietățile vinurilor de patrimoniu.',
    situation: 'Ai investit o avere într-o cramă privată cu temperatură și umiditate controlată, adăpostind peste 300 de sticle de vin de colecție (Bordeaux Grand Cru Classé, Domaine de la Romanée-Conti) în valoare totală de 320.000 RON. În timp ce ești plecat în concediu, unitatea de climatizare dedicată suferă o avarie a compresorului. Temperatura din pivniță crește la 38°C timp de 96 de ore. Dopurile de plută sunt împinse afară, iar vinurile suferă degradare termică ireversibilă (madeirizare), devenind nevendabile.',
    heroImage: '/images/scenarios/art-damage.jpg',
    imageCaption: 'Colecțiile de vinuri fine și băuturi rare necesită asigurări All-Risks specializate cu clauză de alterare a temperaturii (Temperature Variation Cover).',
    severityLabel: 'Pierdere Totală de Colecție Fină',
    featured: false,
    tags: ['vinuri-rare', 'crama-climatizare', 'grand-cru', 'alterare-temperatura', 'fine-wine-insurance'],
    illustrativeCost: 'Valoare colecție de vinuri depreciată: 150.000 – 320.000 RON',
    withoutInsurance: {
      title: 'Poliță standard de locuință',
      statusLabel: 'Refuz total: „alterarea termică a alimentelor și băuturilor este exclusă”',
      financialImpact: 'Pierderea a 70.000 EUR din portofoliul de active alternative',
      points: [
        'Polițele standard de casă limitează conținutul din frigidere/congelatoare la maximum 500 – 1.000 EUR pentru alimente uzuale.',
        'Vinurile rare nu sunt recunoscute ca bunuri de mare valoare dacă nu există o expertiză somelier la subscriere.',
        'Rămâi cu sute de sticle de vin celebru inutilizabile pe piața secundară a colecționarilor.'
      ],
      summary: 'Fără o clauză dedicată pentru pivnițe de vinuri, defecțiunea tehnică distruge complet colecția.'
    },
    withInsurance: {
      title: 'Cu poliță dedicată Fine Wine & Luxury Collections (Clauza de Defecțiune a Instalației de Climatizare)',
      statusLabel: 'Despăgubire integrală pe baza catalogului de licitație Liv-ex',
      financialImpact: 'Plata integrală a valorii de piață a colecției asigurate',
      points: [
        'Polița acoperă alterarea băuturilor fine cauzată de defectarea instalației de refrigerare sau a senzorilor de climatizare.',
        'Suma asigurată este stabilită pe baza indicelui bursier internațional de vinuri (Liv-ex) sau a facturilor de achiziție de la case de licitații.',
        'Colecționarul își recuperează capitalul de investiție.'
      ],
      summary: 'Pasiunea ta pentru oenologie este garantată de o asigurare de lux pe măsură.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Sistem de alarmă pentru temperatură', detail: 'Contractele de lux cer de regulă ca pivnița să aibă un senzor conectat la telefon sau dispecerat care alertează depășirea pragului de 18°C.' },
        { label: 'Actualizarea catalogului de sticle', detail: 'Colecția trebuie actualizată anual pe măsură ce adaugi noi achiziții de la licitații.' }
      ]
    },
    immediateSteps: [
      'Repune în funcțiune o unitate mobilă de răcire și securizează sticlele rămase.',
      'Fotografiază dopurile expulzate și termohigrometrul care atestă temperatura atinsă.',
      'Solicită unui somelier autorizat sau expert atestat un raport de degustare/constatare a degradării organoleptice.',
      'Deschide dosarul la asigurătorul tău de colecții de lux.'
    ],
    usefulDocuments: [
      'Catalogul colecției de vinuri cu proveniența fiecărei sticle',
      'Facturile de cumpărare de la case de licitații sau crame de renume',
      'Polița Fine Wine All-Risks'
    ],
    advisorQuestions: [
      'Cum se calculează deprecierea sticlelor de vin dacă doar o parte din dopuri au fost afectate?',
      'Este acoperită colecția pe durata transportului de la crama producătoare la reședința privată?'
    ],
    disclaimer: 'Asigurarea colecțiilor de vinuri impune condiții stricte de monitorizare a mediului de păstrare.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'luxury-avion-usor-delicopter-privat-avarie-hangar',
    slug: 'avion-usor-delicopter-privat-avarie-hangar',
    categoryId: 'luxury-bunuri',
    categoryName: 'BUNURI DE LUX & VALORI',
    title: 'Avionul privat ultraușor este avariat grav în hangar de o furtună care smulge acoperișul',
    mainQuestion: 'Ce poliță aeronautică acoperă distrugerea aripii și a elicei unui avion de agrement la sol?',
    shortDescription: 'O grindină violentă sparge luminatoarele hangarului și perforează suprafețele de comandă ale aparatului de zbor.',
    situation: 'Deții un avion de agrement (Cirrus SR22 sau Diamond DA42) parcat într-un hangar la un aerodrom privat. O furtună extremă smulge o parte din acoperișul metalic al hangarului. Bucăți grele de tablă și grinzi cad direct peste aripa stângă și elicea din compozit a aeronavei, deformând profund lonjeronul principal și spărgând parbrizul cabinei. Avionul este imobilizat la sol, necesitând inspecție structurală și reparație autorizată de Agenția Europeană de Siguranță a Aviației (EASA).',
    heroImage: '/images/scenarios/storm-roof.jpg',
    imageCaption: 'Asigurarea aeronautică (Aviation Hull & Liability) acoperă riscurile atât în zbor (In-Flight), cât și pe durata staționării la sol (Ground Risks).',
    severityLabel: 'Daună Aeronautică Majoră',
    featured: false,
    tags: ['avion-privat', 'aviation-hull', 'hangar-avarie', 'easa-reparatie', 'asigurare-aeronautica'],
    illustrativeCost: 'Costuri inspecție structurală + piese aeronautice: 150.000 – 450.000 RON',
    withoutInsurance: {
      title: 'Doar asigurarea minimă de răspundere civilă aeronautică față de terți',
      statusLabel: 'Corpul aeronavei proprii (Hull) este complet neasigurat la sol',
      financialImpact: 'Plată de zeci de mii de euro pentru piese certificate EASA',
      points: [
        'Asigurarea obligatorie de aviație acoperă doar daunele aduse terților sau pasagerilor, NU și corpul aeronavei tale.',
        'Proprietarul hangarului declină răspunderea invocând forța majoră meteo a furtunii.',
        'Piesele aeronautice cu certificare Form 1 au costuri uriașe și timp lung de livrare.'
      ],
      summary: 'Proprietarul aeronavei suportă singur o cheltuială imensă pentru readucerea avionului în stare de zbor.'
    },
    withInsurance: {
      title: 'Cu poliță de Aviație Generală (Hull All-Risks Ground & Flight)',
      statusLabel: 'Despăgubire completă a pieselor originale certificate EASA',
      financialImpact: 'Reparație aprobată în atelier de întreținere aeronautică acreditat (Part-145)',
      points: [
        'Polița Hull acoperă daunele produse la sol (Ground Risks) provocate de furtuni, incendiu sau cădere de corpuri.',
        'Sunt decontate aripa nouă, elicea din fibră, manopera tehnicienilor licențiați și zborul de test.',
        'Aeronava își recapătă Certificatul de Navigabilitate (ARC).'
      ],
      summary: 'Aparatul tău de zbor este protejat impecabil, respectând cele mai riguroase standarde de siguranță aviatică.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Ground Risk vs In-Motion', detail: 'Verifică dacă polița include riscurile la sol în hangar (Ground Risks Hull) chiar și în perioadele când avionul nu zboară.' },
        { label: 'Atelierul Part-145 autorizat', detail: 'Asigură-te că polița permite alegerea liberă a centrului tehnic autorizat EASA pentru reparație.' }
      ]
    },
    immediateSteps: [
      'Nu atinge aeronava înainte de documentarea foto și anunțarea Autorității de Investigații și Analiză pentru Siguranța Aviației Civile (CIAS) dacă este cazul.',
      'Solicită administrației aerodromului un raport oficial de furtună și daune în hangar.',
      'Avizează asigurătorul aeronautic de urgență.',
      'Contactează organizația Part-145 responsabilă de mentenanța aeronavei tale.'
    ],
    usefulDocuments: [
      'Certificatul de Înmatriculare și Certificatul de Navigabilitate ale aeronavei',
      'Raportul de incident al administratorului de aerodrom',
      'Polița de asigurare Aviation Hull All-Risks'
    ],
    advisorQuestions: [
      'Include contractul meu costurile pentru zborul de test și eliberarea noului certificat de eliberare în serviciu (CRS)?',
      'Care este franșiza fixă la riscurile produse în hangar la sol?'
    ],
    disclaimer: 'Reparațiile aeronautice pot fi efectuate exclusiv de organizații autorizate conform reglementărilor EASA Part-145.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('luxury.ts', 'luxuryScenarios', lItems);

console.log('✓ Successfully finalized 120+ library expansion!');
