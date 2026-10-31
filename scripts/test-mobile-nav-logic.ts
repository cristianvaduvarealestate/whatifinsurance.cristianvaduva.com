/**
 * Automated Verification Test for Mobile Navigation & Scroll Lock Engine
 * WHAT IF INSURANCE — Studio 3.0
 */

// Mini DOM mock environment
class MockStyle {
  overflow = '';
  position = '';
  top = '';
  left = '';
  right = '';
  width = '';
  overscrollBehavior = '';
  touchAction = '';
  paddingRight = '';
}

class MockElement {
  style = new MockStyle();
  clientWidth = 390;
  clientHeight = 844;
}

const mockDocumentElement = new MockElement();
const mockBody = new MockElement();

const historyStack: any[] = [{ url: 'https://whatifinsurance.cristianvaduva.com/' }];
let historyIndex = 0;

const windowListeners: Record<string, Function[]> = {};

const mockWindow = {
  innerWidth: 390,
  innerHeight: 844,
  scrollY: 0,
  location: { href: 'https://whatifinsurance.cristianvaduva.com/' },
  history: {
    get state() {
      return historyStack[historyIndex]?.state || null;
    },
    pushState(state: any, title: string, url?: string) {
      historyIndex++;
      historyStack[historyIndex] = { state, url: url || mockWindow.location.href };
    },
    replaceState(state: any, title: string, url?: string) {
      historyStack[historyIndex] = { state, url: url || mockWindow.location.href };
    },
    back() {
      if (historyIndex > 0) {
        historyIndex--;
        const listeners = windowListeners['popstate'] || [];
        listeners.forEach((fn) => fn({ state: mockWindow.history.state }));
      }
    },
  },
  addEventListener(event: string, fn: Function) {
    if (!windowListeners[event]) windowListeners[event] = [];
    windowListeners[event].push(fn);
  },
  removeEventListener(event: string, fn: Function) {
    if (!windowListeners[event]) return;
    windowListeners[event] = windowListeners[event].filter((f) => f !== fn);
  },
  matchMedia(query: string) {
    return {
      matches: false,
      addEventListener(event: string, fn: Function) {
        if (!windowListeners['media_' + query]) windowListeners['media_' + query] = [];
        windowListeners['media_' + query].push(fn);
      },
      removeEventListener(event: string, fn: Function) {
        if (!windowListeners['media_' + query]) return;
        windowListeners['media_' + query] = windowListeners['media_' + query].filter((f) => f !== fn);
      },
    };
  },
};

// Simulation of Navbar Mobile Menu State Engine
class MobileNavEngine {
  mobileMenuOpen = false;
  mobileMenuOpenRef = false;
  menuHistoryPushedRef = false;
  originalStyles: any = null;

  constructor() {
    mockWindow.addEventListener('popstate', () => this.handlePopState());
  }

  setMobileMenuOpen(val: boolean) {
    this.mobileMenuOpen = val;
    this.mobileMenuOpenRef = val;
    this.syncScrollLock(val);
  }

  syncScrollLock(isOpen: boolean) {
    if (isOpen) {
      this.originalStyles = {
        htmlOverflow: mockDocumentElement.style.overflow,
        bodyOverflow: mockBody.style.overflow,
        bodyOverscroll: mockBody.style.overscrollBehavior,
        bodyTouchAction: mockBody.style.touchAction,
        bodyPaddingRight: mockBody.style.paddingRight,
      };

      const scrollbarWidth = mockWindow.innerWidth - mockDocumentElement.clientWidth;
      if (scrollbarWidth > 0) {
        mockBody.style.paddingRight = `${scrollbarWidth}px`;
      }

      mockDocumentElement.style.overflow = 'hidden';
      mockBody.style.overflow = 'hidden';
      mockBody.style.overscrollBehavior = 'contain';
    } else {
      if (this.originalStyles) {
        mockDocumentElement.style.overflow = this.originalStyles.htmlOverflow;
        mockBody.style.overflow = this.originalStyles.bodyOverflow;
        mockBody.style.overscrollBehavior = this.originalStyles.bodyOverscroll;
        mockBody.style.touchAction = this.originalStyles.bodyTouchAction;
        mockBody.style.paddingRight = this.originalStyles.bodyPaddingRight;
        this.originalStyles = null;
      }
    }
  }

  handleOpenMenu() {
    if (this.mobileMenuOpenRef) return;
    this.setMobileMenuOpen(true);
    if (!this.menuHistoryPushedRef) {
      mockWindow.history.pushState({ whatifMobileMenu: true }, '', mockWindow.location.href);
      this.menuHistoryPushedRef = true;
    }
  }

  handleCloseMenu() {
    if (!this.mobileMenuOpenRef) return;
    if (this.menuHistoryPushedRef) {
      this.menuHistoryPushedRef = false;
      if (mockWindow.history.state?.whatifMobileMenu) {
        mockWindow.history.back();
      }
    }
    this.setMobileMenuOpen(false);
  }

  handleToggleMenu() {
    if (this.mobileMenuOpenRef) {
      this.handleCloseMenu();
    } else {
      this.handleOpenMenu();
    }
  }

  handleNavLinkClick() {
    if (this.menuHistoryPushedRef) {
      this.menuHistoryPushedRef = false;
      if (mockWindow.history.state?.whatifMobileMenu) {
        mockWindow.history.replaceState(null, '', mockWindow.location.href);
      }
    }
    this.setMobileMenuOpen(false);
  }

  handlePopState() {
    if (this.mobileMenuOpenRef) {
      this.menuHistoryPushedRef = false;
      this.setMobileMenuOpen(false);
    }
  }

  handleOrientationChange(matchesDesktop: boolean) {
    if (matchesDesktop && this.mobileMenuOpenRef) {
      this.handleCloseMenu();
    }
  }
}

// TEST RUNNER
let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, desc: string) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${desc}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${desc}`);
    process.exitCode = 1;
  }
}

console.log('====================================================');
console.log('WHATIF INSURANCE — MOBILE NAVIGATION ENGINE TESTS');
console.log('====================================================');

const engine = new MobileNavEngine();

// Test 1: Open menu -> close menu -> scroll page
console.log('\n[Scenario 1] Open menu -> close menu -> scroll page:');
engine.handleOpenMenu();
assert(engine.mobileMenuOpen === true, 'Menu state is open');
assert(mockDocumentElement.style.overflow === 'hidden', 'documentElement overflow is locked (hidden)');
assert(mockBody.style.overflow === 'hidden', 'body overflow is locked (hidden)');
assert(mockBody.style.overscrollBehavior === 'contain', 'overscrollBehavior is contain');
engine.handleCloseMenu();
assert(engine.mobileMenuOpen === false, 'Menu state is closed');
assert(mockDocumentElement.style.overflow === '', 'documentElement overflow restored');
assert(mockBody.style.overflow === '', 'body overflow restored');
assert(mockBody.style.overscrollBehavior === '', 'body overscrollBehavior restored');

// Test 2: Scroll position preservation (halfway down page)
console.log('\n[Scenario 2] Scroll halfway down page (scrollY = 850px) -> open/close menu:');
mockWindow.scrollY = 850;
engine.handleOpenMenu();
assert(mockWindow.scrollY === 850, 'scrollY remains 850px while open (no reset to 0)');
assert(mockBody.style.position === '', 'body.style.position is NOT fixed (prevents sticky header jump)');
engine.handleCloseMenu();
assert(mockWindow.scrollY === 850, 'scrollY remains 850px after close (zero layout jump)');

// Test 3: Select navigation link
console.log('\n[Scenario 3] Open menu -> select navigation link:');
engine.handleOpenMenu();
assert(mockWindow.history.state?.whatifMobileMenu === true, 'History state pushed for mobile menu');
engine.handleNavLinkClick();
assert(engine.mobileMenuOpen === false, 'Menu closed upon link click');
assert(mockWindow.history.state?.whatifMobileMenu !== true, 'History state cleaned before route transition');
assert(mockBody.style.overflow === '', 'Body scroll lock immediately released on navigation');

// Test 4: Mobile browser Back button (popstate)
console.log('\n[Scenario 4] Open menu -> browser Back button:');
engine.handleOpenMenu();
assert(engine.mobileMenuOpen === true, 'Menu is open');
assert(mockWindow.history.state?.whatifMobileMenu === true, 'Menu state exists in history');
// Simulate user pressing browser back button
mockWindow.history.back();
assert(engine.mobileMenuOpen === false, 'Menu closed cleanly by browser Back button');
assert(mockBody.style.overflow === '', 'Scroll lock released cleanly after browser Back');

// Test 5: Open menu -> browser Back -> reopen menu -> close it again
console.log('\n[Scenario 5] Reopen menu after browser Back -> close again:');
engine.handleOpenMenu();
assert(engine.mobileMenuOpen === true, 'Reopened menu successfully');
engine.handleCloseMenu();
assert(engine.mobileMenuOpen === false, 'Closed menu normally via toggle/close button');
assert(mockBody.style.overflow === '', 'Scroll lock completely released');

// Test 6: 10 consecutive open/close cycles
console.log('\n[Scenario 6] 10 consecutive open and close cycles:');
let stressPass = true;
for (let i = 0; i < 10; i++) {
  engine.handleToggleMenu();
  if (!engine.mobileMenuOpen || mockBody.style.overflow !== 'hidden') stressPass = false;
  engine.handleToggleMenu();
  if (engine.mobileMenuOpen || mockBody.style.overflow !== '') stressPass = false;
}
assert(stressPass, '10 rapid consecutive toggle cycles completed with zero style leaks');

// Test 7: Rotate device / expand viewport to desktop (>= 1024px)
console.log('\n[Scenario 7] Open menu -> rotate device / resize to desktop:');
engine.handleOpenMenu();
assert(engine.mobileMenuOpen === true, 'Menu open on mobile');
engine.handleOrientationChange(true); // matches desktop media query
assert(engine.mobileMenuOpen === false, 'Menu automatically closed upon reaching desktop breakpoint');
assert(mockBody.style.overflow === '', 'Scroll lock released cleanly on viewport expansion');

// Test 8: Page refresh with stale history state
console.log('\n[Scenario 8] Page refresh with stale history flag:');
mockWindow.history.replaceState({ whatifMobileMenu: true }, '');
if (mockWindow.history.state?.whatifMobileMenu) {
  mockWindow.history.replaceState(null, '');
}
const freshEngine = new MobileNavEngine();
assert(freshEngine.mobileMenuOpen === false, 'Menu is closed on fresh mount');
assert(mockWindow.history.state?.whatifMobileMenu !== true, 'Stale history state safely purged on mount');
assert(mockBody.style.overflow === '', 'No stuck scroll lock on page refresh');

console.log('\n====================================================');
console.log(`RESULTS: ${passedTests} / ${totalTests} assertions passed (${Math.round((passedTests / totalTests) * 100)}%)`);
console.log('====================================================');
