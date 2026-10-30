'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { QUIZ_QUESTIONS } from '@/data/quiz';
import { QuizQuestion } from '@/types/scenario';
import {
  generateQuizSession,
  getPreviousQuizIds,
  saveCurrentQuizIds,
  DEFAULT_QUIZ_SIZE,
} from '@/lib/quizRandomizer';
import { getShareableReferralLink } from '@/lib/referralManager';
import { trackEvent } from '@/lib/analytics';
import { ShareChallengeModal } from '@/components/share/ShareChallengeModal';
import { PolicyChecklistModal } from '@/components/rewards/PolicyChecklistModal';
import {
  EDITORIAL_CARDS,
  EDITORIAL_CONCEPTS,
  getRecommendedEditorialCardForQuiz,
} from '@/data/editorialCards';
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
  Share2,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Eye,
  FileText,
  Scale,
  Lightbulb,
  CheckSquare,
} from 'lucide-react';

export default function QuizPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedCardForShare, setSelectedCardForShare] = useState<string | undefined>(undefined);

  // Synchronous guard against double-clicks or rapid events
  const answeredRef = useRef(false);

  // Modals
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // Initialize a fresh randomized quiz session
  const initNewQuiz = (customPreviousIds?: string[]) => {
    const previousIds = customPreviousIds ?? getPreviousQuizIds();
    const sessionQuestions = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE, previousIds);
    setQuestions(sessionQuestions);
    saveCurrentQuizIds(sessionQuestions.map((q) => q.id));
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setAnswered(false);
    answeredRef.current = false;
    setScore(0);
    setCompleted(false);

    trackEvent('challenge_started', {
      questionCount: sessionQuestions.length,
    });
  };

  useEffect(() => {
    initNewQuiz();
    setIsMounted(true);
  }, []);

  const currentQ = questions[currentIndex];
  const totalCount = questions.length > 0 ? questions.length : DEFAULT_QUIZ_SIZE;

  const handleSelectOption = (optionId: string) => {
    if (answered || answeredRef.current || !currentQ) return;
    answeredRef.current = true;
    setSelectedOptionId(optionId);
    setAnswered(true);

    const chosenOption = currentQ.options.find((o) => o.id === optionId);
    if (chosenOption?.isCorrect) {
      setScore((prev) => Math.min(prev + 1, questions.length));
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      answeredRef.current = false;
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setAnswered(false);
    } else {
      setCompleted(true);
      trackEvent('challenge_completed', {
        score,
        questionCount: questions.length,
        percentageScore: Math.round((score / questions.length) * 100),
      });
    }
  };

  const handleRestartQuiz = () => {
    const currentIds = questions.map((q) => q.id);
    initNewQuiz(currentIds);
  };

  const handleCopyInviteLink = async () => {
    const shareableLink = getShareableReferralLink('/quiz');
    try {
      await navigator.clipboard.writeText(shareableLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
      trackEvent('invite_link_copied', {
        context: 'challenge_result',
      });
    } catch {
      setLinkCopied(true);
    }
  };

  const handleOpenChecklist = () => {
    setIsChecklistModalOpen(true);
    trackEvent('reward_resource_opened', {
      resourceType: 'policy_checklist',
      sourceLocation: 'quiz_result',
    });
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
            <span>Provocare Interactivă · {totalCount} Întrebări</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Acoperit, neacoperit sau depinde de clauză?
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Majoritatea oamenilor citesc contractul abia după producerea daunei.
            Testează-ți intuiția pe {totalCount} situații reale și descoperă nuanțele care decid dacă primești despăgubirea.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {!isMounted || questions.length === 0 ? (
          /* Hydration-safe loading placeholder */
          <div className="space-y-6 animate-pulse">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 font-bold">
                <span className="h-4 w-40 bg-slate-200 rounded"></span>
                <span className="h-4 w-24 bg-slate-200 rounded"></span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="h-full bg-slate-200 w-1/5" />
              </div>
            </div>

            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-3">
                <div className="h-3 w-28 bg-red-100 rounded"></div>
                <div className="h-7 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-12 w-full bg-slate-100 rounded-xl"></div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="h-16 w-full bg-slate-100 rounded-2xl"></div>
                <div className="h-16 w-full bg-slate-100 rounded-2xl"></div>
                <div className="h-16 w-full bg-slate-100 rounded-2xl"></div>
              </div>
            </div>
          </div>
        ) : !completed ? (
          <div className="space-y-6">
            {/* Progress Bar & Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-bold">
                <span>ÎNTREBAREA {currentIndex + 1} DIN {questions.length}</span>
                <div className="flex items-center gap-3">
                  <span>Scor curent: {score}</span>
                  <button
                    onClick={handleRestartQuiz}
                    title="Generează un test nou"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Test nou</span>
                  </button>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-[#06141B] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
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
                {currentQ.options.map((option, optIdx) => {
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
                      id={`quiz-option-${option.id}`}
                      data-testid="quiz-option"
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
                            {String.fromCharCode(65 + optIdx)}
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
                      <span>Mecanismul Contractual al Clauzei</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {currentQ.explanation}
                    </p>
                    {currentQ.caveatNote && (
                      <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 flex items-start gap-1.5 font-medium">
                        <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>Ce verifici în poliță: {currentQ.caveatNote}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <button
                      id="quiz-next-button"
                      data-testid="quiz-next"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                    >
                      <span>
                        {currentIndex + 1 < questions.length ? 'Următoarea întrebare' : 'Vezi rezultatul final'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Completed Screen with Viral Content Engine 2.0 Integration */
          (() => {
            const recommendedCard = getRecommendedEditorialCardForQuiz(
              questions.map((q) => q.id),
              score
            );
            const otherEditorialCards = EDITORIAL_CARDS.filter((c) => c.id !== recommendedCard.id);

            return (
              <div className="space-y-8 animate-in fade-in duration-300">
                {/* Result Overview Card */}
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-[#06141B]">
                    <FileCheck2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Rezultat Provocare Contractuală
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#06141B]">
                      Ai obținut {score} din {questions.length} puncte
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                    {score >= Math.round(questions.length * 0.8)
                      ? 'Intuiție excelentă. Înțelegi că asigurările funcționează pe definiții contractuale stricte, nu pe prezumții generale. Ești mult mai bine pregătit decât majoritatea asiguraților.'
                      : score >= Math.round(questions.length * 0.5)
                      ? 'Rezultat promițător. Ai intuit corect multe scenarii, dar te-ai lovit exact de acele 2-3 clauze unde bunul-simț contrazice formularea din contract.'
                      : 'Ai răspuns pe baza logicii de zi cu zi. Din păcate, în asigurări, bunul-simț pierde în fața paginii de excluderi. Ai exact tipul de presupuneri care duc la refuzuri de plată neașteptate.'}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCardForShare(undefined);
                        setIsShareModalOpen(true);
                      }}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#06141B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-slate-300"
                    >
                      <Share2 className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>Distribuie scorul tău</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenChecklist}
                      className="px-5 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Deschide cele 8 verificări</span>
                    </button>
                  </div>
                </div>

                {/* THE DETAIL YOU MIGHT HAVE MISSED — Personalized Editorial Card Showcase */}
                <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-900 shadow-sm text-left space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      The Detail You Might Have Missed
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                      Personalizat din sesiunea curentă
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wide text-slate-700">
                      {EDITORIAL_CONCEPTS[recommendedCard.conceptId].roBadge}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#06141B] leading-tight">
                      {recommendedCard.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {recommendedCard.summary}
                    </p>
                  </div>

                  {/* Concrete lesson / takeaway */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-[11px] font-mono font-bold uppercase text-slate-500 flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-slate-700" />
                      Ce poți verifica concret în contract:
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#06141B] leading-relaxed">
                      {recommendedCard.takeaway}
                    </p>
                    <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>Sursă &amp; bază contractuală: {recommendedCard.sourceNote}</span>
                    </div>
                  </div>

                  {/* Personalize & Share CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-slate-500">
                      Exportă acest card în formatele Story (9:16), Feed (4:5) sau Square (1:1).
                    </p>
                    <button
                      type="button"
                      id="share-recommended-card-button"
                      onClick={() => {
                        setSelectedCardForShare(recommendedCard.id);
                        setIsShareModalOpen(true);
                      }}
                      className="px-6 py-3 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm shrink-0"
                    >
                      <Share2 className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>Personalizează &amp; Distribuie Cardul</span>
                    </button>
                  </div>
                </div>

                {/* Explore Other 7 Editorial Concepts Grid */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[#06141B]">
                        Explorează celelalte concepte editoriale
                      </h3>
                      <p className="text-xs text-slate-500">
                        Povești vizuale educaționale de înaltă rezoluție, concepute pentru valoare de distribuire reală.
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {otherEditorialCards.length} concepte disponibile
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherEditorialCards.map((card) => {
                      const concept = EDITORIAL_CONCEPTS[card.conceptId];
                      return (
                        <div
                          key={card.id}
                          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between space-y-3 shadow-xs"
                        >
                          <div className="space-y-2">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                              {concept.roBadge}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-[#06141B] line-clamp-2 leading-snug">
                              {card.headline}
                            </h4>
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {card.summary}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCardForShare(card.id);
                              setIsShareModalOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                          >
                            <Share2 className="w-3 h-3 text-[#E10600]" />
                            <span>Vezi &amp; Exportă</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Educational Checklist Unlock Banner (Immediate Gratification, Zero Gating) */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-[#06141B] text-sm">
                        <BookOpen className="w-4 h-4 text-[#E10600]" />
                        <span>Checklist Gratuit: 8 Clauze de Verificat în Polița Ta</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Ghidul complet în 8 puncte pentru a verifica riscurile acoperite, excluderile ascunse, franșizele din parcare și termenele contractuale de avizare.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleOpenChecklist}
                      className="shrink-0 px-5 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Deschide Checklistul</span>
                    </button>
                  </div>
                </div>

                {/* Sharing & Referral Growth Section */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 text-left">
                  <div>
                    <h3 className="text-sm font-bold text-[#06141B]">
                      Trimite provocarea cu linkul tău dedicat
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Provoacă un prieten care este sigur că polița lui acoperă absolut orice risc.
                    </p>
                  </div>

                  {/* Referral Link Copy Bar */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      readOnly
                      value={getShareableReferralLink('/quiz')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-700 select-all focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleCopyInviteLink}
                      className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                        linkCopied
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'bg-white border-slate-300 hover:border-slate-500 text-slate-800'
                      }`}
                    >
                      {linkCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copiat!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiază</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Honest Educational Disclaimer */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 font-mono text-[11px] uppercase">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-600" />
                    Declinare educațională de responsabilitate
                  </div>
                  <p>
                    Acest test și materialele vizuale generate au scop strict educativ și orientativ. Răspunsurile reflectă condițiile generale și practica contractuală din România, însă soluționarea efectivă a oricărui dosar depinde de termenii particulari ai poliței tale.
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleRestartQuiz}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 hover:bg-slate-100 text-[#06141B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Începe un test nou</span>
                  </button>

                  <Link
                    href="/contact?topic=oferta"
                    onClick={() =>
                      trackEvent('quote_cta_clicked', {
                        sourceLocation: 'quiz_result',
                      })
                    }
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Cere o a doua opinie pe polița ta</span>
                  </Link>

                  <Link
                    href="/#scenarii"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Explorează cele 121 de cazuri</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })()
        )}
      </div>

      {/* Share Studio Modal for Challenge Result */}
      <ShareChallengeModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        score={score}
        totalQuestions={questions.length}
        questionIds={questions.map((q) => q.id)}
        initialConceptId={selectedCardForShare}
      />

      {/* Free Educational Policy Checklist Modal */}
      <PolicyChecklistModal
        isOpen={isChecklistModalOpen}
        onClose={() => setIsChecklistModalOpen(false)}
      />
    </div>
  );
}
