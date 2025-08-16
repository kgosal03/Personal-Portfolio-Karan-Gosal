import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
  title: string;
  date: string;
  readTime: string;
  description: string;
  slug: string;
};

export function getBlogPosts(): BlogPostMeta[] {
  const postsDir = path.join(process.cwd(), "src/app/blogs/posts");

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        ...data,
        slug: file.replace(/\.mdx$/, ""),
      } as BlogPostMeta;
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
