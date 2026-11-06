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
  Mail,
  Send,
  Compass,
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

  const [userAnswers, setUserAnswers] = useState<Record<string, { selectedOptionId: string; isCorrect: boolean }>>({});

  // Optional email delivery state
  const [optinEmail, setOptinEmail] = useState('');
  const [optinName, setOptinName] = useState('');
  const [optinConsent, setOptinConsent] = useState(false);
  const [optinStatus, setOptinStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [optinMessage, setOptinMessage] = useState('');

  // Synchronous guard against double-clicks or rapid events
  const answeredRef = useRef(false);

  // Modals
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [resultCopied, setResultCopied] = useState(false);

  const getShareMessage = () => {
    if (score >= Math.round(questions.length * 0.75)) {
      return `Am verificat ${questions.length} situații și am identificat ${score} lucruri pe care trebuie să le verific în polița mea. Tu câte ai?`;
    }
    if (score >= Math.round(questions.length * 0.5)) {
      return `Scorul meu: ${score}/${questions.length}. Cât de bine îți cunoști asigurările? Am aflat ce clauze decid de fapt despăgubirea.`;
    }
    return `Am terminat verificarea. Acum știu ce clauze trebuie să citesc mai atent în poliță (${score}/${questions.length} corecte).`;
  };

  const handleCopyResult = async () => {
    const text = `${getShareMessage()}\n\nVerifică-ți și tu polița gratuit: https://whatifinsurance.cristianvaduva.com/quiz`;
    try {
      await navigator.clipboard.writeText(text);
      setResultCopied(true);
      setTimeout(() => setResultCopied(false), 2500);
    } catch {
      // Clipboard fallback
    }
  };

  const handleNativeShare = async () => {
    const text = getShareMessage();
    const url = 'https://whatifinsurance.cristianvaduva.com/quiz';
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Rezultat Verificare Asigurări — WHATIF Insurance',
          text,
          url,
        });
        return;
      } catch {
        // Fallback to whatsapp if cancelled/failed
      }
    }
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`;
    window.open(waUrl, '_blank');
  };

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
    setUserAnswers({});
    setOptinStatus('idle');
    setOptinMessage('');

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
    const isCorrect = Boolean(chosenOption?.isCorrect);
    if (isCorrect) {
      setScore((prev) => Math.min(prev + 1, questions.length));
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: { selectedOptionId: optionId, isCorrect },
    }));
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      answeredRef.current = false;
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setAnswered(false);
    } else {
      setCompleted(true);
      trackEvent('quiz_complete', {
        score,
        questionCount: questions.length,
        percentageScore: Math.round((score / questions.length) * 100),
      });
      trackEvent('challenge_completed', {
        score,
        questionCount: questions.length,
        percentageScore: Math.round((score / questions.length) * 100),
      });
    }
  };

  const handleEmailOptinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!optinEmail || !optinEmail.includes('@')) {
      setOptinStatus('error');
      setOptinMessage('Vă rugăm să introduceți o adresă de email validă.');
      return;
    }
    if (!optinConsent) {
      setOptinStatus('error');
      setOptinMessage('Este necesar acordul privind confidențialitatea pentru a primi rezultatele.');
      return;
    }

    setOptinStatus('submitting');
    setOptinMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: optinName.trim() || 'Participant Quiz',
          email: optinEmail.trim().toLowerCase(),
          phone: '',
          formType: 'quiz_results_optin',
          category: 'quiz',
          scenarioTitle: `Rezultat Quiz: ${score}/${questions.length}`,
          sourceName: 'Quiz Interactiv WHATIF',
          sourcePage: '/quiz',
          consent: optinConsent,
          message: `Scor obținut: ${score} din ${questions.length} puncte. Clauze de verificat: Franșiză CASCO autor necunoscut, Răspundere civilă vecini la inundație, Termen limită notificare daună.`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setOptinStatus('success');
        setOptinMessage('Rezultatul și sinteza celor 3 clauze au fost înregistrate cu succes! Îți vom trimite detaliile.');
        trackEvent('quiz_email_optin', {
          score,
          questionCount: questions.length,
        });
      } else {
        setOptinStatus('error');
        setOptinMessage(data.error || 'A apărut o problemă la înregistrare. Verifică datele și încearcă din nou.');
      }
    } catch {
      setOptinStatus('error');
      setOptinMessage('Conexiunea către server a eșuat. Vă rugăm să reîncercați.');
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
            Testează-ți intuiția pe {totalCount} scenarii ilustrative și descoperă nuanțele care decid acoperirea contractuală.
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
                      className="w-full sm:w-auto px-6 py-3.5 min-h-[44px] rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
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
                      Ai răspuns corect la {score} din {questions.length} întrebări.
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                    {score >= Math.round(questions.length * 0.8)
                      ? 'Ai o înțelegere clară a mecanismelor contractuale și știi că acoperirea depinde de formulările exacte din contract, nu de prezumții generale.'
                      : score >= Math.round(questions.length * 0.5)
                      ? 'Ai intuit corect mai multe situații, însă câteva clauze-cheie (franșize, notificări, răspundere) necesită verificare atentă în documentația poliței tale.'
                      : 'Răspunsurile tale s-au bazat pe logica de zi cu zi. În asigurări, pagina de excluderi și franșize este cea care decide dacă o daună se plătește sau nu.'}
                  </p>

                  {/* Shareable Result Box (Section 12) */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-4 max-w-xl mx-auto shadow-2xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E10600]" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                          WHATIF INSURANCE · Rezultat Distribuibil
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        Scor: {score}/{questions.length}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed">
                      „{getShareMessage()}”
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={handleCopyResult}
                        className="flex-1 min-w-[140px] py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#06141B] text-xs font-bold border border-slate-300 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        {resultCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copiat în clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-600" />
                            <span>Copiază rezultatul</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleNativeShare}
                        className="flex-1 min-w-[140px] py-2.5 px-4 rounded-xl bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
                      >
                        <Share2 className="w-3.5 h-3.5 text-slate-300" />
                        <span>Distribuie (WhatsApp / Social)</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-600 italic border-t border-slate-200/60 pt-2 leading-relaxed">
                      * Notă educațională: Acest scor reflectă familiaritatea cu anumite mecanisme și clauze contractuale uzuale, neconstituind o evaluare oficială a siguranței financiare sau a valorii poliței tale. Fără colectare de date personale.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleRestartQuiz}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#06141B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-slate-300"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
                      <span>Fă un nou test</span>
                    </button>
                    <Link
                      href="/scenarii"
                      className="px-5 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                    >
                      <Compass className="w-3.5 h-3.5 text-slate-300" />
                      <span>Explorează toate cele 121 de scenarii</span>
                    </Link>
                  </div>
                </div>

                {/* 3 CRITICAL CLAUSES TO VERIFY IMMEDIATELY */}
                <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6 text-left">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-mono font-bold uppercase tracking-wider">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Prioritate Educațională
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      3 clauze pe care ar trebui să le verifici imediat în polița ta
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Indiferent de compania la care ești asigurat, aceste 3 prevederi contractuale generează cele mai frecvente neînțelegeri la avizarea unei daune:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* Clause 1 */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                          Auto · CASCO
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Franșiza la autor necunoscut
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          La zgârieturile din parcare fără martor sau vinovat identificat, multe contracte CASCO aplică o franșiză separată (100–500 €) per element sau per eveniment.
                        </p>
                      </div>
                      <Link
                        href="/scenarii/auto/parcare-lovit-autor-necunoscut"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2 border-t border-white/10"
                      >
                        <span>Vezi scenariul complet</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Clause 2 */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                          Locuință · Răspundere
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Daune produse vecinilor (Inundație)
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Polița ta de locuință acoperă pereții tăi, dar dacă apa distruge tavanul și parchetul vecinului de dedesubt, este necesară clauza distinctă de Răspundere Civilă Față de Terți.
                        </p>
                      </div>
                      <Link
                        href="/scenarii/casa/daune-vecini"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2 border-t border-white/10"
                      >
                        <span>Vezi scenariul complet</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Clause 3 */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Procedural · Daune
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Termenul limită de notificare
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Majoritatea contractelor cer notificare în termenul prevăzut în poliță de la producerea sau luarea la cunoștință a daunei, sub sancțiunea pierderii dreptului la despăgubire.
                        </p>
                      </div>
                      <Link
                        href="/verificare-polita"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2 border-t border-white/10"
                      >
                        <span>Verifică în checklist</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Consulting Audit CTA Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">
                      Nu ești sigur ce formulare ai în contract? Solicită un audit independent al clauzelor tale.
                    </p>
                    <Link
                      href="/contact?formType=audit_clauza&category=quiz&scenario=quiz_3_clauze&topic=audit-polita"
                      className="px-6 py-3 rounded-full bg-[#E10600] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm shrink-0"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Solicită audit pentru polița ta</span>
                    </Link>
                  </div>
                </div>

                {/* QUESTION-BY-QUESTION REVIEW (Answers + Explanations) */}
                <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 text-left space-y-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-black text-[#06141B]">
                        Recapitularea completă a răspunsurilor
                      </h3>
                      <p className="text-xs text-slate-500">
                        Vezi unde a funcționat intuiția ta și care sunt mecanismele contractuale exacte pentru fiecare întrebare:
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                      {score} corecte / {questions.length - score} de revizuit
                    </span>
                  </div>

                  <div className="space-y-4">
                    {questions.map((q, idx) => {
                      const userAns = userAnswers[q.id];
                      const chosenOpt = q.options.find((o) => o.id === userAns?.selectedOptionId);
                      const correctOpt = q.options.find((o) => o.isCorrect);
                      const isCorrect = Boolean(userAns?.isCorrect);

                      return (
                        <div
                          key={q.id}
                          className={`p-5 rounded-2xl border transition-all ${
                            isCorrect
                              ? 'bg-emerald-50/40 border-emerald-200'
                              : 'bg-red-50/30 border-red-200'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">
                              {isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <XCircle className="w-5 h-5 text-[#E10600]" />
                              )}
                            </div>
                            <div className="space-y-3 flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                                  Întrebarea {idx + 1}
                                </span>
                                <span
                                  className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
                                    isCorrect
                                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                      : 'bg-red-100 text-red-800 border-red-300'
                                  }`}
                                >
                                  {isCorrect ? 'Răspuns Corect' : 'Răspuns Greșit'}
                                </span>
                              </div>

                              <h4 className="text-sm sm:text-base font-bold text-[#06141B] leading-snug">
                                {q.question}
                              </h4>

                              {/* Chosen vs Correct Option */}
                              <div className="space-y-1.5 text-xs sm:text-sm">
                                <p className="text-slate-700">
                                  <span className="font-semibold text-slate-500 text-xs uppercase tracking-wide block sm:inline sm:mr-1">
                                    Răspunsul tău:
                                  </span>
                                  <span className={isCorrect ? 'text-emerald-900 font-medium' : 'text-red-900 font-medium line-through'}>
                                    {chosenOpt ? chosenOpt.text : 'Neselectat'}
                                  </span>
                                </p>
                                {!isCorrect && correctOpt && (
                                  <p className="text-emerald-950 font-medium">
                                    <span className="font-semibold text-emerald-700 text-xs uppercase tracking-wide block sm:inline sm:mr-1">
                                      Răspunsul corect:
                                    </span>
                                    {correctOpt.text}
                                  </p>
                                )}
                              </div>

                              {/* Explanation */}
                              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5 text-xs text-slate-600">
                                <div className="font-mono font-bold text-[11px] uppercase text-[#06141B] flex items-center gap-1.5">
                                  <Info className="w-3.5 h-3.5 text-slate-500" />
                                  <span>Mecanismul Contractual:</span>
                                </div>
                                <p className="leading-relaxed">{q.explanation}</p>
                                {q.caveatNote && (
                                  <p className="text-slate-700 pt-1.5 border-t border-slate-100 font-medium flex items-start gap-1">
                                    <span className="text-[#E10600] font-bold">Verificare în poliță:</span> {q.caveatNote}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* OPTIONAL EMAIL DELIVERY (Section 5.1 of Master Transformation) */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#E10600]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#06141B]">
                        Trimite-mi rezultatul și cele 3 clauze de verificat
                      </h3>
                      <p className="text-xs text-slate-600">
                        Completarea este 100% opțională și nu condiționează accesul la rezultatele de mai sus. Îți trimitem o sinteză salvabilă pe email.
                      </p>
                    </div>
                  </div>

                  {optinStatus === 'success' ? (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{optinMessage}</span>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailOptinSubmit} className="space-y-3 pt-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                            Adresă de Email <span className="text-[#E10600]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="exemplu@email.ro"
                            value={optinEmail}
                            onChange={(e) => setOptinEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                            Nume (Opțional)
                          </label>
                          <input
                            type="text"
                            placeholder="Prenume sau Nume"
                            value={optinName}
                            onChange={(e) => setOptinName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-[#06141B] focus:border-[#06141B] focus:outline-none bg-white"
                          />
                        </div>
                      </div>

                      {/* GDPR Consent Checkbox */}
                      <div className="flex items-start gap-2.5 pt-1">
                        <input
                          type="checkbox"
                          id="optin-consent"
                          required
                          checked={optinConsent}
                          onChange={(e) => setOptinConsent(e.target.checked)}
                          className="mt-0.5 rounded border-slate-300 text-[#06141B] focus:ring-[#06141B] h-4 w-4"
                        />
                        <label htmlFor="optin-consent" className="text-[11px] text-slate-600 leading-snug cursor-pointer">
                          Sunt de acord cu prelucrarea adresei mele de email pentru transmiterea rezultatului acestui quiz, conform{' '}
                          <Link href="/confidentialitate" className="underline hover:text-[#06141B]">
                            Politicii de Confidențialitate
                          </Link>
                          . Datele nu sunt înstrăinate către terți.
                        </label>
                      </div>

                      {optinStatus === 'error' && (
                        <p className="text-xs text-[#E10600] font-medium">{optinMessage}</p>
                      )}

                      <div className="pt-1">
                        <button
                          type="submit"
                          disabled={optinStatus === 'submitting'}
                          className="px-6 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 disabled:opacity-60"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{optinStatus === 'submitting' ? 'Se trimite...' : 'Trimite rezultatul pe email'}</span>
                        </button>
                      </div>
                    </form>
                  )}
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
