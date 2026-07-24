import { PROJECTS } from "@/lib/portfolio";

function SectionHeading({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div className="mb-14 md:mb-20">
      <p className="reveal font-mono-label text-[11px] text-gold mb-4">{kicker}</p>
      <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl text-foreground" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
        {title}
      </h2>
      <div className="reveal hairline mt-10 w-full" style={{ "--reveal-delay": "160ms" } as React.CSSProperties} />
    </div>
  );
}

export { SectionHeading };

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading kicker="Selected Work" title={<>Featured <span className="gold-gradient-text italic">Projects</span></>} />

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={`md:col-span-7 [direction:ltr] reveal`}>
                <div className="group relative overflow-hidden border border-border">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>

              <div className="md:col-span-5 [direction:ltr]">
                <p className="reveal font-mono-label text-[10px] text-muted-foreground mb-3">{String(i + 1).padStart(2, "0")} — {p.year}</p>
                <h3 className="reveal font-display text-3xl sm:text-4xl text-foreground mb-5" style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
                  {p.title}
                </h3>
                <p className="reveal text-sm sm:text-base leading-relaxed text-foreground/70 mb-7" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
                  {p.description}
                </p>
                <div className="reveal flex flex-wrap gap-2.5" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className="font-mono-label text-[10px] px-3.5 py-1.5 border border-gold/25 text-gold/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
