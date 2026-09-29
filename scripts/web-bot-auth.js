/**
 * Web Bot Auth (RFC 9421 & draft-meunier-web-bot-auth-architecture)
 * 
 * Utility to sign outgoing HTTP requests using the published Ed25519 key in
 * /.well-known/http-message-signatures-directory so receiving servers (e.g. Cloudflare)
 * can cryptographically verify bot and agent identity.
 */

import crypto from "crypto";

// Published key metadata
export const KEY_ID = "uvLgcw37jKv1lu_1vlAtrrWBymjsI7JJ4b0jVvni4WI";
export const SIGNATURE_AGENT_URL = "https://whatsunity.app";

// Ed25519 Private Key JWK (can also be injected via process.env.WEB_BOT_AUTH_PRIVATE_KEY)
export const DEFAULT_PRIVATE_KEY_JWK = {
  crv: "Ed25519",
  d: "iRwPMpNe79FiodLfz3FLo3JefHpeWVO2ZoZJ0D5RAv0",
  x: "COemIklUm9rrjpYP67t9Thrw1R2Tgn_NBjCzTbWDXkE",
  kty: "OKP"
};

/**
 * Sign an outgoing request for Web Bot Auth verification.
 * 
 * @param {Object} options
 * @param {string} options.authority Host / domain being requested (e.g. "api.example.com")
 * @param {string} [options.signatureAgent] The URL of this bot's key directory
 * @param {number} [options.validitySeconds=60] Signature validity window (default: 60s)
 * @param {Object} [options.privateKeyJwk] Ed25519 private key JWK
 * @returns {Object} Headers to attach to the outgoing HTTP request
 */
export function signBotRequest({
  authority,
  signatureAgent = SIGNATURE_AGENT_URL,
  validitySeconds = 60,
  privateKeyJwk = DEFAULT_PRIVATE_KEY_JWK
}) {
  const created = Math.floor(Date.now() / 1000);
  const expires = created + validitySeconds;

  // Nonce for replay deterrence
  const nonce = crypto.randomBytes(32).toString("base64");

  // Format Signature-Agent as structured string (quoted)
  const formattedAgent = `"${signatureAgent}"`;

  // Build Signature-Input header per RFC 9421 / Cloudflare Web Bot Auth spec
  const sigLabel = "sig1";
  const signatureInput = `${sigLabel}=("@authority" "signature-agent");created=${created};keyid="${KEY_ID}";alg="ed25519";expires=${expires};nonce="${nonce}";tag="web-bot-auth"`;

  // Construct signature base
  const signatureBase = [
    `"@authority": ${authority}`,
    `"signature-agent": ${formattedAgent}`,
    `"@signature-params": ("@authority" "signature-agent");created=${created};keyid="${KEY_ID}";alg="ed25519";expires=${expires};nonce="${nonce}";tag="web-bot-auth"`
  ].join("\n");

  // Sign with Ed25519 private key
  const privateKey = crypto.createPrivateKey({
    key: privateKeyJwk,
    format: "jwk"
  });

  const signatureBuffer = crypto.sign(null, Buffer.from(signatureBase, "utf-8"), privateKey);
  const signatureHeader = `${sigLabel}=:${signatureBuffer.toString("base64")}:`;

  return {
    "Signature-Agent": formattedAgent,
    "Signature-Input": signatureInput,
    "Signature": signatureHeader
  };
}

// CLI testing mode
if (process.argv[1]?.endsWith("web-bot-auth.js")) {
  const targetHost = process.argv[2] || "api.partner-agent.com";
  console.log(`Generating signed Web Bot Auth headers for: ${targetHost}\n`);
  const headers = signBotRequest({ authority: targetHost });
  console.log(JSON.stringify(headers, null, 2));
}
