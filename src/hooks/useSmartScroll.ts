'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export interface SmartScrollOptions {
  /**
   * Minimum scroll delta in pixels before toggling visibility.
   * Prevents jitter and flickering on micro-scrolls or slow movement.
   * Default: 8
   */
  threshold?: number;
  /**
   * Scroll distance from top of page where the element is unconditionally visible.
   * Default: 50
   */
  topOffset?: number;
  /**
   * When true (e.g. mobile menu or modal is open), forces the element to remain visible.
   * Default: false
   */
  disableWhen?: boolean;
}

/**
 * High-performance smart scroll hook with requestAnimationFrame throttling,
 * asymmetric state machine tracking, rubber-band bounce protection,
 * and zero layout shifts.
 */
export function useSmartScroll({
  threshold = 8,
  topOffset = 50,
  disableWhen = false,
}: SmartScrollOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const isVisibleRef = useRef(true);

  // Sync ref with state
  isVisibleRef.current = isVisible;

  // Always restore visibility on route change or history navigation
  useEffect(() => {
    setIsVisible(true);
    isVisibleRef.current = true;
    lastScrollY.current = typeof window !== 'undefined'
      ? Math.max(0, window.scrollY || document.documentElement.scrollTop || 0)
      : 0;
  }, [pathname]);

  // Keep visible whenever a menu or dialog is open
  useEffect(() => {
    if (disableWhen && !isVisibleRef.current) {
      setIsVisible(true);
      isVisibleRef.current = true;
    }
  }, [disableWhen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollY = Math.max(
        0,
        window.scrollY || document.documentElement.scrollTop || 0
      );

      // 1. Handle iOS rubber-band bounce & top-of-page pinning
      if (currentScrollY <= topOffset) {
        if (!isVisibleRef.current) {
          setIsVisible(true);
          isVisibleRef.current = true;
        }
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      // 2. Keep visible if interacting with open menu/modal
      if (disableWhen) {
        if (!isVisibleRef.current) {
          setIsVisible(true);
          isVisibleRef.current = true;
        }
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      // 3. Overscroll protection at document bottom
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      if (currentScrollY + windowHeight >= documentHeight - 15) {
        // Keep current visibility stable when bouncing at bottom
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      // 4. Asymmetric State Machine:
      // When currently VISIBLE: we watch for downward scroll >= threshold to hide.
      // If user is scrolling UP while already visible, just track the scroll position.
      if (isVisibleRef.current) {
        if (currentScrollY < lastScrollY.current) {
          // Scrolling up while visible: update anchor
          lastScrollY.current = currentScrollY;
        } else if (currentScrollY - lastScrollY.current >= threshold) {
          // Scrolled down past threshold: hide element
          setIsVisible(false);
          isVisibleRef.current = false;
          lastScrollY.current = currentScrollY;
        }
      } else {
        // When currently HIDDEN: we watch for upward scroll >= threshold to reveal.
        // If user is scrolling DOWN while already hidden, just track the scroll position.
        if (currentScrollY > lastScrollY.current) {
          // Continuing down while hidden: update anchor
          lastScrollY.current = currentScrollY;
        } else if (lastScrollY.current - currentScrollY >= threshold) {
          // Scrolled up past threshold: reveal element
          setIsVisible(true);
          isVisibleRef.current = true;
          lastScrollY.current = currentScrollY;
        }
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold, topOffset, disableWhen]);

  return isVisible;
}
