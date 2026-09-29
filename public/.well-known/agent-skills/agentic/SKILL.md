---
name: agentic
description: >-
  Build, audit, and update AI Agent-Ready web interfaces and APIs. Covers RFC 8288
  Link response headers, RFC 9727 API catalogs, Markdown for Agents content negotiation
  (Accept: text/markdown), token estimation headers (x-markdown-tokens), edge and origin
  caching (Vary: Accept), DNS for AI Discovery (DNS-AID) SVCB/HTTPS records, DNSSEC signing,
  Web Bot Auth (RFC 9421 HTTP Message Signatures & JWKS directory), Content Signals, OAuth/OIDC Discovery (RFC 8414),
  OAuth Protected Resource Metadata (RFC 9728), Auth.md agent registration, MCP Server Card (SEP-1649),
  Agent Skills Discovery (RFC v0.2.0), WebMCP (Web Model Context Protocol), and ARD (Agentic Resource Discovery).
---

# Agentic Web Engineering & Discovery Skill

This skill provides the comprehensive specification, architecture patterns, implementation recipes, and validation runbook for making web applications and APIs **Agent-Native** and **100% Agent-Ready**.

As new agentic standards evolve, update this document to maintain a single source of truth.

---

## Table of Contents

1. [Core Pillars of Agent Readiness](#1-core-pillars-of-agent-readiness)
2. [Pillar A: RFC 8288 Link Response Headers](#2-pillar-a-rfc-8288-link-response-headers)
3. [Pillar B: RFC 9727 Machine-Readable API Catalog](#3-pillar-b-rfc-9727-machine-readable-api-catalog)
4. [Pillar C: Markdown for Agents Content Negotiation](#4-pillar-c-markdown-for-agents-content-negotiation)
5. [Pillar D: DNS for AI Discovery (DNS-AID) & DNSSEC](#5-pillar-d-dns-for-ai-discovery-dns-aid--dnssec)
6. [Pillar E: Web Bot Auth & HTTP Message Signatures](#6-pillar-e-web-bot-auth--http-message-signatures)
7. [Pillar F: Content Signals in robots.txt](#7-pillar-f-content-signals-in-robotstxt)
8. [Pillar G: OAuth 2.0 & OIDC Discovery Metadata](#8-pillar-g-oauth-20--oidc-discovery-metadata)
9. [Pillar H: OAuth Protected Resource Metadata (RFC 9728)](#9-pillar-h-oauth-protected-resource-metadata-rfc-9728)
10. [Pillar I: Auth.md Agent Registration Discovery](#10-pillar-i-authmd-agent-registration-discovery)
11. [Pillar J: Model Context Protocol (MCP) Server Card](#11-pillar-j-model-context-protocol-mcp-server-card)
12. [Pillar K: Agent Skills Discovery Index (RFC v0.2.0)](#12-pillar-k-agent-skills-discovery-index-rfc-v020)
13. [Pillar L: WebMCP Browser Agent Tools (Imperative & Declarative)](#13-pillar-l-webmcp-browser-agent-tools-imperative--declarative)
14. [Pillar M: Agentic Resource Discovery (ARD) Manifest & A2A Card](#14-pillar-m-agentic-resource-discovery-ard-manifest--a2a-card)
15. [Origin & Edge Implementation Recipes](#15-origin--edge-implementation-recipes)
    - [Vercel (`vercel.json`) & Serverless Routing](#vercel-verceljson--serverless-routing)
    - [Vite (`vite.config.ts`) Dev & Preview](#vite-viteconfigts-dev--preview)
    - [Cloudflare Edge (Dashboard & Rules)](#cloudflare-edge-dashboard--rules)
16. [DNS-AID & ARD Zone Configuration Recipes](#16-dns-aid--ard-zone-configuration-recipes)
17. [HTML Discovery Elements](#17-html-discovery-elements)
18. [Crawler & Bot Directives (`robots.txt`)](#18-crawler--bot-directives-robotstxt)
19. [Validation & Verification Runbook](#19-validation--verification-runbook)
20. [Living Roadmap: Implemented Agentic Standards](#20-living-roadmap-implemented-agentic-standards)

---

## 1. Core Pillars of Agent Readiness

Modern AI agents (Claude, ChatGPT, Gemini, Perplexity, OpenCode, coding assistants, autonomous agents) interact with the web directly via HTTP and DNS. Without agentic standards, models waste tokens parsing bloated HTML/JS shells, guessing API endpoints, and hallucinating documentation links.

Becoming **Agent-Ready** requires:
- **Discoverability**: Standardized HTTP headers and metadata pointing directly to documentation and catalogs without crawling.
- **DNS-Based Discovery**: Cryptographically authenticated DNS entrypoints under the `_agents` namespace resolving endpoints, protocols, and ports with sub-millisecond latency.
- **Bot Identity & Verification (Web Bot Auth)**: Cryptographic HTTP message signatures proving bot/agent authenticity without relying on fragile IP lists or user-agent spoofing.
- **Content Preferences (Content Signals)**: Clear machine-readable declarations on AI model training, search indexing, and RAG input.
- **Authentication Discovery**: Zero-touch OAuth/OIDC metadata, Protected Resource Metadata (PRM), and Auth.md registration specifications.
- **Tool Protocol Discovery**: Standardized MCP Server Cards (SEP-1649), Agent Skills Discovery (RFC v0.2.0), and WebMCP browser APIs.
- **Capability Catalogs (ARD)**: Unified Agentic Resource Discovery manifests detailing servers, skills, and agents with semantic query hints.
- **Efficiency**: Serving compact, high-signal Markdown instead of heavy HTML client-side renders.
- **Predictability & Security**: Adhering to IANA link relations, RFC standards, and DNSSEC cryptographic verification.

---

## 2. Pillar A: RFC 8288 Link Response Headers

### Standard Reference
- **RFC 8288**: Web Linking (`Link` HTTP response header).
- **RFC 9727 Section 3**: Link Relations for API and agent discovery.

### Requirements
1. Origin server must return a `Link` response header on `/` and all pages.
2. Link relations (`rel`) must use registered IANA relations:
   - `api-catalog`: Points to machine-readable API catalog (`/.well-known/api-catalog`).
   - `ai-catalog`: Points to ARD capability manifest (`/.well-known/ai-catalog.json`).
   - `service-doc`: Points to human- or agent-readable documentation (e.g., `/whatsunity.md`).
   - `service-desc`: Points to machine-readable technical spec (`/llms-full.txt`).
   - `describedby`: Points to metadata describing the resource (`/llms.txt`).

### Canonical HTTP Header Format
```http
Link: </.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="ai-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"
```

---

## 3. Pillar B: RFC 9727 Machine-Readable API Catalog

### Standard Reference
- **RFC 9727**: `api-catalog`: A Well-Known URI and Link Relation to Help Discovery of APIs.
- **RFC 9264**: Linkset Format in JSON (`application/linkset+json`).

### Requirements
1. Served at `/.well-known/api-catalog` with HTTP 200.
2. `Content-Type: application/linkset+json`.
3. Valid JSON Linkset schema grouping resources under an `anchor`.

---

## 4. Pillar C: Markdown for Agents Content Negotiation

### Standard Reference
- **Cloudflare Markdown for Agents** / **llmstxt.org Content Negotiation**.
- **RFC 9110 Section 12.5.1**: Content Negotiation (`Accept` header).

### Requirements
1. When a client requests any page with `Accept: text/markdown`, the server returns the Markdown representation of the page.
2. Browsers and clients requesting `text/html` (or default `*/*`) continue to receive the standard HTML SPA.
3. The response must include:
   - `Content-Type: text/markdown; charset=utf-8`
   - `x-markdown-tokens`: Estimated token count of the document.
   - `Vary: Accept`: **CRITICAL**. Instructs CDNs, Vercel Edge, Cloudflare, and browser caches never to serve cached Markdown to browsers or cached HTML to agents.

---

## 5. Pillar D: DNS for AI Discovery (DNS-AID) & DNSSEC

### Standard Reference
- **IETF Internet-Draft**: [`draft-mozleywilliams-dnsop-dnsaid`](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/).
- **RFC 9460**: Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records).
- **RFC 8552**: Scoping of Underscored Names in the DNS.
- **RFC 9364 / RFC 4033**: DNS Security Extensions (DNSSEC).

### Architecture & Discovery Model
- **`_index._agents.<domain>`**: The organizational entry point. Returns ServiceMode SVCB or HTTPS records pointing to the host serving the agent index or catalog (`/.well-known/api-catalog`).
- **`_a2a._agents.<domain>`**: Direct Agent-to-Agent protocol suite entrypoint (`alpn="a2a"`).
- **`_mcp._agents.<domain>`**: Model Context Protocol suite entrypoint for tool discovery (`alpn="mcp"`).
- **`_catalog._agents.<domain>`**: ARD manifest discovery TXT record.

---

## 6. Pillar E: Web Bot Auth & HTTP Message Signatures

### Standard Reference
- **IETF WebBotAuth WG**: `draft-meunier-web-bot-auth-architecture-02`.
- **RFC 9421**: HTTP Message Signatures.
- **RFC 8037**: CFRG Elliptic Curve Diffie-Hellman (ECDH) and Signatures in JOSE (Ed25519).
- **RFC 7638**: JSON Web Key (JWK) Thumbprint.

Served at `/.well-known/http-message-signatures-directory` with `Content-Type: application/http-message-signatures-directory+json`.

---

## 7. Pillar F: Content Signals in robots.txt

### Standard Reference
- **IETF Internet-Draft**: [`draft-romm-aipref-contentsignals`](https://datatracker.ietf.org/doc/draft-romm-aipref-contentsignals/).
- **Website**: [contentsignals.org](https://contentsignals.org/).

### Directives
Declare AI usage preferences explicitly under `User-agent` blocks in `robots.txt`:
```robots
User-agent: *
Content-Signal: ai-train=no, search=yes, ai-input=no
```
- `ai-train`: Permission for foundation model pre-training / fine-tuning (`yes` / `no`).
- `search`: Permission for search indexing and summary snippet extraction (`yes` / `no`).
- `ai-input`: Permission for real-time RAG ingestion and prompt context retrieval (`yes` / `no`).

---

## 8. Pillar G: OAuth 2.0 & OIDC Discovery Metadata

### Standard Reference
- **RFC 8414**: OAuth 2.0 Authorization Server Metadata.
- **OpenID Connect Discovery 1.0**: `/.well-known/openid-configuration`.

### Endpoints
- `/.well-known/oauth-authorization-server`: Pure OAuth 2.0 server discovery.
- `/.well-known/openid-configuration`: OpenID Connect discovery.

Must declare `issuer`, `authorization_endpoint`, `token_endpoint`, `jwks_uri`, and supported grant/response types.

---

## 9. Pillar H: OAuth Protected Resource Metadata (RFC 9728)

### Standard Reference
- **RFC 9728**: OAuth 2.0 Protected Resource Metadata.

Served at `/.well-known/oauth-protected-resource`:
```json
{
  "resource": "https://whatsunity.app",
  "authorization_servers": [
    "https://whatsunity.app"
  ],
  "scopes_supported": [
    "compounds:read",
    "gates:verify",
    "tickets:manage",
    "agents:communicate"
  ],
  "bearer_methods_supported": [
    "header"
  ],
  "resource_documentation": "https://whatsunity.app/auth.md"
}
```

---

## 10. Pillar I: Auth.md Agent Registration Discovery

### Standard Reference
- **Auth.md**: [workos.com/auth-md](https://workos.com/auth-md) / [github.com/workos/auth.md](https://github.com/workos/auth.md).

### Requirements
1. Served at `/auth.md` from the service root with `Content-Type: text/markdown; charset=utf-8`.
2. Heading 1 contains `auth.md` (`# auth.md — WhatsUnity Agent Authentication & Registration`).
3. Accompanied by `agent_auth` block in `/.well-known/oauth-authorization-server` declaring:
   - `skill`: URL to machine runbook
   - `register_uri`: Automated agent registration endpoint (`/api/agents/register`)
   - `identity_assertion`: Supports `urn:ietf:params:oauth:token-type:id-jag` and `verified_email`
   - `anonymous`: Ephemeral sandbox registration
   - `events_supported`: Security revocation notifications (`https://schemas.auth.md/events/revocation`)

---

## 11. Pillar J: Model Context Protocol (MCP) Server Card

### Standard Reference
- **Model Context Protocol SEP-1649**: [github.com/modelcontextprotocol/modelcontextprotocol/pull/2127](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127).

### Endpoints
- Served at `/.well-known/mcp/server-card.json` (with aliases `/.well-known/mcp.json` and `/.well-known/mcp/server-cards.json`).
- Declares `$schema`, `serverInfo`, `endpoint` (transport URL), `capabilities`, and tool schemas (`verify_gate_pass`, `query_community_status`, `list_maintenance_trades`).

---

## 12. Pillar K: Agent Skills Discovery Index (RFC v0.2.0)

### Standard Reference
- **Agent Skills Discovery RFC v0.2.0**: [github.com/cloudflare/agent-skills-discovery-rfc](https://github.com/cloudflare/agent-skills-discovery-rfc).
- **AgentSkills.io**: [schemas.agentskills.io](https://schemas.agentskills.io/).

Served at `/.well-known/agent-skills/index.json` (and `/.well-known/skills/index.json`):
```json
{
  "$schema": "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
  "skills": [
    {
      "name": "agentic",
      "type": "skill-md",
      "description": "Build, audit, and update AI Agent-Ready web interfaces and APIs.",
      "url": "https://whatsunity.app/.well-known/agent-skills/agentic/SKILL.md",
      "digest": "sha256:<sha256_hex>"
    }
  ]
}
```

---

## 13. Pillar L: WebMCP Browser Agent Tools (Imperative & Declarative)

### Standard Reference
- **W3C Web Machine Learning WebMCP**: [webmachinelearning.github.io/webmcp](https://webmachinelearning.github.io/webmcp/).
- **Declarative WebMCP API Explainer**: [github.com/webmachinelearning/webmcp](https://github.com/webmachinelearning/webmcp/blob/main/declarative-api-explainer.md).

### Dual-Channel Integration
1. **Imperative API**:
   Feature-detect `document.modelContext` (modern) or `navigator.modelContext` (legacy Chrome builds). Call `registerTool()` on page load with tool name, description, JSON schema, and execute callback.
2. **Declarative HTML Forms**:
   Expose tools directly in DOM using semantic attributes:
   `<form toolname="verify_gate_pass" tooldescription="...">` with inputs `<input toolparamdescription="..." />`.

---

## 14. Pillar M: Agentic Resource Discovery (ARD) Manifest & A2A Card

### Standard Reference
- **ARD Spec v0.9**: [agenticresourcediscovery.org](https://agenticresourcediscovery.org/).
- **AI-Catalog Data Model**: [github.com/Agent-Card/ai-catalog](https://github.com/Agent-Card/ai-catalog).

Served at `/.well-known/ai-catalog.json` with `Content-Type: application/json` and `Access-Control-Allow-Origin: *`.
- Declares `host` with `displayName` and stable `identifier` (`did:web:whatsunity.app`).
- Entries use URN syntax: `urn:air:whatsunity.app:<namespace>:<name>`.
- Includes 2-5 `representativeQueries` per entry for semantic embeddings and discovery.
- Also exposes A2A Autonomous Agent Card at `/.well-known/agent-card.json`.

---

## 15. Origin & Edge Implementation Recipes

### Vercel (`vercel.json`) & Serverless Routing

To guarantee that requests with `Accept: text/markdown` never collide with static HTML files (like `dist/index.html` taking filesystem precedence), rename `dist/index.html` to `dist/app.html` during build and route conditionally:

```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/",
      "has": [{ "type": "header", "key": "accept", "value": ".*text/markdown.*" }],
      "destination": "/api/markdown"
    },
    {
      "source": "/",
      "destination": "/app.html"
    }
  ]
}
```

---

## 16. DNS-AID & ARD Zone Configuration Recipes

```dns
; Organizational Agent Index
_index._agents.whatsunity.app.    3600 IN SVCB  1 whatsunity.app. ( alpn="h2,h3" port=443 mandatory=alpn,port well-known="api-catalog" )
_index._agents.whatsunity.app.    3600 IN HTTPS 1 whatsunity.app. ( alpn="h2,h3" port=443 mandatory=alpn,port well-known="api-catalog" )
_index._agents.whatsunity.app.    3600 IN TXT   "v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog"

; Agent-to-Agent Protocol
_a2a._agents.whatsunity.app.      3600 IN SVCB  1 whatsunity.app. ( alpn="a2a" port=443 mandatory=alpn,port )
_a2a._agents.whatsunity.app.      3600 IN HTTPS 1 whatsunity.app. ( alpn="a2a" port=443 mandatory=alpn,port )

; Model Context Protocol
_mcp._agents.whatsunity.app.      3600 IN SVCB  1 whatsunity.app. ( alpn="mcp" port=443 mandatory=alpn,port )
_mcp._agents.whatsunity.app.      3600 IN HTTPS 1 whatsunity.app. ( alpn="mcp" port=443 mandatory=alpn,port )

; ARD Manifest Locator
_catalog._agents.whatsunity.app.  3600 IN TXT   "url=https://whatsunity.app/.well-known/ai-catalog.json"
```

---

## 17. HTML Discovery Elements

In `index.html` within `<head>`:
```html
<link rel="api-catalog" type="application/linkset+json" href="/.well-known/api-catalog" />
<link rel="ai-catalog" type="application/json" href="/.well-known/ai-catalog.json" />
<link rel="agent-card" type="application/json" href="/.well-known/agent-card.json" />
<link rel="mcp-server-card" type="application/json" href="/.well-known/mcp/server-card.json" />
<link rel="service-doc" type="text/markdown" href="/whatsunity.md" />
<link rel="describedby" type="text/plain" href="/llms.txt" />
<link rel="service-desc" type="text/plain" href="/llms-full.txt" />
```

---

## 18. Crawler & Bot Directives (`robots.txt`)

```robots
User-agent: *
Content-Signal: ai-train=no, search=yes, ai-input=no
Agentmap: https://whatsunity.app/.well-known/ai-catalog.json
Allow: /
Allow: /whatsunity.md
Allow: /auth.md
Allow: /.well-known/
```

---

## 19. Validation & Verification Runbook

### Automated API Audit
```bash
node -e "fetch('https://isitagentready.com/api/scan', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ url: 'https://whatsunity.app' })
}).then(r => r.json()).then(d => {
  for (const cat in d.checks) {
    for (const chk in d.checks[cat]) {
      console.log(chk, d.checks[cat][chk].status);
    }
  }
});"
```

---

## 20. Living Roadmap: Implemented Agentic Standards

- [x] **RFC 8288 Web Linking**: `Link` headers pointing to API catalog, documentation, and specs.
- [x] **RFC 9727 API Catalog**: Machine-readable JSON Linkset at `/.well-known/api-catalog`.
- [x] **Markdown Content Negotiation**: Serving high-signal markdown with `x-markdown-tokens` and `Vary: Accept`.
- [x] **DNS-AID (DNS for AI Discovery)**: ServiceMode SVCB / HTTPS and TXT records with DNSSEC validation.
- [x] **Web Bot Auth (RFC 9421)**: Ed25519 JWKS directory at `/.well-known/http-message-signatures-directory`.
- [x] **Content Signals**: Declaring AI content usage preferences (`ai-train`, `search`, `ai-input`) in `robots.txt`.
- [x] **OAuth / OIDC Discovery**: Published `/.well-known/oauth-authorization-server` and `/.well-known/openid-configuration`.
- [x] **OAuth Protected Resource Metadata (RFC 9728)**: Published at `/.well-known/oauth-protected-resource`.
- [x] **Auth.md Agent Registration**: Published `/auth.md` and configured `agent_auth` block with ID-JAG support.
- [x] **MCP Server Card (SEP-1649)**: Published at `/.well-known/mcp/server-card.json`.
- [x] **Agent Skills Discovery Index (RFC v0.2.0)**: Published at `/.well-known/agent-skills/index.json`.
- [x] **WebMCP**: Implemented `document.modelContext.registerTool()` and declarative HTML forms.
- [x] **Agentic Resource Discovery (ARD) Manifest**: Published at `/.well-known/ai-catalog.json` with A2A Agent Card.
