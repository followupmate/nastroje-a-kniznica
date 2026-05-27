import type { Badge as BadgeType } from "@/lib/data";

const badgeConfig: Record<BadgeType, { label: string; style: string }> = {
  TOP:  { label: "TOP",  style: "bg-pink-500/15 text-pink-400 border border-pink-500/30" },
  FREE: { label: "FREE", style: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" },
  PAID: { label: "PAID", style: "bg-amber-500/12 text-amber-400 border border-amber-500/25" },
  API:  { label: "API",  style: "bg-cyan-500/12 text-cyan-400 border border-cyan-500/25" },
  OS:   { label: "OS",   style: "bg-violet-500/15 text-violet-400 border border-violet-500/30" },
};

export default function Badge({ type }: { type: BadgeType }) {
  const { label, style } = badgeConfig[type];
  return (
    <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded ${style}`}>
      {label}
    </span>
  );
}
