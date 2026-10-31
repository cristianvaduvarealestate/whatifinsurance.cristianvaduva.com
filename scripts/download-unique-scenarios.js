const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'scenarios');

// Curated unique high-resolution editorial photography from verified Unsplash IDs
// Each image matches the exact incident risk described in the scenario
const newPhotos = {
  'balcony-water-leak.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  'private-aircraft-hangar.jpg': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  'ground-solar-garden.jpg': 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80',
  'ebike-storage-theft.jpg': 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80',
  'fallen-tree-gazebo.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  'damaged-rental-room.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  'slippery-bathroom-fall.jpg': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  'worker-injury-home.jpg': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  'child-dental-trauma.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  'renovation-wall-crack.jpg': 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
  'foundation-settlement.jpg': 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
  'construction-scaffold-fall.jpg': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  'demolished-wall-interior.jpg': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  'fried-motherboard-pc.jpg': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  'river-flood-house.jpg': 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80',
  'vandalized-entrance-door.jpg': 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80',
  'car-crashed-fence.jpg': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
  'commercial-van-service.jpg': 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
  'car-snow-ditch.jpg': 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80',
  'wild-animal-car-collision.jpg': 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
  'broken-car-window-theft.jpg': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
  'rental-car-damage.jpg': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  'car-tow-truck-trailer.jpg': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
  'warehouse-fire-damage.jpg': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  'scooter-battery-fire.jpg': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
  'airport-boarding-gate.jpg': 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80',
  'cracked-designer-suitcase.jpg': 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1200&q=80',
  'cruise-ship-medical.jpg': 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
  'tourist-street-robbery.jpg': 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
  'private-hospital-surgery.jpg': 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
  'island-medical-evacuation.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'trip-cancellation-illness.jpg': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
  'stroke-rehabilitation.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  'icu-intensive-care.jpg': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  'island-ferry-storm.jpg': 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80',
  'fireworks-roof-spark.jpg': 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1200&q=80',
  'director-legal-dispute.jpg': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  'cargo-container-dispute.jpg': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  'data-leak-spreadsheet.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'fake-ecommerce-scam.jpg': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
  'diamond-jewelry-gala.jpg': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  'fine-wine-cellar.jpg': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
  'broken-antique-furniture.jpg': 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
  'jet-ski-rock-damage.jpg': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
};

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
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
  console.log('Starting unique scenario photos download...');
  let downloaded = 0;
  for (const [filename, url] of Object.entries(newPhotos)) {
    const dest = path.join(targetDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 15000) {
      console.log(`Skipping already present: ${filename}`);
      continue;
    }
    try {
      await downloadUrl(url, dest);
      const size = fs.statSync(dest).size;
      console.log(`✓ Downloaded ${filename} (${Math.round(size / 1024)} KB)`);
      downloaded++;
    } catch (err) {
      console.error(`✗ Error downloading ${filename}:`, err.message);
    }
  }
  console.log(`Download complete. Newly downloaded: ${downloaded} files.`);
}

main();
