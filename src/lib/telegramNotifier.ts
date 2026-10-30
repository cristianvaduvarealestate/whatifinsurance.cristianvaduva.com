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
  oferta: 'Solicitare Consultanță / Ofertă',
  asigurare_intrebare: 'Ce vrei să-ți asiguri? (Chestionar Interactiv)',
  ce_vrei_sa_asiguri: 'Ce vrei să-ți asiguri?',
  quote_request: 'Cerere Ofertă Asigurare',
  'review-polita': 'Verificare / Audit Poliță',
  general: 'Mesaj General de Contact',
  intrebare: 'Întrebare Specifică Scenariu',
  audit: 'Audit Poliță Personală',
};

export async function sendTelegramLeadNotification(
  lead: LeadNotificationPayload
): Promise<{ success: boolean; reason?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  // If credentials are absent, log safe diagnostic and gracefully exit
  if (!botToken || !chatId) {
    console.info(
      `[TelegramNotifier] Notifications not configured (missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID). Lead ${lead.id} safely stored locally.`
    );
    return { success: false, reason: 'credentials_not_configured' };
  }

  // Prevent duplicate sending for the same submission
  if (isDuplicate(lead.id)) {
    console.info(`[TelegramNotifier] Duplicate notification skipped for lead ID: ${lead.id}`);
    return { success: true, reason: 'duplicate_prevented' };
  }

  const formLabel = FORM_TYPE_LABELS[lead.formType] || lead.formType || 'Solicitare Nouă';

  // Format message using Telegram HTML parse mode
  const messageLines = [
    `<b>🔔 LEAD NOU — WHAT IF INSURANCE</b>`,
    ``,
    `<b>ID:</b> <code>${escapeTelegramHtml(lead.id)}</code>`,
    `<b>Tip Formular:</b> ${escapeTelegramHtml(formLabel)}`,
    `<b>Data:</b> ${escapeTelegramHtml(new Date(lead.timestamp).toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' }))}`,
    ``,
    `<b>👤 Nume:</b> ${escapeTelegramHtml(lead.name)}`,
    `<b>📞 Telefon:</b> ${escapeTelegramHtml(lead.phone || 'Nespecificat')}`,
    `<b>✉️ Email:</b> ${escapeTelegramHtml(lead.email)}`,
  ];

  if (lead.category) {
    messageLines.push(`<b>🏷️ Categorie / Bun:</b> ${escapeTelegramHtml(lead.category)}`);
  }

  if (lead.scenarioTitle) {
    messageLines.push(`<b>📖 Scenariu:</b> ${escapeTelegramHtml(lead.scenarioTitle)}`);
  }

  if (lead.sourcePage) {
    messageLines.push(`<b>📍 Pagină Sursă:</b> <code>${escapeTelegramHtml(lead.sourcePage)}</code>`);
  }

  if (lead.referralToken) {
    messageLines.push(`<b>🔗 Recomandare:</b> <code>${escapeTelegramHtml(lead.referralToken)}</code>`);
  }

  if (lead.message && lead.message.trim().length > 0) {
    messageLines.push(``);
    messageLines.push(`<b>💬 Detalii / Mesaj:</b>`);
    messageLines.push(`<i>${escapeTelegramHtml(lead.message.trim())}</i>`);
  }

  messageLines.push(``);
  messageLines.push(`<i>Trimis de pe WHAT IF INSURANCE (whatifinsurance.cristianvaduva.com)</i>`);

  const telegramPayload = {
    chat_id: chatId,
    text: messageLines.join('\n'),
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
      // Log safely without bot token or PII
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
