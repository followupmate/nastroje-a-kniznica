"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { categories } from "@/lib/data";
import type { Badge } from "@/lib/data";
import CategorySection from "./CategorySection";
import NsfwSection from "./NsfwSection";

type FilterBadge = Badge | "ALL";

const FILTERS: { type: FilterBadge; label: string; style: string; activeStyle: string }[] = [
  { type: "ALL",  label: "Všetky", style: "text-[#7a7898] border-[#2a2a40]", activeStyle: "text-violet-300 bg-violet-500/15 border-violet-500/40" },
  { type: "TOP",  label: "TOP",    style: "text-[#7a7898] border-[#2a2a40]", activeStyle: "text-pink-300 bg-pink-500/15 border-pink-500/40" },
  { type: "FREE", label: "FREE",   style: "text-[#7a7898] border-[#2a2a40]", activeStyle: "text-emerald-300 bg-emerald-500/15 border-emerald-500/40" },
  { type: "PAID", label: "PAID",   style: "text-[#7a7898] border-[#2a2a40]", activeStyle: "text-amber-300 bg-amber-500/15 border-amber-500/40" },
  { type: "API",  label: "API",    style: "text-[#7a7898] border-[#2a2a40]", activeStyle: "text-cyan-300 bg-cyan-500/15 border-cyan-500/40" },
  { type: "OS",   label: "OS",     style: "text-[#7a7898] border-[#2a2a40]", activeStyle: "text-violet-300 bg-violet-500/15 border-violet-500/40" },
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

  const showNsfw =
    !isFiltering ||
    (activeFilter === "ALL" &&
      ["nsfw", "adult", "erotick", "18+", "sexy"].some((kw) =>
        search.toLowerCase().includes(kw)
      ));

  return (
    <>
      {/* Search + Filter bar */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a7898]"
              width="14" height="14" viewBox="0 0 16 16" fill="none"
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Hľadať nástroj, popis, tag…"
              className="w-full bg-[#13131c] border border-[#2a2a40] rounded-lg pl-9 pr-20 py-2.5 text-[13px] text-[#e8e6ff] placeholder-[#7a7898] focus:outline-none focus:border-violet-500/60 transition-colors"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {search ? (
                <button
                  onClick={() => setSearch("")}
                  className="text-[#7a7898] hover:text-white text-lg leading-none transition-colors"
                  aria-label="Vymazať hľadanie"
                >
                  ×
                </button>
              ) : (
                <kbd className="text-[9px] text-[#7a7898] bg-[#1a1a28] border border-[#2a2a40] px-1.5 py-0.5 rounded font-mono">
                  Ctrl K
                </kbd>
              )}
            </div>
          </div>

          {/* Badge filters */}
          <div className="flex gap-1.5 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.type}
                onClick={() => setActiveFilter(f.type)}
                className={`text-[11px] font-bold tracking-wide px-3 py-2 rounded-lg border transition-all duration-150 ${
                  activeFilter === f.type
                    ? f.activeStyle
                    : `bg-[#13131c] ${f.style} hover:text-white hover:border-[#3a3a55]`
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {isFiltering && (
          <p className="text-[11px] text-[#7a7898] mt-2.5">
            {totalFiltered === 0 ? (
              <span className="text-amber-400/80">Žiadne výsledky — skúste iný výraz.</span>
            ) : (
              <>
                <span className="text-[#e8e6ff]">{totalFiltered}</span>{" "}
                nástrojov
                {activeFilter !== "ALL" && (
                  <> · filter: <span className="text-violet-300">{activeFilter}</span></>
                )}
                {search && (
                  <> · výraz: <span className="text-violet-300">„{search}"</span></>
                )}
              </>
            )}
          </p>
        )}
      </div>

      {/* Category sections */}
      {filtered.map((cat) => (
        <CategorySection key={cat.id} cat={cat} />
      ))}

      {/* NSFW — shown only when not filtering by badge and search doesn't exclude it */}
      {showNsfw && <NsfwSection />}
    </>
  );
}
