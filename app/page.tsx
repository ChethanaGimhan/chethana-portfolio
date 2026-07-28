export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
          Chethana Gimhan
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
          Computer Science &amp; Engineering undergrad specializing in Cyber Security
        </p>

        <p className="text-base text-zinc-500 dark:text-zinc-500 max-w-xl">
          Building secure, containerized systems — from DevOps pipelines to
          full-stack applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="mailto:chethanagimhan@gmail.com"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/ChethanaGimhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chethanagimhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
