const focusAreas = [
  "Software Engineering",
  "Full-Stack Development",
  "Cloud & DevOps",
  "Cyber Security",
];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 py-24 text-center"
    >
      <div className="flex max-w-2xl flex-col items-center gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>

        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I&apos;m a Computer Science &amp; Engineering undergraduate at the{" "}
          <span className="font-medium text-foreground">
            University of Moratuwa
          </span>
          , specializing in Cyber Security. I like building things end to
          end — from containerized backends and CI/CD pipelines to
          full-stack web and mobile apps — and I enjoy the security side just
          as much: probing for vulnerabilities with tools like Burp Suite,
          and reasoning about network design at the level of VLANs, routing,
          and DMZs.
        </p>

        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Outside of coursework, I&apos;ve worked on group software projects
          covering DevOps and containerization, hardware design in{" "}
          <code className="rounded bg-black/[.05] px-1.5 py-0.5 text-sm dark:bg-white/[.1]">
            VHDL
          </code>
          , and Flutter mobile development — and I&apos;m always looking for
          the next system worth building or breaking.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-solid border-black/[.08] px-4 py-2 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
