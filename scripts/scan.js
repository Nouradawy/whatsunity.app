/**
 * Quick scan runner for isitagentready.com
 */

const TARGET_URL = process.argv[2] || 'https://whatsunity.app';

async function runScan() {
  console.log(`Scanning ${TARGET_URL} on isitagentready.com...\n`);
  const res = await fetch('https://isitagentready.com/api/scan', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ url: TARGET_URL }),
  });

  if (!res.ok) {
    throw new Error(`Scan API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  console.log(`Scan Time: ${data.scannedAt}`);
  console.log(`Level: ${data.level} (${data.levelName})\n`);

  let totalPass = 0;
  let totalFail = 0;
  let totalNeutral = 0;

  for (const [category, items] of Object.entries(data.checks || {})) {
    console.log(`\x1b[1m=== ${category.toUpperCase()} ===\x1b[0m`);
    for (const [name, check] of Object.entries(items)) {
      const statusColor =
        check.status === 'pass'
          ? '\x1b[32mPASS\x1b[0m'
          : check.status === 'fail'
          ? '\x1b[31mFAIL\x1b[0m'
          : '\x1b[33mNEUTRAL\x1b[0m';

      if (check.status === 'pass') totalPass++;
      else if (check.status === 'fail') totalFail++;
      else totalNeutral++;

      console.log(`  [${statusColor}] ${name.padEnd(24)} : ${check.message}`);
    }
  }

  console.log('\n----------------------------------------');
  console.log(`Summary: \x1b[32m${totalPass} Passed\x1b[0m, \x1b[31m${totalFail} Failed\x1b[0m, \x1b[33m${totalNeutral} Neutral\x1b[0m`);
  console.log('----------------------------------------\n');
}

runScan().catch(console.error);
