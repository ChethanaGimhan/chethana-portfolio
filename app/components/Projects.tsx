import Link from "next/link";
import { projects } from "../lib/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 80}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-solid border-black/[.08] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/[.145] dark:hover:shadow-black/40">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xl font-semibold text-foreground hover:underline"
                >
                  {project.title}
                </Link>

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

                <div className="mt-auto flex items-center gap-4 text-sm font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-foreground underline underline-offset-4"
                  >
                    Read more →
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 underline underline-offset-4 dark:text-zinc-400"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
