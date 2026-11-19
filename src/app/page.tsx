import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Cpu,
  Layers,
  Network,
  ExternalLink,
} from "lucide-react";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { projects } from "@/data/projects";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Georgia Institute of Technology",
    specialization: "Computing Systems · Part-time",
    date: "Aug 2026 – Expected 2028",
    logo: "/work-education/gatech.png",
    details:
      "Focusing on operating systems, distributed computing, memory hierarchies, and high-performance computer architectures.",
  },
  {
    degree: "Bachelor of Software Engineering (Co-op)",
    school: "University of Victoria",
    specialization: "Artificial Intelligence & Machine Learning",
    achievements: "GPA: 8.77/9.0 · With Distinction · Dean's List",
    date: "Sept 2021 – May 2026",
    logo: "/work-education/uvic.png",
    details:
      "Graduated with distinction. Coursework in Distributed Systems, Real-Time Embedded Systems, Operating Systems, Computer Architecture, and Machine Learning.",
  },
];

const experience = [
  {
    title: "AI Software Engineer Intern",
    organization: "Rivos Inc. (acquired by Meta)",
    date: "Sept 2025 – Dec 2025",
    logo: "/work-education/rivos.png",
    description:
      "Engineered high-performance AI inference infrastructure and compiler validation pipelines, profiling execution latencies across silicon architectures.",
  },
  {
    title: "Full-Stack Developer Intern",
    organization: "Advanced Research Computing, University of Victoria",
    date: "Aug 2023 – Apr 2024",
    logo: "/work-education/uvic.png",
    description:
      "Built internal research platforms, optimized Redis caching layers for high-throughput institutional applications, and implemented audit logging systems.",
  },
  {
    title: "Quality Assurance Analyst Intern",
    organization: "VertiGIS",
    date: "May 2023 – Aug 2023",
    logo: "/work-education/vertigis.png",
    description:
      "Developed automated end-to-end regression test suites for enterprise geospatial applications, diagnosing rendering edge cases and API latency regressions.",
  },
];

const focusAreas = [
  {
    icon: Network,
    title: "Distributed Systems & Cloud",
    description:
      "Designing fault-tolerant architectures, consensus protocols, high-throughput message streaming, and scalable backend infrastructure.",
  },
  {
    icon: Layers,
    title: "AI & ML Infrastructure",
    description:
      "Building high-scale RAG pipelines over petabyte datasets, model inference optimization, vector indexing, and transformer fine-tuning.",
  },
  {
    icon: Cpu,
    title: "Systems & Embedded Firmware",
    description:
      "Developing deterministic preemptive schedulers with FreeRTOS, memory-constrained firmware in C, and hardware peripheral drivers.",
  },
];

export default function Home() {
  const latestPosts = getBlogPosts().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-5 py-10 sm:px-8 sm:py-16">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            M.S. CS @ Georgia Tech · ex-Meta/Rivos
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Karan Gosal
          </h1>

          <p className="text-lg font-medium text-foreground/90 leading-snug">
            Software Engineer specializing in{" "}
            <span className="text-foreground underline decoration-border decoration-2 underline-offset-4">
              Computing Systems
            </span>{" "}
            &{" "}
            <span className="text-foreground underline decoration-border decoration-2 underline-offset-4">
              Distributed Infrastructure
            </span>
            .
          </p>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            I build reliable, high-performance software at the intersection of
            distributed infrastructure, AI systems, and low-level computing.
            Currently pursuing an M.S. in Computer Science at{" "}
            <strong className="text-foreground font-semibold">Georgia Tech</strong>,
            with previous experience engineering AI inference infrastructure at{" "}
            <strong className="text-foreground font-semibold">
              Rivos (acquired by Meta)
            </strong>.
          </p>

          {/* Social Links & Resume CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/kgosal03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/kgosal03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:karangosal9779@gmail.com"
              aria-label="Send email"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="relative shrink-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl border-2 border-border shadow-sm sm:h-36 sm:w-36">
            <Image
              src="/karan.png"
              alt="Karan Gosal"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 112px, 144px"
              priority
            />
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING PILLARS */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Engineering Focus
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="rounded-xl border border-border/80 bg-card/60 p-4 shadow-xs transition-all hover:border-border"
              >
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span>{area.title}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="border-border/60" />

      {/* EXPERIENCE SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.organization} className="flex items-start gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-card p-1">
                <Image
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-center">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm font-medium text-foreground/80">
                  {item.organization}
                </p>

                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border/60" />

      {/* EDUCATION SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.school} className="flex items-start gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-card p-1">
                <Image
                  src={item.logo}
                  alt={`${item.school} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-center">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm font-medium text-foreground/80">
                  {item.school}
                </p>

                <p className="text-xs font-medium text-foreground/70">
                  {item.specialization}
                  {item.achievements && ` · ${item.achievements}`}
                </p>

                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border/60" />

      {/* FEATURED PROJECTS SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Featured Systems Projects
            </h2>
            <p className="text-xs text-muted-foreground">
              Selected architectural highlights and distributed engineering systems
            </p>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>View all ({projects.length})</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-4">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:border-border/80 hover:shadow-sm"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-foreground text-base">
                  {project.title}
                </h3>
                {project.metric && (
                  <span className="inline-flex w-fit items-center rounded-md bg-muted px-2 py-0.5 text-xs font-mono font-medium text-foreground/90">
                    {project.metric}
                  </span>
                )}
              </div>

              {project.organization && (
                <p className="text-xs font-medium text-muted-foreground mt-0.5">
                  {project.organization} · {project.date}
                </p>
              )}

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>Source Code</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border/60" />

      {/* RECENT TECHNICAL WRITING SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Technical Writing
            </h2>
            <p className="text-xs text-muted-foreground">
              Engineering guides, architecture notes, and systems explorations
            </p>
          </div>

          <Link
            href="/blogs"
            className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>View all</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block rounded-xl border border-border bg-card p-4 transition-all hover:bg-muted/40 hover:border-border/80"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className="shrink-0 text-xs font-mono text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
