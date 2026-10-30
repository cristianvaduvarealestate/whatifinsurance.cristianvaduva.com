'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
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
  Square,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  ChevronDown,
  Send,
  BookOpen,
  FileCheck2,
  HelpCircle,
  Scale,
  Lightbulb,
  Search,
  Filter,
  Car,
  Home,
  CheckCircle2,
  Palette,
  Camera,
  Layers,
  RefreshCw,
  Info,
  Eye,
  Compass,
  FileText,
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
  CuratedScenario,
} from '@/data/curatedGallery';

import {
  EDITORIAL_CARDS,
  EDITORIAL_CONCEPTS,
  EditorialCard,
} from '@/data/editorialCards';

import {
  StoryFormat,
  FORMAT_CONFIGS,
  renderScenarioToCanvas,
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
  const [selectedGalleryScenarioId, setSelectedGalleryScenarioId] = useState<string>(
    CURATED_GALLERY_SCENARIOS[0].id
  );

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

  // ==========================================
  // SHARED CANVAS & EXPORT STATE
  // ==========================================
  const [format, setFormat] = useState<StoryFormat>('story');
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [customCaption, setCustomCaption] = useState<string>('');
  const [isEditingCaption, setIsEditingCaption] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Compute shareable link
  const currentUrl = (() => {
    if (studioMode === 'builder') {
      return getShareableReferralLink(`/studio?mode=builder&asset=${activeAssetType.id}&scenario=${activeScenarioPreset.id}`);
    } else if (studioMode === 'gallery') {
      return getShareableReferralLink(`/scenarii/${activeGalleryScenario.category}/${activeGalleryScenario.id}`);
    } else {
      return getShareableReferralLink(
        activeEditorialCard.relatedScenarioSlug
          ? `/scenarii/casa/${activeEditorialCard.relatedScenarioSlug}`
          : `/studio?mode=editorial&concept=${activeEditorialCard.conceptId}`
      );
    }
  })();

  // Compute rich structured share story (Two-layer architecture)
  const richStory: RichShareStory = (() => {
    if (studioMode === 'builder') {
      return buildBuilderShareStory(activeScenarioPreset, activeAssetType, customHeadline, currentUrl);
    } else if (studioMode === 'gallery') {
      return buildCuratedGalleryShareStory(activeGalleryScenario, currentUrl);
    } else {
      return buildEditorialShareStory(activeEditorialCard, currentUrl);
    }
  })();

  // Sync active caption whenever context changes
  useEffect(() => {
    setCustomCaption(richStory.formattedShareText);
    setIsEditingCaption(false);
  }, [
    studioMode,
    customHeadline,
    activeAssetType,
    activeScenarioPreset,
    activeGalleryScenario,
    activeEditorialCard,
    currentUrl,
  ]);

  const fullShareText = customCaption || richStory.formattedShareText;

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
          text: customCaption,
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
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(customCaption)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(customCaption)}&url=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="w-full bg-[#FAFAFA] text-[#06141B] min-h-screen py-10 selection:bg-red-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation back & Tag */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Pagina Principală</span>
          </Link>

          <span className="text-xs font-mono text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Studio 3.0 · HD Export Engine
          </span>
        </div>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold text-[#E10600] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Scenario Builder &amp; Share Studio 3.0
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Simulator Vizual de Risc &amp; Studio Editorial
          </h1>
          <p className="text-base text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Personalizează scenarii realiste de daună pentru vehiculul sau locuința ta, explorează galeria curată de dileme contractuale și descarcă materiale vizuale de share cu fotografie de înaltă calitate, fără aglomerație de text.
          </p>
        </div>

        {/* Top-Level Studio Mode Tabs */}
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setStudioMode('editorial')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2.5 ${
              studioMode === 'editorial'
                ? 'bg-[#06141B] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#E10600]" />
            <span>Concepte Editoriale (8 Formate Sociale)</span>
            <span className="text-[10px] bg-red-500/20 text-red-500 font-mono px-2 py-0.5 rounded-full font-bold">
              Central
            </span>
          </button>

          <button
            type="button"
            onClick={() => setStudioMode('builder')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2.5 ${
              studioMode === 'builder'
                ? 'bg-[#06141B] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Creator Scenarii Personalizate</span>
          </button>

          <button
            type="button"
            onClick={() => setStudioMode('gallery')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2.5 ${
              studioMode === 'gallery'
                ? 'bg-[#06141B] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Galeria Curată de Scenarii ({CURATED_GALLERY_SCENARIOS.length})</span>
          </button>
        </div>

        {/* Restored Editorial Formats Navigation (Original Concept Names Bar) */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#06141B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
                Concepte Editoriale Reale:
              </span>
              <span className="text-[10px] font-mono bg-red-50 text-[#E10600] border border-red-200 px-2 py-0.5 rounded-full font-bold">
                8 Formate Originale
              </span>
            </div>
            <span className="text-xs text-slate-500 font-normal">
              Alege oricare format pentru a explora clauza verificată
            </span>
          </div>

          {/* Responsive pill list (horizontal scroll with smooth snap on mobile, wrapped grid on desktop) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
            {RESTORED_EDITORIAL_CONCEPTS.map((concept) => {
              const isActive = studioMode === 'editorial' && selectedEditorialId === concept.cardId;
              const IconComp = concept.icon;
              return (
                <button
                  key={concept.id}
                  type="button"
                  data-concept-id={concept.conceptId}
                  data-card-id={concept.cardId}
                  onClick={() => {
                    setStudioMode('editorial');
                    setSelectedEditorialId(concept.cardId);
                    trackEvent('editorial_concept_selected', { conceptId: concept.id });
                  }}
                  className={`py-2 px-3 sm:px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? 'bg-[#06141B] text-white border-[#06141B] shadow-sm ring-2 ring-red-500/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                  title={`${concept.romanianName} (${concept.englishName}): ${concept.tagline}`}
                >
                  <IconComp className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#E10600]' : 'text-slate-600'}`} />
                  <span className="whitespace-nowrap">{concept.romanianName}</span>
                  <span className={`text-[10px] font-normal hidden md:inline ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    · {concept.englishName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT INTERACTIVE COLUMN (7 COLS) */}
          <div className="lg:col-span-7 space-y-8">

            {/* ==================================================== */}
            {/* MODE 1: VISUAL SCENARIO BUILDER 3.0 */}
            {/* ==================================================== */}
            {studioMode === 'builder' && (
              <div className="space-y-8">
                
                {/* STEP 1: ASSET CATEGORY & TYPE */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">1</span>
                      Alege Bunul Asigurat
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Vehicul sau Locuință</span>
                  </div>

                  {/* Category Switcher Tabs */}
                  <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('vehicle')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        builderCategory === 'vehicle'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Car className="w-4 h-4 text-blue-600" />
                      <span>Vehicul / Auto</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCategoryChange('property')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        builderCategory === 'property'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Home className="w-4 h-4 text-emerald-600" />
                      <span>Locuință / Proprietate</span>
                    </button>
                  </div>

                  {/* Asset Types Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {availableAssetTypes.map((asset) => {
                      const isSelected = asset.id === selectedAssetTypeId;
                      return (
                        <button
                          key={asset.id}
                          type="button"
                          onClick={() => setSelectedAssetTypeId(asset.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="text-xs font-bold">{asset.name}</div>
                          <div className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {asset.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 2: SCENARIO SELECTION */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">2</span>
                      Alege Incidentul Realist
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{availableScenarios.length} opțiuni verificate</span>
                  </div>

                  {/* Scenarios Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                    {availableScenarios.map((scen) => {
                      const isSelected = scen.id === selectedScenarioPresetId;
                      return (
                        <div
                          key={scen.id}
                          onClick={() => {
                            setSelectedScenarioPresetId(scen.id);
                            setCustomHeadline(scen.headlineOptions[0]);
                          }}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {scen.insuranceProduct}
                            </span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                          </div>
                          <div className="text-xs font-bold leading-snug">{scen.title}</div>
                          <p className={`text-[11px] mt-1 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {scen.takeaway}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 3: VISUAL STYLE & HEADLINE */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">3</span>
                      Personalizează Mesajul &amp; Atmosfera
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Stil editorial</span>
                  </div>

                  {/* Headline Variations */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">
                      Alege Titlul Editorial Memorabil:
                    </label>
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
                                ? 'bg-slate-100 border-slate-900 font-bold text-slate-900'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span>„{hl}”</span>
                            {isChosen && <Check className="w-3.5 h-3.5 text-slate-900" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Visual Style & Setting Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-2">
                        Stil Vizual:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {VISUAL_STYLES.map((v) => (
                          <button
                            key={v.id}
                            type="button"
                            onClick={() => setSelectedVisualStyleId(v.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                              selectedVisualStyleId === v.id
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {v.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-2">
                        Cadru &amp; Locație:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SCENE_SETTINGS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setSelectedSceneSettingId(s.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                              selectedSceneSettingId === s.id
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Source Reference Note */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800">Bază factuală verificată: </span>
                      {activeScenarioPreset.sourceReference}.
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Simulator educațional independent · Termenii contractuali ai asigurătorului tău prevalează întotdeauna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* MODE 2: CURATED SCENARIO GALLERY (36 SCENARIOS) */}
            {/* ==================================================== */}
            {studioMode === 'gallery' && (
              <div className="space-y-6">
                
                {/* Search & Category Filter */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={gallerySearchQuery}
                      onChange={(e) => setGallerySearchQuery(e.target.value)}
                      placeholder="Caută după cuvinte cheie (grindină, baterie EV, țeavă spartă, bagaje, furt)..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  {/* Category Filter Chips */}
                  <div className="flex flex-wrap gap-2">
                    {GALLERY_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setGalleryCategoryFilter(cat.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          galleryCategoryFilter === cat.id
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {cat.title} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scenarios Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredGalleryScenarios.map((scen) => {
                    const isSelected = scen.id === selectedGalleryScenarioId;
                    return (
                      <div
                        key={scen.id}
                        onClick={() => setSelectedGalleryScenarioId(scen.id)}
                        className={`p-4 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white border-slate-900 shadow-lg ring-2 ring-slate-900/10'
                            : 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {scen.categoryTitle}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-500">
                              {scen.insuranceConcept}
                            </span>
                          </div>

                          <h3 className="text-sm font-bold text-slate-900 leading-snug">
                            {scen.headline}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                            {scen.shortDescription}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-mono line-clamp-1">
                            {scen.sourceReference}
                          </span>
                          <button
                            type="button"
                            className={`text-xs font-bold px-3 py-1 rounded-xl transition-colors ${
                              isSelected
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            Previzualizează
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* MODE 3: FORMATE EDITORIALE DOCUMENTATE (8 CONCEPTE) */}
            {/* ==================================================== */}
            {studioMode === 'editorial' && (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#E10600]" />
                        8 Concepte Editoriale de Impact Social
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Alege un format pentru a genera instant o grafică socială axată pe o distincție contractuală reală.
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      ✓ Aprobate Editorial
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {EDITORIAL_CARDS.map((card) => {
                      const isSelected = card.id === selectedEditorialId;
                      const concept = EDITORIAL_CONCEPTS[card.conceptId];
                      return (
                        <div
                          key={card.id}
                          onClick={() => setSelectedEditorialId(card.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-[#06141B] text-white border-[#06141B] shadow-md ring-2 ring-red-500/20'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                              }`}>
                                {concept.romanianBadge}
                              </span>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                            </div>
                            <div className="text-xs font-bold leading-snug">{card.headline}</div>
                          </div>
                          <div className={`text-[11px] mt-2 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {card.summary}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Active Concept Contractual Deep Dive Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Certitudine Juridică &amp; Proveniență Contractuală
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      {activeEditorialCard.factualProvenance.editorialStatus}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="font-bold text-slate-900">
                      Sursă de referință: {activeEditorialCard.factualProvenance.documentTitle}
                    </div>
                    <div className="text-slate-600 font-mono text-[11px]">
                      Clauză aplicabilă: {activeEditorialCard.factualProvenance.exactClauseOrArticle}
                    </div>
                    <p className="text-slate-600 italic">
                      „{activeEditorialCard.factualProvenance.verdictRationale}”
                    </p>
                  </div>

                  {activeEditorialCard.relatedScenarioSlug && (
                    <Link
                      href={`/scenarii/${activeEditorialCard.category}/${activeEditorialCard.relatedScenarioSlug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#E10600] hover:underline"
                    >
                      <span>Citește analiza completă a scenariului</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: STICKY LIVE CANVAS PREVIEW & EXPORT ACTIONS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            
            {/* Canvas Preview Container */}
            <div className="bg-slate-950 p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl text-white flex flex-col items-center">
              
              {/* Header inside Preview Box */}
              <div className="flex items-center justify-between w-full pb-4 border-b border-slate-800 mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Previzualizare HD · {FORMAT_CONFIGS[format].label}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {FORMAT_CONFIGS[format].width} × {FORMAT_CONFIGS[format].height} px
                </span>
              </div>

              {/* Scaled Canvas Frame */}
              <div
                className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center bg-black transition-all"
                style={{
                  width: format === 'story' ? '240px' : format === 'feed' ? '280px' : '300px',
                  aspectRatio:
                    format === 'story' ? '9/16' : format === 'feed' ? '4/5' : '1/1',
                }}
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
              </div>

              {/* Format Switcher Pills */}
              <div className="flex items-center justify-center gap-2 mt-6 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 w-full max-w-xs">
                {(['story', 'feed', 'square'] as StoryFormat[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFormat(f)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${
                      format === f
                        ? 'bg-white text-slate-900 shadow-sm font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {f === 'story' && <Smartphone className="w-3.5 h-3.5" />}
                    {f === 'feed' && <Layout className="w-3.5 h-3.5" />}
                    {f === 'square' && <Square className="w-3.5 h-3.5" />}
                    <span>{FORMAT_CONFIGS[f].label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              
              {/* Download Feedback alert */}
              {downloadSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-xl border border-emerald-200 flex items-center gap-2 animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{downloadSuccess}</span>
                </div>
              )}

              {/* Primary Download & Native Share Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="py-3 px-4 rounded-2xl bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Descarcă PNG</span>
                </button>

                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-slate-200"
                >
                  <Share2 className="w-4 h-4 text-slate-700" />
                  <span>Distribuie Nativ</span>
                </button>
              </div>

              {/* Layer 2: Accompanying Rich Share Mini-Story */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#E10600]" />
                    Povestea Însoțitoare (Layer 2):
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsEditingCaption(!isEditingCaption)}
                    className="text-[11px] font-bold text-slate-500 hover:text-[#06141B] underline transition-colors"
                  >
                    {isEditingCaption ? 'Vezi structura' : 'Editează textul'}
                  </button>
                </div>

                {!isEditingCaption ? (
                  /* Formatted Mini-Story Breakdown */
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2.5">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E10600] block mb-0.5">
                        Dilemă &amp; Titlu
                      </span>
                      <p className="font-bold text-[#06141B]">„{richStory.headline}”</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                        Situația concretă
                      </span>
                      <p className="text-slate-600 leading-relaxed">{richStory.situation}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                        Diferența contractuală cheie
                      </span>
                      <p className="text-slate-700 leading-relaxed">{richStory.insuranceDistinction}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                        Ce ai de verificat
                      </span>
                      <p className="text-slate-600 leading-relaxed">{richStory.practicalTakeaway}</p>
                    </div>

                    <div className="pt-1.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-1 text-[11px] text-slate-500">
                      <span className="italic">📜 Sursă: {richStory.sourceQualification}</span>
                      <span className="font-medium text-slate-700">💬 {richStory.sharingPrompt}</span>
                    </div>
                  </div>
                ) : (
                  /* Raw Editable Textarea */
                  <div className="space-y-1.5">
                    <textarea
                      value={customCaption}
                      onChange={(e) => setCustomCaption(e.target.value)}
                      rows={6}
                      className="w-full p-3 rounded-2xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 leading-relaxed"
                    />
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>{customCaption.length} caractere</span>
                      <button
                        type="button"
                        onClick={() => setCustomCaption(richStory.formattedShareText)}
                        className="text-[#E10600] hover:underline font-bold"
                      >
                        Resetează la povestea recomandată
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Copy Full Story & Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full py-3 px-4 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Povestea completă și linkul au fost copiate!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Copiază Povestea Completă &amp; Linkul</span>
                  </>
                )}
              </button>

              {/* Social Shortcuts Grid */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px]">WhatsApp</span>
                </a>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors"
                  title="Telegram"
                >
                  <Send className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px]">Telegram</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors"
                  title="LinkedIn"
                >
                  <ExternalLink className="w-4 h-4 text-blue-700" />
                  <span className="text-[10px]">LinkedIn</span>
                </a>

                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors"
                  title="X (Twitter)"
                >
                  <ExternalLink className="w-4 h-4 text-slate-800" />
                  <span className="text-[10px]">X / Twitter</span>
                </a>
              </div>

              {/* Audit / Consultation Teaser */}
              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact?topic=audit"
                  className="w-full py-3 px-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Solicită o Verificare Gratuită a Clauzelor</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShareStudioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-16 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ShareStudioContent />
    </Suspense>
  );
}
