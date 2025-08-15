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
          <NavigationMenu className="p-4 flex justify-between items-center">
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

            {/* Dark Mode Toggle */}
            <ModeToggle />
          </NavigationMenu>

          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
