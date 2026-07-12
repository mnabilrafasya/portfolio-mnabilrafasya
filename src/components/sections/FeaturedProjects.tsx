import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-2">
          <SectionLabel index="03" label="Featured Work" />
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-violet-300 hover:gap-1.5 transition-all font-medium mb-4"
          >
            All Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Featured <span className="text-gradient-violet-cyan">Projects</span>
          </h2>
          <p className="text-text-secondary mb-12 text-sm lg:text-base">
            A selection of software engineering and artificial intelligence
            projects, ranging from production-ready web applications to computer
            vision research and machine learning implementations.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-violet-500/20 bg-violet-500/5 text-sm text-violet-300 font-medium"
          >
            All Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
