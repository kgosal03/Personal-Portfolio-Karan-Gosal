"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { FileText } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Writing" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Left: Logo & Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Karan Gosal Homepage"
        >
          {/* Light Mode: display dark logo on light background */}
          <div className="relative h-7 w-10 dark:hidden">
            <Image
              src="/kg-dark.png"
              alt="Karan Gosal Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Dark Mode: display white logo on dark background */}
          <div className="relative hidden h-7 w-10 dark:block">
            <Image
              src="/kg-white.png"
              alt="Karan Gosal Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center/Right: Navigation Links & Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "text-foreground bg-muted font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Resume Link */}
            <a
              href="https://linkedin.com/in/kgosal03"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              title="View LinkedIn & Experience"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </nav>

          <div className="h-4 w-[1px] bg-border mx-1" aria-hidden="true" />

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
