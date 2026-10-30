import { Scenario } from '@/types/scenario';

export const proprietariScenarios: Scenario[] = [
  {
    "id": "proprietari-chirias-distruge-apartament-fuge",
    "slug": "chirias-distruge-apartament-fuge",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Chiriașul pleacă pe neașteptate lăsând apartamentul devastat și facturi neachitate",
    "mainQuestion": "Ce faci dacă garanția de o lună nu acoperă nici 10% din distrugerile lăsate în urmă de chiriaș?",
    "shortDescription": "Mobilier zgâriat, pereți desenați, electrocasnice arse și cheltuieli de întreținere neplătite de 6 luni.",
    "situation": "Ai investit într-un apartament cu 2 camere pentru închiriere pe termen lung, mobilat modern. Chiriașul încetează să mai răspundă la telefon. Când mergi să verifici apartamentul, găsești ușa încuiată cu cheia lăsată pe masă. Interiorul este ruinat: canapeaua este ruptă, parchetul este pătat și umflat, plita prin inducție este spartă, iar la asociație există restanțe de 4.500 RON. Garanția de 400 EUR este complet insuficientă în fața pagubelor de peste 18.000 RON.",
    "heroImage": "/images/scenarios/tenant-damage.jpg",
    "imageCaption": "Asigurarea pentru proprietari care închiriază protejează investițiile imobiliare împotriva actelor de vandalism ale chiriașilor și a neplății chiriei.",
    "severityLabel": "Risc Financiar pentru Investiția Imobiliară",
    "featured": true,
    "tags": [
      "proprietar-chirias",
      "daune-chirias",
      "garantie-insuficienta",
      "asigurare-proprietari",
      "vandalism-chirias"
    ],
    "illustrativeCost": "Cost renovare + înlocuire mobilier + datorii: 15.000 – 35.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare dedicată pentru proprietari de locuințe închiriate (Landlord Insurance)",
      "statusLabel": "Proprietarul suportă toate reparațiile din buzunar",
      "financialImpact": "Pierdere de mii de euro și blocarea veniturilor din chirie pe 2 luni",
      "points": [
        "Garanția de o lună acoperă cel mult o zugrăveală parțială.",
        "Acționarea în instanță a unui fost chiriaș fără venituri oficiale este lungă, costisitoare și fără garanții reale de recuperare silită.",
        "Apartamentul rămâne neînchiriat pe perioada renovărilor, adâncind pierderea financiară."
      ],
      "summary": "Randamentul investiției imobiliare pe 2 ani este complet șters de daunele lăsate de chiriaș."
    },
    "withInsurance": {
      "title": "Cu poliță de Asigurare pentru Proprietari de Locuințe Închiriate (Landlord Cover)",
      "statusLabel": "Despăgubire integrală a distrugerilor și recuperarea chiriei neîncasate",
      "financialImpact": "Renovare completă acoperită + compensarea pierderii de chirie",
      "points": [
        "Polița acoperă daunele malițioase (vandalism) și accidentale provocate de chiriași mobilierului și finisajelor.",
        "Sunt decontate electrocasnicele distruse și manopera zugravilor.",
        "Clauza de pierdere de chirie compensează venitul lunar pe durata în care apartamentul este renovat și nu poate fi locuit."
      ],
      "summary": "Investiția ta imobiliară este protejată, iar veniturile pasive rămân sigure și predictibile."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Contractul legal de închiriere",
          "detail": "Asigurătorul cere ca închirierea să fie realizată pe baza unui contract scris și înregistrat fiscal (ANAF)."
        },
        {
          "label": "Procesul-verbal de predare-primire cu inventar foto",
          "detail": "Dovadă esențială: lista de inventar a mobilierului semnată la intrarea chiriașului în spațiu."
        }
      ]
    },
    "immediateSteps": [
      "Nu arunca bunurile deteriorate înainte de inspecția inspectorului de daune.",
      "Fotografiază și filmează amănunțit fiecare cameră, defectele aparatelor și contoarele.",
      "Obține de la asociația de proprietari adeverința cu datoriile la zi la întreținere.",
      "Avizează dosarul la asigurător transmițând contractul de închiriere și pozele inițiale."
    ],
    "usefulDocuments": [
      "Contractul de închiriere semnat și dovada înregistrării ANAF",
      "Procesul-verbal inițial de predare-primire cu inventarul foto",
      "Polița de locuință cu clauza de închiriere (Landlord) bifată"
    ],
    "advisorQuestions": [
      "Include polița mea clauza de protecție împotriva distrugerilor provocate cu intenție de chiriași?",
      "Ce sumă pot primi pentru acoperirea chiriei pierdute pe perioada reparațiilor?"
    ],
    "disclaimer": "Asigurarea pentru proprietari este condiționată de existența unei forme legale de contract de locațiune.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-airbnb-daune-oaspeti-regim-hotelier",
    "slug": "airbnb-daune-oaspeti-regim-hotelier",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Oaspeți de pe Airbnb organizează o petrecere clandestină și distrug apartamentul",
    "mainQuestion": "Ce se întâmplă dacă platforma de rezervare refuză compensarea completă a daunelor provocate de turiști?",
    "shortDescription": "O noapte de petrecere ilegală se soldează cu uși sparte, pereți afumați și plângeri penale de la vecini.",
    "situation": "Închiriezi un studio în regim hotelier prin Airbnb sau Booking. Oaspetele rezervă pentru 2 persoane, dar aduce 15 oameni pentru o petrecere clandestină cu alcool și substanțe interzise. Dimineața, vecinii cheamă poliția pentru tulburarea liniștii. Ușa de la intrare a fost forțată, parchetul este ars cu mucuri de țigară, chiuveta din baie este smulsă din perete, iar televizorul lipsește. Cererea de despăgubire depusă la suportul platformei online este amânată și respinsă parțial.",
    "heroImage": "/images/scenarios/short-term-rental.jpg",
    "imageCaption": "Închirierea în regim hotelier de scurtă durată este considerată activitate comercială și este exclusă din polițele standard de locuință dacă nu există clauză specifică.",
    "severityLabel": "Risc Financiar Comercial și Relație cu Asociația",
    "featured": true,
    "tags": [
      "airbnb-daune",
      "regim-hotelier",
      "petrecere-ilegala",
      "aircover-refuz",
      "asigurare-short-term-rental"
    ],
    "illustrativeCost": "Pagube totale reparații + curățenie extremă: 15.000 – 40.000 RON",
    "withoutInsurance": {
      "title": "Doar asigurarea standard de locuință (Fără clauză de regim hotelier)",
      "statusLabel": "Refuz total de plată din partea asigurătorului tradițional",
      "financialImpact": "Plată integrală a reparațiilor din veniturile proprietarului",
      "points": [
        "ATENȚIE: Polițele obișnuite de locuință exclud complet spațiile folosite în scop comercial sau de cazare turistică.",
        "Programele automate de protecție ale platformelor (ex. AirCover) au proceduri birocratice greoaie și resping frecvent dosarele dacă nu ai chitanțe originale pentru fiecare obiect.",
        "Proprietarul rămâne cu apartamentul blocat și riscă amenzi mari de la asociația de proprietari."
      ],
      "summary": "Închirierea pe Airbnb fără poliță dedicată de scurtă durată te lasă complet neacoperit la daune mari."
    },
    "withInsurance": {
      "title": "Cu poliță dedicată de Asigurare pentru Închirieri în Regim Hotelier (Short-Term Rental Cover)",
      "statusLabel": "Despăgubire rapidă pe poliță privată independentă de platformă",
      "financialImpact": "Costuri de renovare, mobilier și igienizare acoperite 100%",
      "points": [
        "Polița recunoaște expres activitatea de cazare turistică pe termen scurt.",
        "Sunt decontate reparațiile la instalații, schimbarea ușilor și curățenia profesională extremă.",
        "Include răspundere civilă față de vecini dacă apa sau zgomotul au afectat apartamentele din jur."
      ],
      "summary": "Afacerea ta de regim hotelier rulează în siguranță, fără a depinde de capriciile suportului clienți al platformelor."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Definiția utilizării spațiului",
          "detail": "Asigură-te că este bifată opțiunea „Închiriere de scurtă durată / Regim hotelier / Airbnb”."
        },
        {
          "label": "Răspunderea față de asociația de locatari",
          "detail": "Verifică dacă sunt acoperite daunele aduse spațiilor comune ale blocului (lift, casa scării) de către oaspeți."
        }
      ]
    },
    "immediateSteps": [
      "Mergi imediat la fața locului și solicită intervenția Poliției dacă s-au comis fapte de furt sau distrugere.",
      "Fotografiază și filmează amănunțit fiecare detaliu al degradărilor.",
      "Deschide incidentul simultan în platforma de rezervare și la compania ta de asigurări.",
      "Nu permite intrarea unor noi oaspeți înainte de constatarea fizică a pagubelor."
    ],
    "usefulDocuments": [
      "Confirmarea rezervării din platforma online (cu datele de identificare ale oaspetelui)",
      "Procesul-verbal emis de Poliție în caz de furt/distrugere",
      "Polița de asigurare cu clauză de regim hotelier"
    ],
    "advisorQuestions": [
      "Este activitatea mea de Airbnb acoperită în contractul de asigurare de locuință?",
      "Ce procedură se aplică dacă daunele produse de oaspeți afectează și apartamentul vecinului de jos?"
    ],
    "disclaimer": "Cazarea turistică presupune respectarea normelor legale de autorizare a activității și declararea oaspeților conform legii.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-imobil-vacant-spargere-inghet",
    "slug": "imobil-vacant-spargere-inghet",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Proprietate nelocuită timp de 4 luni: țeavă spartă de ger și efracție",
    "mainQuestion": "De ce refuză asigurătorii despăgubirea dacă o casă sau un apartament stă gol mai mult de 30-60 de zile?",
    "shortDescription": "Clauza de neocupare (Unoccupancy Clause) anulează acoperirea dacă proprietarul nu a notificat absența îndelungată.",
    "situation": "Ai cumpărat o casă sau un apartament ca investiție și îl lași nelocuit pe timpul iernii în așteptarea unui chiriaș potrivit. Nu oprești alimentarea generală cu apă și lași căldura pe minim. În timpul unui ger de -15°C, centrala intră în avarie, apa îngheață în calorifere și conductele plesnesc. Câteva săptămâni mai târziu, hoții observă casa nelocuită, forțează ușa din spate și fură centrala termică și cablurile de cupru. Asigurătorul respinge dosarul invocând clauza de nelocuire mai mare de 30 de zile.",
    "heroImage": "/images/scenarios/vacant-frozen-pipe.svg",
    "imageCaption": "Condițiile de asigurare impun măsuri preventive obligatorii (oprirea apei și golirea instalației iarna) și pot condiționa acoperirea dacă imobilul rămâne nelocuit pe perioade îndelungate.",
    "severityLabel": "Risc Major de Excludere Contractuală",
    "featured": true,
    "tags": [
      "imobil-nelocuit",
      "clauza-neocupare",
      "teava-inghetata",
      "furt-cupru",
      "proprietate-vacanta"
    ],
    "illustrativeCost": "Pagube din îngheț + efracție: 40.000 – 120.000 RON",
    "withoutInsurance": {
      "title": "Poliță standard fără notificare de nelocuire",
      "statusLabel": "Refuz legitim de despăgubire din partea asigurătorului",
      "financialImpact": "Pierdere de zeci de mii de lei suportată integral de proprietar",
      "points": [
        "Aproape toate polițele de casă conțin clauza: „Dacă imobilul rămâne neocupat mai mult de 30 (sau 60) de zile, riscurile de furt, vandalism și avarii de apă sunt excluse”.",
        "Asigurătorul verifică istoricul facturilor de utilități (consum zero de apă și electricitate pe 3 luni) și demonstrează starea de abandon.",
        "Proprietarul trebuie să refacă instalația termică și finisajele exclusiv din fonduri proprii."
      ],
      "summary": "Clauza de nelocuire este una dintre cele mai frecvente cauze de respingere a dosarelor de daună la locuințe."
    },
    "withInsurance": {
      "title": "Cu poliță cu Clauză de Locuință Nelocuită / Casă de Vacanță (Unoccupied Property Cover)",
      "statusLabel": "Acoperire validă confirmată pe toată durata absenței",
      "financialImpact": "Despăgubire integrală a instalației și finisajelor distruse",
      "points": [
        "Proprietarul a declarat contractual starea de nelocuire și a plătit o primă adaptată riscului crescut.",
        "Condițiile de golire a instalațiilor sau menținere a temperaturii de gardă (anti-îngheț la minim 10°C) au fost documentate.",
        "Asigurătorul compensează atât avaria tehnică a conductelor, cât și daunele produse de efracție."
      ],
      "summary": "Investiția ta imobiliară rămâne protejată chiar și atunci când nu ai încă un chiriaș."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Termenul maxim de nelocuire",
          "detail": "Verifică în condițiile generale câte zile consecutive poate sta casa nelocuită (30, 45 sau 60 de zile)."
        },
        {
          "label": "Măsurile obligatorii pe timp de iarnă",
          "detail": "Polițele impun golirea completă a instalației de apă sau menținerea centralei pornite pe regim anti-îngheț dacă imobilul este vacant între 1 noiembrie și 31 martie."
        }
      ]
    },
    "immediateSteps": [
      "Oprește imediat robinetul general de alimentare cu apă de la căminul de branșament.",
      "Contactează Poliția pentru constatarea efracției și a furtului echipamentelor.",
      "Fotografiază caloriferele crăpate, centrala distrusă și urmele de forțare ale ușii.",
      "Verifică contractul de asigurare înainte de a da declarații scrise privind durata exactă de neocupare."
    ],
    "usefulDocuments": [
      "Procesul-verbal de cercetare la fața locului emis de Poliție",
      "Facturile de utilități (gaze, electricitate) din ultimele luni",
      "Polița de asigurare facultativă de locuință"
    ],
    "advisorQuestions": [
      "Cum procedez dacă apartamentul meu rămâne nelocuit 3-4 luni între doi chiriași?",
      "Ce măsuri tehnice trebuie să iau pe timp de iarnă pentru a nu pierde valabilitatea asigurării?"
    ],
    "disclaimer": "Respectarea clauzei de neocupare este esențială; nedeclararea perioadelor lungi de absență atrage pierderea acoperirii conform contractului.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-inundatie-masiva-apartament-bloc-retea",
    "slug": "inundatie-masiva-apartament-bloc-retea",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Apartamentul închiriat suferă o inundație masivă din coloana principală a blocului",
    "mainQuestion": "Cine este responsabil dacă o coloană comună se rupe în ghena de instalații a imobilului închiriat?",
    "shortDescription": "Zeci de metri cubi de apă distrug parchetul chiriașului și tavanul a 3 apartamente de dedesubt.",
    "situation": "Deții un apartament dat în chirie. Într-o noapte, coloana comună de alimentare cu apă rece din ghena tehnică fisurează la nivelul etajului tău. Deși avaria este pe partea comună a blocului, apa se revarsă prin apartamentul tău și se scurge la etajele inferioare, afectând trei vecini. Chiriașul cere rezilierea contractului și restituirea chiriei plătite în avans, iar asociația de locatari refuză să își asume rapid reparațiile.",
    "heroImage": "/images/scenarios/neighbor-flood.jpg",
    "imageCaption": "Avariile pe rețelele comune de apă ale blocurilor creează dispute complexe de răspundere între asociațiile de proprietari și proprietarii individuali.",
    "severityLabel": "Conflict Juridic și Daună Imobiliară",
    "featured": false,
    "tags": [
      "coloana-comuna-bloc",
      "inundatie-ghena",
      "asociatie-proprietari",
      "chirias-plecat",
      "asigurare-investitii"
    ],
    "illustrativeCost": "Costuri reparații finisaje + pierdere chirie: 25.000 – 55.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare completă de proprietar",
      "statusLabel": "Proprietarul rămâne blocat între chiriaș și asociație",
      "financialImpact": "Pierderi de zeci de mii de lei suportate provizoriu din buzunar",
      "points": [
        "Fondul de reparații al asociației de locatari este adesea insuficient pentru plata imediată a devizelor.",
        "Vecinii de jos dau în judecată proprietarul apartamentului de unde a pornit apa, obligându-te să te aperi pe cheltuială proprie.",
        "Pierzi chiriașul și veniturile lunare pe o perioadă de cel puțin 2-3 luni."
      ],
      "summary": "Investiția imobiliară devine o sursă de cheltuieli neprevăzute și stres juridic."
    },
    "withInsurance": {
      "title": "Cu poliță completă de Locuință cu Clauză de Răspundere față de Vecini și Pierdere de Chirie",
      "statusLabel": "Reparație imediată și preluarea disputelor de către asigurător",
      "financialImpact": "Despăgubire integrală a finisajelor + compensarea chiriei pierdute",
      "points": [
        "Asigurătorul repară finisajele din apartamentul tău și decontează daunele celor trei vecini de dedesubt.",
        "Compania de asigurări se ocupă de regresul împotriva Asociației de Proprietari pentru recuperarea banilor.",
        "Clauza de pierdere de chirie compensează venitul lunar pe durata lucrărilor de refacere."
      ],
      "summary": "Patrimoniul tău este protejat, iar relația cu chiriașii și vecinii este gestionată impecabil."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Delimitarea instalațiilor private vs comune",
          "detail": "Asigură-te că polița include apa de conductă indiferent dacă fisura s-a produs pe coloana comună verticală sau pe rețeaua interioară orizontală."
        },
        {
          "label": "Suma asigurată pentru răspundere terți",
          "detail": "Recomandat minim 20.000 – 50.000 EUR pentru a acoperi mai multe apartamente inundate concomitent."
        }
      ]
    },
    "immediateSteps": [
      "Solicită președintelui și administratorului de bloc întocmirea unui proces-verbal de constatare la fața locului.",
      "Fotografiază țeava fisurată din ghena tehnică și urmele de apă din apartamentele afectate.",
      "Avizează asigurătorul tău în termen de 24 de ore.",
      "Propune chiriașului o soluție amiabilă de relocare temporară sau reziliere conform contractului."
    ],
    "usefulDocuments": [
      "Procesul-verbal de constatare semnat de Asociația de Proprietari și instalator",
      "Polița facultativă de locuință",
      "Contractul de închiriere"
    ],
    "advisorQuestions": [
      "Cum se împarte răspunderea între asigurarea mea și fondul de reparații al asociației?",
      "Este acoperită chiria pe care o pierd dacă chiriașul reziliază contractul din cauza inundației?"
    ],
    "disclaimer": "Asigurarea de locuință decontează daunele și preia acțiunile de regres împotriva asociațiilor responsabile de rețelele comune.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-incendiu-bucatarie-chirias-neglijenta",
    "slug": "incendiu-bucatarie-chirias-neglijenta",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Chiriașul uită o tigaie cu ulei pe foc: bucătăria apartamentului arde complet",
    "mainQuestion": "Ce poliță intervine dacă chiriașul tău provoacă un incendiu grav din neglijență casnică?",
    "shortDescription": "Flăcările cuprind hota, mobila de bucătărie din MDF și afumă întregul apartament de închiriat.",
    "situation": "Chiriașul pune o tigaie cu ulei pe aragaz și adoarme în sufragerie. Uleiul se aprinde, flăcările cuprind hota din plastic și corpurile superioare de mobilier. Pompierii sparg ușa și sting focul înainte de propagarea la vecini, dar bucătăria este complet carbonizată, iar fumul negru a distrus zugrăvelile și mobilierul din toate camerele. Paguba este evaluată la 42.000 RON.",
    "heroImage": "/images/scenarios/short-circuit-fire.jpg",
    "imageCaption": "Răspunderea locativă a chiriașului (Risque Locatif) este un concept fundamental care separă bunul imobil al proprietarului de fapta culpabilă a chiriașului.",
    "severityLabel": "Incendiu Casnic și Risc Locativ",
    "featured": false,
    "tags": [
      "incendiu-chirias",
      "ulei-foc",
      "raspundere-locativa",
      "mobilier-ars",
      "asigurare-landlord"
    ],
    "illustrativeCost": "Cost renovare bucătărie + decontaminare fum: 35.000 – 60.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de locuință pe numele proprietarului",
      "statusLabel": "Dispută judiciară lungă cu un chiriaș fără bani lichizi",
      "financialImpact": "Plată de 40.000+ RON din buzunarul proprietarului",
      "points": [
        "Chiriașul nu are fondurile necesare pentru a renova pe loc apartamentul din salariul curent.",
        "Proprietarul este nevoit să plătească din economii reparațiile pentru a putea reintroduce imobilul în circuitul economic.",
        "Un proces civil împotriva chiriașului poate dura 2 ani fără garanția recuperării reale a banilor."
      ],
      "summary": "Proprietarul suportă toată paguba din lipsa unui instrument de asigurare adecvat."
    },
    "withInsurance": {
      "title": "Cu Asigurare Facultativă de Locuință (cu Clauză de Imobil Dat în Chirie)",
      "statusLabel": "Despăgubire integrală achitată proprietarului de către asigurător",
      "financialImpact": "Bucătărie complet reconstruită și finisaje refăcute",
      "points": [
        "Polița proprietarului acoperă riscul de incendiu indiferent dacă a fost produs de o defecțiune tehnică sau de neglijența chiriașului.",
        "Asigurătorul decontează devizul de reconstrucție al bucătăriei, electrocasnicele încorporate și zugrăvelile.",
        "Compania de asigurări preia dreptul de regres împotriva chiriașului dacă acesta a comis o culpă gravă dovedită."
      ],
      "summary": "Investiția imobiliară este readusă la starea inițială fără întârzieri financiare."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Declararea calității de locator (Proprietar care închiriază)",
          "detail": "Asigură-te că polița conține mențiunea că spațiul este locuit de chiriași, nu de proprietar."
        },
        {
          "label": "Asigurarea obligatorie cerută chiriașului",
          "detail": "O practică optimă este obligarea chiriașului prin contractul de chirie să dețină o poliță de răspundere locativă."
        }
      ]
    },
    "immediateSteps": [
      "Obține Raportul de intervenție de la Pompieri (ISU) cu indicarea cauzei incendiului.",
      "Fotografiază detaliat toate corpurile de mobilier arse și aparatele electrocasnice distruse.",
      "Avizează asigurătorul conform termenului contractual (maxim 3 zile lucrătoare la Eurocasa).",
      "Semnează cu chiriașul un proces-verbal de constatare a incidentului."
    ],
    "usefulDocuments": [
      "Procesul-Verbal emis de ISU Pompieri",
      "Contractul de locațiune încheiat cu chiriașul",
      "Polița de asigurare facultativă a proprietarului"
    ],
    "advisorQuestions": [
      "Ce acoperire am dacă incendiul produs de chiriaș a afectat și fațada blocului sau apartamentul vecinilor?",
      "Cum se aplică regresul asigurătorului împotriva chiriașului vinovat?"
    ],
    "disclaimer": "Declararea corectă a destinației imobilului (locuit de proprietar vs închiriat) este esențială pentru evitarea respingerii dosarului.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-refuz-evacuare-chirias-rau-platnic",
    "slug": "refuz-evacuare-chirias-rau-platnic",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Chiriașul nu mai plătește de 5 luni și refuză să elibereze apartamentul",
    "mainQuestion": "Ce costuri juridice și procedurale implică evacuarea silită a unui chiriaș rău-platnic?",
    "shortDescription": "Un chiriaș schimbă yala și refuză dialogul, acumulând mii de euro restanțe la chirie și întreținere.",
    "situation": "Chiriașul unui apartament de 3 camere încetează plata chiriei și a utilităților. După 90 de zile de promisiuni neonorate, proprietarul îi cere evacuarea amiabilă. Chiriașul schimbă butucul ușii și amenință cu plângere penală pentru violare de domiciliu dacă proprietarul încearcă să intre. Proprietarul este nevoit să apeleze la procedura specială de evacuare din Codul de Procedură Civilă prin executor judecătoresc și instanță.",
    "heroImage": "/images/scenarios/vacant-property.jpg",
    "imageCaption": "Evacuarea silită legală a unui locatar fără titlu durează între 3 și 9 luni și implică taxe judiciare și onorarii de executare silită.",
    "severityLabel": "Litigiu Locativ și Pierdere de Venituri",
    "featured": false,
    "tags": [
      "evacuare-silita",
      "chirias-rau-platnic",
      "asigurare-protectie-juridica-chirie",
      "executor-judecatoresc",
      "chirie-neachitata"
    ],
    "illustrativeCost": "Onorariu avocat + executor judecătoresc + chirie pierdută: 18.000 – 35.000 RON",
    "withoutInsurance": {
      "title": "Fără asigurare de Protecție Juridică a Proprietarului (Rent Legal Protection)",
      "statusLabel": "Proprietarul plătește din buzunar toate cheltuielile judiciare",
      "financialImpact": "Mii de euro cheltuiți cu avocați în timp ce apartamentul nu produce chirie",
      "points": [
        "Proprietarul nu poate întrerupe utilitățile sau forța ușa fără riscul de a comite infracțiuni.",
        "Onorariile avocatului și ale executorului judecătoresc depășesc 5.000 – 10.000 RON și se achită în avans.",
        "Chiria neîncasată pe durata procesului este greu de recuperat dacă chiriașul nu are bunuri urmăribile."
      ],
      "summary": "Blocajul imobiliar cauzat de un chiriaș de rea-credință generează pierderi grele."
    },
    "withInsurance": {
      "title": "Cu poliță de Protecție Juridică a Proprietarului & Asigurare de Chirie (Rent Guarantee)",
      "statusLabel": "Finanțarea completă a evacuării legale + plata chiriei restante de către asigurător",
      "financialImpact": "Recuperarea chiriei lunare garantate + costuri judiciare plătite de asigurător",
      "points": [
        "Polița plătește lunar chiria garantată direct în contul proprietarului pe durata litigiului (până la 6-12 luni).",
        "Asigurătorul pune la dispoziție avocați specializați și acoperă onorariul executorului judecătoresc pentru punerea în executare.",
        "Investiția imobiliară își păstrează randamentul fără stresul proceselor."
      ],
      "summary": "Venitul tău din chirie este asigurat chiar și atunci când chiriașul refuză plata."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Contract de închiriere titlu executoriu",
          "detail": "Recomandare legală: contractul înregistrat la ANAF sau autentificat la notar constituie titlu executoriu pentru chirie, accelerând evacuarea."
        },
        {
          "label": "Numărul de luni de chirie garantată",
          "detail": "Verifică dacă asigurarea plătește 6, 9 sau 12 luni de chirie restantă pe durata evacuării."
        }
      ]
    },
    "immediateSteps": [
      "Emite o notificare oficială de punere în întârziere și reziliere prin intermediul unui executor judecătoresc sau avocat.",
      "NU încerca să intri cu forța sau să schimbi yala fără executor (riști dosar penal pentru violare de domiciliu).",
      "Deschide dosarul la compania de asigurări transmițând contractul de închiriere și dovezile de neplată.",
      "Lasă avocații asigurătorului să introducă cererea de evacuare pe procedura specială prevăzută de lege."
    ],
    "usefulDocuments": [
      "Contractul de închiriere înregistrat fiscal la ANAF",
      "Extrasele de cont cu lipsa încasării chiriei",
      "Polița de Protecție Juridică a Proprietarului"
    ],
    "advisorQuestions": [
      "Câte luni de chirie neachitată sunt compensate de polița mea pe perioada procesului de evacuare?",
      "Sunt acoperite onorariile executorului judecătoresc pentru evacuarea efectivă?"
    ],
    "disclaimer": "Procedurile de evacuare trebuie să respecte strict normele Codului de Procedură Civilă român.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-cedare-centrala-termica-iarna-apartament-inchiriat",
    "slug": "cedare-centrala-termica-iarna-apartament-inchiriat",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Centrala termică cedează în miezul iernii la -15°C într-un apartament închiriat",
    "mainQuestion": "Ce obligații urgente ai ca proprietar când chiriașii rămân fără căldură și apă caldă de Crăciun?",
    "shortDescription": "Schimbătorul de căldură se fisurează, lăsând familia cu bebeluș în frig în zile de sărbătoare.",
    "situation": "Este 28 decembrie, iar afară sunt -12°C. Chiriașii din apartamentul tău de investiții te sună disperați: centrala termică murală pe gaz are cod de eroare de blocaj total, curge apă sub ea, iar apartamentul s-a răcit la 14°C. În casă locuiește o familie cu un bebeluș de 4 luni. Niciun service tehnic nu are piese pe stoc în perioada sărbătorilor, iar înlocuirea de urgență cu o centrală nouă în condensare costă 8.500 RON cu tot cu montaj autorizat ISCIR.",
    "heroImage": "/images/scenarios/frozen-pipe-burst.svg",
    "imageCaption": "Avariile sistemelor de încălzire în plină iarnă impun intervenții tehnice de urgență 24/7 pentru a preveni înghețul instalațiilor și rezilierea contractelor.",
    "severityLabel": "Urgență Termică și Confort Locativ",
    "featured": false,
    "tags": [
      "centrala-termica-avarie",
      "iarna-frig-apartament",
      "asistenta-urgenta-proprietari",
      "inlocuire-centrala-iscir",
      "landlord-cover"
    ],
    "illustrativeCost": "Cost centrală nouă + montaj autorizat: 6.500 – 11.000 RON",
    "withoutInsurance": {
      "title": "Fără serviciu de asistență tehnică de urgență la domiciliu",
      "statusLabel": "Proprietarul caută disperat instalatori privați la tarife duble de sărbători",
      "financialImpact": "Plată de mii de lei cash pe loc sau chiriași plecați la hotel pe cheltuiala ta",
      "points": [
        "Proprietarul are obligația legală conform Codului Civil de a asigura funcționarea utilităților de bază (căldură, apă).",
        "Dacă nu rezolvi problema în 24 de ore, chiriașii pot cere cazare la hotel plătită de tine sau rezilierea unilaterală cu daune.",
        "Echipele particulare cer tarife exorbitante pentru intervenții în perioada sărbătorilor de iarnă."
      ],
      "summary": "Avaria centralei în plin sezon rece devine o criză stresantă și costisitoare."
    },
    "withInsurance": {
      "title": "Cu poliță de Locuință cu Asistență Tehnică de Urgență la Domiciliu (Home Emergency 24/7)",
      "statusLabel": "Intervenție de urgență în 2 ore a tehnicianului partener autorizat",
      "financialImpact": "Manopera de urgență și remedierea temporară/definitivă decontate de asigurător",
      "points": [
        "Dispeceratul de asistență trimite în 2-4 ore un tehnician acreditat ISCIR dotat cu piese de schimb.",
        "Sunt acoperite costurile de deplasare, manoperă și remediere a defecțiunilor de încălzire.",
        "Dacă centrala nu poate fi reparată pe loc, asigurătorul furnizează radiatoare electrice de urgență pentru confortul chiriașilor."
      ],
      "summary": "Urgența de încălzire este rezolvată profesionist fără ca tu să alergi după meșteri privați."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Autorizarea ISCIR periodică",
          "detail": "Centrala termică trebuie să aibă verificarea tehnică periodică (VTP) valabilă la zi efectuată de o firmă autorizată ISCIR."
        },
        {
          "label": "Plafonul per intervenție de urgență",
          "detail": "Verifică suma alocată pentru asistența de avarii termice și sanitare per intervenție."
        }
      ]
    },
    "immediateSteps": [
      "Apelează imediat numărul de asistență tehnică de urgență 24/7 de pe polița ta de locuință.",
      "Oferă chiriașilor radiatoare electrice temporare pentru a menține temperatura în camere.",
      "Asigură accesul tehnicianului de service autorizat în apartament.",
      "Păstrează fișa de intervenție și devizul de piese."
    ],
    "usefulDocuments": [
      "Procesul-verbal de punere în funcțiune / VTP ISU/ISCIR valabil",
      "Fișa de constatare tehnică emisă de tehnicianul de service",
      "Polița de asigurare de locuință cu asistență de urgență activă"
    ],
    "advisorQuestions": [
      "Include polița mea asistență de urgență 24/7 pentru centrale termice în weekend și sărbători legale?",
      "Ce sumă este decontată dacă centrala trebuie înlocuită complet cu un model nou?"
    ],
    "disclaimer": "Centralele termice pe gaz necesită revizii tehnice bienale obligatorii conform legislației ISCIR.",
    "lastReviewed": "Octombrie 2026"
  },
  {
    "id": "proprietari-lucrari-neautorizate-chirias-demolare-pereti",
    "slug": "lucrari-neautorizate-chirias-demolare-pereti",
    "categoryId": "proprietari-chiriasi",
    "categoryName": "PROPRIETARI & INVESTITORI",
    "title": "Chiriașul dărâmă fără acord un perete despărțitor pentru a face open-space",
    "mainQuestion": "Ce faci dacă un chiriaș modifică structura apartamentului fără autorizație de construire?",
    "shortDescription": "Un perete din cărămidă este demolat ilegal, atrăgând amenzi de la Inspectoratul de Stat în Construcții.",
    "situation": "Închiriezi un apartament generos pe termen lung unei firme sau unui locatar. După 6 luni, la o vizită convenită, descoperi că locatarul a demolat peretele dintre bucătărie și hol pentru a crea un spațiu deschis, fără autorizație de construire și fără acordul tău scris. Vecinii au sesizat Poliția Locală (Disciplina în Construcții) și Inspectoratul de Stat în Construcții (ISC), care emit o amendă de 10.000 RON și dispoziție de aducere la starea inițială pe numele proprietarului.",
    "heroImage": "/images/scenarios/renovation-leak.jpg",
    "imageCaption": "Modificările neautorizate ale compartimentărilor interioare încalcă Legea 50/1991 privind autorizarea construcțiilor, atrăgând sancțiuni dure pentru proprietar.",
    "severityLabel": "Sancțiune Administrativă și Viciu Structural",
    "featured": false,
    "tags": [
      "modificari-neautorizate",
      "demolare-perete-chirias",
      "isc-disciplina-constructii",
      "amenzi-constructii",
      "reconstructie-zidarie"
    ],
    "illustrativeCost": "Cost expertiză structurală + zidire + amendă: 18.000 – 40.000 RON",
    "withoutInsurance": {
      "title": "Fără protecție juridică a proprietarului",
      "statusLabel": "Proprietarul este amendat și obligat la refacerea zidăriei din bani proprii",
      "financialImpact": "Plată de zeci de mii de lei către ISC și echipe de zidari",
      "points": [
        "Legea 50/1991 sancționează proprietarul înscris în cartea funciară, nu neapărat chiriașul executant.",
        "Proprietarul trebuie să angajeze un expert tehnic atestat MLPAT pentru a demonstra că peretele nu era de rezistență.",
        "Chiriașul refuză să plătească amenda și își dă demisia din contract."
      ],
      "summary": "Gafa iresponsabilă a chiriașului devine o problemă administrativă grea pentru proprietar."
    },
    "withInsurance": {
      "title": "Cu poliță de Protecție Juridică Imobiliară & Asigurare de Răspundere Contractuală",
      "statusLabel": "Asistență juridică completă pentru regresul imediat împotriva chiriașului",
      "financialImpact": "Costurile expertizei MLPAT și ale apărării juridice preluate de asigurător",
      "points": [
        "Avocații asigurați formulează acțiune în regres de urgență cu măsuri asigurătorii pe conturile chiriașului vinovat.",
        "Sunt acoperite cheltuielile judiciare și expertiza tehnică de rezistență.",
        "Proprietarul este ghidat pas cu pas pentru intrarea în legalitate în fața ISC."
      ],
      "summary": "Proprietarul este susținut juridic și financiar pentru a transfera toată răspunderea asupra chiriașului."
    },
    "whatToCheck": {
      "title": "Ce trebuie să verifici în contractul tău",
      "items": [
        {
          "label": "Clauza de interdicție absolută a modificărilor",
          "detail": "Contractul de închiriere trebuie să prevadă expres interdicția oricăror modificări constructive fără acord notarial prealabil."
        },
        {
          "label": "Recepția periodică a stării imobilului",
          "detail": "Păstrează dreptul contractual de a inspecta apartamentul la fiecare 3-6 luni."
        }
      ]
    },
    "immediateSteps": [
      "Emite o notificare oficială prin executor prin care ceri oprirea oricăror lucrări și predarea spațiului.",
      "Angajează un expert tehnic în construcții pentru evaluarea stabilității planșeului.",
      "Avizează asigurătorul de protecție juridică pentru preluarea dosarului în fața autorităților locale.",
      "Depune plângere împotriva chiriașului pentru distrugere de bunuri."
    ],
    "usefulDocuments": [
      "Procesul-verbal de sancțiune emis de Poliția Locală / Disciplina în Construcții",
      "Contractul de închiriere cu clauzele de protecție a imobilului",
      "Raportul de expertiză tehnică MLPAT"
    ],
    "advisorQuestions": [
      "Ce asistență juridică oferă polița mea în caz de sancțiuni administrative cauzate de chiriași?",
      "Cum pot institui poprire pe conturile chiriașului pentru recuperarea cheltuielilor de reconstrucție?"
    ],
    "disclaimer": "Orice modificare a compartimentării interioare a locuințelor necesită autorizație de construire conform Legii 50/1991.",
    "lastReviewed": "Octombrie 2026"
  }
];
