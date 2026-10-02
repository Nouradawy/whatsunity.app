import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ArrowLeft, ArrowRight, Menu, X, Globe, ExternalLink, Building2, Cpu, Home } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";
import { WhatsUnityLogoText } from "./WhatsUnityLogoText";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";
import { residentLandingData } from "../data/residentLandingContent";

interface Props {
  locale: Locale;
  onToggleLocale: () => void;
  content: WhatsunityContent;
  route: "resident" | "technical";
  onNavigateRoute: (route: "resident" | "technical") => void;
  onOpenBringModal: () => void;
}

export function WhatsunityHeader({
  locale,
  onToggleLocale,
  content,
  route,
  onNavigateRoute,
  onOpenBringModal,
}: Props) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";
  const isRtl = locale === "ar";
  const residentNav = residentLandingData[locale].nav;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-[#05070a]/92">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand: Icon + Typographic Logo */}
        <button
          type="button"
          onClick={() => onNavigateRoute("resident")}
          className="group flex items-center gap-2.5 wu-pressable text-left"
        >
          <img
            src="/whatsunity/favicon.png"
            alt="WhatsUnity Logo"
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform group-hover:scale-105"
          />
          <WhatsUnityLogoText className="text-[20px] sm:text-[24px] md:text-[26px]" />
        </button>

        {/* Streamlined Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 text-xs font-semibold backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
          {route === "resident" ? (
            <>
              <a
                href="#the-problem"
                className={`rounded-full px-3.5 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {residentNav.features}
              </a>
              <a
                href="#how-it-works"
                className={`rounded-full px-3.5 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {residentNav.howItWorks}
              </a>
              <a
                href="#pricing"
                className={`rounded-full px-3.5 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {residentNav.pricing}
              </a>
              <button
                type="button"
                onClick={() => onNavigateRoute("technical")}
                className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 transition-colors text-slate-500 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <Cpu className="h-3.5 w-3.5 text-emerald-500" />
                <span>{residentNav.technical}</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onNavigateRoute("resident")}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable font-bold ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <Home className="h-3.5 w-3.5" />
                <span>{isRtl ? "تطبيق السكان" : "Resident App"}</span>
              </button>
              <a
                href="#case-study"
                className={`rounded-full px-3.5 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {content.nav.caseStudy}
              </a>
              <a
                href="#architecture"
                className={`rounded-full px-3.5 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {content.nav.architecture}
              </a>
              <a
                href="#catalog"
                className={`rounded-full px-3.5 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {content.nav.catalog}
              </a>
            </>
          )}
        </nav>

        {/* Action Controls: CTA + Language + Theme */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Primary Action Button */}
          {route === "resident" ? (
            <button
              type="button"
              onClick={onOpenBringModal}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm shadow-emerald-600/20 wu-pressable transition-all ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              <Building2 className="h-3.5 w-3.5" />
              <span>{residentNav.bringToBuilding}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigateRoute("resident")}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300 wu-pressable transition-all ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              <Home className="h-3.5 w-3.5" />
              <span>{isRtl ? "تطبيق السكان" : "Resident App"}</span>
            </button>
          )}

          {/* Launch Web App PWA Button */}
          <a
            href="https://app.whatsunity.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300 wu-pressable transition-colors shadow-sm`}
            title={isRtl ? "تشغيل تطبيق WhatsUnity السكني عبر المتصفح" : "Launch WhatsUnity PWA Web App"}
          >
            <span>{isRtl ? "دخول التطبيق" : "Open App"}</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>

          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={onToggleLocale}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm wu-pressable hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
            title={isRtl ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
            <span className={isRtl ? "wu-font-en-body" : "wu-font-ar-body"}>
              {isRtl ? "EN" : "العربية"}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm wu-pressable hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
            title={isDark ? "Switch to Light Mode" : "الوضع الليلي"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-300 transition-transform duration-200" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700 transition-transform duration-200" />
            )}
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm lg:hidden wu-pressable dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-white/10 dark:bg-[#05070a]/98 shadow-xl"
          >
            <nav className="flex flex-col gap-2">
              {route === "resident" ? (
                <>
                  <a
                    href="#the-problem"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15"
                  >
                    {residentNav.features}
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15"
                  >
                    {residentNav.howItWorks}
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15"
                  >
                    {residentNav.pricing}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateRoute("technical");
                    }}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-emerald-500/15 text-left"
                  >
                    <Cpu className="h-4 w-4 text-emerald-500" />
                    <span>{residentNav.technical}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBringModal();
                    }}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm"
                  >
                    <Building2 className="h-4 w-4" />
                    <span>{residentNav.bringToBuilding}</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateRoute("resident");
                    }}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-left"
                  >
                    <Home className="h-4 w-4" />
                    <span>{isRtl ? "← العودة لتطبيق السكان" : "← Back to Resident App"}</span>
                  </button>
                  <a
                    href="#case-study"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15"
                  >
                    {content.nav.caseStudy}
                  </a>
                  <a
                    href="#architecture"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15"
                  >
                    {content.nav.architecture}
                  </a>
                  <a
                    href="#catalog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15"
                  >
                    {content.nav.catalog}
                  </a>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
