import { PROFILE } from "@/lib/portfolio";
import { SectionHeading } from "./Projects";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-card/40">
      <div className="container">
        <SectionHeading kicker="The Director" title={<>About <span className="gold-gradient-text italic">Abdul</span></>} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="relative overflow-hidden border border-border">
              <img
                src="/manus-storage/portrait_905b584d.png"
                alt="Abdul Kayum portrait"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-8">
            {PROFILE.fullBio.map((para, i) => (
              <p
                key={i}
                className="reveal text-base sm:text-lg leading-relaxed text-foreground/75 mb-6"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                {para}
              </p>
            ))}

            <div className="reveal mt-10" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <p className="font-mono-label text-[11px] text-gold mb-5">Skills</p>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.map(s => (
                  <span key={s} className="font-display text-xl sm:text-2xl text-foreground border-b border-gold/40 pb-1 mr-4">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="reveal font-mono-label text-[11px] text-gold mb-7">Experience</p>
              <div className="flex flex-col">
                {PROFILE.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="reveal grid sm:grid-cols-12 gap-2 sm:gap-6 py-6 border-t border-border"
                    style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                    <p className="sm:col-span-3 font-mono-label text-[10px] text-muted-foreground pt-1">{exp.period}</p>
                    <div className="sm:col-span-9">
                      <h4 className="font-display text-xl text-foreground">
                        {exp.role} <span className="text-gold">·</span>{" "}
                        <span className="text-foreground/70">{exp.company}</span>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
