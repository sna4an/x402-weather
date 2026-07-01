import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const slugs = [
    "metat", "open-weather", "ski-resort", "ai-weather", "weather-api",
    "weather338", "weatherapi", "yahoo-weather", "visual-crossing", "foreca",
    "sea-temperature", "easy-weather", "weather138", "apjoy-forecast",
    "open-weather-map", "datanest-weather", "datanest-forecast", "pickleball",
    "tidecheck", "amazon-reviews", "weather-db"
  ];

  const resources = slugs.map((slug) => `https://x402-weather.vercel.app/api/${slug}`);

  return NextResponse.json({
    version: 1,
    resources,
  });
}
