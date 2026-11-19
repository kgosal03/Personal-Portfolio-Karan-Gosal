import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Writing",
  description:
    "Technical articles, engineering deep dives, and system exploration notes by Karan Gosal.",
  openGraph: {
    title: "Technical Writing | Karan Gosal",
    description:
      "Technical articles, engineering deep dives, and system exploration notes by Karan Gosal.",
  },
};

export default function BlogsPage() {
  const blogPosts = getBlogPosts();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Writing
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">
          In-depth guides, architectural analyses, and engineering explorations
          covering distributed caching, containerization, real-time telemetry, and web systems.
        </p>
      </header>

      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block rounded-xl border border-border bg-card p-5 transition-all hover:bg-muted/40 hover:border-border/80 shadow-xs"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{post.title}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
              </h2>

              <span className="shrink-0 text-xs font-mono text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}{" "}
                · {post.readTime}
              </span>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
