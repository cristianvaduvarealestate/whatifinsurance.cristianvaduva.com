/**
 * Reusable Server-Side Telegram Notification Service for WHAT IF INSURANCE Leads
 * 
 * Features:
 * - HTML message formatting with strict escaping of user inputs to prevent injection
 * - Deduplication via in-memory cache of recently notified lead IDs
 * - Timeout handling (6s) via AbortController
 * - Non-blocking: does not interfere with primary lead persistence
 * - Safe server-side logging without leaking tokens or personal customer data
 */

export interface LeadNotificationPayload {
  id: string;
  timestamp: string;
  formType: string;
  name: string;
  email: string;
  phone?: string;
  category?: string;
  scenarioTitle?: string;
  scenarioSlug?: string;
  sourceName?: string;
  sourcePage?: string;
  message?: string;
  referralToken?: string;
}

// In-memory deduplication set for lead notifications (TTL: 10 minutes)
const sentLeadNotifications = new Map<string, number>();

function isDuplicate(leadId: string): boolean {
  const now = Date.now();
  const existing = sentLeadNotifications.get(leadId);
  if (existing && now - existing < 10 * 60 * 1000) {
    return true;
  }
  sentLeadNotifications.set(leadId, now);
  // Clean up entries older than 15 minutes
  if (sentLeadNotifications.size > 1000) {
    for (const [id, timestamp] of sentLeadNotifications.entries()) {
      if (now - timestamp > 15 * 60 * 1000) {
        sentLeadNotifications.delete(id);
      }
    }
  }
  return false;
}

/**
 * Escapes characters that have special meaning in Telegram HTML parse mode.
 */
function escapeTelegramHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const FORM_TYPE_LABELS: Record<string, string> = {
  intrebare_generala: 'Am o întrebare',
  oferta_noua: 'Vreau o asigurare (Ofertă nouă)',
  asistenta_polita: 'Am deja o poliță (Asistență / Optimizare)',
  audit_clauza: 'Vreau să înțeleg o clauză (Audit clauze)',
  asistenta_dauna: 'Am nevoie de ajutor pentru o daună (Asistență daună)',
  oferta: 'Solicitare Consultanță / Ofertă',
  asigurare_intrebare: 'Am o întrebare',
  ce_vrei_sa_asiguri: 'Vreau o asigurare',
  quote_request: 'Cerere Ofertă Asigurare',
  'review-polita': 'Verificare / Audit Poliță',
  general: 'Întrebare Generală',
  intrebare: 'Întrebare Generală',
  audit: 'Audit Clauze',
};

/**
 * Safely resolves Telegram Bot credentials from process.env (Node.js/local/OpenNext)
 * or Cloudflare Worker runtime bindings via @opennextjs/cloudflare without leaking values.
 */
async function getTelegramConfig(): Promise<{ botToken?: string; chatId?: string }> {
  let botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  let chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    try {
      const { getCloudflareContext } = await import('@opennextjs/cloudflare');
      const ctx = getCloudflareContext();
      if (ctx && ctx.env) {
        const cfEnv = ctx.env as Record<string, any>;
        botToken = botToken || cfEnv.TELEGRAM_BOT_TOKEN?.trim();
        chatId = chatId || cfEnv.TELEGRAM_CHAT_ID?.trim();
      }
    } catch {
      // Running in standard Node.js or build runtime
    }
  }

  return { botToken, chatId };
}

export async function sendTelegramLeadNotification(
  lead: LeadNotificationPayload
): Promise<{ success: boolean; reason?: string }> {
  const { botToken, chatId } = await getTelegramConfig();

  // If credentials are absent, log safe diagnostic without leaking any secrets
  if (!botToken || !chatId) {
    console.info(
      `[TelegramNotifier] Credentials not configured in current environment. Lead ${lead.id} processed safely.`
    );
    return { success: false, reason: 'credentials_not_configured' };
  }

  // Prevent duplicate sending for the same submission
  if (isDuplicate(lead.id)) {
    console.info(`[TelegramNotifier] Duplicate notification skipped for lead ID: ${lead.id}`);
    return { success: true, reason: 'duplicate_prevented' };
  }

  const formLabel = FORM_TYPE_LABELS[lead.formType] || lead.formType || 'Solicitare Nouă';

  const formattedDate = new Date(lead.timestamp).toLocaleString('ro-RO', {
    timeZone: 'Europe/Bucharest',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Strict format matching user specifications
  const lines: string[] = [
    `📩 <b>SOLICITARE NOUĂ — WHATIF INSURANCE</b>`,
    ``,
    `<b>Tip solicitare:</b> ${escapeTelegramHtml(formLabel)}`,
    `<b>Nume:</b> ${escapeTelegramHtml(lead.name)}`,
  ];

  if (lead.phone && lead.phone.trim().length > 0) {
    lines.push(`<b>Telefon:</b> ${escapeTelegramHtml(lead.phone.trim())}`);
  }

  if (lead.email && lead.email.trim().length > 0) {
    lines.push(`<b>Email:</b> ${escapeTelegramHtml(lead.email.trim())}`);
  }

  if (lead.category && lead.category.trim().length > 0) {
    lines.push(`<b>Categorie / Risc:</b> ${escapeTelegramHtml(lead.category.trim())}`);
  }

  if (lead.scenarioTitle && lead.scenarioTitle.trim().length > 0) {
    lines.push(`<b>Scenariu:</b> ${escapeTelegramHtml(lead.scenarioTitle.trim())}`);
  }

  if (lead.message && lead.message.trim().length > 0) {
    lines.push(``);
    lines.push(`<b>Mesaj:</b>`);
    lines.push(`${escapeTelegramHtml(lead.message.trim())}`);
  }

  lines.push(``);
  lines.push(`<b>Sursă:</b> ${escapeTelegramHtml(lead.sourceName || 'Asistentul „Cu ce te putem ajuta?”')}`);
  lines.push(`<b>Data:</b> ${escapeTelegramHtml(formattedDate)}`);

  if (lead.sourcePage && lead.sourcePage.trim().length > 0) {
    lines.push(`<b>Pagina:</b> ${escapeTelegramHtml(lead.sourcePage.trim())}`);
  }

  if (lead.referralToken && lead.referralToken.trim().length > 0) {
    lines.push(`<b>Recomandare:</b> <code>${escapeTelegramHtml(lead.referralToken.trim())}</code>`);
  }

  const telegramPayload = {
    chat_id: chatId,
    text: lines.join('\n'),
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(telegramPayload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.warn(
        `[TelegramNotifier] Telegram API returned HTTP ${response.status} for lead ${lead.id}. Details: ${errorText.substring(0, 150)}`
      );
      return { success: false, reason: `http_${response.status}` };
    }

    const data = await response.json();
    if (data.ok) {
      console.info(`[TelegramNotifier] Telegram notification sent successfully for lead ${lead.id}`);
      return { success: true };
    } else {
      console.warn(`[TelegramNotifier] Telegram API response not ok for lead ${lead.id}`);
      return { success: false, reason: 'api_error' };
    }
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error?.name === 'AbortError') {
      console.warn(`[TelegramNotifier] Timeout (6s) while reaching Telegram API for lead ${lead.id}`);
      return { success: false, reason: 'timeout' };
    }
    console.warn(`[TelegramNotifier] Network exception for lead ${lead.id}: ${error?.message || 'unknown error'}`);
    return { success: false, reason: 'network_exception' };
  }
}

export interface OperationalAlertPayload {
  type: 'repeated_form_failure' | 'operational_anomaly' | 'high_interest_scenario';
  summary: string;
  metadata?: Record<string, string | number>;
}

// In-memory throttling for operational monitoring alerts: max 1 alert per 15 minutes
let lastOperationalAlertTime = 0;

/**
 * Privacy-preserving, throttled operational alert service for critical platform events.
 * Strictly excludes any PII, full URLs, IP addresses, or personal form inputs.
 */
export async function sendTelegramOperationalAlert(
  alert: OperationalAlertPayload
): Promise<{ success: boolean; reason?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  const alertsEnabled = process.env.ENABLE_TELEGRAM_ALERTS !== 'false';

  if (!alertsEnabled) {
    return { success: false, reason: 'alerts_disabled' };
  }

  if (!botToken || !chatId) {
    return { success: false, reason: 'credentials_not_configured' };
  }

  const now = Date.now();
  if (now - lastOperationalAlertTime < 15 * 60 * 1000) {
    return { success: true, reason: 'throttled' };
  }
  lastOperationalAlertTime = now;

  const lines = [
    `<b>⚠️ ALERTĂ OPERAȚIONALĂ — WHAT IF INSURANCE</b>`,
    ``,
    `<b>Tip:</b> <code>${escapeTelegramHtml(alert.type)}</code>`,
    `<b>Data:</b> ${escapeTelegramHtml(new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' }))}`,
    `<b>Sumar:</b> ${escapeTelegramHtml(alert.summary.substring(0, 200))}`,
  ];

  if (alert.metadata) {
    lines.push(``);
    lines.push(`<b>Parametri Tehnici:</b>`);
    for (const [k, v] of Object.entries(alert.metadata)) {
      if (!['name', 'email', 'phone', 'ip', 'message'].includes(k.toLowerCase())) {
        lines.push(`• <i>${escapeTelegramHtml(k)}:</i> <code>${escapeTelegramHtml(String(v).substring(0, 100))}</code>`);
      }
    }
  }

  const payload = {
    chat_id: chatId,
    text: lines.join('\n'),
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return { success: res.ok };
  } catch {
    clearTimeout(timeoutId);
    return { success: false, reason: 'network_error' };
  }
}
