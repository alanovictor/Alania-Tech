import { PortfolioCarousel } from "./PortfolioCarousel";

export function Intro() {
  return (
    <section className="relative bg-ink-900 px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-xs font-semibold tracking-widest2 text-brand-cyan">
          ALANIA TECH ADVISORY
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.6rem]">
          Sistemas personalizados, inovação e inteligência artificial para{" "}
          <span className="text-brand-blue">impulsionar resultados</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
          Desenvolvemos soluções tecnológicas sob medida e oferecemos consultoria
          administrativa para otimizar processos, aumentar produtividade e gerar
          crescimento sustentável.
        </p>
      </div>

      <div id="portfolio" className="mx-auto mt-20 max-w-6xl scroll-mt-24">
        <div className="text-center">
          <p className="font-display text-xs font-semibold tracking-widest2 text-brand-cyan">
            PORTFÓLIO &amp; CLIENTES
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            Projetos que já saíram do papel.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist">
            Arraste para o lado para navegar. Clique em um projeto pra visitar o
            site do cliente, ou em um depoimento pra ler a experiência completa.
          </p>
        </div>

        <div className="mt-10">
          <PortfolioCarousel />
        </div>
      </div>
    </section>
  );
}
