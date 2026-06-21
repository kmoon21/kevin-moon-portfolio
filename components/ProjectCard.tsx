import { Project } from "@/lib/projects";
import Reveal from "./Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <div className="mb-5 rounded-[10px] border border-border bg-bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(20,30,25,0.06)]">
        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2.5">
          <span className="font-display text-xl font-semibold">
            {project.name}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded bg-green-soft px-2.5 py-1 font-mono text-[11.5px] uppercase tracking-wide text-green">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            {project.status}
          </span>
        </div>

        <p className="mb-4 text-[15.5px] text-ink-soft">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-7">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <span className="block font-display text-2xl font-bold">
                {m.num}
              </span>
              <span className="font-mono text-[11.5px] uppercase tracking-wide text-ink-faint">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-4 rounded-r-md border-l-[3px] border-amber bg-amber-soft px-4 py-3">
          <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-amber">
            Engineering note
          </span>
          <p className="text-[14.5px]">{project.engineeringNote}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11.5px] text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            className="border-b border-border font-mono text-[12.5px] text-ink-soft hover:border-green hover:text-green"
          >
            {project.url.replace("https://", "")} →
          </a>
        </div>
      </div>
    </Reveal>
  );
}
