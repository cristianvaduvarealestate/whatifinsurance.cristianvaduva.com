'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QUIZ_QUESTIONS } from '@/data/quiz';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  ShieldAlert,
  ArrowLeft,
  FileCheck2,
  Info,
} from 'lucide-react';

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (answered) return;
    setSelectedOptionId(optionId);
    setAnswered(true);

    const chosenOption = currentQ.options.find((o) => o.id === optionId);
    if (chosenOption?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setAnswered(false);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#06141B] pb-24">
      {/* Hero Header */}
      <div className="relative border-b border-slate-200 bg-slate-50/70 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#06141B] transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Înapoi la pagina principală</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Provocare Interactivă · 8 Întrebări</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Acoperit, neacoperit sau depinde de poliță?
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Majoritatea oamenilor află ce nu acoperă asigurarea lor abia după ce evenimentul s-a produs.
            Testează-ți intuiția pe 8 situații cotidiene reale și descoperă clauzele care fac diferența.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {!completed ? (
          <div className="space-y-6">
            {/* Progress Bar & Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-bold">
                <span>ÎNTREBAREA {currentIndex + 1} DIN {QUIZ_QUESTIONS.length}</span>
                <span>Scor curent: {score}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-[#06141B] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10600] block">
                  Scenariu de caz
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#06141B] leading-snug">
                  {currentQ.question}
                </h2>
                {currentQ.situationSnippet && (
                  <p className="text-xs sm:text-sm text-slate-600 italic bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    Circumstanță: {currentQ.situationSnippet}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  let cardStyle = 'bg-white border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-800';

                  if (answered) {
                    if (option.isCorrect) {
                      cardStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold';
                    } else if (isSelected && !option.isCorrect) {
                      cardStyle = 'bg-red-50 border-red-300 text-red-950 font-bold';
                    } else {
                      cardStyle = 'bg-slate-50/50 border-slate-200 opacity-60 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      disabled={answered}
                      className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${cardStyle}`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {answered && option.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        )}
                        {answered && isSelected && !option.isCorrect && (
                          <XCircle className="w-5 h-5 text-[#E10600]" />
                        )}
                        {(!answered || (!isSelected && !option.isCorrect)) && (
                          <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px] font-mono text-slate-500">
                            {option.id.slice(-1).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Rationale Reveal (Shown after answer) */}
              {answered && (
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 animate-in fade-in duration-300">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#06141B]">
                      <AlertTriangle className="w-4 h-4 text-slate-600" />
                      <span>Explicație &amp; Mecanism Asigurare</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {currentQ.explanation}
                    </p>
                    {currentQ.caveatNote && (
                      <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 flex items-start gap-1.5 font-medium">
                        <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>Recomandare de verificare: {currentQ.caveatNote}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                    >
                      <span>
                        {currentIndex + 1 < QUIZ_QUESTIONS.length ? 'Următoarea întrebare' : 'Vezi rezultatul final'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Completed Screen */
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-[#06141B]">
              <FileCheck2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#E10600] font-bold">
                Rezultat Final
              </span>
              <h2 className="text-3xl font-black text-[#06141B]">
                Ai obținut {score} din {QUIZ_QUESTIONS.length} puncte
              </h2>
            </div>

            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              {score >= 7
                ? 'Excelent! Ai o înțelegere clară a modului în care funcționează clauzele, excluderile și limitele din contractele de asigurare.'
                : score >= 4
                ? 'Rezultat bun, dar există riscuri ascunse majore pe care mulți asigurați le descoperă abia în fața refuzului de plată.'
                : 'Atenție mare! Răspunsurile tale arată că există diferențe majore între ce presupui că acoperă o poliță și termenii reali din contract.'}
            </p>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 font-mono text-[11px] uppercase">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-600" />
                Declinare educațională de responsabilitate
              </div>
              <p>
                Acest test are un scop strict educațional și orientativ. Răspunsurile corecte reflectă uzanțele și normele contractuale standard, însă decizia efectivă de despăgubire depinde întotdeauna exclusiv de clauzele particulare și circumstanțele fiecărui dosar.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 hover:bg-slate-100 text-[#06141B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reia testul</span>
              </button>

              <Link
                href="/verificare-polita"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Generează checklist personal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
