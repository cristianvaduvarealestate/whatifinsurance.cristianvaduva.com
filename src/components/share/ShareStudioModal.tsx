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
  Layout,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Send,
  Eye,
  Maximize2,
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

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
  const [format, setFormat] = useState<StoryFormat>('feed');
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState<string | null>(null);
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

  useEffect(() => {
    if (!isLightboxOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/scenarii/${scenario.categoryId}/${scenario.slug}`
    : `https://whatifinsurance.cristianvaduva.com/scenarii/${scenario.categoryId}/${scenario.slug}`;

  const challengeText = [
    `„${scenario.title}”`,
    ``,
    `📍 Situație: ${scenario.mainQuestion}`,
    `⚖️ Ce spune contractul: ${scenario.withInsurance?.summary || scenario.shortDescription}`,
    `🔍 Ce verifici: Consultă anexele poliței tale înainte de producerea unei daune similare.`,
    `💬 Tu ai fi știut răspunsul contractual în această situație?`,
    ``,
    `Vezi analiza completă pe: ${currentUrl}`,
  ].join('\n');

  const handleOpenLightbox = () => {
    if (!canvasRef.current) return;
    try {
      const dataUrl = canvasRef.current.toDataURL('image/png');
      setLightboxImageUrl(dataUrl);
      setIsLightboxOpen(true);
    } catch (err) {
      console.error('Error opening lightbox', err);
    }
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const filename = `WHATIF-${scenario.slug}-${format}.png`;
    downloadCanvasAsImage(canvasRef.current, filename);
    setShareSuccess('Imaginea a fost salvată pe dispozitiv!');
    setTimeout(() => setShareSuccess(null), 4000);
    trackEvent('share_studio_export', {
      format,
      scenario_id: scenario.id,
      category: scenario.categoryId,
    });
  };

  const handleSaveToGallery = async () => {
    if (!canvasRef.current) return;
    setIsSaving(true);
    const filename = `WHATIF-${scenario.slug}-${format}.png`;

    trackEvent('share_studio_export', {
      format,
      scenario_id: scenario.id,
      category: scenario.categoryId,
    });

    canvasRef.current.toBlob(async (blob) => {
      if (!blob) {
        setIsSaving(false);
        return;
      }
      const file = new File([blob], filename, { type: 'image/png' });
      let sharedViaNative = false;

      if (
        typeof navigator !== 'undefined' &&
        navigator.canShare &&
        navigator.canShare({ files: [file] }) &&
        navigator.share
      ) {
        try {
          await navigator.share({
            files: [file],
            title: `WHAT IF: ${scenario.title}`,
            text: challengeText,
          });
          sharedViaNative = true;
          setShareSuccess('Imagine trimisă către galerie / share!');
        } catch (err: any) {
          if (err?.name === 'AbortError') {
            setIsSaving(false);
            return;
          }
        }
      }

      if (!sharedViaNative) {
        downloadCanvasAsImage(canvasRef.current!, filename);
        setShareSuccess('Imagine descărcată! Disponibilă în Galeria foto / Descărcări.');
      }

      setIsSaving(false);
      setTimeout(() => setShareSuccess(null), 4000);
    }, 'image/png');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${challengeText}\n\n${currentUrl}`);
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
              Trimite prietenilor · Export & Distribuire
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#06141B]">
              Trimite dilema: Tu ce crezi că se întâmplă?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Un scenariu ilustrativ, o întrebare precisă. Trimite-l cuiva care este convins că lui nu i se poate întâmpla.
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
            
            {/* Format Selector: FEED and STORY ONLY */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 block">
                1. Alege formatul imaginii
              </label>
              <div className="grid grid-cols-2 gap-2.5">
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
                  <span className={`text-[10px] font-mono ${format === 'feed' ? 'text-slate-300' : 'text-slate-500'}`}>1080 × 1350 px</span>
                </button>

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
                  <span className={`text-[10px] font-mono ${format === 'story' ? 'text-slate-300' : 'text-slate-500'}`}>1080 × 1920 px</span>
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

            {/* Actions: Save to Gallery & Download */}
            <div className="space-y-3 pt-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                2. Trimite provocarea sau salvează imaginea
              </label>

              {/* Primary Action: Salvează în galerie */}
              <button
                type="button"
                onClick={handleSaveToGallery}
                disabled={isSaving || isRendering}
                className="w-full py-3.5 px-5 rounded-full bg-[#E10600] hover:bg-[#c20500] text-white font-bold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm disabled:opacity-50"
              >
                <Smartphone className="w-4 h-4" />
                <span>{isSaving ? 'Se generează...' : 'Salvează în galerie'}</span>
              </button>

              {/* Secondary Download Button */}
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-3 px-5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold flex items-center justify-center gap-2.5 shadow-sm transition-all text-xs sm:text-sm"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Descarcă PNG ({FORMAT_CONFIGS[format].label})</span>
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
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 bg-slate-950 rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between w-full mb-3 px-1">
              <span className="text-[11px] font-mono uppercase text-slate-300 font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
                {FORMAT_CONFIGS[format].label}
              </span>
              <button
                type="button"
                onClick={handleOpenLightbox}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 py-1 px-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Previzualizare HD</span>
              </button>
            </div>

            {/* Clickable responsive preview container */}
            <button
              type="button"
              onClick={handleOpenLightbox}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 flex items-center justify-center bg-black group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E10600] transition-all hover:scale-[1.02] hover:border-slate-500"
              style={{
                width: format === 'story' ? '250px' : '280px',
                maxWidth: '100%',
                aspectRatio: format === 'story' ? '9/16' : '4/5',
              }}
              title="Apasă pentru previzualizare HD la rezoluție maximă"
              aria-label="Apasă pentru previzualizare HD la rezoluție maximă"
            >
              {isRendering && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 gap-2">
                  <div className="w-7 h-7 border-2 border-[#E10600] border-t-transparent rounded-full animate-spin" />
                  <span className="text-[11px] text-slate-300 font-medium">Se generează...</span>
                </div>
              )}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain block"
              />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white text-xs font-bold pointer-events-none p-3 text-center">
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span>Apasă pentru previzualizare HD</span>
                <span className="text-[10px] text-slate-300 font-normal">Vezi imaginea la dimensiune reală</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && lightboxImageUrl && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Controls Bar */}
          <div
            className="w-full max-w-4xl flex items-center justify-between pb-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Previzualizare HD · {FORMAT_CONFIGS[format].label}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                ({FORMAT_CONFIGS[format].width} × {FORMAT_CONFIGS[format].height} px)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Închide previzualizarea"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Image Preview */}
          <div
            className="relative flex items-center justify-center flex-1 max-h-[82vh] max-w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImageUrl}
              alt={scenario.title}
              className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>

          {/* Lightbox Footer Actions */}
          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-3 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleSaveToGallery}
              className="py-3 px-6 rounded-full bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Smartphone className="w-4 h-4" />
              <span>Salvează în galerie</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="py-3 px-5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/20"
            >
              <Download className="w-4 h-4" />
              <span>Descarcă PNG</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
