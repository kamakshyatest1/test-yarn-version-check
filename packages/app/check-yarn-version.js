const { execSync } = require('child_process');

const version = execSync('yarn --version').toString().trim();

const allowed = '3.8.7';
const blocked = ['1.22.19', '2.4.3', '4.9.1'];

if (blocked.includes(version)) {
  console.error(`❌ Blocked Yarn version detected: ${version}`);
  process.exit(1);
}

if (version !== allowed) {
  console.warn(`⚠️ Warning: Not tested with Yarn ${version}. Use ${allowed} for best results.`);
}
