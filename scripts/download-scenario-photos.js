const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'scenarios');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const photoMap = {
  'burglary.jpg': 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
  'storm-roof.jpg': 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=1200&q=80',
  'hail-damage.jpg': 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1200&q=80',
  'water-engine.jpg': 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80',
  'travel-medical.jpg': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'cyber-attack.jpg': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
  'pet-damage.jpg': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
  'balcony-fall.jpg': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  'power-surge.jpg': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80'
};

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadUrl(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Status ${response.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Starting photo download...');
  for (const [filename, url] of Object.entries(photoMap)) {
    const dest = path.join(targetDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
      console.log(`Skipping (already exists): ${filename}`);
      continue;
    }
    try {
      console.log(`Downloading ${filename}...`);
      await downloadUrl(url, dest);
      console.log(`✓ Saved ${filename} (${fs.statSync(dest).size} bytes)`);
    } catch (err) {
      console.error(`✗ Error downloading ${filename}:`, err.message);
    }
  }
  console.log('Photo download completed.');
}

main();
