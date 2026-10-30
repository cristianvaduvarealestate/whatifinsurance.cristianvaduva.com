import { Scenario } from '@/types/scenario';

export const raspundereScenarios: Scenario[] = [
  {
    "id": "raspundere-copil-sparge-televizor-magazin",
    "slug": "copil-sparge-televizor-magazin",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Copilul trage de pe stand și sparge un televizor de 15.000 RON într-un showroom",
    "mainQuestion": "Cine este obligat legal să plătească un produs scump spart accidental de un minor într-un magazin?",
    "shortDescription": "O clipă de neatenție la cumpărături se soldează cu un ecran OLED de 85 inch făcut țăndări pe gresie.",
    "situation": "Te afli într-un magazin de electronice de mari dimensiuni împreună cu copilul tău de 5 ani. În timp ce citești specificațiile unui electrocasnic, copilul fuge spre un stand pe care era expus un televizor OLED de ultimă generație. Trage de cablu sau de marginea ramei, iar televizorul se prăbușește de la 1 metru înălțime pe podea. Ecranul este spart complet, iar carcasa este deformată. Șeful de magazin întocmește proces-verbal și solicită plata a 14.999 RON conform Codului Civil (răspunderea părinților pentru fapta minorului).",
    "heroImage": "/images/scenarios/family-tv-broken.jpg",
    "imageCaption": "Articolul 1372 din Codul Civil român instituie răspunderea părinților pentru prejudiciile cauzate de copiii lor minori.",
    "severityLabel": "Risc Financiar Imediat",
    "featured": true,
    "tags": [
      "raspundere-parinteasca",
      "copil-minor",
      "dauna-magazin",
      "televizor-spart",
      "rc-familie"
    ],
    "illustrativeCost": "Cost produs distrus: 10.000 – 25.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere Civilă a Familiei (Cap de Familie)",
      "statusLabel": "Părintele achită 100% din veniturile proprii",
      "financialImpact": "Plată directă de 14.999 RON sau proces civil cu executare",
      "points": [
        "Conform Art. 1372 Cod Civil, părinții răspund integral pentru fapta ilicită săvârșită de minorul aflat sub supravegherea lor.",
        "Magazinul are înregistrări video clare de pe camerele de supraveghere.",
        "Dacă refuzi plata, magazinul deschide acțiune civilă în instanță, adăugând cheltuieli de judecată și onorarii de avocați."
      ],
      "summary": "Ești obligat legal să scoți mii de euro din economii pentru a acoperi gafa minorului."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Civilă a Familiei (Cap de Familie)",
      "statusLabel": "Despăgubire integrală achitată magazinului de către asigurător",
      "financialImpact": "Plata doar a unei franșize mici (ex. 50 – 100 EUR) sau zero costuri",
      "points": [
        "Asigurarea de Răspundere Civilă a Familiei acoperă expres daunele materiale provocate terților de către membrii familiei (inclusiv copiii minori).",
        "Asigurătorul verifică înregistrarea video și factura de intrare în gestiune a magazinului și virează despăgubirea direct în contul companiei comerciale.",
        "Părintele nu este târât în procese sau dispute la casierie."
      ],
      "summary": "Polița funcționează ca un scut financiar perfect împotriva accidentelor copilărești."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Definiția persoanelor asigurate",
          "detail": "Asigură-te că polița include soțul/soția și toți copiii minori care locuiesc în aceeași gospodărie."
        },
        {
          "label": "Bunuri încredințate vs Bunuri terți",
          "detail": "Dauna într-un magazin sau spațiu public este un prejudiciu clasic adus unui terț acoperit standard."
        },
        {
          "label": "Suma asigurată per an",
          "detail": "Verifică plafonul de răspundere anual (recomandat minim 10.000 – 30.000 EUR)."
        }
      ]
    },
    "immediateSteps": [
      "Păstrează calmul și verifică dacă copilul a suferit vreo zgârietură sau tăietură de la sticla spartă.",
      "Solicită conducerii magazinului întocmirea unui proces-verbal de constatare la fața locului și salvarea înregistrării video.",
      "Nu achita suma pe loc în numerar; solicită emiterea unei adrese oficiale de pretenții și a facturii de gestiune.",
      "Avizează evenimentul la compania ta de asigurări de răspundere civilă."
    ],
    "usefulDocuments": [
      "Procesul-verbal de incident întocmit de agentul de securitate/șeful de magazin",
      "Factura de achiziție de la furnizor sau prețul de raft al bunului avariat",
      "Polița de Răspundere Civilă a Familiei"
    ],
    "advisorQuestions": [
      "Acoperă polița mea de locuință și răspunderea civilă a familiei în afara casei (în spații comerciale)?",
      "Ce procedură de despăgubire există pentru bunurile expuse în showroom-uri comerciale?"
    ],
    "disclaimer": "Răspunderea parentală este reglementată strict de Codul Civil român; asigurarea preia sarcina financiară a despăgubirii.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-caine-musca-trecator-parc",
    "slug": "caine-musca-trecator-parc",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Câinele familiei se sperie și mușcă un trecător în parc",
    "mainQuestion": "Ce răspundere financiară și penală ai dacă animalul tău de companie rănește o persoană pe domeniul public?",
    "shortDescription": "Un zgomot brusc declanșează o reacție agresivă a câinelui: haine sfâșiate, plăgi mușcate și nevoie de vaccin antirabic.",
    "situation": "Plimbi câinele în parc în lesă. Un copil trece în viteză pe lângă voi cu o trotinetă metalică zgomotoasă. Câinele se sperie, sare brusc și mușcă un trecător adult de antebraț și picior. Victima suferă răni deschise profunde care necesită suturi chirurgicale la Urgențe, profilaxie antirabică și antitetanică, plus concediu medical de 3 săptămâni.",
    "heroImage": "/images/scenarios/dog-bite.jpg",
    "imageCaption": "Conform Art. 1375 Cod Civil, proprietarul unui animal răspunde pentru prejudiciul cauzat de acesta, indiferent dacă animalul se afla în paza sa sau scăpase de sub control.",
    "severityLabel": "Răspundere Vătămări Corporale",
    "featured": true,
    "tags": [
      "caine-muscatura",
      "raspundere-animal-companie",
      "vatamare-corporala",
      "daune-morale",
      "rc-detinator-animale"
    ],
    "illustrativeCost": "Despăgubiri medicale + daune morale: 8.000 – 35.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere Civilă a Deținătorului de Animale",
      "statusLabel": "Proprietarul câinelui plătește totul din buzunar + dosar penal",
      "financialImpact": "Plată de mii de euro pentru daune materiale și daune morale",
      "points": [
        "Victima depune plângere penală pentru vătămare corporală din culpă (Art. 196 Cod Penal) și se constituie parte civilă.",
        "Instanța te va obliga la plata tuturor cheltuielilor medicale, a salariului nerealizat pe perioada concediului medical și la daune morale consistente.",
        "Ești nevoit să angajezi un avocat de drept penal și civil cu costuri mari de onorariu."
      ],
      "summary": "O secundă de neatenție a câinelui se poate transforma într-un proces penal costisitor și stresant."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Civilă a Deținătorilor de Câini / RC Familie",
      "statusLabel": "Despăgubire integrală a tratamentelor, veniturilor pierdute și daunelor morale",
      "financialImpact": "Asigurătorul achită tranzacția amiabilă sau despăgubirea stabilită de judecător",
      "points": [
        "Polița acoperă vătămările corporale provocate de animalul de companie asigurat.",
        "Sunt decontate tratamentele spitalicești, medicamentele, refacerea hainelor sfâșiate și daunele morale în limita sumei asigurate.",
        "Multe polițe oferă și protecție juridică (acoperirea onorariului avocatului pentru mediere sau reprezentare)."
      ],
      "summary": "Asigurarea mediază conflictul pe cale amiabilă și despăgubește victima rapid fără executare silită pe bunurile tale."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Rase considerate periculoase",
          "detail": "ATENȚIE: Rasele agresive (Pit Bull, Rottweiler, Amstaff, Ciobănesc Caucazian etc.) conform OUG 55/2002 impun o poliță obligatorie dedicată de câini periculoși; ele sunt EXCLUSE din polițele standard de familie."
        },
        {
          "label": "Lesă și botniță",
          "detail": "Verifică cerințele locale privind obligativitatea botniței în locurile publice aglomerate."
        },
        {
          "label": "Carnetul de sănătate și microcipul",
          "detail": "Animalul trebuie să fie microcipat legal și cu vaccinul antirabic la zi."
        }
      ]
    },
    "immediateSteps": [
      "Acordă imediat primul ajutor victimei și apelează 112 pentru trimiterea unei ambulanțe și a unui echipaj de poliție.",
      "Oferă victimei și medicilor copia carnetului de sănătate al câinelui cu dovada vaccinării antirabice (pentru a evita procedurile dureroase inutile).",
      "Fă schimb de date de contact și declară incidentul la secția de poliție competentă.",
      "Deschide dosar de daună pe polița ta de răspundere civilă."
    ],
    "usefulDocuments": [
      "Carnetul de sănătate și pașaportul canin cu microcipul și vaccinările înscrise",
      "Documentele medicale ale victimei și foaia de observație de la camera de gardă",
      "Polița de răspundere civilă"
    ],
    "advisorQuestions": [
      "Este rasa câinelui meu acoperită în polița standard de răspundere a familiei?",
      "Care este limita maximă de despăgubire pentru vătămări corporale produse de animale de companie?"
    ],
    "disclaimer": "Deținătorii de câini din rase periculoase (OUG 55/2002) au obligația legală de a încheia o asigurare de răspundere civilă specifică.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-biciclist-loveste-pieton-trotuar",
    "slug": "biciclist-loveste-pieton-trotuar",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Accident grav pe trotuar: biciclistul lovește un pieton în vârstă",
    "mainQuestion": "Cine plătește operația ortopedică și recuperarea unui pieton accidentat de un biciclist?",
    "shortDescription": "O manevră bruscă de evitare se soldează cu lovirea violentă a unui pensionar care suferă o fractură de col femural.",
    "situation": "Rulezi cu bicicleta pe pista de biciclete sau pe trotuar cu circa 25 km/h. Un pieton face un pas lateral neașteptat dincolo de copaci. Îl lovești în plin. În urma impactului, victima în vârstă de 68 de ani cade pe bordură și suferă o fractură de col femural cu deplasare. Necesită operație ortopedică de urgență pentru montarea unei proteze de șold, urmată de 6 luni de recuperare la pat.",
    "heroImage": "/images/scenarios/cyclist-accident.jpg",
    "imageCaption": "Bicicletele nu au RCA obligatoriu în România, astfel încât utilizatorul răspunde civil delictual cu întregul său patrimoniu personal.",
    "severityLabel": "Răspundere Civilă și Traumatism Grav",
    "featured": true,
    "tags": [
      "biciclist-pieton",
      "fractura-sold",
      "raspundere-civila-bicicleta",
      "proteza-ortopedica",
      "daune-morale"
    ],
    "illustrativeCost": "Proteză de șold privată + spitalizare + daune: 25.000 – 70.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere Civilă a Biciclistului",
      "statusLabel": "Biciclistul răspunde cu toate veniturile și bunurile personale",
      "financialImpact": "Zeci de mii de lei datorați pentru îngrijiri medicale și despăgubiri civile",
      "points": [
        "Poliția Rutieră întocmește dosar penal pentru vătămare corporală din culpă.",
        "Familia victimei solicită decontarea protezei medicale, a kinetoterapiei, a însoțitorului permanent și daune morale consistente.",
        "Fără o poliță de asigurare, se poate ajunge la poprire de 33% pe salariul lunar pe mai mulți ani de zile."
      ],
      "summary": "O plimbare cu bicicleta poate duce la datorii copleșitoare în lipsa unei acoperiri de răspundere civilă."
    },
    "withInsurance": {
      "title": "Cu asigurare de Răspundere Civilă Privată (Modul Mobilitate Alternativă / Bicicletă)",
      "statusLabel": "Preluarea integrală a pretențiilor financiare de către asigurător",
      "financialImpact": "Despăgubire directă aprobată victimei în limita sumei asigurate (ex. 20.000 – 50.000 EUR)",
      "points": [
        "Asigurătorul preia dosarul de pretenții al victimei și decontează cheltuielile medicale justificate cu documente.",
        "Sunt acoperite intervențiile chirurgicale, proteza, medicamentele și indemnizația pentru perioada de incapacitate de mișcare.",
        "Avocații companiei de asigurări negociază o tranzacție extrajudiciară care duce adesea la retragerea plângerii penale de către victimă."
      ],
      "summary": "Victima primește sprijinul medical necesar rapid, iar biciclistul este salvat de la ruina financiară."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Bicicletă electrică (E-bike)",
          "detail": "Verifică dacă polița acoperă și bicicletele electrice (Pedelec cu limitare la 250W și 25 km/h) sau doar bicicletele clasice mecanice."
        },
        {
          "label": "Circulația pe trotuar",
          "detail": "Conform Codului Rutier, mersul pe trotuar fără pistă marcată este interzis; asigură-te că asigurătorul nu are o excludere strictă pentru încălcarea regulilor de circulație rutieră."
        }
      ]
    },
    "immediateSteps": [
      "Acordă primul ajutor, nu muta victima dacă acuză dureri la șold/coloană și apelează imediat 112.",
      "Așteaptă echipajul de la Poliția Rutieră pentru efectuarea măsurătorilor și a testului etilotest.",
      "Oferă datele de contact și copia poliței tale de răspundere civilă familiei victimei.",
      "Notifică de urgență asigurătorul tău despre deschiderea cercetărilor."
    ],
    "usefulDocuments": [
      "Procesul-verbal de cercetare la fața locului emis de Poliția Rutieră",
      "Rapoartele medicale și certificatele medico-legale ale victimei",
      "Polița de asigurare de răspundere civilă a biciclistului"
    ],
    "advisorQuestions": [
      "Acoperă polița mea de familie accidentele produse în timp ce merg pe bicicletă sau trotinetă nemotorizată?",
      "Ce asistență juridică este inclusă în contract pentru procesele civile de vătămare corporală?"
    ],
    "disclaimer": "Circulația pe două roți impune respectarea strictă a normelor rutiere; asigurarea nu exonerează de răspunderea penală.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-obiect-cazut-balcon-masina-parcata",
    "slug": "obiect-cazut-balcon-masina-parcata",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Un ghiveci de flori cade de la etajul 6 peste parbrizul și capota unei mașini",
    "mainQuestion": "Ce se întâmplă dacă o rafală de vânt aruncă un ghiveci greu de pe balconul tău peste o mașină parcată jos?",
    "shortDescription": "Un ghiveci de teracotă de 10 kg sparge plafonul panoramic din sticlă și bordul unui SUV nou.",
    "situation": "O furtună violentă de vară cu rafale de peste 70 km/h smulge un ghiveci ceramic greu de pe balustrada balconului tău de la etajul 6. Ghiveciul cade direct pe plafonul de sticlă al unei mașini parcate regulamentar în fața blocului. Plafonul panoramic se sparge în mii de bucăți, airbagurile cortină sar din cauza senzorilor de impact, iar planșa de bord este distrusă. Paguba este estimată la 35.000 RON.",
    "heroImage": "/images/scenarios/balcony-fall.jpg",
    "imageCaption": "Conform Art. 1378 Cod Civil, proprietarul sau locatarul unui imobil răspunde pentru prejudiciul cauzat prin căderea sau aruncarea din imobil a oricărui lucru.",
    "severityLabel": "Răspundere Obiecte Căzute din Imobil",
    "featured": true,
    "tags": [
      "ghiveci-balcon",
      "obiect-cazut",
      "masina-avariata",
      "art-1378-cod-civil",
      "raspundere-locativa"
    ],
    "illustrativeCost": "Cost înlocuire plafon panoramic + bord + airbaguri: 25.000 – 45.000 RON",
    "withoutInsurance": {
      "title": "Fără clauză de Răspundere Civilă atașată Locuinței",
      "statusLabel": "Proprietarul apartamentului răspunde delictual integral",
      "financialImpact": "Plată de 25.000 – 45.000 RON din economiile personale",
      "points": [
        "Articolul 1378 Cod Civil stabilește o răspundere obiectivă: cel care locuiește în imobil răspunde pentru orice cade de la fereastră sau balcon, indiferent dacă a fost sau nu vinovat direct.",
        "Nu poți invoca vântul ca forță majoră dacă ghiveciul nu era securizat conform regulamentelor asociației.",
        "Proprietarul mașinii sau asigurătorul său CASCO va formula imediat regres civil împotriva ta."
      ],
      "summary": "Ești executat silit pentru întregul deviz al mașinii dacă nu ai asigurare de răspundere."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Răspundere Civilă față de Terți)",
      "statusLabel": "Despăgubire integrală aprobată pe polița ta de locuință",
      "financialImpact": "Zero costuri (acoperit de clauza de răspundere a imobilului)",
      "points": [
        "Clauza de răspundere civilă decurgând din deținerea locuinței acoperă exact riscurile prevăzute de Art. 1378 Cod Civil (obiecte căzute sau aruncate).",
        "Asigurătorul tău decontează direct reparația mașinii către service sau către compania CASCO a păgubitului.",
        "Relațiile de vecinătate sunt păstrate fără certuri sau procese civile."
      ],
      "summary": "Polița casei preia toată responsabilitatea financiară pentru accidentul produs de pe balcon."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Răspunderea decurgând din exploatarea imobilului",
          "detail": "Asigură-te că polița include nu doar pereții casei, ci și prejudiciile produse terților din cauza clădirii sau a bunurilor din ea."
        },
        {
          "label": "Suma asigurată pentru răspundere",
          "detail": "Recomandat un plafon de minim 15.000 – 50.000 EUR per eveniment."
        }
      ]
    },
    "immediateSteps": [
      "Cobori imediat la mașină, identifică proprietarul vehiculului și recunoaște proveniența obiectului.",
      "Fotografiază resturile ghiveciului pe plafonul mașinii și locul de pe balcon de unde s-a desprins.",
      "Oferă proprietarului copia poliței tale de locuință pentru deschiderea dosarului.",
      "Dacă intervine Poliția Rutieră (Biroul de Accidente Ușoare), dă declarație menționând polița de răspundere activă."
    ],
    "usefulDocuments": [
      "Autorizația de Reparație eliberată de Poliția Rutieră",
      "Fotografii ale balconului și ale autoturismului avariat",
      "Polița facultativă de locuință cu clauza de răspundere civilă bifată"
    ],
    "advisorQuestions": [
      "Include polița mea de apartament răspunderea pentru obiecte desprinse de fațadă sau balustradă?",
      "Se aplică franșiză în cazul daunelor provocate bunurilor parcate pe aleea blocului?"
    ],
    "disclaimer": "Securizarea balcoanelor și a ghivecelor exterioare este o obligație a fiecărui locatar conform normelor urbane.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-prieten-imprumut-aparat-foto-distrus",
    "slug": "prieten-imprumut-aparat-foto-distrus",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Scapi și distrugi pe stânci camera foto profesională împrumutată de la un prieten",
    "mainQuestion": "Ce poliță plătește dacă deteriorezi ireversibil un echipament electronic scump împrumutat pe încredere?",
    "shortDescription": "Un aparat mirrorless full-frame cu obiectiv de 4.000 EUR cade pe pietre într-o drumeție montană.",
    "situation": "Împrumuți de la un prieten fotograf o cameră mirrorless profesională Sony Alpha cu un obiectiv G-Master în valoare totală de 20.000 RON pentru un weekend la munte. Pe o potecă stâncoasă, te împiedici, cureaua se desprinde din prindere, iar aparatul se izbește violent de stânci. Montura obiectivului este smulsă, senzorul este fisurat, iar carcasa de magneziu este zdrobită. Aparatul este declarat daună totală economică de către service-ul autorizat.",
    "heroImage": "/images/scenarios/broken-camera.svg",
    "imageCaption": "Bunurile împrumutate (comodat) au un statut special în asigurări și sunt frecvent excluse dacă nu există o clauză dedicată pentru bunuri încredințate.",
    "severityLabel": "Risc Financiar și Moral Personal",
    "featured": false,
    "tags": [
      "camera-foto",
      "echipament-imprumutat",
      "bunuri-incredintate",
      "comodat",
      "raspundere-privata"
    ],
    "illustrativeCost": "Valoare echipament distrus: 15.000 – 25.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare cu acoperire specifică pentru bunuri încredințate",
      "statusLabel": "Datorie morală și materială personală de 100%",
      "financialImpact": "Plată integrală din buzunar a sumei de 20.000 RON",
      "points": [
        "Multe polițe de răspundere civilă standard EXCLUD bunurile luate cu împrumut, în custodie sau chirie (bunuri încredințate/folosite).",
        "Prietenul tău rămâne fără instrumentul său de lucru sau pasiune.",
        "Ești nevoit să economisești sau să iei un credit de nevoi personale pentru a-i cumpăra un aparat similar nou."
      ],
      "summary": "Deteriorarea bunurilor împrumutate distruge prietenii și impune o plată dureroasă din venituri proprii."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Civilă Privată cu Clauza extinsă pentru Bunuri Încredințate (Gefälligkeitsschäden)",
      "statusLabel": "Despăgubire aprobată pentru echipamentul distrus accidental",
      "financialImpact": "Compensarea valorii de înlocuire a aparatului foto",
      "points": [
        "Polițele moderne de răspundere privată oferă clauza specială pentru bunuri împrumutate cu titlu gratuit de la prieteni sau vecini.",
        "Asigurătorul decontează contravaloarea echipamentului la valoarea sa de piață pe baza evaluării service-ului oficial.",
        "Relația de prietenie este salvată fără presiuni financiare apăsătoare."
      ],
      "summary": "Clauza de bunuri încredințate acoperă exact ghinioanele produse obiectelor împrumutate cu bună-credință."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Excluderea bunurilor în folosință/împrumut",
          "detail": "ATENȚIE: Verifică cu atenție capitolul de excluderi; 90% din polițele standard exclud daunele aduse bunurilor aflate în posesia sau custodia asiguratului."
        },
        {
          "label": "Clauza specială de curtoazie",
          "detail": "Caută formularea expresă: „Sunt acoperite daunele aduse bunurilor împrumutate cu titlu gratuit”."
        }
      ]
    },
    "immediateSteps": [
      "Nu încerca reparații improvizate care pot anula garanția producătorului.",
      "Duceți echipamentul împreună la centrul de service autorizat al mărcii pentru o constatare tehnică oficială.",
      "Obțineți devizul tehnic cu mențiunea „daună totală / nereparabil”.",
      "Deschide dosarul la asigurător specificând clauza contractuală aplicabilă."
    ],
    "usefulDocuments": [
      "Raportul de expertiză tehnică din service-ul autorizat",
      "Factura inițială de achiziție a prietenului sau dovada valorii curente de piață",
      "Polița de asigurare de răspundere"
    ],
    "advisorQuestions": [
      "Include polița mea de răspundere clauza pentru bunuri împrumutate temporar de la prieteni?",
      "Care este sublimita de despăgubire pentru echipamente electronice avariate?"
    ],
    "disclaimer": "Asigurarea bunurilor mobile împrumutate este o clauză specială facultativă ce necesită menționare explicită în contract.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-musafir-aluneca-gresie-umeda",
    "slug": "musafir-aluneca-gresie-umeda",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Un musafir alunecă pe gresia udă din baia ta și își rupe antebrațul",
    "mainQuestion": "Ce obligații ai dacă o persoană invitată la tine acasă se accidentează din cauza unei neglijențe casnice?",
    "shortDescription": "O podea proaspăt spălată fără covoraș antiderapant provoacă o căzătură urâtă cu fractură deschisă.",
    "situation": "Organizezi o cină cu prietenii acasă. Unul dintre musafiri merge la baie, unde tocmai se spălase pe jos și gresia lucioasă era încă udă, fără covoraș cauciucat. Alunecă violent, încearcă să se sprijine și își fracturează ambele oase ale antebrațului stâng (radius și ulna). Necesită intervenție chirurgicală cu plăci și șuruburi de titan, 5 zile de spitalizare și incapacitate de muncă de 2 luni.",
    "heroImage": "/images/scenarios/guest-injury-home.jpg",
    "imageCaption": "Proprietarul unei locuințe are o obligație generală de diligență pentru asigurarea siguranței persoanelor invitate în spațiul său privat.",
    "severityLabel": "Vătămare Corporală în Spațiu Privat",
    "featured": false,
    "tags": [
      "musafir-accidentat",
      "gresie-umeda",
      "fractura-brat",
      "raspundere-locuinta",
      "spitalizare-urgenta"
    ],
    "illustrativeCost": "Costuri spitalizare privată + recuperare + daune: 15.000 – 40.000 RON",
    "withoutInsurance": {
      "title": "Fără clauză de răspundere civilă în polița de locuință",
      "statusLabel": "Răspundere personală directă față de prieten/musafir",
      "financialImpact": "Tensuni uriașe în relație și mii de euro cheltuieli medicale",
      "points": [
        "Dacă musafirul lucrează pe cont propriu sau are un job manual, pierderea veniturilor pe 2 luni este o povară uriașă.",
        "Prietenul se simte stânjenit să ceară bani, dar cheltuielile cu spitalizarea și recuperarea îl forțează să solicite sprijin financiar.",
        "În absența unei asigurări, prietenia este compromisă de disputa financiară."
      ],
      "summary": "Un simplu accident casnic se transformă într-o criză morală și financiară între prieteni apropiați."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Răspundere Civilă Legală a Proprietarului)",
      "statusLabel": "Toate cheltuielile medicale și indemnizațiile plătite elegant de asigurător",
      "financialImpact": "Despăgubire integrală virată direct musafirului rănit",
      "points": [
        "Polița de locuință extinsă acoperă vătămările corporale suferite de terți (inclusiv musafiri) în interiorul imobilului asigurat.",
        "Sunt achitate costurile de spitalizare, intervenția chirurgicală ortopedică, ședințele de kinetoterapie și compensația pentru concediu medical.",
        "Relația personală rămâne intactă: asigurarea funcționează exact așa cum a fost gândită."
      ],
      "summary": "Asigurătorul compensează suferința prietenului tău fără ca tu să fii pus în dificultate financiară."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Definiția terților",
          "detail": "Membrii familiei cu domiciliul comun nu sunt considerați terți, dar prietenii, musafirii și vizitatorii ocazionali sunt acoperiți 100%."
        },
        {
          "label": "Limita pentru vătămări corporale",
          "detail": "Verifică dacă suma asigurată pentru vătămări corporale este separată de cea pentru daune materiale."
        }
      ]
    },
    "immediateSteps": [
      "Acordă primul ajutor, imobilizează brațul cu o atelă improvizată și transportă de urgență prietenul la spital.",
      "Oferă-i sprijinul moral și explică-i că locuința ta are asigurare de răspundere care îi va acoperi toate costurile.",
      "Păstrează toate biletele de externare, rețetele de medicamente și facturile de recuperare medicală.",
      "Deschide dosarul la asigurătorul tău de locuință."
    ],
    "usefulDocuments": [
      "Biletul de internare/externare din spital cu diagnosticul ortopedic",
      "Facturile de materiale de osteosinteză (plăci, șuruburi) și chitanțele de tratament",
      "Polița facultativă de locuință"
    ],
    "advisorQuestions": [
      "Acoperă polița mea de casă accidentele suferite de vizitatori în baie sau pe scările interioare?",
      "Ce documente medicale sunt cerute pentru avizarea dosarului de despăgubire a musafirului?"
    ],
    "disclaimer": "Locuința trebuie menținută în condiții normale de siguranță pentru prevenirea accidentelor casnice evitabile.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-menajera-accidentata-munca-locuinta",
    "slug": "menajera-accidentata-munca-locuinta",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Menajera sau instalatorul se accidentează grav în timp ce lucrează în casa ta",
    "mainQuestion": "Ce se întâmplă dacă o persoană angajată pentru curățenie cade de pe scară în timp ce spală geamurile?",
    "shortDescription": "O cădere de la 2 metri înălțime provoacă o fractură de vertebră și incapacitate de muncă pe viață.",
    "situation": "Ai angajat o doamnă pentru curățenie săptămânală în casă. În timp ce stă pe o scară de aluminiu pentru a curăța geamurile înalte, scara alunecă pe parchetul ceruit. Femeia cade pe spate pe marginea mobilierului și suferă o tasare de vertebră lombară cu afectare neurologică. Incidentul se soldează cu spitalizare prelungită și pierderea capacității de muncă.",
    "heroImage": "/images/scenarios/guest-injury-home.jpg",
    "imageCaption": "Accidentele suferite de personalul casnic ridică probleme complexe de drept al muncii și răspundere civilă delictuală a beneficiarului.",
    "severityLabel": "Răspundere Juridică și Umană Gravă",
    "featured": false,
    "tags": [
      "personal-casnic",
      "menajera-accident",
      "cadere-scara",
      "raspundere-angajator-casnic",
      "pensie-invaliditate"
    ],
    "illustrativeCost": "Compensații medicale + rentă viageră posibilă: 50.000 – 180.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de răspundere și fără forme legale de muncă",
      "statusLabel": "Risc de dosar penal și obligație de plată a unei rente viagere",
      "financialImpact": "Obligație financiară pe viață stabilită de instanță",
      "points": [
        "Dacă persoana lucra fără contract de muncă sau contract de prestări servicii, Inspectoratul Teritorial de Muncă (ITM) poate aplica amenzi usturătoare.",
        "Victima sau familia acesteia te poate acționa în instanță cerând pensie de întreținere/invaliditate pe termen lung.",
        "Ești expus la plata unor sume lunare uriașe din cauza nerespectării normelor de securitate în muncă."
      ],
      "summary": "Munca la negru a personalului casnic implică riscuri juridice devastatoare în caz de accident grav."
    },
    "withInsurance": {
      "title": "Cu contract legal de servicii + Asigurare de Răspundere Civilă cu clauză de Personal Casnic",
      "statusLabel": "Despăgubire medicală completă și protecție juridică",
      "financialImpact": "Asigurătorul acoperă despăgubirile civile și compensația financiară",
      "points": [
        "Polițele complete de răspundere privată includ clauza expresă de acoperire a personalului de serviciu casnic (menajere, grădinari, bone).",
        "Sunt achitate intervențiile medicale, dispozitivele de susținere și compensația de invaliditate în limita contractului.",
        "Beneficiezi de asistență juridică de specialitate pentru gestionarea relației cu autoritățile de muncă."
      ],
      "summary": "Atât integritatea persoanei accidentate este susținută financiar, cât și stabilitatea ta patrimonială este garantată."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de personal casnic (Domestic staff)",
          "detail": "Asigură-te că polița menționează expres persoanele angajate în gospodărie pentru activități de menaj, grădinărit sau îngrijire copii."
        },
        {
          "label": "Echipamentul pus la dispoziție",
          "detail": "Verifică să nu fi furnizat o scară vizibil defectă sau improvizată, ceea ce ar putea fi catalogat drept culpă gravă."
        }
      ]
    },
    "immediateSteps": [
      "Apelează imediat 112 și nu încerca să miști persoana accidentată dacă acuză dureri de spate sau amorțeli la membre.",
      "Permite medicilor de la ambulanță să efectueze imobilizarea pe targă rigidă.",
      "Fotografiază locul căderii și scara utilizată.",
      "Contactează asigurătorul pentru a declara accidentul casnic de muncă."
    ],
    "usefulDocuments": [
      "Fișa de intervenție SMURD / Salvare",
      "Raportul medical de internare din secția de neurochirurgie",
      "Polița de asigurare cu clauza de angajați casnici inclusă"
    ],
    "advisorQuestions": [
      "Include contractul meu de răspundere a locuinței protecție pentru accidentele suferite de femeia de serviciu sau grădinar?",
      "Ce condiții de angajare (contract individual de muncă vs prestări servicii SRL) sunt cerute de asigurător?"
    ],
    "disclaimer": "Folosirea forței de muncă fără forme legale atrage sancțiuni administrative și răspundere penală conform legislației muncii.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-incendiu-gratare-curte-gard-vecin",
    "slug": "incendiu-gratare-curte-gard-vecin",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Scântei de la un grătar în curte aprind gardul viu și magazia din lemn a vecinului",
    "mainQuestion": "Cine suportă daunele dacă un foc de grătar scăpat de sub control distruge anexele unei proprietăți învecinate?",
    "shortDescription": "O rafală de vânt aprinde un șir de tuia uscați, iar focul cuprinde acoperișul foișorului alăturat.",
    "situation": "Faci un grătar în curtea casei într-o zi de duminică. Vântul se intensifică brusc și poartă cărbuni aprinși către gardul de delimitare acoperit cu un gard viu dens de tuia. Arborii se aprind ca o torță în mai puțin de 60 de secunde. Flăcările de 4 metri se propagă la foișorul din lemn și magazia de unelte a vecinului, distrugând utilaje de grădinărit și mobilier de terasă.",
    "heroImage": "/images/scenarios/burn-neighbor.jpg",
    "imageCaption": "Propagarea focului accidental între proprietăți vecine generează procese civile de amploare dacă nu există o poliță de răspundere civilă activă.",
    "severityLabel": "Risc Financiar și Daună Materială Vecini",
    "featured": true,
    "tags": [
      "incendiu-gratar",
      "gard-viu-ars",
      "foisor-vecin",
      "isu-pompieri",
      "raspundere-delictuala"
    ],
    "illustrativeCost": "Cost refacere foișor + gard + utilaje: 30.000 – 75.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere Civilă atașată locuinței",
      "statusLabel": "Plată integrală a devizului de reconstrucție al vecinului",
      "financialImpact": "Obligație de plată de zeci de mii de lei din economii",
      "points": [
        "Vecinul va solicita despăgubiri integrale în baza procesului-verbal al pompierilor care atestă că sursa focului a fost grătarul tău.",
        "Dacă vecinul are asigurare facultativă, asigurătorul său îi va reconstrui foișorul, dar se va îndrepta IMEDIAT împotriva ta prin acțiune de regres.",
        "Relațiile de bună vecinătate sunt iremediabil compromise."
      ],
      "summary": "Grătarul de weekend se încheie cu un regres financiar costisitor și tensiuni majore în comunitate."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Răspundere față de Vecini)",
      "statusLabel": "Despăgubire integrală achitată vecinului de către compania de asigurări",
      "financialImpact": "Zero cheltuieli personale suportate din buzunar",
      "points": [
        "Polița de locuință acoperă daunele materiale provocate imobilelor învecinate din cauza incendiilor accidentale pornite pe proprietatea ta.",
        "Inspectorul de daune evaluează structura din lemn arsă, vegetația distrusă și uneltele avariate și aprobă plata despăgubirii direct în contul vecinului.",
        "Litigiul este stins amiabil și civilizat."
      ],
      "summary": "Asigurarea funcționează impecabil, acoperind integral pagubele produse pe terenul vecinului."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de Răspundere Civilă a Proprietarului",
          "detail": "Verifică dacă polița ta facultativă include modulul de răspundere față de terți/vecini (nu doar daunele aduse propriei case)."
        },
        {
          "label": "Excluderea culpei grave",
          "detail": "Asigură-te că nu ai folosit substanțe inflamabile interzise (benzină turnată pe foc deschis) care ar putea anula despăgubirea."
        }
      ]
    },
    "immediateSteps": [
      "Apelează 112 pentru stingerea operativă a focului și folosește furtunul de grădină pentru a proteja casele de locuit.",
      "Colaborează deschis cu echipajul de pompieri ISU pentru redactarea Procesului-Verbal de intervenție.",
      "Asigură-ți vecinul că deții o poliță completă de asigurare care îi va reconstrui foișorul.",
      "Avizează evenimentul la asigurătorul tău conform termenului contractual (maxim 3 zile lucrătoare la Eurocasa)."
    ],
    "usefulDocuments": [
      "Procesul-Verbal de stingere emis de Pompieri (ISU) cu indicarea cauzei probabile",
      "Fotografii ale foișorului, gardului și magaziei arse",
      "Polița facultativă de locuință"
    ],
    "advisorQuestions": [
      "Care este plafonul maxim de răspundere civilă față de vecini pe polița mea de casă?",
      "Este acoperită refacerea vegetației (arbori tuia, gazon) distruse de incendiu pe terenul vecinului?"
    ],
    "disclaimer": "Aprinderea focurilor în aer liber trebuie să respecte distanțele legale de siguranță față de construcții și vegetație uscată.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-foc-artificii-revelion-acoperis-vecin",
    "slug": "foc-artificii-revelion-acoperis-vecin",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "O rachetă de artificii de Revelion aterizează pe acoperișul din lemn al vecinului",
    "mainQuestion": "Cine plătește dacă jocurile pirotehnice de sărbători provoacă un incendiu la o casă din apropiere?",
    "shortDescription": "O baterie de artificii se dezechilibrează, iar o ghiulea incendiază termoizolația și podul vecin.",
    "situation": "În noaptea de Revelion, aprinzi o baterie de artificii cumpărată legal din magazin. Din cauza reculului, cutia se răstoarnă pe alee, iar următoarea salvă pleacă pe orizontală și lovește mansarda casei vecine. Focul aprinde asteriala din lemn și vata minerală a acoperișului. Intervenția promptă a pompierilor limitează focul, dar apa de stingere și flăcările distrug acoperișul și etajul superior al vecinului. Devizul de reparații depășește 65.000 RON.",
    "heroImage": "/images/scenarios/burn-neighbor.jpg",
    "imageCaption": "Utilizarea materialelor pirotehnice în zone rezidențiale atrage răspunderea delictuală directă a persoanei care a inițiat focul.",
    "severityLabel": "Răspundere Civilă și Penală Pirotehnică",
    "featured": false,
    "tags": [
      "artificii-incendiu",
      "acoperis-vecin",
      "isu-revelion",
      "daune-vecini",
      "raspundere-delictuala"
    ],
    "illustrativeCost": "Cost refacere acoperiș și etaj: 50.000 – 120.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de răspundere civilă privată",
      "statusLabel": "Răspundere patrimonială directă 100%",
      "financialImpact": "Plată de 65.000+ RON sau executare silită pe bunuri",
      "points": [
        "Poliția deschide dosar penal pentru distrugere din culpă (Art. 255 Cod Penal) și nerespectarea regimului materiilor pirotehnice.",
        "Vecinul sau asigurătorul său facultativ se va îndrepta împotriva ta prin acțiune civilă în regres.",
        "Sărbătorile se încheie cu un dezastru financiar și certuri judiciare pe termen lung."
      ],
      "summary": "Distracția de Revelion devine o sursă de datorii masive fără o asigurare de răspundere."
    },
    "withInsurance": {
      "title": "Cu Asigurare de Răspundere Civilă a Familiei (cu clauză de risc accidental)",
      "statusLabel": "Preluarea prejudiciilor materiale provocate proprietății vecine",
      "financialImpact": "Asigurătorul decontează reparațiile pe baza Procesului-Verbal ISU",
      "points": [
        "Polița acoperă daunele materiale accidentale produse terților prin neglijență simplă.",
        "Asigurătorul decontează devizul de reconstrucție al acoperișului și uscarea profesională a finisajelor inundate de pompieri.",
        "Relațiile cu vecinii sunt salvate prin stingerea amiabilă a prejudiciului."
      ],
      "summary": "Asigurarea funcționează ca un garant financiar pentru greșelile neintenționate de sărbători."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Excluderea articolelor pirotehnice interzise",
          "detail": "ATENȚIE: Dacă artificiile erau din categorii interzise publicului larg (F2/F3/F4 fără autorizație de pirotehnist), asigurătorul refuză legitim despăgubirea pe motiv de ilegalitate."
        },
        {
          "label": "Suma asigurată pentru daune materiale terți",
          "detail": "Asigură-te că plafonul este de minim 20.000 – 50.000 EUR."
        }
      ]
    },
    "immediateSteps": [
      "Sună imediat la 112 și alertează vecinii pentru evacuarea clădirii.",
      "Oferă vecinului detaliile poliței tale de asigurare și colaborează cu pompierii.",
      "Păstrează ambalajul bateriei de artificii pentru a demonstra că a fost un produs omologat comercial.",
      "Avizează asigurătorul conform termenului contractual prevăzut în poliță (uzual maxim 3 zile lucrătoare)."
    ],
    "usefulDocuments": [
      "Procesul-Verbal de stingere emis de Pompieri (ISU)",
      "Bonul fiscal sau ambalajul produsului pirotehnic omologat",
      "Polița de răspundere civilă"
    ],
    "advisorQuestions": [
      "Acoperă polița mea de răspundere incidentele produse de utilizarea artificiilor de uz civil F1?",
      "Se aplică regresul dacă poliția aplică o sancțiune contravențională la fața locului?"
    ],
    "disclaimer": "Utilizarea articolelor pirotehnice trebuie să respecte cu strictețe Legea 126/1995 privind regimul materiilor explozive.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-drona-prabusita-parbriz-masina",
    "slug": "drona-prabusita-parbriz-masina",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Drona personală pierde semnalul GPS și se prăbușește pe trapa de sticlă a unei mașini",
    "mainQuestion": "Ce poliță plătește dacă o dronă de agrement cade necontrolat peste un autoturism sau o persoană?",
    "shortDescription": "Un DJI de 900 de grame rămâne fără baterie și cade de la 50 de metri direct peste o mașină parcată.",
    "situation": "Pilotezi o dronă de agrement (DJI Mavic) într-un parc sau zonă rezidențială. Dintr-o eroare de calibrare sau interferență radio, drona pierde semnalul de comandă (Flyaway) și inițiază o aterizare forțată necontrolată. Cade de la 40 de metri altitudine direct pe luneta și capacul de portbagaj al unui autoturism BMW parcat regulamentar. Luneta din sticlă securizată explodează, iar elicele din carbon zgârie adânc vopseaua.",
    "heroImage": "/images/scenarios/windshield-crack.jpg",
    "imageCaption": "Reglementările EASA și Codul Aerian civil impun deținătorilor de drone obligații stricte privind răspunderea pentru daunele cauzate la sol.",
    "severityLabel": "Răspundere Operare Dispozitive Zburătoare",
    "featured": false,
    "tags": [
      "drona-prabusita",
      "raspundere-drona",
      "easa-uav",
      "luneta-sparta",
      "asigurare-uav"
    ],
    "illustrativeCost": "Cost înlocuire lunetă + revopsire portbagaj: 6.000 – 14.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de răspundere pentru operare UAV / dronă",
      "statusLabel": "Pilotul dronei plătește integral reparația mașinii terțului",
      "financialImpact": "Plată de 6.000 – 14.000 RON din economii proprii",
      "points": [
        "Polițele standard de locuință exclud de regulă vehiculele aeriene fără pilot (UAV) dacă au o greutate mai mare de 250 de grame.",
        "Proprietarul mașinii sau asigurătorul său CASCO va cere plata integrală pe baza procesului-verbal al poliției.",
        "Rămâi și cu drona distrusă și cu obligația de a deconta devizul reprezentanței auto."
      ],
      "summary": "Pilotarea dronelor fără asigurare atrage răspunderea patrimonială directă pentru orice impact la sol."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Civilă pentru Drone (UAV Third Party Liability)",
      "statusLabel": "Despăgubire integrală aprobată direct proprietarului autovehiculului",
      "financialImpact": "Plata reparațiilor preluată 100% de asigurător",
      "points": [
        "Polița dedicată de drone conform normelor UE acoperă daunele materiale și corporale provocate terților în timpul zborului.",
        "Inspectorul de daune emite acceptul de plată către service-ul auto pentru înlocuirea lunetei și revopsire.",
        "Ești protejat împotriva pretențiilor civile neprevăzute."
      ],
      "summary": "Pasiunea pentru zborul cu drone rămâne lipsită de griji financiare datorită poliței UAV."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Înregistrarea operatorului la AACR",
          "detail": "Conform normelor EASA, pilotul trebuie să fie înregistrat ca operator UAS și drona marcată cu numărul unic de identificare."
        },
        {
          "label": "Zone interzise de zbor (No-Fly Zones)",
          "detail": "Zborul neautorizat în proximitatea aeroporturilor sau bazelor militare anulează orice acoperire de asigurare."
        }
      ]
    },
    "immediateSteps": [
      "Găsește drona și nu părăsi locul incidentului; identifică proprietarul vehiculului avariat.",
      "Fotografiază poziția dronei pe mașină și pagubele produse.",
      "Oferă datele de identificare și seria poliței tale de asigurare UAV.",
      "Dacă este necesar, mergi la Biroul de Accidente Ușoare pentru autorizația de reparație a mașinii."
    ],
    "usefulDocuments": [
      "Certificatul de înregistrare al operatorului UAV emis de AACR",
      "Polița de asigurare de răspundere civilă a dronei",
      "Fotografii și log-ul de zbor (Flight Log) din aplicația de control"
    ],
    "advisorQuestions": [
      "Este acoperită drona mea de 249g pe polița standard de familie sau necesită o poliță de aviație dedicată?",
      "Care este limita de răspundere recomandată conform reglementărilor europene?"
    ],
    "disclaimer": "Operarea dronelor este reglementată de Regulamentul UE 2019/947 și legislația aeronautică națională.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-trotineta-copil-zgaraie-masina-vecin",
    "slug": "trotineta-copil-zgaraie-masina-vecin",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Copilul zgârie cu ghidonul trotinetei două portiere ale unei mașini din parcare",
    "mainQuestion": "Ce faci dacă jocul copiilor în fața blocului se soldează cu o zgârietură adâncă pe mașina unui vecin?",
    "shortDescription": "Un viraj greșit pe aleea dintre blocuri lasă o dungă metalică de 1.5 metri pe vopseaua metalizată.",
    "situation": "Copilul tău de 7 ani se plimbă cu trotineta nemotorizată pe aripa pietonală a parcării rezidențiale. Se dezechilibrează și atinge cu manșonul metalic al ghidonului două portiere consecutive ale unui autoturism nou parcat pe margine. Zgârietura adâncă trece de stratul de lac și grund până la tablă. Vecinul constată dauna și cere plata vopsirii ambelor elemente la reprezentanță (cost 3.800 RON).",
    "heroImage": "/images/scenarios/car-vandalism.jpg",
    "imageCaption": "Micile incidente de joacă ale copiilor în parcările rezidențiale sunt cauza a mii de dispute de vecinătate în fiecare an.",
    "severityLabel": "Răspundere Părintească Cotidiană",
    "featured": false,
    "tags": [
      "trotineta-copil",
      "masina-zgariata-parcare",
      "raspundere-parinti",
      "vopsitorie-portiere",
      "rc-familie"
    ],
    "illustrativeCost": "Cost revopsire două portiere: 2.800 – 4.500 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere a Familiei (Cap de Familie)",
      "statusLabel": "Părintele achită din salariu devizul de service al vecinului",
      "financialImpact": "Plată directă de 3.800 RON din economii",
      "points": [
        "Art. 1372 Cod Civil te obligă la repararea integrală a prejudiciului cauzat de fapta copilului minor.",
        "Dacă refuzi să plătești devizul de reprezentanță, vecinul își deschide dosar pe CASCO, iar compania CASCO va veni în regres împotriva ta.",
        "Relațiile de bună vecinătate sunt tensionate grav."
      ],
      "summary": "Gafa copilului la joacă se transformă într-o cheltuială neprevăzută din bugetul familiei."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Civilă a Familiei (inclusă în asigurarea de locuință)",
      "statusLabel": "Despăgubire aprobată direct către service sau asigurătorul CASCO al vecinului",
      "financialImpact": "Zero costuri plătite din buzunar",
      "points": [
        "Polița de Răspundere a Familiei acoperă explicit faptele ilicite neintenționate ale copiilor minori aflați în îngrijire.",
        "Asigurătorul tău decontează costul de vopsire al celor două portiere fără procese sau dispute.",
        "Vecinul este mulțumit că mașina se repară pe asigurare, iar tu nu scoți niciun ban din cont."
      ],
      "summary": "Asigurarea rezolvă incidentul elegant, civilizat și rapid."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Franșiza la răspundere terți",
          "detail": "Verifică dacă există franșiză pe dosar (ex. 50 – 100 EUR) sau dacă daunele materiale mici sunt acoperite 100%."
        },
        {
          "label": "Vârsta copiilor asigurați",
          "detail": "Asigură-te că toți copiii minori sunt cuprinși automat sub umbrela poliței de familie."
        }
      ]
    },
    "immediateSteps": [
      "Nu certa agresiv copilul; verifică dacă este teafăr.",
      "Identifică vecinul proprietar al mașinii și recunoaște incidentul cu calm.",
      "Fotografiază zgârietura și poziția trotinetei.",
      "Completează formularul de avizare de răspundere civilă către asigurătorul tău."
    ],
    "usefulDocuments": [
      "Fotografiile elementelor zgâriate ale mașinii",
      "Devizul estimativ de reparații emis de atelierul de vopsitorie",
      "Polița de Răspundere Civilă a Familiei"
    ],
    "advisorQuestions": [
      "Este acoperită răspunderea pentru faptele copiilor produse în parcarea blocului?",
      "Cum se face plata dacă vecinul dorește să repare mașina în regie proprie?"
    ],
    "disclaimer": "Asigurarea de familie funcționează ca un mecanism de pace socială și despăgubire civilă în comunitate.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "raspundere-inundare-subsol-bloc-robinet-spalat-boxa",
    "slug": "inundare-subsol-bloc-robinet-spalat-boxa",
    "categoryId": "raspundere-civila",
    "categoryName": "RĂSPUNDERE CIVILĂ",
    "title": "Un robinet uitat deschis în boxa de la subsol inundă arhivele și bunurile altor locatari",
    "mainQuestion": "Ce răspundere ai dacă o neglijență în boxa de depozitare distruge bunurile depozitate de vecini?",
    "shortDescription": "Un furtun lăsat sub presiune cedează în weekend, inundând 8 boxe de la subsolul blocului.",
    "situation": "Ai montat un robinet și un furtun de spălat în boxa privată de la subsolul blocului. Vineri uiți robinetul deschis sub presiune. În timpul nopții, racordul flexibil cedează. Apa curge continuu timp de 48 de ore, acumulându-se până la 30 cm în întreg subsolul. Opt boxe de depozitare ale vecinilor sunt inundate: cărți, haine depozitate în cutii de carton, arhive contabile de firme și scule electrice sunt complet distruse de mâl și apă.",
    "heroImage": "/images/scenarios/pipe-burst.jpg",
    "imageCaption": "Avariile produse în spațiile anexe și boxe de subsol generează pretenții cumulative din partea mai multor proprietari afectați simultan.",
    "severityLabel": "Pretenții Multiple de Vecinătate",
    "featured": false,
    "tags": [
      "inundatie-subsol",
      "boxa-depozitare",
      "racord-flexibil",
      "bunuri-vecini",
      "daune-asociatie"
    ],
    "illustrativeCost": "Compensare bunuri deteriorate 8 vecini: 25.000 – 60.000 RON",
    "withoutInsurance": {
      "title": "Fără răspundere civilă extinsă pentru anexe",
      "statusLabel": "Proprietarul vinovat este obligat la despăgubirea fiecărui vecin în parte",
      "financialImpact": "Zeci de mii de lei achitați către 8 familii diferite",
      "points": [
        "Vecinii formează front comun prin intermediul Asociației de Proprietari și cer despăgubiri pentru bunurile distruse.",
        "Costurile de evacuare a apei cu motopompe și igienizare a subsolului sunt imputate exclusiv pe cota ta de întreținere.",
        "Relațiile din bloc sunt complet compromise pe ani de zile."
      ],
      "summary": "O neglijență banală la un robinet secundar creează o avalanșă de pretenții financiare."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Răspundere Extinsă pentru Anexe Gospodărești)",
      "statusLabel": "Despăgubire cumulativă gestionată direct de asigurător",
      "financialImpact": "Plata bunurilor dovedite ale vecinilor acoperită de poliță",
      "points": [
        "Polița acoperă prejudiciile provocate de apă provenită din imobilul asigurat și anexele declarate (boxe, garaje).",
        "Inspectorul de daune evaluează bunurile deteriorate din fiecare boxă și emite acorduri de despăgubire direct către locatarii afectați.",
        "Asociația de locatari este despăgubită pentru costurile de igienizare și dezinfectare a subsolului."
      ],
      "summary": "Asigurarea stinge un conflict comunitar complex printr-un proces organizat de lichidare de daune."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Declararea boxei de la subsol ca anexă",
          "detail": "Asigură-te că pe polița de locuință este menționată explicit boxa / spațiul de depozitare cu număr cadastral sau cotă indiviză."
        },
        {
          "label": "Plafonul agregat per eveniment",
          "detail": "Verifică dacă suma de răspundere acoperă mai multe părți vătămate în același incident (minim 30.000 EUR)."
        }
      ]
    },
    "immediateSteps": [
      "Oprește robinetul de la coloana generală și solicită intervenția asociației pentru pornirea pompei de evacuare.",
      "Invită fiecare vecin afectat să fotografieze conținutul boxei înainte de aruncarea cutiilor umede.",
      "Păstrează un tabel cu datele de contact și bunurile revendicate de fiecare proprietar.",
      "Deschide dosarul la compania ta de asigurări de locuință."
    ],
    "usefulDocuments": [
      "Procesul-verbal de constatare întocmit de Asociația de Proprietari",
      "Fotografiile fiecărei boxe inundate",
      "Polița de asigurare de locuință cu anexa de boxă menționată"
    ],
    "advisorQuestions": [
      "Este boxa de la subsol acoperită automat în clauza de răspundere sau trebuie declarată separat?",
      "Cum se probează valoarea bunurilor vechi depozitate în cutii fără facturi fiscale?"
    ],
    "disclaimer": "Instalațiile sanitare din anexele de depozitare trebuie verificate periodic pentru a preveni cedarea racordurilor flexibile.",
    "lastReviewed": "Octombrie 2026"
  }
];
