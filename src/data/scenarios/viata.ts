import { Scenario } from '@/types/scenario';

export const viataScenarios: Scenario[] = [
  {
    "id": "viata-accident-incapacitate-temporara-munca",
    "slug": "accident-incapacitate-temporara-munca",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Accident grav pe șantier sau la sport și incapacitate de muncă timp de 6 luni",
    "mainQuestion": "Cum îți plătești ratele la casă și cheltuielile familiei dacă nu poți profesa jumătate de an?",
    "shortDescription": "O fractură multiplă de femur și tibie necesită imobilizare prelungită și recuperare anevoioasă.",
    "situation": "Ești un profesionist activ sau antreprenor. În urma unui accident la un meci de fotbal de amatori sau a unei căzături pe o scară, suferi o fractură cominutivă de femur și tibie. Ești supus a două intervenții chirurgicale și ești imobilizat la pat. Medicii certifică o incapacitate temporară completă de muncă de cel puțin 6 luni. Indemnizația de concediu medical din sistemul public este plafonată legal și reprezintă doar o fracțiune din veniturile tale reale.",
    "heroImage": "/images/scenarios/inability-work.jpg",
    "imageCaption": "Concediul medical decontat de stat este plafonat legal la 10-12 salarii minime brute, lăsând un gol masiv în bugetul familiilor cu venituri medii și mari.",
    "severityLabel": "Blocaj Financiar pe Termen Mediu",
    "featured": true,
    "tags": [
      "incapacitate-munca",
      "fractura-femur",
      "pierdere-venituri",
      "asigurare-accidente",
      "indemnizatie-zilnica"
    ],
    "illustrativeCost": "Pierdere de venituri nete pe 6 luni: 30.000 – 90.000 RON",
    "withoutInsurance": {
      "title": "Doar concediul medical oferit de stat (FNUASS)",
      "statusLabel": "Venituri reduse dramatic și epuizarea economiilor",
      "financialImpact": "Deficit bugetar lunar de mii de lei + epuizarea fondului de rezervă",
      "points": [
        "Dacă ești PFA sau administrator de SRL, concediul medical de stat este derizoriu sau extrem de greu de încasat.",
        "Ratele la bancă, cheltuielile copiilor și utilitățile nu se opresc pe durata convalescenței tale.",
        "Familia este forțată să împrumute bani sau să vândă active pentru a supraviețui financiar 6 luni."
      ],
      "summary": "Pierderea temporară a capacității de muncă golește rapid toate economiile familiei."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Accidente Persoane cu Indemnizație Zilnică de Spitalizare și Convalescență",
      "statusLabel": "Plată lunară fixă garantată direct în contul tău",
      "financialImpact": "Încasare indemnizație zilnică (ex. 200 – 500 RON/zi de incapacitate certificată)",
      "points": [
        "Polița plătește o sumă fixă pe fiecare zi de spitalizare și pe fiecare zi de concediu medical / imobilizare.",
        "Încasezi lunar între 6.000 și 15.000 RON neimpozabili, compensând integral diferența de venit.",
        "Ratele la bancă și stilul de viață al familiei sunt menținute fără nicio degradare."
      ],
      "summary": "Te poți concentra exclusiv pe vindecare și recuperare, fără stresul ratelor bancare și al facturilor."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Perioada de franșiză temporală",
          "detail": "Verifică dacă indemnizația zilnică începe din ziua 1, ziua 4 sau ziua 15 de incapacitate medicală."
        },
        {
          "label": "Durata maximă acoperită",
          "detail": "Asigură-te că polița decontează până la 180 sau 365 de zile de incapacitate continuă per eveniment."
        },
        {
          "label": "Definiția accidentului",
          "detail": "Evenimentul trebuie să fie brusc, violent și imprevizibil, exterior voinței asiguratului."
        }
      ]
    },
    "immediateSteps": [
      "Păstrează toate certificatele de concediu medical și fișele de observație din spital.",
      "Solicită medicului ortoped un raport detaliat privind evoluția recuperării și limitările fizice funcționale.",
      "Notifică asigurătorul în termenul prevăzut în contract (uzual 15-30 de zile de la producerea accidentului).",
      "Transmite certificatele medicale lunare pentru deblocarea tranșelor de indemnizație."
    ],
    "usefulDocuments": [
      "Biletul de externare din spital cu protocolul operator detaliat",
      "Certificatele de concediu medical vizate de medicul de familie/specialist",
      "Polița de asigurare de viață/accidente"
    ],
    "advisorQuestions": [
      "Ce sumă primesc pe zi de incapacitate temporară de muncă certificată de medic?",
      "Se aplică perioada de așteptare în caz de accident sau acoperirea este valabilă din prima zi de contract?"
    ],
    "disclaimer": "Indemnizația pentru incapacitate temporară se acordă strict pe baza recomandărilor medicale de specialitate.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-diagnostic-boala-grava-oncologie",
    "slug": "diagnostic-boala-grava-oncologie",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Diagnostic oncologic neașteptat și nevoia de terapii inovatoare",
    "mainQuestion": "Ce faci dacă primești un diagnostic de boală gravă și tratamentele de ultimă generație nu sunt decontate rapid de stat?",
    "shortDescription": "Un neoplasm mamar sau de colon impune investigații PET-CT, teste genetice și imunoterapie privată.",
    "situation": "La un control de rutină de ecografie sau colonoscopie, un adult tânăr de 38 de ani, părinte a doi copii, primește un diagnostic dur: carcinom în stadiu intermediar. Protocolul modern de tratament recomandă teste de secvențiere genetică a tumorii (Next Generation Sequencing), investigații PET-CT repetate și terapii biologice țintite la o clinică specializată. În sistemul de stat, listele de așteptare pentru decontare durează 3-5 luni, timp pe care pacientul nu și-l permite.",
    "heroImage": "/images/scenarios/serious-diagnosis.jpg",
    "imageCaption": "Diagnosticul unei boli critice impune resurse financiare lichide imediate pentru a accesa cele mai noi protocoale terapeutice fără întârziere.",
    "severityLabel": "Risc Vital și Financiar Extrem",
    "featured": true,
    "tags": [
      "boala-critica",
      "cancer-oncologie",
      "terapii-inovatoare",
      "pet-ct",
      "capital-garantat-diagnostic"
    ],
    "illustrativeCost": "Costuri teste genetice + imunoterapie + investigații: 80.000 – 250.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare privată de boli critice sau sănătate internațională",
      "statusLabel": "Blocaj pe listele de așteptare sau vânzarea bunurilor de valoare",
      "financialImpact": "Zeci de mii de euro cheltuiți din economii sau împrumuturi disperate",
      "points": [
        "Timpul este factorul critic în oncologie; așteptarea de 3 luni pentru o aprobare CNAS poate duce la metastazare.",
        "Analizele moleculare de laborator din străinătate (ex. FoundationOne) costă 3.500 – 5.000 EUR și se achită doar privat.",
        "Familia este nevoită să vândă mașina, un apartament sau să apeleze la donații publice pe rețelele sociale."
      ],
      "summary": "În fața unei boli grave, lipsa de lichidități poate limita opțiunile terapeutice care fac diferența între viață și moarte."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare pentru Boli Critice (Sumă Asigurată de 100.000 – 250.000 RON plătită pe loc)",
      "statusLabel": "Plată forfetară integrală virată în cont în 14 zile de la confirmarea diagnosticului",
      "financialImpact": "Capital lichid masiv plătit direct asiguratului pentru a fi folosit după propria dorință",
      "points": [
        "Polița de boli critice plătește întreaga sumă asigurată (ex. 200.000 RON) IMEDIAT la confirmarea histopatologică a diagnosticului.",
        "Banii nu sunt condiționați de decontarea facturilor: pacientul îi poate folosi pentru a merge la orice clinică privată din Viena, Milano sau Turcia.",
        "Se oferă acces gratuit la serviciul de Second Opinion Medical de la spitale universitare internaționale de elită."
      ],
      "summary": "Ai la dispoziție capitalul necesar pentru a alege cei mai buni medici și cele mai avansate tratamente din lume."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Perioada de așteptare inițială",
          "detail": "Polițele de boli grave au o perioadă de așteptare de 90 – 180 de zile de la semnare (boala nu trebuie să fi existat anterior)."
        },
        {
          "label": "Perioada de supraviețuire",
          "detail": "Majoritatea contractelor prevăd o perioadă de supraviețuire de 14 – 30 de zile de la diagnostic pentru deblocarea sumei asigurate."
        },
        {
          "label": "Lista bolilor critice acoperite",
          "detail": "Verifică dacă include 30-40 de afecțiuni (cancer, infarct, AVC, insuficiență renală, transplant de organe, scleroză multiplă)."
        }
      ]
    },
    "immediateSteps": [
      "Obține raportul histopatologic complet și biopsia cu parafină de la laboratorul de anatomopatologie.",
      "Solicită serviciul de A Doua Opinie Medicală (Second Medical Opinion) inclus în polița ta pentru confirmarea schemei terapeutice.",
      "Depune dosarul la asigurător transmițând buletinul anatomo-patologic.",
      "Încasează capitalul asigurat în contul bancar personal."
    ],
    "usefulDocuments": [
      "Buletinul anatomo-patologic cu confirmarea histologică a neoplaziei",
      "Raportul medical al medicului oncolog cu planul terapeutic propus",
      "Polița de asigurare de boli grave"
    ],
    "advisorQuestions": [
      "Ce sumă fixă primesc la diagnosticarea unei afecțiuni oncologice maligne?",
      "Include contractul meu acces la Second Opinion la spitale de top din Europa?"
    ],
    "disclaimer": "Asigurarea pentru boli critice nu înlocuiește tratamentul medical de specialitate, ci oferă resursa financiară pentru susținerea acestuia.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-pierdere-sursa-principala-venit-deces-parinte",
    "slug": "pierdere-sursa-principala-venit-deces-parinte",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Pierderea neașteptată a susținătorului principal al familiei cu credit ipotecar",
    "mainQuestion": "Ce se întâmplă cu locuința și viitorul copiilor dacă părintele care aducea 80% din venituri decedează brusc?",
    "shortDescription": "Un infarct fulgerător lasă o soție și doi copii minori cu un credit ipotecar activ de 120.000 EUR.",
    "situation": "Un bărbat de 42 de ani, stâlp financiar al casei, suferă un stop cardio-respirator fulgerător în somn. În urmă rămân soția și doi copii de vârstă școlară. Veniturile familiei scad instantaneu cu 75%. Familia are un credit ipotecar la bancă pentru apartament cu sold rămas de 115.000 EUR (rată lunară de 4.200 RON). Venitul soției este insuficient chiar și pentru acoperirea ratei bancare și a utilităților.",
    "heroImage": "/images/scenarios/serious-diagnosis.jpg",
    "imageCaption": "Asigurarea de viață pe termen lung este ancora fundamentală de securitate pentru familiile cu credite și copii minori în întreținere.",
    "severityLabel": "Tragedie Umană și Risc de Executare Silită",
    "featured": true,
    "tags": [
      "deces-sustinator",
      "credit-ipotecar",
      "asigurare-viata-credit",
      "protectie-copii",
      "executare-bancara"
    ],
    "illustrativeCost": "Datorie bancară + nevoi educaționale copii: 500.000 – 900.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de viață sau doar asigurarea de bază a băncii cesionată",
      "statusLabel": "Risc masiv de pierdere a locuinței și sărăcie familială",
      "financialImpact": "Incapacitate de plată a ratelor și executare silită a apartamentului",
      "points": [
        "Dacă polița băncii nu a fost reînnoită sau avea excluderi neînțelese, banca declară creditul scadent anticipat.",
        "Mama este forțată să scoată apartamentul la vânzare sub presiunea timpului și să se mute într-o chirie mică.",
        "Planurile educaționale ale copiilor (facultate, activități extrașcolare) sunt complet anulate."
      ],
      "summary": "Moartea tragică a părintelui lasă familia expusă riscului real de a-și pierde propriul cămin."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Viață Term Life (Sumă Asigurată de 150.000 – 250.000 EUR)",
      "statusLabel": "Creditul este stins 100% + capital substanțial rămas pentru creșterea copiilor",
      "financialImpact": "Plată de 150.000 – 250.000 EUR direct către beneficiarii desemnați",
      "points": [
        "Soldul integral al creditului ipotecar este achitat băncii, iar apartamentul rămâne proprietate liberă de orice datorie.",
        "Diferența de zeci de mii de euro este virată soției și copiilor, asigurând cheltuielile zilnice și studiile pe următorii 10 ani.",
        "Despăgubirea de asigurare de viață NU este impozabilă și NU intră în masa succesorală complicată a moștenirii."
      ],
      "summary": "Familia este protejată financiar pe viață, păstrându-și demnitatea și căminul."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Beneficiarii desemnați nominal",
          "detail": "Asigură-te că pe poliță sunt trecuți nominal soțul/soția sau copiii, nu formularea vagă „moștenitori legali” (care blochează banii până la succesiune)."
        },
        {
          "label": "Excluderea suicidului",
          "detail": "Contractele de viață au de regulă o perioadă de excludere a suicidului de 12 – 24 de luni de la semnare."
        },
        {
          "label": "Suma descrescătoare vs Sumă fixă",
          "detail": "Alege o sumă asigurată fixă dacă vrei ca pe lângă credit să rămână bani lichizi pentru familie."
        }
      ]
    },
    "immediateSteps": [
      "Obține Certificatul de Deces și Certificatul Medical Constatator al Decesului de la medicul legist/spital.",
      "Verifică polițele de viață active ale defunctului (inclusiv cele atașate cardurilor bancare sau contractelor de credit).",
      "Depune cererea de despăgubire direct la compania de asigurări prezentând actele de identitate ale beneficiarilor.",
      "Asigurătorul virează indemnizația în termen contractual (uzual 15-30 de zile)."
    ],
    "usefulDocuments": [
      "Certificatul de Deces (copie legalizată)",
      "Certificatul medical constatator al cauzei decesului",
      "Polița de asigurare de viață și actele de identitate ale beneficiarilor"
    ],
    "advisorQuestions": [
      "Cine sunt beneficiarii contractuali trecuți în polița mea curentă de viață?",
      "Este suma asigurată suficientă pentru a acoperi datoria totală la bancă plus cheltuielile familiei pe minim 5 ani?"
    ],
    "disclaimer": "Asigurarea de viață acordă despăgubirea conform beneficiarilor desemnați în scris în formularul de poliță.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-spitalizare-privata-interventie-complexa",
    "slug": "spitalizare-privata-interventie-complexa",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Intervenție chirurgicală complexă pe coloană sau cord într-un spital privat de top",
    "mainQuestion": "Cât te costă operația la o clinică privată renumită dacă refuzi condițiile din spitalele publice?",
    "shortDescription": "O hernie de disc paralizantă sau o valvuloplastie impune operarea imediată de către un chirurg renumit.",
    "situation": "Suferi de o criză acută de hernie de disc lombară cu pareză la picior (deficit motor instalat). Specialistul neurochirurg de la spitalul privat avertizează că întârzierea operației peste 48 de ore poate lăsa sechele motorii definitive. Devizul estimativ pentru operație microscopică minim invazivă, neuromonitorizare intraoperatorie, 4 zile de terapie intensivă și salon privat este de 28.500 RON.",
    "heroImage": "/images/scenarios/travel-medical.jpg",
    "imageCaption": "Spitalele private oferă tehnologie avansată și confort deosebit, dar costurile pachetelor chirurgicale depășesc posibilitățile financiare imediate ale multor pacienți.",
    "severityLabel": "Risc Financiar Medical Ridicat",
    "featured": false,
    "tags": [
      "operatie-coloana",
      "spital-privat",
      "asigurare-sanatate-privata",
      "decontare-directa-medicala",
      "hernie-disc"
    ],
    "illustrativeCost": "Cost pachet chirurgical privat: 22.000 – 55.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare privată de sănătate",
      "statusLabel": "Plată integrală înainte de internare cu cardul personal",
      "financialImpact": "28.500 RON plătiți pe loc sau operație clasică deschisă la stat",
      "points": [
        "Spitalele private cer plata a 50% din deviz în momentul internării și restul la externare.",
        "Dacă nu ai banii lichizi, ești nevoit să mergi la spitalul de stat, acceptând riscurile infecțiilor nosocomiale și timpii lungi de așteptare.",
        "Economiile familiei sunt golite complet pentru a beneficia de o îngrijire medicală modernă."
      ],
      "summary": "Fără asigurare, ești forțat să alegi între securitatea financiară a familiei și calitatea actului chirurgical."
    },
    "withInsurance": {
      "title": "Cu Asigurare Privată de Sănătate (Pachet Chirurgie și Spitalizare Privată)",
      "statusLabel": "Decontare directă 100% cu spitalul partener",
      "financialImpact": "Zero costuri plătite din buzunar (minus eventuala coplată contractuală agreată)",
      "points": [
        "Asigurătorul emite garanția de plată directă (Direct Settlement) către spitalul privat.",
        "Sunt acoperite onorariul echipei chirurgicale, anestezia, materialele sterile, salonul cu însoțitor și medicația.",
        "Ai acces la cei mai buni chirurgi din rețelele private naționale fără stres financiar."
      ],
      "summary": "Beneficiezi de cele mai moderne tehnologii chirurgicale plătite direct prin cardul tău de asigurat."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Perioada de grație la intervenții chirurgicale",
          "detail": "Verifică perioada de așteptare contractuală (uzual 6 – 12 luni pentru operații programate/elective)."
        },
        {
          "label": "Plafonul anual de spitalizare",
          "detail": "Asigură-te că plafonul pentru intervenții chirurgicale este de minim 50.000 – 100.000 RON/an."
        },
        {
          "label": "Rețeaua de spitale partenere",
          "detail": "Verifică dacă spitalul privat dorit se află în rețeaua cu decontare directă a asigurătorului."
        }
      ]
    },
    "immediateSteps": [
      "Solicită medicului chirurg devizul medical estimativ și biletul de trimitere pentru internare chirurgicală.",
      "Transmite documentele la centrul de autorizări medicale al asigurătorului cu cel puțin 3-5 zile înainte de operație.",
      "Obține Scrisoarea de Garanție (Pre-Authorization Letter) emisă direct către spital.",
      "Prezintă cardul de asigurat la biroul de internări al spitalului privat."
    ],
    "usefulDocuments": [
      "Recomandarea medicală de internare chirurgicală cu codul de diagnostic",
      "Investigațiile imagistice (RMN/CT) justificative",
      "Cardul de sănătate și certificatul de asigurare privată"
    ],
    "advisorQuestions": [
      "Care este procedura de autorizare prealabilă pentru operații în rețeaua privată?",
      "Există o coplată din partea mea pentru salonul individual sau medicația post-operatorie?"
    ],
    "disclaimer": "Intervențiile chirurgicale elective sunt supuse aprobării prealabile din partea medicilor asigurătorului conform criteriilor clinice.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-arsuri-grave-explozie-casnica",
    "slug": "arsuri-grave-explozie-casnica",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Arsuri de gradul II și III în urma unei explozii casnice de butelie sau gaz",
    "mainQuestion": "Ce sprijin financiar există pentru grefe de piele, pansamente speciale și terapie de recuperare?",
    "shortDescription": "O acumulare de gaze provoacă o deflagrație cu arsuri pe 25% din suprafața corporală.",
    "situation": "O acumulare insidioasă de gaze într-o bucătărie sau anexă provoacă o explozie la aprinderea luminii. Asiguratul suferă arsuri de gradul II și III pe mâini, torace și față. Necesită internare prelungită la centrul de mari arși, intervenții repetate de debridare chirurgicală și grefe de piele. Tratamentele post-spitalicești (costume compresive pe măsură, creme cicatrizante speciale, kinetoterapie) costă mii de lei lunar și nu sunt decontate de stat.",
    "heroImage": "/images/scenarios/burn-neighbor.jpg",
    "imageCaption": "Tratamentul și reabilitarea marilor arși presupun costuri uriașe pe termen lung pentru prevenirea cicatricilor retractile.",
    "severityLabel": "Traumatism Grav și Recuperare Costisitoare",
    "featured": false,
    "tags": [
      "arsuri-grave",
      "explozie-gaz",
      "spitalizare-mari-arsi",
      "grefe-piele",
      "recuperare-arsuri"
    ],
    "illustrativeCost": "Costuri pansamente speciale + costume compresive + recuperare: 40.000 – 110.000 RON",
    "withoutInsurance": {
      "title": "Doar sistemul public de sănătate",
      "statusLabel": "Consumabilele speciale și pansamentele moderne plătite de familie",
      "financialImpact": "Mii de lei lunar cheltuiți din economii timp de 1-2 ani",
      "points": [
        "Spitalele publice oferă tratamentul acut, dar pansamentele moderne cu ioni de argint și costumele compresive se cumpără adesea privat.",
        "Operațiile estetice de corecție a cicatricilor deformante nu sunt considerate urgențe vitale și nu sunt finanțate de CNAS.",
        "Familia suportă o povară financiară imensă pe durata anilor de reabilitare."
      ],
      "summary": "Recuperarea funcțională și estetică după arsuri severe impune cheltuieli personale continue."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Accidente cu Clauză de Arsuri Grave & Invaliditate Permanentă",
      "statusLabel": "Capital forfetar garantat la stabilirea procentului de arsură",
      "financialImpact": "Plată de 50.000 – 150.000 RON plătită direct asiguratului",
      "points": [
        "Polița plătește un procent fix din suma asigurată corespunzător gradului și suprafeței corporale arse.",
        "Banii sunt virați direct pacientului și pot fi utilizați pentru chirurgie plastică reconstructivă privată sau clinici de arși din străinătate.",
        "Sunt asigurate indemnizațiile zilnice de spitalizare pentru fiecare zi petrecută la ATI/Salon de arși."
      ],
      "summary": "Pacientul are fondurile necesare pentru a accesa cele mai bune tratamente dermatologice și chirurgicale."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Tabelul de indemnizații pentru arsuri",
          "detail": "Verifică grila procentuală: de exemplu, arsuri gr. III pe peste 20% din corp acordă de regulă 100% din suma asigurată."
        },
        {
          "label": "Chirurgia estetică reconstructivă",
          "detail": "Asigură-te că polița acoperă intervențiile estetice necesare restabilirii funcționale după accident."
        }
      ]
    },
    "immediateSteps": [
      "Prioritatea absolută este transportul de urgență la Spitalul de Urgență / Clinica de Mari Arși.",
      "Obține raportul medical detaliat cu suprafața și gradul arsurilor (Regula celor 9 a lui Wallace).",
      "Deschide dosarul la asigurătorul de viață/accidente.",
      "Păstrează toate prescripțiile pentru tratamente cicatrizante și costume compresive."
    ],
    "usefulDocuments": [
      "Foaia de observație clinică și protocolul de externare de la centrul de arși",
      "Fotografiile medicale din dosarul clinic",
      "Polița de asigurare de accidente"
    ],
    "advisorQuestions": [
      "Cum se calculează indemnizația pentru arsuri grave în contractul meu?",
      "Sunt decontate intervențiile de chirurgie plastică reparatorie efectuate în clinici private?"
    ],
    "disclaimer": "Asigurarea de accidente oferă compensație financiară pe baza baremului medical stabilit contractual.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-stomatologie-urgenta-traumatism-dentar-copil",
    "slug": "stomatologie-urgenta-traumatism-dentar-copil",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Traumatism dentar la locul de joacă: copilul își sparge dinții definitivi din față",
    "mainQuestion": "Ce asigurare acoperă reconstrucția estetică, pivotul și implanturile dentare ale unui copil după o căzătură?",
    "shortDescription": "O cădere de pe leagăn se soldează cu pierderea a doi incisivi centrali superiori permanenți.",
    "situation": "Copilul tău de 9 ani cade de pe un leagăn în parc și se lovește cu gura de bara metalică. Doi dinți definitivi (incisivi centrali superiori) sunt fracturați până la rădăcină cu afectarea nervului. Intervenția de urgență impune extirparea nervului, reconstrucții pe pivot de fibră de sticlă, coroane temporare și coroane definitive din zirconiu ceramic. Costul total al planului de tratament la clinica privată de stomatologie pediatrică atinge 9.500 RON.",
    "heroImage": "/images/scenarios/guest-injury-home.jpg",
    "imageCaption": "Stomatologia pediatrică de urgență nu este practic decontată în sistemul de stat din România la standardele estetice moderne.",
    "severityLabel": "Traumă Estetică și Cost Stomatologic",
    "featured": false,
    "tags": [
      "traumatism-dentar",
      "dinti-sparti-copil",
      "stomatologie-urgenta",
      "implant-zirconiu",
      "asigurare-sanatate-copii"
    ],
    "illustrativeCost": "Tratament stomatologic complet de reconstrucție: 6.000 – 16.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de sănătate cu modul dentar de accident",
      "statusLabel": "Părintele achită 100% din veniturile proprii",
      "financialImpact": "Mii de lei plătiți la fiecare ședință stomatologică privată",
      "points": [
        "Cabinetele dentare de stat nu dispun de materialele compozite moderne de estetică dentară pediatrică.",
        "Plafonul lunar CNAS la medicii dentiști privați se epuizează în primele 2 zile ale lunii.",
        "Părintele suportă toate costurile pe parcursul lunilor de tratamente și controale."
      ],
      "summary": "Refacerea zâmbetului copilului devine o cheltuială apăsătoare din bugetul familiei."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Sănătate / Accidente Copii (Clauza de Traumatism Dentar din Accident)",
      "statusLabel": "Decontare directă a tratamentelor stomatologice restorative",
      "financialImpact": "Zero costuri sau aplicarea unei franșize mici",
      "points": [
        "Traumatismele dentare produse exclusiv din cauză de accident exterior sunt acoperite în limita a 1.000 – 3.000 EUR.",
        "Sunt decontate radiografiile dentare, tratamentele de canal, pivotul și coroanele integral ceramice.",
        "Copilul beneficiază de tratamente nedureroase cu cele mai bune materiale estetice."
      ],
      "summary": "Zâmbetul copilului este refăcut perfect fără ca părinții să fie puși în dificultate financiară."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Accident vs Carii",
          "detail": "Polițele acoperă stomatologia dentară cauzată strict de un traumatism/lovitură externă, nu cariile sau parodontopatiile preexistente."
        },
        {
          "label": "Termenul de inițiere a tratamentului",
          "detail": "Tratamentul trebuie început de regulă în maximum 7 – 14 zile de la data producerii accidentului."
        }
      ]
    },
    "immediateSteps": [
      "Găsește fragmentele de dinte spart dacă este posibil și păstrează-le în ser fiziologic sau lapte rece.",
      "Mergi de urgență la o clinică stomatologică non-stop pentru toaleta plăgii și protejarea nervului.",
      "Solicită medicului dentist completarea fișei clinice cu mențiunea expresă a traumatismului mecanic.",
      "Transmite dosarul la asigurătorul de sănătate/accidente."
    ],
    "usefulDocuments": [
      "Radiografia dentară inițială (ortopantomogramă sau retroalveolară)",
      "Fișa de tratament stomatologic și devizul de plată",
      "Polița de asigurare de sănătate a copilului"
    ],
    "advisorQuestions": [
      "Ce sumă asigurată este alocată pentru refacerea dinților distruși în accident?",
      "Sunt acoperite coroanele din zirconiu pentru dinții frontali ai minorilor?"
    ],
    "disclaimer": "Acoperirea dentară din accident exclude afecțiunile dentare degenerative preexistente.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-avc-reabilitare-neurologica-termen-lung",
    "slug": "avc-reabilitare-neurologica-termen-lung",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Accident Vascular Cerebral (AVC) la 45 de ani: nevoie de reabilitare neurologică intensivă",
    "mainQuestion": "Cum susții financiar 12 luni de kinetoterapie, logopedie și asistență permanentă la domiciliu?",
    "shortDescription": "Un AVC ischemic provoacă hemipareză dreaptă și afazie, impunând recuperare neurologică de specialitate.",
    "situation": "Un antreprenor sau manager activ de 45 de ani suferă un accident vascular cerebral ischemic acut. Este salvat prin tromboliză la spitalul de urgență, dar rămâne cu hemipareză pe partea dreaptă și dificultăți de vorbire. Pentru a-și recăpăta mobilitatea și capacitatea de a vorbi, are nevoie de un program intensiv de reabilitare neurologică într-un centru privat specializat (cost de 12.000 – 18.000 RON pe lună) timp de cel puțin 6 luni.",
    "heroImage": "/images/scenarios/serious-diagnosis.jpg",
    "imageCaption": "Reabilitarea neurologică după AVC în centre private moderne oferă șanse reale de recuperare a independenței motorii, dar costurile lunare sunt prohibitive fără asigurare.",
    "severityLabel": "Risc de Invaliditate și Costuri de Reabilitare",
    "featured": true,
    "tags": [
      "accident-vascular-cerebral",
      "avc-recuperare",
      "kinetoterapie-neurologica",
      "boala-grava",
      "afazie"
    ],
    "illustrativeCost": "Costuri reabilitare neurologică 6-12 luni: 70.000 – 180.000 RON",
    "withoutInsurance": {
      "title": "Doar cele 21 de zile decontate de stat la spitale de recuperare",
      "statusLabel": "Statul decontează doar câteva săptămâni de terapie",
      "financialImpact": "Epuizarea completă a economiilor sau abandonarea recuperării",
      "points": [
        "Sistemul public CNAS decontează un număr strict limitat de zile de recuperare pe an, complet insuficiente pentru refacerea neuroplastică.",
        "Familia este nevoită să renunțe la job pentru a deveni îngrijitor cu normă întreagă sau să plătească asistenți la negru.",
        "Fără terapie intensivă în primele 6 luni de la AVC („fereastra de aur”), deficitele motorii devin ireversibile."
      ],
      "summary": "Lipsa banilor lichizi condamnă un adult tânăr la invaliditate permanentă într-un scaun cu rotile."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare pentru Boli Critice & Invaliditate Permanentă",
      "statusLabel": "Capital forfetar de 150.000 – 300.000 RON virat direct în cont",
      "financialImpact": "Finanțare completă a celor mai bune clinici de recuperare neuro-motorie",
      "points": [
        "AVC-ul este boală critică principală în toate polițele: întreaga sumă asigurată este plătită în cont la confirmarea neurologică.",
        "Familia poate interna pacientul în clinici de elită de recuperare neurologică (ex. clinici private din România sau Austria/Elveția).",
        "Sunt asigurate dispozitivele medicale robotizate de mers și logopedia intensivă."
      ],
      "summary": "Pacientul beneficiază de cea mai performantă terapie din lume, recăpătându-și independența și demnitatea."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Definiția AVC în contract",
          "detail": "Asigură-te că include AVC-ul ischemic și hemoragic care a lăsat sechele neurologice permanente documentate la 30-90 de zile."
        },
        {
          "label": "Suma asigurată recomandată",
          "detail": "Alege o sumă de cel puțin 150.000 – 250.000 RON pentru a acoperi 1-2 ani de tratament intensiv."
        }
      ]
    },
    "immediateSteps": [
      "Urmează protocolul acut medical și obține RMN-ul cerebral și scrisoarea medicală de externare de la secția de neurologie.",
      "Avizează dosarul de boală gravă la compania de asigurări transmițând documentele medicale.",
      "Încasează capitalul asigurat în contul familiei.",
      "Rezervă locul în centrul de reabilitare neurologică specializat."
    ],
    "usefulDocuments": [
      "Raportul imagistic RMN cerebral cu evidențierea ariei de infarctizare ischemică",
      "Biletul de externare neurologică cu scala de deficit neurologic (Rankin / NIHSS)",
      "Polița de asigurare de viață/boli critice"
    ],
    "advisorQuestions": [
      "În cât timp de la diagnostic se virează capitalul asigurat pentru AVC?",
      "Ce documente neurologice sunt cerute de medicul asigurătorului pentru lichidarea dosarului?"
    ],
    "disclaimer": "Recuperarea neurologică post-AVC necesită diagnosticare precoce și asistență medicală specializată susținută.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "viata-coma-terapie-intensiva-septicemie",
    "slug": "coma-terapie-intensiva-septicemie",
    "categoryId": "viata-sanatate",
    "categoryName": "SĂNĂTATE & VIAȚĂ",
    "title": "Comă prelungită și 30 de zile de Terapie Intensivă (ATI) în urma unei infecții severe",
    "mainQuestion": "Ce indemnizație financiară primește familia pentru susținerea cheltuielilor colaterale pe durata comei?",
    "shortDescription": "O pneumonie severă complicată cu șoc septic impune ventilație mecanică invazivă timp de 4 săptămâni.",
    "situation": "Un adult de 40 de ani, fără antecedente medicale semnificative, dezvoltă o pneumonie bacteriană fulgerătoare care evoluează rapid în șoc septic și insuficiență multiplă de organe. Este internat de urgență la Terapie Intensivă (ATI), intubat și plasat în comă indusă medicamentos timp de 28 de zile. Familia suportă cheltuieli masive cu medicamente de linie a treia neacoperite în spital, transportul zilnic și pierderea completă a veniturilor familiei.",
    "heroImage": "/images/scenarios/serious-diagnosis.jpg",
    "imageCaption": "Spitalizarea prelungită la Terapie Intensivă induce un stres financiar extrem asupra aparținătorilor prin prăbușirea veniturilor curente.",
    "severityLabel": "Stare Critică și Spitalizare Prelungită",
    "featured": false,
    "tags": [
      "terapie-intensiva",
      "coma-prelungita",
      "soc-septic",
      "indemnizatie-spitalizare-ati",
      "asigurare-sanatate"
    ],
    "illustrativeCost": "Cheltuieli conexe familie + pierdere venituri: 25.000 – 60.000 RON",
    "withoutInsurance": {
      "title": "Doar spitalizarea gratuită de stat",
      "statusLabel": "Statul asigură patul de ATI, dar familia este destabilizată financiar",
      "financialImpact": "Deficit bugetar sever și imposibilitatea achitării ratelor",
      "points": [
        "Concediul medical este plafonat și se plătește cu întârziere de către angajator/stat.",
        "Familia trebuie să facă față ratelor bancare și cheltuielilor zilnice fără venitul principal al casei.",
        "Recuperarea post-ATI necesită luni de kinetoterapie respiratorie și nutriție enterală specializată."
      ],
      "summary": "Perioada critică de ATI lasă familia epuizată emoțional și cu datorii acumulate."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Sănătate / Accidente cu Clauză de Spitalizare la Terapie Intensivă (ATI)",
      "statusLabel": "Dublarea indemnizației zilnice pentru zilele petrecute la Terapie Intensivă",
      "financialImpact": "Plată forfetară garantată de 500 – 1.000 RON pe fiecare zi de ATI",
      "points": [
        "Polița plătește o sumă generoasă fixă pentru fiecare 24 de ore petrecute în secția de Anestezie-Terapie Intensivă.",
        "Pentru 28 de zile de ATI, familia încasează între 14.000 și 28.000 RON lichizi neimpozabili.",
        "Banii ajută la plata ratelor și la susținerea familiei până când pacientul se trezește și începe recuperarea."
      ],
      "summary": "Familia este protejată financiar în cele mai grele momente de incertitudine medicală."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Multiplicatorul pentru Terapie Intensivă (ATI)",
          "detail": "Verifică dacă indemnizația zilnică standard se dublează sau se triplează pentru secția de reanimare/ATI."
        },
        {
          "label": "Perioada maximă decontată",
          "detail": "Asigură-te că polița acoperă cel puțin 30 – 90 de zile de spitalizare continuă."
        }
      ]
    },
    "immediateSteps": [
      "Aparținătorul legal (soțul/soția) notifică asigurătorul de viață/sănătate privind internarea la ATI.",
      "Solicită medicului șef de secție ATI o adeverință medicală privind data internării și starea critică a pacientului.",
      "Transmite documentele pentru activarea indemnizației zilnice.",
      "Încasează sumele direct în contul bancar al familiei."
    ],
    "usefulDocuments": [
      "Adeverința medicală de spitalizare în secția ATI cu diagnosticul de șoc septic/comă",
      "Foaia de observație clinică",
      "Polița de asigurare de sănătate/viață"
    ],
    "advisorQuestions": [
      "Ce indemnizație zilnică se acordă pentru fiecare zi de internare la Terapie Intensivă?",
      "Poate soțul/soția să depună actele în numele asiguratului aflat în comă?"
    ],
    "disclaimer": "Indemnizația de spitalizare ATI se acordă conform grilei contractuale în baza foii oficiale de observație medicală.",
    "lastReviewed": "Octombrie 2026"
  }
];
