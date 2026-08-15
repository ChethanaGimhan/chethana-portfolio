import Reveal from "./Reveal";

const focusAreas = [
  "Penetration Testing",
  "Application Security",
  "Secure System Design",
  "DevOps & Cloud",
];

const quickFacts = [
  ["🎓 University", "University of Moratuwa, Sri Lanka"],
  ["📚 Programme", "B.Sc. Eng (Hons) Computer Science & Engineering"],
  ["🛡️ Focus", "Cyber Security"],
  ["🧱 Interests", "Penetration Testing · Application Security"],
  ["🏃 Off-screen", "400m Hurdler · Vice-captain, Men's Athletic Team"],
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
          I&apos;m a third-year Computer Science &amp; Engineering
          undergraduate at the{" "}
          <span className="font-medium text-foreground">
            University of Moratuwa
          </span>
          , specializing in Cyber Security. I build and deploy containerized
          DevOps pipelines, design databases, and work on database forensics —
          and I&apos;m drawn to the security side of all of it: penetration
          testing, application security, and secure system design.
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
          Outside of coursework, I&apos;m President of the Mora Athletics
          Society and vice-captain of the university men&apos;s athletic team,
          competing as a 400m hurdler. I&apos;m an AWS Academy graduate in{" "}
          <span className="font-medium text-foreground">Cloud Foundations</span>{" "}
          and{" "}
          <span className="font-medium text-foreground">
            Microservices &amp; CI/CD Pipeline Builder
          </span>
          .
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
