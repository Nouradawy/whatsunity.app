import { WhatsunityHero } from "./WhatsunityHero";
import { WhatsunityCaseStudy } from "./WhatsunityCaseStudy";
import { WhatsunityInteractiveHub } from "./WhatsunityInteractiveHub";
import { WhatsunityAeoSection } from "./WhatsunityAeoSection";
import { WhatsunityFaqSection } from "./WhatsunityFaqSection";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
  onOpenCatalog: () => void;
  onOpenPresentation: () => void;
  onBackToResident: () => void;
}

export function TechnicalPage({
  locale,
  content,
  onOpenCatalog,
  onOpenPresentation,
  onBackToResident,
}: Props) {
  const isRtl = locale === "ar";

  return (
    <div className="w-full">
      {/* Route Context Banner */}
      <div className="border-b border-emerald-500/20 bg-emerald-500/10 px-4 py-2.5 text-center text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {isRtl
                ? "مسار الهندسة المعمارية للنظام: Clean Architecture · SQLite Local Master · Appwrite TablesDB"
                : "Technical Route: Clean Architecture · SQLite Local Master · Appwrite TablesDB"}
            </span>
          </span>
          <button
            type="button"
            onClick={onBackToResident}
            className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold text-white hover:bg-emerald-500 transition-colors wu-pressable"
          >
            {isRtl ? "← العودة لتطبيق السكان الرئيسي" : "← Back to Resident App"}
          </button>
        </div>
      </div>

      {/* Engineering Showcase Hero */}
      <WhatsunityHero
        locale={locale}
        content={content}
        onOpenCatalog={onOpenCatalog}
        onOpenPresentation={onOpenPresentation}
      />

      {/* Comprehensive Case Study (Clean Architecture, 9 Roles, SQLite, Cryptographic QR) */}
      <WhatsunityCaseStudy locale={locale} content={content} />

      {/* Interactive Showcase Hub */}
      <WhatsunityInteractiveHub locale={locale} content={content} />

      {/* Answer Engine Optimization (AEO) for AI Agents & Developers */}
      <WhatsunityAeoSection locale={locale} content={content} />

      {/* Engineering Architecture FAQ */}
      <WhatsunityFaqSection locale={locale} content={content} />
    </div>
  );
}
