/**
 * WHATIF INSURANCE — PRIVACY-PRESERVING EVENT TAXONOMY
 * 
 * Strict privacy rules:
 * - NEVER log or emit names, phone numbers, email addresses, form messages, or credentials.
 * - Non-sensitive operational properties only (e.g. category, question count, score bracket, format).
 * - Dispatches DOM events and logs for auditability without invasive tracking.
 */

export type AnalyticsEventType =
  | 'challenge_started'
  | 'challenge_completed'
  | 'share_initiated'
  | 'share_cancelled'
  | 'invite_link_copied'
  | 'referral_landing'
  | 'reward_resource_opened'
  | 'quote_cta_clicked'
  | 'editorial_concept_selected'
  | 'lead_submitted'
  | 'lead_submission_failed'
  // Master Transformation conversion events
  | 'scenario_open'
  | 'quiz_complete'
  | 'checklist_open'
  | 'checklist_complete'
  | 'contact_audit'
  | 'scenario_proposal_submit'
  | 'share_studio_export'
  | 'quiz_email_optin';

export interface BaseEventProperties {
  path?: string;
  source?: string;
  category?: string;
  source_page?: string;
}

export interface ScenarioOpenProps extends BaseEventProperties {
  scenario_id: string;
  category: string;
  source_page?: string;
}

export interface QuizCompleteProps extends BaseEventProperties {
  score: number;
  questionCount: number;
  percentageScore: number;
}

export interface ChecklistOpenProps extends BaseEventProperties {
  category?: string;
  source_page?: string;
}

export interface ChecklistCompleteProps extends BaseEventProperties {
  category?: string;
  completedCount: number;
  totalCount: number;
}

export interface ContactAuditProps extends BaseEventProperties {
  scenario_id?: string;
  category?: string;
  action_type: string;
  source_page?: string;
}

export interface ScenarioProposalSubmitProps extends BaseEventProperties {
  category: string;
  hasQuestion: boolean;
  source_page?: string;
}

export interface ShareStudioExportProps extends BaseEventProperties {
  format: 'story' | 'feed' | 'square';
  scenario_id?: string;
  category?: string;
}

export interface QuizEmailOptinProps extends BaseEventProperties {
  score: number;
  questionCount: number;
}

export interface ChallengeStartedProps extends BaseEventProperties {
  questionCount: number;
}

export interface ChallengeCompletedProps extends BaseEventProperties {
  score: number;
  questionCount: number;
  percentageScore: number;
}

export interface ShareInitiatedProps extends BaseEventProperties {
  shareType: 'native_sheet' | 'copy_link' | 'download_image' | 'whatsapp' | 'telegram' | 'linkedin' | 'facebook' | 'instagram' | 'instagram_native' | 'instagram_fallback' | 'threads' | 'x_twitter';
  format?: 'story' | 'feed' | 'square';
  context: 'scenario' | 'challenge_result';
}

export interface ShareCancelledProps extends BaseEventProperties {
  shareType: 'native_sheet';
  reason?: string;
}

export interface InviteLinkCopiedProps extends BaseEventProperties {
  context: 'challenge_result' | 'scenario_card' | 'rewards_modal';
}

export interface ReferralLandingProps extends BaseEventProperties {
  hasValidToken: boolean;
  landingPath: string;
}

export interface RewardResourceOpenedProps extends BaseEventProperties {
  resourceType: 'policy_checklist' | 'coverage_guide';
  sourceLocation: 'quiz_result' | 'navbar' | 'footer' | 'scenario';
}

export interface QuoteCtaClickedProps extends BaseEventProperties {
  sourceLocation: 'persistent_button' | 'quiz_result' | 'scenario_footer' | 'policy_check' | 'studio_page';
  preselectedCategory?: string;
}

export interface LeadSubmittedProps extends BaseEventProperties {
  leadId: string;
  category: string;
  persisted: boolean;
  hasReferral: boolean;
}

export interface LeadSubmissionFailedProps extends BaseEventProperties {
  category?: string;
  errorReason: string;
}

export interface EditorialConceptSelectedProps extends BaseEventProperties {
  conceptId: string;
}

export type EventPayloadMap = {
  challenge_started: ChallengeStartedProps;
  challenge_completed: ChallengeCompletedProps;
  share_initiated: ShareInitiatedProps;
  share_cancelled: ShareCancelledProps;
  invite_link_copied: InviteLinkCopiedProps;
  referral_landing: ReferralLandingProps;
  reward_resource_opened: RewardResourceOpenedProps;
  quote_cta_clicked: QuoteCtaClickedProps;
  editorial_concept_selected: EditorialConceptSelectedProps;
  lead_submitted: LeadSubmittedProps;
  lead_submission_failed: LeadSubmissionFailedProps;
  // Master Transformation
  scenario_open: ScenarioOpenProps;
  quiz_complete: QuizCompleteProps;
  checklist_open: ChecklistOpenProps;
  checklist_complete: ChecklistCompleteProps;
  contact_audit: ContactAuditProps;
  scenario_proposal_submit: ScenarioProposalSubmitProps;
  share_studio_export: ShareStudioExportProps;
  quiz_email_optin: QuizEmailOptinProps;
};

/**
 * Validates that an object contains NO sensitive personally identifiable information (PII).
 */
function sanitizeEventProperties(props: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  const forbiddenKeys = ['name', 'email', 'phone', 'message', 'address', 'password', 'token', 'cnp', 'iban'];

  for (const [key, value] of Object.entries(props)) {
    const lowerKey = key.toLowerCase();
    const isForbidden = forbiddenKeys.some((f) => lowerKey.includes(f) && key !== 'hasValidToken' && key !== 'hasReferral');
    if (isForbidden) {
      continue;
    }

    if (typeof value === 'string' && value.length > 100) {
      sanitized[key] = value.substring(0, 100);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

/**
 * Tracks an event using the WHAT IF analytics taxonomy.
 */
export function trackEvent<E extends AnalyticsEventType>(
  eventType: E,
  properties: EventPayloadMap[E]
): void {
  if (typeof window === 'undefined') return;

  try {
    const sanitizedProps = sanitizeEventProperties({
      ...properties,
      timestamp: new Date().toISOString(),
      path: properties.path || window.location.pathname,
    });

    // 1. Dispatch custom DOM event for local subscribers/extensions
    const customEvent = new CustomEvent('whatif:analytics', {
      detail: {
        event: eventType,
        properties: sanitizedProps,
      },
    });
    window.dispatchEvent(customEvent);

    // 2. Safe local audit logging in non-production
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[WHATIF Analytics] ${eventType}`, sanitizedProps);
    }

    // 3. Forward to window.gtag if present and user has consented
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventType, sanitizedProps);
    }
  } catch (err) {
    // Analytics should never break user interactions
    console.warn('[WHATIF Analytics] Dispatch error:', err);
  }
}
