'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, CheckCircle2, ShieldQuestion, ArrowRight } from 'lucide-react';

interface PolicyCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  scenarioTitle?: string;
}

export const PolicyCheckModal: React.FC<PolicyCheckModalProps> = ({
  isOpen,
  onClose,
  scenarioTitle,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [policyType, setPolicyType] = useState('locuinta');
  const [holderStatus, setHolderStatus] = useState('am_deja');
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 my-auto overflow-hidden text-[#06141B]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <ShieldQuestion className="w-5 h-5 text-[#E10600]" />
            <h3 className="text-lg sm:text-xl font-black text-[#06141B]">
              Audit Rapid de Clauze
            </h3>
          </div>
          <button
            onClick={() => {
              setStep('form');
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#06141B] hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-5">
            {scenarioTitle && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-[#06141B]">Punct de plecare:</span> {scenarioTitle}
              </div>
            )}

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                1. Ce tip de poliță vrei să clarifici?
              </label>
              <select
                value={policyType}
                onChange={(e) => setPolicyType(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none"
              >
                <option value="locuinta">Poliță Locuință (PAD sau Facultativă)</option>
                <option value="auto">Poliță Auto (RCA sau CASCO)</option>
                <option value="viata">Viață &amp; Sănătate</option>
                <option value="calatorii">Călătorie Internațională</option>
                <option value="business">Cyber &amp; Răspundere Profesională</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                2. Situația ta actuală
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setHolderStatus('am_deja')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                    holderStatus === 'am_deja'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  Am o poliță și vreau s-o verific
                </button>
                <button
                  type="button"
                  onClick={() => setHolderStatus('nu_am')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                    holderStatus === 'nu_am'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  Vreau să închei una, fără capcane
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                3. Ce clauză te pune pe gânduri? (Opțional)
              </label>
              <textarea
                rows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Exemplu: Aș vrea să știu dacă asigurarea mea acoperă apa de conductă, franșiza sau daunele vecinilor..."
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none resize-none placeholder:text-slate-400"
              />
            </div>

            {/* Quick Link to full form */}
            <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
              <span>Pentru o analiză aplicată cu date de contact:</span>
              <Link
                href="/contact?topic=review-polita"
                onClick={onClose}
                className="text-[#06141B] font-bold underline hover:text-[#E10600]"
              >
                Formular Detaliat
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Trimite solicitarea de audit</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#06141B]">
              Solicitarea ta de audit a fost recepționată
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Dacă vrei o analiză aplicată pe contractul tău semnat, accesează formularul dedicat de contact cu detaliile poliței tale.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <Link
                href="/contact?topic=review-polita"
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                className="py-2.5 px-5 rounded-full bg-[#06141B] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Mergi la formularul detaliat
              </Link>

              <button
                type="button"
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                className="py-2.5 px-5 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Închide fereastra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
