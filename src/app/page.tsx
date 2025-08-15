import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="flex justify-center pt-[40px]">
      <div className="w-[90%] sm:w-[60%] max-w-6xl mx-auto flex flex-col items-start justify-center space-y-6 px-8 text-left">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hey, I am Karan Gosal 👋
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
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/kgosal03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:karangosal9779@email.com"
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* Description */}
        <p className=" text-lg text-gray-600 dark:text-gray-300">
          I’m a Software Engineering student at the University of Victoria,
          specializing in Artificial Intelligence and Machine Learning. From
          the start, I’ve been fascinated by how technology can solve real
          problems and drive change. Through hands-on experience in full-stack
          development, performance optimization, and automated testing, I’ve
          built skills that help me create scalable, efficient solutions.
          <br /><br />
          What really motivates me is continuous learning and tackling complex
          challenges head-on. I’m passionate about collaborating with others and
          contributing to projects that make a real impact. I’m excited to grow
          my career by working with innovative teams and pushing the boundaries
          of what technology can do.
        </p>
      </div>
    </main>
  )
}
