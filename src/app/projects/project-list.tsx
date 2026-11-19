"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { Github, ExternalLink, Calendar, Layers } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
}

const categories = [
  "All",
  "Distributed & AI Systems",
  "Systems & Embedded",
  "Full-Stack & Cloud",
] as const;

type Category = (typeof categories)[number];

export function ProjectList({ projects }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/80 w-fit">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              activeCategory === category
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-all hover:border-border/80 hover:shadow-sm"
          >
            <div className="space-y-4">
              {/* Header: Title + Metric */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-foreground">
                    {project.title}
                  </h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                    {project.organization && <span>{project.organization}</span>}
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="h-3 w-3 inline" />
                      {project.date}
                    </span>
                    <span>•</span>
                    <span className="text-foreground/80">{project.category}</span>
                  </div>
                </div>

                {project.metric && (
                  <span className="inline-flex w-fit shrink-0 items-center rounded-md bg-muted px-2.5 py-1 text-xs font-mono font-medium text-foreground">
                    {project.metric}
                  </span>
                )}
              </div>

              {/* Architecture Bar */}
              {project.architecture && (
                <div className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground font-mono">
                  <Layers className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <span className="truncate">{project.architecture}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Technical Highlights / Engineering Tradeoffs */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2 pt-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Technical Highlights
                  </h3>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer: Tech tags + Action buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted/80 px-2.5 py-0.5 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
