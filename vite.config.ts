import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

const agentDiscoveryAndNegotiationPlugin = () => {
  const handleRequest = (req: any, res: any, next: any) => {
    const url = req.url || "/";
    const pathname = url.split("?")[0];
    const accept = (req.headers["accept"] as string) || "";

    // 1. Extensionless & JSON .well-known MIME types
    if (pathname === "/.well-known/api-catalog") {
      res.setHeader("Content-Type", "application/linkset+json");
      res.setHeader("Access-Control-Allow-Origin", "*");
    } else if (
      pathname === "/.well-known/ai-catalog.json" ||
      pathname === "/.well-known/agent-card.json" ||
      pathname.startsWith("/.well-known/mcp/") ||
      pathname === "/.well-known/mcp.json" ||
      pathname === "/.well-known/agent-skills/index.json" ||
      pathname === "/.well-known/skills/index.json" ||
      pathname === "/.well-known/oauth-protected-resource" ||
      pathname === "/.well-known/oauth-authorization-server" ||
      pathname === "/.well-known/openid-configuration"
    ) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
    } else if (pathname === "/.well-known/http-message-signatures-directory") {
      res.setHeader("Content-Type", "application/http-message-signatures-directory+json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=86400");
    } else if (pathname === "/auth.md") {
      res.setHeader("Content-Type", "text/markdown; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Vary", "Accept");
    }

    // 2. Markdown Content Negotiation (Accept: text/markdown)
    if (accept.includes("text/markdown")) {
      const isArabic = url.includes("lang=ar");
      let mdFile = "resident.md";
      let tokens = 980;

      if (pathname.includes("privacy-policy") || url.includes("policy=privacy")) {
        mdFile = isArabic ? "privacy_policy_ar.md" : "privacy_policy.md";
        tokens = isArabic ? 980 : 850;
      } else if (pathname.includes("terms-conditions") || url.includes("policy=terms")) {
        mdFile = isArabic ? "terms_conditions_ar.md" : "terms_conditions.md";
        tokens = isArabic ? 820 : 720;
      } else if (pathname.includes("catalog")) {
        mdFile = isArabic ? "catalog-ar.md" : "catalog.md";
        tokens = isArabic ? 5200 : 4500;
      } else if (pathname === "/auth.md" || pathname === "/auth") {
        mdFile = "auth.md";
        tokens = 910;
      } else if (url.includes("route=technical") || pathname.includes("whatsunity") || pathname.includes("casestudy")) {
        mdFile = isArabic ? "whatsunity-ar.md" : "whatsunity.md";
        tokens = isArabic ? 2230 : 2380;
      } else if (url.includes("route=resident") || pathname === "/" || url.startsWith("/?") || pathname === "") {
        mdFile = isArabic ? "resident-ar.md" : "resident.md";
        tokens = isArabic ? 1100 : 980;
      } else if (isArabic) {
        mdFile = "resident-ar.md";
        tokens = 1100;
      }

      // Check public or dist candidate
      const filePath = path.resolve(__dirname, "public", mdFile);
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "text/markdown; charset=utf-8");
        res.setHeader("x-markdown-tokens", String(tokens));
        res.setHeader("Vary", "Accept");
        res.setHeader("Access-Control-Allow-Origin", "*");
        const content = fs.readFileSync(filePath, "utf-8");
        res.end(content);
        return;
      }
    }

    // 3. Static standalone catalog route
    if (pathname === "/catalog" || pathname === "/catalog.html") {
      const catalogHtmlPath = path.resolve(__dirname, "public", "catalog.html");
      if (fs.existsSync(catalogHtmlPath)) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Vary", "Accept");
        res.end(fs.readFileSync(catalogHtmlPath, "utf-8"));
        return;
      }
    }

    // 4. Fallback for preview mode if index.html was moved to app.html
    if (pathname === "/" || pathname === "/index.html") {
      const distIndex = path.resolve(__dirname, "dist", "index.html");
      const distApp = path.resolve(__dirname, "dist", "app.html");
      if (!fs.existsSync(distIndex) && fs.existsSync(distApp)) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Vary", "Accept");
        res.end(fs.readFileSync(distApp, "utf-8"));
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
    tailwindcss(),
    react(),
    agentDiscoveryAndNegotiationPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
    headers: {
      Link: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="ai-catalog", </whatsunity.md>; rel="service-doc", </catalog.md>; rel="catalog", </catalog-ar.md>; rel="catalog", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"',
      Vary: "Accept",
    },
  },
  preview: {
    port: 3000,
    host: true,
    headers: {
      Link: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="ai-catalog", </whatsunity.md>; rel="service-doc", </catalog.md>; rel="catalog", </catalog-ar.md>; rel="catalog", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"',
      Vary: "Accept",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
});
