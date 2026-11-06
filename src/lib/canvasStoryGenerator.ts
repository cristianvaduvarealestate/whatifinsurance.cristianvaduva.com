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
  // Elevate footer coordinates to guarantee safe margins on social formats (Feed & Story)
  // Story safe margin from bottom: 160px; Feed safe margin: 120px
  const footerH = isStory ? 170 : isFeed ? 130 : 90;
  const footerY = height - footerH;

  // Thin hairline divider
  ctx.strokeStyle = BRAND_COLORS.divider;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(paddingX, footerY);
  ctx.lineTo(width - paddingX, footerY);
  ctx.stroke();

  // Footer Left: Brand & Phone (Generous legible typography for mobile screens)
  ctx.save();
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = isStory
    ? '800 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    : '800 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('WHAT IF INSURANCE', paddingX, footerY + (isStory ? 44 : 36));

  ctx.fillStyle = '#06141B';
  ctx.font = isStory
    ? '700 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    : '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Tel: +40 767 110 439', paddingX, footerY + (isStory ? 78 : 64));

  if (isStory || isFeed) {
    ctx.fillStyle = BRAND_COLORS.textMuted;
    ctx.font = isStory
      ? '500 16px -apple-system, BlinkMacSystemFont, sans-serif'
      : '500 13.5px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(
      extraNote ? extraNote.slice(0, 52) : 'Educație despre riscuri cotidiene · Partener Generali',
      paddingX,
      footerY + (isStory ? 112 : 92)
    );
  }
  ctx.restore();

  // Footer Right: Both Websites
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = isStory
    ? '700 20px -apple-system, BlinkMacSystemFont, monospace'
    : '700 17px -apple-system, BlinkMacSystemFont, monospace';
  ctx.fillText('whatifinsurance.cristianvaduva.com', width - paddingX, footerY + (isStory ? 44 : 36));

  ctx.fillStyle = '#0D9488';
  ctx.font = isStory
    ? '700 18px -apple-system, BlinkMacSystemFont, monospace'
    : '700 15px -apple-system, BlinkMacSystemFont, monospace';
  ctx.fillText('insurance.cristianvaduva.com', width - paddingX, footerY + (isStory ? 78 : 64));

  if (isStory || isFeed) {
    ctx.fillStyle = BRAND_COLORS.textSubtle;
    ctx.font = isStory
      ? '400 15px -apple-system, BlinkMacSystemFont, sans-serif'
      : '400 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('Verifică clauzele specifice din contractul tău', width - paddingX, footerY + (isStory ? 112 : 92));
  }
  ctx.restore();
}

/**
 * Robust image loader with multi-stage fallback, CORS retry, and generous timeout
 */
const imageCache = new Map<string, HTMLImageElement>();

export async function loadCanvasImage(
  src: string,
  fallbackSrc?: string,
  timeoutMs: number = 3500
): Promise<HTMLImageElement | null> {
  if (typeof Image === 'undefined' || !src) {
    return null;
  }

  // Check cache first
  if (imageCache.has(src)) {
    const cached = imageCache.get(src)!;
    if (cached.complete && cached.naturalWidth > 0) {
      return cached;
    }
  }

  const tryLoadUrl = (url: string, withCrossOrigin: boolean, ms: number): Promise<HTMLImageElement | null> => {
    return new Promise((resolve) => {
      try {
        const img = new Image();
        if (withCrossOrigin) {
          img.crossOrigin = 'anonymous';
        }
        let settled = false;

        const timer = setTimeout(() => {
          if (!settled) {
            settled = true;
            if (img.complete && img.naturalWidth > 0) {
              resolve(img);
            } else {
              resolve(null);
            }
          }
        }, ms);

        if (img.complete && img.naturalWidth > 0) {
          clearTimeout(timer);
          settled = true;
          return resolve(img);
        }

        img.onload = () => {
          if (!settled) {
            settled = true;
            clearTimeout(timer);
            resolve(img);
          }
        };

        img.onerror = () => {
          if (!settled) {
            settled = true;
            clearTimeout(timer);
            resolve(null);
          }
        };

        img.src = url;
      } catch {
        resolve(null);
      }
    });
  };

  // 1. Try with crossOrigin anonymous for clean toDataURL export
  let loadedImg = await tryLoadUrl(src, true, timeoutMs);

  // 2. If failed, retry same URL without crossOrigin (in case same-origin lacked CORS headers)
  if (!loadedImg || loadedImg.naturalWidth === 0) {
    loadedImg = await tryLoadUrl(src, false, 1500);
  }

  // 3. Fallback to fallbackSrc if provided
  if ((!loadedImg || loadedImg.naturalWidth === 0) && fallbackSrc && fallbackSrc !== src) {
    loadedImg = await tryLoadUrl(fallbackSrc, true, 2000);
    if (!loadedImg || loadedImg.naturalWidth === 0) {
      loadedImg = await tryLoadUrl(fallbackSrc, false, 1000);
    }
  }

  // 4. Cache and return if valid; otherwise return null to trigger editorial dark fallback (never a misleading unrelated photo)
  if (loadedImg && loadedImg.naturalWidth > 0) {
    imageCache.set(src, loadedImg);
    return loadedImg;
  }

  return null;
}

/**
 * Category-specific authentic fallback photographs
 * Strictly prevents misleading photos across distinct risk categories (e.g. villa for auto/cyber).
 */
export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  casa: '/images/scenarios/pipe-burst.jpg',
  auto: '/images/scenarios/car-crash.jpg',
  calatorii: '/images/scenarios/flight-cancelled.jpg',
  'raspundere-civila': '/images/scenarios/family-tv-broken.jpg',
  'viata-sanatate': '/images/scenarios/inability-work.jpg',
  business: '/images/scenarios/ransomware-server.jpg',
  'digital-tech': '/images/scenarios/cafe-laptop-unattended.jpg',
  'luxury-bunuri': '/images/scenarios/luxury-watch-theft.jpg',
  'proprietari-chiriasi': '/images/scenarios/damaged-rental-room.jpg',
  'familie-lifestyle': '/images/scenarios/cracked-designer-suitcase.jpg',
};

export function getCategoryFallbackImage(categoryId?: string): string | undefined {
  if (!categoryId) return undefined;
  return CATEGORY_FALLBACK_IMAGES[categoryId];
}

/**
 * Renders the hero photographic slot or a breathtaking dark-mode editorial fallback
 * Layout height NEVER collapses, ensuring 100% stable proportions across all formats.
 */
export function drawEditorialHeroImageSlot(
  ctx: CanvasRenderingContext2D,
  options: {
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    img: HTMLImageElement | null;
    tagLabel?: string;
    tagVariant?: 'risk' | 'safe' | 'editorial';
    fallbackTitle?: string;
    isStory: boolean;
    isFeed: boolean;
  }
) {
  const { x, y, width, height, radius, img, tagLabel, tagVariant = 'risk', fallbackTitle, isStory, isFeed } = options;

  if (img && img.naturalWidth > 0 && typeof (ctx as any).drawImage === 'function') {
    // 1. High-Resolution Photographic Rendering with Aspect-Fill
    ctx.save();
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.clip();

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const targetRatio = width / height;
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

    ctx.drawImage(img, sx, sy, sWidth, sHeight, x, y, width, height);
    ctx.restore();

    // Hairline border around photo
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.stroke();

    // Floating Category / Severity Badge
    if (tagLabel) {
      ctx.save();
      const cleanTag = tagLabel.toUpperCase();
      ctx.font = `800 ${isStory ? 14 : 12}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      const textW = ctx.measureText(cleanTag).width;
      const bH = isStory ? 36 : 30;
      const bW = textW + (isStory ? 44 : 36);
      const bX = x + (isStory ? 20 : 16);
      const bY = y + height - bH - (isStory ? 20 : 16);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, bX, bY, bW, bH, bH / 2);
      ctx.fill();
      ctx.stroke();

      // Dot accent
      const dotColor =
        tagVariant === 'risk'
          ? BRAND_COLORS.risk
          : tagVariant === 'safe'
          ? BRAND_COLORS.safeBadgeText
          : '#0284C7';
      ctx.fillStyle = dotColor;
      ctx.beginPath();
      ctx.arc(bX + (isStory ? 18 : 14), bY + bH / 2, isStory ? 4.5 : 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = BRAND_COLORS.textPrimary;
      ctx.fillText(cleanTag, bX + (isStory ? 30 : 24), bY + bH / 2 + (isStory ? 5 : 4.5));
      ctx.restore();
    }
  } else {
    // 2. ULTRA-PREMIUM EDITORIAL DARK CANVAS FALLBACK (Never an empty/ugly box!)
    ctx.save();
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.clip();

    // Sleek Apple-inspired dark obsidian gradient
    const grad = ctx.createLinearGradient(x, y, x + width, y + height);
    grad.addColorStop(0, '#0B132B');
    grad.addColorStop(0.5, '#1C2541');
    grad.addColorStop(1, '#0F172A');
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, width, height);

    // Subtle decorative grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let gy = y + 40; gy < y + height; gy += 40) {
      ctx.beginPath();
      ctx.moveTo(x, gy);
      ctx.lineTo(x + width, gy);
      ctx.stroke();
    }

    // Discrete watermark emblem in center
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.font = `900 ${isStory ? 60 : 44}px -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('WHAT IF', x + width / 2, y + height / 2 - 10);

    // Discrete tag
    ctx.fillStyle = '#E10600';
    ctx.font = `800 ${isStory ? 14 : 12}px -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.letterSpacing = '1.5px';
    ctx.fillText('● STUDIU VIZUAL DE ASIGURĂRI', x + width / 2, y + height / 2 + (isStory ? 30 : 24));

    // Fallback title / context
    if (fallbackTitle) {
      ctx.fillStyle = '#F8FAFC';
      ctx.font = `700 ${isStory ? 20 : 16}px -apple-system, BlinkMacSystemFont, sans-serif`;
      const titleLines = wrapText(ctx, fallbackTitle, width - 60, 2);
      titleLines.forEach((tl, ti) => {
        ctx.fillText(tl, x + width / 2, y + height / 2 + (isStory ? 65 : 52) + ti * 24);
      });
    }

    ctx.restore();

    // Crisp subtle border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.stroke();
  }
}

/**
 * Main rendering function producing a high-legibility, spacious editorial infographic canvas
 * Specially designed for mobile screens: large fonts, commanding headlines, read in 2-3 seconds.
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

  // Safe padding: Story accounts for Instagram top safe zone (100px+) and bottom (160px+)
  const paddingX = isStory ? 76 : isFeed ? 64 : 54;
  const contentWidth = width - paddingX * 2;
  const topY = isStory ? 92 : isFeed ? 52 : 44;

  // 2. DISCRETE EDITORIAL HEADER BAR
  const pillHeight = isStory ? 44 : isFeed ? 40 : 36;
  const pillY = topY;
  const categoryLabel = (scenario.categoryName || 'STUDIU DE CAZ').toUpperCase();

  ctx.save();
  ctx.font = `700 ${isStory ? 16 : 14}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  const catWidth = ctx.measureText(categoryLabel).width;
  const pillWidth = Math.max(isStory ? 340 : 300, (isStory ? 220 : 190) + catWidth);

  ctx.fillStyle = BRAND_COLORS.pillBg;
  ctx.strokeStyle = BRAND_COLORS.border;
  ctx.lineWidth = 1.2;
  drawRoundedRect(ctx, paddingX, pillY, pillWidth, pillHeight, pillHeight / 2);
  ctx.fill();
  ctx.stroke();

  // Red signature indicator dot
  ctx.fillStyle = BRAND_COLORS.risk;
  ctx.beginPath();
  ctx.arc(paddingX + 20, pillY + pillHeight / 2, isStory ? 5 : 4.5, 0, Math.PI * 2);
  ctx.fill();

  // Branding text
  ctx.fillStyle = BRAND_COLORS.textPrimary;
  ctx.font = `800 ${isStory ? 15 : 13}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  ctx.fillText('WHAT IF INSURANCE', paddingX + 36, pillY + pillHeight / 2 + (isStory ? 5 : 4.5));

  ctx.fillStyle = BRAND_COLORS.textSubtle;
  ctx.font = `400 ${isStory ? 15 : 13}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillText('·', paddingX + (isStory ? 204 : 176), pillY + pillHeight / 2 + (isStory ? 4.5 : 4));

  // Category in uppercase
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.font = `700 ${isStory ? 14 : 12}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  ctx.fillText(categoryLabel, paddingX + (isStory ? 218 : 188), pillY + pillHeight / 2 + (isStory ? 5 : 4.5));
  ctx.restore();

  // Right Header Wordmark
  ctx.save();
  ctx.textAlign = 'right';
  ctx.font = `700 ${isStory ? 16 : 14}px -apple-system, BlinkMacSystemFont, monospace`;
  ctx.fillStyle = BRAND_COLORS.textMuted;
  ctx.fillText('whatifinsurance.cristianvaduva.com', width - paddingX, pillY + pillHeight / 2 + 5);
  ctx.restore();

  // 3. SCENARIO HERO IMAGE (Large, prominent photo with category-relevant fallback)
  const imgY = pillY + pillHeight + (isStory ? 24 : isFeed ? 18 : 14);
  const imgH = isStory ? 560 : isFeed ? 410 : 270;

  const categoryFallback = getCategoryFallbackImage(scenario.categoryId);
  const heroImg = await loadCanvasImage(scenario.heroImage, categoryFallback, 3500);
  const sevLabel = (scenario.severityLabel || scenario.categoryName || 'SITUAȚIE REALĂ').toUpperCase();

  drawEditorialHeroImageSlot(ctx, {
    x: paddingX,
    y: imgY,
    width: contentWidth,
    height: imgH,
    radius: isStory ? 24 : 18,
    img: heroImg,
    tagLabel: sevLabel,
    tagVariant: 'risk',
    fallbackTitle: scenario.categoryName || 'Scenariu de risc cotidian',
    isStory,
    isFeed,
  });

  // 4. EYEBROW & PROMINENT HEADLINE (Dominant, readable in 2 seconds on mobile)
  const eyebrowY = imgY + imgH + (isStory ? 34 : isFeed ? 24 : 18);

  ctx.save();
  ctx.fillStyle = BRAND_COLORS.risk;
  ctx.font = `800 ${isStory ? 16 : 14}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  ctx.letterSpacing = '1.2px';
  ctx.fillText('CE SE ÎNTÂMPLĂ DACĂ... ?', paddingX, eyebrowY);
  ctx.restore();

  const headlineY = eyebrowY + (isStory ? 32 : isFeed ? 26 : 20);
  ctx.fillStyle = BRAND_COLORS.textPrimary;

  const rawQuestion = scenario.title || scenario.mainQuestion;
  const cleanQuestion = rawQuestion.replace(/^[„"']+|[”"']+$/g, '');

  const hFontSize = isStory ? 50 : isFeed ? 42 : 28;
  const hLineHeight = isStory ? 62 : isFeed ? 52 : 36;

  ctx.font = `900 ${hFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  ctx.letterSpacing = '-0.5px';

  const maxHLines = isStory ? 3 : 2;
  const hLines = wrapText(ctx, cleanQuestion, contentWidth, maxHLines);
  hLines.forEach((line, idx) => {
    ctx.fillText(line, paddingX, headlineY + idx * hLineHeight);
  });

  const headlineBottom = headlineY + (hLines.length - 1) * hLineHeight + Math.round(hFontSize * 0.35);

  // Extract key scenario facts
  const withoutImpact = scenario.withoutInsurance?.financialImpact || 'Cost suportat 100% din fonduri proprii';
  const withoutSummary = scenario.withoutInsurance?.summary || scenario.withoutInsurance?.points?.[0] || 'Toate pagubele și reparațiile sunt plătite din propriul buzunar.';
  const withPolicy = scenario.withInsurance?.title || 'Poliță dedicată cu clauze complete';
  const withSummary = scenario.withInsurance?.summary || scenario.withInsurance?.points?.[0] || 'Asigurarea preia cheltuielile majore în limita sumei asigurate contractate.';
  const checkTip = scenario.whatToCheck?.items?.[0]?.label || 'clauzele specifice de excludere și franșiza';

  // 5. HIGH-CONTRAST CONSEQUENCE & PROTECTION CARDS
  if (isStory) {
    // --- STORY FORMAT: TWO STACKED SPACIOUS CARDS (Y: 960 to 1660) ---
    const cardGap = 24;
    const cardH = 310;
    const cardW = contentWidth;

    // CARD 1: FĂRĂ ASIGURARE (Warm subtle wash with crisp red accents)
    const card1Y = headlineBottom + 36;
    ctx.save();
    ctx.fillStyle = '#FFF8F8';
    ctx.strokeStyle = '#FECACA';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, card1Y, cardW, cardH, 22);
    ctx.fill();
    ctx.stroke();

    // Top indicator accent
    ctx.fillStyle = '#E10600';
    drawRoundedRect(ctx, paddingX, card1Y, cardW, 6, 3);
    ctx.fill();

    // Badge: [ ● FĂRĂ ASIGURARE ]
    const b1H = 36;
    const b1W = 210;
    const b1X = paddingX + 24;
    const b1Y = card1Y + 22;
    drawRoundedRect(ctx, b1X, b1Y, b1W, b1H, b1H / 2);
    ctx.fillStyle = '#FEF2F2';
    ctx.fill();
    ctx.strokeStyle = '#FECACA';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#B91C1C';
    ctx.beginPath();
    ctx.arc(b1X + 16, b1Y + b1H / 2, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#B91C1C';
    ctx.font = '800 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('FĂRĂ ASIGURARE', b1X + 28, b1Y + b1H / 2 + 5);

    // Dominant takeaway title
    ctx.fillStyle = '#06141B';
    ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Paguba poate fi suportată din fonduri proprii', paddingX + 24, card1Y + 86);

    // Impact highlight
    ctx.fillStyle = '#B91C1C';
    ctx.font = '700 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const impactText = `Impact estimat: ${withoutImpact}`;
    ctx.fillText(impactText, paddingX + 24, card1Y + 128);

    // Summary description (Up to 3 lines to preserve full context without truncation)
    ctx.fillStyle = '#334155';
    ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const sLines = wrapText(ctx, withoutSummary, cardW - 48, 3);
    sLines.forEach((line, i) => {
      ctx.fillText(line, paddingX + 24, card1Y + 172 + i * 29);
    });
    ctx.restore();

    // CARD 2: CU ASIGURARE (Calm subtle wash with crisp emerald accents)
    const card2Y = card1Y + cardH + cardGap;
    ctx.save();
    ctx.fillStyle = '#F2FDF5';
    ctx.strokeStyle = '#BBF7D0';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, paddingX, card2Y, cardW, cardH, 22);
    ctx.fill();
    ctx.stroke();

    // Top indicator accent
    ctx.fillStyle = '#15803D';
    drawRoundedRect(ctx, paddingX, card2Y, cardW, 6, 3);
    ctx.fill();

    // Badge: [ ● CU ASIGURARE ]
    const b2H = 36;
    const b2W = 240;
    const b2X = paddingX + 24;
    const b2Y = card2Y + 22;
    drawRoundedRect(ctx, b2X, b2Y, b2W, b2H, b2H / 2);
    ctx.fillStyle = '#F0FDF4';
    ctx.fill();
    ctx.strokeStyle = '#BBF7D0';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#15803D';
    ctx.beginPath();
    ctx.arc(b2X + 16, b2Y + b2H / 2, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#15803D';
    ctx.font = '800 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CU ASIGURARE POTRIVITĂ', b2X + 28, b2Y + b2H / 2 + 5);

    // Dominant takeaway title (Accurate conditional phrasing)
    ctx.fillStyle = '#06141B';
    ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Polița poate prelua riscul financiar major', paddingX + 24, card2Y + 86);

    // Protection highlight
    ctx.fillStyle = '#15803D';
    ctx.font = '700 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const protText = `Protecție: ${withPolicy}`;
    const protLines = wrapText(ctx, protText, cardW - 48, 1);
    ctx.fillText(protLines[0] || protText, paddingX + 24, card2Y + 128);

    // Summary description (Up to 3 lines to preserve full context without truncation)
    ctx.fillStyle = '#334155';
    ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const wLines = wrapText(ctx, withSummary, cardW - 48, 3);
    wLines.forEach((line, i) => {
      ctx.fillText(line, paddingX + 24, card2Y + 172 + i * 29);
    });
    ctx.restore();

    // Contract Verification Tip line (Clean typographic bullet, safe on all mobile devices)
    const tipY = card2Y + cardH + 28;
    ctx.save();
    ctx.fillStyle = BRAND_COLORS.textSecondary;
    ctx.font = '700 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const tipText = `● RECOMANDARE CONTRACTUALĂ: Verifică ${checkTip}`;
    const tipLines = wrapText(ctx, tipText, contentWidth, 2);
    tipLines.forEach((tl, idx) => {
      ctx.fillText(tl, paddingX, tipY + idx * 26);
    });
    ctx.restore();

  } else {
    // --- FEED (4:5) / SQUARE FORMAT: DUAL SIDE-BY-SIDE CARDS ---
    const cardGap = isFeed ? 24 : 16;
    const colW = (contentWidth - cardGap) / 2;
    const cardH = isFeed ? 480 : 330;
    const cardStartY = headlineBottom + (isFeed ? 28 : 18);

    // COLUMN 1: FĂRĂ ASIGURARE (Left)
    const col1X = paddingX;
    ctx.save();
    ctx.fillStyle = '#FFF8F8';
    ctx.strokeStyle = '#FECACA';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, col1X, cardStartY, colW, cardH, 20);
    ctx.fill();
    ctx.stroke();

    // Top highlight bar
    ctx.fillStyle = '#E10600';
    drawRoundedRect(ctx, col1X, cardStartY, colW, 5, 2);
    ctx.fill();

    // Badge
    const b1H = 32;
    const b1W = 180;
    const b1X = col1X + 18;
    const b1Y = cardStartY + 18;
    drawRoundedRect(ctx, b1X, b1Y, b1W, b1H, b1H / 2);
    ctx.fillStyle = '#FEF2F2';
    ctx.fill();
    ctx.strokeStyle = '#FECACA';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#B91C1C';
    ctx.beginPath();
    ctx.arc(b1X + 14, b1Y + b1H / 2, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#B91C1C';
    ctx.font = '800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('FĂRĂ ASIGURARE', b1X + 24, b1Y + b1H / 2 + 4.5);

    // Main Takeaway
    ctx.fillStyle = '#06141B';
    ctx.font = `800 ${isFeed ? 22 : 18}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const col1TitleLines = wrapText(ctx, 'Paguba o suporți din fonduri proprii', colW - 36, 2);
    col1TitleLines.forEach((l, i) => {
      ctx.fillText(l, col1X + 18, cardStartY + (isFeed ? 78 : 68) + i * (isFeed ? 28 : 22));
    });

    const c1MidY = cardStartY + (isFeed ? 78 : 68) + col1TitleLines.length * (isFeed ? 28 : 22) + (isFeed ? 14 : 10);
    ctx.fillStyle = '#991B1B';
    ctx.font = '800 12.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('IMPACT ESTIMAT:', col1X + 18, c1MidY);

    ctx.fillStyle = '#B91C1C';
    ctx.font = `700 ${isFeed ? 19 : 16}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const impactLines = wrapText(ctx, withoutImpact, colW - 36, 2);
    impactLines.forEach((il, i) => {
      ctx.fillText(il, col1X + 18, c1MidY + (isFeed ? 24 : 20) + i * (isFeed ? 24 : 20));
    });

    const c1SumY = c1MidY + (isFeed ? 24 : 20) + impactLines.length * (isFeed ? 24 : 20) + (isFeed ? 16 : 10);
    ctx.fillStyle = '#64748B';
    ctx.font = '800 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CONSECINȚĂ DIRECTĂ:', col1X + 18, c1SumY);

    ctx.fillStyle = '#334155';
    ctx.font = `500 ${isFeed ? 15.5 : 13.5}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const sumLines1 = wrapText(ctx, withoutSummary, colW - 36, isFeed ? 4 : 2);
    sumLines1.forEach((sl, i) => {
      ctx.fillText(sl, col1X + 18, c1SumY + (isFeed ? 24 : 20) + i * (isFeed ? 23 : 19));
    });
    ctx.restore();

    // COLUMN 2: CU ASIGURARE (Right)
    const col2X = paddingX + colW + cardGap;
    ctx.save();
    ctx.fillStyle = '#F2FDF5';
    ctx.strokeStyle = '#BBF7D0';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, col2X, cardStartY, colW, cardH, 20);
    ctx.fill();
    ctx.stroke();

    // Top highlight bar
    ctx.fillStyle = '#15803D';
    drawRoundedRect(ctx, col2X, cardStartY, colW, 5, 2);
    ctx.fill();

    // Badge
    const b2H = 32;
    const b2W = 195;
    const b2X = col2X + 18;
    const b2Y = cardStartY + 18;
    drawRoundedRect(ctx, b2X, b2Y, b2W, b2H, b2H / 2);
    ctx.fillStyle = '#F0FDF4';
    ctx.fill();
    ctx.strokeStyle = '#BBF7D0';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#15803D';
    ctx.beginPath();
    ctx.arc(b2X + 14, b2Y + b2H / 2, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#15803D';
    ctx.font = '800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CU ASIGURARE ACTIVĂ', b2X + 24, b2Y + b2H / 2 + 4.5);

    // Main Takeaway
    ctx.fillStyle = '#06141B';
    ctx.font = `800 ${isFeed ? 22 : 18}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const col2TitleLines = wrapText(ctx, 'Polița poate acoperi cheltuielile majore', colW - 36, 2);
    col2TitleLines.forEach((l, i) => {
      ctx.fillText(l, col2X + 18, cardStartY + (isFeed ? 78 : 68) + i * (isFeed ? 28 : 22));
    });

    const c2MidY = cardStartY + (isFeed ? 78 : 68) + col2TitleLines.length * (isFeed ? 28 : 22) + (isFeed ? 14 : 10);
    ctx.fillStyle = '#166534';
    ctx.font = '800 12.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('POLIȚĂ RELEVANTĂ:', col2X + 18, c2MidY);

    ctx.fillStyle = '#15803D';
    ctx.font = `700 ${isFeed ? 18 : 15}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const policyLines = wrapText(ctx, withPolicy, colW - 36, 2);
    policyLines.forEach((pl, i) => {
      ctx.fillText(pl, col2X + 18, c2MidY + (isFeed ? 24 : 20) + i * (isFeed ? 24 : 20));
    });

    const c2SumY = c2MidY + (isFeed ? 24 : 20) + policyLines.length * (isFeed ? 24 : 20) + (isFeed ? 16 : 10);
    ctx.fillStyle = '#64748B';
    ctx.font = '800 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('BENEFICIU CHEIE:', col2X + 18, c2SumY);

    ctx.fillStyle = '#334155';
    ctx.font = `500 ${isFeed ? 15.5 : 13.5}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const sumLines2 = wrapText(ctx, withSummary, colW - 36, isFeed ? 4 : 2);
    sumLines2.forEach((sl, i) => {
      ctx.fillText(sl, col2X + 18, c2SumY + (isFeed ? 24 : 20) + i * (isFeed ? 23 : 19));
    });
    ctx.restore();

    // Contract Verification Tip line below cards
    if (isFeed) {
      const feedTipY = cardStartY + cardH + 16;
      ctx.save();
      ctx.fillStyle = BRAND_COLORS.textMuted;
      ctx.font = '500 13.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const feedTipText = `● Ce verifici: ${checkTip} · Despăgubirea depinde de clauzele contractate, franșiză și excluderi.`;
      const feedTipLines = wrapText(ctx, feedTipText, contentWidth, 2);
      feedTipLines.forEach((ftl, idx) => {
        ctx.fillText(ftl, paddingX, feedTipY + idx * 19);
      });
      ctx.restore();
    }
  }

  // 6. CLEAN BRANDED FOOTER (With phone number and both websites, safe from cutoffs)
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
  drawBrandedEditorialFooter(
    ctx,
    width,
    height,
    paddingX,
    isStory,
    isFeed,
    format === 'square',
    'Provocare educativă · What If Insurance'
  );
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
  const imgY = headerY + 46;
  const imgH = isStory ? 620 : isFeed ? 440 : 300;
  const catLower = (card.category || '').toLowerCase();
  const editorialCatId =
    catLower.includes('auto')
      ? 'auto'
      : catLower.includes('calator')
      ? 'calatorii'
      : catLower.includes('sanat') || catLower.includes('viata')
      ? 'viata-sanatate'
      : catLower.includes('rasp')
      ? 'raspundere-civila'
      : catLower.includes('cyber') || catLower.includes('digital')
      ? 'digital-tech'
      : catLower.includes('lux')
      ? 'luxury-bunuri'
      : 'casa';
  const cardFallback = getCategoryFallbackImage(editorialCatId);
  const cardImg = await loadCanvasImage(card.heroImage, cardFallback, 3500);

  drawEditorialHeroImageSlot(ctx, {
    x: paddingX,
    y: imgY,
    width: contentWidth,
    height: imgH,
    radius: 18,
    img: cardImg,
    tagLabel: card.category.toUpperCase(),
    tagVariant: 'editorial',
    fallbackTitle: card.headline,
    isStory,
    isFeed,
  });

  // 4. EDITORIAL HEADLINE WITH GENEROUS SPACING BELOW PHOTO
  const imgBottom = imgY + imgH;
  const headlineGap = isStory ? 34 : isFeed ? 26 : 18;
  const headlineFontSize = isStory ? 44 : isFeed ? 32 : 24;
  const headlineLineHeight = isStory ? 54 : isFeed ? 40 : 30;

  // Account for Canvas 2D alphabetic text baseline so letters NEVER touch or overlap image
  const titleY = imgBottom + headlineGap + Math.round(headlineFontSize * 0.85);

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
    const footerH = isStory ? 210 : isFeed ? 140 : 88;
    const ctaBoxY = height - footerH - ctaBoxH - (isStory ? 24 : 16);

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

  // 4. Hero Photograph (Guaranteed Image-First Proportions with deliberate spacing)
  const imgY = headerY + 48;
  const imgH = isStory ? 620 : isFeed ? 420 : 280;

  const customFallbackCat = config.assetCategory === 'vehicle' ? 'auto' : 'casa';
  const customFallback = getCategoryFallbackImage(customFallbackCat);
  const customImg = await loadCanvasImage(config.imagePath, customFallback, 3500);
  const tagTitle = (config.visualStyleTitle || config.sceneSettingTitle)
    ? `${config.visualStyleTitle || 'Editorial'} · ${config.sceneSettingTitle || 'Urban'}`
    : undefined;

  drawEditorialHeroImageSlot(ctx, {
    x: paddingX,
    y: imgY,
    width: contentWidth,
    height: imgH,
    radius: 20,
    img: customImg,
    tagLabel: tagTitle,
    tagVariant: 'editorial',
    fallbackTitle: config.headline || config.scenarioTitle,
    isStory,
    isFeed,
  });

  // 5. Short Memorable Headline (with deliberate spacing below image)
  const imgBottomCustom = imgY + imgH;
  const customGap = isStory ? 34 : isFeed ? 26 : 18;
  const customFontSize = isStory ? 44 : isFeed ? 30 : 22;
  const headlineLineHeight = isStory ? 54 : isFeed ? 38 : 28;
  const titleY = imgBottomCustom + customGap + Math.round(customFontSize * 0.85);

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

  const footerH = isStory ? 210 : isFeed ? 140 : 88;
  const caveatH = isStory ? 54 : isFeed ? 40 : 32;
  const compH = Math.max(isStory ? 500 : isFeed ? 400 : 360, height - compStartY - footerH - caveatH - 24);

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
    ctx.font = `800 ${isStory ? 14 : 12}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.letterSpacing = '0.6px';
    ctx.fillText(label.toUpperCase(), col1X + colInnerPad, startY);

    const bodyFontSize = isStory ? 18 : isFeed ? 15 : 13;
    const bodyLineHeight = isStory ? 25 : isFeed ? 21 : 18;
    ctx.fillStyle = '#1E293B';
    ctx.font = `500 ${bodyFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

    const maxLines = isStory ? 3 : 2;
    const lines = wrapText(ctx, body, colInnerW, maxLines);
    lines.forEach((l, i) => {
      ctx.fillText(l, col1X + colInnerPad, startY + (isStory ? 22 : 18) + i * bodyLineHeight);
    });
    ctx.restore();
    return startY + (isStory ? 22 : 18) + lines.length * bodyLineHeight;
  };

  curY1 = renderCustomColBlock('Ce ar putea fi despăgubit', config.takeaway || 'Despăgubire aprobată conform clauzelor aplicabile din poliță', '#15803D', curY1) + sectionGap;
  curY1 = renderCustomColBlock('Ce condiții trebuie îndeplinite', 'Notificarea daunei în termen legal și măsuri de limitare a pagubei', '#0284C7', curY1) + sectionGap;
  curY1 = renderCustomColBlock('Costuri în sarcina ta', 'Franșiză contractuală (dacă există) sau uzura pieselor înlocuite', '#64748B', curY1);
  ctx.restore();

  // --- COLUMN 2: FĂRĂ ASIGURARE ---
  const col2X = paddingX + colW + colGap;
  ctx.save();
  ctx.fillStyle = '#FFF8F8';
  ctx.strokeStyle = '#FECACA';
  ctx.lineWidth = 1.5;
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
  ctx.font = '800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('FĂRĂ ASIGURARE', col2X + 38, badge2Y + badge2H / 2 + 4.5);

  let curY2 = badge2Y + badge2H + (isStory ? 24 : 16);

  const renderCustomCol2Block = (
    label: string,
    body: string,
    accentColor: string,
    startY: number
  ): number => {
    ctx.save();
    ctx.fillStyle = accentColor;
    ctx.font = `800 ${isStory ? 14 : 12}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.letterSpacing = '0.6px';
    ctx.fillText(label.toUpperCase(), col2X + colInnerPad, startY);

    const bodyFontSize = isStory ? 18 : isFeed ? 15 : 13;
    const bodyLineHeight = isStory ? 25 : isFeed ? 21 : 18;
    ctx.fillStyle = '#1E293B';
    ctx.font = `500 ${bodyFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

    const maxLines = isStory ? 3 : 2;
    const lines = wrapText(ctx, body, colInnerW, maxLines);
    lines.forEach((l, i) => {
      ctx.fillText(l, col2X + colInnerPad, startY + (isStory ? 22 : 18) + i * bodyLineHeight);
    });
    ctx.restore();
    return startY + (isStory ? 22 : 18) + lines.length * bodyLineHeight;
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
