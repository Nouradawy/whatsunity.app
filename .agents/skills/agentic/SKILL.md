---
name: agentic
description: >-
  Build, audit, and update AI Agent-Ready web interfaces and APIs. Covers RFC 8288
  Link response headers, RFC 9727 API catalogs, Markdown for Agents content negotiation
  (Accept: text/markdown), token estimation headers (x-markdown-tokens), edge and origin
  caching (Vary: Accept), DNS for AI Discovery (DNS-AID) SVCB/HTTPS records, DNSSEC signing,
  Web Bot Auth (RFC 9421 HTTP Message Signatures & JWKS directory), and agent discovery validation via isitagentready.com.
---

# Agentic Web Engineering & Discovery Skill

This skill provides the comprehensive specification, architecture patterns, implementation recipes, and validation runbook for making web applications and APIs **Agent-Native** and **100% Agent-Ready**.

As new agentic standards (DNS-AID, Web Bot Auth, MCP Server Cards, Agent Skills, Auth.md, Content Signals) are implemented, update this document to maintain a single source of truth.

---

## Table of Contents

1. [Core Pillars of Agent Readiness](#1-core-pillars-of-agent-readiness)
2. [Pillar A: RFC 8288 Link Response Headers](#2-pillar-a-rfc-8288-link-response-headers)
3. [Pillar B: RFC 9727 Machine-Readable API Catalog](#3-pillar-b-rfc-9727-machine-readable-api-catalog)
4. [Pillar C: Markdown for Agents Content Negotiation](#4-pillar-c-markdown-for-agents-content-negotiation)
5. [Pillar D: DNS for AI Discovery (DNS-AID) & DNSSEC](#5-pillar-d-dns-for-ai-discovery-dns-aid--dnssec)
6. [Pillar E: Web Bot Auth & HTTP Message Signatures](#6-pillar-e-web-bot-auth--http-message-signatures)
7. [Origin & Edge Implementation Recipes](#7-origin--edge-implementation-recipes)
   - [Vercel (`vercel.json`)](#vercel-verceljson)
   - [Vite (`vite.config.ts`) Dev & Preview](#vite-viteconfigts-dev--preview)
   - [Cloudflare Edge (Dashboard & Rules)](#cloudflare-edge-dashboard--rules)
8. [DNS-AID Zone Configuration Recipes](#8-dns-aid-zone-configuration-recipes)
   - [Standard BIND Zonefile](#standard-bind-zonefile)
   - [Name.com Setup (Current whatsunity.app NS)](#namecom-setup-current-whatsunityapp-ns)
   - [Cloudflare DNS Setup](#cloudflare-dns-setup)
   - [AWS Route 53 / Terraform](#aws-route-53--terraform)
9. [HTML Discovery Elements](#9-html-discovery-elements)
10. [Crawler & Bot Directives (`robots.txt`)](#10-crawler--bot-directives-robotstxt)
11. [Validation & Verification Runbook](#11-validation--verification-runbook)
    - [Automated API Audit (`isitagentready.com`)](#automated-api-audit)
    - [Web Bot Auth Directory Verification](#web-bot-auth-directory-verification)
    - [DoH & DNSSEC CLI Validation](#doh--dnssec-cli-validation)
    - [Manual HTTP CLI Verification](#manual-http-cli-verification)
12. [Living Roadmap: Next Agentic Upgrades](#12-living-roadmap-next-agentic-upgrades)

---

## 1. Core Pillars of Agent Readiness

Modern AI agents (Claude, ChatGPT, Gemini, Perplexity, OpenCode, coding assistants, autonomous agents) interact with the web directly via HTTP and DNS. Without agentic standards, models waste tokens parsing bloated HTML/JS shells, guessing API endpoints, and hallucinating documentation links.

Becoming **Agent-Ready** requires:
- **Discoverability**: Standardized HTTP headers and metadata pointing directly to documentation and catalogs without crawling.
- **DNS-Based Discovery**: Cryptographically authenticated DNS entrypoints under the `_agents` namespace resolving endpoints, protocols, and ports with sub-millisecond latency.
- **Bot Identity & Verification (Web Bot Auth)**: Cryptographic HTTP message signatures proving bot/agent authenticity without relying on fragile IP lists or user-agent spoofing.
- **Efficiency**: Serving compact, high-signal Markdown instead of heavy HTML client-side renders.
- **Predictability & Security**: Adhering to IANA link relations, RFC standards, and DNSSEC cryptographic verification.

---

## 2. Pillar A: RFC 8288 Link Response Headers

### Standard Reference
- **RFC 8288**: Web Linking (`Link` HTTP response header).
- **RFC 9727 Section 3**: Link Relations for API and agent discovery.

### Requirements
1. The origin server must return a `Link` response header on the root (`/`) and relevant pages.
2. Link relations (`rel`) must use registered IANA relations:
   - `api-catalog`: Points to machine-readable API catalog (`/.well-known/api-catalog`).
   - `service-doc`: Points to human- or agent-readable documentation (e.g., `/docs` or `/spec.md`).
   - `service-desc`: Points to machine-readable technical spec (OpenAPI, full data contracts, or `/llms-full.txt`).
   - `describedby`: Points to metadata describing the resource (e.g., `/llms.txt`).
3. Comma-separated or multi-line `Link` headers are valid.

### Canonical HTTP Header Format
```http
Link: </.well-known/api-catalog>; rel="api-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"
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

### Canonical Schema (`/.well-known/api-catalog`)
```json
{
  "linkset": [
    {
      "anchor": "https://whatsunity.app/",
      "service-desc": [
        {
          "href": "https://whatsunity.app/llms-full.txt",
          "type": "text/plain",
          "title": "Technical Specification & Data Contracts"
        }
      ],
      "service-doc": [
        {
          "href": "https://whatsunity.app/whatsunity.md",
          "type": "text/markdown",
          "title": "System Architecture & Documentation (EN)"
        },
        {
          "href": "https://whatsunity.app/whatsunity-ar.md",
          "type": "text/markdown",
          "title": "System Architecture & Documentation (AR)"
        }
      ],
      "describedby": [
        {
          "href": "https://whatsunity.app/llms.txt",
          "type": "text/plain",
          "title": "AI Agent Guidance"
        }
      ]
    }
  ]
}
```

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
- **IETF Internet-Draft**: [`draft-mozleywilliams-dnsop-dnsaid`](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/) (DNS for AI Discovery).
- **RFC 9460**: Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records).
- **RFC 8552**: Scoping of Underscored Names in the DNS.
- **RFC 9364 / RFC 4033**: DNS Security Extensions (DNSSEC).
- **RFC 6698 / RFC 7671**: DNS-Based Authentication of Named Entities (DANE TLSA).

### Architecture & Discovery Model
Rather than requiring HTTP crawlers to scrape sitemaps or traverse deep directory structures, DNS-AID enables zero-roundtrip agent capability discovery using native DNS resolution:
- **`_index._agents.<domain>`**: The organizational entry point. Returns ServiceMode SVCB or HTTPS records pointing to the host serving the agent index or catalog (`/.well-known/api-catalog`).
- **`_a2a._agents.<domain>`**: Direct Agent-to-Agent protocol suite entrypoint.
- **`_mcp._agents.<domain>`**: Model Context Protocol suite entrypoint for tool discovery.

### SVCB / HTTPS Record Parameters (`SvcParamKey`)
Per RFC 9460 and draft-mozleywilliams-dnsop-dnsaid:
- **TargetName**: The canonical fully-qualified domain name (e.g. `whatsunity.app.`). Must NOT contain underscores (for TLS X.509 certificate compatibility).
- **`alpn`**: Application-Layer Protocol Negotiation list (e.g., `alpn="h2,h3"` for web endpoints, `alpn="a2a"` for Agent-to-Agent, `alpn="mcp"` for Model Context Protocol). Each agent protocol requires its own RR in the RRset.
- **`port`**: Connection port number (typically `port=443`).
- **`mandatory`**: Critical SvcParamKeys that clients must recognize (e.g., `mandatory=alpn,port`), providing downgrade resistance.
- **`well-known`**: Optional relative URI path under `/.well-known/` (e.g., `well-known="api-catalog"` or `well-known="agent-card.json"`).
- **`cap` & `cap-sha256`**: Optional capability descriptor URI locator and its canonical SHA-256 integrity hash.
- **Numeric `keyNNNNN`**: Format for custom or experimental SvcParamKey parameters until IANA reservation is finalized.
- **TXT Fallback**: For authoritative DNS providers lacking native SVCB/HTTPS UI support, publish a TXT record at `_index._agents.<domain>` containing `v=dnsaid1; alpn=h2,h3; port=443; uri=...`.

### DNSSEC Signing Requirement
Public discovery zones **MUST** be signed with DNSSEC. Validating recursive resolvers (e.g. Cloudflare DoH `https://cloudflare-dns.com/dns-query`, Google DoH `https://dns.google/resolve`) query with the `do=1` bit set. The response must carry the **`AD=true`** (Authenticated Data) flag. Unsigned or bogus records are rejected to protect against DNS cache poisoning and malicious agent impersonation.

---

## 6. Pillar E: Web Bot Auth & HTTP Message Signatures

### Standard Reference
- **IETF WebBotAuth WG**: [`draft-meunier-web-bot-auth-architecture-02`](https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture-02).
- **IETF HTTP Message Signatures Directory**: [`draft-meunier-http-message-signatures-directory-03`](https://datatracker.ietf.org/doc/html/draft-meunier-http-message-signatures-directory-03).
- **RFC 9421**: HTTP Message Signatures.
- **RFC 8037**: CFRG Elliptic Curve Diffie-Hellman (ECDH) and Signatures in JOSE (Ed25519).
- **RFC 7638**: JSON Web Key (JWK) Thumbprint.
- **Cloudflare Verified Bots**: [Web Bot Auth Reference Documentation](https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/).

### Architecture & Trust Model
Web Bot Auth replaces IP whitelisting and spoofable `User-Agent` strings with asymmetric cryptography:
1. **Public Key Directory**: The agent or bot publisher hosts a JSON Web Key Set (JWKS) at `/.well-known/http-message-signatures-directory`.
2. **Request Signing**: When the bot/agent makes an outgoing HTTP request, it signs HTTP message components using its private Ed25519 key and attaches standard RFC 9421 signature headers (`Signature-Agent`, `Signature-Input`, `Signature`).
3. **Verification**: Receiving edge networks (like Cloudflare Verified Bots) fetch the JWKS directory from the domain identified in `Signature-Agent`, match the `keyid` (JWK thumbprint), and verify the cryptographic signature.

### Directory Specification (`/.well-known/http-message-signatures-directory`)
1. **Path**: Must be served at `/.well-known/http-message-signatures-directory` over HTTPS.
2. **`Content-Type`**: `application/http-message-signatures-directory+json` (or `application/json`).
3. **Format**: Standard JWKS object containing an array of public keys (`kty: "OKP"`, `crv: "Ed25519"`, `x: "<base64url-public-key>"`).
4. **Key ID (`kid`)**: Must match the RFC 7638 SHA-256 base64url thumbprint of the JWK.

```json
{
  "keys": [
    {
      "kty": "OKP",
      "crv": "Ed25519",
      "x": "COemIklUm9rrjpYP67t9Thrw1R2Tgn_NBjCzTbWDXkE",
      "kid": "uvLgcw37jKv1lu_1vlAtrrWBymjsI7JJ4b0jVvni4WI",
      "use": "sig",
      "alg": "Ed25519"
    }
  ]
}
```

### Outgoing Request Header Contract
Bots and agents identify themselves by attaching:
```http
Signature-Agent: "https://whatsunity.app"
Signature-Input: sig1=("@authority" "signature-agent");created=1790646585;keyid="uvLgcw37jKv1lu_1vlAtrrWBymjsI7JJ4b0jVvni4WI";alg="ed25519";expires=1790646645;nonce="...";tag="web-bot-auth"
Signature: sig1=:<ed25519-signature-base64>:
```

- **`Signature-Agent`**: Must be an HTTPS URL enclosed in double quotes (structured string format).
- **`Signature-Input`**: Must include `@authority` and `signature-agent`, `tag="web-bot-auth"`, `alg="ed25519"`, Unix timestamps `created` and short-lived `expires` (e.g. 60 seconds).
- **`Signature`**: Binary signature enclosed between colons (`:<base64>:`).

---

## 7. Origin & Edge Implementation Recipes

### Vercel (`vercel.json`)

Vercel provides native conditional rewrites and header definitions:

```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/",
      "has": [
        {
          "type": "header",
          "key": "accept",
          "value": "(?<m>.*text/markdown.*)"
        }
      ],
      "destination": "/whatsunity.md"
    },
    {
      "source": "/index.html",
      "has": [
        {
          "type": "header",
          "key": "accept",
          "value": "(?<m>.*text/markdown.*)"
        }
      ],
      "destination": "/whatsunity.md"
    },
    {
      "source": "/((?!assets|whatsunity|.*\\..*).*)",
      "has": [
        {
          "type": "header",
          "key": "accept",
          "value": "(?<m>.*text/markdown.*)"
        }
      ],
      "destination": "/whatsunity.md"
    },
    {
      "source": "/((?!assets|whatsunity|.*\\..*).*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/.well-known/api-catalog",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/linkset+json"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    },
    {
      "source": "/.well-known/http-message-signatures-directory",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/http-message-signatures-directory+json"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400"
        }
      ]
    },
    {
      "source": "/whatsunity.md",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/markdown; charset=utf-8"
        },
        {
          "key": "x-markdown-tokens",
          "value": "2380"
        },
        {
          "key": "Vary",
          "value": "Accept"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Vary",
          "value": "Accept"
        },
        {
          "key": "Link",
          "value": "</.well-known/api-catalog>; rel=\"api-catalog\", </whatsunity.md>; rel=\"service-doc\", </llms.txt>; rel=\"describedby\", </llms-full.txt>; rel=\"service-desc\""
        }
      ]
    }
  ]
}
```

### Vite (`vite.config.ts`) Dev & Preview

Ensures identical behavior during local development (`npm run dev`) and production preview (`npm run preview`):

```typescript
import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

const agentDiscoveryAndNegotiationPlugin = () => {
  const handleRequest = (req: any, res: any, next: any) => {
    const url = req.url || "/";
    const pathname = url.split("?")[0];
    const accept = (req.headers["accept"] as string) || "";

    // 1. Extensionless .well-known MIME types
    if (pathname === "/.well-known/api-catalog") {
      res.setHeader("Content-Type", "application/linkset+json");
      res.setHeader("Access-Control-Allow-Origin", "*");
    }

    if (pathname === "/.well-known/http-message-signatures-directory") {
      res.setHeader("Content-Type", "application/http-message-signatures-directory+json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=86400");
    }

    // 2. Markdown Content Negotiation
    if (accept.includes("text/markdown")) {
      let mdFile = "whatsunity.md";
      let tokens = 2380;

      if (pathname.includes("privacy-policy")) {
        mdFile = "privacy_policy.md";
        tokens = 850;
      } else if (pathname.includes("terms-conditions")) {
        mdFile = "terms_conditions.md";
        tokens = 720;
      } else if (url.includes("lang=ar")) {
        mdFile = "whatsunity-ar.md";
        tokens = 2230;
      }

      const filePath = path.resolve(__dirname, "public", mdFile);
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "text/markdown; charset=utf-8");
        res.setHeader("x-markdown-tokens", String(tokens));
        res.setHeader("Vary", "Accept");
        const content = fs.readFileSync(filePath, "utf-8");
        res.end(content);
        return;
      }
    }

    res.setHeader("Vary", "Accept");
    next();
  };

  return {
    name: "agent-discovery-negotiation",
    configureServer(server: any) {
      server.middlewares.use(handleRequest);
    },
    configurePreviewServer(server: any) {
      server.middlewares.use(handleRequest);
    },
  };
};

export default defineConfig({
  plugins: [
    agentDiscoveryAndNegotiationPlugin(),
  ],
  server: {
    headers: {
      Link: '</.well-known/api-catalog>; rel="api-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"',
      Vary: "Accept",
    },
  },
  preview: {
    headers: {
      Link: '</.well-known/api-catalog>; rel="api-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"',
      Vary: "Accept",
    },
  },
});
```

### Cloudflare Edge (Dashboard & Rules)

If proxying through Cloudflare (Orange Cloud enabled):
1. **Registering Key Directory in Bot Submission Form**:
   - Go to Cloudflare Dashboard > **Manage Account** > **Configurations** > **Bot Submission Form**.
   - Verification Method: **Request Signature**.
   - Enter `https://whatsunity.app/.well-known/http-message-signatures-directory`.
2. **Markdown for Agents**:
   - Go to Cloudflare Dashboard > **Rules** or **Content Optimization** > **Markdown for Agents** > Toggle **On**.
3. **Transform Rules (HTTP Response Header Modification)**:
   - Match: `Hostname equals whatsunity.app`
   - Set Dynamic or Static Header:
     - Name: `Link`
     - Value: `</.well-known/api-catalog>; rel="api-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"`

---

## 8. DNS-AID Zone Configuration Recipes

### Standard BIND Zonefile

```dns
; ==============================================================================
; DNS-AID Records for whatsunity.app (RFC 9460 & draft-mozleywilliams-dnsop-dnsaid)
; ==============================================================================

$ORIGIN whatsunity.app.
$TTL 3600

; 1. Organizational Agent Index
_index._agents.whatsunity.app.    3600 IN SVCB  1 whatsunity.app. (
    alpn="h2,h3"
    port=443
    mandatory=alpn,port
    well-known="api-catalog"
)
_index._agents.whatsunity.app.    3600 IN HTTPS 1 whatsunity.app. (
    alpn="h2,h3"
    port=443
    mandatory=alpn,port
    well-known="api-catalog"
)
_index._agents.whatsunity.app.    3600 IN TXT   "v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog"

; 2. Agent-to-Agent Protocol Entrypoint
_a2a._agents.whatsunity.app.      3600 IN SVCB  1 whatsunity.app. (
    alpn="a2a"
    port=443
    mandatory=alpn,port
)
_a2a._agents.whatsunity.app.      3600 IN HTTPS 1 whatsunity.app. (
    alpn="a2a"
    port=443
    mandatory=alpn,port
)

; 3. Model Context Protocol Entrypoint
_mcp._agents.whatsunity.app.      3600 IN SVCB  1 whatsunity.app. (
    alpn="mcp"
    port=443
    mandatory=alpn,port
)
_mcp._agents.whatsunity.app.      3600 IN HTTPS 1 whatsunity.app. (
    alpn="mcp"
    port=443
    mandatory=alpn,port
)

; 4. WWW Aliases
_index._agents.www.whatsunity.app. 3600 IN CNAME _index._agents.whatsunity.app.
_a2a._agents.www.whatsunity.app.   3600 IN CNAME _a2a._agents.whatsunity.app.
_mcp._agents.www.whatsunity.app.   3600 IN CNAME _mcp._agents.whatsunity.app.
```

### Name.com Setup (Current whatsunity.app NS)

1. Navigate to **Name.com** > **My Domains** > **`whatsunity.app`** > **DNS Records**.
2. Add records:
   - **Type**: `HTTPS` (or `SVCB`) | **Host**: `_index._agents` | **Priority**: `1` | **Target**: `whatsunity.app.` | **Params**: `alpn="h2,h3" port=443 mandatory=alpn,port well-known="api-catalog"`
   - **Type**: `HTTPS` (or `SVCB`) | **Host**: `_a2a._agents` | **Priority**: `1` | **Target**: `whatsunity.app.` | **Params**: `alpn="a2a" port=443 mandatory=alpn,port`
   - **Type**: `HTTPS` (or `SVCB`) | **Host**: `_mcp._agents` | **Priority**: `1` | **Target**: `whatsunity.app.` | **Params**: `alpn="mcp" port=443 mandatory=alpn,port`
   - **Type**: `TXT` | **Host**: `_index._agents` | **Answer**: `v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog`
3. Enable DNSSEC under **Domain Settings** > **DNSSEC**.

### Cloudflare DNS Setup

1. In Cloudflare Dashboard > **DNS** > **Records**:
   - Add `HTTPS` records with Name `_index._agents`, `_a2a._agents`, `_mcp._agents`.
   - Add `TXT` record with Name `_index._agents` and content `v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog`.
2. Under **DNS** > **Settings** > **DNSSEC**, click **Enable DNSSEC** and copy the DS record to your domain registrar.

### AWS Route 53 / Terraform

```hcl
resource "aws_route53_record" "dnsaid_index_https" {
  zone_id = var.hosted_zone_id
  name    = "_index._agents.${var.domain}"
  type    = "HTTPS"
  ttl     = 3600
  records = ["1 whatsunity.app. alpn=\"h2,h3\" port=443 mandatory=alpn,port"]
}

resource "aws_route53_record" "dnsaid_a2a_https" {
  zone_id = var.hosted_zone_id
  name    = "_a2a._agents.${var.domain}"
  type    = "HTTPS"
  ttl     = 3600
  records = ["1 whatsunity.app. alpn=\"a2a\" port=443 mandatory=alpn,port"]
}

resource "aws_route53_record" "dnsaid_mcp_https" {
  zone_id = var.hosted_zone_id
  name    = "_mcp._agents.${var.domain}"
  type    = "HTTPS"
  ttl     = 3600
  records = ["1 whatsunity.app. alpn=\"mcp\" port=443 mandatory=alpn,port"]
}

resource "aws_route53_record" "dnsaid_index_txt" {
  zone_id = var.hosted_zone_id
  name    = "_index._agents.${var.domain}"
  type    = "TXT"
  ttl     = 3600
  records = ["\"v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog\""]
}
```

---

## 9. HTML Discovery Elements

In `index.html` within `<head>`, mirror the HTTP discovery headers for HTML scrapers:

```html
<!-- Agent Discovery & Machine-Readable Links (RFC 8288 & RFC 9727) -->
<link rel="api-catalog" type="application/linkset+json" href="/.well-known/api-catalog" />
<link rel="service-doc" type="text/markdown" href="/whatsunity.md" />
<link rel="describedby" type="text/plain" href="/llms.txt" />
<link rel="service-desc" type="text/plain" href="/llms-full.txt" />
```

---

## 10. Crawler & Bot Directives (`robots.txt`)

Explicitly allow agent files and `.well-known` endpoints in `public/robots.txt`:

```robots
User-agent: *
Allow: /
Allow: /whatsunity.md
Allow: /whatsunity-ar.md
Allow: /llms.txt
Allow: /llms-full.txt
Allow: /.well-known/
```

---

## 11. Validation & Verification Runbook

### Automated API Audit
Test domain compliance using the `isitagentready.com` scan API:

```bash
node -e "fetch('https://isitagentready.com/api/scan', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ url: 'https://whatsunity.app' })
}).then(r => r.json()).then(d => {
  console.log('linkHeaders:', d.checks?.discoverability?.linkHeaders?.status);
  console.log('markdownNegotiation:', d.checks?.contentAccessibility?.markdownNegotiation?.status);
  console.log('apiCatalog:', d.checks?.discovery?.apiCatalog?.status);
  console.log('dnsAidStatus:', d.checks?.discoverability?.dnsAid?.status);
  console.log('webBotAuth:', d.checks?.botAccessControl?.webBotAuth?.status);
});"
```

Expected status: `"pass"` for all checks.

### Web Bot Auth Directory Verification

Verify the JWKS directory is accessible and correctly formatted:

```bash
curl -s -D - "https://whatsunity.app/.well-known/http-message-signatures-directory"
```

Verify that:
- HTTP status is `200 OK`.
- `Content-Type` is `application/http-message-signatures-directory+json`.
- Body contains valid JSON with a `keys` array and an Ed25519 public key (`kty: "OKP"`, `crv: "Ed25519"`, `kid: "..."`).

### DoH & DNSSEC CLI Validation

Run queries using DoH with DNSSEC validation enabled (`do=1`):

```bash
# 1. Query Cloudflare DoH for SVCB record
curl -s -H "Accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=_index._agents.whatsunity.app&type=SVCB&do=1"

# 2. Query Cloudflare DoH for HTTPS record
curl -s -H "Accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=_index._agents.whatsunity.app&type=HTTPS&do=1"

# 3. Query Cloudflare DoH for TXT fallback
curl -s -H "Accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=_index._agents.whatsunity.app&type=TXT&do=1"

# 4. Query Google DoH
curl -s -H "Accept: application/dns-json" \
  "https://dns.google/resolve?name=_index._agents.whatsunity.app&type=HTTPS&do=1"
```

Ensure:
- `"Status": 0` (NOERROR)
- `"AD": true` (Authenticated Data flag confirmed by DNSSEC)
- `"Answer"` array contains the records.

### Manual HTTP CLI Verification

1. **Verify Default HTML Delivery for Browsers**:
   ```bash
   curl -s -D - -o /dev/null -H "Accept: text/html" http://localhost:4173/
   ```
   *Expected*: `Content-Type: text/html`, `Link: ...`, `Vary: Accept`.

2. **Verify Agent Markdown Negotiation**:
   ```bash
   curl -s -D - -o /dev/null -H "Accept: text/markdown" http://localhost:4173/
   ```
   *Expected*: `Content-Type: text/markdown; charset=utf-8`, `x-markdown-tokens: 2380`, `Vary: Accept`.

3. **Verify API Catalog**:
   ```bash
   curl -s -D - -o /dev/null http://localhost:4173/.well-known/api-catalog
   ```
   *Expected*: `HTTP/1.1 200 OK`, `Content-Type: application/linkset+json`.

---

## 12. Living Roadmap: Next Agentic Upgrades

Update this skill as each subsequent standard is applied:

- [x] **DNS-AID (DNS for AI Discovery)**:
  - Published `_index._agents`, `_a2a._agents`, `_mcp._agents` ServiceMode SVCB / HTTPS and TXT records with DNSSEC validation.
- [x] **Web Bot Auth & HTTP Message Signatures**:
  - Published Ed25519 JWKS at `/.well-known/http-message-signatures-directory` and outgoing request signing utility.
- [ ] **MCP Server Card**:
  - Expose `/mcp` or `/.well-known/mcp.json` detailing Model Context Protocol tools and schemas.
- [ ] **Agent Skills Specification**:
  - Expose `/.well-known/agent-skills/` with actionable machine runbooks.
- [ ] **Auth.md & OAuth Protected Resource Discovery**:
  - Expose `/auth.md` or `/.well-known/oauth-protected-resource` for programmatic authorization.
- [ ] **Content Signals**:
  - Implement `content-signal: ai-train=yes, search=yes` HTTP response headers.
