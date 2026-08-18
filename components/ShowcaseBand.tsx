import Image from "next/image";
import { Services } from "./Services";
import { MiniSite } from "./MiniSite";
import { TrianglePattern } from "./TrianglePattern";

export function ShowcaseBand() {
  return (
    <section id="servicos" className="relative overflow-hidden border-t border-white/5 bg-ink-900">
      {/* ambient backdrop photo, subtle like the reference (keyboard/circuit texture) */}
      <Image
        src="https://picsum.photos/id/0/1600/1400"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12] mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/85 to-ink-900" />

      <TrianglePattern className="pointer-events-none absolute -left-6 bottom-10 h-40 w-56 opacity-70 md:h-56 md:w-80" />
      <TrianglePattern className="pointer-events-none absolute -right-6 bottom-24 h-32 w-48 opacity-50 md:h-48 md:w-72" />

      <div className="relative py-20 md:py-24">
        <Services />
      </div>

      {/* devices */}
      <div className="relative pb-0 pt-4">
        <div className="relative mx-auto flex max-w-4xl items-end justify-center px-6 pb-8 pt-6 sm:pb-14">
          {/* tablet */}
          <div className="relative z-10 mb-2 w-[30%] max-w-[210px] -mr-6 rotate-[-1deg] rounded-[18px] border-[6px] border-ink-600 bg-ink-600 shadow-2xl sm:mb-4">
            <div className="aspect-[3/4] overflow-hidden rounded-[12px]">
              <MiniSite compact />
            </div>
          </div>

          {/* monitor */}
          <div className="relative z-20 w-[46%] max-w-[320px]">
            <div className="rounded-[10px] border-[8px] border-ink-600 bg-ink-600 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-[3px]">
                <MiniSite />
              </div>
            </div>
            <div className="mx-auto h-6 w-3 bg-ink-600 sm:h-8" />
            <div className="mx-auto h-2.5 w-24 rounded-full bg-white/80 sm:w-32" />
          </div>

          {/* phone */}
          <div className="relative z-10 mb-2 w-[16%] max-w-[110px] -ml-6 rotate-[2deg] rounded-[16px] border-[5px] border-ink-600 bg-ink-600 shadow-2xl sm:mb-4">
            <div className="aspect-[9/19] overflow-hidden rounded-[11px]">
              <MiniSite compact />
            </div>
          </div>
        </div>

        <div className="relative h-10 bg-gradient-to-b from-transparent to-ink-900 sm:h-16" />
      </div>
    </section>
  );
}
