"use client";
import { useState, useEffect } from "react";
import { categories } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = [...categories.map((c) => c.id), "nsfw"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const allItems = [...categories, { id: "nsfw", icon: "🔞", title: "NSFW", color: "#ff6c6c" }];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur border-b border-[#2a2a40]">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-2 h-12 overflow-x-auto scrollbar-none">
        <span className="font-['var(--font-syne)'] text-xs font-bold text-[#7a7898] mr-2 shrink-0 tracking-wider uppercase">
          AI 2026
        </span>
        {allItems.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className={`shrink-0 flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded transition-all duration-150 whitespace-nowrap ${
              active === cat.id
                ? "text-white bg-[#1a1a28]"
                : "text-[#7a7898] hover:text-white"
            }`}
          >
            <span>{cat.icon}</span>
            <span className="font-['var(--font-syne)'] font-semibold">{cat.title}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
