// scripts/build-expansion-125.js
const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, '..', 'src', 'data', 'scenarios');

function appendToCategory(filename, varName, newItems) {
  const filePath = path.join(targetDir, filename);
  let list = [];
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/export const \w+: Scenario\[\] = (\[[\s\S]*\]);/);
    if (match) {
      list = JSON.parse(match[1]);
    }
  }
  const existingIds = new Set(list.map(s => s.id));
  const toAdd = newItems.filter(item => !existingIds.has(item.id));
  const combined = [...list, ...toAdd];
  
  const code = `import { Scenario } from '@/types/scenario';

export const ${varName}: Scenario[] = ${JSON.stringify(combined, null, 2)};
`;
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`✓ ${filename}: added ${toAdd.length} items (now total: ${combined.length})`);
}

// DIGITAL (3 more -> total 10)
const extraDigital = [
  {
    id: 'digital-scurgere-date-confidential-email-gresit',
    slug: 'scurgere-date-confidential-email-gresit',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Angajatul trimite din greșeală o bază de date cu 5.000 de salarii către un partener extern',
    mainQuestion: 'Ce consecințe juridice și amenzi GDPR riști dacă un e-mail confidențial pleacă la adresa greșită?',
    shortDescription: 'O funcție de auto-complete trimite datele financiare ale personalului către un destinatar neautorizat.',
    situation: 'O greșeală minoră de tastare în câmpul „To” face ca o bază de date Excel conținând CNP-urile, salariile nete și evaluările anuale a 5.000 de angajați să fie transmisă unui client extern. Destinatarul deschide fișierul și refuză să semneze un angajament de confidențialitate. Incidentul constituie o breșă gravă de securitate conform Regulamentului GDPR (UE 2016/679), obligând compania la raportare către autoritatea națională de supraveghere și la notificarea individuală a tuturor angajaților afectați.',
    heroImage: '/images/scenarios/cloud-outage.jpg',
    imageCaption: 'Breșele interne cauzate de erori umane reprezintă peste 60% din incidentele raportate către autoritățile de protecție a datelor.',
    severityLabel: 'Risc Legal GDPR și Relații de Muncă',
    featured: false,
    tags: ['scurgere-date', 'eroare-umana-email', 'amenda-gdpr', 'cyber-liability', 'notificare-anspdcp'],
    illustrativeCost: 'Costuri investigație juridică + PR de criză: 40.000 – 120.000 RON',
    withoutInsurance: {
      title: 'Fără poliță de Cyber & Data Privacy Liability',
      statusLabel: 'Firma achită toate costurile juridice și eventualele amenzi administrative',
      financialImpact: 'Pierderi financiare și riscuri de procese colective din partea angajaților',
      points: [
        'Onorariile caselor de avocatură specializate pe GDPR pentru gestionarea anchetei ANSPDCP sunt de mii de euro.',
        'Angajații ale căror salarii au fost făcute publice pot acționa firma în instanță cerând daune morale pentru prejudicierea demnității.',
        'Climatul intern de lucru este grav deteriorat.'
      ],
      summary: 'O simplă apăsare de tastă declanșează o criză juridică și de relații de muncă de proporții.'
    },
    withInsurance: {
      title: 'Cu poliță de Cyber & Privacy Liability (cu Clauză de Răspuns la Breșe de Date)',
      statusLabel: 'Preluarea costurilor de notificare, consiliere juridică și apărare',
      financialImpact: 'Cheltuieli de gestionare a crizei de date acoperite de asigurător',
      points: [
        'Asigurătorul pune la dispoziție avocați experți în GDPR pentru redactarea raportului către autoritate în termenul de 72 de ore.',
        'Sunt decontate costurile de notificare individuală și serviciile de PR pentru gestionarea comunicării de criză.',
        'Polița acoperă cheltuielile de apărare în fața autorităților de reglementare.'
      ],
      summary: 'Impactul juridic și financiar al erorii umane este gestionat profesionist și limitat eficient.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Acoperirea amenzilor GDPR', detail: 'Atenție: legea română interzice asigurarea directă a amenzilor penale sau administrative dacă sunt calificate ca sancțiuni de drept public; polița acoperă cheltuielile de apărare și despăgubirile civile.' },
        { label: 'Echipa de criză (Breach Counsel)', detail: 'Verifică dacă asigurătorul oferă acces la o casă de avocatură parteneră de renume pentru răspuns rapid.' }
      ]
    },
    immediateSteps: [
      'Contactează imediat destinatarul greșit și solicită ștergerea definitivă a e-mailului și confirmarea scrisă.',
      'Activează Responsabilul cu Protecția Datelor (DPO) al companiei pentru evaluarea riscului la adresa drepturilor persoanelor.',
      'Notifică asigurătorul de Cyber Liability în termen de 24 de ore.',
      'Dacă riscul este ridicat, transmite notificarea oficială către ANSPDCP în maximum 72 de ore.'
    ],
    usefulDocuments: [
      'E-mailul transmis eronat și confirmarea de expediere',
      'Raportul de evaluare preliminară a breșei întocmit de DPO',
      'Polița de asigurare Cyber'
    ],
    advisorQuestions: [
      'Ce costuri de consiliere juridică sunt decontate în primele 72 de ore de la producerea unei breșe?',
      'Oferă polița suport pentru comunicarea cu persoanele vizate afectate?'
    ],
    disclaimer: 'Asigurarea cibernetică oferă suport de consultanță și acoperire a daunelor civile decurgând din incidente de date.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-crypto-wallet-phishing-chei-private',
    slug: 'crypto-wallet-phishing-chei-private',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Portofelul de criptomonede este golit printr-un smart contract malițios semnat pe Discord',
    mainQuestion: 'Ce protecție există dacă semnezi din greșeală o tranzacție web3 care transferă toate tokenurile?',
    shortDescription: 'Un atac de tip „drainer” sustrage 20.000 EUR în USDT și NFT-uri în mai puțin de 5 secunde.',
    situation: 'Ești activ pe piața activelor digitale. Primești o invitație pe un server de Discord pentru lansarea exclusivă a unui proiect cunoscut. Dai click pe un link de phishing care imită perfect interfața oficială și conectezi portofelul hardware (Ledger / MetaMask). Semnezi o tranzacție de tip „Permit / SetApprovalForAll”. În câteva secunde, un contract malițios golește tot soldul de 22.000 USDT și 3 NFT-uri rare din portofel.',
    heroImage: '/images/scenarios/cyber-attack.jpg',
    imageCaption: 'Tranzacțiile pe blockchain sunt ireversibile prin design criptografic, făcând atacurile de tip phishing Web3 devastatoare.',
    severityLabel: 'Pierdere Totală de Active Digitale',
    featured: false,
    tags: ['crypto-drainer', 'portofel-golit', 'web3-phishing', 'smart-contract-malitios', 'active-digitale'],
    illustrativeCost: 'Valoare active sustrase: 100.000 – 150.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare de active digitale',
      statusLabel: 'Pierdere ireversibilă de 100% din fonduri',
      financialImpact: 'Zeci de mii de euro pierduți definitiv',
      points: [
        'Tehnologia blockchain nu are un mecanism de chargeback sau administrator centralizat care să poată anula tranzacția.',
        'Poliția națională nu are capacitatea tehnică de a recupera fonduri dispersate prin protocoale de tip mixer (Tornado Cash).',
        'Întregul portofoliu de active digitale este pierdut într-un singur click.'
      ],
      summary: 'Ireversibilitatea blockchain-ului transformă semnarea unei tranzacții false într-o pierdere totală.'
    },
    withInsurance: {
      title: 'Cu poliță specializată de Digital Asset Protection / Cyber Wallet Insurance',
      statusLabel: 'Despăgubire parțială sau totală pe baza investigației on-chain',
      financialImpact: 'Recuperarea contravalorii activelor furate până la plafonul contractat',
      points: [
        'Polițele moderne de active digitale acoperă pierderile cauzate de semnarea frauduloasă a contractelor malițioase de tip wallet drainer.',
        'Asigurătorul colaborează cu firme de analiză blockchain (ex. Chainalysis) pentru marcarea adreselor infractorilor.',
        'Primești despăgubirea în valută clasică (EUR/RON) în baza raportului tehnic on-chain.'
      ],
      summary: 'Investițiile tale în noua economie digitală beneficiază de o plasă de siguranță reală.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Utilizarea portofelului hardware (Cold Wallet)', detail: 'Polițele cer de regulă ca activele de peste 10.000 EUR să fi fost securizate pe un dispozitiv hardware (ex. Ledger, Trezor).' },
        { label: 'Definiția fraudei Web3', detail: 'Verifică dacă sunt acoperite atacurile de tip Approval Exploits sau doar compromiterea cheii private (Seed phrase).' }
      ]
    },
    immediateSteps: [
      'Revocă imediat toate permisiunile smart contractelor active pe platforme specializate (ex. Revoke.cash).',
      'Transferă orice alt activ rămas într-un portofel complet nou, necompromis.',
      'Identifică hash-ul tranzacției malițioase (TxHash) și adresa atacatorului pe exploratorul blockchain (Etherscan).',
      'Deschide dosarul la compania de asigurări atașând dovezile on-chain.'
    ],
    usefulDocuments: [
      'Hash-ul tranzacțiilor (TxHash) de pe blockchain',
      'Capturile de ecran cu interfața falsă de phishing',
      'Polița de asigurare de active digitale'
    ],
    advisorQuestions: [
      'Ce tipuri de active digitale sunt acoperite (doar stablecoins sau și NFT-uri evaluate)?',
      'Care este procedura de expertiză tehnică on-chain acceptată de asigurător?'
    ],
    disclaimer: 'Securitatea activelor cripto depinde de vigilența utilizatorului; păstrarea seed phrase-ului în siguranță absolută este o cerință fundamentală.',
    lastReviewed: 'Octombrie 2026'
  },
  {
    id: 'digital-imprimanta-3d-incendiu-atelier-acasa',
    slug: 'imprimanta-3d-incendiu-atelier-acasa',
    categoryId: 'digital-tech',
    categoryName: 'VIAȚĂ DIGITALĂ & TECH',
    title: 'Imprimanta 3D lăsată să lucreze noaptea suferă o defecțiune termică și aprinde camera de lucru',
    mainQuestion: 'Ce se întâmplă dacă un filament blocat în hotend provoacă un incendiu în timp ce dormi?',
    shortDescription: 'Defecțiunea senzorului de temperatură (thermal runaway) aprinde carcasa și mobilierul din birou.',
    situation: 'Ai un atelier de printare 3D acasă. Lași o piesă complexă la printat peste noapte. Termistorul de pe duză se desprinde, iar placa de bază continuă să încălzească blocul de aluminiu la peste 350°C. Filamentul de plastic se aprinde, flăcările cuprind rola de polimer și biroul din lemn. Focul este stins de pompieri după ce distruge camera de lucru, calculatoarele și afumă întregul etaj.',
    heroImage: '/images/scenarios/short-circuit-fire.jpg',
    imageCaption: 'Dispozitivele automate de fabricație digitală nesupravegheate prezintă riscuri termice specifice ce necesită atenție sporită la subscrierea poliței de locuință.',
    severityLabel: 'Incendiu Tehnic și Daună la Locuință',
    featured: false,
    tags: ['imprimanta-3d-incendiu', 'thermal-runaway', 'atelier-acasa', 'asigurare-locuinta', 'dauna-foc-tehnologic'],
    illustrativeCost: 'Cost renovare + înlocuire electronice: 35.000 – 75.000 RON',
    withoutInsurance: {
      title: 'Fără asigurare facultativă de locuință',
      statusLabel: 'Pierdere financiară integrală',
      financialImpact: 'Plată de zeci de mii de lei din economiile personale',
      points: [
        'Asigurarea PAD obligatorie nu despăgubește incendiile pornite de la echipamente electronice sau mecatronice.',
        'Toate sculele, calculatoarele și reparațiile camerei se plătesc exclusiv din bugetul familiei.',
        'Rămâi cu atelierul distrus și cu locuința degradată de fum.'
      ],
      summary: 'Pasiunea tehnologică lăsată nesupravegheată se transformă într-o pagubă casnică majoră.'
    },
    withInsurance: {
      title: 'Cu Asigurare Facultativă de Locuință (cu Clauză de Echipamente Electronice și Incendiu Casnic)',
      statusLabel: 'Despăgubire integrală a finisajelor, mobilierului și aparatelor arse',
      financialImpact: 'Refacerea spațiului și a echipamentelor acoperită de asigurător',
      points: [
        'Incendiul accidental este acoperit indiferent de aparatul electrocasnic sau electronic de la care a pornit.',
        'Sunt decontate zugrăvelile, curățarea de funingine și aparatura electronică avariată.',
        'Poți redeschide atelierul de lucru în scurt timp.'
      ],
      summary: 'Tot impactul financiar este preluat de polița ta de locuință.'
    },
    whatToCheck: {
      title: 'Ce trebuie să verifici în contractul tău',
      items: [
        { label: 'Utilizare privată vs comercială', detail: 'Dacă folosești imprimanta pentru a vinde piese pe o firmă, atelierul trebuie declarat ca spațiu de activitate economică.' },
        { label: 'Protecția automată (Thermal Runaway Protection)', detail: 'Firmware-ul imprimantei trebuie să aibă activate protecțiile termice din fabrică.' }
      ]
    },
    immediateSteps: [
      'Apelează 112 și decuplează siguranța generală din tabloul electric.',
      'Obține Procesul-Verbal de la Pompieri (ISU) cu indicarea cauzei probabile.',
      'Fotografiază camera de lucru și echipamentele distruse.',
      'Transmite dosarul către asigurătorul tău.'
    ],
    usefulDocuments: [
      'Procesul-Verbal de stingere emis de ISU',
      'Facturile de achiziție ale calculatoarelor și imprimantei',
      'Polița facultativă de locuință'
    ],
    advisorQuestions: [
      'Este acoperită aparatura electronică și imprimanta 3D pe polița mea de conținut al casei?',
      'Ce cerințe există dacă am un mic atelier de creație în locuință?'
    ],
    disclaimer: 'Aparatele care operează cu temperaturi ridicate nu trebuie lăsate să funcționeze nesupravegheate pe materiale inflamabile.',
    lastReviewed: 'Octombrie 2026'
  }
];

appendToCategory('digital.ts', 'digitalScenarios', extraDigital);

console.log('✓ Expansion to 120+ finished successfully!');
