import { useState, useMemo } from "react";
import { Maximize2, Sparkles, FileText, Layers, Shield, Wrench, Users, ShieldCheck, Sliders, ExternalLink, Globe } from "lucide-react";
import { pages, roles, t, type RoleKey, type Locale } from "../data/catalog";
import { Icon } from "./icons";

interface Props {
  locale?: Locale;
  onSelectScreen: (pageIndex: string) => void;
}

const roleIcons: Record<RoleKey, any> = {
  community: Users,
  security: Shield,
  maintenance: Wrench,
  manager: ShieldCheck,
  subscription: Layers,
  admin: Sliders,
};

export function WhatsunityScreenMatrix({ locale = "ar", onSelectScreen }: Props) {
  const [selectedRole, setSelectedRole] = useState<RoleKey | "all">("all");
  const [matrixLocale, setMatrixLocale] = useState<Locale>(locale);

  const isRtl = matrixLocale === "ar";
  const roleKeys: RoleKey[] = ["community", "security", "maintenance", "manager", "subscription", "admin"];

  const filteredScreens = useMemo(() => {
    if (selectedRole === "all") return pages;
    return pages.filter((p) => p.roleKey === selectedRole);
  }, [selectedRole]);

  return (
    <div id="catalog-screens-manifest" className="mt-16 border-t border-slate-200 dark:border-white/10 pt-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 wu-font-mono">
              34 Production Screens
            </span>
            <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20 wu-font-mono">
              AI-First English Specs Included
            </span>
          </div>

          <h3 className={`mt-3 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}>
            {isRtl ? "مصفوفة الشاشات والميزات الإنتاجية (34 شاشة)" : "Full 34-Screen Production Feature Matrix"}
          </h3>
          <p className={`mt-1.5 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed ${isRtl ? "wu-font-ar-body" : "wu-font-en-body"}`}>
            {isRtl
              ? "استعرض كافة الشاشات الـ 34 المجهزة إنتاجياً بتطبيق WhatsUnity عبر 6 أدوار تشغيلية. كل شاشة موثقة بالكامل بميزاتها، حالاتها، وقواعد بياناتها المحلية أوفلاين مع نصوص إنجليزية مخصصة للذكاء الاصطناعي."
              : "Explore all 34 production-grade screens across 6 operational personas. Fully documented with functional capabilities, states, and 100% offline local SQLite architecture."}
          </p>
        </div>

        {/* Action Buttons & Language Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Matrix Language Toggle */}
          <div className="flex items-center rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 p-0.5 shadow-sm" dir="ltr">
            <button
              type="button"
              onClick={() => setMatrixLocale("en")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                matrixLocale === "en" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              English (AI)
            </button>
            <button
              type="button"
              onClick={() => setMatrixLocale("ar")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                matrixLocale === "ar" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Machine-readable AI specs direct link */}
          <a
            href="/catalog.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 hover:bg-blue-500/20 transition-colors shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>AI English Spec (/catalog.md)</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* Role Filter Tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={selectedRole === "all"}
          onClick={() => setSelectedRole("all")}
          className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
            selectedRole === "all"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
              : "border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <span>{matrixLocale === "ar" ? "كل الشاشات" : "All Screens"}</span>
          <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${selectedRole === "all" ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"}`}>
            {pages.length}
          </span>
        </button>

        {roleKeys.map((key) => {
          const r = roles[key];
          const count = pages.filter((p) => p.roleKey === key).length;
          const RoleIcon = roleIcons[key] || Layers;
          const isSelected = selectedRole === key;

          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedRole(key)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                isSelected
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <RoleIcon className="h-3.5 w-3.5" />
              <span>{t(r.label, matrixLocale)}</span>
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${isSelected ? "bg-white/20 dark:bg-black/10" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of 34 Screens */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredScreens.map((page) => {
          const r = roles[page.roleKey];
          return (
            <article
              key={page.index}
              id={`screen-${page.index}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#070b12]/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
            >
              <div>
                {/* Meta Badge Row */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-xs font-extrabold text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20 wu-font-mono">
                      #{page.index}
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{
                        backgroundColor: r.accentTint,
                        color: r.accent,
                      }}
                    >
                      {t(r.label, matrixLocale)}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 wu-font-mono truncate max-w-[140px]">
                    {t(page.eyebrow, matrixLocale)}
                  </span>
                </div>

                {/* Primary Title */}
                <h4 className={`mt-3 text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}>
                  {t(page.title, matrixLocale)}
                </h4>

                {/* English Subtitle (Always visible if in Arabic mode for AI & bilingual clarity) */}
                {matrixLocale === "ar" && (
                  <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 wu-font-mono mt-0.5" lang="en">
                    {page.title.en}
                  </span>
                )}

                {/* Lede Summary */}
                <p className={`mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 ${isRtl ? "wu-font-ar-body" : "wu-font-en-body"}`}>
                  {t(page.lede, matrixLocale)}
                </p>

                {/* Feature Bullets List (Visible) */}
                <div className="mt-4 space-y-2 border-t border-slate-100 dark:border-white/5 pt-3">
                  {page.features.slice(0, 4).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md ring-1 ring-black/5 mt-0.5"
                        style={{
                          backgroundColor: r.accentTint,
                          color: r.accent,
                        }}
                      >
                        <Icon name={f.icon} className="h-3 w-3" />
                      </span>
                      <div className="leading-tight">
                        <strong className="text-slate-800 dark:text-slate-200 font-semibold">{t(f.title, matrixLocale)}: </strong>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">{t(f.body, matrixLocale)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Semantic Accessible Block in English for AI Scrapers & Crawlers */}
                <div className="sr-only" lang="en" data-ai-screen={page.index}>
                  <h5>Screen {page.index}: {page.title.en} ({r.labelLatin})</h5>
                  <p>{page.lede.en}</p>
                  <ul>
                    {page.features.map((f, idx) => (
                      <li key={idx}><strong>{f.title.en}</strong>: {f.body.en}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5">
                <button
                  type="button"
                  onClick={() => onSelectScreen(page.index)}
                  className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 py-2 px-3 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-[0.98] ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span>{matrixLocale === "ar" ? "معاينة الشاشة والموك أب الحي" : "Inspect Screen Mockup"}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
