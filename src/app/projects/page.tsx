import type { Metadata } from "next";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Semua Proyek",
  description: "Kumpulan proyek AI/ML, web development, dan sistem basis data terdistribusi.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-mono text-xs text-violet-400">Portfolio</span>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-2">
            All <span className="text-gradient-violet-cyan">Projects</span>
          </h1>
        </div>

        <ProjectsExplorer />
      </div>
    </section>
  );
}
