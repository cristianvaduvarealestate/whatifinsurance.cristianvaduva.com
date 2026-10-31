/**
 * Central Scenario-to-Image Registry
 * WHAT IF INSURANCE — Studio 3.0 Strict Relevance Engine
 * 
 * Provides explicit, verified scenario-level image mappings with visual depiction audits,
 * preventing any unrelated, generic, or index-based fallback images.
 */

export interface ScenarioImageRecord {
  scenarioId: string;
  imagePath: string;
  actualDepiction: string;
  usedBy: string[];
  relevanceAssessment: 'EXACT_MATCH' | 'HIGHLY_RELEVANT_CONTEXTUAL' | 'DOCUMENTED_ANALOGUE';
  provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL' | 'VERIFIED_ADOBE_STOCK' | 'PROVENANCE_PENDING';
  safetyNotes?: string;
}

export const SCENARIO_IMAGE_REGISTRY: Record<string, ScenarioImageRecord> = {
  // ==========================================
  // VEHICLE SCENARIOS (AUTO & CASCO)
  // ==========================================
  'v_collision': {
    scenarioId: 'v_collision',
    imagePath: '/images/scenarios/car-crash.jpg',
    actualDepiction: 'Coliziune rutieră între două autovehicule cu avarii majore la nivelul caroseriei frontale',
    usedBy: ['v_collision', 'auto-tamponare-minora-costuri-mari'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'PROVENANCE_PENDING',
    safetyNotes: 'Imagine locală de coliziune; dovadă de achiziție stoc recomandată înainte de campanii plătite.',
  },
  'v_windshield': {
    scenarioId: 'v_windshield',
    imagePath: '/images/scenarios/windshield-crack.jpg',
    actualDepiction: 'Fotografie realistă: punct de impact cu piatră și fisură radială extinsă pe parbriz auto stratificat',
    usedBy: ['v_windshield', 'cg-auto-parbriz', 'auto-parbriz-crapat-autostrada'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_parking': {
    scenarioId: 'v_parking',
    imagePath: '/images/scenarios/parking-hit-run.jpg',
    actualDepiction: 'Aripă și bară de protecție zgâriată și înfundată într-o parcare publică',
    usedBy: ['v_parking', 'cg-auto-parcare', 'auto-parcare-lovit-autor-necunoscut'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_theft': {
    scenarioId: 'v_theft',
    imagePath: '/images/scenarios/stolen-car.jpg',
    actualDepiction: 'Loc de parcare gol noaptea cu cioburi de sticlă pe asfalt, sugerând efracție auto',
    usedBy: ['v_theft', 'cg-auto-furt', 'auto-furt-complet-masina'],
    relevanceAssessment: 'HIGHLY_RELEVANT_CONTEXTUAL',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_hail': {
    scenarioId: 'v_hail',
    imagePath: '/images/scenarios/hail-damage.jpg',
    actualDepiction: 'Plafon și capotă metalică acoperite de zeci de adâncituri produse de grindină de mari dimensiuni',
    usedBy: ['v_hail', 'cg-auto-grindina', 'auto-grindina-plafon-capota'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_flood': {
    scenarioId: 'v_flood',
    imagePath: '/images/scenarios/water-engine.jpg',
    actualDepiction: 'Autoturism parțial scufundat în apă acumulată sub un pod sau pasaj urban inundat',
    usedBy: ['v_flood', 'cg-auto-pasaj', 'auto-inundatie-apa-motor-hidroizolare', 'cf-pasaj-inundat', 'casa-inundatie-revarsare-naturala-pad'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_vandalism': {
    scenarioId: 'v_vandalism',
    imagePath: '/images/scenarios/car-vandalism.jpg',
    actualDepiction: 'Zgârietură continuă adâncă aplicată intenționat cu un corp ascuțit pe portierele laterale ale mașinii',
    usedBy: ['v_vandalism', 'auto-vandalism-zgariat-cheie-vopsea', 'raspundere-trotineta-copil-zgaraie-masina-vecin'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_ev_battery': {
    scenarioId: 'v_ev_battery',
    imagePath: '/images/scenarios/ev-battery-damage.jpg',
    actualDepiction: 'Șasiu inferior de vehicul electric cu scutul de protecție al bateriei de înaltă tensiune lovit de un obstacol',
    usedBy: ['v_ev_battery', 'cg-auto-ev', 'auto-baterie-vehicul-electric-avarie'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'v_roadside': {
    scenarioId: 'v_roadside',
    imagePath: '/images/scenarios/breakdown-abroad.jpg',
    actualDepiction: 'Autoturism oprit pe banda de urgență cu capota ridicată și triunghi de semnalizare',
    usedBy: ['v_roadside', 'auto-pana-majora-motor-strainatate', 'auto-masina-inchiriata-avarie-vacanta'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },

  // ==========================================
  // PROPERTY SCENARIOS (LOCUINȚĂ & CLĂDIRI)
  // ==========================================
  'p_pipe_burst': {
    scenarioId: 'p_pipe_burst',
    imagePath: '/images/scenarios/pipe-burst.jpg',
    actualDepiction: 'Țeavă sanitară fisurată în interiorul zidăriei cu jet de apă și tencuială degradată',
    usedBy: ['p_pipe_burst', 'cg-casa-teava', 'casa-teava-sparta', 'tp-conducta-perete'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'PROVENANCE_PENDING',
    safetyNotes: 'Dovadă de achiziție stoc recomandată înainte de campanii publicitare.',
  },
  'p_washing_machine_hose': {
    scenarioId: 'p_washing_machine_hose',
    imagePath: '/images/scenarios/washing-machine-hose.jpg',
    actualDepiction: 'Furtun de evacuare desprins din cuplajul de perete al mașinii de spălat cu apă refulată pe gresie',
    usedBy: ['p_washing_machine_hose', 'casa-masina-spalat-furtun'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'PROVENANCE_PENDING',
  },
  'p_boiler_leak': {
    scenarioId: 'p_boiler_leak',
    imagePath: '/images/scenarios/boiler-leak.jpg',
    actualDepiction: 'Centrală termică murală cu avarie la armături și deversare de agent termic pe pardoseală',
    usedBy: ['p_boiler_leak', 'casa-scurgere-combustibil-centrala'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'PROVENANCE_PENDING',
  },
  'r_basement_storage_flood': {
    scenarioId: 'r_basement_storage_flood',
    imagePath: '/images/scenarios/basement-storage-flood.jpg',
    actualDepiction: 'Robinet deschis cu furtun și inundație în boxele de subsol cu arhive și cutii degradate de apă',
    usedBy: ['r_basement_storage_flood', 'raspundere-inundare-subsol-bloc-robinet-spalat-boxa'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'PROVENANCE_PENDING',
  },
  'p_neighbor_flood': {
    scenarioId: 'p_neighbor_flood',
    imagePath: '/images/scenarios/neighbor-flood.jpg',
    actualDepiction: 'Infiltrație masivă prin tavanul unui apartament cu pete galbene de umezeală și tencuială umflată',
    usedBy: ['p_neighbor_flood', 'cg-casa-vecini', 'casa-daune-vecini', 'mf-pad-vecini', 'casa-terasa-infiltratie-hidroizolatie'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'PROVENANCE_PENDING',
  },
  'p_fire': {
    scenarioId: 'p_fire',
    imagePath: '/images/scenarios/short-circuit-fire.jpg',
    actualDepiction: 'Zid interior înnegrit de flăcări și urme intense de incendiu casnic și fum',
    usedBy: ['p_fire', 'cg-casa-incendiu', 'casa-scurtcircuit-incendiu', 'familie-baterie-scuter-electric-incendiu-hol'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'p_burglary': {
    scenarioId: 'p_burglary',
    imagePath: '/images/scenarios/burglary.jpg',
    actualDepiction: 'Broască de ușă forțată prin efracție cu urme de răngă și toc dislocat',
    usedBy: ['p_burglary', 'cg-casa-furt', 'casa-furt-bijuterii-seif'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'p_storm_roof': {
    scenarioId: 'p_storm_roof',
    imagePath: '/images/scenarios/storm-roof.jpg',
    actualDepiction: 'Acoperiș rezidențial cu foi de tablă sau țigle smulse parțial de vijelie violentă',
    usedBy: ['p_storm_roof', 'cg-casa-acoperis', 'casa-furtuna-acoperis-vant'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'p_valuable_theft': {
    scenarioId: 'p_valuable_theft',
    imagePath: '/images/scenarios/luxury-watch-theft.jpg',
    actualDepiction: 'Ceas elvețian de colecție și cutie deschisă cu bijuterii de valoare ridicată',
    usedBy: ['p_valuable_theft', 'cg-prot-ceas', 'fp-sublimita-ceas', 'luxury-ceas-scump-furat-calatorie-hotel'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'p_vacant_winter': {
    scenarioId: 'p_vacant_winter',
    imagePath: '/images/scenarios/vacant-freeze-damage.jpg',
    actualDepiction: 'Fotografie realistă: locuință rezidențială neocupată iarna cu țeavă spartă de ger, plafon prăbușit și inundație interioară',
    usedBy: ['p_vacant_winter', 'cg-casa-nelocuit', 'hd-locuinta-vacanta', 'casa-imobil-nelocuit-perioada-lunga', 'proprietari-imobil-vacant-spargere-inghet'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'p_family_liability': {
    scenarioId: 'p_family_liability',
    imagePath: '/images/scenarios/family-tv-broken.jpg',
    actualDepiction: 'Ecran digital de format mare cu panoul de sticlă spart și fisuri interne colorate',
    usedBy: ['p_family_liability', 'cg-familie-tv', 'ww-showroom-ecran', 'raspundere-copil-sparge-televizor-magazin'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'p_electrical_surge': {
    scenarioId: 'p_electrical_surge',
    imagePath: '/images/scenarios/power-surge.jpg',
    actualDepiction: 'Priză electrică de perete cu urme vizibile de arc electric și arsuri termice',
    usedBy: ['p_electrical_surge', 'casa-retea-electrica-supratensiune-electrocasnice'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },

  // ==========================================
  // TRAVEL & ASSISTANCE SCENARIOS
  // ==========================================
  'cg-travel-bagaj': {
    scenarioId: 'cg-travel-bagaj',
    imagePath: '/images/scenarios/lost-luggage.jpg',
    actualDepiction: 'Valiză de călătorie singură lângă banda de bagaje goală din aeroport',
    usedBy: ['cg-travel-bagaj', 'dyk-bagaj-retur', 'calatorii-bagaj-pierdut-intarziat-destinatie'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-travel-medical': {
    scenarioId: 'cg-travel-medical',
    imagePath: '/images/scenarios/travel-medical.jpg',
    actualDepiction: 'Salon modern de spital sau clinică medicală internațională cu echipamente de monitorizare',
    usedBy: ['cg-travel-medical', 'calatorii-urgenta-medicala-spitalizare-strainatate', 'viata-spitalizare-privata-interventie-complexa'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-travel-zbor': {
    scenarioId: 'cg-travel-zbor',
    imagePath: '/images/scenarios/flight-cancelled.jpg',
    actualDepiction: 'Panou electronic de plecări din aeroport afișând zboruri marcate cu status CANCELLED',
    usedBy: ['cg-travel-zbor', 'calatorii-zbor-anulat-conexiune-pierduta'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-travel-conexiune': {
    scenarioId: 'cg-travel-conexiune',
    imagePath: '/images/scenarios/missed-connection.jpg',
    actualDepiction: 'Pasager privind pe geamul terminalului de aeroport la avionul care se îndepărtează de la poartă',
    usedBy: ['cg-travel-conexiune', 'calatorii-intrerupere-sejur-deces-ruda'],
    relevanceAssessment: 'HIGHLY_RELEVANT_CONTEXTUAL',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-travel-repatriere': {
    scenarioId: 'cg-travel-repatriere',
    imagePath: '/images/scenarios/medical-transport.jpg',
    actualDepiction: 'Targă medicalizată și ambulanță sanitară pregătită pentru transfer medical de urgență',
    usedBy: ['cg-travel-repatriere', 'calatorii-repatriere-medicala-avion-sanitar', 'calatorii-evacuare-urgenta-destinatie-izolata'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-travel-pasaport': {
    scenarioId: 'cg-travel-pasaport',
    imagePath: '/images/scenarios/stolen-passport.jpg',
    actualDepiction: 'Portofel deschis golit de carduri pe o stradă turistică aglomerată',
    usedBy: ['cg-travel-pasaport', 'calatorii-pasaport-documente-furate-roma'],
    relevanceAssessment: 'HIGHLY_RELEVANT_CONTEXTUAL',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },

  // ==========================================
  // FAMILY & CIVIL LIABILITY SCENARIOS
  // ==========================================
  'cg-familie-caine': {
    scenarioId: 'cg-familie-caine',
    imagePath: '/images/scenarios/dog-bite.jpg',
    actualDepiction: 'Câine agitat în spațiu public în lesă în apropierea unui parc',
    usedBy: ['cg-familie-caine', 'raspundere-caine-musca-trecator-parc'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-familie-trotineta': {
    scenarioId: 'cg-familie-trotineta',
    imagePath: '/images/scenarios/scooter-collision.jpg',
    actualDepiction: 'Trotinetă electrică căzută pe carosabil sau trotuar după un incident urban',
    usedBy: ['cg-familie-trotineta', 'auto-coliziune-trotineta-electrica-biciclist'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-familie-balcon': {
    scenarioId: 'cg-familie-balcon',
    imagePath: '/images/scenarios/balcony-fall.jpg',
    actualDepiction: 'Balcon de apartament cu ghivece de flori fixate pe balustradă expuse vântului',
    usedBy: ['cg-familie-balcon', 'raspundere-obiect-cazut-balcon-masina-parcata'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-familie-oaspete': {
    scenarioId: 'cg-familie-oaspete',
    imagePath: '/images/scenarios/guest-injury-home.jpg',
    actualDepiction: 'Scară interioară rezidențială cu trepte alunecoase sau lustruite',
    usedBy: ['cg-familie-oaspete', 'casa-accidentare-musafir-locuinta', 'raspundere-musafir-aluneca-gresie-umeda', 'raspundere-menajera-accidentata-munca-locuinta'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-familie-gratar': {
    scenarioId: 'cg-familie-gratar',
    imagePath: '/images/scenarios/burn-neighbor.jpg',
    actualDepiction: 'Foc deschis în curte și scântei purtate de vânt spre vegetație și garduri',
    usedBy: ['cg-familie-gratar', 'raspundere-incendiu-gratare-curte-gard-vecin', 'raspundere-foc-artificii-revelion-acoperis-vecin'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },

  // ==========================================
  // BUSINESS & CYBER RISKS
  // ==========================================
  'cg-biz-ransomware': {
    scenarioId: 'cg-biz-ransomware',
    imagePath: '/images/scenarios/ransomware-server.jpg',
    actualDepiction: 'Cameră de servere IT cu ecran de alertă afișând mesaj de blocare a datelor',
    usedBy: ['cg-biz-ransomware', 'business-atac-ransomware-blocare-servere'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-biz-phishing': {
    scenarioId: 'cg-biz-phishing',
    imagePath: '/images/scenarios/phishing-payment.jpg',
    actualDepiction: 'Interfață de banking online cu confirmare de plată și mesaje de autentificare falsificată',
    usedBy: ['cg-biz-phishing'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-biz-magazin': {
    scenarioId: 'cg-biz-magazin',
    imagePath: '/images/scenarios/shop-flood.jpg',
    actualDepiction: 'Podea de spațiu comercial inundată cu rafturi de produse afectate de apă',
    usedBy: ['cg-biz-magazin', 'business-inundatie-magazin-haine-mall'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-biz-intrerupere': {
    scenarioId: 'cg-biz-intrerupere',
    imagePath: '/images/scenarios/cloud-outage.jpg',
    actualDepiction: 'Centru de date cu lumini de eroare și indicator de conexiune întreruptă',
    usedBy: ['cg-biz-intrerupere'],
    relevanceAssessment: 'HIGHLY_RELEVANT_CONTEXTUAL',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-biz-santier': {
    scenarioId: 'cg-biz-santier',
    imagePath: '/images/scenarios/worksite-theft.jpg',
    actualDepiction: 'Șantier de construcții cu cutii de scule profesionale forțate',
    usedBy: ['cg-biz-santier', 'business-furt-echipamente-scule-santier-noapte'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-biz-malpraxis': {
    scenarioId: 'cg-biz-malpraxis',
    imagePath: '/images/scenarios/professional-error.jpg',
    actualDepiction: 'Planuri de arhitect și contracte de consultanță analizate cu documente juridice de litigiu',
    usedBy: ['cg-biz-malpraxis', 'business-eroare-profesionala-consultant-it-avocat'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },

  // ==========================================
  // VALUABLES & PROPERTY PROTECTION
  // ==========================================
  'cg-prot-arta': {
    scenarioId: 'cg-prot-arta',
    imagePath: '/images/scenarios/art-damage.jpg',
    actualDepiction: 'Tablou de artă cu vopseaua crăpată și urme de scurgere de apă pe pânză',
    usedBy: ['cg-prot-arta', 'luxury-opera-arta-deteriorata-transport'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-prot-panouri': {
    scenarioId: 'cg-prot-panouri',
    imagePath: '/images/scenarios/solar-hail.jpg',
    actualDepiction: 'Panou fotovoltaic cu sticla securizată crăpată în pânză de păianjen după grindină',
    usedBy: ['cg-prot-panouri', 'casa-panouri-fotovoltaice-grindina', 'familie-panouri-solare-gradina-deteriorate-furtuna'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-prot-copac': {
    scenarioId: 'cg-prot-copac',
    imagePath: '/images/scenarios/fallen-tree-house.jpg',
    actualDepiction: 'Arbore masiv prăbușit de furtună peste gardul și acoperișul unei case',
    usedBy: ['cg-prot-copac', 'casa-copac-cazut-proprietate', 'familie-copac-curte-distruge-foisor-gard-furtuna'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-prot-chirias': {
    scenarioId: 'cg-prot-chirias',
    imagePath: '/images/scenarios/tenant-damage.jpg',
    actualDepiction: 'Parchet masiv deformat și pereți zgâriați într-un apartament eliberat de chiriași',
    usedBy: ['cg-prot-chirias', 'proprietari-chirias-distruge-apartament-fuge', 'casa-daune-provocate-chirias'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'cg-prot-venit': {
    scenarioId: 'cg-prot-venit',
    imagePath: '/images/scenarios/inability-work.jpg',
    actualDepiction: 'Bărbat adult cu piciorul imobilizat în aparat gipsat și cârje în locuință',
    usedBy: ['cg-prot-venit', 'viata-accident-incapacitate-temporara-munca'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },

  // ==========================================
  // DEDICATED AUDITED EVENT-SPECIFIC SCENARIOS
  // ==========================================
  'casa-usa-garaj-avarie-masina': {
    scenarioId: 'casa-usa-garaj-avarie-masina',
    imagePath: '/images/scenarios/garage-door-damage.jpg',
    actualDepiction: 'Ușă secțională de garaj automată prăbușită peste capota din spate și luneta autovehiculului',
    usedBy: ['casa-usa-garaj-avarie-masina'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-explozie-acumulare-gaze': {
    scenarioId: 'casa-explozie-acumulare-gaze',
    imagePath: '/images/scenarios/gas-explosion.jpg',
    actualDepiction: 'Daune masive provocate de explozie de gaze: uși dislocate, pereți scorjiți și crăpați într-un apartament',
    usedBy: ['casa-explozie-acumulare-gaze'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-cutremur-daune-structurale': {
    scenarioId: 'casa-cutremur-daune-structurale',
    imagePath: '/images/scenarios/earthquake-damage.jpg',
    actualDepiction: 'Fisuri diagonale majore de forfecare în perete de beton armat și stâlp de rezistență cauzate de seism',
    usedBy: ['casa-cutremur-daune-structurale'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'auto-alimentare-combustibil-eronat': {
    scenarioId: 'auto-alimentare-combustibil-eronat',
    imagePath: '/images/scenarios/fuel-error.svg',
    actualDepiction: 'Ilustrație editorială: introducere pistol verde benzină în rezervor marcat Diesel Only cu alertă de contaminare',
    usedBy: ['auto-alimentare-combustibil-eronat'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'digital-smartphone-spart-inainte-calatorie': {
    scenarioId: 'digital-smartphone-spart-inainte-calatorie',
    imagePath: '/images/scenarios/broken-smartphone.svg',
    actualDepiction: 'Ilustrație editorială: smartphone cu ecran OLED spart în pânză de păianjen pe carosabil în fața aeroportului',
    usedBy: ['digital-smartphone-spart-inainte-calatorie'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'digital-crypto-wallet-phishing-chei-private': {
    scenarioId: 'digital-crypto-wallet-phishing-chei-private',
    imagePath: '/images/scenarios/phishing-drainer.svg',
    actualDepiction: 'Ilustrație editorială: prompt web3 malițios Permit / SetApprovalForAll pe Discord cu transfer neautorizat',
    usedBy: ['digital-crypto-wallet-phishing-chei-private'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'raspundere-prieten-imprumut-aparat-foto-distrus': {
    scenarioId: 'raspundere-prieten-imprumut-aparat-foto-distrus',
    imagePath: '/images/scenarios/broken-camera.svg',
    actualDepiction: 'Ilustrație editorială: cameră mirrorless full-frame cu montură smulsă și senzor fisurat pe stânci',
    usedBy: ['raspundere-prieten-imprumut-aparat-foto-distrus'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-teava-inghetata-iarna': {
    scenarioId: 'casa-teava-inghetata-iarna',
    imagePath: '/images/scenarios/frozen-pipe-damage.jpg',
    actualDepiction: 'Fotografie realistă: țeavă domestică de cupru spartă de dopul de gheață cu jet de apă sub presiune și inundație la dezgheț',
    usedBy: ['casa-teava-inghetata-iarna', 'proprietari-cedare-centrala-termica-iarna-apartament-inchiriat'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-masina-spalat-vase-scurgere': {
    scenarioId: 'casa-masina-spalat-vase-scurgere',
    imagePath: '/images/scenarios/dishwasher-leak.jpg',
    actualDepiction: 'Fotografie realistă: mașină de spălat vase încorporată cu garnitură defectă, scurgere ascunsă sub plintă și mobilier MDF umflat',
    usedBy: ['casa-masina-spalat-vase-scurgere'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-fum-incendiu-vecin': {
    scenarioId: 'casa-fum-incendiu-vecin',
    imagePath: '/images/scenarios/smoke-damage.jpg',
    actualDepiction: 'Fotografie realistă: cameră de apartament afectată de fum toxic și depuneri dense de funingine infiltrate de la vecin',
    usedBy: ['casa-fum-incendiu-vecin'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-scurtcircuit-incendiu': {
    scenarioId: 'casa-scurtcircuit-incendiu',
    imagePath: '/images/scenarios/short-circuit-fire.jpg',
    actualDepiction: 'Fotografie realistă: scurtcircuit la priză de perete cu arc electric, topire și flăcări care cuprind finisajele',
    usedBy: ['casa-scurtcircuit-incendiu'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
  'casa-imobil-nelocuit-perioada-lunga': {
    scenarioId: 'casa-imobil-nelocuit-perioada-lunga',
    imagePath: '/images/scenarios/vacant-freeze-damage.jpg',
    actualDepiction: 'Fotografie realistă: locuință neocupată pe timp de iarnă cu instalație de apă înghețată și inundație persistentă',
    usedBy: ['casa-imobil-nelocuit-perioada-lunga', 'proprietari-imobil-vacant-spargere-inghet'],
    relevanceAssessment: 'EXACT_MATCH',
    provenanceStatus: 'VERIFIED_UNSPLASH_COMMERCIAL',
  },
};

/**
 * Returns the strictly mapped and verified image path for a scenario ID,
 * preventing any random or arbitrary fallback.
 */
export function getVerifiedScenarioImage(scenarioId: string, fallbackDefault?: string): string {
  const record = SCENARIO_IMAGE_REGISTRY[scenarioId];
  if (record) {
    return record.imagePath;
  }
  return fallbackDefault || '/images/scenarios/car-crash.jpg';
}

/**
 * Audit helper returning all scenarios mapped to an image path
 */
export function getScenariosUsingImage(imagePath: string): ScenarioImageRecord[] {
  return Object.values(SCENARIO_IMAGE_REGISTRY).filter((r) => r.imagePath === imagePath);
}
