const { spawn } = require('child_process');
const http = require('http');

async function getWsUrl(port) {
  for (let i = 0; i < 20; i++) {
    try {
      const res = await new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${port}/json/list`, (r) => {
          let data = '';
          r.on('data', (c) => (data += c));
          r.on('end', () => resolve(JSON.parse(data)));
          r.on('error', reject);
        });
      });
      if (res && res.length > 0 && res[0].webSocketDebuggerUrl) {
        return res[0].webSocketDebuggerUrl;
      }
    } catch (e) {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  throw new Error('Could not connect to Chrome debugging port');
}

async function testScenario(send, viewportName, { width, height, mobile }) {
  console.log(`\n======================================================`);
  console.log(`TEST SUITE: ${viewportName} (${width}x${height}, mobile: ${mobile})`);
  console.log(`======================================================`);

  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 2,
    mobile,
  });

  await send('Page.navigate', { url: 'http://localhost:3005' });
  await new Promise((r) => setTimeout(r, 1500));
  await send('Page.captureScreenshot');

  const checkState = async (label) => {
    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const header = document.querySelector('header');
        const ctaBtn = document.querySelector('button[aria-label*="Ce vrei să-ți asiguri"]');
        const cta = ctaBtn?.parentElement;
        const bottomNav = document.querySelector('nav[aria-label="Navigare rapidă mobilă"]');

        const headerRect = header?.getBoundingClientRect();
        const ctaRect = cta?.getBoundingClientRect();
        const bottomNavRect = bottomNav?.getBoundingClientRect();

        return {
          scrollY: Math.round(window.scrollY),
          header: {
            className: header?.className,
            isHidden: header?.className.includes('-translate-y-full'),
            isVisible: header?.className.includes('translate-y-0'),
            top: Math.round(headerRect?.top || 0),
            height: Math.round(headerRect?.height || 0),
          },
          cta: {
            className: cta?.className,
            isHidden: cta?.className.includes('opacity-0') && cta?.className.includes('pointer-events-none'),
            isVisible: cta?.className.includes('opacity-100') && cta?.className.includes('pointer-events-auto'),
            top: Math.round(ctaRect?.top || 0),
            bottom: Math.round(ctaRect?.bottom || 0),
          },
          bottomNav: bottomNav ? {
            visible: bottomNavRect && bottomNavRect.height > 0,
            top: Math.round(bottomNavRect?.top || 0),
          } : null,
        };
      })()`,
      returnByValue: true,
    });
    console.log(`\n--- ${label} ---`);
    console.log(`scrollY: ${res.result.value.scrollY}`);
    console.log(`Header: ${res.result.value.header.isVisible ? 'VISIBLE (translate-y-0)' : 'HIDDEN (-translate-y-full)'} [top: ${res.result.value.header.top}px, height: ${res.result.value.header.height}px]`);
    console.log(`CTA:    ${res.result.value.cta.isVisible ? 'VISIBLE (opacity-100)' : 'HIDDEN (opacity-0, pointer-events-none)'} [top: ${res.result.value.cta.top}px, bottom: ${res.result.value.cta.bottom}px]`);
    if (res.result.value.bottomNav) {
      console.log(`BottomNav: VISIBLE [top: ${res.result.value.bottomNav.top}px]`);
    }
    return res.result.value;
  };

  // 1. Initial State
  const s1 = await checkState('1. INITIAL STATE (Scroll = 0)');
  if (!s1.header.isVisible || !s1.cta.isVisible) {
    throw new Error('Initial state failed: header or CTA not visible');
  }

  // 2. Scroll Down by 500px
  await send('Runtime.evaluate', {
    expression: `(() => {
      window.scrollTo({ top: 500, behavior: 'instant' });
    })()`,
  });
  await send('Page.captureScreenshot');
  await new Promise((r) => setTimeout(r, 400));
  const s2 = await checkState('2. AFTER SCROLL DOWN (Scroll = 500)');
  if (!s2.header.isHidden || !s2.cta.isHidden) {
    throw new Error('Scroll down failed: header or CTA not hidden');
  }

  // 3. Scroll Up by 150px (to 350px)
  await send('Runtime.evaluate', {
    expression: `(() => {
      window.scrollTo({ top: 350, behavior: 'instant' });
    })()`,
  });
  await send('Page.captureScreenshot');
  await new Promise((r) => setTimeout(r, 400));
  const s3 = await checkState('3. AFTER SCROLL UP (Scroll = 350)');
  if (!s3.header.isVisible || !s3.cta.isVisible) {
    throw new Error('Scroll up failed: header or CTA not revealed');
  }

  // 4. Return to Top (Scroll = 0)
  await send('Runtime.evaluate', {
    expression: `(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    })()`,
  });
  await send('Page.captureScreenshot');
  await new Promise((r) => setTimeout(r, 400));
  const s4 = await checkState('4. RETURN TO TOP (Scroll = 0)');
  if (!s4.header.isVisible || !s4.cta.isVisible) {
    throw new Error('Return to top failed: header or CTA not visible at top');
  }

  console.log(`\n>>> SUCCESS: ${viewportName} passed all 4 Smart Hide transition tests!`);
}

async function run() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--window-size=1280,800',
    '--user-data-dir=/tmp/chrome-test-profile',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ]);

  try {
    const wsUrl = await getWsUrl(9222);
    const ws = new globalThis.WebSocket(wsUrl);

    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === id) {
            ws.removeEventListener('message', handler);
            resolve(msg.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    // Run Desktop tests
    await testScenario(send, 'DESKTOP VIEWPORT', {
      width: 1280,
      height: 800,
      mobile: false,
    });

    // Run Mobile tests
    await testScenario(send, 'MOBILE VIEWPORT (iPhone 14 / iOS)', {
      width: 390,
      height: 844,
      mobile: true,
    });

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch((e) => {
  console.error('\nTest failed with error:', e);
  process.exit(1);
});
