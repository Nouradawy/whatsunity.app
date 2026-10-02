import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Wrench,
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Lock,
  ThumbsUp,
  Clock,
  HelpCircle,
  Home,
  Check,
  X as CloseIcon,
  Vote,
} from "lucide-react";
import type { Locale } from "../data/whatsunityContent";
import { residentLandingData } from "../data/residentLandingContent";
import { ResidentHero } from "./ResidentHero";

interface Props {
  locale: Locale;
  onOpenBringModal: () => void;
}

export function ResidentLandingPage({ locale, onOpenBringModal }: Props) {
  const isRtl = locale === "ar";
  const data = residentLandingData[locale];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPollOption, setSelectedPollOption] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH 4-SCENE CINEMATIC VIDEO */}
      <ResidentHero locale={locale} onOpenBringModal={onOpenBringModal} />

      {/* 2. THE PROBLEM: THREE EVERYDAY FRUSTRATIONS */}
      <section id="the-problem" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.problem.heading}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.problem.description}
          </p>
        </div>

        {/* Contrast Grid: Distinct asymmetrical cards detailing real friction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.problem.frustrations.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div>
                <span className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-400 mb-3 border border-red-500/20">
                  {item.category}
                </span>

                <h3
                  className={`text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {item.title}
                </h3>

                <div className="rounded-xl bg-red-50/60 p-3.5 text-xs text-red-900/90 dark:bg-red-950/20 dark:text-red-200/90 leading-relaxed mb-4 border border-red-100 dark:border-red-900/30">
                  <div className="font-semibold text-red-700 dark:text-red-400 mb-1 flex items-center gap-1.5">
                    <CloseIcon className="h-3.5 w-3.5 text-red-500" />
                    <span>{isRtl ? "الوضع الحالي المشوش:" : "Today's friction:"}</span>
                  </div>
                  {item.problemText}
                </div>
              </div>

              <div className="rounded-xl bg-emerald-50/70 p-3.5 text-xs text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-200 leading-relaxed border border-emerald-200/60 dark:border-emerald-800/40">
                <div className="font-semibold text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{isRtl ? "حل واتس يونيتي المنظم:" : "The WhatsUnity answer:"}</span>
                </div>
                {item.solutionText}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMMUNITY FIRST: PRIVATE CHAT & VERIFIED POLLS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#070b12] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {data.community.heading}
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {data.community.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Highlights */}
            <div className="lg:col-span-6 space-y-6">
              {data.community.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {hl.tag}
                  </span>
                  <h3
                    className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2 ${
                      isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                    }`}
                  >
                    {hl.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                      isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                    }`}
                  >
                    {hl.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Live Interactive Sample Poll Widget */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-300/80 bg-white p-6 sm:p-8 shadow-xl dark:border-white/15 dark:bg-[#0c1322]">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <Vote className="h-5 w-5 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      {isRtl ? "استطلاع رأي سكان العمارة" : "Active Building Poll"}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {isRtl ? "صوت واحد لكل وحدة" : "1 Vote per Unit"}
                  </span>
                </div>

                <h4
                  className={`mt-4 text-base sm:text-lg font-bold text-slate-900 dark:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {data.community.samplePoll.question}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                  {data.community.samplePoll.totalVotes}
                </p>

                {/* Poll Options */}
                <div className="space-y-3">
                  {data.community.samplePoll.options.map((opt, idx) => {
                    const isSelected = selectedPollOption === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedPollOption(idx)}
                        className={`w-full text-left relative overflow-hidden rounded-xl border p-3.5 transition-all wu-pressable ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-50/50 dark:border-emerald-400 dark:bg-emerald-950/20"
                            : "border-slate-200 bg-slate-50 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                        }`}
                      >
                        {/* Progress Fill Bar */}
                        <div
                          className="absolute inset-y-0 left-0 bg-emerald-500/15 dark:bg-emerald-500/20 transition-all duration-500"
                          style={{ width: `${opt.percent}%` }}
                        />

                        <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {opt.text}
                          </span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-400 ml-2">
                            {opt.percent}%
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{isRtl ? "هوية المصوت مشفرة ومحمية" : "Voter privacy guaranteed"}</span>
                  </span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    {isRtl ? "نتائج معتمدة للإدارة" : "Auditable consensus"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONVERSATIONS CONNECTED TO ACTION: 4-STEP MAINTENANCE */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.maintenance.heading}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.maintenance.subtitle}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.maintenance.steps.map((st, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 transition-all relative ${
                activeStep === i
                  ? "border-emerald-500 bg-white dark:bg-white/[0.04] shadow-md"
                  : "border-slate-200 bg-white/60 dark:border-white/10 dark:bg-transparent"
              }`}
              onMouseEnter={() => setActiveStep(i)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-[#04140c] text-sm font-black">
                  {st.number}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                  {isRtl ? `خطوة ${st.number} من 4` : `Step ${st.number} of 4`}
                </span>
              </div>

              <h3
                className={`text-base font-bold text-slate-900 dark:text-white mb-2 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {st.title}
              </h3>
              <p
                className={`text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {st.description}
              </p>
              <div className="rounded-lg bg-slate-50 p-2.5 text-[11px] text-slate-700 dark:bg-white/5 dark:text-slate-300 font-medium">
                {st.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EVERYTHING RELEVANT TO YOUR HOME: UNIT-LEVEL ADVANTAGE */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#070b12] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h2
                className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {data.homeContext.heading}
              </h2>
              <p
                className={`mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {data.homeContext.subtitle}
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onOpenBringModal}
                  className={`inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all wu-pressable ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  <span>{data.hero.ctaPrimary}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {data.homeContext.features.map((feat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                      <Home className="h-4 w-4" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold text-slate-900 dark:text-white mb-1 ${
                          isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                        }`}
                      >
                        {feat.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                          isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                        }`}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOR THE PEOPLE RUNNING YOUR BUILDING */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.stakeholders.heading}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.stakeholders.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stakeholders.roles.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.02] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                  {r.roleName}
                </span>
                <h3
                  className={`text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {r.headline}
                </h3>
                <p
                  className={`text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5 ${
                    isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                  }`}
                >
                  {r.benefit}
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                {r.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TRANSPARENT PRICING */}
      <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#070b12] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.pricing.heading}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.pricing.subtitle}
          </p>

          <div className="mt-12 rounded-3xl border border-slate-300/80 bg-white p-8 sm:p-10 shadow-xl dark:border-white/15 dark:bg-[#0c1322] text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {data.pricing.card.tag}
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {data.pricing.card.name}
                </h3>
              </div>
              <div className="sm:text-right">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {data.pricing.card.priceNote}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {data.pricing.card.priceDetail}
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.pricing.card.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0 font-black" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                {data.pricing.card.pilotNote}
              </span>

              <button
                type="button"
                onClick={onOpenBringModal}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all wu-pressable ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <span>{data.pricing.card.ctaText}</span>
                {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. REAL EVIDENCE & RELIABILITY METRICS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.evidence.heading}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.evidence.subtitle}
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {data.evidence.metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Resident Quote Card */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 sm:p-8 text-center">
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 italic leading-relaxed">
            "{data.evidence.quote.text}"
          </p>
          <div className="mt-4 font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
            {data.evidence.quote.author}
          </div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            {data.evidence.quote.role} · {data.evidence.quote.property}
          </div>
        </div>
      </section>

      {/* 9. GETTING STARTED IN 3 STEPS + INTRODUCE TO BUILDING */}
      <section id="how-it-works" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#070b12] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2
              className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {data.onboarding.heading}
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {data.onboarding.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.onboarding.steps.map((st, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-[#04140c] text-sm font-black mb-4">
                  {i + 1}
                </div>
                <h3
                  className={`text-base font-bold text-slate-900 dark:text-white mb-2 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {st.title}
                </h3>
                <p
                  className={`text-xs text-slate-600 dark:text-slate-400 leading-relaxed ${
                    isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                  }`}
                >
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Not on WhatsUnity yet? Prompt */}
          <div className="mt-10 rounded-2xl border border-slate-300/80 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 dark:border-white/10 dark:bg-white/[0.02]">
            <div>
              <h3
                className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {data.onboarding.notOnboardedPrompt.title}
              </h3>
              <p
                className={`mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {data.onboarding.notOnboardedPrompt.desc}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBringModal}
              className={`shrink-0 flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-xs sm:text-sm font-bold dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors wu-pressable ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              <span>{data.onboarding.notOnboardedPrompt.cta}</span>
              {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* 10. SEMANTIC RESIDENT FAQ ACCORDION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className={`text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.faq.heading}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {data.faq.items.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden dark:border-white/10 dark:bg-white/[0.02]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span className={isRtl ? "wu-font-ar-display" : "wu-font-en-display"}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 text-slate-400 ${
                      isOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    className={`px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 ${
                      isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                    }`}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CLOSING CONVERSION DOCK */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-emerald-500/10 p-8 sm:p-10 text-center dark:border-emerald-500/20 dark:bg-[#07130e]">
          <h3
            className={`text-xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {data.closingCta.heading}
          </h3>
          <p
            className={`mt-3 max-w-xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {data.closingCta.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenBringModal}
              className={`flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all wu-pressable ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>{data.closingCta.ctaPrimary}</span>
            </button>

            <a
              href="https://app.whatsunity.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-800 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors wu-pressable ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              <span>{data.closingCta.ctaSecondary}</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
