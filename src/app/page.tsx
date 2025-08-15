import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-4xl font-bold">Welcome to My Landing Page</h1>
      <p className="text-lg text-gray-600">
        This is the home page of my Next.js + shadcn/ui site.
      </p>
      <div className="space-x-4">
        <Link href="/blogs">
          <Button variant="default">Go to Blogs</Button>
        </Link>
        <Link href="/projects">
          <Button variant="secondary">See Projects</Button>
        </Link>
      </div>
    </main>
  )
}
