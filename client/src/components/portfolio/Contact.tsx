import { useState } from "react";
import { PROFILE } from "@/lib/portfolio";
import { SectionHeading } from "./Projects";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Facebook, Twitter, Instagram, Loader2, Send } from "lucide-react";

const SOCIALS = [
  { label: "Facebook", href: PROFILE.socials.facebook, Icon: Facebook },
  { label: "X / Twitter", href: PROFILE.socials.twitter, Icon: Twitter },
  { label: "Instagram", href: PROFILE.socials.instagram, Icon: Instagram },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const submit = trpc.inquiry.submit.useMutation({
    onSuccess: () => {
      toast.success("Inquiry sent — Abdul will get back to you soon.");
      setForm({ name: "", email: "", projectType: "", message: "" });
    },
    onError: err => toast.error(err.message || "Something went wrong. Please try again."),
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    submit.mutate(form);
  };

  const inputCls =
    "w-full bg-secondary/60 border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/50 transition-colors duration-200";

  return (
    <section id="contact" className="py-24 md:py-36 bg-card/40">
      <div className="container">
        <SectionHeading kicker="Contact" title={<>Let's Build Something <span className="gold-gradient-text italic">Cinematic</span></>} />

        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="reveal text-base sm:text-lg leading-relaxed text-foreground/75 mb-10">
              Available for freelance projects worldwide. Whether you need a complete visual identity,
              film-grade digital assets, or an infographic system that makes complexity beautiful —
              tell me about your vision.
            </p>

            <div className="reveal flex flex-col gap-4" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
              <p className="font-mono-label text-[11px] text-gold mb-1">Find me on</p>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-3 border-b border-border hover:border-gold/40 transition-colors duration-200">
                  <Icon size={18} className="text-gold" />
                  <span className="font-mono-label text-[11px] text-foreground/80 group-hover:text-gold transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="reveal flex flex-col gap-5" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-mono-label text-[10px] text-muted-foreground block mb-2.5">Name *</label>
                  <input
                    id="name"
                    className={inputCls}
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono-label text-[10px] text-muted-foreground block mb-2.5">Email *</label>
                  <input
                    id="email"
                    type="email"
                    className={inputCls}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="projectType" className="font-mono-label text-[10px] text-muted-foreground block mb-2.5">Project Type</label>
                <input
                  id="projectType"
                  className={inputCls}
                  placeholder="e.g. Visual identity, cinematic assets, infographics…"
                  value={form.projectType}
                  onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono-label text-[10px] text-muted-foreground block mb-2.5">Message *</label>
                <textarea
                  id="message"
                  rows={6}
                  className={inputCls}
                  placeholder="Tell me about your project, timeline, and budget…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                disabled={submit.isPending}
                className="self-start font-mono-label text-[11px] px-8 py-4 bg-gold text-primary-foreground hover:opacity-90 active:scale-[0.97] transition-all duration-200 disabled:opacity-50 flex items-center gap-3">
                {submit.isPending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
