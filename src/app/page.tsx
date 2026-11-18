
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { getBlogPosts } from "@/lib/getBlogPosts";
import Image from "next/image";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Georgia Institute of Technology",
    specialization: "Computing Systems · Part-time",
    date: "Aug 2026 – Expected 2028",
    logo: "/work-education/gatech.png",
  },
  {
    degree: "Bachelor of Software Engineering (Co-op)",
    school: "University of Victoria",
    specialization: "Artificial Intelligence & Machine Learning",
    achievements: "GPA: 8.77/9.0 · With Distinction · Dean's List",
    date: "Sept 2021 – May 2026",
    logo: "/work-education/uvic.png",
  },
];

const experience = [
  {
    title: "AI Software Engineer Intern",
    organization: "Rivos Inc. (acquired by Meta)",
    date: "Sept 2025 – Dec 2025",
    logo: "/work-education/rivos.png",
  },
  {
    title: "Full-Stack Developer Intern",
    organization: "Advanced Research Computing, University of Victoria",
    date: "Aug 2023 – Apr 2024",
    logo: "/work-education/uvic.png",
  },
  {
    title: "Quality Assurance Analyst Intern",
    organization: "VertiGIS",
    date: "May 2023 – Aug 2023",
    logo: "/work-education/vertigis.png",
  },
];

const projects = [
  {
    title: "AI-Powered Assistant",
    organization: "Ocean Networks Canada",
    description:
      "A RAG-based AI assistant with BERT-powered intent classification for routing requests to retrieval and backend services.",
    tags: ["Python", "BERT", "RAG", "NLP"],
  },
  {
    title: "Financial Operations Platform",
    organization: "G.G. Finance Co.",
    description:
      "A full-stack financial platform that digitizes ledger workflows with role-based access, dashboards, and reporting.",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
];

export default function Home() {
  const blogPosts = getBlogPosts().slice(0, 2);

  return (
    <main className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 sm:px-8">

        {/* Introduction */}
        <section className="space-y-5">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hey, I&apos;m Karan Gosal
          </h1>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/kgosal03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="mailto:karangosal9779@gmail.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/kgosal03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <Avatar className="mx-auto h-40 w-40 border-4 border-border shadow-md sm:h-48 sm:w-48">
            <AvatarImage
              src="/karan.png"
              alt="Karan Gosal"
              className="object-cover"
            />
            <AvatarFallback>KG</AvatarFallback>
          </Avatar>

          <div className="space-y-4 text-base leading-7 text-foreground/90 sm:text-lg">
            <p>
              I&apos;m a <strong>Software Engineer</strong> and
              M.S. Computer Science student at{" "}
              <strong>Georgia Tech</strong>, specializing in{" "}
              <strong>Computing Systems</strong>.
            </p>

            <p>
              My interests include <strong>distributed systems</strong>,{" "}
              <strong>backend engineering</strong>,{" "}
              <strong>cloud infrastructure</strong>, and{" "}
              <strong>AI/ML systems</strong>. I enjoy understanding
              how complex systems work under the hood, solving
              performance and scalability challenges, and building
              reliable software.
            </p>

            <p>
              Previously, I worked on AI inference infrastructure
              at <strong>Rivos (acquired by Meta)</strong>,
              along with full-stack development and software
              engineering projects at the University of Victoria.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Education
          </h2>

          <div className="space-y-7">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex items-start gap-4"
              >
                <Image
                  src={item.logo}
                  alt={`${item.school} logo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-lg border object-contain p-1"
                />

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
                    <h3 className="font-semibold leading-snug">
                      {item.degree}
                    </h3>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.specialization}
                  </p>

                  {item.achievements && (
                    <p className="text-sm text-muted-foreground">
                      {item.achievements}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Experience
          </h2>

          <div className="space-y-7">
            {experience.map((item) => (
              <div
                key={item.organization}
                className="flex items-start gap-4"
              >
                <Image
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-lg border object-contain p-1"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
                    <h3 className="font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Featured Projects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Featured Projects
          </h2>

          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border bg-card p-5"
              >
                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {project.organization}
                </p>

                <p className="mt-3 text-sm leading-6">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Blog */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Latest Blog Posts
            </h2>

            <Link
              href="/blogs"
              className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              View all
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block rounded-xl border bg-card p-5 transition-colors hover:bg-accent"
              >
                <h3 className="font-semibold">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    }
                  )}{" "}
                  · {post.readTime}
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
