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
