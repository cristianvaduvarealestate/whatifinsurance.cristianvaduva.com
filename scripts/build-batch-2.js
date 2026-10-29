// scripts/build-batch-2.js
const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, '..', 'src', 'data', 'scenarios');

function save(filename, varName, list) {
  const code = `import { Scenario } from '@/types/scenario';

export const ${varName}: Scenario[] = ${JSON.stringify(list, null, 2)};
`;
  fs.writeFileSync(path.join(targetDir, filename), code, 'utf8');
  console.log(`✓ ${filename} written with ${list.length} scenarios.`);
}

// =========================================================================
// 2. RĂSPUNDERE CIVILĂ ȘI ACCIDENTE COTIDIENE (12 scenarii)
// =========================================================================
const raspundereScenarios = [
  {
    id: 'raspundere-copil-sparge-televizor-magazin',
    slug: 'copil-sparge-televizor-magazin',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Copilul trage de pe stand și sparge un televizor de 15.000 RON într-un showroom',
    mainQuestion: 'Cine este obligat legal să plătească un produs scump spart accidental de un minor într-un magazin?',
    shortDescription: 'O clipă de neatenție la cumpărături se soldează cu un ecran OLED de 85 inch făcut țăndări pe gresie.',
    situation: 'Te afli într-un magazin de electronice de mari dimensiuni împreună cu copilul tău de 5 ani. În timp ce citești specificațiile unui electrocasnic, copilul fuge spre un stand pe care era expus un televizor OLED de ultimă generație. Trage de cablu sau de marginea ramei, iar televizorul se prăbușește de la 1 metru înălțime pe podea. Ecranul este spart complet, iar carcasa este deformată. Șeful de magazin întocmește proces-verbal și solicită plata a 14.999 RON conform Codului Civil (răspunderea părinților pentru fapta minorului).',
    heroImage: '/images/scenarios/family-tv-broken.jpg',
    imageCaption: 'Articolul 1372 din Codul Civil român instituie răspunderea părinților pentru prejudiciile cauzate de copiii lor minori.',
    severityLabel: 'Risc Financiar Imediat',
    featured: true,
    tags: ['raspundere-parinteasca', 'copil-minor', 'dauna-magazin', 'televizor-spart', 'rc-familie'],
    illustrativeCost: 'Cost produs distrus: 10.000 – 25.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere Civilă a Familiei (Cap de Familie)',
      statusLabel: 'Părintele achită 100% din veniturile proprii',
      financialImpact: 'Plată directă de 14.999 RON sau proces civil cu executare',
      points: [
        'Conform Art. 1372 Cod Civil, părinții răspund integral pentru fapta ilicită săvârșită de minorul aflat sub supravegherea lor.',
        'Magazinul are înregistrări video clare de pe camerele de supraveghere.',
        'Dacă refuzi plata, magazinul deschide acțiune civilă în instanță, adăugând cheltuieli de judecată și onorarii de avocați.'
      ],
      summary: 'Ești obligat legal să scoți mii de euro din economii pentru a acoperi gafa minorului.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Civilă a Familiei (Cap de Familie)',
      statusLabel: 'Despăgubire integrală achitată magazinului de către asigurător',
      financialImpact: 'Plata doar a unei franșize mici (ex. 50 – 100 EUR) sau zero costuri',
      points: [
        'Asigurarea de Răspundere Civilă a Familiei acoperă expres daunele materiale provocate terților de către membrii familiei (inclusiv copiii minori).',
        'Asigurătorul verifică înregistrarea video și factura de intrare în gestiune a magazinului și virează despăgubirea direct în contul companiei comerciale.',
        'Părintele nu este târât în procese sau dispute la casierie.'
      ],
      summary: 'Polița funcționează ca un scut financiar perfect împotriva accidentelor copilărești.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția persoanelor asigurate', detail: 'Asigură-te că polița include soțul/soția și toți copiii minori care locuiesc în aceeași gospodărie.' },
        { label: 'Bunuri încredințate vs Bunuri terți', detail: 'Dauna într-un magazin sau spațiu public este un prejudiciu clasic adus unui terț acoperit standard.' },
        { label: 'Suma asigurată per an', detail: 'Verifică plafonul de răspundere anual (recomandat minim 10.000 – 30.000 EUR).' }
      ]
    },
    immediateSteps: [
      'Păstrează calmul și verifică dacă copilul a suferit vreo zgârietură sau tăietură de la sticla spartă.',
      'Solicită conducerii magazinului întocmirea unui proces-verbal de constatare la fața locului și salvarea înregistrării video.',
      'Nu achita suma pe loc în numerar; solicită emiterea unei adrese oficiale de pretenții și a facturii de gestiune.',
      'Avizează evenimentul la compania ta de asigurări de răspundere civilă.'
    ],
    usefulDocuments: [
      'Procesul-verbal de incident întocmit de agentul de securitate/șeful de magazin',
      'Factura de achiziție de la furnizor sau prețul de raft al bunului avariat',
      'Polița de Răspundere Civilă a Familiei'
    ],
    advisorQuestions: [
      'Acoperă polița mea de locuință și răspunderea civilă a familiei în afara casei (în spații comerciale)?',
      'Ce procedură de despăgubire există pentru bunurile expuse în showroom-uri comerciale?'
    ],
    disclaimer: 'Răspunderea parentală este reglementată strict de Codul Civil român; asigurarea preia sarcina financiară a despăgubirii.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-caine-musca-trecator-parc',
    slug: 'caine-musca-trecator-parc',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Câinele familiei se sperie și mușcă un trecător în parc',
    mainQuestion: 'Ce răspundere financiară și penală ai dacă animalul tău de companie rănește o persoană pe domeniul public?',
    shortDescription: 'Un zgomot brusc declanșează o reacție agresivă a câinelui: haine sfâșiate, plăgi mușcate și nevoie de vaccin antirabic.',
    situation: 'Plimbi câinele în parc în lesă. Un copil trece în viteză pe lângă voi cu o trotinetă metalică zgomotoasă. Câinele se sperie, sare brusc și mușcă un trecător adult de antebraț și picior. Victima suferă răni deschise profunde care necesită suturi chirurgicale la Urgențe, profilaxie antirabică și antitetanică, plus concediu medical de 3 săptămâni.',
    heroImage: '/images/scenarios/dog-bite.jpg',
    imageCaption: 'Conform Art. 1375 Cod Civil, proprietarul unui animal răspunde pentru prejudiciul cauzat de acesta, indiferent dacă animalul se afla în paza sa sau scăpase de sub control.',
    severityLabel: 'Răspundere Vătămări Corporale',
    featured: true,
    tags: ['caine-muscatura', 'raspundere-animal-companie', 'vatamare-corporala', 'daune-morale', 'rc-detinator-animale'],
    illustrativeCost: 'Despăgubiri medicale + daune morale: 8.000 – 35.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere Civilă a Deținătorului de Animale',
      statusLabel: 'Proprietarul câinelui plătește totul din buzunar + dosar penal',
      financialImpact: 'Plată de mii de euro pentru daune materiale și daune morale',
      points: [
        'Victima depune plângere penală pentru vătămare corporală din culpă (Art. 196 Cod Penal) și se constituie parte civilă.',
        'Instanța te va obliga la plata tuturor cheltuielilor medicale, a salariului nerealizat pe perioada concediului medical și la daune morale consistente.',
        'Ești nevoit să angajezi un avocat de drept penal și civil cu costuri mari de onorariu.'
      ],
      summary: 'O secundă de neatenție a câinelui se poate transforma într-un proces penal costisitor și stresant.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Civilă a Deținătorilor de Câini / RC Familie',
      statusLabel: 'Despăgubire integrală a tratamentelor, veniturilor pierdute și daunelor morale',
      financialImpact: 'Asigurătorul achită tranzacția amiabilă sau despăgubirea stabilită de judecător',
      points: [
        'Polița acoperă vătămările corporale provocate de animalul de companie asigurat.',
        'Sunt decontate tratamentele spitalicești, medicamentele, refacerea hainelor sfâșiate și daunele morale în limita sumei asigurate.',
        'Multe polițe oferă și protecție juridică (acoperirea onorariului avocatului pentru mediere sau reprezentare).'
      ],
      summary: 'Asigurarea mediază conflictul pe cale amiabilă și despăgubește victima rapid fără executare silită pe bunurile tale.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Rase considerate periculoase', detail: 'ATENȚIE: Rasele agresive (Pit Bull, Rottweiler, Amstaff, Ciobănesc Caucazian etc.) conform OUG 55/2002 impun o poliță obligatorie dedicată de câini periculoși; ele sunt EXCLUSE din polițele standard de familie.' },
        { label: 'Lesă și botniță', detail: 'Verifică cerințele locale privind obligativitatea botniței în locurile publice aglomerate.' },
        { label: 'Carnetul de sănătate și microcipul', detail: 'Animalul trebuie să fie microcipat legal și cu vaccinul antirabic la zi.' }
      ]
    },
    immediateSteps: [
      'Acordă imediat primul ajutor victimei și apelează 112 pentru trimiterea unei ambulanțe și a unui echipaj de poliție.',
      'Oferă victimei și medicilor copia carnetului de sănătate al câinelui cu dovada vaccinării antirabice (pentru a evita procedurile dureroase inutile).',
      'Fă schimb de date de contact și declară incidentul la secția de poliție competentă.',
      'Deschide dosar de daună pe polița ta de răspundere civilă.'
    ],
    usefulDocuments: [
      'Carnetul de sănătate și pașaportul canin cu microcipul și vaccinările înscrise',
      'Documentele medicale ale victimei și foaia de observație de la camera de gardă',
      'Polița de răspundere civilă'
    ],
    advisorQuestions: [
      'Este rasa câinelui meu acoperită în polița standard de răspundere a familiei?',
      'Care este limita maximă de despăgubire pentru vătămări corporale produse de animale de companie?'
    ],
    disclaimer: 'Deținătorii de câini din rase periculoase (OUG 55/2002) au obligația legală de a încheia o asigurare de răspundere civilă specifică.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-biciclist-loveste-pieton-trotuar',
    slug: 'biciclist-loveste-pieton-trotuar',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Accident grav pe trotuar: biciclistul lovește un pieton în vârstă',
    mainQuestion: 'Cine plătește operația ortopedică și recuperarea unui pieton accidentat de un biciclist?',
    shortDescription: 'O manevră bruscă de evitare se soldează cu lovirea violentă a unui pensionar care suferă o fractură de col femural.',
    situation: 'Rulezi cu bicicleta pe pista de biciclete sau pe trotuar cu circa 25 km/h. Un pieton face un pas lateral neașteptat dincolo de copaci. Îl lovești în plin. În urma impactului, victima în vârstă de 68 de ani cade pe bordură și suferă o fractură de col femural cu deplasare. Necesită operație ortopedică de urgență pentru montarea unei proteze de șold, urmată de 6 luni de recuperare la pat.',
    heroImage: '/images/scenarios/cyclist-accident.jpg',
    imageCaption: 'Bicicletele nu au RCA obligatoriu în România, astfel încât utilizatorul răspunde civil delictual cu întregul său patrimoniu personal.',
    severityLabel: 'Răspundere Civilă și Traumatism Grav',
    featured: true,
    tags: ['biciclist-pieton', 'fractura-sold', 'raspundere-civila-bicicleta', 'proteza-ortopedica', 'daune-morale'],
    illustrativeCost: 'Proteză de șold privată + spitalizare + daune: 25.000 – 70.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere Civilă a Biciclistului',
      statusLabel: 'Biciclistul răspunde cu toate veniturile și bunurile personale',
      financialImpact: 'Zeci de mii de lei datorați pentru îngrijiri medicale și despăgubiri civile',
      points: [
        'Poliția Rutieră întocmește dosar penal pentru vătămare corporală din culpă.',
        'Familia victimei solicită decontarea protezei medicale, a kinetoterapiei, a însoțitorului permanent și daune morale consistente.',
        'Fără o poliță de asigurare, se poate ajunge la poprire de 33% pe salariul lunar pe mai mulți ani de zile.'
      ],
      summary: 'O plimbare cu bicicleta poate duce la datorii copleșitoare în lipsa unei acoperiri de răspundere civilă.'
    },
    withInsurance: {
      title: 'Cu asigurare de Răspundere Civilă Privată (Modul Mobilitate Alternativă / Bicicletă)',
      statusLabel: 'Preluarea integrală a pretențiilor financiare de către asigurător',
      financialImpact: 'Despăgubire directă aprobată victimei în limita sumei asigurate (ex. 20.000 – 50.000 EUR)',
      points: [
        'Asigurătorul preia dosarul de pretenții al victimei și decontează cheltuielile medicale justificate cu documente.',
        'Sunt acoperite intervențiile chirurgicale, proteza, medicamentele și indemnizația pentru perioada de incapacitate de mișcare.',
        'Avocații companiei de asigurări negociază o tranzacție extrajudiciară care duce adesea la retragerea plângerii penale de către victimă.'
      ],
      summary: 'Victima primește sprijinul medical necesar rapid, iar biciclistul este salvat de la ruina financiară.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Bicicletă electrică (E-bike)', detail: 'Verifică dacă polița acoperă și bicicletele electrice (Pedelec cu limitare la 250W și 25 km/h) sau doar bicicletele clasice mecanice.' },
        { label: 'Circulația pe trotuar', detail: 'Conform Codului Rutier, mersul pe trotuar fără pistă marcată este interzis; asigură-te că asigurătorul nu are o excludere strictă pentru încălcarea regulilor de circulație rutieră.' }
      ]
    },
    immediateSteps: [
      'Acordă primul ajutor, nu muta victima dacă acuză dureri la șold/coloană și apelează imediat 112.',
      'Așteaptă echipajul de la Poliția Rutieră pentru efectuarea măsurătorilor și a testului etilotest.',
      'Oferă datele de contact și copia poliței tale de răspundere civilă familiei victimei.',
      'Notifică de urgență asigurătorul tău despre deschiderea cercetărilor.'
    ],
    usefulDocuments: [
      'Procesul-verbal de cercetare la fața locului emis de Poliția Rutieră',
      'Rapoartele medicale și certificatele medico-legale ale victimei',
      'Polița de asigurare de răspundere civilă a biciclistului'
    ],
    advisorQuestions: [
      'Acoperă polița mea de familie accidentele produse în timp ce merg pe bicicletă sau trotinetă nemotorizată?',
      'Ce asistență juridică este inclusă în contract pentru procesele civile de vătămare corporală?'
    ],
    disclaimer: 'Circulația pe două roți impune respectarea strictă a normelor rutiere; asigurarea nu exonerează de răspunderea penală.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-obiect-cazut-balcon-masina-parcata',
    slug: 'obiect-cazut-balcon-masina-parcata',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Un ghiveci de flori cade de la etajul 6 peste parbrizul și capota unei mașini',
    mainQuestion: 'Ce se întâmplă dacă o rafală de vânt aruncă un ghiveci greu de pe balconul tău peste o mașină parcată jos?',
    shortDescription: 'Un ghiveci de teracotă de 10 kg sparge plafonul panoramic din sticlă și bordul unui SUV nou.',
    situation: 'O furtună violentă de vară cu rafale de peste 70 km/h smulge un ghiveci ceramic greu de pe balustrada balconului tău de la etajul 6. Ghiveciul cade direct pe plafonul de sticlă al unei mașini parcate regulamentar în fața blocului. Plafonul panoramic se sparge în mii de bucăți, airbagurile cortină sar din cauza senzorilor de impact, iar planșa de bord este distrusă. Paguba este estimată la 35.000 RON.',
    heroImage: '/images/scenarios/balcony-fall.jpg',
    imageCaption: 'Conform Art. 1378 Cod Civil, proprietarul sau locatarul unui imobil răspunde pentru prejudiciul cauzat prin căderea sau aruncarea din imobil a oricărui lucru.',
    severityLabel: 'Răspundere Obiecte Căzute din Imobil',
    featured: true,
    tags: ['ghiveci-balcon', 'obiect-cazut', 'masina-avariata', 'art-1378-cod-civil', 'raspundere-locativa'],
    illustrativeCost: 'Cost înlocuire plafon panoramic + bord + airbaguri: 25.000 – 45.000 RON',
    withoutInsurance: {
      title: 'Fără clauză de Răspundere Civilă atașată Locuinței',
      statusLabel: 'Proprietarul apartamentului răspunde delictual integral',
      financialImpact: 'Plată de 25.000 – 45.000 RON din economiile personale',
      points: [
        'Articolul 1378 Cod Civil stabilește o răspundere obiectivă: cel care locuiește în imobil răspunde pentru orice cade de la fereastră sau balcon, indiferent dacă a fost sau nu vinovat direct.',
        'Nu poți invoca vântul ca forță majoră dacă ghiveciul nu era securizat conform regulamentelor asociației.',
        'Proprietarul mașinii sau asigurătorul său CASCO va formula imediat regres civil împotriva ta.'
      ],
      summary: 'Ești executat silit pentru întregul deviz al mașinii dacă nu ai asigurare de răspundere.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Răspundere Civilă față de Terți)',
      statusLabel: 'Despăgubire integrală aprobată pe polița ta de locuință',
      financialImpact: 'Zero costuri (acoperit de clauza de răspundere a imobilului)',
      points: [
        'Clauza de răspundere civilă decurgând din deținerea locuinței acoperă exact riscurile prevăzute de Art. 1378 Cod Civil (obiecte căzute sau aruncate).',
        'Asigurătorul tău decontează direct reparația mașinii către service sau către compania CASCO a păgubitului.',
        'Relațiile de vecinătate sunt păstrate fără certuri sau procese civile.'
      ],
      summary: 'Polița casei preia toată responsabilitatea financiară pentru accidentul produs de pe balcon.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Răspunderea decurgând din exploatarea imobilului', detail: 'Asigură-te că polița include nu doar pereții casei, ci și prejudiciile produse terților din cauza clădirii sau a bunurilor din ea.' },
        { label: 'Suma asigurată pentru răspundere', detail: 'Recomandat un plafon de minim 15.000 – 50.000 EUR per eveniment.' }
      ]
    },
    immediateSteps: [
      'Cobori imediat la mașină, identifică proprietarul vehiculului și recunoaște proveniența obiectului.',
      'Fotografiază resturile ghiveciului pe plafonul mașinii și locul de pe balcon de unde s-a desprins.',
      'Oferă proprietarului copia poliței tale de locuință pentru deschiderea dosarului.',
      'Dacă intervine Poliția Rutieră (Biroul de Accidente Ușoare), dă declarație menționând polița de răspundere activă.'
    ],
    usefulDocuments: [
      'Autorizația de Reparație eliberată de Poliția Rutieră',
      'Fotografii ale balconului și ale autoturismului avariat',
      'Polița facultativă de locuință cu clauza de răspundere civilă bifată'
    ],
    advisorQuestions: [
      'Include polița mea de apartament răspunderea pentru obiecte desprinse de fațadă sau balustradă?',
      'Se aplică franșiză în cazul daunelor provocate bunurilor parcate pe aleea blocului?'
    ],
    disclaimer: 'Securizarea balcoanelor și a ghivecelor exterioare este o obligație a fiecărui locatar conform normelor urbane.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-prieten-imprumut-aparat-foto-distrus',
    slug: 'prieten-imprumut-aparat-foto-distrus',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Scapi și distrugi pe stânci camera foto profesională împrumutată de la un prieten',
    mainQuestion: 'Ce poliță plătește dacă deteriorezi ireversibil un echipament electronic scump împrumutat pe încredere?',
    shortDescription: 'Un aparat mirrorless full-frame cu obiectiv de 4.000 EUR cade pe pietre într-o drumeție montană.',
    situation: 'Împrumuți de la un prieten fotograf o cameră mirrorless profesională Sony Alpha cu un obiectiv G-Master în valoare totală de 20.000 RON pentru un weekend la munte. Pe o potecă stâncoasă, te împiedici, cureaua se desprinde din prindere, iar aparatul se izbește violent de stânci. Montura obiectivului este smulsă, senzorul este fisurat, iar carcasa de magneziu este zdrobită. Aparatul este declarat daună totală economică de către service-ul autorizat.',
    heroImage: '/images/scenarios/art-damage.jpg',
    imageCaption: 'Bunurile împrumutate (comodat) au un statut special în asigurări și sunt frecvent excluse dacă nu există o clauză dedicată pentru bunuri încredințate.',
    severityLabel: 'Risc Financiar și Moral Personal',
    featured: false,
    tags: ['camera-foto', 'echipament-imprumutat', 'bunuri-incredintate', 'comodat', 'raspundere-privata'],
    illustrativeCost: 'Valoare echipament distrus: 15.000 – 25.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare cu acoperire specifică pentru bunuri încredințate',
      statusLabel: 'Datorie morală și materială personală de 100%',
      financialImpact: 'Plată integrală din buzunar a sumei de 20.000 RON',
      points: [
        'Multe polițe de răspundere civilă standard EXCLUD bunurile luate cu împrumut, în custodie sau chirie (bunuri încredințate/folosite).',
        'Prietenul tău rămâne fără instrumentul său de lucru sau pasiune.',
        'Ești nevoit să economisești sau să iei un credit de nevoi personale pentru a-i cumpăra un aparat similar nou.'
      ],
      summary: 'Deteriorarea bunurilor împrumutate distruge prietenii și impune o plată dureroasă din venituri proprii.'
    },
    withInsurance: {
      title: 'Cu poliță de Răspundere Civilă Privată cu Clauza extinsă pentru Bunuri Încredințate (Gefälligkeitsschäden)',
      statusLabel: 'Despăgubire aprobată pentru echipamentul distrus accidental',
      financialImpact: 'Compensarea valorii de înlocuire a aparatului foto',
      points: [
        'Polițele moderne de răspundere privată oferă clauza specială pentru bunuri împrumutate cu titlu gratuit de la prieteni sau vecini.',
        'Asigurătorul decontează contravaloarea echipamentului la valoarea sa de piață pe baza evaluării service-ului oficial.',
        'Relația de prietenie este salvată fără presiuni financiare apăsătoare.'
      ],
      summary: 'Clauza de bunuri încredințate acoperă exact ghinioanele produse obiectelor împrumutate cu bună-credință.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Excluderea bunurilor în folosință/împrumut', detail: 'ATENȚIE: Verifică cu atenție capitolul de excluderi; 90% din polițele standard exclud daunele aduse bunurilor aflate în posesia sau custodia asiguratului.' },
        { label: 'Clauza specială de curtoazie', detail: 'Caută formularea expresă: „Sunt acoperite daunele aduse bunurilor împrumutate cu titlu gratuit”.' }
      ]
    },
    immediateSteps: [
      'Nu încerca reparații improvizate care pot anula garanția producătorului.',
      'Duceți echipamentul împreună la centrul de service autorizat al mărcii pentru o constatare tehnică oficială.',
      'Obțineți devizul tehnic cu mențiunea „daună totală / nereparabil”.',
      'Deschide dosarul la asigurător specificând clauza contractuală aplicabilă.'
    ],
    usefulDocuments: [
      'Raportul de expertiză tehnică din service-ul autorizat',
      'Factura inițială de achiziție a prietenului sau dovada valorii curente de piață',
      'Polița de asigurare de răspundere'
    ],
    advisorQuestions: [
      'Include polița mea de răspundere clauza pentru bunuri împrumutate temporar de la prieteni?',
      'Care este sublimita de despăgubire pentru echipamente electronice avariate?'
    ],
    disclaimer: 'Asigurarea bunurilor mobile împrumutate este o clauză specială facultativă ce necesită menționare explicită în contract.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-musafir-aluneca-gresie-umeda',
    slug: 'musafir-aluneca-gresie-umeda',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Un musafir alunecă pe gresia udă din baia ta și își rupe antebrațul',
    mainQuestion: 'Ce obligații ai dacă o persoană invitată la tine acasă se accidentează din cauza unei neglijențe casnice?',
    shortDescription: 'O podea proaspăt spălată fără covoraș antiderapant provoacă o căzătură urâtă cu fractură deschisă.',
    situation: 'Organizezi o cină cu prietenii acasă. Unul dintre musafiri merge la baie, unde tocmai se spălase pe jos și gresia lucioasă era încă udă, fără covoraș cauciucat. Alunecă violent, încearcă să se sprijine și își fracturează ambele oase ale antebrațului stâng (radius și ulna). Necesită intervenție chirurgicală cu plăci și șuruburi de titan, 5 zile de spitalizare și incapacitate de muncă de 2 luni.',
    heroImage: '/images/scenarios/guest-injury-home.jpg',
    imageCaption: 'Proprietarul unei locuințe are o obligație generală de diligență pentru asigurarea siguranței persoanelor invitate în spațiul său privat.',
    severityLabel: 'Vătămare Corporală în Spațiu Privat',
    featured: false,
    tags: ['musafir-accidentat', 'gresie-umeda', 'fractura-brat', 'raspundere-locuinta', 'spitalizare-urgenta'],
    illustrativeCost: 'Costuri spitalizare privată + recuperare + daune: 15.000 – 40.000 RON',
    withoutInsurance: {
      title: 'Fără clauză de răspundere civilă în polița de locuință',
      statusLabel: 'Răspundere personală directă față de prieten/musafir',
      financialImpact: 'Tensuni uriașe în relație și mii de euro cheltuieli medicale',
      points: [
        'Dacă musafirul lucrează pe cont propriu sau are un job manual, pierderea veniturilor pe 2 luni este o povară uriașă.',
        'Prietenul se simte stânjenit să ceară bani, dar cheltuielile cu spitalizarea și recuperarea îl forțează să solicite sprijin financiar.',
        'În absența unei asigurări, prietenia este compromisă de disputa financiară.'
      ],
      summary: 'Un simplu accident casnic se transformă într-o criză morală și financiară între prieteni apropiați.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Răspundere Civilă Legală a Proprietarului)',
      statusLabel: 'Toate cheltuielile medicale și indemnizațiile plătite elegant de asigurător',
      financialImpact: 'Despăgubire integrală virată direct musafirului rănit',
      points: [
        'Polița de locuință extinsă acoperă vătămările corporale suferite de terți (inclusiv musafiri) în interiorul imobilului asigurat.',
        'Sunt achitate costurile de spitalizare, intervenția chirurgicală ortopedică, ședințele de kinetoterapie și compensația pentru concediu medical.',
        'Relația personală rămâne intactă: asigurarea funcționează exact așa cum a fost gândită.'
      ],
      summary: 'Asigurătorul compensează suferința prietenului tău fără ca tu să fii pus în dificultate financiară.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția terților', detail: 'Membrii familiei cu domiciliul comun nu sunt considerați terți, dar prietenii, musafirii și vizitatorii ocazionali sunt acoperiți 100%.' },
        { label: 'Limita pentru vătămări corporale', detail: 'Verifică dacă suma asigurată pentru vătămări corporale este separată de cea pentru daune materiale.' }
      ]
    },
    immediateSteps: [
      'Acordă primul ajutor, imobilizează brațul cu o atelă improvizată și transportă de urgență prietenul la spital.',
      'Oferă-i sprijinul moral și explică-i că locuința ta are asigurare de răspundere care îi va acoperi toate costurile.',
      'Păstrează toate biletele de externare, rețetele de medicamente și facturile de recuperare medicală.',
      'Deschide dosarul la asigurătorul tău de locuință.'
    ],
    usefulDocuments: [
      'Biletul de internare/externare din spital cu diagnosticul ortopedic',
      'Facturile de materiale de osteosinteză (plăci, șuruburi) și chitanțele de tratament',
      'Polița facultativă de locuință'
    ],
    advisorQuestions: [
      'Acoperă polița mea de casă accidentele suferite de vizitatori în baie sau pe scările interioare?',
      'Ce documente medicale sunt cerute pentru avizarea dosarului de despăgubire a musafirului?'
    ],
    disclaimer: 'Locuința trebuie menținută în condiții normale de siguranță pentru prevenirea accidentelor casnice evitabile.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-menajera-accidentata-munca-locuinta',
    slug: 'menajera-accidentata-munca-locuinta',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Menajera sau instalatorul se accidentează grav în timp ce lucrează în casa ta',
    mainQuestion: 'Ce se întâmplă dacă o persoană angajată pentru curățenie cade de pe scară în timp ce spală geamurile?',
    shortDescription: 'O cădere de la 2 metri înălțime provoacă o fractură de vertebră și incapacitate de muncă pe viață.',
    situation: 'Ai angajat o doamnă pentru curățenie săptămânală în casă. În timp ce stă pe o scară de aluminiu pentru a curăța geamurile înalte, scara alunecă pe parchetul ceruit. Femeia cade pe spate pe marginea mobilierului și suferă o tasare de vertebră lombară cu afectare neurologică. Incidentul se soldează cu spitalizare prelungită și pierderea capacității de muncă.',
    heroImage: '/images/scenarios/guest-injury-home.jpg',
    imageCaption: 'Accidentele suferite de personalul casnic ridică probleme complexe de drept al muncii și răspundere civilă delictuală a beneficiarului.',
    severityLabel: 'Răspundere Juridică și Umană Gravă',
    featured: false,
    tags: ['personal-casnic', 'menajera-accident', 'cadere-scara', 'raspundere-angajator-casnic', 'pensie-invaliditate'],
    illustrativeCost: 'Compensații medicale + rentă viageră posibilă: 50.000 – 180.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de răspundere și fără forme legale de muncă',
      statusLabel: 'Risc de dosar penal și obligație de plată a unei rente viagere',
      financialImpact: 'Obligație financiară pe viață stabilită de instanță',
      points: [
        'Dacă persoana lucra fără contract de muncă sau contract de prestări servicii, Inspectoratul Teritorial de Muncă (ITM) poate aplica amenzi usturătoare.',
        'Victima sau familia acesteia te poate acționa în instanță cerând pensie de întreținere/invaliditate pe termen lung.',
        'Ești expus la plata unor sume lunare uriașe din cauza nerespectării normelor de securitate în muncă.'
      ],
      summary: 'Munca la negru a personalului casnic implică riscuri juridice devastatoare în caz de accident grav.'
    },
    withInsurance: {
      title: 'Cu contract legal de servicii + Asigurare de Răspundere Civilă cu clauză de Personal Casnic',
      statusLabel: 'Despăgubire medicală completă și protecție juridică',
      financialImpact: 'Asigurătorul acoperă despăgubirile civile și compensația financiară',
      points: [
        'Polițele complete de răspundere privată includ clauza expresă de acoperire a personalului de serviciu casnic (menajere, grădinari, bone).',
        'Sunt achitate intervențiile medicale, dispozitivele de susținere și compensația de invaliditate în limita contractului.',
        'Beneficiezi de asistență juridică de specialitate pentru gestionarea relației cu autoritățile de muncă.'
      ],
      summary: 'Atât integritatea persoanei accidentate este susținută financiar, cât și stabilitatea ta patrimonială este garantată.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de personal casnic (Domestic staff)', detail: 'Asigură-te că polița menționează expres persoanele angajate în gospodărie pentru activități de menaj, grădinărit sau îngrijire copii.' },
        { label: 'Echipamentul pus la dispoziție', detail: 'Verifică să nu fi furnizat o scară vizibil defectă sau improvizată, ceea ce ar putea fi catalogat drept culpă gravă.' }
      ]
    },
    immediateSteps: [
      'Apelează imediat 112 și nu încerca să miști persoana accidentată dacă acuză dureri de spate sau amorțeli la membre.',
      'Permite medicilor de la ambulanță să efectueze imobilizarea pe targă rigidă.',
      'Fotografiază locul căderii și scara utilizată.',
      'Contactează asigurătorul pentru a declara accidentul casnic de muncă.'
    ],
    usefulDocuments: [
      'Fișa de intervenție SMURD / Salvare',
      'Raportul medical de internare din secția de neurochirurgie',
      'Polița de asigurare cu clauza de angajați casnici inclusă'
    ],
    advisorQuestions: [
      'Include contractul meu de răspundere a locuinței protecție pentru accidentele suferite de femeia de serviciu sau grădinar?',
      'Ce condiții de angajare (contract individual de muncă vs prestări servicii SRL) sunt cerute de asigurător?'
    ],
    disclaimer: 'Folosirea forței de muncă fără forme legale atrage sancțiuni administrative și răspundere penală conform legislației muncii.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'raspundere-incendiu-gratare-curte-gard-vecin',
    slug: 'incendiu-gratare-curte-gard-vecin',
    categoryId: 'raspundere-civila',
    categoryName: 'RĂSPUNDERE CIVILĂ',
    title: 'Scântei de la un grătar în curte aprind gardul viu și magazia din lemn a vecinului',
    mainQuestion: 'Cine suportă daunele dacă un foc de grătar scăpat de sub control distruge anexele unei proprietăți învecinate?',
    shortDescription: 'O rafală de vânt aprinde un șir de tuia uscați, iar focul cuprinde acoperișul foișorului alăturat.',
    situation: 'Faci un grătar în curtea casei într-o zi de duminică. Vântul se intensifică brusc și poartă cărbuni aprinși către gardul de delimitare acoperit cu un gard viu dens de tuia. Arborii se aprind ca o torță în mai puțin de 60 de secunde. Flăcările de 4 metri se propagă la foișorul din lemn și magazia de unelte a vecinului, distrugând utilaje de grădinărit și mobilier de terasă.',
    heroImage: '/images/scenarios/burn-neighbor.jpg',
    imageCaption: 'Propagarea focului accidental între proprietăți vecine generează procese civile de amploare dacă nu există o poliță de răspundere civilă activă.',
    severityLabel: 'Risc Financiar și Daună Materială Vecini',
    featured: true,
    tags: ['incendiu-gratar', 'gard-viu-ars', 'foisor-vecin', 'isu-pompieri', 'raspundere-delictuala'],
    illustrativeCost: 'Cost refacere foișor + gard + utilaje: 30.000 – 75.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de Răspundere Civilă atașată locuinței',
      statusLabel: 'Plată integrală a devizului de reconstrucție al vecinului',
      financialImpact: 'Obligație de plată de zeci de mii de lei din economii',
      points: [
        'Vecinul va solicita despăgubiri integrale în baza procesului-verbal al pompierilor care atestă că sursa focului a fost grătarul tău.',
        'Dacă vecinul are asigurare facultativă, asigurătorul său îi va reconstrui foișorul, dar se va îndrepta IMEDIAT împotriva ta prin acțiune de regres.',
        'Relațiile de bună vecinătate sunt iremediabil compromise.'
      ],
      summary: 'Grătarul de weekend se încheie cu un regres financiar costisitor și tensiuni majore în comunitate.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (Clauza de Răspundere față de Vecini)',
      statusLabel: 'Despăgubire integrală achitată vecinului de către compania de asigurări',
      financialImpact: 'Zero cheltuieli personale suportate din buzunar',
      points: [
        'Polița de locuință acoperă daunele materiale provocate imobilelor învecinate din cauza incendiilor accidentale pornite pe proprietatea ta.',
        'Inspectorul de daune evaluează structura din lemn arsă, vegetația distrusă și uneltele avariate și aprobă plata despăgubirii direct în contul vecinului.',
        'Litigiul este stins amiabil și civilizat.'
      ],
      summary: 'Asigurarea funcționează impecabil, acoperind integral pagubele produse pe terenul vecinului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de Răspundere Civilă a Proprietarului', detail: 'Verifică dacă polița ta facultativă include modulul de răspundere față de terți/vecini (nu doar daunele aduse propriei case).' },
        { label: 'Excluderea culpei grave', detail: 'Asigură-te că nu ai folosit substanțe inflamabile interzise (benzină turnată pe foc deschis) care ar putea anula despăgubirea.' }
      ]
    },
    immediateSteps: [
      'Apelează 112 pentru stingerea operativă a focului și folosește furtunul de grădină pentru a proteja casele de locuit.',
      'Colaborează deschis cu echipajul de pompieri ISU pentru redactarea Procesului-Verbal de intervenție.',
      'Asigură-ți vecinul că deții o poliță completă de asigurare care îi va reconstrui foișorul.',
      'Avizează evenimentul la asigurătorul tău în termen de 48 de ore.'
    ],
    usefulDocuments: [
      'Procesul-Verbal de stingere emis de Pompieri (ISU) cu indicarea cauzei probabile',
      'Fotografii ale foișorului, gardului și magaziei arse',
      'Polița facultativă de locuință'
    ],
    advisorQuestions: [
      'Care este plafonul maxim de răspundere civilă față de vecini pe polița mea de casă?',
      'Este acoperită refacerea vegetației (arbori tuia, gazon) distruse de incendiu pe terenul vecinului?'
    ],
    disclaimer: 'Aprinderea focurilor în aer liber trebuie să respecte distanțele legale de siguranță față de construcții și vegetație uscată.',
    lastReviewed: 'Octombrie 2026'
  }
];

save('raspundere.ts', 'raspundereScenarios', raspundereScenarios);

// =========================================================================
// 3. SĂNĂTATE, VIAȚĂ ȘI PROTECȚIE PERSONALĂ (12 scenarii)
// =========================================================================
const viataScenarios = [
  {
    id: 'viata-accident-incapacitate-temporara-munca',
    slug: 'accident-incapacitate-temporara-munca',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Accident grav pe șantier sau la sport și incapacitate de muncă timp de 6 luni',
    mainQuestion: 'Cum îți plătești ratele la casă și cheltuielile familiei dacă nu poți profesa jumătate de an?',
    shortDescription: 'O fractură multiplă de femur și tibie necesită imobilizare prelungită și recuperare anevoioasă.',
    situation: 'Ești un profesionist activ sau antreprenor. În urma unui accident la un meci de fotbal de amatori sau a unei căzături pe o scară, suferi o fractură cominutivă de femur și tibie. Ești supus a două intervenții chirurgicale și ești imobilizat la pat. Medicii certifică o incapacitate temporară completă de muncă de cel puțin 6 luni. Indemnizația de concediu medical din sistemul public este plafonată legal și reprezintă doar o fracțiune din veniturile tale reale.',
    heroImage: '/images/scenarios/inability-work.jpg',
    imageCaption: 'Concediul medical decontat de stat este plafonat legal la 10-12 salarii minime brute, lăsând un gol masiv în bugetul familiilor cu venituri medii și mari.',
    severityLabel: 'Blocaj Financiar pe Termen Mediu',
    featured: true,
    tags: ['incapacitate-munca', 'fractura-femur', 'pierdere-venituri', 'asigurare-accidente', 'indemnizatie-zilnica'],
    illustrativeCost: 'Pierdere de venituri nete pe 6 luni: 30.000 – 90.000 RON',
    withoutInsurance: {
      title: 'Doar concediul medical oferit de stat (FNUASS)',
      statusLabel: 'Venituri reduse dramatic și epuizarea economiilor',
      financialImpact: 'Deficit bugetar lunar de mii de lei + epuizarea fondului de rezervă',
      points: [
        'Dacă ești PFA sau administrator de SRL, concediul medical de stat este derizoriu sau extrem de greu de încasat.',
        'Ratele la bancă, cheltuielile copiilor și utilitățile nu se opresc pe durata convalescenței tale.',
        'Familia este forțată să împrumute bani sau să vândă active pentru a supraviețui financiar 6 luni.'
      ],
      summary: 'Pierderea temporară a capacității de muncă golește rapid toate economiile familiei.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Accidente Persoane cu Indemnizație Zilnică de Spitalizare și Convalescență',
      statusLabel: 'Plată lunară fixă garantată direct în contul tău',
      financialImpact: 'Încasare indemnizație zilnică (ex. 200 – 500 RON/zi de incapacitate certificată)',
      points: [
        'Polița plătește o sumă fixă pe fiecare zi de spitalizare și pe fiecare zi de concediu medical / imobilizare.',
        'Încasezi lunar între 6.000 și 15.000 RON neimpozabili, compensând integral diferența de venit.',
        'Ratele la bancă și stilul de viață al familiei sunt menținute fără nicio degradare.'
      ],
      summary: 'Te poți concentra exclusiv pe vindecare și recuperare, fără stresul ratelor bancare și al facturilor.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Perioada de franșiză temporală', detail: 'Verifică dacă indemnizația zilnică începe din ziua 1, ziua 4 sau ziua 15 de incapacitate medicală.' },
        { label: 'Durata maximă acoperită', detail: 'Asigură-te că polița decontează până la 180 sau 365 de zile de incapacitate continuă per eveniment.' },
        { label: 'Definiția accidentului', detail: 'Evenimentul trebuie să fie brusc, violent și imprevizibil, exterior voinței asiguratului.' }
      ]
    },
    immediateSteps: [
      'Păstrează toate certificatele de concediu medical și fișele de observație din spital.',
      'Solicită medicului ortoped un raport detaliat privind evoluția recuperării și limitările fizice funcționale.',
      'Notifică asigurătorul în termenul prevăzut în contract (uzual 15-30 de zile de la producerea accidentului).',
      'Transmite certificatele medicale lunare pentru deblocarea tranșelor de indemnizație.'
    ],
    usefulDocuments: [
      'Biletul de externare din spital cu protocolul operator detaliat',
      'Certificatele de concediu medical vizate de medicul de familie/specialist',
      'Polița de asigurare de viață/accidente'
    ],
    advisorQuestions: [
      'Ce sumă primesc pe zi de incapacitate temporară de muncă certificată de medic?',
      'Se aplică perioada de așteptare în caz de accident sau acoperirea este valabilă din prima zi de contract?'
    ],
    disclaimer: 'Indemnizația pentru incapacitate temporară se acordă strict pe baza recomandărilor medicale de specialitate.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'viata-diagnostic-boala-grava-oncologie',
    slug: 'diagnostic-boala-grava-oncologie',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Diagnostic oncologic neașteptat și nevoia de terapii inovatoare',
    mainQuestion: 'Ce faci dacă primești un diagnostic de boală gravă și tratamentele de ultimă generație nu sunt decontate rapid de stat?',
    shortDescription: 'Un neoplasm mamar sau de colon impune investigații PET-CT, teste genetice și imunoterapie privată.',
    situation: 'La un control de rutină de ecografie sau colonoscopie, un adult tânăr de 38 de ani, părinte a doi copii, primește un diagnostic dur: carcinom în stadiu intermediar. Protocolul modern de tratament recomandă teste de secvențiere genetică a tumorii (Next Generation Sequencing), investigații PET-CT repetate și terapii biologice țintite la o clinică specializată. În sistemul de stat, listele de așteptare pentru decontare durează 3-5 luni, timp pe care pacientul nu și-l permite.',
    heroImage: '/images/scenarios/serious-diagnosis.jpg',
    imageCaption: 'Diagnosticul unei boli critice impune resurse financiare lichide imediate pentru a accesa cele mai noi protocoale terapeutice fără întârziere.',
    severityLabel: 'Risc Vital și Financiar Extrem',
    featured: true,
    tags: ['boala-critica', 'cancer-oncologie', 'terapii-inovatoare', 'pet-ct', 'capital-garantat-diagnostic'],
    illustrativeCost: 'Costuri teste genetice + imunoterapie + investigații: 80.000 – 250.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare privată de boli critice sau sănătate internațională',
      statusLabel: 'Blocaj pe listele de așteptare sau vânzarea bunurilor de valoare',
      financialImpact: 'Zeci de mii de euro cheltuiți din economii sau împrumuturi disperate',
      points: [
        'Timpul este factorul critic în oncologie; așteptarea de 3 luni pentru o aprobare CNAS poate duce la metastazare.',
        'Analizele moleculare de laborator din străinătate (ex. FoundationOne) costă 3.500 – 5.000 EUR și se achită doar privat.',
        'Familia este nevoită să vândă mașina, un apartament sau să apeleze la donații publice pe rețelele sociale.'
      ],
      summary: 'În fața unei boli grave, lipsa de lichidități poate limita opțiunile terapeutice care fac diferența între viață și moarte.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare pentru Boli Critice (Sumă Asigurată de 100.000 – 250.000 RON plătită pe loc)',
      statusLabel: 'Plată forfetară integrală virată în cont în 14 zile de la confirmarea diagnosticului',
      financialImpact: 'Capital lichid masiv plătit direct asiguratului pentru a fi folosit după propria dorință',
      points: [
        'Polița de boli critice plătește întreaga sumă asigurată (ex. 200.000 RON) IMEDIAT la confirmarea histopatologică a diagnosticului.',
        'Banii nu sunt condiționați de decontarea facturilor: pacientul îi poate folosi pentru a merge la orice clinică privată din Viena, Milano sau Turcia.',
        'Se oferă acces gratuit la serviciul de Second Opinion Medical de la spitale universitare internaționale de elită.'
      ],
      summary: 'Ai la dispoziție capitalul necesar pentru a alege cei mai buni medici și cele mai avansate tratamente din lume.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Perioada de așteptare inițială', detail: 'Polițele de boli grave au o perioadă de așteptare de 90 – 180 de zile de la semnare (boala nu trebuie să fi existat anterior).' },
        { label: 'Perioada de supraviețuire', detail: 'Majoritatea contractelor prevăd o perioadă de supraviețuire de 14 – 30 de zile de la diagnostic pentru deblocarea sumei asigurate.' },
        { label: 'Lista bolilor critice acoperite', detail: 'Verifică dacă include 30-40 de afecțiuni (cancer, infarct, AVC, insuficiență renală, transplant de organe, scleroză multiplă).' }
      ]
    },
    immediateSteps: [
      'Obține raportul histopatologic complet și biopsia cu parafină de la laboratorul de anatomopatologie.',
      'Solicită serviciul de A Doua Opinie Medicală (Second Medical Opinion) inclus în polița ta pentru confirmarea schemei terapeutice.',
      'Depune dosarul la asigurător transmițând buletinul anatomo-patologic.',
      'Încasează capitalul asigurat în contul bancar personal.'
    ],
    usefulDocuments: [
      'Buletinul anatomo-patologic cu confirmarea histologică a neoplaziei',
      'Raportul medical al medicului oncolog cu planul terapeutic propus',
      'Polița de asigurare de boli grave'
    ],
    advisorQuestions: [
      'Ce sumă fixă primesc la diagnosticarea unei afecțiuni oncologice maligne?',
      'Include contractul meu acces la Second Opinion la spitale de top din Europa?'
    ],
    disclaimer: 'Asigurarea pentru boli critice nu înlocuiește tratamentul medical de specialitate, ci oferă resursa financiară pentru susținerea acestuia.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'viata-pierdere-sursa-principala-venit-deces-parinte',
    slug: 'pierdere-sursa-principala-venit-deces-parinte',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Pierderea neașteptată a susținătorului principal al familiei cu credit ipotecar',
    mainQuestion: 'Ce se întâmplă cu locuința și viitorul copiilor dacă părintele care aducea 80% din venituri decedează brusc?',
    shortDescription: 'Un infarct fulgerător lasă o soție și doi copii minori cu un credit ipotecar activ de 120.000 EUR.',
    situation: 'Un bărbat de 42 de ani, stâlp financiar al casei, suferă un stop cardio-respirator fulgerător în somn. În urmă rămân soția și doi copii de vârstă școlară. Veniturile familiei scad instantaneu cu 75%. Familia are un credit ipotecar la bancă pentru apartament cu sold rămas de 115.000 EUR (rată lunară de 4.200 RON). Venitul soției este insuficient chiar și pentru acoperirea ratei bancare și a utilităților.',
    heroImage: '/images/scenarios/serious-diagnosis.jpg',
    imageCaption: 'Asigurarea de viață pe termen lung este ancora fundamentală de securitate pentru familiile cu credite și copii minori în întreținere.',
    severityLabel: 'Tragedie Umană și Risc de Executare Silită',
    featured: true,
    tags: ['deces-sustinator', 'credit-ipotecar', 'asigurare-viata-credit', 'protectie-copii', 'executare-bancara'],
    illustrativeCost: 'Datorie bancară + nevoi educaționale copii: 500.000 – 900.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de viață sau doar asigurarea de bază a băncii cesionată',
      statusLabel: 'Risc masiv de pierdere a locuinței și sărăcie familială',
      financialImpact: 'Incapacitate de plată a ratelor și executare silită a apartamentului',
      points: [
        'Dacă polița băncii nu a fost reînnoită sau avea excluderi neînțelese, banca declară creditul scadent anticipat.',
        'Mama este forțată să scoată apartamentul la vânzare sub presiunea timpului și să se mute într-o chirie mică.',
        'Planurile educaționale ale copiilor (facultate, activități extrașcolare) sunt complet anulate.'
      ],
      summary: 'Moartea tragică a părintelui lasă familia expusă riscului real de a-și pierde propriul cămin.'
    },
    withInsurance: {
      title: 'Cu poliță de Asigurare de Viață Term Life (Sumă Asigurată de 150.000 – 250.000 EUR)',
      statusLabel: 'Creditul este stins 100% + capital substanțial rămas pentru creșterea copiilor',
      financialImpact: 'Plată de 150.000 – 250.000 EUR direct către beneficiarii desemnați',
      points: [
        'Soldul integral al creditului ipotecar este achitat băncii, iar apartamentul rămâne proprietate liberă de orice datorie.',
        'Diferența de zeci de mii de euro este virată soției și copiilor, asigurând cheltuielile zilnice și studiile pe următorii 10 ani.',
        'Despăgubirea de asigurare de viață NU este impozabilă și NU intră în masa succesorală complicată a moștenirii.'
      ],
      summary: 'Familia este protejată financiar pe viață, păstrându-și demnitatea și căminul.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Beneficiarii desemnați nominal', detail: 'Asigură-te că pe poliță sunt trecuți nominal soțul/soția sau copiii, nu formularea vagă „moștenitori legali” (care blochează banii până la succesiune).' },
        { label: 'Excluderea suicidului', detail: 'Contractele de viață au de regulă o perioadă de excludere a suicidului de 12 – 24 de luni de la semnare.' },
        { label: 'Suma descrescătoare vs Sumă fixă', detail: 'Alege o sumă asigurată fixă dacă vrei ca pe lângă credit să rămână bani lichizi pentru familie.' }
      ]
    },
    immediateSteps: [
      'Obține Certificatul de Deces și Certificatul Medical Constatator al Decesului de la medicul legist/spital.',
      'Verifică polițele de viață active ale defunctului (inclusiv cele atașate cardurilor bancare sau contractelor de credit).',
      'Depune cererea de despăgubire direct la compania de asigurări prezentând actele de identitate ale beneficiarilor.',
      'Asigurătorul virează indemnizația în termen contractual (uzual 15-30 de zile).'
    ],
    usefulDocuments: [
      'Certificatul de Deces (copie legalizată)',
      'Certificatul medical constatator al cauzei decesului',
      'Polița de asigurare de viață și actele de identitate ale beneficiarilor'
    ],
    advisorQuestions: [
      'Cine sunt beneficiarii contractuali trecuți în polița mea curentă de viață?',
      'Este suma asigurată suficientă pentru a acoperi datoria totală la bancă plus cheltuielile familiei pe minim 5 ani?'
    ],
    disclaimer: 'Asigurarea de viață acordă despăgubirea conform beneficiarilor desemnați în scris în formularul de poliță.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'viata-spitalizare-privata-interventie-complexa',
    slug: 'spitalizare-privata-interventie-complexa',
    categoryId: 'viata-sanatate',
    categoryName: 'SĂNĂTATE & VIAȚĂ',
    title: 'Intervenție chirurgicală complexă pe coloană sau cord într-un spital privat de top',
    mainQuestion: 'Cât te costă operația la o clinică privată renumită dacă refuzi condițiile din spitalele publice?',
    shortDescription: 'O hernie de disc paralizantă sau o valvuloplastie impune operarea imediată de către un chirurg renumit.',
    situation: 'Suferi de o criză acută de hernie de disc lombară cu pareză la picior (deficit motor instalat). Specialistul neurochirurg de la spitalul privat avertizează că întârzierea operației peste 48 de ore poate lăsa sechele motorii definitive. Devizul estimativ pentru operație microscopică minim invazivă, neuromonitorizare intraoperatorie, 4 zile de terapie intensivă și salon privat este de 28.500 RON.',
    heroImage: '/images/scenarios/travel-medical.jpg',
    imageCaption: 'Spitalele private oferă tehnologie avansată și confort deosebit, dar costurile pachetelor chirurgicale depășesc posibilitățile financiare imediate ale multor pacienți.',
    severityLabel: 'Risc Financiar Medical Ridicat',
    featured: false,
    tags: ['operatie-coloana', 'spital-privat', 'asigurare-sanatate-privata', 'decontare-directa-medicala', 'hernie-disc'],
    illustrativeCost: 'Cost pachet chirurgical privat: 22.000 – 55.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare privată de sănătate',
      statusLabel: 'Plată integrală înainte de internare cu cardul personal',
      financialImpact: '28.500 RON plătiți pe loc sau operație clasică deschisă la stat',
      points: [
        'Spitalele private cer plata a 50% din deviz în momentul internării și restul la externare.',
        'Dacă nu ai banii lichizi, ești nevoit să mergi la spitalul de stat, acceptând riscurile infecțiilor nosocomiale și timpii lungi de așteptare.',
        'Economiile familiei sunt golite complet pentru a beneficia de o îngrijire medicală modernă.'
      ],
      summary: 'Fără asigurare, ești forțat să alegi între securitatea financiară a familiei și calitatea actului chirurgical.'
    },
    withInsurance: {
      title: 'Cu Asigurare Privată de Sănătate (Pachet Chirurgie și Spitalizare Privată)',
      statusLabel: 'Decontare directă 100% cu spitalul partener',
      financialImpact: 'Zero costuri plătite din buzunar (minus eventuala coplată contractuală agreată)',
      points: [
        'Asigurătorul emite garanția de plată directă (Direct Settlement) către spitalul privat.',
        'Sunt acoperite onorariul echipei chirurgicale, anestezia, materialele sterile, salonul cu însoțitor și medicația.',
        'Ai acces la cei mai buni chirurgi din rețelele private naționale fără stres financiar.'
      ],
      summary: 'Beneficiezi de cele mai moderne tehnologii chirurgicale plătite direct prin cardul tău de asigurat.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Perioada de grație la intervenții chirurgicale', detail: 'Verifică perioada de așteptare contractuală (uzual 6 – 12 luni pentru operații programate/elective).' },
        { label: 'Plafonul anual de spitalizare', detail: 'Asigură-te că plafonul pentru intervenții chirurgicale este de minim 50.000 – 100.000 RON/an.' },
        { label: 'Rețeaua de spitale partenere', detail: 'Verifică dacă spitalul privat dorit se află în rețeaua cu decontare directă a asigurătorului.' }
      ]
    },
    immediateSteps: [
      'Solicită medicului chirurg devizul medical estimativ și biletul de trimitere pentru internare chirurgicală.',
      'Transmite documentele la centrul de autorizări medicale al asigurătorului cu cel puțin 3-5 zile înainte de operație.',
      'Obține Scrisoarea de Garanție (Pre-Authorization Letter) emisă direct către spital.',
      'Prezintă cardul de asigurat la biroul de internări al spitalului privat.'
    ],
    usefulDocuments: [
      'Recomandarea medicală de internare chirurgicală cu codul de diagnostic',
      'Investigațiile imagistice (RMN/CT) justificative',
      'Cardul de sănătate și certificatul de asigurare privată'
    ],
    advisorQuestions: [
      'Care este procedura de autorizare prealabilă pentru operații în rețeaua privată?',
      'Există o coplată din partea mea pentru salonul individual sau medicația post-operatorie?'
    ],
    disclaimer: 'Intervențiile chirurgicale elective sunt supuse aprobării prealabile din partea medicilor asigurătorului conform criteriilor clinice.',
    lastReviewed: 'Octombrie 2026'
  }
];

save('viata.ts', 'viataScenarios', viataScenarios);
