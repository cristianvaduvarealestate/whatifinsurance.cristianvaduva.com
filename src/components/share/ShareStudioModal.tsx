'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Scenario } from '@/types/scenario';
import {
  StoryFormat,
  FORMAT_CONFIGS,
  renderScenarioToCanvas,
  downloadCanvasAsImage,
} from '@/lib/canvasStoryGenerator';
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
  ShieldCheck,
  Sparkles,
  Send,
} from 'lucide-react';

interface ShareStudioModalProps {
  scenario: Scenario;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareStudioModal: React.FC<ShareStudioModalProps> = ({
  scenario,
  isOpen,
  onClose,
}) => {
  const [format, setFormat] = useState<StoryFormat>('story');
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    let mounted = true;
    setIsRendering(true);

    const render = async () => {
      if (canvasRef.current) {
        await renderScenarioToCanvas(canvasRef.current, scenario, format);
        if (mounted) setIsRendering(false);
      }
    };

    render();

    return () => {
      mounted = false;
    };
  }, [isOpen, format, scenario]);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/scenarii/${scenario.categoryId}/${scenario.slug}`
    : `https://insurance.cristianvaduva.com/scenarii/${scenario.categoryId}/${scenario.slug}`;

  const challengeText = `Am găsit o situație neașteptată de risc: „${scenario.title}”. Tu ce crezi: ar fi acoperită de asigurare sau plătești din buzunar? Descoperă explicația: ${currentUrl}`;

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const filename = `WHATIF-${scenario.slug}-${format}.png`;
    downloadCanvasAsImage(canvasRef.current, filename);
    setShareSuccess('Imaginea a fost salvată pe dispozitiv!');
    setTimeout(() => setShareSuccess(null), 4000);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `WHAT IF: ${scenario.title}`,
          text: challengeText,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Share dismissed', err);
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(challengeText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(challengeText)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-8 my-auto overflow-hidden text-[#06141B]">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Surprinde-ți prietenii
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#06141B]">
              Pune-i pe gânduri: Tu ce crezi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Descoperă o situație neașteptată, pune o întrebare și trimite-o mai departe. Vezi cine ghicește răspunsul.
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

        {/* Studio Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          
          {/* Left Column: Format selector & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 order-2 lg:order-1">
            
            {/* Format Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 block">
                1. Alege formatul imaginii
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setFormat('story')}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                    format === 'story'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Smartphone className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold block">Story (9:16)</span>
                  <span className={`text-[10px] font-mono ${format === 'story' ? 'text-slate-300' : 'text-slate-500'}`}>1080 × 1920</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('feed')}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                    format === 'feed'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Layout className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold block">Feed (4:5)</span>
                  <span className={`text-[10px] font-mono ${format === 'feed' ? 'text-slate-300' : 'text-slate-500'}`}>1080 × 1350</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('square')}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                    format === 'square'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Square className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold block">Pătrat (1:1)</span>
                  <span className={`text-[10px] font-mono ${format === 'square' ? 'text-slate-300' : 'text-slate-500'}`}>1080 × 1080</span>
                </button>
              </div>
            </div>

            {/* Scenario Teaser message */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-[#06141B] block">Provocarea care va fi trimisă:</span>
              <p className="italic text-slate-600 line-clamp-2">
                „{scenario.mainQuestion}”
              </p>
            </div>

            {/* Success notification */}
            {shareSuccess && (
              <div className="p-3 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                {shareSuccess}
              </div>
            )}

            {/* Actions: Download & Share */}
            <div className="space-y-3 pt-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                2. Trimite provocarea sau descarcă imaginea
              </label>

              {/* Primary Download Button */}
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-3.5 px-5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold flex items-center justify-center gap-2.5 shadow-sm transition-all text-xs sm:text-sm"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Descarcă Imaginea ({FORMAT_CONFIGS[format].label})</span>
              </button>

              {/* Native & Copy Link */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="py-2.5 px-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-600" />
                  <span>Distribuie nativ</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="py-2.5 px-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link copiat!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>Copiază linkul</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels: WhatsApp, Telegram, LinkedIn, Facebook */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Telegram</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Canvas Live Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 bg-slate-900 rounded-3xl p-4 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 mb-2 font-bold tracking-wider">
              Previzualizare · {FORMAT_CONFIGS[format].label}
            </span>

            <div
              className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center bg-black"
              style={{
                width: format === 'story' ? '210px' : format === 'feed' ? '240px' : '250px',
                aspectRatio:
                  format === 'story' ? '9/16' : format === 'feed' ? '4/5' : '1/1',
              }}
            >
              {isRendering && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain block"
              />
            </div>

            <span className="text-[10px] font-mono text-slate-400 mt-3 text-center">
              Include watermark permanent oficial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
