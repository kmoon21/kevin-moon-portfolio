import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <span className="mb-7 block font-mono text-[13px] uppercase tracking-wide text-ink-faint">
          [ Projects ]
        </span>

        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}

        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[10px] border border-border bg-bg-card px-6 py-[18px]">
            <div className="flex items-center gap-3.5">
              <span className="inline-flex items-center gap-1.5 rounded bg-green-soft px-2.5 py-1 font-mono text-[11.5px] uppercase tracking-wide text-green">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                App Store
              </span>
              <div>
                <span className="block font-display text-[17px] font-semibold">
                  ReTap
                </span>
                <p className="text-sm text-ink-soft">
                  Reverse-memory puzzle game — React Native/Expo, AdMob
                  monetization, shipped solo end-to-end.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
