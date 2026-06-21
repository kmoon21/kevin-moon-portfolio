import TypewriterLine from "./TypewriterLine";
import Reveal from "./Reveal";
import { statusItems } from "@/lib/projects";

export default function Hero() {
  return (
    <header className="pb-16 pt-20 sm:pt-24">
      <div className="mx-auto max-w-3xl px-7">
        <span className="mb-4 block font-mono text-sm uppercase tracking-wide text-green">
          Full-Stack Developer · Las Vegas, NV · Open to remote
        </span>
        <h1 className="mb-4 font-display text-[clamp(34px,6vw,52px)] font-bold leading-[1.08] tracking-tight">
          Kevin Moon
        </h1>
        <TypewriterLine text="I build production software that real people use, pay for, and depend on — not demos sitting in a repo." />
        <p className="mb-2 font-mono text-[13px] text-ink-faint">
          Solo founder — architecture, backend, frontend, and production ops. One person, four shipped products.
        </p>

        <div className="my-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded bg-ink px-5 py-[11px] font-mono text-[13px] text-bg hover:bg-green"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded border border-border px-5 py-[11px] font-mono text-[13px] hover:border-ink"
          >
            Download resume
          </a>
          <a
            href="mailto:kevin.moon421@gmail.com"
            className="rounded border border-border px-5 py-[11px] font-mono text-[13px] hover:border-ink"
          >
            Email me
          </a>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-lg border border-border bg-bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-[10px] font-mono text-xs text-ink-faint">
              <span className="flex gap-1.5">
                <span className="h-[9px] w-[9px] rounded-full bg-border" />
                <span className="h-[9px] w-[9px] rounded-full bg-border" />
                <span className="h-[9px] w-[9px] rounded-full bg-border" />
              </span>
              live-status — 3 services
            </div>
            {statusItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-wrap items-center gap-3.5 border-b border-border px-5 py-4 font-mono text-[13.5px] last:border-b-0"
              >
                <span className="h-[9px] w-[9px] flex-shrink-0 animate-pulse-dot rounded-full bg-green shadow-[0_0_0_3px_var(--color-green-soft)]" />
                <span className="min-w-[130px] font-semibold">
                  {item.name}
                </span>
                <span className="flex-1 text-ink-soft">
                  {item.description}
                  <strong className="font-semibold text-green">
                    {item.highlight}
                  </strong>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
