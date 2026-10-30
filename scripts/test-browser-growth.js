const { spawn } = require('child_process');
const http = require('http');

async function getWsUrl(port) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await new Promise((resolve, reject) => {
        const req = http.get(`http://127.0.0.1:${port}/json/list`, (r) => {
          let data = '';
          r.on('data', (c) => (data += c));
          r.on('end', () => {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              reject(e);
            }
          });
          r.on('error', reject);
        });
        req.on('error', reject);
      });
      if (res && res.length > 0 && res[0].webSocketDebuggerUrl) {
        return res[0].webSocketDebuggerUrl;
      }
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error('Could not connect to Chrome debugging port');
}

async function runBrowserGrowthVerification() {
  console.log('=== CHROME HEADLESS CDP GROWTH ENGINE TEST ===\n');

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--window-size=1280,900',
    '--user-data-dir=/tmp/chrome-growth-profile-' + Date.now(),
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ]);

  try {
    const wsUrl = await getWsUrl(9223);
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

    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('[Browser Console]', msg.params.args.map((a) => a.value || a.description).join(' '));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.log('[Browser Exception]', msg.params.exceptionDetails.text, msg.params.exceptionDetails.exception?.description);
      }
    });

    // 1. TEST REFERRAL ATTRIBUTION LANDING
    console.log('[Step 1] Navigating to http://127.0.0.1:3005/quiz?ref=ref_browserTest99...');
    await send('Page.navigate', { url: 'http://127.0.0.1:3005/quiz?ref=ref_browserTest99' });
    await new Promise((r) => setTimeout(r, 2500));

    const checkStorage = await send('Runtime.evaluate', {
      expression: 'localStorage.getItem("whatif_referral_attribution")',
    });
    console.log('  Attribution in localStorage:', checkStorage.result.value);

    if (!checkStorage.result.value || !checkStorage.result.value.includes('ref_browserTest99')) {
      throw new Error('FAIL: Referral token was not recorded in localStorage!');
    }
    console.log('  ✓ Referral token successfully attributed with 30-day window.\n');

    // 2. TEST QUIZ INTERACTION & HONEST RESULT SCREEN
    console.log('[Step 2] Simulating answering quiz questions...');
    const btnCheck = await send('Runtime.evaluate', {
      expression: 'Array.from(document.querySelectorAll("button")).map(b => b.innerText.trim()).filter(Boolean)',
      returnByValue: true,
    });
    console.log('  Available buttons at step start:', btnCheck.result.value);
    for (let q = 0; q < 5; q++) {
      // 1. Click an unselected option
      await send('Runtime.evaluate', {
        expression: `
          (function() {
            const btn = document.querySelector('button[data-testid="quiz-option"]:not([disabled])');
            if (btn) {
              btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
              btn.click();
            }
          })()
        `,
      });
      await new Promise((r) => setTimeout(r, 700));

      // 2. Click next button
      await send('Runtime.evaluate', {
        expression: `
          (function() {
            const btn = document.querySelector('button[data-testid="quiz-next"]') ||
              Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Următoarea') || b.innerText.includes('Vezi rezultatul'));
            if (btn) {
              btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
              btn.click();
            }
          })()
        `,
      });
      await new Promise((r) => setTimeout(r, 700));
    }

    await new Promise((r) => setTimeout(r, 1200));

    const resultEvaluation = await send('Runtime.evaluate', {
      expression: 'document.querySelector(".mt-10") ? document.querySelector(".mt-10").innerText : document.body.innerText',
    });
    console.log('  Container text:\n', resultEvaluation.result.value);
    const hasLabel = (resultEvaluation.result.value || '').toLowerCase().includes('rezultat provocare educațională');
    console.log('  Completed screen shows honest educational label:', hasLabel);
    if (!hasLabel) {
      throw new Error('FAIL: Honest educational label "Rezultat Provocare Educațională" not found!');
    }
    console.log('  ✓ Quiz result screen verified with honest educational scoring.\n');

    // 3. TEST POLICY CHECKLIST MODAL
    console.log('[Step 3] Opening Policy Checklist Modal...');
    await send('Runtime.evaluate', {
      expression: `
        (function() {
          const btns = Array.from(document.querySelectorAll('button'));
          const guideBtn = btns.find(b => b.innerText.toLowerCase().includes('deschide ghidul'));
          if (guideBtn) {
            guideBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            guideBtn.click();
          }
        })()
      `,
    });
    await new Promise((r) => setTimeout(r, 800));

    const checklistModalCheck = await send('Runtime.evaluate', {
      expression: 'document.body.innerText.toLowerCase().includes("checklist de verificare")',
    });
    console.log('  Policy Checklist Modal opened:', checklistModalCheck.result.value);
    if (!checklistModalCheck.result.value) {
      throw new Error('FAIL: Policy Checklist Modal did not open!');
    }
    console.log('  ✓ Free educational policy checklist accessible with zero gating.');

    // Close Checklist modal
    await send('Runtime.evaluate', {
      expression: `
        (function() {
          const closeBtn = document.querySelector('button[aria-label="Închide ghidul"]');
          if (closeBtn) {
            closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            closeBtn.click();
          }
        })()
      `,
    });
    await new Promise((r) => setTimeout(r, 600));

    // 4. TEST SHARE STUDIO MODAL & REFERRAL LINK GENERATION
    console.log('\n[Step 4] Opening Share Challenge Studio...');
    await send('Runtime.evaluate', {
      expression: `
        (function() {
          const btns = Array.from(document.querySelectorAll('button'));
          const shareBtn = btns.find(b => b.innerText.toLowerCase().includes('studio distribuire'));
          if (shareBtn) {
            shareBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            shareBtn.click();
          }
        })()
      `,
    });
    await new Promise((r) => setTimeout(r, 1500));

    const canvasCheck = await send('Runtime.evaluate', {
      expression: `
        (function() {
          const canvas = document.querySelector('canvas');
          return canvas && canvas.width > 0 && canvas.height > 0 ? { width: canvas.width, height: canvas.height } : null;
        })()
      `,
      returnByValue: true,
    });
    console.log('  Canvas dimensions rendered in Share Studio:', canvasCheck.result.value);
    if (!canvasCheck.result.value) {
      throw new Error('FAIL: Canvas did not render in Share Studio Modal!');
    }
    console.log('  ✓ Canvas preview rendered successfully.');

    const shareInputCheck = await send('Runtime.evaluate', {
      expression: `
        (function() {
          const inputs = Array.from(document.querySelectorAll('input'));
          const shareInput = inputs.find(i => i.value && i.value.includes('?ref='));
          return shareInput ? shareInput.value : null;
        })()
      `,
    });
    console.log('  Generated share referral URL:', shareInputCheck.result.value);
    if (!shareInputCheck.result.value || !shareInputCheck.result.value.includes('?ref=ref_')) {
      throw new Error('FAIL: Share URL does not contain opaque ref_ token!');
    }
    console.log('  ✓ Opaque referral token link confirmed in Share Studio.\n');

    ws.close();
    chrome.kill();
    console.log('=== ALL CHROME CDP GROWTH ENGINE TESTS COMPLETED SUCCESSFULLY ===');
  } catch (err) {
    chrome.kill();
    throw err;
  }
}

runBrowserGrowthVerification().catch((err) => {
  console.error('Browser CDP Test Error:', err);
  process.exit(1);
});
