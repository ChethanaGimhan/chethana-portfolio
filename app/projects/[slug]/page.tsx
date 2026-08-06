import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project ? `${project.title} | Chethana Gimhan` : "Project not found",
    description: project?.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Plain <a>, not next/link — see Nav.tsx for why. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/#projects"
          className="text-sm text-zinc-600 underline underline-offset-4 dark:text-zinc-400"
        >
          ← Back to projects
        </a>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          {project.status && (
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-700 dark:text-amber-400">
              {project.status}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-solid border-black/[.08] px-3 py-1 text-xs text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              The Challenge
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {project.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              My Approach
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {project.approach}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {project.status ? "Current Status" : "Outcome"}
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {project.outcome}
            </p>
          </section>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </main>
  );
}
