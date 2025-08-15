import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter(file => file.endsWith(".mdx"))
    .map(file => ({
      slug: file.replace(/\.mdx$/, "")
    }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), `src/app/blogs/posts/${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <article className="prose dark:prose-invert mx-auto py-10">
      <h1>{data.title}</h1>
      <p className="text-sm text-muted-foreground">{data.date} · {data.readTime}</p>
      <MDXRemote source={content} />
    </article>
  );
}