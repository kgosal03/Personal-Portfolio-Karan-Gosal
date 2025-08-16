import { Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { getBlogPosts } from "@/lib/getBlogPosts"; // Make sure this returns sorted posts

export default function Home() {
  const blogPosts = getBlogPosts().slice(0, 4); // ✅ latest 4 posts

  return (
    <main className="flex justify-center pt-[40px]">
      <div className="w-[90%] sm:w-[50%] max-w-6xl mx-auto flex flex-col items-start justify-center space-y-6 px-8 text-left">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold">
          Hey, I am Karan Gosal
        </h1>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/kgosal03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:karangosal9779@email.com"
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/kgosal03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Big Avatar */}
        <Avatar className="w-48 h-48 border-4 border-border shadow-lg mx-auto">
          <AvatarImage
            src="/karan.png"
            alt="Karan Gosal"
            className="object-cover"
          />
          <AvatarFallback>KG</AvatarFallback>
        </Avatar>

        {/* Description */}
        <p className=" text-lg font-light text-black dark:text-gray-300">
          I’m a Software Engineering student at the University of Victoria,
          specializing in Artificial Intelligence and Machine Learning,
          graduating in December 2025. From the start, I’ve been fascinated
          by how technology can solve real problems and drive change. Through
          hands-on experience in full-stack development, performance optimization,
          and automated testing, I’ve built skills that help me create scalable,
          efficient solutions.
          <br /><br />
          What really motivates me is continuous learning and tackling complex
          challenges head-on. I’m passionate about collaborating with others and
          contributing to projects that make a real impact. I’m excited to grow
          my career by working with innovative teams and pushing the boundaries
          of what technology can do.
        </p>

        {/* Divider */}
        <div className="my-8 w-full border-t-2"></div>

        {/* Latest Blog Posts */}
        <h1 className="text-xl sm:text-3xl font-bold">Latest Blog Posts</h1>
        <div className="grid gap-6 w-full">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="block rounded-xl border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">{post.title}</div>
                <div className="text-sm text-muted-foreground tabular-nums">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })} · {post.readTime}
                </div>
              </div>
              <div className="p-6 pt-0 text-muted-foreground">{post.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
