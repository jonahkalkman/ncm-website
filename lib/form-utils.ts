import type { NextApiRequest, NextApiResponse } from "next";

export const esc = (value: unknown): string =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ] as string)
  );

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;

// Best-effort in-memory rate limit (per server instance). Use Upstash/Vercel
// firewall for a hard guarantee on serverless.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

/**
 * Validates a form request. Returns the body when OK, otherwise sends the
 * error response and returns null.
 */
export function guardForm(
  req: NextApiRequest,
  res: NextApiResponse
): Record<string, any> | null {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ data: "Method not allowed" });
    return null;
  }

  const ip =
    String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "")
      .split(",")[0]
      .trim() || "unknown";
  if (rateLimited(ip)) {
    res.status(429).json({ data: "Too many requests" });
    return null;
  }

  const body = req.body;
  if (!body || typeof body !== "object") {
    res.status(400).json({ data: "Missing data!" });
    return null;
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (body.website || body._hp) {
    res.status(200).json({ id: "ok" });
    return null;
  }

  for (const v of Object.values(body)) {
    if (String(v).length > MAX_LEN || (typeof v === "object" && v !== null)) {
      res.status(400).json({ data: "Invalid data!" });
      return null;
    }
  }

  if (body.email && !EMAIL_RE.test(body.email)) {
    res.status(400).json({ data: "Invalid email!" });
    return null;
  }

  return body;
}
