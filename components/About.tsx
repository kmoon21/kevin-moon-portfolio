import Reveal from "./Reveal";

const facts = [
  { k: "LOCATION", v: "Las Vegas, NV" },
  { k: "BACKGROUND", v: "Sales & PR → Engineer" },
  { k: "BUILDING SINCE", v: "2025" },
  { k: "CORE STACK", v: "TS · React · Next.js" },
  { k: "CURRENTLY", v: "SandlotSharp v7 rollout" },
  { k: "OUTSIDE WORK", v: "Dota 2 — Divine/Immortal" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <span className="mb-7 block font-mono text-[13px] uppercase tracking-wide text-ink-faint">
          [ About ]
        </span>
        <div className="grid items-start gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="mb-4 font-display text-2xl font-semibold">
              From client pitches to production code
            </h2>
            <p className="mb-3.5 text-base text-ink-soft">
              My technical foundation goes back to 2018 — a 12-week
              full-stack bootcamp, then years in sales and public relations
              took over. Those years taught me how to read people, manage
              client relationships, and make a pitch land under pressure. In
              2025 I came back to building software seriously, and the two
              sets of instincts turned out to compound: figure out what the
              user actually needs, ship something real, watch how it breaks,
              and don&apos;t get attached to a feature the data says
              isn&apos;t working.
            </p>
            <p className="text-base text-ink-soft">
              Over the past year that&apos;s meant designing and operating
              four production applications end-to-end — architecture,
              backend, frontend, payments, and the unglamorous
              production-monitoring work that keeps them running while real
              people use them.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border border-border bg-bg-card px-[22px] py-5 font-mono text-[13px]">
              {facts.map((f, idx) => (
                <div
                  key={f.k}
                  className={`flex justify-between gap-3 py-2 ${
                    idx !== facts.length - 1
                      ? "border-b border-dashed border-border"
                      : ""
                  }`}
                >
                  <span className="text-ink-faint">{f.k}</span>
                  <span className="text-right font-medium">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
