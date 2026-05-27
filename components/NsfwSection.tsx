import { nsfwData } from "@/lib/data";

export default function NsfwSection() {
  return (
    <section id="nsfw" className="max-w-5xl mx-auto mb-14 scroll-mt-24">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#2a2a40]">
        <span className="text-2xl leading-none">🔞</span>
        <div className="flex-1">
          <h2 className="font-['var(--font-syne)'] text-xl font-bold text-white leading-tight">
            NSFW & Erotický Obsah
          </h2>
          <p className="text-[11px] text-[#7a7898] tracking-wide mt-0.5">
            Len názvy nástrojov · Pre dospelých (18+)
          </p>
        </div>
        <span className="text-[11px] text-[#7a7898] bg-[#1a1a28] border border-[#2a2a40] px-3 py-1 rounded-full shrink-0">
          20+ nástrojov
        </span>
      </div>

      {/* Warning */}
      <div className="bg-red-500/8 border border-red-500/25 rounded-lg p-4 mb-5 flex gap-3">
        <span className="text-lg shrink-0">⚠️</span>
        <p className="text-[12px] text-red-300/90 leading-relaxed">
          <strong>Poznámka pre príručku:</strong> {nsfwData.warning}
        </p>
      </div>

      {nsfwData.subsections.map((sub) => (
        <div key={sub.title} className="mb-6">
          <h3 className="font-['var(--font-syne)'] text-[11px] font-bold tracking-widest uppercase text-[#7a7898] mb-3 pl-3 border-l-2 border-[#2a2a40]">
            {sub.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {sub.items.map((item) => (
              <div
                key={item.name}
                className="bg-[#13131c] border border-red-500/15 rounded-md px-3 py-2"
              >
                <div className="font-['var(--font-syne)'] text-[12px] font-semibold text-red-300/80">
                  {item.name}
                </div>
                <div className="text-[10px] text-[#7a7898] mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
