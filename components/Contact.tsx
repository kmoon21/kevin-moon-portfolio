export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-16 text-center">
      <div className="mx-auto max-w-3xl px-7">
        <span className="mb-7 block font-mono text-[13px] uppercase tracking-wide text-ink-faint">
          [ Contact ]
        </span>
        <h2 className="mb-3 font-display text-[30px] font-semibold">
          Open to full-stack roles
        </h2>
        <p className="mb-7 text-ink-soft">
          Remote, or Las Vegas-based. Always happy to talk shop about what
          I&apos;m building.
        </p>
        <div className="mb-4 flex flex-wrap justify-center gap-3.5">
          <a
            href="mailto:kevin.moon421@gmail.com"
            className="rounded bg-ink px-5 py-[11px] font-mono text-[13px] text-bg hover:bg-green"
          >
            kevin.moon421@gmail.com
          </a>
          <a
            href="https://github.com/kmoon21"
            target="_blank"
            rel="noopener"
            className="rounded border border-border px-5 py-[11px] font-mono text-[13px] hover:border-ink"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevinmoondev"
            target="_blank"
            rel="noopener"
            className="rounded border border-border px-5 py-[11px] font-mono text-[13px] hover:border-ink"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded border border-border px-5 py-[11px] font-mono text-[13px] hover:border-ink"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
