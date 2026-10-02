import type { Locale } from "./whatsunityContent";

export interface ResidentLandingContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    features: string;
    howItWorks: string;
    communities: string;
    technical: string;
    pricing: string;
    bringToBuilding: string;
    openApp: string;
  };
  hero: {
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    pricingMessage: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    cinematic: {
      scrollHint: string;
      mobileScrollCue: string;
      scenes: {
        id: string;
        tag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        videoSrc: string;
        videoMobileSrc: string;
        posterSrc: string;
        posterMobileSrc: string;
        accentColor: string;
        dockLabel: string;
        keyStats: { value: string; label: string; sub: string }[];
        bulletPoints: { title: string; desc: string }[];
      }[];
    };
  };
  problem: {
    heading: string;
    description: string;
    frustrations: {
      title: string;
      problemText: string;
      solutionText: string;
      category: string;
    }[];
  };
  community: {
    heading: string;
    subtitle: string;
    highlights: {
      title: string;
      description: string;
      tag: string;
    }[];
    samplePoll: {
      question: string;
      totalVotes: string;
      options: { text: string; percent: number; votes: number }[];
    };
  };
  maintenance: {
    heading: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      detail: string;
    }[];
  };
  homeContext: {
    heading: string;
    subtitle: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  stakeholders: {
    heading: string;
    subtitle: string;
    roles: {
      roleName: string;
      headline: string;
      benefit: string;
      points: string[];
    }[];
  };
  pricing: {
    heading: string;
    subtitle: string;
    card: {
      tag: string;
      name: string;
      priceNote: string;
      priceDetail: string;
      features: string[];
      pilotNote: string;
      ctaText: string;
    };
  };
  evidence: {
    heading: string;
    subtitle: string;
    metrics: {
      value: string;
      label: string;
      sub: string;
    }[];
    quote: {
      text: string;
      author: string;
      role: string;
      property: string;
    };
  };
  onboarding: {
    heading: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
    }[];
    notOnboardedPrompt: {
      title: string;
      desc: string;
      cta: string;
    };
  };
  faq: {
    heading: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  closingCta: {
    heading: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

export const residentLandingData: Record<Locale, ResidentLandingContent> = {
  en: {
    meta: {
      title: "WhatsUnity — Your Entire Community. One App.",
      description:
        "Everything residents need to live in their community — conversations, announcements, maintenance, services, access, voting and more — without juggling groups, phone numbers and separate apps. One home. One subscription. Everyone in your household included.",
      ogTitle: "WhatsUnity — Your Entire Community. One App.",
      ogDescription:
        "Everything residents need to live in their community — conversations, announcements, maintenance, services, access, voting and more — without juggling groups, phone numbers and separate apps. One home. One subscription. Everyone in your household included.",
    },
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      communities: "For HOAs & Boards",
      technical: "Engineering Architecture",
      pricing: "Pricing",
      bringToBuilding: "Bring to My Building",
      openApp: "Open Web App",
    },
    hero: {
      titleLine1: "Your neighbors, building chats and home services.",
      titleHighlight: "Together in one app.",
      subtitle:
        "Everything residents need to live in their community — conversations, announcements, maintenance, services, access, voting and more — without juggling groups, phone numbers and separate apps.",
      pricingMessage: "One home. One subscription. Everyone in your household included.",
      ctaPrimary: "Bring WhatsUnity to your building",
      ctaSecondary: "See how it works",
      ctaTertiary: "Already a member? Open app",
      cinematic: {
        scrollHint: "Scroll down to explore how it works",
        mobileScrollCue: "Scroll to view scenes",
        scenes: [
          {
            id: "scene-overview",
            tag: "Everything in One Place",
            title: "Your whole building.",
            titleHighlight: "In one clear home screen.",
            subtitle:
              "Quick shortcuts to building chats, neighbor posts, maintenance requests, visitor passes and emergency contacts. No digging through chat histories to find the building superintendent.",
            videoSrc: "/assets/whatsunity/phone.mp4",
            videoMobileSrc: "/assets/whatsunity/phone-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-phone.webp",
            posterMobileSrc: "/assets/whatsunity/poster-phone-mobile.webp",
            accentColor: "#059669",
            dockLabel: "Home Hub",
            keyStats: [
              { value: "1 App", label: "For your home", sub: "Replaces 5 scattered tools" },
              { value: "1 Tap", label: "Emergency staff", sub: "Security & maintenance ready" },
              { value: "100%", label: "Verified units", sub: "Only real residents admitted" },
            ],
            bulletPoints: [
              {
                title: "One home identity for your household",
                desc: "Your apartment number attaches automatically to your requests and passes.",
              },
              {
                title: "Works without cellular delays",
                desc: "Instant responses even when basement or garage Wi-Fi drops.",
              },
            ],
          },
          {
            id: "scene-community",
            tag: "Private Community Spaces",
            title: "Building conversations.",
            titleHighlight: "Without group chat chaos.",
            subtitle:
              "Say hello to your neighbors, ask for a trusted babysitter, and vote on community improvements. Pinned official announcements keep water shutoffs and elevator notices visible.",
            videoSrc: "/assets/whatsunity/community.mp4",
            videoMobileSrc: "/assets/whatsunity/community-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-community.webp",
            posterMobileSrc: "/assets/whatsunity/poster-community-mobile.webp",
            accentColor: "#2563eb",
            dockLabel: "Building Chat",
            keyStats: [
              { value: "Private", label: "Phone numbers hidden", sub: "Zero personal data leaks" },
              { value: "Pinned", label: "Official notices", sub: "Never lost in chat chatter" },
              { value: "Polls", label: "Transparent votes", sub: "Clear collective decisions" },
            ],
            bulletPoints: [
              {
                title: "Your phone number stays private",
                desc: "Chat freely with neighbors without broadcasting your personal phone number to hundreds of people.",
              },
              {
                title: "Separate official notices from casual chat",
                desc: "Important building rules and emergency alerts never get pushed out of sight by pet photos.",
              },
            ],
          },
          {
            id: "scene-maintenance",
            tag: "Transparent Repair Tracking",
            title: "Report maintenance in seconds.",
            titleHighlight: "Track every step until it is fixed.",
            subtitle:
              "Snap a photo of the leaking radiator or burnt-out corridor bulb and tap submit. Watch in real time when a technician is dispatched, when they arrive, and rate the job once done.",
            videoSrc: "/assets/whatsunity/maintenance.mp4",
            videoMobileSrc: "/assets/whatsunity/maintenance-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-maintenance.webp",
            posterMobileSrc: "/assets/whatsunity/poster-maintenance-mobile.webp",
            accentColor: "#d97706",
            dockLabel: "Maintenance",
            keyStats: [
              { value: "Photo", label: "Instant reporting", sub: "No phone tag or paper forms" },
              { value: "Live", label: "Status timeline", sub: "Assigned, scheduled, resolved" },
              { value: "Rating", label: "Resident sign-off", sub: "Quality guaranteed" },
            ],
            bulletPoints: [
              {
                title: "No more forgotten work orders",
                desc: "Every ticket has a timestamped audit trail so requests cannot be ignored or lost.",
              },
              {
                title: "Direct technician communication",
                desc: "Technicians receive the exact apartment location and photo before arriving.",
              },
            ],
          },
          {
            id: "scene-security",
            tag: "Fast Visitor Passes",
            title: "Send guest passes instantly.",
            titleHighlight: "Smooth, secure entry at the gate.",
            subtitle:
              "Expecting friends, family, or delivery couriers? Generate a secure entry pass in 3 seconds and send it over message. Gate security verifies them instantly with zero phone interruptions.",
            videoSrc: "/assets/whatsunity/qr-security.mp4",
            videoMobileSrc: "/assets/whatsunity/qr-security-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-qr-security.webp",
            posterMobileSrc: "/assets/whatsunity/poster-qr-security-mobile.webp",
            accentColor: "#059669",
            dockLabel: "Visitor Passes",
            keyStats: [
              { value: "3 Sec", label: "Pass creation", sub: "Share directly via any app" },
              { value: "Sub-50ms", label: "Gate verification", sub: "Works even if internet fails" },
              { value: "Safe", label: "Time-limited access", sub: "Automatic expiry" },
            ],
            bulletPoints: [
              {
                title: "No more calls from the security booth",
                desc: "Guards scan the guest's pass in a split second and open the gate automatically.",
              },
              {
                title: "Delivery passes with one tap",
                desc: "Provide couriers with quick single-entry passes for packages right to your door.",
              },
            ],
          },
        ],
      },
    },
    problem: {
      heading: "Building communication is broken across three separate worlds.",
      description:
        "Every resident has experienced the frustration of unorganized neighborhood groups and unresponsive property desks. WhatsUnity unifies daily living into one respectful, organized app.",
      frustrations: [
        {
          category: "The Group Chat Trap",
          title: "Your private phone number exposed to hundreds of strangers.",
          problemText:
            "WhatsApp and Facebook groups force you to share personal contact info. Important water shutoffs and elevator notices get buried under 80 messages of neighbor arguments and complaints.",
          solutionText:
            "WhatsUnity gives you verified in-app messaging where your phone number is never shown. Official building broadcasts stay permanently pinned at the top.",
        },
        {
          category: "The Black Hole Repair",
          title: "You called the superintendent on Tuesday. Nobody showed up.",
          problemText:
            "Maintenance requests sent over chat or phone calls leave zero paper trail. Technicians forget which apartment called, parts get delayed, and you are left wondering if anyone is coming.",
          solutionText:
            "Every report creates an auditable ticket with your photo and apartment number. You see who accepted the job, estimated arrival time, and sign off when it is done.",
        },
        {
          category: "The Gate Bottleneck",
          title: "Delivery drivers stuck at the security gate calling your phone.",
          problemText:
            "Security guards waste 5 minutes handwriting visitor licenses or calling your intercom while you are in a meeting. Visitors get frustrated waiting in traffic lines.",
          solutionText:
            "Send a digital entry pass in 3 seconds. The security guard verifies it instantly with a quick camera scan — keeping the gate secure and your visitors moving.",
        },
      ],
    },
    community: {
      heading: "A real community hub that respects your peace of mind.",
      subtitle:
        "Connect with people living on your floor, borrow a tool, or make shared decisions. Everything is designed to make building living feel friendly and organized.",
      highlights: [
        {
          tag: "Quiet by Design",
          title: "Muted channels and respectful notifications",
          description:
            "Casual neighbor discussions never trigger emergency alerts. You choose when to browse community recommendations and when to stay focused.",
        },
        {
          tag: "Verified Neighbors",
          title: "Zero anonymous trolls or outside spammers",
          description:
            "Every profile is tied to a verified apartment unit confirmed by building management. Only real neighbors living in your building can post.",
        },
        {
          tag: "Collective Voice",
          title: "Advisory polls for shared building choices",
          description:
            "Vote on courtyard garden upgrades, quiet hours, or gym equipment. See transparent percentage tallies with one vote counted per verified home.",
        },
      ],
      samplePoll: {
        question: "Should we install secure bicycle storage in the south courtyard?",
        totalVotes: "48 out of 52 households voted",
        options: [
          { text: "Yes, covered two-tier racks", percent: 73, votes: 35 },
          { text: "Keep current bike room", percent: 19, votes: 9 },
          { text: "Need more information on cost", percent: 8, votes: 4 },
        ],
      },
    },
    maintenance: {
      heading: "From broken to fixed in four transparent steps.",
      subtitle:
        "No more chasing staff or wondering if your message was read. Transparent status from the moment you tap submit.",
      steps: [
        {
          number: "1",
          title: "Snap & Describe",
          description: "Take a photo of the problem and add a quick description.",
          detail: "Your exact apartment number and building floor attach automatically.",
        },
        {
          number: "2",
          title: "Assigned to the Right Team",
          description: "Dispatched straight to plumbing, electrical, or general repairs.",
          detail: "See the technician's name and assigned timeframe right in the app.",
        },
        {
          number: "3",
          title: "Live Progress Updates",
          description: "Follow when parts are ordered, scheduled, and when work starts.",
          detail: "Direct message the technician if you need to coordinate entry.",
        },
        {
          number: "4",
          title: "Resident Sign-Off",
          description: "Confirm the repair is complete and rate the service.",
          detail: "Builds accountability and keeps management informed on quality.",
        },
      ],
    },
    homeContext: {
      heading: "Everything stays anchored to your home.",
      subtitle:
        "Most apps treat people like isolated accounts. WhatsUnity organizes everything around your actual living unit.",
      features: [
        {
          title: "One household, one unified subscription",
          desc: "Add your partner, roommates, or family members to your apartment unit at zero extra cost. Everyone has their own profile.",
        },
        {
          title: "Staff always know your location",
          desc: "Whether security is directing a delivery or a plumber is arriving for an inspection, your building and unit are clear from the start.",
        },
        {
          title: "Seamless history when you move",
          desc: "Building documents, past maintenance receipts, and community contacts stay organized without personal clutter.",
        },
      ],
    },
    stakeholders: {
      heading: "Loved by residents, trusted by the teams running your building.",
      subtitle:
        "When communication is organized, everyone's daily work gets easier — from the front desk to the board room.",
      roles: [
        {
          roleName: "For Residents & Families",
          headline: "Peace of mind and responsive services",
          benefit: "Get maintenance resolved fast, protect your phone privacy, and invite guests with zero friction.",
          points: [
            "Private phone numbers in community chats",
            "Real-time maintenance tracking with photos",
            "One-tap visitor and delivery gate passes",
            "Have your say in community polls",
          ],
        },
        {
          roleName: "For HOA Boards & Committees",
          headline: "Calm communication without chat drama",
          benefit: "Replace combative email threads with official announcements and verifiable resident sentiment.",
          points: [
            "Broadcast emergency alerts with read receipts",
            "Run official advisory polls with unit verification",
            "Complete audit logs of maintenance spending",
            "Transparent resident satisfaction ratings",
          ],
        },
        {
          roleName: "For Building Staff & Security",
          headline: "Clear work orders and quiet, orderly gates",
          benefit: "Zero paperwork, clear photos of repair issues, and 50ms barcode scans for fast gate lines.",
          points: [
            "Direct photo work orders on mobile",
            "Sub-50ms offline barcode & QR gate scanning",
            "No handwriting license plates or visitor logs",
            "Instant incident reporting to management",
          ],
        },
      ],
    },
    pricing: {
      heading: "Simple, transparent household pricing.",
      subtitle:
        "One flat fee per home. No per-person fees, no hidden visitor charges, and no surprise add-ons.",
      card: {
        tag: "Residential Household Plan",
        name: "One Home, One Subscription",
        priceNote: "Covers your entire household unit",
        priceDetail: "Billed through your building association or direct property subscription.",
        features: [
          "All household members included with verified logins",
          "Unlimited community chats & building channels",
          "Full maintenance work order reporting & live tracking",
          "Unlimited digital QR visitor and delivery passes",
          "Access to community polls and official announcements",
          "100% offline gate pass verification",
          "Dedicated resident mobile app and web access",
        ],
        pilotNote: "30-day zero-risk trial available for newly onboarding buildings and compounds.",
        ctaText: "Request building pilot for your community",
      },
    },
    evidence: {
      heading: "Real operational numbers from active residential communities.",
      subtitle:
        "WhatsUnity is tested in real compound environments with verified residents, gatekeepers, and technicians.",
      metrics: [
        { value: "0", label: "Lost Maintenance Tickets", sub: "100% audit log tracking" },
        { value: "< 50ms", label: "Gate QR Validation", sub: "Works with or without internet" },
        { value: "100%", label: "Phone Number Privacy", sub: "Zero personal contact exposure" },
        { value: "48h", label: "Community Setup", sub: "Quick property onboarding" },
      ],
      quote: {
        text: "Before WhatsUnity, our residents were arguing in an 800-person WhatsApp group while the maintenance office was drowning in paper slips. WhatsUnity gave residents a direct voice and gave staff complete accountability.",
        author: "Ahmed K.",
        role: "Residents Association Chairman",
        property: "Palm Hills Community Compound",
      },
    },
    onboarding: {
      heading: "Get started in three simple steps.",
      subtitle: "Joining your neighbors takes less than two minutes.",
      steps: [
        {
          title: "Download or open WhatsUnity",
          desc: "Available on iOS, Android, and directly in any modern web browser as a fast Web App.",
        },
        {
          title: "Enter your building invitation code",
          desc: "Your building manager or committee provides your unique household verification code.",
        },
        {
          title: "Connect with your neighbors",
          desc: "Say hello, explore building shortcuts, generate your first visitor pass, or report an issue.",
        },
      ],
      notOnboardedPrompt: {
        title: "Your building isn't on WhatsUnity yet?",
        desc: "You don't have to wait for management to discover it. Introduce WhatsUnity to your residents' committee or HOA board with our ready-to-share community presentation pack.",
        cta: "Request introduction pack for your building",
      },
    },
    faq: {
      heading: "Frequently Asked Questions",
      subtitle: "Clear answers to how WhatsUnity works for residents, homes, and community teams.",
      items: [
        {
          question: "What is WhatsUnity, and who is it designed for?",
          answer:
            "WhatsUnity is a residential communication and home service app designed specifically for residents living in apartment buildings, condominiums, and gated communities. It combines private neighbor chats, official building announcements, step-by-step maintenance reporting, and instant visitor gate passes into one unified home interface.",
        },
        {
          question: "Can I join WhatsUnity if my building has not signed up yet?",
          answer:
            "WhatsUnity operates on a verified property model to guarantee that only real neighbors and staff have access. If your building is not yet active, you can use our 'Bring WhatsUnity to My Building' feature to register your interest and download a shareable information pack for your building committee or property manager.",
        },
        {
          question: "Who can see my phone number and personal contact information?",
          answer:
            "Nobody in the public community can see your personal phone number. WhatsUnity uses a unit-based identity (e.g. 'Apartment 304'). When you chat with neighbors or vote in polls, your personal contact information remains completely hidden and private.",
        },
        {
          question: "What is the difference between general chat and building chat?",
          answer:
            "General chat is a social space for casual neighbor conversations, recommendations, and local community updates. Building chat and official announcement channels are reserved for verified operational updates, emergency alerts (like water shutoffs or power maintenance), and management notices.",
        },
        {
          question: "How does maintenance tracking work for residents?",
          answer:
            "When you spot a problem (such as a leaking pipe or broken lobby light), you take a photo in the app, select the category, and submit. A tracked ticket is created automatically. You receive status notifications when a technician is assigned, when work begins, and you sign off with a star rating when the repair is finished.",
        },
        {
          question: "How do visitor passes work at the gate or entrance?",
          answer:
            "You enter your visitor or delivery driver's name and tap 'Create Pass'. The app generates a cryptographic QR code that you can share via WhatsApp, SMS, or any messaging app. When the visitor arrives at the gate, security scans the code with their smartphone. It validates in under 50 milliseconds even if the gate internet is completely down.",
        },
        {
          question: "Are community polls binding or advisory?",
          answer:
            "Resident polls in WhatsUnity are structured advisory tools with one vote counted per verified home unit. They give building committees and HOA boards immediate, transparent data on resident consensus before budgeting or formal votes.",
        },
        {
          question: "What does the household subscription include, and who pays?",
          answer:
            "WhatsUnity operates on a household-inclusive model: one subscription covers all residents living in the home. In most communities, the building management or HOA covers the software subscription as part of regular service fees, giving all residents free access. If an individual home subscribes directly, all family members are included.",
        },
        {
          question: "What works if the internet connection goes down?",
          answer:
            "WhatsUnity is engineered with an offline-first architecture. Visitor QR passes can be validated at security gates 100% offline using cryptographic signatures. You can also compose maintenance requests and view downloaded building contacts offline; the app syncs automatically once your connection returns.",
        },
        {
          question: "Which platforms and languages are supported today?",
          answer:
            "WhatsUnity is available as a responsive Progressive Web App (accessible on any phone, tablet, or PC) as well as native mobile apps. Full bidirectional support is provided in English and Arabic, with localized terminology for US HOAs, UK blocks of flats, and Middle East compounds.",
        },
      ],
    },
    closingCta: {
      heading: "Ready for calmer, more connected building living?",
      subtitle:
        "Join the modern communities replacing chaotic group chats with organized, respectful resident communication.",
      ctaPrimary: "Bring WhatsUnity to your building",
      ctaSecondary: "Explore the live web app",
    },
  },
  ar: {
    meta: {
      title: "WhatsUnity — مجتمعك السكني بالكامل في تطبيق واحد",
      description:
        "كل ما يحتاجه السكان في مجتمعهم السكني — المحادثات، الإعلانات الرسمية، الصيانة، الخدمات، تصاريح الدخول، والتصويت وأكثر — دون التشتت بين جروبات واتساب، وأرقام هواتف، وتطبيقات متفرقة. منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة.",
      ogTitle: "WhatsUnity — مجتمعك السكني بالكامل في تطبيق واحد",
      ogDescription:
        "كل ما يحتاجه السكان في مجتمعهم السكني — المحادثات، الإعلانات الرسمية، الصيانة، الخدمات، تصاريح الدخول، والتصويت وأكثر — دون التشتت بين جروبات واتساب، وأرقام هواتف، وتطبيقات متفرقة.",
    },
    nav: {
      features: "المميزات",
      howItWorks: "كيف يعمل؟",
      communities: "لإدارات الكمبوند واتحاد الملاك",
      technical: "الهندسة المعمارية للنظام",
      pricing: "الأسعار",
      bringToBuilding: "جلب واتس يونيتي لمبناك",
      openApp: "دخول التطبيق",
    },
    hero: {
      titleLine1: "مجتمعك السكني بالكامل.",
      titleHighlight: "في تطبيق واحد.",
      subtitle:
        "كل ما يحتاجه السكان في مجتمعهم السكني — المحادثات، الإعلانات الرسمية، الصيانة، الخدمات، تصاريح الدخول، والتصويت وأكثر — دون التشتت بين جروبات واتساب، وأرقام هواتف، وتطبيقات متفرقة.",
      pricingMessage: "منزل واحد · اشتراك واحد · عائلتك بالكامل مشمولة.",
      ctaPrimary: "جلب واتس يونيتي لمبناك",
      ctaSecondary: "شاهد كيف يعمل",
      ctaTertiary: "لديك حساب بالفعل؟ ادخل للتطبيق",
      cinematic: {
        scrollHint: "قم بالتمرير للأسفل لاستكشاف التجربة",
        mobileScrollCue: "مرر لمشاهدة التفاصيل",
        scenes: [
          {
            id: "scene-overview",
            tag: "كل خدماتك في شاشة واحدة",
            title: "مجتمعك السكني بالكامل.",
            titleHighlight: "في واجهة رئيسية واضحة وبسيطة.",
            subtitle:
              "اختصارات سريعة لمحادثات العمارة، إعلانات الإدارة، بلاغات الصيانة، تصاريح الزوار، وأرقام الطوارئ المباشرة. لا داعي للبحث في سجلات المحادثات القديمة للتواصل مع فني الصيانة أو الأمن.",
            videoSrc: "/assets/whatsunity/phone.mp4",
            videoMobileSrc: "/assets/whatsunity/phone-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-phone.webp",
            posterMobileSrc: "/assets/whatsunity/poster-phone-mobile.webp",
            accentColor: "#059669",
            dockLabel: "شاشة الساكن",
            keyStats: [
              { value: "تطبيق واحد", label: "لكل المنزل", sub: "بديل لـ 5 تطبيقات مختلفة" },
              { value: "ضغطة واحدة", label: "لطوارئ المبنى", sub: "الأمن والصيانة دائماً معك" },
              { value: "100%", label: "سكان موثقون", sub: "أصحاب الوحدات الحقيقيون فقط" },
            ],
            bulletPoints: [
              {
                title: "هوية موثقة برقم وحدتك السكنية",
                desc: "رقم شقتك يرفق تلقائياً مع طلبات الصيانة وتصاريح الزوار بدون الحاجة لإعادة الشرح.",
              },
              {
                title: "استجابة فورية بدون انتظار شبكة الهاتف",
                desc: "التطبيق يعمل بسلاسة حتى في الأدوار السفلية أو مواقف السيارات ضعيفة التغطية.",
              },
            ],
          },
          {
            id: "scene-community",
            tag: "محادثات راقية وخصوصية تامة",
            title: "تواصل حقيقي مع جيرانك.",
            titleHighlight: "بدون فوضى جروبات الواتساب.",
            subtitle:
              "تعرف على جيرانك، اطلب ترشيحات الخدمات المنزلية، وشارك في استطلاعات الرأي المجتمعية. الإعلانات الرسمية الهامة كأعمال الصيانة وانقطاع المياه تبقى مثبتة في الأعلى ولا تضيع بين الرسائل.",
            videoSrc: "/assets/whatsunity/community.mp4",
            videoMobileSrc: "/assets/whatsunity/community-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-community.webp",
            posterMobileSrc: "/assets/whatsunity/poster-community-mobile.webp",
            accentColor: "#2563eb",
            dockLabel: "شات المبنى",
            keyStats: [
              { value: "خصوصية", label: "رقم هاتفك مخفي", sub: "حماية تامة للبيانات الشخصية" },
              { value: "تثبيت", label: "إعلانات الإدارة", sub: "لا تضيع وسط المحادثات" },
              { value: "استطلاع", label: "تصويت شفاف", sub: "صوت موثق لكل شقة سكنية" },
            ],
            bulletPoints: [
              {
                title: "رقم هاتفك الشخصي محمي تماماً",
                desc: "تحدث مع الجيران بحرية دون نشر رقم هاتفك لجميع سكان المجمع أو الغرباء.",
              },
              {
                title: "فصل الإعلانات الرسمية عن النقاشات اليومية",
                desc: "تنبيهات انقطاع المرافق أو مواعيد الصيانة تظل بارزة ولا تختفي وراء الرسائل العادية.",
              },
            ],
          },
          {
            id: "scene-maintenance",
            tag: "متابعة شفافة للبلاغات",
            title: "سجل بلاغ الصيانة بثوانٍ معدودة.",
            titleHighlight: "وتابع كل خطوة حتى انتهاء التصليح.",
            subtitle:
              "التقط صورة للعطل في ماسورة المياه أو إنارة المدخل واضغط إرسال. تابع على الفور متى تم توجيه الفني، متى وصل لمنزلك، وقيّم جودة العمل بعد الانتهاء.",
            videoSrc: "/assets/whatsunity/maintenance.mp4",
            videoMobileSrc: "/assets/whatsunity/maintenance-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-maintenance.webp",
            posterMobileSrc: "/assets/whatsunity/poster-maintenance-mobile.webp",
            accentColor: "#d97706",
            dockLabel: "طلبات الصيانة",
            keyStats: [
              { value: "صورة وتفاصيل", label: "إبلاغ فوري", sub: "بدون مكالمات أو فواتير ورقية" },
              { value: "مباشر", label: "متابعة الحالة", sub: "تم التعيين، جاري العمل، تم الحل" },
              { value: "تقييم", label: "تأكيد الساكن", sub: "ضمان جودة الصيانة" },
            ],
            bulletPoints: [
              {
                title: "لا مزيد من البلاغات المنسية",
                desc: "كل طلب صيانة يوثق برقم وتوقيت دقيق ولا يمكن تجاهله أو فقدانه في الدفاتر.",
              },
              {
                title: "تواصل مباشر وواضح مع الفني",
                desc: "الفني يعرف رقم وحدتك وتفاصيل المشكلة بالصورة قبل وصوله لباب منزلك.",
              },
            ],
          },
          {
            id: "scene-security",
            tag: "تصاريح زوار سريعة",
            title: "أرسل تصاريح الدخول لضيوفك فوراً.",
            titleHighlight: "مرور سلس وسريع من بوابات الأمن.",
            subtitle:
              "تنتظر أصدقاءك، عائلتك، أو مندوب التوصيل؟ أنشئ تصريح دخول مشفر في ثوانٍ وأرسله عبر أي تطبيق محادثة. أفراد الأمن يمسحون الباركود بكاميرا الهاتف ويفتحون البوابة مباشرة دون إزعاجك بمكالمات.",
            videoSrc: "/assets/whatsunity/qr-security.mp4",
            videoMobileSrc: "/assets/whatsunity/qr-security-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-qr-security.webp",
            posterMobileSrc: "/assets/whatsunity/poster-qr-security-mobile.webp",
            accentColor: "#059669",
            dockLabel: "تصاريح الزوار",
            keyStats: [
              { value: "3 ثوانٍ", label: "لإنشاء التصريح", sub: "مشاركة فورية عبر واتساب" },
              { value: "< 50ms", label: "سرعة مسح الباركود", sub: "يعمل حتى بدون اتصال إنترنت" },
              { value: "آمن", label: "صلاحية محددة بوقت", sub: "أنت من يحدد مدة الزيارة" },
            ],
            bulletPoints: [
              {
                title: "وداعاً لاتصالات البوابة المزعجة",
                desc: "فرد الأمن يمسح كود الزائر في جزء من الثانية دون تعطيل حركة المرور عند البوابة.",
              },
              {
                title: "تصاريح مخصصة لعمال التوصيل",
                desc: "تصريح دخول لمرة واحدة لضمان أمان عائلتك ووصول الطلبات سريعاً.",
              },
            ],
          },
        ],
      },
    },
    problem: {
      heading: "التواصل في المجمعات السكنية موزع بين ثلاث مشاكل يومية.",
      description:
        "عاش كل ساكن تجربة الرسائل العشوائية والشكاوى غير الموثقة في الجروبات. واتس يونيتي يجمع احتياجاتك اليومية في نظام موثق وراقٍ.",
      frustrations: [
        {
          category: "مأزق جروبات الواتساب",
          title: "رقم هاتفك الشخصي معروض لمئات الأشخاص الغرباء.",
          problemText:
            "مجموعات الواتساب تجبرك على مشاركة رقمك الخاص. إعلانات الصيانة الهامة ومواعيد انقطاع المياه تختفي تحت عشرات الرسائل والنقاشات المزعجة.",
          solutionText:
            "واتس يونيتي يوفر محادثات موثقة دون إظهار رقم هاتفك على الإطلاق. إعلانات إدارة المبنى الرسمية تبقى مثبتة في واجهة دائمة ومستقلة.",
        },
        {
          category: "بلاغ الصيانة المفقود",
          title: "أبلغت عن عطل المياه يوم الثلاثاء ولم يحضر أحد.",
          problemText:
            "تسجيل الشكاوى بالمكالمات الهاتفية أو الرسائل يضيع المسؤولية. الفني ينسى رقم الشقة وقطع الغيار تتأخر وأنت تنتظر دون معرفة الموعد.",
          solutionText:
            "كل بلاغ يتحول إلى تذكرة إلكترونية بالصورة ورقم الشقة. ترى اسم الفني المعين، موعد وصوله، وتؤكد انتهاء الإصلاح بنفسك في التطبيق.",
        },
        {
          category: "تعطيل بوابات الأمن",
          title: "مندوب التوصيل أو ضيوفك عالقون عند البوابة ويتصلون بهاتفك.",
          problemText:
            "أفراد الأمن يضيعون الوقت في تسجيل بيانات البطاقة ورقياً أو الاتصال بك أثناء اجتماع عمل مهم، مما يسبب طوابير انتظار عند مدخل الكمبوند.",
          solutionText:
            "أرسل باركود رقمي مشفر لزائرك خلال 3 ثوانٍ. فرد الأمن يمسح الكود بكاميرا الهاتف ويفتح البوابة فوراً مع توثيق وقت الدخول.",
        },
      ],
    },
    community: {
      heading: "مجتمع سكني متصل يحترم خصوصيتك وراحتك.",
      subtitle:
        "تواصل مع جيرانك، استعر أدوات منزلية، وشارك في القرارات المشتركة في بيئة موثقة ومحترمة.",
      highlights: [
        {
          tag: "هدوء وتوازن",
          title: "تنبيهات ذكية لا تزعج أوقات راحتك",
          description:
            "النقاشات العادية بين الجيران لا تطلق تنبيهات عاجلة. أنت من يحدد أوقات تصفح نقاشات المجتمع وأوقات التركيز.",
        },
        {
          tag: "سكان حقيقيون",
          title: "لا حسابات وهمية أو إعلانات مزعجة",
          description:
            "كل حساب مرتبط بوحدة سكنية حقيقية تم التحقق منها عبر إدارة المجمع. النقاشات حصرية لسكان المبنى فقط.",
        },
        {
          tag: "صوت مسموع",
          title: "استطلاعات رأي شفافة للقرارات المشتركة",
          description:
            "شارك برأيك في تحسينات الحدائق، مواعيد الهدوء، أو صيانة المصاعد مع احتساب صوت واحد موثق لكل وحدة سكنية.",
        },
      ],
      samplePoll: {
        question: "هل تؤيد تخصيص مساحة مغطاة ومؤمنة للدراجات في الفناء الداخلي؟",
        totalVotes: "شارك 48 ساكناً من أصل 52 وحدة",
        options: [
          { text: "نعم، نؤيد إنشاء مظلة مخصصة", percent: 73, votes: 35 },
          { text: "الإبقاء على الغرفة الحالية", percent: 19, votes: 9 },
          { text: "نحتاج لمزيد من تفاصيل التكلفة", percent: 8, votes: 4 },
        ],
      },
    },
    maintenance: {
      heading: "من العطل إلى الإصلاح في أربع خطوات موثقة.",
      subtitle: "لا مزيد من متابعة الفني بالاتصالات المتكررة. شفافية كاملة لكل خطوة صيانة.",
      steps: [
        {
          number: "1",
          title: "التقط الصورة واكتب الوصف",
          description: "صوّر المشكلة واكتب ملاحظة سريعة في التطبيق.",
          detail: "رقم وحدتك ودورك السكني يُرفقان تلقائياً مع البلاغ.",
        },
        {
          number: "2",
          title: "التوجيه للفني المختص",
          description: "يتم تحويل الطلب فوراً إلى فريق السباكة أو الكهرباء أو الصيانة العامة.",
          detail: "تشاهد اسم الفني والوقت المتوقع لوصوله مباشرة.",
        },
        {
          number: "3",
          title: "متابعة حية لحالة العمل",
          description: "تعرف متى تم توفير قطع الغيار ومتى بدأ الفني في العمل الفعلي.",
          detail: "إمكانية المراسلة المباشرة مع الفني لتنسيق موعد الدخول.",
        },
        {
          number: "4",
          title: "تأكيد الساكن والتقييم",
          description: "تأكيد إتمام الإصلاح ووضع تقييم لجودة العمل.",
          detail: "يحافظ على جودة الخدمة ويضمن محاسبة الشركات المسؤولة.",
        },
      ],
    },
    homeContext: {
      heading: "كل تفصيلة في التطبيق مرتبطة بوحدتك السكنية.",
      subtitle:
        "التطبيقات التقليدية تعاملك كحساب بريد إلكتروني معزول. واتس يونيتي ينظم كل شيء حول منزلك وعائلتك.",
      features: [
        {
          title: "اشتراك واحد يشمل جميع أفراد الأسرة",
          desc: "أضف أفراد عائلتك أو شريكك في السكن إلى الوحدة دون أي رسوم إضافية. كل فرد لديه حسابه الخاص.",
        },
        {
          title: "فريق الإدارة يعرف مكانك فوراً",
          desc: "سواء كان حارس الأمن يوجه مندوب توصيل أو فني الصيانة يبحث عن العطل، رقم عماراتك ووحدتك واضحان بدون لبس.",
        },
        {
          title: "سجل كامل ومحفوظ لمنزلك",
          desc: "إيصالات الصيانة السابقة ووثائق المبنى وجهات الاتصال الهامة تظل محفوظة ومنظمة دائماً.",
        },
      ],
    },
    stakeholders: {
      heading: "مصمم لراحة السكان، وموثوق من فرق إدارة العقار.",
      subtitle: "حين يكون التواصل منظماً، تصبح الحياة اليومية أسهل للجميع — من الساكن حتى مسؤول الأمن.",
      roles: [
        {
          roleName: "للسكان والعائلات",
          headline: "راحة بال واستجابة سريعة للخدمات",
          benefit: "إصلاح سريع للأعطال، خصوصية تامة لرقم الهاتف، ودخول سلس للضيوف دون انتظار.",
          points: [
            "إخفاء تام لأرقام الهواتف في المحادثات الجماعية",
            "متابعة دقيقة لبلاغات الصيانة مع الصور",
            "تصاريح دخول فورية بالباركود للزوار والتوصيل",
            "المشاركة في استطلاعات رأي السكان",
          ],
        },
        {
          roleName: "لمجالس الإدارة واتحاد الملاك",
          headline: "إدارة هادئة بدون مشاحنات الجروبات",
          benefit: "استبدل الرسائل العشوائية بإعلانات رسمية موثقة واستطلاعات رأي ملزمة وواضحة.",
          points: [
            "بث التنبيهات العاجلة مع إشعار قراءة فوري",
            "استطلاعات رأي موثقة بصوت واحد لكل شقة",
            "سجل إلكتروني كامل لمصروفات وبلاغات الصيانة",
            "متابعة شفافة لنسب رضا السكان عن الخدمات",
          ],
        },
        {
          roleName: "لفريق الصيانة والأمن",
          headline: "أوامر عمل واضحة وبوابات منظمة",
          benefit: "وداعاً للأوراق والدفاتر القديمة، صور واضحة للأعطال، ومسح سريع للباركود في 50 ملي ثانية.",
          points: [
            "أوامر صيانة مصورة ومحددة على هواتف الفنيين",
            "مسح باركود الزوار دون الحاجة لشبكة إنترنت",
            "الاستغناء عن تسجيل أرقام السيارات بالورقة والقلم",
            "إبلاغ فوري عن أي حوادث أو مشكلات طارئة",
          ],
        },
      ],
    },
    pricing: {
      heading: "باقة سكنية واضحة وشاملة لكل المنزل.",
      subtitle: "قيمة واضحة ومحددة لكل وحدة سكنية. بدون رسوم إضافية على أفراد العائلة أو تصاريح الزوار.",
      card: {
        tag: "الباقة السكنية الشاملة",
        name: "اشتراك واحد لكل وحدة سكنية",
        priceNote: "يغطي كامل أفراد الأسرة داخل الوحدة",
        priceDetail: "يتم تحصيله عادة عبر إدارة المجمع أو الاشتراك السكني المباشر.",
        features: [
          "شامل جميع أفراد الأسرة بحسابات تسجيل دخول موثقة",
          "محادثات مجتمعية غير محدودة وقنوات خاصة بالعمارة",
          "نظام كامل لتسجيل ومتابعة بلاغات الصيانة بالصور",
          "تصاريح دخول رقمية غير محدودة للضيوف ومندوبي التوصيل",
          "المشاركة في استطلاعات الرأي وإعلانات الإدارة",
          "فحص تصاريح الزوار عند البوابات حتى بدون اتصال إنترنت",
          "تطبيق مخصص للهواتف مع إمكانية التصفح من أي متصفح",
        ],
        pilotNote: "فترة تجريبية مجانية لمدة 30 يوماً للمجمعات والعمارات السكنية الجديدة.",
        ctaText: "طلب فترة تجريبية لمجمعك السكني",
      },
    },
    evidence: {
      heading: "أرقام تشغيلية حقيقية من مجمعات سكنية نشطة.",
      subtitle: "واتس يونيتي يعمل ميدانياً في مجمعات سكنية حقيقية بين السكان، أفراد الأمن، وفرق الصيانة.",
      metrics: [
        { value: "0", label: "بلاغات صيانة مفقودة", sub: "توثيق رقمي كامل لكل خطوة" },
        { value: "< 50ms", label: "سرعة مسح باركود الزائر", sub: "يعمل مع أو بدون إنترنت" },
        { value: "100%", label: "حماية لأرقام الهواتف", sub: "لا تظهر للمستخدمين الآخرين" },
        { value: "48 ساعة", label: "لتجهيز المجمع للعمل", sub: "تهيئة سريعة وسلسة للوحدات" },
      ],
      quote: {
        text: "قبل واتس يونيتي، كان السكان يتجادلون في جروب واتساب يضم أكثر من 800 شخص، ومكتب الصيانة كان غارقاً في فوضى الأوراق. النظام أعطى السكان وسيلة محترمة وواضحة، وجعل كل خطوة صيانة موثقة ومحسوبة.",
        author: "م. أحمد كمال",
        role: "رئيس مجلس اتحاد الشاغلين",
        property: "أحد المجمعات السكنية بالسادس من أكتوبر",
      },
    },
    onboarding: {
      heading: "ابدأ مع جيرانك في ثلاث خطوات سهلة.",
      subtitle: "الانضمام لمجتمعك السكني يستغرق أقل من دقيقتين.",
      steps: [
        {
          title: "افتح تطبيق واتس يونيتي",
          desc: "متاح على أجهزة آيفون، أندرويد، أو مباشرة من أي متصفح إنترنت كتطبيق ويب سريع.",
        },
        {
          title: "أدخل كود التحقق الخاص بعمارتك",
          desc: "تحصل على كود الدعوة المعتمد من إدارة المجمع أو اتحاد ملاك العمارة.",
        },
        {
          title: "تواصل مع جيرانك واستمتع بالخدمات",
          desc: "رحب بجيرانك، استخرج أول تصريح لزوارك، أو سجل بلاغ صيانة لوحدتك.",
        },
      ],
      notOnboardedPrompt: {
        title: "عمارتك أو مجمعك غير مسجل في واتس يونيتي بعد؟",
        desc: "لا داعي للانتظار حتى تكتشف الإدارة النظام بمفردها. قدم واتس يونيتي لمجلس إدارة المبنى أو اتحاد الشاغلين من خلال ملف العرض التقديمي الجاهز للمجمعات.",
        cta: "طلب الملف التعريفي الخاص بالمجمعات",
      },
    },
    faq: {
      heading: "الأسئلة الشائعة حول النظام السكني",
      subtitle: "إجابات واضحة ومباشرة حول كيفية عمل واتس يونيتي للسكان والمجمعات.",
      items: [
        {
          question: "ما هو واتس يونيتي ولمن تم تصميمه؟",
          answer:
            "واتس يونيتي هو نظام سكني متكامل صُمم خصيصاً لسكان العمارات والمجمعات السكنية (الكمبوندات). يجمع بين محادثات الجيران الراقية، الإعلانات الرسمية للإدارة، متابعة الصيانة خطوة بخطوة، وتصاريح الزوار السريعة بالباركود في تطبيق واحد سهل الاستخدام.",
        },
        {
          question: "هل يمكنني الانضمام إذا كانت عمارتي غير مسجلة في النظام بعد؟",
          answer:
            "يعتمد واتس يونيتي على نموذج الوحدات السكنية الموثقة لضمان أن كل من في التطبيق هم جيران حقيقيون. إذا كانت عمارتك غير مسجلة، يمكنك استخدام زر 'جلب واتس يونيتي لمبناك' لتسجيل رغبتك وتحميل ملف العرض التقديمي لمشاركته مع اتحاد الملاك أو الإدارة.",
        },
        {
          question: "من يمكنه رؤية رقم هاتفي وبياناتي الشخصية؟",
          answer:
            "لا يمكن لأي ساكن في المجتمع رؤية رقم هاتفك الشخصي. يعتمد النظام على هوية الشقة (مثل: شقة 304). عند التحدث في قنوات المجتمع أو التصويت في الاستطلاعات، تظل معلومات اتصالك الشخصية مخفية ومحمية تماماً.",
        },
        {
          question: "ما الفرق بين المحادثة العامة ومحادثة العمارة؟",
          answer:
            "المحادثة العامة مخصصة للنقاشات الودية والترشيحات اليومية وخدمات الجيران. بينما محادثة العمارة وقنوات الإعلانات مخصصة للتنبيهات التشغيلية الرسمية وطوارئ الصيانة (مثل مواعيد انقطاع المياه أو صيانة المصاعد) لضمان عدم ضياع التنبيهات المهمة.",
        },
        {
          question: "كيف تعمل متابعة بلاغات الصيانة في التطبيق؟",
          answer:
            "عند حدوث أي عطل، تلتقط صورة من التطبيق وتضغط إرسال. يُسجل بلاغ صيانة برقم ووقت محددين ويتم إخطار الساكن فور تعيين الفني، عند بدء العمل، وعند الانتهاء، مع إمكانية تقييم جودة الخدمة لضمان أفضل مستوى صيانة.",
        },
        {
          question: "كيف تعمل تصاريح دخول الزوار عند البوابات؟",
          answer:
            "تكتب اسم الزائر أو شركة التوصيل وتضغط 'إنشاء تصريح'. ينشئ التطبيق باركود QR سريع يمكنك مشاركته عبر واتساب أو الرسائل. عند وصول الزائر، يمسح فرد الأمن الكود بكاميرا الهاتف ويفتح البوابة في أقل من 50 ملي ثانية حتى لو كان الإنترنت مقطوعاً تماماً عند البوابة.",
        },
        {
          question: "هل استطلاعات الرأي في التطبيق ملزمة أم استرشادية؟",
          answer:
            "استطلاعات الرأي في التطبيق هي أدوات استرشادية منظمة تعتمد على صوت واحد موثق لكل وحدة سكنية، مما يوفر لإدارة المجمع واتحاد الشاغلين مؤشراً دقيقاً وشفافاً حول رأي الأغلبية قبل اتخاذ القرارات المالية أو الإدارية.",
        },
        {
          question: "ماذا يشمل الاشتراك السكني ومن يدفعه؟",
          answer:
            "يعتمد واتس يونيتي نموذج الشمولية لكل منزل: اشتراك واحد يغطي كل الساكنين داخل الوحدة. في معظم المجمعات، تقوم إدارة الكمبوند أو اتحاد الشاغلين بالتعاقد وتغطية النظام كجزء من خدمات الصيانة العامة ليكون مجانياً بالكامل للسكان.",
        },
        {
          question: "ما الذي يعمل في التطبيق إذا انقطع اتصال الإنترنت؟",
          answer:
            "صُمم واتس يونيتي بهندسة معمارية محلية (Offline-First). مسح تصاريح الزوار والتحقق من صلاحيتها عند البوابات يعمل بنسبة 100% دون الحاجة لأي اتصال بالإنترنت. كما يمكنك كتابة بلاغات الصيانة واستعراض أرقام الطوارئ ويقوم التطبيق بالمزامنة فور عودة الاتصال.",
        },
        {
          question: "ما هي الأجهزة واللغات المدعومة اليوم؟",
          answer:
            "النظام متاح كتطبيق ويب سريع PWA يعمل على جميع الهواتف الذكية وأجهزة الكمبيوتر، بالإضافة إلى تطبيقات الهواتف الذكية. يدعم اللغتين العربية والإنجليزية بالكامل باتجاه قراءة كامل من اليمين لليسار ومن اليسار لليمين.",
        },
      ],
    },
    closingCta: {
      heading: "مستعد لحياة سكنية أكثر هدوءاً وتنظيماً؟",
      subtitle:
        "انضم للمجتمعات السكنية الحديثة التي استبدلت فوضى المحادثات العشوائية بنظام تواصل سكني راقٍ وموثوق.",
      ctaPrimary: "جلب واتس يونيتي لمبناك",
      ctaSecondary: "استكشف تطبيق الويب",
    },
  },
};
