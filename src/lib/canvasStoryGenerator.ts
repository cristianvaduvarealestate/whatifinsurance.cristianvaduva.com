import { Scenario } from '@/types/scenario';

export type StoryFormat = 'story' | 'feed' | 'square';

export interface FormatConfig {
  width: number;
  height: number;
  label: string;
  ratio: string;
}

export const FORMAT_CONFIGS: Record<StoryFormat, FormatConfig> = {
  story: {
    width: 1080,
    height: 1920,
    label: 'Story / Reel (9:16)',
    ratio: '9:16',
  },
  feed: {
    width: 1080,
    height: 1350,
    label: 'Feed Portrait (4:5)',
    ratio: '4:5',
  },
  square: {
    width: 1080,
    height: 1080,
    label: 'Feed Pătrat (1:1)',
    ratio: '1:1',
  },
};

// EDITORIAL BRAND PALETTE
const COLORS = {
  darkest: '#06141B',   // Deep cinematic navy
  dark: '#0E1E28',      // Elevated surfaces
  surface: '#182C38',   // Card container backgrounds
  border: '#2C4454',    // Clean divider borders
  muted: '#8A9DA8',     // Muted secondary text
  white: '#FFFFFF',     // Crisp primary text
  silver: '#C5D0D6',    // Secondary brand labels
  risk: '#E10600',      // Distinctive red risk accent
  riskSoft: 'rgba(225, 6, 0, 0.15)',
};

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export async function renderScenarioToCanvas(
  canvas: HTMLCanvasElement,
  scenario: Scenario,
  format: StoryFormat
): Promise<void> {
  const { width, height } = FORMAT_CONFIGS[format];
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 1. Deep Editorial Navy Background
  ctx.fillStyle = COLORS.darkest;
  ctx.fillRect(0, 0, width, height);

  // Subtle radial gradient for lighting depth
  const bgGrad = ctx.createRadialGradient(
    width / 2,
    height * 0.25,
    60,
    width / 2,
    height * 0.5,
    height * 0.85
  );
  bgGrad.addColorStop(0, '#102430');
  bgGrad.addColorStop(0.6, '#081720');
  bgGrad.addColorStop(1, COLORS.darkest);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Header Branding & Curiosity Hook
  const topY = format === 'story' ? 80 : format === 'feed' ? 65 : 55;
  const paddingX = 60;
  const contentWidth = width - paddingX * 2;

  // Left Tag: "TU ȘTIAI ASTA?" with red indicator dot
  ctx.fillStyle = 'rgba(24, 44, 56, 0.9)';
  ctx.strokeStyle = COLORS.border;
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, paddingX, topY, 230, 44, 22);
  ctx.fill();
  ctx.stroke();

  // Red curiosity dot
  ctx.fillStyle = COLORS.risk;
  ctx.beginPath();
  ctx.arc(paddingX + 22, topY + 22, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = COLORS.white;
  ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('TU ȘTIAI ASTA?', paddingX + 38, topY + 27);

  // Category Tag next to curiosity hook
  ctx.fillStyle = COLORS.muted;
  ctx.font = '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(`·  ${scenario.categoryName.toUpperCase()}`, paddingX + 245, topY + 27);

  // Right Header: WHAT IF INSURANCE + Powered by CristianVaduva.com
  ctx.textAlign = 'right';
  ctx.fillStyle = COLORS.white;
  ctx.font = '900 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('WHAT IF INSURANCE', width - paddingX, topY + 22);

  ctx.fillStyle = COLORS.silver;
  ctx.font = '500 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Powered by CristianVaduva.com', width - paddingX, topY + 40);
  ctx.textAlign = 'left'; // reset alignment

  // 3. Scenario Photographic Image (Hero Photo)
  let imgH = format === 'story' ? 560 : format === 'feed' ? 420 : 330;
  let imgY = topY + 68;

  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = scenario.heroImage;
    await new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      setTimeout(resolve, 400); // safety fallback
    });

    if (img.complete && img.naturalWidth > 0) {
      ctx.save();
      drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, 24);
      ctx.clip();
      ctx.drawImage(img, paddingX, imgY, contentWidth, imgH);

      // Subtle gradient vignette on bottom of photo for text separation
      const imgGrad = ctx.createLinearGradient(paddingX, imgY + imgH - 140, paddingX, imgY + imgH);
      imgGrad.addColorStop(0, 'rgba(6, 20, 27, 0)');
      imgGrad.addColorStop(1, 'rgba(6, 20, 27, 0.95)');
      ctx.fillStyle = imgGrad;
      ctx.fillRect(paddingX, imgY + imgH - 140, contentWidth, 140);
      ctx.restore();

      // Border outline around photo
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, 24);
      ctx.stroke();

      // Severity badge floating on photo
      if (scenario.severityLabel) {
        ctx.fillStyle = 'rgba(6, 20, 27, 0.85)';
        ctx.strokeStyle = 'rgba(225, 6, 0, 0.5)';
        ctx.lineWidth = 1.5;
        drawRoundedRect(ctx, paddingX + 20, imgY + imgH - 48, 260, 32, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = COLORS.risk;
        ctx.beginPath();
        ctx.arc(paddingX + 36, imgY + imgH - 32, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = COLORS.white;
        ctx.font = '700 12px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillText(scenario.severityLabel.toUpperCase(), paddingX + 48, imgY + imgH - 28);
      }
    }
  } catch (err) {
    console.warn('Canvas hero image error', err);
  }

  // 4. Headline / Curiosity Question
  const questionY = imgY + imgH + (format === 'story' ? 44 : format === 'feed' ? 36 : 28);
  ctx.fillStyle = COLORS.white;

  const qFontSize = format === 'story' ? 42 : format === 'feed' ? 36 : 30;
  const qLineHeight = format === 'story' ? 52 : format === 'feed' ? 46 : 38;
  ctx.font = `800 ${qFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

  const qLines = wrapText(ctx, `„${scenario.mainQuestion}”`, contentWidth);
  const maxQLines = format === 'square' ? 2 : 3;

  qLines.slice(0, maxQLines).forEach((line, idx) => {
    ctx.fillText(line, paddingX, questionY + idx * qLineHeight);
  });

  const cardsStartY = questionY + Math.min(qLines.length, maxQLines) * qLineHeight + 24;

  // 5. Comparison Cards: "FĂRĂ ASIGURARE ADAPTATĂ" vs "CU POLIȚĂ VERIFICATĂ"
  if (format === 'story') {
    // STORY (1080 × 1920) — Vertical Stacked Cards
    const cardH = 210;

    // Card 1: Fără Asigurare (Risk Box)
    const card1Y = cardsStartY;
    ctx.fillStyle = 'rgba(24, 44, 56, 0.75)';
    ctx.strokeStyle = 'rgba(225, 6, 0, 0.6)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, card1Y, contentWidth, cardH, 20);
    ctx.fill();
    ctx.stroke();

    // Risk badge
    ctx.fillStyle = COLORS.risk;
    drawRoundedRect(ctx, paddingX + 24, card1Y + 20, 210, 32, 16);
    ctx.fill();
    ctx.fillStyle = COLORS.white;
    ctx.font = '800 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('FĂRĂ ASIGURARE ADAPTATĂ', paddingX + 38, card1Y + 41);

    // Impact Amount
    ctx.fillStyle = COLORS.white;
    ctx.font = '800 24px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(scenario.withoutInsurance.financialImpact, paddingX + 24, card1Y + 86);

    // Summary lines
    ctx.fillStyle = COLORS.muted;
    ctx.font = '400 18px -apple-system, BlinkMacSystemFont, sans-serif';
    const sum1 = wrapText(ctx, scenario.withoutInsurance.summary, contentWidth - 48);
    sum1.slice(0, 3).forEach((line, i) => {
      ctx.fillText(line, paddingX + 24, card1Y + 122 + i * 26);
    });

    // Card 2: Cu Poliță Verificată (Protection Box)
    const card2Y = card1Y + cardH + 20;
    ctx.fillStyle = 'rgba(24, 44, 56, 0.75)';
    ctx.strokeStyle = 'rgba(197, 208, 214, 0.4)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, card2Y, contentWidth, cardH, 20);
    ctx.fill();
    ctx.stroke();

    // Protection badge
    ctx.fillStyle = COLORS.surface;
    ctx.strokeStyle = COLORS.silver;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX + 24, card2Y + 20, 200, 32, 16);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = COLORS.white;
    ctx.font = '800 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('CU POLIȚĂ VERIFICATĂ', paddingX + 38, card2Y + 41);

    // Status Label
    ctx.fillStyle = COLORS.white;
    ctx.font = '800 24px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(scenario.withInsurance.statusLabel, paddingX + 24, card2Y + 86);

    // Summary lines
    ctx.fillStyle = COLORS.muted;
    ctx.font = '400 18px -apple-system, BlinkMacSystemFont, sans-serif';
    const sum2 = wrapText(ctx, scenario.withInsurance.summary, contentWidth - 48);
    sum2.slice(0, 3).forEach((line, i) => {
      ctx.fillText(line, paddingX + 24, card2Y + 122 + i * 26);
    });

    // Educational Caveat Note
    ctx.fillStyle = COLORS.muted;
    ctx.font = 'italic 400 14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(
      '*Acoperirea efectivă depinde de clauzele contractuale specifice, excluderi și limite de despăgubire.',
      paddingX,
      card2Y + cardH + 28
    );

    // 6. HIGH-VISIBILITY PROMINENT CALLOUT BANNER (Phone-Readable!)
    const ctaY = card2Y + cardH + 54;
    const ctaH = 96;

    ctx.fillStyle = COLORS.dark;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, paddingX, ctaY, contentWidth, ctaH, 24);
    ctx.fill();
    ctx.stroke();

    // CTA Label
    ctx.fillStyle = COLORS.silver;
    ctx.font = '700 14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('DESCOPERĂ SCENARIUL COMPLET & VERIFICĂ-ȚI POLIȚA PE', width / 2, ctaY + 36);

    // High-Contrast Bold URL (Phone Legible: 30px)
    ctx.fillStyle = COLORS.white;
    ctx.font = '900 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace';
    ctx.fillText('insurance.cristianvaduva.com', width / 2, ctaY + 72);
    ctx.textAlign = 'left'; // reset

  } else if (format === 'feed') {
    // FEED PORTRAIT (1080 × 1350) — Side-by-Side Cards
    const cardW = (contentWidth - 24) / 2;
    const cardH = 240;
    const cardY = cardsStartY;

    // Left: Fără Asigurare
    ctx.fillStyle = 'rgba(24, 44, 56, 0.85)';
    ctx.strokeStyle = 'rgba(225, 6, 0, 0.6)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, cardY, cardW, cardH, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COLORS.risk;
    drawRoundedRect(ctx, paddingX + 16, cardY + 16, 170, 28, 14);
    ctx.fill();
    ctx.fillStyle = COLORS.white;
    ctx.font = '800 11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('FĂRĂ ASIGURARE', paddingX + 26, cardY + 34);

    ctx.fillStyle = COLORS.white;
    ctx.font = '800 18px -apple-system, BlinkMacSystemFont, sans-serif';
    const impLines = wrapText(ctx, scenario.withoutInsurance.financialImpact, cardW - 32);
    impLines.slice(0, 2).forEach((l, i) => ctx.fillText(l, paddingX + 16, cardY + 74 + i * 22));

    ctx.fillStyle = COLORS.muted;
    ctx.font = '400 14px -apple-system, BlinkMacSystemFont, sans-serif';
    const sumL1 = wrapText(ctx, scenario.withoutInsurance.summary, cardW - 32);
    sumL1.slice(0, 4).forEach((l, i) => ctx.fillText(l, paddingX + 16, cardY + 130 + i * 20));

    // Right: Cu Poliță Verificată
    const rX = paddingX + cardW + 24;
    ctx.fillStyle = 'rgba(24, 44, 56, 0.85)';
    ctx.strokeStyle = 'rgba(197, 208, 214, 0.4)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, rX, cardY, cardW, cardH, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COLORS.surface;
    ctx.strokeStyle = COLORS.silver;
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, rX + 16, cardY + 16, 160, 28, 14);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = COLORS.white;
    ctx.font = '800 11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('CU POLIȚĂ ACTIVĂ', rX + 26, cardY + 34);

    ctx.fillStyle = COLORS.white;
    ctx.font = '800 18px -apple-system, BlinkMacSystemFont, sans-serif';
    const stLines = wrapText(ctx, scenario.withInsurance.statusLabel, cardW - 32);
    stLines.slice(0, 2).forEach((l, i) => ctx.fillText(l, rX + 16, cardY + 74 + i * 22));

    ctx.fillStyle = COLORS.muted;
    ctx.font = '400 14px -apple-system, BlinkMacSystemFont, sans-serif';
    const sumL2 = wrapText(ctx, scenario.withInsurance.summary, cardW - 32);
    sumL2.slice(0, 4).forEach((l, i) => ctx.fillText(l, rX + 16, cardY + 130 + i * 20));

    // High-Visibility Callout Bar
    const ctaY = cardY + cardH + 24;
    const ctaH = 80;

    ctx.fillStyle = COLORS.dark;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, paddingX, ctaY, contentWidth, ctaH, 20);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COLORS.silver;
    ctx.font = '700 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('DESCOPERĂ SCENARIUL COMPLET & VERIFICĂ-ȚI POLIȚA PE', width / 2, ctaY + 30);

    ctx.fillStyle = COLORS.white;
    ctx.font = '900 27px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace';
    ctx.fillText('insurance.cristianvaduva.com', width / 2, ctaY + 62);
    ctx.textAlign = 'left';

  } else {
    // SQUARE (1080 × 1080)
    const cardY = cardsStartY;
    const cardH = 140;

    ctx.fillStyle = 'rgba(24, 44, 56, 0.85)';
    ctx.strokeStyle = 'rgba(197, 208, 214, 0.3)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, cardY, contentWidth, cardH, 18);
    ctx.fill();
    ctx.stroke();

    // Risk Line
    ctx.fillStyle = COLORS.risk;
    ctx.font = '800 14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('FĂRĂ ASIGURARE:', paddingX + 20, cardY + 42);

    ctx.fillStyle = COLORS.white;
    ctx.font = '700 16px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(scenario.withoutInsurance.financialImpact, paddingX + 180, cardY + 42);

    // Protection Line
    ctx.fillStyle = COLORS.silver;
    ctx.font = '800 14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('CU POLIȚĂ:', paddingX + 20, cardY + 88);

    ctx.fillStyle = COLORS.white;
    ctx.font = '700 16px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(scenario.withInsurance.statusLabel, paddingX + 180, cardY + 88);

    // High-Visibility Callout Bar for Square
    const ctaY = cardY + cardH + 18;
    const ctaH = 74;

    ctx.fillStyle = COLORS.dark;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, paddingX, ctaY, contentWidth, ctaH, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COLORS.silver;
    ctx.font = '700 12px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AFLĂ RĂSPUNSUL COMPLET PE', width / 2, ctaY + 28);

    ctx.fillStyle = COLORS.white;
    ctx.font = '900 25px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace';
    ctx.fillText('insurance.cristianvaduva.com', width / 2, ctaY + 58);
    ctx.textAlign = 'left';
  }

  // 7. PERMANENT EMBEDDED FOOTER WATERMARK
  const footerH = format === 'story' ? 100 : format === 'feed' ? 90 : 80;
  const footerY = height - footerH;

  // Thin silver divider line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(paddingX, footerY);
  ctx.lineTo(width - paddingX, footerY);
  ctx.stroke();

  // Footer Left: Brand & Partner
  ctx.fillStyle = COLORS.white;
  ctx.font = '800 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('WHAT IF INSURANCE', paddingX, footerY + 36);

  ctx.fillStyle = COLORS.muted;
  ctx.font = '500 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Partener Generali · Powered by CristianVaduva.com', paddingX, footerY + 58);

  // Footer Right: Educational Framing Note
  ctx.textAlign = 'right';
  ctx.fillStyle = COLORS.silver;
  ctx.font = '600 13px monospace';
  ctx.fillText('Educație independentă despre riscuri', width - paddingX, footerY + 36);

  ctx.fillStyle = 'rgba(138, 157, 168, 0.7)';
  ctx.font = '400 12px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('Verifică clauzele specifice din contractul tău', width - paddingX, footerY + 58);
  ctx.textAlign = 'left'; // reset
}

export function downloadCanvasAsImage(
  canvas: HTMLCanvasElement,
  filename: string
): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
