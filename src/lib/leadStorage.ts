/**
 * Lead Storage Service for WHAT IF INSURANCE
 * 
 * Supports:
 * 1. Netlify Blobs (Primary in Netlify production - secure, persistent key-value store)
 * 2. Local Disk (Development fallback when filesystem is writable)
 * 
 * Explicitly separates persistent storage state from notification channels (Telegram).
 */

export interface LeadRecord {
  id: string;
  timestamp: string;
  formType: string;
  name: string;
  email: string;
  phone?: string;
  category?: string;
  scenarioTitle?: string;
  scenarioSlug?: string;
  message?: string;
  referralToken?: string;
  referralLandingPath?: string;
  ipMasked: string;
  status: string;
  telegramNotified?: boolean;
}

export interface LeadStorageResult {
  persisted: boolean;
  engine: 'netlify_blobs' | 'local_disk' | 'none';
  error?: string;
}

export async function saveLead(lead: LeadRecord): Promise<LeadStorageResult> {
  // 1. Primary: Netlify Blobs (Official serverless KV store)
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore({
      name: 'whatif-leads',
      consistency: 'strong',
    });

    await store.setJSON(lead.id, lead, {
      metadata: {
        // PII Minimized: Store only operational metadata (no names, emails, or phone numbers)
        timestamp: lead.timestamp,
        formType: lead.formType,
        hasReferral: Boolean(lead.referralToken),
      },
    });

    return {
      persisted: true,
      engine: 'netlify_blobs',
    };
  } catch (blobsErr: any) {
    // Expected outside of Netlify runtime or when Netlify context is not configured
    const isLocalDev = process.env.NODE_ENV !== 'production' || !process.env.NETLIFY;
    if (!isLocalDev) {
      console.warn(`[LeadStorage] Netlify Blobs unavailable: ${blobsErr?.message || 'unknown'}`);
    }
  }

  // 2. Secondary / Local Dev: Persistent local disk (data/leads.json)
  try {
    const fs = await import('fs');
    const path = await import('path');
    const storageDir = path.join(process.cwd(), 'data');

    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    const storagePath = path.join(storageDir, 'leads.json');
    let existingLeads: any[] = [];
    if (fs.existsSync(storagePath)) {
      try {
        const fileContent = fs.readFileSync(storagePath, 'utf8');
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
    }

    existingLeads.push(lead);
    fs.writeFileSync(storagePath, JSON.stringify(existingLeads, null, 2), 'utf8');

    return {
      persisted: true,
      engine: 'local_disk',
    };
  } catch (fsErr: any) {
    // In serverless Lambda, filesystem is read-only (EROFS)
    console.warn(`[LeadStorage] Local filesystem write failed (code: ${fsErr?.code || 'unknown'}).`);
  }

  // 3. Neither storage engine succeeded
  return {
    persisted: false,
    engine: 'none',
    error: 'Sistemul de stocare persistentă este indisponibil.',
  };
}

/**
 * Secure Server-Side Read Operation (Internal / Administrative Access only)
 * Recovers a specific lead by ID from Netlify Blobs or local development storage.
 * Note: No public HTTP endpoint is exposed for this function.
 */
export async function getLead(id: string): Promise<LeadRecord | null> {
  // 1. Try Netlify Blobs
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore({
      name: 'whatif-leads',
      consistency: 'strong',
    });
    const record = await store.get(id, { type: 'json' });
    if (record) return record as LeadRecord;
  } catch {
    // Blobs not available
  }

  // 2. Try Local Disk
  try {
    const fs = await import('fs');
    const path = await import('path');
    const storagePath = path.join(process.cwd(), 'data', 'leads.json');
    if (fs.existsSync(storagePath)) {
      const leads: LeadRecord[] = JSON.parse(fs.readFileSync(storagePath, 'utf8'));
      const found = leads.find((l) => l.id === id);
      if (found) return found;
    }
  } catch {
    // Disk read failed
  }

  return null;
}

/**
 * Secure Server-Side Index Listing (Internal / Administrative Access only)
 * Lists lead IDs without exposing sensitive customer data.
 */
export async function listLeadIds(): Promise<string[]> {
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore({
      name: 'whatif-leads',
    });
    const { blobs } = await store.list();
    return blobs.map((b) => b.key);
  } catch {
    // Blobs not available
  }

  try {
    const fs = await import('fs');
    const path = await import('path');
    const storagePath = path.join(process.cwd(), 'data', 'leads.json');
    if (fs.existsSync(storagePath)) {
      const leads: LeadRecord[] = JSON.parse(fs.readFileSync(storagePath, 'utf8'));
      return leads.map((l) => l.id);
    }
  } catch {
    // Disk read failed
  }

  return [];
}

// In-memory instance-level fallback for dedup
const inMemoryDedupStore = new Map<string, { timestamp: number; leadId: string }>();

/**
 * Durable Deduplication Service
 * Checks and registers submission fingerprints to prevent duplicate processing
 * across concurrent or rapid retry serverless invocations.
 *
 * Uses Netlify Blobs store ('whatif-dedup') with strong consistency when available,
 * and falls back to an in-memory map in local development.
 *
 * TTL: 90 seconds (catches fast double-clicks and network retries without
 * suppressing legitimate subsequent submissions from the same user).
 */
export async function checkAndRegisterDeduplication(
  fingerprint: string,
  leadId: string,
  windowMs: number = 90_000
): Promise<{ isDuplicate: boolean; existingLeadId?: string }> {
  const now = Date.now();

  // 1. Check in-memory first (immediate fast-path on same lambda instance)
  const mem = inMemoryDedupStore.get(fingerprint);
  if (mem && now - mem.timestamp < windowMs) {
    return { isDuplicate: true, existingLeadId: mem.leadId };
  }

  // 2. Try Netlify Blobs (cross-instance, serverless persistent KV)
  try {
    const { getStore } = await import('@netlify/blobs');
    const dedupStore = getStore({
      name: 'whatif-dedup',
      consistency: 'strong',
    });

    const existingRecord = (await dedupStore.get(fingerprint, { type: 'json' })) as {
      timestamp: number;
      leadId: string;
    } | null;

    if (existingRecord && now - existingRecord.timestamp < windowMs) {
      inMemoryDedupStore.set(fingerprint, existingRecord);
      return { isDuplicate: true, existingLeadId: existingRecord.leadId };
    }

    // Atomically write new entry with strong consistency
    await dedupStore.setJSON(fingerprint, { timestamp: now, leadId });
  } catch {
    // Expected in environments where Netlify Blobs is not active (e.g. local dev)
  }

  // Record in memory and return non-duplicate
  inMemoryDedupStore.set(fingerprint, { timestamp: now, leadId });
  return { isDuplicate: false };
}
