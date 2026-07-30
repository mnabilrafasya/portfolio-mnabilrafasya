import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono max-[350px]:text-[8.5px] max-[400px]:text-[9.5px] text-[11px] md:text-xs text-text-secondary">
          <span className="text-accent-terracotta">©</span>{" "}
          {new Date().getFullYear()} {profile.name} ·{" "}
          <span className="text-text-secondary">{profile.role}</span>
        </p>

        <div className="flex items-center gap-4">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-terracotta transition-colors duration-150"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-teal transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="text-text-secondary hover:text-accent-terracotta transition-colors duration-150"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
