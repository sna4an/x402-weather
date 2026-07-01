import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RAPIDAPI_HOSTS, getApiKey, buildPaymentRequired } from "./rapidapi";

export async function proxy(req: NextRequest) {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);
  // segments: ["api", "<slug>", ...rest]
  const slug = segments[1];
  const subPath = "/" + segments.slice(2).join("/");

  const route = RAPIDAPI_HOSTS[slug];
  if (!route) {
    return NextResponse.json({ error: "Unknown endpoint" }, { status: 404 });
  }

  // Check for payment header
  const paymentHeader = req.headers.get("X-Payment") || req.headers.get("x-payment");
  if (!paymentHeader) {
    const paymentRequired = buildPaymentRequired(route.price);
    return NextResponse.json(
      {},
      {
        status: 402,
        headers: {
          "Payment-Required": paymentRequired,
          "Content-Type": "application/json",
        },
      }
    );
  }

  // Proxy to RapidAPI
  const targetUrl = `https://${route.host}${subPath}${url.search}`;
  const apiKey = getApiKey();

  try {
    const headers: Record<string, string> = {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": route.host,
    };

    const init: RequestInit = {
      method: req.method,
      headers,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
      init.body = await req.text();
    }

    const resp = await fetch(targetUrl, init);
    const data = await resp.text();

    return new NextResponse(data, {
      status: resp.status,
      headers: { "Content-Type": resp.headers.get("Content-Type") || "application/json" },
    });
  } catch (err: any) {
    return NextResponse.json({ error: "Proxy error", message: err.message }, { status: 502 });
  }
}
