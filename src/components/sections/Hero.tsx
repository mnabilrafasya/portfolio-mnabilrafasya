import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, heroTechStack } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">

        {/* Role / location pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border font-mono text-xs text-text-secondary uppercase tracking-widest mb-8 animate-fade-up">
          <MapPin className="w-3 h-3 text-accent-teal shrink-0" />
          {profile.role}&nbsp;·&nbsp;{profile.location}
        </div>

        {/* H1 */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-text-primary"
          style={{ animationDelay: "80ms" }}
        >
          Building{" "}
          <span className="text-accent-terracotta">full-stack</span>
          <br />
          applications &amp; <span className="text-accent-terracotta">AI</span>
          &#8209;powered solutions
        </h1>

        {/* Subtext */}
        <p
          className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Computer Science undergraduate at{" "}
          <span className="text-text-primary font-semibold">
            {profile.university}
          </span>{" "}
          with hands-on experience in full-stack development and computer
          vision. Building practical software from public-service platforms to
          AI-powered image analysis.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {/*
            Primary CTA — hard-offset hover (§Elevation Level 2).
            This is the ONLY place this effect appears site-wide.
            Implementation: relative positioning + pseudo-element block behind button
            shifts −4px X / −4px Y on hover via group-hover.
          */}
          <div className="group relative inline-block">
            {/* Hard-offset shadow block — stays at 0,0. Contrasting color so it's visible behind the Terracotta button. */}
            <div
              className="absolute inset-0 rounded bg-text-primary"
              style={{ zIndex: 0 }}
              aria-hidden="true"
            />
            <Link
              href="/#projects"
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded bg-accent-terracotta text-white font-semibold text-sm border border-accent-terracotta transition-transform duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Secondary CTA — plain 1px border, no fill, no hard-offset */}
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border text-text-primary text-sm font-medium hover:border-accent-terracotta hover:text-accent-terracotta transition-colors duration-150"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Tech stack row */}
        <div
          className="flex flex-wrap justify-center gap-2 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest mr-2 self-center">
            Stack
          </span>
          {heroTechStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded border border-border bg-transparent text-text-secondary hover:border-accent-teal hover:text-accent-teal transition-colors duration-150"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
          scroll
        </span>
        <div className="w-px h-10 bg-border" />
      </div>
    </section>
  );
}
