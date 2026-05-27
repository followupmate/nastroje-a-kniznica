import type { Category } from "@/lib/data";
import ToolCard from "./ToolCard";

export default function CategorySection({ cat }: { cat: Category }) {
  const totalTools = cat.subsections.reduce((acc, s) => acc + s.tools.length, 0);

  return (
    <section id={cat.id} className="max-w-5xl mx-auto mb-14 scroll-mt-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#2a2a40]">
        <span className="text-2xl leading-none">{cat.icon}</span>
        <div className="flex-1">
          <h2 className="font-['var(--font-syne)'] text-xl font-bold text-white leading-tight">
            {cat.title}
          </h2>
          <p className="text-[11px] text-[#7a7898] tracking-wide mt-0.5">{cat.subtitle}</p>
        </div>
        <span className="text-[11px] text-[#7a7898] bg-[#1a1a28] border border-[#2a2a40] px-3 py-1 rounded-full shrink-0">
          {totalTools} nástrojov
        </span>
      </div>

      {/* Subsections */}
      {cat.subsections.map((sub) => (
        <div key={sub.title} className="mb-8">
          {cat.subsections.length > 1 && (
            <h3 className="font-['var(--font-syne)'] text-[11px] font-bold tracking-widest uppercase text-[#7a7898] mb-3 pl-3 border-l-2 border-[#2a2a40]">
              {sub.title}
            </h3>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sub.tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} accentColor={cat.color} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
