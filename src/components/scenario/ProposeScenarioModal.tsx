'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  HelpCircle,
  FileText,
  Lock,
} from 'lucide-react';

interface ProposeScenarioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProposeScenarioModal({ isOpen, onClose }: ProposeScenarioModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('casa');
  const [description, setDescription] = useState('');
  const [keyQuestion, setKeyQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [consent, setConsent] = useState(false);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!title.trim() || !description.trim() || !keyQuestion.trim()) {
      setStatus('error');
      setErrorMessage('Vă rugăm să completați titlul, descrierea și întrebarea despre asigurare.');
      return;
    }

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMessage('Numele, emailul și telefonul sunt necesare pentru a vă transmite analiza consultantului.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Este necesar acordul pentru prelucrarea datelor.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          formType: 'intrebare_generala',
          category,
          scenarioTitle: `[Propunere Scenariu] ${title.trim()}`,
          sourceName: 'Propunere Situație Cititor',
          sourcePage: window.location.pathname,
          consent,
          website_honeypot: honeypot,
          message: `ÎNTREBARE: ${keyQuestion.trim()}\n\nDESCRIERE SITUAȚIE:\n${description.trim()}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        trackEvent('scenario_proposal_submit', {
          category,
          hasQuestion: Boolean(keyQuestion.trim()),
          source_page: window.location.pathname,
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'A apărut o problemă la transmiterea situației. Reîncercați.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Eroare de conexiune la server. Vă rugăm să reîncercați.');
    }
  };

  const handleResetAndClose = () => {
    setTitle('');
    setDescription('');
    setKeyQuestion('');
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#E10600]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-black text-[#06141B]">
                Propune o situație pentru analiza editorială
              </h2>
              <p className="text-[11px] text-slate-500">
                Verificare editorială &amp; răspuns asigurat de consultant
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#06141B] hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-[#06141B]">
                Situația ta a fost recepționată!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Consultantul nostru va analiza mecanismul contractual specific și îți va trimite un punct de vedere. Dacă situația prezintă interes educațional general, va fi anonimizată și propusă spre publicare.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Închide fereastra
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Honeypot anti-spam field */}
            <input
              type="text"
              name="website_honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Editorial Privacy & Moderation Notice */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-mono font-bold text-[10px] uppercase text-[#06141B]">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
                <span>Protocol Editorial de Protecție a Datelor</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Nu includeți date sensibile (CNP, conturi bancare, numere de dosar sau copii ale contractelor). Dacă această situație este selectată pentru secțiunea educațională „De la cititori”, va fi publicată exclusiv într-o formă 100% anonimizată, după aprobare editorială manuală.
              </p>
            </div>

            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Titlul situației <span className="text-[#E10600]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex. Țeavă spartă în timpul vacanței sau Zgârietură în parcare"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Categoria <span className="text-[#E10600]">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none bg-white"
                >
                  <option value="casa">Locuință</option>
                  <option value="auto">Auto &amp; CASCO</option>
                  <option value="calatorii">Călătorii</option>
                  <option value="sanatate">Sănătate</option>
                  <option value="familie">Familie</option>
                  <option value="business">Afacere &amp; Răspundere</option>
                  <option value="proprietari">Proprietari / Chiriași</option>
                </select>
              </div>
            </div>

            {/* Situation Description */}
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                Descrierea situației <span className="text-[#E10600]">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="Descrie pe scurt ce s-a întâmplat (circumstanțe, daune apărute, cine a fost implicat)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none resize-none"
              />
            </div>

            {/* Key Question */}
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                Ce întrebare despre asigurare dorești să clarifici? <span className="text-[#E10600]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="ex. Cine plătește daunele vecinilor? Se aplică franșiză?"
                value={keyQuestion}
                onChange={(e) => setKeyQuestion(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none"
              />
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Nume <span className="text-[#E10600]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Numele tău"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Email <span className="text-[#E10600]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@exemplu.ro"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Telefon <span className="text-[#E10600]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="07xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none"
                />
              </div>
            </div>

            {/* GDPR Consent */}
            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="proposal-consent"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-slate-300 text-[#06141B] focus:ring-[#06141B] h-4 w-4"
              />
              <label htmlFor="proposal-consent" className="text-[11px] text-slate-600 leading-snug cursor-pointer">
                Sunt de acord cu prelucrarea datelor de contact pentru a primi analiza consultantului, conform{' '}
                <Link href="/confidentialitate" className="underline hover:text-[#06141B]">
                  Politicii de Confidențialitate
                </Link>
                . Confirm că datele introduse nu includ informații confidențiale ale unor terți.
              </label>
            </div>

            {status === 'error' && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-[#E10600] text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 rounded-full border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                Anulează
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 disabled:opacity-60 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'submitting' ? 'Se transmite...' : 'Trimite situația'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
