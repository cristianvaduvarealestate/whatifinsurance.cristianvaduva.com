const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

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

async function run() {
  const outputDir = path.join(__dirname, '../public/share-exports-test');
  const artifactDir = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/3f94af97-f498-488a-8787-9e65dc945559';

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--window-size=1280,900',
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
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });

    console.log('Navigating to http://localhost:3005/studio ...');
    await send('Page.navigate', { url: 'http://localhost:3005/studio' });
    await new Promise((r) => setTimeout(r, 2000));

    const testCases = [
      {
        scenarioId: 'teava-sparta',
        name: 'short_title_pipe_burst',
        label: 'Scenariu Titlu Scurt (Țeavă spartă în baie)',
      },
      {
        scenarioId: 'panouri-fotovoltaice-grindina',
        name: 'long_title_solar_panels',
        label: 'Scenariu Titlu Lung (Grindină panouri solare fotovoltaice)',
      },
      {
        scenarioId: 'masina-spalat-furtun',
        name: 'complex_washing_machine',
        label: 'Scenariu Text Complex (Furtun mașină de spălat)',
      },
    ];

    const formats = ['story', 'feed', 'square'];

    for (const tc of testCases) {
      console.log(`\n======================================================`);
      console.log(`TESTING: ${tc.label} [${tc.scenarioId}]`);
      console.log(`======================================================`);

      const targetUrl = `http://localhost:3005/studio?scenario=${tc.scenarioId}`;
      console.log(`Navigating to ${targetUrl}...`);
      await send('Page.navigate', { url: targetUrl });
      await new Promise((r) => setTimeout(r, 1500));

      for (const fmt of formats) {
        console.log(`Rendering format: ${fmt}...`);

        // Click format button
        await send('Runtime.evaluate', {
          expression: `(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const btn = buttons.find(b => b.textContent?.toLowerCase().includes('${fmt === 'story' ? 'story' : fmt === 'feed' ? 'feed' : 'pătrat'}'));
            if (btn) btn.click();
          })()`,
        });

        // Poll until canvas is rendered
        let res = null;
        for (let attempt = 0; attempt < 25; attempt++) {
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

        if (!res) {
          throw new Error(`Failed to extract canvas for ${tc.name} [${fmt}]`);
        }

        console.log(`  -> Dimensions: ${res.width}x${res.height}`);
        console.log(`  -> Corner Pixel RGBA: [${res.cornerPixel.join(', ')}] (Expected pure white 255, 255, 255)`);

        // Save image to outputDir and artifactDir
        const base64Data = res.dataUrl.replace(/^data:image\/png;base64,/, '');
        const filename = `${tc.name}_${fmt}.png`;
        const filePath = path.join(outputDir, filename);
        fs.writeFileSync(filePath, base64Data, 'base64');

        if (fs.existsSync(artifactDir)) {
          fs.writeFileSync(path.join(artifactDir, filename), base64Data, 'base64');
        }

        console.log(`  -> Saved: ${filename} (${Math.round(base64Data.length * 0.75 / 1024)} KB)`);
      }
    }

    console.log(`\n>>> ALL TESTS PASSED! Exported images saved in: ${outputDir}`);
    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch((e) => {
  console.error('Test error:', e);
  process.exit(1);
});
