const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

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
            } catch (err) {
              reject(err);
            }
          });
          r.on('error', reject);
        });
        req.on('error', reject);
      });
      if (res && res.length > 0 && res[0].webSocketDebuggerUrl) {
        return res[0].webSocketDebuggerUrl;
      }
    } catch (e) {
      await new Promise((r) => setTimeout(r, 400));
    }
  }
  throw new Error('Could not connect to Chrome debugging port');
}

async function run() {
  const artifactDir = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/3f94af97-f498-488a-8787-9e65dc945559';
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9225',
    '--window-size=1440,1050',
    '--user-data-dir=/tmp/chrome-restoration-profile',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ]);

  try {
    const wsUrl = await getWsUrl(9225);
    const ws = new globalThis.WebSocket(wsUrl);

    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let msgId = 1;
    const pending = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const { resolve, reject } = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    async function capturePage(name, width = 1440, height = 1050) {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 2,
        mobile: width < 768,
      });
      await new Promise((r) => setTimeout(r, 600));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(artifactDir, name);
      fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved screenshot: ${filePath}`);
    }

    console.log('Navigating to Studio...');
    await send('Page.navigate', { url: 'http://localhost:3006/studio' });
    await new Promise((r) => setTimeout(r, 3000));

    // Screenshot 1: Studio desktop with Restored Editorial Concepts sub-bar
    await capturePage('restored_studio_nav_desktop.png', 1440, 1050);

    // Click 'Surprinde-ți prietenii' button
    console.log('Clicking Surprinde-ți prietenii concept...');
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const btn = buttons.find(b => b.innerText.includes('Surprinde-ți prietenii'));
          if (btn) btn.click();
        })()
      `,
    });
    await new Promise((r) => setTimeout(r, 2000));

    // Screenshot 2: Loaded 'Surprinde-ți prietenii' editorial concept + Layer 2 Rich Story breakdown
    await capturePage('restored_editorial_concept_challenge_friend.png', 1440, 1050);

    // Screenshot 3: Mobile View (390x844)
    console.log('Capturing mobile studio view...');
    await capturePage('restored_studio_mobile_view.png', 390, 844);

    // Reset desktop metrics
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 1050,
      deviceScaleFactor: 2,
      mobile: false,
    });

    // Screenshot 4: Scenario detail page action area
    console.log('Navigating to scenario detail page...');
    await send('Page.navigate', { url: 'http://localhost:3006/scenarii/casa/teava-sparta' });
    await new Promise((r) => setTimeout(r, 3000));
    await capturePage('restored_scenario_detail_action.png', 1440, 1050);

    ws.close();
    console.log('All visual verification screenshots captured successfully!');
  } finally {
    chrome.kill();
  }
}

run().catch((e) => {
  console.error('Error running screenshot capture:', e);
  process.exit(1);
});
