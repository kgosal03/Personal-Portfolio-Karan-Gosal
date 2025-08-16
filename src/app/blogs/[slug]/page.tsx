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

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    `src/app/blogs/posts/${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

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
            return new Date(Number(year), Number(month) - 1, Number(day))
              .toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
          })()}
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

        {/* Blog content */}
        <div className="pt-6 prose dark:prose-invert">
          <MDXRemote source={content} />
        </div>
      </article>
    </section>
  );
}
