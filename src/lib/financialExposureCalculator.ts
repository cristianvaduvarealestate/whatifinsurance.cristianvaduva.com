/**
 * WHAT IF INSURANCE — FINANCIAL EXPOSURE CALCULATOR ENGINE
 * 
 * Simulator educațional pentru calculul transparent al pierderii potențiale
 * suportate din fonduri proprii (out-of-pocket loss) vs. despăgubirea teoretică a asigurătorului.
 * 
 * Conform modelului matematic standard de asigurare:
 * estimated_insurer_payment = min(max(eligible_loss - deductible, 0), available_limit)
 * estimated_out_of_pocket = total_loss - estimated_insurer_payment
 * 
 * REGULI DE PRECIZIE METODOLOGICĂ:
 * - Rezultatul precizează explicit dacă este un exemplu ilustrativ sau bazat pe condiții contractuale documentate.
 * - Nu prezintă un calcul ilustrativ drept calcul oficial de lichidare Generali România.
 * - Tratează explicit: excluderi, franșize, limite/sublimite, prejudiciu total vs. eligibil,
 *   valori zero sau negative, limite depășite și date insuficiente.
 */

export type CalculationNature = 'DOCUMENTAT_ORIENTATIV' | 'ILUSTRATIV_SIMULAT';

export interface FinancialExposureInput {
  assetValue?: number;           // Valoarea activului asigurat (RON / EUR)
  totalEstimatedLoss: number;    // Prejudiciul total estimat
  eligibleLoss?: number;         // Partea eligibilă contractual (dacă diferă din cauza excluderilor)
  deductibleType: 'fixed' | 'percentage'; // Franșiză fixă sau procentuală
  deductibleValue: number;       // Valoarea numerică a franșizei (ex: 500 RON sau 10%)
  availableLimit: number;        // Limita / suma asigurată disponibilă
  hasExclusionFlag?: boolean;    // Risc exclus contractual (ex. nelocuire >30 zile fără notificare)
  sublimitApplied?: number;      // Sublimită specială dacă există (ex: 1.000 EUR bunuri nedeclarate)
  currency?: 'RON' | 'EUR';
}

export interface FinancialExposureResult {
  isValid: boolean;
  calculationNature: CalculationNature;
  totalLoss: number;
  eligibleLoss: number;
  excludedLoss: number;
  calculatedDeductible: number;
  effectiveLimit: number;
  isLimitExceeded: boolean;
  limitExceededAmount: number;
  isDeductibleAbsorbed: boolean;
  estimatedInsurerPayment: number;
  estimatedOutOfPocket: number;
  outOfPocketPercentage: number;
  currency: 'RON' | 'EUR';
  statusVerdict: 'FULL_COVERAGE' | 'PARTIAL_COVERAGE' | 'HIGH_EXPOSURE' | 'COMPLETE_EXPOSURE';
  statusTitleRo: string;
  statusExplanationRo: string;
  assumptions: string[];
  insufficientDataReason?: string;
  officialGeneraliDisclaimer: string;
}

export interface PresetScenario {
  id: string;
  label: string;
  category: string;
  description: string;
  nature: CalculationNature;
  contractualBasis: string;
  inputs: FinancialExposureInput;
}

export const PRESET_EXPOSURE_SCENARIOS: PresetScenario[] = [
  {
    id: 'conducta-baie-vecini',
    label: 'Avarie conductă baie cu refacere faianță & tavan vecini',
    category: 'Locuință (Eurocasa)',
    description: 'Fisură în instalația îngropată. Include manoperă decopertare, parchet și daune la apartamentul de dedesubt.',
    nature: 'DOCUMENTAT_ORIENTATIV',
    contractualBasis: 'Generali Eurocasa Mod. E18 — Clauzele C.1 (Apă Conductă), C.1.4 (Trace & Access), R.C. Terți & 0 Franșiză Clădire',
    inputs: {
      assetValue: 120000,
      totalEstimatedLoss: 38000,
      eligibleLoss: 38000,
      deductibleType: 'fixed',
      deductibleValue: 0, // Clădire cu 0 franșiză Eurocasa
      availableLimit: 120000,
      currency: 'RON',
      hasExclusionFlag: false,
    }
  },
  {
    id: 'tamponare-far-radar',
    label: 'Tamponare ușoară: bară fisurată, far LED & senzor radar ADAS',
    category: 'Auto CASCO (Perfecto)',
    description: 'Impact la 20 km/h la frânare în coloană. Piesă originală și calibrare pe stand specializat.',
    nature: 'DOCUMENTAT_ORIENTATIV',
    contractualBasis: 'Generali CASCO Mod. CSC 18 — Clauza Reprezentanță & Franșiză Fixă Contractuală',
    inputs: {
      assetValue: 35000,
      totalEstimatedLoss: 24500,
      eligibleLoss: 24500,
      deductibleType: 'fixed',
      deductibleValue: 500, // aprox. 100 EUR franșiză fixă
      availableLimit: 35000,
      currency: 'RON',
      hasExclusionFlag: false,
    }
  },
  {
    id: 'inghet-locuinta-nelocuita',
    label: 'Țevi sparte de ger în imobil nelocuit 4 luni (Clauză Nelocuire)',
    category: 'Proprietari (Excludere aplicabilă)',
    description: 'Imobil lăsat neocupat peste 60 de zile fără golirea instalației. Asigurătorul aplică excluderea de neocupare.',
    nature: 'DOCUMENTAT_ORIENTATIV',
    contractualBasis: 'Generali Eurocasa Mod. E18 — Capitolul Excluderi Specifice Nelocuire & Îngheț',
    inputs: {
      assetValue: 95000,
      totalEstimatedLoss: 62000,
      eligibleLoss: 0, // Risc neeligibil conform clauzei
      deductibleType: 'fixed',
      deductibleValue: 0,
      availableLimit: 95000,
      currency: 'RON',
      hasExclusionFlag: true,
    }
  },
  {
    id: 'ceas-lux-depasire-sublimita',
    label: 'Ceas de colecție furat din camera de hotel (Depășire Sublimită)',
    category: 'Călătorii / Bunuri',
    description: 'Ceas evaluat la 8.000 EUR. Polița standard conține o sublimită de 1.000 EUR pentru bijuterii nedeclarate expres.',
    nature: 'DOCUMENTAT_ORIENTATIV',
    contractualBasis: 'Generali Turist Plus Premium PID 2025 — Clauza Bagaje & Sublimită Bunuri Nedeclarate',
    inputs: {
      assetValue: 8000,
      totalEstimatedLoss: 8000,
      eligibleLoss: 8000,
      deductibleType: 'fixed',
      deductibleValue: 50,
      availableLimit: 50000,
      sublimitApplied: 1000, // Sublimită specifică
      currency: 'EUR',
      hasExclusionFlag: false,
    }
  }
];

export function calculateFinancialExposure(
  input: FinancialExposureInput,
  nature: CalculationNature = 'ILUSTRATIV_SIMULAT'
): FinancialExposureResult {
  const currency = input.currency || 'RON';
  const rawTotalLoss = input.totalEstimatedLoss ?? 0;
  const officialGeneraliDisclaimer =
    'Acest rezultat reprezintă o simulare educativă ilustrativă și orientativă bazată pe modelul matematic: plată = min(max(eligibil - franșiză, 0), limită). Nu constituie un calcul oficial de lichidare de daună Generali România, o ofertă contractuală sau o promisiune de despăgubire.';

  // 1. Verificare valori zero sau negative / date insuficiente
  if (rawTotalLoss <= 0 || isNaN(rawTotalLoss)) {
    return {
      isValid: false,
      calculationNature: nature,
      totalLoss: 0,
      eligibleLoss: 0,
      excludedLoss: 0,
      calculatedDeductible: 0,
      effectiveLimit: Math.max(0, input.availableLimit || 0),
      isLimitExceeded: false,
      limitExceededAmount: 0,
      isDeductibleAbsorbed: false,
      estimatedInsurerPayment: 0,
      estimatedOutOfPocket: 0,
      outOfPocketPercentage: 0,
      currency,
      statusVerdict: 'HIGH_EXPOSURE',
      statusTitleRo: 'Date insuficiente',
      statusExplanationRo: 'Introdu o valoare strict pozitivă a prejudiciului estimat pentru a rula simularea financiară.',
      assumptions: ['Prejudiciul estimat specificat este zero sau negativ.'],
      insufficientDataReason: 'Valoarea prejudiciului estimat trebuie să fie mai mare decât zero.',
      officialGeneraliDisclaimer
    };
  }

  const totalLoss = Math.max(0, rawTotalLoss);

  // 2. Tratare excluderi contractuale exprese (ex: clauză de nelocuire activată sau risc exclus)
  if (input.hasExclusionFlag) {
    return {
      isValid: true,
      calculationNature: nature,
      totalLoss,
      eligibleLoss: 0,
      excludedLoss: totalLoss,
      calculatedDeductible: 0,
      effectiveLimit: Math.max(0, input.availableLimit || 0),
      isLimitExceeded: false,
      limitExceededAmount: 0,
      isDeductibleAbsorbed: false,
      estimatedInsurerPayment: 0,
      estimatedOutOfPocket: totalLoss,
      outOfPocketPercentage: 100,
      currency,
      statusVerdict: 'COMPLETE_EXPOSURE',
      statusTitleRo: '100% Pierdere Suportată din Fonduri Proprii (Excludere Contractuală)',
      statusExplanationRo: 'Evenimentul intră sub incidența unei excluderi contractuale exprese (ex. nelocuirea imobilului peste termen fără măsuri preventive sau lipsa clauzei specifice). Asigurătorul nu acordă despăgubire conform contractului.',
      assumptions: [
        'Clauză de excludere activată pe dosar.',
        'Prejudiciul nu întrunește condițiile cumulative de acoperire contractuală.',
        'Costul total este suportat integral de persoana afectată.'
      ],
      officialGeneraliDisclaimer
    };
  }

  // 3. Prejudiciu total vs Prejudiciu eligibil
  let rawEligible = totalLoss;
  if (typeof input.eligibleLoss === 'number' && !isNaN(input.eligibleLoss)) {
    rawEligible = Math.max(0, Math.min(input.eligibleLoss, totalLoss));
  }
  const excludedLoss = Math.max(0, totalLoss - rawEligible);

  // 4. Limită asigurată și sublimite
  const rawLimit = Math.max(0, input.availableLimit || 0);
  let effectiveLimit = rawLimit;
  let sublimitNote: string | null = null;
  if (typeof input.sublimitApplied === 'number' && input.sublimitApplied > 0) {
    if (input.sublimitApplied < effectiveLimit) {
      effectiveLimit = input.sublimitApplied;
      sublimitNote = `S-a aplicat sublimita specială de ${effectiveLimit.toLocaleString('ro-RO')} ${currency}.`;
    }
  }

  // 5. Calcul franșiză (fixă sau procentuală din prejudiciul eligibil)
  let calculatedDeductible = 0;
  if (input.deductibleType === 'percentage') {
    const pct = Math.max(0, Math.min(100, input.deductibleValue || 0));
    calculatedDeductible = (rawEligible * pct) / 100;
  } else {
    calculatedDeductible = Math.max(0, input.deductibleValue || 0);
  }

  // Franșiza nu poate depăși prejudiciul eligibil
  calculatedDeductible = Math.min(calculatedDeductible, rawEligible);

  // 6. Evaluare prejudiciu după franșiză
  const lossAfterDeductible = Math.max(0, rawEligible - calculatedDeductible);
  const isDeductibleAbsorbed = rawEligible > 0 && lossAfterDeductible === 0;

  // 7. Evaluare depășire limită
  const isLimitExceeded = effectiveLimit > 0 && lossAfterDeductible > effectiveLimit;
  const limitExceededAmount = isLimitExceeded ? lossAfterDeductible - effectiveLimit : 0;

  // 8. Formulă matematică oficială
  // estimated_insurer_payment = min(max(eligible_loss - deductible, 0), available_limit)
  const estimatedInsurerPayment = Math.min(lossAfterDeductible, effectiveLimit);

  // 9. Suma suportată din fonduri proprii (out-of-pocket)
  // estimated_out_of_pocket = total_loss - estimated_insurer_payment
  const estimatedOutOfPocket = Math.max(0, totalLoss - estimatedInsurerPayment);
  const outOfPocketPercentage = totalLoss > 0
    ? Math.round((estimatedOutOfPocket / totalLoss) * 100)
    : 0;

  // 10. Verdict și explicație calitativă
  let statusVerdict: FinancialExposureResult['statusVerdict'] = 'FULL_COVERAGE';
  let statusTitleRo = '';
  let statusExplanationRo = '';

  if (effectiveLimit === 0 && rawLimit === 0) {
    statusVerdict = 'COMPLETE_EXPOSURE';
    statusTitleRo = '100% Pierdere (Limită asigurată zero sau nedefinită)';
    statusExplanationRo = 'Limita de asigurare este zero sau nedefinită, astfel încât întreaga daună este suportată din fonduri proprii.';
  } else if (estimatedOutOfPocket === 0) {
    statusVerdict = 'FULL_COVERAGE';
    statusTitleRo = `Acoperire Integrală Teoretică (0 ${currency} din fonduri proprii)`;
    statusExplanationRo = 'Prejudiciul este integral eligibil, sub limita contractuală și nu există franșiză aplicabilă pe acest eveniment.';
  } else if (outOfPocketPercentage <= 15) {
    statusVerdict = 'PARTIAL_COVERAGE';
    statusTitleRo = `Protecție Puternică: Doar ${outOfPocketPercentage}% suportat din fonduri proprii`;
    statusExplanationRo = `Asigurătorul preia cea mai mare parte a daunei. Partea suportată de tine reprezintă exclusiv franșiza contractuală de ${calculatedDeductible.toLocaleString('ro-RO')} ${currency}.`;
  } else if (outOfPocketPercentage < 80) {
    statusVerdict = 'HIGH_EXPOSURE';
    statusTitleRo = `Expunere Parțială Semnificativă (${outOfPocketPercentage}% suportat din fonduri proprii)`;
    statusExplanationRo = isLimitExceeded
      ? `Limita de despăgubire (${effectiveLimit.toLocaleString('ro-RO')} ${currency}) a fost depășită cu ${limitExceededAmount.toLocaleString('ro-RO')} ${currency}. Surplusul este suportat direct din fonduri proprii.`
      : `O parte importantă din daună este suportată direct din cauza franșizei sau a elementelor neeligibile contractual.`;
  } else {
    statusVerdict = 'COMPLETE_EXPOSURE';
    statusTitleRo = `Expunere Financiară Critică (${outOfPocketPercentage}% suportat din fonduri proprii)`;
    statusExplanationRo = `Aproape întregul prejudiciu rămâne în sarcina ta din cauza limitelor contractuale reduse, a franșizei mari sau a excluderilor aplicabile.`;
  }

  const assumptions: string[] = [
    `Natură calcul: ${nature === 'DOCUMENTAT_ORIENTATIV' ? 'Bazat pe condiții contractuale documentate orientative' : 'Simulare educațională ilustrativă'}`,
    `Valoare activ luată în calcul: ${input.assetValue ? input.assetValue.toLocaleString('ro-RO') + ' ' + currency : 'Nedeclarată'}`,
    `Prejudiciu eligibil reținut: ${rawEligible.toLocaleString('ro-RO')} ${currency} din ${totalLoss.toLocaleString('ro-RO')} ${currency} total`,
    `Franșiză aplicată: ${calculatedDeductible.toLocaleString('ro-RO')} ${currency} (${input.deductibleType === 'percentage' ? input.deductibleValue + '%' : 'sumă fixă'})`,
    `Limită disponibilă considerată: ${effectiveLimit.toLocaleString('ro-RO')} ${currency}`,
  ];
  if (sublimitNote) assumptions.push(sublimitNote);
  if (excludedLoss > 0) assumptions.push(`Cheltuieli neeligibile / excluse contractual: ${excludedLoss.toLocaleString('ro-RO')} ${currency}`);
  if (isLimitExceeded) assumptions.push(`Depășire peste limita asigurată: ${limitExceededAmount.toLocaleString('ro-RO')} ${currency}`);
  if (isDeductibleAbsorbed) assumptions.push(`Dauna eligibilă nu depășește franșiza deductibilă contractual.`);

  return {
    isValid: true,
    calculationNature: nature,
    totalLoss,
    eligibleLoss: rawEligible,
    excludedLoss,
    calculatedDeductible,
    effectiveLimit,
    isLimitExceeded,
    limitExceededAmount,
    isDeductibleAbsorbed,
    estimatedInsurerPayment,
    estimatedOutOfPocket,
    outOfPocketPercentage,
    currency,
    statusVerdict,
    statusTitleRo,
    statusExplanationRo,
    assumptions,
    officialGeneraliDisclaimer
  };
}
