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
    // Copy index.html to app.html so Vercel can rewrite cleanly without static filesystem collisions
    fs.copyFileSync(indexPath, appPath);
    console.log("[prepare-vercel] Copied dist/index.html -> dist/app.html");

    // Remove index.html so Vercel does not bypass rewrites on root /
    fs.unlinkSync(indexPath);
    console.log("[prepare-vercel] Removed dist/index.html to enable Content-Negotiation rewrites on /");
  }

  // Ensure public files like auth.md and .well-known are in dist
  const authMdSrc = path.join(publicDir, "auth.md");
  const authMdDist = path.join(distDir, "auth.md");
  if (fs.existsSync(authMdSrc) && !fs.existsSync(authMdDist)) {
    fs.copyFileSync(authMdSrc, authMdDist);
  }

  console.log("[prepare-vercel] Agent-Ready bundle prepared successfully.");
} else {
  console.warn("[prepare-vercel] Warning: dist directory not found.");
}
