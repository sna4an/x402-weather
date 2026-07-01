export default function Home() {
  const endpoints = [
    { slug: "metat", label: "Meteostat", price: "$0.075", desc: "Historical weather data" },
    { slug: "open-weather", label: "Open Weather", price: "$0.075", desc: "Current & forecast weather" },
    { slug: "ski-resort", label: "Ski Resort Conditions", price: "$0.100", desc: "Ski resort snow reports" },
    { slug: "ai-weather", label: "AI Weather by Meteosource", price: "$0.100", desc: "AI-powered weather forecasts" },
    { slug: "weather-api", label: "Weather API", price: "$0.075", desc: "General weather data" },
    { slug: "weather338", label: "Weather338", price: "$0.075", desc: "Weather information service" },
    { slug: "weatherapi", label: "WeatherAPI", price: "$0.075", desc: "Real-time weather data" },
    { slug: "yahoo-weather", label: "Yahoo Weather", price: "$0.075", desc: "Yahoo weather forecasts" },
    { slug: "visual-crossing", label: "Visual Crossing Weather", price: "$0.100", desc: "Weather analytics & history" },
    { slug: "foreca", label: "Foreca Weather", price: "$0.100", desc: "Professional weather forecasts" },
    { slug: "sea-temperature", label: "Sea Surface Temperature", price: "$0.100", desc: "Ocean temperature data" },
    { slug: "easy-weather", label: "Easy Weather", price: "$0.075", desc: "Simple weather lookups" },
    { slug: "weather138", label: "Weather API 138", price: "$0.075", desc: "Weather data service" },
    { slug: "apjoy-forecast", label: "Apjoy Weather Forecast", price: "$0.075", desc: "Weather forecasts worldwide" },
    { slug: "open-weather-map", label: "Open Weather Map", price: "$0.075", desc: "Open-source weather data" },
    { slug: "datanest-weather", label: "Weather by Datanest", price: "$0.100", desc: "Data-driven weather API" },
    { slug: "datanest-forecast", label: "Forecast by Datanest", price: "$0.100", desc: "Data-driven forecasts" },
    { slug: "pickleball", label: "Pickleball Playability", price: "$0.100", desc: "Pickleball weather ratings" },
    { slug: "tidecheck", label: "TideCheck", price: "$0.100", desc: "Tide & ocean conditions" },
    { slug: "amazon-reviews", label: "Amazon Full Reviews", price: "$0.125", desc: "Amazon product reviews" },
    { slug: "weather-db", label: "Weather Database API", price: "$0.075", desc: "Historical weather database" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a1628 0%, #0c2d48 40%, #145374 100%)", color: "#e0f0ff", fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero { text-align: center; padding: 60px 20px 40px; }
        .logo { display: inline-flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .logo-icon { width: 56px; height: 56px; background: linear-gradient(135deg, #00d4ff, #0099cc); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 32px; }
        .logo-text { font-size: 36px; font-weight: 800; background: linear-gradient(90deg, #00d4ff, #7ee8fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .subtitle { font-size: 18px; color: #7ec8e3; margin-top: 8px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        .badge { display: inline-block; background: rgba(0, 212, 255, 0.15); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 20px; padding: 6px 16px; font-size: 13px; color: #00d4ff; margin-top: 16px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; max-width: 1200px; margin: 0 auto; padding: 0 20px 60px; }
        .card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; transition: transform 0.2s, border-color 0.2s; }
        .card:hover { transform: translateY(-2px); border-color: rgba(0, 212, 255, 0.4); }
        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .card-label { font-size: 16px; font-weight: 700; color: #b8e4f8; }
        .card-price { background: linear-gradient(135deg, #00d4ff22, #00d4ff11); border: 1px solid #00d4ff44; border-radius: 8px; padding: 4px 10px; font-size: 13px; color: #00d4ff; font-weight: 600; }
        .card-path { font-family: 'Fira Code', 'Consolas', monospace; font-size: 13px; color: #5a9ab5; margin-bottom: 6px; }
        .card-desc { font-size: 13px; color: #6a9bb5; line-height: 1.4; }
        .footer { text-align: center; padding: 40px 20px; color: #4a7a94; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.05); }
        .footer a { color: #00d4ff; text-decoration: none; }
        .info-bar { display: flex; justify-content: center; gap: 32px; flex-wrap: wrap; margin: 24px 0; }
        .info-item { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #7ec8e3; }
        .info-dot { width: 8px; height: 8px; border-radius: 50%; background: #00d4ff; }
      `}</style>

      <div className="hero">
        <div className="logo">
          <div className="logo-icon">⛅</div>
          <span className="logo-text">x402 Weather</span>
        </div>
        <p className="subtitle">
          A weather API hub powered by x402 micropayments. Pay-per-request access to 21 premium weather data providers.
        </p>
        <div className="badge">x402 Protocol • Base Chain • USDC Payments</div>
        <div className="info-bar">
          <div className="info-item"><div className="info-dot" /> 21 Endpoints</div>
          <div className="info-item"><div className="info-dot" /> $0.05 – $0.15 per request</div>
          <div className="info-item"><div className="info-dot" /> Instant payment via x402</div>
        </div>
      </div>

      <div className="grid">
        {endpoints.map((ep) => (
          <div key={ep.slug} className="card">
            <div className="card-header">
              <span className="card-label">{ep.label}</span>
              <span className="card-price">{ep.price}</span>
            </div>
            <div className="card-path">/api/{ep.slug}</div>
            <div className="card-desc">{ep.desc}</div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>Built with <a href="https://x402.org" target="_blank" rel="noopener">x402 Protocol</a> • Payments to <a href="https://basescan.org/address/0x5e6E0aa1dE2FD4A4def32CD39aD3F775461E512c" target="_blank" rel="noopener">0x5e6E…512c</a></p>
      </div>
    </div>
  );
}
