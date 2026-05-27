import { categories } from "@/lib/data";
import FilterableContent from "@/components/FilterableContent";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const BADGES = [
  { type: "TOP",  label: "TOP",  desc: "redakčný výber / lídra trhu", style: "bg-pink-500/15 text-pink-400 border border-pink-500/30" },
  { type: "FREE", label: "FREE", desc: "bezplatný tier dostupný", style: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" },
  { type: "PAID", label: "PAID", desc: "len platená verzia", style: "bg-amber-500/12 text-amber-400 border border-amber-500/25" },
  { type: "API",  label: "API",  desc: "dostupné API", style: "bg-cyan-500/12 text-cyan-400 border border-cyan-500/25" },
  { type: "OS",   label: "OS",   desc: "open-source", style: "bg-violet-500/15 text-violet-400 border border-violet-500/30" },
];

const WHATS_NEW = [
  { date: "máj 2026", text: "Meta vydal Llama 4 Spark — nový open-source model" },
  { date: "máj 2026", text: "Google Veo 3.1 s natívnym audiom a SynthID vodoznakmi" },
  { date: "máj 2026", text: "DeepSeek V4 prekvapil výkonom v kóde a matematike" },
  { date: "apríl 2026", text: "HappyHorse-1.0 (Alibaba) — #2 na Artificial Analysis rebríčku" },
  { date: "apríl 2026", text: "Suno v5.5 spustil Voices — klonovanie vlastného hlasu" },
];

export default function Home() {
  const allNavItems = [
    ...categories,
    { id: "nsfw", icon: "🔞", title: "NSFW & Erotický Obsah", color: "#ff6c6c" },
  ];

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="px-4 py-12 font-['var(--font-dm-mono)']">
        {/* Page Header */}
        <div className="max-w-5xl mx-auto mb-10 border-b border-[#2a2a40] pb-10">
          <div className="flex items-start gap-4 mb-5">
            <div>
              <h1 className="font-['var(--font-syne)'] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Prehľad AI Nástrojov
                <span className="text-violet-400"> 2026</span>
              </h1>
            </div>
            <span className="mt-2 shrink-0 bg-violet-500 text-white text-[10px] font-['var(--font-syne)'] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
              Máj 2026
            </span>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 mb-6">
            {[
              ["Účel", "Príručka / Manuál"],
              ["Kategórie", `${categories.length + 1} oblastí`],
              ["Pokrytie", "Praktický výber top nástrojov"],
              ["Stav", "Aktuálne — Q2/2026"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <span className="text-[10px] tracking-widest text-[#7a7898] uppercase mb-0.5">{label}</span>
                <span className="text-[13px] text-[#e8e6ff]">{value}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#7a7898]">
            <span className="text-[10px] tracking-widest uppercase mr-1">Legenda:</span>
            {BADGES.map((b) => (
              <span key={b.type} className="flex items-center gap-1.5">
                <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded ${b.style}`}>
                  {b.label}
                </span>
                <span>—</span>
                <span>{b.desc}</span>
              </span>
            ))}
          </div>
        </div>

        {/* What's new box */}
        <div className="max-w-5xl mx-auto mb-10 bg-[#13131c] border border-violet-500/20 rounded-lg p-5">
          <div className="text-[10px] font-bold tracking-widest uppercase text-violet-400 mb-3">
            Čo je nové — Máj 2026
          </div>
          <ul className="space-y-2">
            {WHATS_NEW.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[12px]">
                <span className="text-[10px] text-[#7a7898] shrink-0 mt-0.5 w-20">{item.date}</span>
                <span className="text-[#e8e6ff]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TOC */}
        <div className="max-w-5xl mx-auto mb-12 bg-[#13131c] border border-[#2a2a40] rounded-lg p-6">
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#7a7898] mb-4">
            Obsah
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {allNavItems.map((cat, i) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 text-[12px] text-[#e8e6ff] hover:text-violet-400 transition-colors py-1.5"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: cat.color }}
                />
                <span>{i + 1}. {cat.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Search + Filters + Category sections */}
        <FilterableContent />

        {/* Footer */}
        <footer className="max-w-5xl mx-auto mt-14 pt-6 border-t border-[#2a2a40] flex flex-wrap justify-between gap-3 text-[11px] text-[#7a7898]">
          <span>© Prehľad AI Nástrojov — Máj 2026 | Príručka/Manuál</span>
          <span>Zostavené na základe verejne dostupných benchmarkov a recenzií</span>
        </footer>
      </main>
    </>
  );
}
