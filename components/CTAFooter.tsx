import { Logo } from "./Logo";

// Social icons are hidden for now (see SOCIALS usage below) — flip this to
// true whenever the real social profiles are ready to link.
const SHOW_SOCIALS = false;

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M4 10.5c3 1 8 1 11 0M6.5 4c2.5 3 4 7 4.5 16M18.5 5.5c-1.5 2-4.5 4-9.5 5" />
      </svg>
    ),
  },
  {
    label: "Behance",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 9.5H3v6.8h4.7c1.9 0 3-1 3-2.7 0-1.2-.6-2-1.6-2.3.7-.4 1.1-1 1.1-1.9 0-1.6-1.2-2.5-2.7-2.5H3v1.6h4.3c.8 0 1.3.4 1.3 1s-.5 1-1.3 1H3v1.4h4.6c1 0 1.5.4 1.5 1.2s-.6 1.2-1.6 1.2H4.7v-2.8H7.5Zm7-2c-2.5 0-4.3 1.8-4.3 4.4 0 2.7 1.7 4.4 4.4 4.4 1.8 0 3.1-.7 3.8-2.1l-1.5-.7c-.4.8-1.1 1.2-2.2 1.2-1.4 0-2.3-.8-2.5-2.2h6.4c.2-2.8-1.3-5-4.1-5Zm-2.2 3.6c.2-1.2 1-1.9 2.2-1.9 1.1 0 1.9.7 2 1.9h-4.2ZM13.5 6h5.8v1.3h-5.8V6Z" />
      </svg>
    ),
  },
];

export function CTAFooter() {
  return (
    <footer id="contato" className="bg-ink-900 px-6 pb-8 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-xs font-semibold tracking-widest2 text-brand-cyan">
          VAMOS CONVERSAR?
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          Sua empresa pode ir mais longe.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist md:text-base">
          Fale com nossos especialistas e descubra como a tecnologia certa pode
          transformar a gestão e os resultados do seu negócio.
        </p>
        <a
          href="https://wa.me/5551995383998"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md bg-brand-gradient px-7 py-3.5 font-display text-[12px] font-bold tracking-widest2 text-ink-900 shadow-glow transition-transform hover:scale-[1.02]"
        >
          FALAR COM UM ESPECIALISTA &nbsp;›
        </a>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo />

          {/* Social icons — hidden for now (kept in code, not deleted).
              Set SHOW_SOCIALS to true whenever the real profiles are ready. */}
          {SHOW_SOCIALS && (
            <div className="flex gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-white/70 transition-colors hover:text-brand-blue"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}

          <div className="text-center text-xs leading-relaxed text-mist sm:text-right">
            <p>alaniatechadvisory@gmail.com</p>
            <p>Rio Grande do Sul, Novo Hamburgo, Brazil</p>
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] text-mist/70">
          © {new Date().getFullYear()} ALANIA TECH ADVISORY — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
