import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const url = req.url || "/";
  let filename = "whatsunity.md";
  let tokens = "2380";

  if (url.includes("privacy-policy")) {
    filename = "privacy_policy.md";
    tokens = "850";
  } else if (url.includes("terms-conditions")) {
    filename = "terms_conditions.md";
    tokens = "720";
  } else if (url.includes("catalog")) {
    filename = url.includes("lang=ar") ? "catalog-ar.md" : "catalog.md";
    tokens = "4500";
  } else if (url.includes("lang=ar")) {
    filename = "whatsunity-ar.md";
    tokens = "2230";
  }

  // Look in dist or public or root
  const candidates = [
    path.join(process.cwd(), "public", filename),
    path.join(process.cwd(), "dist", filename),
    path.join(process.cwd(), filename),
  ];

  let content = "";
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      content = fs.readFileSync(p, "utf-8");
      break;
    }
  }

  if (!content) {
    content = "# WhatsUnity Compound OS\n\nOne Home. One Subscription. Your Entire Household Included.";
  }

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader("x-markdown-tokens", tokens);
  res.setHeader("Vary", "Accept");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  res.status(200).send(content);
}
