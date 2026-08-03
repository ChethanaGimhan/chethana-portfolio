import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-6 py-24 text-center"
    >
      <Reveal className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h2>

        <p className="max-w-md text-base text-zinc-600 dark:text-zinc-400">
          Have a project in mind, or just want to talk security and DevOps?
          My inbox is open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
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

        <p className="mt-12 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Chethana Gimhan
        </p>
      </Reveal>
    </section>
  );
}
