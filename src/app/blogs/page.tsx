import Link from "next/link";
import { getBlogPosts } from "@/lib/getBlogPosts";

export default function BlogsPage() {
  const blogPosts = getBlogPosts();

  return (
    <section className="w-[90%] sm:w-[60%] max-w-6xl mx-auto flex flex-col items-start justify-center space-y-6 px-8 text-left pt-[40px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold text-2xl tracking-tighter">All Blog Posts</h1>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6">
        {blogPosts.map((post, idx) => (
          <Link
            key={idx}
            href={`/blogs/${post.slug}`}
            className="block rounded-xl border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">{post.title}</div>
              <div className="text-sm text-muted-foreground tabular-nums">
                {post.date} · {post.readTime}
              </div>
            </div>
            <div className="p-6 pt-0 text-muted-foreground">
              {post.description}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
