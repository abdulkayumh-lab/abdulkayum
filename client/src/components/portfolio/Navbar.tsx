import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Monogram from "./Monogram";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}>
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3 font-display text-xl md:text-2xl tracking-wide text-foreground">
          <Monogram size={26} className="text-gold" />
          Abdul <span className="gold-gradient-text">Kayum</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-label text-[11px] text-muted-foreground hover:text-gold transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono-label text-[11px] px-5 py-2.5 border border-gold/40 text-gold hover:bg-gold/10 transition-colors duration-200">
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container py-6 flex flex-col gap-5">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono-label text-xs text-muted-foreground hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
