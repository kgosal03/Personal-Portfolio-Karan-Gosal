import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    `src/app/blogs/posts/${params.slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <section className="w-[90%] sm:w-[50%] mx-auto">
      <article className="prose dark:prose-invert mx-auto py-10">
        {/* Blog title */}
        <h1 className="font-semibold text-3xl tracking-tight">
          {data.title}
        </h1>

        {/* Date + read time */}
        <div className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          {data.date} · {data.readTime}
        </div>

        {/* Custom blockquote */}
        <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
          <p>
            <em>
              This blog post was written during my co-op at the University of
              Victoria in 2024. The views expressed here are my own and do not
              necessarily reflect those of the University. See{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://arcsoft.uvic.ca/log/2024-02-09-selenium-web-testing/"
              >
                here
              </a>{" "}
              for the original post.
            </em>
          </p>
        </blockquote>

        {/* MDX content */}
        <MDXRemote source={content} />
      </article>
    </section>
  );
}
