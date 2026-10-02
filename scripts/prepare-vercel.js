import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

console.log("[prepare-vercel] Preparing production bundle for Agent-Native routing...");

if (fs.existsSync(distDir)) {
  const indexPath = path.join(distDir, "index.html");
  const appPath = path.join(distDir, "app.html");

  if (fs.existsSync(indexPath)) {
    // Keep dist/index.html intact so Vercel serves the root / cleanly without Content-Disposition header.
    // Also create app.html as fallback for any legacy rewrite rules.
    fs.copyFileSync(indexPath, appPath);
    console.log("[prepare-vercel] dist/index.html retained and mirrored to dist/app.html");
  }

  // Ensure og.png is synced to dist
  const ogPngSrc = path.join(publicDir, "og.png");
  const ogPngDist = path.join(distDir, "og.png");
  if (fs.existsSync(ogPngSrc) && !fs.existsSync(ogPngDist)) {
    fs.copyFileSync(ogPngSrc, ogPngDist);
    console.log("[prepare-vercel] Synced og.png to dist/og.png");
  }

  // Ensure public files like auth.md and .well-known are synced to dist
  const authMdSrc = path.join(publicDir, "auth.md");
  const authMdDist = path.join(distDir, "auth.md");
  if (fs.existsSync(authMdSrc) && !fs.existsSync(authMdDist)) {
    fs.copyFileSync(authMdSrc, authMdDist);
  }

  console.log("[prepare-vercel] Agent-Ready bundle prepared successfully.");
} else {
  console.warn("[prepare-vercel] Warning: dist directory not found.");
}
