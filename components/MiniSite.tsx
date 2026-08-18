export function MiniSite({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-ink-900">
      {/* fake nav bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 48 48" className="h-2.5 w-2.5" aria-hidden="true">
            <path d="M24 4 L44 44 L30 44 L24 30 L18 44 L4 44 Z" fill="#1c8dff" />
          </svg>
          {!compact && (
            <span className="font-display text-[5px] font-bold tracking-widest text-white">
              ALANIA TECH
            </span>
          )}
        </div>
        {!compact && (
          <div className="flex gap-1.5">
            <span className="h-[3px] w-3 rounded-full bg-white/25" />
            <span className="h-[3px] w-3 rounded-full bg-white/25" />
            <span className="h-[3px] w-3 rounded-full bg-white/25" />
          </div>
        )}
      </div>

      {/* hero mini */}
      <div className="relative flex flex-1 items-center justify-center">
        <svg viewBox="0 0 200 200" className="absolute h-[92%] w-[92%] opacity-90" aria-hidden="true">
          <defs>
            <linearGradient id="miniTri" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1c8dff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#4fd7f5" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M15 15 L185 15 L100 165 Z" fill="url(#miniTri)" />
        </svg>
        <p className="relative z-10 px-2 text-center font-display text-[8px] font-extrabold uppercase leading-tight text-white">
          Tecnologia que{" "}
          <span className="text-brand-blue">transforma</span> negócios
        </p>
      </div>
    </div>
  );
}
