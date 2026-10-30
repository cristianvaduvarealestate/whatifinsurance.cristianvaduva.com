/**
 * WHAT IF INSURANCE — REFERRAL & ATTRIBUTION ENGINE
 * 
 * Lightweight, privacy-respecting client attribution manager.
 * Rules:
 * - Opaque, non-sensitive tokens (no PII, no database IDs).
 * - First-touch attribution with a 30-day attribution window.
 * - Self-referral prevention.
 * - Safe sanitization and validation.
 */

import { REWARDS_CONFIG } from './rewardsConfig';

const STORAGE_KEYS = {
  ATTRIBUTION: 'whatif_referral_attribution',
  OWN_TOKEN: 'whatif_own_referral_token',
};

export interface StoredAttribution {
  referralToken: string;
  firstVisitedAt: string;
  expiresAt: string;
  landingPath: string;
}

/**
 * Validates whether a token conforms to the opaque identifier format.
 * Must be 8 to 32 alphanumeric/dash/underscore characters with no PII.
 */
export function isValidReferralToken(token?: string | null): boolean {
  if (!token || typeof token !== 'string') return false;
  const clean = token.trim();
  return /^[a-zA-Z0-9_-]{8,32}$/.test(clean);
}

/**
 * Generates a non-guessable, opaque referral identifier.
 * Format: ref_ + 12 alphanumeric characters.
 */
export function generateOpaqueReferralToken(): string {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let randStr = '';
  
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint8Array(12);
    crypto.getRandomValues(array);
    for (let i = 0; i < array.length; i++) {
      randStr += chars[array[i] % chars.length];
    }
  } else {
    for (let i = 0; i < 12; i++) {
      randStr += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return `ref_${randStr}`;
}

/**
 * Retrieves the persistent own referral token for this browser instance,
 * or generates and saves a new one. Used to prevent self-referral and
 * ensure consistent link sharing across sessions.
 */
export function getOrCreateUserShareToken(): string {
  if (typeof window === 'undefined') {
    return generateOpaqueReferralToken();
  }

  try {
    const existing = localStorage.getItem(STORAGE_KEYS.OWN_TOKEN);
    if (existing && isValidReferralToken(existing)) {
      return existing;
    }

    const fresh = generateOpaqueReferralToken();
    localStorage.setItem(STORAGE_KEYS.OWN_TOKEN, fresh);
    return fresh;
  } catch {
    return generateOpaqueReferralToken();
  }
}

/**
 * Generates a shareable URL containing the user's opaque referral token.
 * Defaults to the quiz/challenge landing or the current canonical root.
 */
export function getShareableReferralLink(targetPath: string = '/quiz'): string {
  const token = getOrCreateUserShareToken();
  const base = typeof window !== 'undefined' ? window.location.origin : REWARDS_CONFIG.canonicalBaseUrl;
  const path = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
  return `${base}${path}?ref=${token}`;
}

/**
 * Records an incoming referral landing from URL parameters (?ref=... or ?invite=...).
 * Enforces first-touch attribution, 30-day expiration, and self-referral detection.
 */
export function recordReferralLanding(searchString?: string): {
  attributed: boolean;
  token?: string;
  reason: 'recorded' | 'already_attributed' | 'self_referral' | 'invalid_token' | 'none';
} {
  if (typeof window === 'undefined') {
    return { attributed: false, reason: 'none' };
  }

  try {
    const search = searchString ?? window.location.search;
    if (!search) return { attributed: false, reason: 'none' };

    const params = new URLSearchParams(search);
    const candidate = params.get('ref') || params.get('invite');

    if (!candidate || !isValidReferralToken(candidate)) {
      return { attributed: false, reason: 'invalid_token' };
    }

    // 1. Self-referral check: Compare with own generated token
    const ownToken = localStorage.getItem(STORAGE_KEYS.OWN_TOKEN);
    if (ownToken && ownToken === candidate) {
      return { attributed: false, reason: 'self_referral' };
    }

    // 2. Check for existing attribution (First-touch rule)
    const existingRaw = localStorage.getItem(STORAGE_KEYS.ATTRIBUTION);
    if (existingRaw) {
      try {
        const existing: StoredAttribution = JSON.parse(existingRaw);
        const expiresAt = new Date(existing.expiresAt).getTime();
        const now = Date.now();

        // If existing attribution is still valid within the 30-day window, preserve first touch
        if (now < expiresAt && isValidReferralToken(existing.referralToken)) {
          return { attributed: true, token: existing.referralToken, reason: 'already_attributed' };
        }
      } catch {
        // Corrupt storage, allow overwrite
      }
    }

    // 3. Store fresh attribution with 30-day window
    const now = new Date();
    const expires = new Date(now.getTime() + REWARDS_CONFIG.attributionWindowDays * 24 * 60 * 60 * 1000);

    const attribution: StoredAttribution = {
      referralToken: candidate,
      firstVisitedAt: now.toISOString(),
      expiresAt: expires.toISOString(),
      landingPath: window.location.pathname || '/',
    };

    localStorage.setItem(STORAGE_KEYS.ATTRIBUTION, JSON.stringify(attribution));
    return { attributed: true, token: candidate, reason: 'recorded' };
  } catch (err) {
    console.warn('[ReferralManager] Unable to record attribution:', err);
    return { attributed: false, reason: 'none' };
  }
}

/**
 * Retrieves the currently active attribution data if valid and unexpired.
 */
export function getStoredAttribution(): {
  referralToken: string | null;
  landingPath: string | null;
  firstVisitedAt: string | null;
} {
  if (typeof window === 'undefined') {
    return { referralToken: null, landingPath: null, firstVisitedAt: null };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ATTRIBUTION);
    if (!raw) return { referralToken: null, landingPath: null, firstVisitedAt: null };

    const attribution: StoredAttribution = JSON.parse(raw);
    const expiresAt = new Date(attribution.expiresAt).getTime();

    if (Date.now() > expiresAt || !isValidReferralToken(attribution.referralToken)) {
      localStorage.removeItem(STORAGE_KEYS.ATTRIBUTION);
      return { referralToken: null, landingPath: null, firstVisitedAt: null };
    }

    return {
      referralToken: attribution.referralToken,
      landingPath: attribution.landingPath || '/',
      firstVisitedAt: attribution.firstVisitedAt,
    };
  } catch {
    return { referralToken: null, landingPath: null, firstVisitedAt: null };
  }
}

/**
 * Clears any stored referral attribution (e.g. for testing or privacy request).
 */
export function clearAttribution(): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEYS.ATTRIBUTION);
    } catch {
      // safe ignore
    }
  }
}
