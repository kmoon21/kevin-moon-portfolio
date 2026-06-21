import Reveal from "./Reveal";

const principles = [
  {
    title: "I kill my own ideas when the data says to.",
    body: "Ran cross-season backtesting on my own SandlotSharp betting model and found the core features performed below a coin flip out of sample. Instead of defending it, I shipped a replacement architecture.",
  },
  {
    title: "I report null results, not just the ones that worked.",
    body: "Tested four different angles on closing-line value for SandlotSharp's edge. All four came back negative. I documented that and moved on, instead of cherry-picking the one framing that looked better.",
  },
  {
    title: "I instrument before I trust.",
    body: "After a silent failure took down a production pipeline with no warning, I built persistent error-audit logging so the next failure surfaces immediately instead of going unnoticed for days.",
  },
];

export default function HowIBuild() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <span className="mb-2 block font-mono text-[13px] uppercase tracking-wide text-ink-faint">
          [ How I Build ]
        </span>
        <h2 className="mb-9 font-display text-2xl font-semibold">
          Three things that show up in every project
        </h2>
        <div className="flex flex-col gap-7">
          {principles.map((p) => (
            <Reveal key={p.title}>
              <div className="border-l-[3px] border-green py-1 pl-5">
                <h3 className="mb-1.5 font-display text-[17px] font-semibold">
                  {p.title}
                </h3>
                <p className="text-[15px] text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
