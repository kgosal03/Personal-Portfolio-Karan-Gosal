import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectList } from "./project-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by Karan Gosal spanning distributed systems, AI infrastructure, real-time embedded kernels, and cloud architectures.",
  openGraph: {
    title: "Projects | Karan Gosal",
    description:
      "Engineering projects spanning distributed systems, AI infrastructure, real-time embedded kernels, and cloud architectures.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Engineering Projects
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">
          A collection of systems, infrastructure pipelines, and embedded firmware
          projects built with an emphasis on reliability, performance, and deterministic behavior.
        </p>
      </header>

      <ProjectList projects={projects} />
    </div>
  );
}
