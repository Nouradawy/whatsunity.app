/**
 * DNS-AID & DNSSEC Verification Tool
 * Queries Cloudflare & Google DoH resolvers with DNSSEC (do=1)
 * Standard: IETF draft-mozleywilliams-dnsop-dnsaid & RFC 9460
 */

const DOMAIN = "whatsunity.app";
const RESOLVERS = [
  { name: "Cloudflare DoH", url: "https://cloudflare-dns.com/dns-query" },
  { name: "Google DoH", url: "https://dns.google/resolve" },
];

const CHECKS = [
  { name: `_index._agents.${DOMAIN}`, type: "HTTPS" },
  { name: `_index._agents.${DOMAIN}`, type: "SVCB" },
  { name: `_index._agents.${DOMAIN}`, type: "TXT" },
  { name: `_a2a._agents.${DOMAIN}`, type: "HTTPS" },
  { name: `_a2a._agents.${DOMAIN}`, type: "SVCB" },
  { name: `_mcp._agents.${DOMAIN}`, type: "HTTPS" },
  { name: `_mcp._agents.${DOMAIN}`, type: "SVCB" },
  { name: `_catalog._agents.${DOMAIN}`, type: "TXT" },
  { name: `_index._agents.www.${DOMAIN}`, type: "HTTPS" },
];

async function queryDoh(resolverUrl, recordName, recordType) {
  const url = `${resolverUrl}?name=${encodeURIComponent(recordName)}&type=${encodeURIComponent(recordType)}&do=1`;
  const res = await fetch(url, { headers: { Accept: "application/dns-json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

async function verify() {
  console.log(`================================================================`);
  console.log(` Verifying DNS-AID & DNSSEC Records for ${DOMAIN}`);
  console.log(`================================================================\n`);

  let allPassed = true;

  for (const check of CHECKS) {
    process.stdout.write(`Querying ${check.name} [${check.type}]... `);
    let resolved = false;

    for (const resolver of RESOLVERS) {
      try {
        const data = await queryDoh(resolver.url, check.name, check.type);
        const status = data.Status; // 0 = NOERROR, 3 = NXDOMAIN
        const ad = data.AD; // Authenticated Data flag (DNSSEC)

        if (status === 0 && data.Answer && data.Answer.length > 0) {
          const records = data.Answer.map((a) => a.data).join(", ");
          console.log(`\x1b[32mFOUND\x1b[0m (Status 0, AD=${ad}) via ${resolver.name}`);
          console.log(`  └─ Data: ${records}`);
          resolved = true;
          break;
        }
      } catch (err) {
        // try next resolver
      }
    }

    if (!resolved) {
      console.log(`\x1b[31mNOT FOUND (NXDOMAIN)\x1b[0m`);
      allPassed = false;
    }
  }

  console.log(`\n================================================================`);
  if (allPassed) {
    console.log(` \x1b[32mSUCCESS: All DNS-AID records are published and verified!\x1b[0m`);
  } else {
    console.log(` \x1b[33mACTION REQUIRED: Publish the missing records in your DNS console.\x1b[0m`);
    console.log(` See dns/README.md and dns/dns-aid.zone for exact record values.`);
  }
  console.log(`================================================================\n`);
}

verify().catch(console.error);
