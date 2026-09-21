import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Chethana Gimhan",
  description:
    "Notes on cyber security, DevOps, and the systems I build and break.",
};

export default function Blog() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="flex max-w-xl flex-col items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Blog
        </h1>

        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Coming soon — notes on cyber security, DevOps, and the systems I
          build and break.
        </p>

        <Link
          href="/"
          className="mt-4 text-sm text-zinc-600 underline underline-offset-4 dark:text-zinc-400"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
