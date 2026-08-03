import Reveal from "./Reveal";

const focusAreas = [
  "Software Engineering",
  "Full-Stack Development",
  "Cloud & DevOps",
  "Cyber Security",
];

const quickFacts = [
  ["🎓 University", "University of Moratuwa, Sri Lanka"],
  ["📚 Programme", "B.Sc. Eng (Hons) Computer Science & Engineering"],
  ["🛡️ Focus", "Cyber Security"],
  ["🧱 Interests", "Offensive Security · Penetration Testing"],
  ["🏃 Off-screen", "400m Hurdler · University of Moratuwa Athlete"],
];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 py-24 text-center"
    >
      <Reveal className="flex max-w-2xl flex-col items-center gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>

        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I&apos;m a Computer Science &amp; Engineering undergraduate at the{" "}
          <span className="font-medium text-foreground">
            University of Moratuwa
          </span>
          , specializing in Cyber Security. I enjoy building things end to
          end and understanding how they work under the hood, with a growing
          interest in offensive security.
        </p>

        <div className="grid w-full grid-cols-[max-content_1fr] gap-x-4 gap-y-2 rounded-2xl border border-solid border-black/[.08] bg-black/[.02] p-6 text-left font-mono text-sm text-zinc-600 dark:border-white/[.145] dark:bg-white/[.03] dark:text-zinc-400">
          {quickFacts.map(([label, value]) => (
            <div key={label} className="contents">
              <span className="whitespace-nowrap text-foreground">
                {label}
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Outside of coursework, I&apos;ve worked on group software projects
          covering DevOps and containerization, hardware design in{" "}
          <code className="rounded bg-black/[.05] px-1.5 py-0.5 text-sm dark:bg-white/[.1]">
            VHDL
          </code>
          , and Flutter mobile development.
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
      </Reveal>
    </section>
  );
}
