import { nsfwData } from "@/lib/data";

export default function NsfwSection() {
  return (
    <section id="nsfw" className="max-w-6xl mx-auto mb-16 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-7 pb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
          style={{ background: "rgba(255,108,108,0.12)", border: "1px solid rgba(255,108,108,0.25)" }}>
          🔞
        </div>
        <div className="flex-1">
          <h2 className="font-['Space_Grotesk'] text-[18px] font-bold text-white leading-tight">
            NSFW & Erotický Obsah
          </h2>
          <p className="text-[11px] text-[#6b6890] tracking-wide mt-0.5 font-['Inter']">
            Len názvy nástrojov · Pre dospelých (18+)
          </p>
        </div>
        <span className="text-[11px] font-['Space_Grotesk'] font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(255,108,108,0.1)", color: "#ff6c6c", border: "1px solid rgba(255,108,108,0.2)" }}>
          20+ nástrojov
        </span>
      </div>

      <div className="h-px mb-7" style={{ background: "linear-gradient(90deg, rgba(255,108,108,0.4), transparent)" }} />

      {/* Warning */}
      <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(255,108,108,0.06)", border: "1px solid rgba(255,108,108,0.2)" }}>
        <div className="flex items-center gap-2 mb-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6c6c" strokeWidth="2" strokeLinecap="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <strong className="text-[11px] font-['Space_Grotesk'] tracking-wide uppercase" style={{ color: "#ff9090" }}>
            Obsah pre dospelých 18+ — Za použitie zodpovedáte výhradne vy
          </strong>
        </div>
        <p className="text-[11.5px] text-[#6b6890] leading-relaxed font-['Inter']">{nsfwData.warning}</p>
      </div>

      {nsfwData.subsections.map((sub) => (
        <div key={sub.title} className="mb-7">
          <h3 className="font-['Space_Grotesk'] text-[10px] font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2"
            style={{ color: "#ff9090" }}>
            <span className="w-4 h-px bg-[#ff6c6c]" />
            {sub.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {sub.items.map((item) => (
              <div
                key={item.name}
                className="rounded-lg px-3 py-2.5"
                style={{ background: "rgba(255,108,108,0.06)", border: "1px solid rgba(255,108,108,0.12)" }}
              >
                <div className="font-['Space_Grotesk'] text-[12px] font-semibold text-red-300/80">{item.name}</div>
                <div className="text-[10px] text-[#6b6890] mt-0.5 font-['Inter']">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
