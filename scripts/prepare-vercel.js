import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

console.log("[prepare-vercel] Verifying production bundle for Agent-Ready routing...");

if (fs.existsSync(distDir)) {
  // Ensure public files like auth.md and .well-known are synced to dist
  const authMdSrc = path.join(publicDir, "auth.md");
  const authMdDist = path.join(distDir, "auth.md");
  if (fs.existsSync(authMdSrc) && !fs.existsSync(authMdDist)) {
    fs.copyFileSync(authMdSrc, authMdDist);
  }

  console.log("[prepare-vercel] Agent-Ready bundle verified successfully.");
} else {
  console.warn("[prepare-vercel] Warning: dist directory not found.");
}
