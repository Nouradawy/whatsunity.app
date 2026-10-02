import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const url = req.url || "/";
  const isArabic = url.includes("lang=ar");

  let filename = "resident.md";
  let tokens = "980";

  if (url.includes("privacy-policy") || url.includes("policy=privacy")) {
    filename = isArabic ? "privacy_policy_ar.md" : "privacy_policy.md";
    tokens = isArabic ? "980" : "850";
  } else if (url.includes("terms-conditions") || url.includes("policy=terms")) {
    filename = isArabic ? "terms_conditions_ar.md" : "terms_conditions.md";
    tokens = isArabic ? "820" : "720";
  } else if (url.includes("catalog")) {
    filename = isArabic ? "catalog-ar.md" : "catalog.md";
    tokens = isArabic ? "5200" : "4500";
  } else if (url.includes("auth.md") || url.includes("/auth")) {
    filename = "auth.md";
    tokens = "910";
  } else if (url.includes("route=technical") || url.includes("whatsunity") || url.includes("casestudy")) {
    filename = isArabic ? "whatsunity-ar.md" : "whatsunity.md";
    tokens = isArabic ? "2230" : "2380";
  } else if (url.includes("route=resident") || url === "/" || url.startsWith("/?") || url === "") {
    filename = isArabic ? "resident-ar.md" : "resident.md";
    tokens = isArabic ? "1100" : "980";
  } else if (isArabic) {
    filename = "resident-ar.md";
    tokens = "1100";
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
