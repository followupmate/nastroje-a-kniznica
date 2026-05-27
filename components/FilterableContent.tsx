"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { categories } from "@/lib/data";
import type { Badge } from "@/lib/data";
import CategorySection from "./CategorySection";
import NsfwSection from "./NsfwSection";

type FilterBadge = Badge | "ALL";

const FILTERS: { type: FilterBadge; label: string; color: string }[] = [
  { type: "ALL",  label: "Všetky", color: "#a78bfa" },
  { type: "TOP",  label: "TOP",    color: "#f472b6" },
  { type: "FREE", label: "FREE",   color: "#34d399" },
  { type: "PAID", label: "PAID",   color: "#fbbf24" },
  { type: "API",  label: "API",    color: "#22d3ee" },
  { type: "OS",   label: "OS",     color: "#a78bfa" },
];

export default function FilterableContent() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterBadge>("ALL");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
      if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setSearch("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return categories
      .map((cat) => ({
        ...cat,
        subsections: cat.subsections
          .map((sub) => ({
            ...sub,
            tools: sub.tools.filter((tool) => {
              const matchBadge = activeFilter === "ALL" || tool.badges.includes(activeFilter as Badge);
              const matchSearch =
                !q ||
                tool.name.toLowerCase().includes(q) ||
                tool.desc.toLowerCase().includes(q) ||
                tool.tags.some((t) => t.toLowerCase().includes(q));
              return matchBadge && matchSearch;
            }),
          }))
          .filter((sub) => sub.tools.length > 0),
      }))
      .filter((cat) => cat.subsections.length > 0);
  }, [search, activeFilter]);

  const totalFiltered = filtered.reduce(
    (acc, cat) => acc + cat.subsections.reduce((a, s) => a + s.tools.length, 0),
    0
  );

  const isFiltering = !!search || activeFilter !== "ALL";
  const activeFilterObj = FILTERS.find((f) => f.type === activeFilter)!;

  const showNsfw =
    !isFiltering ||
    (activeFilter === "ALL" &&
      ["nsfw", "adult", "erotick", "18+"].some((kw) => search.toLowerCase().includes(kw)));

  return (
    <>
      {/* Search + Filter bar */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b6890]"
              width="14" height="14" viewBox="0 0 16 16" fill="none"
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Hľadať nástroj, popis, tag…"
              className="w-full rounded-xl pl-9 pr-20 py-3 text-[13px] text-[#f0eeff] placeholder-[#6b6890] focus:outline-none transition-all duration-200 font-['Inter']"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.border = "1px solid rgba(124,58,237,0.5)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <AnimatePresence mode="wait">
                {search ? (
                  <motion.button
                    key="clear"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setSearch("")}
                    className="text-[#6b6890] hover:text-white transition-colors text-lg leading-none cursor-pointer"
                    aria-label="Vymazať"
                  >
                    ×
                  </motion.button>
                ) : (
                  <motion.kbd
                    key="shortcut"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[9px] text-[#6b6890] px-1.5 py-0.5 rounded font-mono"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    Ctrl K
                  </motion.kbd>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Badge filters */}
          <div className="flex gap-1.5 flex-wrap">
            {FILTERS.map((f) => (
              <motion.button
                key={f.type}
                onClick={() => setActiveFilter(f.type)}
                whileTap={{ scale: 0.95 }}
                className="relative text-[11px] font-bold tracking-wide px-3.5 py-2.5 rounded-xl transition-colors duration-150 cursor-pointer font-['Space_Grotesk']"
                style={
                  activeFilter === f.type
                    ? {
                        background: `${f.color}18`,
                        color: f.color,
                        border: `1px solid ${f.color}40`,
                        boxShadow: `0 0 12px ${f.color}20`,
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        color: "#6b6890",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }
                }
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <AnimatePresence>
          {isFiltering && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-[11px] text-[#6b6890] mt-3 font-['Inter']"
            >
              {totalFiltered === 0 ? (
                <span className="text-amber-400/80">Žiadne výsledky — skúste iný výraz.</span>
              ) : (
                <>
                  <span className="text-[#f0eeff] font-semibold">{totalFiltered}</span> nástrojov
                  {activeFilter !== "ALL" && (
                    <> · filter: <span style={{ color: activeFilterObj.color }}>{activeFilter}</span></>
                  )}
                  {search && (
                    <> · výraz: <span className="text-violet-300">„{search}"</span></>
                  )}
                </>
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Category sections */}
      {filtered.map((cat) => (
        <CategorySection key={cat.id} cat={cat} />
      ))}

      {showNsfw && <NsfwSection />}
    </>
  );
}
