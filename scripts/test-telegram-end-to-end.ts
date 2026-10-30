import { sendTelegramLeadNotification, sendTelegramOperationalAlert, LeadNotificationPayload } from '../src/lib/telegramNotifier';

console.log('=== TEST TELEGRAM LEAD NOTIFICATIONS & OPERATIONAL ALERTS ===\n');

async function runTelegramTests() {
  // Test 1: Missing credentials handling
  console.log('--- TEST 1: Missing Credentials Graceful Handling ---');
  const sampleLead: LeadNotificationPayload = {
    id: `lead_test_${Date.now()}_abc1`,
    timestamp: new Date().toISOString(),
    formType: 'oferta',
    name: 'Ion Popescu <script>alert(1)</script>',
    email: 'ion.popescu@test.local',
    phone: '+40712345678',
    category: 'auto',
    scenarioTitle: 'Avarii grindină & caroserie',
    sourcePage: '/scenarii/auto/grindina-plafon',
    referralToken: 'ref_sample123',
    message: 'Test message with & special characters > and <',
  };

  const initialResult = await sendTelegramLeadNotification(sampleLead);
  console.log('Result without env vars:', initialResult);

  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    if (initialResult.success !== false || initialResult.reason !== 'credentials_not_configured') {
      throw new Error(`Expected credentials_not_configured, got ${JSON.stringify(initialResult)}`);
    }
    console.log('✓ Successfully detected missing credentials without throwing exception or failing lead.');
  }

  // Test 2: In-memory Deduplication
  console.log('\n--- TEST 2: In-Memory Deduplication Guard ---');
  // Temporarily mock credentials in memory to test deduplication logic
  process.env.TELEGRAM_BOT_TOKEN = 'test_token_mock';
  process.env.TELEGRAM_CHAT_ID = 'test_chat_mock';

  // Mock global fetch to intercept and test formatting
  let interceptedPayload: any = null;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    if (typeof url === 'string' && url.includes('api.telegram.org')) {
      interceptedPayload = JSON.parse(init?.body as string);
      return {
        ok: true,
        json: async () => ({ ok: true, result: { message_id: 12345 } }),
      } as any;
    }
    return originalFetch(url, init);
  }) as typeof fetch;

  try {
    const dispatch1 = await sendTelegramLeadNotification(sampleLead);
    console.log('First dispatch result:', dispatch1);
    if (!dispatch1.success) {
      throw new Error('First dispatch should succeed with mocked fetch');
    }

    // Verify HTML escaping and formatting in intercepted payload
    console.log('Intercepted Telegram Text:\n', interceptedPayload?.text);
    if (!interceptedPayload?.text.includes('&lt;script&gt;alert(1)&lt;/script&gt;')) {
      throw new Error('HTML injection was not properly escaped!');
    }
    if (!interceptedPayload?.text.includes('&amp; special characters &gt; and &lt;')) {
      throw new Error('Message special characters were not escaped!');
    }
    if (!interceptedPayload?.text.includes('📍 Pagină Sursă:')) {
      throw new Error('Source page was not rendered in notification!');
    }
    console.log('✓ HTML escaping and source page inclusion confirmed.');

    // Immediate second dispatch with same lead ID must be deduplicated
    const dispatch2 = await sendTelegramLeadNotification(sampleLead);
    console.log('Second dispatch result (duplicate):', dispatch2);
    if (!dispatch2.success || dispatch2.reason !== 'duplicate_prevented') {
      throw new Error(`Expected duplicate_prevented, got ${JSON.stringify(dispatch2)}`);
    }
    console.log('✓ Duplicate notification safely prevented via 10-minute cache.');

    // Test 3: Operational Monitoring Alerts
    console.log('\n--- TEST 3: Privacy-Preserving Operational Monitoring Alert ---');
    let interceptedAlertPayload: any = null;
    globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
      if (typeof url === 'string' && url.includes('api.telegram.org')) {
        interceptedAlertPayload = JSON.parse(init?.body as string);
        return {
          ok: true,
          json: async () => ({ ok: true }),
        } as any;
      }
      return originalFetch(url, init);
    }) as typeof fetch;

    const alert1 = await sendTelegramOperationalAlert({
      type: 'repeated_form_failure',
      summary: 'Multiple rate limit triggers detected on /api/contact',
      metadata: {
        attemptCount: 5,
        targetEndpoint: '/api/contact',
        // Sensitive properties that MUST be scrubbed
        name: 'Should not appear',
        email: 'secret@domain.com',
        ip: '192.168.1.1',
      },
    });

    console.log('Operational alert result:', alert1);
    if (!alert1.success) {
      throw new Error('Operational alert should succeed with mock credentials');
    }
    console.log('Intercepted Alert Text:\n', interceptedAlertPayload?.text);

    // Verify PII is scrubbed from alert
    if (
      interceptedAlertPayload?.text.includes('Should not appear') ||
      interceptedAlertPayload?.text.includes('secret@domain.com') ||
      interceptedAlertPayload?.text.includes('192.168.1.1')
    ) {
      throw new Error('PII was not scrubbed from operational alert!');
    }
    console.log('✓ Operational alert strictly scrubbed of all PII.');

    // Test 4: Operational alert throttling (15 min)
    const alert2 = await sendTelegramOperationalAlert({
      type: 'operational_anomaly',
      summary: 'Immediate follow-up alert should be throttled',
    });
    console.log('Second operational alert result (throttled):', alert2);
    if (!alert2.success || alert2.reason !== 'throttled') {
      throw new Error(`Expected throttled, got ${JSON.stringify(alert2)}`);
    }
    console.log('✓ Operational alert throttling confirmed (15 min interval).');

  } finally {
    // Restore environment and fetch
    delete process.env.TELEGRAM_BOT_TOKEN;
    delete process.env.TELEGRAM_CHAT_ID;
    globalThis.fetch = originalFetch;
  }

  console.log('\n🎉 ALL TELEGRAM NOTIFICATION & OPERATIONAL ALERT TESTS PASSED!');
}

runTelegramTests().catch((err) => {
  console.error('Fatal error in Telegram test suite:', err);
  process.exit(1);
});
