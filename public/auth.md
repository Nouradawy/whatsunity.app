# auth.md — WhatsUnity Agent Authentication & Registration

Welcome to the automated agent registration and authorization specification for **WhatsUnity Compound OS**.

This document defines how autonomous AI agents, programmatic tools, and third-party residential service providers discover endpoints, authenticate, obtain credentials, and interact securely with WhatsUnity community APIs.

---

## 1. Audience & Overview

- **Audience**: Autonomous AI agents, LLM coding assistants, automated compound gatekeepers, contractor bots, and programmatic integration clients.
- **Protocol**: OAuth 2.0 (RFC 6749, RFC 8414) / OpenID Connect Core 1.0 / Auth.md specification.
- **Base Authority**: `https://whatsunity.app`
- **Resource Server**: `https://whatsunity.app`
- **Primary Authorization Server**: `https://whatsunity.app`

---

## 2. Machine-Readable Discovery Endpoints

Autonomous agents should dynamically parse the following standardized discovery documents:

| Standard | Discovery Endpoint | Description |
| :--- | :--- | :--- |
| **OAuth Protected Resource (RFC 9728)** | `/.well-known/oauth-protected-resource` | Declares protected resource identifier, authorization servers, and scopes. |
| **OAuth Authorization Server (RFC 8414)** | `/.well-known/oauth-authorization-server` | Advertises token, authorization, registration endpoints, and `agent_auth` capabilities. |
| **OpenID Connect Discovery 1.0** | `/.well-known/openid-configuration` | OpenID Connect identity provider metadata. |
| **HTTP Message Signatures Directory** | `/.well-known/http-message-signatures-directory` | Ed25519 JWKS public keys for Web Bot Auth signature verification. |

---

## 3. Agent Registration (`agent_auth`)

Autonomous agents register via the automated registration endpoint:
- **Registration URI**: `https://whatsunity.app/api/agents/register`
- **Supported Identity Types**:
  1. `identity_assertion` (Cryptographic agent identity token)
  2. `verified_email` (Human-in-the-loop or verified organization email)
  3. `anonymous` (Zero-friction ephemeral sandbox access)

### Method A: Cryptographic Identity Assertion (ID-JAG)
- **Assertion Type**: `urn:ietf:params:oauth:token-type:id-jag`
- **Credential Types**: `urn:ietf:params:oauth:token-type:id-jag`, `api_key`
- **Claim URI**: `https://whatsunity.app/agent/claim`
- **Revocation URI**: `https://whatsunity.app/agent/revoke`

```http
POST /api/agents/register HTTP/1.1
Host: whatsunity.app
Content-Type: application/json

{
  "client_name": "DeliveryBot-Express",
  "identity_type": "identity_assertion",
  "assertion_type": "urn:ietf:params:oauth:token-type:id-jag",
  "assertion": "<signed_identity_jwt>",
  "scopes": ["gates:verify"]
}
```

### Method B: Verified Email Registration
- **Assertion Type**: `verified_email`
- **Credential Types**: `api_key`, `client_credentials`
- **Claim URI**: `https://whatsunity.app/agent/claim`

```http
POST /api/agents/register HTTP/1.1
Host: whatsunity.app
Content-Type: application/json

{
  "client_name": "FacilityManagementAgent",
  "identity_type": "verified_email",
  "email": "operations@smartcompound.example",
  "scopes": ["compounds:read", "tickets:manage"]
}
```

### Method C: Ephemeral Anonymous Registration
- **Credential Types**: `ephemeral_token`, `api_key`
- **Claim URI**: `https://whatsunity.app/agent/claim`

```http
POST /api/agents/register HTTP/1.1
Host: whatsunity.app
Content-Type: application/json

{
  "client_name": "AutonomousResearcher",
  "identity_type": "anonymous",
  "scopes": ["compounds:read"]
}
```

---

## 4. Scopes & Permissions

| Scope | Description | Allowed Roles |
| :--- | :--- | :--- |
| `compounds:read` | Read public compound facilities, community notices, and visitor guidelines | Anonymous, Verified, Admin |
| `gates:verify` | Offline & online cryptographic QR gate pass verification | Gatekeeper Tablets, Patrol Bots |
| `tickets:manage` | File and inspect maintenance work orders across 9 trades | Residents, Coordinators, Technicians |
| `agents:communicate` | Autonomous Agent-to-Agent (A2A) negotiation and messaging | Verified Agents |

---

## 5. Token Issuance & Bearer Authentication

Once registered, agents exchange credentials for Bearer tokens at the token endpoint:
- **Token Endpoint**: `https://whatsunity.app/oauth/token`
- **Grant Types**: `client_credentials`, `authorization_code`, `urn:ietf:params:oauth:grant-type:token-exchange`

### Example Token Exchange:
```http
POST /oauth/token HTTP/1.1
Host: whatsunity.app
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&client_id=agent_...&client_secret=sec_...&scope=compounds:read%20gates:verify
```

### Example Authenticated API Request:
```http
GET /api/v1/compound/status HTTP/1.1
Host: whatsunity.app
Authorization: Bearer <access_token>
Accept: application/json
```

---

## 6. Token Revocation & Security Events

WhatsUnity adheres to the Auth.md security event model:
- **Revocation Event**: `https://schemas.auth.md/events/revocation`
- **Revocation URI**: `https://whatsunity.app/agent/revoke`

To instantly revoke compromised agent credentials:
```http
POST /agent/revoke HTTP/1.1
Host: whatsunity.app
Content-Type: application/json
Authorization: Bearer <access_token>

{
  "token": "<access_or_refresh_token>",
  "token_type_hint": "access_token"
}
```

---

## 7. Contact & Security Reporting

- **Publisher**: WhatsUnity Autonomous Systems
- **Author**: Noureldin Adawy ([nouradawy.tech](https://www.nouradawy.tech/))
- **Security Inquiries**: `security@whatsunity.app`
- **Agentic Skill Runbook**: [agentic/SKILL.md](https://whatsunity.app/.well-known/agent-skills/agentic/SKILL.md)
