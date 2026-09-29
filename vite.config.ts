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

    if (pathname === "/.well-known/api-catalog") {
      res.setHeader("Content-Type", "application/linkset+json");
      res.setHeader("Access-Control-Allow-Origin", "*");
    }

    if (pathname === "/.well-known/http-message-signatures-directory") {
      res.setHeader("Content-Type", "application/http-message-signatures-directory+json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=86400");
    }

    if (accept.includes("text/markdown")) {
      let mdFile = "whatsunity.md";
      let tokens = 2380;

      if (pathname.includes("privacy-policy")) {
        mdFile = "privacy_policy.md";
        tokens = 850;
      } else if (pathname.includes("terms-conditions")) {
        mdFile = "terms_conditions.md";
        tokens = 720;
      } else if (url.includes("lang=ar")) {
        mdFile = "whatsunity-ar.md";
        tokens = 2230;
      }

      const filePath = path.resolve(__dirname, "public", mdFile);
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "text/markdown; charset=utf-8");
        res.setHeader("x-markdown-tokens", String(tokens));
        res.setHeader("Vary", "Accept");
        const content = fs.readFileSync(filePath, "utf-8");
        res.end(content);
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
      Link: '</.well-known/api-catalog>; rel="api-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"',
      Vary: "Accept",
    },
  },
  preview: {
    port: 3000,
    host: true,
    headers: {
      Link: '</.well-known/api-catalog>; rel="api-catalog", </whatsunity.md>; rel="service-doc", </llms.txt>; rel="describedby", </llms-full.txt>; rel="service-desc"',
      Vary: "Accept",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
});
