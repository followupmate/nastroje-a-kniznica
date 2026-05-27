import type { Tool } from "@/lib/data";
import Badge from "./Badge";

export default function ToolCard({ tool, accentColor }: { tool: Tool; accentColor: string }) {
  return (
    <div
      className="group relative bg-[#13131c] border border-[#2a2a40] rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
      style={{ "--accent": accentColor } as React.CSSProperties}
    >
      {/* top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
      />

      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="font-['var(--font-syne)'] text-sm font-bold text-white leading-tight">
          {tool.url ? (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              {tool.name}
            </a>
          ) : (
            tool.name
          )}
        </div>
        <div className="flex gap-1 flex-wrap justify-end shrink-0">
          {tool.badges.map((b) => (
            <Badge key={b} type={b} />
          ))}
        </div>
      </div>

      <p className="text-[12px] text-[#7a7898] leading-relaxed mb-2.5">{tool.desc}</p>

      <div className="flex flex-wrap gap-1">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-1.5 py-0.5 rounded"
            style={{ background: `${accentColor}18`, color: accentColor }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
