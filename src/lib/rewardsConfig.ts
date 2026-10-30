/**
 * WHAT IF INSURANCE — REWARDS & GROWTH CONFIGURATION
 * 
 * Central configuration for educational rewards, referral attribution rules,
 * and strict feature flags for commercial promotions.
 */

export const REWARDS_CONFIG = {
  /**
   * COMMERCIAL INSURANCE DISCOUNT FEATURE FLAG
   * 
   * STRICTLY DISABLED (false) until documented legal, commercial, and regulatory
   * authorization is confirmed by licensed insurance intermediaries/underwriters.
   * 
   * When false:
   * - No discount percentage or financial vouchers are displayed in the UI.
   * - No monetary reward or premium reduction promises are made.
   * - No discount code is generated or issued.
   */
  insuranceDiscountEnabled: false,

  /**
   * EDUCATIONAL RESOURCE BENEFIT
   * 
   * Genuinely available immediately for all users without forced sharing,
   * without paywalls, and without mandatory personal data collection.
   */
  educationalChecklistEnabled: true,

  /**
   * REFERRAL ATTRIBUTION WINDOW
   * Default: 30 days first-touch attribution window.
   */
  attributionWindowDays: 30,

  /**
   * Canonical URL for share and referral links
   */
  canonicalBaseUrl: 'https://whatifinsurance.cristianvaduva.com',
} as const;

export type RewardsConfig = typeof REWARDS_CONFIG;
