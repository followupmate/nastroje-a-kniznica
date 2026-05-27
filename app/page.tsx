"use client";
import { motion } from "motion/react";
import { categories } from "@/lib/data";
import FilterableContent from "@/components/FilterableContent";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const BADGES = [
  { type: "TOP",  label: "TOP",  desc: "redakčný výber",  style: "bg-pink-500/15 text-pink-400 border border-pink-500/25" },
  { type: "FREE", label: "FREE", desc: "bezplatný tier",  style: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" },
  { type: "PAID", label: "PAID", desc: "len platená",     style: "bg-amber-500/10 text-amber-400 border border-amber-500/20" },
  { type: "API",  label: "API",  desc: "dostupné API",    style: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" },
  { type: "OS",   label: "OS",   desc: "open-source",     style: "bg-violet-500/15 text-violet-400 border border-violet-500/25" },
];

const WHATS_NEW = [
  { date: "máj 2026", text: "Meta vydal Llama 4 Spark — nový frontier open-source model" },
  { date: "máj 2026", text: "Google Veo 3.1 s natívnym audiom a SynthID vodoznakmi" },
  { date: "máj 2026", text: "DeepSeek V4 šokuje výkonom v kóde a matematike zadarmo" },
  { date: "apr 2026", text: "HappyHorse-1.0 (Alibaba) — #2 na Artificial Analysis rebríčku" },
  { date: "apr 2026", text: "Suno v5.5 spúšťa Voices — klonovanie vlastného hlasu" },
];

const allNavItems = [
  ...categories,
  { id: "nsfw", icon: "🔞", title: "NSFW & Erotický Obsah", color: "#ff6c6c" },
];

const totalTools = categories.reduce(
  (acc, cat) => acc + cat.subsections.reduce((a, s) => a + s.tools.length, 0),
  0
);

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="px-4 pb-16 font-['Inter']">
        <div className="max-w-6xl mx-auto pt-8 pb-12">

          {/* ── Hero glass card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-3xl overflow-hidden mb-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            {/* Top highlight line */}
            <div className="absolute top-0 left-10 right-10 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.8), rgba(6,182,212,0.5), transparent)" }} />

            {/* Purple ambient glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-72 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, transparent 70%)" }} />

            <div className="relative px-6 sm:px-10 lg:px-14 pt-12 pb-10 sm:pt-16 sm:pb-12">

              {/* Title */}
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight mb-4">
                <span className="text-white">Prehľad AI </span>
                <span className="gradient-text">Nástrojov 2026</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-base text-[#6b6890] max-w-xl leading-relaxed font-['Inter'] mb-8">
                Kompletný praktický výber — video, avatary, obrázky, hlas, hudba, LLM a kódovanie.
                Filtrovanie a vyhľadávanie v reálnom čase.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <a
                  href={`#${categories[0]?.id ?? "video"}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-['Space_Grotesk'] font-semibold text-[13px] text-white cursor-pointer transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)",
                    boxShadow: "0 0 32px rgba(124,58,237,0.4), 0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  Preskúmať nástroje
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <div
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-['Space_Grotesk'] text-[13px]"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.22)", color: "#a78bfa" }}
                >
                  <span className="font-bold text-white text-[15px]">{totalTools}</span>
                  <span className="text-[#6b6890]">nástrojov ·</span>
                  <span className="font-bold text-white text-[15px]">{categories.length + 1}</span>
                  <span className="text-[#6b6890]">kategórií</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Bottom row: legend + microcopy */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-[#6b6890]">
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#4a4868] font-['Space_Grotesk']">Legenda</span>
                  {BADGES.map((b) => (
                    <span key={b.type} className="flex items-center gap-1.5">
                      <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-md font-['Space_Grotesk'] ${b.style}`}>
                        {b.label}
                      </span>
                      <span className="text-[#4a4868] hidden lg:inline">— {b.desc}</span>
                    </span>
                  ))}
                </div>

                {/* Microcopy — separated from title by entire card content */}
                <div className="flex items-center gap-2 text-[10px] text-[#4a4868] font-['Space_Grotesk'] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 animate-pulse" />
                  Aktualizované · Q2 / Máj 2026
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── What's new ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-2xl overflow-hidden mb-8"
            style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)" }}
          >
            <div className="flex items-center gap-3 px-5 py-3 border-b"
              style={{ borderColor: "rgba(124,58,237,0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-violet-400 font-['Space_Grotesk']">
                Čo je nové — Máj 2026
              </span>
            </div>
            <div className="px-5 py-4 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {WHATS_NEW.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[12px]">
                  <span className="text-[10px] text-[#6b6890] shrink-0 mt-0.5 w-16 font-['Space_Grotesk']">{item.date}</span>
                  <span className="text-[#c8c6e8] leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── TOC ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl overflow-hidden mb-12"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="px-6 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4a4868] font-['Space_Grotesk']">Obsah</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px p-1">
              {allNavItems.map((cat, i) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2.5 text-[12px] text-[#8885a8] hover:text-white transition-colors duration-150 px-4 py-3 rounded-xl hover:bg-white/5 cursor-pointer"
                >
                  <span
                    className="w-5 h-5 rounded-lg flex items-center justify-center text-[11px] shrink-0"
                    style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                  >
                    {cat.icon}
                  </span>
                  <span className="font-['Space_Grotesk'] font-medium">
                    <span className="text-[#4a4868] mr-1">{i + 1}.</span>
                    {cat.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto mb-10 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />

        {/* ── Search + Filters + Content ── */}
        <FilterableContent />

        {/* ── Footer ── */}
        <footer className="max-w-6xl mx-auto mt-16 pt-6 flex flex-wrap justify-between gap-3 text-[11px] text-[#4a4868] font-['Inter']"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span>© Prehľad AI Nástrojov — Máj 2026</span>
          <span>Zostavené na základe verejne dostupných benchmarkov a recenzií</span>
        </footer>
      </main>
    </>
  );
}
