import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import ProjectGallerySlider from "@/components/projects/ProjectGallerySlider";
import MetricsGrid from "@/components/projects/MetricsGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import { GitHubIcon, KaggleIcon } from "@/components/ui/BrandIcons";
import { getProjectBySlug, projects } from "@/data/projects";
import { categoryLabel, categoryColor } from "@/lib/utils";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.previewImage ? [project.previewImage] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);
  const hasLinks = Object.values(project.links).some(Boolean);

  return (
    <article className="pt-24 pb-24 sm:pt-28">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-violet-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span
            className={`tag-pill font-mono ${categoryColor[project.category]}`}
          >
            {categoryLabel[project.category]}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-xs text-text-muted">
            <Calendar className="w-3 h-3" />
            {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag-pill text-text-secondary  bg-white/3 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main media: gallery slider jika ada beberapa tampilan, kalau tidak cukup 1 thumbnail */}
        {project.gallery && project.gallery.length > 0 ? (
          <ProjectGallerySlider
            title={project.title}
            category={project.category}
            gallery={project.gallery}
          />
        ) : (
          <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-21/10 min-h-[260px] md:min-h-[360px] rounded-2xl overflow-hidden glass-card">
            <ProjectThumbnail
              title={project.title}
              category={project.category}
              image={project.previewImage}
              video={project.previewVideo}
              showPlayHint
            />
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-10">
            <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Result &amp; Metrics
            </h2>
            <MetricsGrid metrics={project.metrics} />
          </div>
        )}

        {project.longDescription && (
          <div className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              About This Project
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        )}

        {hasLinks && (
          <div className="flex flex-wrap gap-3 mt-12">
            {project.links.github && (
              <LinkButton
                href={project.links.github}
                icon={<GitHubIcon className="w-4 h-4" />}
                label="GitHub"
              />
            )}
            {project.links.kaggle && (
              <LinkButton
                href={project.links.kaggle}
                icon={<KaggleIcon className="w-4 h-4" />}
                label="Kaggle"
              />
            )}
            {project.links.colab && (
              <LinkButton
                href={project.links.colab}
                icon={<ArrowUpRight className="w-4 h-4" />}
                label="Colab Notebook"
              />
            )}
            {project.links.live && (
              <LinkButton
                href={project.links.live}
                icon={<ArrowUpRight className="w-4 h-4" />}
                label="Live Demo"
              />
            )}
          </div>
        )}
      </div>

      {related.length > 0 && (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
            Related Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function LinkButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 text-text-primary text-sm font-medium transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}
