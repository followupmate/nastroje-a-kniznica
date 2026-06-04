"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { kniznicaCollections, allKniznicaItems, type KniznicaItem } from "@/lib/kniznica-data";
import Link from "next/link";

const TYPE_LABELS: Record<string, string> = {
  skill: "Skill",
  prompt: "Prompt",
  info: "Info",
  tool: "Nástroj",
};

const TYPE_COLORS: Record<string, string> = {
  skill: "rgba(124,58,237,0.15)",
  prompt: "rgba(6,182,212,0.12)",
  info: "rgba(16,185,129,0.12)",
  tool: "rgba(245,158,11,0.12)",
};

const TYPE_TEXT_COLORS: Record<string, string> = {
  skill: "#a78bfa",
  prompt: "#22d3ee",
  info: "#34d399",
  tool: "#fbbf24",
};

function ItemCard({ item }: { item: KniznicaItem }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!item.fullPrompt) return;
    navigator.clipboard.writeText(item.fullPrompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl p-4 flex flex-col gap-2"
      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-md font-['Space_Grotesk']"
              style={{ background: TYPE_COLORS[item.type], color: TYPE_TEXT_COLORS[item.type] }}
            >
              {TYPE_LABELS[item.type]}
            </span>
            <span className="text-[10px] text-[#4a4868] font-['Space_Grotesk']">{item.category}</span>
          </div>
          <h3 className="text-[13px] font-semibold text-white font-['Space_Grotesk'] leading-snug">
            {item.title}
          </h3>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              title="Otvoriť odkaz"
            >
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#6b6890" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9M10 2h4m0 0v4m0-4L7 9" />
              </svg>
            </a>
          )}
          {item.fullPrompt && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150 hover:bg-white/10 cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              title={expanded ? "Skryť prompt" : "Zobraziť prompt"}
            >
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#6b6890" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </motion.svg>
            </button>
          )}
        </div>
      </div>

      <p className="text-[12px] text-[#8885a8] leading-relaxed">{item.description}</p>

      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded-md font-['Space_Grotesk'] text-[#4a4868]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <AnimatePresence>
        {expanded && item.fullPrompt && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(6,182,212,0.2)" }}>
              <div className="flex items-center justify-between px-3 py-2" style={{ background: "rgba(6,182,212,0.06)", borderBottom: "1px solid rgba(6,182,212,0.15)" }}>
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#22d3ee] font-['Space_Grotesk']">Full Prompt</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-md transition-all duration-150 cursor-pointer font-['Space_Grotesk']"
                  style={copied
                    ? { background: "rgba(16,185,129,0.15)", color: "#34d399", border: "1px solid rgba(16,185,129,0.3)" }
                    : { background: "rgba(255,255,255,0.05)", color: "#6b6890", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                >
                  {copied ? (
                    <><svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8l4 4 8-8" /></svg>Skopírované</>
                  ) : (
                    <><svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="9" height="9" rx="1" /><path d="M3 11V3a1 1 0 011-1h8" /></svg>Kopírovať</>
                  )}
                </button>
              </div>
              <pre
                className="p-3 text-[11px] text-[#8885a8] leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono"
                style={{ background: "rgba(0,0,0,0.3)", maxHeight: "320px", overflowY: "auto" }}
              >
                {item.fullPrompt}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function KniznicaPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCollection, setActiveCollection] = useState<string | null>(null);

  const allCategories = useMemo(
    () => [...new Set(allKniznicaItems.map((i) => i.category))].sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allKniznicaItems.filter((item) => {
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      const matchCat = !activeCategory || item.category === activeCategory;
      const matchCol = !activeCollection || item.collection === activeCollection;
      return matchSearch && matchCat && matchCol;
    });
  }, [search, activeCategory, activeCollection]);

  const groupedByCollection = useMemo(() => {
    if (search || activeCategory) return null;
    return kniznicaCollections.map((col) => ({
      ...col,
      items: filtered.filter((i) => i.collection === col.id),
    })).filter((col) => col.items.length > 0);
  }, [filtered, search, activeCategory]);

  return (
    <>
      {/* Navbar-style header */}
      <div className="sticky top-0 z-50 px-3 py-2.5">
        <nav
          className="max-w-6xl mx-auto rounded-2xl border bg-[#07070f]/92 backdrop-blur-xl border-white/10 shadow-lg shadow-black/40"
        >
          <div className="flex items-center gap-3 px-4 h-11">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-white/70 tracking-wider uppercase font-['Space_Grotesk']">
                AI 2026
              </span>
            </Link>

            <div className="w-px h-5 bg-white/10 shrink-0" />

            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="text-[11px] px-2.5 py-1.5 rounded-lg text-[#6b6890] hover:text-white transition-colors duration-150 font-['Space_Grotesk'] font-semibold"
              >
                Nástroje
              </Link>
              <span
                className="text-[11px] px-2.5 py-1.5 rounded-lg font-['Space_Grotesk'] font-semibold"
                style={{ color: "#e07b39", background: "rgba(224,123,57,0.12)", border: "1px solid rgba(224,123,57,0.25)" }}
              >
                ⚡ Knižnica
              </span>
            </div>
          </div>
        </nav>
      </div>

      <main className="px-4 pb-16 font-['Inter']">
        <div className="max-w-6xl mx-auto pt-8 pb-12">

          {/* Hero */}
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
            <div className="absolute top-0 left-10 right-10 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(224,123,57,0.8), rgba(251,191,36,0.5), transparent)" }} />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-72 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(224,123,57,0.15) 0%, transparent 70%)" }} />

            <div className="relative px-6 sm:px-10 lg:px-14 pt-12 pb-10 sm:pt-16 sm:pb-12">
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-3">
                <span className="text-white">AI </span>
                <span style={{ background: "linear-gradient(135deg, #e07b39, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Knižnica
                </span>
              </h1>
              <p className="text-[15px] text-[#6b6890] max-w-xl leading-relaxed mb-8">
                Osobná zbierka zaujímavých AI skills, promptov, nástrojov a poznatkov.
                Priebežne doplňované.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-['Space_Grotesk'] text-[13px]"
                  style={{ background: "rgba(224,123,57,0.1)", border: "1px solid rgba(224,123,57,0.22)", color: "#e07b39" }}
                >
                  <span className="font-bold text-white text-[15px]">{allKniznicaItems.length}</span>
                  <span className="text-[#6b6890]">záznamov ·</span>
                  <span className="font-bold text-white text-[15px]">{kniznicaCollections.length}</span>
                  <span className="text-[#6b6890]">kolekcií</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#4a4868] font-['Space_Grotesk']">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#e07b39" }} />
                  Aktualizované · Jún 2026
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search + filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a4868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Hľadať v knižnici..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] text-white placeholder-[#4a4868] outline-none transition-all duration-150 font-['Inter']"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {kniznicaCollections.map((col) => (
                <button
                  key={col.id}
                  onClick={() => setActiveCollection(activeCollection === col.id ? null : col.id)}
                  className="px-3 py-2 rounded-xl text-[11px] font-['Space_Grotesk'] font-semibold transition-all duration-150"
                  style={
                    activeCollection === col.id
                      ? { background: `rgba(224,123,57,0.15)`, border: "1px solid rgba(224,123,57,0.35)", color: "#e07b39" }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#6b6890" }
                  }
                >
                  {col.icon} {col.title.split("—")[0].trim()}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Category chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex flex-wrap gap-1.5 mb-8"
          >
            <button
              onClick={() => setActiveCategory(null)}
              className="px-2.5 py-1 rounded-lg text-[10px] font-['Space_Grotesk'] font-semibold transition-all duration-150"
              style={
                !activeCategory
                  ? { background: "rgba(224,123,57,0.15)", border: "1px solid rgba(224,123,57,0.3)", color: "#e07b39" }
                  : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#4a4868" }
              }
            >
              Všetky kategórie
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className="px-2.5 py-1 rounded-lg text-[10px] font-['Space_Grotesk'] font-semibold transition-all duration-150"
                style={
                  activeCategory === cat
                    ? { background: "rgba(224,123,57,0.15)", border: "1px solid rgba(224,123,57,0.3)", color: "#e07b39" }
                    : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#4a4868" }
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#4a4868] text-[13px] font-['Space_Grotesk']">
              Žiadne výsledky pre &ldquo;{search}&rdquo;
            </div>
          ) : groupedByCollection ? (
            groupedByCollection.map((col) => (
              <motion.section
                key={col.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
              >
                {/* Collection header */}
                <div
                  className="rounded-2xl overflow-hidden mb-5"
                  style={{ background: `rgba(224,123,57,0.06)`, border: `1px solid rgba(224,123,57,0.18)` }}
                >
                  <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ borderColor: "rgba(224,123,57,0.15)" }}>
                    <span className="text-xl">{col.icon}</span>
                    <div className="flex-1">
                      <h2 className="text-[13px] font-bold text-white font-['Space_Grotesk']">{col.title}</h2>
                      <p className="text-[11px] text-[#6b6890] mt-0.5">{col.description}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full font-['Space_Grotesk']"
                        style={{ background: "rgba(224,123,57,0.15)", color: "#e07b39" }}
                      >
                        {col.items.length} položiek
                      </span>
                      <span className="text-[10px] text-[#4a4868] font-['Space_Grotesk']">{col.dateAdded}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {col.items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </motion.section>
            ))
          ) : (
            <div>
              <div className="text-[11px] text-[#4a4868] font-['Space_Grotesk'] mb-4">
                {filtered.length} výsledkov
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>

        <footer className="max-w-6xl mx-auto mt-16 pt-6 flex flex-wrap justify-between gap-3 text-[11px] text-[#4a4868] font-['Inter']"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span>© AI Knižnica — Jún 2026</span>
          <Link href="/" className="hover:text-white transition-colors duration-150">← Späť na nástroje</Link>
        </footer>
      </main>
    </>
  );
}
