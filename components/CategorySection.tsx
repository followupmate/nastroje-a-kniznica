"use client";
import { motion } from "motion/react";
import type { Category } from "@/lib/data";
import ToolCard from "./ToolCard";

export default function CategorySection({ cat }: { cat: Category }) {
  const totalTools = cat.subsections.reduce((acc, s) => acc + s.tools.length, 0);

  return (
    <section id={cat.id} className="max-w-6xl mx-auto mb-16 scroll-mt-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center gap-4 mb-7 pb-5"
      >
        {/* Accent line */}
        <div
          className="absolute left-0 w-[3px] h-8 rounded-r"
          style={{ background: cat.color }}
        />

        {/* Icon bubble */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
          style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
        >
          {cat.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="font-['Space_Grotesk'] text-[18px] font-bold text-white leading-tight">
            {cat.title}
          </h2>
          <p className="text-[11px] text-[#6b6890] tracking-wide mt-0.5 font-['Inter']">
            {cat.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className="text-[11px] font-['Space_Grotesk'] font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${cat.color}12`,
              color: cat.color,
              border: `1px solid ${cat.color}25`,
            }}
          >
            {totalTools} nástrojov
          </span>
        </div>
      </motion.div>

      {/* Divider with gradient */}
      <div className="h-px mb-7" style={{ background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />

      {/* Subsections */}
      {cat.subsections.map((sub) => (
        <div key={sub.title} className="mb-9">
          {cat.subsections.length > 1 && (
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="font-['Space_Grotesk'] text-[10px] font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2"
              style={{ color: cat.color }}
            >
              <span className="w-4 h-px" style={{ background: cat.color }} />
              {sub.title}
            </motion.h3>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sub.tools.map((tool, i) => (
              <ToolCard
                key={tool.name}
                tool={tool}
                accentColor={cat.color}
                index={i}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
