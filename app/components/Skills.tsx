import Reveal from "./Reveal";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "Java", "JavaScript", "SQL", "VHDL"],
  },
  {
    category: "Backend",
    skills: ["Python (FastAPI)", "JavaScript (Node.js)"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Flutter", "HTML", "Tailwind CSS"],
  },
  {
    category: "Database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "ER Modeling",
      "Schema Design & Normalization",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions (CI/CD)",
      "GHCR",
      "ArgoCD",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    category: "Systems & Other",
    skills: ["Linux", "Trivy", "Networking", "VHDL/FPGA design"],
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
