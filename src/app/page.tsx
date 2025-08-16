import { Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { getBlogPosts } from "@/lib/getBlogPosts";
import Image from "next/image";

export default function Home() {
  const blogPosts = getBlogPosts().slice(0, 2);

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
        <p className="text-lg font-light text-black dark:text-gray-300">
          I’m a Software Engineering student at the <b>University of Victoria</b>,
          specializing in <b>Artificial Intelligence</b> and <b>Machine Learning</b>,
          graduating in <b>December 2025</b>. From the start, I’ve been fascinated
          by how technology can <b>solve real problems</b> and <b>drive change</b>. 
          Through hands-on experience in <b>full-stack development</b>, 
          <b> performance optimization</b>, and <b>automated testing</b>, 
          I’ve built skills that help me create <b>scalable, efficient solutions</b>.
          <br /><br />
          What really motivates me is <b>continuous learning</b> and tackling 
          <b> complex challenges</b> head-on. I’m passionate about 
          <b> collaborating with others</b> and contributing to projects that 
          <b> make a real impact</b>. I’m excited to grow my career by working 
          with <b>innovative teams</b> and pushing the boundaries of what 
          <b> technology can do</b>.
        </p>
        {/* Divider */}
        <div className="my-8 w-full border-t-2"></div>

        {/* Education Section */}
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mt-8">
         Education
        </h1>
        <div className="space-y-6 w-full">
          {/* Education Item */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Image
                src="/work-education/uvic.png"
                alt="University of Victoria"
                width={56}
                height={56}
                className="rounded-lg object-contain border"
              />
              <div>
                <div className="font-semibold">Bachelor of Software Engineering</div>
                <div className="text-muted-foreground">University of Victoria</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Sept 2021 – Dec 2025</div>
          </div>
        </div>
    

        {/* Work Section */}
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
         Work
        </h1>
        <div className="space-y-6 w-full">
          {/* Rivos */}
          <div className="flex items-center justify-between w-full">
            {/* Left: Image + Details */}
            <div className="flex items-center gap-4">
              <Image
                src="/work-education/rivos.png"
                alt="rivos"
                width={56}
                height={56}
                className="rounded-lg object-contain border"
              />
              <div>
                <div className="font-semibold">AI Software Engineer Co-op</div>
                <div className="text-muted-foreground">Rivos Inc.</div>
              </div>
            </div>
            {/* Right: Time Period */}
            <div className="text-sm text-muted-foreground">Sept 2025 – Dec 2025</div>
          </div>

          {/* UVic */}
          <div className="flex items-center justify-between w-full">
            {/* Left: Image + Details */}
            <div className="flex items-center gap-4">
              <Image
                src="/work-education/uvic.png"
                alt="University of Victoria"
                width={56}
                height={56}
                className="rounded-lg object-contain border"
              />
              <div>
                <div className="font-semibold">Full-Stack Developer Co-op</div>
                <div className="text-muted-foreground">Advanced Research Computing Dev Team</div>
              </div>
            </div>
            {/* Right: Time Period */}
            <div className="text-sm text-muted-foreground">Aug 2023 – April 2024</div>
          </div>

          {/* VertiGIS */}
          <div className="flex items-center justify-between w-full">
            {/* Left: Image + Details */}
            <div className="flex items-center gap-4">
              <Image
                src="/work-education/vertigis.png"
                alt="VertiGIS"
                width={56}
                height={56}
                className="rounded-lg object-contain border"
              />
              <div>
                <div className="font-semibold">Quality Assurance Analyst Co-op</div>
                <div className="text-muted-foreground">VertiGIS</div>
              </div>
            </div>
            {/* Right: Time Period */}
            <div className="text-sm text-muted-foreground">May 2023 – Aug 2023</div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 w-full border-t-2"></div>

        {/* Latest Blog Posts */}
        <h1 className="text-xl sm:text-2xl font-bold">Latest Blog Posts</h1>
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
