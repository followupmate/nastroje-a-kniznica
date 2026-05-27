"use client";
import { motion } from "motion/react";
import { categories } from "@/lib/data";
import FilterableContent from "@/components/FilterableContent";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const BADGES = [
  { type: "TOP",  label: "TOP",  desc: "redakčný výber / lídra trhu", color: "#f472b6", style: "bg-pink-500/15 text-pink-400 border border-pink-500/25" },
  { type: "FREE", label: "FREE", desc: "bezplatný tier",               color: "#34d399", style: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" },
  { type: "PAID", label: "PAID", desc: "len platená verzia",           color: "#fbbf24", style: "bg-amber-500/10 text-amber-400 border border-amber-500/20" },
  { type: "API",  label: "API",  desc: "dostupné API",                 color: "#22d3ee", style: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" },
  { type: "OS",   label: "OS",   desc: "open-source",                  color: "#a78bfa", style: "bg-violet-500/15 text-violet-400 border border-violet-500/25" },
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

        {/* ── Hero ── */}
        <div className="max-w-6xl mx-auto pt-10 pb-14">

          {/* Badge + Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-[11px] font-['Space_Grotesk'] font-semibold tracking-wide"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Aktuálne — Q2 / Máj 2026
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
              <span className="text-white">Prehľad AI </span>
              <span className="gradient-text">Nástrojov 2026</span>
            </h1>
            <p className="text-[15px] text-[#6b6890] max-w-2xl leading-relaxed font-['Inter']">
              Kompletný praktický výber — video, avatary, obrázky, hlas, hudba, LLM a kódovanie.
              Filtrovanie, vyhľadávanie, aktualizované pre Q2&nbsp;2026.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {[
              { value: totalTools.toString(), label: "nástrojov" },
              { value: (categories.length + 1).toString(), label: "kategórií" },
              { value: "Q2", label: "2026" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex items-baseline gap-1.5 px-4 py-2 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="font-['Space_Grotesk'] text-xl font-bold text-white">{value}</span>
                <span className="text-[11px] text-[#6b6890]">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2.5 text-[11px] text-[#6b6890]"
          >
            <span className="text-[10px] tracking-[0.12em] uppercase text-[#4a4868] font-['Space_Grotesk'] mr-1">Legenda</span>
            {BADGES.map((b) => (
              <span key={b.type} className="flex items-center gap-1.5">
                <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-md font-['Space_Grotesk'] ${b.style}`}>
                  {b.label}
                </span>
                <span className="text-[#4a4868]">—</span>
                <span>{b.desc}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── What's new ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="max-w-6xl mx-auto mb-10 rounded-2xl overflow-hidden"
          style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)" }}
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b"
            style={{ borderColor: "rgba(124,58,237,0.15)" }}>
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-violet-400 font-['Space_Grotesk']">
              Čo je nové — Máj 2026
            </span>
          </div>
          <div className="px-5 py-3 flex flex-col sm:flex-row sm:flex-wrap gap-y-2 gap-x-8">
            {WHATS_NEW.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-[12px] sm:w-[calc(50%-2rem)]">
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
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-12 rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="px-6 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4a4868] font-['Space_Grotesk']">
              Obsah
            </span>
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
