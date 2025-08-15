import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home",
  description: "Next.js + shadcn/ui site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          
          {/* NAVIGATION BAR */}
          <nav className="w-full border-b border-border">
            <div className="flex items-center justify-between w-[90%] sm:w-[60%] max-w-6xl mx-auto px-4 py-3">
              
              {/* Left: Links */}
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="px-4 py-2">Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/blogs" className="px-4 py-2">Blogs</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/projects" className="px-4 py-2">Projects</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Right: Dark Mode Toggle */}
              <ModeToggle />
            </div>
          </nav>

          {/* Page Content */}
          <main className="flex-1">{children}</main>
          {/* FOOTER */}
          <footer className="w-full border-t border-border mt-8">
            <div className="w-[90%] sm:w-[60%] max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Karan Gosal. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/kgosal03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/kgosal03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
