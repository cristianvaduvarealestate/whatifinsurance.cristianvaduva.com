/**
 * Curated High-Quality Scenario Gallery (36 Flagship Visual Scenarios)
 * WHAT IF INSURANCE — Studio 3.0
 */

export interface CuratedGalleryCategory {
  id: string;
  name: string;
  title: string;
  shortName: string;
  badge: string;
  count: number;
}

export const GALLERY_CATEGORIES: CuratedGalleryCategory[] = [
  { id: 'toate', name: 'Toate Scenariile', title: 'Toate Scenariile', shortName: 'Toate', badge: '36 SCENARII', count: 36 },
  { id: 'auto', name: 'Vehicule & Trafic', title: 'Vehicule & Trafic', shortName: 'Vehicule', badge: 'AUTO & CASCO', count: 6 },
  { id: 'casa', name: 'Locuință & Proprietate', title: 'Locuință & Proprietate', shortName: 'Locuință', badge: 'CASĂ & CLĂDIRI', count: 6 },
  { id: 'calatorii', name: 'Călătorii & Voiaj', title: 'Călătorii & Voiaj', shortName: 'Călătorii', badge: 'TRAVEL & ASISTENȚĂ', count: 6 },
  { id: 'raspundere', name: 'Familie & Răspundere', title: 'Familie & Răspundere', shortName: 'Răspundere', badge: 'RĂSPUNDERE CIVILĂ', count: 6 },
  { id: 'business', name: 'Business & Cyber', title: 'Business & Cyber', shortName: 'Business', badge: 'COMPANII & IT', count: 6 },
  { id: 'protectie', name: 'Protecție & Beneficii', title: 'Protecție & Beneficii', shortName: 'Beneficii', badge: 'VALORI & ASIGURARE', count: 6 },
];

export type CuratedScenario = CuratedGalleryScenario;

export interface CuratedGalleryScenario {
  id: string;
  slug: string;
  categoryId: 'auto' | 'casa' | 'calatorii' | 'raspundere' | 'business' | 'protectie';
  category: string;
  categoryBadge: string;
  categoryTitle: string;
  title: string;
  headline: string;
  heroImage: string;
  imagePath: string;
  imageCaption: string;
  shortDescription: string;
  contractualTakeaway: string;
  contractTakeaway: string;
  sourceNote: string;
  sourceReference: string;
  policyType: string;
  insuranceConcept: string;
  featured?: boolean;
}

const RAW_CURATED_GALLERY_SCENARIOS: any[] = [
  // 1. VEHICLE RISKS
  {
    id: 'cg-auto-parcare',
    slug: 'accident-parcare-autor-necunoscut',
    categoryId: 'auto',
    categoryBadge: 'AUTO · CASCO',
    title: 'Avarie în Parcare cu Autor Necunoscut',
    headline: 'Parcat regulamentar. Avariat oricum.',
    heroImage: '/images/scenarios/parking-hit-run.jpg',
    imageCaption: 'Aripă și bară zgâriată de un șofer neidentificat',
    shortDescription: 'Găsești mașina lovită în parcarea mall-ului fără bilet în parbriz sau martori.',
    contractualTakeaway: 'Legea 132/2017 nu despăgubește daunele materiale izolate fără autor identificat. Avariile se repară pe CASCO, de regulă cu aplicarea franșizei contractuale convenite.',
    sourceNote: 'Legea 132/2017 Art. 34 & Condiții Particulare CASCO Retail',
    policyType: 'CASCO',
    featured: true,
  },
  {
    id: 'cg-auto-parbriz',
    slug: 'parbriz-fisurat-autostrada',
    categoryId: 'auto',
    categoryBadge: 'AUTO · CASCO',
    title: 'Parbriz Fisurat de Piatră pe Autostradă',
    headline: 'Geamul s-a spart. Ce acoperă polița?',
    heroImage: '/images/scenarios/windshield-crack.svg',
    imageCaption: 'Piatră sărită în parbriz la viteza de 130 km/h',
    shortDescription: 'O piatră sărită de la un camion fisurează parbrizul cu senzori și camere de asistență.',
    contractualTakeaway: 'Înlocuirea parbrizului original și calibrarea senzorilor ADAS sunt acoperite prin clauza CASCO de elemente vitrate, unele pachete oferind scutire de franșiză în atelierele partenere.',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Clauza Elemente Vitrate',
    policyType: 'CASCO',
    featured: true,
  },
  {
    id: 'cg-auto-pasaj',
    slug: 'pasaj-inundat',
    categoryId: 'auto',
    categoryBadge: 'AUTO · CASCO',
    title: 'Pasaj Inundat & Șoc Hidraulic la Motor',
    headline: 'Ai forțat pasajul inundat? Motorul aspiră apă.',
    heroImage: '/images/scenarios/water-engine.jpg',
    imageCaption: 'Vehicul blocat în pasaj subteran inundat',
    shortDescription: 'Traversarea unei bălți adânci duce la aspirarea apei în camera de ardere și distrugerea motorului.',
    contractualTakeaway: 'Forțarea conștientă a unui carosabil inundat este asimilată neglijenței grave și exclude avaria de motor (șoc hidraulic). În schimb, inundația statică a mașinii parcate este acoperită.',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Clauza Avarii Apă la Motor & Jurisprudență',
    policyType: 'CASCO',
    featured: true,
  },
  {
    id: 'cg-auto-grindina',
    slug: 'grindina-plafon-indoit',
    categoryId: 'auto',
    categoryBadge: 'AUTO · CASCO',
    title: 'Grindină Violentă și Caroserie Deformată',
    headline: '10 minute de furtună. Plafon și capotă deformate.',
    heroImage: '/images/scenarios/hail-damage.jpg',
    imageCaption: 'Micro-deformări de grindină pe plafonul mașinii',
    shortDescription: 'O furtună cu bucăți mari de gheață lasă zeci de adâncituri pe toată suprafața exterioară.',
    contractualTakeaway: 'Grindina este acoperită prin pachetele CASCO ce includ riscuri naturale, decontând adesea remedierea deformărilor prin tehnica PDR (fără revopsire) pentru păstrarea stratului de fabrică.',
    sourceNote: 'Condiții Generale CASCO Generali România (Mod. CSC 18) — Calamități Naturale & PDR',
    policyType: 'CASCO',
  },
  {
    id: 'cg-auto-furt',
    slug: 'furt-masina-chei-interior',
    categoryId: 'auto',
    categoryBadge: 'AUTO · CASCO',
    title: 'Furt Total și Cerința Celor Două Chei',
    headline: 'Locul de parcare e gol. Ce clauză activezi?',
    heroImage: '/images/scenarios/stolen-car.jpg',
    imageCaption: 'Vehicul sustras pe timpul nopții din parcare',
    shortDescription: 'Mașina dispare din parcare. Asigurătorul solicită ambele chei originale și certificatul.',
    contractualTakeaway: 'Polița CASCO condiționează uzual plata furtului de predarea setului complet de chei înregistrat și a certificatului de înmatriculare; lăsarea cheilor în mașină atrage excluderea dosarului.',
    sourceNote: 'Condiții Generale CASCO — Capitolul Obligațiile Asiguratului la Furt Total',
    policyType: 'CASCO',
  },
  {
    id: 'cg-auto-ev',
    slug: 'baterie-vehicul-electric-avarie',
    categoryId: 'auto',
    categoryBadge: 'AUTO · CASCO EV',
    title: 'Avarie Baterie Vehicul Electric',
    headline: 'Bordură atinsă la viteză mică. Daună totală pe baterie?',
    heroImage: '/images/scenarios/ev-battery-damage.jpg',
    imageCaption: 'Impact structural sub podeaua vehiculului electric',
    shortDescription: 'O lovitură minoră pe dedesubt deformează scutul pachetului de acumulatori.',
    contractualTakeaway: 'Normele multor producători impun înlocuirea completă a bateriei dacă structura de protecție este deformată, costul pachetului putând depăși pragul economic de daună totală CASCO.',
    sourceNote: 'Condiții Speciale CASCO Vehicule Electrice & Norme Tehnice de Fabricație',
    policyType: 'CASCO',
  },

  // 2. HOME RISKS
  {
    id: 'cg-casa-teava',
    slug: 'teava-sparta',
    categoryId: 'casa',
    categoryBadge: 'CASĂ · FACULTATIVĂ',
    title: 'Țeavă Spartă Încastrată în Perete',
    headline: 'Apa a găsit drumul. Tu știi ce urmează?',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Țeavă fisurată îngropată în peretele băii',
    shortDescription: 'O țeavă cedează în perete, udând finisajele tale și pe cele ale vecinilor de dedesubt.',
    contractualTakeaway: 'Daunele directe de apă sunt acoperite de pachetul de conductă, dar manopera de decopertare a peretelui și refacerea faianței necesită adesea clauza dedicată «Detection & Access».',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18) — Clauza Avarii Instalații de Apă',
    policyType: 'Facultativă Locuință',
    featured: true,
  },
  {
    id: 'cg-casa-vecini',
    slug: 'daune-vecini',
    categoryId: 'casa',
    categoryBadge: 'CASĂ · PAD VS FACULTATIVĂ',
    title: 'Inundație de la Vecini prin Plafon',
    headline: 'Vecinul a lăsat apa deschisă. Te ajută polița obligatorie?',
    heroImage: '/images/scenarios/neighbor-flood.jpg',
    imageCaption: 'Infiltrație de apă prin plafonul apartamentului',
    shortDescription: 'Vecinul de la etaj inundă apartamentul. Proprietarul speră că polița PAD rezolvă dosarul.',
    contractualTakeaway: 'Conform Legii 260/2008, PAD acoperă limitativ doar 3 riscuri de catastrofă. Inundațiile de la vecini sau defecțiunile instalațiilor interioare se despăgubesc printr-o poliță facultativă.',
    sourceNote: 'Legea 260/2008 republicată, Art. 18; Ghid PAID',
    policyType: 'Facultativă Locuință',
    featured: true,
  },
  {
    id: 'cg-casa-nelocuit',
    slug: 'teava-inghetata-absenta',
    categoryId: 'casa',
    categoryBadge: 'CASĂ · PREVENȚIE',
    title: 'Locuință Neocupată & Îngheț Instalații',
    headline: 'Pleci 30 de zile în vacanță. Știai că gerul poate anula dosarul?',
    heroImage: '/images/scenarios/vacant-frozen-pipe.svg',
    imageCaption: 'Îngheț și inundație într-o locuință neocupată pe timp de iarnă',
    shortDescription: 'O plecare de o lună iarna duce la înghețarea conductelor și spargerea instalației sanitare.',
    contractualTakeaway: 'Clauza de neocupare exclude adesea daunele de îngheț dacă locuința stă nelocuită peste termenul contractual (uzual 30–60 de zile) fără oprirea apei și golirea instalației.',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18) — Clauza Nelocuire; Art. 2199-2200 Cod Civil',
    policyType: 'Facultativă Locuință',
    featured: true,
  },
  {
    id: 'cg-casa-incendiu',
    slug: 'incendiu-bucatarie-electrocasnice',
    categoryId: 'casa',
    categoryBadge: 'CASĂ · FLEXA',
    title: 'Incendiu Bucătărie și Afumare Totală',
    headline: 'Un scurtcircuit la prăjitor. O bucătărie distrusă.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Urme de flăcări și fum coroziv în bucătărie',
    shortDescription: 'Un aparat lasă scântei și aprinde mobilierul. Fumul pătrunde în toate camerele.',
    contractualTakeaway: 'Pachetul facultativ de incendiu (FLEXA) acoperă pagubele produse de flăcări, precum și daunele cauzate de fumul coroziv sau apa folosită de pompieri la stingere.',
    sourceNote: 'Pachetul Incendiu FLEXA (Foc, Trăsnet, Explozie, Cădere Avioane)',
    policyType: 'Facultativă Locuință',
  },
  {
    id: 'cg-casa-furt',
    slug: 'furt-locuinta-bijuterii',
    categoryId: 'casa',
    categoryBadge: 'CASĂ · EFACȚIE',
    title: 'Efracție și Furt din Apartament',
    headline: 'Ușa forțată. Bunurile dispărute. Ce cere inspectorul?',
    heroImage: '/images/scenarios/burglary.jpg',
    imageCaption: 'Urmă vizibilă de violență mecanică pe toc',
    shortDescription: 'Hoții forțează ușa de intrare și sustrag electronice și bijuterii.',
    contractualTakeaway: 'Despăgubirea pentru furt din locuință este condiționată uzual de urme vizibile de efracție și încuierea accesului; neglijența sau furtul prin chei potrivite sunt frecvent exceptate.',
    sourceNote: 'Capitolul Furt prin Efracție din Condițiile Facultative Retail',
    policyType: 'Facultativă Locuință',
  },
  {
    id: 'cg-casa-acoperis',
    slug: 'acoperis-smuls-furtuna',
    categoryId: 'casa',
    categoryBadge: 'CASĂ · ATMOSFERIC',
    title: 'Vijelie și Acoperiș Smuls',
    headline: 'Furtună de vară. Acoperișul smuls în câteva secunde.',
    heroImage: '/images/scenarios/storm-roof.jpg',
    imageCaption: 'Țigle smulse pe acoperișul unei case individuale',
    shortDescription: 'Rafale de vânt de 85 km/h smulg învelitoarea casei și ploaia torențială inundă mansarda.',
    contractualTakeaway: 'Asigurarea facultativă acoperă vijelia dacă vântul a atins pragul minim specificat în contract (frecvent peste 60 km/h), dovedit prin buletin ANM sau date meteo oficiale.',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18) — Riscuri Atmosferice',
    policyType: 'Facultativă Locuință',
  },

  // 3. TRAVEL RISKS
  {
    id: 'cg-travel-bagaj',
    slug: 'bagaj-pierdut',
    categoryId: 'calatorii',
    categoryBadge: 'CĂLĂTORII · VOIAJ',
    title: 'Bagaj Întârziat: Zbor Dus vs. Zbor Întors',
    headline: 'Știai că întârzierea bagajului la întoarcere acasă este exclusă?',
    heroImage: '/images/scenarios/lost-luggage.jpg',
    imageCaption: 'Bagaj rătăcit la terminalul de sosiri aeroport',
    shortDescription: 'Compania aeriană rătăcește valiza pe zborul de revenire acasă din concediu.',
    contractualTakeaway: 'În condițiile de asigurare de călătorie, indemnizația pentru întârzierea bagajului acoperă cumpărăturile urgente pe durata deplasării externe, fiind exclusă la revenirea în țara de domiciliu.',
    sourceNote: 'Condiții Călătorie Generali Turist Plus Premium — Secțiunea Întârziere Bagaje & Asistență',
    policyType: 'Asigurare Călătorie',
    featured: true,
  },
  {
    id: 'cg-travel-medical',
    slug: 'urgenta-medicala-strainatate',
    categoryId: 'calatorii',
    categoryBadge: 'CĂLĂTORII · MEDICAL',
    title: 'Urgență Medicală și Spitalizare Privată Peste Hotare',
    headline: 'Factură de 30.000 € pentru o apendicită în vacanță.',
    heroImage: '/images/scenarios/travel-medical.jpg',
    imageCaption: 'Tratament de urgență într-un spital privat din afara țării',
    shortDescription: 'O intervenție chirurgicală neprevăzută în străinătate depășește rapid economiile familiei.',
    contractualTakeaway: 'Cardul european (CEASS/EHIC) oferă acces doar în unitățile publice din UE în aceleași condiții cu asigurații locali; clinicile private și repatrierea cer asigurare privată de călătorie.',
    sourceNote: 'Regulamentul CE nr. 883/2004 & Condiții Călătorie Generali Turist Plus Premium',
    policyType: 'Asigurare Călătorie',
    featured: true,
  },
  {
    id: 'cg-travel-zbor',
    slug: 'zbor-anulat-intarziat',
    categoryId: 'calatorii',
    categoryBadge: 'CĂLĂTORII · ZBORURI',
    title: 'Zbor Anulat și Cazare Suplimentară',
    headline: 'Zborul s-a anulat. Cine plătește noaptea de hotel?',
    heroImage: '/images/scenarios/flight-cancelled.jpg',
    imageCaption: 'Panou electronic cu zboruri anulate pe aeroport',
    shortDescription: 'Compania aeriană anulează zborul din cauza vremii și următorul loc este peste 48 de ore.',
    contractualTakeaway: 'Deși Regulamentul European 261/2004 obligă transportatorul la asistență, clauza de întârziere a zborului din asigurarea de călătorie decontează cazarea și mesele când compania refuză voucherul.',
    sourceNote: 'Regulamentul CE nr. 261/2004 & Clauza Întârziere Zbor',
    policyType: 'Asigurare Călătorie',
  },
  {
    id: 'cg-travel-conexiune',
    slug: 'conexiune-pierduta-aeroport',
    categoryId: 'calatorii',
    categoryBadge: 'CĂLĂTORII · TRANZIT',
    title: 'Escală Pierdută pe Bilete Separate',
    headline: 'Bilete separate. Primul zbor întârzie 40 de minute.',
    heroImage: '/images/scenarios/missed-connection.jpg',
    imageCaption: 'Pasager alergând către poarta de îmbarcare în tranzit',
    shortDescription: 'Dacă rezervi două zboruri pe companii diferite, zborul al doilea nu te așteaptă.',
    contractualTakeaway: 'Companiile aeriene nu sunt obligate să ofere zbor de schimb dacă segmentele au fost cumpărate pe bilete separate; protecția depinde de o clauză de conexiune ratată.',
    sourceNote: 'Condiții Speciale Asistență Tranzit Călătorie',
    policyType: 'Asigurare Călătorie',
  },
  {
    id: 'cg-travel-repatriere',
    slug: 'repatriere-medicala',
    categoryId: 'calatorii',
    categoryBadge: 'CĂLĂTORII · REPATRIERE',
    title: 'Transport Medicalizat și Avion Sanitar',
    headline: 'Fractură pe pârtie în Alpi. Cum ajungi în siguranță acasă?',
    heroImage: '/images/scenarios/medical-transport.jpg',
    imageCaption: 'Elicopter sanitar și ambulanță specializată',
    shortDescription: 'O accidentare gravă la schi impune transport medicalizat asistat de medic.',
    contractualTakeaway: 'Transportul sanitar asistat către țară poate genera costuri de zeci de mii de euro; verifică dacă polița include o limită suficientă pentru repatriere (recomandat peste 30.000–50.000 EUR).',
    sourceNote: 'Condiții Generale Asigurare Voiaj — Clauza Repatriere Medicală',
    policyType: 'Asigurare Călătorie',
  },
  {
    id: 'cg-travel-pasaport',
    slug: 'documente-pasaport-furate',
    categoryId: 'calatorii',
    categoryBadge: 'CĂLĂTORII · DOCUMENTE',
    title: 'Pașaport și Carduri Furate în Străinătate',
    headline: 'Portofelul și pașaportul au dispărut din rucsac.',
    heroImage: '/images/scenarios/stolen-passport.jpg',
    imageCaption: 'Documente de călătorie sustrase în zonă turistică',
    shortDescription: 'Rămâi fără acte și bani într-o capitală străină înainte de zborul de întoarcere.',
    contractualTakeaway: 'Pachetele extinse de asistență în călătorie decontează taxele consulare oficiale pentru emiterea titlului de călătorie de urgență în caz de furt al pașaportului.',
    sourceNote: 'Condiții Călătorie Generali Turist Plus Premium — Secțiunea Furt Documente (Plafon 1.000 €)',
    policyType: 'Asigurare Călătorie',
  },

  // 4. FAMILY AND PERSONAL LIABILITY
  {
    id: 'cg-familie-tv',
    slug: 'copil-showroom',
    categoryId: 'raspundere',
    categoryBadge: 'RĂSPUNDERE · FAMILIE',
    title: 'Copilul Sparge un Display Scump în Magazin',
    headline: 'O secundă de neatenție. Un televizor OLED spart la magazin.',
    heroImage: '/images/scenarios/family-tv-broken.jpg',
    imageCaption: 'Ecran de televizor fisurat într-un showroom comercial',
    shortDescription: 'Copilul trage de standul expozițional și televizorul de 15.000 lei se prăbușește pe podea.',
    contractualTakeaway: 'Părinții răspund civil conform Art. 1372 Cod Civil; clauza de răspundere civilă a familiei atașată asigurării de casă preia despăgubirea stabilită pe cale legală.',
    sourceNote: 'Art. 1357 și 1372 Codul Civil Român',
    policyType: 'Răspundere Civilă',
    featured: true,
  },
  {
    id: 'cg-familie-caine',
    slug: 'caine-muscatura-parc',
    categoryId: 'raspundere',
    categoryBadge: 'RĂSPUNDERE · ANIMALE',
    title: 'Câinele Provoacă o Daună sau Mușcă un Trecător',
    headline: 'Câinele s-a speriat în parc. Cine răspunde legal?',
    heroImage: '/images/scenarios/dog-bite.jpg',
    imageCaption: 'Incident cu animal de companie în parc public',
    shortDescription: 'Câinele rupe haina unui trecător și provoacă o rană care necesită îngrijiri medicale.',
    contractualTakeaway: 'Conform Art. 1375 Cod Civil, proprietarul răspunde pentru animalul aflat în paza sa juridică; modulul de animale de companie acoperă daunele materiale și morale pretinse de terți.',
    sourceNote: 'Art. 1375 Codul Civil Român & Condiții Răspundere Civilă Generali Eurocasa',
    policyType: 'Răspundere Civilă',
  },
  {
    id: 'cg-familie-trotineta',
    slug: 'bicicleta-trotineta-pieton',
    categoryId: 'raspundere',
    categoryBadge: 'RĂSPUNDERE · MOBILITATE',
    title: 'Accident cu Trotineta Electrică pe Trotuar',
    headline: 'Ai acroșat un pieton cu trotineta. Cine plătește tratamentul?',
    heroImage: '/images/scenarios/scooter-collision.jpg',
    imageCaption: 'Impact între trotinetă și pieton pe trotuar aglomerat',
    shortDescription: 'O manevră bruscă de evitare duce la rănirea unui pieton și distrugerea telefonului acestuia.',
    contractualTakeaway: 'Pentru trotinetele fără RCA auto obligatoriu, eventualele vătămări sau pagube cauzate pietonilor sunt imputate direct utilizatorului, dacă nu deține o poliță privată de răspundere civilă.',
    sourceNote: 'Ordonanța de Urgență nr. 195/2002 & Art. 1357 Cod Civil',
    policyType: 'Răspundere Civilă',
  },
  {
    id: 'cg-familie-balcon',
    slug: 'ghiveci-cazut-balcon',
    categoryId: 'raspundere',
    categoryBadge: 'RĂSPUNDERE · LOCATIV',
    title: 'Obiect Căzut de la Balcon pe o Mașină Parcată',
    headline: 'Vântul a răsturnat un ghiveci pe plafonul mașinii de jos.',
    heroImage: '/images/scenarios/balcony-fall.jpg',
    imageCaption: 'Ghiveci căzut de la etajul 5 pe parbrizul unei mașini',
    shortDescription: 'O vijelie aruncă un obiect de pe terasa apartamentului tău peste o mașină nouă.',
    contractualTakeaway: 'Conform Art. 1378 Cod Civil, locatarul răspunde pentru prejudiciul cauzat prin căderea unui lucru din imobil; dauna se achită prin clauza de răspundere locativă față de terți.',
    sourceNote: 'Art. 1378 Codul Civil Român',
    policyType: 'Răspundere Civilă',
  },
  {
    id: 'cg-familie-oaspete',
    slug: 'oaspete-accidentat-casa',
    categoryId: 'raspundere',
    categoryBadge: 'RĂSPUNDERE · VIZITATORI',
    title: 'Musafir Accidentat pe Gresia Umedă din Casă',
    headline: 'Un musafir alunecă pe treptele umede. Ce riscuri ai?',
    heroImage: '/images/scenarios/guest-injury-home.jpg',
    imageCaption: 'Persoană accidentată pe pardoseala din interiorul casei',
    shortDescription: 'Un prieten invitat la cină suferă o entorsă gravă din cauza unei trepte alunecoase.',
    contractualTakeaway: 'Dacă un vizitator se accidentează în locuință din cauza unei stări periculoase a spațiului, cheltuielile medicale pot fi preluate de modulul de răspundere civilă a proprietarului.',
    sourceNote: 'Clauza Răspundere Civilă Față de Terți în Incintă',
    policyType: 'Răspundere Civilă',
  },
  {
    id: 'cg-familie-gratar',
    slug: 'fum-gratar-vecini',
    categoryId: 'raspundere',
    categoryBadge: 'RĂSPUNDERE · VECINĂTATE',
    title: 'Incendiu Extins de la Grătar la Gardul Vecinului',
    headline: 'O scânteie purtată de vânt aprinde gardul vecinului.',
    heroImage: '/images/scenarios/burn-neighbor.jpg',
    imageCaption: 'Gard de lemn și vegetație aprinse accidental în curte',
    shortDescription: 'Un foc de grătar aprinde gardul de lemn și anexa imobilului vecin.',
    contractualTakeaway: 'Propagarea accidentală a focului către gardul vecinului atrage răspunderea delictuală (Art. 1357 C. Civ.), fiind preluată prin secțiunea de răspundere civilă față de vecini din contractul de casă.',
    sourceNote: 'Condiții Generale Locuință — Răspundere Față de Vecini',
    policyType: 'Răspundere Civilă',
  },

  // 5. BUSINESS AND CYBER
  {
    id: 'cg-biz-ransomware',
    slug: 'ransomware-server-fisiere',
    categoryId: 'business',
    categoryBadge: 'BUSINESS · CYBER',
    title: 'Ransomware și Criptare Server Contabilitate',
    headline: 'Toate fișierele companiei sunt blocate. Se cere răscumpărare.',
    heroImage: '/images/scenarios/ransomware-server.jpg',
    imageCaption: 'Ecran de server blocat cu mesaj de ransom criptografic',
    shortDescription: 'Baza de date a firmei și sistemul de facturare sunt compromise de un atac cibernetic.',
    contractualTakeaway: 'O poliță dedicată Cyber acoperă de regulă investigația forensică, restaurarea datelor din backup-uri curate și pierderea de profit din oprirea operațiunilor (Business Interruption).',
    sourceNote: 'Condiții Asigurarea IMM Generali România — Secțiunea Cyber & Protecție Digitală',
    policyType: 'Asigurare Cyber',
    featured: true,
  },
  {
    id: 'cg-biz-phishing',
    slug: 'phishing-plata-factura-falsa',
    categoryId: 'business',
    categoryBadge: 'BUSINESS · FRAUDĂ',
    title: 'Factură Interceptată prin Email și Virament Eronat',
    headline: 'IBAN schimbat pe email. 50.000 € virați într-un cont fals.',
    heroImage: '/images/scenarios/phishing-payment.jpg',
    imageCaption: 'Email fraudulos spoofat cu instrucțiuni bancare false',
    shortDescription: 'Un atac de tip Business Email Compromise (BEC) redirecționează plata către contul atacatorilor.',
    contractualTakeaway: 'Viramentele eronate inițiate voluntar de personal sunt de regulă excluse din polițele cyber de bază, necesitând o clauză dedicată de Social Engineering Fraud.',
    sourceNote: 'Clauza Social Engineering & Fraudă Electronică',
    policyType: 'Asigurare Cyber',
  },
  {
    id: 'cg-biz-magazin',
    slug: 'inundatie-magazin-stocuri',
    categoryId: 'business',
    categoryBadge: 'BUSINESS · STOCURI',
    title: 'Inundație în Depozitul de Marfă Comercială',
    headline: 'O conductă refulată noaptea distruge stocul de marfă.',
    heroImage: '/images/scenarios/shop-flood.jpg',
    imageCaption: 'Cutii și paleți de marfă comercială udate în depozit',
    shortDescription: 'Marfa depozitată pe paleți este compromisă de apa refulată dintr-o canalizare interioară.',
    contractualTakeaway: 'Condițiile generale Property B2B impun frecvent măsuri preventive exprese, precum depozitarea stocurilor pe paleți la minim 10–15 cm de pardoseală pentru validarea dosarului de inundație.',
    sourceNote: 'Condiții Generale Asigurarea IMM Generali România — Măsuri de Prevenire Depozitare',
    policyType: 'Property B2B',
  },
  {
    id: 'cg-biz-intrerupere',
    slug: 'intrerupere-activitate-business',
    categoryId: 'business',
    categoryBadge: 'BUSINESS · BI',
    title: 'Întreruperea Activității Comerciale (Business Interruption)',
    headline: 'Fabrica nu poate funcționa 3 luni. Cine plătește salariile?',
    heroImage: '/images/scenarios/cloud-outage.jpg',
    imageCaption: 'Sediu comercial oprit temporar în urma unei avarii',
    shortDescription: 'O avarie electrică oprește producția. Chiria și salariile curg în continuare.',
    contractualTakeaway: 'Clauza de Business Interruption decontează marja brută nerealizată și cheltuielile fixe (salarii, chirii) dacă oprirea este provocată de o daună materială acoperită prealabilă.',
    sourceNote: 'Condiții Generale Asigurarea IMM Generali România — Clauza Business Interruption (Profit Nerealizat)',
    policyType: 'Property B2B',
  },
  {
    id: 'cg-biz-santier',
    slug: 'santier-furt-scule',
    categoryId: 'business',
    categoryBadge: 'BUSINESS · ȘANTIER',
    title: 'Furt de Scule și Echipamente de pe Șantier',
    headline: 'Scule profesionale de 80.000 lei furate peste weekend.',
    heroImage: '/images/scenarios/worksite-theft.jpg',
    imageCaption: 'Container de scule de construcții forțat pe șantier',
    shortDescription: 'Echipamentele de șantier dispar din containerul de organizare.',
    contractualTakeaway: 'În polițele CAR/EAR (Construcții-Montaj), riscul de furt al sculelor este condiționat uzual de măsuri specifice de securitate (containere încuiate, pază atestată sau alarmă monitorizată).',
    sourceNote: 'Condiții Asigurare CAR/EAR — Clauza Furt Echipamente',
    policyType: 'CAR / EAR',
  },
  {
    id: 'cg-biz-malpraxis',
    slug: 'eroare-profesionala-consultant',
    categoryId: 'business',
    categoryBadge: 'BUSINESS · RĂSPUNDERE',
    title: 'Eroare Profesională a unui Consultant / Arhitect',
    headline: 'O greșeală în proiect atrage daune de sute de mii de euro.',
    heroImage: '/images/scenarios/professional-error.jpg',
    imageCaption: 'Plan tehnic de arhitectură contestat într-un litigiu',
    shortDescription: 'O eroare de calcul structural atrage refacerea parțială a unei clădiri și proces civil.',
    contractualTakeaway: 'Polița de Răspundere Profesională (PI) preia costurile de apărare juridică și despăgubirile financiare stabilite prin hotărâre judecătorească sau tranzacție amiabilă.',
    sourceNote: 'Condiții Generale Răspundere Civilă Profesională Generali România',
    policyType: 'Răspundere Profesională',
  },

  // 6. PROTECTION AND BENEFITS
  {
    id: 'cg-prot-ceas',
    slug: 'ceas-furt-hotel',
    categoryId: 'protectie',
    categoryBadge: 'VALORI · SUBLIMITE',
    title: 'Ceas de Lux și Bijuterii fără Seif Omologat',
    headline: 'Poliță de 100.000 EUR. Plafon de doar 1.500 EUR pe ceas.',
    heroImage: '/images/scenarios/luxury-watch-theft.jpg',
    imageCaption: 'Ceas de lux și bijuterii de mare valoare',
    shortDescription: 'Ceasul este sustras din dormitor. Asigurătorul aplică sublimita standard pentru valori.',
    contractualTakeaway: 'Fără declarare nominală și seif ancorat în perete, despăgubirea pentru valori este plafonată uzual la 1.000–1.500 EUR pe obiect, indiferent de factura de achiziție.',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa (Mod. E18) — Secțiunea Bunuri de Valoare Deosebită',
    policyType: 'Facultativă Locuință',
    featured: true,
  },
  {
    id: 'cg-prot-arta',
    slug: 'tablou-arta-deteriorat',
    categoryId: 'protectie',
    categoryBadge: 'VALORI · ARTĂ',
    title: 'Operă de Artă Deteriorată de Infiltrație',
    headline: 'Un tablou valoros udat de tavan. Cum se calculează pierderea?',
    heroImage: '/images/scenarios/art-damage.jpg',
    imageCaption: 'Pânză de pictură deteriorată de umiditate',
    shortDescription: 'Apa infiltrată prin tavan pătează o pictură de patrimoniu deținută în colecție privată.',
    contractualTakeaway: 'Polițele standard exclud sau plafonează drastic operele de artă; colecțiile valoroase necesită subscriere dedicată Fine Art la valoare agreată cu expertiză atestată.',
    sourceNote: 'Condiții Speciale Subscriere Fine Art & Colecții Private',
    policyType: 'Fine Art',
  },
  {
    id: 'cg-prot-panouri',
    slug: 'panouri-fotovoltaice-grindina',
    categoryId: 'protectie',
    categoryBadge: 'BENEFICII · SOLAR',
    title: 'Panouri Solare Avariate de Grindină sau Trăsnet',
    headline: 'Sistem fotovoltaic de 10 kW distrus de o furtună de 15 minute.',
    heroImage: '/images/scenarios/solar-hail.jpg',
    imageCaption: 'Panou solar fotovoltaic crăpat de bucăți de gheață',
    shortDescription: 'Grindina mare sparge sticla securizată a panourilor montate pe acoperiș.',
    contractualTakeaway: 'Panourile solare sunt asimilate instalațiilor exterioare și necesită declarare explicită în contractul facultativ pentru a fi acoperite la valoarea reală de reconstrucție.',
    sourceNote: 'Condiții Asigurare Locuințe Generali Eurocasa & IMM — Clauza Specială Panouri Solare și Fotovoltaice',
    policyType: 'Facultativă Locuință',
  },
  {
    id: 'cg-prot-copac',
    slug: 'copac-curte-gard-rupt',
    categoryId: 'protectie',
    categoryBadge: 'BENEFICII · CURTE',
    title: 'Arbore Prăbușit și Cheltuieli de Curățare',
    headline: 'Copacul a căzut peste garaj. Cine suportă macaraua?',
    heroImage: '/images/scenarios/fallen-tree-house.jpg',
    imageCaption: 'Arbore mare căzut peste acoperișul garajului',
    shortDescription: 'Un copac bătrân din curte cedează la furtună și blochează accesul în curte.',
    contractualTakeaway: 'Polița acoperă refacerea structurii clădirii și, în limita unui subplafon contractual (uzual 5–10% din suma asigurată), cheltuielile documentate de degajare a resturilor lemnoase.',
    sourceNote: 'Clauza Cheltuieli de Curățare și Înlăturare Resturi',
    policyType: 'Facultativă Locuință',
  },
  {
    id: 'cg-prot-chirias',
    slug: 'dauna-chirias-parchet',
    categoryId: 'protectie',
    categoryBadge: 'BENEFICII · CHIRIAȘI',
    title: 'Garanția Chiriașului vs. Asigurarea de Răspundere Locativă',
    headline: 'Garanția de o lună nu acoperă un parchet de lemn masiv umflat.',
    heroImage: '/images/scenarios/tenant-damage.jpg',
    imageCaption: 'Parchet de lemn masiv umflat de scurgere de apă',
    shortDescription: 'Chiriașul uită o fereastră deschisă pe ploaie și parchetul din living se degradează complet.',
    contractualTakeaway: 'Polița de răspundere a chiriașului față de proprietar preia avariile accidentale ale imobilului închiriat, protejând chiriașul împotriva acțiunilor în regres ale asigurătorului proprietarului.',
    sourceNote: 'Clauza Răspundere Locativă a Chiriașului (Tenant Liability)',
    policyType: 'Răspundere Chiriaș',
  },
  {
    id: 'cg-prot-venit',
    slug: 'incapacitate-munca-accident',
    categoryId: 'protectie',
    categoryBadge: 'BENEFICII · VIAȚĂ',
    title: 'Incapacitate Temporară de Muncă după Accident',
    headline: 'Fractură cu imobilizare 3 luni. Cum îți menții veniturile?',
    heroImage: '/images/scenarios/inability-work.jpg',
    imageCaption: 'Persoană imobilizată la domiciliu în recuperare medicală',
    shortDescription: 'O fractură la schi te împiedică să lucrezi timp de 90 de zile. Indemnizația de la stat acoperă doar parțial salariul.',
    contractualTakeaway: 'Polița privată de accidente poate acorda o indemnizație zilnică de spitalizare și convalescență stabilită contractual, completând indemnizațiile din sistemul public.',
    sourceNote: 'Polițe de Accidente Persoane Fizice — Indemnizație Zilnică de Convalescență',
    policyType: 'Asigurare de Accidente',
  },
];

export const CURATED_GALLERY_SCENARIOS: CuratedGalleryScenario[] = RAW_CURATED_GALLERY_SCENARIOS.map((s) => ({
  ...s,
  category: s.categoryId,
  categoryTitle: s.categoryBadge,
  imagePath: s.heroImage,
  contractTakeaway: s.contractualTakeaway,
  sourceReference: s.sourceNote,
  insuranceConcept: s.policyType,
}));

/**
 * Helper to get a curated scenario by slug or ID
 */
export function getCuratedScenarioByIdOrSlug(idOrSlug: string): CuratedGalleryScenario | undefined {
  return CURATED_GALLERY_SCENARIOS.find((s) => s.id === idOrSlug || s.slug === idOrSlug);
}

/**
 * Filter gallery scenarios by category and optional search query
 */
export function filterGalleryScenarios(
  scenariosOrCategory?: CuratedGalleryScenario[] | string,
  categoryIdOrQuery?: string,
  maybeQuery?: string
): CuratedGalleryScenario[] {
  let list = CURATED_GALLERY_SCENARIOS;
  let categoryId = 'toate';
  let searchQuery = '';

  if (Array.isArray(scenariosOrCategory)) {
    list = scenariosOrCategory;
    categoryId = categoryIdOrQuery || 'toate';
    searchQuery = maybeQuery || '';
  } else {
    categoryId = scenariosOrCategory || 'toate';
    searchQuery = categoryIdOrQuery || '';
  }

  if (categoryId && categoryId !== 'toate' && categoryId !== 'all') {
    list = list.filter((s) => s.categoryId === categoryId || s.category === categoryId);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.headline.toLowerCase().includes(q) ||
        s.shortDescription.toLowerCase().includes(q) ||
        s.categoryBadge.toLowerCase().includes(q) ||
        s.contractualTakeaway.toLowerCase().includes(q)
    );
  }

  return list;
}
