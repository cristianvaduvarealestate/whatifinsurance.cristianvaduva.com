'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Sparkles,
  Download,
  Share2,
  Copy,
  Check,
  Smartphone,
  Layout,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  Scale,
  Lightbulb,
  Search,
  Car,
  Home,
  CheckCircle2,
  Layers,
  Info,
  Eye,
  Compass,
  FileText,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Send,
} from 'lucide-react';

import {
  ASSET_TYPES,
  BUILDER_SCENARIOS,
  VISUAL_STYLES,
  SCENE_SETTINGS,
  AssetCategory,
  AssetTypeOption,
  ScenarioPreset,
} from '@/data/scenarioBuilder';

import {
  CURATED_GALLERY_SCENARIOS,
  GALLERY_CATEGORIES,
  filterGalleryScenarios,
} from '@/data/curatedGallery';

import {
  EDITORIAL_CARDS,
  EDITORIAL_CONCEPTS,
  EditorialCard,
} from '@/data/editorialCards';

import {
  StoryFormat,
  FORMAT_CONFIGS,
  renderEditorialCardToCanvas,
  renderCustomScenarioToCanvas,
  downloadCanvasAsImage,
  CustomScenarioExportConfig,
} from '@/lib/canvasStoryGenerator';

import { getShareableReferralLink } from '@/lib/referralManager';
import { trackEvent } from '@/lib/analytics';
import {
  buildBuilderShareStory,
  buildCuratedGalleryShareStory,
  buildEditorialShareStory,
  RichShareStory,
} from '@/lib/shareStoryBuilder';

interface RestoredConceptNav {
  id: string;
  conceptId: string;
  cardId: string;
  romanianName: string;
  englishName: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
}

const RESTORED_EDITORIAL_CONCEPTS: RestoredConceptNav[] = [
  {
    id: 'hidden_detail',
    conceptId: 'hidden_detail',
    cardId: 'hd-locuinta-vacanta',
    romanianName: 'Detaliul Ascuns',
    englishName: 'The Hidden Detail',
    tagline: 'Clauza de nelocuire și îngheț',
    icon: Eye,
  },
  {
    id: 'myth_vs_fact',
    conceptId: 'myth_vs_fact',
    cardId: 'mf-pad-vecini',
    romanianName: 'Mit vs Realitate',
    englishName: 'Myth vs Fact',
    tagline: 'PAD vs inundația de la vecini',
    icon: HelpCircle,
  },
  {
    id: 'what_would_you_do',
    conceptId: 'what_would_you_do',
    cardId: 'ww-showroom-ecran',
    romanianName: 'Ce Ai Face?',
    englishName: 'What Would You Do?',
    tagline: 'Dilemă în showroom comercial',
    icon: Compass,
  },
  {
    id: 'fine_print',
    conceptId: 'fine_print',
    cardId: 'fp-sublimita-ceas',
    romanianName: 'Clauza Scrisă Mărunt',
    englishName: 'The Fine Print',
    tagline: 'Sublimite pe ceasuri și bijuterii',
    icon: FileText,
  },
  {
    id: 'two_policies',
    conceptId: 'two_policies',
    cardId: 'tp-conducta-perete',
    romanianName: 'Două Polițe, O Diferență',
    englishName: 'Two Policies, One Difference',
    tagline: 'Spargerea peretelui și detecția',
    icon: Scale,
  },
  {
    id: 'did_you_know',
    conceptId: 'did_you_know',
    cardId: 'dyk-bagaj-retur',
    romanianName: 'Știai Că?',
    englishName: 'Did You Know?',
    tagline: 'Bagajul întârziat la zborul retur',
    icon: Lightbulb,
  },
  {
    id: 'check_policy',
    conceptId: 'check_policy',
    cardId: 'cp-auto-casco',
    romanianName: 'Verifică-ți Polița',
    englishName: 'Check Your Policy',
    tagline: 'Checklist imediat pentru CASCO',
    icon: CheckCircle2,
  },
  {
    id: 'challenge_friend',
    conceptId: 'challenge_friend',
    cardId: 'cf-pasaj-inundat',
    romanianName: 'Surprinde-ți prietenii',
    englishName: 'Challenge a Friend',
    tagline: 'Pasaj inundat și șoc hidraulic',
    icon: Share2,
  },
];

type StudioMode = 'builder' | 'gallery' | 'editorial';

function ShareStudioContent() {
  const searchParams = useSearchParams();
  const paramScenario = searchParams ? (searchParams.get('id') || searchParams.get('scenario')) : null;
  const paramConcept = searchParams ? searchParams.get('concept') : null;
  const paramMode = searchParams ? (searchParams.get('mode') as StudioMode | null) : null;

  // Active top-level Studio tab - 8 Editorial Concepts are the central entry point
  const [studioMode, setStudioMode] = useState<StudioMode>(() => {
    if (paramMode === 'builder') return 'builder';
    if (paramMode === 'gallery' || paramScenario) return 'gallery';
    return 'editorial';
  });

  // ==========================================
  // BUILDER STATE (Studio 3.0)
  // ==========================================
  const [builderCategory, setBuilderCategory] = useState<AssetCategory>('vehicle');
  const availableAssetTypes = ASSET_TYPES.filter((a) => a.category === builderCategory);
  const [selectedAssetTypeId, setSelectedAssetTypeId] = useState<string>(availableAssetTypes[0].id);

  const availableScenarios = BUILDER_SCENARIOS.filter((s) => s.category === builderCategory);
  const [selectedScenarioPresetId, setSelectedScenarioPresetId] = useState<string>(availableScenarios[0].id);

  const [selectedVisualStyleId, setSelectedVisualStyleId] = useState<string>(VISUAL_STYLES[0].id);
  const [selectedSceneSettingId, setSelectedSceneSettingId] = useState<string>(SCENE_SETTINGS[0].id);

  // Active scenario preset
  const activeScenarioPreset =
    BUILDER_SCENARIOS.find((s) => s.id === selectedScenarioPresetId) || availableScenarios[0];
  const activeAssetType =
    ASSET_TYPES.find((a) => a.id === selectedAssetTypeId) || availableAssetTypes[0];

  const [customHeadline, setCustomHeadline] = useState<string>(activeScenarioPreset.headlineOptions[0]);

  // When scenario preset changes, update default headline
  useEffect(() => {
    if (activeScenarioPreset) {
      setCustomHeadline(activeScenarioPreset.headlineOptions[0]);
    }
  }, [activeScenarioPreset]);

  // When category changes, reset asset type and scenario preset
  const handleCategoryChange = (cat: AssetCategory) => {
    setBuilderCategory(cat);
    const newAssets = ASSET_TYPES.filter((a) => a.category === cat);
    const newScenarios = BUILDER_SCENARIOS.filter((s) => s.category === cat);
    if (newAssets.length > 0) setSelectedAssetTypeId(newAssets[0].id);
    if (newScenarios.length > 0) {
      setSelectedScenarioPresetId(newScenarios[0].id);
      setCustomHeadline(newScenarios[0].headlineOptions[0]);
    }
  };

  // ==========================================
  // GALLERY STATE (Curated 36 Scenarios)
  // ==========================================
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState<string>('all');
  const [gallerySearchQuery, setGallerySearchQuery] = useState<string>('');
  const [selectedGalleryScenarioId, setSelectedGalleryScenarioId] = useState<string>(() => {
    if (paramScenario) {
      const match = CURATED_GALLERY_SCENARIOS.find((s) => s.id === paramScenario || s.slug === paramScenario);
      if (match) return match.id;
    }
    return CURATED_GALLERY_SCENARIOS[0].id;
  });

  const filteredGalleryScenarios = filterGalleryScenarios(
    CURATED_GALLERY_SCENARIOS,
    galleryCategoryFilter,
    gallerySearchQuery
  );

  const activeGalleryScenario =
    CURATED_GALLERY_SCENARIOS.find((s) => s.id === selectedGalleryScenarioId) ||
    CURATED_GALLERY_SCENARIOS[0];

  // ==========================================
  // EDITORIAL STATE (8 Restored Concepts)
  // ==========================================
  const [selectedEditorialId, setSelectedEditorialId] = useState<string>(() => {
    if (paramConcept) {
      const found = RESTORED_EDITORIAL_CONCEPTS.find(
        (c) =>
          c.conceptId === paramConcept ||
          c.id === paramConcept ||
          c.cardId === paramConcept ||
          paramConcept === 'surprinde-prietenii' ||
          paramConcept === 'surprinde_prietenii' ||
          paramConcept === 'challenge_friend' ||
          paramConcept === 'challenge'
      );
      if (found) return found.cardId;
    }
    return EDITORIAL_CARDS[0].id;
  });
  const activeEditorialCard =
    EDITORIAL_CARDS.find((c) => c.id === selectedEditorialId) || EDITORIAL_CARDS[0];

  // Navigation handlers
  const activeEditorialIndex = EDITORIAL_CARDS.findIndex((c) => c.id === selectedEditorialId);
  const handlePrevEditorial = () => {
    const newIdx = (activeEditorialIndex - 1 + EDITORIAL_CARDS.length) % EDITORIAL_CARDS.length;
    setSelectedEditorialId(EDITORIAL_CARDS[newIdx].id);
  };
  const handleNextEditorial = () => {
    const newIdx = (activeEditorialIndex + 1) % EDITORIAL_CARDS.length;
    setSelectedEditorialId(EDITORIAL_CARDS[newIdx].id);
  };

  const activeGalleryIndex = filteredGalleryScenarios.findIndex((s) => s.id === selectedGalleryScenarioId);
  const handlePrevGallery = () => {
    if (filteredGalleryScenarios.length === 0) return;
    const currentIdx = activeGalleryIndex >= 0 ? activeGalleryIndex : 0;
    const newIdx = (currentIdx - 1 + filteredGalleryScenarios.length) % filteredGalleryScenarios.length;
    setSelectedGalleryScenarioId(filteredGalleryScenarios[newIdx].id);
  };
  const handleNextGallery = () => {
    if (filteredGalleryScenarios.length === 0) return;
    const currentIdx = activeGalleryIndex >= 0 ? activeGalleryIndex : 0;
    const newIdx = (currentIdx + 1) % filteredGalleryScenarios.length;
    setSelectedGalleryScenarioId(filteredGalleryScenarios[newIdx].id);
  };

  const activePresetIndex = availableScenarios.findIndex((s) => s.id === selectedScenarioPresetId);
  const handlePrevBuilder = () => {
    if (availableScenarios.length === 0) return;
    const currentIdx = activePresetIndex >= 0 ? activePresetIndex : 0;
    const newIdx = (currentIdx - 1 + availableScenarios.length) % availableScenarios.length;
    setSelectedScenarioPresetId(availableScenarios[newIdx].id);
  };
  const handleNextBuilder = () => {
    if (availableScenarios.length === 0) return;
    const currentIdx = activePresetIndex >= 0 ? activePresetIndex : 0;
    const newIdx = (currentIdx + 1) % availableScenarios.length;
    setSelectedScenarioPresetId(availableScenarios[newIdx].id);
  };

  // ==========================================
  // SHARED CANVAS & EXPORT STATE
  // ==========================================
  const [format, setFormat] = useState<StoryFormat>('feed');
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Lock body scroll and handle Escape key for Lightbox
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

  // Compute shareable link
  const currentUrl = (() => {
    if (studioMode === 'builder') {
      return getShareableReferralLink(`/studio?mode=builder&asset=${activeAssetType.id}&scenario=${activeScenarioPreset.id}`);
    } else if (studioMode === 'gallery') {
      return getShareableReferralLink(`/scenarii/${activeGalleryScenario.category}/${activeGalleryScenario.id}`);
    } else {
      return getShareableReferralLink(
        activeEditorialCard.relatedScenarioSlug
          ? `/scenarii/${activeEditorialCard.category}/${activeEditorialCard.relatedScenarioSlug}`
          : `/studio?mode=editorial&concept=${activeEditorialCard.conceptId}`
      );
    }
  })();

  // Compute rich structured share story
  const richStory: RichShareStory = (() => {
    if (studioMode === 'builder') {
      return buildBuilderShareStory(activeScenarioPreset, activeAssetType, customHeadline, currentUrl);
    } else if (studioMode === 'gallery') {
      return buildCuratedGalleryShareStory(activeGalleryScenario, currentUrl);
    } else {
      return buildEditorialShareStory(activeEditorialCard, currentUrl);
    }
  })();

  const fullShareText = richStory.formattedShareText;

  // Canvas Render Loop
  useEffect(() => {
    let mounted = true;
    setIsRendering(true);

    const render = async () => {
      if (!canvasRef.current) return;

      try {
        if (studioMode === 'builder') {
          const visualStyle = VISUAL_STYLES.find((v) => v.id === selectedVisualStyleId);
          const sceneSetting = SCENE_SETTINGS.find((s) => s.id === selectedSceneSettingId);

          const builderConfig: CustomScenarioExportConfig = {
            assetCategory: builderCategory,
            assetName: activeAssetType.name,
            scenarioTitle: activeScenarioPreset.title,
            headline: customHeadline,
            takeaway: activeScenarioPreset.takeaway,
            imagePath: activeScenarioPreset.imagePath,
            visualStyleTitle: visualStyle?.name,
            sceneSettingTitle: sceneSetting?.name,
            sourceNote: activeScenarioPreset.sourceReference,
          };

          await renderCustomScenarioToCanvas(canvasRef.current, builderConfig, format);
        } else if (studioMode === 'gallery') {
          const galleryConfig: CustomScenarioExportConfig = {
            assetCategory: activeGalleryScenario.category === 'vehicule' ? 'vehicle' : 'property',
            assetName: activeGalleryScenario.insuranceConcept,
            scenarioTitle: activeGalleryScenario.title,
            headline: activeGalleryScenario.headline,
            takeaway: activeGalleryScenario.contractTakeaway,
            imagePath: activeGalleryScenario.imagePath,
            visualStyleTitle: 'Editorial',
            sceneSettingTitle: activeGalleryScenario.categoryTitle,
            sourceNote: activeGalleryScenario.sourceReference,
          };

          await renderCustomScenarioToCanvas(canvasRef.current, galleryConfig, format);
        } else {
          await renderEditorialCardToCanvas(canvasRef.current, activeEditorialCard, format);
        }
      } catch (err) {
        console.error('Canvas render error:', err);
      } finally {
        if (mounted) setIsRendering(false);
      }
    };

    render();

    return () => {
      mounted = false;
    };
  }, [
    studioMode,
    format,
    builderCategory,
    selectedAssetTypeId,
    selectedScenarioPresetId,
    selectedVisualStyleId,
    selectedSceneSettingId,
    customHeadline,
    activeAssetType,
    activeScenarioPreset,
    activeGalleryScenario,
    activeEditorialCard,
  ]);

  // Actions
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
    const prefix =
      studioMode === 'builder'
        ? `WHATIF-builder-${activeAssetType.id}-${activeScenarioPreset.id}`
        : studioMode === 'gallery'
        ? `WHATIF-scenario-${activeGalleryScenario.id}`
        : `WHATIF-editorial-${activeEditorialCard.conceptId}`;

    const filename = `${prefix}-${format}.png`;
    downloadCanvasAsImage(canvasRef.current, filename);
    setDownloadSuccess('Imagine salvată în rezoluție înaltă!');
    trackEvent('share_initiated', {
      shareType: 'download_image',
      format,
      context: 'scenario',
    });
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const handleSaveToGallery = async () => {
    if (!canvasRef.current) return;
    setIsSaving(true);
    const prefix =
      studioMode === 'builder'
        ? `WHATIF-builder-${activeAssetType.id}-${activeScenarioPreset.id}`
        : studioMode === 'gallery'
        ? `WHATIF-scenario-${activeGalleryScenario.id}`
        : `WHATIF-editorial-${activeEditorialCard.conceptId}`;

    const filename = `${prefix}-${format}.png`;
    const shareTitle =
      studioMode === 'builder'
        ? `WHAT IF: ${customHeadline}`
        : studioMode === 'gallery'
        ? `WHAT IF: ${activeGalleryScenario.headline}`
        : `WHAT IF: ${activeEditorialCard.headline}`;

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
            title: shareTitle,
            text: fullShareText,
          });
          sharedViaNative = true;
          setDownloadSuccess('Imagine trimisă către galerie / share!');
        } catch (err: any) {
          if (err?.name === 'AbortError') {
            setIsSaving(false);
            return;
          }
        }
      }

      if (!sharedViaNative) {
        downloadCanvasAsImage(canvasRef.current!, filename);
        setDownloadSuccess('Imagine descărcată! Disponibilă în Galeria foto / Descărcări.');
      }

      setIsSaving(false);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 'image/png');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullShareText);
      setCopied(true);
      trackEvent('share_initiated', {
        shareType: 'copy_link',
        context: 'scenario',
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title:
            studioMode === 'builder'
              ? `WHAT IF: ${customHeadline}`
              : studioMode === 'gallery'
              ? `WHAT IF: ${activeGalleryScenario.headline}`
              : `WHAT IF: ${activeEditorialCard.headline}`,
          text: fullShareText,
          url: currentUrl,
        });
        trackEvent('share_initiated', {
          shareType: 'native_sheet',
          format,
          context: 'scenario',
        });
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(fullShareText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const threadsUrl = `https://threads.net/intent/post?text=${encodeURIComponent(fullShareText)}`;
  const xUrl = `https://x.com/intent/post?text=${encodeURIComponent(fullShareText)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  const handleInstagramShare = async () => {
    if (!canvasRef.current) return;

    const prefix =
      studioMode === 'builder'
        ? `WHATIF-builder-${activeAssetType.id}-${activeScenarioPreset.id}`
        : studioMode === 'gallery'
        ? `WHATIF-scenario-${activeGalleryScenario.id}`
        : `WHATIF-editorial-${activeEditorialCard.conceptId}`;
    const filename = `${prefix}-${format}.png`;
    const shareTitle =
      studioMode === 'builder'
        ? `WHAT IF: ${customHeadline}`
        : studioMode === 'gallery'
        ? `WHAT IF: ${activeGalleryScenario.headline}`
        : `WHAT IF: ${activeEditorialCard.headline}`;

    // Try Web Share API with image file if supported (mobile Safari / Chrome)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        const blob = await new Promise<Blob | null>((resolve) =>
          canvasRef.current!.toBlob(resolve, 'image/png')
        );
        if (blob) {
          const file = new File([blob], filename, { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: shareTitle,
              text: fullShareText,
            });
            trackEvent('share_initiated', {
              shareType: 'instagram_native',
              format,
              context: 'scenario',
            });
            return;
          }
        }
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
      }
    }

    // Practical fallback: copy caption + download visual + open Instagram
    try {
      await navigator.clipboard.writeText(fullShareText);
    } catch {}

    downloadCanvasAsImage(canvasRef.current, filename);
    setDownloadSuccess('Imagine descărcată și text copiat! Deschide Instagram pentru a adăuga imaginea și textul.');
    setTimeout(() => setDownloadSuccess(null), 6000);

    window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
    trackEvent('share_initiated', {
      shareType: 'instagram_fallback',
      format,
      context: 'scenario',
    });
  };

  // Active item metadata resolution
  const activeBadge =
    studioMode === 'editorial'
      ? `${EDITORIAL_CONCEPTS[activeEditorialCard.conceptId].romanianBadge} · ${activeEditorialCard.category.toUpperCase()}`
      : studioMode === 'gallery'
      ? activeGalleryScenario.categoryBadge
      : `${activeAssetType.name} · ${activeScenarioPreset.applicablePolicy}`;

  const activeHeadline =
    studioMode === 'editorial'
      ? activeEditorialCard.headline
      : studioMode === 'gallery'
      ? activeGalleryScenario.headline
      : customHeadline;

  const activeDilemma =
    studioMode === 'editorial'
      ? activeEditorialCard.summary || (activeEditorialCard as any).scenarioDilemma || (activeEditorialCard as any).provocation
      : studioMode === 'gallery'
      ? activeGalleryScenario.shortDescription
      : activeScenarioPreset.detailedContext || activeScenarioPreset.name;

  const activeTakeaway =
    studioMode === 'editorial'
      ? activeEditorialCard.takeaway
      : studioMode === 'gallery'
      ? activeGalleryScenario.contractTakeaway
      : activeScenarioPreset.takeaway;

  const activeIndexDisplay =
    studioMode === 'editorial'
      ? `${activeEditorialIndex + 1} din ${EDITORIAL_CARDS.length}`
      : studioMode === 'gallery'
      ? `${(activeGalleryIndex >= 0 ? activeGalleryIndex : 0) + 1} din ${filteredGalleryScenarios.length}`
      : `${(activePresetIndex >= 0 ? activePresetIndex : 0) + 1} din ${availableScenarios.length}`;

  const handlePrevScenario =
    studioMode === 'editorial'
      ? handlePrevEditorial
      : studioMode === 'gallery'
      ? handlePrevGallery
      : handlePrevBuilder;

  const handleNextScenario =
    studioMode === 'editorial'
      ? handleNextEditorial
      : studioMode === 'gallery'
      ? handleNextGallery
      : handleNextBuilder;

  return (
    <div className="w-full bg-[#FAFAFA] text-[#06141B] min-h-screen py-6 sm:py-10 selection:bg-red-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Navigation back & Tag */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Pagina Principală</span>
          </Link>

          <span className="text-xs font-mono text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Trimite prietenilor · Export Vizual HD
          </span>
        </div>

        {/* Page Header - Compact & Direct */}
        <div className="border-b border-slate-200 pb-5 sm:pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-50 border border-red-100 text-[11px] font-mono font-bold text-[#E10600] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Trimite Prietenilor · Simulator Vizual de Risc
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
            Trimite Prietenilor: Dileme Reale de Risc
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1.5 leading-relaxed">
            Alege un scenariu din viața reală, vezi imediat fotografia și dilema contractuală, și distribuie o imagine de impact pe WhatsApp, Instagram sau Facebook.
          </p>
        </div>

        {/* Top-Level Studio Mode Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200">
          <button
            type="button"
            onClick={() => setStudioMode('editorial')}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shrink-0 ${
              studioMode === 'editorial'
                ? 'bg-[#06141B] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Concepte Editoriale (8)</span>
          </button>

          <button
            type="button"
            onClick={() => setStudioMode('gallery')}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shrink-0 ${
              studioMode === 'gallery'
                ? 'bg-[#06141B] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
            <span>Galeria de Scenarii ({CURATED_GALLERY_SCENARIOS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setStudioMode('builder')}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shrink-0 ${
              studioMode === 'builder'
                ? 'bg-[#06141B] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-500" />
            <span>Creator Personalizat</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE LAYOUT: On mobile, Main Featured Card is TOP, actions follow   */}
        {/* On desktop, 2-column grid: Left (Selector & Info), Right (Sticky Preview) */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">

          {/* ======================================================================= */}
          {/* PRIMARY VISUAL SHOWCASE (First on Mobile, Sticky Column on Desktop)      */}
          {/* ======================================================================= */}
          <div className="w-full lg:col-span-5 lg:order-2 space-y-6 lg:sticky lg:top-6">
            
            {/* Main Featured Card with Photo Immediately at the Top */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden text-[#06141B] flex flex-col">
              
              {/* Top Photographic Canvas Preview Box */}
              <div className="bg-slate-950 p-4 sm:p-6 border-b border-slate-800 flex flex-col items-center">
                
                {/* Format Indicator & Dimensions */}
                <div className="flex items-center justify-between w-full pb-3 border-b border-slate-800/80 mb-4 text-xs font-mono">
                  <span className="text-slate-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {FORMAT_CONFIGS[format].label}
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    {FORMAT_CONFIGS[format].width} × {FORMAT_CONFIGS[format].height} px
                  </span>
                </div>

                {/* Scaled Canvas Frame (Click to open Lightbox) */}
                <button
                  type="button"
                  onClick={handleOpenLightbox}
                  className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 flex items-center justify-center bg-black transition-transform group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E10600] hover:scale-[1.01]"
                  style={{
                    width: format === 'story' ? '220px' : '260px',
                    aspectRatio: format === 'story' ? '9/16' : '4/5',
                  }}
                  title="Apasă pentru previzualizare mărită"
                >
                  {isRendering && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain block"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold pointer-events-none rounded-2xl">
                    <Maximize2 className="w-4 h-4" />
                    <span>Previzualizează mare</span>
                  </div>
                </button>

                {/* Format Switcher Pills: FEED & STORY */}
                <div className="flex items-center justify-center gap-2 mt-4 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 w-full max-w-xs">
                  {(['feed', 'story'] as StoryFormat[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFormat(f)}
                      className={`flex-1 py-1.5 px-3 min-h-[38px] rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${
                        format === f
                          ? 'bg-white text-slate-900 shadow-sm font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {f === 'feed' && <Layout className="w-3.5 h-3.5" />}
                      {f === 'story' && <Smartphone className="w-3.5 h-3.5" />}
                      <span>{FORMAT_CONFIGS[f].label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scenario Context Under Photo */}
              <div className="p-5 sm:p-6 space-y-3.5 bg-white">
                
                {/* Badge & Step indicator */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E10600] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full truncate">
                    {activeBadge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 shrink-0">
                    {activeIndexDisplay}
                  </span>
                </div>

                {/* Title & Dilemma */}
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#06141B] leading-snug">
                    {activeHeadline}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {activeDilemma}
                  </p>
                </div>

                {/* Key Takeaway */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-base shrink-0 leading-none">⚖️</span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-slate-900">Diferența contractuală: </span>
                    {activeTakeaway}
                  </p>
                </div>

                {/* Quick 1-Tap Navigation: Previous & Next */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handlePrevScenario}
                    className="py-2 px-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anteriorul</span>
                  </button>

                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    Folosește săgețile sau selectorul
                  </span>

                  <button
                    type="button"
                    onClick={handleNextScenario}
                    className="py-2 px-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Următorul</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons Card */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              
              {/* Feedback alert */}
              {downloadSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-xl border border-emerald-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{downloadSuccess}</span>
                </div>
              )}

              {/* Primary Action: Salvează în galerie */}
              <button
                type="button"
                onClick={handleSaveToGallery}
                disabled={isSaving || isRendering}
                className="w-full py-3.5 px-5 min-h-[48px] rounded-2xl bg-[#E10600] hover:bg-[#c20500] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              >
                <Smartphone className="w-4 h-4" />
                <span>{isSaving ? 'Se generează imaginea...' : 'Salvează în galerie'}</span>
              </button>

              {/* Secondary Download & Native Share Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="py-3 px-3 sm:px-4 min-h-[44px] rounded-2xl bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span className="truncate">Descarcă PNG</span>
                </button>

                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="py-3 px-3 sm:px-4 min-h-[44px] rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-slate-200"
                >
                  <Share2 className="w-4 h-4 text-slate-700 shrink-0" />
                  <span className="truncate">Distribuie Nativ</span>
                </button>
              </div>

              {/* CLEAN SHARE MESSAGE ("Trimite prietenilor") */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#E10600]" />
                    Mesaj pentru prieteni:
                  </span>
                </div>

                {/* Natural Clean Message Preview (No internal tags) */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-2 leading-relaxed">
                  <p className="font-bold text-[#06141B]">„{richStory.headline}”</p>
                  <p className="text-slate-600">{richStory.situation}</p>
                  <p className="text-slate-700 font-medium">⚖️ {richStory.insuranceDistinction}</p>
                  {richStory.practicalTakeaway && (
                    <p className="text-slate-600 text-[11px]">🔍 {richStory.practicalTakeaway}</p>
                  )}
                  <p className="text-[#E10600] font-semibold text-[11px] pt-1 border-t border-slate-200/80">
                    {richStory.sharingPrompt}
                  </p>
                </div>

                {/* Copy Text & Link Button */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-3 px-4 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Mesajul și linkul au fost copiate!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-700" />
                      <span>Copiază textul și linkul</span>
                    </>
                  )}
                </button>

                {/* Direct Social Shortcuts Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-2 pt-2 border-t border-slate-100">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center"
                    title="Trimite pe WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[10px] leading-tight truncate max-w-full">WhatsApp</span>
                  </a>

                  {/* Telegram */}
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center"
                    title="Trimite pe Telegram"
                  >
                    <Send className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="text-[10px] leading-tight truncate max-w-full">Telegram</span>
                  </a>

                  {/* Instagram */}
                  <button
                    type="button"
                    onClick={handleInstagramShare}
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center cursor-pointer"
                    title="Distribuie pe Instagram"
                  >
                    <svg className="w-4 h-4 text-pink-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="text-[10px] leading-tight truncate max-w-full">Instagram</span>
                  </button>

                  {/* Facebook */}
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center"
                    title="Distribuie pe Facebook"
                  >
                    <Share2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-[10px] leading-tight truncate max-w-full">Facebook</span>
                  </a>

                  {/* Threads */}
                  <a
                    href={threadsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setDownloadSuccess('Textul a fost pregătit pentru Threads! Imaginea o poți atașa din descărcări.');
                      setTimeout(() => setDownloadSuccess(null), 5000);
                      trackEvent('share_initiated', { shareType: 'threads', format, context: 'scenario' });
                    }}
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center"
                    title="Distribuie pe Threads"
                  >
                    <svg className="w-4 h-4 text-slate-900 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.186 24C5.438 24 0 18.636 0 12.002 0 5.367 5.438.004 12.186.004c6.643 0 11.797 5.163 11.797 11.786 0 1.157-.14 2.155-.386 2.946l-2.07-.638c.196-.632.298-1.436.298-2.308 0-5.35-4.14-9.617-9.639-9.617-5.58 0-9.98 4.349-9.98 9.829 0 5.48 4.4 9.829 9.98 9.829 3.513 0 6.64-1.748 8.161-4.448l1.794 1.127C20.088 21.84 16.388 24 12.186 24zm4.01-12.023c0-2.31-1.636-4.004-3.957-4.004-2.32 0-4.086 1.764-4.086 4.074 0 2.31 1.766 4.074 4.086 4.074 1.488 0 2.705-.67 3.39-1.777l1.785 1.053c-1.077 1.766-2.99 2.894-5.175 2.894-3.618 0-6.257-2.673-6.257-6.244 0-3.571 2.639-6.244 6.257-6.244 3.528 0 6.128 2.607 6.128 6.174 0 2.62-1.393 4.25-3.327 4.25-1.037 0-1.85-.56-2.062-1.417h-.07c-.49.957-1.572 1.558-2.83 1.558-1.922 0-3.337-1.44-3.337-3.376 0-1.936 1.415-3.376 3.337-3.376 1.258 0 2.34.6 2.83 1.558h.07v-1.417h2.171v5.184c0 .878.502 1.348 1.258 1.348.97 0 1.79-.89 1.79-2.736v-.02zm-3.957 2.05c1.19 0 2.063-.89 2.063-2.074 0-1.184-.873-2.074-2.063-2.074-1.19 0-2.063.89-2.063 2.074 0 1.184.873 2.074 2.063 2.074z"/>
                    </svg>
                    <span className="text-[10px] leading-tight truncate max-w-full">Threads</span>
                  </a>

                  {/* X */}
                  <a
                    href={xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setDownloadSuccess('Textul a fost pregătit pentru X! Imaginea o poți atașa din descărcări.');
                      setTimeout(() => setDownloadSuccess(null), 5000);
                      trackEvent('share_initiated', { shareType: 'x_twitter', format, context: 'scenario' });
                    }}
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center"
                    title="Distribuie pe X"
                  >
                    <svg className="w-4 h-4 text-slate-900 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="text-[10px] leading-tight truncate max-w-full">X</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors text-center"
                    title="Distribuie pe LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-700 shrink-0" />
                    <span className="text-[10px] leading-tight truncate max-w-full">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* INTERACTIVE CONTROLS & COMPACT THUMBNAIL SELECTOR (Left on Desktop)     */}
          {/* ======================================================================= */}
          <div className="w-full lg:col-span-7 lg:order-1 space-y-6">

            {/* ==================================================== */}
            {/* MODE 1: EDITORIAL CONCEPTS (8 FORMATS)               */}
            {/* ==================================================== */}
            {studioMode === 'editorial' && (
              <div className="space-y-6">
                
                {/* Compact Visual Thumbnail Selector */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#E10600]" />
                        Alege alt concept editorial
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Apasă pe oricare card pentru a actualiza instant fotografia și textul:
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full hidden sm:inline">
                      8 Concepte
                    </span>
                  </div>

                  {/* Horizontal Scroll on Mobile, 2-col Grid on Desktop */}
                  <div className="flex sm:grid sm:grid-cols-2 gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none snap-x -mx-2 px-2 sm:mx-0 sm:px-0">
                    {EDITORIAL_CARDS.map((card) => {
                      const isSelected = card.id === selectedEditorialId;
                      const concept = EDITORIAL_CONCEPTS[card.conceptId];
                      return (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => {
                            setSelectedEditorialId(card.id);
                            trackEvent('editorial_concept_selected', { conceptId: card.conceptId });
                          }}
                          className={`p-2.5 rounded-2xl border text-left transition-all flex items-center gap-3 shrink-0 w-[270px] sm:w-auto snap-start ${
                            isSelected
                              ? 'bg-[#06141B] text-white border-[#06141B] ring-2 ring-[#E10600]/30 shadow-md'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          {/* Real Scenario Photo Thumbnail */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 relative bg-slate-900 border border-black/10">
                            <img
                              src={card.heroImage}
                              alt={card.headline}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {isSelected && (
                              <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E10600] flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block truncate ${
                              isSelected ? 'text-[#E10600]' : 'text-slate-500'
                            }`}>
                              {concept.romanianBadge}
                            </span>
                            <h4 className="text-xs font-bold leading-snug line-clamp-2 mt-0.5">
                              {card.headline}
                            </h4>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Legal Provenance Card */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Certitudine Juridică &amp; Proveniență Contractuală
                    </h5>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-900">
                      Sursă documentară: {activeEditorialCard.factualProvenance.documentTitle}
                    </div>
                    <div className="text-slate-600 font-mono text-[11px]">
                      Clauză: {activeEditorialCard.factualProvenance.exactClauseOrArticle}
                    </div>
                    <p className="text-slate-600 italic">
                      „{activeEditorialCard.factualProvenance.verdictRationale}”
                    </p>
                  </div>

                  {activeEditorialCard.relatedScenarioSlug && (
                    <Link
                      href={`/scenarii/${activeEditorialCard.category}/${activeEditorialCard.relatedScenarioSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E10600] hover:underline"
                    >
                      <span>Citește analiza completă a scenariului</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* MODE 2: CURATED SCENARIO GALLERY (36 SCENARIOS)      */}
            {/* ==================================================== */}
            {studioMode === 'gallery' && (
              <div className="space-y-6">
                
                {/* Search & Category Filter */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      Galeria Curată de Scenarii ({CURATED_GALLERY_SCENARIOS.length})
                    </h2>
                    <span className="text-xs text-slate-500 font-mono">
                      {filteredGalleryScenarios.length} găsite
                    </span>
                  </div>

                  {/* Search Input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={gallerySearchQuery}
                      onChange={(e) => setGallerySearchQuery(e.target.value)}
                      placeholder="Caută scenarii (ex: parcare, grindină, baterie, țeavă spartă, bagaje)..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  {/* Category Filter Chips */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {GALLERY_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setGalleryCategoryFilter(cat.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors shrink-0 ${
                          galleryCategoryFilter === cat.id
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {cat.title} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Compact Visual Thumbnail Selector for 36 scenarios */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    Apasă pe un scenariu pentru a-l încărca:
                  </div>

                  {/* Horizontal Scroll on Mobile, 2-col Grid on Desktop */}
                  <div className="flex sm:grid sm:grid-cols-2 gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none snap-x -mx-2 px-2 sm:mx-0 sm:px-0 max-h-[500px] sm:overflow-y-auto">
                    {filteredGalleryScenarios.map((scen) => {
                      const isSelected = scen.id === selectedGalleryScenarioId;
                      return (
                        <button
                          key={scen.id}
                          type="button"
                          onClick={() => setSelectedGalleryScenarioId(scen.id)}
                          className={`p-2.5 rounded-2xl border text-left transition-all flex items-center gap-3 shrink-0 w-[270px] sm:w-auto snap-start ${
                            isSelected
                              ? 'bg-[#06141B] text-white border-[#06141B] ring-2 ring-[#E10600]/30 shadow-md'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          {/* Real Scenario Photo Thumbnail */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 relative bg-slate-900 border border-black/10">
                            <img
                              src={scen.heroImage}
                              alt={scen.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {isSelected && (
                              <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E10600] flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block truncate ${
                              isSelected ? 'text-[#E10600]' : 'text-slate-500'
                            }`}>
                              {scen.categoryTitle}
                            </span>
                            <h4 className="text-xs font-bold leading-snug line-clamp-2 mt-0.5">
                              {scen.title}
                            </h4>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* MODE 3: CUSTOM SCENARIO BUILDER                      */}
            {/* ==================================================== */}
            {studioMode === 'builder' && (
              <div className="space-y-6">
                
                {/* STEP 1: ASSET CATEGORY & TYPE */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">1</span>
                      Alege Bunul Asigurat
                    </div>
                    <span className="text-xs text-slate-500">Vehicul sau Locuință</span>
                  </div>

                  {/* Category Switcher Tabs */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('vehicle')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        builderCategory === 'vehicle'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Car className="w-4 h-4 text-blue-600" />
                      <span>Vehicul</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCategoryChange('property')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        builderCategory === 'property'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Home className="w-4 h-4 text-emerald-600" />
                      <span>Locuință</span>
                    </button>
                  </div>

                  {/* Asset Types Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableAssetTypes.map((asset) => {
                      const isSelected = asset.id === selectedAssetTypeId;
                      return (
                        <button
                          key={asset.id}
                          type="button"
                          onClick={() => setSelectedAssetTypeId(asset.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="text-xs font-bold truncate">{asset.name}</div>
                          <div className={`text-[10px] line-clamp-1 mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {asset.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 2: SCENARIO PRESETS WITH IMAGES */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">2</span>
                      Alege Incidentul
                    </div>
                    <span className="text-xs text-slate-500">{availableScenarios.length} opțiuni</span>
                  </div>

                  <div className="flex sm:grid sm:grid-cols-2 gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none snap-x -mx-2 px-2 sm:mx-0 sm:px-0">
                    {availableScenarios.map((scen) => {
                      const isSelected = scen.id === selectedScenarioPresetId;
                      return (
                        <button
                          key={scen.id}
                          type="button"
                          onClick={() => {
                            setSelectedScenarioPresetId(scen.id);
                            setCustomHeadline(scen.headlineOptions[0]);
                          }}
                          className={`p-2.5 rounded-2xl border text-left transition-all flex items-center gap-3 shrink-0 w-[270px] sm:w-auto snap-start ${
                            isSelected
                              ? 'bg-[#06141B] text-white border-[#06141B] ring-2 ring-[#E10600]/30 shadow-md'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative bg-slate-900 border border-black/10">
                            <img
                              src={scen.heroImage}
                              alt={scen.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {isSelected && (
                              <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E10600] flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block truncate ${
                              isSelected ? 'text-[#E10600]' : 'text-slate-500'
                            }`}>
                              {scen.insuranceProduct}
                            </span>
                            <h4 className="text-xs font-bold leading-snug line-clamp-2 mt-0.5">
                              {scen.title}
                            </h4>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 3: HEADLINE VARIATIONS */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">3</span>
                      Personalizează Titlul Memorabil
                    </div>
                  </div>

                  <div className="space-y-2">
                    {activeScenarioPreset.headlineOptions.map((hl, i) => {
                      const isChosen = customHeadline === hl;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCustomHeadline(hl)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                            isChosen
                              ? 'bg-slate-900 border-slate-900 font-bold text-white'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>„{hl}”</span>
                          {isChosen && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Source Reference Note */}
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800">Bază factuală verificată: </span>
                      {activeScenarioPreset.sourceReference}.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Discreet Advisory Footnote */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">WHAT IF INSURANCE</span>
            <span>· Materiale vizuale de conștientizare și analiză de risc.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Pentru consultanță individuală în asigurări:</span>
            <a
              href="https://insurance.cristianvaduva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06141B] font-bold hover:text-[#E10600] transition-colors inline-flex items-center gap-1"
            >
              <span>insurance.cristianvaduva.com</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIGHTBOX MODAL FOR FULL-RESOLUTION INSPECTION                            */}
        {/* ========================================================================= */}
        {isLightboxOpen && lightboxImageUrl && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl max-h-[90vh] bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Închide previzualizarea"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider font-bold">
                Rezoluție Înaltă · {FORMAT_CONFIGS[format].width} × {FORMAT_CONFIGS[format].height} px
              </div>

              <div className="overflow-auto max-h-[75vh] rounded-2xl border border-slate-800 flex items-center justify-center bg-black">
                <img
                  src={lightboxImageUrl}
                  alt="Rezoluție completă"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleSaveToGallery}
                  className="py-2.5 px-5 rounded-xl bg-[#E10600] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Salvează în galerie</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Descarcă</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function ShareStudioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-mono text-slate-500">Se încarcă Share Studio...</p>
          </div>
        </div>
      }
    >
      <ShareStudioContent />
    </Suspense>
  );
}
