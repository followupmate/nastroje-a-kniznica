import type { Badge as BadgeType } from "@/lib/data";

const badgeConfig: Record<BadgeType, { label: string; style: string }> = {
  TOP:  { label: "TOP",  style: "bg-pink-500/20 text-pink-300 border border-pink-500/35 shadow-[0_0_10px_rgba(236,72,153,0.2)]" },
  FREE: { label: "FREE", style: "bg-emerald-500/18 text-emerald-300 border border-emerald-500/30" },
  PAID: { label: "PAID", style: "bg-amber-500/15 text-amber-300 border border-amber-500/28" },
  API:  { label: "API",  style: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/28" },
  OS:   { label: "OS",   style: "bg-violet-500/18 text-violet-300 border border-violet-500/30" },
};

export default function Badge({ type }: { type: BadgeType }) {
  const { label, style } = badgeConfig[type];
  return (
    <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md font-['Space_Grotesk'] ${style}`}>
      {label}
    </span>
  );
}
