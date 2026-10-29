import { Scenario } from '@/types/scenario';

export const calatoriiScenarios: Scenario[] = [
  {
    "id": "calatorii-zbor-anulat-conexiune-pierduta",
    "slug": "zbor-anulat-conexiune-pierduta",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Zbor internațional anulat și escală pierdută în drum spre SUA",
    "mainQuestion": "Ce se întâmplă dacă primul segment de zbor are întârziere și pierzi legătura transatlantică?",
    "shortDescription": "Rămâi blocat 28 de ore pe un aeroport de tranzit, cu cazare scumpă și legături ratate.",
    "situation": "Pleci din București către New York cu escală la Frankfurt. Din cauza aglomerației la decolare, zborul ajunge cu 90 de minute întârziere în Germania, iar poarta de îmbarcare pentru cursa de New York este deja închisă. Următorul zbor disponibil cu locuri libere este abia a doua zi seara. Trebuie să găsești cazare la hotel în aeroport, masă și transport terestru.",
    "heroImage": "/images/scenarios/flight-cancelled.jpg",
    "imageCaption": "Regulamentul european EC 261/2004 oferă drepturi clare pasagerilor, dar despăgubirile financiare diferă în funcție de motivul invocat de compania aeriană.",
    "severityLabel": "Risc Financiar și Disconfort",
    "featured": true,
    "tags": [
      "zbor-anulat",
      "escala-pierduta",
      "ec261",
      "asigurare-calatorie",
      "cazare-aeroport"
    ],
    "illustrativeCost": "Costuri neprevăzute: 400 – 1.200 EUR (cazare de urgență + mese + rebooking)",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie cu clauză de întârziere/anulare",
      "statusLabel": "Depinzi exclusiv de disponibilitatea companiei aeriene la ghișeu",
      "financialImpact": "Cheltuieli inițiale de sute de euro plătite din buzunar",
      "points": [
        "Dacă întârzierea a fost cauzată de condiții meteo sau greve ale controlorilor de trafic (circumstanțe extraordinare), compania aeriană nu plătește compensații financiare.",
        "La biroul de transfer al aeroportului se formează cozi de 4-6 ore pentru un voucher de cazare la un hotel la 40 km distanță.",
        "Dacă nu mai sunt camere asigurate de companie, trebuie să plătești cazarea din banii tăi și să ceri rambursare ulterior, proces ce poate dura luni de zile."
      ],
      "summary": "Ești lăsat la mila procedurilor birocratice ale companiei aeriene într-un hub internațional aglomerat."
    },
    "withInsurance": {
      "title": "Cu asigurare completă de călătorie (Întârziere / Conexiune ratată)",
      "statusLabel": "Indemnizație fixă garantată + decontare cazare independentă",
      "financialImpact": "Plată forfetară per oră de întârziere (ex. 200 – 600 EUR) direct în cont",
      "points": [
        "Polițele moderne de călătorie oferă clauza Smart Delay / Întârziere garantată: primești automat acces gratuit în lounge VIP după 60-120 minute de întârziere.",
        "Asigurătorul decontează cazarea la orice hotel decent din proximitate și mesele, indiferent dacă motivul companiei a fost meteo sau tehnic.",
        "Polița compensează nopțile de cazare deja plătite la destinație (New York) pe care nu le-ai mai putut folosi din cauza întârzierii."
      ],
      "summary": "Primești confort imediat în lounge și rambursarea cheltuielilor logistice fără certuri la ghișee."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Pragul minim de ore de întârziere",
          "detail": "Verifică dacă indemnizația începe după 4, 6 sau 12 ore de întârziere a zborului."
        },
        {
          "label": "Circumstanțe extraordinare",
          "detail": "Asigură-te că polița privată acoperă și întârzierile cauzate de vreme nefavorabilă sau erori de trafic aerian."
        },
        {
          "label": "Bilete separate (Separate tickets)",
          "detail": "Atenție: cele două zboruri trebuie să fie pe același bilet (single PNR); biletele luate separat de la companii diferite nu sunt considerate conexiuni protejate."
        }
      ]
    },
    "immediateSteps": [
      "Mergi imediat la biroul companiei aeriene și cere dovada scrisă a întârzierii (Delay Confirmation Letter) cu motivul specificat.",
      "Păstrează toate tichetele de îmbarcare (boarding passes) inițiale și cele emise pentru noul zbor.",
      "Păstrează toate bonurile fiscale și facturile pentru orice masă, cafea, transport cu taxiul sau noapte de cazare achitată.",
      "Activează dosarul de daună pe aplicația mobilă a asigurătorului tău de călătorie."
    ],
    "usefulDocuments": [
      "Biletele de avion electronice (itinerariul complet de rezervare)",
      "Confirmarea oficială a întârzierii emisă de compania aeriană",
      "Facturile și bonurile fiscale pentru cheltuielile efectuate în aeroport"
    ],
    "advisorQuestions": [
      "Ce sumă fixă pe oră de întârziere oferă polița mea de călătorie?",
      "Pot alege singur hotelul din aeroport dacă linia aeriană nu oferă voucher imediat?"
    ],
    "disclaimer": "Drepturile pasagerilor aerieni sunt guvernate de Regulamentul CE 261/2004, iar polițele private completează aceste compensații.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-bagaj-pierdut-intarziat-destinatie",
    "slug": "bagaj-pierdut-intarziat-destinatie",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Bagajul de cală nu mai ajunge la destinația de vacanță",
    "mainQuestion": "Ce faci dacă aterizezi într-o destinație exotică doar cu hainele de pe tine și rucsacul mic?",
    "shortDescription": "Valiza a rămas rătăcită la transfer, iar recuperarea durează 4-5 zile sau se declară pierdere definitivă.",
    "situation": "Aterizezi în Bali sau Tokyo pentru o vacanță de două săptămâni. Banda de bagaje se oprește, iar geamantanul tău cu toate hainele, costumele de baie, cosmeticele și încălțămintea nu a sosit. La biroul Lost & Found ți se comunică că bagajul a fost rătăcit la transferul din Doha și ar putea dura câteva zile până la localizare.",
    "heroImage": "/images/scenarios/lost-luggage.jpg",
    "imageCaption": "Întârzierea bagajului de cală generează cheltuieli de urgență pentru achiziționarea de îmbrăcăminte și articole de igienă de primă necesitate.",
    "severityLabel": "Risc Financiar Mediu",
    "featured": true,
    "tags": [
      "bagaj-pierdut",
      "bagaj-intarziat",
      "pir-lost-found",
      "asigurare-calatorie",
      "achizitii-urgenta"
    ],
    "illustrativeCost": "Costuri cumpărături de primă necesitate: 300 – 1.000 EUR",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie (Doar Convenția de la Montreal)",
      "statusLabel": "Compensație întârziată și limitată conform greutății",
      "financialImpact": "Plată pe loc din fondul de vacanță cu recuperare greoaie",
      "points": [
        "Compania aeriană oferă rareori un kit de igienă gratuit la aeroport și un plafon mic de cheltuieli de urgență pe care îl decontează anevoios după săptămâni de e-mailuri.",
        "Dacă bagajul se pierde definitiv, Convenția de la Montreal limitează răspunderea la circa 1.300 SDR (aprox. 1.500 EUR), indiferent dacă hainele și geanta ta valorau 4.000 EUR.",
        "Trebuie să dovedești fiecare haină pierdută cu facturi vechi pe care majoritatea oamenilor nu le mai păstrează."
      ],
      "summary": "Rămâi fără haine în primele zile de vacanță și trebuie să cumperi totul din banii proprii fără garanția decontării rapide."
    },
    "withInsurance": {
      "title": "Cu poliță de călătorie cu clauză de întârziere/pierdere bagaje",
      "statusLabel": "Buget imediat de cumpărături aprobat rapid",
      "financialImpact": "Decontare rapidă: 300 – 800 EUR pentru cumpărături imediate de urgență",
      "points": [
        "Dacă bagajul întârzie mai mult de 6-12 ore, polița îți acordă un buget imediat pentru haine noi, pantofi și cosmetice.",
        "În caz de pierdere definitivă confirmată (după 21 de zile), asigurătorul completează suma primită de la compania aeriană până la plafonul contractat.",
        "Despăgubirea se achită direct în contul tău în baza formularului PIR și a bonurilor din magazin."
      ],
      "summary": "Mergi la cumpărături liniștit pentru a-ți salva vacanța, știind că bonurile vor fi decontate direct de asigurător."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Pragul de ore pentru întârziere",
          "detail": "Verifică dacă cumpărăturile sunt decontate după 6, 8 sau 12 ore de la aterizare."
        },
        {
          "label": "Întârzierea la întoarcere acasă",
          "detail": "Atenție: aproape toate polițele exclud cheltuielile de urgență dacă bagajul întârzie la zborul de întoarcere la domiciliu (se presupune că ai haine acasă)."
        },
        {
          "label": "Limita pe obiect",
          "detail": "Verifică plafonul maxim acordat pentru un singur articol vestimentar."
        }
      ]
    },
    "immediateSteps": [
      "Mergi imediat la ghișeul „Lost & Found / Baggage Claim” din zona de recuperare înainte de a părăsi vama.",
      "Completează formularul PIR (Property Irregularity Report) și păstrează cu sfințenie exemplarul original cu codul unic de căutare (ex. OTPQR12345).",
      "Cumpără strict bunurile esențiale necesare (haine de schimb adecvate climei, periuță de dinți, încărcător telefon) și păstrează bonurile fiscale detaliate.",
      "Transmite avizarea de daună asigurătorului atașând copia PIR și bonurile."
    ],
    "usefulDocuments": [
      "Raportul oficial PIR emis de aeroport",
      "Talonul de bagaj (baggage tag) lipit pe biletul de îmbarcare",
      "Facturile și bonurile fiscale de cumpărături realizate la destinație"
    ],
    "advisorQuestions": [
      "Ce sumă pot cheltui pe zi dacă bagajul întârzie mai mult de 24 de ore?",
      "Ce bunuri sunt considerate „de primă necesitate” conform condițiilor generale ale poliței?"
    ],
    "disclaimer": "Informații informative. Regulile de despăgubire respectă Convenția de la Montreal coroborată cu beneficiile poliței private.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-urgenta-medicala-spitalizare-strainatate",
    "slug": "urgenta-medicala-spitalizare-strainatate",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Urgență chirurgicală de apendicită sau fractură în SUA ori Thailanda",
    "mainQuestion": "Ce se întâmplă dacă ai nevoie de o intervenție chirurgicală de urgență în afara Uniunii Europene?",
    "shortDescription": "O noapte de spitalizare la terapie intensivă și o operație pot genera o factură de 45.000 USD.",
    "situation": "În timpul unei vacanțe în Statele Unite sau Thailanda, o durere abdominală acută se transformă rapid în apendicită acută flegmonoasă cu risc de peritonită. Ești transportat cu ambulanța la cel mai apropiat spital privat. Spitalul cere o garanție de plată de minim 10.000 USD înainte de intrarea în sala de operație, iar costul total al spitalizării și chirurgiei atinge 38.000 USD.",
    "heroImage": "/images/scenarios/travel-medical.jpg",
    "imageCaption": "Sistemele medicale din afara Europei nu au acorduri de reciprocitate cu sistemul public din România, iar tarifele spitalicești pot ruina financiar o familie.",
    "severityLabel": "Risc Financiar Catastrofal",
    "featured": true,
    "tags": [
      "urgenta-medicala",
      "spitalizare-sua",
      "operatie-apendicita",
      "card-european-sanatate",
      "asigurare-calatorie"
    ],
    "illustrativeCost": "Costuri facturate de spital privat: 25.000 – 65.000 USD (115.000 – 300.000 RON)",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie (Doar cu Cardul European EHIC)",
      "statusLabel": "Cardul European EHIC este complet NUL în afara Uniunii Europene",
      "financialImpact": "Plată integrală: zeci de mii de dolari sau refuzul tratamentului privat",
      "points": [
        "Cardul European de Sănătate (EHIC) funcționează EXCLUSIV în statele membre UE/SEE și acoperă doar sistemul public de stat.",
        "În SUA, Thailanda, Turcia, Dubai, Mexic sau Egipt, cardul românesc de sănătate nu valorează nimic.",
        "Spitalul îți blochează toate cardurile bancare, solicită garanții imobiliare sau refuză intervențiile non-letale până la plata avansului.",
        "Consulatul României nu poate plăti facturile medicale ale cetățenilor particulari."
      ],
      "summary": "O urgență medicală banală fără o asigurare cu sumă asigurată mare te poate lăsa cu datorii de zeci de mii de euro pentru tot restul vieții."
    },
    "withInsurance": {
      "title": "Cu asigurare de călătorie internațională (Sumă asigurată: 50.000 – 100.000 EUR / Nivel Global)",
      "statusLabel": "Garanție de plată directă către spital (Direct Billing)",
      "financialImpact": "Zero costuri plătite din buzunar",
      "points": [
        "Dispeceratul internațional de asistență emite o scrisoare de garanție financiară (Letter of Guarantee) direct spitalului.",
        "Sunt decontate integral: transportul cu ambulanța, analizele de urgență, onorariul echipei chirurgicale, anestezia și zilele de salon.",
        "Un medic coordonator din centrala de asistență monitorizează starea medicală și comunică în limba română cu pacientul și familia."
      ],
      "summary": "Asigurătorul preia integral comunicarea financiară cu spitalul și garantează plata devizului chirurgical."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Suma asigurată pentru SUA / Asia",
          "detail": "Pentru călătorii în America de Nord este recomandată o sumă asigurată de minim 100.000 EUR sau nelimitată."
        },
        {
          "label": "Decontare directă vs Rambursare",
          "detail": "Asigură-te că polița oferă asistență cu decontare directă (direct billing) la spitale partenere, nu doar rambursare la întoarcere."
        },
        {
          "label": "Boli preexistente",
          "detail": "Atenție: afecțiunile cronice cunoscute anterior plecării sunt de regulă excluse de la tratamente elective."
        }
      ]
    },
    "immediateSteps": [
      "Sună IMEDIAT la numărul internațional de asistență medicală de urgență tipărit pe poliță înainte de efectuarea oricărei plăți!",
      "Transmite operatorului numele spitalului, secția unde te afli și datele de contact ale medicului curant.",
      "Arată personalului de la internări certificatul de asigurare pentru ca aceștia să trimită devizul direct companiei de asistență.",
      "Nu semna angajamente de plată personală înainte de a primi acordul dispeceratului tău de asigurări."
    ],
    "usefulDocuments": [
      "Polița de asigurare de călătorie și numărul dosarului de asistență",
      "Raportul medical de internare emis de spitalul străin (Medical Report)",
      "Scrisoarea de garanție de plată (GOP) emisă de dispecerat"
    ],
    "advisorQuestions": [
      "Include polița mea acoperire directă fără să fiu nevoit să achit eu factura spitalului?",
      "Ce plafon de sumă asigurată medicală este recomandat pentru destinația aleasă?"
    ],
    "disclaimer": "Acest scenariu evidențiază riscurile medicale extreme din țările non-UE. Asigurați-vă că verificați întotdeauna suma asigurată.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-repatriere-medicala-avion-sanitar",
    "slug": "repatriere-medicala-avion-sanitar",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Traumatism grav la schi în Alpi și nevoie de zbor sanitar cu echipaj ATI",
    "mainQuestion": "Cât costă repatrierea pe targă cu avion special echipat dintr-o stațiune montană din Austria sau Franța?",
    "shortDescription": "O fractură complexă de bazin sau coloană interzice transportul pe scaun de linie aeriană.",
    "situation": "Un accident pe pârtia de schi provoacă fracturi multiple care necesită imobilizare strictă la orizontală și monitorizare a semnelor vitale. După stabilizarea primară la clinica montană, medicii refuză să dea avizul de călătorie (Fit-to-Fly) pe un zbor comercial obișnuit. Singura opțiune medicală sigură pentru a reveni acasă în România este un zbor sanitar dedicat (Air Ambulance) cu medic și asistent de terapie intensivă.",
    "heroImage": "/images/scenarios/medical-transport.jpg",
    "imageCaption": "Zborurile sanitare cu echipaj de anestezie-terapie intensivă reprezintă unele dintre cele mai scumpe servicii medicale logistice din lume.",
    "severityLabel": "Cost Logistic Extrem",
    "featured": true,
    "tags": [
      "repatriere-medicala",
      "avion-sanitar",
      "accident-schi",
      "air-ambulance",
      "asigurare-calatorie"
    ],
    "illustrativeCost": "Cost zbor sanitar dedicat Alpi – București: 25.000 – 55.000 EUR",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie cu clauză de repatriere medicală",
      "statusLabel": "Cost plătit 100% de familie în avans",
      "financialImpact": "25.000 – 55.000 EUR virați prin transfer bancar de urgență",
      "points": [
        "Nici statul român și nici Cardul European de Sănătate (EHIC) NU plătesc costurile de repatriere medicală în țara de origine.",
        "Operatorii privați de avioane sanitare nu decolează fără confirmarea transferului bancar integral în cont.",
        "Familiile sunt puse în situația dramatică de a vinde bunuri, a face împrumuturi de urgență sau de a apela la strângeri publice de fonduri."
      ],
      "summary": "Absența clauzei de repatriere transformă o tragedie medicală într-o criză financiară devastatoare pentru toată familia."
    },
    "withInsurance": {
      "title": "Cu poliță de călătorie cu Repatriere Medicală Inclusă (Fără limită sau limită ridicată)",
      "statusLabel": "Organizare completă a zborului și decontare 100%",
      "financialImpact": "Zero cheltuieli pentru pacient și aparținători",
      "points": [
        "Centrala de asistență contractează direct compania aeriană medicală și obține sloturile de zbor pe aeroporturi.",
        "Pacientul este transferat „pat la pat” (bed-to-bed): ambulanță terestră de la clinica austriacă la avion, zbor cu echipaj ATI, și ambulanță de la Otopeni la spitalul din România.",
        "Este inclus și biletul de avion pentru un membru al familiei care însoțește pacientul repatriat."
      ],
      "summary": "Tot efortul logistic uriaș și zecile de mii de euro sunt gestionate impecabil de asigurător."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de sporturi de iarnă",
          "detail": "CRITIC: Schiul și snowboardingul sunt considerate sporturi de agrement cu risc ridicat și sunt EXCLUSE din polițele standard dacă nu ai bifat opțiunea dedicată „Sporturi de Iarnă”."
        },
        {
          "label": "Plafonul de repatriere",
          "detail": "Asigură-te că repatrierea medicală nu este limitată la o sumă ridicolă (de exemplu doar 3.000 – 5.000 EUR)."
        },
        {
          "label": "Acordul medical",
          "detail": "Repatrierea se aprobă exclusiv la recomandarea scrisă a medicului curant în acord cu medicul asigurătorului."
        }
      ]
    },
    "immediateSteps": [
      "Contactează dispeceratul de urgență de pe poliță imediat ce medicii locali indică necesitatea transferului la orizontală.",
      "Solicită medicului curant completarea formularului medical standard MEDIF (Medical Information Form).",
      "Nu comanda servicii private de ambulanță fără autorizarea expresă a centralei de asistență a asigurătorului.",
      "Pregătește documentele de identitate ale pacientului și ale însoțitorului pentru formalitățile de frontieră aeroportuară."
    ],
    "usefulDocuments": [
      "Formularul MEDIF sau raportul medical detaliat Fit-to-Fly",
      "Polița de asigurare de călătorie cu clauza de sporturi de iarnă activă",
      "Pașapoartele / Cărțile de identitate ale pacientului și însoțitorului"
    ],
    "advisorQuestions": [
      "Este acoperită repatrierea medicală pe pat de avion sanitar în polița mea de bază?",
      "Am bifat clauza obligatorie pentru schi / snowboard pe pârtii amenajate?"
    ],
    "disclaimer": "Atenție: Practicarea sporturilor de iarnă fără clauză contractuală specifică atrage refuzul legal al despăgubirii.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-pasaport-documente-furate-roma",
    "slug": "pasaport-documente-furate-roma",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Pașaportul, banii și cardurile furate de hoții de buzunare la Roma sau Barcelona",
    "mainQuestion": "Ce se întâmplă dacă rămâi fără niciun act de identitate și fără mijloace de plată într-o capitală străină?",
    "shortDescription": "Un buzunar tăiat la metrou te lasă fără pașaport, carduri și bani chiar înainte de zborul spre casă.",
    "situation": "În timp ce călătorești cu metroul aglomerat între Colosseum și gara Termini din Roma, hoții de buzunare îți sustrag portofelul cu buletinul, pașaportul, cardurile bancare și 400 EUR cash. Fără acte nu te poți îmbarca pe zborul de retur de a doua zi și nu poți plăti hotelul.",
    "heroImage": "/images/scenarios/stolen-passport.jpg",
    "imageCaption": "Furtul actelor de identitate în marile metropole turistice europene impune obținerea de urgență a unui Titlu de Călătorie de la Consulat.",
    "severityLabel": "Risc Logistic și Financiar Mediu",
    "featured": false,
    "tags": [
      "pasaport-furat",
      "hoti-buzunare",
      "titlu-calatorie",
      "consulat",
      "avans-fonduri-urgenta"
    ],
    "illustrativeCost": "Costuri refacere acte de urgență + cazare suplimentară + bilet nou: 400 – 900 EUR",
    "withoutInsurance": {
      "title": "Fără asigurare de asistență turistică",
      "statusLabel": "Blocaj financiar și drumuri anevoioase pe cont propriu",
      "financialImpact": "Toate cheltuielile suportate exclusiv din împrumuturi de la cunoscuți",
      "points": [
        "Trebuie să găsești un prieten care să-ți trimită bani prin Western Union / MoneyGram pentru a supraviețui până obții actele temporare.",
        "Pierzi biletul de avion inițial și trebuie să cumperi un alt bilet la tarif de ultimă oră (last minute) substanțial mai scump.",
        "Taxele consulare pentru titlul de călătorie și transportul până la Consulat se achită din buzunar."
      ],
      "summary": "Rămâi blocat într-o țară străină până când apropiații îți pot trimite fonduri prin servicii de transfer de bani."
    },
    "withInsurance": {
      "title": "Cu asigurare de călătorie cu asistență consulară și avans de numerar",
      "statusLabel": "Ghidaj consular complet, avans de fonduri și decontare bilet de retur",
      "financialImpact": "Decontarea nopților suplimentare de hotel și a noului bilet de avion",
      "points": [
        "Centrala de asistență ghidează procedura rapidă la Consulatul României pentru emiterea Titlului de Călătorie.",
        "Polițele premium oferă opțiunea de punere la dispoziție a unui fond de urgență (avans de numerar) prin parteneri locali.",
        "Asigurătorul decontează cazarea suplimentară necesară pe durata obținerii actelor și diferența de cost pentru noul bilet de avion."
      ],
      "summary": "Tot impactul financiar al ratării zborului din cauza furtului actelor este compensat pe baza plângerii de la poliție."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Excluderea pierderii din neglijență",
          "detail": "Polița acoperă furtul calificat prin efracție sau violență/sustragere clandestină, NU pierderea din neatenție sau uitarea actelor la restaurant."
        },
        {
          "label": "Rambursarea biletului de retur",
          "detail": "Verifică dacă asigurătorul plătește un nou bilet dacă ratarea celui inițial a fost provocată de furtul documentelor."
        }
      ]
    },
    "immediateSteps": [
      "Blochează imediat toate cardurile bancare din aplicațiile bancare de pe telefon.",
      "Mergi de urgență la cea mai apropiată secție de poliție locală (Carabinieri / Polizia) și depune plângere de furt (Denuncia di furto).",
      "Programează-te în regim de urgență la Consulatul General al României pentru eliberarea Titlului de Călătorie temporar.",
      "Anunță asigurătorul tău de călătorie pentru a deschide dosarul de asistență."
    ],
    "usefulDocuments": [
      "Copia plângerii de furt (Denuncia) înregistrată la poliția locală",
      "Titlul de Călătorie eliberat de Consulatul României",
      "Facturile pentru cazarea suplimentară și noul bilet de avion"
    ],
    "advisorQuestions": [
      "Oferă polița mea de călătorie avans de fonduri în caz de furt al tuturor mijloacelor de plată?",
      "Ce sumă este acoperită pentru emiterea documentelor temporare de întoarcere în țară?"
    ],
    "disclaimer": "Asigurarea compensează prejudiciile financiare rezultate din furtul dovedit cu proces-verbal de poliție.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-stornare-anulare-vacanta-urgenta-familie",
    "slug": "stornare-anulare-vacanta-urgenta-familie",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Urgență medicală în familie cu 3 zile înainte de o vacanță exotică de 6.000 EUR",
    "mainQuestion": "Ce se întâmplă dacă un copil sau un părinte se îmbolnăvește brusc și nu mai puteți pleca în concediu?",
    "shortDescription": "Biletele de avion sunt nerambursabile, iar hotelul reține 100% din tarif pentru anulări sub 7 zile.",
    "situation": "Ai achitat integral un pachet de vacanță de vis în Maldive în valoare de 28.000 RON (circa 5.600 EUR) pentru toată familia. Cu 3 zile înainte de zbor, copilul mic face pneumonie acută cu febră 40°C și necesită spitalizare obligatorie. Agenția de turism și compania aeriană invocă termenii biletelor nerambursabile și refuză restituirea banilor.",
    "heroImage": "/images/scenarios/serious-diagnosis.jpg",
    "imageCaption": "Asigurarea storno (anularea călătoriei) este singurul instrument financiar care protejează avansurile plătite pentru concedii.",
    "severityLabel": "Pierdere Totală de Avans",
    "featured": true,
    "tags": [
      "asigurare-storno",
      "anulare-vacanta",
      "urgenta-medicala-familie",
      "bilete-nerambursabile",
      "rambursare-concediu"
    ],
    "illustrativeCost": "Pierdere financiară nerambursabilă: 20.000 – 35.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare Storno (Anularea Călătoriei)",
      "statusLabel": "Pierderea a 90% – 100% din banii plătiți pe vacanță",
      "financialImpact": "Pierdere directă de peste 5.000 EUR",
      "points": [
        "Contractele standard cu agențiile de turism și zborurile de linie la tarife promoționale au penalizare de 100% la anulare cu mai puțin de 7-14 zile înainte.",
        "Motivele medicale personale sau ale rudelor de gradul I nu obligă hotelierii sau companiile aeriene să restituie banii voluntar.",
        "Banii munciți pe parcursul unui an întreg pentru vacanță sunt complet evaporați."
      ],
      "summary": "Rămâi și cu suferința medicală a copilului și cu pierderea completă a miilor de euro plătite pentru concediu."
    },
    "withInsurance": {
      "title": "Cu poliță de asigurare STORNO completă",
      "statusLabel": "Rambursare 100% a sumelor nerambursabile (minus eventuala franșiză contractuală)",
      "financialImpact": "Recuperezi până la 90 – 100% din costul total al vacanței",
      "points": [
        "Boala acută neprevăzută a asiguratului sau a unei rude de gradul I (copil, soț, părinte) este evenimentul clasic acoperit de clauza Storno.",
        "Asigurătorul îți virează în cont valoarea penalităților reținute de agenție și de companiile de transport.",
        "Familia își poate reprograma vacanța liniștită după ce copilul se reface complet medical."
      ],
      "summary": "Recuperezi capitalul investit în pachetul turistic în baza actelor medicale doveditoare."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Momentul achiziției poliței",
          "detail": "REGULĂ STRICTĂ: Polița Storno trebuie încheiată în maximum 24 – 48 de ore de la achitarea pachetului turistic sau cu cel puțin 30 de zile înainte de plecare."
        },
        {
          "label": "Boli cronice preexistente",
          "detail": "Verifică dacă agravarea unei afecțiuni cronice diagnosticate anterior este acoperită sau exclusă."
        },
        {
          "label": "Gradul de rudenie",
          "detail": "Asigură-te că polița include rudele de gradul I care nu călătoresc împreună cu tine (ex. părinți rămași acasă)."
        }
      ]
    },
    "immediateSteps": [
      "Notifică în scris agenția de turism sau transportatorul privind anularea imediat ce medicul pune diagnosticul de spitalizare.",
      "Solicită de la agenție factura fiscală de penalizare care atestă procentul de 100% din sumă reținut conform contractului.",
      "Obține biletul de ieșire din spital sau concediul medical cu diagnostic clar certificat.",
      "Deschide dosarul de daună Storno la compania de asigurări."
    ],
    "usefulDocuments": [
      "Contractul de comercializare a pachetului turistic și dovezile de plată",
      "Factura de stornare cu penalitățile reținute de agenția de turism",
      "Documentele medicale justificative (foaia de observație clinică, bilet de internare/externare)"
    ],
    "advisorQuestions": [
      "În cât timp de la cumpărarea biletelor trebuie emisă polița Storno pentru a fi validă?",
      "Se aplică vreo franșiză la rambursarea banilor pentru cauze medicale ale copiilor minori?"
    ],
    "disclaimer": "Polițele Storno au condiții stricte de eligibilitate temporală; încheierea lor după apariția simptomelor este nulă de drept.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-avarie-accidentala-hotel-mobilier",
    "slug": "avarie-accidentala-hotel-mobilier",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Copilul sau o neatenție distruge un televizor scump și parchetul din camera de hotel",
    "mainQuestion": "Cine plătește daunele accidentale produse bunurilor unui hotel sau vile de vacanță în străinătate?",
    "shortDescription": "Un geamantan scăpat pe ecranul OLED al hotelului și o cadă lăsată să curgă generează o notă de plată de mii de euro.",
    "situation": "Te cazezi la un hotel de 5 stele în Dubai sau Elveția. În timp ce desfaci bagajele, un geamantan greu alunecă și sparge ecranul curbat al televizorului de ultimă generație din livingul apartamentului. Concomitent, apa lăsată la umplerea căzii se revarsă peste marmură și parchetul din lemn masiv. Managementul hotelului blochează garanția de pe card și emite un deviz de reparație de 4.500 EUR.",
    "heroImage": "/images/scenarios/hotel-damage.jpg",
    "imageCaption": "Hotelurile și proprietarii de vile de lux rețin automat depozitele de garanție și debitează cardurile oaspeților pentru daune materiale.",
    "severityLabel": "Risc Financiar Imediat",
    "featured": false,
    "tags": [
      "daune-hotel",
      "raspundere-turist",
      "televizor-spart-hotel",
      "inundatie-hotel",
      "asigurare-calatorie"
    ],
    "illustrativeCost": "Costuri facturate de hotel: 2.000 – 6.000 EUR",
    "withoutInsurance": {
      "title": "Fără clauză de Răspundere Civilă în Călătorie",
      "statusLabel": "Plată pe loc sau debitare automată a cardului de credit",
      "financialImpact": "Pierderea a 2.000 – 6.000 EUR din fondurile personale",
      "points": [
        "Contractul de cazare semnat la check-in te obligă legal să răspunzi pentru orice prejudiciu adus bunurilor din cameră.",
        "Hotelul are datele cardului tău de credit și este autorizat conform regulamentelor bancare să debiteze sumele aferente daunelor consemnate.",
        "Dacă refuzi plata, pot fi sesizate autoritățile de poliție locale pentru refuz de despăgubire a proprietății private."
      ],
      "summary": "Garanțiile bancare sunt pierdute integral pentru acoperirea pagubelor provocate din greșeală."
    },
    "withInsurance": {
      "title": "Cu poliță de călătorie extinsă cu Răspundere Civilă a Turistului",
      "statusLabel": "Despăgubire aprobată direct către conducerea hotelului",
      "financialImpact": "Acoperire completă a devizului justificat de hotel",
      "points": [
        "Clauza de răspundere civilă privată în străinătate acoperă daunele accidentale provocate de tine sau copiii tăi proprietății hoteliere.",
        "Asigurătorul preia negocierea devizului cu administrația hotelului și virează despăgubirea conform valorii reale a bunurilor deteriorate.",
        "Garanția blocată pe cardul tău este deblocată după confirmarea plății de către asigurător."
      ],
      "summary": "Incidentul stânjenitor din hotel este rezolvat elegant și profesionist prin asigurare."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Excluderea intenției sau a stării de ebrietate",
          "detail": "Dacă daunele au fost produse ca urmare a consumului excesiv de alcool sau a unei petreceri zgomotoase neautorizate, despăgubirea este exclusă."
        },
        {
          "label": "Plafonul de răspundere civilă",
          "detail": "Asigură-te că polița de călătorie include o sumă decentă pentru răspundere (minim 10.000 – 50.000 EUR)."
        }
      ]
    },
    "immediateSteps": [
      "Anunță imediat recepția hotelului despre incident pentru a evita acuzațiile de ascundere cu rea-credință a faptei.",
      "Fotografiază bunul avariat (televizor, parchet) și cere o copie a procesului-verbal întocmit de șeful de recepție (Incident Report).",
      "Nu achita devizul în numerar fără a obține o factură detaliată cu descrierea exactă a modelului înlocuit.",
      "Transmite documentele către asigurătorul tău de călătorie."
    ],
    "usefulDocuments": [
      "Raportul de incident emis de administrația hotelului",
      "Factura fiscală de reparație sau înlocuire a bunului",
      "Polița de asigurare de călătorie cu clauza de răspundere civilă inclusă"
    ],
    "advisorQuestions": [
      "Sunt acoperite daunele accidentale produse de copiii minori cazați în aceeași cameră?",
      "Ce franșiză se aplică pentru răspunderea civilă a turistului în afara țării?"
    ],
    "disclaimer": "Acest scenariu presupune caracterul pur accidental al producerii prejudiciului, fără intenție sau acte de vandalism.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-evacuare-urgenta-destinatie-izolata",
    "slug": "evacuare-urgenta-destinatie-izolata",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Accident grav pe o insulă izolată din Maldive sau safari în Africa",
    "mainQuestion": "Cât costă transportul de urgență cu hidroavion sau elicopter până la cel mai apropiat spital chirurgical?",
    "shortDescription": "Un atol fără spital necesită transfer aerian de urgență pe timp de furtună către capitala Male.",
    "situation": "Te afli pe un atol izolat în Maldive sau într-o rezervație naturală de safari în Tanzania. O căzătură la piscina resortului provoacă un traumatism cranian sever cu pierderea cunoștinței. Medicul de pe insulă constată că pacientul are nevoie de tomografie computerizată și neurochirurgie urgentă. Singura modalitate de transport este un hidroavion privat charter sau un elicopter sanitar.",
    "heroImage": "/images/scenarios/medical-transport.jpg",
    "imageCaption": "Evacuarea de urgență din zone maritime izolate sau rezervații naturale necesită logistică aeriană privată cu costuri pe oră de zbor foarte mari.",
    "severityLabel": "Urgență Vitală și Cost Masiv",
    "featured": false,
    "tags": [
      "evacuare-urgenta",
      "hidroavion-salvare",
      "insule-izolate",
      "asigurare-calatorie",
      "safari-africa"
    ],
    "illustrativeCost": "Cost transfer aerian de urgență cu hidroavion: 8.000 – 22.000 USD",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie cu căutare și salvare (Search & Rescue)",
      "statusLabel": "Operatorul aerian cere plata garantată înainte de decolare",
      "financialImpact": "Mii de dolari blocați pe card sau întârzierea transferului vital",
      "points": [
        "Companiile de hidroavioane private nu efectuează misiuni de evacuare medicală fără confirmarea plății de la resort sau familie.",
        "Resortul de lux transferă costul zborului direct pe nota de plată a camerei.",
        "Orice minut de întârziere cauzat de verificarea fondurilor bancare poate fi fatal în cazul unui hematom intracranian."
      ],
      "summary": "Lipsa unei polițe recunoscute internațional poate întârzia transferul medical critic."
    },
    "withInsurance": {
      "title": "Cu asigurare de călătorie internațională cu acoperire Search, Rescue & Evacuation",
      "statusLabel": "Coordonare instantă de către dispeceratul internațional de asistență",
      "financialImpact": "Decontare 100% a transferului aerian și a spitalizării",
      "points": [
        "Dispeceratul de asistență activează direct rețeaua regională de evacuare medicală de urgență.",
        "Zborul cu hidroavionul sau elicopterul este achitat integral, iar echipa medicală preia pacientul de pe debarcader.",
        "La aterizare în capitală, o ambulanță specializată așteaptă pe pistă pentru transferul la spitalul chirurgical de referință."
      ],
      "summary": "Salvarea vieții primează, toate cheltuielile de mii de dolari fiind garantate instant de asigurător."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de Evacuare de Urgență (Emergency Evacuation)",
          "detail": "Verifică dacă evacuarea către cel mai apropiat centru medical adecvat are sumă separată generoasă."
        },
        {
          "label": "Zone geografice izolate",
          "detail": "Asigură-te că polița nu exclude insulele mici sau călătoriile de tip expediție/safari."
        }
      ]
    },
    "immediateSteps": [
      "Permite medicului din resort să sune direct la numărul de asistență de pe cardul tău de asigurare.",
      "Transmite starea de alertă medicală și aprobarea verbală pentru transferul pe calea aerului.",
      "Pregătește pașapoartele pentru controlul vamal dacă transferul se face într-o țară vecină.",
      "Păstrează toate fișele de prim-ajutor completate de personalul medical local."
    ],
    "usefulDocuments": [
      "Polița de asigurare de călătorie",
      "Raportul medical de transfer semnat de medicul de pe insulă/resort",
      "Confirmarea de zbor emisă de operatorul aerian charter"
    ],
    "advisorQuestions": [
      "Include polița mea clauza de transport cu hidroavionul în cazul vacanțelor pe insule fără spital?",
      "Care este procedura de autorizare rapidă a zborurilor de evacuare medicală?"
    ],
    "disclaimer": "Evacuarea medicală de urgență se autorizează strict în baza unei indicații medicale urgente și vitale documentate de medici.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-intrerupere-sejur-deces-ruda",
    "slug": "intrerupere-sejur-deces-ruda",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Vacanță întreruptă forțat la jumătate din cauza decesului unui membru apropiat al familiei",
    "mainQuestion": "Ce se întâmplă dacă ești nevoit să te întorci de urgență în țară în ziua 4 a unui sejur de 14 zile?",
    "shortDescription": "Trebuie să cumperi bilete de avion last-minute și pierzi cele 10 nopți de cazare deja plătite.",
    "situation": "Te afli în Mexic sau Thailanda într-o vacanță planificată de mult timp. În a patra zi de concediu, primești vestea tragică că un părinte sau un frate din România a suferit un deces neașteptat. Ești nevoit să abandonezi vacanța și să te întorci imediat acasă. Zborurile de ultim moment costă o avere, iar hotelul nu rambursează cele 10 nopți rămase neutilizate.",
    "heroImage": "/images/scenarios/missed-connection.jpg",
    "imageCaption": "Clauza de întrerupere forțată a călătoriei protejează valoarea serviciilor turistice rămase neutilizate ca urmare a unui eveniment tragic în familie.",
    "severityLabel": "Pierdere Emoțională și Financiară",
    "featured": false,
    "tags": [
      "intrerupere-calatorie",
      "deces-familie",
      "zbor-urgenta",
      "asigurare-storno",
      "rambursare-zile-neutilizate"
    ],
    "illustrativeCost": "Valoare zile neutilizate + bilete de urgență: 2.500 – 5.000 EUR",
    "withoutInsurance": {
      "title": "Fără clauză de Întrerupere de Sejur",
      "statusLabel": "Pierdere integrală a sumelor plătite și cost suplimentar de zbor",
      "financialImpact": "Mii de euro pierduți în plin moment de doliu",
      "points": [
        "Hotelierii și agențiile consideră plecarea timpurie ca pe o decizie personală a clientului (no-show voluntar) și nu rambursează nopțile rămase.",
        "Biletele de întoarcere luate în regim de urgență pentru a doua zi au tarife astronomice.",
        "Familia suportă o cheltuială imensă într-un moment de vulnerabilitate emoțională maximă."
      ],
      "summary": "Tragedia personală este dublată de o gaură financiară masivă cauzată de serviciile turistice abandonate forțat."
    },
    "withInsurance": {
      "title": "Cu poliță de călătorie extinsă cu clauză de Întrerupere a Sejurului",
      "statusLabel": "Rambursarea pro-rata a nopților rămase + plata biletului de întoarcere",
      "financialImpact": "Recuperezi contravaloarea zilelor nefolosite și zborul este asigurat",
      "points": [
        "Asigurătorul rambursează valoarea calculată pro-rata pentru toate nopțile de cazare și excursiile plătite și neutilizate.",
        "Centrala de asistență poate rezerva și deconta direct biletele de avion pentru cea mai rapidă cursă aeriană spre România.",
        "Procedura este simplificată, necesitând doar certificatul de deces și actele de rudenie depuse la întoarcere."
      ],
      "summary": "Asigurarea îți permite să fii alături de cei dragi acasă fără a te îngrijora de miile de euro pierdute."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Definiția familiei apropiate",
          "detail": "Verifică lista exactă a rudelor acceptate (soț/soție, copii, părinți, frați, bunici)."
        },
        {
          "label": "Plata pro-rata a serviciilor",
          "detail": "Asigură-te că polița decontează explicit cazarea rămasă nefolosită din momentul părăsirii resortului."
        }
      ]
    },
    "immediateSteps": [
      "Contactează imediat dispeceratul de asistență pentru a raporta evenimentul și a solicita asistență la rezervarea zborului de retur.",
      "Cere de la recepția hotelului o confirmare scrisă de check-out anticipat (Early Departure Letter) cu data și ora plecării.",
      "Păstrează chitanțele biletelor noi de avion cumpărate.",
      "Depune dosarul la asigurător transmițând certificatul de deces și actele de stare civilă."
    ],
    "usefulDocuments": [
      "Certificatul de deces al rudei de gradul I/II",
      "Documentele de stare civilă care atestă gradul de rudenie (certificat de naștere/căsătorie)",
      "Confirmarea de plecare timpurie de la hotel și facturile biletelor noi de avion"
    ],
    "advisorQuestions": [
      "Ce sumă maximă decontează asigurătorul pentru achiziția biletelor de avion de urgență pentru întoarcere?",
      "Cum se calculează suma rambursată pentru zilele de cazare neefectuate?"
    ],
    "disclaimer": "Acest scenariu presupune producerea unui deces neprevăzut atestat cu documente medico-legale oficiale.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-croaziera-urgenta-medicala-mare",
    "slug": "croaziera-urgenta-medicala-mare",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Urgență cardiacă la bordul unui vas de croazieră în ape internaționale",
    "mainQuestion": "Ce se întâmplă dacă ai nevoie de terapie intensivă la bordul unui vas de croazieră în mijlocul oceanului?",
    "shortDescription": "Centrul medical de la bord tarifează la minut, iar evacuarea cu elicopterul Gărzii de Coastă costă zeci de mii de euro.",
    "situation": "În timp ce te afli într-o croazieră în Marea Mediterană sau Caraibe, suferi un sindrom coronarian acut (infarct miocardic). Ești stabilizat în spitalul de la bordul navei. Medicii de bord solicită intervenția elicopterului naval de salvare pentru a te transporta de urgență la o clinică de cardiologie intervențională de pe țărm. Factura spitalului navei este de 8.500 USD, la care se adaugă costul transferului naval.",
    "heroImage": "/images/scenarios/travel-medical.jpg",
    "imageCaption": "Centrele medicale de pe vasele de croazieră operează ca spitale private în regim comercial cu tarife extrem de mari facturate direct în contul cabinei.",
    "severityLabel": "Cost Medical și Maritim Extrem",
    "featured": false,
    "tags": [
      "croaziera",
      "infarct-bord",
      "elicopter-salvare",
      "ape-internationale",
      "asigurare-calatorie"
    ],
    "illustrativeCost": "Costuri medicale la bord + transfer terestru: 12.000 – 35.000 USD",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie adaptată pentru croaziere",
      "statusLabel": "Factura medicală se adaugă pe nota de plată a cabinei la debarcare",
      "financialImpact": "Debitare automată de zeci de mii de dolari de pe cardul înregistrat",
      "points": [
        "La îmbarcarea pe vasul de croazieră ești obligat să lași un card de credit care garantează toate cheltuielile efectuate la bord.",
        "Spitalul navei facturează fiecare oră de oxigen, fiecare doză de anticoagulant și fiecare consultație la tarife private internaționale.",
        "Dacă nu ai asigurare, întreaga sumă este debitată direct de pe cardul tău înainte de a ți se permite debarcarea."
      ],
      "summary": "O croazieră de relaxare devine un coșmar financiar de mii de dolari debitați instantaneu."
    },
    "withInsurance": {
      "title": "Cu asigurare de călătorie extinsă cu acoperire pentru Croaziere Maritime",
      "statusLabel": "Decontare directă a costurilor clinicii de bord și a transferului la țărm",
      "financialImpact": "Acoperire completă prin scrisoarea de garanție a asigurătorului",
      "points": [
        "Asigurarea acoperă cheltuielile medicale realizate în centrul medical al navei de croazieră.",
        "Este decontată evacuarea maritimă sau aeriană de urgență către portul sau clinica specializată de pe țărm.",
        "Sunt acoperite nopțile suplimentare de cazare pentru însoțitor în orașul portuar unde pacientul este spitalizat."
      ],
      "summary": "Tot tratamentul critic la bord și transferul sunt acoperite fără ca tu să rămâi cu conturile golite."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza specifică de Croazieră",
          "detail": "Multe polițe ieftine exclud explicit incidentele petrecute pe ape internaționale sau impun bifarea opțiunii „Croazieră”."
        },
        {
          "label": "Suma asigurată medicală",
          "detail": "Asigură-te că ai o limită de cel puțin 50.000 – 100.000 EUR pentru evenimente pe mare."
        }
      ]
    },
    "immediateSteps": [
      "Prezintă certificatul de asigurare medicului șef al vasului de croazieră chiar în momentul internării la infirmerie.",
      "Solicită ofițerului de relații cu oaspeții să transmită dosarul medical centralei de asistență a asigurătorului tău.",
      "Păstrează fișa detaliată a tratamentelor aplicate la bord.",
      "Coordonează transferul la spitalul de la țărm împreună cu dispeceratul de asigurări."
    ],
    "usefulDocuments": [
      "Nota medicală și de plată emisă de spitalul navei de croazieră (Medical Bill)",
      "Biletul de îmbarcare și itinerariul croazierei",
      "Polița de asigurare de călătorie cu clauza de croazieră activă"
    ],
    "advisorQuestions": [
      "Include polița mea asistență medicală pe vase de croazieră în ape internaționale?",
      "Ce documente sunt cerute de asigurător pentru decontarea serviciilor facturate de compania de croazieră?"
    ],
    "disclaimer": "Turismul pe vase de croazieră presupune un regim juridic și medical specific în apele internaționale.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-refuz-imbarcare-suprarezervare-overbooking",
    "slug": "refuz-imbarcare-suprarezervare-overbooking",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Refuz la îmbarcare din cauza suprarezervării (Overbooking) zborului",
    "mainQuestion": "Ce drepturi ai dacă te prezinți la timp la poartă și linia aeriană îți spune că nu mai sunt locuri în avion?",
    "shortDescription": "Compania aeriană a vândut mai multe bilete decât capacitatea aeronavei și refuză îmbarcarea.",
    "situation": "Ajungi la poarta de îmbarcare la aeroportul din Viena pentru un zbor spre casă. Agentul de poartă te anunță că zborul a fost suprarezervat (overbooking) și că nu mai există niciun loc disponibil în cabină pentru tine. Ți se propune un zbor peste 26 de ore sau o redirecționare complicată prin alt continent.",
    "heroImage": "/images/scenarios/flight-cancelled.jpg",
    "imageCaption": "Suprarezervarea este o practică comercială legală a companiilor aeriene, însă atrage obligații financiare stricte de despăgubire imediată.",
    "severityLabel": "Disconfort și Drept Legal la Compensație",
    "featured": false,
    "tags": [
      "overbooking",
      "refuz-imbarcare",
      "drepturi-pasageri",
      "ec261",
      "compensatie-imediata"
    ],
    "illustrativeCost": "Compensație legală datorată: 250 – 600 EUR pe loc + cazare gratuită",
    "withoutInsurance": {
      "title": "Dacă nu îți cunoști drepturile legale conform Regulamentului CE 261/2004",
      "statusLabel": "Risc de a accepta un simplu voucher de valoare redusă",
      "financialImpact": "Pierderea a sute de euro în numerar la care aveai dreptul legal",
      "points": [
        "Compania încearcă adesea să ofere vouchere de zbor cu restricții în locul banilor cash.",
        "Dacă nu știi legea, poți accepta renunțarea voluntară fără să știi că refuzul involuntar impune plata a 250, 400 sau 600 EUR pe loc în numerar sau transfer bancar.",
        "Multe persoane își plătesc singure noaptea de hotel dacă nu solicită ferm cazarea garantată de lege."
      ],
      "summary": "Necunoașterea drepturilor permite companiei aeriene să scape de plata compensațiilor bănești obligatorii."
    },
    "withInsurance": {
      "title": "Cu ghidaj de asistență juridică de călătorie și acoperire de întârziere",
      "statusLabel": "Încasare integrală a compensației europene + suport hotelier imediat",
      "financialImpact": "Încasezi compensația legală (250 – 600 EUR) + servicii complete de asistență",
      "points": [
        "Polița de asistență te ghidează pas cu pas la ghișeu pentru a obține dovada scrisă a refuzului la îmbarcare.",
        "Primești hotel asigurat, transfer și mese plătite până la următoarea cursă aeriană.",
        "Asigurătorul te ajută să recuperezi banii legali fără comisionul de 30-40% oprit de site-urile de intermediere despăgubiri."
      ],
      "summary": "Îți exerciți toate drepturile legale fără să fii păcălit de ofertele nefavorabile ale companiilor aeriene."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Voluntar vs Involuntar",
          "detail": "Dacă accepți voluntar oferta companiei de a renunța la loc, pierzi dreptul la compensația standard forfetară de 250 – 600 EUR."
        },
        {
          "label": "Sosirea la timp la poartă",
          "detail": "Dreptul se aplică doar dacă ai făcut check-in-ul și te-ai prezentat la poartă înainte de ora de închidere (Boarding Gate Closing Time)."
        }
      ]
    },
    "immediateSteps": [
      "Refuză să renunți voluntar dacă ai nevoie urgentă să ajungi acasă și solicită confirmarea scrisă a refuzului involuntar de îmbarcare (DBC - Denied Boarding Certificate).",
      "Cere plata imediată a compensației de 250, 400 sau 600 EUR conform distanței de zbor.",
      "Solicită la ghișeu voucherul de cazare la hotel și transferul cu taxiul asigurat.",
      "Păstrează biletul inițial de îmbarcare cu numărul de loc nealocat."
    ],
    "usefulDocuments": [
      "Certificatul de refuz la îmbarcare (DBC) semnat de agentul companiei",
      "Tichetele de îmbarcare inițiale",
      "Confirmarea noului itinerariu oferit de companie"
    ],
    "advisorQuestions": [
      "Ce compensație bănească îmi datorează linia aeriană pentru distanța zborului meu?",
      "Pot refuza voucherul de zbor și cere bani cash în contul meu bancar?"
    ],
    "disclaimer": "Regulamentul CE 261/2004 este direct aplicabil tuturor zborurilor cu plecare din UE sau operate de companii europene.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-furtuna-anulare-feribot-insula",
    "slug": "furtuna-anulare-feribot-insula",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Furtună pe mare și feriboturi anulate, blocat pe o insulă grecească",
    "mainQuestion": "Ce se întâmplă dacă vântul de gradul 9 oprește toate vapoarele și ratezi zborul de avion de la Atena?",
    "shortDescription": "Valurile uriașe țin navele la ancoră 3 zile, provocând ratarea zborurilor internaționale de legătură.",
    "situation": "Te afli în vacanță pe o insulă grecească (Santorini sau Milos). Cu 24 de ore înainte de zborul tău de retur din Atena, autoritatea portuară declară interdicție de navigație (Sea Ban) din cauza vântului Meltemi de 50 de noduri. Niciun feribot nu mai pleacă din port. Ratezi cursa aeriană de Atena - București și trebuie să plătești 3 nopți în plus pe insulă.",
    "heroImage": "/images/scenarios/missed-connection.jpg",
    "imageCaption": "Interdicțiile meteo maritime instituite de căpităniile de port sunt clasificate ca forță majoră, scutind companiile navale de compensații directe.",
    "severityLabel": "Risc Logistic și Financiar Mediu",
    "featured": false,
    "tags": [
      "feribot-anulat",
      "insula-grecia",
      "furtuna-mare",
      "escala-ratata",
      "asigurare-calatorie"
    ],
    "illustrativeCost": "Costuri nopți suplimentare + bilet avion nou: 500 – 1.200 EUR",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie extinsă",
      "statusLabel": "Compania de feribot îți restituie doar biletul de vapor",
      "financialImpact": "500 – 1.200 EUR cheltuieli suportate din bani proprii",
      "points": [
        "Compania de transport maritim returnează prețul biletului de vapor de 40 EUR, dar nu are nicio obligație pentru zborul tău de 400 EUR ratat la Atena.",
        "Hotelierii de pe insulă profită adesea de situație și taxează nopțile suplimentare la tarif de plin sezon.",
        "Trebuie să achiți un nou bilet de avion de întoarcere pentru toată familia."
      ],
      "summary": "Forța majoră meteo te lasă fără niciun sprijin financiar din partea transportatorilor de pe traseu."
    },
    "withInsurance": {
      "title": "Cu poliță de călătorie cu clauză de Fenomene Naturale și Conexiune Ratată",
      "statusLabel": "Decontarea nopților suplimentare pe insulă și a noului bilet de avion",
      "financialImpact": "Recuperare integrală a costurilor suplimentare generate de furtună",
      "points": [
        "Asigurătorul decontează cheltuielile justificate de cazare pe durata în care portul a fost închis oficial.",
        "Este acoperită diferența de cost pentru achiziționarea unui nou bilet de avion către casă după reluarea circulației.",
        "Primești asistență 24/7 pentru reorganizarea traseului logistic de călătorie."
      ],
      "summary": "Impactul financiar al furtunii este preluat integral de asigurarea ta de vacanță."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Dovada oficială a Căpităniei",
          "detail": "Asigurătorul solicită adeverința oficială de la Autoritatea Portuară (Port Police) care atestă interdicția de navigație din motive meteo."
        },
        {
          "label": "Plafonul pe zi de cazare",
          "detail": "Verifică limita maximă per noapte decontată pentru cazarea suplimentară forțată (ex. 100 – 150 EUR/noapte)."
        }
      ]
    },
    "immediateSteps": [
      "Mergi la biroul Căpităniei Portului (Limenarchio) sau la agenția de bilete și cere dovada scrisă a anulării curselor maritime.",
      "Anunță compania aeriană că nu poți ajunge din cauza interdicției maritime (unele companii pot reprograma gratuit pe motiv de forță majoră documentată).",
      "Păstrează facturile pentru nopțile de hotel petrecute în așteptarea deblocării portului.",
      "Depune dosarul la asigurătorul tău de călătorie."
    ],
    "usefulDocuments": [
      "Comunicatul oficial de interdicție de navigație al Poliției Portuare",
      "Biletele de feribot anulate și noul bilet de avion achiziționat",
      "Facturile de cazare suplimentară din insulă"
    ],
    "advisorQuestions": [
      "Acoperă polița mea de călătorie costurile ratării zborului din cauza transportului maritim anulat de vreme?",
      "Ce plafon maxim există pentru nopțile de cazare neprevăzute?"
    ],
    "disclaimer": "Informații orientative. Evenimentele de forță majoră meteo se probează obligatoriu cu adeverințe emise de autoritățile locale competente.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "calatorii-agresiune-talharie-destinatie-turistica",
    "slug": "agresiune-talharie-destinatie-turistica",
    "categoryId": "calatorii",
    "categoryName": "CĂLĂTORII & INTERNAȚIONAL",
    "title": "Tâlhărie prin violență și rănire fizică într-o vacanță în America de Sud",
    "mainQuestion": "Ce se întâmplă dacă ești victima unei agresiuni fizice pe stradă și ai nevoie de îngrijiri medicale de urgență?",
    "shortDescription": "Un atac armat pentru deposedare de bunuri lasă victima cu traumatisme craniene și fără telefon sau bani.",
    "situation": "În timp ce te plimbi pe o stradă turistică în Rio de Janeiro sau Buenos Aires, ești atacat de două persoane înarmate. În urma tentativei de a proteja rucsacul, ești lovit, suferi o fractură de mandibulă și contuzii serioase. Agresorii fug cu telefonul, ceasul și rucsacul. Ești transportat de urgență la o clinică privată pentru suturi și investigații imagistice.",
    "heroImage": "/images/scenarios/travel-medical.jpg",
    "imageCaption": "Tâlhăriile violente în destinații internaționale impun asistență medicală chirurgicală imediată, suport consular și consiliere juridică.",
    "severityLabel": "Traumă Medicală și Pierdere Materială",
    "featured": false,
    "tags": [
      "talharie",
      "agresiune-fizica",
      "urgenta-medicala-strainatate",
      "asigurare-calatorie",
      "spitalizare-urgenta"
    ],
    "illustrativeCost": "Costuri medicale spital privat + bunuri sustrase: 4.000 – 12.000 USD",
    "withoutInsurance": {
      "title": "Fără asigurare de călătorie completă",
      "statusLabel": "Toate cheltuielile medicale și pierderile materiale suportate personal",
      "financialImpact": "Mii de dolari plătiți pentru spitalizare de urgență",
      "points": [
        "Spitalele publice din țările în curs de dezvoltare sunt adesea supraaglomerate și lipsite de consumabile, forțând internarea într-o clinică privată scumpă.",
        "Poliția locală ia declarații, dar șansele de a recupera bunurile de la infractori sunt aproape zero.",
        "Rămâi fără telefon, bani și cu o notă de plată medicală uriașă de achitat înainte de externare."
      ],
      "summary": "Trauma fizică este amplificată de obligația de a găsi mii de dolari pentru a achita spitalul privat."
    },
    "withInsurance": {
      "title": "Cu asigurare de călătorie cu acoperire medicală extinsă și clauză de jaf armat / agresiune",
      "statusLabel": "Spitalizare acoperită integral prin decontare directă + despăgubire bunuri sustrase",
      "financialImpact": "Tratament medical de elită garantat fără costuri proprii",
      "points": [
        "Dispeceratul de asigurări garantează plata tuturor intervențiilor chirurgicale și a investigațiilor CT/RMN în clinica privată.",
        "Polița compensează valoarea bunurilor sustrase prin violență (jaf confirmat prin proces-verbal de poliție).",
        "Este asigurat un psiholog sau un reprezentant de asistență pentru sprijin moral și logistic."
      ],
      "summary": "Beneficiezi de cele mai bune tratamente medicale fără presiunea datoriilor financiare."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Definiția agresiunii/tâlhăriei",
          "detail": "Asigurătorul cere ca evenimentul să fi fost comis prin amenințare sau violență fizică, atestată de medic și poliție."
        },
        {
          "label": "Avertismentele MAE",
          "detail": "Verifică dacă destinația nu se afla sub un avertisment guvernamental strict „Evitați orice călătorie” emis de Ministerul Afacerilor Externe."
        }
      ]
    },
    "immediateSteps": [
      "Prioritatea absolută este apelarea serviciilor de urgență și transportul la cel mai apropiat centru medical.",
      "Solicită conducerii spitalului să contacteze numărul internațional de asistență de pe polița ta.",
      "Depune plângere penală la secția de poliție turistică (Policia Turistica) imediat ce starea de sănătate o permite.",
      "Păstrează toate rapoartele medicale și constatările medico-legale."
    ],
    "usefulDocuments": [
      "Raportul de intervenție medicală și foaia de observație din spital",
      "Plângerea penală înregistrată la Poliția locală",
      "Polița de asigurare de călătorie"
    ],
    "advisorQuestions": [
      "Ce plafon de despăgubire există pentru bunurile sustrase prin violență/jaf armat?",
      "Este acoperită repatrierea anticipată dacă pacientul nu mai poate continua călătoria după agresiune?"
    ],
    "disclaimer": "Acoperirea este supusă normelor de siguranță publică și respectării avertismentelor de călătorie oficiale ale autorităților competente.",
    "lastReviewed": "Octombrie 2026"
  }
];
