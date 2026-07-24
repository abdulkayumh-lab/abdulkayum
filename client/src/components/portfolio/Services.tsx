import { SERVICES } from "@/lib/portfolio";
import { SectionHeading } from "./Projects";
import { Gem, Clapperboard, BookOpen } from "lucide-react";

const ICONS = [Gem, Clapperboard, BookOpen];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading kicker="Offerings" title={<>What I <span className="gold-gradient-text italic">Create</span></>} />

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={s.id}
                className="reveal group relative p-8 md:p-10 border border-border bg-card/60 hover:border-gold/40 transition-colors duration-300"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold mb-8 group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <p className="font-mono-label text-[10px] text-muted-foreground mb-3">0{i + 1}</p>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4">{s.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
