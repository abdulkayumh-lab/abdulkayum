import { PROFILE } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-foreground">
          Abdul <span className="gold-gradient-text italic">Kayum</span>
        </p>
        <p className="font-mono-label text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name} — Birds Aviary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
