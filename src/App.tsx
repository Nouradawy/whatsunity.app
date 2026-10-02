import { useState, useEffect } from "react";
import { whatsunityContent, type Locale } from "./features/whatsunity-landing/data/whatsunityContent";
import { residentLandingData } from "./features/whatsunity-landing/data/residentLandingContent";
import { WhatsunityHeader } from "./features/whatsunity-landing/components/WhatsunityHeader";
import { ResidentLandingPage } from "./features/whatsunity-landing/components/ResidentLandingPage";
import { TechnicalPage } from "./features/whatsunity-landing/components/TechnicalPage";
import { WhatsunityCtaFooter } from "./features/whatsunity-landing/components/WhatsunityCtaFooter";
import { WhatsunityCatalogModal } from "./features/whatsunity-catalog/components/WhatsunityCatalogModal";
import { WhatsunityPresentationModal } from "./features/whatsunity-landing/components/WhatsunityPresentationModal";
import { WhatsunityLegalModal } from "./features/whatsunity-landing/components/WhatsunityLegalModal";
import { BringToBuildingModal } from "./features/whatsunity-landing/components/BringToBuildingModal";
import type { LegalDocType } from "./features/whatsunity-landing/data/whatsunityLegal";

export type RouteType = "resident" | "technical";

export function App() {
  // Parse initial route & search params on load
  const getInitialState = () => {
    if (typeof window === "undefined") {
      return { lang: "en" as Locale, route: "resident" as RouteType, policy: null };
    }
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname.toLowerCase();

    // Language resolution: URL param ?lang=ar|en or default to English
    const lang = params.get("lang") === "ar" ? ("ar" as Locale) : ("en" as Locale);

    // Route resolution: path /technical or ?route=technical
    const isTech =
      pathname.includes("/technical") ||
      params.get("route") === "technical" ||
      window.location.hash === "#architecture";

    const route: RouteType = isTech ? "technical" : "resident";
    const policy =
      params.get("policy") === "terms"
        ? "terms"
        : params.get("policy") === "privacy"
          ? "privacy"
          : null;

    return { lang, route, policy: policy as LegalDocType | null };
  };

  const initial = getInitialState();
  const [locale, setLocale] = useState<Locale>(initial.lang);
  const [route, setRoute] = useState<RouteType>(initial.route);

  // Modals
  const [bringModalOpen, setBringModalOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(Boolean(initial.policy));
  const [legalActiveTab, setLegalActiveTab] = useState<LegalDocType>(initial.policy ?? "privacy");

  // Sync URL search params & history
  const updateUrl = (newLang: Locale, newRoute: RouteType, newPolicy: string | null = null) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);

    if (newLang) url.searchParams.set("lang", newLang);

    if (newRoute === "technical") {
      url.searchParams.set("route", "technical");
    } else {
      url.searchParams.delete("route");
    }

    if (newPolicy) {
      url.searchParams.set("policy", newPolicy);
    } else {
      url.searchParams.delete("policy");
    }

    window.history.pushState({}, "", url.toString());
  };

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    setLocale(nextLocale);
    updateUrl(nextLocale, route);
  };

  const handleNavigateRoute = (newRoute: RouteType) => {
    setRoute(newRoute);
    updateUrl(locale, newRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync document lang, title, and dir
  const techContent = whatsunityContent[locale];
  const residentContent = residentLandingData[locale];
  const isRtl = locale === "ar";

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.classList.add("wu-no-scrollbar");
    document.body.classList.add("wu-no-scrollbar");

    // Dynamic Title based on Route
    if (route === "resident") {
      document.title = residentContent.meta.title;
    } else {
      document.title = techContent.meta.title;
    }

    return () => {
      document.documentElement.classList.remove("wu-no-scrollbar");
      document.body.classList.remove("wu-no-scrollbar");
    };
  }, [locale, route, isRtl, residentContent.meta.title, techContent.meta.title]);

  // Sync browser back/forward buttons
  useEffect(() => {
    const onPopState = () => {
      const state = getInitialState();
      setLocale(state.lang);
      setRoute(state.route);
      if (state.policy) {
        setLegalActiveTab(state.policy);
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
      className={`min-h-screen wu-no-scrollbar bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#03060a] dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-950 dark:selection:text-white ${
        isRtl ? "wu-font-ar-body" : "wu-font-en-body"
      }`}
    >
      {/* Global Navigation Header with Route Switcher */}
      <WhatsunityHeader
        locale={locale}
        onToggleLocale={toggleLocale}
        content={techContent}
        route={route}
        onNavigateRoute={handleNavigateRoute}
        onOpenBringModal={() => setBringModalOpen(true)}
      />

      <main>
        {route === "resident" ? (
          /* Resident Landing Page (10-Section Acquisition Experience) */
          <ResidentLandingPage
            locale={locale}
            onOpenBringModal={() => setBringModalOpen(true)}
          />
        ) : (
          /* Technical Route (Clean Architecture & Operating System Showcase) */
          <TechnicalPage
            locale={locale}
            content={techContent}
            onOpenCatalog={() => setCatalogOpen(true)}
            onOpenPresentation={() => setPresentationOpen(true)}
            onBackToResident={() => handleNavigateRoute("resident")}
          />
        )}
      </main>

      {/* Footer & Closing CTA */}
      <WhatsunityCtaFooter
        locale={locale}
        content={techContent}
        showPreFooterCta={route === "technical"}
        onOpenCatalog={() => setCatalogOpen(true)}
        onOpenPolicy={(tab) => {
          setLegalActiveTab(tab);
          setLegalModalOpen(true);
          updateUrl(locale, route, tab);
        }}
      />

      {/* Modal 1: Bring WhatsUnity to Your Building */}
      <BringToBuildingModal
        open={bringModalOpen}
        onClose={() => setBringModalOpen(false)}
        locale={locale}
      />

      {/* Modal 2: 20+ Production Screen Catalog */}
      <WhatsunityCatalogModal
        open={catalogOpen}
        onClose={() => setCatalogOpen(false)}
      />

      {/* Modal 3: Interactive Pitch Deck */}
      <WhatsunityPresentationModal
        open={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />

      {/* Modal 4: Legal Documents (Privacy Policy & Terms) */}
      <WhatsunityLegalModal
        open={legalModalOpen}
        initialTab={legalActiveTab}
        initialLocale={locale}
        onClose={() => {
          setLegalModalOpen(false);
          updateUrl(locale, route, null);
        }}
      />
    </div>
  );
}

export default App;
