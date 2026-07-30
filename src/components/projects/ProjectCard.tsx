import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import { GitHubIcon, KaggleIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/types/project";
import { categoryLabel } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Card — §Components: md radius (12px), 1px solid border at 15% opacity,
    // no shadow, no hard-offset (reserved for primary CTA only)
    <div className="group rounded-md border border-text-primary/15 overflow-hidden flex flex-col h-full transition-colors duration-150 hover:border-text-primary/30">
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

        {/* Category tag — Deep Teal, mono uppercase per DS §Tags/Chips */}
        <span className="absolute top-3 left-3 tag-pill font-mono uppercase tracking-widest text-accent-teal border-accent-teal/30 bg-accent-teal/10">
          {categoryLabel[project.category]}
        </span>

        {project.gallery && project.gallery.length > 0 && (
          <span className="absolute top-3 right-3 tag-pill border-white/10 bg-black/40 text-white">
            <Images className="w-3 h-3" />
            {project.gallery.length}
          </span>
        )}

        <span className="absolute bottom-3 right-3 font-mono text-[11px] text-white/70 bg-black/30 px-1.5 py-0.5 rounded-sm">
          {project.year}
        </span>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-text-primary font-semibold mb-1.5 group-hover:text-accent-terracotta transition-colors duration-150">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags — mono, border only, no fill */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="tag-pill text-text-secondary border-border bg-transparent font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer — 1px divider at 10% opacity per DS §Lists */}
        <div className="flex items-center justify-between pt-3 border-t border-text-primary/10">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-teal transition-colors duration-150"
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
                className="text-text-secondary hover:text-accent-teal transition-colors duration-150"
                aria-label="Kaggle"
              >
                <KaggleIcon className="w-4 h-4" />
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-accent-terracotta group-hover:gap-1.5 transition-all duration-150"
          >
            See Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
