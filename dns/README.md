# DNS for AI Discovery (DNS-AID) & DNSSEC Guide

This guide details how to publish and maintain **DNS for AI Discovery (DNS-AID)** records for `whatsunity.app` in compliance with **[IETF draft-mozleywilliams-dnsop-dnsaid](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/)** and **[RFC 9460](https://www.rfc-editor.org/rfc/rfc9460)** (SVCB/HTTPS RR).

---

## 1. Overview & Architecture

Autonomous AI agents (ChatGPT, Gemini, Claude, Cursor, OpenCode, and external agent swarms) discover organization capabilities and endpoints directly via DNS queries to standard well-known labels under the `_agents` namespace:

1. **`_index._agents.whatsunity.app`**: Primary index pointing to machine-readable catalogs (`/.well-known/api-catalog`).
2. **`_a2a._agents.whatsunity.app`**: Direct Agent-to-Agent protocol negotiation entrypoint.
3. **`_mcp._agents.whatsunity.app`**: Model Context Protocol tool & server endpoint.

By leveraging **ServiceMode SVCB / HTTPS** records, resolvers receive connection parameters (`alpn`, `port`, `mandatory`, `well-known`) in a single round-trip without intermediate HTTP redirects or manual HTML scraping.

---

## 2. Zone Records Summary

The complete zone file is available at [`dns-aid.zone`](./dns-aid.zone).

| Record Name | Type | Priority | Target | Parameters / Value |
|---|---|---|---|---|
| `_index._agents.whatsunity.app` | **SVCB** | `1` | `whatsunity.app.` | `alpn="h2,h3" port=443 mandatory=alpn,port well-known="api-catalog"` |
| `_index._agents.whatsunity.app` | **HTTPS** | `1` | `whatsunity.app.` | `alpn="h2,h3" port=443 mandatory=alpn,port well-known="api-catalog"` |
| `_index._agents.whatsunity.app` | **TXT** | - | - | `"v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog"` |
| `_a2a._agents.whatsunity.app` | **SVCB** | `1` | `whatsunity.app.` | `alpn="a2a" port=443 mandatory=alpn,port` |
| `_a2a._agents.whatsunity.app` | **HTTPS** | `1` | `whatsunity.app.` | `alpn="a2a" port=443 mandatory=alpn,port` |
| `_mcp._agents.whatsunity.app` | **SVCB** | `1` | `whatsunity.app.` | `alpn="mcp" port=443 mandatory=alpn,port` |
| `_mcp._agents.whatsunity.app` | **HTTPS** | `1` | `whatsunity.app.` | `alpn="mcp" port=443 mandatory=alpn,port` |
| `_index._agents.www.whatsunity.app` | **CNAME** | - | `_index._agents.whatsunity.app.` | - |
| `_a2a._agents.www.whatsunity.app` | **CNAME** | - | `_a2a._agents.whatsunity.app.` | - |
| `_mcp._agents.www.whatsunity.app` | **CNAME** | - | `_mcp._agents.whatsunity.app.` | - |

---

## 3. Provider Setup Instructions

### Option A: Name.com (Current Authoritative Nameservers)

`whatsunity.app` currently delegates to `ns1.name.com`, `ns2.name.com`, `ns3.name.com`, `ns4.name.com`.

1. **Log in to Name.com Dashboard**:
   - Go to **My Domains** > click **`whatsunity.app`**.
   - Select **DNS Records**.

2. **Add SVCB / HTTPS Records**:
   - If the dropdown includes **SVCB** or **HTTPS**:
     - **Host**: `_index._agents`
     - **Type**: `HTTPS` (or `SVCB`)
     - **Priority**: `1`
     - **Target**: `whatsunity.app.`
     - **Params**: `alpn="h2,h3" port=443 mandatory=alpn,port well-known="api-catalog"`
   - Repeat for `_a2a._agents` and `_mcp._agents`.

3. **Add TXT Fallback Record**:
   - **Host**: `_index._agents`
   - **Type**: `TXT`
   - **Answer**: `v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog`
   - **TTL**: `300` (or `3600`)

4. **Enable DNSSEC on Name.com**:
   - In Domain Management for `whatsunity.app`, scroll to **DNSSEC** or **Advanced Settings**.
   - Click **Enable DNSSEC** (or follow Name.com DNSSEC one-click wizard).
   - This publishes the DS records to the `.app` TLD registry, enabling validating resolvers to return `AD=true`.

---

### Option B: Cloudflare DNS

If using Cloudflare DNS for accelerated resolution and automatic DNSSEC:

1. **Import Records or Add via Dashboard**:
   - Go to **DNS** > **Records** > **Add record**.
   - **Type**: `HTTPS`
     - **Name**: `_index._agents`
     - **Priority**: `1`
     - **Target**: `whatsunity.app`
     - **Value (Params)**: `alpn=h2,h3 port=443 mandatory=alpn,port`
   - **Type**: `HTTPS`
     - **Name**: `_a2a._agents`
     - **Priority**: `1`
     - **Target**: `whatsunity.app`
     - **Value (Params)**: `alpn=a2a port=443 mandatory=alpn,port`
   - **Type**: `HTTPS`
     - **Name**: `_mcp._agents`
     - **Priority**: `1`
     - **Target**: `whatsunity.app`
     - **Value (Params)**: `alpn=mcp port=443 mandatory=alpn,port`
   - **Type**: `TXT`
     - **Name**: `_index._agents`
     - **Content**: `v=dnsaid1; alpn=h2,h3; port=443; uri=https://whatsunity.app/.well-known/api-catalog`

2. **Enable One-Click DNSSEC**:
   - Go to **DNS** > **Settings** > **DNSSEC** > Click **Enable DNSSEC**.
   - Copy the generated `DS record` (Key Tag, Algorithm, Digest Type, Digest) and paste into Name.com registrar under **Domain Details > DNSSEC**.

---

## 4. Verification & Testing

### 1. Verify via Cloudflare DoH (DNS-over-HTTPS with DNSSEC validation)

```bash
# Check SVCB record for _index._agents
curl -s -H "Accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=_index._agents.whatsunity.app&type=SVCB&do=1"

# Check HTTPS record for _index._agents
curl -s -H "Accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=_index._agents.whatsunity.app&type=HTTPS&do=1"

# Check TXT fallback
curl -s -H "Accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=_index._agents.whatsunity.app&type=TXT&do=1"
```

Verify that:
- `Status` is `0` (NOERROR).
- `AD` is `true` (DNSSEC Authenticated Data).
- The `Answer` array contains the SVCB/HTTPS or TXT records.

### 2. Verify with `isitagentready.com` API

Run from terminal:

```bash
node -e "fetch('https://isitagentready.com/api/scan', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ url: 'https://whatsunity.app' })
}).then(r => r.json()).then(d => {
  console.log('DNS-AID Status:', d.checks?.discoverability?.dnsAid?.status);
  console.log('DNSSEC Validated:', d.checks?.discoverability?.dnsAid?.details?.dnssecValidated);
  console.log('Service Records:', d.checks?.discoverability?.dnsAid?.details?.serviceRecordCount);
});"
```

Expected output:
```json
DNS-AID Status: pass
DNSSEC Validated: true
Service Records: >= 1
```
