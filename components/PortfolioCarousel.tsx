"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { basePath } from "../lib/basePath";

type Item = {
  name: string;
  tag: string;
  image: string;
  url?: string;
  quote?: string;
  role?: string;
};

const ITEMS: Item[] = [
  {
    name: "Alania System",
    tag: "Sistema personalizado",
    image: "https://picsum.photos/id/180/500/500",
    url: "https://alaniasystem.com.br/",
  },
  {
    name: "Patrícia Pain",
    tag: "Depoimento",
    image: `${basePath}/images/depoimento-patricia-pain.jpg`,
    quote:
      "Gostaria de agradecer à equipe da Alania pelo excelente trabalho no desenvolvimento do site da minha empresa fictícia. Desde o início, o atendimento foi ágil e eficiente, com respostas rápidas em todas as etapas do processo. O Victor, que foi meu principal ponto de contato, sempre se mostrou disponível e atencioso, garantindo uma comunicação clara e fluida. Durante o desenvolvimento, a equipe foi muito proativa, enviando vídeos com as funcionalidades implementadas e incorporando rapidamente as alterações solicitadas. Além disso, a integração das ferramentas de eyetracking e mouse tracking foi um diferencial importante para a proposta do projeto. Fiquei bastante satisfeita com o resultado final e com a parceria ao longo do processo. Recomendo o trabalho da Alania pela competência técnica, organização e comprometimento com a entrega.",
    role: "Cliente",
  },
  {
    name: "Vórtex Logística",
    tag: "IA & automação",
    image: "https://picsum.photos/id/26/500/500",
    url: "https://example.com",
  },
  {
    name: "Ricardo Prado",
    tag: "Depoimento",
    image: "https://picsum.photos/id/91/500/500",
    quote:
      "O sistema entregue foi além do que pedimos — pensaram em automações que nem sabíamos que precisávamos. Suporte rápido em todas as etapas.",
    role: "Sócio, Prado & Associados",
  },
  {
    name: "Bloom Studio",
    tag: "Consultoria administrativa",
    image: "https://picsum.photos/id/48/500/500",
    url: "https://example.com",
  },
];

export function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const handleClick = (item: Item, i: number) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      setExpanded((prev) => (prev === i ? null : i));
    }
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map((item, i) => (
            <button
              key={item.name}
              onClick={() => handleClick(item, i)}
              className="group relative w-[240px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 sm:w-[280px]"
              aria-expanded={expanded === i}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                <div className="absolute inset-0 bg-brand-deep/20 mix-blend-color" />

                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/70 text-white backdrop-blur">
                  {item.url ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 7h4v6H8.5C8.5 15 7 16 5 16v2c3 0 5-2 5-5V7Zm8 0h4v6h-2.5c0 2-1.5 3-3.5 3v2c3 0 5-2 5-5V7Z" />
                    </svg>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-[10px] font-semibold tracking-widest2 text-brand-cyan">
                    {item.tag.toUpperCase()}
                  </p>

                  <p className="mt-1 font-display text-sm font-bold text-white">
                    {item.name}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          aria-label="Anterior"
          onClick={() => scroll(-1)}
          className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white backdrop-blur transition-colors hover:border-brand-blue hover:text-brand-blue sm:flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m15 6-6 6 6 6" />
          </svg>
        </button>

        <button
          aria-label="Próximo"
          onClick={() => scroll(1)}
          className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white backdrop-blur transition-colors hover:border-brand-blue hover:text-brand-blue sm:flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>

      {expanded !== null && ITEMS[expanded].quote && (
        <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-white/10 bg-ink-700/60 p-6 text-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-3 text-brand-blue"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path
              d="M7 7h4v6H8.5C8.5 15 7 16 5 16v2c3 0 5-2 5-5V7Zm8 0h4v6h-2.5c0 2-1.5 3-3.5 3v2c3 0 5-2 5-5V7Z"
              fill="currentColor"
              stroke="none"
            />
          </svg>

          <p className="font-body text-sm italic leading-relaxed text-white/90 sm:text-base">
            &ldquo;{ITEMS[expanded].quote}&rdquo;
          </p>

          <p className="mt-4 font-display text-xs font-bold tracking-wide text-brand-cyan">
            {ITEMS[expanded].name} — {ITEMS[expanded].role}
          </p>
        </div>
      )}
    </div>
  );
}
