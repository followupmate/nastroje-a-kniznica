import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prehľad AI Nástrojov 2026",
  description: "Kompletný prehľad AI nástrojov — tvorba videa, avatary, obrázky, hlas, hudba, LLM, kódovanie. Filtrovanie, vyhľadávanie, Q2/2026.",
  keywords: "AI nástroje, 2026, video generátor, hlasové klony, LLM, chatbot, midjourney, runway, elevenlabs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
