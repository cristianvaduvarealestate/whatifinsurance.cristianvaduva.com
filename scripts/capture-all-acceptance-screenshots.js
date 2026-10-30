const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const artifactDir = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/3f94af97-f498-488a-8787-9e65dc945559/screenshots';

async function getWsUrl(port) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await new Promise((resolve) => {
        const req = http.get(`http://127.0.0.1:${port}/json/list`, (r) => {
          let data = '';
          r.on('data', (c) => (data += c));
          r.on('end', () => {
            try {
              resolve(JSON.parse(data));
            } catch {
              resolve(null);
            }
          });
          r.on('error', () => resolve(null));
        });
        req.on('error', () => resolve(null));
      });
      if (res && res.length > 0 && res[0].webSocketDebuggerUrl) {
        return res[0].webSocketDebuggerUrl;
      }
    } catch (e) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error('Could not connect to Chrome debugging port');
}

async function run() {
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--window-size=1440,950',
    '--user-data-dir=/tmp/chrome-acceptance-profile',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ]);

  try {
    const wsUrl = await getWsUrl(9224);
    const ws = new globalThis.WebSocket(wsUrl);

    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timeout = setTimeout(() => {
          ws.removeEventListener('message', handler);
          reject(new Error(`CDP command ${method} timed out`));
        }, 20000);

        const handler = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === id) {
            clearTimeout(timeout);
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

    async function captureViewportScreenshot(filename, width = 1440, height = 950, isMobile = false) {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 2,
        mobile: isMobile,
      });
      await new Promise((r) => setTimeout(r, 800));

      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(artifactDir, filename);
      fs.writeFileSync(filePath, screenshot.data, 'base64');
      console.log(`📸 Saved Screenshot: ${filePath} (${Math.round((screenshot.data.length * 0.75) / 1024)} KB)`);
    }

    async function extractCanvasPng(filename) {
      let res = null;
      for (let attempt = 0; attempt < 35; attempt++) {
        const evalRes = await send('Runtime.evaluate', {
          expression: `(() => {
            const canvas = document.querySelector('canvas');
            if (!canvas || canvas.width === 0) return null;
            return {
              width: canvas.width,
              height: canvas.height,
              dataUrl: canvas.toDataURL('image/png', 1.0),
            };
          })()`,
          returnByValue: true,
        });
        res = evalRes.result?.value;
        if (res && res.width > 0) break;
        await new Promise((r) => setTimeout(r, 250));
      }

      if (!res) throw new Error(`Could not extract canvas for ${filename}`);

      const base64Data = res.dataUrl.replace(/^data:image\/png;base64,/, '');
      const filePath = path.join(artifactDir, filename);
      fs.writeFileSync(filePath, base64Data, 'base64');
      console.log(`🖼️ Saved Canvas Export: ${filePath} [${res.width}x${res.height}] (${Math.round((base64Data.length * 0.75) / 1024)} KB)`);
    }

    // ==========================================
    // 1. Studio Desktop (1440x900)
    // ==========================================
    console.log('\n--- 1. Capturing Studio Desktop ---');
    await send('Page.navigate', { url: 'http://localhost:3006/studio' });
    await new Promise((r) => setTimeout(r, 2500));
    await captureViewportScreenshot('1_studio_desktop.png', 1440, 900, false);

    // ==========================================
    // 2. Studio Mobile (375x812)
    // ==========================================
    console.log('\n--- 2. Capturing Studio Mobile ---');
    await captureViewportScreenshot('2_studio_mobile.png', 375, 812, true);

    // Reset viewport to desktop
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await new Promise((r) => setTimeout(r, 600));

    // ==========================================
    // 3. Supported Export Formats (Story, Feed, Square)
    // ==========================================
    console.log('\n--- 3. Capturing Story 9:16 Canvas Export ---');
    // Ensure Story is selected
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const storyBtn = btns.find(b => b.textContent?.includes('Story') || b.textContent?.includes('9:16'));
        if (storyBtn) storyBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1200));
    await extractCanvasPng('3a_export_story_9_16.png');

    console.log('\n--- 3b. Capturing Feed 4:5 Canvas Export ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const feedBtn = btns.find(b => b.textContent?.includes('Feed') || b.textContent?.includes('4:5') || b.textContent?.includes('Portret'));
        if (feedBtn) feedBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1200));
    await extractCanvasPng('3b_export_feed_4_5.png');

    console.log('\n--- 3c. Capturing Square 1:1 Canvas Export ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const sqBtn = btns.find(b => b.textContent?.includes('Pătrat') || b.textContent?.includes('1:1') || b.textContent?.includes('Square'));
        if (sqBtn) sqBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1200));
    await extractCanvasPng('3c_export_square_1_1.png');

    // Switch back to Story format for concept gallery captures
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const storyBtn = btns.find(b => b.textContent?.includes('Story') || b.textContent?.includes('9:16'));
        if (storyBtn) storyBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 800));

    // Capture each of the 8 Editorial Concepts
    const conceptsToCapture = [
      { name: 'export_concept_1_hidden_detail.png', conceptId: 'hidden_detail', cardId: 'hd-locuinta-vacanta', label: 'Detaliul Ascuns' },
      { name: 'export_concept_2_myth_vs_fact.png', conceptId: 'myth_vs_fact', cardId: 'mf-pad-vecini', label: 'Mit vs Realitate' },
      { name: 'export_concept_3_what_would_you_do.png', conceptId: 'what_would_you_do', cardId: 'ww-showroom-ecran', label: 'Ce Ai Face?' },
      { name: 'export_concept_4_fine_print.png', conceptId: 'fine_print', cardId: 'fp-sublimita-ceas', label: 'Clauza Scrisă Mărunt' },
      { name: 'export_concept_5_two_policies.png', conceptId: 'two_policies', cardId: 'tp-conducta-perete', label: 'Două Polițe, O Diferență' },
      { name: 'export_concept_6_did_you_know.png', conceptId: 'did_you_know', cardId: 'dyk-bagaj-retur', label: 'Știai Că?' },
      { name: 'export_concept_7_check_policy.png', conceptId: 'check_policy', cardId: 'cp-auto-casco', label: 'Verifică-ți Polița' },
      { name: 'export_concept_8_challenge_friend.png', conceptId: 'challenge_friend', cardId: 'cf-pasaj-inundat', label: 'Surprinde-ți prietenii' },
    ];

    for (const concept of conceptsToCapture) {
      console.log(`\n--- Capturing Concept: ${concept.label} (${concept.name}) ---`);
      await send('Runtime.evaluate', {
        expression: `(() => {
          const btn = document.querySelector('[data-concept-id="${concept.conceptId}"]') ||
                      document.querySelector('[data-card-id="${concept.cardId}"]');
          if (btn) {
            btn.click();
          }
        })()`,
      });
      await new Promise((r) => setTimeout(r, 2200));
      await extractCanvasPng(concept.name);
    }

    // ==========================================
    // 4. Frozen/burst pipe scenario (/scenarii/casa/teava-inghetata-iarna)
    // ==========================================
    console.log('\n--- 4. Capturing Frozen/Burst Pipe Scenario ---');
    await send('Page.navigate', { url: 'http://localhost:3006/scenarii/casa/teava-inghetata-iarna' });
    await new Promise((r) => setTimeout(r, 2500));
    await captureViewportScreenshot('4_frozen_burst_pipe_scenario.png', 1440, 900, false);

    // ==========================================
    // 5. Dishwasher leak scenario (/scenarii/casa/masina-spalat-vase-scurgere)
    // ==========================================
    console.log('\n--- 5. Capturing Dishwasher Leak Scenario ---');
    await send('Page.navigate', { url: 'http://localhost:3006/scenarii/casa/masina-spalat-vase-scurgere' });
    await new Promise((r) => setTimeout(r, 2500));
    await captureViewportScreenshot('5_dishwasher_leak_scenario.png', 1440, 900, false);

    // ==========================================
    // 6. Homepage burst-pipe feature
    // ==========================================
    console.log('\n--- 6. Capturing Homepage Burst Pipe Feature ---');
    await send('Page.navigate', { url: 'http://localhost:3006' });
    await new Promise((r) => setTimeout(r, 2500));
    // Scroll to the burst-pipe feature
    await send('Runtime.evaluate', {
      expression: `(() => {
        const el = Array.from(document.querySelectorAll('h2')).find(h => h.textContent?.includes('30 de zile în vacanță'));
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1000));
    await captureViewportScreenshot('6_homepage_burst_pipe_feature.png', 1440, 850, false);

    // ==========================================
    // 7. Mobile Header (375x812)
    // ==========================================
    console.log('\n--- 7. Capturing Mobile Header ---');
    await send('Page.navigate', { url: 'http://localhost:3006' });
    await new Promise((r) => setTimeout(r, 2000));
    // Open mobile menu
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await new Promise((r) => setTimeout(r, 500));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const menuBtn = document.querySelector('button[aria-label*="meniul"]');
        if (menuBtn) menuBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 800));
    await captureViewportScreenshot('7_mobile_header.png', 375, 812, true);

    // ==========================================
    // 8. Insurance-versus-no-insurance comparison
    // ==========================================
    console.log('\n--- 8. Capturing Insurance vs No-Insurance Comparison ---');
    await send('Page.navigate', { url: 'http://localhost:3006/scenarii/casa/teava-inghetata-iarna' });
    await new Promise((r) => setTimeout(r, 2500));
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await new Promise((r) => setTimeout(r, 600));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const el = Array.from(document.querySelectorAll('h3')).find(h => h.textContent?.includes('Ce se schimbă'));
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      })()`,
    });
    await new Promise((r) => setTimeout(r, 800));
    await captureViewportScreenshot('8_insurance_vs_no_insurance_comparison.png', 1440, 900, false);

    // ==========================================
    // 9. Ghid Generali Page
    // ==========================================
    console.log('\n--- 9. Capturing Ghid Generali Page ---');
    await send('Page.navigate', { url: 'http://localhost:3006/ghid-generali' });
    await new Promise((r) => setTimeout(r, 2500));
    await captureViewportScreenshot('9_ghid_generali_page.png', 1440, 900, false);

    // ==========================================
    // 10. Ghid Generali Daune Tab
    // ==========================================
    console.log('\n--- 10. Capturing Ghid Generali Daune Tab ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const dauneBtn = btns.find(b => b.textContent?.includes('Ghid Notificare Daune'));
        if (dauneBtn) {
          dauneBtn.click();
          window.scrollBy({ top: 350, behavior: 'instant' });
        }
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1200));
    await captureViewportScreenshot('10_ghid_generali_daune_tab.png', 1440, 900, false);

    console.log('\n🎉 All acceptance screenshots and canvas exports captured successfully!');
  } finally {
    chrome.kill();
  }
}

run().catch((err) => {
  console.error('Fatal error during acceptance capture:', err);
  process.exit(1);
});
