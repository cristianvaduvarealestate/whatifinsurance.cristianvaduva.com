export type CategoryId =
  | 'casa'
  | 'auto'
  | 'calatorii'
  | 'raspundere-civila'
  | 'viata-sanatate'
  | 'business'
  | 'digital-tech'
  | 'luxury-bunuri'
  | 'proprietari-chiriasi'
  | 'familie-lifestyle';

export interface Category {
  id: CategoryId;
  name: string;
  shortName?: string;
  shortDescription?: string;
  description?: string;
  tagline?: string;
  iconName: string;
  icon?: string;
  badgeColor?: string;
  accentColor?: string;
}

export interface ScenarioComparison {
  title: string;
  statusLabel: string;
  financialImpact: string;
  points: string[];
  summary: string;
}

export interface ScenarioWhatToCheck {
  title: string;
  items: {
    label: string;
    detail: string;
  }[];
  exclusions?: string[];
}

export type UserProfileId =
  | 'proprietar'
  | 'chirias'
  | 'sofer'
  | 'parinte'
  | 'antreprenor'
  | 'calator';

export interface FinancialEstimate {
  amount?: string;
  currency: 'RON' | 'EUR';
  type: 'estimare_orientativa' | 'exemplu_ipotetic' | 'valoare_documentata';
  sourceTitle?: string;
  sourceUrl?: string;
  sourceDate?: string;
  checkedAt?: string;
  insurer?: string;
  product?: string;
  policyVersion?: string;
  assumptions?: string;
  includedItems?: string[];
  excludedItems?: string[];
  verificationStatus: 'verificat_documentar' | 'necesita_documentare' | 'estimare_ilustrativa';
  qualitativeAssessment?: string;
}

export interface Scenario {
  id: string;
  slug: string;
  categoryId: CategoryId;
  categoryName: string;
  title: string;
  mainQuestion: string;
  shortDescription: string;
  situation: string;
  heroImage: string;
  imageCaption: string;
  illustrativeCost?: string;
  financialEstimate?: FinancialEstimate;
  editorialStatus?: 'revizuit' | 'in_curs';
  editorialReviewDate?: string;
  contractualReviewDate?: string;
  contractualProduct?: string;
  contractualDocument?: string;
  legalReviewDate?: string;
  legalBasis?: string;
  preventionTips?: string[];
  userProfiles?: UserProfileId[];
  searchKeywords?: string[];
  withoutInsurance: ScenarioComparison;
  withInsurance: ScenarioComparison;
  whatToCheck: ScenarioWhatToCheck;
  immediateSteps?: string[];
  usefulDocuments?: string[];
  relevantInsuranceTypes?: string[];
  verificationQuestions?: string[];
  advisorQuestions?: string[];
  sources?: string[];
  lastEditorialDate?: string;
  lastReviewed?: string;
  disclaimer?: string;
  ctaText?: string;
  shareText?: string;
  socialHook?: string;
  socialDescription?: string;
  featured?: boolean;
  tags?: string[];
  severityLabel?: string;
}

export interface QuizQuestion {
  id: string;
  scenarioId: string;
  scenarioTitle: string;
  question: string;
  situationSnippet: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    verdictLabel: 'Acoperit' | 'Neacoperit' | 'Depinde de poliță';
  }[];
  explanation: string;
  caveatNote: string;
}
