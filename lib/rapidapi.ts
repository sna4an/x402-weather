export const RAPIDAPI_HOSTS: Record<string, { host: string; price: string; label: string }> = {
  "metat": { host: "meteostat.p.rapidapi.com", price: "75000", label: "Meteostat" },
  "open-weather": { host: "open-weather127.p.rapidapi.com", price: "75000", label: "Open Weather" },
  "ski-resort": { host: "ski-resort-conditions.p.rapidapi.com", price: "100000", label: "Ski Resort Conditions" },
  "ai-weather": { host: "ai-weather-by-meteosource.p.rapidapi.com", price: "100000", label: "AI Weather by Meteosource" },
  "weather-api": { host: "weather-api167.p.rapidapi.com", price: "75000", label: "Weather API" },
  "weather338": { host: "weather338.p.rapidapi.com", price: "75000", label: "Weather338" },
  "weatherapi": { host: "weatherapi-com.p.rapidapi.com", price: "75000", label: "WeatherAPI" },
  "yahoo-weather": { host: "yahoo-weather5.p.rapidapi.com", price: "75000", label: "Yahoo Weather" },
  "visual-crossing": { host: "visual-crossing-weather.p.rapidapi.com", price: "100000", label: "Visual Crossing Weather" },
  "foreca": { host: "foreca-weather.p.rapidapi.com", price: "100000", label: "Foreca Weather" },
  "sea-temperature": { host: "sea-surface-temperature.p.rapidapi.com", price: "100000", label: "Sea Surface Temperature" },
  "easy-weather": { host: "easy-weather.p.rapidapi.com", price: "75000", label: "Easy Weather" },
  "weather138": { host: "weather-api138.p.rapidapi.com", price: "75000", label: "Weather API 138" },
  "apjoy-forecast": { host: "apjoy-weather-forecast.p.rapidapi.com", price: "75000", label: "Apjoy Weather Forecast" },
  "open-weather-map": { host: "open-weather-map-api5.p.rapidapi.com", price: "75000", label: "Open Weather Map" },
  "datanest-weather": { host: "weather-api-by-datanest.p.rapidapi.com", price: "100000", label: "Weather API by Datanest" },
  "datanest-forecast": { host: "weather-forecast-by-datanest.p.rapidapi.com", price: "100000", label: "Weather Forecast by Datanest" },
  "pickleball": { host: "pickleball-playability.p.rapidapi.com", price: "100000", label: "Pickleball Playability" },
  "tidecheck": { host: "tidecheck.p.rapidapi.com", price: "100000", label: "TideCheck" },
  "amazon-reviews": { host: "amazon-full-reviews.p.rapidapi.com", price: "125000", label: "Amazon Full Reviews" },
  "weather-db": { host: "weather-database-api.p.rapidapi.com", price: "75000", label: "Weather Database API" },
};

export function getApiKey(): string {
  return process.env.RAPIDAPI_KEY || "";
}

export function buildPaymentRequired(priceAtomic: string) {
  const amount = (parseInt(priceAtomic) / 1_000_000).toFixed(6);
  const paymentRequired = {
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "eip155:8453",
        maxAmountRequired: priceAtomic,
        resource: "https://x402-weather.vercel.app",
        description: "Weather API access",
        mimeType: "application/json",
        payTo: "0x5e6E0aa1dE2FD4A4def32CD39aD3F775461E512c",
        maxTimeoutSeconds: 300,
        extra: {
          name: "USD Coin",
          version: "2"
        }
      }
    extensions: {
      bazaar: {
        info: {
          input: {
            type: "http",
            method: "POST",
            bodyType: "json",
            body: {
              type: "object",
              properties: {
                query: { type: "string", description: "Input parameter" }
              }
            }
          },
          output: {
            type: "object",
            properties: {
              result: { type: "object", description: "API response data" }
            },
            example: { result: { data: "example response" } }
          }
        },
        schema: {
          type: "object",
          properties: {
            result: { type: "object", description: "API response data" }
          }
        }
      }
    }
    ]
  };
  return Buffer.from(JSON.stringify(paymentRequired)).toString("base64");
}
