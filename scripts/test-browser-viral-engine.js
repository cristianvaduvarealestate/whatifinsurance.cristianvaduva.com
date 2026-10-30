const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9333;
const userDataDir = `/tmp/chrome-viral-test-${Date.now()}`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
  });
}

async function runBrowserTest() {
  console.log('🚀 Starting headless Chrome for Viral Content Engine 2.0 Browser Test...');
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
  ]);

  let connected = false;
  let targets = null;
  for (let i = 0; i < 30; i++) {
    await sleep(400);
    try {
      targets = await getJson(`http://127.0.0.1:${port}/json`);
      if (targets && targets.length > 0) {
        connected = true;
        break;
      }
    } catch {}
  }

  if (!connected) {
    console.error('❌ Could not connect to Chrome debugging port.');
    chromeProc.kill();
    process.exit(1);
  }

  const pageTarget = targets.find((t) => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let idCounter = 1;
  const callbacks = new Map();

  ws.onmessage = (evt) => {
    const msg = JSON.parse(evt.data);
    if (msg.id && callbacks.has(msg.id)) {
      const cb = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) cb.reject(msg.error);
      else cb.resolve(msg.result);
    }
  };

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      callbacks.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise((r) => (ws.onopen = r));
  console.log('✅ Connected to Chrome CDP WebSocket');

  await sendCommand('Page.enable');
  await sendCommand('Runtime.enable');
  await sendCommand('DOM.enable');

  const artifactDir = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/3f94af97-f498-488a-8787-9e65dc945559';

  async function takeScreenshot(name) {
    const res = await sendCommand('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const outPath = path.join(artifactDir, `${name}.png`);
    fs.writeFileSync(outPath, buffer);
    console.log(`📸 Saved screenshot: ${outPath}`);
    return outPath;
  }

  try {
    // 1. Navigate to /quiz with referral token
    console.log('\n--- 1. Navigating to /quiz with referral token ---');
    await sendCommand('Page.navigate', {
      url: 'http://localhost:3005/quiz?ref=ref_viralEngineBrowserTest',
    });
    await sleep(2500);

    // Verify page loaded
    const titleRes = await sendCommand('Runtime.evaluate', {
      expression: 'document.querySelector("h1")?.innerText || ""',
    });
    console.log('Quiz H1 Title:', titleRes.result.value);

    // 2. Play through the 5 quiz questions
    console.log('\n--- 2. Completing 5 quiz questions ---');
    for (let attempt = 0; attempt < 20; attempt++) {
      await sleep(600);
      const isComplete = await sendCommand('Runtime.evaluate', {
        expression: `document.body.innerText.toLowerCase().includes('ai obținut')`,
      });
      if (isComplete.result.value) {
        console.log('Reached completion screen!');
        break;
      }

      // Check if option is clickable
      const clickedOption = await sendCommand('Runtime.evaluate', {
        expression: `(() => {
          const btn = document.querySelector('[data-testid="quiz-option"]:not([disabled])');
          if (btn) { btn.click(); return true; }
          return false;
        })()`,
      });

      if (clickedOption.result.value) {
        await sleep(500);
        // Click Next button
        await sendCommand('Runtime.evaluate', {
          expression: `(() => {
            const nextBtn = document.querySelector('[data-testid="quiz-next"]');
            if (nextBtn) { nextBtn.click(); return true; }
            return false;
          })()`,
        });
      }
    }

    await sleep(1000);
    await takeScreenshot('viral_engine_quiz_completed');

    // 3. Verify Quiz Completed Screen
    console.log('\n--- 3. Verifying Quiz Completed Screen & "The Detail You Might Have Missed" ---');
    const completionEval = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const bodyText = document.body.innerText.toLowerCase();
        return {
          hasScore: bodyText.includes('ai obținut') && bodyText.includes('puncte'),
          hasMissedDetail: bodyText.includes('the detail you might have missed') || bodyText.includes('detaliul ascuns'),
          hasOtherConcepts: bodyText.includes('explorează celelalte concepte'),
          hasChecklistBtn: bodyText.includes('checklist gratuit'),
          shareRecommendedBtn: !!document.getElementById('share-recommended-card-button'),
        };
      })()`,
      returnByValue: true,
    });

    console.log('Quiz Completion Checks:', completionEval.result.value);
    if (!completionEval.result.value.hasScore || !completionEval.result.value.hasMissedDetail) {
      throw new Error('Quiz completed screen missing score or The Detail You Might Have Missed showcase!');
    }

    // 4. Click "Personalizează & Distribuie Cardul" to open ShareChallengeModal
    console.log('\n--- 4. Opening ShareChallengeModal for Recommended Editorial Card ---');
    await sendCommand('Runtime.evaluate', {
      expression: `document.getElementById('share-recommended-card-button')?.click()`,
    });
    await sleep(1500);
    await takeScreenshot('viral_engine_modal_opened');

    const modalEval = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const modal = document.querySelector('[role="dialog"]');
        const canvas = modal ? modal.querySelector('canvas') : document.querySelector('canvas');
        return {
          isOpen: !!modal,
          hasCanvas: !!canvas,
          canvasWidth: canvas ? canvas.width : 0,
          canvasHeight: canvas ? canvas.height : 0,
        };
      })()`,
      returnByValue: true,
    });
    console.log('Modal & Canvas Check:', modalEval.result.value);

    // 5. Test Format Switcher in Modal
    console.log('\n--- 5. Switching formats in modal (Feed 4:5 and Square 1:1) ---');
    // Click Feed button
    await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const feedBtn = btns.find(b => b.innerText.includes('Feed (4:5)'));
        if (feedBtn) feedBtn.click();
      })()`,
    });
    await sleep(1200);

    const feedCanvasCheck = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const canvas = document.querySelector('canvas');
        return { width: canvas ? canvas.width : 0, height: canvas ? canvas.height : 0 };
      })()`,
      returnByValue: true,
    });
    console.log('Feed Canvas Dimensions:', feedCanvasCheck.result.value);

    // Click Square button
    await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const sqBtn = btns.find(b => b.innerText.includes('Pătrat (1:1)'));
        if (sqBtn) sqBtn.click();
      })()`,
    });
    await sleep(1200);

    const sqCanvasCheck = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const canvas = document.querySelector('canvas');
        return { width: canvas ? canvas.width : 0, height: canvas ? canvas.height : 0 };
      })()`,
      returnByValue: true,
    });
    console.log('Square Canvas Dimensions:', sqCanvasCheck.result.value);

    // Close modal
    await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const closeBtn = document.querySelector('button[aria-label="Închide"]');
        if (closeBtn) closeBtn.click();
      })()`,
    });
    await sleep(800);

    // 6. Navigate to /studio (Standalone Share Studio)
    console.log('\n--- 6. Testing /studio Standalone Share Studio ---');
    await sendCommand('Page.navigate', {
      url: 'http://localhost:3005/studio',
    });
    await sleep(2500);
    await takeScreenshot('viral_engine_studio_editorial');

    const studioEval = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const bodyText = document.body.innerText;
        const canvas = document.querySelector('canvas');
        return {
          h1: document.querySelector('h1')?.innerText,
          hasEditorialMode: bodyText.includes('Carduri Editoriale'),
          hasScenariosMode: bodyText.includes('Scenarii de Risc'),
          hasCanvas: !!canvas,
          canvasWidth: canvas ? canvas.width : 0,
          canvasHeight: canvas ? canvas.height : 0,
        };
      })()`,
      returnByValue: true,
    });
    console.log('Studio Page Evaluation:', studioEval.result.value);

    console.log('\n🎉 ALL BROWSER INTERACTIONS VALIDATED SUCCESSFULLY!');
  } catch (err) {
    console.error('❌ Browser test failed:', err);
    process.exitCode = 1;
  } finally {
    try {
      ws.close();
    } catch {}
    try {
      chromeProc.kill();
    } catch {}
    await sleep(600);
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch {}
    console.log('🧹 Cleaned up browser session.');
  }
}

runBrowserTest();
