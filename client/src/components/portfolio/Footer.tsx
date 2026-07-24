import { PROFILE } from "@/lib/portfolio";
import Monogram from "./Monogram";

export default function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="container py-16 md:py-20 flex flex-col items-center text-center gap-6">
        <Monogram size={44} className="text-gold" />
        <p className="font-display text-2xl md:text-3xl text-foreground">
          Abdul <span className="gold-gradient-text italic">Kayum</span>
        </p>
        <p className="font-mono-label text-[10px] text-muted-foreground max-w-md leading-relaxed">
          Every brand deserves an opening frame worth remembering.
        </p>
        <div className="hairline w-40" />
        <p className="font-mono-label text-[10px] text-muted-foreground/70">
          © {new Date().getFullYear()} {PROFILE.name} — Birds Aviary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
