"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { categories } from "@/lib/data";

const NAV_ICONS: Record<string, string> = {
  video:   "M15 10l-4 2-4-2V6l4 2 4-2v4zM3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6z",
  avatars: "M12 12a4 4 0 100-8 4 4 0 000 8zM6 20v-1a6 6 0 0112 0v1",
  images:  "M4 16l4-4 3 3 4-5 5 6H4zM14 8a2 2 0 100-4 2 2 0 000 4z",
  voice:   "M12 1a3 3 0 013 3v8a3 3 0 01-6 0V4a3 3 0 013-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8",
  music:   "M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z",
  llm:     "M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2z",
  coding:  "M8 9l3 3-3 3M13 15h3M3 19V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z",
  nsfw:    "M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
};

export default function Navbar() {
  const [active, setActive]     = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const allIds = [...categories.map((c) => c.id), "nsfw"];
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const reversed = [...allIds].reverse();
      for (const id of reversed) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id);
          break;
        }
      }
      if (window.scrollY < 100) setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const allItems = [
    ...categories,
    { id: "nsfw", icon: "🔞", title: "NSFW", color: "#ff6c6c" },
  ];

  return (
    <div className="sticky top-0 z-50 px-3 py-2.5">
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-[#07070f]/92 backdrop-blur-xl border-white/10 shadow-lg shadow-black/40"
            : "bg-[#07070f]/65 backdrop-blur-md border-white/6"
        }`}
      >
        <div className="flex items-center gap-1 px-4 h-11">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 mr-3 shrink-0">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-white/70 tracking-wider uppercase font-['Space_Grotesk'] shrink-0">
              AI 2026
            </span>
          </a>

          <div className="w-px h-5 bg-white/10 shrink-0 mr-1" />

          {/* Desktop category links */}
          <div className="hidden sm:flex items-center gap-0.5 flex-1 overflow-x-auto scrollbar-none">
            {allItems.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="relative shrink-0 flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
                style={{ color: active === cat.id ? cat.color : undefined }}
              >
                <span className={`transition-colors duration-150 ${active === cat.id ? "" : "text-[#6b6890] hover:text-white"}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={NAV_ICONS[cat.id] || "M12 12m-9 0a9 9 0 1018 0a9 9 0 01-18 0"} />
                  </svg>
                </span>
                <span className={`font-['Space_Grotesk'] font-semibold transition-colors duration-150 ${active === cat.id ? "" : "text-[#6b6890] hover:text-white"}`}>
                  {cat.title}
                </span>
                {active === cat.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: `${cat.color}14`, border: `1px solid ${cat.color}30` }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="sm:hidden ml-auto flex flex-col justify-center items-center w-8 h-8 rounded-lg cursor-pointer transition-colors duration-150 hover:bg-white/8"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-4 h-0.5 bg-[#a78bfa] rounded-full mb-1"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-4 h-0.5 bg-[#a78bfa] rounded-full mb-1"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-4 h-0.5 bg-[#a78bfa] rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="sm:hidden mt-2 mx-0 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(9,9,24,0.97)",
              border: "1px solid rgba(124,58,237,0.25)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1)",
            }}
          >
            <div className="px-3 py-3 grid grid-cols-2 gap-1">
              {allItems.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-white/5"
                  style={active === cat.id ? { background: `${cat.color}12`, border: `1px solid ${cat.color}25` } : {}}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-sm"
                    style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                  >
                    {cat.icon}
                  </span>
                  <span
                    className="font-['Space_Grotesk'] font-semibold text-[12px] truncate"
                    style={{ color: active === cat.id ? cat.color : "#8885a8" }}
                  >
                    {cat.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
