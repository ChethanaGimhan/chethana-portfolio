type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "AgriSenseNet (CropWise)",
    description:
      "Large-scale team project for a smart agriculture platform with a dashboard, backend, and streaming data pipeline. I worked as containerization engineer — writing Dockerfiles and publishing images to GitHub Container Registry for the backend and dashboard services.",
    tech: ["Docker", "GHCR", "GitHub", "DevOps"],
    link: "https://github.com/AgriSenseNet",
  },
  {
    title: "HR Interview Automation System",
    description:
      "A FastAPI + PostgreSQL backend for automating parts of the interview process, containerized with Docker. CI runs on GitHub Actions, including a Trivy vulnerability scan before images are published to GHCR.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Trivy"],
    link: "https://github.com/ChethanaGimhan/hr-interview-system",
  },
  {
    title: "RouteX — Bus Tracking App",
    description:
      "A Flutter mobile app for finding and booking buses — search, a booking flow, a bus details page, and a responsive UI built with bottom navigation and a floating action button.",
    tech: ["Flutter", "Dart"],
    link: "https://github.com/Blazer2020/RouteX",
  },
  {
    title: "Nano Processor",
    description:
      "A small processor implemented from scratch in VHDL for a computer architecture course — hardware logic and digital system design at the register-transfer level.",
    tech: ["VHDL", "Digital Design"],
  },
  {
    title: "Security Testing — OWASP Mutillidae II",
    description:
      "Hands-on offensive security work against the intentionally vulnerable OWASP Mutillidae II app: intercepting and manipulating HTTP traffic and exploiting SQL injection with Burp Suite.",
    tech: ["Burp Suite", "OWASP Mutillidae II", "SQL Injection"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-4 rounded-2xl border border-solid border-black/[.08] p-6 dark:border-white/[.145]"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-solid border-black/[.08] px-3 py-1 text-xs text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-medium text-foreground underline underline-offset-4"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
