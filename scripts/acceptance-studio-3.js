const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function getWsUrl(port) {
  for (let i = 0; i < 25; i++) {
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
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error('Could not connect to Chrome debugging port');
}

async function run() {
  const artifactDir = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/3f94af97-f498-488a-8787-9e65dc945559';
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--window-size=1440,950',
    '--user-data-dir=/tmp/chrome-studio3-profile',
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
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timeout = setTimeout(() => {
          ws.removeEventListener('message', handler);
          reject(new Error(`CDP command ${method} timed out`));
        }, 15000);

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
      await new Promise((r) => setTimeout(r, 600));

      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(artifactDir, filename);
      fs.writeFileSync(filePath, screenshot.data, 'base64');
      console.log(`📸 Saved UI Screenshot: ${filename} (${Math.round((screenshot.data.length * 0.75) / 1024)} KB)`);
    }

    async function extractCanvasPng(filename) {
      let res = null;
      for (let attempt = 0; attempt < 30; attempt++) {
        const evalRes = await send('Runtime.evaluate', {
          expression: `(() => {
            const canvas = document.querySelector('canvas');
            if (!canvas || canvas.width === 0) return null;
            const ctx = canvas.getContext('2d');
            const p1 = ctx.getImageData(10, 10, 1, 1).data;
            return {
              width: canvas.width,
              height: canvas.height,
              cornerPixel: [p1[0], p1[1], p1[2], p1[3]],
              dataUrl: canvas.toDataURL('image/png', 1.0),
            };
          })()`,
          returnByValue: true,
        });
        res = evalRes.result?.value;
        if (res && res.width > 0) break;
        await new Promise((r) => setTimeout(r, 200));
      }

      if (!res) throw new Error(`Could not extract canvas for ${filename}`);

      const base64Data = res.dataUrl.replace(/^data:image\/png;base64,/, '');
      const filePath = path.join(artifactDir, filename);
      fs.writeFileSync(filePath, base64Data, 'base64');
      console.log(`🖼️ Saved Canvas Export: ${filename} [${res.width}x${res.height}] (${Math.round((base64Data.length * 0.75) / 1024)} KB)`);
    }

    // 1. Desktop Vehicle Builder
    console.log('\n--- 1. Capturing Desktop Vehicle Builder ---');
    await send('Page.navigate', { url: 'http://localhost:3006/studio?mode=builder' });
    await new Promise((r) => setTimeout(r, 2500));
    await captureViewportScreenshot('studio_3_desktop_builder_vehicle.png', 1440, 950);
    await extractCanvasPng('export_v_collision_story.png');

    // Change format to Feed
    console.log('\n--- Switching to Feed format & Hail scenario ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const feedBtn = buttons.find(b => b.textContent?.includes('Portret (4:5)'));
        if (feedBtn) feedBtn.click();
        
        // Click hail damage preset
        const presets = Array.from(document.querySelectorAll('div'));
        const hailDiv = presets.find(d => d.textContent?.includes('Grindină și Fenomene'));
        if (hailDiv) hailDiv.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1500));
    await extractCanvasPng('export_v_hail_feed.png');

    // 2. Desktop Property Builder
    console.log('\n--- 2. Capturing Desktop Property Builder ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const propTab = buttons.find(b => b.textContent?.includes('Locuință / Proprietate'));
        if (propTab) propTab.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 2000));
    await captureViewportScreenshot('studio_3_desktop_builder_property.png', 1440, 950);

    // Switch to Square & Pipe Burst
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const sqBtn = buttons.find(b => b.textContent?.includes('Pătrat (1:1)'));
        if (sqBtn) sqBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1500));
    await extractCanvasPng('export_p_pipe_burst_square.png');

    // Switch to Fire & Story
    console.log('\n--- Switching to Fire scenario & Story format ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const storyBtn = buttons.find(b => b.textContent?.includes('Story / Reel (9:16)'));
        if (storyBtn) storyBtn.click();

        const divs = Array.from(document.querySelectorAll('div'));
        const fireDiv = divs.find(d => d.textContent?.includes('Incendiu Casnic'));
        if (fireDiv) fireDiv.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1500));
    await extractCanvasPng('export_p_fire_story.png');

    // 3. Desktop Curated Gallery
    console.log('\n--- 3. Capturing Desktop Curated Gallery ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const galleryTab = buttons.find(b => b.textContent?.includes('Galeria Curată'));
        if (galleryTab) galleryTab.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 2000));
    await captureViewportScreenshot('studio_3_desktop_gallery.png', 1440, 950);

    // Select Travel Medical & Feed format
    console.log('\n--- Selecting Travel Medical & Feed format in Gallery ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const feedBtn = buttons.find(b => b.textContent?.includes('Portret (4:5)'));
        if (feedBtn) feedBtn.click();

        const cards = Array.from(document.querySelectorAll('h3'));
        const travelCard = cards.find(h => h.textContent?.includes('Urgență medicală în vacanță'));
        if (travelCard) travelCard.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1500));
    await extractCanvasPng('export_travel_medical_feed.png');

    // Select Business Ransomware & Square format
    console.log('\n--- Selecting Cyber Ransomware & Square format in Gallery ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const sqBtn = buttons.find(b => b.textContent?.includes('Pătrat (1:1)'));
        if (sqBtn) sqBtn.click();

        const cards = Array.from(document.querySelectorAll('h3'));
        const ransomwareCard = cards.find(h => h.textContent?.includes('Toate fișierele companiei sunt blocate'));
        if (ransomwareCard) ransomwareCard.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1500));
    await extractCanvasPng('export_biz_ransomware_square.png');

    // 4. Desktop Editorial Tab
    console.log('\n--- 4. Capturing Desktop Editorial Tab ---');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const edTab = buttons.find(b => b.textContent?.includes('Carduri Editoriale'));
        if (edTab) edTab.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 2000));
    await captureViewportScreenshot('studio_3_desktop_editorial.png', 1440, 950);

    // 5. Mobile Experience Capture
    console.log('\n--- 5. Capturing Mobile Studio Experience ---');
    await send('Page.navigate', { url: 'http://localhost:3006/studio?mode=builder' });
    await new Promise((r) => setTimeout(r, 2000));
    await captureViewportScreenshot('studio_3_mobile_builder.png', 390, 844, true);

    // Scroll down on mobile to capture the live canvas preview and actions
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 650);` });
    await new Promise((r) => setTimeout(r, 1000));
    await captureViewportScreenshot('studio_3_mobile_builder_canvas.png', 390, 844, true);

    await send('Page.navigate', { url: 'http://localhost:3006/studio?mode=gallery' });
    await new Promise((r) => setTimeout(r, 2000));
    await captureViewportScreenshot('studio_3_mobile_gallery.png', 390, 844, true);

    // Scroll down on mobile gallery to view curated cards
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 500);` });
    await new Promise((r) => setTimeout(r, 1000));
    await captureViewportScreenshot('studio_3_mobile_gallery_cards.png', 390, 844, true);

    // 6. Test Sharing Flow / Download Flow in Desktop
    console.log('\n--- 6. Capturing Sharing & Action Flow ---');
    await send('Page.navigate', { url: 'http://localhost:3006/studio?mode=builder' });
    await new Promise((r) => setTimeout(r, 2000));
    // Click native share or copy link
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const shareBtn = buttons.find(b => b.textContent?.includes('Distribuie') || b.textContent?.includes('Copiază text'));
        if (shareBtn) shareBtn.click();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1000));
    await captureViewportScreenshot('studio_3_desktop_share_flow.png', 1440, 950);

    console.log('\n🎉 ALL ACCEPTANCE SCREENSHOTS AND CANVAS EXPORTS CAPTURED SUCCESSFULLY!');
    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch((e) => {
  console.error('Acceptance run error:', e);
  process.exit(1);
});
