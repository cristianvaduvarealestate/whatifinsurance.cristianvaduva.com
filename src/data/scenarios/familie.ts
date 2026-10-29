import { Scenario } from '@/types/scenario';

export const familieScenarios: Scenario[] = [
  {
    "id": "familie-valiza-deteriorata-aeroport-transport",
    "slug": "valiza-deteriorata-aeroport-transport",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "Geamantan de firmă de 1.000 EUR rupt și deformat pe banda de bagaje",
    "mainQuestion": "Ce despăgubire primești de la compania aeriană dacă valiza ta premium este distrusă la descărcare?",
    "shortDescription": "O carcasă din policarbonat sau aluminiu Rimowa fisurată și roțile smulse de manipularea dură.",
    "situation": "Călătorești cu avionul folosind o valiză scumpă din policarbonat sau aluminiu evaluată la 4.500 RON. Când geamantanul iese pe banda de bagaje la sosire, constați că o roată a fost smulsă din șasiu, carcasa este crăpată adânc pe 20 cm, iar fermoarul este forțat. Valiza nu mai poate fi folosită sau reparată. Compania aeriană oferă un voucher de 50 EUR sau o valiză promoțională ieftină din poliester fără valoare de brand.",
    "heroImage": "/images/scenarios/lost-luggage.jpg",
    "imageCaption": "Deteriorarea fizică a bagajelor premium este acoperită prin clauze specifice de bagaje în polițele extinse de călătorie.",
    "severityLabel": "Daună Materială Personală",
    "featured": false,
    "tags": [
      "valiza-deteriorata",
      "rimowa-avarie",
      "banda-bagaje",
      "lost-found",
      "asigurare-calatorie-bagaj"
    ],
    "illustrativeCost": "Valoare valiză premium: 2.500 – 6.000 RON",
    "withoutInsurance": {
      "title": "Doar reclamația la compania aeriană la ghișeu",
      "statusLabel": "Oferte derizorii de înlocuire cu produse low-cost",
      "financialImpact": "Pierdere de mii de lei din valoarea bagajului de calitate",
      "points": [
        "Companiile aeriene susțin adesea că uzura exterioară sau mânerele rupte reprezintă uzură normală de manipulare.",
        "Despăgubirea bănească acordată de companii pentru valize vechi de peste un an este diminuată masiv prin cote de amortizare.",
        "Trebuie să cumperi o nouă valiză din banii personali pentru a-ți continua călătoria."
      ],
      "summary": "Investiția într-o valiză de calitate superioară este pierdută în fața procedurilor aeriene standard."
    },
    "withInsurance": {
      "title": "Cu poliță de călătorie cu clauză de deteriorare bagaje",
      "statusLabel": "Despăgubire la valoarea reală de achiziție/înlocuire",
      "financialImpact": "Recuperezi contravaloarea valizei pe baza formularului PIR",
      "points": [
        "Asigurătorul preia diferența neacoperită de linia aeriană până la valoarea reală din factura de cumpărare a valizei.",
        "Despăgubirea este virată direct în contul tău bancar fără să fii obligat să accepți un produs ieftin de la ghișeu.",
        "Procedura este simplă și rapidă în baza fotografiilor făcute direct la aeroport."
      ],
      "summary": "Îți cumperi o nouă valiză din aceeași clasă premium pe cheltuiala asigurării."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Formularul PIR (Damage Report)",
          "detail": "Condiție eliminatorie: trebuie să completezi raportul de deteriorare la biroul din aeroport ÎNAINTE de a părăsi zona benzilor de bagaje."
        },
        {
          "label": "Sublimita pentru bagajul în sine",
          "detail": "Verifică dacă suma asigurată de bagaje acoperă atât conținutul, cât și valoarea fizică a geamantanului."
        }
      ]
    },
    "immediateSteps": [
      "Nu părăsi zona de recuperare a bagajelor fără a merge la ghișeul Baggage Claim.",
      "Solicită agentului întocmirea formularului PIR pentru bagaj deteriorat (Damaged Baggage Report).",
      "Fotografiază eticheta de bagaj (baggage tag) și toate fisurile valizei direct pe căruciorul aeroportului.",
      "Transmite documentele la asigurătorul tău de călătorie."
    ],
    "usefulDocuments": [
      "Raportul PIR emis la aeroport",
      "Talonul de bagaj atașat pe biletul de avion",
      "Factura inițială de cumpărare a valizei"
    ],
    "advisorQuestions": [
      "Ce sumă maximă decontează asigurătorul pentru o valiză deteriorată ireversibil?",
      "Pot achiziționa o nouă valiză imediat la destinație și trimite factura spre decontare?"
    ],
    "disclaimer": "Constatarea deteriorării bagajului trebuie făcută obligatoriu înainte de ieșirea din zona vamală a aeroportului.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "familie-copac-curte-distruge-foisor-gard-furtuna",
    "slug": "copac-curte-distruge-foisor-gard-furtuna",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "Un nuc secular din curte se prăbușește peste foișor și mașina parcată",
    "mainQuestion": "Ce asigurare plătește tăierea copacului uriaș, refacerea grădinii și mașina strivită?",
    "shortDescription": "Vântul puternic smulge din rădăcini un arbore de 15 metri care strivește acoperișul foișorului și capota.",
    "situation": "În curtea casei tale se află un nuc mare cu coroană bogată. În timpul unei furtuni de cod portocaliu cu vânt de peste 85 km/h, pământul îmbibat de apă cedează, iar arborele este smuls din rădăcini. Trunchiul gros de 80 cm se prăbușește peste foișorul din curte, distrugând structura din lemn și grătarul de cărămidă, iar coroana grea strivește pavilionul mașinii parcate pe aleea de acces.",
    "heroImage": "/images/scenarios/garden-tree-fall.jpg",
    "imageCaption": "Căderea arborilor pe proprietate privată ridică necesitatea combinării poliței facultative de locuință cu polița CASCO a autovehiculului.",
    "severityLabel": "Daună Mixtă Casă și Auto",
    "featured": true,
    "tags": [
      "copac-cazut-curte",
      "foisor-distrus",
      "casco-copac",
      "asigurare-gradina",
      "degajare-arbore"
    ],
    "illustrativeCost": "Cost tăiere arbore + refacere foișor + mașină: 35.000 – 85.000 RON",
    "withoutInsurance": {
      "title": "Fără polițe facultative corelate (Doar PAD obligatoriu)",
      "statusLabel": "Toate cheltuielile suportate integral de familie",
      "financialImpact": "Zeci de mii de lei cheltuiți din economii",
      "points": [
        "Polița PAD obligatorie NU acoperă anexele gospodărești (foișor, gard) și nici căderea de arbori din motive de furtună.",
        "Costul unei echipe de alpiniști utilitari și macarale pentru debitarea și transportul unui arbore masiv depășește 3.000 – 5.000 RON.",
        "Mașina strivită fără CASCO rămâne o pierdere personală totală."
      ],
      "summary": "O noapte de furtună lasă în urmă o curte ruinată și cheltuieli uriașe de refacere."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Grădină și Anexe) + CASCO Auto",
      "statusLabel": "Decontare integrală a operațiunilor de degajare și reconstrucție",
      "financialImpact": "Curte curățată și foișor reconstruit pe cheltuiala asigurătorilor",
      "points": [
        "Polița de locuință decontează costul intervenției de tăiere, evacuare a lemnului și refacere a foișorului.",
        "Sunt acoperite refacerea pavajului, a gazonului și a împrejmuirilor deteriorate.",
        "Polița CASCO preia reparația mașinii pe riscul standard de „Cădere de corpuri / Fenomene naturale”."
      ],
      "summary": "Tot efortul logistic greu și costurile financiare sunt preluate eficient prin cele două polițe."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de anexe și amenajări exterioare",
          "detail": "Asigură-te că foișorul, magaziile și mobilierul de grădină sunt cuprinse explicit în suma asigurată a locuinței."
        },
        {
          "label": "Costurile de curățare și degajare (Debris Removal)",
          "detail": "Verifică dacă asigurătorul plătește separat manopera de debitare și transport a trunchiului căzut."
        }
      ]
    },
    "immediateSteps": [
      "Nu te apropia de arbore dacă acesta a atins fire electrice de joasă sau medie tensiune (apelează 112 și distribuitorul de energie).",
      "Fotografiază detaliat rădăcina smulsă, foișorul strivit și mașina înainte de orice intervenție.",
      "Apelează serviciul de asistență de urgență al poliței de locuință pentru trimiterea unei echipe de intervenție.",
      "Avizează dosarul de daună la locuință și la CASCO."
    ],
    "usefulDocuments": [
      "Polița facultativă de locuință și polița CASCO",
      "Fotografii martor de la fața locului din mai multe unghiuri",
      "Facturile de debitare și transport al materialului lemnos"
    ],
    "advisorQuestions": [
      "Sunt acoperite cheltuielile pentru închirierea macaralei de degajare a arborelui căzut?",
      "Care este limita de despăgubire pentru amenajările peisagistice și foișoarele de grădină?"
    ],
    "disclaimer": "Proprietarii au obligația de a toaleta arborii uscați sau periculoși pentru a preveni prăbușirea lor la vânt moderat.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "familie-animal-companie-inghite-corp-strain-operatie",
    "slug": "animal-companie-inghite-corp-strain-operatie",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "Câinele familiei înghite o jucărie sau o șosetă: operație veterinară de urgență",
    "mainQuestion": "Ce faci dacă salvarea vieții animalului tău de companie impune o operație veterinară de 6.000 RON?",
    "shortDescription": "Ocluzia intestinală acută necesită endoscopie chirurgicală și 4 zile de spitalizare la clinica veterinară privată.",
    "situation": "Câinele familiei (un Golden Retriever jucăuș de 2 ani) înghite o minge de cauciuc sau o șosetă în timp ce se joacă în casă. După 24 de ore de vărsături continue și letargie, ecografia și radiografia cu bariu la clinica veterinară de urgență confirmă un blocaj intestinal complet. Medicul chirurg avertizează că întârzierea operației va duce la necroză de intestin și deces. Costul chirurgiei de urgență, anesteziei inhalatorii și al terapiei intensive veterinare atinge 6.500 RON.",
    "heroImage": "/images/scenarios/pet-damage.jpg",
    "imageCaption": "Medicina veterinară modernă pentru animale de companie folosește tehnologii chirurgicale de vârf, dar tarifele clinice se achită integral privat.",
    "severityLabel": "Urgență Veterinară și Cost Imediat",
    "featured": false,
    "tags": [
      "animal-companie",
      "operatie-caine",
      "veterinar-urgenta",
      "asigurare-animale-pet",
      "ocluzie-intestinala"
    ],
    "illustrativeCost": "Cost chirurgie veterinară + spitalizare: 4.500 – 9.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de sănătate pentru animale de companie (Pet Insurance)",
      "statusLabel": "Stăpânul achită 100% din veniturile familiei",
      "financialImpact": "Plată de mii de lei pe loc la recepția clinicii",
      "points": [
        "Nu există niciun sistem public de asigurări pentru animale de companie în România; orice act medical veterinar este privat.",
        "Multe familii sunt puse în fața unei alegeri sfâșietoare între bugetul casei și viața companionului drag.",
        "Economiile de vacanță ale familiei sunt epuizate într-o singură noapte de urgență."
      ],
      "summary": "Urgențele veterinare grave impun plăți mari care destabilizează finanțele familiei."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Sănătate pentru Animale de Companie (Pet Insurance)",
      "statusLabel": "Decontare integrală a intervențiilor chirurgicale de urgență",
      "financialImpact": "Plata a 80 – 90% din factura veterinară preluată de asigurător",
      "points": [
        "Polița acoperă intervențiile chirurgicale de urgență provocate de accidente și ingerare de corpi străini.",
        "Sunt decontate investigațiile imagistice (radiografii, ecografii), analizele de sânge și salonul de terapie intensivă.",
        "Animalul este salvat fără ca stăpânii să fie stresați de costul facturilor medicale."
      ],
      "summary": "Iubirea pentru animalul de companie este dublată de o plasă de siguranță financiară responsabilă."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Vârsta maximă de asigurare a animalului",
          "detail": "Polițele acceptă de regulă câini și pisici cu vârsta între 3 luni și 7-8 ani la intrarea în asigurare."
        },
        {
          "label": "Carnetul de sănătate și vaccinurile",
          "detail": "Animalul trebuie să aibă microcip înregistrat în RECS și toate vaccinările anuale obligatorii la zi."
        }
      ]
    },
    "immediateSteps": [
      "Transportă imediat animalul la cea mai apropiată clinică veterinară dotată cu laborator și secție de chirurgie.",
      "Cere medicului veterinar completarea fișei clinice de urgență cu diagnosticul exact.",
      "Păstrează toate facturile, chitanțele și imaginile radiologice.",
      "Transmite cererea de decontare către compania de asigurări."
    ],
    "usefulDocuments": [
      "Fișa clinică veterinară și protocolul operator",
      "Factura fiscală detaliată și chitanța de plată din clinică",
      "Carnetul de sănătate cu seria microcipului"
    ],
    "advisorQuestions": [
      "Include polița mea de animale de companie intervențiile de urgență pentru ingerare de obiecte străine?",
      "Care este plafonul anual de decontare veterinară per animal asigurat?"
    ],
    "disclaimer": "Asigurarea pentru animale de companie impune îngrijirea responsabilă a companionului și menținerea vaccinărilor periodice.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "familie-firma-mutari-deterioreaza-mobilier-scump",
    "slug": "firma-mutari-deterioreaza-mobilier-scump",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "Firma de mutări scapă pe scări și distruge o bibliotecă din lemn masiv de nuc",
    "mainQuestion": "Ce despăgubire poți obține dacă manipulatorii neatenți sparg o piesă de mobilier de design?",
    "shortDescription": "O piesă de colecție din lemn nobil este izbită de balustradă, suferind fisuri structurale ireversibile.",
    "situation": "Te muți într-o casă nouă și angajezi o firmă de relocări. În timp ce coboară pe scările înguste ale blocului o bibliotecă artizanală din lemn masiv de nuc evaluată la 18.000 RON, manipulatorii pierd controlul. Piesa cade două etaje pe casa scării, rupându-și picioarele sculptate și fețele de uși din sticlă cristalizată. Șoferul susține că firma răspunde doar cu 200 de lei conform contractului standard de cărăușie.",
    "heroImage": "/images/scenarios/art-damage.jpg",
    "imageCaption": "Contractele uzuale ale transportatorilor locali de mobilă limitează răspunderea la sume modice dacă nu este încheiată o asigurare cargo/all-risks.",
    "severityLabel": "Pierdere Materială la Relocare",
    "featured": false,
    "tags": [
      "mutare-locuinta",
      "mobilier-distrus",
      "firma-mutari",
      "asigurare-bunuri-tranzit",
      "dauna-transport"
    ],
    "illustrativeCost": "Valoare mobilier distrus: 12.000 – 25.000 RON",
    "withoutInsurance": {
      "title": "Doar contractul de transport de bază",
      "statusLabel": "Despăgubire simbolică de câteva sute de lei",
      "financialImpact": "Pierdere financiară de mii de euro suportată personal",
      "points": [
        "Transportatorii mici nu au polițe profesionale și invocă limita de răspundere per kilogram de mobilă.",
        "Un proces civil împotriva unui SRL fără active durează ani și implică onorarii de avocați.",
        "Bucuria mutării în casa nouă este umbrită de pierderea unei piese de suflet."
      ],
      "summary": "Fără asigurare de bunuri în tranzit, mobilierul deteriorat de cărăuși rămâne o pierdere asumată."
    },
    "withInsurance": {
      "title": "Cu poliță facultativă de Locuință (Clauza de Bunuri pe durata Relocării / Goods in Transit)",
      "statusLabel": "Despăgubire completă la valoarea reală de înlocuire",
      "financialImpact": "Contravaloarea mobilierului despăgubită de asigurător",
      "points": [
        "Polițele complete de locuință oferă acoperire automată pentru bunurile asigurate pe o durată de 30 de zile pe durata schimbării domiciliului.",
        "Sunt decontate daunele produse de cădere, manipulare defectuoasă sau răsturnare a vehiculului pe traseu.",
        "Mobilierul este restaurat profesional sau despăgubit integral."
      ],
      "summary": "Relocarea familiei se derulează în deplină siguranță financiară."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de schimbare a domiciliului",
          "detail": "Verifică dacă asigurarea ta de locuință acoperă automat bunurile transportate către noua adresă declarată."
        },
        {
          "label": "Fotografii înainte de împachetare",
          "detail": "Fă întotdeauna fotografii clare ale fiecărei piese înainte de ridicarea de către echipa de mutări."
        }
      ]
    },
    "immediateSteps": [
      "Notează pe avizul de însoțire a mărfii sau pe foaia de recepție dauna exactă produsă.",
      "Nu permite echipei de mutări să arunce fragmentele sparte din lemn.",
      "Fotografiază piesa avariată și locul căderii pe casa scării.",
      "Deschide dosarul la compania ta de asigurări de locuință."
    ],
    "usefulDocuments": [
      "Documentul de transport semnat cu mențiunea daunelor",
      "Factura inițială de achiziție a piesei de mobilier",
      "Polița de asigurare facultativă de locuință"
    ],
    "advisorQuestions": [
      "Include polița mea acoperire pentru daune produse de firmele de mutări în timpul transportului?",
      "Care este procedura de evaluare a mobilierului artizanal vechi?"
    ],
    "disclaimer": "Acoperirea bunurilor pe durata mutării necesită notificarea prealabilă a noii adrese către asigurător.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "familie-bicicleta-electrica-furata-boxa-bloc",
    "slug": "bicicleta-electrica-furata-boxa-bloc",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "E-bike de 18.000 RON furat din boxa securizată a blocului",
    "mainQuestion": "Ce asigurare îți plătește bicicleta electrică dacă ușa boxei de la subsol a fost forțată cu ranga?",
    "shortDescription": "Hoții taie grilajul de siguranță și pleacă cu bicicleta de munte asistată electric.",
    "situation": "Păstrezi o bicicletă electrică de munte (E-MTB) de ultimă generație în boxa privată de la subsolul imobilului. Într-un weekend prelungit, ușa metalică a boxei este forțată cu ranga, iar antifurtul din oțel călit este tăiat cu polizorul unghiular pe baterie. Bicicleta în valoare de 18.500 RON dispare fără urmă. Poliția constată efracția calificată.",
    "heroImage": "/images/scenarios/stolen-bicycle.jpg",
    "imageCaption": "Bicicletele electrice de mare valoare necesită clauze speciale de bunuri mobile asigurate în anexe gospodărești.",
    "severityLabel": "Furt prin Efracție",
    "featured": false,
    "tags": [
      "bicicleta-electrica",
      "furt-boxa",
      "efractie-subsol",
      "asigurare-bicicleta",
      "bunuri-anexe"
    ],
    "illustrativeCost": "Valoare bicicletă furată: 14.000 – 22.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de locuință cu clauză de bunuri în anexe",
      "statusLabel": "Pierdere financiară de 100%",
      "financialImpact": "Pierderea a 18.500 RON fără despăgubire",
      "points": [
        "Polițele standard de apartament limitează furtul din boxe la maximum 2.000 – 3.000 RON pe dosar.",
        "Asociația de proprietari nu răspunde pentru bunurile individuale depozitate în subsol.",
        "Ești nevoit să suporți integral pierderea bicicletei din fonduri personale."
      ],
      "summary": "Absența unei clauze adecvate de efracție transformă furtul într-o gaură de mii de euro."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Bunuri de Mare Valoare în Anexe)",
      "statusLabel": "Despăgubire integrală aprobată pe baza seriilor de cadru",
      "financialImpact": "Recuperare a sumei asigurate minus franșiza agreată",
      "points": [
        "Polița acoperă furtul prin efracție din anexele declarate ale imobilului.",
        "Bicicleta declarată cu serie de cadru este despăgubită la valoarea de factură/înlocuire.",
        "Primești fondurile necesare pentru cumpărarea unei noi biciclete."
      ],
      "summary": "E-bike-ul tău este asigurat chiar și atunci când este depozitat în spațiile anexe ale blocului."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Urme evidente de forțare",
          "detail": "Asigurătorul cere ca boxa să fi fost încuiată și să existe urme materiale vizibile de efracție consemnate de poliție."
        },
        {
          "label": "Declararea seriilor de șasiu",
          "detail": "Bicicletele scumpe trebuie să aibă seria de cadru menționată în contract sau pe factura de cumpărare."
        }
      ]
    },
    "immediateSteps": [
      "Nu atinge ușa forțată și sună imediat la 112 pentru cercetarea criminalistică.",
      "Pregătește factura de achiziție a bicicletei și seria de cadru (Frame Number).",
      "Obține de la Poliție adeverința de înregistrare a plângerii de furt calificat.",
      "Transmite dosarul de daună către asigurător."
    ],
    "usefulDocuments": [
      "Dovada eliberată de Secția de Poliție (Furt prin efracție)",
      "Factura fiscală și cartea tehnică a bicicletei electrice",
      "Polița facultativă de locuință"
    ],
    "advisorQuestions": [
      "Ce plafon de despăgubire oferă polița mea pentru biciclete depozitate în boxa subsolului?",
      "Este necesară legarea bicicletei de un punct fix ancorat în perete?"
    ],
    "disclaimer": "Polițele de locuință condiționează despăgubirea de asigurarea încuietorilor de securitate ale boxei.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "familie-panouri-solare-gradina-deteriorate-furtuna",
    "slug": "panouri-solare-gradina-deteriorate-furtuna",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "Sistem fotovoltaic montat la sol în grădină distrus de o vijelie cu vijelie puternică",
    "mainQuestion": "Ce poliță plătește dacă structura metalică a panourilor solare din curte este smulsă de vânt?",
    "shortDescription": "Rafalele de 90 km/h răstoarnă cadrele fotovoltaice din curte, spărgând 16 panouri monocristaline.",
    "situation": "Ai instalat un sistem de 10 kW de panouri fotovoltaice pe o structură metalică la sol în fundul grădinii. O furtună violentă de vară cu aspect tornadic smulge ancorele din pământ și răstoarnă întregul șir de panouri. Cablurile solare de curent continuu sunt sfâșiate, sticla temperată a 16 panouri este făcută țăndări, iar invertorul este ars din cauza scurtcircuitului pe stringuri. Paguba totală se ridică la 38.000 RON.",
    "heroImage": "/images/scenarios/solar-hail.jpg",
    "imageCaption": "Sistemele fotovoltaice montate la sol sunt clasificate drept instalații exterioare și necesită acoperire specifică de amenajări exterioare.",
    "severityLabel": "Daună Energetică și Materială",
    "featured": false,
    "tags": [
      "panouri-solare",
      "fotovoltaice-gradina",
      "furtuna-vant",
      "invertor-ars",
      "energie-verde"
    ],
    "illustrativeCost": "Cost înlocuire panouri + structură + invertor: 30.000 – 48.000 RON",
    "withoutInsurance": {
      "title": "Doar asigurarea standard a casei (Fără clauză fotovoltaice la sol)",
      "statusLabel": "Instalația din grădină nu este considerată clădire de locuit",
      "financialImpact": "Plată integrală a refacerii sistemului din buzunar",
      "points": [
        "Multe polițe de locuință de bază acoperă DOAR panourile montate pe acoperișul casei principale, excluzând structurile montate la sol în curte.",
        "Garanția producătorului exclude expres daunele provocate de fenomene meteo violente (furtuni, vânt extrem).",
        "Pierzi independența energetică și ești nevoit să investești din nou zeci de mii de lei."
      ],
      "summary": "Fără o clauză adaptată pentru energie regenerabilă, parcul solar din curte rămâne neacoperit."
    },
    "withInsurance": {
      "title": "Cu poliță de Locuință cu Clauză Extinsă de Instalații Fotovoltaice & Energie Verde",
      "statusLabel": "Despăgubire completă a panourilor, structurii și invertorului",
      "financialImpact": "Reinstalare acoperită de asigurător minus franșiza agreată",
      "points": [
        "Polița include explicit sistemele fotovoltaice montate la sol ca amenajări exterioare asigurate.",
        "Sunt decontate panourile noi, refacerea structurii din aluminiu/oțel și noul invertor hibrid.",
        "Include clauză pentru pierderea beneficiilor de prosumator (energia injectată nerealizată)."
      ],
      "summary": "Sistemul tău solar este repus în funcțiune pe cheltuiala companiei de asigurări."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Panouri pe acoperiș vs La sol",
          "detail": "CONDIȚIE CRITICĂ: Specifică clar în contract dacă panourile sunt montate pe casă sau pe cadre la sol în curte."
        },
        {
          "label": "Proiectul tehnic de ancorare",
          "detail": "Asigurătorul cere ca montajul să fi fost efectuat de un instalator autorizat conform normelor de rezistență la vânt."
        }
      ]
    },
    "immediateSteps": [
      "Decuplează imediat siguranța generală a invertorului și întrerupătorul DC pentru a evita electrocutarea.",
      "Fotografiază panourile răsturnate și structura metalică deformată.",
      "Solicită firmei instalatoare un raport tehnic de constatare a daunelor.",
      "Deschide dosarul la compania de asigurări."
    ],
    "usefulDocuments": [
      "Factura inițială de montaj și certificatul de punere în funcțiune ca prosumator",
      "Raportul tehnic de daună emis de instalatorul autorizat ANRE",
      "Polița facultativă de locuință cu clauza de energie verde"
    ],
    "advisorQuestions": [
      "Sunt asigurate panourile fotovoltaice amplasate la sol în curte pe polița mea curentă?",
      "Ce fenomene meteo sunt acoperite pentru instalațiile energetice exterioare?"
    ],
    "disclaimer": "Instalațiile solare trebuie ancorate conform standardelor seismice și de vânt în vigoare.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "familie-baterie-scuter-electric-incendiu-hol",
    "slug": "baterie-scuter-electric-incendiu-hol",
    "categoryId": "familie-lifestyle",
    "categoryName": "FAMILIE & LIFESTYLE",
    "title": "Acumulatorul unei trotinete electrice explodează în hol în timpul încărcării",
    "mainQuestion": "Ce acoperă asigurarea dacă o baterie litiu-ion provoacă un incendiu fulgerător în apartament?",
    "shortDescription": "O ambalare termică (thermal runaway) umple casa de fum toxic și incendiază mobilierul din hol.",
    "situation": "Pui la încărcat bateria unei trotinete electrice în holul apartamentului peste noapte. Un scurtcircuit intern la celulele litiu-ion declanșează fenomenul de thermal runaway. Bateria explodează cu flăcări violente de 1.000°C și jeturi de gaze toxice. Ușa de la intrare, parchetul și dressingul din hol sunt cuprinse de foc. Pompierii sting incendiul, dar apartamentul este complet înnegrit de funingine toxică și necesită decopertare integrală.",
    "heroImage": "/images/scenarios/short-circuit-fire.jpg",
    "imageCaption": "Incendiile provocate de bateriile de micromobilitate litiu-ion se dezvoltă exploziv și generează depuneri masive de funingine acidă corozivă.",
    "severityLabel": "Incendiu Chimic și Daună Majoră",
    "featured": false,
    "tags": [
      "baterie-trotineta-explozie",
      "thermal-runaway",
      "incendiu-litiu",
      "funingine-toxica",
      "asigurare-apartament"
    ],
    "illustrativeCost": "Cost renovare + decontaminare fum: 45.000 – 110.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare facultativă de locuință",
      "statusLabel": "Costuri suportate integral din economiile personale",
      "financialImpact": "Zeci de mii de euro pentru renovare completă și curățare chimică",
      "points": [
        "Asigurarea obligatorie PAD NU acoperă incendiul din cauze electrice sau casnice.",
        "Funinginea toxică de litiu corodează electronicele și pătrunde adânc în tencuieli, necesitând igienizare specializată.",
        "Familia este nevoită să locuiască în chirie pe durata celor 2-3 luni de șantier."
      ],
      "summary": "Explozia bateriei produce daune devastatoare care impun o renovare de la zero a locuinței."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Riscuri Extinse de Incendiu & Cazare Temporară)",
      "statusLabel": "Despăgubire completă a finisajelor, mobilierului și cazare la hotel",
      "financialImpact": "Refacerea apartamentului acoperită + decontarea chiriei temporare",
      "points": [
        "Incendiul accidental este un risc de bază acoperit în polițele facultative.",
        "Sunt decontate operațiunile specializate de curățare a fumului, zugrăvelile, ușile și mobilierul distrus.",
        "Clauza de locuință temporară plătește cazarea familiei la un hotel sau apartament închiriat pe perioada renovării."
      ],
      "summary": "Tot efortul de reconstrucție și cheltuielile de relocare sunt preluate de asigurător."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Excluderea modificărilor neomologate",
          "detail": "ATENȚIE: Dacă bateria a fost modificată artizanal („cipuită” pentru viteză mai mare sau reparată neautorizat), asigurătorul poate invoca neglijența gravă."
        },
        {
          "label": "Curățarea de funingine și decontaminarea",
          "detail": "Verifică dacă polița acoperă cheltuielile de curățare profesională a urmelor de fum și miros."
        }
      ]
    },
    "immediateSteps": [
      "Evacuează imediat locuința (fumul de baterii litiu conține acid fluorhidric extrem de toxic) și sună la 112.",
      "Avertizează pompierii că incendiul este alimentat de o baterie litiu-ion.",
      "Obține Procesul-Verbal de intervenție de la ISU.",
      "Deschide dosarul la asigurătorul tău de locuință."
    ],
    "usefulDocuments": [
      "Procesul-Verbal emis de Pompieri (ISU) cu cauza tehnică probabilă",
      "Factura sau manualul tehnic al trotinetei electrice originale",
      "Polița facultativă de locuință"
    ],
    "advisorQuestions": [
      "Ce sumă oferă contractul meu pentru cazarea temporară a familiei pe durata renovării?",
      "Sunt acoperite bunurile și electrocasnicele distruse de fumul dens fără flacără directă?"
    ],
    "disclaimer": "Încărcarea bateriilor litiu-ion trebuie realizată exclusiv cu încărcătoare originale sub supraveghere.",
    "lastReviewed": "Octombrie 2026"
  }
];
