import { Scenario } from '@/types/scenario';

export const luxuryScenarios: Scenario[] = [
  {
    "id": "luxury-ceas-scump-furat-calatorie-hotel",
    "slug": "ceas-scump-furat-calatorie-hotel",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Ceas de lux de 35.000 EUR furat din seiful camerei de hotel în vacanță",
    "mainQuestion": "Ce se întâmplă dacă un ceas elvețian valoros dispare din camera de hotel și asigurarea standard oferă doar 1.000 EUR?",
    "shortDescription": "Un ceas de colecție Rolex sau Patek Philippe este sustras din seiful electronic cu cheie master.",
    "situation": "Te cazezi la un hotel de 5 stele pe Coasta de Azur. Înainte de a merge la plajă, lași în seiful din camera de hotel un ceas de colecție din aur evaluat la 35.000 EUR, achiziționat cu certificat original. Seara găsești seiful deschis fără urme de forțare mecanică evidentă (utilizarea codului master de urgență al hotelului). Conducerea hotelului își declină răspunderea invocând regulamentul intern care limitează despăgubirea pentru bunuri din cameră la 500 – 1.000 EUR.",
    "heroImage": "/images/scenarios/luxury-watch-theft.jpg",
    "imageCaption": "Bunurile de mare valoare necesită asigurări specializate cu evaluare pe bază de listă nominală (Agreed Value) pentru a evita subasigurarea.",
    "severityLabel": "Pierdere Masivă de Capital",
    "featured": true,
    "tags": [
      "ceas-lux",
      "rolex-furt",
      "seif-hotel",
      "valoare-agreata",
      "asigurare-bijuterii"
    ],
    "illustrativeCost": "Valoare ceas sustras: 150.000 – 220.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de obiecte de valoare (Doar polița de călătorie obișnuită)",
      "statusLabel": "Despăgubire limitată la câteva sute de euro",
      "financialImpact": "Pierdere de peste 34.000 EUR suportată personal",
      "points": [
        "Polițele standard de călătorie sau de locuință plafonează despăgubirea pentru bijuterii și ceasuri la maximum 1.000 – 2.000 EUR per obiect.",
        "Regulamentele hoteliere internaționale limitează drastic răspunderea pentru bunurile lăsate în seiful din cameră dacă nu au fost depuse în seiful central al recepției.",
        "Poliția locală deschide dosar, dar ceasurile fără înregistrare în registre internaționale de furt sunt vândute rapid pe piața neagră."
      ],
      "summary": "În lipsa unei polițe specifice de lux, recuperarea financiară a valorii reale a ceasului este imposibilă."
    },
    "withInsurance": {
      "title": "Cu poliță dedicată de Asigurare a Bunurilor de Mare Valoare (Valoare Agreată / Agreed Value)",
      "statusLabel": "Despăgubire integrală de 35.000 EUR aprobată rapid",
      "financialImpact": "Zero pierderi financiare nete",
      "points": [
        "Polița privată de lux include ceasul pe o anexă nominativă cu serie de carcasă, certificat de autenticitate și valoare de catalog agreată.",
        "Asigurarea oferă acoperire la nivel global (Worldwide Cover) fără limitare la teritoriul de domiciliu.",
        "Asigurătorul raportează seria ceasului în registrul mondial The Watch Register, blocând revânzarea acestuia la casele de licitații."
      ],
      "summary": "Primești întreaga contravaloare a piesei de lux fără negocieri complicate legate de uzură."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de Valoare Agreată (Agreed Value)",
          "detail": "Asigură-te că suma este stabilită la semnare pe baza unei expertize oficiale, fără aplicarea coeficientului de uzură la data producerii daunei."
        },
        {
          "label": "Condiții de păstrare în seif",
          "detail": "Verifică cerințele legate de clasa de securitate a seifului în care trebuie depus bunul când nu este purtat la mână."
        },
        {
          "label": "Acoperire teritorială globală",
          "detail": "Verifică dacă bijuteriile și ceasurile sunt asigurate și în călătorii internaționale."
        }
      ]
    },
    "immediateSteps": [
      "Nu atinge seiful sau clanțele camerei pentru a permite poliției ridicarea amprentelor.",
      "Sună imediat la recepție și solicită prezența conducerii și a Poliției naționale la fața locului.",
      "Obține dovada plângerii de furt cu menționarea seriei unice a ceasului.",
      "Notifică brokerul de asigurări de lux transmițând certificatul de garanție și numărul de serie."
    ],
    "usefulDocuments": [
      "Certificatul de autenticitate și cardul de garanție oficial al mărcii",
      "Factura de cumpărare și evaluarea de la un evaluator autorizat",
      "Plângerea penală eliberată de poliția locală"
    ],
    "advisorQuestions": [
      "Cum se actualizează valoarea asigurată dacă prețul de piață al ceasului de colecție crește anual?",
      "Este necesară purtarea ceasului exclusiv pe mână sau e acoperit și în bagajul de mână?"
    ],
    "disclaimer": "Polițele pentru bunuri de lux cer expertize recente de evaluare și respectarea măsurilor de securitate.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-opera-arta-deteriorata-transport",
    "slug": "opera-arta-deteriorata-transport",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Pictură valoroasă din secolul XIX deteriorată ireversibil în timpul relocării",
    "mainQuestion": "Ce poliță compensează pierderea de valoare a unui tablou de patrimoniu zgâriat și străpuns în tranzit?",
    "shortDescription": "O manipulare defectuoasă a ambalajului perforează pânza unui tablou evaluat la 60.000 EUR.",
    "situation": "Colecționezi artă plastică. În timpul mutării într-o nouă reședință sau transportului către o galerie de expoziție, o cutie de transport cade de pe cărucior. Un colț metalic străpunge ambalajul din lemn și perforează pânza unei lucrări semnate de un pictor clasic român de patrimoniu. Tabloul suferă o ruptură de 10 cm în zona centrală a compoziției. Deși poate fi restaurat parțial, valoarea sa de piață pe piața de artă scade cu peste 40%.",
    "heroImage": "/images/scenarios/art-damage.jpg",
    "imageCaption": "Asigurările pentru obiecte de artă (Fine Art) acoperă nu doar costurile de restaurare muzeală, ci și pierderea de valoare artistică și comercială (Depreciation in Value).",
    "severityLabel": "Daună Culturală și Financiară Majoră",
    "featured": true,
    "tags": [
      "arta-plastica",
      "tablou-deteriorat",
      "fine-art-insurance",
      "restaurare-muzeala",
      "pierdere-valoare-arta"
    ],
    "illustrativeCost": "Cost restaurare + depreciere artistică: 80.000 – 180.000 RON",
    "withoutInsurance": {
      "title": "Fără poliță specializată de Artă (Fine Art)",
      "statusLabel": "Firma de mutări oferă o despăgubire derizorie la kilogram",
      "financialImpact": "Pierdere masivă de zeci de mii de euro din valoarea operei",
      "points": [
        "Contractele standard ale companiilor de mutări sau transportatori mărfuri limitează răspunderea la 10-20 EUR per kilogram de marfă (tabloul are 3 kg = 60 EUR despăgubire!).",
        "Polița standard de locuință nu acoperă daunele produse operelor de artă în timpul transportului în afara casei.",
        "Costul unui restaurator atestat de Ministerul Culturii (mii de euro) se plătește din buzunar."
      ],
      "summary": "Rămâi cu o capodoperă mutilată și o pierdere ireversibilă de capital artistic."
    },
    "withInsurance": {
      "title": "Cu poliță dedicată Fine Art & Collectibles (Clauza All-Risks de Tranzit și Depreciere)",
      "statusLabel": "Acoperire completă a restaurării + compensarea pierderii de valoare",
      "financialImpact": "Plată integrală aprobată pe baza evaluării de specialitate",
      "points": [
        "Polița Fine Art acoperă daunele accidentale produse pe durata transportului („nail-to-nail”).",
        "Asigurătorul plătește onorariul laboratorului de restaurare de artă acreditat.",
        "CRITIC: Polița plătește diferența de depreciere comercială (Deficit in Value) stabilită de experți autorizați între valoarea inițială și valoarea de după restaurare."
      ],
      "summary": "Integritatea financiară a colecției tale este prezervată impecabil."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de Depreciere Artistică (Loss in Value)",
          "detail": "Asigură-te că polița nu plătește doar cârpeala pânzei, ci recunoaște scăderea valorii de piață a operei restaurate."
        },
        {
          "label": "Ambalatori specializați",
          "detail": "Verifică dacă asigurătorul impune ca ambalarea și manipularea să fie realizate exclusiv de firme specializate în transport de artă (Art Handlers)."
        }
      ]
    },
    "immediateSteps": [
      "Nu atinge pânza și nu încerca să lipești sau să fixezi marginile rupturii cu bandă adezivă.",
      "Fotografiază detaliat ambalajul exterior și dauna sub iluminare adecvată.",
      "Depune lucrarea într-un mediu cu temperatură și umiditate controlate.",
      "Notifică departamentul Fine Art al companiei de asigurări pentru desemnarea unui expert evaluator."
    ],
    "usefulDocuments": [
      "Certificatul de autenticitate și raportul de condiție inițial (Condition Report)",
      "Fotografii detaliate ale daunelor",
      "Polița de asigurare Fine Art"
    ],
    "advisorQuestions": [
      "Cum se stabilește procentul de depreciere a valorii unui tablou după restaurare?",
      "Acoperă polița transportul între diferite reședințe sau doar expozițiile publice?"
    ],
    "disclaimer": "Polițele Fine Art necesită documentație de proveniență și expertiză de specialitate înainte de emitere.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-yacht-ambarcatiune-avarie-furtuna-marina",
    "slug": "yacht-ambarcatiune-avarie-furtuna-marina",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Yachtul privat rupe parâmele în marina din Grecia în timpul unei furtuni violente",
    "mainQuestion": "Ce se întâmplă dacă o ambarcațiune de lux se izbește de chei și avariază alte două veliere?",
    "shortDescription": "Valurile smulg tacheții de acostare, provocând spargerea corpului din fibră de sticlă și daune altor ambarcațiuni.",
    "situation": "Yachtul tău cu motor de 14 metri este acostat într-o marină privată în Grecia. O furtună mediteraneană (Medicane) aduce vânturi de peste 60 de noduri și valuri care pătrund în bazinul portuar. Parâmele de pupa se rup, iar ambarcațiunea este aruncată violent în pontonul din beton și în două veliere scumpe ancorate alături. Corpul din fibră este găurit deasupra liniei de plutire, elicele sunt îndoite, iar prova celuilalt velier este distrusă.",
    "heroImage": "/images/scenarios/yacht-storm.jpg",
    "imageCaption": "Asigurarea navală de agrement (Yacht Hull & Machinery + P&I) acoperă atât avariile la propriul corp de navă, cât și răspunderea maritimă față de terți.",
    "severityLabel": "Risc Naval de Sute de Mii de Euro",
    "featured": true,
    "tags": [
      "yacht-avarie",
      "furtuna-marina",
      "hull-machinery",
      "raspundere-maritima",
      "asigurare-ambarcatiune"
    ],
    "illustrativeCost": "Avarii proprii + daune aduse altor ambarcațiuni: 200.000 – 600.000 RON",
    "withoutInsurance": {
      "title": "Doar asigurarea minimă obligatorie de răspundere maritimă a marinei",
      "statusLabel": "Reparația propriei ambarcațiuni se plătește integral din buzunar",
      "financialImpact": "Sute de mii de lei pagubă directă la corpul de navă și motoare",
      "points": [
        "Polița de răspundere civilă de bază (Third Party Liability) acoperă doar daunele aduse celorlalte veliere, NU și reparația propriului yacht.",
        "Costul ridicării pe macara, al reparației structurale a fibrei de sticlă și al înlocuirii axelor port-elice este uriaș.",
        "Dacă marina constată că parâmele tale erau uzate sau subdimensionate, poate refuza orice responsabilitate."
      ],
      "summary": "Rămâi cu o ambarcațiune grav avariată și cu devize uriașe de șantier naval."
    },
    "withInsurance": {
      "title": "Cu poliță completă Yacht All-Risks (Hull & Machinery + P&I / Protection and Indemnity)",
      "statusLabel": "Despăgubire integrală pentru corpul de navă și răspunderea față de terți",
      "financialImpact": "Plata doar a franșizei contractuale maritime agregate",
      "points": [
        "Secțiunea Hull & Machinery acoperă integral reparațiile la corpul ambarcațiunii, motoare, generatoare și navigație electronică.",
        "Secțiunea P&I decontează toate reparațiile necesare la velierele avariate și la pontonul marinei.",
        "Sunt acoperite costurile de ranfluare, salvare maritimă și tractare de urgență la șantierul naval."
      ],
      "summary": "Tot impactul naval este preluat de poliță, păstrând investiția ta nautică în deplină siguranță."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Limite de navigație (Cruising Limits)",
          "detail": "Asigură-te că polița include zona geografică în care navighezi (ex. Marea Egee, Mediterana de Est) și perioada de iernare (In-commission vs Laid-up)."
        },
        {
          "label": "Salvarea maritimă (Salvage Charges)",
          "detail": "Verifică dacă asigurarea acoperă remunerația de asistență și salvare conform convențiilor internaționale maritime."
        }
      ]
    },
    "immediateSteps": [
      "Contactează imediat administrația portuară (Capitainerie / Marina Office) și securizează ambarcațiunea cu parâme suplimentare dacă furtuna a trecut.",
      "Fotografiază amănunțit punctele de impact cu pontonul și cu celelalte veliere.",
      "Cere Căpităniei eliberarea raportului oficial de eveniment marin.",
      "Avizează asigurătorul maritim pentru trimiterea unui inspector de specialitate (Marine Surveyor)."
    ],
    "usefulDocuments": [
      "Raportul de incident emis de Căpitănia Portului / Marina",
      "Certificatul de ambarcațiune de agrement și carnetul de marinar",
      "Polița de asigurare maritimă Yacht All-Risks"
    ],
    "advisorQuestions": [
      "Ce cerințe de ancorare și legare la chei prevede contractul meu pe perioada iernării?",
      "Care este franșiza contractuală pentru daune produse de furtuni violente în port?"
    ],
    "disclaimer": "Asigurarea maritimă este guvernată de regulile internaționale de drept maritim și impune menținerea navei în stare de navigabilitate.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-supercar-zgariat-cheie-parcare-hotel",
    "slug": "supercar-zgariat-cheie-parcare-hotel",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Supercar de 300.000 EUR cu vopsea specială multistrat zgâriat adânc cu cheia",
    "mainQuestion": "Cât costă revopsirea unui Ferrari sau Lamborghini cu vopsea mată perlată dacă doar reprezentanța oficială o poate aplica?",
    "shortDescription": "O vopsea specială pe bază de pulbere perlată impune revopsirea completă a mașinii în fabrică în Italia.",
    "situation": "Deții un supercar (Ferrari sau McLaren) cu o vopsea rară cu finisaj mat perlat (opțiune de catalog de 25.000 EUR). În timpul unui weekend la munte, mașina parcată în spațiul rezervat al hotelului este zgâriată adânc cu un obiect ascuțit pe ambele portiere și pe aripa spate din fibră de carbon. Reprezentanța oficială comunică că tehnologia de vopsire multistrat nu permite retușuri locale și impune trimiterea mașinii la fabrica producătorului sau demontarea completă a elementelor.",
    "heroImage": "/images/scenarios/supercar-damage.jpg",
    "imageCaption": "Caroseriile exotice din compozite și vopselele artizanale personalizate ale mașinilor de lux impun expertiză tehnică dedicată și ateliere omologate de fabrică.",
    "severityLabel": "Deviz de Reparație Exorbitant",
    "featured": false,
    "tags": [
      "supercar",
      "vopsea-mata",
      "ferrari-dauna",
      "casco-supercar",
      "fibra-carbon"
    ],
    "illustrativeCost": "Cost vopsitorie oficială + transport fabrică: 90.000 – 180.000 RON",
    "withoutInsurance": {
      "title": "Fără CASCO specializat pentru supercaruri",
      "statusLabel": "Proprietarul achită integral devizul de zeci de mii de euro",
      "financialImpact": "Plată de peste 30.000 EUR din capital propriu",
      "points": [
        "Polițele CASCO obișnuite refuză asigurarea mașinilor cu puteri de peste 500 CP sau valori de piață ce depășesc 150.000 EUR.",
        "Atelierele independente nu au codurile chimice exacte de vopsea și riscă să distrugă panourile de carbon.",
        "Deprecierea comercială la revânzarea unei mașini exotice cu vopsea neconformă este uriașă."
      ],
      "summary": "Vandalismul asupra unui supercar fără asigurare dedicată înseamnă o pierdere de capital masivă."
    },
    "withInsurance": {
      "title": "Cu poliță dedicată Supercar All-Risks (Specialist Luxury Underwriting)",
      "statusLabel": "Reparație aprobată în reprezentanța oficială cu componente de fabrică",
      "financialImpact": "Plata doar a franșizei contractuale agreate (ex. 1.000 – 2.500 EUR)",
      "points": [
        "Polița acoperă daunele de caroserie executate strict la standardele fabricantului oficial.",
        "Sunt decontate costurile de transport pe trailer închis până la centrul tehnic autorizat.",
        "Valoarea de colecție a vehiculului este menținută prin certificarea originală a reparației."
      ],
      "summary": "Supercarul este readus la starea inițială impecabilă cu protecție financiară completă."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de reparație la reprezentanță oficială",
          "detail": "Asigură-te că polița nu impune service-uri agreate generice care nu au echipamente pentru fibră de carbon."
        },
        {
          "label": "Acoperirea pieselor din compozite",
          "detail": "Verifică dacă panourile de caroserie din carbon au acoperire la valoarea de nou fără uzură."
        }
      ]
    },
    "immediateSteps": [
      "Nu încerca să polișezi zgârietura pe vopseaua mată (acțiunea va crea o zonă lucioasă ireversibilă).",
      "Mergi la Biroul de Poliție Rutieră pentru eliberarea Autorizației de Reparație pentru autor necunoscut.",
      "Solicită reprezentanței oficiale a mărcii devizul tehnologic detaliat.",
      "Avizează asigurătorul specializat de supercaruri."
    ],
    "usefulDocuments": [
      "Autorizația de Reparație eliberată de Poliție",
      "Devizul de reparații emis de reprezentanța oficială",
      "Polița de asigurare CASCO Supercar"
    ],
    "advisorQuestions": [
      "Include contractul meu transportul pe platformă închisă la fabrica oficială dacă este necesar?",
      "Care este franșiza fixă pentru evenimente produse în parcare cu autor necunoscut?"
    ],
    "disclaimer": "Asigurarea autovehiculelor exotice se realizează pe bază de inspecție de risc amănunțită și subscriere specializată.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-bijuterii-diamante-pierdute-tranzit",
    "slug": "bijuterii-diamante-pierdute-tranzit",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Inel cu diamant de 3 carate și colier din platină pierdute în timpul unui eveniment de gală",
    "mainQuestion": "Ce poliță acoperă pierderea accidentală (Mysterious Disappearance) a unei bijuterii de mare valoare?",
    "shortDescription": "Un clips de siguranță cedează la o recepție, iar colierul dispare fără urmă de efracție.",
    "situation": "Participi la o gală caritabilă internațională purtând un colier din platină cu diamante în valoare de 45.000 EUR și un inel de logodnă cu diamant de 3 carate evaluat la 50.000 EUR. La finalul serii, constați cu groază că sistemul de închidere al colierului s-a desfăcut, iar piesa a căzut și nu mai poate fi găsită în sala de evenimente. Căutările administrației și verificarea camerelor nu duc la recuperarea bijuteriei.",
    "heroImage": "/images/scenarios/luxury-watch-theft.jpg",
    "imageCaption": "Dispariția inexplicabilă (Mysterious Disappearance) este un risc exclus din 99% dintre polițele standard, necesitând o clauză specială pentru bijuterii de înaltă clasă.",
    "severityLabel": "Pierdere Totală Inexplicabilă",
    "featured": false,
    "tags": [
      "inel-diamant",
      "colier-platina",
      "mysterious-disappearance",
      "bijuterii-lux",
      "asigurare-valori"
    ],
    "illustrativeCost": "Valoare bijuterie pierdută: 200.000 – 250.000 RON",
    "withoutInsurance": {
      "title": "Poliță standard de locuință sau călătorie",
      "statusLabel": "Refuz instant de plată: „pierderea simplă este exclusă”",
      "financialImpact": "Pierderea a 45.000 EUR fără nicio cale de recuperare",
      "points": [
        "Aproape toate polițele obișnuite cer „urme evidente de efracție sau violență” pentru a plăti; căderea de pe gât sau pierderea fără efracție este 100% exclusă.",
        "Plafoanele pentru bijuterii pe polițele generice sunt limitate la maxim 1.000 – 2.000 EUR.",
        "Familia suportă o pierdere materială și emoțională uriașă."
      ],
      "summary": "Absența clauzei de dispariție misterioasă lasă bijuteriile pierdute complet neasigurate."
    },
    "withInsurance": {
      "title": "Cu poliță privată de Bijuterii All-Risks (cu clauză de Mysterious Disappearance & Unexplained Loss)",
      "statusLabel": "Despăgubire integrală la valoarea agreată din certificatul GIA",
      "financialImpact": "Plată de 45.000 EUR direct în contul asiguratului",
      "points": [
        "Polițele internaționale de elită (High Net Worth) acoperă expres pierderea accidentală și dispariția inexplicabilă a bijuteriilor asigurate nominativ.",
        "Despăgubirea se achită conform valorii de expertiză gemologică (GIA / HRD) fără deduceri.",
        "Piesa poate fi refăcută de casa de bijuterii pe baza documentației tehnice."
      ],
      "summary": "Ești protejat împotriva oricărui scenariu, inclusiv căderea accidentală sau desfacerea neobservată a închizătorii."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de Mysterious Disappearance",
          "detail": "CONDIȚIE ELIMINATORIE: Verifică dacă scrie explicit că sunt acoperite pierderea accidentală și dispariția neexplicată."
        },
        {
          "label": "Revizia periodică a monturii",
          "detail": "Unele contracte cer ca bijuteriile de peste 20.000 EUR să fie inspectate o dată la 2 ani de un bijutier autorizat pentru verificarea gheruțelor de prindere."
        }
      ]
    },
    "immediateSteps": [
      "Anunță imediat securitatea locației și conducerea evenimentului pentru salvarea înregistrărilor video.",
      "Depune declarație la Poliția locală menționând pierderea bijuteriei unice.",
      "Pregătește certificatul gemologic original (GIA/HRD) și fotografiile de înaltă rezoluție.",
      "Deschide dosarul la brokerul tău specializat de bunuri de lux."
    ],
    "usefulDocuments": [
      "Certificatul gemologic oficial de diamant (GIA / HRD / IGI)",
      "Raportul de evaluare recent eliberat de un evaluator acreditat",
      "Polița de asigurare High Net Worth All-Risks"
    ],
    "advisorQuestions": [
      "Include contractul meu acoperire pentru bijuterii purtate în călătorii internaționale fără efracție?",
      "Ce documente sunt cerute pentru dovada dispariției accidentale la o recepție?"
    ],
    "disclaimer": "Polițele All-Risks pentru bijuterii se bazează pe certificate gemologice oficiale și evaluări periodice de piață.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-scuter-acvatic-jet-ski-avarie-stanci",
    "slug": "scuter-acvatic-jet-ski-avarie-stanci",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Jet ski de performanță de 24.000 EUR lovit violent de stânci submarine",
    "mainQuestion": "Ce poliță maritimă acoperă fisurarea corpului din compozit și distrugerea turbinei hidrojet?",
    "shortDescription": "O manevră la viteză mare într-un golf necunoscut avariază grav carena și admisia de apă.",
    "situation": "Conduci un jet ski Sea-Doo de 300 CP în timpul unei vacanțe în Grecia. La virajul într-un golf retras, lovești o formațiune de stânci aflată la 20 cm sub suprafața apei. Impactul smulge grila de admisie a turbinei, sparge carena din fibră de sticlă pe 40 cm și îndoaie axul elicei hidrojet. Motorul se inundă cu apă sărată înainte ca ambarcațiunea să poată fi tractată la țărm. Devizul de reparație la dealerul maritim este de 12.000 EUR.",
    "heroImage": "/images/scenarios/yacht-storm.jpg",
    "imageCaption": "Ambarcațiunile rapide de agrement necesită polițe maritime complete care acoperă atât avariile la corpul de navă, cât și riscul de aspirație a apei în motor.",
    "severityLabel": "Daună Marină Costisitoare",
    "featured": false,
    "tags": [
      "jet-ski",
      "ambarcatiune-rapida",
      "avarie-carena",
      "turbina-hidrojet",
      "asigurare-marina"
    ],
    "illustrativeCost": "Cost reparație carenă + refacere motor: 35.000 – 65.000 RON",
    "withoutInsurance": {
      "title": "Doar asigurarea minimă de răspundere a ambarcațiunii (RCA marin)",
      "statusLabel": "Avariile propriului jet ski se plătesc integral din buzunar",
      "financialImpact": "Plată de peste 12.000 EUR la șantierul naval",
      "points": [
        "Polița maritimă obligatorie plătește doar dacă lovești un alt înotător sau ambarcațiune, NU și daunele propriului jet ski.",
        "Costul pieselor originale marine și al manoperei de specialitate este extrem de ridicat.",
        "Rămâi cu o ambarcațiune inutilizabilă în plin sezon estival."
      ],
      "summary": "Impactul subacvatic fără o poliță CASCO marină înseamnă pierderea a jumătate din valoarea jet ski-ului."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare a Ambarcațiunilor de Agrement (Watercraft Comprehensive / CASCO Marin)",
      "statusLabel": "Decontare integrală a reparației corpului și turbinei",
      "financialImpact": "Plata doar a franșizei maritime contractuale (ex. 500 EUR)",
      "points": [
        "Polița acoperă coliziunea cu obiecte submarine, stânci sau bancuri de nisip.",
        "Sunt decontate operațiunile de ranfluare din apă, spălarea de urgență a motorului cu fluide anti-coroziune și piese noi OE.",
        "Ambarcațiunea este repusă pe apă în stare tehnică perfectă."
      ],
      "summary": "Sporturile nautice de viteză rămân o plăcere sigură datorită acoperirii complete marine."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Permisul de conducător de ambarcațiune",
          "detail": "Conducătorul jet ski-ului trebuie să posede permis valabil categoria D (ape interioare) sau C (maritim costier)."
        },
        {
          "label": "Zona teritorială de navigație",
          "detail": "Asigură-te că polița acoperă apele teritoriale ale țărilor vizitate (ex. apele Greciei, Croației, Italiei)."
        }
      ]
    },
    "immediateSteps": [
      "Scoate ambarcațiunea imediat pe peridoc și spală motorul cu apă dulce pentru a opri coroziunea sării.",
      "Fotografiază fisura din carenă și zona de impact.",
      "Obține adeverința de incident de la autoritatea portuară locală (Port Police).",
      "Deschide dosarul la asigurătorul maritim."
    ],
    "usefulDocuments": [
      "Certificatul de înmatriculare al ambarcațiunii de agrement",
      "Permisul de conducător ambarcațiune de agrement",
      "Polița de asigurare CASCO Marin"
    ],
    "advisorQuestions": [
      "Include contractul meu operațiunea de tractare marină de urgență până la cel mai apropiat port?",
      "Care este franșiza pentru daune la motor prin pătrunderea apei sărate?"
    ],
    "disclaimer": "Pilotarea ambarcațiunilor rapide presupune respectarea vitezelor limită și a distanțelor minime de siguranță față de plaje și zone de scăldat.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-colectie-vinuri-rare-avarie-climatizare",
    "slug": "colectie-vinuri-rare-avarie-climatizare",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Colecție de vinuri rare de 70.000 EUR compromisă de defectarea sistemului de climatizare",
    "mainQuestion": "Ce poliță plătește dacă o pană de răcire în pivniță degradează termic sute de sticle Grand Cru?",
    "shortDescription": "Temperatura urcă la 38°C timp de 4 zile în mijlocul verii, alterând gustul și proprietățile vinurilor de patrimoniu.",
    "situation": "Ai investit o avere într-o cramă privată cu temperatură și umiditate controlată, adăpostind peste 300 de sticle de vin de colecție (Bordeaux Grand Cru Classé, Domaine de la Romanée-Conti) în valoare totală de 320.000 RON. În timp ce ești plecat în concediu, unitatea de climatizare dedicată suferă o avarie a compresorului. Temperatura din pivniță crește la 38°C timp de 96 de ore. Dopurile de plută sunt împinse afară, iar vinurile suferă degradare termică ireversibilă (madeirizare), devenind nevendabile.",
    "heroImage": "/images/scenarios/art-damage.jpg",
    "imageCaption": "Colecțiile de vinuri fine și băuturi rare necesită asigurări All-Risks specializate cu clauză de alterare a temperaturii (Temperature Variation Cover).",
    "severityLabel": "Pierdere Totală de Colecție Fină",
    "featured": false,
    "tags": [
      "vinuri-rare",
      "crama-climatizare",
      "grand-cru",
      "alterare-temperatura",
      "fine-wine-insurance"
    ],
    "illustrativeCost": "Valoare colecție de vinuri depreciată: 150.000 – 320.000 RON",
    "withoutInsurance": {
      "title": "Poliță standard de locuință",
      "statusLabel": "Refuz total: „alterarea termică a alimentelor și băuturilor este exclusă”",
      "financialImpact": "Pierderea a 70.000 EUR din portofoliul de active alternative",
      "points": [
        "Polițele standard de casă limitează conținutul din frigidere/congelatoare la maximum 500 – 1.000 EUR pentru alimente uzuale.",
        "Vinurile rare nu sunt recunoscute ca bunuri de mare valoare dacă nu există o expertiză somelier la subscriere.",
        "Rămâi cu sute de sticle de vin celebru inutilizabile pe piața secundară a colecționarilor."
      ],
      "summary": "Fără o clauză dedicată pentru pivnițe de vinuri, defecțiunea tehnică distruge complet colecția."
    },
    "withInsurance": {
      "title": "Cu poliță dedicată Fine Wine & Luxury Collections (Clauza de Defecțiune a Instalației de Climatizare)",
      "statusLabel": "Despăgubire integrală pe baza catalogului de licitație Liv-ex",
      "financialImpact": "Plata integrală a valorii de piață a colecției asigurate",
      "points": [
        "Polița acoperă alterarea băuturilor fine cauzată de defectarea instalației de refrigerare sau a senzorilor de climatizare.",
        "Suma asigurată este stabilită pe baza indicelui bursier internațional de vinuri (Liv-ex) sau a facturilor de achiziție de la case de licitații.",
        "Colecționarul își recuperează capitalul de investiție."
      ],
      "summary": "Pasiunea ta pentru oenologie este garantată de o asigurare de lux pe măsură."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Sistem de alarmă pentru temperatură",
          "detail": "Contractele de lux cer de regulă ca pivnița să aibă un senzor conectat la telefon sau dispecerat care alertează depășirea pragului de 18°C."
        },
        {
          "label": "Actualizarea catalogului de sticle",
          "detail": "Colecția trebuie actualizată anual pe măsură ce adaugi noi achiziții de la licitații."
        }
      ]
    },
    "immediateSteps": [
      "Repune în funcțiune o unitate mobilă de răcire și securizează sticlele rămase.",
      "Fotografiază dopurile expulzate și termohigrometrul care atestă temperatura atinsă.",
      "Solicită unui somelier autorizat sau expert atestat un raport de degustare/constatare a degradării organoleptice.",
      "Deschide dosarul la asigurătorul tău de colecții de lux."
    ],
    "usefulDocuments": [
      "Catalogul colecției de vinuri cu proveniența fiecărei sticle",
      "Facturile de cumpărare de la case de licitații sau crame de renume",
      "Polița Fine Wine All-Risks"
    ],
    "advisorQuestions": [
      "Cum se calculează deprecierea sticlelor de vin dacă doar o parte din dopuri au fost afectate?",
      "Este acoperită colecția pe durata transportului de la crama producătoare la reședința privată?"
    ],
    "disclaimer": "Asigurarea colecțiilor de vinuri impune condiții stricte de monitorizare a mediului de păstrare.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "luxury-avion-usor-delicopter-privat-avarie-hangar",
    "slug": "avion-usor-delicopter-privat-avarie-hangar",
    "categoryId": "luxury-bunuri",
    "categoryName": "BUNURI DE LUX & VALORI",
    "title": "Avionul privat ultraușor este avariat grav în hangar de o furtună care smulge acoperișul",
    "mainQuestion": "Ce poliță aeronautică acoperă distrugerea aripii și a elicei unui avion de agrement la sol?",
    "shortDescription": "O grindină violentă sparge luminatoarele hangarului și perforează suprafețele de comandă ale aparatului de zbor.",
    "situation": "Deții un avion de agrement (Cirrus SR22 sau Diamond DA42) parcat într-un hangar la un aerodrom privat. O furtună extremă smulge o parte din acoperișul metalic al hangarului. Bucăți grele de tablă și grinzi cad direct peste aripa stângă și elicea din compozit a aeronavei, deformând profund lonjeronul principal și spărgând parbrizul cabinei. Avionul este imobilizat la sol, necesitând inspecție structurală și reparație autorizată de Agenția Europeană de Siguranță a Aviației (EASA).",
    "heroImage": "/images/scenarios/storm-roof.jpg",
    "imageCaption": "Asigurarea aeronautică (Aviation Hull & Liability) acoperă riscurile atât în zbor (In-Flight), cât și pe durata staționării la sol (Ground Risks).",
    "severityLabel": "Daună Aeronautică Majoră",
    "featured": false,
    "tags": [
      "avion-privat",
      "aviation-hull",
      "hangar-avarie",
      "easa-reparatie",
      "asigurare-aeronautica"
    ],
    "illustrativeCost": "Costuri inspecție structurală + piese aeronautice: 150.000 – 450.000 RON",
    "withoutInsurance": {
      "title": "Doar asigurarea minimă de răspundere civilă aeronautică față de terți",
      "statusLabel": "Corpul aeronavei proprii (Hull) este complet neasigurat la sol",
      "financialImpact": "Plată de zeci de mii de euro pentru piese certificate EASA",
      "points": [
        "Asigurarea obligatorie de aviație acoperă doar daunele aduse terților sau pasagerilor, NU și corpul aeronavei tale.",
        "Proprietarul hangarului declină răspunderea invocând forța majoră meteo a furtunii.",
        "Piesele aeronautice cu certificare Form 1 au costuri uriașe și timp lung de livrare."
      ],
      "summary": "Proprietarul aeronavei suportă singur o cheltuială imensă pentru readucerea avionului în stare de zbor."
    },
    "withInsurance": {
      "title": "Cu poliță de Aviație Generală (Hull All-Risks Ground & Flight)",
      "statusLabel": "Despăgubire completă a pieselor originale certificate EASA",
      "financialImpact": "Reparație aprobată în atelier de întreținere aeronautică acreditat (Part-145)",
      "points": [
        "Polița Hull acoperă daunele produse la sol (Ground Risks) provocate de furtuni, incendiu sau cădere de corpuri.",
        "Sunt decontate aripa nouă, elicea din fibră, manopera tehnicienilor licențiați și zborul de test.",
        "Aeronava își recapătă Certificatul de Navigabilitate (ARC)."
      ],
      "summary": "Aparatul tău de zbor este protejat impecabil, respectând cele mai riguroase standarde de siguranță aviatică."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Ground Risk vs In-Motion",
          "detail": "Verifică dacă polița include riscurile la sol în hangar (Ground Risks Hull) chiar și în perioadele când avionul nu zboară."
        },
        {
          "label": "Atelierul Part-145 autorizat",
          "detail": "Asigură-te că polița permite alegerea liberă a centrului tehnic autorizat EASA pentru reparație."
        }
      ]
    },
    "immediateSteps": [
      "Nu atinge aeronava înainte de documentarea foto și anunțarea Autorității de Investigații și Analiză pentru Siguranța Aviației Civile (CIAS) dacă este cazul.",
      "Solicită administrației aerodromului un raport oficial de furtună și daune în hangar.",
      "Avizează asigurătorul aeronautic de urgență.",
      "Contactează organizația Part-145 responsabilă de mentenanța aeronavei tale."
    ],
    "usefulDocuments": [
      "Certificatul de Înmatriculare și Certificatul de Navigabilitate ale aeronavei",
      "Raportul de incident al administratorului de aerodrom",
      "Polița de asigurare Aviation Hull All-Risks"
    ],
    "advisorQuestions": [
      "Include contractul meu costurile pentru zborul de test și eliberarea noului certificat de eliberare în serviciu (CRS)?",
      "Care este franșiza fixă la riscurile produse în hangar la sol?"
    ],
    "disclaimer": "Reparațiile aeronautice pot fi efectuate exclusiv de organizații autorizate conform reglementărilor EASA Part-145.",
    "lastReviewed": "Octombrie 2026"
  }
];
