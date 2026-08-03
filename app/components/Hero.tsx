export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex flex-col items-center gap-6 max-w-2xl">
        <h1 className="animate-fade-in-up text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
          Chethana Gimhan
        </h1>

        <p
          className="animate-fade-in-up text-lg sm:text-xl text-zinc-600 dark:text-zinc-400"
          style={{ animationDelay: "100ms" }}
        >
          Computer Science &amp; Engineering undergrad specializing in Cyber Security
        </p>

        <p
          className="animate-fade-in-up text-base italic text-zinc-500 dark:text-zinc-500 max-w-xl"
          style={{ animationDelay: "200ms" }}
        >
          I don&apos;t stop at &ldquo;it works&rdquo; — I stop at knowing why
          it works, and how it breaks.
        </p>

        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4 mt-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="mailto:chethanagimhan@gmail.com"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition hover:scale-[1.03] hover:bg-[#383838] active:scale-[0.97] dark:hover:bg-[#ccc]"
          >
            Email Me
          </a>
          <a
            href="https://github.com/ChethanaGimhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition hover:scale-[1.03] hover:border-transparent hover:bg-black/[.04] active:scale-[0.97] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chethanagimhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition hover:scale-[1.03] hover:border-transparent hover:bg-black/[.04] active:scale-[0.97] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            LinkedIn
          </a>
        </div>

        <div
          className="animate-fade-in-up flex items-center gap-2 rounded-full border border-solid border-black/[.08] px-4 py-2 text-sm text-zinc-600 dark:border-white/[.145] dark:text-zinc-400"
          style={{ animationDelay: "400ms" }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to internships in Cyber Security &amp; Software Engineering
        </div>
      </div>
    </section>
  );
}
