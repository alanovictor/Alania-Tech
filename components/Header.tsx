"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Alania Tech", href: "#hero", active: true },
  { label: "Portfólio & Clientes", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-900/90 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 transition-[padding] duration-300 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <a href="#hero">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-display text-[12px] font-semibold tracking-widest2 transition-colors ${
                link.active
                  ? "border-b-2 border-brand-blue pb-1 text-brand-blue"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <button
            aria-label="Buscar"
            className="text-white/80 transition-colors hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </nav>

        <button
          className="text-white md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-6 mb-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink-800/95 p-6 backdrop-blur md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-display text-sm font-semibold tracking-widest2 ${
                link.active ? "text-brand-blue" : "text-white/85"
              }`}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
