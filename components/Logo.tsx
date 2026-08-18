export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="48" x2="48" y2="0">
          <stop offset="0%" stopColor="#0a4fb0" />
          <stop offset="55%" stopColor="#1c8dff" />
          <stop offset="100%" stopColor="#4fd7f5" />
        </linearGradient>
      </defs>
      <path d="M24 4 L44 44 L30 44 L24 30 L18 44 L4 44 Z" fill="url(#logoGrad)" />
      <path d="M24 18 L32 36 L16 36 Z" fill="#05070c" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <div className="leading-[1.05]">
        <div className="font-display text-[17px] font-extrabold tracking-wide text-white">
          ALANIA <span className="font-semibold text-mist">TECH</span>
        </div>
        <div className="font-display text-[10px] font-semibold tracking-widest2 text-brand-cyan">
          ADVISORY
        </div>
      </div>
    </div>
  );
}
