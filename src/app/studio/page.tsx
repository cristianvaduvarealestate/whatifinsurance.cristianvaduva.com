'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SCENARIOS } from '@/data/scenarios';
import {
  StoryFormat,
  FORMAT_CONFIGS,
  renderScenarioToCanvas,
  downloadCanvasAsImage,
} from '@/lib/canvasStoryGenerator';
import {
  Sparkles,
  Download,
  Share2,
  Copy,
  Check,
  Smartphone,
  Layout,
  Square,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  ChevronDown,
  Send,
} from 'lucide-react';
import Link from 'next/link';

export default function ShareStudioPage() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCENARIOS[0].id);
  const [format, setFormat] = useState<StoryFormat>('story');
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const selectedScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  useEffect(() => {
    let mounted = true;
    setIsRendering(true);

    const render = async () => {
      if (canvasRef.current) {
        await renderScenarioToCanvas(canvasRef.current, selectedScenario, format);
        if (mounted) setIsRendering(false);
      }
    };

    render();

    return () => {
      mounted = false;
    };
  }, [selectedScenario, format]);

  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/scenarii/${selectedScenario.categoryId}/${selectedScenario.slug}`
    : `https://insurance.cristianvaduva.com/scenarii/${selectedScenario.categoryId}/${selectedScenario.slug}`;

  const challengeText = `Am găsit o situație neașteptată de risc: „${selectedScenario.title}”. Tu ce crezi: ar fi acoperită de asigurare sau plătești din buzunar? Descoperă explicația: ${currentUrl}`;

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const filename = `WHATIF-${selectedScenario.slug}-${format}.png`;
    downloadCanvasAsImage(canvasRef.current, filename);
    setDownloadSuccess('Imagine salvată în galeria de descărcări!');
    setTimeout(() => setDownloadSuccess(null), 4000);
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
          title: `WHAT IF: ${selectedScenario.title}`,
          text: challengeText,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Dismissed share', err);
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
    <div className="w-full bg-white text-[#06141B] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Pagina Principală</span>
          </Link>

          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Export Grafic · Watermark Oficial Inclus
          </span>
        </div>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-[#E10600] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Surprinde-ți prietenii
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Pune-i pe gânduri: Tu ce crezi?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-3 leading-relaxed">
            Descoperă o situație neașteptată, pune o întrebare și trimite-o mai departe. Vezi cine ghicește răspunsul și descarcă imagini de înaltă rezoluție pentru Story, Feed și Reel.
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Scenario Selector */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                1. Selectează scenariul dorit ({SCENARIOS.length} disponibile)
              </label>

              <div className="relative">
                <select
                  value={selectedScenarioId}
                  onChange={(e) => setSelectedScenarioId(e.target.value)}
                  className="w-full py-3.5 px-4 pr-10 rounded-2xl bg-white border border-slate-300 text-[#06141B] text-sm font-semibold focus:border-[#06141B] focus:outline-none appearance-none cursor-pointer shadow-sm"
                >
                  {SCENARIOS.map((s) => (
                    <option key={s.id} value={s.id}>
                      [{s.categoryName}] {s.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900 block mb-0.5">Întrebarea cheie:</strong>
                „{selectedScenario.mainQuestion}”
              </div>
            </div>

            {/* 2. Format Selector */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                2. Alege raportul de aspect
              </label>

              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setFormat('story')}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                    format === 'story'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Smartphone className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-bold block">Story (9:16)</span>
                  <span className={`text-[10px] font-mono ${format === 'story' ? 'text-slate-300' : 'text-slate-400'}`}>1080 × 1920</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('feed')}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                    format === 'feed'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Layout className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-bold block">Feed (4:5)</span>
                  <span className={`text-[10px] font-mono ${format === 'feed' ? 'text-slate-300' : 'text-slate-400'}`}>1080 × 1350</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('square')}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                    format === 'square'
                      ? 'bg-[#06141B] border-[#06141B] text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Square className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-bold block">Pătrat (1:1)</span>
                  <span className={`text-[10px] font-mono ${format === 'square' ? 'text-slate-300' : 'text-slate-400'}`}>1080 × 1080</span>
                </button>
              </div>
            </div>

            {/* Notification */}
            {downloadSuccess && (
              <div className="p-3.5 rounded-2xl bg-[#06141B] text-white text-xs font-bold flex items-center gap-2 shadow-lg">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{downloadSuccess}</span>
              </div>
            )}

            {/* Download & Share Actions */}
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-4 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Descarcă Imaginea PNG ({FORMAT_CONFIGS[format].label})</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 className="w-4 h-4 text-slate-600" />
                  <span>Distribuie nativ</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Link copiat!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>Copiază link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Social Links: WhatsApp, Telegram, LinkedIn, Facebook */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Telegram</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Canvas Live Preview Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl sticky top-28 text-white">
            <div className="flex items-center justify-between w-full pb-4 border-b border-slate-800 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Previzualizare · {FORMAT_CONFIGS[format].label}
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {FORMAT_CONFIGS[format].width} × {FORMAT_CONFIGS[format].height} px
              </span>
            </div>

            {/* Scaled Preview Frame */}
            <div
              className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center bg-black"
              style={{
                width: format === 'story' ? '260px' : format === 'feed' ? '300px' : '320px',
                aspectRatio:
                  format === 'story' ? '9/16' : format === 'feed' ? '4/5' : '1/1',
              }}
            >
              {isRendering && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
                  <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain block"
              />
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-6 max-w-xs leading-relaxed">
              * La descărcare, imaginea include automat watermark-ul oficial permanent WHAT IF INSURANCE · Cristian Văduva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
