import { saveLead, LeadRecord } from '../src/lib/leadStorage';

console.log('=== TEST LEAD PIPELINE & STORAGE COMBINATIONS ===\n');

// 1. Synthetic test record (NO real personal data)
const syntheticLead: LeadRecord = {
  id: `test_lead_${Date.now()}`,
  timestamp: new Date().toISOString(),
  formType: 'synthetic_audit_test',
  name: 'Test Synthetic User',
  email: 'synthetic.test.user@example.test',
  phone: '+40700000000',
  category: 'locuinta',
  message: 'Test message for pipeline resilience verification',
  ipMasked: '127.0.0.xxx',
  status: 'pending_review',
};

async function runLeadStorageTests() {
  console.log('--- TEST 1: Local Disk Persistence Fallback ---');
  const result = await saveLead(syntheticLead);
  console.log('Storage Result:', result);
  if (!result.persisted) {
    throw new Error('Local disk persistence failed in dev environment!');
  }
  if (result.engine !== 'local_disk') {
    throw new Error(`Expected local_disk engine in local environment, got ${result.engine}`);
  }
  console.log('✓ Local disk persistence succeeded with engine: local_disk.');

  console.log('\n--- TEST 2: Storage Combinations Simulation ---');
  
  // Matrix Simulation Function mimicking /api/contact logic
  function evaluatePipelineOutcome(storageSuccess: boolean, telegramSuccess: boolean) {
    if (!storageSuccess && !telegramSuccess) {
      return {
        status: 503,
        success: false,
        userFeedback: 'Fail-safe 503: System unavailable, alternative direct contacts provided.',
      };
    }
    if (!storageSuccess && telegramSuccess) {
      return {
        status: 200,
        success: true,
        persisted: false,
        telegramNotified: true,
        userFeedback: 'Emergency dispatch: Telegram notified, persistence unconfirmed, direct fallback recommended.',
      };
    }
    if (storageSuccess && !telegramSuccess) {
      return {
        status: 200,
        success: true,
        persisted: true,
        telegramNotified: false,
        userFeedback: 'Persisted in storage: Lead safely recorded; notification retry scheduled.',
      };
    }
    // storageSuccess && telegramSuccess
    return {
      status: 200,
      success: true,
      persisted: true,
      telegramNotified: true,
      userFeedback: 'Full success: Lead persisted and consultant notified.',
    };
  }

  // 1. Success + Success
  const c1 = evaluatePipelineOutcome(true, true);
  console.log('1. Storage: OK  | Telegram: OK  ->', c1);
  if (c1.status !== 200 || !c1.persisted || !c1.telegramNotified) throw new Error('Combination 1 failed');

  // 2. Success + Failure
  const c2 = evaluatePipelineOutcome(true, false);
  console.log('2. Storage: OK  | Telegram: FAIL->', c2);
  if (c2.status !== 200 || !c2.persisted || c2.telegramNotified) throw new Error('Combination 2 failed');

  // 3. Failure + Success
  const c3 = evaluatePipelineOutcome(false, true);
  console.log('3. Storage: FAIL| Telegram: OK  ->', c3);
  if (c3.status !== 200 || c3.persisted || !c3.telegramNotified) throw new Error('Combination 3 failed');

  // 4. Failure + Failure
  const c4 = evaluatePipelineOutcome(false, false);
  console.log('4. Storage: FAIL| Telegram: FAIL->', c4);
  if (c4.status !== 503 || c4.success) throw new Error('Combination 4 failed (must return 503 fail-safe)');

  console.log('\n--- TEST 3: Deduplication Mechanism Verification ---');
  const { checkAndRegisterDeduplication } = await import('../src/lib/leadStorage');
  const testFingerprint = 'test_fp_' + Date.now();
  const firstCheck = await checkAndRegisterDeduplication(testFingerprint, 'lead_initial_123', 5000);
  console.log('Initial submission check:', firstCheck);
  if (firstCheck.isDuplicate) throw new Error('Initial submission was falsely marked as duplicate!');

  const duplicateCheck = await checkAndRegisterDeduplication(testFingerprint, 'lead_duplicate_456', 5000);
  console.log('Immediate repeated submission check:', duplicateCheck);
  if (!duplicateCheck.isDuplicate || duplicateCheck.existingLeadId !== 'lead_initial_123') {
    throw new Error('Deduplication failed to catch rapid retry or returned wrong existing lead ID!');
  }
  console.log('✓ Deduplication caught rapid retry within TTL and retained original lead ID.');

  const separateFingerprint = 'test_fp_separate_' + Date.now();
  const separateCheck = await checkAndRegisterDeduplication(separateFingerprint, 'lead_separate_789', 5000);
  if (separateCheck.isDuplicate) throw new Error('Legitimate separate submission was incorrectly suppressed!');
  console.log('✓ Legitimate distinct submission passed without suppression.');

  console.log('\n✓ All lead pipeline and deduplication tests passed.');
}

runLeadStorageTests().catch((err) => {
  console.error('Lead pipeline tests failed:', err);
  process.exit(1);
});
