import { QuizQuestion } from '@/types/scenario';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'quiz-1-inundatie-motor',
    scenarioId: 'auto-inundatie-apa-motor-hidroizolare',
    scenarioTitle: 'Apă absorbită la motor într-un pasaj inundat',
    question: 'Treci cu mașina printr-un pasaj subteran inundat, iar motorul aspiră apă și se blochează complet. Este acoperită dauna de polița CASCO standard?',
    situationSnippet: 'Apa acumulată sub pasaj atinge 40 cm. Forțezi trecerea, iar motorul suferă fenomenul de hidrolock (bielă îndoită).',
    options: [
      {
        id: 'opt-1-a',
        text: 'Da, este acoperită automat pentru că ai poliță CASCO completă.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-1-b',
        text: 'Depinde de contract: forțarea cu bună știință a zonelor inundate este adesea exclusă expres ca neglijență gravă.',
        isCorrect: true,
        verdictLabel: 'Depinde de poliță',
      },
      {
        id: 'opt-1-c',
        text: 'Nu este acoperită niciodată pe CASCO, dar se decontează integral din fondul de stat CNAIR.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
    ],
    explanation:
      'Majoritatea contractelor CASCO fac distincție clară între un vehicul surprins de inundație în staționare (acoperit 100%) și forțarea conștientă a unui vad sau pasaj inundat în timpul mersului, clauză frecvent catalogată drept culpă gravă ce atrage refuzul legitim al despăgubirii.',
    caveatNote: 'Verifică dacă polița ta conține clauza specifică de forțare ape stătătoare.',
  },
  {
    id: 'quiz-2-teava-sparta-pad',
    scenarioId: 'casa-teava-sparta',
    scenarioTitle: 'Țeavă de apă spartă în peretele apartamentului',
    question: 'Se sparge o țeavă îngropată în peretele băii și parchetul se umflă complet. Te ajută asigurarea obligatorie PAD?',
    situationSnippet: 'O coloană interioară fisurată inundă livingul și parchetul proaspăt renovat.',
    options: [
      {
        id: 'opt-2-a',
        text: 'Nu. Polița PAD acoperă EXCLUSIV 3 dezastre naturale: cutremur, inundații din revărsări naturale și alunecări de teren.',
        isCorrect: true,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-2-b',
        text: 'Da, pentru că orice inundație cu apă este despăgubită în limita a 20.000 EUR pe PAD.',
        isCorrect: false,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-2-c',
        text: 'Da, dar numai dacă chemi pompierii să constate avaria.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
    ],
    explanation:
      'Polița obligatorie PAD NU despăgubește avariile produse de conducte interioare, defecțiuni de robineți sau electrocasnice. Pentru a fi protejat la spargeri de țevi casnice ai nevoie de o poliță facultativă de locuință cu clauza de apă de conductă inclusă.',
    caveatNote: 'PAD acoperă exclusiv dezastrele naturale prin Legea 260/2008. Inundațiile de conductă sau de la vecini cer expres o poliță facultativă separată.',
  },
  {
    id: 'quiz-3-copil-televizor-magazin',
    scenarioId: 'raspundere-copil-sparge-televizor-magazin',
    scenarioTitle: 'Copilul sparge un televizor de 15.000 RON într-un showroom',
    question: 'Copilul tău de 5 ani dărâmă din greșeală un televizor scump într-un magazin. Cine este obligat legal să suporte costul produsului?',
    situationSnippet: 'O clipă de neatenție la cumpărături lasă un ecran OLED făcut țăndări pe podeaua magazinului.',
    options: [
      {
        id: 'opt-3-a',
        text: 'Magazinul are obligația să își asume riscul comercial de expunere a produselor.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-3-b',
        text: 'Părintele răspunde civil delictual conform Art. 1372 Cod Civil, însă o poliță de Răspundere a Familiei poate prelua integral plata.',
        isCorrect: true,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-3-c',
        text: 'Produsul se compensează automat prin garanția de producător a televizorului.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
    ],
    explanation:
      'Conform Codului Civil român, părinții sunt direct răspunzători patrimonial pentru prejudiciile cauzate de copiii minori. În lipsa unei polițe de Răspundere Civilă a Familiei (Cap de Familie), părintele este executat silit pentru prețul de raft sau de gestiune al bunului distrus.',
    caveatNote: 'Polița de Răspundere a Familiei costă adesea mai puțin de 50 EUR pe an și preia astfel de riscuri.',
  },
  {
    id: 'quiz-4-bagaj-intarziat-retur',
    scenarioId: 'calatorii-bagaj-pierdut-intarziat-destinatie',
    scenarioTitle: 'Bagajul de cală întârzie la întoarcerea acasă',
    question: 'Aterizezi înapoi la București, dar valiza ta a rămas la escala din Frankfurt. Îți decontează asigurarea de călătorie cumpărăturile de haine noi făcute a doua zi?',
    situationSnippet: 'Bagajul ajunge la domiciliu după 48 de ore de la aterizarea zborului de retur.',
    options: [
      {
        id: 'opt-4-a',
        text: 'Da, orice întârziere peste 6 ore acordă automat buget complet de cumpărături.',
        isCorrect: false,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-4-b',
        text: 'Nu. Aproape toate polițele de călătorie exclud cheltuielile de primă necesitate la zborul de întoarcere în țara de reședință.',
        isCorrect: true,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-4-c',
        text: 'Depinde dacă ai păstrat eticheta de bagaj lipită pe pașaport.',
        isCorrect: false,
        verdictLabel: 'Depinde de poliță',
      },
    ],
    explanation:
      'Logica asigurării de călătorie este acoperirea urgențelor apărute în timp ce te afli departe de casă. La întoarcerea la domiciliu, se prezumă că deții haine și produse de igienă acasă, motiv pentru care clauza de întârziere bagaje devine inactivă la sosirea în țara de domiciliu.',
    caveatNote: 'Dacă bagajul se pierde definitiv (după 21 de zile), primești despăgubirea indiferent dacă era zbor de dus sau de întors.',
  },
  {
    id: 'quiz-5-card-european-sanatate-sua',
    scenarioId: 'calatorii-urgenta-medicala-spitalizare-strainatate',
    scenarioTitle: 'Urgență medicală chirurgicală în SUA sau Thailanda',
    question: 'Suferi o criză de apendicită într-o vacanță la New York sau Bangkok. Poți folosi Cardul European de Sănătate (EHIC) emis de statul român?',
    situationSnippet: 'Spitalul american facturează 35.000 USD pentru intervenția chirurgicală și spitalizare.',
    options: [
      {
        id: 'opt-5-a',
        text: 'Da, funcționează la orice spital partener cu sistemul de sănătate românesc.',
        isCorrect: false,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-5-b',
        text: 'Nu. Cardul European de Sănătate (EHIC) este 100% inutil în afara țărilor din Uniunea Europeană și Spațiul Economic European.',
        isCorrect: true,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-5-c',
        text: 'Da, dar plătești doar o coplată de 10% la întoarcere.',
        isCorrect: false,
        verdictLabel: 'Acoperit',
      },
    ],
    explanation:
      'Cardul European de Sănătate are valabilitate teritorială strictă în statele membre UE/SEE și Elveția. În America de Nord, Asia sau Orientul Mijlociu, nu valorează nimic. Fără o asigurare privată de călătorie cu sumă de acoperire de minim 50.000 – 100.000 EUR, pacientul răspunde cu întreaga sa avere pentru costurile de spitalizare.',
    caveatNote: 'Consulatul României nu poate plăti sau garanta facturile medicale ale turiștilor particulari.',
  },
  {
    id: 'quiz-6-baterie-ev-lovita-dedesubt',
    scenarioId: 'auto-baterie-vehicul-electric-avarie',
    scenarioTitle: 'Pachetul de baterii al mașinii electrice lovit pe dedesubt',
    question: 'Lovești o bordură pe dedesubtul mașinii electrice, iar carcasa bateriei este ușor deformată. De ce declară asigurătorii adesea daună totală economică?',
    situationSnippet: 'Bateria costă 25.000 EUR ca piesă de schimb, iar caroseria vehiculului pare intactă.',
    options: [
      {
        id: 'opt-6-a',
        text: 'Pentru că normele stricte de securitate contra incendiilor ale producătorilor interzic reparațiile improvizate la celulele de înaltă tensiune, impunând înlocuirea completă a pachetului.',
        isCorrect: true,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-6-b',
        text: 'Pentru că vehiculele electrice nu au voie să fie asigurate prin contracte CASCO în România.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-6-c',
        text: 'Pentru că bateria este considerată consumabil, exact ca plăcuțele de frână.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
    ],
    explanation:
      'Din cauza riscului de ambalare termică și incendii chimice incontrolabile, protocoalele constructorilor auto cer înlocuirea întregului pack de baterii dacă scutul structural este deformat. Când costul bateriei noi depășește 70-80% din valoarea de piață a mașinii, asigurătorul CASCO este obligat să declare daună totală economică.',
    caveatNote: 'Verifică dacă polița ta CASCO include clauza dedicată pentru baterii de tracțiune la vehicule electrice.',
  },
  {
    id: 'quiz-7-casa-nelocuita-ger',
    scenarioId: 'casa-imobil-nelocuit-perioada-lunga',
    scenarioTitle: 'Țevi sparte într-o casă lăsată nelocuită pe timpul iernii',
    question: 'Lași casa de vacanță nelocuită 3 luni iarna fără să oprești apa și fără căldură. Se sparg țevile din cauza gerului. Îți plătește asigurarea de locuință daunele?',
    situationSnippet: 'Avaria este descoperită abia la primăvară, când parchetul și tencuielile sunt compromise.',
    options: [
      {
        id: 'opt-7-a',
        text: 'Da, asigurarea de locuință acoperă orice daună de apă indiferent de circumstanțe.',
        isCorrect: false,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-7-b',
        text: 'Nu. Majoritatea contractelor au o clauză de neocupare (30-60 de zile) și impun golirea instalațiilor sau menținerea căldurii pe timp de iarnă.',
        isCorrect: true,
        verdictLabel: 'Neacoperit',
      },
      {
        id: 'opt-7-c',
        text: 'Da, dar numai dacă dovedești că ai fost plecat din motive medicale.',
        isCorrect: false,
        verdictLabel: 'Depinde de poliță',
      },
    ],
    explanation:
      'Clauza de neocupare (Unoccupancy Clause) este una dintre cele mai frecvente capcane. Dacă un imobil este lăsat nelocuit peste 30 sau 60 de zile consecutive fără a notifica asigurătorul și fără a goli conductele de apă, riscurile de îngheț, inundație și furt sunt suspendate automat conform condițiilor generale.',
    caveatNote: 'Notifică întotdeauna asigurătorul dacă lași o proprietate vacantă pentru perioade îndelungate.',
  },
  {
    id: 'quiz-8-ceas-lux-depreciere',
    scenarioId: 'luxury-ceas-scump-furat-calatorie-hotel',
    scenarioTitle: 'Ceas de lux de 30.000 EUR furat din seiful camerei de hotel',
    question: 'Ai un ceas Rolex de 30.000 EUR asigurat doar prin polița obișnuită de conținut a apartamentului. Cât recuperezi dacă este furat din camera de hotel în vacanță?',
    situationSnippet: 'Polița de casă are o sumă totală de conținut de 50.000 EUR.',
    options: [
      {
        id: 'opt-8-a',
        text: 'Recuperezi 30.000 EUR pentru că se încadrează în suma totală de 50.000 EUR a casei.',
        isCorrect: false,
        verdictLabel: 'Acoperit',
      },
      {
        id: 'opt-8-b',
        text: 'Recuperezi foarte puțin (uzual max. 1.000 – 2.000 EUR), deoarece polițele standard au o sublimita strictă pentru bijuterii și exclud adesea bunurile purtate în călătorie.',
        isCorrect: true,
        verdictLabel: 'Depinde de poliță',
      },
      {
        id: 'opt-8-c',
        text: 'Recuperezi suma integrală direct de la administrația hotelului.',
        isCorrect: false,
        verdictLabel: 'Neacoperit',
      },
    ],
    explanation:
      'Polițele standard de locuință impun două bariere majore: o sublimita per obiect prețios (rar peste 1.500 EUR fără listă nominală) și limitarea teritorială strictă la adresa de risc (în afara casei bunurile nu sunt acoperite fără clauza „Worldwide All-Risks”). Bunurile de mare valoare necesită polițe specializate cu Valoare Agreată.',
    caveatNote: 'Declară bunurile de lux individual pe o anexă nominativă cu evaluare recentă de specialitate.',
  },
];
