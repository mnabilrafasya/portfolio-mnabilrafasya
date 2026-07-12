"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { categoryLabel } from "@/lib/utils";
import { ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";

const categories = Array.from(
  new Set(projects.map((p) => p.category)),
) as ProjectCategory[];

export default function ProjectsExplorer() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>(
    "all",
  );

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <FilterPill
          active={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
          label={`Semua (${projects.length})`}
        />
        {categories.map((cat) => (
          <FilterPill
            key={cat}
            active={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
            label={`${categoryLabel[cat]} (${projects.filter((p) => p.category === cat).length})`}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-muted text-center py-20">
          There are no projects in this category yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
        active
          ? "bg-violet-500/15 border-violet-400/40 text-violet-200"
          : "border-subtle bg-fill-subtle text-text-secondary hover:border-violet-500/20 hover:text-text-primary",
      )}
    >
      {label}
    </button>
  );
}
