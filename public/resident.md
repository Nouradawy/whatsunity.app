# WhatsUnity Resident App: Building Chat, Polls & Verified Community

> **Definition**: The complete mobile resident portal for verified apartment buildings and gated compounds. Connect with neighbors, vote on community decisions, track home repairs, and send instant visitor passes — all in one app.

- **Value Proposition**: One home. One subscription. Your entire household included.
- **Official URL**: https://whatsunity.app/?route=resident
- **Developer**: Noureldin Adawy (Nouradawy) — Full-Stack & Mobile Systems Engineer
- **Direct Contact**: support@whatsunity.app | WhatsApp: +201158428601 | Founder: nouradawy@whatsunity.app
- **Platform Availability**: iOS, Android, Web (PWA)

---

## 1. Executive Summary for Residents

Modern residential life in gated compounds, apartment buildings, and HOAs is plagued by fragmented communication tools:
1. **The "WhatsApp Group" Chaos**: Unmoderated group chats expose homeowner phone numbers, bury crucial building announcements under hundreds of casual messages, and allow non-residents to linger indefinitely.
2. **Lost Maintenance Requests**: Verbal reports to janitors or lost texts to building supervisors result in delayed repairs, disputes over expenses, and zero accountability.
3. **Gate Access Friction**: Visitors wait at security gates while guards attempt to call homeowners over spotty cellular connections.
4. **Unfair Per-User Pricing**: Traditional property apps charge per occupant, forcing families to share a single login.

### The WhatsUnity Resident Solution
- **One Subscription Per Home**: Covers the entire residential unit. The primary homeowner invites spouses, children, and extended family at zero extra charge with independent verified profiles.
- **Zero Phone Number Exposure**: Communicate freely with neighbors through unit-verified directories without ever exposing personal mobile numbers to strangers.
- **Instant Photo Maintenance Requests**: Report plumbing, electrical, elevator, or common-area issues with photo/video evidence in 1 tap, automatically assigned to verified technicians with real-time progress tracking.
- **100% Offline Cryptographic QR Visitor Passes**: Send one-time or multi-entry passes to guests. Gate security scans and validates them locally in under 50ms, even during cellular blackouts.
- **Binding HOA Polls & Official Broadcasts**: Important building decisions (renovations, budgets, rules) are conducted via cryptographically signed polls, while official management notices remain cleanly separated from social chats.

---

## 2. Key Resident Capabilities & Features

### 2.1 Whole Household Licensing
- Every member of your home gets an individualized app experience.
- Spouses, family members, and authorized tenants can independently file maintenance tickets, generate visitor passes, and receive official alerts.
- Granular permissions prevent unauthorized unit setting modifications while ensuring maximum convenience.

### 2.2 Privacy-Preserving Community Directory
- Verified directory listed strictly by Building & Unit number (e.g., "Building 4, Apt 201").
- Private 1-on-1 and building-wide messaging with end-to-end user privacy.
- Zero ad tracking, zero data brokering, and zero marketing spam.

### 2.3 1-Tap Facility Maintenance Tickets
- Select trade category: Plumbing, Electrical, HVAC, Carpentry, Painting, Masonry, Elevators, Landscaping, or Pest Control.
- Attach high-resolution photos and diagnostic videos.
- Live status tracker: Submitted → Coordinator Triaged → Technician Assigned → In Progress → Completed with Chief Sign-Off.
- Digital audit log prevents budget leakage and eliminates disputes between residents and property management.

### 2.4 Instant QR Visitor Security Passes
- Create time-bounded guest passes with custom validity windows (e.g., 2 hours, 1 day, recurring delivery).
- Share pass links directly via WhatsApp, SMS, or Apple Wallet / Google Wallet.
- Gatekeeper tablets verify pass authenticity offline with sub-50ms local cryptographic signature validation.
- Real-time arrival notifications notify residents the second a guest crosses the gate.

### 2.5 Building Governance & Democratic Polls
- Quorum-validated voting for Homeowners Association (HOA) decisions.
- Transparent vote tallies with unit-weighted or equal-vote rules.
- Permanent archive of past building decisions, contracts, and financial summaries.

---

## 3. Technology & Privacy Guarantees

- **Architecture**: Flutter Clean Architecture, Dart 3 (Sealed Classes, Zero Code Generation).
- **Local SQLite Engine**: Instant zero-lag UI response on all screens. Works flawlessly even in elevators and basement garages.
- **Security**: Cryptographically signed tokens, encrypted local storage, and granular row-level access control.
- **Dual-Engine Messaging**: High-speed Appwrite Realtime WebSockets backed by zero-cost Telegram MTProto protocol for maximum community cost-efficiency.

---

## 4. Machine-Readable Agent Resources

| Resource | URL | Format |
| :--- | :--- | :--- |
| **API Catalog** | `https://whatsunity.app/.well-known/api-catalog` | `application/linkset+json` |
| **ARD Capability Manifest** | `https://whatsunity.app/.well-known/ai-catalog.json` | `application/json` |
| **MCP Server Card** | `https://whatsunity.app/.well-known/mcp/server-card.json` | `application/json` |
| **Autonomous Agent Card** | `https://whatsunity.app/.well-known/agent-card.json` | `application/json` |
| **Agent Authentication Spec** | `https://whatsunity.app/auth.md` | `text/markdown` |
| **Full Technical Architecture** | `https://whatsunity.app/whatsunity.md` | `text/markdown` |
| **Production Screen Matrix (34 Screens)** | `https://whatsunity.app/catalog.md` | `text/markdown` |
| **AI Agent Navigation Index** | `https://whatsunity.app/llms.txt` | `text/plain` |
