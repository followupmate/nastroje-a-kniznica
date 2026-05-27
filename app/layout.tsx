import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prehľad AI Nástrojov 2026",
  description: "Kompletný prehľad AI nástrojov pre príručku/manuál — tvorba videa, avatary, obrázky, hlas, hudba, LLM, kódovanie a NSFW kategórie.",
  keywords: "AI nástroje, 2026, video generátor, hlasové klony, LLM, chatbot, midjourney, runway, elevenlabs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
