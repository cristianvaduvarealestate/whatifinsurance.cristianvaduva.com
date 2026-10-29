import { Scenario } from '@/types/scenario';

export const digitalScenarios: Scenario[] = [
  {
    "id": "digital-laptop-furat-calatorie-date-sensibile",
    "slug": "laptop-furat-calatorie-date-sensibile",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Laptopul de serviciu este furat dintr-o cafenea în timp ce lucrezi remote",
    "mainQuestion": "Ce se întâmplă dacă un laptop cu baze de date de clienți nesecurizate dispare într-o pauză de cafea?",
    "shortDescription": "Un rucsac lăsat pe scaun este sustras într-o fracțiune de secundă, generând risc de amendă GDPR.",
    "situation": "Lucrezi de la distanță dintr-o cafenea centrală din Lisabona. Te ridici 45 de secunde pentru a ridica o comandă. La întoarcere, rucsacul conținând laptopul MacBook Pro de 3.000 EUR, telefonul de serviciu și un hard disk extern cu date de lucru a dispărut. Dincolo de valoarea fizică a hardware-ului, pe laptop se aflau date cu caracter personal ale clienților companiei fără criptare completă a hard disk-ului.",
    "heroImage": "/images/scenarios/cyber-attack.jpg",
    "imageCaption": "Furtul dispozitivelor mobile de lucru generează două riscuri majore paralele: pierderea fizică a echipamentului și expunerea la sancțiuni GDPR pentru breșă de securitate.",
    "severityLabel": "Risc Hardware și Juridic GDPR",
    "featured": true,
    "tags": [
      "laptop-furat",
      "lucru-remote",
      "gdpr-amenda",
      "cyber-personal",
      "date-confidentiale"
    ],
    "illustrativeCost": "Valoare hardware + asistență juridică GDPR: 15.000 – 45.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare cyber / bunuri mobile",
      "statusLabel": "Pierdere financiară hardware + risc direct de amenzi",
      "financialImpact": "Plată din fonduri proprii a laptopului nou și consultanței IT",
      "points": [
        "Angajatorul îți poate imputa contravaloarea laptopului pierdut din neglijență.",
        "Compania este obligată să notifice ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor) în 72 de ore.",
        "Dacă datele ajung pe dark web, amenzile pentru nerespectarea securității datelor pot fi considerabile."
      ],
      "summary": "O cafea neatenți costă mii de euro și generează o criză de securitate în companie."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare pentru Dispozitive Mobile & Risc Cyber",
      "statusLabel": "Despăgubire rapidă hardware + asistență de răspuns la breșă de date",
      "financialImpact": "Înlocuirea laptopului acoperită + blocare și ștergere de la distanță",
      "points": [
        "Echipamentul electronic este despăgubit pe baza plângerii de furt de la poliție.",
        "Echipa tehnică a asigurătorului activează protocoalele de ștergere de la distanță (remote wipe) a datelor.",
        "Sunt asigurate costurile de consultanță juridică pentru redactarea raportului către autoritatea de protecție a datelor."
      ],
      "summary": "Hardware-ul este înlocuit imediat, iar expunerea juridică a companiei este neutralizată."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Criptarea hard disk-ului (BitLocker / FileVault)",
          "detail": "Condiție contractuală: dispozitivele de lucru trebuie să aibă activată criptarea completă a datelor pentru a exclude neglijența."
        },
        {
          "label": "Furt prin sustragere clandestină vs Efracție",
          "detail": "Verifică dacă polița acoperă furtul din locuri publice deschise (cafenele, trenuri) sau doar furtul prin efracție din încăperi încuiate."
        }
      ]
    },
    "immediateSteps": [
      "Accesează imediat contul iCloud / Google de pe alt dispozitiv și activează modul „Lost / Ștergere Date de la Distanță”.",
      "Mergi la cea mai apropiată secție de poliție locală pentru a depune plângere de furt.",
      "Anunță departamentul IT și Responsabilul cu Protecția Datelor (DPO) din companie în termen de 2 ore.",
      "Deschide dosarul la asigurător transmițând seria dispozitivului și dovada de la poliție."
    ],
    "usefulDocuments": [
      "Procesul-verbal de plângere penală pentru furt emis de poliție",
      "Factura de achiziție a laptopului cu seria (SN) menționată",
      "Polița de asigurare dispozitive mobile / cyber"
    ],
    "advisorQuestions": [
      "Include polița mea acoperire pentru laptopuri lăsate nesupravegheate scurt timp în spații de co-working sau cafenele?",
      "Ce costuri de investigație IT sunt decontate în caz de suspiciune de scurgere de date?"
    ],
    "disclaimer": "Securitatea datelor profesionale impune utilizarea parolelor complexe și a criptării la nivel de sistem de operare.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-frauda-plata-phishing-ceo-fraud",
    "slug": "frauda-plata-phishing-ceo-fraud",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Plată eronată de 40.000 EUR în urma unui atac de tip BEC (Business Email Compromise)",
    "mainQuestion": "Ce faci dacă un hacker clonează e-mailul unui partener comercial și schimbă contul IBAN de pe factură?",
    "shortDescription": "Un e-mail perfect redactat determină contabila să vireze contravaloarea mărfii într-un cont bancar din altă țară.",
    "situation": "Departamentul financiar al unei companii primește o factură proformă de la un furnizor tradițional pentru un transport de marfă. E-mailul pare identic cu cel al directorului de vânzări partener, diferind doar printr-o singură literă insesizabilă în domeniu (ex. @furnizorr.ro). Mesajul solicită plata urgentă într-un nou cont bancar IBAN deschis recent în Polonia. Contabila efectuează transferul de 42.000 EUR. Trei zile mai târziu, furnizorul real sună cerându-și banii.",
    "heroImage": "/images/scenarios/phishing-payment.jpg",
    "imageCaption": "Atacurile de tip inginerie socială și compromitere a corespondenței de afaceri (BEC) produc pierderi masive prin plăți frauduloase greu de reversat bancar.",
    "severityLabel": "Frauda Financiară Imediată",
    "featured": true,
    "tags": [
      "phishing-plati",
      "ceo-fraud",
      "business-email-compromise",
      "frauda-bancara",
      "asigurare-cyber"
    ],
    "illustrativeCost": "Suma deturnată ireversibil: 150.000 – 300.000 RON",
    "withoutInsurance": {
      "title": "Fără poliță de Cyber Crime & Social Engineering Fraud",
      "statusLabel": "Pierdere financiară de 100% din capitalul firmei",
      "financialImpact": "42.000 EUR pierduți definitiv fără sprijin din partea băncii",
      "points": [
        "Băncile comerciale NU despăgubesc transferurile autorizate voluntar de către client, chiar dacă au fost determinate de o înșelăciune.",
        "Banii virați în conturile din străinătate sunt retrași instant în numerar sau convertiți în criptomonede de rețelele de spălare de bani.",
        "Poliția deschide dosar penal pentru înșelăciune, dar recuperarea fondurilor peste hotare durează ani sau este imposibilă."
      ],
      "summary": "Firma este lăsată cu o gaură masivă în fluxul de numerar și trebuie să plătească încă o dată factura reală."
    },
    "withInsurance": {
      "title": "Cu poliță de Cyber Crime (Clauza de Inginerie Socială și Fraudă Electronică)",
      "statusLabel": "Despăgubire integrală a sumei pierdute prin transferul fraudulos",
      "financialImpact": "Recuperare a sumei furate minus franșiza contractuală",
      "points": [
        "Polița de fraudă cibernetică include explicit transferurile realizate pe baza unor instrucțiuni false primite prin e-mail compromis.",
        "Asigurătorul activează specialiști bancari de urmărire a fondurilor pentru înghețarea contului destinație.",
        "Compania își recuperează capitalul de lucru și își poate onora obligațiile față de furnizorul real."
      ],
      "summary": "Prejudiciul financiar provocat de ingineria socială sofisticată este absorbit de asigurare."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Procedura de verificare telefonică (Call-back verification)",
          "detail": "ATENȚIE: Majoritatea asigurătorilor impun ca firmă să aibă o procedură internă scrisă prin care orice schimbare de IBAN să fie confirmată telefonic pe un număr cunoscut anterior."
        },
        {
          "label": "Sublimita pentru Social Engineering",
          "detail": "Verifică dacă frauda prin e-mail are o limită separată mai mică decât suma asigurată globală a poliței."
        }
      ]
    },
    "immediateSteps": [
      "Contactează imediat banca plătitoare și solicită revocarea de urgență (Recall) a transferului SEPA.",
      "Depune plângere penală de urgență la Direcția de Investigare a Infracțiunilor de Criminalitate Organizată și Terorism (DIICOT).",
      "Salvează e-mailul suspect în format .eml sau .msg original (cu toate headerele tehnice neatinse).",
      "Avizează asigurătorul de Cyber Crime atașând copia plângerii penale."
    ],
    "usefulDocuments": [
      "E-mailul malițios cu antetul tehnic complet (Full Email Headers)",
      "Ordinul de plată bancar și confirmarea debitării din cont",
      "Polița de asigurare Cyber cu modulul de Social Engineering"
    ],
    "advisorQuestions": [
      "Care sunt condițiile obligatorii de verificare a modificării conturilor bancare impuse de poliță?",
      "Ce sumă maximă este acoperită per eveniment de fraudă de tip Business Email Compromise?"
    ],
    "disclaimer": "Prevenirea fraudelor de tip phishing impune implementarea strictă a verificării vocale obligatorii a oricărei schimbări de cont bancar.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-intrerupere-cloud-outage-afacere-online",
    "slug": "intrerupere-cloud-outage-afacere-online",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Pană majoră a furnizorului de cloud: magazinul online este offline 48 de ore",
    "mainQuestion": "Cine suportă profitul nerealizat când serverele AWS sau Azure cad din cauze externe afacerii tale?",
    "shortDescription": "O eroare globală a infrastructurii cloud blochează platforma SaaS și vânzările companiei.",
    "situation": "Compania ta operează o platformă de comerț electronic sau o aplicație SaaS cu mii de utilizatori plătitori. O defecțiune majoră a centrului de date al furnizorului internațional de cloud lasă serviciul complet inaccesibil timp de 48 de ore. Nu poți încasa abonamente, pierzi vânzări directe de 80.000 RON și clienții cer penalități contractuale pentru nerespectarea clauzei de disponibilitate (SLA).",
    "heroImage": "/images/scenarios/cloud-outage.jpg",
    "imageCaption": "Dependența afacerilor moderne de infrastructura marilor giganți de cloud computing creează riscuri sistemice de întrerupere comercială.",
    "severityLabel": "Risc Financiar de Întrerupere Operațională",
    "featured": false,
    "tags": [
      "cloud-outage",
      "intrerupere-cloud",
      "sla-penalitati",
      "asigurare-cyber",
      "business-interruption-it"
    ],
    "illustrativeCost": "Pierderi vânzări + penalități SLA: 50.000 – 160.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Cloud Outage / Business Interruption IT",
      "statusLabel": "Furnizorul de cloud oferă doar credite simbolice de câțiva dolari",
      "financialImpact": "Pierderi operaționale suportate 100% din veniturile proprii",
      "points": [
        "Contractele standard ale giganților de cloud (AWS, Microsoft, Google) exclud expres orice răspundere pentru daune indirecte sau pierderi de profit.",
        "În cel mai bun caz primești o reducere de 10% la factura lunii următoare de hosting (câteva sute de lei).",
        "Firma ta este obligată legal să plătească despăgubiri propriilor clienți pentru nerespectarea timpului de funcționare garantat (uptime)."
      ],
      "summary": "Giganții de cloud sunt blindați juridic, lăsând toate riscurile comerciale pe umerii firmei tale."
    },
    "withInsurance": {
      "title": "Cu poliță de Cyber Insurance cu clauză de Dependent Business Interruption (Cloud Provider Outage)",
      "statusLabel": "Despăgubire integrală a profitului operațional pierdut",
      "financialImpact": "Plată conform mediei istorice de încasări zilnice",
      "points": [
        "Polița compensează marja brută de profit și costurile fixe (salarii, chirii) pe toată durata cât serverele cloud au fost indisponibile.",
        "Sunt decontate penalitățile contractuale justificate datorate clienților pentru nerespectarea SLA.",
        "Fluxul de numerar al companiei este protejat împotriva incidentelor globale de rețea."
      ],
      "summary": "Afacerea ta digitală este asigurată chiar și atunci când defecțiunea aparține unor furnizori externi giganți."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Perioada de franșiză orară (Waiting Period)",
          "detail": "Polițele compensează pierderile dacă pana de cloud depășește un prag minim (uzual 6 – 12 ore continue)."
        },
        {
          "label": "Lista furnizorilor eligibili",
          "detail": "Asigură-te că furnizorul tău specific de cloud (AWS, Azure, GCP, OVH) este acceptat în contract."
        }
      ]
    },
    "immediateSteps": [
      "Fă capturi de ecran cu paginile oficiale de status ale furnizorului de cloud (ex. AWS Health Dashboard) care confirmă incidentul.",
      "Activează planul intern de comunicare de criză cu clienții platformei tale.",
      "Notifică asigurătorul de Cyber Insurance în primele ore de la depășirea perioadei de așteptare.",
      "Pregătește extrasele de contabilitate cu încasările medii zilnice din ultimele 3 luni pentru calcularea daunei."
    ],
    "usefulDocuments": [
      "Raportul oficial de incident (RCA - Root Cause Analysis) emis de furnizorul de cloud",
      "Rapoartele interne de monitorizare uptime (Datadog, New Relic, Pingdom)",
      "Situațiile financiare comparative privind vânzările zilnice"
    ],
    "advisorQuestions": [
      "Include polița mea clauza de Dependent Business Interruption pentru furnizori externi de servicii digitale?",
      "Cum se calculează indemnizația pentru orele de oprire a vânzărilor magazinului online?"
    ],
    "disclaimer": "Asigurarea pentru întreruperea afacerii acoperă indisponibilitatea accidentală neprevăzută a serviciilor de găzduire contractate.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-smartphone-spart-inainte-calatorie",
    "slug": "smartphone-spart-inainte-calatorie",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Telefonul de ultimă generație scapă pe beton chiar în ziua plecării în concediu",
    "mainQuestion": "Ce poliță îți oferă înlocuire de urgență dacă ecranul și camera se sparg înainte de zbor?",
    "shortDescription": "Un iPhone Pro Max de 1.400 EUR cade pe asfalt, devenind inutilizabil pentru bilete de avion și plăți.",
    "situation": "În timp ce încarci bagajele în mașină pentru a merge la aeroport, telefonul de 6.800 RON îți alunecă din buzunar și lovește bordura de beton. Ecranul OLED este complet negru cu dungi verzi, iar spatele din sticlă este spart în dreptul senzorilor foto. Ai pe telefon toate cartelele de îmbarcare digitale, cardurile bancare și codurile de acces.",
    "heroImage": "/images/scenarios/power-surge.jpg",
    "imageCaption": "Asigurările moderne pentru telefoane mobile acoperă avariile accidentale prin cădere și oferă dispozitiv de schimb pe durata reparației.",
    "severityLabel": "Disconfort și Risc Imediat",
    "featured": false,
    "tags": [
      "telefon-spart",
      "ecran-oled",
      "asigurare-telefon",
      "apple-care",
      "daune-accidentale"
    ],
    "illustrativeCost": "Cost înlocuire display + carcasă originală: 2.200 – 3.500 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de telefon mobil",
      "statusLabel": "Cost de reparație uriaș sau cumpărarea unui alt telefon",
      "financialImpact": "Plată de 2.500+ RON pe loc în service privat",
      "points": [
        "Garanția legală de conformitate a producătorului exclude expres căzăturile și șocurile mecanice.",
        "Schimbarea ecranului original la service autorizat costă până la 40% din prețul inițial al telefonului.",
        "Rămâi fără mijloc de comunicare și navigare în vacanță."
      ],
      "summary": "O secundă de neatenție te lasă fără telefon și cu o cheltuială neprevăzută mare."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare Dispozitive Electronice (Screen & Accident Protection)",
      "statusLabel": "Reparație pe loc cu piese originale sau telefon de schimb",
      "financialImpact": "Plata doar a unei franșize mici (ex. 150 – 250 RON)",
      "points": [
        "Asigurătorul emite acceptul de reparație la service-ul oficial autorizat de brand.",
        "Sunt montate componente originale menținând rezistența la apă (IP68) a aparatului.",
        "În caz de daună totală, primești un telefon nou identic sau echivalent."
      ],
      "summary": "Telefonul este reparat rapid și garantat cu impact financiar minim."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Piese originale autorizate",
          "detail": "Asigură-te că polița nu impune ecrane aftermarket compatibile ieftine care degradează culorile."
        },
        {
          "label": "Numărul maxim de daune pe an",
          "detail": "Verifică dacă ai dreptul la 1 sau 2 înlocuiri de ecran pe an contractual."
        }
      ]
    },
    "immediateSteps": [
      "Nu încerca să apeși pe sticla spartă pentru a evita rănirea degetelor sau distrugerea senzorilor faciali (Face ID).",
      "Deschide tichetul de daună în aplicația asigurătorului sau sună la numărul de asistență.",
      "Mergi la centrul de service autorizat cu seria IMEI a dispozitivului."
    ],
    "usefulDocuments": [
      "Factura de cumpărare a telefonului cu codul IMEI",
      "Polița de asigurare a echipamentului electronic",
      "Fotografii ale aparatului avariat"
    ],
    "advisorQuestions": [
      "Include polița mea și daunele produse prin scufundare accidentală în apă?",
      "Care este timpul de soluționare pentru înlocuirea ecranului?"
    ],
    "disclaimer": "Asigurarea de dispozitive mobile exclude pierderea din neatenție dacă nu s-a contractat clauza de furt/pierdere.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-supratensiune-retea-distruge-pc-gaming-audio",
    "slug": "supratensiune-retea-distruge-pc-gaming-audio",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Supratensiune pe rețeaua electrică: PC de lucru de 18.000 RON și sistem audio arse",
    "mainQuestion": "Cine suportă daunele dacă o cădere de trăsnet pe transformatorul stradal arde sursa, placa video și monitoarele?",
    "shortDescription": "Un șoc de tensiune de 400V trece prin priză, distrugând electronica sensibilă a stației de editare.",
    "situation": "În timpul unei furtuni cu descărcări electrice, un fulger lovește un stâlp de distribuție din cartier. Șocul de supratensiune trece prin rețeaua electrică de alimentare. Deși PC-ul era oprit dar lăsat în priză, sursa de alimentare explodează cu miros puternic de ars, transmițând șocul către placa de bază, placa grafică RTX 4090 și monitoarele profesionale conectate. Devizul de componente distruse este de 22.000 RON.",
    "heroImage": "/images/scenarios/power-surge.jpg",
    "imageCaption": "Fenomenele electrice induse de trăsnete sau manevre greșite pe rețeaua de distribuție necesită clauza specifică de Fenomene Electrice în polița de locuință.",
    "severityLabel": "Distrugere Hardware Electronic",
    "featured": false,
    "tags": [
      "supratensiune",
      "soc-electric",
      "pc-gaming",
      "placa-video-arsa",
      "fenomene-electrice"
    ],
    "illustrativeCost": "Cost înlocuire componente hardware arse: 14.000 – 26.000 RON",
    "withoutInsurance": {
      "title": "Fără clauză de fenomene electrice în asigurarea de casă",
      "statusLabel": "Distribuitorul de energie refuză plata invocând forța majoră",
      "financialImpact": "Plată integrală a echipamentelor noi din buzunar",
      "points": [
        "Compania de distribuție a energiei electrice respinge plângerile dacă fulgerul este catalogat drept fenomen meteo de forță majoră.",
        "Garanțiile producătorilor de componente PC exclud expres daunele provocate de supratensiune exterioară.",
        "Toate echipamentele de lucru și divertisment trebuie reachiziționate din economii."
      ],
      "summary": "Un șoc de tensiune de o fracțiune de secundă distruge mii de euro în componente electronice."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (Clauza de Fenomene Electrice / Supratensiune)",
      "statusLabel": "Despăgubire integrală a echipamentelor electronice arse",
      "financialImpact": "Înlocuirea componentelor acoperită pe baza devizului de laborator",
      "points": [
        "Clauza de fenomene electrice acoperă avariile provocate de scurtcircuit, variații bruște de tensiune și inducție electrostatică.",
        "Asigurătorul decontează piesele arse conform valorii de înlocuire declarate.",
        "Echipamentele sunt testate și înlocuite fără dispute birocratice cu furnizorul de curent."
      ],
      "summary": "Investiția în calculatoare și electronice este protejată împotriva oricărui șoc din rețeaua electrică."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza explicită de Fenomene Electrice",
          "detail": "Atenție: simpla bifare a riscului de trăsnet acoperă doar incendiul provocat de trăsnet direct; supratensiunea indusă fără foc cere clauză separată."
        },
        {
          "label": "Utilizarea prizelor cu protecție (Surge Protector)",
          "detail": "Multe contracte recomandă sau cer folosirea de prelungitoare cu protecție împotriva supratensiunii."
        }
      ]
    },
    "immediateSteps": [
      "Scoate toate aparatele din priză pentru a preveni alte șocuri la revenirea curentului.",
      "Nu încerca să pornești componentele mirosind a ars pentru a nu agrava avaria pe placa de bază.",
      "Duceți componentele la un laborator de service IT autorizat pentru emiterea unei fișe de constatare a arsurii electrice.",
      "Transmite cererea de daună către asigurătorul tău."
    ],
    "usefulDocuments": [
      "Raportul de expertiză tehnică din service-ul autorizat care atestă dauna prin supratensiune",
      "Facturile de achiziție a componentelor PC",
      "Polița de locuință cu clauza de fenomene electrice inclusă"
    ],
    "advisorQuestions": [
      "Include polița mea de locuință clauza de fenomene electrice fără foc?",
      "Care este suma asigurată maximă pentru aparatură electronică și electrocasnică?"
    ],
    "disclaimer": "Protejarea electronicelor sensibile impune utilizarea de surse neîntreruptibile (UPS) și descărcătoare de supratensiune certificate.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-preluare-cont-personal-santaj-deepfake",
    "slug": "preluare-cont-personal-santaj-deepfake",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Preluarea ostilă a conturilor de social media și șantaj cu imagini manipulate (Deepfake)",
    "mainQuestion": "Ce sprijin juridic și tehnic ai dacă un hacker îți fură identitatea digitală și cere bani de la prieteni?",
    "shortDescription": "Contul de Instagram și WhatsApp este compromis prin SIM Swap, iar contactele primesc mesaje de șantaj.",
    "situation": "Printr-un atac de tip SIM-swapping la operatorul de telefonie, un atacator preia controlul numărului tău de telefon și al conturilor de WhatsApp, Instagram și e-mail. Atacatorul folosește fotografii personale pentru a genera imagini compromițătoare trucate prin inteligență artificială (deepfake) și contactează prietenii și partenerii de afaceri cerând transferuri urgente de bani în numele tău.",
    "heroImage": "/images/scenarios/cyber-attack.jpg",
    "imageCaption": "Protecția identității digitale și asigurările de e-reputație oferă suport specializat pentru recuperarea conturilor și combaterea defăimării online.",
    "severityLabel": "Traumă Reputațională și Șantaj Digital",
    "featured": false,
    "tags": [
      "sim-swap",
      "furt-identitate",
      "santaj-online",
      "deepfake",
      "cyber-reputatie"
    ],
    "illustrativeCost": "Consultanță juridică specializată + ștergere date online: 8.000 – 25.000 RON",
    "withoutInsurance": {
      "title": "Fără asistență de Cyber Protection Personal",
      "statusLabel": "Eforturi individuale lente prin formulare automate de suport ale rețelelor",
      "financialImpact": "Costuri mari cu avocați și pierderea reputației profesionale",
      "points": [
        "Formularele de recuperare ale marilor platforme (Meta, Google) funcționează prin roboți și pot dura săptămâni fără rezultat.",
        "Poliția acționează lent pe cazuri de șantaj cibernetic dacă nu există un prejudiciu financiar direct imediat dovedit.",
        "Victima suferă stres extrem, anxietate și degradarea imaginii profesionale."
      ],
      "summary": "Recuperarea identității pe cont propriu este o luptă epuizantă cu platformele gigant."
    },
    "withInsurance": {
      "title": "Cu poliță de Cyber Safety & Protecția Identității Digitale",
      "statusLabel": "Intervenție tehnică rapidă prin canale prioritare + consiliere juridică",
      "financialImpact": "Cheltuieli de restaurare a reputației și consiliere juridică acoperite",
      "points": [
        "Echipa tehnică a asigurătorului are canale directe prioritare de escaladare la departamentele de securitate ale platformelor.",
        "Sunt acoperite costurile serviciilor specializate de „Right to be Forgotten” și eliminare a conținutului defăimător de pe internet.",
        "Beneficiezi de asistență psihologică și juridică pentru depunerea plângerii la poliție."
      ],
      "summary": "Criza reputațională este dezamorsată rapid cu sprijinul experților în securitate digitală."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de e-Reputație și defăimare",
          "detail": "Verifică dacă polița acoperă costurile de curățare a imaginii online și acțiunile împotriva hărțuirii cibernetice."
        },
        {
          "label": "Asistență juridică împotriva furtului de identitate",
          "detail": "Asigură-te că sunt acoperite cheltuielile judiciare necesare anulării eventualelor contracte încheiate fraudulos pe numele tău."
        }
      ]
    },
    "immediateSteps": [
      "Contactează imediat operatorul de telefonie mobilă pentru blocarea cartelei SIM compromise.",
      "Alertează băncile comerciale unde ai conturi pentru suspendarea temporară a aplicațiilor de mobile banking.",
      "Activează linia de asistență cyber a asigurătorului.",
      "Depune plângere penală la Poliție (Serviciul de Combatere a Criminalității Informatice)."
    ],
    "usefulDocuments": [
      "Dovada eliberată de operatorul telecom privind înlocuirea cartelei SIM",
      "Capturile de ecran cu mesajele de șantaj și conturile compromise",
      "Polița de asigurare Cyber"
    ],
    "advisorQuestions": [
      "Ce servicii de asistență tehnică oferă asigurătorul pentru recuperarea conturilor de social media?",
      "Sunt acoperite onorariile de avocați pentru dosare de șantaj și defăimare online?"
    ],
    "disclaimer": "Asigurarea identității digitale sprijină procedurile de recuperare și apărare legală a drepturilor asiguratului.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-teapa-cumparaturi-online-magazin-fantom",
    "slug": "teapa-cumparaturi-online-magazin-fantom",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Achiziție online pe un magazin fantomă clonat: 1.500 EUR plătiți pe produse inexistente",
    "mainQuestion": "Ce faci dacă un site aparent legitim îți debitează cardul și dispare de pe internet a doua zi?",
    "shortDescription": "O ofertă tentantă pentru electrocasnice scumpe se dovedește a fi o clonă frauduloasă a unui brand mare.",
    "situation": "Comanzi o pompă de căldură sau un televizor de pe un magazin online care pare identic cu un retailer cunoscut, beneficiind de un discount tentant de 30%. Plătești 7.500 RON prin card bancar. A doua zi, site-ul web nu mai este funcțional, numerele de telefon sunt desființate, iar banca te informează că tranzacția a fost procesată către un procesator de plăți dintr-un paradis fiscal, refuzând refuzul de plată simplu (Chargeback).",
    "heroImage": "/images/scenarios/phishing-payment.jpg",
    "imageCaption": "Fraudele la cumpărături online afectează anual mii de cumpărători prin intermediul magazinelor clone și reclamelor sponsorizate frauduloase.",
    "severityLabel": "Frauda Comercială Online",
    "featured": false,
    "tags": [
      "magazin-fantoma",
      "frauda-online",
      "chargeback-refuz",
      "cyber-protectie-cumparaturi",
      "card-clonat"
    ],
    "illustrativeCost": "Pierdere financiară nerambursabilă: 4.000 – 12.000 RON",
    "withoutInsurance": {
      "title": "Doar procedura standard bancară de refuz la plată",
      "statusLabel": "Banca respinge chargeback-ul dacă tranzacția a fost autorizată prin 3D-Secure",
      "financialImpact": "Pierdere de 100% a banilor transferați",
      "points": [
        "Dacă ai introdus codul SMS sau ai aprobat plata în aplicația bancară (3D Secure), banca consideră tranzacția autorizată voluntar și respinge cererea de refuz.",
        "Recuperarea banilor de la servere găzduite în zone offshore este practic imposibilă pentru o persoană fizică.",
        "Rămâi și fără produs și fără banii plătiți."
      ],
      "summary": "Fără o poliță de protecție a cumpărăturilor online, banii virați pe site-uri fantomă sunt pierduți iremediabil."
    },
    "withInsurance": {
      "title": "Cu poliță de Protecție a Cumpărăturilor Online (Online Shopper Protection)",
      "statusLabel": "Rambursare integrală a sumei furate pe baza dosarului de fraudă",
      "financialImpact": "Recuperare a sumei de 7.500 RON direct în cont",
      "points": [
        "Polița acoperă ne-livrarea produselor achiziționate de la comercianți online frauduloși sau fraudarea la plată.",
        "Asigurătorul decontează contravaloarea comenzii dacă bunurile nu ajung în 30 de zile și comerciantul nu poate fi contactat.",
        "Primești asistență specializată pentru raportarea domeniului fraudulos la autorități."
      ],
      "summary": "Cumpărăturile pe internet sunt lipsite de riscuri chiar și în fața celor mai abile înșelăciuni."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Termenul de raportare a ne-livrării",
          "detail": "Verifică în câte zile de la data estimată a livrării trebuie deschis dosarul la asigurător (uzual 30 – 60 de zile)."
        },
        {
          "label": "Plafonul anual de cumpărături online",
          "detail": "Asigură-te că polița oferă un plafon rezonabil (ex. 2.000 – 5.000 EUR/an per asigurat)."
        }
      ]
    },
    "immediateSteps": [
      "Contactează banca emitentă a cardului și solicită blocarea cardului pentru a preveni alte tranzacții automate.",
      "Depune o cerere formală de refuz la plată (Chargeback) la bancă.",
      "Depune plângere penală pentru înșelăciune online la Secția de Poliție.",
      "Transmite dosarul către asigurătorul tău de protecție a cumpărăturilor."
    ],
    "usefulDocuments": [
      "Confirmarea comenzii primită pe e-mail cu detaliile tranzacției",
      "Extrasul de cont bancar cu debitarea sumei",
      "Copia plângerii depuse la Poliție"
    ],
    "advisorQuestions": [
      "Ce cumpărături online sunt acoperite de polița mea (bunuri fizice, bilete de avion, servicii)?",
      "Care este limita maximă de despăgubire per achiziție frauduloasă?"
    ],
    "disclaimer": "Asigurarea cumpărăturilor online completează drepturile legale ale consumatorilor și protejează împotriva fraudelor electronice.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-scurgere-date-confidential-email-gresit",
    "slug": "scurgere-date-confidential-email-gresit",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Angajatul trimite din greșeală o bază de date cu 5.000 de salarii către un partener extern",
    "mainQuestion": "Ce consecințe juridice și amenzi GDPR riști dacă un e-mail confidențial pleacă la adresa greșită?",
    "shortDescription": "O funcție de auto-complete trimite datele financiare ale personalului către un destinatar neautorizat.",
    "situation": "O greșeală minoră de tastare în câmpul „To” face ca o bază de date Excel conținând CNP-urile, salariile nete și evaluările anuale a 5.000 de angajați să fie transmisă unui client extern. Destinatarul deschide fișierul și refuză să semneze un angajament de confidențialitate. Incidentul constituie o breșă gravă de securitate conform Regulamentului GDPR (UE 2016/679), obligând compania la raportare către autoritatea națională de supraveghere și la notificarea individuală a tuturor angajaților afectați.",
    "heroImage": "/images/scenarios/cyber-attack.jpg",
    "imageCaption": "Breșele interne cauzate de erori umane reprezintă peste 60% din incidentele raportate către autoritățile de protecție a datelor.",
    "severityLabel": "Risc Legal GDPR și Relații de Muncă",
    "featured": false,
    "tags": [
      "scurgere-date",
      "eroare-umana-email",
      "amenda-gdpr",
      "cyber-liability",
      "notificare-anspdcp"
    ],
    "illustrativeCost": "Costuri investigație juridică + PR de criză: 40.000 – 120.000 RON",
    "withoutInsurance": {
      "title": "Fără poliță de Cyber & Data Privacy Liability",
      "statusLabel": "Firma achită toate costurile juridice și eventualele amenzi administrative",
      "financialImpact": "Pierderi financiare și riscuri de procese colective din partea angajaților",
      "points": [
        "Onorariile caselor de avocatură specializate pe GDPR pentru gestionarea anchetei ANSPDCP sunt de mii de euro.",
        "Angajații ale căror salarii au fost făcute publice pot acționa firma în instanță cerând daune morale pentru prejudicierea demnității.",
        "Climatul intern de lucru este grav deteriorat."
      ],
      "summary": "O simplă apăsare de tastă declanșează o criză juridică și de relații de muncă de proporții."
    },
    "withInsurance": {
      "title": "Cu poliță de Cyber & Privacy Liability (cu Clauză de Răspuns la Breșe de Date)",
      "statusLabel": "Preluarea costurilor de notificare, consiliere juridică și apărare",
      "financialImpact": "Cheltuieli de gestionare a crizei de date acoperite de asigurător",
      "points": [
        "Asigurătorul pune la dispoziție avocați experți în GDPR pentru redactarea raportului către autoritate în termenul de 72 de ore.",
        "Sunt decontate costurile de notificare individuală și serviciile de PR pentru gestionarea comunicării de criză.",
        "Polița acoperă cheltuielile de apărare în fața autorităților de reglementare."
      ],
      "summary": "Impactul juridic și financiar al erorii umane este gestionat profesionist și limitat eficient."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Acoperirea amenzilor GDPR",
          "detail": "Atenție: legea română interzice asigurarea directă a amenzilor penale sau administrative dacă sunt calificate ca sancțiuni de drept public; polița acoperă cheltuielile de apărare și despăgubirile civile."
        },
        {
          "label": "Echipa de criză (Breach Counsel)",
          "detail": "Verifică dacă asigurătorul oferă acces la o casă de avocatură parteneră de renume pentru răspuns rapid."
        }
      ]
    },
    "immediateSteps": [
      "Contactează imediat destinatarul greșit și solicită ștergerea definitivă a e-mailului și confirmarea scrisă.",
      "Activează Responsabilul cu Protecția Datelor (DPO) al companiei pentru evaluarea riscului la adresa drepturilor persoanelor.",
      "Notifică asigurătorul de Cyber Liability în termen de 24 de ore.",
      "Dacă riscul este ridicat, transmite notificarea oficială către ANSPDCP în maximum 72 de ore."
    ],
    "usefulDocuments": [
      "E-mailul transmis eronat și confirmarea de expediere",
      "Raportul de evaluare preliminară a breșei întocmit de DPO",
      "Polița de asigurare Cyber"
    ],
    "advisorQuestions": [
      "Ce costuri de consiliere juridică sunt decontate în primele 72 de ore de la producerea unei breșe?",
      "Oferă polița suport pentru comunicarea cu persoanele vizate afectate?"
    ],
    "disclaimer": "Asigurarea cibernetică oferă suport de consultanță și acoperire a daunelor civile decurgând din incidente de date.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-crypto-wallet-phishing-chei-private",
    "slug": "crypto-wallet-phishing-chei-private",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Portofelul de criptomonede este golit printr-un smart contract malițios semnat pe Discord",
    "mainQuestion": "Ce protecție există dacă semnezi din greșeală o tranzacție web3 care transferă toate tokenurile?",
    "shortDescription": "Un atac de tip „drainer” sustrage 20.000 EUR în USDT și NFT-uri în mai puțin de 5 secunde.",
    "situation": "Ești activ pe piața activelor digitale. Primești o invitație pe un server de Discord pentru lansarea exclusivă a unui proiect cunoscut. Dai click pe un link de phishing care imită perfect interfața oficială și conectezi portofelul hardware (Ledger / MetaMask). Semnezi o tranzacție de tip „Permit / SetApprovalForAll”. În câteva secunde, un contract malițios golește tot soldul de 22.000 USDT și 3 NFT-uri rare din portofel.",
    "heroImage": "/images/scenarios/cyber-attack.jpg",
    "imageCaption": "Tranzacțiile pe blockchain sunt ireversibile prin design criptografic, făcând atacurile de tip phishing Web3 devastatoare.",
    "severityLabel": "Pierdere Totală de Active Digitale",
    "featured": false,
    "tags": [
      "crypto-drainer",
      "portofel-golit",
      "web3-phishing",
      "smart-contract-malitios",
      "active-digitale"
    ],
    "illustrativeCost": "Valoare active sustrase: 100.000 – 150.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de active digitale",
      "statusLabel": "Pierdere ireversibilă de 100% din fonduri",
      "financialImpact": "Zeci de mii de euro pierduți definitiv",
      "points": [
        "Tehnologia blockchain nu are un mecanism de chargeback sau administrator centralizat care să poată anula tranzacția.",
        "Poliția națională nu are capacitatea tehnică de a recupera fonduri dispersate prin protocoale de tip mixer (Tornado Cash).",
        "Întregul portofoliu de active digitale este pierdut într-un singur click."
      ],
      "summary": "Ireversibilitatea blockchain-ului transformă semnarea unei tranzacții false într-o pierdere totală."
    },
    "withInsurance": {
      "title": "Cu poliță specializată de Digital Asset Protection / Cyber Wallet Insurance",
      "statusLabel": "Despăgubire parțială sau totală pe baza investigației on-chain",
      "financialImpact": "Recuperarea contravalorii activelor furate până la plafonul contractat",
      "points": [
        "Polițele moderne de active digitale acoperă pierderile cauzate de semnarea frauduloasă a contractelor malițioase de tip wallet drainer.",
        "Asigurătorul colaborează cu firme de analiză blockchain (ex. Chainalysis) pentru marcarea adreselor infractorilor.",
        "Primești despăgubirea în valută clasică (EUR/RON) în baza raportului tehnic on-chain."
      ],
      "summary": "Investițiile tale în noua economie digitală beneficiază de o plasă de siguranță reală."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Utilizarea portofelului hardware (Cold Wallet)",
          "detail": "Polițele cer de regulă ca activele de peste 10.000 EUR să fi fost securizate pe un dispozitiv hardware (ex. Ledger, Trezor)."
        },
        {
          "label": "Definiția fraudei Web3",
          "detail": "Verifică dacă sunt acoperite atacurile de tip Approval Exploits sau doar compromiterea cheii private (Seed phrase)."
        }
      ]
    },
    "immediateSteps": [
      "Revocă imediat toate permisiunile smart contractelor active pe platforme specializate (ex. Revoke.cash).",
      "Transferă orice alt activ rămas într-un portofel complet nou, necompromis.",
      "Identifică hash-ul tranzacției malițioase (TxHash) și adresa atacatorului pe exploratorul blockchain (Etherscan).",
      "Deschide dosarul la compania de asigurări atașând dovezile on-chain."
    ],
    "usefulDocuments": [
      "Hash-ul tranzacțiilor (TxHash) de pe blockchain",
      "Capturile de ecran cu interfața falsă de phishing",
      "Polița de asigurare de active digitale"
    ],
    "advisorQuestions": [
      "Ce tipuri de active digitale sunt acoperite (doar stablecoins sau și NFT-uri evaluate)?",
      "Care este procedura de expertiză tehnică on-chain acceptată de asigurător?"
    ],
    "disclaimer": "Securitatea activelor cripto depinde de vigilența utilizatorului; păstrarea seed phrase-ului în siguranță absolută este o cerință fundamentală.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "digital-imprimanta-3d-incendiu-atelier-acasa",
    "slug": "imprimanta-3d-incendiu-atelier-acasa",
    "categoryId": "digital-tech",
    "categoryName": "VIAȚĂ DIGITALĂ & TECH",
    "title": "Imprimanta 3D lăsată să lucreze noaptea suferă o defecțiune termică și aprinde camera de lucru",
    "mainQuestion": "Ce se întâmplă dacă un filament blocat în hotend provoacă un incendiu în timp ce dormi?",
    "shortDescription": "Defecțiunea senzorului de temperatură (thermal runaway) aprinde carcasa și mobilierul din birou.",
    "situation": "Ai un atelier de printare 3D acasă. Lași o piesă complexă la printat peste noapte. Termistorul de pe duză se desprinde, iar placa de bază continuă să încălzească blocul de aluminiu la peste 350°C. Filamentul de plastic se aprinde, flăcările cuprind rola de polimer și biroul din lemn. Focul este stins de pompieri după ce distruge camera de lucru, calculatoarele și afumă întregul etaj.",
    "heroImage": "/images/scenarios/short-circuit-fire.jpg",
    "imageCaption": "Dispozitivele automate de fabricație digitală nesupravegheate prezintă riscuri termice specifice ce necesită atenție sporită la subscrierea poliței de locuință.",
    "severityLabel": "Incendiu Tehnic și Daună la Locuință",
    "featured": false,
    "tags": [
      "imprimanta-3d-incendiu",
      "thermal-runaway",
      "atelier-acasa",
      "asigurare-locuinta",
      "dauna-foc-tehnologic"
    ],
    "illustrativeCost": "Cost renovare + înlocuire electronice: 35.000 – 75.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare facultativă de locuință",
      "statusLabel": "Pierdere financiară integrală",
      "financialImpact": "Plată de zeci de mii de lei din economiile personale",
      "points": [
        "Asigurarea PAD obligatorie nu despăgubește incendiile pornite de la echipamente electronice sau mecatronice.",
        "Toate sculele, calculatoarele și reparațiile camerei se plătesc exclusiv din bugetul familiei.",
        "Rămâi cu atelierul distrus și cu locuința degradată de fum."
      ],
      "summary": "Pasiunea tehnologică lăsată nesupravegheată se transformă într-o pagubă casnică majoră."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (cu Clauză de Echipamente Electronice și Incendiu Casnic)",
      "statusLabel": "Despăgubire integrală a finisajelor, mobilierului și aparatelor arse",
      "financialImpact": "Refacerea spațiului și a echipamentelor acoperită de asigurător",
      "points": [
        "Incendiul accidental este acoperit indiferent de aparatul electrocasnic sau electronic de la care a pornit.",
        "Sunt decontate zugrăvelile, curățarea de funingine și aparatura electronică avariată.",
        "Poți redeschide atelierul de lucru în scurt timp."
      ],
      "summary": "Tot impactul financiar este preluat de polița ta de locuință."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Utilizare privată vs comercială",
          "detail": "Dacă folosești imprimanta pentru a vinde piese pe o firmă, atelierul trebuie declarat ca spațiu de activitate economică."
        },
        {
          "label": "Protecția automată (Thermal Runaway Protection)",
          "detail": "Firmware-ul imprimantei trebuie să aibă activate protecțiile termice din fabrică."
        }
      ]
    },
    "immediateSteps": [
      "Apelează 112 și decuplează siguranța generală din tabloul electric.",
      "Obține Procesul-Verbal de la Pompieri (ISU) cu indicarea cauzei probabile.",
      "Fotografiază camera de lucru și echipamentele distruse.",
      "Transmite dosarul către asigurătorul tău."
    ],
    "usefulDocuments": [
      "Procesul-Verbal de stingere emis de ISU",
      "Facturile de achiziție ale calculatoarelor și imprimantei",
      "Polița facultativă de locuință"
    ],
    "advisorQuestions": [
      "Este acoperită aparatura electronică și imprimanta 3D pe polița mea de conținut al casei?",
      "Ce cerințe există dacă am un mic atelier de creație în locuință?"
    ],
    "disclaimer": "Aparatele care operează cu temperaturi ridicate nu trebuie lăsate să funcționeze nesupravegheate pe materiale inflamabile.",
    "lastReviewed": "Octombrie 2026"
  }
];
