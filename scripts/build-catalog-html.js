import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

// We read catalog.ts to extract screens data accurately
const catalogTsPath = path.join(rootDir, "src", "features", "whatsunity-catalog", "data", "catalog.ts");
const catalogTs = fs.readFileSync(catalogTsPath, "utf-8");

// We can extract pages array or use a structured definition
// Let's create the comprehensive 34 screens dataset for the static HTML
const screens = [
  {
    index: "01",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Home Feed & Social Publishing",
    titleAr: "الصفحة الرئيسية والمنشورات",
    eyebrow: "Home · Social Feed",
    persona: "Resident / Homeowner / Household Member",
    lede: "The central hub for every resident — a dynamic social feed unifying compound announcements, user posts, and media, with rapid shortcuts to essential services.",
    ledeAr: "نقطة الانطلاق لكل ساكن — خلاصة اجتماعية حيّة تجمع إعلانات المجتمع والمنشورات والوسائط مع اختصارات سريعة لأهم الخدمات.",
    features: [
      { title: "Quick Service Shortcuts", body: "Instant access to maintenance, gate passes, housekeeping, and directory from top quick-actions." },
      { title: "Resident Post Creation", body: "Share community updates, announcements, or inquiries with neighbors in one tap." },
      { title: "Multi-Media Gallery", body: "Rich multi-photo carousel posts with swipe indicators and high-resolution viewing." },
      { title: "Role-Badged Engagement", body: "Likes, comments, and shares featuring verified role badges (e.g. 'Owner') for trust." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/Home_screen_community.png"
  },
  {
    index: "02",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Social Feed — State Transitions",
    titleAr: "الخلاصة الاجتماعية — الحالات",
    eyebrow: "Feed States & Activation",
    persona: "Resident / First-Time Visitor",
    lede: "Thoughtful state handling: from welcoming empty states that drive first-time engagement to lively real-time community interaction.",
    ledeAr: "تصميم يهتم بكل حالة: من الخلاصة الفارغة التي تشجّع على أول مشاركة، إلى الخلاصة النشطة المليئة بالتفاعل — كلها في الوقت الفعلي.",
    features: [
      { title: "Real-Time Updates", body: "Instant streaming for fresh posts with a compelling call-to-action to join discussions." },
      { title: "Residents & Staff Privacy", body: "A verified closed perimeter ensuring all communications remain strictly within the compound." },
      { title: "Bilingual AR / EN", body: "Seamless language toggle and dark mode support with tailored typography for both scripts." },
      { title: "Effortless Refresh", body: "Prominent pull-to-refresh to fetch new content and live reactions instantly." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/social.png"
  },
  {
    index: "03",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Community Messaging Channels",
    titleAr: "الدردشة المجتمعية",
    eyebrow: "Community & Building Chat",
    persona: "Resident / Compound Admin",
    lede: "Two focused messaging channels: compound-wide general chat and building-isolated groups. Supports rich media, documents, and voice notes—with dedicated interactive polls.",
    ledeAr: "قناتان للمحادثة: شات عام لكل المجمع وشات مغلق لكل مبنى على حدة. تدعم الصور والملفات والملاحظات الصوتية مع تصويت تفاعلي داخل الشات.",
    features: [
      { title: "Compound General Chat", body: "Unified real-time channel for all compound residents with verified role badges." },
      { title: "Private Building Group", body: "Exclusive, quiet group strictly for residents of the same building unit." },
      { title: "Rich Attachment Suite", body: "Instant camera snapshots, photo albums, PDF docs, and crystal-clear voice notes." },
      { title: "In-Chat Interactive Polls", body: "Native live voting bubbles within chats with dedicated section access to prevent buried decisions." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/chatting.png"
  },
  {
    index: "04",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Building Chat & Financial Hub",
    titleAr: "شات العمارة والإدارة المالية",
    eyebrow: "Building Chat · Finance & Ledger",
    persona: "Building Residents / Floor Treasurer",
    lede: "Building Chat is an integrated financial management hub: Net Building Balance display, real-time Cash In/Out ledger, co-funded development projects, and automated invoice billing.",
    ledeAr: "شات العمارة ليس محادثة فقط — إنه مركز مالي متكامل لكل مبنى. رصيد صافٍ مباشر، دفتر حسابات حيّ، خطط لتطوير المبنى، ونظام فواتير بتحصيل آلي.",
    features: [
      { title: "Net Building Balance", body: "Live aggregated building treasury balance positioned prominently above chat." },
      { title: "Live Accounting Ledger", body: "Transparent real-time stream of all building collections and vendor expenditures." },
      { title: "Improvement Plans", body: "Collaboratively create building upgrade initiatives and crowd-fund improvements." },
      { title: "Automated Invoicing", body: "Issue dues, track paid/pending statuses, and automate fee collection reminders." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/image-2.png"
  },
  {
    index: "05",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Community Polls & Decision Hub",
    titleAr: "التصويت المجتمعي",
    eyebrow: "Community Governance & Voting",
    persona: "Homeowners / Compound Management",
    lede: "From proposal to collective decision: admins create structured polls, set custom deadlines, and track live percentage outcomes alongside resident discussion.",
    ledeAr: "من الإنشاء إلى القرار — يطرح المشرف سؤالاً ويضيف الخيارات ويحدد المدة، ثم يتابع النتائج الحية بالنِّسب ونقاش السكان في مكان واحد.",
    features: [
      { title: "Flexible Question Builder", body: "Define poll questions with up to 10 distinct options, easily customizable." },
      { title: "Configurable Deadlines", body: "Set poll durations (1, 3, 7 days, or custom calendar date) for automated closing." },
      { title: "Live Percentage Breakdown", body: "Real-time percentage bars, voter participation counts, and active/closed badges." },
      { title: "Integrated Discussion Thread", body: "Contextual comment thread attached directly to the poll for healthy resident debate." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/community_-_votting.png"
  },
  {
    index: "06",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Maintenance Reports & Ticketing",
    titleAr: "تقارير وبلاغات الصيانة",
    eyebrow: "Resident Maintenance Triage",
    persona: "Resident / Front Desk",
    lede: "Flexible resident workflow from reporting to resolution: multi-tab status filters, color-coded reference codes, and instant photo/voice attachment upload.",
    ledeAr: "منظومة مرنة للساكن من رفع البلاغ حتى إتمام المعالجة: تبويبات بالحالة، بطاقات ملونة، كود مرجعي فريد (#MNT)، ونموذج مبسط لرفع المشكلة بالصور.",
    features: [
      { title: "Status Filtering", body: "Filter tickets across All, New, In-Progress, and Resolved with live counts." },
      { title: "Color-Coded Cards", body: "Unique reference code (#MNT-XXXX), trade specialization tag, and timestamp." },
      { title: "Quick Report Creation", body: "Simplified submission wizard to capture photos, record audio, and explain issues." },
      { title: "Visual Trade Icons", body: "Clear visual trade icons (plumbing, electrical, HVAC) for immediate dispatch." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/maintinace-reporting.png"
  },
  {
    index: "07",
    roleKey: "community",
    roleLabel: "Community Hub",
    roleLabelAr: "دور المجتمع",
    titleEn: "Building Directory & Shared Contacts",
    titleAr: "دليل العمارة والأرقام المشتركة",
    eyebrow: "Smart Building Directory",
    persona: "Resident / Security Gate",
    lede: "Privacy-preserving building directory and shared numbers list: displays neighbors exclusively within your assigned building, with one-tap emergency calling.",
    ledeAr: "دفتر هاتف ذكي وخاص بالمبنى: يعرض جيران نفس العمارة فقط حفاظاً على الخصوصية، مع بطاقات مفصلة وأرقام طوارئ وخدمات مشتركة واتصال مباشر.",
    features: [
      { title: "Building Neighbors Only", body: "Restricts listing strictly to residents of the user's assigned building unit." },
      { title: "Detailed Resident Cards", body: "Full name, apartment number, owner/tenant status, and avatar initial." },
      { title: "Emergency & Services", body: "Instant tabs for Neighbors, Gate Security, Maintenance Desk, and Emergency." },
      { title: "Direct One-Tap Dial", body: "Launch phone calls or chat directly from cards without manual phone saving." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/image-8.png"
  },
  {
    index: "08",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Gatekeeper Overstayed Visitors Stream",
    titleAr: "شاشة البوابة والزوار وتجاوز المدة",
    eyebrow: "Gate Security · Overstay Protocol",
    persona: "Gate Security Guard (Gatekeeper)",
    lede: "The primary command screen for gate guards: high-contrast red alerts for couriers and visitors exceeding authorized duration, with instant unit query.",
    ledeAr: "لوحة العمليات المباشرة لحارس البوابة: رصد الزوار المتجاوزين (OVERSTAYED) بشارة حمراء ساطعة، استعلام فوري برقم الوحدة، وشارات المراقبة والاشتباه.",
    features: [
      { title: "Overstay Alert Telemetry", body: "Bright red highlight on overdue visitors with live elapsed countdown and 1-tap Resolve." },
      { title: "Instant Unit Lookup", body: "Type unit number (e.g. '34') to instantly retrieve host details and active passes." },
      { title: "Observation Flags", body: "Flags individuals placed on security watch with risk severity score indicators." },
      { title: "Resident Gate Directives", body: "Displays resident custom arrival rules (e.g. call host on arrival) with gate photos." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_overstayed_stream.png"
  },
  {
    index: "09",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Unit Directives & Host Resident Verification",
    titleAr: "استعلام رقم الوحدة وتوجيهات الساكن",
    eyebrow: "Host Verification & Directives",
    persona: "Gatekeeper",
    lede: "Precision host verification ensuring arriving guests are cleared by verified unit owners with complete visitor logs and security instructions.",
    ledeAr: "التحقق الدقيق من الوحدة السكنية والموافقة المسبقة قبل السماح بالدخول مع استعراض سجل الزيارات السابقة وتوجيهات الساكن الخاصة.",
    features: [
      { title: "Verified Host Credentials", body: "Owner/tenant status, active residency verification, and verified phone line." },
      { title: "Historical Visit Log", body: "Past entry history of drivers and contractors previously cleared for this unit." },
      { title: "Custom Gate Directives", body: "Direct owner instructions (e.g. do not enter without phone confirmation)." },
      { title: "Sub-50ms Entry Logging", body: "Log approved entrance in local SQLite database with 0ms UI blocking." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_unit_search_34.png"
  },
  {
    index: "10",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Courier Protocol & Gate Directives",
    titleAr: "التحقق من المندوبين وتوجيهات المالك",
    eyebrow: "Courier Security Protocol",
    persona: "Gatekeeper",
    lede: "Fast-track security protocol for commercial delivery couriers dropping verification time to under 3 seconds with automated 15-minute countdown limits.",
    ledeAr: "بروتوكول أمني صارم وسريع لمركبات التوصيل والشركات لتقليص زمن الانتظار لأقل من 3 ثوانٍ مع سقف زمني محدد بـ 15 دقيقة وتوثيق اللوحات.",
    features: [
      { title: "Courier Fleet Selection", body: "1-tap identification for Amazon, Noon, Talabat, Mrsool, and custom couriers." },
      { title: "License Plate Capture", body: "Dual Arabic/English license plate recording with alphanumeric shortcuts." },
      { title: "15-Minute Countdown", body: "Automated countdown timer enforcing swift package drop-off turnaround." },
      { title: "Lobby Direct Navigation", body: "Directs courier to correct building entrance, parking stall, and freight elevator." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_courier_verification.png"
  },
  {
    index: "11",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "100% Offline Cryptographic QR Pass Validation",
    titleAr: "مسح واعتماد تصاريح QR المشفرة أوفلاين",
    eyebrow: "Offline QR Cryptography",
    persona: "Gatekeeper",
    lede: "Sub-50ms digital signature verification running entirely on guard tablets via local SQLite without internet connection during total network blackouts.",
    ledeAr: "اعتماد رقمي مشفر دون إنترنت 100%: التحقق من صلاحية التصريح محلياً عبر SQLite في أقل من 0.05 ثانية مع دمج تعليمات الساكن وتصوير الهويات.",
    features: [
      { title: "Sub-50ms Offline Verification", body: "Locally decrypts and verifies digital signature, unit ID, and expiration." },
      { title: "Integrated Host Alerts", body: "Flashes yellow banner with host resident instructions during the QR scan." },
      { title: "Preset Duration Limits", body: "One-click stay duration caps (15, 30, 45, 60 mins) for automatic overstay monitoring." },
      { title: "ID Document Camera Capture", body: "Photographs front and back of national ID or driver license for high-security transit." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_pass_verification_qr.png"
  },
  {
    index: "12",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Gate Pass Operations & Security Details",
    titleAr: "تفاصيل التصريح والعمليات الأمنية",
    eyebrow: "Pass Audit & Lifecycle",
    persona: "Gatekeeper / Security Supervisor",
    lede: "Comprehensive audit details for any issued pass: visitor identity, entry/exit timestamps, approved extensions, and immediate revocation controls.",
    ledeAr: "استعراض كامل لسجل التصريح الرقمي وحركات الدخول والخروج مع تتبع التمديدات وإمكانية إلغاء التصريح أو حظر الزائر فوراً.",
    features: [
      { title: "Visitor & Host Profiles", body: "Full name, national ID, destination unit, vehicle plate, and visit reason." },
      { title: "Precision Timestamps", body: "Millisecond-accurate log of pass creation, gate entry, and exit checkout." },
      { title: "Stay Extension Trail", body: "Audited log of additional hours approved by host or supervisor." },
      { title: "Revocation & Blacklist", body: "Instant 1-tap pass revocation with global blacklist flag across all gates." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_pass_details_operations.png"
  },
  {
    index: "13",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Overstay Protocol & Patrol Tactical Dispatch",
    titleAr: "كشف تجاوز الزيارة وتوجيه الدورية",
    eyebrow: "Overstay Tactical Triage",
    persona: "Gatekeeper / Patrol Guard",
    lede: "Containment protocol for overstayed visitors: automatic delta timer, direct resident call inquiry, 2-hour grace extension, or patrol dispatch.",
    ledeAr: "بروتوكول احتواء المخالفات الميدانية: رصد آلي للتجاوز، زر اتصال مباشر بالمضيف للاستفسار، إمكانية تمديد البقاء لساعتين، وتوجيه الدورية الميدانية.",
    features: [
      { title: "Automatic Overstay Delta", body: "Continuous calculation between entry time and authorized cutoff hour." },
      { title: "Direct Host Call Inquiry", body: "1-tap phone dialer to host resident verifying if the visitor is still present." },
      { title: "One-Click 2h Extension", body: "Extend stay limit by 2 hours upon host confirmation, resetting alerts." },
      { title: "Mobile Patrol Dispatch", body: "Directs field patrol guard to building location while opening a tactical chat room." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_patrol_dispatched.png"
  },
  {
    index: "14",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Threat Matrix & Security Observation Flags",
    titleAr: "المراقبة الأمنية وبلاغات الطوارئ الفورية",
    eyebrow: "Security Threat Observation",
    persona: "Security Guard / Command Supervisor",
    lede: "Proactive risk mitigation: activate surveillance flags on suspicious visitors across all gates with 10 standardized threat classifications and emergency SOS.",
    ledeAr: "منظومة استباقية لإدارة المخاطر: إدراج الزائر تحت المراقبة مع 10 تصنيفات معتمدة للتهديدات، بلاغات البوابة السريعة بنقرة واحدة، وتوثيق أعطال التجهيزات.",
    features: [
      { title: "Active Surveillance Flag", body: "Activates red observation badge synchronized to all guard mobile terminals." },
      { title: "10 Threat Classifications", body: "Pre-set tags: loitering, attempted burglary, property damage, unregistered car." },
      { title: "1-Tap Gate Alarms", body: "Floating SOS trigger for unauthorized gate breach or physical altercations." },
      { title: "Hardware Incident Log", body: "Log equipment faults for barriers, RFID scanners, or power outages." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_pass_observation_modal.png"
  },
  {
    index: "15",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Gatekeeper Manual Visitor Entry & Smart Lookup",
    titleAr: "التسجيل اليدوي الشامل والبحث الذكي",
    eyebrow: "Manual Intake Protocol",
    persona: "Gatekeeper",
    lede: "Flexible intake workflow for unscheduled visitors, emergency maintenance workers, or guests without smartphones, with automatic phone number retrieval.",
    ledeAr: "مرونة عالية للتعامل مع الزوار غير المجدولين: استرجاع تلقائي برقم الهاتف، توجيه الوحدة بدقة، تسجيل لوحات المركبات باللغتين، وأرشفة صور الهويات.",
    features: [
      { title: "Phone-Based Auto-Fill", body: "Type visitor mobile number to instantly pull identity and past visit history." },
      { title: "Unit Direct Linking", body: "Assigns guest to exact building and apartment for permanent audit logs." },
      { title: "Bilingual Plate Recording", body: "Supports typing Arabic and English letters/numbers (e.g. ABC 1234 / أ ب ج ١٢٣٤)." },
      { title: "Encrypted ID Archival", body: "Stores front and back ID photos directly in local encrypted database." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_manual_entry.png"
  },
  {
    index: "16",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Gate Guard Shift Portal & Duty Telemetry",
    titleAr: "بوابة الحارس والورديات وسجل العمليات",
    eyebrow: "Guard Shift Telemetry",
    persona: "Gatekeeper",
    lede: "Shift management and post handover console: active duty stopwatch, gate assignment display, co-guard roster, and shift activity logbook.",
    ledeAr: "انضباط وإشراف ميداني كامل: مؤقت الوردية وتحديد البوابة، استعراض فريق الحراسة المناوب، جدول الورديات وطلب الإجازات، وأرشيف سجل العمليات اليومية.",
    features: [
      { title: "Live Duty Stopwatch", body: "Shows ON DUTY badge, elapsed shift time, and assigned gatehouse post." },
      { title: "Co-Guard Roster", body: "List of fellow guards on duty during the same shift for fast coordination." },
      { title: "Shift Calendar & Leave", body: "Inspect upcoming duty calendar and submit shift exchange or leave requests." },
      { title: "Shift Activity Logbook", body: "Real-time logbook recording all entries, incidents, and guard notes during shift." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_guard_shift_portal.png"
  },
  {
    index: "17",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Security Incident Dispatch & Alarm Room",
    titleAr: "فتح بلاغ أمني وتوجيه الدورية",
    eyebrow: "Incident Triage & Alarm",
    persona: "Gatekeeper / Security Supervisor",
    lede: "Rapid emergency incident console: geo-tag incidents to gates or sectors, capture watermarked photos, assign L1/L2/L3 severity, and dispatch nearest patrol.",
    ledeAr: "الاستجابة الفورية للحوادث الأمنية ورفع تقرير طارئ لغرفة العمليات: تحديد موقع الحادث، إرفاق الصور والأدلة المائية، وتوجيه فوري للدورية الراجلة.",
    features: [
      { title: "Geo-Located Sector Tag", body: "Links incident to building sector, gatehouse, or shared facility coordinates." },
      { title: "Watermarked Photo Proof", body: "Captures on-scene photo stamped with timestamp, gate number, and user ID." },
      { title: "Severity Tiers (L1-L3)", body: "Classify incidents as Critical Emergency (L1), High (L2), or Normal (L3)." },
      { title: "Instant Patrol Assignment", body: "Pushes route guidance and tactical alarm to nearest roaming guard." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_incident_dispatch_modal.png"
  },
  {
    index: "18",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Gate Activity Logbook & Access Audit Trail",
    titleAr: "سجل النشاط وحركات الدخول والخروج",
    eyebrow: "Historical Access Audit",
    persona: "Security Supervisor / Auditor",
    lede: "Tamper-evident chronological audit ledger tracking pedestrian and vehicular movements through all gates with millisecond accuracy and encrypted export.",
    ledeAr: "سجل تدقيق تاريخي غير قابل للتلاعب لجميع عمليات الدخول والخروج عبر البوابات مع طوابع زمنية دقيقة وبحث متقدم وتصدير للتحقيقات الرسمية.",
    features: [
      { title: "Millisecond Timestamping", body: "Chronological ledger recording exact entry and exit times for every transit." },
      { title: "Multi-Parametric Filter", body: "Search by vehicle plate, visitor name, unit apartment, or gate station." },
      { title: "Daily Traffic Telemetry", body: "Aggregated counters for total entries, unique visitors, and regular contractors." },
      { title: "Encrypted CSV Export", body: "Export verified logs for police reporting or compound administrative audit." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/gatekeeper_activity_logbook.png"
  },
  {
    index: "19",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Mobile Patrol Guard Portal & Checkpoint Stream",
    titleAr: "مركز عمليات الدورية ونقاط التفتيش",
    eyebrow: "Field Patrol Command",
    persona: "Mobile Patrol Guard (Walking / Vehicle)",
    lede: "Dedicated field portal for mobile guards: nearby checkpoint targets, inspection round progress bar, floating SOS panic button, and shift management.",
    ledeAr: "تطبيق الدورية الراجلة والمتحركة: مسار نقاط التفتيش القريبة (بارك 10، 30، 29)، زر الاستغاثة والطوارئ (SOS)، جدول الوردية، وطاقم الحراسة الميداني.",
    features: [
      { title: "Nearby Checkpoint Targets", body: "Lists upcoming inspection points (Park 10, Park 30, Park 29) with round progress %." },
      { title: "Floating SOS Panic Button", body: "Red button triggering instant silent alarm to Central Command with GPS location." },
      { title: "Duty Calendar & Requests", body: "View assigned patrol sector and submit approved rest interval requests." },
      { title: "On-Duty Patrol Roster", body: "Visibility into fellow roaming guards deployed across compound sectors." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/patrol_Home (1).png"
  },
  {
    index: "20",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "NFC Checkpoint Telemetry & Patrol Verification",
    titleAr: "مسح نقاط التفتيش الذكية ومسار الدورية",
    eyebrow: "NFC Guard Telemetry",
    persona: "Mobile Patrol Guard",
    lede: "Contactless NFC/QR verification proving physical presence at perimeter inspection points: tamper-proof offline timestamping and overdue scan alerts.",
    ledeAr: "إثبات الحضور الميداني الدوري عبر مسح شرائح NFC الذكية: مسح بدون تلامس، تسجيل الموقع الزمني بدون إنترنت، وكشف تجاوز وقت الفحص تلقائياً.",
    features: [
      { title: "Contactless NFC Scanning", body: "Tap encrypted physical NFC tags installed along perimeter fences and utility rooms." },
      { title: "Offline Telemetry Logging", body: "Records checkpoint arrival in local SQLite with cryptographic tamper-proofing." },
      { title: "Overdue Inspection Alarms", body: "Flashes red warning to supervisor if guard misses a scheduled inspection window." },
      { title: "Route Completion Dial", body: "Live completion meter tracking percentage of perimeter checkpoints validated." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/patrol hub ar (4).png"
  },
  {
    index: "21",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Security Incident Evidence Logging & Forensic Watermarking",
    titleAr: "الاستجابة للبلاغات وغرفة التوجيه التكتيكي",
    eyebrow: "Forensic Evidence Logging",
    persona: "Patrol Guard / Supervisor",
    lede: "Forensic documentation of security violations: capture photos with embedded cryptographic RTL watermark, record audio memos, and tag involved parties.",
    ledeAr: "معالجة الحوادث وفق معايير الاستجابة السريعة: تصنيف الخطورة (L1-L3)، بيانات الساكن والاتصال المباشر، مسار الاستجابة الرباعي، وتوثيق الأدلة الميدانية.",
    features: [
      { title: "Forensic Photo Capture", body: "Photos stamped with indelible cryptographic RTL watermark (date, time, GPS, user)." },
      { title: "Audio Narrative Recording", body: "Record on-the-spot voice memos detailing incident circumstances." },
      { title: "Involved Parties Profiling", body: "Link incidents to specific individuals, license plates, or apartment numbers." },
      { title: "Auto Cloud Re-Sync", body: "Queues report locally and uploads high-resolution media upon re-establishing network." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/patrol report ar expanded.png"
  },
  {
    index: "22",
    roleKey: "security",
    roleLabel: "Security Operations",
    roleLabelAr: "مركز العمليات والأمن",
    titleEn: "Lost & Found RTL Watermarking & Cataloging",
    titleAr: "تقارير الأمن والمفقودات",
    eyebrow: "Lost & Found Property Ledger",
    persona: "Security Staff / Community Front Desk",
    lede: "Compound property registry preventing theft and false claims: dual lost vs found ledger, automated RTL watermark overlay, and resident claim notifications.",
    ledeAr: "إدارة شاملة للحوادث والأمانات: تقارير أمنية بالحالات (#SE)، تصنيفات لونية للحوادث، سجل المفقودات والمعثورات، وتحديث الحالة والتسليم مع علامة مائية.",
    features: [
      { title: "Lost vs Found Ledger", body: "Clear two-sided ledger categorizing lost inquiries against secured recovered items." },
      { title: "Automated RTL Watermark", body: "Overlays compound logo, report ID, date, and location onto item photos." },
      { title: "Status Lifecycle Tracking", body: "Track item lifecycle (Found, Claimed, Returned) with formal sign-off." },
      { title: "Automated Resident Match", body: "Matches item tags against resident reports and pushes match notifications." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/image-6.png"
  },
  {
    index: "23",
    roleKey: "maintenance",
    roleLabel: "Facility Engineering",
    roleLabelAr: "الهندسة والصيانة والتشغيل",
    titleEn: "Maintenance Desk & Ticket Triage (9 Trades)",
    titleAr: "مركز استقبال البلاغات وتعيين الفنيين",
    eyebrow: "Maintenance Ticket Triage",
    persona: "Maintenance Coordinator",
    lede: "Central triage desk for resident repair tickets: rapid categorization across 9 trade specializations, 1-click technician dispatch, and emergency escalation.",
    ledeAr: "مكتب الفرز وتوجيه بلاغات الصيانة: فرز البلاغات حسب 9 تخصصات، تعيين الفنيين بنقرة واحدة، زر تصعيد البلاغات الحرجة، وتوليد الكود المرجعي (#MNT).",
    features: [
      { title: "9-Trade Specialization Triage", body: "Categorize across Plumbing, Electrical, HVAC, Carpentry, Painting, Masonry, Elevators, Landscaping, Pest." },
      { title: "1-Click Technician Assignment", body: "Direct dispatch to on-duty technicians based on real-time workload capacity." },
      { title: "Emergency Ticket Escalation", body: "Flashing red alert to Chief Engineer for catastrophic pipe bursts or power loss." },
      { title: "Unique #MNT Tracking Codes", body: "Auto-generates traceable tracking numbers for parts requisitions and labor accounting." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/maintenance_coordinator_triage_desk.png"
  },
  {
    index: "24",
    roleKey: "maintenance",
    roleLabel: "Facility Engineering",
    roleLabelAr: "الهندسة والصيانة والتشغيل",
    titleEn: "Work Orders & Spare Parts Console",
    titleAr: "أوامر العمل الميدانية ومتابعة قطع الغيار",
    eyebrow: "Work Orders & Warehouse",
    persona: "Maintenance Coordinator / Workshop Lead",
    lede: "Work order management and warehouse spare parts accounting: track field repair costs, requisitions, technician rerouting, and QA sign-offs.",
    ledeAr: "إدارة دورة حياة الإصلاح الميداني: لوحة أوامر العمل النشطة، إدارة ومتابعة قطع الغيار وضبط النفقات، إعادة توجيه المهام الفنية، واعتماد الإنجاز.",
    features: [
      { title: "Active Work Order Board", body: "Track active jobs, estimated labor costs, and priority bands (Normal, Medium, Critical)." },
      { title: "Spare Parts Requisitions", body: "Dedicated ledger linking warehouse parts, costs, and inventory directly to tickets." },
      { title: "Technician Rerouting", body: "Reassign tickets to backup specialists if the primary technician is overloaded." },
      { title: "Completion Sign-Off", body: "Review repair photos and supervisor checklist prior to final ticket closure." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/maintenance_coordinator_work_orders.png"
  },
  {
    index: "25",
    roleKey: "maintenance",
    roleLabel: "Facility Engineering",
    roleLabelAr: "الهندسة والصيانة والتشغيل",
    titleEn: "Field Technician Active Stopwatch & Repairs",
    titleAr: "تطبيق الفني الميداني وإجراءات التنفيذ",
    eyebrow: "Technician Field Action",
    persona: "Field Technician (Plumber, Electrician, HVAC)",
    lede: "On-site mobile execution console for field technicians: exact unit geolocation, live repair stopwatch timer, spare parts requisition, and mandatory Before/After photo proof.",
    ledeAr: "واجهة العمل الميدانية للفني أثناء الإصلاح: تحديد موقع الوحدة بدقة (Bldg 34 Apt 2)، شريط الإجراءات الميدانية السريعة، مؤقت العمل النشط، وتوثيق الصور قبل وبعد.",
    features: [
      { title: "Unit Geolocation & Defect", body: "Exact unit address (e.g. Bldg 34, Apt 2) with full resident voice/photo defect context." },
      { title: "Active Stopwatch Timer", body: "Live stopwatch timer calculating on-site labor time and turnaround efficiency." },
      { title: "Quick Field Actions", body: "Actions: [Start on Site], [Request Parts], [Add Update], [Reroute Job]." },
      { title: "Mandatory Before / After Photos", body: "Requires photo evidence of defective condition before repair and finished quality after." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/technician_portal_assigned_orders.png"
  },
  {
    index: "26",
    roleKey: "maintenance",
    roleLabel: "Facility Engineering",
    roleLabelAr: "الهندسة والصيانة والتشغيل",
    titleEn: "Chief Engineer Operational Takeover & Broadcasts",
    titleAr: "بوابة كبير المهندسين والتدخل المباشر",
    eyebrow: "Chief Engineer Command",
    persona: "Chief Engineer / Facility Director",
    lede: "High-level supervisory console providing direct operational failover when coordinators are absent, engineering broadcast publisher, and KPI telemetry.",
    ledeAr: "لوحة القيادة العليا لإدارة المرافق: التدخل التلقائي عند غياب المنسق، بث التعميمات الهندسية للسكان، سجل البلاغات الهندسية، ومؤشرات الضغط العام.",
    features: [
      { title: "Coordinator Failover Takeover", body: "Automatic banner enabling Chief Engineer to dispatch tickets during coordinator absence." },
      { title: "Engineering Broadcast Notices", body: "Pre-set templates to notify residents of power outages, water cuts, or elevator maintenance." },
      { title: "Master Incident Ledger", body: "Advanced filtering of severe infrastructure breakdowns across all compound sectors." },
      { title: "Facility Pressure Telemetry", body: "KPI telemetry ribbons tracking open tickets, average resolution speed, and CSAT scores." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/chief_engineer_portal_takeover.png"
  },
  {
    index: "27",
    roleKey: "maintenance",
    roleLabel: "Facility Engineering",
    roleLabelAr: "الهندسة والصيانة والتشغيل",
    titleEn: "Workforce Capacity & Dispatch Balancing",
    titleAr: "إصدار أوامر العمل وإدارة الطاقة الاستيعابية",
    eyebrow: "Workforce Load Balancing",
    persona: "Chief Engineer / Coordinator",
    lede: "Dynamic workforce balancing preventing technician burnout: live capacity meters (e.g. 1/6 Cap), trade certifications, and priority coding.",
    ledeAr: "حوكمة الكفاءة التشغيلية للفريق الهندسي: نموذج متكامل لأمر العمل، مراقبة أعباء الفنيين (Capacity)، تعديل المهارات والاعتمادات، وترميز الأولويات بدقة.",
    features: [
      { title: "Work Order Dispatch Form", body: "Form combining trade selection, priority severity, technician picker, and labor hours." },
      { title: "Live Capacity Meters", body: "Visual load gauge (e.g. 1/6 Cap Available vs 5/6 Cap Overloaded) for fair dispatch." },
      { title: "Trade Certification Records", body: "Inspect technician verified certifications and authorized heavy equipment permits." },
      { title: "Strict Severity Coding", body: "Classify jobs into Normal, Medium, High, or Critical Emergency bands." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/chief_engineer_dispatch_modal_work_order.png"
  },
  {
    index: "28",
    roleKey: "maintenance",
    roleLabel: "Facility Engineering",
    roleLabelAr: "الهندسة والصيانة والتشغيل",
    titleEn: "Duty Schedules & Holiday Calendars (24/7 Readiness)",
    titleAr: "جداول التغطية وتقويم العطلات الرسمية",
    eyebrow: "Facility Shift Scheduling",
    persona: "Chief Engineer / Operations Manager",
    lede: "Workforce shift scheduling and coverage planning ensuring 24/7 facility emergency readiness, preventive maintenance windows, and holiday rotations.",
    ledeAr: "التخطيط المسبق وتفادي انقطاع الصيانة: أيام التغطية المعتمدة (5 من 7 أيام)، تقويم العطلات وأيام العمل، جدولة الصيانة الوقائية، وجاهزية طوارئ المرافق 24/7.",
    features: [
      { title: "Approved Coverage Quotas", body: "Visual field shift distribution guaranteeing minimum staffing quotas (e.g. 5/7 active days)." },
      { title: "Interactive Holiday Heatmap", body: "Monthly calendar classifying workdays, public holidays, and on-call rotations." },
      { title: "Preventive Overhaul Windows", body: "Schedules major equipment maintenance (pumps, generators, elevators) during low usage." },
      { title: "24/7 Emergency Rotation", body: "Dedicated on-call rosters ensuring immediate response to midnight pipe leaks or outages." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/chief_engineer_schedules_holidays_calendar.png"
  },
  {
    index: "29",
    roleKey: "manager",
    roleLabel: "Community Governance",
    roleLabelAr: "إدارة وحوكمة المجمع",
    titleEn: "Community Manager Operations & SOS Alert Feed",
    titleAr: "بوابة مدير المجمع والعمليات وبلاغات SOS",
    eyebrow: "Manager Executive Hub",
    persona: "Community Manager / Executive Director",
    lede: "Executive operations command overview: daily gate passes, security personnel attendance, live SOS alerts, L1 high-priority incident triage, and service shortcuts.",
    ledeAr: "الإشراف الشامل والمباشر على المجتمع: ملخص العمليات وتصاريح اليوم، رصد تنبيهات الطوارئ النشطة (SOS)، فرز البلاغات حسب الخطورة (L1)، واختصارات المرافق.",
    features: [
      { title: "Daily Operations Snapshot", body: "Real-time counters for guest passes, guard attendance, open tickets, and sync uptime." },
      { title: "Active SOS Emergency Banner", body: "High-contrast red banner alerting management to critical security breaches or overstays." },
      { title: "L1 Priority Incident Triage", body: "Centralized feed of critical incidents segmented across compound buildings and sectors." },
      { title: "Executive Quick Actions", body: "Rapid shortcuts for Gate Access Administration, Maintenance Budgets, and Emergency Broadcasts." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/manager_portal_home.png"
  },
  {
    index: "30",
    roleKey: "manager",
    roleLabel: "Community Governance",
    roleLabelAr: "إدارة وحوكمة المجمع",
    titleEn: "Governance: Penalties, Sanctions & Standard Tariff List",
    titleAr: "الحوكمة — لائحة المخالفات والغرامات وقائمة الأسعار",
    eyebrow: "Community Rules & Sanctions",
    persona: "Community Manager / Legal Affairs",
    lede: "Community rule enforcement and standardized penalty tariff: violation ledger, approved sanction price list ($150 parking, $200 noise), and compliance tracking.",
    ledeAr: "ضبط النظام والالتزام بالقوانين الداخلية: سجل المخالفات والمستحقات، قائمة العقوبات المعيارية المعتمدة (ركن السيارات $150، إزعاج $200)، وإصدار الغرامات.",
    features: [
      { title: "Violation & Receivables Log", body: "Tracks penalty collections across status (Pending, Disputed, Paid)." },
      { title: "Standardized Sanction Tariff", body: "Official rates: Parking $150.00, Noise $200.00, Littering $75.00, Alterations $500.00." },
      { title: "Issue Penalty Workflows", body: "Issue formal violation notices with photographic evidence and payment due dates." },
      { title: "Compound Compliance Dial", body: "Green compliance dial tracking resident adherence and zero-delinquency targets." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/manager_governance_fines_penalties.png"
  },
  {
    index: "31",
    roleKey: "manager",
    roleLabel: "Community Governance",
    roleLabelAr: "إدارة وحوكمة المجمع",
    titleEn: "Governance: Treasury & Reserve Fund Accounting",
    titleAr: "الحوكمة — الخزينة وميزانية ووديعة الصيانة",
    eyebrow: "Reserve Fund Treasury",
    persona: "Board of Directors / Financial Comptroller",
    lede: "Transparent financial governance for long-term compound maintenance reserve funds: aggregated balances, banking yield telemetry, and audited ledgers.",
    ledeAr: "الشفافية والحوكمة المالية لصناديق الصيانة: ميزانية ووديعة الصيانة المركزية، احتساب العوائد البنكية، تخصيص المخصصات المالية، وكشوفات مدققة ومزامنة.",
    features: [
      { title: "Central Reserve Fund Balance", body: "Consolidated ledger aggregating initial deposits, banking yields, and capital expenses." },
      { title: "Banking Yield Telemetry", body: "Precision tracking of annual bank interest yields and operational draws." },
      { title: "Capital Expense Allocation", body: "Allocate funds for future major infrastructure overhauls (roads, facades, elevators)." },
      { title: "Audited Ledger Sync", body: "Immutable transaction ledger synchronized in real-time to preserve homeowner trust." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/manager_governance_treasury_fund.png"
  },
  {
    index: "32",
    roleKey: "subscription",
    roleLabel: "Plans & Editions",
    roleLabelAr: "الباقات والاشتراكات",
    titleEn: "Editions: Free vs Premium & Interactive Sandbox",
    titleAr: "إدارة الاشتراكات والنسخ المتاحة",
    eyebrow: "Plans, Pricing & Sandbox",
    persona: "Compound Owner / HOA Board President",
    lede: "Flexible licensing editions scaling from zero-cost Telegram community tier to complete enterprise compound operating system with an interactive sandbox.",
    ledeAr: "خيارات ترخيص مرنة تناسب كافة المجمعات: النسخة المجانية المعتمدة على تليجرام، باقة بريميوم الشاملة (RBC وتصاريح QR أوفلاين)، والبيئة التجريبية Sandbox.",
    features: [
      { title: "Free Telegram Community Edition", body: "Community chat, directory, and basic tickets routed through zero-cost Telegram MTProto bots." },
      { title: "Premium Compound OS", body: "Full activation of RBC security, 100% offline QR gatekeeping, patrols, and ledgers." },
      { title: "Interactive Demo Sandbox", body: "Test gate scanning, patrol rounds, and technician timers using pre-loaded mock data." },
      { title: "Cross-Platform Availability", body: "Available on Google Play, Progressive Web App (PWA), and Apple iOS roadmap." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/profile_subscription.png"
  },
  {
    index: "33",
    roleKey: "admin",
    roleLabel: "Admin Console",
    roleLabelAr: "لوحة الإدارة والتحكم",
    titleEn: "Member Verification & Access Control (KYC)",
    titleAr: "التحقق من الأعضاء وإدارة الصلاحيات",
    eyebrow: "Admin Verification & KYC",
    persona: "Super Administrator / Compound Registrar",
    lede: "User lifecycle governance and unit ownership verification: review incoming join requests, delegate permissions, enforce chat mutes, or ban accounts.",
    ledeAr: "التحكم الكامل في الدخول والأدوار: مراجعة طلبات الانضمام المعلقة حسب رقم الشقة، تعيين الأدوار والصلاحيات، إجراءات الانضباط وحظر الدردشة، وإحصائيات الأعضاء.",
    features: [
      { title: "Pending Request Review", body: "Examine join requests with proof of ownership or tenancy lease documents in 1-tap." },
      { title: "Role & Permission Delegation", body: "Assign roles (Owner, Tenant, Family, Gatekeeper, Technician, Coordinator, Admin)." },
      { title: "Disciplinary Moderation", body: "Granular penalties: Chat Mute (prevent spam while keeping security alerts) or Account Ban." },
      { title: "Direct Contact Dispatch", body: "1-tap phone call, WhatsApp verification message, or SMS OTP resend." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/admin_members_verification.png"
  },
  {
    index: "34",
    roleKey: "admin",
    roleLabel: "Admin Console",
    roleLabelAr: "لوحة الإدارة والتحكم",
    titleEn: "Tactical Broadcast Publisher & Emergency Alerts",
    titleAr: "إرسال التعميمات والإعلانات التكتيكية",
    eyebrow: "Admin · Broadcast Publisher",
    persona: "Super Administrator / Operations Command",
    lede: "High-priority broadcasting console: publish instant announcements targeted to residents or security guards, with tactical presets and priority routing.",
    ledeAr: "مركز البث والإخطار الفوري: قوالب تكتيكية جاهزة للأحداث المتكررة، مستويات أولوية متعددة (إشعار، تنبيه، طوارئ)، تحديد الجمهور المستهدف، وإرسال فوري.",
    features: [
      { title: "Tactical Quick-Presets", body: "One-tap presets for recurring events: Gate Congestion, Active Night Patrol, ID Checks." },
      { title: "Multi-Level Alert Priority", body: "Classify broadcasts as Notice, Warning, or Critical Emergency with distinct alert sounds." },
      { title: "Audience Segmentation", body: "Target broadcasts precisely to the entire Community or strictly to Guard personnel." },
      { title: "Instant Push Delivery", body: "Push notifications dispatched instantly to resident phones and guard station tablets." }
    ],
    shot: "/assets/projects/Whatsunity/catalog/admin_broadcast_publisher.png"
  }
];

// Generate standalone HTML
const html = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WhatsUnity — 34-Screen Production Feature Catalog | Complete Mobile OS Architecture</title>
  <meta name="description" content="Explore all 34 production-grade mobile screens and workflows of WhatsUnity Residential Compound Operating System. 100% offline gatekeeping, dual-engine chat, 9-role maintenance, and governance." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <meta name="theme-color" content="#05070a" />

  <!-- Canonical & Markdown Links for AI Agents -->
  <link rel="canonical" href="https://whatsunity.app/catalog" />
  <link rel="alternate" type="text/markdown" href="https://whatsunity.app/catalog.md" hreflang="en" title="WhatsUnity Screen Catalog (English)" />
  <link rel="alternate" type="text/markdown" href="https://whatsunity.app/catalog-ar.md" hreflang="ar" title="WhatsUnity Screen Catalog (Arabic)" />
  <link rel="alternate" href="https://whatsunity.app/llms.txt" />
  <link rel="service-doc" type="text/markdown" href="/catalog.md" />

  <!-- OpenGraph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="WhatsUnity Compound OS" />
  <meta property="og:title" content="WhatsUnity — 34-Screen Production Feature Catalog" />
  <meta property="og:description" content="Complete screen-by-screen architectural walkthrough of WhatsUnity across 6 operational roles." />
  <meta property="og:image" content="https://whatsunity.app/assets/whatsunity/whatsunity-og.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&family=Cairo:wght@600;700;800&display=swap" rel="stylesheet" />

  <style>
    :root {
      --bg: #05070a;
      --card-bg: rgba(10, 15, 25, 0.85);
      --card-border: rgba(255, 255, 255, 0.1);
      --text: #e2e8f0;
      --text-muted: #94a3b8;
      --heading: #ffffff;
      --primary: #3b82f6;
      --primary-tint: rgba(59, 130, 246, 0.15);
      --emerald: #10b981;
      --emerald-tint: rgba(16, 185, 129, 0.15);
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --font-ar: 'Cairo', sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 80px;
    }

    a { color: var(--primary); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Top Nav */
    header.site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(5, 7, 10, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--card-border);
      padding: 16px 0;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .brand-badge {
      background: var(--emerald-tint);
      color: var(--emerald);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-family: var(--font-mono);
      font-weight: 700;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 8px 14px;
      border-radius: 12px;
      border: 1px solid var(--card-border);
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      transition: all 0.2s;
    }
    .btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.25);
      text-decoration: none;
    }
    .btn-primary {
      background: #2563eb;
      border-color: #3b82f6;
    }
    .btn-primary:hover {
      background: #1d4ed8;
    }

    /* Hero */
    .catalog-hero {
      padding: 56px 0 36px;
      border-bottom: 1px solid var(--card-border);
    }
    .hero-badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
    }
    .hero-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #fff;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    .hero-desc {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 820px;
      margin-top: 14px;
      line-height: 1.6;
    }
    .hero-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 32px;
    }
    .metric-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 18px 20px;
    }
    .metric-num {
      font-size: 1.75rem;
      font-weight: 800;
      color: #fff;
      font-family: var(--font-mono);
    }
    .metric-label {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-top: 2px;
    }

    /* Role Nav Pills */
    .role-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 36px 0;
    }
    .role-pill {
      font-size: 0.82rem;
      font-weight: 700;
      padding: 8px 16px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--card-border);
      color: #cbd5e1;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .role-pill:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
      text-decoration: none;
    }

    /* Screens Grid */
    .screens-section {
      margin-top: 20px;
    }
    .screens-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 28px;
    }

    .screen-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 24px;
      display: flex;
      flex-col: column;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(12px);
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
      overflow: hidden;
    }
    .screen-card:hover {
      border-color: rgba(59, 130, 246, 0.4);
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .screen-id {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      font-weight: 800;
      background: var(--primary-tint);
      color: #60a5fa;
      padding: 3px 8px;
      border-radius: 8px;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }
    .role-tag {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: #e2e8f0;
    }
    .screen-eyebrow {
      font-size: 0.72rem;
      color: #94a3b8;
      font-family: var(--font-mono);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-title-en {
      font-size: 1.25rem;
      font-weight: 800;
      color: #fff;
      margin-top: 14px;
      line-height: 1.3;
    }
    .card-title-ar {
      font-size: 0.95rem;
      font-weight: 600;
      color: #94a3b8;
      font-family: var(--font-ar);
      margin-top: 4px;
    }
    .card-persona {
      font-size: 0.75rem;
      color: #38bdf8;
      font-weight: 600;
      margin-top: 6px;
      display: inline-block;
    }
    .card-lede {
      font-size: 0.85rem;
      color: #cbd5e1;
      margin-top: 10px;
      line-height: 1.55;
    }

    /* Mockup Frame */
    .mockup-frame {
      margin: 18px 0;
      background: #000;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 480px;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
    }
    .mockup-frame img {
      width: 100%;
      height: 100%;
      max-height: 480px;
      object-fit: contain;
      display: block;
      transition: transform 0.3s;
    }
    .screen-card:hover .mockup-frame img {
      transform: scale(1.02);
    }

    /* Feature bullets */
    .features-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 0.78rem;
      line-height: 1.45;
    }
    .feature-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #60a5fa;
      margin-top: 6px;
      shrink: 0;
    }
    .feature-item strong {
      color: #f1f5f9;
    }
    .feature-item span {
      color: #94a3b8;
    }

    footer.site-footer {
      margin-top: 60px;
      border-top: 1px solid var(--card-border);
      padding: 36px 0;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      .screens-grid { grid-template-columns: 1fr; }
      .hero-title { font-size: 1.85rem; }
    }
  </style>
</head>
<body>

  <!-- Top Header -->
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand-title">
        <a href="/" style="color:#fff; text-decoration:none;">WhatsUnity</a>
        <span class="brand-badge">Production Screen Catalog</span>
      </div>
      <div class="nav-links">
        <a href="/catalog.md" class="btn" target="_blank">📄 AI Markdown Spec</a>
        <a href="/" class="btn btn-primary">🚀 Interactive Web App</a>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- Hero Section -->
    <section class="catalog-hero">
      <div class="hero-badge-row">
        <span class="brand-badge">34 Screens Catalog</span>
        <span class="brand-badge" style="background:rgba(59,130,246,0.15); color:#60a5fa; border-color:rgba(59,130,246,0.3);">100% Pre-rendered HTML</span>
      </div>
      <h1 class="hero-title">WhatsUnity 34-Screen Production Feature Catalog</h1>
      <p class="hero-desc">
        Complete visual and architectural inventory of all 34 production-ready Flutter screens across 6 operational personas. This page is 100% statically pre-rendered without client-side SPA requirements, allowing web scrapers, crawlers, and AI models to inspect all UI states, screenshots, and capabilities.
      </p>

      <div class="hero-metrics">
        <div class="metric-card">
          <div class="metric-num">34</div>
          <div class="metric-label">Production Screens Implemented</div>
        </div>
        <div class="metric-card">
          <div class="metric-num">6</div>
          <div class="metric-label">Operational Personas</div>
        </div>
        <div class="metric-card">
          <div class="metric-num">0ms</div>
          <div class="metric-label">Offline SQLite UI Response</div>
        </div>
        <div class="metric-card">
          <div class="metric-num">9</div>
          <div class="metric-label">Facility Maintenance Trades</div>
        </div>
      </div>

      <!-- Quick Role Anchor Links -->
      <nav class="role-nav" aria-label="Role Navigation">
        <a href="#section-community" class="role-pill">👥 Community Hub (Screens 01-07)</a>
        <a href="#section-security" class="role-pill">🛡️ Security & Offline Gatekeeping (Screens 08-22)</a>
        <a href="#section-maintenance" class="role-pill">🔧 Facility Maintenance & Engineering (Screens 23-28)</a>
        <a href="#section-manager" class="role-pill">⚖️ Community Governance & Treasury (Screens 29-31)</a>
        <a href="#section-subscription" class="role-pill">💎 Plans & Licensing (Screen 32)</a>
        <a href="#section-admin" class="role-pill">⚙️ Admin Console & Broadcasts (Screens 33-34)</a>
      </nav>
    </section>

    <!-- Screens Catalog -->
    <section class="screens-section">
      <div class="screens-grid">
        ${screens.map(s => `
        <article class="screen-card" id="screen-${s.index}">
          <div>
            <div class="card-top">
              <span class="screen-id">Screen ${s.index}</span>
              <span class="role-tag">${s.roleLabel}</span>
              <span class="screen-eyebrow">${s.eyebrow}</span>
            </div>

            <h2 class="card-title-en">${s.titleEn}</h2>
            <div class="card-title-ar">${s.titleAr}</div>
            <div class="card-persona">👤 ${s.persona}</div>
            <p class="card-lede">${s.lede}</p>

            <!-- Pre-rendered Phone Mockup Image -->
            <div class="mockup-frame">
              <img src="${s.shot}" alt="${s.titleEn} Screen Mockup" loading="lazy" />
            </div>

            <!-- Features List -->
            <ul class="features-list">
              ${s.features.map(f => `
              <li class="feature-item">
                <span class="feature-dot"></span>
                <div>
                  <strong>${f.title}:</strong>
                  <span>${f.body}</span>
                </div>
              </li>
              `).join("")}
            </ul>
          </div>
        </article>
        `).join("")}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>WhatsUnity Compound Operating System · One Home. One Subscription. Your Entire Household Included.</p>
      <p style="margin-top:6px; font-size:0.75rem;">Engineered by Noureldin Adawy · Flutter Dart 3, SQLite Local Master, Appwrite Cloud, Telegram MTProto</p>
      <p style="margin-top:10px;">
        <a href="https://whatsunity.app/">Live Web App</a> · 
        <a href="/catalog.md">Raw Markdown Spec</a> · 
        <a href="/whatsunity.md">System Architecture</a> · 
        <a href="/llms.txt">LLMs Index</a>
      </p>
    </div>
  </footer>

</body>
</html>
`;

// Write public/catalog.html
fs.writeFileSync(path.join(publicDir, "catalog.html"), html, "utf-8");
console.log("[build-catalog-html] Generated public/catalog.html successfully (" + html.length + " bytes).");

// Also inject a pre-rendered fallback into index.html so the SPA shell is never empty for crawlers
const indexPath = path.join(rootDir, "index.html");
if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, "utf-8");
  const prerenderSnippet = `
    <div id="root">
      <header style="padding: 24px; text-align: center;">
        <h1 style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">WhatsUnity — Compound Operating System | واتس يونيتي</h1>
        <p style="font-size: 1rem; color: #94a3b8; max-width: 750px; margin: 8px auto;">
          منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة — One Home. One Subscription. Your Entire Household Included.
        </p>
        <div style="margin-top: 12px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <a href="/catalog" style="color: #38bdf8; font-weight: 700; text-decoration: underline;">Explore 34-Screen Production Catalog (HTML)</a>
          <a href="/catalog.md" style="color: #34d399; font-weight: 700; text-decoration: underline;">AI Markdown Spec (catalog.md)</a>
          <a href="/whatsunity.md" style="color: #a78bfa; font-weight: 700; text-decoration: underline;">Full Architecture (whatsunity.md)</a>
        </div>
      </header>

      <section id="catalog" style="max-width: 1200px; margin: 30px auto; padding: 20px;">
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; text-align: center;">
          WhatsUnity 34-Screen Production Feature Catalog
        </h2>
        <p style="text-align: center; color: #94a3b8; margin: 8px 0 24px; font-size: 0.9rem;">
          34 Production Screens · 6 Operational Personas · 100% Offline-First Architecture
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
          ${screens.map(s => `
          <article id="screen-${s.index}" style="background: rgba(15,23,42,0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 16px; color: #e2e8f0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-family: monospace; font-weight: bold; color: #60a5fa; font-size: 0.8rem;">Screen ${s.index}</span>
              <span style="font-size: 0.72rem; background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 999px;">${s.roleLabel}</span>
            </div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 3px;">${s.titleEn}</h3>
            <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px;">${s.titleAr}</div>
            <p style="font-size: 0.78rem; color: #cbd5e1; margin-bottom: 10px; line-height: 1.45;">${s.lede}</p>
            <ul style="padding-left: 16px; font-size: 0.75rem; color: #94a3b8; line-height: 1.4;">
              ${s.features.map(f => `<li><strong style="color:#f1f5f9;">${f.title}:</strong> ${f.body}</li>`).join("")}
            </ul>
          </article>
          `).join("")}
        </div>
      </section>
    </div>`;

  indexHtml = indexHtml.replace(/<div id="root">[\s\S]*?<\/div>/, prerenderSnippet.trim());
  fs.writeFileSync(indexPath, indexHtml, "utf-8");
  console.log("[build-catalog-html] Injected pre-rendered static catalog fallback into index.html.");
}
