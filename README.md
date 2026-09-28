# WhatsUnity — Residential Compound Operating System

[![Domain](https://img.shields.io/badge/Domain-whatsunity.app-10b981?style=for-the-badge&logo=vercel)](https://whatsunity.app)
[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Flutter & Dart 3](https://img.shields.io/badge/Mobile_App-Flutter_Dart_3-02569B?style=for-the-badge&logo=flutter)](https://flutter.dev)
[![Clean Architecture](https://img.shields.io/badge/Architecture-Offline--First_Clean_Arch-047857?style=for-the-badge)](https://whatsunity.app)

**WhatsUnity** (`whatsunity.app`) is the official landing page and interactive showcase platform for the **WhatsUnity Residential Compound Operating System** — an enterprise-grade, offline-first operating system engineered in Flutter & Dart 3 for modern gated communities and luxury residential compounds.

---

## 🌟 Key Highlights

- **One Home, One Subscription, Whole Family Included**: Per-unit licensing model instead of per-user billing.
- **100% Offline Gatekeeping**: Cryptographically signed QR visitor passes verified locally in sub-50ms via SQLite Local Master.
- **Dual-Engine Messaging Architecture**: Zero-cost Telegram MTProto community channel alongside ultra-low latency Appwrite Realtime WebSockets.
- **9-Role Operational Governance**: Residents, Gatekeepers, Patrol Guards, Head of Security, Coordinators, Technicians, Supervisors, Chief Engineers, and Compound General Managers.
- **Interactive Product Catalog**: Comprehensive slide decks and before/after comparisons demonstrating compound operations.
- **Interactive Presentation Deck**: Interactive slide viewer showcasing the entire engineering architecture and business proposal.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/) & [Motion One](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com) with custom domain `whatsunity.app`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nouradawy/whatsunity.app.git

# Navigate into the project
cd whatsunity.app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌐 Custom Domain & Vercel Configuration

This repository is configured out-of-the-box for deployment on **Vercel** with the custom domain `whatsunity.app`:

1. Import this repository into [Vercel Dashboard](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Under **Project Settings > Domains**, add:
   - `whatsunity.app`
   - `www.whatsunity.app`
6. Configure your DNS records (A record pointing to `76.76.21.21` or CNAME `cname.vercel-dns.com`).

---

## 📄 License & Attribution

Designed and engineered by **Noureldin Adawy (نورالدين العدوي)**.  
Personal Portfolio: [https://www.nouradawy.tech](https://www.nouradawy.tech)
