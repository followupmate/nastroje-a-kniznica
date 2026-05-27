"use client";
import { motion } from "motion/react";
import type { Tool } from "@/lib/data";
import Badge from "./Badge";

export default function ToolCard({
  tool,
  accentColor,
  index = 0,
}: {
  tool: Tool;
  accentColor: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative rounded-xl overflow-hidden cursor-pointer gradient-border glow-hover"
      style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Top accent glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}90, transparent)` }}
      />

      {/* Subtle background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor}08 0%, transparent 70%)` }}
      />

      <div className="relative p-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex-1 min-w-0">
            <div className="font-['Space_Grotesk'] text-[13px] font-semibold text-white leading-snug">
              {tool.url ? (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-300 transition-colors duration-150 inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {tool.name}
                  <svg className="opacity-0 group-hover:opacity-60 transition-opacity" width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 2.5h7v7m0-7L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              ) : (
                <span>{tool.name}</span>
              )}
            </div>
          </div>
          <div className="flex gap-1 flex-wrap justify-end shrink-0">
            {tool.badges.map((b) => (
              <Badge key={b} type={b} />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-[11.5px] text-[#7a7898] leading-relaxed mb-3 font-['Inter']">
          {tool.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full font-['Inter'] font-medium"
              style={{
                background: `${accentColor}12`,
                color: accentColor,
                border: `1px solid ${accentColor}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
