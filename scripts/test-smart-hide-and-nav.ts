import fs from 'fs';
import path from 'path';

console.log('=== TEST 1: Watermark Text Removal Verification ===');
const studioPagePath = path.resolve('src/app/studio/page.tsx');
const shareModalPath = path.resolve('src/components/share/ShareStudioModal.tsx');

const studioContent = fs.readFileSync(studioPagePath, 'utf8');
const modalContent = fs.readFileSync(shareModalPath, 'utf8');

if (studioContent.includes('Watermark Oficial Inclus')) {
  throw new Error('studio/page.tsx still contains "Watermark Oficial Inclus"!');
}
if (studioContent.includes('La descărcare, imaginea include automat watermark')) {
  throw new Error('studio/page.tsx still contains watermark explanation disclaimer!');
}
if (modalContent.includes('Include watermark permanent oficial')) {
  throw new Error('ShareStudioModal.tsx still contains "Include watermark permanent oficial"!');
}
console.log('✓ All client-facing watermark texts removed from Studio page and ShareStudioModal.');

console.log('\n=== TEST 2: Canvas Generator Watermark Preservation ===');
const generatorPath = path.resolve('src/lib/canvasStoryGenerator.ts');
const generatorContent = fs.readFileSync(generatorPath, 'utf8');
if (!generatorContent.includes('whatifinsurance.cristianvaduva.com')) {
  throw new Error('Canvas generator branding domain is missing from footer!');
}
if (!generatorContent.includes('WHAT IF INSURANCE')) {
  throw new Error('Official canvas brand name missing from generator!');
}
console.log('✓ Actual image protection and footer watermark in canvas generator remain 100% intact.');

console.log('\n=== TEST 3: Mobile Bottom Navigation Architecture ===');
const navPath = path.resolve('src/components/layout/MobileBottomNav.tsx');
const navContent = fs.readFileSync(navPath, 'utf8');

const requiredRoutes = ['/', '/scenarii', '/quiz', '/verificare-polita', '/contact'];
for (const r of requiredRoutes) {
  if (!navContent.includes(`'${r}'`)) {
    throw new Error(`MobileBottomNav missing destination: ${r}`);
  }
}
if (!navContent.includes('safe-area-inset-bottom')) {
  throw new Error('MobileBottomNav does not handle safe-area-inset-bottom!');
}
if (!navContent.includes('lg:hidden')) {
  throw new Error('MobileBottomNav must be mobile-only (lg:hidden)!');
}
console.log('✓ MobileBottomNav contains 5 essential destinations, handles safe-area, and is mobile-only.');

console.log('\n=== TEST 4: Smart Hide Hook & Trigger Coordination ===');
const hookPath = path.resolve('src/hooks/useSmartScroll.ts');
const hookContent = fs.readFileSync(hookPath, 'utf8');

if (!hookContent.includes('requestAnimationFrame')) {
  throw new Error('useSmartScroll is missing requestAnimationFrame throttling!');
}
if (!hookContent.includes('disableWhen')) {
  throw new Error('useSmartScroll must support disableWhen for menus/modals!');
}

const navbarPath = path.resolve('src/components/layout/Navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf8');
if (!navbarContent.includes('useSmartScroll')) {
  throw new Error('Navbar is not connected to useSmartScroll!');
}
if (!navbarContent.includes('-translate-y-full')) {
  throw new Error('Navbar does not have -translate-y-full slide-out class!');
}

const ctaPath = path.resolve('src/components/lead/PersistentQuoteCTA.tsx');
const ctaContent = fs.readFileSync(ctaPath, 'utf8');
if (!ctaContent.includes('useSmartScroll')) {
  throw new Error('PersistentQuoteCTA is not connected to useSmartScroll!');
}
if (!ctaContent.includes('translate-y-32') && !ctaContent.includes('translate-y-24') && !ctaContent.includes('translate-y-20')) {
  throw new Error('PersistentQuoteCTA does not have translate-y hide class!');
}
if (!ctaContent.includes('bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))]')) {
  throw new Error('PersistentQuoteCTA does not have mobile bottom navigation offset!');
}
console.log('✓ Navbar and PersistentQuoteCTA both use consistent smart scroll and mobile safe offsets.');

console.log('\n=== TEST 5: Layout Spacing Verification ===');
const layoutPath = path.resolve('src/app/layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf8');

if (!layoutContent.includes('MobileBottomNav')) {
  throw new Error('RootLayout does not render MobileBottomNav!');
}
if (!layoutContent.includes('pb-20 lg:pb-0') && !layoutContent.includes('pb-24 lg:pb-0')) {
  throw new Error('RootLayout main does not have mobile bottom padding offset!');
}
console.log('✓ RootLayout correctly incorporates MobileBottomNav and reserves bottom padding for mobile content.');

console.log('\n=== ALL SMART HIDE & NAVIGATION TESTS PASSED ===');
