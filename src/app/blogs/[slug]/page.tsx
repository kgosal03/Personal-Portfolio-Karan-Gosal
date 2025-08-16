import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import BackToTopButton from "@/components/BackToTopButton";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");
  const files = fs.readdirSync(postsDir);

  // Load all posts & sort by date
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // ✅ Find current post index
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  // ✅ Load current post content
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <section className="w-[90%] sm:w-[50%] max-w-6xl mx-auto flex flex-col items-start justify-center space-y-6 px-8 pt-[40px]">
      <article className="prose dark:prose-invert max-w-full">
        {/* Blog title */}
        <h1 className="font-semibold text-3xl tracking-tight">
          {data.title}
        </h1>

        {/* Date */}
        <div className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          {(() => {
            const [year, month, day] = data.date.split("-");
            return new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            );
          })()}
        </div>

        {/* Blog content */}
        <div className="pt-6 prose dark:prose-invert">
          <MDXRemote source={content} />
        </div>
      </article>

      {/* Prev / Next navigation */}
      <div className="flex justify-between w-full mt-12 border-t pt-6 text-sm">
        {prevPost ? (
          <Link
            href={`/blogs/${prevPost.slug}`}
            className="text-primary hover:underline"
          >
            ← {prevPost.title}
          </Link>
        ) : <span />}

        {nextPost ? (
          <Link
            href={`/blogs/${nextPost.slug}`}
            className="text-primary hover:underline"
          >
            {nextPost.title} →
          </Link>
        ) : <span />}
      </div>
      {/* Back to top button */}
      <BackToTopButton />
    </section>
  );
}
