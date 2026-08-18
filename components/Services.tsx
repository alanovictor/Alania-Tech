const SERVICES = [
  {
    title: "Sistemas\nPersonalizados",
    desc: "Soluções completas desenvolvidas de acordo com as necessidades específicas do seu negócio.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M3 7l9 5 9-5M12 12v10" />
      </svg>
    ),
  },
  {
    title: "Inteligência\nArtificial",
    desc: "Aplicamos IA para automatizar processos, gerar insights e tomar decisões mais inteligentes.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3" />
        <path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3" />
        <path d="M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    title: "Consultoria\nAdministrativa",
    desc: "Analisamos, planejamos e otimizamos processos administrativos para resultados consistentes.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        <path d="m9.5 12.8 1.8 1.8 3.2-3.2" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <div className="relative mx-auto grid max-w-6xl gap-14 px-6 sm:grid-cols-3 sm:gap-8 md:px-10">
      {SERVICES.map((s, i) => (
        <div key={i} className="relative text-center">
          {i !== 0 && (
            <span className="absolute -left-4 top-2 hidden h-16 w-px bg-white/10 sm:block" />
          )}
          <div className="mx-auto flex h-14 w-14 items-center justify-center text-brand-blue drop-shadow-[0_0_10px_rgba(28,141,255,0.5)]">
            {s.icon}
          </div>
          <h3 className="mt-5 whitespace-pre-line font-display text-sm font-bold tracking-wide text-white">
            {s.title}
          </h3>
          <p className="mx-auto mt-3 max-w-[240px] text-sm leading-relaxed text-mist">
            {s.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
