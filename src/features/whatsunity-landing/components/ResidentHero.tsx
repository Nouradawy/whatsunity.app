import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import {
  Smartphone,
  Users,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Building2,
  ExternalLink,
} from "lucide-react";
import type { Locale } from "../data/whatsunityContent";
import { residentLandingData } from "../data/residentLandingContent";

interface Props {
  locale: Locale;
  onOpenBringModal: () => void;
}

export function ResidentHero({ locale, onOpenBringModal }: Props) {
  const isRtl = locale === "ar";
  const content = residentLandingData[locale].hero;
  const scenes = content.cinematic.scenes;

  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const runwayRef = useRef<HTMLDivElement>(null);
  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const targetTimeRef = useRef<number[]>([0, 0, 0, 0]);

  const currentScene = scenes[activeSceneIndex] || scenes[0];

  const SLIDE_1_END = 0.4;
  const SLIDE_2_END = 0.6;
  const SLIDE_3_END = 0.8;

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    setPrefersReducedMotion(motionMql.matches);
    motionMql.addEventListener("change", updateMotion);
    return () => motionMql.removeEventListener("change", updateMotion);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextIdx = 0;
    if (latest < SLIDE_1_END) {
      nextIdx = 0;
    } else if (latest < SLIDE_2_END) {
      nextIdx = 1;
    } else if (latest < SLIDE_3_END) {
      nextIdx = 2;
    } else {
      nextIdx = 3;
    }
    setActiveSceneIndex(nextIdx);

    const progress0 = Math.min(Math.max(latest / SLIDE_1_END, 0), 1);
    const v0Mob = mobileVideoRefs.current[0];
    const v0Desk = desktopVideoRefs.current[0];
    const dur =
      v0Mob && !isNaN(v0Mob.duration) && v0Mob.duration > 0
        ? v0Mob.duration
        : v0Desk && !isNaN(v0Desk.duration) && v0Desk.duration > 0
          ? v0Desk.duration
          : 0;

    if (dur > 0) {
      targetTimeRef.current[0] = progress0 * (dur - 0.05);
    }
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;
    const tick = () => {
      const isMobileViewport = typeof window !== "undefined" && window.innerWidth < 1024;
      const activeVideo0 = isMobileViewport ? mobileVideoRefs.current[0] : desktopVideoRefs.current[0];
      const inactiveVideo0 = isMobileViewport ? desktopVideoRefs.current[0] : mobileVideoRefs.current[0];

      if (inactiveVideo0 && !inactiveVideo0.paused) {
        inactiveVideo0.pause();
      }

      if (activeVideo0 && activeVideo0.duration && !isNaN(activeVideo0.duration)) {
        if (!activeVideo0.paused) {
          activeVideo0.pause();
        }
        const target = targetTimeRef.current[0] ?? 0;
        const current = activeVideo0.currentTime;
        const diff = target - current;

        if (!activeVideo0.seeking && Math.abs(diff) > 0.008) {
          const step = diff * 0.65;
          const nextTime = Math.abs(diff) < 0.025 ? target : current + step;
          const clamped = Math.max(0, Math.min(activeVideo0.duration - 0.01, nextTime));
          activeVideo0.currentTime = clamped;
        }
      }

      [1, 2, 3].forEach((idx) => {
        const activeVideo = isMobileViewport ? mobileVideoRefs.current[idx] : desktopVideoRefs.current[idx];
        const inactiveVideo = isMobileViewport ? desktopVideoRefs.current[idx] : mobileVideoRefs.current[idx];

        if (inactiveVideo && !inactiveVideo.paused) {
          inactiveVideo.pause();
        }
        if (activeVideo) {
          if (idx === activeSceneIndex) {
            if (activeVideo.paused) {
              activeVideo.play().catch(() => {});
            }
          } else {
            if (!activeVideo.paused) {
              activeVideo.pause();
            }
          }
        }
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [activeSceneIndex, prefersReducedMotion]);

  const getSceneIcon = (id: string, className = "h-4 w-4") => {
    switch (id) {
      case "scene-overview":
        return <Smartphone className={className} />;
      case "scene-community":
        return <Users className={className} />;
      case "scene-maintenance":
        return <Wrench className={className} />;
      case "scene-security":
        return <ShieldCheck className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const scrollToProblem = () => {
    const el = document.getElementById("the-problem");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="resident-overview" className="relative w-full bg-[#03060a] text-white">
      {/* Top Value Statement Before Video Runway */}
      <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:px-8 text-center">
        {/* Main H1 — Crafted with weight and scale, NO gradient text and NO kicker */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] ${
            isRtl ? "wu-font-ar-display" : "wu-font-en-display"
          }`}
        >
          {content.titleLine1}{" "}
          <span className="text-emerald-400 font-extrabold">{content.titleHighlight}</span>
        </h1>

        <p
          className={`mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed ${
            isRtl ? "wu-font-ar-body" : "wu-font-en-body"
          }`}
        >
          {content.subtitle}
        </p>

        {/* Value & Pricing Hierarchy: One home. One subscription. */}
        <div className="mt-5 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{content.pricingMessage}</span>
          </div>
        </div>

        {/* Action Controls: 3 Clear CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onOpenBringModal}
            className={`flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-extrabold text-[#04140c] shadow-lg shadow-emerald-500/25 transition-all wu-pressable ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>{content.ctaPrimary}</span>
          </button>

          <button
            type="button"
            onClick={scrollToProblem}
            className={`flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-colors wu-pressable ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            <span>{content.ctaSecondary}</span>
            <ChevronDown className="h-4 w-4 text-emerald-400" />
          </button>

          <a
            href="https://app.whatsunity.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-xl border border-slate-700 bg-transparent hover:border-slate-500 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors wu-pressable ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            <span>{content.ctaTertiary}</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Cinematic Pinned Runway (300vh for scroll-driven progression) */}
      <div ref={runwayRef} className="relative h-[280vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
          {/* Background Video Layer */}
          <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-[#03060a]">
            {scenes.map((sc, idx) => {
              const isActive = idx === activeSceneIndex;
              const isScrollDriven = idx === 0;

              return (
                <div
                  key={sc.id}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
                  }`}
                >
                  {isScrollDriven ? (
                    <>
                      <video
                        ref={(el) => {
                          mobileVideoRefs.current[0] = el;
                        }}
                        src={sc.videoMobileSrc}
                        poster={sc.posterMobileSrc}
                        muted
                        playsInline
                        preload="auto"
                        onLoadedMetadata={(e) => {
                          const video = e.currentTarget;
                          video.pause();
                          const currentProgress = scrollYProgress.get();
                          const p = Math.min(Math.max(currentProgress / SLIDE_1_END, 0), 1);
                          if (video.duration && !isNaN(video.duration)) {
                            targetTimeRef.current[0] = p * (video.duration - 0.05);
                            try {
                              video.currentTime = targetTimeRef.current[0];
                            } catch {}
                          }
                        }}
                        className="h-full w-full object-cover object-center lg:hidden"
                      />
                      <video
                        ref={(el) => {
                          desktopVideoRefs.current[0] = el;
                        }}
                        src={sc.videoSrc}
                        poster={sc.posterSrc}
                        muted
                        playsInline
                        preload="auto"
                        onLoadedMetadata={(e) => {
                          const video = e.currentTarget;
                          video.pause();
                          const currentProgress = scrollYProgress.get();
                          const p = Math.min(Math.max(currentProgress / SLIDE_1_END, 0), 1);
                          if (video.duration && !isNaN(video.duration)) {
                            targetTimeRef.current[0] = p * (video.duration - 0.05);
                            try {
                              video.currentTime = targetTimeRef.current[0];
                            } catch {}
                          }
                        }}
                        className="h-full w-full object-cover object-center hidden lg:block"
                      />
                    </>
                  ) : (
                    <>
                      <video
                        ref={(el) => {
                          mobileVideoRefs.current[idx] = el;
                        }}
                        src={sc.videoMobileSrc}
                        poster={sc.posterMobileSrc}
                        muted
                        playsInline
                        loop
                        autoPlay
                        preload="auto"
                        className="h-full w-full object-cover object-center lg:hidden"
                      />
                      <video
                        ref={(el) => {
                          desktopVideoRefs.current[idx] = el;
                        }}
                        src={sc.videoSrc}
                        poster={sc.posterSrc}
                        muted
                        playsInline
                        loop
                        autoPlay
                        preload="auto"
                        className="h-full w-full object-cover object-center hidden lg:block"
                      />
                    </>
                  )}
                </div>
              );
            })}

            {/* Depth Overlay: Vignette for high contrast text readability */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#03060a] via-transparent to-[#03060a]/70 lg:bg-gradient-to-r lg:from-[#03060a]/90 lg:via-[#03060a]/40 lg:to-transparent" />
          </div>

          {/* Floating Scene Information Card on Desktop — Pinned to the physical LEFT in all languages */}
          <div
            dir="ltr"
            className="relative z-20 mx-auto max-w-7xl w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-start pointer-events-none"
          >
            <div
              dir={isRtl ? "rtl" : "ltr"}
              className={`w-full max-w-xl pointer-events-auto mt-24 lg:mt-0 ${isRtl ? "text-right" : "text-left"}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/15 bg-[#070c14]/85 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-lg text-emerald-400"
                      style={{ backgroundColor: `${currentScene.accentColor}25` }}
                    >
                      {getSceneIcon(currentScene.id, "h-3.5 w-3.5")}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {currentScene.tag}
                    </span>
                  </div>

                  <h2
                    className={`text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug ${
                      isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                    }`}
                  >
                    {currentScene.title}{" "}
                    <span className="text-emerald-400 font-extrabold">{currentScene.titleHighlight}</span>
                  </h2>

                  <p
                    className={`mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed ${
                      isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                    }`}
                  >
                    {currentScene.subtitle}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-4 space-y-2">
                    {currentScene.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{bp.title}:</strong>{" "}
                          <span className="text-slate-300">{bp.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Grid */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5 border-t border-white/10 pt-4">
                    {currentScene.keyStats.map((st, i) => (
                      <div key={i}>
                        <div className="text-base sm:text-lg font-black text-emerald-400">{st.value}</div>
                        <div className="text-[11px] font-semibold text-white">{st.label}</div>
                        <div className="text-[10px] text-slate-400">{st.sub}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Scene Indicator Dock */}
          <div className="relative z-20 pb-6 px-4 flex items-center justify-center">
            <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 backdrop-blur-md">
              {scenes.map((sc, idx) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    const positions = [0.1, 0.45, 0.65, 0.85];
                    if (runwayRef.current) {
                      const top = runwayRef.current.offsetTop;
                      const height = runwayRef.current.offsetHeight;
                      window.scrollTo({
                        top: top + height * positions[idx],
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all wu-pressable ${
                    idx === activeSceneIndex
                      ? "bg-emerald-500 text-[#04140c] font-bold shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span>{sc.dockLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
