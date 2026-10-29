import { Scenario } from '@/types/scenario';

export const businessScenarios: Scenario[] = [
  {
    "id": "business-atac-ransomware-blocare-servere",
    "slug": "atac-ransomware-blocare-servere",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Atac ransomware: serverele companiei sunt criptate și activitatea se oprește complet",
    "mainQuestion": "Ce faci dacă hackerii cer 150.000 EUR răscumpărare și firma pierde 20.000 EUR pe zi din cauza blocajului?",
    "shortDescription": "Un fișier malițios deschis de un angajat criptează baza de date a clienților, ERP-ul și copiile de rezervă locale.",
    "situation": "Luni dimineața, toți angajații unei companii medii de logistică și comerț găsesc ecranele blocate cu un mesaj de șantaj cibernetic (ransomware LockBit). Baza de date a comenzilor, facturarea, softul ERP și backup-urile conectate la rețea sunt criptate indescifrabil. Hackerii solicită 150.000 EUR în criptomonede pentru cheia de decriptare. Depozitul nu poate expedia comenzi, generând pierderi operaționale de peste 25.000 EUR pe zi.",
    "heroImage": "/images/scenarios/ransomware-server.jpg",
    "imageCaption": "Atacurile cibernetice asupra firmelor mici și mijlocii provoacă costuri imense de întrerupere a activității, investigație forensică și refacere de date.",
    "severityLabel": "Risc Operațional și Financiar Critic",
    "featured": true,
    "tags": [
      "ransomware",
      "cyber-insurance",
      "intrerupere-activitate",
      "forensic-it",
      "santaj-cibernetic"
    ],
    "illustrativeCost": "Pierderi întrerupere activitate + recuperare IT: 150.000 – 400.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de risc cibernetic (Cyber Insurance)",
      "statusLabel": "Costuri suportate integral de firmă + risc de faliment",
      "financialImpact": "Pierderi masive de sute de mii de lei din capitalul propriu",
      "points": [
        "Firma trebuie să angajeze pe cont propriu o echipă externă de securitate cibernetică și investigație forensică (onorarii de 200 – 400 EUR/oră).",
        "Nicio instituție bancară sau de asigurări clasice nu acoperă pierderile cauzate de oprirea vânzărilor.",
        "Dacă decizi să plătești răscumpărarea, nu ai nicio garanție că hackerii îți vor trimite cheia funcțională și riști încălcarea legilor internaționale privind finanțarea terorismului."
      ],
      "summary": "Blocajul operațional prelungit poate duce la insolvența companiei în câteva săptămâni."
    },
    "withInsurance": {
      "title": "Cu poliță completă de Cyber Insurance & Business Interruption",
      "statusLabel": "Activare imediată a echipei de răspuns la incidente (Incident Response Team)",
      "financialImpact": "Acoperire completă a investigației IT, decriptării și pierderilor de profit",
      "points": [
        "Asigurătorul pune la dispoziție în maximum 2 ore o echipă specializată de negociere și experți forensici IT certificați internațional.",
        "Sunt decontate pierderile financiare din întreruperea afacerii (Business Interruption) pe toată durata până la repunerea în funcțiune.",
        "Sunt acoperite costurile de restaurare a bazelor de date din backup-uri securizate și reconfigurarea securizată a serverelor."
      ],
      "summary": "Criza este gestionată profesionist, minimizând timpul de oprire și salvând compania de la faliment."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Cerințele minime de securitate (MFA)",
          "detail": "Atenție critică: asigurătorul cere obligatoriu autentificare cu doi factori (MFA) pe toate conturile administrative și backup offline/imobil."
        },
        {
          "label": "Plata răscumpărării (Extortion payment)",
          "detail": "Verifică dacă polița permite sau exclude expres plata efectivă a sumelor de șantaj."
        },
        {
          "label": "Perioada de franșiză temporală",
          "detail": "Verifică numărul de ore de oprire a activității (ex. 8 sau 12 ore) de la care începe compensarea pierderilor operaționale."
        }
      ]
    },
    "immediateSteps": [
      "Deconectează imediat toate serverele și calculatoarele de la rețeaua fizică de internet și Wi-Fi pentru a opri propagarea criptării.",
      "NU reporni serverele și NU plăti nimic pe cont propriu.",
      "Apelează linia fierbinte 24/7 a asigurătorului de Cyber Insurance pentru activarea Incident Response.",
      "Notifică Directoratul Național de Securitate Cibernetică (DNSC) conform obligațiilor legale."
    ],
    "usefulDocuments": [
      "Jurnalele de securitate (log-uri de firewall și servere izolate)",
      "Mesajul de răscumpărare (ransom note)",
      "Polița de Cyber Insurance"
    ],
    "advisorQuestions": [
      "Include polița mea clauză de întrerupere a afacerii (Business Interruption) cauzată de un atac cibernetic?",
      "Ce parteneri de securitate IT intervinează la solicitarea asigurătorului meu?"
    ],
    "disclaimer": "Asigurarea cibernetică presupune respectarea standardelor fundamentale de igienă digitală și securitate IT.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-eroare-profesionala-consultant-it-avocat",
    "slug": "eroare-profesionala-consultant-it-avocat",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Eroare profesională de programare sau consultanță care provoacă pierderi unui client de 100.000 EUR",
    "mainQuestion": "Ce se întâmplă dacă un bug într-o linie de cod scrisă de firma ta șterge datele clienților sau oprește o campanie Black Friday?",
    "shortDescription": "O eroare tehnică într-un modul de plăți blochează tranzacțiile unui magazin online în cel mai aglomerat weekend din an.",
    "situation": "Compania ta de software dezvoltă un modul de checkout pentru un mare retailer online. Cu 24 de ore înainte de Black Friday, un release neverificat suficient introduce un bug critic care respinge toate plățile cu cardul. Magazinul pierde sute de mii de euro în vânzări nerealizate timp de 36 de ore. Clientul îți înaintează o notificare de despăgubire și acțiune în instanță pentru pierderi financiare directe și prejudiciu comercial.",
    "heroImage": "/images/scenarios/professional-error.jpg",
    "imageCaption": "Asigurarea de Răspundere Profesională (E&O - Errors and Omissions) este esențială pentru companiile IT, consultanți, contabili și arhitecți.",
    "severityLabel": "Răspundere Contractuală Masivă",
    "featured": true,
    "tags": [
      "eroare-profesionala",
      "raspundere-it",
      "errors-and-omissions",
      "bug-software",
      "daune-contractuale"
    ],
    "illustrativeCost": "Pretenții despăgubire client: 200.000 – 500.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere Profesională (E&O / Professional Indemnity)",
      "statusLabel": "Firma ta răspunde cu tot capitalul social și activele proprii",
      "financialImpact": "Plată de sute de mii de lei sau blocarea conturilor firmei",
      "points": [
        "Clauzele de limitare a răspunderii din contract sunt adesea atacate cu succes în instanță dacă se demonstrează neglijență profesională gravă.",
        "Costurile cu avocații comerciali specializați pe litigii contractuale depășesc zeci de mii de lei.",
        "Compania își distruge reputația pe piață și riscă falimentul."
      ],
      "summary": "O singură eroare tehnică a unui angajat poate anula ani întregi de profituri acumulate."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Profesională IT (Professional Indemnity / E&O)",
      "statusLabel": "Apărare juridică specializată și despăgubire decontată de asigurător",
      "financialImpact": "Asigurătorul preia plata despăgubirii în limita sumei asigurate (ex. 250.000 – 1.000.000 EUR)",
      "points": [
        "Compania de asigurări pune la dispoziție avocați comerciali de top pentru negocierea amiabilă sau apărarea în instanță.",
        "Prejudiciul financiar provocat clientului prin neglijență profesională neintenționată este compensat pe baza acordului sau hotărârii judecătorești.",
        "Afacerea își continuă activitatea fără a fi decapitalizată."
      ],
      "summary": "Asigurarea E&O transformă o potențială catastrofă comercială într-un dosar de despăgubire administrat legal."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Retroactive Date (Data retroactivă)",
          "detail": "Asigură-te că polița acoperă lucrări începute anterior dacă data de debut a contractului cu clientul este mai veche."
        },
        {
          "label": "Jurisdicția teritorială",
          "detail": "Dacă livrezi software pentru clienți din SUA sau UK, verifică dacă polița are acoperire globală sau exclude SUA/Canada."
        },
        {
          "label": "Cheltuielile de apărare în instanță",
          "detail": "Verifică dacă onorariile de avocați sunt plătite peste suma asigurată sau se scad din aceasta."
        }
      ]
    },
    "immediateSteps": [
      "Nu recunoaște vinovăția contractuală în scris fără acordul prealabil al asigurătorului.",
      "Izolează fișierele de cod, commit-urile de Git și specificațiile tehnice agreate în proiect (Jira, Confluence).",
      "Avizează pretenția primită de la client la asigurătorul tău de răspundere profesională în termen de 48 de ore.",
      "Coordonează orice răspuns oficial prin intermediul avocaților desemnați de asigurător."
    ],
    "usefulDocuments": [
      "Contractul de prestări servicii software și Anexa cu specificațiile tehnice (SOW)",
      "Notificarea oficială de daună primită de la client",
      "Polița de Răspundere Profesională (E&O)"
    ],
    "advisorQuestions": [
      "Include polița mea răspunderea pentru pierderi financiare pure (Pure Financial Loss) cauzate de indisponibilitatea sistemelor clientului?",
      "Care este acoperirea teritorială (România, UE, Global)?"
    ],
    "disclaimer": "Asigurarea de răspundere profesională acoperă erorile și omisiunile neintenționate săvârșite în exercitarea profesiei.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-incendiu-depozit-marfuri-distruse",
    "slug": "incendiu-depozit-marfuri-distruse",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Incendiu violent într-o hală de depozitare: stocuri de marfă de 500.000 EUR arse complet",
    "mainQuestion": "Ce se întâmplă dacă o hală comercială este distrusă de flăcări împreună cu toate produsele gata de livrare?",
    "shortDescription": "Un scurtcircuit la un motostivuitor lăsat la încărcat aprinde paleții de lemn și marfa stivuită.",
    "situation": "Un depozit comercial de 1.200 mp adăpostește stocuri de electrocasnice, ambalaje și textile în valoare de peste 2.500.000 RON. În timpul nopții, un acumulator de motostivuitor explodează la stația de încărcare. Focul cuprinde stivele de paleți în câteva minute. Structura metalică a halei se prăbușește parțial sub căldură, iar marfa este carbonizată integral.",
    "heroImage": "/images/scenarios/short-circuit-fire.jpg",
    "imageCaption": "Incendiile din spațiile industriale provoacă daune majore la trei nivele: clădire, echipamente fixe și stocuri circulante de marfă.",
    "severityLabel": "Daună Industrială Catastrofală",
    "featured": true,
    "tags": [
      "incendiu-depozit",
      "stocuri-marfa",
      "hala-industriala",
      "isu-autorizatie",
      "asigurare-patrimoniu"
    ],
    "illustrativeCost": "Pagube totale clădire + mărfuri: 1.500.000 – 4.000.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare completă de patrimoniu (Property Insurance)",
      "statusLabel": "Pierdere financiară ireversibilă și faliment imediat",
      "financialImpact": "Milioane de lei datorii către furnizori și clienți",
      "points": [
        "Furnizorii care au livrat marfa cu termen de plată la 60 de zile vor solicita plata integrală a facturilor.",
        "Proprietarul halei (dacă ești chiriaș) te va da în judecată pentru distrugerea imobilului dacă incendiul a pornit de la echipamentul tău.",
        "Compania este forțată să intre în faliment din cauza datoriilor masive."
      ],
      "summary": "Absența asigurării de stocuri și proprietate transformă un incendiu industrial într-un dezastru economic terminal."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare a Proprietății Comerciale (Clădiri, Utilaje și Stocuri Flotante)",
      "statusLabel": "Despăgubire integrală la valoarea reală de achiziție/înlocuire",
      "financialImpact": "Plată de milioane de lei direct în contul companiei",
      "points": [
        "Stocurile de marfă sunt despăgubite la prețul de achiziție din facturile furnizorilor conform evidenței contabile din ziua anterioară incendiului.",
        "Hala metalică este reconstruită integral conform devizelor aprobate.",
        "Dacă polița include clauza de Pierdere de Profit (Business Interruption), sunt acoperite salariile angajaților și cheltuielile fixe pe perioada refacerii halei."
      ],
      "summary": "Compania își reface stocurile și își onorează datoriile fără a-și suspenda definitiv existența."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Autorizația de Securitate la Incendiu (ISU)",
          "detail": "CONDIȚIE CRITICĂ: Verifică dacă polița conține clauza de valabilitate a Autorizației ISU; lipsa autorizației la clădiri care impuneau aviz poate duce la refuzul despăgubirii."
        },
        {
          "label": "Stocuri flotante (Declaration Policy)",
          "detail": "Asigură-te că valoarea stocurilor este actualizată periodic conform fluctuațiilor sezoniere de volum."
        },
        {
          "label": "Mentenanța stingătoarelor și hidranților",
          "detail": "Polița impune respectarea verificărilor tehnice periodice la instalațiile de sprinklere și stingătoare."
        }
      ]
    },
    "immediateSteps": [
      "Asigură salvarea vieții oamenilor și sprijină intervenția brigăzilor ISU.",
      "Salvează serverul de contabilitate sau backup-ul din cloud pentru a avea evidența exactă a stocurilor din gestiune din ziua incendiului.",
      "Avizează asigurătorul în termen de maximum 24-48 de ore.",
      "Obține Raportul oficial de intervenție și Procesul-Verbal de la Pompieri."
    ],
    "usefulDocuments": [
      "Procesul-Verbal de intervenție emis de ISU cu stabilirea cauzei probabile",
      "Balanța contabilă și registrul stocurilor din ziua incidentului",
      "Facturile de achiziție ale mărfurilor și polița de asigurare comercială"
    ],
    "advisorQuestions": [
      "Este acoperită marfa aparținând clienților dacă depozitul funcționează ca centru logistic terț (3PL)?",
      "Ce cerințe de autorizare ISU prevede contractul meu pentru valabilitatea despăgubirii?"
    ],
    "disclaimer": "Respectarea normelor de securitate la incendiu și a prescripțiilor tehnice ale producătorilor de utilaje este obligatorie.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-accident-munca-santier-raspundere-angajator",
    "slug": "accident-munca-santier-raspundere-angajator",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Accident grav de muncă pe șantier: un muncitor cade de pe schelă",
    "mainQuestion": "Ce răspundere civilă și penală are antreprenorul general când un muncitor este rănit grav?",
    "shortDescription": "O schelă neancorată conform normelor se balansează, iar un lucrător suferă traumatisme multiple.",
    "situation": "Pe un șantier de construcții rezidențiale, un muncitor dulgher cade de pe o schelă de la etajul 2 din cauza lipsei balustradei de protecție și a neutilizării hamului de siguranță. Victima suferă politraumatisme majore, fracturi costale și contuzii cerebrale, rămânând cu o invaliditate permanentă de gradul II. Inspectoratul Teritorial de Muncă (ITM) și Parchetul deschid anchetă pentru nerespectarea normelor SSM (Securitate și Sănătate în Muncă). Familia solicită despăgubiri civile de 100.000 EUR.",
    "heroImage": "/images/scenarios/worksite-theft.jpg",
    "imageCaption": "Răspunderea Civilă a Angajatorului față de propriii salariați protejează compania împotriva pretențiilor civile formulate în urma accidentelor de muncă.",
    "severityLabel": "Risc Penal și Despăgubiri Civile Majore",
    "featured": false,
    "tags": [
      "accident-munca",
      "santier-constructii",
      "itm-ancheta",
      "raspundere-angajator",
      "invaliditate-permanenta"
    ],
    "illustrativeCost": "Despăgubiri civile + rentă de invaliditate: 150.000 – 450.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Răspundere Civilă a Angajatorului (Employer Liability)",
      "statusLabel": "Firma de construcții este obligată la plata tuturor despăgubirilor din fonduri proprii",
      "financialImpact": "Plăți masive de sute de mii de lei sau popriri pe conturile de încasări",
      "points": [
        "Sistemul public de asigurări sociale acoperă doar o mică pensie de invaliditate; diferența uriașă până la prejudiciul real este imputată firmei de construcții.",
        "Instanța civilă obligă angajatorul la plata daunelor morale și a unei rente lunare pe durata întregii vieți a muncitorului.",
        "Directorul tehnic și administratorul firmei pot fi trimiși în judecată penală."
      ],
      "summary": "Accidentul de muncă poate aduce blocajul financiar total al companiei de construcții."
    },
    "withInsurance": {
      "title": "Cu poliță de Răspundere Civilă a Angajatorului (Employer Liability / CAR - Contractor All Risks)",
      "statusLabel": "Preluarea pretențiilor civile și a cheltuielilor de apărare de către asigurător",
      "financialImpact": "Asigurătorul decontează despăgubirile civile stabilite pe cale amiabilă sau judecătorească",
      "points": [
        "Polița acoperă sumele pe care angajatorul este obligat legal să le plătească angajatului vătămat (inclusiv daune morale și diferențe salariale).",
        "Sunt asigurate costurile onorariilor avocațiale pentru apărarea intereselor firmei în fața instanțelor de judecată.",
        "Muncitorul și familia sa primesc compensația bănească cuvenită fără certuri interminabile."
      ],
      "summary": "Compania este salvgardată financiar, iar victima accidentului beneficiază de suportul material necesar."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Instruirea SSM și echipamentele de protecție (EIP)",
          "detail": "Asigurătorul verifică fișele de protecția muncii semnate și dovada predării echipamentului de lucru omologat."
        },
        {
          "label": "Subcontractori și zilieri",
          "detail": "Verifică dacă polița acoperă doar salariații cu contract individual de muncă sau și personalul subcontractorilor de pe șantier."
        }
      ]
    },
    "immediateSteps": [
      "Acordă primul ajutor, apelează 112 și securizează zona pentru a nu se modifica starea de fapt.",
      "Anunță imediat Inspectoratul Teritorial de Muncă (ITM) și Poliția conform legislației SSM.",
      "Avizează asigurătorul de răspundere civilă în termen de maximum 24 de ore.",
      "Păstrează fișele de instruire periodică și procesele-verbale de predare a schelei."
    ],
    "usefulDocuments": [
      "Procesul-Verbal de cercetare a accidentului de muncă întocmit de ITM",
      "Fișa individuală de instruire în domeniul securității și sănătății în muncă (SSM)",
      "Polița de Răspundere Civilă a Angajatorului"
    ],
    "advisorQuestions": [
      "Ce plafon de răspundere per victimă este recomandat pentru un șantier cu risc ridicat?",
      "Sunt acoperiți și muncitorii subcontractați dacă antreprenorul general coordonează șantierul?"
    ],
    "disclaimer": "Asigurarea de răspundere preia exclusiv obligațiile civile bănești; respectarea normelor de securitate în muncă este obligatorie prin lege.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-raspundere-administrator-directori-dno",
    "slug": "raspundere-administrator-directori-dno",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Administratorul sau directorul general este dat în judecată de asociați pentru o decizie de management",
    "mainQuestion": "Ce se întâmplă dacă ești acționat personal în instanță pentru o presupusă eroare de decizie strategică în firmă?",
    "shortDescription": "Acționarii minoritari cer 200.000 EUR despăgubiri de la CEO din averea sa personală.",
    "situation": "În calitate de director general sau administrator al unei societăți pe acțiuni, semnezi un contract important de achiziție a unui furnizor. Din cauza unei schimbări bruște de piață, tranzacția se dovedește neprofitabilă. Acționarii minoritari invocă încălcarea obligației de diligență și loialitate conform Legii 31/1990 și formulează o acțiune în răspundere împotriva administratorului, solicitând poprirea averii personale (case, conturi, mașini).",
    "heroImage": "/images/scenarios/professional-error.jpg",
    "imageCaption": "Polița D&O (Directors and Officers Liability) protejează patrimoniul personal al liderilor de companie împotriva litigiilor de management.",
    "severityLabel": "Risc Personal asupra Patrimoniului Propriu",
    "featured": true,
    "tags": [
      "dno-insurance",
      "raspundere-administratori",
      "directors-officers",
      "patrimoniu-personal",
      "litigiu-actionari"
    ],
    "illustrativeCost": "Onorarii de avocați comerciali + potențiale despăgubiri: 150.000 – 600.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare D&O (Directors and Officers Liability)",
      "statusLabel": "Administratorul răspunde cu toate bunurile personale din casă",
      "financialImpact": "Sechestru asigurător pe bunurile familiei administratorului",
      "points": [
        "Conform Legii societăților comerciale 31/1990, administratorii răspund solidar față de societate pentru nerespectarea îndatoririlor statutare.",
        "Cheltuielile de apărare juridică într-un astfel de dosar comercial complex se ridică la zeci de mii de euro și trebuie plătite din salariul personal.",
        "Instanța poate institui ipoteci judiciare pe locuința de familie a directorului până la finalizarea procesului."
      ],
      "summary": "O decizie asumată cu bună-credință în afaceri poate distruge patrimoniul familiei tale."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare a Răspunderii Administratorilor și Directorilor (D&O)",
      "statusLabel": "Apărare juridică de elită finanțată de asigurător + acoperirea daunelor",
      "financialImpact": "Activele personale ale directorului sunt complet protejate",
      "points": [
        "Compania de asigurări preia plata tuturor onorariilor celor mai buni avocați comerciali pentru formularea apărării.",
        "Sunt protejate conturile personale, proprietățile și veniturile private ale directorului.",
        "Dacă instanța constată o eroare de management neintenționată, despăgubirea este achitată integral de polița D&O."
      ],
      "summary": "Poți lua decizii curajoase și strategice de business fără teama că îți riști casa și viitorul familiei."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Excluderea fraudei dovedite",
          "detail": "Polița D&O acoperă deciziile eronate luate cu bună-credință (Business Judgment Rule); faptele penale intenționate sau frauda fiscală dovedită sunt excluse."
        },
        {
          "label": "Run-off Cover (Acoperire post-mandat)",
          "detail": "Verifică dacă ești protejat și după ce îți dai demisia sau părăsești consiliul de administrație (uzual 3 – 6 ani post-mandat)."
        }
      ]
    },
    "immediateSteps": [
      "Notifică imediat asigurătorul D&O la prima primire a unei somații, cereri de chemare în judecată sau convocări AGA cu puncte privind atragerea răspunderii.",
      "Nu încheia tranzacții amiabile și nu accepta acuzațiile înainte de consultarea avocaților desemnați de asigurător.",
      "Colectează toate minutele de ședință ale Consiliului de Administrație și rapoartele de analiză care au stat la baza deciziei.",
      "Solicită asigurătorului avansul fondurilor pentru onorariile de apărare juridică."
    ],
    "usefulDocuments": [
      "Cererea de chemare în judecată formulată de asociați/acționari",
      "Actul constitutiv al societății și Hotărârile AGA/CA relevante",
      "Polița de asigurare D&O activă"
    ],
    "advisorQuestions": [
      "Include polița D&O acoperirea cheltuielilor de apărare în caz de investigații declanșate de autoritățile de reglementare (ANAF, Consiliul Concurenței)?",
      "Care este perioada de raportare extinsă (Run-off) după încheierea mandatului meu de director?"
    ],
    "disclaimer": "Polița D&O nu acoperă faptele de natură penală săvârșite cu intenție directă sau obținerea de foloase necuvenite personale.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-inundatie-magazin-haine-mall",
    "slug": "inundatie-magazin-haine-mall",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Conducta principală a centrului comercial se sparge și inundă magazinul tău de haine",
    "mainQuestion": "Ce despăgubire primești pentru colecția de îmbrăcăminte deteriorată și zilele în care magazinul este închis?",
    "shortDescription": "Tavanul fals din rigips se prăbușește sub greutatea apei, distrugând stocurile de haine și casa de marcat.",
    "situation": "Operezi un magazin de îmbrăcăminte într-un centru comercial aglomerat. În timpul nopții, o conductă a instalației de sprinklere sau a rețelei comune a mall-ului cedează la etajul superior. Sute de litri de apă murdară pătrund prin tavanul magazinului tău. Rafturile, manechinele, colecția nouă de haine de sezon și echipamentele POS sunt compromise. Magazinul este forțat să rămână închis pentru reparații 3 săptămâni.",
    "heroImage": "/images/scenarios/shop-flood.jpg",
    "imageCaption": "Avariile de apă din centrele comerciale implică dispute între chiriaș, administrația mall-ului și firmele de mentenanță tehnică.",
    "severityLabel": "Daună Comercială și Întrerupere Vânzări",
    "featured": false,
    "tags": [
      "inundatie-magazin",
      "dauna-mall",
      "stocuri-haine",
      "pierdere-profit-comercial",
      "property-retail"
    ],
    "illustrativeCost": "Valoare stocuri distruse + vânzări pierdute: 80.000 – 220.000 RON",
    "withoutInsurance": {
      "title": "Doar acționarea în judecată a administrației centrului comercial",
      "statusLabel": "Blocaj în procese de ani de zile cu avocații mall-ului",
      "financialImpact": "Pierderi operaționale enorme până la o eventuală sentință",
      "points": [
        "Contractele de închiriere din marile mall-uri conțin clauze leonine care declină răspunderea administrației pentru avarii accidentale.",
        "Administrația mall-ului dă vina pe instalatorul subcontractat, iar acesta pe producătorul robinetului.",
        "Firma ta este obligată să continue plata chiriei pe spațiu conform contractului, chiar dacă nu poate vinde nimic."
      ],
      "summary": "Fără o poliță proprie, ești prins într-un hățiș juridic prelungit în timp ce afacerea pierde bani zilnic."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare a Bunurilor Chiriașului (Tenant Improvement & Content All-Risks)",
      "statusLabel": "Despăgubire imediată a stocurilor și amenajărilor + plata chiriei",
      "financialImpact": "Compensare completă pe baza stocurilor contabile și a devizului de amenajare",
      "points": [
        "Asigurătorul tău achită imediat devizul de înlocuire a hainelor distruse și a mobilierului comercial.",
        "Clauza de Pierdere de Profit (Business Interruption) acoperă chiria datorată mall-ului și salariile vânzătorilor pe cele 3 săptămâni de închidere.",
        "Compania de asigurări se ocupă de recuperarea banilor de la administrația mall-ului prin regres juridic."
      ],
      "summary": "Magazinul tău își reface stocul și redeschide rapid fără a fi împovărat de pierderi financiare."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza Tenant Improvements (Amenajări chiriaș)",
          "detail": "Asigură-te că sunt asigurate îmbunătățirile aduse spațiului (zugrăveli speciale, corpuri de iluminat, pardoseli)."
        },
        {
          "label": "Renunțarea la regres (Waiver of Subrogation)",
          "detail": "Verifică dacă mall-ul cere o clauză de renunțare la regres între asigurătorii părților."
        }
      ]
    },
    "immediateSteps": [
      "Solicită conducerii mall-ului întocmirea imediată a unui proces-verbal de incident semnat de directorul tehnic.",
      "Fotografiază tavanul prăbușit, apa acumulată și etichetele hainelor deteriorate.",
      "Păstrează mostre din hainele pătate pentru inspecția de daună.",
      "Transmite balanța contabilă cu stocurile de marfă către asigurător."
    ],
    "usefulDocuments": [
      "Procesul-verbal de incident emis de administrația centrului comercial",
      "Raportul de gestiune și facturile de achiziție a hainelor",
      "Polița de asigurare comercială"
    ],
    "advisorQuestions": [
      "Sunt acoperite salariile angajaților pe perioada în care magazinul nu poate funcționa?",
      "Cum se evaluează hainele afectate parțial de apă (pot fi vândute la discount sau se casează integral)?"
    ],
    "disclaimer": "Asigurarea stocurilor comerciale se acordă pe baza evidențelor contabile legal înregistrate la data incidentului.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-furt-echipamente-scule-santier-noapte",
    "slug": "furt-echipamente-scule-santier-noapte",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Scule profesionale și utilaje de 25.000 EUR furate de pe un șantier securizat",
    "mainQuestion": "Ce poliță plătește dacă hoții taie gardul șantierului și golesc containerul de scule Hilti și generatoare?",
    "shortDescription": "Echipamentele de lucru de mare valoare dispar peste noapte, blocând execuția proiectului de construcție.",
    "situation": "O firmă de instalații și construcții are organizare de șantier împrejmuită și păzită. În timpul nopții, hoții neutralizează camerele video, taie lacătele containerului maritim metalic și sustrag rotopercutoare profesionale Hilti, lasere de trasare, generatoare de curent și scule electrice în valoare totală de 120.000 RON. Echipa de 15 muncitori nu mai poate lucra a doua zi, existând risc de penalități de întârziere a lucrărilor.",
    "heroImage": "/images/scenarios/worksite-theft.jpg",
    "imageCaption": "Furtul de echipamente de pe șantierele de construcții reprezintă o problemă majoră din cauza valorii mari de revânzare a sculelor profesionale pe piața secundară.",
    "severityLabel": "Risc de Furt și Întârziere Execuție",
    "featured": false,
    "tags": [
      "furt-santier",
      "scule-profesionale",
      "container-efractie",
      "asigurare-car-constructii",
      "hilti-furt"
    ],
    "illustrativeCost": "Valoare scule furate: 80.000 – 160.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Unelte și Utilaje de Șantier (Contractor Plant & Machinery - CPM)",
      "statusLabel": "Cost suportat integral de firma de construcții",
      "financialImpact": "Pierderea a peste 25.000 EUR din capitalul de lucru",
      "points": [
        "Firma de pază privată are clauze contractuale care limitează răspunderea la valoarea a 1-2 facturi lunare de pază (câteva mii de lei).",
        "Poliția deschide dosar penal pentru furt calificat, dar sculele marcate sunt adesea scoase rapid din țară.",
        "Antreprenorul trebuie să cumpere din nou toate utilajele pe credit sau leasing pentru a nu pierde termenele de șantier."
      ],
      "summary": "Furtul de pe șantier lasă firma decapitalizată și cu muncitorii blocați fără unelte."
    },
    "withInsurance": {
      "title": "Cu poliță CPM (Contractor Plant & Machinery) sau Clauza de Echipamente de Șantier",
      "statusLabel": "Despăgubire integrală aprobată pe baza seriilor de inventar",
      "financialImpact": "Achiziționarea unui set nou complet de scule acoperită de asigurător",
      "points": [
        "Polița acoperă furtul prin efracție al sculelor și utilajelor mobile aflate în perimetrul șantierului.",
        "Despăgubirea se achită rapid conform facturilor de achiziție și seriilor declarate.",
        "Muncitorii sunt re-echipați în câteva zile, iar șantierul își reia ritmul normal."
      ],
      "summary": "Investiția în scule profesionale este securizată împotriva rețelelor de hoți specializați."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Măsurile minime de pază",
          "detail": "Polița impune de regulă împrejmuire completă, containere încuiate cu lacăte de siguranță și prezența unui paznic sau a unui sistem de alarmă conectat la dispecerat."
        },
        {
          "label": "Evidența seriilor unice",
          "detail": "Fiecare sculă profesională trebuie să aibă seria de fabricație înscrisă în registrul de inventar al firmei."
        }
      ]
    },
    "immediateSteps": [
      "Nu atinge containerul forțat și apelează 112 pentru cercetarea criminalistică la fața locului.",
      "Solicită firmei de pază raportul de patrulare din noaptea incidentului.",
      "Pregătește lista de inventar cu seriile unice ale tuturor aparatelor sustrase.",
      "Avizează asigurătorul transmițând dovada înregistrării plângerii penale."
    ],
    "usefulDocuments": [
      "Procesul-verbal de cercetare la fața locului emis de Poliție (Furt calificat)",
      "Facturile de achiziție ale sculelor cu seriile menționate",
      "Polița de asigurare CPM"
    ],
    "advisorQuestions": [
      "Ce cerințe de securitate pe timp de noapte impune polița mea pentru uneltele lăsate pe șantier?",
      "Sunt acoperite sculele aflate în dubele utilitare parcate în incinta șantierului?"
    ],
    "disclaimer": "Polițele CPM cer dovezi clare de efracție și respectarea măsurilor de securitate asumate prin chestionarul de risc.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "business-litigiu-contractual-furnizor-materie-prima",
    "slug": "litigiu-contractual-furnizor-materie-prima",
    "categoryId": "business",
    "categoryName": "BUSINESS & PROFESIONAL",
    "title": "Litigiu comercial internațional: un furnizor livrează materie primă neconformă de 80.000 EUR",
    "mainQuestion": "Ce asigurare acoperă onorariile de avocați și taxele de timbru într-un proces la Curtea de Arbitraj?",
    "shortDescription": "O livrare defectuoasă oprește linia de producție a fabricii, generând un conflict juridic transfrontalier.",
    "situation": "Compania ta de producție importă un lot masiv de granule de polimeri de la un furnizor din Germania în valoare de 80.000 EUR. În producție, lotul se dovedește neconform chimic, generând rebuturi de 100%. Furnizorul refuză restituirea banilor și contestă analizele de laborator. Clauza din contract prevede soluționarea litigiului la Curtea de Arbitraj Comercial Internațional de la Viena. Taxele arbitrale și onorariile casei de avocatură depășesc 25.000 EUR înainte de prima audiere.",
    "heroImage": "/images/scenarios/professional-error.jpg",
    "imageCaption": "Protecția juridică comercială (Commercial Legal Expenses Insurance) preia costurile litigiilor complexe cu furnizorii și partenerii contractuali.",
    "severityLabel": "Blocaj Juridic și Costuri de Arbitraj",
    "featured": false,
    "tags": [
      "litigiu-comercial",
      "curtea-arbitraj",
      "asigurare-protectie-juridica",
      "furnizor-materie-prima",
      "avocati-comerciali"
    ],
    "illustrativeCost": "Onorarii avocați internaționali + taxe arbitrale: 70.000 – 160.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Protecție Juridică a Companiei",
      "statusLabel": "Firma achită toate taxele judiciare și onorariile din profit",
      "financialImpact": "Zeci de mii de euro blocați în avans fără certitudinea recuperării rapide",
      "points": [
        "Taxele de timbru și taxele de înregistrare la tribunalele arbitrale se achită obligatoriu în avans de partea reclamantă.",
        "Multe firme mici și mijlocii renunță la revendicarea drepturilor legitime din cauza costurilor prohibitive ale proceselor.",
        "Furnizorul incorect profită de asimetria financiară pentru a impune acorduri nefavorabile."
      ],
      "summary": "Absența resurselor de apărare juridică te forțează să înghiți o pierdere de zeci de mii de euro."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare de Protecție Juridică Comercială (Commercial Legal Protection)",
      "statusLabel": "Finanțare completă a taxelor de arbitraj și a onorariilor de avocați",
      "financialImpact": "Costuri judiciare acoperite de asigurător până la 50.000 – 100.000 EUR",
      "points": [
        "Compania de asigurări plătește direct onorariile avocaților comerciali specializați.",
        "Sunt decontate expertizele tehnice independente de laborator și taxele judiciare de arbitraj.",
        "Firma ta își poate susține drepturile cu fermitate împotriva oricărui partener incorect."
      ],
      "summary": "Accesul la justiție de calitate superioară este garantat fără a-ți decapitaliza compania."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Litigii contractuale (Contract Disputes)",
          "detail": "Asigură-te că polița de protecție juridică include disputele comerciale contractuale cu furnizorii și clienții, nu doar dreptul muncii sau penal."
        },
        {
          "label": "Plafonul de despăgubire pe dosar",
          "detail": "Alege o sumă asigurată adecvată anvergurii contractelor companiei tale."
        }
      ]
    },
    "immediateSteps": [
      "Emite o notificare oficială de refuz al lotului și solicită o expertiză tehnică de conformitate a mostrelor.",
      "Nu rezilia contractul înainte de a consulta avocații desemnați de asigurătorul de protecție juridică.",
      "Avizează dosarul la compania de asigurări transmițând corespondența comercială.",
      "Permite echipei juridice a asigurătorului să încerce o mediere prealabilă."
    ],
    "usefulDocuments": [
      "Contractul de furnizare cu clauza arbitrală inclusă",
      "Buletinul de analiză de laborator care certifică neconformitatea mărfii",
      "Polița de asigurare de protecție juridică comercială"
    ],
    "advisorQuestions": [
      "Include polița mea acoperirea costurilor pentru litigii comerciale internaționale derulate în afara României?",
      "Pot alege propriul avocat sau trebuie să colaborez cu cel desemnat de asigurător?"
    ],
    "disclaimer": "Asigurarea de protecție juridică evaluează șansele de succes ale cauzei înainte de finanțarea procedurilor judiciare.",
    "lastReviewed": "Octombrie 2026"
  }
];
