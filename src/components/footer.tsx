import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 mt-16 py-8 text-sm text-muted-foreground transition-colors">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-foreground">Karan Gosal</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3 inline" />
            Victoria, BC & Atlanta, GA · M.S. CS @ Georgia Tech
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <Link
            href="https://github.com/kgosal03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/kgosal03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="mailto:karangosal9779@gmail.com"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
