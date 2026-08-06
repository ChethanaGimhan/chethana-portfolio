import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-black/[.08] bg-background/80 px-4 py-3 backdrop-blur dark:border-white/[.145] sm:px-6 sm:py-4">
      {/* Plain <a> tags (not next/link) are intentional here — Link's
          client-side hash navigation has a routing bug in this Next.js
          version that concatenates hashes instead of replacing them. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/#home"
        className="font-semibold tracking-tight text-foreground whitespace-nowrap"
      >
        <span className="sm:hidden">CG</span>
        <span className="hidden sm:inline">Chethana Gimhan</span>
      </a>
      <nav className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 sm:gap-6 sm:text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-solid border-black/[.08] px-3 py-1 text-foreground transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:px-4 sm:py-1.5"
        >
          Resume
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
