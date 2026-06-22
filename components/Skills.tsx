import Reveal from "./Reveal";

const groups = [
  {
    label: "Frontend & Mobile",
    items: ["TypeScript", "React", "React Native", "Next.js"],
  },
  {
    label: "Backend & Data",
    items: [
      "Supabase / PostgreSQL",
      "Row-Level Security",
      "REST APIs",
      "GraphQL",
      "Stripe",
      "Cron jobs",
    ],
  },
  {
    label: "Infrastructure",
    items: ["Vercel", "Cloudflare", "Git/GitHub", "OAuth"],
  },
  {
    label: "AI & Analytics",
    items: [
      "Claude Code",
      "Claude API",
      "Statistical validation",
      "SEO/AEO",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <span className="mb-7 block font-mono text-[13px] uppercase tracking-wide text-ink-faint">
          [ Skills ]
        </span>
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {groups.map((g) => (
            <Reveal key={g.label}>
              <span className="mb-2.5 block font-mono text-xs uppercase tracking-wide text-green">
                {g.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-bg-card px-3 py-1.5 font-mono text-[12.5px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
