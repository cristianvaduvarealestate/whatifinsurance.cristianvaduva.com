const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'scenarios');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const svgs = {
  'neighbor-flood.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
    <radialGradient id="ceilingDrip" cx="50%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#8EB69B" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#051F20" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg2)" />
  <!-- Ceiling slab dividing apartments -->
  <rect x="0" y="0" width="800" height="80" fill="#163832" />
  <line x1="0" y1="80" x2="800" y2="80" stroke="#235347" stroke-width="4" />
  <!-- Water saturation spots in ceiling -->
  <ellipse cx="400" cy="80" rx="220" ry="40" fill="url(#ceilingDrip)" />
  <path d="M260 80 Q320 120 400 80 T540 80" stroke="#DE1110" stroke-width="2" fill="none" opacity="0.7" />
  <!-- Falling water droplets -->
  <line x1="320" y1="90" x2="320" y2="150" stroke="#DAF1DE" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 12" />
  <line x1="400" y1="100" x2="400" y2="280" stroke="#8EB69B" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="10 14" />
  <line x1="480" y1="95" x2="480" y2="200" stroke="#DAF1DE" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6 10" />
  <!-- Damaged wardrobe & floor -->
  <rect x="0" y="380" width="800" height="120" fill="#051F20" />
  <rect x="480" y="180" width="220" height="240" rx="4" fill="#163832" stroke="#235347" stroke-width="2" />
  <path d="M520 220 L580 220 M520 250 L640 250" stroke="#8EB69B" stroke-width="2" opacity="0.6" />
  <!-- Puddle on floor -->
  <ellipse cx="420" cy="420" rx="260" ry="45" fill="#235347" opacity="0.5" />
  <ellipse cx="420" cy="420" rx="190" ry="30" fill="#8EB69B" opacity="0.3" />
  <!-- Legal alert tag -->
  <g transform="translate(40, 40)">
    <rect width="210" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">RĂSPUNDERE FAȚĂ DE VECINI</text>
  </g>
</svg>`,

  'burglary.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
    <radialGradient id="doorLight" cx="40%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8EB69B" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#051F20" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg3)" />
  <!-- Door frame -->
  <rect x="280" y="80" width="240" height="360" rx="6" fill="#163832" stroke="#235347" stroke-width="3" />
  <!-- Ajar door -->
  <path d="M300 95 L500 85 L480 435 L300 425 Z" fill="#0B2B26" stroke="#8EB69B" stroke-width="2" />
  <!-- Broken lock mechanism -->
  <circle cx="325" cy="260" r="14" fill="#051F20" stroke="#DE1110" stroke-width="3" />
  <path d="M315 250 L335 270 M335 250 L315 270" stroke="#DE1110" stroke-width="2.5" />
  <!-- Pry marks -->
  <path d="M295 240 L310 245 M292 265 L308 268 M296 285 L312 288" stroke="#DE1110" stroke-width="2.5" />
  <!-- Spotlight cone of light through door opening -->
  <polygon points="500 85 800 180 800 460 480 435" fill="url(#doorLight)" opacity="0.8" />
  <!-- Clutter on floor -->
  <rect x="520" y="380" width="60" height="30" rx="3" fill="#163832" transform="rotate(15 520 380)" stroke="#235347" />
  <rect x="620" y="400" width="50" height="20" rx="2" fill="#235347" transform="rotate(-8 620 400)" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="180" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">FURT PRIN EFRACȚIE</text>
  </g>
</svg>`,

  'storm-roof.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="70%" stop-color="#0B2B26" />
      <stop offset="100%" stop-color="#163832" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#skyGrad)" />
  <!-- Dark rain streaks in storm -->
  <g stroke="#8EB69B" stroke-width="1.5" opacity="0.35">
    <line x1="100" y1="0" x2="50" y2="300" />
    <line x1="250" y1="0" x2="200" y2="400" />
    <line x1="450" y1="0" x2="380" y2="480" />
    <line x1="650" y1="0" x2="590" y2="350" />
    <line x1="750" y1="50" x2="700" y2="450" />
  </g>
  <!-- Roof structure -->
  <polygon points="400 120 160 300 640 300" fill="#163832" stroke="#235347" stroke-width="3" />
  <!-- Torn tiles / gap in roof -->
  <polygon points="360 170 460 210 410 270 330 230" fill="#051F20" stroke="#DE1110" stroke-width="2.5" />
  <!-- Flying roof tiles in wind -->
  <rect x="490" y="140" width="35" height="22" rx="3" fill="#235347" stroke="#8EB69B" transform="rotate(35 490 140)" />
  <rect x="580" y="110" width="32" height="20" rx="3" fill="#235347" stroke="#8EB69B" transform="rotate(65 580 110)" />
  <rect x="660" y="80" width="30" height="18" rx="2" fill="#235347" stroke="#DE1110" transform="rotate(45 660 80)" />
  <!-- Wind vortex swirls -->
  <path d="M120 220 Q 300 150 480 190 T 720 120" stroke="#DAF1DE" stroke-width="2.5" fill="none" opacity="0.6" stroke-dasharray="12 6" />
  <!-- House base -->
  <rect x="220" y="300" width="360" height="180" fill="#0B2B26" stroke="#163832" stroke-width="2" />
  <rect x="360" y="360" width="80" height="120" fill="#163832" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="210" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">FENOMENE METEO EXTREME</text>
  </g>
</svg>`,

  'car-crash.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="roadBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="60%" stop-color="#0B2B26" />
      <stop offset="100%" stop-color="#163832" />
    </linearGradient>
    <radialGradient id="impactGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#DE1110" stop-opacity="0.8" />
      <stop offset="40%" stop-color="#DE1110" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#051F20" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#roadBg)" />
  <!-- Asphalt Road with markings -->
  <rect x="0" y="320" width="800" height="180" fill="#051F20" />
  <line x1="0" y1="410" x2="800" y2="410" stroke="#8EB69B" stroke-width="4" stroke-dasharray="30 25" opacity="0.4" />
  <!-- Car Front (Left car hitting) -->
  <path d="M80 340 L160 300 L280 290 L380 340 L370 370 L100 370 Z" fill="#163832" stroke="#235347" stroke-width="2.5" />
  <circle cx="160" cy="370" r="24" fill="#0B2B26" stroke="#8EB69B" stroke-width="3" />
  <circle cx="330" cy="370" r="24" fill="#0B2B26" stroke="#8EB69B" stroke-width="3" />
  <!-- Car Back (Right car impacted) -->
  <path d="M430 340 L450 300 L620 295 L720 340 L710 370 L430 370 Z" fill="#0B2B26" stroke="#8EB69B" stroke-width="2" />
  <circle cx="500" cy="370" r="24" fill="#051F20" stroke="#8EB69B" stroke-width="3" />
  <circle cx="660" cy="370" r="24" fill="#051F20" stroke="#8EB69B" stroke-width="3" />
  <!-- Impact point explosion star -->
  <circle cx="400" cy="335" r="70" fill="url(#impactGlow)" />
  <path d="M400 300 L410 325 L435 330 L412 345 L418 370 L400 350 L382 370 L388 345 L365 330 L390 325 Z" fill="#DE1110" />
  <!-- Shattered plastic / glass particles -->
  <polygon points="380 310 395 305 390 320" fill="#DAF1DE" opacity="0.9" />
  <polygon points="425 320 435 310 440 330" fill="#DAF1DE" opacity="0.8" />
  <polygon points="410 360 425 365 415 375" fill="#8EB69B" opacity="0.7" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="180" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">ACCIDENT DE TRAFIC</text>
  </g>
</svg>`,

  'hail-damage.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="hailBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="50%" stop-color="#0B2B26" />
      <stop offset="100%" stop-color="#163832" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#hailBg)" />
  <!-- Car body closeup (Hood and windshield) -->
  <path d="M100 420 L240 280 L560 270 L720 420 Z" fill="#163832" stroke="#235347" stroke-width="3" />
  <polygon points="260 270 540 260 500 160 300 160" fill="#0B2B26" stroke="#8EB69B" stroke-width="2" />
  <!-- Cracked windshield pattern -->
  <path d="M380 200 L420 180 M380 200 L360 230 M380 200 L410 225 M420 180 L460 175" stroke="#DE1110" stroke-width="2" fill="none" opacity="0.85" />
  <!-- Hail impact indentations on hood -->
  <ellipse cx="280" cy="340" rx="18" ry="12" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <ellipse cx="360" cy="320" rx="15" ry="10" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <ellipse cx="440" cy="360" rx="20" ry="14" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <ellipse cx="520" cy="330" rx="16" ry="11" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <ellipse cx="600" cy="370" rx="18" ry="12" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <ellipse cx="330" cy="380" rx="14" ry="9" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <ellipse cx="490" cy="400" rx="22" ry="15" fill="#0B2B26" stroke="#DE1110" stroke-width="1.5" />
  <!-- Hail stones bouncing -->
  <circle cx="310" cy="220" r="10" fill="#DAF1DE" stroke="#8EB69B" stroke-width="2" />
  <circle cx="460" cy="190" r="14" fill="#DAF1DE" stroke="#8EB69B" stroke-width="2" />
  <circle cx="580" cy="250" r="12" fill="#DAF1DE" stroke="#8EB69B" stroke-width="2" />
  <circle cx="210" cy="310" r="9" fill="#DAF1DE" opacity="0.8" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="180" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">DAUNE GRINDINĂ</text>
  </g>
</svg>`,

  'water-engine.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="deepWater" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="60%" stop-color="#0B2B26" />
      <stop offset="100%" stop-color="#235347" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#deepWater)" />
  <!-- Underpass concrete tunnel walls -->
  <polygon points="0 0 160 160 160 500 0 500" fill="#0B2B26" opacity="0.8" />
  <polygon points="800 0 640 160 640 500 800 500" fill="#0B2B26" opacity="0.8" />
  <!-- Deep water level in tunnel -->
  <rect x="0" y="280" width="800" height="220" fill="#163832" opacity="0.9" />
  <line x1="0" y1="280" x2="800" y2="280" stroke="#8EB69B" stroke-width="3" opacity="0.8" />
  <!-- Half submerged car in water -->
  <path d="M260 260 L340 190 L520 190 L600 260 L600 340 L260 340 Z" fill="#051F20" stroke="#8EB69B" stroke-width="2" />
  <!-- Water ripples around car front -->
  <ellipse cx="430" cy="300" rx="190" ry="25" fill="#235347" opacity="0.6" stroke="#DAF1DE" stroke-width="2" />
  <ellipse cx="430" cy="330" rx="230" ry="30" fill="none" stroke="#8EB69B" stroke-width="2" opacity="0.4" stroke-dasharray="10 10" />
  <!-- Engine bay smoke / warning -->
  <circle cx="340" cy="240" r="18" fill="#DE1110" opacity="0.9" />
  <path d="M340 210 Q 320 160 350 120" stroke="#DAF1DE" stroke-width="3" fill="none" opacity="0.7" stroke-dasharray="6 4" />
  <path d="M350 215 Q 380 170 360 110" stroke="#8EB69B" stroke-width="2" fill="none" opacity="0.6" stroke-dasharray="6 4" />
  <!-- Submerged sign -->
  <g transform="translate(40, 40)">
    <rect width="210" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">ȘOC HIDRAULIC LA MOTOR</text>
  </g>
</svg>`,

  'travel-medical.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="medBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#medBg)" />
  <!-- Passport & Airplane silhouette background -->
  <path d="M540 100 L560 140 L650 150 L580 190 L600 240 L530 200 L470 210 L500 160 Z" fill="#163832" opacity="0.3" />
  <!-- Hospital monitor EKG graph line -->
  <path d="M60 260 L240 260 L260 210 L280 320 L300 170 L320 290 L340 260 L740 260" stroke="#8EB69B" stroke-width="3.5" fill="none" stroke-linecap="round" />
  <!-- Glowing pulse point -->
  <circle cx="300" cy="170" r="10" fill="#DAF1DE" />
  <circle cx="300" cy="170" r="22" fill="#8EB69B" opacity="0.3" />
  <!-- Medical Red Cross emergency badge -->
  <rect x="360" y="320" width="80" height="80" rx="16" fill="#163832" stroke="#235347" stroke-width="2" />
  <rect x="390" y="335" width="20" height="50" rx="3" fill="#DE1110" />
  <rect x="375" y="350" width="50" height="20" rx="3" fill="#DE1110" />
  <!-- International globe meridian rings -->
  <ellipse cx="620" cy="360" rx="90" ry="90" fill="none" stroke="#235347" stroke-width="2" opacity="0.6" />
  <ellipse cx="620" cy="360" rx="40" ry="90" fill="none" stroke="#235347" stroke-width="2" opacity="0.5" />
  <line x1="530" y1="360" x2="710" y2="360" stroke="#235347" stroke-width="2" opacity="0.5" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="210" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">URGENȚĂ MEDICALĂ EXTERNĂ</text>
  </g>
</svg>`,

  'cyber-attack.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="cyberBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#cyberBg)" />
  <!-- Server rack lines & grid -->
  <g stroke="#163832" stroke-width="1.5" opacity="0.5">
    <line x1="80" y1="0" x2="80" y2="500" />
    <line x1="200" y1="0" x2="200" y2="500" />
    <line x1="600" y1="0" x2="600" y2="500" />
    <line x1="720" y1="0" x2="720" y2="500" />
    <line x1="0" y1="120" x2="800" y2="120" />
    <line x1="0" y1="240" x2="800" y2="240" />
    <line x1="0" y1="360" x2="800" y2="360" />
  </g>
  <!-- Central Terminal / Locked Display -->
  <rect x="250" y="140" width="300" height="220" rx="10" fill="#0B2B26" stroke="#235347" stroke-width="3" />
  <rect x="265" y="155" width="270" height="190" rx="6" fill="#051F20" />
  <!-- Ransom Padlock graphic -->
  <rect x="365" y="235" width="70" height="60" rx="8" fill="#DE1110" />
  <path d="M375 235 V 205 A 25 25 0 0 1 425 205 V 235" stroke="#DAF1DE" stroke-width="7" fill="none" stroke-linecap="round" />
  <circle cx="400" cy="260" r="6" fill="#051F20" />
  <line x1="400" y1="266" x2="400" y2="278" stroke="#051F20" stroke-width="4" stroke-linecap="round" />
  <!-- Binary / Hex glitch code rain -->
  <text x="280" y="180" fill="#8EB69B" font-family="monospace" font-size="12" opacity="0.8">0x8F4A LOCKED // ENCRYPTED</text>
  <text x="280" y="325" fill="#DE1110" font-family="monospace" font-size="11" font-weight="700">RANSOMWARE DETECTED</text>
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="190" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">ATAC CIBERNETIC FIRMĂ</text>
  </g>
</svg>`,

  'pet-damage.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="petBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#petBg)" />
  <!-- Ripped Luxury Sofa -->
  <rect x="180" y="220" width="440" height="180" rx="18" fill="#163832" stroke="#235347" stroke-width="3" />
  <rect x="220" y="160" width="360" height="100" rx="12" fill="#0B2B26" stroke="#235347" stroke-width="2" />
  <!-- Claw scratches & tears in leather -->
  <path d="M260 260 L290 310 M275 255 L305 315 M290 260 L320 310" stroke="#DE1110" stroke-width="3" stroke-linecap="round" />
  <path d="M480 250 L520 290 M495 245 L535 295 M510 250 L550 290" stroke="#DE1110" stroke-width="3" stroke-linecap="round" />
  <!-- Paw print watermark -->
  <ellipse cx="660" cy="380" rx="18" ry="22" fill="#8EB69B" opacity="0.3" />
  <circle cx="640" cy="345" r="7" fill="#8EB69B" opacity="0.3" />
  <circle cx="658" cy="340" r="7" fill="#8EB69B" opacity="0.3" />
  <circle cx="678" cy="345" r="7" fill="#8EB69B" opacity="0.3" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="210" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">PAGUBE ANIMALE COMPANIE</text>
  </g>
</svg>`,

  'balcony-fall.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="fallBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#fallBg)" />
  <!-- Balcony railing at top -->
  <rect x="0" y="60" width="280" height="15" fill="#163832" />
  <line x1="40" y1="75" x2="40" y2="160" stroke="#235347" stroke-width="4" />
  <line x1="100" y1="75" x2="100" y2="160" stroke="#235347" stroke-width="4" />
  <line x1="160" y1="75" x2="160" y2="160" stroke="#235347" stroke-width="4" />
  <line x1="220" y1="75" x2="220" y2="160" stroke="#235347" stroke-width="4" />
  <rect x="0" y="160" width="280" height="20" fill="#163832" />
  <!-- Falling flower pot trajectory -->
  <path d="M180 80 C 260 180, 360 260, 460 380" stroke="#DE1110" stroke-width="2.5" stroke-dasharray="6 6" fill="none" opacity="0.8" />
  <!-- Tumbling ceramic pot -->
  <polygon points="340 230 380 235 370 270 350 268" fill="#235347" stroke="#8EB69B" stroke-width="2" transform="rotate(45 360 250)" />
  <!-- Parked car windshield target -->
  <polygon points="360 440 660 440 580 340 440 340" fill="#163832" stroke="#235347" stroke-width="2.5" />
  <circle cx="480" cy="380" r="16" fill="#DE1110" opacity="0.9" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="210" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">CĂDERE OBIECTE DIN IMOBIL</text>
  </g>
</svg>`,

  'power-surge.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="surgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051F20" />
      <stop offset="100%" stop-color="#0B2B26" />
    </linearGradient>
    <radialGradient id="electricBurst" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#DAF1DE" />
      <stop offset="30%" stop-color="#8EB69B" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#051F20" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#surgeBg)" />
  <!-- Lightning bolt high voltage surge -->
  <path d="M420 40 L370 200 L430 205 L350 360 L400 365 L320 480" stroke="#DAF1DE" stroke-width="5" fill="none" stroke-linejoin="miter" stroke-linecap="round" />
  <path d="M420 40 L370 200 L430 205 L350 360 L400 365 L320 480" stroke="#8EB69B" stroke-width="12" fill="none" opacity="0.4" stroke-linecap="round" />
  <!-- Wall socket spark point -->
  <rect x="520" y="220" width="140" height="140" rx="16" fill="#163832" stroke="#235347" stroke-width="3" />
  <circle cx="565" cy="290" r="8" fill="#051F20" />
  <circle cx="615" cy="290" r="8" fill="#051F20" />
  <!-- Sparks bursting out -->
  <circle cx="590" cy="290" r="45" fill="url(#electricBurst)" />
  <line x1="590" y1="290" x2="680" y2="240" stroke="#DE1110" stroke-width="2.5" />
  <line x1="590" y1="290" x2="670" y2="330" stroke="#DAF1DE" stroke-width="2.5" />
  <line x1="590" y1="290" x2="520" y2="360" stroke="#DE1110" stroke-width="2.5" />
  <!-- Tag -->
  <g transform="translate(40, 40)">
    <rect width="180" height="34" rx="17" fill="#051F20" stroke="#DE1110" stroke-width="1.5" />
    <circle cx="20" cy="17" r="5" fill="#DE1110" />
    <text x="36" y="22" fill="#DAF1DE" font-family="sans-serif" font-size="12" font-weight="600">FENOMENE ELECTRICE</text>
  </g>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(targetDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf8');
  console.log('Created: ' + filename);
}
