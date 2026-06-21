export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-7">
        <div className="flex items-center gap-2 font-mono text-sm tracking-wide">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green" />
          kevinmoon.dev
        </div>
        <ul className="flex items-center gap-7">
          <li className="hidden sm:block">
            <a
              href="#about"
              className="font-mono text-[13px] uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              About
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#projects"
              className="font-mono text-[13px] uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              Projects
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#skills"
              className="font-mono text-[13px] uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded font-mono text-[13px] tracking-wide bg-ink px-4 py-2 text-bg hover:bg-green"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
