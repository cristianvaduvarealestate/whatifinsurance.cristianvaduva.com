'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  StoryFormat,
  FORMAT_CONFIGS,
  renderChallengeResultToCanvas,
  renderEditorialCardToCanvas,
  downloadCanvasAsImage,
  ChallengeResultData,
} from '@/lib/canvasStoryGenerator';
import {
  EDITORIAL_CARDS,
  EDITORIAL_CONCEPTS,
  EditorialCard,
  EditorialConceptId,
  getRecommendedEditorialCardForQuiz,
} from '@/data/editorialCards';
import { getShareableReferralLink } from '@/lib/referralManager';
import { trackEvent } from '@/lib/analytics';
import {
  Download,
  Share2,
  Copy,
  Check,
  X,
  Smartphone,
  Square,
  Layout,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Send,
  Eye,
  HelpCircle,
  Compass,
  FileText,
  Scale,
  Lightbulb,
  CheckSquare,
} from 'lucide-react';

interface ShareChallengeModalProps {
  score: number;
  totalQuestions: number;
  isOpen: boolean;
  onClose: () => void;
  questionIds?: string[];
  initialConceptId?: string;
}

export const ShareChallengeModal: React.FC<ShareChallengeModalProps> = ({
  score,
  totalQuestions,
  isOpen,
  onClose,
  questionIds = [],
  initialConceptId,
}) => {
  // Mode: 'quiz_score' or an editorial card ID
  const recommendedCard = getRecommendedEditorialCardForQuiz(questionIds, score);
  const [selectedCardId, setSelectedCardId] = useState<string>(initialConceptId || recommendedCard.id);
  const [activeTab, setActiveTab] = useState<'editorial' | 'quiz_score'>('editorial');
  const [format, setFormat] = useState<StoryFormat>('story');
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const selectedCard = EDITORIAL_CARDS.find((c) => c.id === selectedCardId) || recommendedCard;

  const resultData: ChallengeResultData = {
    score,
    totalQuestions,
  };

  useEffect(() => {
    if (isOpen) {
      if (initialConceptId) {
        setSelectedCardId(initialConceptId);
        setActiveTab('editorial');
      } else {
        setSelectedCardId(recommendedCard.id);
      }
    }
  }, [isOpen, initialConceptId, recommendedCard.id]);

  useEffect(() => {
    if (!isOpen) return;

    let mounted = true;
    setIsRendering(true);

    const render = async () => {
      if (canvasRef.current) {
        if (activeTab === 'quiz_score') {
          await renderChallengeResultToCanvas(canvasRef.current, resultData, format);
        } else {
          await renderEditorialCardToCanvas(canvasRef.current, selectedCard, format);
        }
        if (mounted) setIsRendering(false);
      }
    };

    render();

    return () => {
      mounted = false;
    };
  }, [isOpen, format, score, totalQuestions, activeTab, selectedCardId, selectedCard]);

  if (!isOpen) return null;

  const shareableUrl = getShareableReferralLink(
    activeTab === 'quiz_score' ? '/quiz' : selectedCard.relatedScenarioSlug ? `/scenarii/casa/${selectedCard.relatedScenarioSlug}` : '/quiz'
  );

  const shareText =
    activeTab === 'quiz_score'
      ? `Am obținut ${score} din ${totalQuestions} puncte la testul de intuiție WHAT IF INSURANCE. Tu ai fi știut ce acoperă de fapt o poliță? Testează-te aici: ${shareableUrl}`
      : `Am dat peste clauza asta pe care nu o verifică aproape nimeni: „${selectedCard.headline}”. Tu ai fi acoperit? Verifică aici: ${shareableUrl}`;

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const filename =
      activeTab === 'quiz_score'
        ? `WHATIF-rezultat-provocare-${score}-${totalQuestions}-${format}.png`
        : `WHATIF-editorial-${selectedCard.conceptId}-${format}.png`;

    downloadCanvasAsImage(canvasRef.current, filename);
    setShareSuccess('Imaginea a fost descărcată pe dispozitiv!');
    setTimeout(() => setShareSuccess(null), 4000);

    trackEvent('share_initiated', {
      shareType: 'download_image',
      format,
      context: activeTab === 'quiz_score' ? 'challenge_result' : 'scenario',
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);

      trackEvent('invite_link_copied', {
        context: 'challenge_result',
      });
    } catch {
      setCopied(true);
    }
  };

  const handleNativeShare = async () => {
    trackEvent('share_initiated', {
      shareType: 'native_sheet',
      format,
      context: activeTab === 'quiz_score' ? 'challenge_result' : 'scenario',
    });

    if (navigator.share) {
      try {
        await navigator.share({
          title: activeTab === 'quiz_score' ? 'WHAT IF INSURANCE — Provocare Educațională' : `WHAT IF: ${selectedCard.headline}`,
          text: shareText,
          url: shareableUrl,
        });
        setShareSuccess('Cardul a fost distribuit cu succes!');
        setTimeout(() => setShareSuccess(null), 4000);
      } catch (err: any) {
        if (err?.name === 'AbortError') {
          trackEvent('share_cancelled', {
            shareType: 'native_sheet',
            reason: 'user_aborted',
          });
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareableUrl)}&text=${encodeURIComponent(shareText)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareableUrl)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-8 my-auto overflow-hidden text-[#06141B] max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#06141B] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
              Viral Content Engine · Povești Vizuale Premium
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#06141B]">
              Distribuie Valoare Reală, Nu Doar un Scor
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Alege un concept editorial puternic: un detaliu ascuns, un mit demontat sau o comparație contractuală. Oferă prietenilor tăi o informație utilă pe care o pot verifica imediat.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-[#06141B] hover:bg-slate-100 transition-colors"
            aria-label="Închide fereastra"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Concept Selector Tabs (Horizontal Scrollable) */}
        <div className="py-3 border-b border-slate-100 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-1">
            <button
              type="button"
              onClick={() => setActiveTab('quiz_score')}
              className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'quiz_score'
                  ? 'bg-[#06141B] text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Scor Quiz ({score}/{totalQuestions})</span>
            </button>

            <span className="text-slate-300">|</span>

            {EDITORIAL_CARDS.map((card) => {
              const meta = EDITORIAL_CONCEPTS[card.conceptId];
              const isSelected = activeTab === 'editorial' && selectedCardId === card.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => {
                    setActiveTab('editorial');
                    setSelectedCardId(card.id);
                  }}
                  className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#06141B] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#E10600]' : 'bg-slate-400'}`} />
                  <span>{meta.englishTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Body: Preview & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 items-start overflow-y-auto flex-1 pr-1">
          {/* Left Column: Format Switcher & Live Canvas Preview */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Format Selector */}
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl mb-3 border border-slate-200 w-full max-w-sm justify-between">
              <button
                type="button"
                onClick={() => setFormat('story')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                  format === 'story'
                    ? 'bg-white text-[#06141B] shadow-sm'
                    : 'text-slate-600 hover:text-[#06141B]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Story (9:16)</span>
              </button>
              <button
                type="button"
                onClick={() => setFormat('feed')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                  format === 'feed'
                    ? 'bg-white text-[#06141B] shadow-sm'
                    : 'text-slate-600 hover:text-[#06141B]'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Feed (4:5)</span>
              </button>
              <button
                type="button"
                onClick={() => setFormat('square')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                  format === 'square'
                    ? 'bg-white text-[#06141B] shadow-sm'
                    : 'text-slate-600 hover:text-[#06141B]'
                }`}
              >
                <Square className="w-3.5 h-3.5" />
                <span>Pătrat (1:1)</span>
              </button>
            </div>

            {/* Canvas Preview Container */}
            <div className="relative w-full flex items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-3xl min-h-[360px] max-h-[480px] overflow-hidden">
              {isRendering && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-[#06141B] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <canvas
                ref={canvasRef}
                className="max-h-[440px] max-w-full w-auto h-auto rounded-2xl shadow-xl border border-slate-200 bg-white object-contain"
              />
            </div>
          </div>

          {/* Right Column: Concept Details & Distribution */}
          <div className="lg:col-span-5 space-y-4">
            {shareSuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{shareSuccess}</span>
              </div>
            )}

            {/* Selected Card Info Box */}
            {activeTab === 'editorial' && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                    {EDITORIAL_CONCEPTS[selectedCard.conceptId].romanianBadge}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700">
                    Factual · Verificat
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#06141B] leading-snug">
                  {selectedCard.headline}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedCard.summary}
                </p>
                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
                  Ce poate verifica cititorul: {selectedCard.takeaway}
                </div>
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-3 px-5 rounded-2xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2.5"
              >
                <Download className="w-4 h-4" />
                <span>Descarcă Imaginea ({FORMAT_CONFIGS[format].label.split(' ')[0]})</span>
              </button>

              <button
                type="button"
                onClick={handleNativeShare}
                className="w-full py-2.5 px-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-[#06141B] font-bold text-sm transition-all flex items-center justify-center gap-2.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Distribuie prin Aplicațiile Tale</span>
              </button>
            </div>

            {/* Referral Link Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>LINK DIRECT DE DISTRIBUIRE</span>
                <span className="text-emerald-700 font-sans font-semibold text-[11px]">
                  Fără date personale
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareableUrl}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-700 select-all focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  title="Copiază linkul"
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all shrink-0 flex items-center justify-center ${
                    copied
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'bg-white border-slate-300 hover:border-slate-500 text-slate-800'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-1 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Sau trimite direct pe chat:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('share_initiated', {
                      shareType: 'whatsapp',
                      context: activeTab === 'quiz_score' ? 'challenge_result' : 'scenario',
                    })
                  }
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('share_initiated', {
                      shareType: 'telegram',
                      context: activeTab === 'quiz_score' ? 'challenge_result' : 'scenario',
                    })
                  }
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-sky-500" />
                  <span>Telegram</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('share_initiated', {
                      shareType: 'linkedin',
                      context: activeTab === 'quiz_score' ? 'challenge_result' : 'scenario',
                    })
                  }
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
