import Reveal from "./Reveal";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      "Java",
      "Python",
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "Dart",
      "SQL",
      "VHDL",
    ],
  },
  {
    category: "Backend & Frontend",
    skills: ["FastAPI", "Node.js", "Express", "React", "Flutter"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "Git"],
  },
  {
    category: "Databases & Security",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Tech Stack
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delayMs={index * 80}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-solid border-black/[.08] px-3 py-1.5 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
