import { useState, useEffect } from "react";
import { whatsunityContent, type Locale } from "./features/whatsunity-landing/data/whatsunityContent";
import { WhatsunityHeader } from "./features/whatsunity-landing/components/WhatsunityHeader";
import { WhatsunityHero } from "./features/whatsunity-landing/components/WhatsunityHero";
import { WhatsunityCaseStudy } from "./features/whatsunity-landing/components/WhatsunityCaseStudy";
import { WhatsunityInteractiveHub } from "./features/whatsunity-landing/components/WhatsunityInteractiveHub";
import { WhatsunityAeoSection } from "./features/whatsunity-landing/components/WhatsunityAeoSection";
import { WhatsunityFaqSection } from "./features/whatsunity-landing/components/WhatsunityFaqSection";
import { WhatsunityCtaFooter } from "./features/whatsunity-landing/components/WhatsunityCtaFooter";
import { WhatsunityCatalogModal } from "./features/whatsunity-catalog/components/WhatsunityCatalogModal";
import { WhatsunityPresentationModal } from "./features/whatsunity-landing/components/WhatsunityPresentationModal";
import { WhatsunityLegalModal } from "./features/whatsunity-landing/components/WhatsunityLegalModal";
import type { LegalDocType } from "./features/whatsunity-landing/data/whatsunityLegal";

export function App() {
  // Parse search params on initial load
  const getSearchParams = () => {
    if (typeof window === "undefined") return { lang: "ar" as Locale, policy: null };
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") === "en" ? ("en" as Locale) : ("ar" as Locale);
    const policy = params.get("policy") === "terms" ? "terms" : params.get("policy") === "privacy" ? "privacy" : null;
    return { lang, policy: policy as LegalDocType | null };
  };

  const initialParams = getSearchParams();
  const [locale, setLocale] = useState<Locale>(initialParams.lang);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(Boolean(initialParams.policy));
  const [legalActiveTab, setLegalActiveTab] = useState<LegalDocType>(initialParams.policy ?? "privacy");

  // Sync URL search parameter helper
  const updateUrlParam = (key: string, value: string | null) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    window.history.replaceState({}, "", url.toString());
  };

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    setLocale(nextLocale);
    updateUrlParam("lang", nextLocale);
  };

  // Sync document lang, title, and dir
  const content = whatsunityContent[locale];
  const isRtl = locale === "ar";

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = locale;
    document.documentElement.classList.add("wu-no-scrollbar");
    document.body.classList.add("wu-no-scrollbar");
    document.title = content.meta.title;

    return () => {
      document.documentElement.classList.remove("wu-no-scrollbar");
      document.body.classList.remove("wu-no-scrollbar");
    };
  }, [locale, content.meta.title]);

  // Sync popstate for back/forward browser buttons
  useEffect(() => {
    const onPopState = () => {
      const params = getSearchParams();
      setLocale(params.lang);
      if (params.policy) {
        setLegalActiveTab(params.policy);
        setLegalModalOpen(true);
      } else {
        setLegalModalOpen(false);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen wu-no-scrollbar bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#05070a] dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-950 dark:selection:text-white ${
        isRtl ? "wu-font-ar-body" : "wu-font-en-body"
      }`}
    >
      {/* Navigation Header */}
      <WhatsunityHeader
        locale={locale}
        onToggleLocale={toggleLocale}
        content={content}
      />

      <main>
        {/* Impeccable Hero Section */}
        <WhatsunityHero
          locale={locale}
          content={content}
          onOpenCatalog={() => setCatalogOpen(true)}
          onOpenPresentation={() => setPresentationOpen(true)}
        />

        {/* Comprehensive Case Study Section (Directly under Hero) */}
        <WhatsunityCaseStudy
          locale={locale}
          content={content}
        />

        {/* Interactive Showcase Hub (Catalog & Presentation Launcher) */}
        <WhatsunityInteractiveHub
          locale={locale}
          content={content}
        />

        {/* Answer Engine Optimization (AEO) for AI Agents & Developers */}
        <WhatsunityAeoSection
          locale={locale}
          content={content}
        />

        {/* Semantic FAQ Section */}
        <WhatsunityFaqSection
          locale={locale}
          content={content}
        />
      </main>

      {/* Footer & Closing CTA with Legal Policy Integration */}
      <WhatsunityCtaFooter
        locale={locale}
        content={content}
        onOpenCatalog={() => setCatalogOpen(true)}
        onOpenPolicy={(tab) => {
          setLegalActiveTab(tab);
          setLegalModalOpen(true);
          updateUrlParam("policy", tab);
        }}
      />

      {/* Global Catalog Modal */}
      <WhatsunityCatalogModal
        open={catalogOpen}
        onClose={() => setCatalogOpen(false)}
      />

      {/* Global Presentation Deck Modal */}
      <WhatsunityPresentationModal
        open={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />

      {/* Global Legal Documents Modal (Privacy Policy & Terms) */}
      <WhatsunityLegalModal
        open={legalModalOpen}
        initialTab={legalActiveTab}
        initialLocale={locale}
        onClose={() => {
          setLegalModalOpen(false);
          updateUrlParam("policy", null);
        }}
      />
    </div>
  );
}

export default App;
