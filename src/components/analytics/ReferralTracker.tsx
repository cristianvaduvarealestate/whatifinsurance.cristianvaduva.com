'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { recordReferralLanding } from '@/lib/referralManager';
import { trackEvent } from '@/lib/analytics';

export function ReferralTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const search = window.location.search;
    if (!search) return;

    const result = recordReferralLanding(search);
    if (result.attributed) {
      trackEvent('referral_landing', {
        hasValidToken: true,
        landingPath: window.location.pathname || '/',
      });
    }
  }, [searchParams]);

  return null;
}
