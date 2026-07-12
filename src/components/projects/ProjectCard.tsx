import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import { GitHubIcon, KaggleIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/types/project";
import { categoryLabel, categoryColor } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="block relative aspect-16/10"
      >
        <ProjectThumbnail
          title={project.title}
          category={project.category}
          image={project.previewImage}
          video={project.previewVideo}
          showPlayHint
        />

        <span
          className={`absolute top-3 left-3 tag-pill backdrop-blur-sm font-mono ${categoryColor[project.category]}`}
        >
          {categoryLabel[project.category]}
        </span>

        {project.gallery && project.gallery.length > 0 && (
          <span className="absolute top-3 right-3 tag-pill border-white/10 bg-black/40 backdrop-blur-sm text-white">
            <Images className="w-3 h-3" />
            {project.gallery.length}
          </span>
        )}

        <span className="absolute bottom-3 right-3 font-mono text-[11px] text-white/70 bg-black/30 backdrop-blur-sm px-1.5 py-0.5 rounded">
          {project.year}
        </span>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-text-primary font-semibold mb-1.5 group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="tag-pill text-text-muted border-subtle bg-fill-subtle font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-subtle">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-violet-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
            {project.links.kaggle && (
              <a
                href={project.links.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-cyan-400 transition-colors"
                aria-label="Kaggle"
              >
                <KaggleIcon className="w-4 h-4" />
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-violet-300 group-hover:gap-1.5 transition-all"
          >
            See Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
