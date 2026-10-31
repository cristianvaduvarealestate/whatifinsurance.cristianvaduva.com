import { Scenario } from '@/types/scenario';
import { EditorialCard, EDITORIAL_CONCEPTS, EditorialConceptId } from '@/data/editorialCards';

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

// PREMIUM EDITORIAL APPLE-INSPIRED COLOR PALETTE (Predominant Alb, Aerisit & Rafinat)
export const BRAND_COLORS = {
  bg: '#FFFFFF',             // Pure crisp white canvas background
  bgCard: '#F8FAFC',         // Subtle editorial slate card surface
  bgCardHover: '#F1F5F9',
  border: '#E2E8F0',         // Hairline slate border (1px)
  borderStrong: '#CBD5E1',   // Defined border
  textPrimary: '#06141B',    // Deep slate black - optimal contrast (16:1)
  textSecondary: '#334155',  // Slate 700 - rich body text
  textBody: '#334155',       // Alias for rich body text
  textMuted: '#64748B',      // Slate 500 - meta & context text
  textSubtle: '#94A3B8',     // Slate 400 - disclaimers & footnotes
  risk: '#E10600',           // WHAT IF red signature accent
  riskBadgeBg: '#FEF2F2',    // Very soft pale red wash for risk badge
  riskBadgeBorder: '#FECACA',// Soft red border
  riskBadgeText: '#B91C1C',  // Deep readable red text for badge
  safe: '#06141B',           // Deep navy/black
  safeBadgeBg: '#F0FDF4',    // Very soft pale emerald wash
  safeBadgeBorder: '#BBF7D0',// Soft emerald border
  safeBadgeText: '#15803D',  // Deep readable emerald text for badge
  pillBg: '#F8FAFC',         // Header pill background
  divider: '#E2E8F0',        // 1px clean divider
};

/**
 * Text wrapping utility with smart word boundaries and natural wrapping
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number = 99
): string[] {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;

      if (lines.length === maxLines) {
        // If there are words still remaining after reaching maxLines, truncate cleanly
        const remainingWords = words.slice(i);
        if (remainingWords.length > 0) {
          let lastLine = lines[lines.length - 1];
          while (ctx.measureText(`${lastLine}...`).width > maxWidth && lastLine.length > 0) {
            const lastSpace = lastLine.lastIndexOf(' ');
            if (lastSpace === -1) {
              lastLine = lastLine.slice(0, -1);
            } else {
              lastLine = lastLine.slice(0, lastSpace);
            }
          }
          lines[lines.length - 1] = `${lastLine.replace(/[.,;:!?\s]+$/, '')}...`;
        }
        return lines;
      }
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  return lines;
}

/**
 * Draw a clean rounded rectangle with precise radius
 */
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.arcTo(x + width, y, x + width, y + r, r);
  ctx.lineTo(x + width, y + height - r);
  ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
  ctx.lineTo(x + r, y + height);
  ctx.arcTo(x, y + height, x, y + height - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/**
 * Helper to draw the standard branded editorial footer on any canvas export format
 */
export function drawBrandedEditorialFooter(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  paddingX: number,
  isStory: boolean,
  isFeed: boolean,
  isSquare: boolean,
  extraNote?: string
) {
  const footerH = isStory ? 104 : isFeed ? 88 : 78;
  const footerY = height - footerH;

  // Thin hairline divider
  ctx.strokeStyle = BRAND_COLORS.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(paddingX, footerY);
  ctx.lineTo(width - paddingX, footerY);
  ctx.stroke();

  // Footer Left: Brand & Phone
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('WHAT IF INSURANCE', paddingX, footerY + 28);

  ctx.fillStyle = '#06141B';
  ctx.font = '700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Tel: +40 767 110 439', paddingX, footerY + 48);

  if (isStory || isFeed) {
    ctx.fillStyle = BRAND_COLORS.textMuted;
    ctx.font = '500 11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(extraNote ? extraNote.slice(0, 50) : 'Educație despre riscuri cotidiene · Partener Generali', paddingX, footerY + 68);
  }
  ctx.restore();

  // Footer Right: Both Websites
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '700 12.5px -apple-system, BlinkMacSystemFont, monospace';
  ctx.fillText('whatifinsurance.cristianvaduva.com', width - paddingX, footerY + 28);

  ctx.fillStyle = '#0D9488';
  ctx.font = '700 12px -apple-system, BlinkMacSystemFont, monospace';
  ctx.fillText('insurance.cristianvaduva.com', width - paddingX, footerY + 48);

  if (isStory || isFeed) {
    ctx.fillStyle = BRAND_COLORS.textSubtle;
    ctx.font = '400 10.5px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('Verifică clauzele specifice din contractul tău', width - paddingX, footerY + 68);
  }
  ctx.restore();
}

/**
 * Main rendering function producing a professionally art-directed editorial infographic canvas
 */
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

  // 1. PREDOMINANT CRISP WHITE BACKGROUND
  ctx.fillStyle = BRAND_COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  // Subtle border around entire canvas for crisp edge framing
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, 16, 16, width - 32, height - 32, 24);
  ctx.stroke();

  // Layout parameters tailored to format
  const isStory = format === 'story';
  const isFeed = format === 'feed';
  const isSquare = format === 'square';

  const paddingX = isStory ? 72 : isFeed ? 64 : 54;
  const contentWidth = width - paddingX * 2;
  const topY = isStory ? 68 : isFeed ? 52 : 44;

  // 2. DISCRETE EDITORIAL HEADER BAR
  const pillHeight = isSquare ? 34 : 38;
  const pillY = topY;
  const categoryLabel = (scenario.categoryName || 'RISK ANALYSIS').toUpperCase();

  ctx.save();
  ctx.font = '700 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const catWidth = ctx.measureText(categoryLabel).width;
  const pillWidth = Math.max(300, 195 + catWidth);

  ctx.fillStyle = BRAND_COLORS.pillBg;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, paddingX, pillY, pillWidth, pillHeight, pillHeight / 2);
  ctx.fill();
  ctx.stroke();

  // Red signature indicator dot
  ctx.fillStyle = BRAND_COLORS.risk;
  ctx.beginPath();
  ctx.arc(paddingX + 18, pillY + pillHeight / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  // Branding text
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '800 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('WHAT IF INSURANCE', paddingX + 32, pillY + pillHeight / 2 + 4);

  ctx.fillStyle = BRAND_COLORS.textSubtle;
  ctx.font = '400 12px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('·', paddingX + 168, pillY + pillHeight / 2 + 3.5);

  // Category in uppercase
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = '700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(categoryLabel, paddingX + 180, pillY + pillHeight / 2 + 4);
  ctx.restore();

  // Right: Minimalist Wordmark [ WHAT IF INSURANCE ]
  ctx.save();
  ctx.textAlign = 'right';
  ctx.font = '400 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const insWidth = ctx.measureText('INSURANCE').width;
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.fillText('INSURANCE', width - paddingX, pillY + pillHeight / 2 + 5);

  ctx.font = '900 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.fillText('WHAT IF', width - paddingX - insWidth - 5, pillY + pillHeight / 2 + 5);
  ctx.restore();

  // 3. SCENARIO HERO IMAGE (Relevant incident image with deliberate spacing)
  const imgY = pillY + pillHeight + (isStory ? 20 : isFeed ? 16 : 12);
  const imgH = isStory ? 680 : isFeed ? 440 : 280;

  let imageLoaded = false;
  if (scenario.heroImage) {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = scenario.heroImage;

      await new Promise((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          imageLoaded = true;
          return resolve(true);
        }
        img.onload = () => {
          imageLoaded = true;
          resolve(true);
        };
        img.onerror = () => resolve(false);
        setTimeout(resolve, 1500);
      });

      if (imageLoaded && img.naturalWidth > 0) {
        ctx.save();
        drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, isStory ? 20 : 16);
        ctx.clip();

        // Calculate aspect fill
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const targetRatio = contentWidth / imgH;
        let sWidth = img.naturalWidth;
        let sHeight = img.naturalHeight;
        let sx = 0;
        let sy = 0;

        if (imgRatio > targetRatio) {
          sWidth = img.naturalHeight * targetRatio;
          sx = (img.naturalWidth - sWidth) / 2;
        } else {
          sHeight = img.naturalWidth / targetRatio;
          sy = (img.naturalHeight - sHeight) / 2;
        }

        if (typeof (ctx as any).drawImage === 'function') {
          ctx.drawImage(img, sx, sy, sWidth, sHeight, paddingX, imgY, contentWidth, imgH);
        }
        ctx.restore();

        // Elegant hairline border around photo
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, isStory ? 20 : 16);
        ctx.stroke();

        // Severity / Category badge floating in photo
        ctx.save();
        const sevLabel = (scenario.severityLabel || scenario.categoryName || 'AVARIE DOCUMENTATĂ').toUpperCase();
        ctx.font = '700 10.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const sevTextW = ctx.measureText(sevLabel).width;
        const badgeW = sevTextW + 36;
        const badgeH = 26;
        const bX = paddingX + 16;
        const bY = imgY + imgH - badgeH - 14;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
        ctx.strokeStyle = BRAND_COLORS.border;
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, bX, bY, badgeW, badgeH, badgeH / 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = BRAND_COLORS.risk;
        ctx.beginPath();
        ctx.arc(bX + 14, bY + badgeH / 2, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = BRAND_COLORS.textPrimary;
        ctx.fillText(sevLabel, bX + 24, bY + badgeH / 2 + 3.5);
        ctx.restore();
      }
    } catch {
      imageLoaded = false;
    }
  }

  // Fallback box if image is not loaded
  if (!imageLoaded) {
    ctx.save();
    ctx.fillStyle = BRAND_COLORS.bgCard;
    ctx.strokeStyle = BRAND_COLORS.border;
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, isStory ? 20 : 16);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = BRAND_COLORS.textMuted;
    ctx.font = '600 15px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(scenario.categoryName || 'Scenariu de risc', width / 2, imgY + imgH / 2);
    ctx.restore();
  }

  // 4. DELIBERATE SPACING, EYEBROW & PROMINENT ROMANIAN HEADLINE
  // Deliberate breathing room below image: title must NEVER touch or overlap photo
  const eyebrowY = imgY + imgH + (isStory ? 28 : isFeed ? 20 : 14);

  ctx.fillStyle = BRAND_COLORS.risk;
  ctx.font = '800 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '0.8px';
  ctx.fillText('STUDIU COMPARATIV DE ASIGURABILITATE', paddingX, eyebrowY);

  const headlineY = eyebrowY + (isStory ? 28 : isFeed ? 24 : 18);
  ctx.fillStyle = BRAND_COLORS.textPrimary;

  const rawQuestion = scenario.title || scenario.mainQuestion;
  const cleanQuestion = rawQuestion.replace(/^[„"']+|[”"']+$/g, '');

  const hFontSize = isStory ? 48 : isFeed ? 34 : 22;
  const hLineHeight = isStory ? 56 : isFeed ? 40 : 28;

  ctx.font = `800 ${hFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  ctx.letterSpacing = '-0.3px';

  const maxHLines = 2;
  const hLines = wrapText(ctx, cleanQuestion, contentWidth, maxHLines);
  hLines.forEach((line, idx) => {
    ctx.fillText(line, paddingX, headlineY + idx * hLineHeight);
  });

  const headlineBottom = headlineY + hLines.length * hLineHeight;

  // 5. SHORT SITUATION DESCRIPTION
  const situationY = headlineBottom + (isStory ? 16 : isFeed ? 12 : 10);
  const rawSituation = scenario.situation || scenario.shortDescription || '';
  const sitFontSize = isStory ? 15 : isFeed ? 13 : 11.5;
  const sitLineHeight = isStory ? 22 : isFeed ? 18 : 16;
  const maxSitLines = isStory ? 2 : 1;

  ctx.save();
  ctx.fillStyle = BRAND_COLORS.textSecondary;
  ctx.font = `400 ${sitFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  const sitLines = wrapText(ctx, rawSituation, contentWidth, maxSitLines);
  sitLines.forEach((line, idx) => {
    ctx.fillText(line, paddingX, situationY + idx * sitLineHeight);
  });
  ctx.restore();

  const situationBottom = situationY + sitLines.length * sitLineHeight;

  // 6. STRUCTURED TWO-COLUMN COMPARISON (CU ASIGURARE vs FĂRĂ ASIGURARE)
  const compStartY = situationBottom + (isStory ? 24 : isFeed ? 16 : 12);
  const colGap = isStory ? 20 : isFeed ? 16 : 14;
  const colW = (contentWidth - colGap) / 2;

  // Calculate available height for comparison
  const footerH = isStory ? 104 : isFeed ? 88 : 78;
  const caveatH = isStory ? 70 : isFeed ? 48 : 34;
  const availableH = height - compStartY - footerH - caveatH - (isStory ? 24 : 16);
  const compH = Math.max(isStory ? 540 : isFeed ? 440 : 390, Math.min(availableH, isStory ? 660 : isFeed ? 510 : 430));

  // Extract scenario-specific points
  const withPoints = scenario.withInsurance?.points || [];
  const withoutPoints = scenario.withoutInsurance?.points || [];
  const checkItems = scenario.whatToCheck?.items || [];

  // WITH INSURANCE CONTENT
  const withCoverage = withPoints[0] || scenario.withInsurance?.statusLabel || 'Poate fi despăgubit, în funcție de clauzele poliței contractate';
  const withConditions = checkItems[0]?.detail || checkItems[0]?.label || withPoints[1] || 'Respectarea normelor de conservare și notificare promptă';
  const withDeductible = 'Franșiză contractuală (dacă este prevăzută) sau uzură la piese';

  // WITHOUT INSURANCE CONTENT
  const withoutOutOfPocket = withoutPoints[0] || scenario.withoutInsurance?.financialImpact || 'Costuri suportate integral din economii proprii';
  const withoutRepairs = withoutPoints[1] || scenario.withoutInsurance?.points[1] || 'Reparații și înlocuiri achitate integral din fonduri personale';
  const withoutConsequences = scenario.withoutInsurance?.summary || 'Consecințe financiare neprevăzute și efort bugetar direct';

  // --- COLUMN 1: CU ASIGURARE (Clean white editorial surface with calm green accent) ---
  const col1X = paddingX;
  ctx.save();
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, col1X, compStartY, colW, compH, 16);
  ctx.fill();
  ctx.stroke();

  // Top highlight bar (Calm Forest Green)
  ctx.fillStyle = '#163832';
  drawRoundedRect(ctx, col1X, compStartY, colW, 5, 2);
  ctx.fill();

  // Column 1 Header Badge: [ ● CU ASIGURARE ]
  const badge1W = isStory ? 170 : isFeed ? 150 : 130;
  const badge1H = isStory ? 32 : 28;
  const badge1Y = compStartY + (isStory ? 18 : 14);
  drawRoundedRect(ctx, col1X + 16, badge1Y, badge1W, badge1H, badge1H / 2);
  ctx.fillStyle = '#F0FDF4';
  ctx.fill();
  ctx.strokeStyle = '#BBF7D0';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#15803D';
  ctx.beginPath();
  ctx.arc(col1X + 28, badge1Y + badge1H / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#15803D';
  ctx.font = '800 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('CU ASIGURARE', col1X + 38, badge1Y + badge1H / 2 + 4);

  // Column 1 Sections:
  const colInnerPad = isStory ? 20 : 14;
  const colInnerW = colW - colInnerPad * 2;
  const sectionGap = isStory ? 26 : isFeed ? 18 : 14;
  let curY1 = badge1Y + badge1H + (isStory ? 24 : 16);

  // Function to render a comparison block inside column
  const renderColBlock = (
    label: string,
    body: string,
    accentColor: string,
    startY: number
  ): number => {
    ctx.save();
    ctx.fillStyle = accentColor;
    ctx.font = '800 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.letterSpacing = '0.6px';
    ctx.fillText(label.toUpperCase(), col1X + colInnerPad, startY);

    const bodyFontSize = isStory ? 13.5 : isFeed ? 12 : 10.5;
    const bodyLineHeight = isStory ? 19 : isFeed ? 16 : 14;
    ctx.fillStyle = '#1E293B';
    ctx.font = `500 ${bodyFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.letterSpacing = '0px';

    const maxLines = isStory ? 3 : 2;
    const lines = wrapText(ctx, body, colInnerW, maxLines);
    lines.forEach((l, i) => {
      ctx.fillText(l, col1X + colInnerPad, startY + (isStory ? 16 : 13) + i * bodyLineHeight);
    });
    ctx.restore();
    return startY + (isStory ? 16 : 13) + lines.length * bodyLineHeight;
  };

  curY1 = renderColBlock('Ce ar putea fi despăgubit', withCoverage, '#15803D', curY1) + sectionGap;
  curY1 = renderColBlock('Ce condiții trebuie îndeplinite', withConditions, '#0284C7', curY1) + sectionGap;
  curY1 = renderColBlock('Costuri posibile în sarcina ta', withDeductible, '#64748B', curY1);
  ctx.restore();

  // --- COLUMN 2: FĂRĂ ASIGURARE (Distinct warm tinted surface with restrained red accent) ---
  const col2X = paddingX + colW + colGap;
  ctx.save();
  ctx.fillStyle = '#FFFDFD';
  ctx.strokeStyle = '#FECACA';
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, col2X, compStartY, colW, compH, 16);
  ctx.fill();
  ctx.stroke();

  // Top highlight bar (Restrained Crimson Red)
  ctx.fillStyle = '#DE1110';
  drawRoundedRect(ctx, col2X, compStartY, colW, 5, 2);
  ctx.fill();

  // Column 2 Header Badge: [ ● FĂRĂ ASIGURARE ]
  const badge2W = isStory ? 180 : isFeed ? 160 : 140;
  const badge2H = isStory ? 32 : 28;
  const badge2Y = compStartY + (isStory ? 18 : 14);
  drawRoundedRect(ctx, col2X + 16, badge2Y, badge2W, badge2H, badge2H / 2);
  ctx.fillStyle = '#FEF2F2';
  ctx.fill();
  ctx.strokeStyle = '#FECACA';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#B91C1C';
  ctx.beginPath();
  ctx.arc(col2X + 28, badge2Y + badge2H / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#B91C1C';
  ctx.font = '800 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('FĂRĂ ASIGURARE', col2X + 38, badge2Y + badge2H / 2 + 4);

  // Column 2 Sections:
  let curY2 = badge2Y + badge2H + (isStory ? 24 : 16);

  const renderCol2Block = (
    label: string,
    body: string,
    accentColor: string,
    startY: number
  ): number => {
    ctx.save();
    ctx.fillStyle = accentColor;
    ctx.font = '800 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.letterSpacing = '0.6px';
    ctx.fillText(label.toUpperCase(), col2X + colInnerPad, startY);

    const bodyFontSize = isStory ? 13.5 : isFeed ? 12 : 10.5;
    const bodyLineHeight = isStory ? 19 : isFeed ? 16 : 14;
    ctx.fillStyle = '#1E293B';
    ctx.font = `500 ${bodyFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.letterSpacing = '0px';

    const maxLines = isStory ? 3 : 2;
    const lines = wrapText(ctx, body, colInnerW, maxLines);
    lines.forEach((l, i) => {
      ctx.fillText(l, col2X + colInnerPad, startY + (isStory ? 16 : 13) + i * bodyLineHeight);
    });
    ctx.restore();
    return startY + (isStory ? 16 : 13) + lines.length * bodyLineHeight;
  };

  curY2 = renderCol2Block('Costuri suportate personal', withoutOutOfPocket, '#B91C1C', curY2) + sectionGap;
  curY2 = renderCol2Block('Reparații din fonduri proprii', withoutRepairs, '#B91C1C', curY2) + sectionGap;
  curY2 = renderCol2Block('Consecințe financiare', withoutConsequences, '#64748B', curY2);
  ctx.restore();

  // 7. CONCISE CONTRACTUAL CAVEAT (Between comparison and footer)
  const caveatY = compStartY + compH + (isStory ? 18 : isFeed ? 12 : 10);
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.textSubtle;
  ctx.font = `400 ${isStory ? 11 : isFeed ? 10 : 9.5}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  const caveatText = 'Analiză comparativă cu rol educațional. Despăgubirea efectivă depinde de termenii poliței, excluderi, franșize și respectarea măsurilor preventive de conservare.';
  const caveatLines = wrapText(ctx, caveatText, contentWidth, isStory ? 2 : 1);
  caveatLines.forEach((cl, i) => {
    ctx.fillText(cl, paddingX, caveatY + i * (isStory ? 16 : 13));
  });
  ctx.restore();

  // 8. CLEAN BRANDED FOOTER (With phone number and both websites)
  drawBrandedEditorialFooter(ctx, width, height, paddingX, isStory, isFeed, isSquare);
}


export interface ChallengeResultData {
  score: number;
  totalQuestions: number;
  categoryName?: string;
}

/**
 * Renders an Apple-inspired editorial Share image for the educational challenge result
 */
export async function renderChallengeResultToCanvas(
  canvas: HTMLCanvasElement,
  result: ChallengeResultData,
  format: StoryFormat = 'story'
): Promise<void> {
  const config = FORMAT_CONFIGS[format];
  const { width, height } = config;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isStory = format === 'story';
  const isFeed = format === 'feed';
  const paddingX = isStory ? 90 : isFeed ? 80 : 70;
  const contentWidth = width - paddingX * 2;

  // 1. PURE CRISP WHITE BACKGROUND
  ctx.fillStyle = BRAND_COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  // 2. SUBTLE REFINED EDITORIAL OUTER BORDER
  const borderInset = 20;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1.5;
  drawRoundedRect(
    ctx,
    borderInset,
    borderInset,
    width - borderInset * 2,
    height - borderInset * 2,
    28
  );
  ctx.stroke();

  // 3. EDITORIAL HEADER & BRAND PILL
  const headerY = isStory ? 90 : isFeed ? 70 : 60;

  // Pill Background
  const pillW = 280;
  const pillH = 40;
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.pillBg;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, paddingX, headerY, pillW, pillH, 20);
  ctx.fill();
  ctx.stroke();

  // Red accent dot
  ctx.fillStyle = BRAND_COLORS.risk;
  ctx.beginPath();
  ctx.arc(paddingX + 22, headerY + 20, 4.5, 0, Math.PI * 2);
  ctx.fill();

  // Pill Label
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('PROVOCARE EDUCAȚIONALĂ', paddingX + 38, headerY + 24);
  ctx.restore();

  // Right Header Brand
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '1.5px';
  ctx.fillText('WHAT IF INSURANCE', width - paddingX, headerY + 25);
  ctx.restore();

  // 4. MAIN HEADLINE
  const titleY = headerY + 70;
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = isStory
    ? '900 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    : isFeed
    ? '900 40px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    : '900 34px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  const titleLines = wrapText(
    ctx,
    'Ai fi știut ce să verifici în contractul tău de asigurare?',
    contentWidth,
    3
  );
  titleLines.forEach((line, idx) => {
    ctx.fillText(line, paddingX, titleY + idx * (isStory ? 58 : isFeed ? 48 : 42));
  });

  const afterTitleY = titleY + titleLines.length * (isStory ? 58 : isFeed ? 48 : 42) + 20;

  // 5. SCORE SHOWCASE CARD
  const scoreCardY = afterTitleY;
  const scoreCardH = isStory ? 240 : isFeed ? 200 : 160;

  ctx.save();
  ctx.fillStyle = BRAND_COLORS.bgCard;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, paddingX, scoreCardY, contentWidth, scoreCardH, 24);
  ctx.fill();
  ctx.stroke();

  // Badge inside score card
  const badgeW = 160;
  const badgeH = 32;
  const badgeX = paddingX + 30;
  const badgeY = scoreCardY + 24;

  ctx.fillStyle = BRAND_COLORS.safeBadgeBg;
  ctx.strokeStyle = BRAND_COLORS.safeBadgeBorder;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = BRAND_COLORS.safeBadgeText;
  ctx.font = '800 12px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText('REZULTAT OFICIAL', badgeX + 18, badgeY + 20);

  // Big Score Display
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = isStory ? '900 72px -apple-system, BlinkMacSystemFont, sans-serif' : '900 58px -apple-system, BlinkMacSystemFont, sans-serif';
  const scoreText = `${result.score} din ${result.totalQuestions}`;
  ctx.fillText(scoreText, paddingX + 30, badgeY + (isStory ? 95 : 80));

  // Score label
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = '600 15px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText(
    'situații cotidiene de risc analizate corect',
    paddingX + 30,
    badgeY + (isStory ? 135 : 115)
  );
  ctx.restore();

  // 6. EDITORIAL TAKEAWAY & ADVICE
  const adviceY = scoreCardY + scoreCardH + 30;
  const adviceH = isStory ? 340 : isFeed ? 280 : 200;

  ctx.save();
  ctx.fillStyle = BRAND_COLORS.bg;
  ctx.strokeStyle = BRAND_COLORS.borderStrong;
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, paddingX, adviceY, contentWidth, adviceH, 24);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '800 18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('Ce arată acest rezultat:', paddingX + 30, adviceY + 40);

  const evaluationText =
    result.score >= Math.round(result.totalQuestions * 0.8)
      ? 'Ai o intuiție excelentă a mecanismelor contractuale, însă decizia de despăgubire depinde întotdeauna de excluderile specifice din dosar.'
      : 'Atenție la clauzele scrise mărunt! Majoritatea asiguraților descoperă ce nu acoperă polița abia în momentul refuzului de plată.';

  ctx.fillStyle = BRAND_COLORS.textSecondary;
  ctx.font = '500 16px -apple-system, BlinkMacSystemFont, sans-serif';
  const adviceLines = wrapText(ctx, evaluationText, contentWidth - 60, 4);
  adviceLines.forEach((l, i) => {
    ctx.fillText(l, paddingX + 30, adviceY + 75 + i * 26);
  });

  // Checklist pointers inside takeaway
  const checkStartY = adviceY + 80 + adviceLines.length * 26 + 15;
  const checkItems = [
    '✓ Verifică riscurile numite vs. acoperirea All-Risks',
    '✓ Identifică excluderea de neglijență și forțare a apei',
    '✓ Reține termenul contractual de avizare (ex. 3 zile lucrătoare Eurocasa)',
  ];

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '700 14px -apple-system, BlinkMacSystemFont, sans-serif';
  checkItems.slice(0, isStory ? 3 : isFeed ? 2 : 1).forEach((item, i) => {
    ctx.fillText(item, paddingX + 30, checkStartY + i * 28);
  });
  ctx.restore();

  // 7. CALL TO ACTION BOX (WHAT IF INVITATION)
  if (isStory || isFeed) {
    const ctaBoxY = adviceY + adviceH + 30;
    const ctaBoxH = isStory ? 150 : 120;

    ctx.save();
    ctx.fillStyle = BRAND_COLORS.bgCard;
    ctx.strokeStyle = BRAND_COLORS.border;
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, paddingX, ctaBoxY, contentWidth, ctaBoxH, 20);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = BRAND_COLORS.textMuted;
    ctx.font = '700 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText(
      'ACCEPTĂ PROVOCAREA ȘI TESTEAZĂ-ȚI INTUIȚIA PE',
      width / 2,
      ctaBoxY + (isStory ? 48 : 42)
    );

    ctx.fillStyle = BRAND_COLORS.textPrimary;
    ctx.font = isStory
      ? '900 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace'
      : '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace';
    ctx.fillText('whatifinsurance.cristianvaduva.com', width / 2, ctaBoxY + (isStory ? 95 : 82));
    ctx.restore();
  }

  // 8. ELEGANT EDITORIAL FOOTER
  const footerH = isStory ? 84 : isFeed ? 74 : 64;
  const footerY = height - footerH;

  ctx.strokeStyle = BRAND_COLORS.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(paddingX, footerY);
  ctx.lineTo(width - paddingX, footerY);
  ctx.stroke();

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('WHAT IF INSURANCE', paddingX, footerY + 32);

  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = '500 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Educație despre riscuri cotidiene · Partener Generali', paddingX, footerY + 52);

  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '700 13px -apple-system, BlinkMacSystemFont, monospace';
  ctx.fillText('whatifinsurance.cristianvaduva.com', width - paddingX, footerY + 32);

  ctx.fillStyle = BRAND_COLORS.textSubtle;
  ctx.font = '400 11px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('Verifică clauzele specifice din contractul tău', width - paddingX, footerY + 52);
  ctx.restore();
}

/**
 * Renders an authentic, Apple-inspired editorial card for Viral Content Engine 2.0
 * Supports all 8 distinct editorial concepts across Story, Feed, and Square formats.
 */
export async function renderEditorialCardToCanvas(
  canvas: HTMLCanvasElement,
  card: EditorialCard,
  format: StoryFormat = 'story'
): Promise<void> {
  const config = FORMAT_CONFIGS[format];
  const { width, height } = config;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isStory = format === 'story';
  const isFeed = format === 'feed';
  const isSquare = format === 'square';

  const paddingX = isStory ? 80 : isFeed ? 70 : 60;
  const contentWidth = width - paddingX * 2;

  // 1. PURE WHITE BACKGROUND & EDITORIAL BORDER
  ctx.fillStyle = BRAND_COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  const borderInset = 20;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1.5;
  drawRoundedRect(
    ctx,
    borderInset,
    borderInset,
    width - borderInset * 2,
    height - borderInset * 2,
    28
  );
  ctx.stroke();

  // 2. CONCEPT HEADER PILL
  const headerY = isStory ? 85 : isFeed ? 65 : 55;
  const conceptMeta = EDITORIAL_CONCEPTS[card.conceptId];

  const pillW = isStory ? 320 : isFeed ? 290 : 270;
  const pillH = 38;
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.pillBg;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, paddingX, headerY, pillW, pillH, 19);
  ctx.fill();
  ctx.stroke();

  const dotColor =
    card.conceptId === 'myth_vs_fact' || card.conceptId === 'hidden_detail' || card.conceptId === 'challenge_friend'
      ? BRAND_COLORS.risk
      : card.conceptId === 'two_policies' || card.conceptId === 'did_you_know'
      ? '#0284C7'
      : BRAND_COLORS.textPrimary;

  ctx.fillStyle = dotColor;
  ctx.beginPath();
  ctx.arc(paddingX + 20, headerY + 19, 4.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '800 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(conceptMeta.englishTitle, paddingX + 36, headerY + 24);
  ctx.restore();

  // Right Header Brand
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '1.5px';
  ctx.fillText('WHAT IF INSURANCE', width - paddingX, headerY + 24);
  ctx.restore();

  // 3. CINEMATIC EDITORIAL HERO IMAGE (Tasteful framing with rounded clipping and category tag)
  let imgH = 0;
  if (typeof Image !== 'undefined' && card.heroImage) {
    const desiredImgH = isStory ? 640 : isFeed ? 460 : 320;
    const imgY = headerY + 46;
    let imageLoaded = false;
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = card.heroImage;
      await new Promise<boolean>((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          imageLoaded = true;
          return resolve(true);
        }
        img.onload = () => {
          imageLoaded = true;
          resolve(true);
        };
        img.onerror = () => resolve(false);
        setTimeout(() => resolve(false), 1500);
      });

      if (imageLoaded && img.naturalWidth > 0) {
        imgH = desiredImgH;
        ctx.save();
        drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, 18);
        ctx.clip();

        // Calculate aspect fill
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const targetRatio = contentWidth / imgH;
        let sWidth = img.naturalWidth;
        let sHeight = img.naturalHeight;
        let sx = 0;
        let sy = 0;

        if (imgRatio > targetRatio) {
          sWidth = img.naturalHeight * targetRatio;
          sx = (img.naturalWidth - sWidth) / 2;
        } else {
          sHeight = img.naturalWidth / targetRatio;
          sy = (img.naturalHeight - sHeight) / 2;
        }

        if (typeof (ctx as any).drawImage === 'function') {
          ctx.drawImage(img, sx, sy, sWidth, sHeight, paddingX, imgY, contentWidth, imgH);
        }
        ctx.restore();

        // Elegant hairline border around photo
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, 18);
        ctx.stroke();

        // Subtle category badge floating on top-left of image
        ctx.save();
        const catLabel = card.category.toUpperCase();
        ctx.font = '800 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const catW = ctx.measureText(catLabel).width + 24;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
        drawRoundedRect(ctx, paddingX + 16, imgY + 16, catW, 26, 6);
        ctx.fill();
        ctx.fillStyle = BRAND_COLORS.textPrimary;
        ctx.fillText(catLabel, paddingX + 28, imgY + 23);
        ctx.restore();
      }
    } catch {
      imgH = 0;
    }
  }

  // 4. EDITORIAL HEADLINE WITH GENEROUS SPACING BELOW PHOTO
  const imgBottom = headerY + 46 + imgH;
  const headlineGap = isStory ? 36 : isFeed ? 28 : 20;
  const headlineFontSize = isStory
    ? (imgH > 0 ? 46 : 50)
    : isFeed
    ? (imgH > 0 ? 34 : 38)
    : (imgH > 0 ? 24 : 28);
  const headlineLineHeight = isStory ? 56 : isFeed ? 42 : 30;

  // Account for Canvas 2D alphabetic text baseline so letters NEVER touch or overlap image
  const titleY = imgH > 0
    ? imgBottom + headlineGap + Math.round(headlineFontSize * 0.85)
    : headerY + (isStory ? 80 : isFeed ? 65 : 52);

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = `900 ${headlineFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

  const headlineMaxLines = isStory ? 3 : 2;
  const titleLines = wrapText(ctx, card.headline, contentWidth, headlineMaxLines);
  titleLines.forEach((l, idx) => {
    ctx.fillText(l, paddingX, titleY + idx * headlineLineHeight);
  });

  let currentY = titleY + (titleLines.length - 1) * headlineLineHeight + Math.round(headlineFontSize * 0.3) + (isStory ? 24 : isFeed ? 18 : 12);

  // 5. CONCEPT-SPECIFIC LAYOUTS
  switch (card.conceptId) {
    case 'hidden_detail': {
      // Large quote box with red/amber accent bar
      const quoteBoxH = isStory ? 320 : isFeed ? 250 : 180;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bgCard;
      ctx.strokeStyle = BRAND_COLORS.borderStrong;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, quoteBoxH, 20);
      ctx.fill();
      ctx.stroke();

      // Vertical Accent Bar
      ctx.fillStyle = BRAND_COLORS.risk;
      drawRoundedRect(ctx, paddingX + 16, currentY + 18, 4, quoteBoxH - 36, 2);
      ctx.fill();

      // Clause Tag
      ctx.fillStyle = BRAND_COLORS.risk;
      ctx.font = '800 12px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.letterSpacing = '0.5px';
      ctx.fillText(card.clauseName, paddingX + 32, currentY + 36);

      // Quoted Clause text
      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? 'italic 500 20px -apple-system, sans-serif' : isFeed ? 'italic 500 17px -apple-system, sans-serif' : 'italic 500 15px -apple-system, sans-serif';
      const quoteLines = wrapText(ctx, card.clauseQuote, contentWidth - 60, isStory ? 6 : isFeed ? 5 : 3);
      quoteLines.forEach((ql, qi) => {
        ctx.fillText(ql, paddingX + 32, currentY + 68 + qi * (isStory ? 28 : isFeed ? 24 : 20));
      });
      ctx.restore();

      currentY += quoteBoxH + (isStory ? 26 : isFeed ? 18 : 12);

      // Real Consequence Box
      const consH = isStory ? 220 : isFeed ? 180 : 130;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bg;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, consH, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '800 16px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('Ce riști în practică:', paddingX + 24, currentY + 32);

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 15px -apple-system, BlinkMacSystemFont, sans-serif';
      const consLines = wrapText(ctx, card.realConsequence, contentWidth - 48, isStory ? 4 : isFeed ? 3 : 2);
      consLines.forEach((cl, ci) => {
        ctx.fillText(cl, paddingX + 24, currentY + 60 + ci * 24);
      });
      ctx.restore();

      currentY += consH + (isStory ? 20 : isFeed ? 14 : 10);

      // Where to find in contract guidance
      if (isStory || isFeed) {
        ctx.fillStyle = BRAND_COLORS.textMuted;
        ctx.font = '600 13px -apple-system, BlinkMacSystemFont, monospace';
        ctx.fillText('UNDE O GĂSEȘTI: ' + card.whereToFind, paddingX, currentY + 20);
      }
      break;
    }

    case 'myth_vs_fact': {
      // 1. Myth Box (Red tint wash)
      const mythH = isStory ? 260 : isFeed ? 210 : 150;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.riskBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.riskBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, mythH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.riskBadgeText;
      ctx.font = '800 13px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText('✕  MITUL COMUN', paddingX + 24, currentY + 32);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? '700 20px -apple-system, sans-serif' : '700 17px -apple-system, sans-serif';
      const mythLines = wrapText(ctx, card.mythText, contentWidth - 48, isStory ? 3 : 2);
      mythLines.forEach((ml, mi) => {
        ctx.fillText(ml, paddingX + 24, currentY + 64 + mi * 28);
      });

      if (isStory) {
        ctx.fillStyle = BRAND_COLORS.textMuted;
        ctx.font = '400 14px -apple-system, sans-serif';
        const reasonLines = wrapText(ctx, card.mythReason, contentWidth - 48, 2);
        reasonLines.forEach((rl, ri) => {
          ctx.fillText(rl, paddingX + 24, currentY + 130 + ri * 22);
        });
      }
      ctx.restore();

      currentY += mythH + (isStory ? 24 : isFeed ? 16 : 12);

      // 2. Fact Box (Emerald tint wash)
      const factH = isStory ? 340 : isFeed ? 260 : 180;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.safeBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.safeBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, factH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.safeBadgeText;
      ctx.font = '800 13px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText('✓  REALITATEA CONTRACTUALĂ', paddingX + 24, currentY + 32);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? '800 20px -apple-system, sans-serif' : '800 17px -apple-system, sans-serif';
      const factLines = wrapText(ctx, card.factText, contentWidth - 48, isStory ? 3 : 2);
      factLines.forEach((fl, fi) => {
        ctx.fillText(fl, paddingX + 24, currentY + 64 + fi * 28);
      });

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 15px -apple-system, sans-serif';
      const realLines = wrapText(ctx, card.contractualReality, contentWidth - 48, isStory ? 5 : isFeed ? 4 : 2);
      realLines.forEach((rl, ri) => {
        ctx.fillText(rl, paddingX + 24, currentY + (isStory ? 130 : 105) + ri * 24);
      });
      ctx.restore();
      break;
    }

    case 'what_would_you_do': {
      // Dilemma statement
      const dilH = isStory ? 180 : isFeed ? 140 : 100;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bgCard;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, dilH, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '800 15px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('DILEMA:', paddingX + 24, currentY + 30);

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = isStory ? '600 18px -apple-system, sans-serif' : '600 16px -apple-system, sans-serif';
      const dilLines = wrapText(ctx, card.scenarioDilemma, contentWidth - 48, isStory ? 3 : 2);
      dilLines.forEach((dl, di) => {
        ctx.fillText(dl, paddingX + 24, currentY + 60 + di * 26);
      });
      ctx.restore();

      currentY += dilH + (isStory ? 20 : isFeed ? 14 : 10);

      // Option A Card
      const optH = isStory ? 170 : isFeed ? 135 : 100;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bg;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, optH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '700 15px -apple-system, sans-serif';
      ctx.fillText(card.optionA.label, paddingX + 20, currentY + 28);

      ctx.fillStyle = BRAND_COLORS.textMuted;
      ctx.font = '400 14px -apple-system, sans-serif';
      const aLines = wrapText(ctx, card.optionA.explanation, contentWidth - 40, isStory ? 3 : 2);
      aLines.forEach((al, ai) => ctx.fillText(al, paddingX + 20, currentY + 54 + ai * 22));
      ctx.restore();

      currentY += optH + (isStory ? 16 : isFeed ? 12 : 8);

      // Option B Card (Highlighted)
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.safeBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.safeBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, optH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.safeBadgeText;
      ctx.font = '800 15px -apple-system, sans-serif';
      ctx.fillText(card.optionB.label, paddingX + 20, currentY + 28);

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 14px -apple-system, sans-serif';
      const bLines = wrapText(ctx, card.optionB.explanation, contentWidth - 40, isStory ? 3 : 2);
      bLines.forEach((bl, bi) => ctx.fillText(bl, paddingX + 20, currentY + 54 + bi * 22));
      ctx.restore();

      currentY += optH + (isStory ? 20 : isFeed ? 14 : 10);

      // Verdict Banner
      if (isStory || isFeed) {
        ctx.fillStyle = BRAND_COLORS.textPrimary;
        ctx.font = '800 14px -apple-system, sans-serif';
        ctx.fillText('VERDICTUL CONTRACTUAL:', paddingX, currentY + 20);
        ctx.font = '500 14px -apple-system, sans-serif';
        ctx.fillStyle = BRAND_COLORS.textSecondary;
        const vLines = wrapText(ctx, card.verdictLaw, contentWidth, 2);
        vLines.forEach((vl, vi) => ctx.fillText(vl, paddingX, currentY + 44 + vi * 22));
      }
      break;
    }

    case 'fine_print': {
      // 3 Numeric Breakdown Cards Stacked or Row
      const statCardH = isStory ? 120 : isFeed ? 95 : 75;

      // Box 1: Total
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bgCard;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, statCardH, 16);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = BRAND_COLORS.textMuted;
      ctx.font = '600 12px -apple-system, sans-serif';
      ctx.fillText('SUMA ASIGURATĂ GENERALĂ', paddingX + 20, currentY + 28);
      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? '800 24px -apple-system, sans-serif' : '800 20px -apple-system, sans-serif';
      ctx.fillText(card.totalInsuredAmount, paddingX + 20, currentY + 68);
      ctx.restore();

      currentY += statCardH + 12;

      // Box 2: Sublimit (Red border)
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.riskBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.riskBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, statCardH, 16);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = BRAND_COLORS.riskBadgeText;
      ctx.font = '800 12px -apple-system, sans-serif';
      ctx.fillText('SUBLIMITĂ CLAUZĂ (FĂRĂ SEIF)', paddingX + 20, currentY + 28);
      ctx.fillStyle = BRAND_COLORS.riskBadgeText;
      ctx.font = isStory ? '900 24px -apple-system, sans-serif' : '900 20px -apple-system, sans-serif';
      ctx.fillText(card.sublimitAmount, paddingX + 20, currentY + 68);
      ctx.restore();

      currentY += statCardH + 12;

      // Box 3: Out of pocket
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bg;
      ctx.strokeStyle = BRAND_COLORS.borderStrong;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, statCardH, 16);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '800 12px -apple-system, sans-serif';
      ctx.fillText('PIERDERE SUPORTATĂ DIN BUZUNAR', paddingX + 20, currentY + 28);
      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? '900 24px -apple-system, sans-serif' : '900 20px -apple-system, sans-serif';
      ctx.fillText(card.outOfPocketCost, paddingX + 20, currentY + 68);
      ctx.restore();

      currentY += statCardH + (isStory ? 24 : isFeed ? 16 : 10);

      // Clause explanation
      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '800 16px -apple-system, sans-serif';
      ctx.fillText('Ce spune clauza scrisă mărunt:', paddingX, currentY + 20);

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 15px -apple-system, sans-serif';
      const fpLines = wrapText(ctx, card.clauseExplanation, contentWidth, isStory ? 5 : isFeed ? 3 : 2);
      fpLines.forEach((fl, fi) => ctx.fillText(fl, paddingX, currentY + 46 + fi * 24));
      break;
    }

    case 'two_policies': {
      // Declared Assumptions Pill
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.pillBg;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, 34, 17);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = BRAND_COLORS.textMuted;
      ctx.font = '600 11px -apple-system, sans-serif';
      ctx.fillText(card.declaredAssumptions, paddingX + 16, currentY + 21);
      ctx.restore();

      currentY += 46;

      // Policy A (Standard/Limited)
      const polH = isStory ? 220 : isFeed ? 175 : 125;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.riskBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.riskBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, polH, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.riskBadgeText;
      ctx.font = '800 13px -apple-system, sans-serif';
      ctx.fillText(card.policyA.name, paddingX + 20, currentY + 28);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '500 14px -apple-system, sans-serif';
      const paLines = wrapText(ctx, card.policyA.coverage, contentWidth - 40, isStory ? 3 : 2);
      paLines.forEach((pal, pai) => ctx.fillText(pal, paddingX + 20, currentY + 54 + pai * 22));

      ctx.fillStyle = BRAND_COLORS.riskBadgeText;
      ctx.font = '700 14px -apple-system, monospace';
      ctx.fillText(card.policyA.userOutPocket, paddingX + 20, currentY + polH - 18);
      ctx.restore();

      currentY += polH + 16;

      // Policy B (Optimal/All-Risks)
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.safeBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.safeBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, polH, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.safeBadgeText;
      ctx.font = '800 13px -apple-system, sans-serif';
      ctx.fillText(card.policyB.name, paddingX + 20, currentY + 28);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '500 14px -apple-system, sans-serif';
      const pbLines = wrapText(ctx, card.policyB.coverage, contentWidth - 40, isStory ? 3 : 2);
      pbLines.forEach((pbl, pbi) => ctx.fillText(pbl, paddingX + 20, currentY + 54 + pbi * 22));

      ctx.fillStyle = BRAND_COLORS.safeBadgeText;
      ctx.font = '700 14px -apple-system, monospace';
      ctx.fillText(card.policyB.userOutPocket, paddingX + 20, currentY + polH - 18);
      ctx.restore();

      currentY += polH + 20;

      // Key difference note
      if (isStory || isFeed) {
        ctx.fillStyle = BRAND_COLORS.textPrimary;
        ctx.font = '800 14px -apple-system, sans-serif';
        ctx.fillText('DE CE EXISTĂ ACEASTĂ DIFERENȚĂ:', paddingX, currentY + 16);
        ctx.fillStyle = BRAND_COLORS.textSecondary;
        ctx.font = '500 14px -apple-system, sans-serif';
        const diffLines = wrapText(ctx, card.keyDifferenceReason, contentWidth, 2);
        diffLines.forEach((dl, di) => ctx.fillText(dl, paddingX, currentY + 40 + di * 22));
      }
      break;
    }

    case 'did_you_know': {
      // Giant Stat Highlight Card
      const statH = isStory ? 280 : isFeed ? 210 : 150;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bgCard;
      ctx.strokeStyle = BRAND_COLORS.borderStrong;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, statH, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0284C7';
      ctx.font = '800 13px -apple-system, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText('DESCOPERIRE CONTRACTUALĂ CHEIE', paddingX + 28, currentY + 36);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? '900 36px -apple-system, sans-serif' : isFeed ? '900 28px -apple-system, sans-serif' : '900 22px -apple-system, sans-serif';
      const statLines = wrapText(ctx, card.statHighlight, contentWidth - 56, 2);
      statLines.forEach((sl, si) => ctx.fillText(sl, paddingX + 28, currentY + (isStory ? 84 : 70) + si * 42));

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 15px -apple-system, sans-serif';
      const ctxLines = wrapText(ctx, card.contextExplanation, contentWidth - 56, isStory ? 4 : 2);
      ctxLines.forEach((cl, ci) => ctx.fillText(cl, paddingX + 28, currentY + (isStory ? 175 : 130) + ci * 24));
      ctx.restore();

      currentY += statH + (isStory ? 24 : isFeed ? 16 : 12);

      // Practical Insight Box
      const pracH = isStory ? 220 : isFeed ? 160 : 110;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bg;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, pracH, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '800 16px -apple-system, sans-serif';
      ctx.fillText('De ce contează pentru tine:', paddingX + 24, currentY + 32);

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 15px -apple-system, sans-serif';
      const pracLines = wrapText(ctx, card.practicalInsight, contentWidth - 48, isStory ? 4 : isFeed ? 3 : 2);
      pracLines.forEach((pl, pi) => ctx.fillText(pl, paddingX + 24, currentY + 60 + pi * 24));
      ctx.restore();
      break;
    }

    case 'check_policy': {
      // 3 Checkboxes
      const itemH = isStory ? 150 : isFeed ? 120 : 85;
      card.questionsToCheck.slice(0, 3).forEach((item, idx) => {
        ctx.save();
        ctx.fillStyle = BRAND_COLORS.bgCard;
        ctx.strokeStyle = BRAND_COLORS.border;
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, paddingX, currentY, contentWidth, itemH, 16);
        ctx.fill();
        ctx.stroke();

        // Check icon circle
        ctx.fillStyle = BRAND_COLORS.safeBadgeBg;
        ctx.strokeStyle = BRAND_COLORS.safeBadgeBorder;
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, paddingX + 16, currentY + 18, 28, 28, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = BRAND_COLORS.safeBadgeText;
        ctx.font = '800 15px -apple-system, sans-serif';
        ctx.fillText('✓', paddingX + 24, currentY + 37);

        // Title
        ctx.fillStyle = BRAND_COLORS.textPrimary;
        ctx.font = '800 15px -apple-system, sans-serif';
        ctx.fillText(item.question, paddingX + 56, currentY + 32);

        // Reason
        ctx.fillStyle = BRAND_COLORS.textMuted;
        ctx.font = '400 13.5px -apple-system, sans-serif';
        const rLines = wrapText(ctx, item.reason, contentWidth - 76, isStory ? 3 : 2);
        rLines.forEach((rl, ri) => ctx.fillText(rl, paddingX + 56, currentY + 58 + ri * 20));
        ctx.restore();

        currentY += itemH + 12;
      });

      if (isStory || isFeed) {
        ctx.fillStyle = BRAND_COLORS.textMuted;
        ctx.font = '600 13px -apple-system, BlinkMacSystemFont, monospace';
        ctx.fillText('UNDE CAUȚI: ' + card.whereToLookInContract, paddingX, currentY + 18);
      }
      break;
    }

    case 'challenge_friend': {
      // Provocation Card
      const provH = isStory ? 240 : isFeed ? 180 : 130;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.riskBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.riskBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, provH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.riskBadgeText;
      ctx.font = '800 13px -apple-system, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText('ÎNTREBARE DE VERIFICAT', paddingX + 24, currentY + 32);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = isStory ? '800 22px -apple-system, sans-serif' : '800 18px -apple-system, sans-serif';
      const provLines = wrapText(ctx, card.provocation, contentWidth - 48, isStory ? 4 : 3);
      provLines.forEach((pl, pi) => ctx.fillText(pl, paddingX + 24, currentY + 68 + pi * 28));
      ctx.restore();

      currentY += provH + (isStory ? 22 : isFeed ? 16 : 10);

      // Trap assumption
      const trapH = isStory ? 140 : isFeed ? 110 : 80;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.bgCard;
      ctx.strokeStyle = BRAND_COLORS.border;
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, trapH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.textMuted;
      ctx.font = '700 12px -apple-system, sans-serif';
      ctx.fillText('PRESUPUNEREA COMUNĂ:', paddingX + 20, currentY + 28);

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.font = '500 14px -apple-system, sans-serif';
      const trapLines = wrapText(ctx, card.trapAssumption, contentWidth - 40, 2);
      trapLines.forEach((tl, ti) => ctx.fillText(tl, paddingX + 20, currentY + 52 + ti * 22));
      ctx.restore();

      currentY += trapH + (isStory ? 18 : isFeed ? 12 : 8);

      // Real Answer Reveal
      const ansH = isStory ? 220 : isFeed ? 160 : 110;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.safeBadgeBg;
      ctx.strokeStyle = BRAND_COLORS.safeBadgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, paddingX, currentY, contentWidth, ansH, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = BRAND_COLORS.safeBadgeText;
      ctx.font = '800 13px -apple-system, sans-serif';
      ctx.fillText('RĂSPUNSUL DIN CONTRACT:', paddingX + 20, currentY + 28);

      ctx.fillStyle = BRAND_COLORS.textSecondary;
      ctx.font = '500 14.5px -apple-system, sans-serif';
      const ansLines = wrapText(ctx, card.realAnswer, contentWidth - 40, isStory ? 4 : isFeed ? 3 : 2);
      ansLines.forEach((al, ai) => ctx.fillText(al, paddingX + 20, currentY + 54 + ai * 22));
      ctx.restore();
      break;
    }
  }

  // 5. CALLOUT BOX (WHAT IF INVITATION)
  if (isStory || isFeed) {
    const ctaBoxH = isStory ? 120 : 90;
    const ctaBoxY = height - (isStory ? 84 : 74) - ctaBoxH - 24;

    ctx.save();
    ctx.fillStyle = BRAND_COLORS.bg;
    ctx.strokeStyle = BRAND_COLORS.borderStrong;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, ctaBoxY, contentWidth, ctaBoxH, 18);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = BRAND_COLORS.textMuted;
    ctx.font = '700 11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText(
      card.ctaText.toUpperCase(),
      width / 2,
      ctaBoxY + (isStory ? 38 : 30)
    );

    ctx.fillStyle = BRAND_COLORS.textPrimary;
    ctx.font = isStory
      ? '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace'
      : '900 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace';
    ctx.fillText('whatifinsurance.cristianvaduva.com', width / 2, ctaBoxY + (isStory ? 78 : 62));
    ctx.restore();
  }

  // 6. ELEGANT EDITORIAL FOOTER BASELINE
  drawBrandedEditorialFooter(ctx, width, height, paddingX, isStory, isFeed, isSquare, card.sourceNote);
}

/**
 * Downloads the given HTMLCanvasElement as high-resolution PNG
 */
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

export interface CustomScenarioExportConfig {
  assetCategory: 'vehicle' | 'property';
  assetName: string;
  scenarioTitle: string;
  headline: string;
  takeaway: string;
  imagePath: string;
  visualStyleTitle?: string;
  sceneSettingTitle?: string;
  sourceNote?: string;
}

/**
 * Renders a Studio 3.0 Custom Visual Scenario to canvas with image-first editorial composition
 */
export async function renderCustomScenarioToCanvas(
  canvas: HTMLCanvasElement,
  config: CustomScenarioExportConfig,
  format: StoryFormat = 'story'
): Promise<void> {
  const formatConfig = FORMAT_CONFIGS[format];
  const { width, height } = formatConfig;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isStory = format === 'story';
  const isFeed = format === 'feed';

  const paddingX = isStory ? 80 : isFeed ? 70 : 60;
  const contentWidth = width - paddingX * 2;

  // 1. Crisp White Background
  ctx.fillStyle = BRAND_COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  // 2. Subtle Outer Border
  const borderInset = 20;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, borderInset, borderInset, width - borderInset * 2, height - borderInset * 2, 28);
  ctx.stroke();

  // 3. Header Pill: Category & Custom Indicator
  const headerY = isStory ? 80 : isFeed ? 64 : 54;
  const pillW = isStory ? 350 : isFeed ? 310 : 280;
  const pillH = 38;
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.pillBg;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, paddingX, headerY, pillW, pillH, 19);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = config.assetCategory === 'vehicle' ? '#2563EB' : '#059669';
  ctx.beginPath();
  ctx.arc(paddingX + 20, headerY + 19, 4.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = '800 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '0.8px';
  const categoryLabel = `STUDIO 3.0 · ${config.assetName.toUpperCase()}`;
  ctx.fillText(categoryLabel, paddingX + 34, headerY + 24);
  ctx.restore();

  // Right Header Wordmark
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.letterSpacing = '1.5px';
  ctx.fillText('WHAT IF INSURANCE', width - paddingX, headerY + 24);
  ctx.restore();

  // 4. Hero Photograph (Image-First Proportions with deliberate spacing)
  const imgY = headerY + 48;
  const desiredImgH = isStory ? 680 : isFeed ? 440 : 280;
  let imgH = 0;

  if (typeof Image !== 'undefined' && config.imagePath) {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = config.imagePath;
      await new Promise<boolean>((resolve) => {
        if (img.complete && img.naturalWidth > 0) return resolve(true);
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        setTimeout(() => resolve(false), 1500);
      });

      if (img.naturalWidth > 0) {
        imgH = desiredImgH;
        ctx.save();
        drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, 20);
        ctx.clip();

        // Aspect fill
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const targetRatio = contentWidth / imgH;
        let sWidth = img.naturalWidth;
        let sHeight = img.naturalHeight;
        let sx = 0;
        let sy = 0;

        if (imgRatio > targetRatio) {
          sWidth = img.naturalHeight * targetRatio;
          sx = (img.naturalWidth - sWidth) / 2;
        } else {
          sHeight = img.naturalWidth / targetRatio;
          sy = (img.naturalHeight - sHeight) / 2;
        }

        if (typeof (ctx as any).drawImage === 'function') {
          ctx.drawImage(img, sx, sy, sWidth, sHeight, paddingX, imgY, contentWidth, imgH);
        }
        ctx.restore();

        // Border around photo
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = 1;
        drawRoundedRect(ctx, paddingX, imgY, contentWidth, imgH, 20);
        ctx.stroke();

        // Floating Style/Setting Pill
        if (config.visualStyleTitle || config.sceneSettingTitle) {
          ctx.save();
          const tag = `${config.visualStyleTitle || 'Editorial'} · ${config.sceneSettingTitle || 'Urban'}`.toUpperCase();
          ctx.font = '800 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          const tagW = ctx.measureText(tag).width + 24;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
          drawRoundedRect(ctx, paddingX + 16, imgY + 16, tagW, 28, 6);
          ctx.fill();
          ctx.fillStyle = BRAND_COLORS.textPrimary;
          ctx.fillText(tag, paddingX + 28, imgY + 24);
          ctx.restore();
        }
      }
    } catch {
      imgH = 0;
    }
  }

  // 5. Short Memorable Headline (with deliberate spacing below image)
  const imgBottomCustom = imgY + imgH;
  const customGap = isStory ? 34 : isFeed ? 26 : 18;
  const customFontSize = isStory ? 44 : isFeed ? 30 : 22;
  const headlineLineHeight = isStory ? 54 : isFeed ? 38 : 28;
  const titleY = imgH > 0
    ? imgBottomCustom + customGap + Math.round(customFontSize * 0.85)
    : headerY + (isStory ? 60 : 45);

  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = `900 ${customFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

  const headlineMaxLines = 2;
  const headlineLines = wrapText(ctx, config.headline, contentWidth, headlineMaxLines);
  headlineLines.forEach((l, idx) => {
    ctx.fillText(l, paddingX, titleY + idx * headlineLineHeight);
  });

  const headlineBottom = titleY + (headlineLines.length - 1) * headlineLineHeight + Math.round(customFontSize * 0.3);

  // Short situation note
  const sitY = headlineBottom + (isStory ? 14 : isFeed ? 10 : 8);
  ctx.fillStyle = BRAND_COLORS.textSecondary;
  ctx.font = `400 ${isStory ? 15 : isFeed ? 13 : 11}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  const scenarioNote = config.scenarioTitle ? `Situație analizată: ${config.scenarioTitle}` : 'Evaluare de risc contractual în caz de avarie';
  ctx.fillText(scenarioNote, paddingX, sitY);

  const compStartY = sitY + (isStory ? 24 : isFeed ? 16 : 12);

  // 6. STRUCTURED TWO-COLUMN COMPARISON
  const colGap = isStory ? 20 : isFeed ? 16 : 14;
  const colW = (contentWidth - colGap) / 2;
  const colInnerPad = isStory ? 18 : 14;
  const colInnerW = colW - colInnerPad * 2;
  const sectionGap = isStory ? 24 : isFeed ? 18 : 14;

  const footerH = isStory ? 104 : isFeed ? 88 : 78;
  const caveatH = isStory ? 65 : isFeed ? 45 : 32;
  const compH = Math.max(isStory ? 540 : isFeed ? 440 : 380, height - compStartY - footerH - caveatH - 24);

  // --- COLUMN 1: CU ASIGURARE ---
  const col1X = paddingX;
  ctx.save();
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, col1X, compStartY, colW, compH, 16);
  ctx.fill();
  ctx.stroke();

  // Top highlight bar (Calm Forest Green)
  ctx.fillStyle = '#163832';
  drawRoundedRect(ctx, col1X, compStartY, colW, 5, 2);
  ctx.fill();

  // Badge 1: [ ● CU ASIGURARE ]
  const badge1W = isStory ? 170 : isFeed ? 150 : 130;
  const badge1H = isStory ? 32 : 28;
  const badge1Y = compStartY + (isStory ? 18 : 14);
  drawRoundedRect(ctx, col1X + 16, badge1Y, badge1W, badge1H, badge1H / 2);
  ctx.fillStyle = '#F0FDF4';
  ctx.fill();
  ctx.strokeStyle = '#BBF7D0';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#15803D';
  ctx.beginPath();
  ctx.arc(col1X + 28, badge1Y + badge1H / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#15803D';
  ctx.font = '800 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('CU ASIGURARE', col1X + 38, badge1Y + badge1H / 2 + 4);

  let curY1 = badge1Y + badge1H + (isStory ? 24 : 16);

  const renderCustomColBlock = (
    label: string,
    body: string,
    accentColor: string,
    startY: number
  ): number => {
    ctx.save();
    ctx.fillStyle = accentColor;
    ctx.font = '800 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.letterSpacing = '0.6px';
    ctx.fillText(label.toUpperCase(), col1X + colInnerPad, startY);

    const bodyFontSize = isStory ? 13.5 : isFeed ? 12 : 10.5;
    const bodyLineHeight = isStory ? 19 : isFeed ? 16 : 14;
    ctx.fillStyle = '#1E293B';
    ctx.font = `500 ${bodyFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

    const maxLines = isStory ? 3 : 2;
    const lines = wrapText(ctx, body, colInnerW, maxLines);
    lines.forEach((l, i) => {
      ctx.fillText(l, col1X + colInnerPad, startY + (isStory ? 16 : 13) + i * bodyLineHeight);
    });
    ctx.restore();
    return startY + (isStory ? 16 : 13) + lines.length * bodyLineHeight;
  };

  curY1 = renderCustomColBlock('Ce ar putea fi despăgubit', config.takeaway || 'Despăgubire aprobată conform clauzelor aplicabile din poliță', '#15803D', curY1) + sectionGap;
  curY1 = renderCustomColBlock('Ce condiții trebuie îndeplinite', 'Notificarea daunei în termen legal și măsuri de limitare a pagubei', '#0284C7', curY1) + sectionGap;
  curY1 = renderCustomColBlock('Costuri în sarcina proprietarului', 'Franșiză contractuală (dacă există) sau uzura pieselor înlocuite', '#64748B', curY1);
  ctx.restore();

  // --- COLUMN 2: FĂRĂ ASIGURARE ---
  const col2X = paddingX + colW + colGap;
  ctx.save();
  ctx.fillStyle = '#FFFDFD';
  ctx.strokeStyle = '#FECACA';
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, col2X, compStartY, colW, compH, 16);
  ctx.fill();
  ctx.stroke();

  // Top highlight bar (Restrained Crimson Red)
  ctx.fillStyle = '#DE1110';
  drawRoundedRect(ctx, col2X, compStartY, colW, 5, 2);
  ctx.fill();

  // Badge 2: [ ● FĂRĂ ASIGURARE ]
  const badge2W = isStory ? 180 : isFeed ? 160 : 140;
  const badge2H = isStory ? 32 : 28;
  const badge2Y = compStartY + (isStory ? 18 : 14);
  drawRoundedRect(ctx, col2X + 16, badge2Y, badge2W, badge2H, badge2H / 2);
  ctx.fillStyle = '#FEF2F2';
  ctx.fill();
  ctx.strokeStyle = '#FECACA';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#B91C1C';
  ctx.beginPath();
  ctx.arc(col2X + 28, badge2Y + badge2H / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#B91C1C';
  ctx.font = '800 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('FĂRĂ ASIGURARE', col2X + 38, badge2Y + badge2H / 2 + 4);

  let curY2 = badge2Y + badge2H + (isStory ? 24 : 16);

  const renderCustomCol2Block = (
    label: string,
    body: string,
    accentColor: string,
    startY: number
  ): number => {
    ctx.save();
    ctx.fillStyle = accentColor;
    ctx.font = '800 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.letterSpacing = '0.6px';
    ctx.fillText(label.toUpperCase(), col2X + colInnerPad, startY);

    const bodyFontSize = isStory ? 13.5 : isFeed ? 12 : 10.5;
    const bodyLineHeight = isStory ? 19 : isFeed ? 16 : 14;
    ctx.fillStyle = '#1E293B';
    ctx.font = `500 ${bodyFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

    const maxLines = isStory ? 3 : 2;
    const lines = wrapText(ctx, body, colInnerW, maxLines);
    lines.forEach((l, i) => {
      ctx.fillText(l, col2X + colInnerPad, startY + (isStory ? 16 : 13) + i * bodyLineHeight);
    });
    ctx.restore();
    return startY + (isStory ? 16 : 13) + lines.length * bodyLineHeight;
  };

  curY2 = renderCustomCol2Block('Costuri suportate personal', 'Plată integrală a devizului de reparație din economiile curente', '#B91C1C', curY2) + sectionGap;
  curY2 = renderCustomCol2Block('Reparații din fonduri proprii', 'Înlocuire echipamente sau finisaje avariate fără suport extern', '#B91C1C', curY2) + sectionGap;
  curY2 = renderCustomCol2Block('Consecințe financiare', 'Efort financiar neprevăzut și dezechilibru direct în bugetul personal', '#64748B', curY2);
  ctx.restore();

  // Concise Contractual Caveat
  const caveatY = compStartY + compH + (isStory ? 18 : isFeed ? 12 : 10);
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.textSubtle;
  ctx.font = `400 ${isStory ? 11 : isFeed ? 10 : 9.5}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  const caveatText = 'Analiză comparativă cu rol educațional. Despăgubirea depinde de contract, excluderi, franșize și respectarea măsurilor preventive.';
  const caveatLines = wrapText(ctx, caveatText, contentWidth, isStory ? 2 : 1);
  caveatLines.forEach((cl, i) => {
    ctx.fillText(cl, paddingX, caveatY + i * (isStory ? 16 : 13));
  });
  ctx.restore();

  // 7. Footer Baseline
  drawBrandedEditorialFooter(
    ctx,
    width,
    height,
    paddingX,
    isStory,
    isFeed,
    format === 'square',
    config.sourceNote || 'Simulator vizual de risc · Fără caracter de consultanță juridică'
  );
}
