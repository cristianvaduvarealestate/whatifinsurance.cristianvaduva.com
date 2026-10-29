import { Scenario } from '@/types/scenario';

export const CASA_SCENARIOS: Scenario[] = [
  {
    id: 'casa-teava-sparta',
    slug: 'teava-sparta',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Se sparge o țeavă îngropată în perete',
    mainQuestion: 'Ce se întâmplă dacă o conductă de apă cedează în perete în timp ce ești plecat?',
    shortDescription: 'O îmbinare ascunsă cedează sub presiune și inundă parchetul, mobilierul din MDF și pereții.',
    situation: 'O îmbinare ascunsă în peretele băii cedează din cauza presiunii pe timpul zilei. Până la întoarcerea de la birou, apa s-a acumulat într-un strat de 3 cm în hol și living, umflând parchetul stratificat și degradând baza mobilierului de bucătărie.',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Avariile produse de rețelele interioare de apă reprezintă peste 40% din daunele uzuale din locuințe.',
    illustrativeCost: '15.000 – 35.000 RON (estimare ilustrativă reparații finisaje și mobilier)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: true,
    tags: ['inundație', 'instalații', 'parchet', 'conductă'],
    withoutInsurance: {
      title: 'Fără poliță facultativă de locuință',
      statusLabel: 'Costuri suportate integral din buzunar',
      financialImpact: '15.000 – 35.000 RON din economiile personale',
      points: [
        'Trebuie să achiți din fonduri proprii spargerea peretelui pentru localizarea avariei și intervenția instalatorului.',
        'Înlocuirea parchetului pe întreaga suprafață afectată și refacerea șapei se plătesc exclusiv din bugetul familiei.',
        'Mobilierul deteriorat ireversibil nu poate fi compensat prin asigurarea obligatorie PAD (PAD acoperă exclusiv dezastre naturale majore: cutremur, alunecări, inundații de râuri).'
      ],
      summary: 'Întreaga cheltuială de demolare, căutare a fisurii, refacere a finisajelor și mobilierului rămâne în sarcina proprietarului.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă extinsă (Clauză avarii accidentale la instalații)',
      statusLabel: 'Acoperire finisaje, conținut și căutare daună',
      financialImpact: 'Despăgubire conform devizului aprobat (minus eventuala franșiză agreată)',
      points: [
        'Asigurătorul acoperă costul refacerii zugrăvelilor, parchetului și plintelor avariate de apă.',
        'Clauza de căutare a avariei decontează decopertarea peretelui și refacerea ulterioară a finisajului.',
        'Mobilierul asigurat în cadrul sumei pentru conținut este despăgubit pe baza valorii declarate.'
      ],
      summary: 'Primești despăgubire pe baza devizelor de reparație, limitând cheltuiala personală la franșiza agreată sau zero.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Apa de conductă', detail: 'Verifică dacă include explicit avarii accidentale la rețelele interioare de alimentare cu apă și canalizare.' },
        { label: 'Căutarea avariei', detail: 'Asigură-te că sunt decontate cheltuielile necesare pentru spargerea și refacerea zidăriei până la găsirea fisurii.' },
        { label: 'Conținutul locuinței', detail: 'Verifică dacă polița acoperă și bunurile din casă (mobilier, electrocasnice), nu doar pereții.' }
      ],
      exclusions: [
        'Țevile vizibil degradate pe care asiguratul a omis repetat să le remedieze (lipsă de întreținere dovedită).',
        'Înghețarea conductelor în locuințe lăsate neîncălzite pe timp de iarnă din culpă gravă.'
      ]
    },
    immediateSteps: [
      'Oprește imediat robinetul general de alimentare cu apă din apartament sau de la branșamentul imobilului.',
      'Fotografiază și filmează nivelul apei, bunurile afectate și punctul de scurgere înainte de a curăța.',
      'Anunță dispeceratul de daune al asigurătorului pentru deschiderea dosarului în termenul stipulat (uzual 48h).'
    ],
    usefulDocuments: [
      'Proces-verbal de constatare a avariei emis de asociația de proprietari sau instalatorul autorizat.',
      'Fotografii detaliate ale parchetului și mobilierului avariat.',
      'Facturi / deviz de reparație pentru manoperă și materiale noi.'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă de locuință (pachet extins)',
      'Clauză suplimentară de asistență tehnică la domiciliu',
      'Asigurare pentru conținutul locuinței'
    ],
    verificationQuestions: [
      'Polița ta actuală acoperă și conținutul (mobila/parchetul), sau doar structura de beton?',
      'Care este sublimita de despăgubire pentru căutarea și decopertarea avariei de conductă?'
    ],
    sources: [
      'Ghidul consumatorului de asigurări de locuință — UNSAR',
      'Condițiile generale standard de asigurare facultativă a locuințelor din România'
    ],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică dacă polița ta acoperă avariile de apă',
    shareText: 'Știai că polița obligatorie PAD nu acoperă țeava spartă în apartament? Află diferența pe WHAT IF INSURANCE.',
    socialHook: 'Știi cine plătește parchetul și mobila dacă o țeavă din perete cedează la etajul 4?',
    socialDescription: 'Vezi analiza comparativă între situația fără asigurare și situația cu poliță facultativă completă.'
  },
  {
    id: 'casa-daune-vecini',
    slug: 'daune-vecini',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Apa ajunge în apartamentul vecinului de jos',
    mainQuestion: 'Ce se întâmplă dacă o inundație din apartamentul tău distruge finisajele vecinului de dedesubt?',
    shortDescription: 'Infiltrația trece prin planșeu și distruge tavanul de rigips, parchetul și un dressing scump al vecinului.',
    situation: 'Furtunul de alimentare al mașinii de spălat cedează în absența ta. Apa trece prin planșeul de beton și curge timp de două ore în apartamentul de dedesubt. Vecinul de jos are tavanul suspendat distrus, parchetul umflat și un dressing cu haine complet compromis.',
    heroImage: '/images/scenarios/neighbor-flood.jpg',
    imageCaption: 'Răspunderea civilă față de vecini este cea mai frecventă cauză de litigii între proprietari în blocurile de locuințe.',
    illustrativeCost: '10.000 – 60.000 RON (pretenții reparații apartament vecin)',
    severityLabel: 'Risc Juridic & Financiar',
    featured: true,
    tags: ['vecini', 'răspundere civilă', 'regres', 'planșeu'],
    withoutInsurance: {
      title: 'Fără clauză de răspundere civilă față de terți',
      statusLabel: 'Obligație legală de plată din surse proprii',
      financialImpact: 'Pretenții directe sau acțiune civilă în instanță',
      points: [
        'Conform Codului Civil (Art. 1376), răspunzi pentru prejudiciul cauzat de lucrurile aflate în paza ta juridică.',
        'Dacă vecinul are poliță facultativă, asigurătorul lui îl va despăgubi și apoi va iniția regres împotriva ta pentru recuperarea integrală a sumei.',
        'Refuzul de plată atrage cheltuieli de judecată, onorarii de expertiză tehnică și executare silită.'
      ],
      summary: 'Ești direct răspunzător patrimonial pentru toate daunele create în apartamentul vecinului.'
    },
    withInsurance: {
      title: 'Cu poliță ce include Răspundere Civilă Față de Terți (Vecini)',
      statusLabel: 'Asigurătorul preia negocierea și plata daunelor către vecin',
      financialImpact: 'Dauna achitată de asigurător în limita sumei asigurate (ex. 10.000 – 50.000 EUR)',
      points: [
        'Inspectorul de daună evaluează obiectiv daunele din apartamentul vecinului.',
        'Plata se face direct către vecin sau service-ul / firma de construcții contractată.',
        'Elimină tensiunile directe și riscul unui litigiu judiciar îndelungat.'
      ],
      summary: 'Compania de asigurări preia plata pagubelor vecinului, scutindu-te de tensiuni și un șoc financiar neprevăzut.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Sublimita de răspundere', detail: 'Asigură-te că suma pentru terți este suficientă (minim 10.000 – 20.000 EUR, nu o sublimită simbolică de 1.000 EUR).' },
        { label: 'Răspundere locativă / vecini', detail: 'Verifică dacă clauza acoperă explicit daunele provocate proprietăților adiacente prin scurgeri de apă.' }
      ],
      exclusions: [
        'Avarii produse pe coloanele comune ale asociației de proprietari (răspunderea revine asociației blocului).',
        'Fapte săvârșite cu intenție dovedită.'
      ]
    },
    immediateSteps: [
      'Cobori la vecinul afectat pentru a constata amploarea și a-i furniza datele poliței tale de asigurare.',
      'Solicită președintelui sau administratorului de bloc să întocmească un proces-verbal de constatare a inundației.',
      'Nu semna angajamente de plată în nume propriu înainte ca asigurătorul să deschidă dosarul de daună.'
    ],
    usefulDocuments: [
      'Proces-verbal semnat de administratorul asociației de proprietari.',
      'Polița ta de locuință cu clauza de răspundere civilă față de terți vizibilă.',
      'Fotografii din ambele apartamente.'
    ],
    relevantInsuranceTypes: [
      'Clauză de răspundere civilă a proprietarului atașată poliței facultative de locuință',
      'Poliță de răspundere civilă privată familială'
    ],
    verificationQuestions: [
      'Ce sumă asigurată ai specificată pentru răspunderea civilă față de vecini?',
      'Știi că dacă vecinul are asigurare, asigurătorul lui te va acționa în regres?'
    ],
    sources: [
      'Codul Civil Român — Art. 1376',
      'UNSAR — Ghidul soluționării amiabile a daunelor de inundație între vecini'
    ],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică clauza de răspundere față de vecini',
    shareText: 'Dacă inunzi vecinul de jos, știai că asigurătorul lui te poate acționa în regres? Află pe WHAT IF INSURANCE.',
    socialHook: 'Știi cine suportă costurile dacă apa din mașina ta de spălat ajunge la vecinul de jos?',
    socialDescription: 'Vezi ce prevede Codul Civil și de ce clauza de răspundere civilă este vitală la bloc.'
  },
  {
    id: 'casa-masina-spalat-furtun',
    slug: 'masina-spalat-furtun',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Furtunul mașinii de spălat sare din cuplaj în timpul ciclului',
    mainQuestion: 'Ce se întâmplă dacă furtunul de evacuare sare în timp ce ești plecat pentru o oră?',
    shortDescription: 'Zeci de litri de apă fierbinte se revarsă continuu peste gresie, plinte și mobilierul din baie.',
    situation: 'Ai pornit mașina de spălat și ai plecat până la farmacie. Vibrațiile centrifugării au desprins furtunul de evacuare din sifonul de scurgere. Apa reziduală a inundat baia, coridorul și pragurile din lemn.',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Desprinderea furtunurilor de evacuare sau alimentare este una dintre cele mai frecvente avarii casnice rapide.',
    illustrativeCost: '8.000 – 22.000 RON (refacere praguri, uși umflate la bază și gresie)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['mașină spălat', 'furtun', 'apă', 'baie'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă de locuință',
      statusLabel: 'Costuri de renovare suportate integral',
      financialImpact: '8.000 – 22.000 RON din bugetul personal',
      points: [
        'Tocurile ușilor din MDF care au absorbit apă trebuie demontate și schimbate integral.',
        'Refacerea chituirii gresiei și uscarea forțată a pardoselii se plătesc pe cont propriu.',
        'Polița PAD nu acordă nicio despăgubire pentru aparate electrocasnice defectate.'
      ],
      summary: 'Toate cheltuielile de remediere a tâmplăriei și a finisajelor rămân în sarcina proprietarului.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă cu clauză de revărsare apă din electrocasnice',
      statusLabel: 'Decontare deviz reparații finisaje afectate',
      financialImpact: 'Costuri preluate de poliță (mai puțin franșiza)',
      points: [
        'Se decontează înlocuirea ușilor interioare și a plintelor degradate.',
        'Sunt acoperite operațiunile de dezumidificare profesională a spațiilor afectate.',
        'Dacă apa a trecut la vecini, se activează și componenta de răspundere civilă.'
      ],
      summary: 'Asigurarea facultativă compensează reparațiile necesare readucerii locuinței la starea inițială.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Revărsare electrocasnice', detail: 'Verifică dacă definiția de avarii de apă cuprinde explicit apa provenită din mașini de spălat rufe sau vase.' },
        { label: 'Uși și tâmplărie', detail: 'Verifică dacă tâmplăria interioară intră în categoria clădire sau necesită declarare separată.' }
      ],
      exclusions: [
        'Utilizarea unor furtunuri improvizate sau fără coliere omologate dacă se dovedește nerespectarea instrucțiunilor producătorului.'
      ]
    },
    immediateSteps: [
      'Deconectează imediat aparatul de la rețeaua electrică dacă priza este în siguranță, apoi oprește apa.',
      'Îndepărtează apa stagnantă cu un aspirator cu extracție lichide sau lavete pentru a reduce degradarea ușilor.',
      'Fotografiază îmbinarea desprinsă și daunele produse.'
    ],
    usefulDocuments: [
      'Fotografii cu furtunul desprins și tocurile ușilor umflate.',
      'Facturi de achiziție a ușilor sau deviz de la tâmplar.'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă de locuință extinsă',
      'Asistență sanitară de urgență la domiciliu'
    ],
    verificationQuestions: [
      'Polița ta acoperă și reparația ușilor interioare afectate de apă?',
      'Care este franșiza per eveniment la daune produse de electrocasnice?'
    ],
    sources: [
      'Ghidul daunelor de apă — Asociația Română a Asigurătorilor'
    ],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea daunelor de electrocasnice',
    shareText: 'Ai lăsat vreodată mașina de spălat pornită când ai plecat de acasă? Vezi ce riști pe WHAT IF INSURANCE.',
    socialHook: 'Ce se întâmplă dacă furtunul mașinii de spălat sare cât ești plecat 45 de minute?',
    socialDescription: 'Află cum sunt tratate daunele cauzate de electrocasnice în contractele de asigurare.'
  },
  {
    id: 'casa-masina-spalat-vase-scurgere',
    slug: 'masina-spalat-vase-scurgere',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Mașina de spălat vase refulează sub mobilierul de bucătărie',
    mainQuestion: 'Ce se întâmplă dacă o garnitură a mașinii de spălat vase se fisurează sub blatul de bucătărie?',
    shortDescription: 'Scurgerea nevăzută de apă caldă degradează structura de lemn a corpurilor inferioare de bucătărie.',
    situation: 'O mică fisură la garnitura pompei de recirculare a mașinii de spălat vase lasă apa să se prelingă sub plintă timp de trei săptămâni. Când descoperi balta, baza corpurilor de bucătărie din MDF este complet umflată și mucegăită, iar mirosul a pătruns în pereți.',
    heroImage: '/images/scenarios/dishwasher-flood.jpg',
    imageCaption: 'Infiltrațiile lente sub mobilierul încastrat sunt adesea depistate târziu, provocând distrugeri profunde.',
    illustrativeCost: '18.000 – 45.000 RON (înlocuire bucătărie la comandă și refacere faianță)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['bucătărie', 'mașină vase', 'mobilă', 'infiltrație'],
    withoutInsurance: {
      title: 'Fără asigurare de conținut și avarii de apă',
      statusLabel: 'Cost integral de înlocuire a mobilierului de bucătărie',
      financialImpact: 'Plată integrală din fonduri proprii',
      points: [
        'Bucătăriile la comandă nu permit adesea schimbarea doar a unui panou fără nepotriviri estetice.',
        'Costurile de demontare, înlocuire și racordare a aparatelor electrocasnice se suportă din economii.'
      ],
      summary: 'Pierdere financiară importantă pentru o avarie mecanică apărută pe neașteptate.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include bunurile conținute și avariile accidentale',
      statusLabel: 'Despăgubire aprobată pentru mobilierul iremediabil avariat',
      financialImpact: 'Valoarea mobilierului decontată conform clauzei de conținut',
      points: [
        'Inspectorul evaluează degradarea structurală a corpurilor inferioare.',
        'Se compensează atât manopera de montaj, cât și materialele de înlocuire.'
      ],
      summary: 'Asigurătorul acoperă valoarea daunelor în limita sumei alocate conținutului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția avariilor lente', detail: 'Unele polițe cer ca scurgerea să fi fost bruscă și neprevăzută, nu o umezire ignorată intenționat luni de zile.' },
        { label: 'Mobilier încorporat', detail: 'Verifică dacă mobila făcută la comandă este tratată ca finisaj de clădire sau ca bun conținut.' }
      ],
      exclusions: [
        'Umiditate cauzată de condens persistent nerezolvat sau igrasie preexistentă.'
      ]
    },
    immediateSteps: [
      'Oprește robinetul dedicat alimentării mașinii de spălat vase situat sub chiuvetă.',
      'Scoate plinta decorativă a bucătăriei pentru a permite aerisirea și a inspecta gradul de degradare.',
      'Documentează fotografic fiecare panou de MDF umflat înainte de demontare.'
    ],
    usefulDocuments: [
      'Factura inițială de execuție a mobilierului de bucătărie.',
      'Constatarea tehnică a defectului de la un service autorizat electrocasnice.'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă pentru clădire și conținut'
    ],
    verificationQuestions: [
      'Mobila ta de bucătărie este asigurată la valoarea reală actualizată?',
      'Ce condiții sunt stipulate privind avariile ascunse privirii?'
    ],
    sources: ['UNSAR — Asigurarea bunurilor din locuință'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea mobilierului încorporat',
    shareText: 'O scurgere ascunsă sub bucătărie poate distruge mobila de zeci de mii de lei. Află ce te protejează pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă mașina de spălat vase picură nevăzută sub plintă?',
    socialDescription: 'Află diferența de acoperire pentru avariile de apă ascunse sub mobilier.'
  },
  {
    id: 'casa-teava-inghetata-iarna',
    slug: 'teava-inghetata-iarna',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Țeavă înghețată și crăpată în timpul unui val de ger',
    mainQuestion: 'Ce se întâmplă dacă gerul extrem sparge o conductă într-o cameră tehnică sau cămară?',
    shortDescription: 'Temperaturile de -20°C îngheață apa din țeavă; la dezgheț, conducta fisurată refulează continuu.',
    situation: 'În timpul unui val siberian de ger, o conductă de alimentare ce trece printr-o zonă mai slab izolată îngheață complet. Volumul gheții fisurează cuprul. La primele raze de soare, dopul de gheață se topește, iar apa sub presiune inundă camera tehnică și parterul casei.',
    heroImage: '/images/scenarios/freezing-pipe.jpg',
    imageCaption: 'Dilatarea apei prin îngheț generează forțe capabile să despice conducte metalice groase.',
    illustrativeCost: '20.000 – 50.000 RON (refacere finisaje, pompă căldură, izolație)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['îngheț', 'conductă', 'iarnă', 'cameră tehnică'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă cu clauză de îngheț',
      statusLabel: 'Cheltuieli suportate în totalitate de proprietar',
      financialImpact: 'Plată integrală a instalației și finisajelor',
      points: [
        'Instalațiile sanitare trebuie refăcute în regim de urgență pe temperaturi negative.',
        'Costul echipamentelor din camera tehnică (boilere, pompe) avariate este suportat personal.'
      ],
      summary: 'Proprietarul suportă toate pagubele fără niciun sprijin financiar extern.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include explicit riscul de îngheț la instalații',
      statusLabel: 'Despăgubire pentru reparația instalației și daunele cauzate de apă',
      financialImpact: 'Reparație acoperită pe baza devizului',
      points: [
        'Se decontează reparația conductelor și a echipamentelor afectate de inundație.',
        'Se acoperă daunele produse finisajelor interioare de apa rezultată la dezgheț.'
      ],
      summary: 'Clauza de îngheț previne pierderea fondurilor de economii în sezonul rece.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Obligația de încălzire minimă', detail: 'Verifică dacă asigurătorul cere ca imobilul să fi fost menținut la o temperatură minimă (ex. +10°C) pe timp de iarnă.' },
        { label: 'Golirea instalațiilor', detail: 'În casele de vacanță, este obligatorie de regulă golirea instalației de apă pe perioada nelocuirii.' }
      ],
      exclusions: [
        'Locuințe părăsite fără măsuri de conservare și fără oprirea robinetului general.'
      ]
    },
    immediateSteps: [
      'Oprește imediat alimentarea generală cu apă a casei înainte de începerea dezghețării.',
      'Nu folosi flacără deschisă direct pe țevi pentru dezghețare rapidă (risc major de incendiu).',
      'Contactează un instalator autorizat și notifică asigurătorul.'
    ],
    usefulDocuments: [
      'Buletin meteorologic oficial care atestă temperaturile extreme înregistrate.',
      'Raport de constatare de la firma de instalații.'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă de casă cu clauză de fenomene de iarnă și îngheț instalații'
    ],
    verificationQuestions: [
      'Ce temperatură minimă cere asigurătorul tău să menții în casă iarna?',
      'Care este procedura pentru casele de vacanță pe timpul gerului?'
    ],
    sources: ['UNSAR — Riscurile de iarnă și asigurarea locuințelor'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Află dacă locuința ta e asigurată la îngheț',
    shareText: 'O țeavă înghețată poate distruge o casă la dezgheț! Vezi ce clauză te protejează pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă o țeavă îngheață și crapă în cămară pe timp de ger?',
    socialDescription: 'Află de ce clauza de îngheț are cerințe specifice de temperatură minimă.'
  },
  {
    id: 'casa-furtuna-acoperis-vant',
    slug: 'furtuna-acoperis',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Furtuna violentă smulge țiglele și decopertează acoperișul',
    mainQuestion: 'Ce se întâmplă dacă vântul extrem smulge învelișul acoperișului și ploaia intră în mansardă?',
    shortDescription: 'Rafale de peste 90 km/h smulg foi de tablă sau țiglă, iar ploaia torențială distruge izolația mansardei.',
    situation: 'O vijelie de vară cu aspect de tornadă atinge localitatea ta. Vântul desprinde o porțiune din acoperișul casei, iar ploaia torențială pătrunde instantaneu în vata minerală, rigipsul și parchetul din mansardă.',
    heroImage: '/images/scenarios/storm-roof.jpg',
    imageCaption: 'Fenomenele meteo extreme produc avarii de mare amploare la anvelopa clădirilor.',
    illustrativeCost: '30.000 – 90.000 RON (refacere structură acoperiș și finisaje mansardă)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: true,
    tags: ['furtună', 'acoperiș', 'vijelie', 'mansardă'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă completă',
      statusLabel: 'Costuri de refacere suportate integral de familie',
      financialImpact: 'Zeci de mii de lei necesari în primele 48 de ore',
      points: [
        'Trebuie plătite materiale de urgență și echipe specializate de dulgheri la tarife de criză.',
        'Polița obligatorie PAD NU acoperă vântul puternic sau furtuna (PAD acoperă strict inundații naturale, alunecări și cutremur).'
      ],
      summary: 'Povară financiară masivă fără niciun ajutor de la asigurarea de stat.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include fenomene atmosferice (Furtună, Vijelie, Grindină)',
      statusLabel: 'Despăgubire pentru acoperiș și daunele produse de ploaie în interior',
      financialImpact: 'Plată conform devizelor pentru reconstrucție și finisaje',
      points: [
        'Se decontează reparația acoperișului, căpriorilor, asterelei și jgheaburilor.',
        'Sunt acoperite pagubele produse de apa pătrunsă prin deschizăturile create de vânt.',
        'Se decontează măsurile luate de urgență pentru limitarea pagubei (prelate provizorii).'
      ],
      summary: 'Asigurătorul decontează atât învelitoarea exterioară, cât și refacerea mansardei afectate.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Pragul vitezei vântului', detail: 'Verifică dacă asigurătorul cere ca vântul să fi depășit o viteză oficială atestată de ANM (ex. 60 km/h).' },
        { label: 'Construcții anexe', detail: 'Verifică dacă foișorul, magazia sau garajul sunt incluse pe aceeași poliță.' }
      ],
      exclusions: [
        'Acoperișuri aflate într-o stare avansată de rugină sau degradare înainte de furtună.'
      ]
    },
    immediateSteps: [
      'Asigură provizoriu zona cu prelate pentru a opri intrarea apei dacă vremea o permite fără risc de accidentare.',
      'Fotografiază și filmează pagubele din exterior și interior.',
      'Păstrează chitanțele pentru toate materialele cumpărate de urgență pentru limitarea daunei.'
    ],
    usefulDocuments: [
      'Adeverință de la Administrația Națională de Meteorologie (ANM) sau știri locale oficiale.',
      'Deviz de la o firmă de construcții pentru refacerea acoperișului.'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă completă pentru casă și anexe'
    ],
    verificationQuestions: [
      'Polița ta de casă acoperă și apa care a intrat prin spărtura creată de furtună?',
      'Ce viteză a vântului cere asigurătorul pentru a recunoaște fenomenul?'
    ],
    sources: ['UNSAR — Ghidul daunelor atmosferice'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea la furtuni și vijelii',
    shareText: 'PAD nu plătește dacă vântul îți smulge acoperișul! Află diferența pe WHAT IF INSURANCE.',
    socialHook: 'Știai că polița obligatorie PAD nu te ajută dacă vântul îți ia acoperișul pe sus?',
    socialDescription: 'Vezi de ce furtuna este acoperită exclusiv printr-o poliță facultativă.'
  },
  {
    id: 'casa-panouri-fotovoltaice-grindina',
    slug: 'panouri-fotovoltaice-grindina',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Grindina de mari dimensiuni sparge panourile solare fotovoltaice',
    mainQuestion: 'Ce se întâmplă dacă o furtună cu grindină de mărimea unui ou de găină sparge sticla panourilor solare?',
    shortDescription: 'Celulele fotovoltaice de pe acoperiș sunt fisurate, randamentul cade la zero și există risc de electrocutare.',
    situation: 'O cădere de grindină masivă lovește localitatea ta. Cele 16 panouri fotovoltaice instalate recent pe acoperiș au sticla securizată spartă în pânză de păianjen. Invertorul intră în avarie, iar sistemul este complet oprit.',
    heroImage: '/images/scenarios/solar-hail.jpg',
    imageCaption: 'Panourile solare sunt expuse direct intemperiilor severe și necesită includere expresă pe poliță.',
    illustrativeCost: '25.000 – 55.000 RON (înlocuire panouri și recalibrare sistem)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['fotovoltaice', 'panouri solare', 'grindină', 'energie'],
    withoutInsurance: {
      title: 'Fără asigurare cu clauză specifică pentru instalații solare',
      statusLabel: 'Cost de înlocuire plătit din fonduri proprii',
      financialImpact: 'Pierderea investiției în tranziția verde',
      points: [
        'Garanția producătorului exclude expres distrugerile provocate de fenomene meteorologice violente.',
        'Polița PAD obligatorie nu are nicio clauză legată de panouri solare sau fotovoltaice.'
      ],
      summary: 'Înlocuirea sistemului verde se plătește din economiile personale ale proprietarului.'
    },
    withInsurance: {
      title: 'Cu poliță de locuință ce include clauză dedicată pentru panouri fotovoltaice',
      statusLabel: 'Despăgubire pentru înlocuirea panourilor sparte',
      financialImpact: 'Acoperire completă a echipamentelor și montajului',
      points: [
        'Se achită costul noilor panouri compatibile cu invertorul existent.',
        'Sunt decontate manopera de demontare a panourilor sparte și montajul noilor unități.'
      ],
      summary: 'Polița protejează investiția în energie verde împotriva oricărui fenomen meteo extrem.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Mențiune expresă panouri', detail: 'Asigură-te că panourile solare sunt trecute specific în contract cu puterea și valoarea lor, nu presupuse ca parte generică a acoperișului.' },
        { label: 'Invertor și cablaje', detail: 'Verifică dacă asigurarea acoperă și invertorul și bateriile de stocare.' }
      ],
      exclusions: [
        'Panouri montate fără respectarea normelor tehnice sau fără autorizație dacă legea o impunea.'
      ]
    },
    immediateSteps: [
      'Oprește imediat sistemul fotovoltaic din tabloul general și invertor (pericol de arc electric sau electrocutare pe sticlă udă).',
      'Fotografiază panourile sparte din unghiuri sigure, fără a urca pe acoperișul ud.',
      'Notifică asigurătorul și firma care a efectuat montajul.'
    ],
    usefulDocuments: [
      'Factura de achiziție și certificatul de punere în funcțiune emise de instalatorul atestat AFM.',
      'Fotografii ale panourilor afectate și buletin meteo local.'
    ],
    relevantInsuranceTypes: [
      'Clauză specială pentru panouri fotovoltaice și echipamente regenerabile'
    ],
    verificationQuestions: [
      'Sunt trecute panourile tale fotovoltaice în polița de locuință?',
      'Ce sumă asigurată este alocată separat pentru instalația solară?'
    ],
    sources: ['Ghidul asigurării sistemelor regenerabile — UNSAR'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică dacă panourile tale sunt asigurate',
    shareText: 'Ai montat panouri fotovoltaice? Grindina le poate distruge! Vezi cum le asiguri pe WHAT IF INSURANCE.',
    socialHook: 'Știai că panourile fotovoltaice nu sunt asigurate automat pe polița standard de casă?',
    socialDescription: 'Află de ce sistemele solare au nevoie de o clauză expresă pentru grindină.'
  },
  {
    id: 'casa-scurtcircuit-incendiu',
    slug: 'scurtcircuit-incendiu',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Un scurtcircuit la o priză generează un incendiu',
    mainQuestion: 'Ce se întâmplă dacă un prelungitor suprasolicitat ia foc în timp ce dormi?',
    shortDescription: 'Flăcările cuprind draperiile și mobilierul; fumul gros degradează toate camerele locuinței.',
    situation: 'Un prelungitor ascuns în spatele comodei TV se supraîncălzește și produce un arc electric. Focul se extinde rapid la covor și draperii. Datorită senzorului de fum reușești să te evacuezi, însă camera este mistuită, iar funinginea a acoperit tot restul casei.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Scurtcircuitele reprezintă cauza principală a incendiilor de natură electrică în locuințe.',
    illustrativeCost: '50.000 – 180.000 RON (reconstrucție cameră, decontaminare fum și mobilier nou)',
    severityLabel: 'Urgență Imediată',
    featured: true,
    tags: ['incendiu', 'scurtcircuit', 'fum', 'electric'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă de locuință',
      statusLabel: 'Pierdere materială devastatoare',
      financialImpact: 'Zeci de mii de euro pentru repunerea în funcțiune',
      points: [
        'Polița obligatorie PAD NU acoperă incendiul generat de instalații electrice (PAD este exclusiv pentru catastrofe naturale).',
        'Costurile de cazare provizorie și de reconstrucție sunt suportate în totalitate de familie.'
      ],
      summary: 'Impact financiar major capabil să șteargă economiile acumulate pe ani de zile.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă extinsă (Pachet complet Incendiu, Trăsnet, Explozie, Fum)',
      statusLabel: 'Despăgubire clădire și bunuri conținute',
      financialImpact: 'Reconstrucție și înlocuire bunuri în limita sumei asigurate',
      points: [
        'Se achită refacerea tencuielilor, instalației electrice noi și zugrăvelilor.',
        'Se decontează curățarea profesională de fum și funingine a întregii locuințe.',
        'Multe polițe oferă cazare temporară pe perioada lucrărilor de reconstrucție.'
      ],
      summary: 'Asigurarea oferă plasa de siguranță critică pentru reluarea vieții normale după un dezastru.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Daune produse de fum', detail: 'Verifică dacă sunt acoperite pagubele cauzate de fum și funingine chiar și în camerele unde focul nu a ajuns fizic.' },
        { label: 'Cazare temporară', detail: 'Află dacă polița plătește cazarea la hotel sau chirie provizorie cât timp casa este decontaminată.' }
      ],
      exclusions: [
        'Incendii provocate cu intenție de asigurat sau prin neglijență penală demonstrată de pompieri.'
      ]
    },
    immediateSteps: [
      'Evacuează de urgență toți ocupanții și apelează 112 pentru intervenția pompierilor militari (ISU).',
      'Nu intra în locuință până când pompierii nu confirmă stingerea completă și absența gazelor toxice.',
      'Solicită de la ISU procesul-verbal de intervenție care specifică sursa probabilă a incendiului.'
    ],
    usefulDocuments: [
      'Proces-verbal de intervenție emis de Inspectoratul pentru Situații de Urgență (ISU).',
      'Polița facultativă de locuință.',
      'Inventar al bunurilor distruse de foc sau fum.'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă completă FLEXA (Fire, Lightning, Explosion, Aircraft)'
    ],
    verificationQuestions: [
      'Polița ta include și decontarea cheltuielilor de curățare a funinginei?',
      'Ce sumă asigurată ai alocată pentru mobilierul și electronicele distruse de foc?'
    ],
    sources: ['Inspectoratul General pentru Situații de Urgență (IGSU)', 'UNSAR — Statistici incendii locuințe'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică dacă locuința ta e asigurată la incendiu',
    shareText: 'PAD nu despăgubește niciun leu dacă iei foc de la o priză! Află cum te protejezi pe WHAT IF INSURANCE.',
    socialHook: 'Știai că polița obligatorie PAD nu acoperă incendiul din apartament?',
    socialDescription: 'Află de ce incendiul este acoperit exclusiv printr-o asigurare facultativă de bunuri.'
  },
  {
    id: 'casa-fum-incendiu-vecin',
    slug: 'fum-incendiu-vecin',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Fumul și funinginea de la un incendiu al vecinului îți distrug finisajele',
    mainQuestion: 'Ce se întâmplă dacă un foc pornit la vecinul de palier îți umple casa de fum toxic și funingine?',
    shortDescription: 'Focul nu trece de ușă, dar funinginea uleioasă pătrunde pe tubulaturi și distruge pereții, covoarele și hainele.',
    situation: 'Un incendiu izbucnește în apartamentul vecinului. Deși pompierii opresc focul înainte de a trece peretele tău, fumul dens și funinginea au pătruns prin ventilații și uși. Toți pereții sunt înnegriți, iar mirosul chimic a compromis toate textilele și saltelele din casă.',
    heroImage: '/images/scenarios/smoke-damage.jpg',
    imageCaption: 'Fumul și gazele de ardere produc adesea daune materiale mai extinse decât flăcările propriu-zise.',
    illustrativeCost: '25.000 – 70.000 RON (decontaminare chimică, revopsire și schimbare textile)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['fum', 'incendiu vecin', 'decontaminare', 'funingine'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă proprie',
      statusLabel: 'Dependență de despăgubirea anevoioasă de la vecin',
      financialImpact: 'Luni de așteptare sau plată din buzunar',
      points: [
        'Dacă vecinul nu are asigurare de răspundere, trebuie să-l acționezi în instanță pentru a recupera banii.',
        'Dacă vecinul nu are venituri executabile, rămâi cu dauna neacoperită.'
      ],
      summary: 'Ești victima unui incident străin fără garanția unei recuperări financiare rapide.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă proprie cu clauză de daune provocate de fum extern',
      statusLabel: 'Asigurătorul tău te despăgubește imediat și face regres împotriva vinovatului',
      financialImpact: 'Plată rapidă a curățării și zugrăvelilor',
      points: [
        'Compania ta îți plătește curățarea profesională de fum și refacerea zugrăvelilor.',
        'Asigurătorul tău preia demersurile legale împotriva vecinului vinovat prin regres.'
      ],
      summary: 'Nu depinzi de situația financiară a vecinului pentru a-ți repune casa în ordine.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Fum fără flacără directă', detail: 'Asigură-te că polița acoperă daunele cauzate de fum și gaze fierbinți chiar dacă în locuința ta nu a existat flacără deschisă.' }
      ],
      exclusions: [
        'Fum provenit de la sobe sau șeminee proprii din cauza coșurilor necurățate (lipsă întreținere).'
      ]
    },
    immediateSteps: [
      'Nu încerca să cureți funinginea cu apă sau cârpe uscate (riști să impregnezi pigmentul adânc în vopsea).',
      'Ventilează spațiul și solicită o echipă autorizată de decontaminare chimică.',
      'Deschide dosarul de daună la propriul asigurător.'
    ],
    usefulDocuments: [
      'Procesul-verbal de la ISU care specifică locul de pornire a incendiului la vecin.',
      'Polița ta de locuință.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă completă de locuință'],
    verificationQuestions: [
      'Polița ta acoperă fumul provenit de la un incendiu din afara proprietății tale?'
    ],
    sources: ['UNSAR — Ghidul daunelor colaterale de incendiu'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Află dacă ești acoperit pentru daunele de fum',
    shareText: 'Dacă ia foc apartamentul vecinului, fumul îți poate distruge casa! Află cine plătește pe WHAT IF INSURANCE.',
    socialHook: 'Știai că funinginea de la incendiul vecinului poate fi la fel de distrugătoare ca focul?',
    socialDescription: 'Vezi de ce asigurarea proprie de locuință te salvează când vecinul nu are bani de despăgubiri.'
  },
  {
    id: 'casa-furt-bicicleta-spatii-comune',
    slug: 'furt-bicicleta-spatii-comune',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Bicicleta electrică sau trotineta este furată din spațiile comune ale blocului',
    mainQuestion: 'Ce se întâmplă dacă bicicleta ta electrică este furată din uscătorie sau casa scării?',
    shortDescription: 'Hoții taie antifurtul din spațiul comun securizat și sustrag bicicleta în valoare de mii de lei.',
    situation: 'Ți-ai lăsat bicicleta electrică legată cu un antifurt solid în uscătorul blocului sau pe holul etajului securizat cu interfon. Dimineața găsești doar cablul tăiat pe jos; bicicleta a dispărut.',
    heroImage: '/images/scenarios/stolen-bicycle.jpg',
    imageCaption: 'Furtul bunurilor din anexe și spații comune necesită clauze specifice de extindere teritorială.',
    illustrativeCost: '4.000 – 15.000 RON (valoare bicicletă electrică / echipament sportiv)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['bicicletă', 'furt', 'spații comune', 'antifurt'],
    withoutInsurance: {
      title: 'Fără clauză de furt din dependințe și spații comune',
      statusLabel: 'Pierdere definitivă dacă Poliția nu prinde autorii',
      financialImpact: 'Pagubă materială completă',
      points: [
        'Asociația de proprietari nu răspunde material pentru bunurile lăsate în spațiile comune.',
        'Șansele de recuperare a banilor de la făptuitori insolvabili sunt reduse.'
      ],
      summary: 'Bicicleta furată reprezintă o pierdere netă din bugetul personal.'
    },
    withInsurance: {
      title: 'Cu poliță de locuință cu clauză de furt bunuri din dependințe / boxe securizate',
      statusLabel: 'Despăgubire pe baza dovezii de furt și a facturii',
      financialImpact: 'Valoarea bunului decontată conform contractului',
      points: [
        'Dacă spațiul comun era încuiat și prezintă urme de forțare (efracție), dauna este eligibilă.',
        'Se compensează valoarea bicicletei declarate.'
      ],
      summary: 'Polița compensează bunul furat pe baza procesului-verbal al Poliției.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Definiția spațiilor anexe', detail: 'Verifică dacă boxa de la subsol sau uscătorul sunt recunoscute ca dependințe asigurate.' },
        { label: 'Cerința de efracție', detail: 'Furtul este acoperit de regulă doar dacă ușa spațiului comun a fost spartă sau forțată mecanic.' }
      ],
      exclusions: [
        'Bunuri lăsate nesupravegheate pe casa scării deschisă fără încuietoare.'
      ]
    },
    immediateSteps: [
      'Apelează imediat Poliția (112 sau secția locală) pentru cercetarea la fața locului a urmelor de efracție.',
      'Nu arunca antifurtul tăiat; este probă materială.',
      'Solicită administrației blocului înregistrările camerelor video de supraveghere.'
    ],
    usefulDocuments: [
      'Dovada depunerii plângerii penale la Poliție.',
      'Factura sau bonul fiscal al bicicletei și seria unică de cadru (număr de serie).'
    ],
    relevantInsuranceTypes: [
      'Poliță facultativă de locuință cu extindere pentru anexe și echipamente sportive'
    ],
    verificationQuestions: [
      'Sunt acoperite bunurile tale din boxa de la subsol pe polița curentă?'
    ],
    sources: ['Codul Penal Român — Furtul calificat', 'UNSAR — Asigurarea bunurilor mobile'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea pentru biciclete și trotinete',
    shareText: 'Ți-ai lăsat bicicleta în scara blocului? Vezi dacă e asigurată pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă îți este furată bicicleta electrică din uscătorul blocului?',
    socialDescription: 'Află condițiile stricte în care asigurătorii acceptă dosarele de furt din spațiile comune.'
  },
  {
    id: 'casa-copac-cazut-proprietate',
    slug: 'copac-cazut-proprietate',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Un copac din curte sau de pe domeniul public cade peste gard și casă',
    mainQuestion: 'Ce se întâmplă dacă vântul doboară un arbore masiv peste acoperișul și gardul tău?',
    shortDescription: 'Trunchiul greu strivește gardul din beton, sparge jgheaburile și avariază structura acoperișului.',
    situation: 'O furtună violentă smulge din rădăcini un nuc secular din grădină sau un tei de pe marginea străzii. Arborele cade peste gardul de împrejmuire și lovește colțul acoperișului casei, blocând și calea de acces.',
    heroImage: '/images/scenarios/fallen-tree-house.jpg',
    imageCaption: 'Căderea arborilor produce daune combinate asupra acoperișului, anexelor și gardurilor de proprietate.',
    illustrativeCost: '15.000 – 40.000 RON (debitare arbore, refacere gard și reparație colț casă)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['copac', 'furtună', 'gard', 'anexe'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă completă',
      statusLabel: 'Costuri mari de toaletare de urgență și reconstrucție',
      financialImpact: 'Plată din bugetul familiei',
      points: [
        'Debitatea și transportul unui trunchi masiv de câteva tone costă mii de lei.',
        'Refacerea gardului și a structurii afectate se plătește din economii.'
      ],
      summary: 'Povară logistică și financiară acută în lipsa asigurării.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include riscul de cădere de corpuri pe clădire și anexe',
      statusLabel: 'Despăgubire pentru reparații și cheltuieli de curățare',
      financialImpact: 'Costuri de reconstrucție preluate de asigurător',
      points: [
        'Se decontează reparația acoperișului și a gardului asigurat.',
        'Sunt acoperite cheltuielile justificate pentru îndepărtarea și debitarea trunchiului căzut.'
      ],
      summary: 'Asigurarea preia atât costul degajării arborelui, cât și refacerea bunurilor avariate.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Împrejmuiri și garduri', detail: 'Verifică dacă gardul este menționat explicit în contract cu suma lui asigurată.' },
        { label: 'Cheltuieli de degajare', detail: 'Află dacă sunt decontate costurile cu macaraua și tăierea arborelui căzut.' }
      ],
      exclusions: [
        'Arbori uscați putreziți pe care proprietarul a refuzat repetat să îi toaleteze conform cerințelor autorităților.'
      ]
    },
    immediateSteps: [
      'Nu te apropia de trunchi dacă există cabluri electrice agățate sau rupte în cădere.',
      'Apelează pompierii dacă arborele blochează accesul sau creează pericol iminent.',
      'Fotografiază daunele înainte de degajarea trunchiului.'
    ],
    usefulDocuments: [
      'Proces-verbal ISU sau de la Poliția Locală.',
      'Facturi pentru serviciile de debitare și degajare a arborelui.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă de locuință cu acoperire a împrejmuirilor și anexelor'],
    verificationQuestions: [
      'Este și gardul casei tale asigurat pe polița de locuință?'
    ],
    sources: ['UNSAR — Ghidul asigurării anexelor gospodărești'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică dacă gardul și anexele sunt asigurate',
    shareText: 'Dacă un copac cade pe casă sau gard, cine plătește reparația? Află pe WHAT IF INSURANCE.',
    socialHook: 'Ce se întâmplă dacă o furtună îți trântește un copac masiv pe gard și acoperiș?',
    socialDescription: 'Află cum funcționează clauza de cădere de corpuri pe imobile și anexe.'
  },
  {
    id: 'casa-terasa-infiltratie-hidroizolatie',
    slug: 'terasa-infiltratie-hidroizolatie',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Infiltrație masivă prin terasa neacoperită sau balcon',
    mainQuestion: 'Ce se întâmplă dacă hidroizolația terasei de la ultimul etaj cedează după o ninsoare prelungită?',
    shortDescription: 'Apa topită din zăpadă se infiltrează sub gresia terasei și distruge finisajele din camerele de dedesubt.',
    situation: 'După topirea unui strat gros de zăpadă depus pe terasa circulabilă a penthouse-ului sau etajului superior, apa găsește o fisură în hidroizolație. Tavanul livingului de dedesubt se pătează sever, tencuiala se desprinde, iar parchetul începe să se deformeze.',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Deficiențele hidroizolațiilor exterioare generează dispute complexe între proprietari și constructori.',
    illustrativeCost: '20.000 – 60.000 RON (decopertare terasă, refacere membrană și zugrăveli)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['terasă', 'hidroizolație', 'infiltrație', 'balcon'],
    withoutInsurance: {
      title: 'Fără asigurare cu acoperire pentru infiltrații accidentale',
      statusLabel: 'Costuri greu de suportat din bugetul propriu',
      financialImpact: 'Refacerea hidroizolației și a camerelor interioare',
      points: [
        'Dacă terasa este spațiu comun al blocului, asociația poate amâna reparația din lipsă de fonduri.',
        'Locuința rămâne degradată și expusă mucegaiului.'
      ],
      summary: 'Proprietarul suportă disconfortul și cheltuielile până la stabilirea responsabilităților.'
    },
    withInsurance: {
      title: 'Cu poliță de locuință cu clauză de infiltrații de precipitații prin terase',
      statusLabel: 'Despăgubire aprobată pentru finisajele interioare avariate',
      financialImpact: 'Refacerea camerelor decontată de asigurător',
      points: [
        'Se despăgubesc zugrăvelile, tavanele și pardoselile afectate.',
        'Asigurătorul poate solicita recuperarea sumelor de la asociația de proprietari sau constructor dacă există garanție.'
      ],
      summary: 'Asigurarea rezolvă reparațiile interioare fără să aștepți ani de zile decizia asociației.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Infiltrație prin acoperiș / terasă', detail: 'Verifică dacă sunt acoperite explicit precipitațiile infiltrate prin anvelopă sau terase neacoperite.' }
      ],
      exclusions: [
        'Vicii de construcție evidente sau hidroizolații expirate fără lucrări de mentenanță efectuate de asociație.'
      ]
    },
    immediateSteps: [
      'Curăță zăpada rămasă pe terasă pentru a opri afluxul de apă topită.',
      'Notifică administratorul blocului în scris pentru constatare oficială la fața locului.',
      'Deschide dosar de daună la asigurător.'
    ],
    usefulDocuments: [
      'Proces-verbal întocmit de asociația de proprietari.',
      'Fotografii ale terasei exterioare și ale tavanului interior.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă de locuință cu pachet extins de precipitații'],
    verificationQuestions: [
      'Polița ta acoperă infiltrațiile apărute din cauza teraselor exterioare?'
    ],
    sources: ['UNSAR — Riscuri specifice apartamentelor de la ultimul etaj'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea la ultimul etaj',
    shareText: 'Stai la ultimul etaj? Apa de pe terasă îți poate distruge tavanul! Află pe WHAT IF INSURANCE.',
    socialHook: 'Ce se întâmplă dacă hidroizolația terasei cedează după topirea zăpezii?',
    socialDescription: 'Află diferența critică de acoperire pentru infiltrațiile prin terasele de bloc.'
  },
  {
    id: 'casa-daune-provocate-chirias',
    slug: 'daune-provocate-chirias',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Chiriașul produce daune substanțiale și părăsește apartamentul',
    mainQuestion: 'Ce se întâmplă dacă un chiriaș neglijează o inundație și distruge finisajele din apartamentul tău?',
    shortDescription: 'Garanția de o lună este complet insuficientă pentru a acoperi parchetul umflat și pereții degradați.',
    situation: 'Ești proprietarul unui apartament închiriat. Chiriașul a lăsat un geam deschis în timpul unei ploi torențiale și a ignorat o scurgere sub cadă timp de săptămâni. La plecare, garanția depusă nu acoperă nici 20% din costul reparațiilor.',
    heroImage: '/images/scenarios/tenant-damage.jpg',
    imageCaption: 'Relațiile locative necesită polițe clare de asigurare pentru a preveni pierderile majore ale proprietarului.',
    illustrativeCost: '15.000 – 35.000 RON (înlocuire parchet, revopsire și tâmplărie)',
    severityLabel: 'Risc Juridic & Financiar',
    featured: false,
    tags: ['chirie', 'chiriaș', 'proprietar', 'garanție'],
    withoutInsurance: {
      title: 'Fără asigurare de locuință dedicată proprietăților închiriate',
      statusLabel: 'Pierdere financiară recuperabilă doar prin procese',
      financialImpact: 'Plată din buzunarul proprietarului',
      points: [
        'Procesele civile pentru recuperarea banilor de la foștii chiriași durează ani de zile.',
        'Apartamentul nu mai poate fi închiriat până nu este renovat.'
      ],
      summary: 'Garanția este pierdută în reparații minore, restul fiind suportat din fonduri proprii.'
    },
    withInsurance: {
      title: 'Cu poliță de locuință cu clauză de asigurare a bunurilor date în folosință (chirie)',
      statusLabel: 'Despăgubire aprobată pentru proprietar',
      financialImpact: 'Reparații acoperite conform contractului',
      points: [
        'Sunt decontate daunele produse clădirii și finisajelor prin evenimente asigurate.',
        'Polița reduce timpul în care imobilul stă neînchiriat.'
      ],
      summary: 'Asigurarea protejează investiția imobiliară împotriva neglijențelor chiriașilor.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Declararea chiriei', detail: 'Asigură-te că ai bifat că imobilul este dat în chirie; nedepunerea acestei mențiuni poate atrage respingerea dosarului.' }
      ],
      exclusions: [
        'Uzura normală în timp a mobilierului sau murdărirea firească a pereților.'
      ]
    },
    immediateSteps: [
      'Întocmește un proces-verbal de predare-primire detaliat la plecarea chiriașului cu semnăturile ambelor părți.',
      'Fotografiază toate degradările înainte de începerea reparațiilor.',
      'Notifică asigurătorul.'
    ],
    usefulDocuments: [
      'Contractul de închiriere înregistrat.',
      'Procesul-verbal de constatare a stării imobilului la eliberare.'
    ],
    relevantInsuranceTypes: ['Poliță de locuință pentru proprietari de imobile închiriate'],
    verificationQuestions: [
      'Ai declarat asigurătorului că apartamentul este închiriat terților?'
    ],
    sources: ['Codul Civil Român — Contractul de locațiune'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Asigură-ți apartamentul dat în chirie',
    shareText: 'Ești proprietar și dai în chirie? Vezi cum te protejezi de daune pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă chiriașul îți distruge parchetul și garanția nu ajunge?',
    socialDescription: 'Află cum îți asiguri corect investiția imobiliară dată în chirie.'
  },
  {
    id: 'casa-accidentare-musafir-locuinta',
    slug: 'accidentare-musafir-locuinta',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Un oaspete alunecă pe scara interioară și suferă o fractură',
    mainQuestion: 'Ce se întâmplă dacă un musafir se accidentează grav în casa ta din cauza unei trepte alunecoase?',
    shortDescription: 'Oaspetele își fracturează piciorul, are nevoie de operație și solicită acoperirea cheltuielilor medicale.',
    situation: 'Ai organizat o cină la tine acasă. Un prieten coboară scara interioară din lemn, alunecă pe o treaptă proaspăt ceruită și cade. Suferă o fractură de tibie și peroneu, având nevoie de intervenție chirurgicală și recuperare medicală de 6 luni.',
    heroImage: '/images/scenarios/guest-injury-home.jpg',
    imageCaption: 'Accidentele casnice suferite de terți atrag răspunderea civilă delictuală a proprietarului.',
    illustrativeCost: '20.000 – 75.000 RON (spitalizare privată, recuperare și daune morale)',
    severityLabel: 'Litigiu & Răspundere',
    featured: false,
    tags: ['musafir', 'accident', 'răspundere', 'fractură'],
    withoutInsurance: {
      title: 'Fără clauză de răspundere civilă privată a proprietarului',
      statusLabel: 'Obligație personală de acoperire a daunelor medicale',
      financialImpact: 'Plată din fonduri proprii sau proces civil între prieteni',
      points: [
        'Conform legii, răspunzi pentru vătămările corporale provocate de starea bunurilor tale.',
        'Relațiile personale sunt grav compromise dacă nu poți compensa costurile medicale.'
      ],
      summary: 'Povară financiară și emoțională grea în urma unui accident neintenționat.'
    },
    withInsurance: {
      title: 'Cu poliță de locuință ce include Răspundere Civilă a Familiei',
      statusLabel: 'Asigurătorul decontează cheltuielile medicale și daunele cerute',
      financialImpact: 'Plată efectuată direct de asigurător în limita sumei',
      points: [
        'Sunt preluate costurile spitalizării, investigațiilor imagistice și kinetoterapiei.',
        'Se protejează atât relația de prietenie, cât și stabilitatea ta financiară.'
      ],
      summary: 'Polița de răspundere familială soluționează amiabil și profesionist incidentul.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Vătămări corporale terți', detail: 'Verifică dacă răspunderea acoperă explicit vătămările corporale ale vizitatorilor în perimetrul locuinței.' }
      ],
      exclusions: [
        'Membrii familiei care locuiesc permanent în aceeași casă (ei nu sunt considerați terți în cadrul aceleiași polițe).'
      ]
    },
    immediateSteps: [
      'Acordă primul ajutor și apelează 112 pentru transportul medical de urgență.',
      'Nu modifica starea scării înainte de documentare.',
      'Notifică asigurătorul despre producerea unui eveniment cu potențială răspundere civilă.'
    ],
    usefulDocuments: [
      'Biletul de ieșire din spital și documentele medicale ale persoanei accidentate.',
      'Polița ta de răspundere civilă.'
    ],
    relevantInsuranceTypes: ['Poliță de răspundere civilă privată / a vieții de familie'],
    verificationQuestions: [
      'Polița ta de locuință are inclusă răspunderea pentru accidentarea oaspeților?'
    ],
    sources: ['Codul Civil Român — Răspunderea pentru prejudiciul cauzat de lucruri'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică răspunderea civilă familială',
    shareText: 'Dacă un musafir cade pe scara ta, cine plătește spitalizarea? Află pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă un oaspete își fracturează piciorul la tine în casă?',
    socialDescription: 'Vezi cum funcționează acoperirea pentru accidentele suferite de terți în locuință.'
  },
  {
    id: 'casa-renovare-daune-vecini',
    slug: 'renovare-daune-vecini',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Lucrările de renovare produc fisuri în peretele apartamentului vecin',
    mainQuestion: 'Ce se întâmplă dacă meșterii care decopertează gresia fisurează peretele sau faianța vecinului?',
    shortDescription: 'Vibrațiile rotopercutoarelor provoacă crăpături în tencuiala și plăcile ceramice ale peretelui comun.',
    situation: 'Ai demarat renovarea completă a băii. Echipa de muncitori folosește picamerul pentru îndepărtarea gresiei vechi. Vibrațiile puternice dislocă faianța și fisurează peretele comun din apartamentul vecinului de vizavi.',
    heroImage: '/images/scenarios/renovation-leak.jpg',
    imageCaption: 'Lucrările de amenajare interioară generează frecvent daune la structurile și finisajele adiacente.',
    illustrativeCost: '10.000 – 30.000 RON (refacere finisaje perete comun vecin)',
    severityLabel: 'Litigiu & Răspundere',
    featured: false,
    tags: ['renovare', 'meșteri', 'fisuri', 'vecin'],
    withoutInsurance: {
      title: 'Fără clauză de răspundere civilă pentru lucrări de amenajare',
      statusLabel: 'Obligație solidară de plată din economii',
      financialImpact: 'Plată din buzunarul proprietarului',
      points: [
        'Dacă meșterii au lucrat la negru fără firmă și asigurare CAR (Contractor All Risks), răspunzi integral.',
        'Vecinul poate opri lucrările prin plângere la Inspectoratul de Stat în Construcții (ISC).'
      ],
      summary: 'Răspunderea financiară revine proprietarului imobilului în care se fac lucrările.'
    },
    withInsurance: {
      title: 'Cu asigurare ce include răspunderea proprietarului în timpul renovărilor',
      statusLabel: 'Despăgubire aprobată pentru refacerea peretelui vecinului',
      financialImpact: 'Costuri preluate de compania de asigurări',
      points: [
        'Inspectorul evaluează legătura de cauzalitate dintre renovare și fisurile vecinului.',
        'Se compensează refacerea finisajelor afectate de vibrații.'
      ],
      summary: 'Polița aplanează conflictul și acoperă paguba produsă fără procese costisitoare.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Lucrări de amenajare', detail: 'Verifică dacă asigurarea ta rămâne activă în timpul renovărilor sau cere notificare prealabilă.' }
      ],
      exclusions: [
        'Demolarea unor pereți de rezistență fără autorizație de construire (faptă ilegală).'
      ]
    },
    immediateSteps: [
      'Oprește imediat lucrările mecanice cu rotopercutorul pe peretele comun.',
      'Mergi în apartamentul vecinului pentru a inspecta și fotografia fisurile apărute.',
      'Semnează o notă de constatare amiabilă și anunță asigurătorul.'
    ],
    usefulDocuments: [
      'Fotografii ale peretelui afectat.',
      'Contractul cu echipa de renovare sau devizul de reparații.'
    ],
    relevantInsuranceTypes: ['Poliță de locuință cu extindere pentru lucrări de reamenajare'],
    verificationQuestions: [
      'Polița ta este valabilă pe durata în care renovezi apartamentul?'
    ],
    sources: ['Legea nr. 10/1995 privind calitatea în construcții'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Află cum te asiguri când renovezi',
    shareText: 'Renovezi apartamentul? Ai grijă la pereții vecinilor! Vezi ce te protejează pe WHAT IF INSURANCE.',
    socialHook: 'Știi cine plătește dacă rotopercutorul meșterilor crapă faianța vecinului?',
    socialDescription: 'Află riscurile juridice și de asigurare în timpul lucrărilor de renovare casnică.'
  },
  {
    id: 'casa-usa-garaj-avarie-masina',
    slug: 'usa-garaj-avarie-masina',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Ușa automată de garaj se închide accidental peste capota mașinii',
    mainQuestion: 'Ce se întâmplă dacă fotocelula ușii de garaj se defectează și ușa strivește plafonul mașinii?',
    shortDescription: 'Sistemul de automatizare cedează: ușa secțională coboară peste portbagaj și geamul lunetei.',
    situation: 'Ieși din garaj cu mașina. Senzorul optic de siguranță nu detectează caroseria din cauza unei erori electronice. Ușa automată coboară cu forță, zgâriind adânc plafonul, îndoind hayonul și spărgând luneta.',
    heroImage: '/images/scenarios/car-crash.jpg',
    imageCaption: 'Defecțiunile la automatizările de acces generează daune de impact asupra vehiculelor.',
    illustrativeCost: '12.000 – 35.000 RON (vopsitorie hayon, înlocuire lunetă și reparație motor garaj)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['ușă garaj', 'automatizare', 'plafon mașină', 'avarie'],
    withoutInsurance: {
      title: 'Fără asigurare CASCO sau clauză dedicată pe polița de casă',
      statusLabel: 'Plată din fonduri proprii pentru mașină și ușa de garaj',
      financialImpact: 'Costuri mari de tinichigerie',
      points: [
        'RCA-ul nu are nicio legătură cu incidentul deoarece nu a fost o coliziune în trafic cu un alt vehicul.',
        'Reparația mașinii și a motorului de garaj se achită din economii.'
      ],
      summary: 'Incident casnic nefericit plătit în întregime de proprietar.'
    },
    withInsurance: {
      title: 'Cu poliță CASCO sau poliță de locuință cu răspundere pentru instalații fixe',
      statusLabel: 'Mașina reparată prin CASCO sau ușa decontată prin asigurarea de casă',
      financialImpact: 'Reparație service autorizat (minus franșiza)',
      points: [
        'Polița CASCO decontează vopsitoria și luneta nouă la reprezentanță.',
        'Polița de locuință poate acoperi motorul și panoul avariat al ușii de garaj.'
      ],
      summary: 'Costurile sunt acoperite fără a perturba bugetul gospodăriei.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Defecțiuni electrice la automatizări', detail: 'Verifică dacă polița de casă include motoarele electrice de porți și garaje.' },
        { label: 'Avarii CASCO proprii', detail: 'Verifică dacă CASCO-ul tău acoperă lovirea de corpuri fixe pe proprietatea privată.' }
      ],
      exclusions: [
        'Defecțiuni cauzate de lipsa mentenanței obligatorii cerute în manualul producătorului ușii.'
      ]
    },
    immediateSteps: [
      'Deblochează ușa manual folosind pârghia de urgență pentru a elibera vehiculul.',
      'Fotografiază punctul de contact și avariile la caroserie și senzor.',
      'Deschide dosarul la asigurătorul CASCO.'
    ],
    usefulDocuments: [
      'Factura de revizie a sistemului de automatizare a ușii.',
      'Fotografii ale daunelor auto și la ușa secțională.'
    ],
    relevantInsuranceTypes: ['Poliță CASCO completă', 'Asigurare de locuință pachet extins'],
    verificationQuestions: [
      'Polița ta CASCO acoperă daunele produse în propriul garaj?'
    ],
    sources: ['UNSAR — Ghidul daunelor combinate casă-auto'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea pentru ușa de garaj',
    shareText: 'Ușa de garaj poate cădea peste mașină! Vezi ce asigurare te salvează pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă fotocelula ușii de garaj ratează mașina și coboară pe plafon?',
    socialDescription: 'Află intersecția dintre polița de casă și polița CASCO la incidentele din curte.'
  },
  {
    id: 'casa-retea-electrica-supratensiune-electrocasnice',
    slug: 'bun-valoros-deteriorat',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Supratensiune violentă pe rețeaua electrică distruge aparatura din casă',
    mainQuestion: 'Ce se întâmplă dacă o cădere de tensiune sau un trăsnet indirect îți arde pompa de căldură și televizorul OLED?',
    shortDescription: 'O descărcare electrică în transformatorul de cartier trimite un impuls de 400V prin prizele locuinței.',
    situation: 'O furtună cu descărcări electrice atmosferice lovește un stâlp de medie tensiune din apropiere. Vârful tranzitoriu de tensiune trece de siguranțele standard ale tabloului electric. Televizorul OLED, placa electronică a pompei de căldură și frigiderul inteligent se ard simultan.',
    heroImage: '/images/scenarios/power-surge.jpg',
    imageCaption: 'Aparatura electronică modernă conține microprocesoare sensibile care cedează instantaneu la supratensiuni.',
    illustrativeCost: '25.000 – 70.000 RON (înlocuire pompă căldură și electronice premium)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: true,
    tags: ['supratensiune', 'electric', 'pompă căldură', 'trăsnet'],
    withoutInsurance: {
      title: 'Fără clauză de fenomene electrice pe polița de casă',
      statusLabel: 'Recuperare extrem de grea de la distribuitorul de energie',
      financialImpact: 'Plată din bugetul familiei',
      points: [
        'Garanția oficială a producătorului exclude expres defectele cauzate de factori externi de rețea.',
        'Distribuitorul de energie electrică solicită expertize complicate și respinge majoritatea cererilor de despăgubire.'
      ],
      summary: 'Proprietarul este nevoit să cumpere electrocasnice noi din economii.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include Clauza de Riscuri Electrice și Supratensiune',
      statusLabel: 'Despăgubire pentru reparație sau înlocuire aparat nou',
      financialImpact: 'Valoarea decontată pe baza constatării service-ului',
      points: [
        'Asigurătorul decontează reparația sau înlocuirea aparatelor arse.',
        'Nu ești nevoit să pornești un proces anevoios cu furnizorul de curent.'
      ],
      summary: 'Recuperezi rapid confortul și valoarea echipamentelor deteriorate.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Trăsnet indirect / Supratensiune', detail: 'Trăsnetul direct care lovește casa e acoperit standard; supratensiunea venită prin cabluri cere clauză expresă.' },
        { label: 'Vechimea aparatelor', detail: 'Verifică dacă asigurătorul aplică uzură pentru electronice mai vechi de 3-5 ani.' }
      ],
      exclusions: [
        'Aparate electrocasnice fără marcaj de conformitate CE sau prize fără împământare funcțională.'
      ]
    },
    immediateSteps: [
      'Scoate toate aparatele din priză pentru a preveni alte arcuri electrice.',
      'Apelează distribuitorul de energie pentru a sesiza avaria de rețea și obține un număr de înregistrare.',
      'Trimite aparatele arse la un service autorizat pentru nota tehnică de constatare.'
    ],
    usefulDocuments: [
      'Notă de constatare de la service autorizat care atestă arderea cauzată de șoc electric.',
      'Facturi de achiziție ale aparatelor.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă cu clauză de fenomene electrice (supratensiune)'],
    verificationQuestions: [
      'Ai bifată clauza de fenomene electrice pe polița ta de locuință?'
    ],
    sources: ['UNSAR — Riscuri electrice în gospodării'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea la supratensiune',
    shareText: 'Garanția nu acoperă televizorul ars de fulger! Vezi ce te protejează pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă un șoc de tensiune pe rețea îți arde toate electronicele din casă?',
    socialDescription: 'Află de ce clauza de fenomene electrice este indispensabilă într-o casă modernă.'
  },
  {
    id: 'casa-imobil-nelocuit-perioada-lunga',
    slug: 'imobil-nelocuit-perioada-lunga',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Locuința rămâne neocupată mai mult de 60 de zile',
    mainQuestion: 'Ce se întâmplă dacă pleci din țară pe o perioadă lungă și nu anunți asigurătorul?',
    shortDescription: 'O daună de inundație sau furt apărută într-o casă neocupată poate fi respinsă din cauza clauzei de neocupare.',
    situation: 'Ai plecat cu un contract de muncă în străinătate pentru 4 luni, lăsând apartamentul încuiat. În a treia lună, o țeavă cedează și curge zile în șir până la sesizarea vecinilor. Când notifici asigurătorul, acesta invocă faptul că locuința a fost nelocuită peste termenul maxim permis de contract (uzual 30 sau 60 de zile).',
    heroImage: '/images/scenarios/vacant-property.jpg',
    imageCaption: 'Clauza de neocupare este una dintre cele mai puțin știute condiții suspensive din contractele de locuință.',
    illustrativeCost: '30.000 – 85.000 RON (daune extinse din cauza timpului îndelungat de scurgere)',
    severityLabel: 'Risc Juridic & Financiar',
    featured: false,
    tags: ['neocupare', 'plecare', 'absență', 'excludere'],
    withoutInsurance: {
      title: 'Fără notificare prealabilă de neocupare sau fără clauză extinsă',
      statusLabel: 'Risc imens de respingere a dosarului de daună',
      financialImpact: 'Pierdere totală a dreptului la despăgubire',
      points: [
        'Contractul stipulează clar suspendarea anumitor riscuri dacă imobilul e nelocuit peste 30/60 de zile.',
        'Dauna s-a agravat enorm din lipsa unei intervenții prompte.'
      ],
      summary: 'Nerespectarea clauzei de neocupare lasă proprietarul fără acoperire.'
    },
    withInsurance: {
      title: 'Cu notificare de absență sau clauză specială de neocupare prelungită',
      statusLabel: 'Polița rămâne deplin valabilă conform condițiilor agreate',
      financialImpact: 'Despăgubire aprobată conform procedurii',
      points: [
        'Ai notificat asigurătorul și ai respectat măsurile de securitate (oprirea apei de la robinetul general).',
        'Asigurarea rămâne activă și instrumentează dosarul.'
      ],
      summary: 'O simplă notificare la plecare salvează valabilitatea poliței.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Termenul maxim de neocupare', detail: 'Verifică numărul de zile consecutive permise (de regulă 30, 45 sau 60 de zile).' },
        { label: 'Obligația de golire / oprire apă', detail: 'Majoritatea contractelor cer oprirea apei și gazului la plecările mai lungi de câteva săptămâni.' }
      ],
      exclusions: [
        'Furt sau daune de apă survenite după depășirea termenului de neocupare nedeclarat.'
      ]
    },
    immediateSteps: [
      'Verifică în contract numărul exact de zile de neocupare permise înainte de orice plecare lungă.',
      'Închide robinetul general de apă și gaze de fiecare dată când pleci pentru mai mult de câteva zile.',
      'Lasă o cheie unei persoane de încredere care să inspecteze periodic proprietatea.'
    ],
    usefulDocuments: [
      'Înștiințarea scrisă trimisă asigurătorului înainte de plecare.',
      'Dovada desemnării unei persoane de contact.'
    ],
    relevantInsuranceTypes: ['Poliță de locuință cu clauză de extindere a perioadei de neocupare'],
    verificationQuestions: [
      'Câte zile consecutive ai voie să lași locuința neocupată conform poliței tale?'
    ],
    sources: ['UNSAR — Clauza de neocupare în asigurările de bunuri'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică clauza de neocupare a locuinței',
    shareText: 'Pleci din țară câteva luni? Polița de casă s-ar putea să se suspende! Află pe WHAT IF INSURANCE.',
    socialHook: 'Știai că dacă lași casa goală peste 60 de zile, asigurătorul poate refuza plata daunei?',
    socialDescription: 'Află cum funcționează clauza de neocupare și ce trebuie să faci înainte de o călătorie lungă.'
  },
  {
    id: 'casa-inundatie-revarsare-naturala-pad',
    slug: 'inundatie-daune',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Inundație provocată de revărsarea unui râu (PAD vs Facultativă)',
    mainQuestion: 'Ce se întâmplă dacă o viitură naturală intră în parterul casei tale?',
    shortDescription: 'Râul din apropiere iese din matcă; apa tulbure acoperă curtea și parterul locuinței cu un strat de mâl.',
    situation: 'După precipitații record, pârâul din apropierea cartierului iese din albie. Un torent de apă și aluviuni intră în curte și inundă parterul casei până la înălțimea de 50 cm. Sunt afectate pardoselile, pereții, instalația termică și toată mobila de la parter.',
    heroImage: '/images/scenarios/neighbor-flood.jpg',
    imageCaption: 'Inundațiile naturale catastrofice fac obiectul asigurării obligatorii PAD, completate de facultativă.',
    illustrativeCost: '40.000 – 120.000 RON (curățare mâl, igienizare și refacere parter)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: true,
    tags: ['inundație naturală', 'PAD', 'viitură', 'râu'],
    withoutInsurance: {
      title: 'Fără asigurare PAD și fără facultativă',
      statusLabel: 'Pierdere financiară fără compensare',
      financialImpact: 'Plată integrală a reconstrucției din economii',
      points: [
        'Legea interzice acordarea de ajutoare de stat pentru locuințele neasigurate împotriva dezastrelor naturale.',
        'Proprietarul suportă curățarea mâlului și refacerea structurală.'
      ],
      summary: 'Niciun sprijin financiar public sau privat pentru cei care nu dețin polița obligatorie.'
    },
    withInsurance: {
      title: 'Cu poliță obligatorie PAD + Poliță Facultativă de diferență',
      statusLabel: 'PAD achită primii 100.000 RON (20.000 EUR), facultativa acoperă restul valorii',
      financialImpact: 'Despăgubire completă la valoarea reală a casei și bunurilor',
      points: [
        'PAD despăgubește dauna structurală în limita legală de 20.000 EUR (Tip A) sau 10.000 EUR (Tip B).',
        'Polița facultativă preia diferența de cost peste plafonul PAD și despăgubește mobilierul și electrocasnicele din casă.'
      ],
      summary: 'Combinarea PAD cu asigurarea facultativă garantează refacerea completă a căminului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Existența PAD activ', detail: 'Polița facultativă nu se poate emite legal și nu funcționează fără o poliță obligatorie PAD în vigoare.' },
        { label: 'Conținutul la inundație', detail: 'Verifică dacă polița facultativă acoperă și bunurile din casă afectate de revărsarea naturală.' }
      ],
      exclusions: [
        'Imobile construite în zone declarate oficial neconstruibile sau diguri sparte deliberat.'
      ]
    },
    immediateSteps: [
      'Evacuează zona dacă apele continuă să crească și urmează instrucțiunile comitetului local pentru situații de urgență.',
      'După retragerea apelor, fotografiază urmele lăsate de nivelul apei pe pereți (linia de cotă).',
      'Contactează PAID România sau asigurătorul emitent pentru deschiderea dosarului de daună.'
    ],
    usefulDocuments: [
      'Polița PAD obligatorie și polița facultativă de locuință.',
      'Adeverință de la primărie / comitetul local pentru situații de urgență care atestă fenomenul de viitură.'
    ],
    relevantInsuranceTypes: [
      'Asigurare obligatorie PAD (Pool-ul de Asigurare Împotriva Dezastrelor Naturale)',
      'Asigurare facultativă de locuință completă'
    ],
    verificationQuestions: [
      'Ai polița PAD activă și valabilă în acest moment?',
      'Care este valoarea asigurată pe polița facultativă peste limita PAD de 20.000 EUR?'
    ],
    sources: ['Legea nr. 260/2008 privind asigurarea obligatorie a locuințelor', 'PAID România'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică valabilitatea poliței tale PAD',
    shareText: 'PAD acoperă maxim 20.000 EUR la inundație naturală! Știi cine plătește restul? Află pe WHAT IF INSURANCE.',
    socialHook: 'Știi exact cum colaborează polița obligatorie PAD cu asigurarea ta facultativă la inundație?',
    socialDescription: 'Află de ce PAD acoperă doar structura de bază și de ce ai nevoie de polița facultativă pentru restul.'
  },
  {
    id: 'casa-furt-bijuterii-seif',
    slug: 'furt-locuinta',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Efracție în apartament și sustragerea valorilor din locuință',
    mainQuestion: 'Ce se întâmplă dacă hoții forțează yala ușii metalice și fură bijuteriile și laptopurile?',
    shortDescription: 'Pătrundere prin efracție: yala distrusă, electronicele dispărute și dormitorul răvășit.',
    situation: 'Te întorci din vacanța de iarnă și găsești butucul yalei de la intrare găurit cu bormașina. Hoții au sustras bijuterii din aur, două laptopuri de serviciu și aparatură foto profesională.',
    heroImage: '/images/scenarios/burglary.jpg',
    imageCaption: 'Furtul prin efracție presupune probe materiale evidente de forțare a căilor de acces.',
    illustrativeCost: '30.000 – 90.000 RON (valoare bunuri sustrase și tâmplărie ușă nouă)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: true,
    tags: ['furt', 'efracție', 'bijuterii', 'yală'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă cu acoperire de furt prin efracție',
      statusLabel: 'Pierdere patrimonială definitivă',
      financialImpact: 'Nicio compensație dacă autorii nu sunt prinși',
      points: [
        'Polița PAD nu are nicio legătură cu infracțiunile contra patrimoniului.',
        'Costul securizării urgente a locuinței se achită pe loc din economii.'
      ],
      summary: 'Valoarea bunurilor furate și costul reparațiilor reprezintă o pierdere netă.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă cu clauză completă de furt și tâlhărie',
      statusLabel: 'Despăgubire pentru bunurile declarate și refacerea ușii',
      financialImpact: 'Plată efectuată pe baza dosarului de Poliție',
      points: [
        'Se compensează valoarea electronicelor și a bunurilor menționate pe inventar.',
        'Ușa metalică de intrare deteriorată este decontată la capitolul clădire.'
      ],
      summary: 'Asigurătorul compensează pierderea materială pe baza constatării Poliției.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Urme de efracție', detail: 'Asigurătorii cer urme vizibile de violență sau forțare mecanică asupra ușii sau ferestrelor.' },
        { label: 'Sublimite pentru bijuterii', detail: 'Află dacă bijuteriile au o sublimită procentuală (ex. 10% din conținut) sau necesită păstrare în seif ancorat.' }
      ],
      exclusions: [
        'Furt fără efracție (ușă lăsată descuiată sau geam lăsat rabatat la parter).'
      ]
    },
    immediateSteps: [
      'Nu atinge nimic în locuință pentru a nu compromite amprentele și urmele ADN.',
      'Apelează imediat Poliția (112) pentru efectuarea cercetării criminalistice.',
      'Blochează cardurile și parolele conturilor asociate dispozitivelor furate.'
    ],
    usefulDocuments: [
      'Dovada eliberată de Poliție privind înregistrarea dosarului penal de furt calificat.',
      'Facturi, certificate de garanție sau fotografii ale bijuteriilor și electronicelor.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă de locuință cu clauză de furt și tâlhărie'],
    verificationQuestions: [
      'Cere polița ta păstrarea bijuteriilor într-un seif omologat?',
      'Ce sublimită ai stipulată pentru aparatura electronică scumpă?'
    ],
    sources: ['Codul Penal Român', 'UNSAR — Ghidul siguranței bunurilor'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică protecția locuinței tale la efracție',
    shareText: 'PAD nu despăgubește niciun leu dacă ești călcat de hoți! Află cum te protejezi pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce condiții stricte pune asigurătorul pentru a-ți plăti bunurile furate din casă?',
    socialDescription: 'Află diferența critică dintre furtul cu efracție și neglijența neacoperită.'
  },
  {
    id: 'casa-lucrari-santier-vecin-tasare',
    slug: 'lucrari-santier-vecin-tasare',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Săpăturile de pe șantierul vecin provoacă fisuri structurale în locuința ta',
    mainQuestion: 'Ce se întâmplă dacă excavația pentru un bloc nou de lângă tine destabilizează fundația casei tale?',
    shortDescription: 'Tasarea solului generată de șantierul alăturat provoacă crăpături în pereții structurali și deformează tocurile.',
    situation: 'Pe parcela vecină începe construcția unui imobil cu subsol adânc. Din cauza sprijinirilor defectuoase ale malurilor de pământ, terenul de sub fundația casei tale se tasează. În câteva săptămâni apar fisuri în trepte prin zidăria de cărămidă, iar ușile nu se mai închid.',
    heroImage: '/images/scenarios/renovation-leak.jpg',
    imageCaption: 'Excavațiile adânci în vecinătatea construcțiilor existente impun măsuri riguroase de protecție a fundațiilor.',
    illustrativeCost: '50.000 – 150.000+ RON (consolidare fundații și subzidire)',
    severityLabel: 'Litigiu & Răspundere',
    featured: false,
    tags: ['șantier', 'fundație', 'tasare', 'vecin'],
    withoutInsurance: {
      title: 'Fără asistență juridică și fără asigurare de proprietate',
      statusLabel: 'Luptă anevoioasă în instanță împotriva dezvoltatorului',
      financialImpact: 'Costuri uriașe de expertiză tehnică MLPAT suportate inițial de tine',
      points: [
        'Procesele de sistare a lucrărilor și despăgubire civilă durează ani întregi.',
        'Locuința ta se degradează continuu dacă nu intervii cu lucrări provizorii de sprijinire.'
      ],
      summary: 'Proprietarul este prins într-un conflict judiciar complex și costisitor.'
    },
    withInsurance: {
      title: 'Cu poliță de locuință cu clauză de protecție juridică și daune terțe din construcții',
      statusLabel: 'Sprijin de expertiză și acțiune în regres prin asigurător',
      financialImpact: 'Consultanță juridică și acoperire parțială conform clauzelor',
      points: [
        'Asigurătorul implică experți tehnici independenți pentru stabilirea culpei dezvoltatorului.',
        'Polița de protecție juridică suportă onorariile avocaților și taxele de timbru.'
      ],
      summary: 'Beneficiezi de asistență profesionistă pentru obligarea constructorului la despăgubire.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Tasare vs Mișcare de teren', detail: 'Verifică dacă tasările cauzate de activități umane (săpături) sunt acoperite sau sunt asimilate doar alunecărilor naturale.' }
      ],
      exclusions: [
        'Tasări apărute din cauza extinderilor proprii realizate fără proiect structural de rezistență.'
      ]
    },
    immediateSteps: [
      'Fotografiază și măsoară fisurile apărute aplicând martori din sticlă sau rigle gradate.',
      'Sesizează de urgență Inspectoratul de Stat în Construcții (ISC) și Poliția Locală — Disciplina în Construcții.',
      'Notifică în scris constructorul și asigurătorul tău.'
    ],
    usefulDocuments: [
      'Expertiza tehnică realizată de un expert atestat MLPAT.',
      'Procesul-verbal de control al Inspectoratului de Stat în Construcții (ISC).'
    ],
    relevantInsuranceTypes: ['Poliță de locuință completă cu clauză de asistență juridică'],
    verificationQuestions: [
      'Include polița ta sprijin juridic în disputele cu dezvoltatorii imobiliari vecini?'
    ],
    sources: ['Legea nr. 50/1991 privind autorizarea executării lucrărilor de construcții'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Află cum te protejezi de șantierele vecine',
    shareText: 'Se construiește lângă tine și ți-au crăpat pereții? Află ce pași legali trebuie să faci pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce trebuie să faci dacă săpăturile unui bloc nou îți fisurează casa?',
    socialDescription: 'Vezi procedurile legale și tehnice obligatorii când ești afectat de un șantier vecin.'
  },
  {
    id: 'casa-explozie-acumulare-gaze',
    slug: 'explozie-acumulare-gaze',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Explozie cauzată de acumularea de gaze într-un apartament vecin',
    mainQuestion: 'Ce se întâmplă dacă o explozie produsă pe scară îți sparge ușa și ferestrele?',
    shortDescription: 'Unda de șoc a unei explozii de gaze distruge pereții despărțitori și sparge geamurile întregului bloc.',
    situation: 'O acumulare de gaze la etajul 3 produce o deflagrație puternică. Unda de șoc smulge ușa metalică de la intrarea în apartamentul tău de la etajul 4, sparge toate geamurile termopan și deplasează pereții din BCA.',
    heroImage: '/images/scenarios/balcony-fall.jpg',
    imageCaption: 'Exploziile de gaze provoacă unde de șoc capabile să distrugă elemente de închidere la etaje diferite.',
    illustrativeCost: '40.000 – 110.000 RON (refacere tâmplărie, pereți interiori și uși)',
    severityLabel: 'Urgență Imediată',
    featured: false,
    tags: ['explozie', 'gaze', 'undă șoc', 'geamuri sparte'],
    withoutInsurance: {
      title: 'Fără asigurare facultativă proprie',
      statusLabel: 'Dependență totală de ancheta penală și fondurile vecinului vinovat',
      financialImpact: 'Plată din economii pentru securizarea imediată a locuinței',
      points: [
        'PAD acoperă inundații, cutremur și alunecări, NU explozii de gaze naturale.',
        'Locuința rămâne deschisă intemperiilor până la găsirea fondurilor pentru geamuri noi.'
      ],
      summary: 'Ești victima unui dezastru colectiv fără despăgubire imediată.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include riscul de Explozie și Undă de Șoc',
      statusLabel: 'Despăgubire imediată aprobată de asigurătorul propriu',
      financialImpact: 'Costuri de reconstrucție preluate de asigurător',
      points: [
        'Se compensează montajul de urgență al tâmplăriei și al ușii noi.',
        'Se acoperă refacerea pereților fisurați.',
        'Asigurătorul tău se va ocupa de recuperarea banilor prin regres de la vinovat.'
      ],
      summary: 'Îți repari căminul rapid, fără să aștepți finalizarea anchetei penale de durată.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Explozie externă', detail: 'Verifică dacă riscul de explozie acoperă deflagrația produsă în afara apartamentului tău (la vecini sau pe rețeaua stradală).' }
      ],
      exclusions: [
        'Utilizarea buteliilor de gaz neomologate dacă explozia a pornit din propria culpă gravă.'
      ]
    },
    immediateSteps: [
      'Evacuează clădirea imediat fără a acționa întrerupătoare sau lifturi.',
      'Urmează instrucțiunile echipajelor ISU sosite la fața locului.',
      'Nu intra în locuință până când experții nu evaluează stabilitatea structurală a planșeelor.'
    ],
    usefulDocuments: [
      'Proces-verbal ISU și raportul tehnic al distribuitorului de gaze.',
      'Polița facultativă de locuință.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă completă FLEXA'],
    verificationQuestions: [
      'Polița ta de casă acoperă unda de șoc provenită de la o explozie a unui vecin?'
    ],
    sources: ['IGSU — Ghidul de comportament în caz de explozii de gaze'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea la incendiu și explozie',
    shareText: 'Dacă explodează o butelie la vecin, PAD nu-ți plătește geamurile sparte! Află pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă o acumulare de gaze la vecin îți sparge geamurile și ușa?',
    socialDescription: 'Află cum te protejează polița facultativă împotriva deflagrațiilor de pe scară.'
  },
  {
    id: 'casa-vandalism-usa-zugraveala',
    slug: 'vandalism-usa-zugraveala',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Act de vandalism: ușa de intrare și soneria sunt distruse intenționat de persoane necunoscute',
    mainQuestion: 'Ce se întâmplă dacă găsești ușa de la intrare vopsită cu graffiti și încuietorile blocate cu adeziv?',
    shortDescription: 'Distrugere intenționată a proprietății private: ușă zgâriată adânc, adeziv în yală și interfon avariat.',
    situation: 'După un weekend prelungit, găsești ușa de intrare din lemn masiv mâzgălită cu vopsea spray, butucii yalei blocați cu adeziv instantaneu și soneria video spartă de autori necunoscuți.',
    heroImage: '/images/scenarios/burglary.jpg',
    imageCaption: 'Actele de vandalism asupra căilor de acces intră sub incidența clauzelor de distrugere malițioasă.',
    illustrativeCost: '5.000 – 16.000 RON (înlocuire yală de înaltă siguranță, ușă și sistem video)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['vandalism', 'ușă', 'yală', 'distrugere'],
    withoutInsurance: {
      title: 'Fără clauză de vandalism pe polița de locuință',
      statusLabel: 'Costuri de securizare suportate integral din buzunar',
      financialImpact: 'Plată imediată a lăcătușului și tâmplăriei',
      points: [
        'Trebuie să achiți deblocarea de urgență a ușii și cumpărarea unor cilindri noi.',
        'Poliția deschide dosar penal cu autor necunoscut, dar șansele de recuperare sunt mici.'
      ],
      summary: 'Cheltuială neprevăzută suportată în totalitate de păgubit.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă ce include acoperire pentru Vandalism și Răutate Publică',
      statusLabel: 'Despăgubire pentru refacerea sau înlocuirea ușii și a încuietorilor',
      financialImpact: 'Decontare pe baza dovezii eliberate de Poliție',
      points: [
        'Se compensează costul yalei noi și refacerea suprafeței ușii.',
        'Sistemul video de acces avariat este decontat.'
      ],
      summary: 'Asigurătorul decontează remedierea pagubei create cu rea-credință de terți.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Clauza de vandalism', detail: 'Verifică dacă vandalismul este inclus în pachetul standard sau necesită adăugare expresă.' }
      ],
      exclusions: [
        'Acte comise de chiriași sau membri ai familiei asiguratului.'
      ]
    },
    immediateSteps: [
      'Apelează Poliția înainte de a curăța vopseaua sau de a forța yala pentru a se recolta probe.',
      'Fotografiază detaliat toate degradările.',
      'Contactează un lăcătuș autorizat pentru deblocare și păstrează factura.'
    ],
    usefulDocuments: [
      'Dovada depunerii plângerii penale la secția de Poliție.',
      'Factura de intervenție lăcătuș și factura noii yale.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă de locuință cu clauză de vandalism'],
    verificationQuestions: [
      'Polița ta de locuință include acoperire pentru vandalism?'
    ],
    sources: ['Codul Penal Român — Distrugerea', 'UNSAR — Asigurarea împotriva vandalismului'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică acoperirea pentru vandalism',
    shareText: 'Dacă cineva îți vandalizează ușa sau soneria, cine plătește? Află pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă găsești yala ușii blocată cu adeziv și ușa vopsită cu spray?',
    socialDescription: 'Vezi cum funcționează clauza de vandalism în contractele de asigurare a locuinței.'
  },
  {
    id: 'casa-scurgere-combustibil-centrala',
    slug: 'scurgere-combustibil-centrala',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Avarie la centrala termică și deversare de agent termic glicolat',
    mainQuestion: 'Ce se întâmplă dacă vasul de expansiune al centralei cedează și deversează zeci de litri de antigel?',
    shortDescription: 'Lichidul termic uleios și coroziv se împrăștie pe pardoseală, distrugând izolațiile și finisajele din camera tehnică.',
    situation: 'Vasul de expansiune al sistemului de încălzire cedează din cauza unei supape blocate. Agentul termic tratat cu antigel și inhibitori chimici de coroziune refulează cu presiune, inundând camera tehnică și infiltrându-se în parchetul coridorului alăturat.',
    heroImage: '/images/scenarios/pipe-burst.jpg',
    imageCaption: 'Agentul termic din instalațiile de încălzire conține aditivi chimici care pătează ireversibil lemnul și gresia poroasă.',
    illustrativeCost: '14.000 – 38.000 RON (înlocuire echipamente centrală și parchet pătat chimic)',
    severityLabel: 'Risc Financiar Ridicat',
    featured: false,
    tags: ['centrală termică', 'antigel', 'avarie', 'agent termic'],
    withoutInsurance: {
      title: 'Fără asigurare cu clauză de avarii accidentale la instalațiile de încălzire',
      statusLabel: 'Plată din bugetul familiei',
      financialImpact: 'Costuri mari de reparație a instalației termice',
      points: [
        'Pătarea chimică a parchetului impune înlocuirea completă a suprafeței.',
        'Polița PAD nu are nicio legătură cu instalațiile termice.'
      ],
      summary: 'Toate cheltuielile de înlocuire sunt suportate personal.'
    },
    withInsurance: {
      title: 'Cu poliță facultativă extinsă pentru clădire și instalații fixe',
      statusLabel: 'Despăgubire pentru finisajele afectate și reparația sistemului',
      financialImpact: 'Deviz decontat de asigurător',
      points: [
        'Se compensează refacerea pardoselilor pătate.',
        'Sunt decontate componentele avariate conform condițiilor contractuale.'
      ],
      summary: 'Asigurarea protejează investiția în confortul termic al căminului.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Instalația de încălzire', detail: 'Verifică dacă sunt acoperite daunele cauzate de fluide termice speciale (antigel, apă de încălzire).' },
        { label: 'Revizia ISCIR', detail: 'Asigură-te că deții autorizația ISCIR de funcționare a centralei la zi; lipsa acesteia poate duce la refuzul despăgubirii.' }
      ],
      exclusions: [
        'Centrale termice utilizate fără revizie ISCIR valabilă la data producerii avariei.'
      ]
    },
    immediateSteps: [
      'Oprește alimentarea electrică a centralei termice de la siguranța dedicată.',
      'Închide robineții de tur-retur ai circuitului de încălzire.',
      'Curăță lichidul folosind mănuși de protecție (antigelul conține substanțe toxice).'
    ],
    usefulDocuments: [
      'Autorizația de funcționare ISCIR a centralei termice valabilă.',
      'Raportul de intervenție al tehnicianului autorizat de service.'
    ],
    relevantInsuranceTypes: ['Poliță facultativă de locuință cu acoperire pentru instalații interioare'],
    verificationQuestions: [
      'Ai autorizația ISCIR a centralei valabilă în acest moment?'
    ],
    sources: ['Legea nr. 64/2008 privind funcționarea sigură a instalațiilor sub presiune (ISCIR)'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică dacă centrala ta termică este protejată',
    shareText: 'Dacă centrala termică refulează antigel în casă, cine plătește parchetul? Află pe WHAT IF INSURANCE.',
    socialHook: 'Știai că lipsa reviziei ISCIR la centrală poate anula plata daunei de asigurare?',
    socialDescription: 'Vezi de ce documentele obligatorii de mentenanță sunt esențiale pentru dosarul de daună.'
  },
  {
    id: 'casa-cutremur-daune-structurale',
    slug: 'cutremur-daune-structurale',
    categoryId: 'casa',
    categoryName: 'CASĂ & LOCUINȚĂ',
    title: 'Seism major: crăpături structurale și dislocări de zidărie',
    mainQuestion: 'Ce se întâmplă dacă un cutremur de magnitudine peste 6.5 pe scara Richter afectează structura casei tale?',
    shortDescription: 'Zguduitura puternică produce fisuri în grinzi, stâlpi și zidărie, impunând expertiză structurală de urgență.',
    situation: 'Un seism vrâncean de mare adâncime zguduie violent regiunea. În locuința ta apar fisuri vizibile în pereții structurali, tencuiala cade pe scări, iar tâmplăria este blocată din cauza deformării golurilor de uși.',
    heroImage: '/images/scenarios/storm-roof.jpg',
    imageCaption: 'România este una dintre țările europene cu cel mai ridicat risc seismic natural.',
    illustrativeCost: '50.000 – 200.000+ RON (consolidare structurală și subzidire)',
    severityLabel: 'Urgență Imediată',
    featured: true,
    tags: ['cutremur', 'seism', 'PAD', 'structură', 'consolidare'],
    withoutInsurance: {
      title: 'Fără asigurare obligatorie PAD și fără facultativă',
      statusLabel: 'Niciun sprijin financiar public sau privat',
      financialImpact: 'Plată integrală din buzunar sau evacuare fără fonduri',
      points: [
        'Legislația română interzice alocarea despăgubirilor de la bugetul de stat pentru locuințele neasigurate.',
        'Locuința poate fi declarată nesigură fără fonduri pentru consolidare.'
      ],
      summary: 'Risc imens de a rămâne fără adăpost și fără resurse după un dezastru seismic.'
    },
    withInsurance: {
      title: 'Cu poliță PAD obligatorie + Poliță facultativă de cutremur peste limita legală',
      statusLabel: 'PAD achită primii 20.000 EUR, facultativa acoperă valoarea reală până la sute de mii de euro',
      financialImpact: 'Despăgubire completă pentru clădire și conținut',
      points: [
        'PAD despăgubește daunele structurale în limita plafonului de 100.000 RON (20.000 EUR).',
        'Asigurarea facultativă compensează restul valorii necesare consolidării sau reconstrucției totale.',
        'Sunt despăgubite și bunurile distruse din interior (televizoare căzute, mobilier, candelabre).'
      ],
      summary: 'Protecție financiară completă care permite reconstrucția căminului tău.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Franșiza la seism', detail: 'Majoritatea polițelor facultative aplică o franșiză la cutremur (de regulă 1% sau 2% din suma asigurată a clădirii).' },
        { label: 'Încadrarea clădirii', detail: 'Clădirile încadrate în Clasa I de Risc Seismic (RsI / bulină roșie) sunt excluse de la asigurare conform legii.' }
      ],
      exclusions: [
        'Clădiri cu bulină roșie (Clasa I de risc seismic) neconsolidate.'
      ]
    },
    immediateSteps: [
      'Evacuează clădirea pe scări (niciodată cu liftul) doar după ce mișcarea seismică a încetat.',
      'Oprește gazele, apa și curentul electric din robinetele și siguranțele generale.',
      'Nu intra în clădire dacă sunt semnalate fisuri majore în stâlpi până la inspecția comisiei de specialitate.'
    ],
    usefulDocuments: [
      'Polița PAD obligatorie și polița facultativă.',
      'Actul de proprietate și cartea tehnică a construcției (dacă este disponibilă).'
    ],
    relevantInsuranceTypes: [
      'Asigurare obligatorie PAD',
      'Poliță facultativă de locuință cu clauză de cutremur'
    ],
    verificationQuestions: [
      'Ce franșiză ai aplicată la riscul de cutremur în polița facultativă?',
      'Este clădirea ta expertizată seismic?'
    ],
    sources: ['PAID România', 'Institutul Național de Fizică a Pământului (INFP)'],
    lastEditorialDate: '28 Octombrie 2026',
    ctaText: 'Verifică dacă ești acoperit complet la cutremur',
    shareText: 'PAD acoperă maxim 20.000 EUR la cutremur! Vezi cum asiguri restul valorii casei pe WHAT IF INSURANCE.',
    socialHook: 'Știi ce se întâmplă dacă un seism major produce crăpături în structura casei tale?',
    socialDescription: 'Află cum funcționează acoperirea de cutremur între plafonul PAD și asigurarea facultativă.'
  }
];
