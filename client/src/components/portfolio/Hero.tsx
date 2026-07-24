import { PROFILE } from "@/lib/portfolio";
import { MapPin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/manus-storage/hero-bg_9423a33b.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />

      <div className="container relative z-10 pt-28 pb-20">
        <p className="reveal font-mono-label text-[11px] text-gold mb-6" style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
          Portfolio — {new Date().getFullYear()}
        </p>
        <h1
          className="reveal font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-foreground max-w-4xl"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          {PROFILE.name.split(" ")[0]}{" "}
          <span className="gold-gradient-text italic">{PROFILE.name.split(" ")[1]}</span>
        </h1>
        <p
          className="reveal mt-6 font-mono-label text-[11px] sm:text-xs text-foreground/90"
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
          {PROFILE.title}
        </p>
        <p
          className="reveal mt-3 flex items-center gap-2 text-sm text-muted-foreground"
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
          <MapPin size={14} className="text-gold" /> {PROFILE.location}
        </p>
        <p
          className="reveal mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/75"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
          {PROFILE.shortBio}
        </p>

        <div
          className="reveal mt-12 flex flex-wrap items-center gap-5"
          style={{ "--reveal-delay": "380ms" } as React.CSSProperties}>
          <a
            href="#work"
            className="font-mono-label text-[11px] px-7 py-3.5 bg-gold text-primary-foreground hover:opacity-90 active:scale-[0.97] transition-all duration-200">
            View Work
          </a>
          <a
            href="#contact"
            className="font-mono-label text-[11px] px-7 py-3.5 border border-foreground/25 text-foreground hover:border-gold hover:text-gold active:scale-[0.97] transition-all duration-200">
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-gold transition-colors animate-bounce">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
