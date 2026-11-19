import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";
import { getBlogPosts } from "@/lib/getBlogPosts";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");
  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { title: "Post Not Found" };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Karan Gosal`,
      description: data.description,
      type: "article",
      publishedTime: data.date,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");
  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  // Load all posts for prev / next links
  const posts = getBlogPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-16">
      {/* Back to Writing */}
      <nav aria-label="Breadcrumb">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to all writing</span>
        </Link>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(data.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </span>
          {data.readTime && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {data.readTime}
              </span>
            </>
          )}
        </div>
      </header>

      {/* Article Content */}
      <article className="prose dark:prose-invert max-w-full text-foreground/90 leading-relaxed">
        <MDXRemote source={content} />
      </article>

      {/* Prev / Next Navigation Cards */}
      <nav
        aria-label="Previous and Next Articles"
        className="mt-8 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-2"
      >
        {prevPost ? (
          <Link
            href={`/blogs/${prevPost.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-all hover:bg-muted/40 hover:border-border/80"
          >
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              <span>Previous Article</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {prevPost.title}
            </p>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextPost ? (
          <Link
            href={`/blogs/${nextPost.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 text-right transition-all hover:bg-muted/40 hover:border-border/80"
          >
            <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
              <span>Next Article</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {nextPost.title}
            </p>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </nav>

      <BackToTopButton />
    </div>
  );
}
