import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Building2,
  CheckCircle2,
  Copy,
  Sparkles,
  Mail,
  ArrowLeft,
  ArrowRight,
  Edit3,
  RotateCcw,
} from "lucide-react";
import type { Locale } from "../data/whatsunityContent";

interface Props {
  open: boolean;
  onClose: () => void;
  locale: Locale;
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function BringToBuildingModal({ open, onClose, locale }: Props) {
  const isRtl = locale === "ar";
  const [buildingName, setBuildingName] = useState("");
  const [city, setCity] = useState("");
  const [unitCount, setUnitCount] = useState("");
  const [role, setRole] = useState("resident");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customText, setCustomText] = useState("");

  const getGeneratedIntro = (bName = buildingName, cName = city) => {
    const communityLabel = bName
      ? cName
        ? `${bName} (${cName})`
        : bName
      : locale === "ar"
      ? "المجمع"
      : "our community";

    if (locale === "ar") {
      return `مرحباً، أود أن أقترح تجربة نظام واتس يونيتي (https://whatsunity.app) لمبنانـا (${communityLabel}). التطبيق يجمع إعلانات الإدارة الرسمية، شات الجيران الخاص، بلاغات الصيانة بالصور، وتصاريح الزوار بالباركود في تطبيق واحد، كبديل راقٍ لجروبات الواتساب العشوائية. يوفرون فترة تجريبية مجانية 30 يوماً للمجمعات والعمارات. للاستفسارات المباشرة: واتساب +201158428601 أو البريد support@whatsunity.app.`;
    }

    return `Hello! I would like to suggest WhatsUnity (https://whatsunity.app) for our building (${communityLabel}). It brings building announcements, private neighbor chats, maintenance requests, and instant visitor gate passes into one verified app, replacing messy group chats. They offer a 30-day zero-risk trial for residential communities. Direct inquiries: WhatsApp +201158428601 or email support@whatsunity.app.`;
  };

  const t = {
    en: {
      title: "Bring WhatsUnity to Your Building",
      subtitle:
        "Introduce WhatsUnity to your building committee or property manager with our ready-to-share community presentation kit.",
      buildingLabel: "Building or Compound Name",
      buildingPlaceholder: "e.g. Oakridge Condominiums / Palm Hills",
      cityLabel: "City / Location",
      cityPlaceholder: "e.g. Chicago, IL / London / New Cairo",
      unitsLabel: "Approximate Number of Units",
      unitsPlaceholder: "e.g. 48 apartments",
      roleLabel: "Your Role in the Community",
      roleResident: "Resident / Homeowner",
      roleBoard: "HOA / Board Member",
      roleManager: "Property / Community Manager",
      submitBtn: "Generate Community Introduction Kit",
      successTitle: "Your Introduction Pack is Ready!",
      successSubtitle:
        "Share this concise summary with your building committee, landlord, or residents' chat to start a zero-risk 30-day trial.",
      editBtn: "Edit Details",
      editTooltip: "Go back to change building name, city, or units",
      editableHint: "Editable message — feel free to customize directly below",
      resetBtn: "Reset text",
      copyBtn: "Copy Introduction Message",
      copiedBtn: "Copied to Clipboard!",
      whatsappBtn: "Share with Building Chat",
      contactWhatsAppBtn: "Chat on WhatsApp (+201158428601)",
      contactEmailBtn: "Email support@whatsunity.app",
      directTeamTitle: "Direct WhatsUnity Team Assistance",
      directTeamDesc:
        "Need help presenting WhatsUnity to your building board or committee? Contact us directly anytime.",
      closeBtn: "Close",
    },
    ar: {
      title: "جلب واتس يونيتي لمبناك أو مجمعك السكني",
      subtitle:
        "قدم واتس يونيتي لمجلس إدارة العمارة أو اتحاد الملاك من خلال حزمة تعريفية جاهزة للمشاركة فوراً.",
      buildingLabel: "اسم المبنى أو الكمبوند",
      buildingPlaceholder: "مثال: عمارة النرجس / كمبوند زايد ديونز",
      cityLabel: "المدينة / المنطقة",
      cityPlaceholder: "مثال: التجمع الخامس / الشيخ زايد / الرياض",
      unitsLabel: "العدد التقريبي للوحدات السكنية",
      unitsPlaceholder: "مثال: 36 شقة",
      roleLabel: "صفتك في المجمع",
      roleResident: "ساكن / مالك وحدة",
      roleBoard: "عضو مجلس إدارة / اتحاد الملاك",
      roleManager: "مدير عقار / مسؤول إدارة المجمع",
      submitBtn: "تجهيز رسالة التقديم للمجتمع",
      successTitle: "تم تجهيز رسالة التقديم بنجاح!",
      successSubtitle:
        "شارك هذه الرسالة مع مجلس إدارة المبنى أو في جروب السكان لبدء فترة تجريبية مجانية لمدة 30 يوماً.",
      editBtn: "تعديل البيانات",
      editTooltip: "الرجوع لتعديل اسم المبنى أو المدينة أو عدد الوحدات",
      editableHint: "نص قابل للتعديل — يمكنك تخصيص الرسالة مباشرة أدناه",
      resetBtn: "استعادة النص الأصلي",
      copyBtn: "نسخ رسالة التقديم",
      copiedBtn: "تم النسخ بنجاح!",
      whatsappBtn: "مشاركة في شات العمارة / المجمع",
      contactWhatsAppBtn: "محادثة واتساب (+201158428601)",
      contactEmailBtn: "مراسلة support@whatsunity.app",
      directTeamTitle: "تواصل مباشر مع فريق واتس يونيتي",
      directTeamDesc:
        "هل تحتاج مساعدة في عرض المنظومة على إدارة المبنى أو اتحاد الملاك؟ تواصل معنا مباشرة في أي وقت.",
      closeBtn: "إغلاق",
    },
  }[locale];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomText(getGeneratedIntro(buildingName, city));
    setSubmitted(true);
  };

  const handleCopy = () => {
    const textToCopy = customText || getGeneratedIntro(buildingName, city);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const textToShare = customText || getGeneratedIntro(buildingName, city);
    const text = encodeURIComponent(textToShare);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleContactWhatsApp = () => {
    const communityLabel = buildingName
      ? city
        ? `${buildingName} (${city})`
        : buildingName
      : locale === "ar"
      ? "مبنانا"
      : "our building";

    const text = encodeURIComponent(
      locale === "ar"
        ? `مرحباً واتس يونيتي، أود الاستفسار عن جلب وتفعيل تطبيق WhatsUnity لمبنانا (${communityLabel}).`
        : `Hello WhatsUnity, I would like to inquire about bringing WhatsUnity to our building (${communityLabel}).`
    );
    window.open(`https://wa.me/201158428601?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-white/10 dark:bg-[#0a0f18] dark:text-slate-100 z-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-slate-200 transition-colors"
              aria-label={t.closeBtn}
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {t.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {t.subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.buildingLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={buildingName}
                      onChange={(e) => setBuildingName(e.target.value)}
                      placeholder={t.buildingPlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.cityLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={t.cityPlaceholder}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-emerald-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.unitsLabel}
                      </label>
                      <input
                        type="text"
                        value={unitCount}
                        onChange={(e) => setUnitCount(e.target.value)}
                        placeholder={t.unitsPlaceholder}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.roleLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "resident", label: t.roleResident },
                        { id: "board", label: t.roleBoard },
                        { id: "manager", label: t.roleManager },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setRole(item.id)}
                          className={`rounded-xl border p-2 text-center text-xs font-semibold transition-all ${
                            role === item.id
                              ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400 dark:text-emerald-300 shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all wu-pressable"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>{t.submitBtn}</span>
                  </button>
                </form>

                {/* Direct Contact Footer */}
                <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 text-center">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center flex-wrap gap-1.5">
                    <span>{isRtl ? "استفسارات فورية مباشرة؟" : "Questions before generating?"}</span>
                    <a
                      href="https://wa.me/201158428601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#1ea952] dark:text-[#25D366] hover:underline"
                    >
                      <WhatsAppIcon className="h-3 w-3 fill-current" />
                      <span>WhatsApp: +201158428601</span>
                    </a>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <a
                      href="mailto:support@whatsunity.app"
                      className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <Mail className="h-3 w-3 text-emerald-500" />
                      <span>support@whatsunity.app</span>
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {/* Header with Title and "Edit Details" Action */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white truncate">
                        {t.successTitle}
                      </h3>
                      {(buildingName || city) && (
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium truncate">
                          {buildingName}
                          {buildingName && city ? " · " : ""}
                          {city}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors wu-pressable"
                    title={t.editTooltip}
                  >
                    {isRtl ? <ArrowRight className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
                    <span>{t.editBtn}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  {t.successSubtitle}
                </p>

                {/* Editable Message Header & Reset */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5 px-0.5">
                  <span className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-300">
                    <Edit3 className="h-3 w-3 text-emerald-500" />
                    <span>{t.editableHint}</span>
                  </span>
                  {customText !== getGeneratedIntro(buildingName, city) && (
                    <button
                      type="button"
                      onClick={() => setCustomText(getGeneratedIntro(buildingName, city))}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <RotateCcw className="h-2.5 w-2.5" />
                      <span>{t.resetBtn}</span>
                    </button>
                  )}
                </div>

                {/* Fully Editable Message Textarea */}
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:border-emerald-400 dark:focus:bg-[#070d16] transition-colors resize-y font-sans selection:bg-emerald-500/30 mb-4"
                  placeholder={getGeneratedIntro(buildingName, city)}
                />

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 transition-colors wu-pressable shadow-sm"
                  >
                    <Copy className="h-4 w-4 text-emerald-500" />
                    <span>{copied ? t.copiedBtn : t.copyBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] py-2.5 px-4 text-xs font-bold text-white shadow-md shadow-[#25D366]/20 transition-all wu-pressable"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-white" />
                    <span>{t.whatsappBtn}</span>
                  </button>
                </div>

                {/* Direct Assistance Box */}
                <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 dark:bg-emerald-500/10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {t.directTeamTitle}
                    </span>
                    <span className="text-[10px] rounded-full bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-700 dark:text-emerald-300">
                      Active 7 Days
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                    {t.directTeamDesc}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <button
                      type="button"
                      onClick={handleContactWhatsApp}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 py-2 px-3 text-xs font-bold text-[#1ea952] dark:text-[#25D366] transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                      <span>{t.contactWhatsAppBtn}</span>
                    </button>
                    <a
                      href="mailto:support@whatsunity.app?subject=Bring%20WhatsUnity%20to%20Our%20Building"
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 py-2 px-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{t.contactEmailBtn}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
