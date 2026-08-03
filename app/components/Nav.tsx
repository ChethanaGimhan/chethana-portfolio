const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-black/[.08] bg-background/80 px-6 py-4 backdrop-blur dark:border-white/[.145]">
      <a href="#home" className="font-semibold tracking-tight text-foreground">
        Chethana Gimhan
      </a>
      <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
