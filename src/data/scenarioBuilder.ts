/**
 * Visual Scenario Builder & Curated Library Data Model
 * WHAT IF INSURANCE — Studio 3.0
 */

export type AssetCategory = 'vehicle' | 'property';

export type AssetType =
  | 'passenger_car'
  | 'luxury_car'
  | 'suv'
  | 'electric_car'
  | 'apartment'
  | 'house'
  | 'commercial'
  | 'luxury_home';

export interface AssetTypeOption {
  id: AssetType;
  category: AssetCategory;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const ASSET_TYPES: AssetTypeOption[] = [
  // Vehicles
  {
    id: 'passenger_car',
    category: 'vehicle',
    name: 'Autoturism de Oraș',
    tagline: 'Sedan, hatchback sau break pentru naveta zilnică',
    description: 'Sedan, hatchback sau break pentru naveta zilnică',
    iconName: 'Car',
  },
  {
    id: 'luxury_car',
    category: 'vehicle',
    name: 'Autoturism Premium & Lux',
    tagline: 'Supercar, limuzină sau coupé de înaltă performanță',
    description: 'Supercar, limuzină sau coupé de înaltă performanță',
    iconName: 'Crown',
  },
  {
    id: 'suv',
    category: 'vehicle',
    name: 'SUV & Crossover',
    tagline: 'Vehicul de familie cu gardă la sol mărită și tracțiune 4x4',
    description: 'Vehicul de familie cu gardă la sol mărită și tracțiune 4x4',
    iconName: 'Compass',
  },
  {
    id: 'electric_car',
    category: 'vehicle',
    name: 'Vehicul Electric (EV)',
    tagline: 'Pachet de baterii de înaltă tensiune sub podea',
    description: 'Pachet de baterii de înaltă tensiune sub podea',
    iconName: 'Zap',
  },

  // Properties
  {
    id: 'apartment',
    category: 'property',
    name: 'Apartament de Bloc',
    tagline: 'Locuință în condominiu conectată la instalații comune',
    description: 'Locuință în condominiu conectată la instalații comune',
    iconName: 'Building',
  },
  {
    id: 'house',
    category: 'property',
    name: 'Casă Individuală / Vilă',
    tagline: 'Imobil pe pământ cu acoperiș propriu, grădină și anexe',
    description: 'Imobil pe pământ cu acoperiș propriu, grădină și anexe',
    iconName: 'Home',
  },
  {
    id: 'commercial',
    category: 'property',
    name: 'Spațiu Comercial / Birou',
    tagline: 'Activitate comercială, stocuri de marfă și echipamente',
    description: 'Activitate comercială, stocuri de marfă și echipamente',
    iconName: 'Briefcase',
  },
  {
    id: 'luxury_home',
    category: 'property',
    name: 'Proprietate Rezidențială Premium',
    tagline: 'Finisaje de lux, opere de artă și conținut de valoare ridicată',
    description: 'Finisaje de lux, opere de artă și conținut de valoare ridicată',
    iconName: 'Gem',
  },
];

export interface ScenarioPreset {
  id: string;
  category: AssetCategory;
  name: string;
  title: string;
  headlineOptions: string[];
  takeaway: string;
  heroImage: string;
  imagePath: string;
  imageCaption: string;
  insuranceConcept: string;
  insuranceProduct: string;
  applicablePolicy: 'CASCO' | 'RCA' | 'Facultativă Locuință' | 'PAD' | 'Răspundere Civilă' | 'Asistență Tehnică';
  sourceNote: string;
  sourceReference: string;
  detailedContext: string;
  relatedScenarioSlug?: string;
  supportedAssetTypes: AssetType[];
}

const RAW_BUILDER_SCENARIOS: any[] = [
  // =====================
  // VEHICLE SCENARIOS
  // =====================
  {
    id: 'v_collision',
    category: 'vehicle',
    name: 'Accident sau Coliziune în Trafic',
    headlineOptions: [
      'O secundă. O daună. Ce urmează?',
      'Cine a fost de vină? Răspunsul care schimbă despăgubirea.',
      'Accident fără vinovăție recunoscută: cine plătește reparația?',
    ],
    takeaway: 'RCA-ul șoferului vinovat despăgubește terții. Pentru avariile proprii ale mașinii tale ai nevoie de poliță CASCO sau de clauza opțională de decontare directă pe RCA (dacă ambele vehicule sunt asigurate în RO).',
    heroImage: '/images/scenarios/car-crash.jpg',
    imageCaption: 'Coliziune urbană la viteză redusă',
    insuranceConcept: 'RCA vs. CASCO & Decontare Directă',
    applicablePolicy: 'CASCO',
    sourceNote: 'Norma ASF nr. 20/2017 & Art. 2223 Codul Civil Român',
    detailedContext: 'În absența unei constatări amiabile clare sau dacă celălalt șofer contestă culpa, polița proprie CASCO permite repararea vehiculului cu regres ulterior împotriva asigurătorului RCA al vinovatului.',
    relatedScenarioSlug: 'accident-parcare-autor-necunoscut',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_windshield',
    category: 'vehicle',
    name: 'Parbriz sau Geam Fisurat',
    headlineOptions: [
      'Piatră sărită pe autostradă. Acoperă polița parbrizul?',
      'Geamul s-a spart. Ce acoperă polița?',
      'O simplă fisură. De ce reprezentanța cere franșiză?',
    ],
    takeaway: 'Înlocuirea parbrizului original și calibrarea senzorilor ADAS sunt acoperite prin clauza CASCO de elemente vitrate, unele pachete oferind scutire de franșiză în atelierele partenere.',
    heroImage: '/images/scenarios/windshield-crack.jpg',
    imageCaption: 'Fisură în formă de stea pe parbriz',
    insuranceConcept: 'Clauza Elemente Vitrate CASCO',
    applicablePolicy: 'CASCO',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Clauza Elemente Vitrate',
    detailedContext: 'Parbrizele moderne cu senzori ploaie, camere ADAS și degivrare electrică costă frecvent între 4.000 și 12.000 lei. Verifică dacă polița acoperă calibrarea camerelor în reprezentanță.',
    relatedScenarioSlug: 'parbriz-fisurat-autostrada',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_parking',
    category: 'vehicle',
    name: 'Avarie în Parcare (Autor Necunoscut)',
    headlineOptions: [
      'Parcat regulamentar. Avariat oricum.',
      'Găsită lovită în parcare. Cine plătește vopsirea?',
      'Autor necunoscut: clauza pe care o afli abia la daună.',
    ],
    takeaway: 'Legea 132/2017 nu despăgubește daunele materiale izolate fără autor identificat. Avariile din parcare se pot repara pe CASCO, de regulă cu aplicarea franșizei contractuale convenite.',
    heroImage: '/images/scenarios/parking-hit-run.jpg',
    imageCaption: 'Aripă și bară zgâriate în parcarea mall-ului',
    insuranceConcept: 'Evenimente cu autor neidentificat',
    applicablePolicy: 'CASCO',
    sourceNote: 'Ghidul Asiguratului CASCO & Clauza Autor Necunoscut',
    detailedContext: 'Dacă nu există camere de supraveghere sau martori, singura cale de decontare este dosarul CASCO. Unele pachete extind franșiza dacă dauna nu include elemente de caroserie adiacente.',
    relatedScenarioSlug: 'accident-parcare-autor-necunoscut',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_theft',
    category: 'vehicle',
    name: 'Furt Total sau Tentativă de Efracție',
    headlineOptions: [
      'Locul de parcare e gol. Ce clauză activezi?',
      'Furtul mașinii: de ce dosarul depinde de ambele chei originale?',
      'Înainte să ai nevoie, verifică ce ai semnat.',
    ],
    takeaway: 'Polița CASCO condiționează uzual plata furtului de predarea setului complet de chei înregistrat și a certificatului de înmatriculare; lăsarea cheilor în mașină atrage excluderea dosarului.',
    heroImage: '/images/scenarios/stolen-car.jpg',
    imageCaption: 'Vehicul sustras din parcare rezidențială',
    insuranceConcept: 'Obligații la riscul de Furt Total',
    applicablePolicy: 'CASCO',
    sourceNote: 'Condiții Generale CASCO — Capitolul Obligațiile Asiguratului la Furt',
    detailedContext: 'Lăsarea cheilor sau a documentelor în mașină este motiv contractual de respingere a despăgubirii conform normelor uzuale de subscriere din România.',
    relatedScenarioSlug: 'furt-masina-chei-interior',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_hail',
    category: 'vehicle',
    name: 'Grindină și Fenomene Meteo Extreme',
    headlineOptions: [
      '10 minute de furtună. Plafon și capotă deformate.',
      'Grindină pe caroserie: reparație PDR sau revopsire?',
      'Vremea extremă nu iartă: ce acoperă pachetul tău auto?',
    ],
    takeaway: 'Grindina este acoperită prin pachetele CASCO ce includ riscuri naturale, decontând adesea remedierea deformărilor prin tehnica PDR (fără revopsire) pentru păstrarea stratului de fabrică.',
    heroImage: '/images/scenarios/hail-damage.jpg',
    imageCaption: 'Micro-deformări de grindină pe plafon și capotă',
    insuranceConcept: 'Fenomene Naturale & Tehnica PDR',
    applicablePolicy: 'CASCO',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Clauza Calamități Naturale & PDR',
    detailedContext: 'Tehnica Paintless Dent Removal (PDR) păstrează vopseaua originală din fabrică și valoarea de revânzare a mașinii, fiind modalitatea preferată de decontare.',
    relatedScenarioSlug: 'grindina-plafon-indoit',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_flood',
    category: 'vehicle',
    name: 'Pasaj Inundat & Avarie Motor (Hidrolock)',
    headlineOptions: [
      'Ai forțat pasajul inundat? Motorul aspiră apă.',
      'Șoc hidraulic: de ce asigurătorul poate refuza plata?',
      'Inundație în mers vs. în parcare: diferența de 40.000 lei.',
    ],
    takeaway: 'Forțarea conștientă a unui carosabil inundat este asimilată neglijenței grave și exclude avaria de motor (șoc hidraulic). În schimb, inundația statică a mașinii parcate este acoperită.',
    heroImage: '/images/scenarios/water-engine.jpg',
    imageCaption: 'Vehicul oprit în pasaj subteran inundat',
    insuranceConcept: 'Excluderea forțării zonelor inundate',
    applicablePolicy: 'CASCO',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Clauza Avarii Apă la Motor & Jurisprudență',
    detailedContext: 'Când apa pătrunde în camera de ardere prin admisie, lichidul incompresibil rupe bielele și distruge blocul motor. Dacă mașina era parcată și apa a crescut, dosarul se acceptă.',
    relatedScenarioSlug: 'pasaj-inundat',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_vandalism',
    category: 'vehicle',
    name: 'Vandalism și Zgârieturi Intenționate',
    headlineOptions: [
      'Zgâriat intenționat cu cheia. Ce declară asigurătorul?',
      'Vandalism stradal: când plătești franșiză pe fiecare element?',
      'Un gest stupid. O factură de mii de lei.',
    ],
    takeaway: 'Deschiderea dosarului CASCO pentru vandalism este condiționată de sesizarea poliției și eliberarea dovezii, despăgubirea aplicându-se conform franșizei pe eveniment.',
    heroImage: '/images/scenarios/car-vandalism.jpg',
    imageCaption: 'Zgârietură profundă continuă pe două portiere',
    insuranceConcept: 'Clauza de Vandalism & Acte Malițioase',
    applicablePolicy: 'CASCO',
    sourceNote: 'Condiții Particulare CASCO Retail',
    detailedContext: 'Dacă zgârieturile sunt pe fețe diferite (ex. capotă față și hayon spate) și au fost produse la date diferite, asigurătorul poate deschide două dosare de daună distincte cu două franșize.',
    relatedScenarioSlug: 'vandalism-vopsea-zgariata',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },
  {
    id: 'v_ev_battery',
    category: 'vehicle',
    name: 'Avarie la Bateria Mașinii Electrice',
    headlineOptions: [
      'Bordură atinsă la viteză mică. Daună totală pe baterie?',
      'Mașina electrică: de ce o deformare minoră costă 25.000 €?',
      'Tehnologia avansează. Clauzele tale au ținut pasul?',
    ],
    takeaway: 'Normele multor producători impun înlocuirea completă a bateriei dacă structura de protecție este deformată, costul pachetului putând depăși pragul economic de daună totală CASCO.',
    heroImage: '/images/scenarios/ev-battery-damage.jpg',
    imageCaption: 'Impact dedesubtul caroseriei pe pachetul de acumulatori',
    insuranceConcept: 'Subscriere dedicată Vehicule Electrice & Hibride',
    applicablePolicy: 'CASCO',
    sourceNote: 'Norme tehnice producător & Condiții CASCO EV',
    detailedContext: 'Pachetul de baterii reprezintă adesea 40–55% din valoarea de nou a vehiculului. Dacă polița nu este la valoare reală actualizată, reparația poate depăși pragul de daună totală.',
    relatedScenarioSlug: 'baterie-vehicul-electric-avarie',
    supportedAssetTypes: ['electric_car', 'suv', 'luxury_car'],
  },
  {
    id: 'v_roadside',
    category: 'vehicle',
    name: 'Pană de Cauciuc sau Defecțiune pe Traseu',
    headlineOptions: [
      'Pană în mijlocul nopții. Cine trimite platforma?',
      'Rămas în drum. Ce asistență rutieră ai inclusă?',
      'Platformă gratuită sau 500 de lei din buzunar?',
    ],
    takeaway: 'Asistența rutieră de bază acoperă de regulă depanarea locală și tractarea în limita unui plafon kilometric; mașina la schimb sau repatrierea depind de nivelul pachetului ales.',
    heroImage: '/images/scenarios/breakdown-abroad.jpg',
    imageCaption: 'Autoturism oprit pe banda de urgență cu lumini de avarie',
    insuranceConcept: 'Asistență Rutieră Extinsă 24/7',
    applicablePolicy: 'Asistență Tehnică',
    sourceNote: 'Condiții Asistență Rutieră Extinsă Generali România (Pachet CASCO & Asistență 24/7)',
    detailedContext: 'Verifică dacă tractarea este limitată la un plafon kilometric (ex. 50 km) sau dacă acoperă repatrierea vehiculului de oriunde din țară și din UE.',
    relatedScenarioSlug: 'asistenta-rutiera-pana-noaptea',
    supportedAssetTypes: ['passenger_car', 'luxury_car', 'suv', 'electric_car'],
  },

  // =====================
  // PROPERTY SCENARIOS
  // =====================
  {
    id: 'p_pipe_burst',
    category: 'property',
    name: 'Țeavă Spartă Încastrată în Perete',
    headlineOptions: [
      'Apa a găsit drumul. Tu știi ce urmează?',
      'Țeavă spartă în perete. De ce asigurarea plătește țeava, dar nu faianța?',
      'Înainte să spargi peretele, verifică ce acoperă polița.',
    ],
    takeaway: 'Daunele directe de apă sunt acoperite de pachetul de conductă, dar manopera de decopertare a peretelui și refacerea faianței necesită adesea clauza dedicată «Detection & Access».',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Țeavă fisurată îngropată în peretele băii',
    insuranceConcept: 'Clauza Detection & Access (Căutare Avarie)',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18) — Clauza Avarii Instalații de Apă',
    detailedContext: 'Segmentul de țeavă costă 100 lei, dar spargerea pereților, hidroizolația și refacerea gresiei pot atinge 8.000 lei. Doar clauza extinsă acoperă întregul proces.',
    relatedScenarioSlug: 'teava-sparta',
    supportedAssetTypes: ['apartment', 'house', 'commercial', 'luxury_home'],
  },
  {
    id: 'p_neighbor_flood',
    category: 'property',
    name: 'Inundație de la Vecini prin Plafon',
    headlineOptions: [
      'Vecinul a lăsat apa deschisă. Te ajută polița obligatorie?',
      'Tavanul curge. Polița PAD nu plătește niciun leu.',
      'Apa curge de la etaj. Cine reface parchetul și zugrăveala?',
    ],
    takeaway: 'Conform Legii 260/2008, PAD acoperă limitativ doar 3 riscuri de catastrofă. Inundațiile de la vecini sau defecțiunile instalațiilor interioare se despăgubesc printr-o poliță facultativă.',
    heroImage: '/images/scenarios/neighbor-flood.jpg',
    imageCaption: 'Infiltrație de apă pe plafonul apartamentului',
    insuranceConcept: 'PAD vs. Asigurarea Facultativă',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Legea nr. 260/2008 republicată, Art. 18 & Ghid PAID',
    detailedContext: 'Deschizi dosarul pe polița ta facultativă, asigurătorul tău îți repară finisajele, iar apoi compania face regres legal împotriva vecinului vinovat.',
    relatedScenarioSlug: 'daune-vecini',
    supportedAssetTypes: ['apartment', 'commercial'],
  },
  {
    id: 'p_fire',
    category: 'property',
    name: 'Incendiu Casnic și Daune de Fum',
    headlineOptions: [
      'Un scurtcircuit la prăjitor. O bucătărie distrusă.',
      'Focul a fost stins rapid. Fumul a distrus tot restul.',
      'Incendiul din bucătărie: cum se evaluează conținutul?',
    ],
    takeaway: 'Pachetul facultativ de incendiu (FLEXA) acoperă pagubele produse de flăcări, precum și daunele cauzate de fumul coroziv sau apa folosită de pompieri la stingere.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Urme de flăcări și funingine într-o bucătărie',
    insuranceConcept: 'Riscuri FLEXA (Foc, Trăsnet, Explozie, Cădere Avioane)',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Condiții Asigurare Locuință — Pachetul de Bază Incendiu',
    detailedContext: 'Fumul coroziv pătrunde în aparatura electronică din alte camere. Asigură-te că suma asigurată pentru conținut reflectă electrocasnicele și mobila la valoare de înlocuire de nou.',
    relatedScenarioSlug: 'incendiu-bucatarie-electrocasnice',
    supportedAssetTypes: ['apartment', 'house', 'commercial', 'luxury_home'],
  },
  {
    id: 'p_burglary',
    category: 'property',
    name: 'Efracție și Furt din Locuință',
    headlineOptions: [
      'Ușa forțată. Bunurile dispărute. Ce cere inspectorul?',
      'Furt din apartament: de ce contează broasca de siguranță?',
      'Casa ta. Riscuri pe care nu le vezi până la efracție.',
    ],
    takeaway: 'Despăgubirea pentru furt din locuință este condiționată uzual de urme vizibile de efracție și încuierea accesului; neglijența sau furtul prin chei potrivite sunt frecvent exceptate.',
    heroImage: '/images/scenarios/burglary.jpg',
    imageCaption: 'Urmă de forțare mecanică pe tocul ușii de acces',
    insuranceConcept: 'Furt prin efracție & Clauze de securitate',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Condiții Generale — Riscul de Furt prin Efracție',
    detailedContext: 'Furtul prin chei potrivite (fără urme vizibile de forțare) este adesea exclus sau necesită pachet special cu probațiune judiciară strictă.',
    relatedScenarioSlug: 'furt-locuinta-bijuterii',
    supportedAssetTypes: ['apartment', 'house', 'commercial', 'luxury_home'],
  },
  {
    id: 'p_storm_roof',
    category: 'property',
    name: 'Furtună Violentă și Acoperiș Smuls',
    headlineOptions: [
      'Furtună de vară. Acoperișul smuls în câteva secunde.',
      'Vânt de 90 km/h: când cere asigurătorul buletin meteo ANM?',
      'După furtună: ce verifici înainte să repari acoperișul?',
    ],
    takeaway: 'Asigurarea facultativă acoperă vijelia dacă vântul a atins pragul minim specificat în contract (frecvent peste 60 km/h), dovedit prin buletin ANM sau date meteo oficiale.',
    heroImage: '/images/scenarios/storm-roof.jpg',
    imageCaption: 'Țigle smulse de vijelie pe acoperișul unei case',
    insuranceConcept: 'Furtună, Vijelie și Buletin Oficial ANM',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Condiții Generale Imobile — Riscuri Atmosferice',
    detailedContext: 'Apa de ploaie care pătrunde în casă prin spărtura creată de vânt este despăgubită doar dacă acoperișul a fost avariat mai întâi de furtună.',
    relatedScenarioSlug: 'acoperis-smuls-furtuna',
    supportedAssetTypes: ['house', 'commercial', 'luxury_home'],
  },
  {
    id: 'p_valuable_theft',
    category: 'property',
    name: 'Ceasuri de Lux și Bijuterii fără Seif',
    headlineOptions: [
      'Poliță de 100.000 EUR. Plafon de doar 1.500 EUR pe ceas.',
      'Sublimita de conținut: de ce bijuteriile cer seif omologat?',
      'Nu ghici valoarea asigurată. Declară bunurile nominal.',
    ],
    takeaway: 'Polițele facultative plafonează uzual ceasurile și bijuteriile (adesea la 1.000–1.500 EUR per obiect) dacă nu sunt declarate nominal și ținute într-un seif omologat ancorat.',
    heroImage: '/images/scenarios/luxury-watch-theft.jpg',
    imageCaption: 'Ceas de colecție și casetă de bijuterii',
    insuranceConcept: 'Sublimite Bunuri de Valoare Deosebită',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18) — Secțiunea Bunuri de Valoare Deosebită',
    detailedContext: 'Bunurile unicat sau ceasurile de lux peste 5.000 EUR trebuie asigurate nominal, cu evaluare autorizată și ancorare obligatorie a seifului în podea/perete.',
    relatedScenarioSlug: 'ceas-furt-hotel',
    supportedAssetTypes: ['apartment', 'house', 'luxury_home'],
  },
  {
    id: 'p_vacant_winter',
    category: 'property',
    name: 'Locuință Nelocuită și Instalații Înghețate',
    headlineOptions: [
      'Pleci 30 de zile în vacanță. Știai că gerul poate anula dosarul?',
      'Casa ta arată perfect. Riscul nu se vede în poze.',
      'Nelocuire pe timp de iarnă: robinetul oprit face diferența.',
    ],
    takeaway: 'Clauza de neocupare exclude adesea daunele de îngheț dacă locuința stă nelocuită peste termenul contractual (uzual 30–60 de zile) fără oprirea apei și golirea instalației.',
    heroImage: '/images/scenarios/vacant-frozen-pipe.svg',
    imageCaption: 'Avarie de conductă prin îngheț într-o locuință neocupată',
    insuranceConcept: 'Clauza de Neocupare & Măsuri de Prevenție',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Art. 2199-2200 Cod Civil & Condiții Locuință PIAȚĂ',
    detailedContext: 'Dacă locuința stă nelocuită între chiriași sau pe durata iernii, notifică asigurătorul în scris pentru extinderea riscului sau oprește robinetul general.',
    relatedScenarioSlug: 'teava-inghetata-iarna',
    supportedAssetTypes: ['apartment', 'house', 'luxury_home'],
  },
  {
    id: 'p_family_liability',
    category: 'property',
    name: 'Copilul sau Animalul Provoacă o Daună Terților',
    headlineOptions: [
      'O clipă de neatenție. Un ecran spart la prieteni.',
      'Copilul tău a stricat un bun scump. Cine răspunde legal?',
      'Răspunderea familiei: clauza de câțiva euro care te scapă de proces.',
    ],
    takeaway: 'Părinții răspund civil pentru faptele copiilor minori conform Art. 1372 Cod Civil; clauza de răspundere a familiei atașată asigurării de locuință preia aceste despăgubiri.',
    heroImage: '/images/scenarios/family-tv-broken.jpg',
    imageCaption: 'Televizor avariat accidental într-o vizită de familie',
    insuranceConcept: 'Răspunderea Civilă Legală a Familiei',
    applicablePolicy: 'Răspundere Civilă',
    sourceNote: 'Art. 1357 & 1372 Codul Civil Român',
    detailedContext: 'O clauză opțională atașată la asigurarea de locuință costă adesea sub 100 lei pe an și acoperă daune de până la 10.000–50.000 € provocate de membrii familiei sau câine.',
    relatedScenarioSlug: 'copil-showroom',
    supportedAssetTypes: ['apartment', 'house', 'luxury_home'],
  },
  {
    id: 'p_electrical_surge',
    category: 'property',
    name: 'Supratensiune Electrică și Electrocasnice Arse',
    headlineOptions: [
      'Trăsnet în rețea. Cine plătește televizorul și pompa de căldură?',
      'Pană de curent urmată de supratensiune: acoperă asigurarea?',
      'Electrocasnice arse dintr-o dată. Verifică clauza de fenomene electrice.',
    ],
    takeaway: 'Arderea aparatelor electrocasnice cauzată de supratensiuni în rețeaua electrică (fără incendiu cu flacără deschisă) necesită de regulă clauza opțională de fenomene electrice.',
    heroImage: '/images/scenarios/power-surge.jpg',
    imageCaption: 'Panou electric și circuite avariate de supratensiune',
    insuranceConcept: 'Clauza Fenomene Electrice & Supratensiune',
    applicablePolicy: 'Facultativă Locuință',
    sourceNote: 'Condiții Asigurare Facultativă a Bunurilor Casnice & Art. 2223 Cod Civil',
    detailedContext: 'Polița standard de incendiu acoperă doar trăsnetul direct care produce flacără deschisă. Tensiunea indusă prin cablurile de rețea care distruge plăcile electronice este exclusă fără clauză expresă.',
    relatedScenarioSlug: 'supratensiune-retea-electrocasnice',
    supportedAssetTypes: ['apartment', 'house', 'commercial', 'luxury_home'],
  },
];

export const BUILDER_SCENARIOS: ScenarioPreset[] = RAW_BUILDER_SCENARIOS.map((s) => ({
  ...s,
  title: s.name,
  imagePath: s.heroImage,
  sourceReference: s.sourceNote,
  insuranceProduct: s.insuranceConcept,
}));

export interface VisualStyleOption {
  id: 'cinematic' | 'editorial' | 'documentary';
  label: string;
  name: string;
  description: string;
  borderTint: string;
}

const RAW_VISUAL_STYLES: VisualStyleOption[] = [
  {
    id: 'cinematic',
    label: 'Cinematic Contrast',
    name: 'Cinematic Contrast',
    description: 'Profunzime vizuală bogată, contrast marcat și compoziție dramatică',
    borderTint: '#06141B',
  },
  {
    id: 'editorial',
    label: 'Minimal Editorial',
    name: 'Minimal Editorial',
    description: 'Alb curat, spațiu negativ generos și rigoare tipografică elvețiană',
    borderTint: '#E2E8F0',
  },
  {
    id: 'documentary',
    label: 'Documentar Realist',
    name: 'Documentar Realist',
    description: 'Autenticitate factuală fără filtre, accent pe dovadă și cauză',
    borderTint: '#64748B',
  },
];

export const VISUAL_STYLES = RAW_VISUAL_STYLES;

export interface SceneSettingOption {
  id: 'urban' | 'residential' | 'highway';
  label: string;
  name: string;
  contextTag: string;
}

const RAW_SCENE_SETTINGS: SceneSettingOption[] = [
  {
    id: 'urban',
    label: 'Urban Central',
    name: 'Urban Central',
    contextTag: 'ZONĂ CENTRALĂ · TRAFIC DENS',
  },
  {
    id: 'residential',
    label: 'Cartier Rezidențial',
    name: 'Cartier Rezidențial',
    contextTag: 'CONDOMINIU REZIDENȚIAL',
  },
  {
    id: 'highway',
    label: 'Extraurban / Drum Național',
    name: 'Extraurban / Drum Național',
    contextTag: 'VITEZĂ DE REGIM · EXTRAURBAN',
  },
];

export const SCENE_SETTINGS = RAW_SCENE_SETTINGS;

/**
 * Helper to get a scenario preset by ID
 */
export function getBuilderScenarioById(id: string): ScenarioPreset | undefined {
  return BUILDER_SCENARIOS.find((s) => s.id === id);
}

/**
 * Filter builder scenarios by category and asset type
 */
export function getBuilderScenarios(category: AssetCategory, assetType?: AssetType): ScenarioPreset[] {
  let list = BUILDER_SCENARIOS.filter((s) => s.category === category);
  if (assetType) {
    list = list.filter((s) => s.supportedAssetTypes.includes(assetType));
  }
  return list;
}
