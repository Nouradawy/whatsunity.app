# WhatsUnity: Interactive 34-Screen Production & Features Catalog
> **Residential Compound Operating System | One Home. One Subscription. Your Entire Household Included.**  
> Official System URL: https://whatsunity.app | Mobile Architecture: Flutter (Dart 3), Clean Architecture, SQLite Local Master, Appwrite Cloud BaaS, Telegram MTProto API.

This document serves as the authoritative, machine-readable feature catalog of all **34 production screens** within the WhatsUnity ecosystem, organized into 6 core operational roles.

---

## 34-Screen Operational Taxonomy & Table of Contents

- [Section 01: Community Hub (Screens 01 to 07)](#section-01-community-hub)
- [Section 02: Security & Operations Suite (Screens 08 to 22)](#section-02-security--operations-suite)
- [Section 03: Facility Engineering & Maintenance (Screens 23 to 28)](#section-03-facility-engineering--maintenance)
- [Section 04: Community Manager & Governance (Screens 29 to 31)](#section-04-community-manager--governance)
- [Section 05: Plans, Licensing & Editions (Screen 32)](#section-05-plans-licensing--editions)
- [Section 06: Administrative Governance Console (Screens 33 and 34)](#section-06-administrative-governance-console)

---

## Section 01: Community Hub
*Bringing residents, homeowners, and building neighbors together — social feeds, encrypted chat, democratic polls, and financial transparency.*

### Screen 01: Home Feed & Social Publishing
- **Target Persona:** Resident / Homeowner / Household Family Member
- **Role Key:** `community`
- **Purpose:** The resident landing hub: a live social feed unifying compound notices, personal posts, and rich media with instant top shortcuts to critical daily services.
- **Key Features:**
  - **Quick Service Shortcuts:** Instant top-row access to Maintenance filing, Gate Passes, Housekeeping, and Building Directory.
  - **Resident Post Creation:** Publish compound updates, community questions, or announcements in one tap.
  - **Multi-Media Carousel:** Swipeable photo galleries with pagination indicators and high-resolution viewing.
  - **Role-Badged Engagement:** Likes, comments, and shares displaying verified role badges (e.g., "Owner", "Tenant") to prevent impersonation.
- **Underlying Engine:** `FeedCubit`, SQLite local caching, optimistic mutations, real-time WebSocket / MTProto sync.

### Screen 02: Social Feed — State Transitions & Empty States
- **Target Persona:** Resident / Onboarding User
- **Role Key:** `community`
- **Purpose:** Thoughtful UX state management handling empty feeds, loading skeletons, offline states, and live re-connection.
- **Key Features:**
  - **Real-Time Streaming:** Instant streaming of fresh posts with an engaging call-to-action to spark the first community discussion.
  - **Residents & Staff Privacy:** Closed-perimeter network guaranteeing that all content remains strictly within compound boundaries.
  - **Bilingual AR / EN:** 1-tap language toggle and dark mode support with tailored typography (Cairo / Inter) and authentic RTL layout.
  - **Effortless Pull-to-Refresh:** Smooth gesture-based refresh fetching the latest reactions without full screen rebuilds.

### Screen 03: Community Messaging Channels
- **Target Persona:** Resident / Community Admin
- **Role Key:** `community`
- **Purpose:** Dual-channel communication system providing compound-wide announcements alongside quiet, building-isolated discussions.
- **Key Features:**
  - **Compound General Chat:** Unified real-time channel for all compound residents featuring verified role badges.
  - **Private Building Group:** Exclusive, quiet chat room isolated strictly to residents of the specific building unit.
  - **Rich Attachment Suite:** In-app instant camera snaps, gallery photo albums, PDF document attachments, and voice notes.
  - **In-Chat Interactive Polls:** Native voting bubbles embedded directly in conversation streams with dedicated section navigation to prevent buried decisions.

### Screen 04: Building Chat & Financial Ledger
- **Target Persona:** Building Neighbors / Floor Treasurer
- **Role Key:** `community`
- **Purpose:** Transforms building group chat into an auditable financial management hub, eliminating dues disputes.
- **Key Features:**
  - **Net Building Balance Banner:** Prominent live aggregated building treasury balance displayed at the top of the chat.
  - **Live Accounting Ledger:** Transparent real-time stream of all building dues collections (Cash In) and vendor expenditures (Cash Out).
  - **Improvement Initiatives:** Collaboratively propose building renovation projects and co-fund them with neighbors.
  - **Automated Invoicing & Reminders:** Automated issuance of monthly cleaning/elevator dues with overdue status tracking.
  - **Arrears Reconciliation:** Track outstanding payments with verified ledger reconciliation aimed at zero overdue dues.

### Screen 05: Community Polls & Decision Hub
- **Target Persona:** Homeowners / Compound Management
- **Role Key:** `community`
- **Purpose:** Democratic, auditable decision-making from initial proposal to binding outcome.
- **Key Features:**
  - **Flexible Question Builder:** Clear inquiry creation with support for up to 10 distinct customizable voting choices.
  - **Configurable Deadlines:** Flexible poll expiration timers (1 day, 3 days, 7 days, or a custom calendar cutoff date).
  - **Live Percentage Telemetry:** Real-time percentage bars, voter participation avatars, and verified tally counts.
  - **Contextual Debate Thread:** Integrated discussion thread attached directly to the poll to exchange viewpoints prior to deadline.

### Screen 06: Maintenance Reports & Resident Filing
- **Target Persona:** Resident / Front Desk
- **Role Key:** `community`
- **Purpose:** Streamlined ticketing interface allowing residents to submit, track, and rate maintenance issues.
- **Key Features:**
  - **State-Filtered Tabs:** Multi-tab triage view (All, New, In Progress, Resolved) with real-time numeric badges.
  - **Color-Coded Service Cards:** Unique reference ID (#MNT-XXXX), trade specialization color coding (Plumbing, Electrical, HVAC), and timestamps.
  - **Quick Ticket Creation:** Simplified submission wizard to capture photos, record voice descriptions, and pick room locations.
  - **Visual Trade Categorization:** Intuitive iconography ensuring accurate categorization and prompt dispatching.

### Screen 07: Building Directory & Verified Contacts
- **Target Persona:** Resident / Security Guard
- **Role Key:** `community`
- **Purpose:** Privacy-preserving smart building phonebook and essential emergency contact directory.
- **Key Features:**
  - **Building-Isolated Neighbors:** Restricts listing strictly to verified neighbors within the user's assigned building.
  - **Detailed Resident Cards:** Resident name, apartment number, residency status (Owner/Tenant), and profile initials.
  - **Emergency & Service Speed-Dial:** Instant quick-access tabs (Neighbors, Gate Security, Maintenance Desk, Emergency).
  - **Direct Calling:** 1-tap phone and WhatsApp launcher without requiring manual number entry.

---

## Section 02: Security & Operations Suite
*Mission-critical security governance covering Gatekeepers, Mobile Patrols, Supervisors, and Head of Security — 100% offline cryptographic QR verification, overstay detection, and NFC checkpoint tracking.*

### Screen 08: Gatekeeper Overstayed Visitors Telemetry
- **Target Persona:** Gate Security Guard (Gatekeeper)
- **Role Key:** `security`
- **Purpose:** Primary command screen for gate guards to inspect active visitors, catch parking/stay violations, and query units.
- **Key Features:**
  - **Real-Time Overstay Telemetry:** High-contrast red badges highlighting couriers or guests who exceeded their authorized duration, complete with an elapsed timer and 1-tap "Resolve".
  - **Instant Unit Search:** Sub-second search by building number (e.g. "Bldg 34") pulling resident directory and security directives.
  - **Observation & Risk Flags:** Visually flags individuals under security watch with associated risk scores.
  - **Resident Directives Preview:** Displays specific host resident instructions (e.g., "Call host on arrival") with visual gate reference.

### Screen 09: Unit Directives & Host Resident Verification
- **Target Persona:** Gatekeeper
- **Role Key:** `security`
- **Purpose:** Detailed host verification ensuring that arriving guests are cleared by verified unit owners.
- **Key Features:**
  - **Verified Host Credentials:** Owner/Tenant contact status, active home authorization, and phone number.
  - **Historical Visit Log:** Historical entries of frequent delivery couriers and contractors cleared for this unit.
  - **Custom Gate Directives:** Specific gate instructions inputted by the resident (e.g., "Do not allow delivery without phone confirmation").
  - **1-Tap Entry Authorization:** Authorize gate entry locally and update gate counters with sub-50ms latency.

### Screen 10: Courier Protocol & Gate Directives
- **Target Persona:** Gatekeeper
- **Role Key:** `security`
- **Purpose:** Rapid processing protocol for commercial delivery drivers dropping average gate check time to under 3 seconds.
- **Key Features:**
  - **Courier Company Selection:** 1-tap identification for major delivery fleets (Amazon, Noon, Talabat, Mrsool).
  - **License Plate Capture:** Fast license plate recording with dual Arabic/English alphanumeric keyboard support.
  - **Automated 15-Minute Countdown:** System assigns a 15-minute countdown clock to enforce quick delivery turnarounds.
  - **Unit Navigation Assistance:** Clear directional instructions guiding the driver to the correct building lobby and parking stall.

### Screen 11: Offline Cryptographic QR Pass Validation
- **Target Persona:** Gatekeeper
- **Role Key:** `security`
- **Purpose:** Zero-connectivity QR pass validation executing complete cryptographic signature checks in under 0.05s on local SQLite.
- **Key Features:**
  - **Sub-50ms Offline Verification:** Validates RSA/ECDSA digital signatures, expiration timestamps, and compound IDs without network access.
  - **Integrated Guard Alerts:** Flashes custom warning banners detailing host instructions immediately upon scanning.
  - **Configurable Stay Quotas:** Preset authorized duration buttons (15, 30, 45, 60 minutes) for automatic countdown calculation.
  - **ID Document Capture:** Built-in camera capture for the front and back of national IDs or driving licenses.

### Screen 12: Gate Pass Operations & Security Details
- **Target Persona:** Gatekeeper / Security Supervisor
- **Role Key:** `security`
- **Purpose:** Full audit record of a specific visitor pass, ingress/egress timestamps, and resident approval signatures.
- **Key Features:**
  - **Guest & Host Profiles:** Full name, ID number, vehicle model, visit purpose, and destination unit.
  - **Precision Timestamps:** Exact millisecond log of pass creation, gate arrival, and gate departure.
  - **Pass Extension History:** Audit trail of any time extensions approved by the resident or security supervisor.
  - **Immediate Revocation & Blacklist:** 1-tap pass revocation or global blacklist flag propagation.

### Screen 13: Overstay Protocol & Patrol Tactical Dispatch
- **Target Persona:** Gatekeeper / Patrol Guard
- **Role Key:** `security`
- **Purpose:** Incident response protocol triggered when a visitor exceeds authorized duration.
- **Key Features:**
  - **Automated Overstay Detection:** Continuous delta calculation between entry timestamp and authorized stay limit.
  - **Direct Host Inquiry:** 1-tap call to the host resident to verify whether the visitor is still on premises.
  - **Stay Extension (Extend 2h):** One-click 2-hour duration extension upon resident confirmation, resetting the alarm.
  - **Patrol Dispatch:** Dispatches mobile patrol to the unit location while opening a shared tactical chat room.

### Screen 14: Pass Observation & Threat Alert Matrix
- **Target Persona:** Gate Staff / Security Command
- **Role Key:** `security`
- **Purpose:** Threat intelligence layer enabling guards to flag suspicious behavior and circulate alerts across all gates.
- **Key Features:**
  - **Active Surveillance Flagging:** Activates red observation status synchronized across all guard mobile terminals.
  - **10 Standardized Threat Categories:** Pre-defined classifications (Loitering, Attempted Intrusion, Vandalism, Unregistered Vehicle, Trespassing, etc.).
  - **1-Tap Gate Emergency Alarms:** Floating SOS button for immediate alerts regarding gate breaches or physical altercations.
  - **Hardware Incident Logging:** Instant malfunction reporting for automatic barriers, RFID antennas, or CCTV cameras.

### Screen 15: Gatekeeper Manual Visitor Entry
- **Target Persona:** Gatekeeper
- **Role Key:** `security`
- **Purpose:** Manual intake workflow for unscheduled visitors, emergency contractors, or guests without smartphones.
- **Key Features:**
  - **Phone-Based Auto-Fill:** Typing the phone number instantly retrieves visitor identity and prior entry history.
  - **Unit Direct Linking:** Direct association with building and apartment number for permanent audit records.
  - **Bilingual License Plate Input:** Native keyboard layout supporting Arabic and Latin characters (e.g. ABC 1234 / أ ب ج ١٢٣٤).
  - **Local ID Photo Archival:** Stores front/rear photo evidence in local encrypted database storage.

### Screen 16: Gate Guard Shift Portal
- **Target Persona:** Gatekeeper
- **Role Key:** `security`
- **Purpose:** Guard shift management, gatepost tracking, and shift changeover verification.
- **Key Features:**
  - **Live Duty Stopwatch & Gate Indicator:** Displays "ON DUTY" status, elapsed shift time, and assigned gatepost.
  - **Co-Guard Roster:** Roster of fellow guards on duty during the same shift for seamless handover.
  - **Upcoming Shifts & Leave Requests:** View upcoming roster schedule and submit shift swap or leave requests.
  - **Shift Activity Logbook:** Live log of all gate operations, entries, and incidents handled during the guard's shift.

### Screen 17: Security Incident Dispatch & Alarm Room
- **Target Persona:** Gatekeeper / Security Supervisor
- **Role Key:** `security`
- **Purpose:** Rapid triage and emergency dispatch console for on-site security incidents.
- **Key Features:**
  - **Geo-Located Incident Placement:** Tags incidents to specific building sectors, gates, or perimeter coordinates.
  - **Watermarked Photo Evidence:** Captures immediate incident photos watermarked with timestamp, gate number, and user ID.
  - **Severity Classification:** L1 (Critical/Emergency), L2 (High), L3 (Routine).
  - **Instant Patrol Dispatch:** Assigns nearest patrol guard with route guidance and direct push notification.

### Screen 18: Gate Activity Logbook & Access Audit
- **Target Persona:** Security Supervisor / Compound Auditor
- **Role Key:** `security`
- **Purpose:** Tamper-evident historical audit log of every pedestrian, vehicle, and delivery transit.
- **Key Features:**
  - **Sub-Second Timestamping:** Chronological ledger logging entry and exit times with millisecond precision.
  - **Multi-Parametric Filter:** Search by vehicle plate, visitor name, unit number, or gate identifier.
  - **Daily Transit Metrics:** Aggregated counters for total entries, unique visitors, and regular contractors.
  - **Encrypted Export:** Export audit logs to CSV/Excel for regulatory compliance and police investigations.

### Screen 19: Mobile Patrol Guard Portal
- **Target Persona:** Mobile Patrol Guard (Walking / Vehicle)
- **Role Key:** `security`
- **Purpose:** Dedicated field console for perimeter patrol guards conducting inspection rounds and responding to alarms.
- **Key Features:**
  - **Active Route Checkpoints:** Proximity listing of upcoming inspection checkpoints (Park 10, Park 30, Park 29) with round progress %.
  - **Floating SOS Panic Button:** Prominent red button triggering immediate silent alarm to Central Command.
  - **Shift Schedules & Approvals:** View assigned sectors, supervisor sign-offs, and approved rest intervals.
  - **On-Duty Guard Roster:** Real-time visibility into fellow patrol guards deployed across compound sectors.

### Screen 20: NFC Checkpoint Telemetry & Patrol Verification
- **Target Persona:** Mobile Patrol Guard
- **Role Key:** `security`
- **Purpose:** Contactless NFC/QR checkpoint verification confirming physical guard presence at perimeter stations.
- **Key Features:**
  - **Contactless NFC Scan:** Scans encrypted physical NFC tags mounted along perimeter fences and utility rooms.
  - **Offline Telemetry Logging:** Records guard checkpoint arrival timestamp locally in SQLite with tamper-proofing.
  - **Overdue Scan Alerts:** Automatic alarm triggered at Central Command if a guard misses a scheduled inspection window.
  - **Patrol Route Progress Bar:** Live completion meter tracking percentage of perimeter checkpoints validated.

### Screen 21: Security Incident Evidence Logging
- **Target Persona:** Patrol Guard / Security Supervisor
- **Role Key:** `security`
- **Purpose:** Forensic documentation of on-site security violations with immutable evidence.
- **Key Features:**
  - **Forensic Photo Documentation:** Captures on-scene photos with embedded cryptographic RTL watermark.
  - **Voice Notes & Narrative:** Voice memo recording providing clear audio context of the incident scene.
  - **Involved Parties Profiling:** Links incident to specific individuals, vehicle plates, or residential units.
  - **Automatic Cloud Re-Sync:** Queues report locally and uploads high-resolution media upon re-establishing network.

### Screen 22: Lost & Found RTL Watermarking & Cataloging
- **Target Persona:** Security Staff / Community Front Desk
- **Role Key:** `security`
- **Purpose:** Compound lost and found property registry preventing asset theft or false claims.
- **Key Features:**
  - **Lost vs Found Cataloging:** Clear two-sided ledger categorizing lost inquiries against secured recovered items.
  - **Automated Digital Watermark:** Automatically overlays compound emblem, report ID, date, and GPS coordinates onto item photos.
  - **Status Lifecycle & Handover:** Track status (Found, Claimed, Returned to Owner) with formal signature handovers.
  - **Automated Resident Matching:** Matches item descriptions against resident reports and notifies potential owners.

---

## Section 03: Facility Engineering & Maintenance
*5-stage maintenance lifecycle across 9 trade specializations connecting Coordinators, Technicians, and Chief Engineers.*

### Screen 23: Maintenance Desk & Ticket Triage
- **Target Persona:** Maintenance Coordinator
- **Role Key:** `maintenance`
- **Purpose:** Central ticket intake console for categorizing resident reports, estimating urgency, and balancing trades.
- **Key Features:**
  - **9-Trade Specialization Triage:** Rapid categorization across Plumbing, Electrical, HVAC, Carpentry, Painting, Masonry, Elevators, Landscaping, and Pest Control.
  - **1-Click Technician Assignment:** Direct dispatch to available technicians based on real-time capacity meters.
  - **Emergency Ticket Escalation:** High-priority escalation button flashing alerts to the Chief Engineer for pipe bursts or power failures.
  - **Automated Reference Code Generation:** Assigns unique `#MNT-XXXX` tracking codes for parts requisitions and labor tracking.

### Screen 24: Work Orders & Spare Parts Console
- **Target Persona:** Maintenance Coordinator / Workshop Lead
- **Role Key:** `maintenance`
- **Purpose:** Work order tracking, material consumption auditing, and technician rerouting.
- **Key Features:**
  - **Active Work Order Board:** Live tracking of ongoing jobs, estimated repair costs, and priority bands.
  - **Spare Parts Requisition Management:** Dedicated parts ledger linking inventory items, costs, and warehouse stock levels to specific work orders.
  - **Job Rerouting & Delegation:** Seamlessly reassigns tickets to backup technicians if the primary technician is overloaded.
  - **Completion Sign-Off:** Reviews technician repair notes and quality checklists prior to ticket closure.

### Screen 25: Field Technician Active Stopwatch & Repairs
- **Target Persona:** Field Technician (Plumber, Electrician, HVAC Tech)
- **Role Key:** `maintenance`
- **Purpose:** On-site mobile execution console for technicians performing repairs inside residential units.
- **Key Features:**
  - **Precision Unit Geolocation:** Displays exact unit address (e.g. Bldg 34, Apt 2) and reported problem description.
  - **Active Job Stopwatch Timer:** Live stopwatch timer calculating billable labor time and measuring turnaround efficiency.
  - **On-Site Action Bar:** Quick actions: [Start on Site], [Request Spare Parts], [Add Update], [Reroute Job].
  - **Before / After Photographic Proof:** Mandatory photo capture documenting the defect before repair and the finished state after completion.

### Screen 26: Chief Engineer Operational Takeover
- **Target Persona:** Chief Engineer
- **Role Key:** `maintenance`
- **Purpose:** High-level supervisory console providing direct operational failover when coordinators are off duty.
- **Key Features:**
  - **Coordinator Failover Takeover:** Automatic banner enabling Chief Engineer to take over direct ticket dispatch during coordinator absence.
  - **Engineering Broadcast Publisher:** Preset templates to broadcast technical notices (Power Outages, Water Shutdowns, Elevator Maintenance).
  - **Master Incident Ledger:** Advanced filtering of critical infrastructure breakdowns across all compound sectors.
  - **Facility Pressure Telemetry:** KPI ribbons tracking open work orders, average resolution time, and customer satisfaction ratings.

### Screen 27: Workforce Capacity & Dispatch
- **Target Persona:** Chief Engineer / Maintenance Coordinator
- **Role Key:** `maintenance`
- **Purpose:** Dynamic workforce workload balancing preventing technician burnout and guaranteeing timely service.
- **Key Features:**
  - **Comprehensive Work Order Dispatcher:** Form combining trade selection, priority severity, technician selection, and estimated labor hours.
  - **Real-Time Technician Capacity Meters:** Visual load indicator (e.g. "1/6 Cap - Available", "5/6 Cap - Near Limit") preventing overloading.
  - **Trade Certification Management:** View and update technician skill certifications and authorized equipment badges.
  - **Strict Priority Coding:** Normal, Medium, High, and Critical Emergency classification.

### Screen 28: Duty Schedules & Holiday Calendars
- **Target Persona:** Chief Engineer / Operations Lead
- **Role Key:** `maintenance`
- **Purpose:** Workforce shift scheduling, coverage planning, and 24/7 emergency response preparedness.
- **Key Features:**
  - **Approved Coverage Schedules:** Visual distribution of field team shifts guaranteeing minimum staffing quotas (e.g. 5/7 active days).
  - **Interactive Holiday Calendar:** Monthly heat map categorizing workdays, official holidays, and on-call emergency rotations.
  - **Preventive Maintenance Scheduling:** Schedules routine overhaul of heavy machinery (central water pumps, generator sets, elevators) during low-usage windows.
  - **24/7 Emergency Readiness:** Dedicated on-call rosters ensuring immediate response to midnight utility emergencies.

---

## Section 04: Community Manager & Governance
*Executive command dashboard — real-time operations, SOS emergencies, standardized penalties, and maintenance treasury reserve funds.*

### Screen 29: Community Manager Operations & SOS
- **Target Persona:** Community Manager / Executive Director
- **Role Key:** `manager`
- **Purpose:** Executive command overview summarizing daily gate traffic, active security alerts, and system uptime.
- **Key Features:**
  - **Daily Operations Snapshot:** Real-time counters for guest passes, guard attendance, open work orders, and offline database synchronization status.
  - **Active SOS Emergency Ribbon:** High-contrast red banner alerting management to critical security breaches or unresolved overstays.
  - **L1 Incident Triage:** Prioritized feed of high-severity incidents broken down by sector and building.
  - **Executive Quick Shortcuts:** Rapid access to Gate Administration, Maintenance Budgets, and Emergency Broadcasts.

### Screen 30: Governance: Penalties, Sanctions & Price List
- **Target Persona:** Community Manager / Legal Affairs
- **Role Key:** `manager`
- **Purpose:** Rule enforcement and standardized penalty management maintaining community order and fairness.
- **Key Features:**
  - **Violation & Receivables Ledger:** Tracks penalty collections and categorized status (Pending, Disputed, Paid).
  - **Standardized Penalty Tariff:** Officially approved sanction price list:
    - Parking in Unauthorized Stall: **$150.00**
    - Noise & Disturbance Complaint: **$200.00**
    - Littering / Improper Waste Disposal: **$75.00**
    - Unauthorized Structural Alteration: **$500.00**
  - **Issue Penalty / Add Tariff Item:** Dedicated workflows to issue formal violation notices with photo evidence and appeal deadlines.
  - **Compound Compliance Score:** Green telemetry dial reflecting resident compliance rates and zero-arrears targets.

### Screen 31: Governance: Treasury & Reserve Fund
- **Target Persona:** Board of Directors / Financial Comptroller
- **Role Key:** `manager`
- **Purpose:** Transparent financial governance for long-term compound maintenance reserve funds.
- **Key Features:**
  - **Central Reserve Fund Balance:** Consolidated ledger balance aggregating initial deposits, banking yields, and capital expenditures.
  - **Banking Yield Telemetry:** Precision tracking of annual bank interest yields, management fees, and operational draws.
  - **Capital Expense Allocation:** Dedicated wizard to allocate reserve funds for future major infrastructure overhauls (road repaving, facade painting).
  - **Audited Ledger Synchronization:** Immutable transaction ledger synchronized in real-time to maintain homeowner trust.

---

## Section 05: Plans, Licensing & Editions
*Flexible licensing models scaling from free community tier to enterprise compound operating systems.*

### Screen 32: Editions: Free vs Premium & Interactive Sandbox
- **Target Persona:** Compound Owner / HOA Board President
- **Role Key:** `subscription`
- **Purpose:** Transparent plan comparison and live interactive sandbox demonstrating system capabilities before subscription.
- **Key Features:**
  - **Free Community Edition (Telegram-Powered):** Community chat, building directory, and basic maintenance tickets routed through zero-cost Telegram MTProto bots.
  - **Premium Compound OS (Complete Suite):** Full activation of RBC security, 100% offline cryptographic QR gatekeeping, mobile patrols, and financial ledgers.
  - **Interactive Demo Sandbox:** Allows prospects to test gate scanning, patrol rounds, and technician timers using pre-loaded mock data.
  - **Multi-Platform Availability:** Production builds on Google Play Store, Progressive Web App (PWA), and Apple iOS roadmap.

---

## Section 06: Administrative Governance Console
*Administrative controls — resident verification, KYC approvals, moderation bans, and community broadcast messaging.*

### Screen 33: Member Verification & Access Control
- **Target Persona:** Super Administrator / Compound Registrar
- **Role Key:** `admin`
- **Purpose:** User lifecycle governance, unit ownership verification, and moderation controls.
- **Key Features:**
  - **Pending Registration Triage:** Review incoming resident join requests with proof of ownership or tenancy lease documents.
  - **Role & Permission Delegation:** Assign user accounts to roles (Owner, Family Resident, Tenant, Gatekeeper, Technician, Coordinator, Admin).
  - **Disciplinary Moderation Actions:** Granular penalties: Chat Mute (preventing spam while retaining security alerts) or Account Suspension.
  - **Direct Verification Dispatch:** Instant 1-tap phone call, WhatsApp verification message, or SMS OTP resend.
  - **Real-Time Member Telemetry:** Live counters of verified residents, pending submissions, and active staff accounts.

### Screen 34: Tactical Broadcast Publisher & Alerts
- **Target Persona:** Super Administrator / Operations Command
- **Role Key:** `admin`
- **Purpose:** High-priority broadcasting console transmitting mission-critical announcements to residents and security staff.
- **Key Features:**
  - **Tactical Preset Templates:** 1-tap presets for recurring situations (e.g. Gate 1 Congestion, Active Night Patrol in Progress, ID Inspection).
  - **Multi-Level Priority Routing:** Notice, Warning, or Critical Emergency routing with distinctive audible push notification sounds.
  - **Audience Segmentation:** Target messages to either the entire Community (All Residents) or strictly to Security & Maintenance Personnel.
  - **Instant Push Delivery:** High-speed notification dispatch guaranteed to reach offline-capable mobile devices instantly upon reconnection.
